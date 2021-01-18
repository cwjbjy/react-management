import {lazy} from "react";

const Chart = lazy(()=>import(/* webpackChunkName: "Chart" */'@/pages/chart/index.jsx'))


const chart = [
    {
        path:'/baseEcharts',
        Component:Chart,
        auth:true,
        meta:{
            title:'基础图表'
        }
    },
]

export default chart