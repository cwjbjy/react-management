import { getTime, browserType } from './comFunc.js';
import { onRouterChange } from './onRouter';

import API from '@/apis';
class Track {
  constructor() {
    this.info = {};
  }
  start() {
    if (this.started) {
      return;
    }
    this.started = true;
    this.addProperties({
      vs: 'react-manage',
      deviceType: browserType(), //获取设备类型
      url: window.location.href,
      referer: document.referrer,
    });
    let visitTime = Date.now();
    onRouterChange((referrer) => {
      const currentTime = Date.now();
      this.addProperties({
        url: window.location.href,
        referer: referrer,
        delay: currentTime - visitTime,
      });
      visitTime = currentTime;
    });
  }
  /* 追踪单页面 */
  trackSinglePage() {
    if (!this.started) {
      throw new Error('[Track Error]: Track has not started yet, please use `track.start()` to start Track');
    }
    this.send();
  }
  send() {
    this.addProperties({
      localTime: getTime(),
    });

    /* 发送数据 */
    API.getUserInfo({ data: JSON.stringify(this.info) });
  }
  addProperties(props) {
    Object.assign(this.info, props);
  }
}

export default new Track();
