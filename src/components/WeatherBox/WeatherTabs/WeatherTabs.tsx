import React, {SyntheticEvent, useCallback, useState} from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {WeatherInfoTable} from "./WeatherInfoTable";
import {
  ActiveLocationStateDataType,
  WeatherStateDataType
} from "../../../types/weatherStateData.types";
import {getIsoDateString} from "../../../api/dataUtils";
import {WeatherInfoBox} from "./WeatherInfoBox";
import {WeatherIcon} from "../../icons/WeatherIcon";
import tabsClasses from "@mui/material/Tabs/tabsClasses";

type WeatherTabsProps = {
  data: ActiveLocationStateDataType;
};

export const WeatherTabs: React.FC<WeatherTabsProps> = ({ data }) => {

  const [activeDate, setActiveDate] = useState<string>(getIsoDateString(new Date()));

  const { locationData: { title, parentTitle }, weatherByDate } = data || {};

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setActiveDate(newValue);
  };

  const dataByActiveTab = weatherByDate[activeDate];

  const weatherBoxProps = {
    title,
    parentTitle,
    data: dataByActiveTab
  };

  return(
    <Box>
      <Tabs
        value={activeDate}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          }
        }}
      >
        {
          Object.values(weatherByDate).map((item: WeatherStateDataType, idx) => {

            const { weatherStateAbbr, dateDay, applicableDate } = item;

            return(
              <Tab
                label={dateDay}
                icon={<WeatherIcon weatherKey={weatherStateAbbr} fontSize={'small'} />}
                iconPosition={'end'}
                value={applicableDate} />
            );
          })
        }
      </Tabs>
      <WeatherInfoBox {...weatherBoxProps} />
      <WeatherInfoTable weatherDataByLocation={dataByActiveTab} />
    </Box>
  );
};

