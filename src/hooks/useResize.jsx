import { useEffect } from "react";

export default function useResize(echartRef) {
  const autoSize = () => {
    let echartsInstance = window.echarts.getInstanceByDom(echartRef.current);
    echartsInstance && echartsInstance.resize();
  };
  useEffect(() => {
    window.addEventListener("resize", autoSize, false);
    return () => {
      window.removeEventListener("resize", autoSize, false);
    };
  });
}
