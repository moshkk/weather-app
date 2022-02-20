import {ConsolidatedWeatherDataListType, WeatherObjectDataType} from "../types/weatherApiData.types";
import {ActiveLocationStateDataType, WeatherStateByDateDataType} from "../types/weatherStateData.types";

enum WEEK_DAYS {
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
};

export const roundNumber = (value: number) => {
  return Math.round(value);
};

export const getIsoDateString = (value: Date) => {
  return value.toISOString().split('T')[0];
};

export const convertWindSpeedToKnots = (value: number) => {
  return value;
};

export const getDayStringByDate = (value: string): string => {
  const day = new Date(value).getDay();
  return WEEK_DAYS[day];
};

const mapWeatherDataAndSortByDate = (inputData: ConsolidatedWeatherDataListType): WeatherStateByDateDataType => {
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

    if(!accum[applicable_date]) {
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
        windSpeed: roundNumber(wind_speed),
      };
    }

    return accum;
  }, {} as WeatherStateByDateDataType);
};

export const mapDataToState = (inputData: WeatherObjectDataType): ActiveLocationStateDataType => {

  const { consolidated_weather, title, woeid, parent: { title: parentTitle } } = inputData;
  const weatherDataByDate = mapWeatherDataAndSortByDate(consolidated_weather);

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
