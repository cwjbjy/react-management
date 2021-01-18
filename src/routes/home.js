import {lazy} from "react";
const HomePage = lazy(()=>import(/* webpackChunkName: "homePage" */'@/pages/homePage/index.jsx'))

const homePage = [
    {
        path:'/home/firstItem',
        Component:HomePage,
        auth:true,
        meta:{
            title:'系统首页'
        }
    },
]

export default homePage