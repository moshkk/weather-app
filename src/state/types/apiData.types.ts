import {WithTitleCommonDataType, WithWoeidCommonDataType} from "./common.types";

export type WeatherObjectDataType = WithWoeidCommonDataType & WithTitleCommonDataType & {
  location_type: string;
  latt_long: string;
  timezone: string;
  time: string;
  sun_rise: string;
  sun_set: string;
  timezone_name: string;
  parent: WeatherDataObjectParentType;
  consolidated_weather: ConsolidatedWeatherDataListType;
  sources: WeatherObjectDataSourcesListType;
};

export type ConsolidatedWeatherDataListType = ConsolidatedWeatherDataType[];
export type ConsolidatedWeatherDataType = {
  id: number;
  weather_state_name: string;
  weather_state_abbr: string;
  wind_direction_compass: string;
  created: string;
  applicable_date: string;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  wind_speed: number;
  wind_direction: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
};

export type WeatherDataObjectParentType = WithTitleCommonDataType & WithWoeidCommonDataType & {
  location_type: string;
  latt_long: string;
};

export type WeatherObjectDataSourcesListType = WeatherObjectDataSourcesType[];
export type WeatherObjectDataSourcesType = WithTitleCommonDataType & {
  slug: string;
  url: string;
  crawl_rate: number;
};

export type SearchItemApiDataListType = SearchItemApiDataType[];
export type SearchItemApiDataType = WithWoeidCommonDataType & WithTitleCommonDataType;
