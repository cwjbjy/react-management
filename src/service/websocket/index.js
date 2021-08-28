import WebsocketClass from './WebSocket'
import { message } from 'antd';
let WSInstance = null;

/**
 * 聊天室服务接口
 * 
*/

const insService = {
    joinMeeting({params="",closeCallBack=null}={}){
        WSInstance = new WebsocketClass({closeCallBack});
        WSInstance.connect(params).then(res=>{
            console.log('connect success');
            message.success("连接成功");
        }).catch(()=>{
            message.error("网络错误，请稍后重试");
        })
    },
    sendMessage(params){
        WSInstance.sendMessage({msg:params})
    },
    close(params){
        WSInstance.close(params).then(()=>{
            message.success("关闭成功");
        })
    }
}

export default insService