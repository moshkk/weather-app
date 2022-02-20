import {configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import locationReducer, {LocationSliceKey} from "./slices/locationDataSlice";

export const store = configureStore({
  reducer: {
    [LocationSliceKey]: locationReducer
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
