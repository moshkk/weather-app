export type ActiveLocationStateDataType = {
  locationData: LocationStateType;
  weatherByDate: WeatherStateByDateDataType;
};

export type WithIdParamDataType = {
  id: number;
};

export type LocationStateType = WithIdParamDataType & {
  title: string;
  parentTitle: string;
};

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
