import { useEffect, useRef } from "react";
import { themeColor } from "@/constant/theme";

const Bar = (props) => {
  const echart = useRef();
  let myChart;

  useEffect(() => {
    const initial = () => {
      let { theme } = props;
      myChart = window.echarts.init(echart.current);
      myChart.clear();
      myChart.setOption({
        color: ["#2d8cf0"],
        title: {
          text: "销售图表",
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
          bottom: "8%",
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
          axisLabel: {
            show: true,
            color: themeColor[theme].font,
          },
        },
        yAxis: {
          axisLabel: {
            show: true,
            color: themeColor[theme].font,
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
    };
    initial();
  }, [props]);

  useEffect(() => {
    window.addEventListener("resize", autoSize, false);
    return () => {
      window.removeEventListener("resize", autoSize, false);
    };
  });

  const autoSize = () => {
    let echartsInstance = window.echarts.getInstanceByDom(echart.current);
    echartsInstance.resize();
  };

  return <div ref={echart} className="myChart" style={{ height: 300 }}></div>;
};

export default Bar;
