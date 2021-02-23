let auth_url = null; //权限接口
let img_url = null; //图片接口

if (process.env.NODE_ENV === 'development') {
    auth_url = '//127.0.0.1:9000/api';
    img_url = '//127.0.0.1:9000/images/'
} else {
    auth_url = 'https://wen.cwjbjy.online/api';
    img_url = 'https://wen.cwjbjy.online/images/'
}

export {
    auth_url,
    img_url
}