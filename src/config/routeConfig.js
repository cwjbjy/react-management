import loadable from "@/utils/loadable";
const Login = loadable(() =>
  import(/* webpackChunkName: "Login" */ "@/pages/login/index.jsx")
);
const HomeLayout = loadable(() =>
  import(/* webpackChunkName: "homeLayout" */ "@/layout/index.jsx")
);

const HomePage = loadable(() =>
  import(/* webpackChunkName: "homePage" */ "@/pages/homePage/index.jsx")
);
const FleetLine = loadable(() =>
  import(/* webpackChunkName: "fleetLine" */ "@/pages/fleetLine/index.jsx")
);
const FileUp = loadable(() =>
  import(/* webpackChunkName: "fileUp" */ "@/pages/fileUp/index.jsx")
);

const PdfPreview = loadable(() =>
  import(/* webpackChunkName: "PdfPreview" */ "@/pages/pdfPreview/index.jsx")
);
const BaseEchart = loadable(() =>
  import(/* webpackChunkName: "baseEchart" */ "@/pages/baseEchart/index.jsx")
);
const BaseTable = loadable(() =>
  import(/* webpackChunkName: "baseTable" */ "@/pages/baseTable/index.jsx")
);
const DragList = loadable(() =>
  import(/* webpackChunkName: "DragList" */ "@/pages/drag/list/index.jsx")
);
const DragDialog = loadable(() =>
  import(/* webpackChunkName: "DragDialog" */ "@/pages/drag/dialog/index.jsx")
);
const I18n = loadable(() =>
  import(/* webpackChunkName: "I18n" */ "@/pages/I18n/index.jsx")
);
const CommonChart = loadable(() =>
  import(
    /* webpackChunkName: "chart_common" */ "@/pages/chart/common/index.jsx"
  )
);
const PositionChart = loadable(() =>
  import(
    /* webpackChunkName: "chart_position" */ "@/pages/chart/position/index.jsx"
  )
);
const FoldChart = loadable(() =>
  import(/* webpackChunkName: "chart_fold" */ "@/pages/chart/fold/index.jsx")
);
const ChatRoom = loadable(() =>
  import(/* webpackChunkName: "chatRoom" */ "@/pages/chatRoom/index.jsx")
);
const Magnifying = loadable(() =>
  import(/* webpackChunkName: "magnifying" */ "@/pages/magnifying/index.jsx")
);
const UserManage = loadable(() =>
  import(/* webpackChunkName: "userManage" */ "@/pages/userManage/index.jsx")
);

const routeConfig = [
  {
    path: "/login",
    component: Login,
    key: "login",
    exact: true,
    requireAuth: false,
  },
  {
    path: "/home",
    component: HomeLayout,
    key: "/home",
    redirect:'/home/firstItem',
    routes: [
      {
        path: "/home/firstItem",
        component: HomePage,
        exact: true,
        key: "firstItem",
      },
      {
        path: "/home/fleet",
        component: FleetLine,
        exact: true,
        key: "fleet",
      },
      {
        path: "/home/fileUp",
        component: FileUp,
        exact: true,
        key: "fileUp",
      },
      {
        path: "/home/pdf",
        component: PdfPreview,
        exact: true,
        key: "pdf",
      },
      {
        path: "/home/baseEcharts",
        component: BaseEchart,
        exact: true,
        key: "baseEcharts",
      },
      {
        path: "/home/baseTable",
        component: BaseTable,
        exact: true,
        key: "baseTable",
      },
      {
        path: "/home/drag/dragList",
        component: DragList,
        exact: true,
        key: "dragList",
      },
      {
        path: "/home/drag/dragDialog",
        component: DragDialog,
        exact: true,
        key: "dragDialog",
      },
      {
        path: "/home/I18n",
        component: I18n,
        exact: true,
        key: "I18n",
      },
      {
        path: "/home/chart/commonChart",
        component: CommonChart,
        exact: true,
        key: "commonChart",
      },
      {
        path: "/home/chart/positionChart",
        component: PositionChart,
        exact: true,
        key: "positionChart",
      },
      {
        path: "/home/chart/foldChart",
        component: FoldChart,
        exact: true,
        key: "foldChart",
      },
      {
        path: "/home/magnifying",
        component: Magnifying,
        exact: true,
        key: "magnifying",
      },
      {
        path: "/home/chatRoom",
        component: ChatRoom,
        exact: true,
        key: "chatRoom",
      },
      {
        path: "/home/manage",
        component: UserManage,
        exact: true,
        key: "manage",
      },
    ],
  },
  {
    path: "/",
    exact:true,
    redirect:'/home/firstItem',
  }
];

export default routeConfig;
