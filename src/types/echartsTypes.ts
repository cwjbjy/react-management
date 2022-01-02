interface ModelData {
  xAxis: string | number[];
  series: number[];
}

export interface Props {
  theme: string;
  model?: ModelData;
}
