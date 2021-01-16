import { useEffect, useRef } from "react";
import { themeColor } from "@/constant/theme";
import './index.scss'
var myChart;

const Bar = (props) => {
  const autoSize = () => {
    let echartsInstance = window.echarts.getInstanceByDom(echart.current);
    echartsInstance.resize();
  };
  useEffect(() => {
    let { theme } = props;

    if (myChart !== null && myChart !== "" && myChart !== undefined) {
      myChart.dispose();
    }

    myChart = window.echarts.init(echart.current);
    myChart.clear();
    myChart.setOption({
        color: ["#3398DB"],
        title: {
          text: "柱状图",
          left: "center",
          textStyle: {
            color: themeColor[theme.themeColor].font,
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
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
                color: themeColor[theme.themeColor].font,
              },
            },
            axisTick: {
              show: true, //隐藏X轴刻度
              alignWithLabel: true,
              lineStyle: {
                color: themeColor[theme.themeColor].font,
              },
            },
            axisLabel: {
              show: true,
              color: themeColor[theme.themeColor].font,
            },
            nameTextStyle: {
              color: themeColor[theme.themeColor].font,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              show: true, //隐藏X轴轴线
              lineStyle: {
                color: themeColor[theme.themeColor].font,
              },
            },
            axisTick: {
              show: true, //隐藏X轴刻度
              lineStyle: {
                color: themeColor[theme.themeColor].font,
              },
            },
            axisLabel: {
              show: true,
              color: themeColor[theme.themeColor].font,
            },
            nameTextStyle: {
              color: themeColor[theme.themeColor].font,
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
  }, [props]);
  useEffect(() => {
    window.addEventListener("resize", autoSize, false);
    return () => {
      window.removeEventListener("resize", autoSize, false);
    };
  });
  const echart = useRef();
  return <div ref={echart} className="myChart" style={{height:300}}></div>;
};

export default Bar;
