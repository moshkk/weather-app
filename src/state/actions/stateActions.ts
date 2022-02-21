import {createAsyncThunk} from "@reduxjs/toolkit";
import {THUNK_ACTION_TYPES} from "./action.types";
import {fetchLocationDataById, fetchLocationSearch} from "../../api/apiFetch";
import {ThunkApiType} from "../store";
import { setLocationData } from "../slices/locationDataSlice";
import {mapLocationFullDataToState, mapSearchResultsDataToState} from "../../api/dataUtils";
import {SearchItemListStateDataType} from "../types/stateData.types";

export const getLocationByIdAction = createAsyncThunk<void, number, ThunkApiType>
(THUNK_ACTION_TYPES.LOCATION_BY_ID, (payload, { dispatch }) => {
  const result = fetchLocationDataById(payload);
  return result.then(data => {
    const mappedData = mapLocationFullDataToState(data);
    dispatch(setLocationData(mappedData));
  });
});

export const searchForLocationAction = createAsyncThunk<SearchItemListStateDataType, string, ThunkApiType>
(THUNK_ACTION_TYPES.LOCATION_SEARCH, (payload, { dispatch }) => {
  const searchResults = fetchLocationSearch(payload);
  return searchResults.then(data => {
    return mapSearchResultsDataToState(data);
  });
});
