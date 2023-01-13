//获取当前时间
export function getTime() {
  var date = new Date(); //实例一个时间对象；
  var year = date.getFullYear(); //获取系统的年；
  var month = date.getMonth() + 1; //获取系统月份，由于月份是从0开始计算，所以要加1
  var day = date.getDate(); //获取系统日
  var hour = date.getHours(); //获取系统时间
  var minute = date.getMinutes(); //分
  var second = date.getSeconds(); //秒
  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }
  if (hour < 10) {
    hour = '0' + hour;
  }
  if (minute < 10) {
    minute = '0' + minute;
  }
  if (second < 10) {
    second = '0' + second;
  }
  let time = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
  return time;
}

//判断浏览器类型
export function browserType() {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
  //判断是否Opera浏览器
  var isOpera = userAgent.indexOf('Opera') > -1;
  //判断是否IE浏览器
  var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera;
  //判断是否IE的Edge浏览器
  var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;
  var isEdge = userAgent.indexOf('Edge') > -1 && !isIE;
  //判断是否Firefox浏览器
  var isFF = userAgent.indexOf('Firefox') > -1;
  //判断是否Safari浏览器
  var isSafari = userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') === -1;
  //判断Chrome浏览器
  var isChrome = userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1;

  if (isIE) {
    var reIE = new RegExp('MSIE (\\d+\\.\\d+);');
    reIE.test(userAgent);
    var fIEVersion = parseFloat(RegExp['$1']);
    if (fIEVersion === 7) return 'IE7';
    else if (fIEVersion === 8) return 'IE8';
    else if (fIEVersion === 9) return 'IE9';
    else if (fIEVersion === 10) return 'IE10';
    else return 'IE7以下'; //IE版本过低
  }
  if (isIE11) return 'IE11';
  if (isEdge) return 'Edge';
  if (isFF) return 'FF';
  if (isOpera) return 'Opera';
  if (isSafari) return 'Safari';
  if (isChrome) return 'Chrome';
}

//判断对象是否为空
export function getIsObjectEmpty(obj) {
  //json对象都有单引号，所以判断的时候，也要加上单引号
  if (JSON.stringify(obj) !== '{}') {
    return true; //不为空对象
  }
  return false; //为空对象
}

//判断字符是否为空
export function getIsStringEmpty(obj) {
  //判断是否为null时，两个等号即可,否则无法判断
  if (obj === 'undefined' || obj == null || obj === '') {
    return true; //返回true，为空
  }
  return false; //返回false，不为空
}
