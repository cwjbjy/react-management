import { useEffect, useRef, FC, memo } from 'react';

import { themeColor } from '@/constant/theme';
import './index.scss';
import useResize from '@/hooks/useResize';

const Line: FC<echartsProps> = ({ theme }) => {
  const echart = useRef(null);

  useResize(echart);

  useEffect(() => {
    let myChart;
    myChart = window.echarts.init(echart.current);
    myChart.clear();
    myChart.setOption({
      color: ['#eccc68', '#ff7f50', '#7bed9f', '#70a1ff', '#5352ed', '#2ed573', '#1e90ff', '#3742fa'],
      title: {
        left: 'center',
        text: '折线图',
        textStyle: {
          color: themeColor[theme].font,
        },
        top: 0,
      },
      xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
        },
      },
      yAxis: {
        type: 'value',
        name: '次数',
        axisLine: {
          show: true,
          lineStyle: {
            width: 1,
            color: themeColor[theme].font,
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: themeColor[theme].font,
            type: 'dashed',
            opacity: 0.5,
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
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问'],
        top: '30',
        left: 'right',
        textStyle: {
          color: themeColor[theme].font,
        },
      },
      series: [
        {
          name: '邮件营销',
          type: 'line',
          symbol: 'circle',
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: '联盟广告',
          type: 'line',
          symbol: 'circle',
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: '视频广告',
          type: 'line',
          symbol: 'circle',
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: '直接访问',
          type: 'line',
          symbol: 'circle',
          data: [320, 332, 301, 334, 390, 330, 320],
        },
      ],
    });
  }, [theme]);

  return <div ref={echart} className="myChart" style={{ height: 300 }}></div>;
};

export default memo(Line);
