import loadable from "@/utils/loadable"
const HomePage = loadable(() => import( /* webpackChunkName: "homePage" */ '@/pages/homePage/index.jsx'))
const FleetLine = loadable(() => import( /* webpackChunkName: "fleetLine" */ '@/pages/fleetLine/index.jsx'))
const PdfPreview = loadable(() => import( /* webpackChunkName: "PdfPreview" */ '@/pages/pdfPreview/index.jsx'))
const BaseEchart = loadable(() => import( /* webpackChunkName: "baseEchart" */ '@/pages/baseEchart/index.jsx'))
const BaseTable = loadable(() => import( /* webpackChunkName: "baseTable" */ '@/pages/baseTable/index.jsx'))
const DragList = loadable(() => import( /* webpackChunkName: "DragList" */ '@/pages/drag_list/index.jsx'))
const DragDialog = loadable(() => import( /* webpackChunkName: "DragDialog" */ '@/pages/drag_dialog/index.jsx'))
// const I18n = loadable(() => import( /* webpackChunkName: "I18n" */ '@/pages/I18n/index.jsx'))
const CommonChart = loadable(() => import( /* webpackChunkName: "chart_common" */ '@/pages/chart_common/index.jsx'))
const PositionChart = loadable(() => import( /* webpackChunkName: "chart_position" */ '@/pages/chart_position/index.jsx'))
const FoldChart = loadable(() => import( /* webpackChunkName: "chart_fold" */ '@/pages/chart_fold/index.jsx'))
const ChatRoom = loadable(() => import( /* webpackChunkName: "homePage" */ '@/pages/chatRoom/index.jsx'))
const Magnifying = loadable(() => import( /* webpackChunkName: "magnifying" */ '@/pages/magnifying/index.jsx'))
const UserManage = loadable(() => import( /* webpackChunkName: "userManage" */ '@/pages/userManage/index.jsx'))

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
    // {
    //     path: '/home/I18n',
    //     Component: I18n,
    //     auth: true,
    // },
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