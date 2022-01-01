import { useRef,useEffect } from "react";
import userImage from "@/assets/images/home/user.jpg";
import "./index.scss";

const CommonChart = () => {
  const mygoChart = useRef();
  useEffect(() => {
    dealShow();
  }, [])
  const dealShow = () => {
    const $ = window.go.GraphObject.make;
    var myDiagram = $(window.go.Diagram, mygoChart.current, {
      initialContentAlignment: window.go.Spot.Center, // 顶格显示
      "undoManager.isEnabled": true, // 支持 Ctrl-Z 和 Ctrl-Y 操作
      "toolManager.hoverDelay": 100, //tooltip提示显示延时
      "toolManager.toolTipDuration": 10000, //tooltip持续显示时间
      //isReadOnly:true,//只读
      "grid.visible": false, //显示网格
      allowMove: true, //允许拖动
      allowDelete: false,
      allowCopy: false,
      allowClipboard: false,
      "toolManager.mouseWheelBehavior": window.go.ToolManager.WheelZoom, //有鼠标滚轮事件放大和缩小，而不是向上和向下滚动
      layout: $(window.go.TreeLayout, {
        angle: 90, //为0时流程图会水平放置，90的时候会垂直放置，也就是一个倾斜角度的问题，单位是度°
        layerSpacing: 35,
        alternateAngle: 90,
        alternateLayerSpacing: 35,
        alternateAlignment: window.go.TreeLayout.AlignmentBus,
        alternateNodeSpacing: 20,
      }),
    });
    myDiagram.addDiagramListener("ObjectSingleClicked", function (e) {});
    //上颜色
    function colorBrushConverter(color) {
      if (color) return color;
      return "orange";
    }
    myDiagram.nodeTemplate = $(
      window.go.Node,
      "Auto",
      {
        //节点模板样式设置
        isShadowed: true,
        shadowBlur: 1,
        shadowOffset: new window.go.Point(0, 1),
        shadowColor: "rgba(0, 0, 0, .14)",
        selectionAdornmentTemplate: $(
          window.go.Adornment,
          "Auto",
          $(
            window.go.Shape,
            "RoundedRectangle",
            { fill: null, stroke: "#7986cb", strokeWidth: 3 } //选中之后节点边框颜色
          ),
          $(window.go.Placeholder)
        ),
      },
      $(
        window.go.Shape,
        "RoundedRectangle",
        { fill: "#90CAF9", strokeWidth: 0 },
        new window.go.Binding("fill", "color", colorBrushConverter)
      ),
      $(
        //Panel平板布局
        window.go.Panel,
        "Horizontal",
        { padding: 5 },
        $(
          window.go.Panel,
          "Vertical",
          $(
            window.go.Picture,
            { margin: 10, width: 50, height: 50 },
            new window.go.Binding("source", "img") //这里的img命名要和下面对应
          )
        ),
        $(
          window.go.Panel,
          "Vertical",
          $(
            window.go.TextBlock,
            "Default Text",
            { margin: 12, stroke: "#fff", font: "bold 16px sans-serif" },
            new window.go.Binding("text", "name") //这里的name命名要和下面对应
          )
        ),
        {
          doubleClick: function (e, node) {
            //在Panel块，双击获取当前节点的信息
            // console.log("111", node.part.data);
          },
        }
      )
    );
    myDiagram.linkTemplate = $(
      window.go.Link,
      { routing: window.go.Link.Orthogonal, corner: 15 }, //分开线的样式设置
      $(window.go.Shape, { strokeWidth: 2, stroke: "#66CCFF" }),
      $(window.go.Shape, { toArrow: "Standard", fill: "#66CCFF", stroke: null }), //箭头
      $(
        window.go.TextBlock,
        { stroke: "red", font: "20px" },
        new window.go.Binding("text", "linktext")
      ),
      {
        toolTip: $(
          window.go.Adornment,
          "Auto",
          $(window.go.TextBlock, { margin: 4 }, new window.go.Binding("text", "name")) //悬浮在线条时出现的提示框
        ),
      }
    );
    let myModel = $(window.go.TreeModel);
    myModel.nodeDataArray = [
      {
        key: "1",
        name: "总经理",
        color: "#70a1ff",
        img: userImage,
      },
      {
        key: "2",
        parent: "1",
        name: "厂部",
        img: userImage,
      },
      {
        key: "4",
        parent: "1",
        name: "财务部",
        img: userImage,
      },
      {
        key: "5",
        parent: "2",
        name: "行政人事办",
        img: userImage,
      },
      {
        key: "6",
        parent: "2",
        name: "采购",
        img: userImage,
      },
      {
        key: "12",
        parent: "4",
        name: "会计",
        img: userImage,
      },
      {
        key: "13",
        parent: "4",
        name: "出纳",
        img: userImage,
      },
      {
        key: "14",
        parent: "5",
        name: "行政人事文员",
        img: userImage,
      },
      {
        key: "15",
        parent: "5",
        name: "行政后勤",
        img: userImage,
      },
      {
        key: "16",
        parent: "5",
        name: "包装设计",
        img: userImage,
      },
      {
        key: "24",
        parent: "16",
        name: "工厂加工",
        img: userImage,
      },
    ];
    myDiagram.model = myModel;
    myDiagram.commandHandler.zoomToFit(); //自适应，能看到流程图全部
  };
  return <div ref={mygoChart} className="mygoChart"></div>;
};

export default CommonChart