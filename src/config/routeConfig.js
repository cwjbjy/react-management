import loadable from "@/utils/loadable"
const Login = loadable(()=>import(/* webpackChunkName: "Login" */ '@/pages/login/index.jsx'))
const HomeLayout = loadable(() => import( /* webpackChunkName: "homeLayout" */ "@/layout/index.jsx"));

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

const routeConfig = [
    {
      path: "/login",
      component: Login,
      exact: true,
      requireAuth: false,
    },
    {
      path: "/home",
      component: HomeLayout,
      requireAuth: true,
      routes: [
        {
          path: "/home/firstItem",
          component: HomePage,
          requireAuth: true,
          exact: true,
        },
        {
          path: "/home/fleet",
          component: FleetLine,
          requireAuth: true,
          exact: true,
        },
        {
          path: "/home/pdf",
          component: PdfPreview,
          requireAuth: true,
          exact: true,
        },
        {
          path: "/home/baseEcharts",
          component: BaseEchart,
          requireAuth: true,
          exact: true,
        },
        {
          path: "/home/baseTable",
          component: BaseTable,
          requireAuth: true,
          exact: true,
        },
        {
          path: "/home/drag/dragList",
          component: DragList,
          requireAuth: true,
          exact: true,
        },
        {
          path: "/home/drag/dragDialog",
          component: DragDialog,
          requireAuth: true,
          exact: true,
        },
        // {
        //     path: '/home/I18n',
        //     component: I18n,
        //     requireAuth: true,
        //     exact: true,
        // },
        {
          path: "/home/chart/commonChart",
          component: CommonChart,
          requireAuth: true,
          exact: true,
        },
        {
          path: "/home/chart/positionChart",
          component: PositionChart,
          requireAuth: true,
          exact: true,
        },
        {
          path: "/home/chart/foldChart",
          component: FoldChart,
          requireAuth: true,
          exact: true,
        },
        {
          path: "/home/chatRoom",
          component: ChatRoom,
          requireAuth: true,
          exact: true,
        },
        {
          path: "/home/magnifying",
          component: Magnifying,
          requireAuth: true,
          exact: true,
        },
        {
          path: "/home/manage",
          component: UserManage,
          requireAuth: true,
          exact: true,
        },
      ],
    },
  ];

export default routeConfig