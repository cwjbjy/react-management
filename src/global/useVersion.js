import { notification, Button } from 'antd';
import axios from 'axios';
import { useEffect, useRef } from 'react';

let uploadNotificationShow = false;

const close = () => {
  uploadNotificationShow = false;
};

const onRefresh = (new_hash) => {
  close();
  // 更新localStorage版本号信息
  window.localStorage.setItem('vs', new_hash);
  // 刷新页面
  window.location.reload(true);
};

const openNotification = (new_hash) => {
  uploadNotificationShow = true;
  const btn = (
    <Button type="primary" size="small" onClick={() => onRefresh(new_hash)}>
      确认更新
    </Button>
  );
  notification.open({
    message: '版本更新提示',
    description: '检测到系统当前版本已更新，请刷新后使用。',
    btn,
    duration: 0,
    onClose: close,
  });
};

const getHash = () => {
  if (!uploadNotificationShow) {
    // 在 js 中请求首页地址，这样不会刷新界面，也不会跨域
    axios.get(`${window.location.origin}/index.html?time=${new Date().getTime()}`).then((res) => {
      let new_hash = res.data && res.data.match(/\/static\/js\/main.(.*).js/);
      new_hash = new_hash ? new_hash[1] : null;
      let old_hash = localStorage.getItem('vs');
      if (!old_hash) {
        // 如果本地没有，则存储版本信息
        window.localStorage.setItem('vs', new_hash);
      } else if (new_hash && new_hash !== old_hash) {
        // 本地已有版本信息，但是和新版不同：版本更新，弹出提示
        openNotification(new_hash);
      }
    });
  }
};

const useVersion = () => {
  let timer = useRef();
  useEffect(() => {
    getHash();
    timer.current = setInterval(() => {
      getHash();
      // 10分钟检测一次
    }, 600000);
    return () => {
      clearInterval(timer.current);
    };
  }, []);
};

export default useVersion;
