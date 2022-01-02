declare module "*.css";
declare module "*.png";
declare module "*.jpg";

declare interface Window {
  echarts: any;
  GVerify: any;
  go: any;
}

declare module "react-i18next";

declare interface UserInfo {
  flag?: boolean;
  passWord: string;
  userName: string;
}

interface ModelData {
  xAxis: string | number[];
  series: number[];
}

declare interface echartsProps {
  theme: string;
  model?: ModelData;
}
