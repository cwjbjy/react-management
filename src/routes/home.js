import {lazy} from "react";
const HomePage = lazy(()=>import(/* webpackChunkName: "homePage" */'@/pages/homePage/index.jsx'))

const homePage = [
    {
        path:'/firstItem',
        Component:HomePage,
        auth:true,
        meta:{
            title:'主页'
        }
    },
]

export default homePage