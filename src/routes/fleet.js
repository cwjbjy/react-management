import {lazy} from "react";

const FleetLine = lazy(()=>import(/* webpackChunkName: "fleetLine" */'@/pages/fleetLine/index.jsx'))


const chart = [
    {
        path:'/home/fleet',
        Component:FleetLine,
        auth:true,
        meta:{
            title:'模拟航线'
        }
    },
]

export default chart