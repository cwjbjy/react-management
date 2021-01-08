//获取当前时间
function getTime() {
    var date = new Date(); //实例一个时间对象；
    var year = date.getFullYear(); //获取系统的年；
    var month = date.getMonth() + 1; //获取系统月份，由于月份是从0开始计算，所以要加1
    var day = date.getDate(); //获取系统日
    var hour = date.getHours(); //获取系统时间
    var minute = date.getMinutes(); //分
    var second = date.getSeconds(); //秒
    if (month < 10) {
        month = '0' + month
    }
    if (day < 10) {
        day = '0' + day
    }
    if (hour < 10) {
        hour = '0' + hour
    }
    if (minute < 10) {
        minute = '0' + minute
    }
    if (second < 10) {
        second = '0' + second
    }
    let time = year + '-' + month + '-' + day + " " + hour + ':' + minute + ':' + second
    return time
}

//判断对象是否为空
function getIsObjectEmpty(obj) {
    //json对象都有单引号，所以判断的时候，也要加上单引号
    if (JSON.stringify(obj) !== '{}') {
        return true; //不为空对象
    }
    return false; //为空对象
}

//判断字符是否为空
function getIsStringEmpty(obj) {
    //判断是否为null时，两个等号即可,否则无法判断
    if (obj === "undefined" || obj == null || obj === "") {
        return true; //返回true，为空
    }
    return false; //返回false，不为空
}

export {getTime,getIsObjectEmpty,getIsStringEmpty}