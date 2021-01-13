import {lazy} from "react";

const Chart = lazy(()=>import(/* webpackChunkName: "Chart" */'@/pages/chart/index.jsx'))


const chart = [
    {
        path:'/baseEcharts',
        Component:Chart,
        auth:true,
        meta:{
            title:'图形页'
        }
    },
]

export default chart