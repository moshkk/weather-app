import {
  ConsolidatedWeatherDataListType,
  SearchItemApiDataListType,
  WeatherObjectDataType
} from "../state/types/apiData.types";
import {
  ActiveLocationStateDataType,
  SearchItemListStateDataType,
  WeatherStateByDateDataType
} from "../state/types/stateData.types";
import {WEEK_DAYS} from "./constants";

export const roundNumber = (value: number) => {
  return Math.round(value);
};

export const getIsoDateString = (value: Date) => {
  return value.toISOString().split('T')[0];
};

export const getDayStringByDate = (value: string): string => {
  const day = new Date(value).getDay();
  return WEEK_DAYS[day];
};

const mapWeatherDataToState = (inputData: ConsolidatedWeatherDataListType): WeatherStateByDateDataType => {
  return inputData.reduce((accum, curr) => {

    const {
      applicable_date,
      predictability,
      the_temp,
      weather_state_name,
      wind_speed,
      wind_direction_compass,
      visibility,
      min_temp,
      max_temp,
      humidity,
      air_pressure,
      id,
      weather_state_abbr,
    } = curr;

    const dateDay = getDayStringByDate(applicable_date);

    if (!accum[applicable_date]) {
      accum[applicable_date] = {
        id,
        humidity,
        predictability,
        dateDay,
        visibility: roundNumber(visibility),
        airPressure: roundNumber(air_pressure),
        actualTemp: roundNumber(the_temp),
        minTemp: roundNumber(min_temp),
        maxTemp: roundNumber(max_temp),
        applicableDate: applicable_date,
        weatherStateAbbr: weather_state_abbr,
        weatherStateName: weather_state_name,
        windDirectionCompas: wind_direction_compass,
        windSpeed: roundNumber(convertMphToKph(wind_speed)),
      };
    }

    return accum;
  }, {});
};

export const mapLocationFullDataToState = (inputData: WeatherObjectDataType): ActiveLocationStateDataType => {

  const {consolidated_weather, title, woeid, parent: {title: parentTitle}} = inputData;
  const weatherDataByDate = mapWeatherDataToState(consolidated_weather);

  const mappedData: ActiveLocationStateDataType = {
    locationData: {
      title,
      id: woeid,
      parentTitle,
    },
    weatherByDate: weatherDataByDate,
  };
  return mappedData;
};

export const mapSearchResultsDataToState = (inputData: SearchItemApiDataListType): SearchItemListStateDataType => {
  return inputData.map(({title, woeid}) => ({
    title, woeid
  }));
};

export const convertMphToKph = (value: number): number => {
  const multiplier = 0.868976;
  return value * multiplier;
};

