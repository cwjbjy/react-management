
import {lazy} from "react";
const Login = lazy(()=>import(/* webpackChunkName: "Login" */ '@/pages/login/index.jsx'))

const login = [
    {
        path:'/login',
        Component:Login,
        auth:false,
        layout:'NONE',
        meta:{
            title:'登录'
        }
    },
]

export default login