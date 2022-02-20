import {ApiFetchFnType} from "./api.types";
import {META_WEATHER_API_FETCH} from "./constants";

const processApiResponse = (response: Response) => {
  return response.json();
};

export const apiFetch: ApiFetchFnType = (endpointUrl) => {

  const init: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
  }

  return fetch(endpointUrl, {
    ...init
  }).then(processApiResponse);

};

export const fetchLocationDataById = (locationId: number) => {
  const requestUrl = META_WEATHER_API_FETCH.LOCATION + '/' + locationId + '/';
  return apiFetch(requestUrl);
};

export const fetchLocationSearch = (query: string) => {
  const requestUrl = META_WEATHER_API_FETCH.LOCATION_SEARCH + '/?query=' + query;
  return apiFetch(requestUrl);
};

