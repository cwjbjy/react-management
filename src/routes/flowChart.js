import { lazy } from "react";

const CommonChart = lazy(()=>import(/* webpackChunkName: "chart_common" */'@/pages/chart_common/index.jsx'))
const PositionChart = lazy(()=>import(/* webpackChunkName: "chart_position" */'@/pages/chart_position/index.jsx'))
const FoldChart = lazy(()=>import(/* webpackChunkName: "chart_fold" */'@/pages/chart_fold/index.jsx'))

const flowChart = [
    {
        path:'/commonChart',
        Component:CommonChart,
        auth:true,
        meta:{
            title:'一般流程图'
        }
    },
    {
        path:'/positionChart',
        Component:PositionChart,
        auth:true,
        meta:{
            title:'定位流程图'
        }
    },
    {
        path:'/foldChart',
        Component:FoldChart,
        auth:true,
        meta:{
            title:'折叠流程图'
        }
    }
]

export default flowChart