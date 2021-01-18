import {lazy} from "react";
const BaseTable = lazy(()=>import(/* webpackChunkName: "baseTable" */ '@/pages/baseTable/index.jsx'))

const pdf = [
    {
        path:'/baseTable',
        Component:BaseTable,
        auth:true,
        meta:{
            title:'基础表格'
        }
    },
]

export default pdf