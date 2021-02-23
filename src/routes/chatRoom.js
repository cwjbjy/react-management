import {lazy} from "react";
const ChatRoom = lazy(()=>import(/* webpackChunkName: "homePage" */'@/pages/chatRoom/index.jsx'))

const chatRoom = [
    {
        path:'/chatRoom',
        Component:ChatRoom,
        auth:true,
        meta:{
            title:'聊天室'
        }
    },
]

export default chatRoom