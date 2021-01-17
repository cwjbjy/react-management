import {lazy} from 'react'
const DragList = lazy(()=>import(/* webpackChunkName: "DragList" */'@/pages/drag_list/index.jsx'))
const DragDialog = lazy(()=>import(/* webpackChunkName: "DragDialog" */'@/pages/drag_dialog/index.jsx'))

const Drag = [
    {
        path:'/dragList',
        Component:DragList,
        auth:true,
        meta:{
            title:'拖拽列表'
        }
    },
    {
        path:'/dragDialog',
        Component:DragDialog,
        auth:true,
        meta:{
            title:'图形页'
        }
    },
]

export default Drag