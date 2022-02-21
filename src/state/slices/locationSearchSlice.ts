import {ApiRequestStatusType} from "../types/common.types";
import {SearchItemListStateDataType} from "../types/stateData.types";
import {createSlice} from "@reduxjs/toolkit";
import {getLocationByIdAction, searchForLocationAction} from "../actions/stateActions";

export const LocationSearchResultsKey = 'LocationSearchResultsKey';

type LocationSearchStateType = {
  request: ApiRequestStatusType;
  searchResults: SearchItemListStateDataType;
};

const initialState: LocationSearchStateType = {
  request: {
    loading: false,
  },
  searchResults: [],
};

export const locationSearchSlice = createSlice({
  name: LocationSearchResultsKey,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchForLocationAction.fulfilled, (state, action) => {
      state.request.loading = false;
      state.searchResults = action.payload;
    })
    builder.addCase(searchForLocationAction.pending, (state, action) => {
      state.request.loading = true;
      state.searchResults = [];
    })
    builder.addCase(searchForLocationAction.rejected, (state, action) => {
      state.request.loading = false;
    })
  }
});

export default locationSearchSlice.reducer;
