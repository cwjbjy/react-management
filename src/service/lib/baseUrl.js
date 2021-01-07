let auth_url = null; //权限接口
let api_url = null; //api接口

if (process.env.NODE_ENV === 'development') {
    /* 开发环境 */
    auth_url = 'http://localhost:9000/api';
    api_url = '/juhe'
} else {
    /* 生产环境 */
    auth_url = 'http://localhost:9000/api';
    api_url = ''
}

export {auth_url,api_url}