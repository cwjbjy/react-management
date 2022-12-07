import { getTime, browserType } from './comFunc.js';
import { onRouterChange } from './onRouter';

import API from '@/apis';
class Track {
  constructor() {
    this.info = {
      data: {}, //用户数据
    };
  }
  start() {
    if (this.started) {
      return;
    }
    this.started = true;
    this.addProperties({
      $uid: '用户ID',
      $deviceType: browserType(), //获取设备类型
      $url: window.location.href,
      $referer: document.referrer,
      $screen_width: window.screen.width,
      $screen_height: window.screen.height,
      $referer_title: document.title,
    });
    let visitTime = Date.now();
    onRouterChange((referrer) => {
      const currentTime = Date.now();
      this.addProperties({
        $url: window.location.href,
        $referer: referrer,
        $referer_title: document.title,
        $delay: currentTime - visitTime,
      });
      visitTime = currentTime;
    });
    this.addDomEventHandler();
  }
  /* 追踪单页面 */
  trackSinglePage() {
    if (!this.started) {
      throw new Error('[Track Error]: Track has not started yet, please use `track.start()` to start Track');
    }
    this.send('$pageview');
  }
  send(event, props) {
    if (event !== '$pageview') {
      delete this.info.data['$delay'];
    }
    if (event === '$pageview') {
      delete this.info['$element_name'];
    }
    Object.assign(
      this.info,
      {
        $event: event,
        $eventTime: Date.now(), //触发埋点的时间戳
        $localTime: getTime(), //获取用户本地时间
      },
      props,
    );
    /* 加密发送数据 */
    API.getUserInfo({ data: JSON.stringify(this.info) });
  }
  addProperties(props) {
    Object.assign(this.info.data, props);
  }
  addDomEventHandler() {
    ['click', 'change', 'submit'].forEach((e) => {
      document.addEventListener(e, this.trackEvent.bind(this));
    });
  }
  trackEvent(e) {
    let parent = e.target;
    while (parent) {
      if (this.shouldTrackDomEvent(parent, e.type)) {
        this.trackClick(e.type, parent);
        break;
      }
      parent = parent.parentNode;
    }
  }
  shouldTrackDomEvent(el, eventType) {
    if (!el.tagName) return false;
    const tagName = el.tagName.toLowerCase();
    switch (tagName) {
      case 'form':
        return eventType === 'submit';
      case 'button':
        return eventType === 'click';
      case 'input':
        if (['button', 'submit'].includes(el.getAttribute('type'))) {
          return eventType === 'click';
        } else {
          return eventType === 'change';
        }
      case 'select':
      case 'textarea':
        return eventType === 'change';
      default:
        return false;
    }
  }
  trackClick(event, target) {
    this.send(`$${event}`, { $element_name: target.textContent });
  }
}

export default new Track();
