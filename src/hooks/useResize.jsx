import { useEffect } from "react";
import { throttle } from "lodash";

export default function useResize(echartRef) {
  const autoSize = throttle(() => {
    let echartsInstance = window.echarts.getInstanceByDom(echartRef.current);
    echartsInstance.resize();
  }, 300);
  useEffect(() => {
    window.addEventListener("resize", autoSize, false);
    return () => {
      window.removeEventListener("resize", autoSize, false);
    };
  });
}
