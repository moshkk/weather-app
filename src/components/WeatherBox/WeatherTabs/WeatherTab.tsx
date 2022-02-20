import React from "react";
import {WeatherIcon} from "../../icons/WeatherIcon";
import Tab, {TabProps} from "@mui/material/Tab";
import {WeatherStateDataType} from "../../../types/weatherStateData.types";

type WeatherTabProps = TabProps & {
  data: WeatherStateDataType;
  value: string;
};

export const WeatherTab: React.FC<WeatherTabProps> = ({data, value}) => {

  const { dateDay, weatherStateAbbr, applicableDate } = data;

  return(
    <Tab
      label={dateDay}
      icon={<WeatherIcon weatherKey={weatherStateAbbr} fontSize={'small'} />}
      iconPosition={'end'}
      value={value} />
  );
};
