import React,{ useEffect, useRef,useCallback } from "react";
import { themeColor } from "@/constant/theme";
import useResize from '@/hooks/useResize'

const Bar = ({ theme,model }) => {

  const echart = useRef();
  
  const initial = useCallback(() => {
    let myChart;
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
        data: model?.xAxis || [],
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
          data: model?.series || [],
        },
      ],
    });
  },[theme,model]);

  useResize(echart)

  useEffect(() => {
    model && initial();
  }, [model,initial]);

  return <div ref={echart} className="myChart" style={{ height: 300 }}></div>;
};

export default React.memo(Bar);
