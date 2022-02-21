import {WithTitleCommonDataType, WithWoeidCommonDataType} from "./common.types";

export type ActiveLocationStateDataType = {
  locationData: LocationStateType;
  weatherByDate: WeatherStateByDateDataType;
};

export type WithIdParamDataType = {
  id: number;
};

export type WithLocationParentDataType = {
  parentTitle: string;
}

export type LocationStateType = WithIdParamDataType & WithLocationParentDataType & WithTitleCommonDataType;

export type WeatherStateByDateDataType = Record<string, WeatherStateDataType>;
export type WeatherStateDataType = WithIdParamDataType & {
  dateDay: string;
  airPressure: number;
  applicableDate: string;
  humidity: number;
  maxTemp: number;
  minTemp: number;
  actualTemp: number;
  predictability: number;
  visibility: number;
  weatherStateName: string;
  weatherStateAbbr: string;
  windDirectionCompas: string;
  windSpeed: number;
};

export type SearchItemListStateDataType = SearchItemStateDataType[];
export type SearchItemStateDataType = WithWoeidCommonDataType & WithTitleCommonDataType;
