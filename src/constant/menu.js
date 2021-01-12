/*
 * @description: 
 */
export const menus = [{
        name: "系统首页",
        path: "/home/firstItem",
        key: "firstItem",
        //   icon: require("@/assets/images/menus/home.png"),
    },
    {
        name: "模拟航线",
        path: "/fleet",
        key: "fleet",
        //   icon: require("@/assets/images/menus/echarts_heatmap.png"),
    },
    {
        name: "图片上传",
        path: "/home/fileUp",
        key: "fileUp",
        //   icon: require("@/assets/images/menus/upload.png"),
    },
    {
        name: "文件预览",
        path: "/pdf",
        key: "pdf",
        //   icon: require("@/assets/images/menus/pdf.png"),
    },
    {
        name: "基础图表",
        path: "/home/baseEcharts",
        key: "baseEcharts",
        //   icon: require("@/assets/images/menus/echarts.png"),
    },
    {
        name: "基础表格",
        path: "/baseTable",
        key: "baseTable",
        //   icon: require("@/assets/images/menus/baseTable.png"),
    },
    {
        name: "拖拽组件",
        key: "drag",
        //   icon: require("@/assets/images/menus/drag.png"),
        children: [{
                name: "拖拽列表",
                path: "/dragList",
                key: "dragList",
            },
            {
                name: "拖拽弹框",
                path: "/dragDialog",
                key: "dragDialog",
            },
        ],
    },
    {
        name: "语言转换",
        //   icon: require("@/assets/images/menus/I18n.png"),
        path: "/I18n",
        key: "I18n",
    },
    {
        name: "流程图",
        key: "flowChart",
        //   icon: require("@/assets/images/menus/flowChart.png"),
        children: [{
                name: "一般流程图",
                path: "/commonChart",
                key: "commonChart",
            },
            {
                name: "定位流程图",
                path: "/positionChart",
                key: "positionChart",
            },
            {
                name: "折叠流程图",
                path: "/foldChart",
                key: "foldChart",
            },
        ],
    },
    {
        name: "放大镜",
        path: "/magnifying",
        key: "magnifying",
        //   icon: require("@/assets/images/menus/magnifying.png"),
    },
    {
        name: "聊天室",
        path: "/chatRoom",
        key: "chatRoom",
        //   icon: require("@/assets/images/menus/chat.png"),
    },
    {
        name: "后台管理",
        //   icon: require("@/assets/images/menus/manage.png"),
        path: "/manage",
        key: "manage",
    },
]