import { useEffect, useRef, FC, memo } from 'react';

import { themeColor } from '@/constant/theme';
import './index.scss';
import useResize from '@/hooks/useResize';

const Pie: FC<echartsProps> = ({ theme }) => {
  const echart = useRef(null);

  useResize(echart);

  useEffect(() => {
    let myChart;
    myChart = window.echarts.init(echart.current);
    myChart.clear();
    myChart.setOption({
      color: [
        '#eccc68',
        '#ff7f50',
        '#ff6b81',
        '#ffa502',
        '#ff6348',
        '#ff4757',
        '#7bed9f',
        '#70a1ff',
        '#5352ed',
        '#2ed573',
        '#1e90ff',
        '#3742fa',
      ],
      title: {
        text: '饼图',
        left: 'center',
        textStyle: {
          color: themeColor[theme].font,
        },
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        textStyle: {
          color: themeColor[theme].font,
        },
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    });
  }, [theme]);

  return <div ref={echart} className="myChart" style={{ height: 300 }}></div>;
};

export default memo(Pie);
