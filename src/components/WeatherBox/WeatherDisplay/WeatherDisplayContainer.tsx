import React from "react";
import {useAppSelector} from "../../../state/store";
import {LocationDataSliceKey} from "../../../state/slices/locationDataSlice";
import {WeatherDisplay} from "./WeatherDisplay";

export const WeatherDisplayContainer: React.FC = () => {

  const { data, loading } = useAppSelector(({ [LocationDataSliceKey]: { data, request: { loading } } }) => ({
    data,
    loading
  }));

  return(
    <WeatherDisplay data={data} loading={loading} />
  );
};
