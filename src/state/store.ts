import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import locationDataReducer, {LocationDataSliceKey} from "./slices/locationDataSlice";
import searchResultsReducer, {LocationSearchResultsKey} from "./slices/locationSearchSlice";

export const store = configureStore({
  reducer: {
    [LocationDataSliceKey]: locationDataReducer,
    [LocationSearchResultsKey]: searchResultsReducer
  }
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
export type ThunkApiType = {
  state: RootStateType;
  dispatch: AppDispatchType;
};

export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
