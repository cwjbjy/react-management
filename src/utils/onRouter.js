 /* 监听popstate和hashchange事件 */
export const addHashEvent = (cb) => {
  const hashEvent = "pushState" in window.history ? "popstate" : "hashchange";
  window.addEventListener(hashEvent, cb, false);
};

export const onRouterChange = (cb) => {
  let currentUrl = window.location.href;
  const historyPushState = window.history.pushState;
  const historyReplaceState = window.history.replaceState;
  /* 重写pushState与replaceState方法，已达到监听路由的目的 */
  window.history.pushState = function () {
    historyPushState.apply(window.history, arguments);
    cb(currentUrl);
    currentUrl = window.location.href;
  };
  window.history.replaceState = function () {
    historyReplaceState.apply(window.history, arguments);
    cb(currentUrl);
    currentUrl = window.location.href;
  };
  addHashEvent(() => {
    cb(currentUrl);
    currentUrl = window.location.href;
  });
};
