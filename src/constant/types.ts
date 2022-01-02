export interface GeoCoordMap {
  [key: string]: number[];
}

export interface ApiData {
  airName: string;
  fromName: string;
  toName: string;
  delay: number;
  value: number;
  speed: number;
}
