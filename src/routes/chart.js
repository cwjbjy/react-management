import {lazy} from "react";

const Chart = lazy(()=>import(/* webpackChunkName: "Chart" */'@/pages/chart/index.jsx'))


const chart = [
    {
        path:'/home/baseEcharts',
        Component:Chart,
        auth:true,
        meta:{
            title:'基础图表'
        }
    },
]

export default chart