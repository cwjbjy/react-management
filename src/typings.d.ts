declare module '*.css';
declare module '*.png';
declare module '*.jpg';

declare interface Window {
  echarts: any;
  GVerify: any;
  go: any;
}

declare module 'react-i18next';

enum ThemeColor {
  GRAY = 'theme-gray',
  BLUE = 'theme-blue',
  BLACK = 'theme-black',
}

declare interface UserInfo {
  flag?: boolean;
  passWord: string;
  userName: string;
}

interface ModelData {
  xAxis: string[];
  series: number[];
}

declare interface echartsProps {
  theme: ThemeColor;
  model?: ModelData;
}

interface ObjectItem {
  [key: string]: any;
}
