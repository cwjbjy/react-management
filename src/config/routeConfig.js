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
    requireAuth: true,
    key: "/home",
    routes: [
      {
        path: "/home/firstItem",
        component: HomePage,
        requireAuth: true,
        exact: true,
        key: "firstItem",
      },
      {
        path: "/home/fleet",
        component: FleetLine,
        requireAuth: true,
        exact: true,
        key: "fleet",
      },
      {
        path: "/home/fileUp",
        component: FileUp,
        requireAuth: true,
        exact: true,
        key: "fileUp",
      },
      {
        path: "/home/pdf",
        component: PdfPreview,
        requireAuth: true,
        exact: true,
        key: "pdf",
      },
      {
        path: "/home/baseEcharts",
        component: BaseEchart,
        requireAuth: true,
        exact: true,
        key: "baseEcharts",
      },
      {
        path: "/home/baseTable",
        component: BaseTable,
        requireAuth: true,
        exact: true,
        key: "baseTable",
      },
      {
        path: "/home/drag/dragList",
        component: DragList,
        requireAuth: true,
        exact: true,
        key: "dragList",
      },
      {
        path: "/home/drag/dragDialog",
        component: DragDialog,
        requireAuth: true,
        exact: true,
        key: "dragDialog",
      },
      {
        path: "/home/I18n",
        component: I18n,
        requireAuth: true,
        exact: true,
        key: "I18n",
      },
      {
        path: "/home/chart/commonChart",
        component: CommonChart,
        requireAuth: true,
        exact: true,
        key: "commonChart",
      },
      {
        path: "/home/chart/positionChart",
        component: PositionChart,
        requireAuth: true,
        exact: true,
        key: "positionChart",
      },
      {
        path: "/home/chart/foldChart",
        component: FoldChart,
        requireAuth: true,
        exact: true,
        key: "foldChart",
      },
      {
        path: "/home/magnifying",
        component: Magnifying,
        requireAuth: true,
        exact: true,
        key: "magnifying",
      },
      {
        path: "/home/chatRoom",
        component: ChatRoom,
        requireAuth: true,
        exact: true,
        key: "chatRoom",
      },
      {
        path: "/home/manage",
        component: UserManage,
        requireAuth: true,
        exact: true,
        key: "manage",
      },
    ],
  },
];

export default routeConfig;
