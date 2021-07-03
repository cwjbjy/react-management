import {
    lazy
} from "react";

const HomePage = lazy(() => import( /* webpackChunkName: "homePage" */ '@/pages/homePage/index.jsx'))
const FleetLine = lazy(() => import( /* webpackChunkName: "fleetLine" */ '@/pages/fleetLine/index.jsx'))
const PdfPreview = lazy(() => import( /* webpackChunkName: "PdfPreview" */ '@/pages/pdfPreview/index.jsx'))
const BaseEchart = lazy(() => import( /* webpackChunkName: "baseEchart" */ '@/pages/baseEchart/index.jsx'))
const BaseTable = lazy(() => import( /* webpackChunkName: "baseTable" */ '@/pages/baseTable/index.jsx'))
const DragList = lazy(() => import( /* webpackChunkName: "DragList" */ '@/pages/drag_list/index.jsx'))
const DragDialog = lazy(() => import( /* webpackChunkName: "DragDialog" */ '@/pages/drag_dialog/index.jsx'))
const I18n = lazy(() => import( /* webpackChunkName: "I18n" */ '@/pages/I18n/index.jsx'))
const CommonChart = lazy(() => import( /* webpackChunkName: "chart_common" */ '@/pages/chart_common/index.jsx'))
const PositionChart = lazy(() => import( /* webpackChunkName: "chart_position" */ '@/pages/chart_position/index.jsx'))
const FoldChart = lazy(() => import( /* webpackChunkName: "chart_fold" */ '@/pages/chart_fold/index.jsx'))
const ChatRoom = lazy(() => import( /* webpackChunkName: "homePage" */ '@/pages/chatRoom/index.jsx'))
const Magnifying = lazy(() => import( /* webpackChunkName: "magnifying" */ '@/pages/magnifying/index.jsx'))
const UserManage = lazy(() => import( /* webpackChunkName: "userManage" */ '@/pages/userManage/index.jsx'))

const home = [{
        path: '/home/firstItem',
        Component: HomePage,
        auth: true,
    },
    {
        path: '/home/fleet',
        Component: FleetLine,
        auth: true,
    },
    {
        path: '/home/pdf',
        Component: PdfPreview,
        auth: true,
    },
    {
        path: '/home/baseEcharts',
        Component: BaseEchart,
        auth: true,
    },
    {
        path: '/home/baseTable',
        Component: BaseTable,
        auth: true,
    },
    {
        path: '/drag',
        children: [{
                path: '/home/drag/dragList',
                Component: DragList,
                auth: true,
            },
            {
                path: '/home/drag/dragDialog',
                Component: DragDialog,
                auth: true,
            },
        ]
    },
    {
        path: '/home/I18n',
        Component: I18n,
        auth: true,
    },
    {
        path: '/chart',
        children: [{
                path: '/home/chart/commonChart',
                Component: CommonChart,
                auth: true,
            },
            {
                path: '/home/chart/positionChart',
                Component: PositionChart,
                auth: true,
            },
            {
                path: '/home/chart/foldChart',
                Component: FoldChart,
                auth: true,
            },
        ]
    },
    {
        path: '/home/chatRoom',
        Component: ChatRoom,
        auth: true,
    },
    {
        path: '/home/magnifying',
        Component: Magnifying,
        auth: true,
    },
    {
        path: '/home/manage',
        Component: UserManage,
        auth: true,
    },
]

export default home 