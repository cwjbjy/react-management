import { useEffect, useRef } from "react";
import echarts from "echarts/lib/echarts";
import { themeColor } from "@/constant/theme";
// 引入柱状图
import "echarts/lib/chart/bar";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "./bar.scss";

var myChart

const Bar = (props) => {
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
  return <div ref={echart} className="myChart"></div>;
};

export default Bar;
