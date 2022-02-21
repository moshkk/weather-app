import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
  ActiveLocationStateDataType,
  LocationStateType,
  WeatherStateByDateDataType
} from "../types/stateData.types";
import {getLocationByIdAction} from "../actions/stateActions";
import {ApiRequestStatusType} from "../types/common.types";

export const LocationDataSliceKey = 'LocationDataSliceKey';

type LocationDataStateType = {
  request: ApiRequestStatusType;
  data: ActiveLocationStateDataType;
};

const initialState: LocationDataStateType = {
  request: {
    loading: false,
  },
  data: {
    locationData: {} as LocationStateType,
    weatherByDate: {} as WeatherStateByDateDataType,
  }
};

export const locationDataSlice = createSlice({
  name: LocationDataSliceKey,
  initialState,
  reducers: {
    setLocationData: (state, action: PayloadAction<ActiveLocationStateDataType>) => {
      state.data.locationData = action.payload.locationData;
      state.data.weatherByDate = action.payload.weatherByDate;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getLocationByIdAction.fulfilled, (state, action) => {
      state.request.loading = false;
    })
    builder.addCase(getLocationByIdAction.pending, (state, action) => {
      state.request.loading = true;
    })
    builder.addCase(getLocationByIdAction.rejected, (state, action) => {
      state.request.loading = false;
    })
  }
});

export const { setLocationData } = locationDataSlice.actions;
export default locationDataSlice.reducer;
