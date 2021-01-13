let auth_url = null; //权限接口
let api_url = null; //api接口
let img_url = null;
if (process.env.NODE_ENV === 'development') {
    /* 开发环境 */
    auth_url = 'http://127.0.0.1:9000/api';
    api_url = '';
    img_url='http://127.0.0.1:9000/images/'
} else {
    /* 生产环境 */
    auth_url = 'https://wen.cwjbjy.online/api';
    api_url = ''
    img_url='https://wen.cwjbjy.online/images/'
}

export {auth_url,api_url,img_url}