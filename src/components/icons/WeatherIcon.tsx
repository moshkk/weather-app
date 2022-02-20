import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import {iconToWeatherKeyMap} from "../WeatherBox/utils/iconToWeatherKeyMap";

type WeatherIconProps = {
  weatherKey: string;
  fontSize: 'inherit' | 'large' | 'medium' | 'small';
};

export const WeatherIcon: React.FC<WeatherIconProps> = ({ weatherKey, fontSize }) => {

  const IconComponent = iconToWeatherKeyMap[weatherKey];

  return(
    <SvgIcon component={IconComponent} fontSize={fontSize} inheritViewBox />
  );
};
