import {lazy} from "react";

const HomePage = lazy(()=>import(/* webpackChunkName: "homePage" */'@/pages/homePage/index.jsx'))
const FleetLine = lazy(()=>import(/* webpackChunkName: "fleetLine" */'@/pages/fleetLine/index.jsx'))
const PdfPreview = lazy(()=>import(/* webpackChunkName: "PdfPreview" */ '@/pages/pdfPreview/index.jsx'))
const BaseEchart = lazy(()=>import(/* webpackChunkName: "baseEchart" */'@/pages/baseEchart/index.jsx'))
const BaseTable = lazy(()=>import(/* webpackChunkName: "baseTable" */ '@/pages/baseTable/index.jsx'))
const DragList = lazy(()=>import(/* webpackChunkName: "DragList" */'@/pages/drag_list/index.jsx'))
const DragDialog = lazy(()=>import(/* webpackChunkName: "DragDialog" */'@/pages/drag_dialog/index.jsx'))
const I18n = lazy(()=>import(/* webpackChunkName: "I18n" */'@/pages/I18n/index.jsx'))
const CommonChart = lazy(()=>import(/* webpackChunkName: "chart_common" */'@/pages/chart_common/index.jsx'))
const PositionChart = lazy(()=>import(/* webpackChunkName: "chart_position" */'@/pages/chart_position/index.jsx'))
const FoldChart = lazy(()=>import(/* webpackChunkName: "chart_fold" */'@/pages/chart_fold/index.jsx'))
const ChatRoom = lazy(()=>import(/* webpackChunkName: "homePage" */'@/pages/chatRoom/index.jsx'))
const Magnifying = lazy(()=>import(/* webpackChunkName: "magnifying" */'@/pages/magnifying/index.jsx'))
const UserManage = lazy(()=>import(/* webpackChunkName: "userManage" */'@/pages/userManage/index.jsx'))

export default [
    {
        path:'/home/firstItem',
        Component:HomePage,
        auth:true,
        meta:{
            title:'系统首页'
        }
    },
    {
        path:'/home/fleet',
        Component:FleetLine,
        auth:true,
        meta:{
            title:'模拟航线'
        }
    },
    {
        path:'/home/pdf',
        Component:PdfPreview,
        auth:true,
        meta:{
            title:'pdf'
        }
    },
    {
        path:'/home/baseEcharts',
        Component:BaseEchart,
        auth:true,
        meta:{
            title:'基础图表'
        }
    },
    {
        path:'/home/baseTable',
        Component:BaseTable,
        auth:true,
        meta:{
            title:'基础表格'
        }
    },
    {
        path:'/home/dragList',
        Component:DragList,
        auth:true,
        meta:{
            title:'拖拽列表'
        }
    },
    {
        path:'/home/dragDialog',
        Component:DragDialog,
        auth:true,
        meta:{
            title:'拖拽弹框'
        }
    },
    {
        path:'/home/I18n',
        Component:I18n,
        auth:true,
        meta:{
            title:'语言转换'
        }
    },
    {
        path:'/home/commonChart',
        Component:CommonChart,
        auth:true,
        meta:{
            title:'一般流程图'
        }
    },
    {
        path:'/home/positionChart',
        Component:PositionChart,
        auth:true,
        meta:{
            title:'定位流程图'
        }
    },
    {
        path:'/home/foldChart',
        Component:FoldChart,
        auth:true,
        meta:{
            title:'折叠流程图'
        }
    },
    {
        path:'/home/chatRoom',
        Component:ChatRoom,
        auth:true,
        meta:{
            title:'聊天室'
        }
    },
    {
        path:'/home/magnifying',
        Component:Magnifying,
        auth:true,
        meta:{
            title:'放大镜'
        }
    },
    {
        path:'/home/manage',
        Component:UserManage,
        auth:true,
        meta:{
            title:'后台管理'
        }
    },
]