import React from "react";
import {
  ClearSvg,
  HailSvg,
  HeavyCloudsSvg,
  HeavyRainSvg, LightCloudsSvg,
  LightRainSvg,
  ShowersSvg,
  SleetSvg,
  SnowSvg,
  ThunderStormSvg
} from "../../icons";

export enum WEATHER_KEYS {
  'SN' = 'sn',
  'SL' = 'sl',
  'H' = 'h',
  'T' = 't',
  'HR' = 'hr',
  'LR' = 'lr',
  'S' = 's',
  'HC' = 'hc',
  'LC' = 'lc',
  'C' = 'c'
};

type IconMapperType = {
  [key: string]: React.ElementType<any>;
};

export const iconToWeatherKeyMap: IconMapperType = {
  [WEATHER_KEYS.SN]: SnowSvg,
  [WEATHER_KEYS.SL]: SleetSvg,
  [WEATHER_KEYS.H]: HailSvg,
  [WEATHER_KEYS.T]: ThunderStormSvg,
  [WEATHER_KEYS.HR]: HeavyRainSvg,
  [WEATHER_KEYS.LR]: LightRainSvg,
  [WEATHER_KEYS.S]: ShowersSvg,
  [WEATHER_KEYS.HC]: HeavyCloudsSvg,
  [WEATHER_KEYS.LC]: LightCloudsSvg,
  [WEATHER_KEYS.C]: ClearSvg,
};
