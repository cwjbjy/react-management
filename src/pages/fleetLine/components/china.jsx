import { useEffect, useRef, useCallback } from "react";
import { geoCoordMap, apiData } from "../../../constant/map";

const buildLines = function (data, geoCoordMap) {
  var planePath =
    "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
  let arr = [];
  var color = [
    "#eccc68",
    "#ff7f50",
    "#ff6b81",
    "#ffa502",
    "#ff6348",
    "#ff4757",
    "#7bed9f",
    "#70a1ff",
    "#5352ed",
    "#2ed573",
    "#1e90ff",
    "#3742fa",
  ]; //航线的颜色
  data.forEach((item, index) => {
    arr.push({
      name: item.airName,
      type: "lines",
      zlevel: index + 3,
      symbol: ["none", "arrow"],
      symbolSize: 10,
      label: {
        show: false,
      },
      effect: {
        show: true,
        period: item.speed, //动画时间
        trailLength: 0.1, //给飞机尾部加特效
        symbol: planePath,
        symbolSize: 15,
        delay: item.delay,
      },
      lineStyle: {
        normal: {
          color: color[index],
          width: 2,
          opacity: 0.5,
          curveness: 0.2, //曲度
        },
      },
      data: [
        {
          name: item.airName,
          fromName: item.fromName,
          toName: item.toName,
          coords: [geoCoordMap[item.fromName], geoCoordMap[item.toName]],
        },
      ],
    });
  });
  return arr;
};

const convertData = function (data) {
  var res = [];
  for (let i = 0, len = data.length; i < len; i++) {
    var geoCoord = geoCoordMap[data[i].fromName];
    var geoCoord2 = geoCoordMap[data[i].toName];

    if (geoCoord) {
      res.push({
        name: data[i].fromName,
        value: geoCoord.concat(data[i].value),
      });
      res.push({
        name: data[i].toName,
        value: geoCoord2.concat(data[i].value),
      });
    }
  }
  return res;
};

const FleetModel = () => {
  const echart = useRef();

  const initial = useCallback(() => {
    let myChart;
    myChart = window.echarts.init(echart.current);
    myChart.clear();
    myChart.setOption({
      title: {
        text: "模拟航线",
        subtext: "数据纯属虚构",
        left: "center",
        top: "20px",
        textStyle: {
          color: "#fff",
          fontSize: 24,
        },
      },
      geo: {
        map: "china",
        layoutSize: "128%",
        // layoutCenter:["39%","50%"],
        zoom: 1,
        label: {
          emphasis: {
            show: false,
            color: "#fff",
          },
        },
        roam: true, //平移缩放
        itemStyle: {
          normal: {
            areaColor: "#0045A0",
            borderColor: "#00DFFF",
            borderWidth: 2,
          },
          emphasis: {
            areaColor: "#4499d0",
          },
        },
      },
      series: [
        {
          name: "散点",
          type: "scatter",
          coordinateSystem: "geo",
          zlevel: 1,
          label: {
            normal: {
              show: true,
              position: "right",
              formatter: "{b}",
            },
          },
          itemStyle: {
            normal: {
              color: "#fff",
            },
          },
          //coordinateSystem:"geo"只会取数组的前两位当做点坐标数据
          data: convertData(apiData),
          //其中第一个参数 value 为 data 中的数据值。第二个参数params 是其它的数据项参数
          symbolSize: function (value) {
            return value[2] / 10;
          },
        },
        {
          name: "涟漪",
          type: "effectScatter",
          coordinateSystem: "geo",
          zlevel: 2,
          rippleEffect: {
            brushType: "stroke",
          },
          label: {
            normal: {
              show: false,
              position: "left",
              formatter: "{b}",
            },
          },
          itemStyle: {
            normal: {
              color: "rgba(102,204,255,0.9)",
              shadowBlur: 10,
              shadowColor: "#0ff7ee",
            },
            emphasis: {
              areaColor: "#2B91B7",
            },
          },
          hoverAnimation: true,
          showEffectOn: "render", //绘制完成后显示特效
          data: convertData(apiData),
          symbolSize: function (value) {
            return value[2] / 10;
          },
        },
        ...buildLines(apiData, geoCoordMap),
      ],
    });
  }, []);

  useEffect(() => {
    initial();
  }, [initial]);

  return <div ref={echart} className="myChart"></div>;
};

export default FleetModel;
