import {createAsyncThunk} from "@reduxjs/toolkit";
import {WEATHER_DATA_ACTION_TYPES} from "./action.types";
import {fetchLocationDataById} from "../../api/apiFetch";
import {ThunkApiType} from "../store";
import { setLocation } from "../slices/locationDataSlice";
import {mapDataToState} from "../../api/dataUtils";

export const getLocationByIdAction = createAsyncThunk<any, number, ThunkApiType>
(WEATHER_DATA_ACTION_TYPES.LOCATION_BY_ID, (payload, { dispatch }) => {
  const result = fetchLocationDataById(payload);
  return result.then(data => {
    const mappedData = mapDataToState(data);
    dispatch(setLocation(mappedData));
  });
});
