import { useEffect, useRef } from "react";
import { themeColor } from "@/constant/theme";
import "./index.scss";

const Bar = (props) => {
  const echart = useRef();
  let myChart;

  useEffect(() => {
    initial();
  }, [props]);

  useEffect(() => {
    window.addEventListener("resize", autoSize, false);
    return () => {
      window.removeEventListener("resize", autoSize, false);
    };
  });

  const initial = () => {
    let { theme } = props;
    myChart = window.echarts.init(echart.current);
    myChart.clear();
    myChart.setOption({
      color: ["#3398DB"],
      title: {
        text: "柱状图",
        left: "center",
        textStyle: {
          color: themeColor[theme].font,
        },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
              color: themeColor[theme].font,
            },
          },
          axisTick: {
            show: true, //隐藏X轴刻度
            alignWithLabel: true,
            lineStyle: {
              color: themeColor[theme].font,
            },
          },
          axisLabel: {
            show: true,
            color: themeColor[theme].font,
          },
          nameTextStyle: {
            color: themeColor[theme].font,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
              color: themeColor[theme].font,
            },
          },
          axisTick: {
            show: true, //隐藏X轴刻度
            lineStyle: {
              color: themeColor[theme].font,
            },
          },
          axisLabel: {
            show: true,
            color: themeColor[theme].font,
          },
          nameTextStyle: {
            color: themeColor[theme].font,
          },
        },
      ],
      series: [
        {
          name: "直接访问",
          type: "bar",
          barWidth: "60%",
          data: [10, 52, 200, 334, 390, 330, 220],
        },
      ],
    });
  };

  const autoSize = () => {
    let echartsInstance = window.echarts.getInstanceByDom(echart.current);
    echartsInstance.resize();
  };
  return <div ref={echart} className="myChart" style={{ height: 300 }}></div>;
};

export default Bar;