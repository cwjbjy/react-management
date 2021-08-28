let auth_url = null; //权限接口
let img_url = null; //图片接口
let ws = null; //WebSocket

if (process.env.NODE_ENV === 'development') {
    auth_url = '//127.0.0.1:9000/api';
    img_url = '//127.0.0.1:9000/images/'
    ws = 'ws://127.0.0.1:3999'
} else {
    auth_url = 'https://wen.cwjbjy.online/api';
    img_url = 'https://wen.cwjbjy.online/images/'
    ws = 'wss://wss.cwjbjy.online'
}

export {
    auth_url,
    img_url,
    ws
}