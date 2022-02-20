import React, {useMemo} from "react";
import Box from "@mui/material/Box";
import {WeatherObjectDataType} from "../../../types/weatherApiData.types";
import {WeatherTabs} from "../WeatherTabs/WeatherTabs";
import {ActiveLocationStateDataType} from "../../../types/weatherStateData.types";

type WeatherInfoProps = {
  data: ActiveLocationStateDataType;
};

export const WeatherInfo: React.FC<WeatherInfoProps> = ({ data }) => {

  const hasLocationWeather = useMemo(() => (data !== null), [data]);

  return(
    <Box>
      {hasLocationWeather && <WeatherTabs data={data} />}
    </Box>
  );
}
