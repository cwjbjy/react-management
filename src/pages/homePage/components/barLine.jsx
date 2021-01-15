import { useEffect, useRef } from "react";
import echarts from "echarts/lib/echarts";
import { themeColor } from "@/constant/theme";

import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "./barLine.scss";

var myChart;

const BarLine = (props) => {
  const autoSize = () => {
    let echartsInstance = echarts.getInstanceByDom(echart.current);
    echartsInstance.resize();
  };
  useEffect(() => {
    let { theme } = props;

    if (myChart !== null && myChart !== "" && myChart !== undefined) {
      myChart.dispose();
    }

    myChart = echarts.init(echart.current);
    myChart.clear();
    myChart.setOption({
      title: {
        text: "2019年销售水量和主营业务收入对比",
        textStyle: {
          color: themeColor[theme.themeColor].font,
        },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
          label: {
            show: true,
          },
        },
      },
      grid: {
        bottom: "8%",
      },
      legend: {
        data: ["销售水量", "主营业务"],
        top: "10%",
        left: "center",
        textStyle: {
          color: themeColor[theme.themeColor].font,
        },
      },
      xAxis: {
        data: [
          "当年完成水量",
          "去年同期水量",
          "滚动目标值水量",
          "全年目标值水量",
          "当年完成金额",
          "去年同期金额",
          "滚动目标金额",
          "全年目标值",
        ],
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
      yAxis: [
        {
          type: "value",
          name: "亿元",
          splitLine: {
            show: false,
          },
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
        {
          type: "value",
          name: "同比",
          position: "right",
          splitLine: {
            show: false,
          },
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
            formatter: "{value} %", //右侧Y轴文字显示
            color: themeColor[theme.themeColor].font,
          },
          nameTextStyle: {
            color: themeColor[theme.themeColor].font,
          },
        },
      ],
      series: [
        {
          name: "销售水量",
          type: "line",
          yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
          smooth: true, //平滑曲线显示
          showAllSymbol: true, //显示所有图形。
          symbol: "circle", //标记的图形为实心圆
          symbolSize: 10, //标记的大小
          itemStyle: {
            //折线拐点标志的样式
            color: "#058cff",
          },
          lineStyle: {
            color: "#058cff",
          },

          //折线图下方的线性渐变

          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 1,
              x2: 1,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: "#1e90ff",
                },
                {
                  offset: 1,
                  color: "#70a1ff",
                },
              ],
            },
          },
          data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5],
        },
        {
          name: "主营业务",
          type: "bar",
          barWidth: 15,
          z:10,
          data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5],
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
  return <div ref={echart} className="myChart"></div>;
};

export default BarLine;
