import Home from "@/assets/images/menus/home.png";
import ChinaMap from "@/assets/images/menus/echarts_heatmap.png";
import Pdf from "@/assets/images/menus/pdf.png";
import Echarts from "@/assets/images/menus/echarts.png";
import BaseTable from "@/assets/images/menus/baseTable.png";
import Drag from "@/assets/images/menus/drag.png";
import I18n from "@/assets/images/menus/I18n.png";
import FlowChart from "@/assets/images/menus/flowChart.png";
import Magnifying from "@/assets/images/menus/magnifying.png";
import Chat from "@/assets/images/menus/chat.png";
import Manage from "@/assets/images/menus/manage.png";

import "./config.scss";

export const menus = [
  {
    name: "系统首页",
    path: "/home/firstItem",
    key: "firstItem",
    icon: <img src={Home} alt="加载失败" className="menuIcon"></img>,
  },
  {
    name: "模拟航线",
    path: "/home/fleet",
    key: "fleet",
    icon: <img src={ChinaMap} alt="加载失败" className="menuIcon"></img>,
  },
  {
    name: "文件预览",
    path: "/home/pdf",
    key: "pdf",
    icon: <img src={Pdf} alt="加载失败" className="menuIcon"></img>,
  },
  {
    name: "基础图表",
    path: "/home/baseEcharts",
    key: "baseEcharts",
    icon: <img src={Echarts} alt="加载失败" className="menuIcon"></img>,
  },
  {
    name: "基础表格",
    path: "/home/baseTable",
    key: "baseTable",
    icon: <img src={BaseTable} alt="加载失败" className="menuIcon"></img>,
  },
  {
    name: "拖拽组件",
    key: "drag",
    icon: <img src={Drag} alt="加载失败" className="menuIcon"></img>,
    children: [
      {
        name: "拖拽列表",
        path: "/home/drag/dragList",
        key: "dragList",
      },
      {
        name: "拖拽弹框",
        path: "/home/drag/dragDialog",
        key: "dragDialog",
      },
    ],
  },
  // {
  //   name: "语言转换",
  //   icon: <img src={I18n} alt="加载失败" className="menuIcon"></img>,
  //   path: "/home/I18n",
  //   key: "I18n",
  // },
  {
    name: "流程图",
    key: "flowChart",
    icon: <img src={FlowChart} alt="加载失败" className="menuIcon"></img>,
    children: [
      {
        name: "一般流程图",
        path: "/home/chart/commonChart",
        key: "commonChart",
      },
      {
        name: "定位流程图",
        path: "/home/chart/positionChart",
        key: "positionChart",
      },
      {
        name: "折叠流程图",
        path: "/home/chart/foldChart",
        key: "foldChart",
      },
    ],
  },
  {
    name: "放大镜",
    path: "/home/magnifying",
    key: "magnifying",
    icon: <img src={Magnifying} alt="加载失败" className="menuIcon"></img>,
  },
  // {
  //     name: "聊天室",
  //     path: "/chatRoom",
  //     key: "chatRoom",
  //     icon: <img src={Chat} alt="加载失败" className="menuIcon"></img>,
  // },
  {
    name: "后台管理",
    path: "/home/manage",
    key: "manage",
    icon: <img src={Manage} alt="加载失败" className="menuIcon"></img>,
  },
];
