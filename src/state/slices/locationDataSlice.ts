import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ActiveLocationStateDataType} from "../../types/weatherStateData.types";

export const LocationSliceKey = 'LocationSliceKey';

const initialState: ActiveLocationStateDataType = {
  locationData: {},
  weatherByDate: {},
} as ActiveLocationStateDataType;

export const locationDataSlice = createSlice({
  name: LocationSliceKey,
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<ActiveLocationStateDataType>) => {
      state.locationData = action.payload.locationData;
      state.weatherByDate = action.payload.weatherByDate;
    }
  }
});

export const { setLocation } = locationDataSlice.actions;
export default locationDataSlice.reducer;
