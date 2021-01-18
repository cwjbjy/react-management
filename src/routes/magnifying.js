import {lazy} from "react";
const Magnifying = lazy(()=>import(/* webpackChunkName: "magnifying" */'@/pages/magnifying/index.jsx'))

const magnifying = [
    {
        path:'/home/magnifying',
        Component:Magnifying,
        auth:true,
        meta:{
            title:'放大镜'
        }
    },
]

export default magnifying