import { useEffect, useRef } from "react";
import { themeColor } from "@/constant/theme";

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
      color: ['rgba(84, 112, 198)'],
      title: {
        text: "销售图表",
        textStyle: {
          color: themeColor[theme.themeColor].font,
        },
      },
      tooltip: {},
      grid: {
        bottom: "8%",
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        axisLabel: {
          show: true,
          color: themeColor[theme.themeColor].font,
        },
      },
      yAxis: {
        axisLabel: {
          show: true,
          color: themeColor[theme.themeColor].font,
        },
      },
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
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
