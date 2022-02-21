import React, {SyntheticEvent, useCallback, useMemo, useState} from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {WeatherInfoTable} from "./WeatherInfoTable";
import {
  ActiveLocationStateDataType,
  WeatherStateDataType
} from "../../../state/types/stateData.types";
import {getIsoDateString} from "../../../api/dataUtils";
import {WeatherGeneralInfo} from "./WeatherGeneralInfo";
import {WeatherIcon} from "../../icons/WeatherIcon";
import tabsClasses from "@mui/material/Tabs/tabsClasses";

type WeatherTabsProps = {
  data: ActiveLocationStateDataType;
};

export const WeatherTabs: React.FC<WeatherTabsProps> = ({ data }) => {

  const [activeDate, setActiveDate] = useState<string>(getIsoDateString(new Date()));

  const { locationData: { title, parentTitle }, weatherByDate } = data || {};

  const handleChange = useCallback((event: SyntheticEvent, newValue: string) => {
    setActiveDate(newValue);
  }, [setActiveDate]);

  const dataByActiveTab = useMemo(() => (weatherByDate[activeDate]), [weatherByDate, activeDate]);

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
          Object.values(weatherByDate).map(({ dateDay, weatherStateAbbr, applicableDate }: WeatherStateDataType, idx) => (
            <Tab
              label={dateDay}
              icon={<WeatherIcon weatherKey={weatherStateAbbr} fontSize={'small'} />}
              iconPosition={'end'}
              value={applicableDate}
              key={idx}
            />
          ))
        }
      </Tabs>
      <WeatherGeneralInfo data={dataByActiveTab} parentTitle={parentTitle} title={title} />
      <WeatherInfoTable weatherDataByLocation={dataByActiveTab} />
    </Box>
  );
};

