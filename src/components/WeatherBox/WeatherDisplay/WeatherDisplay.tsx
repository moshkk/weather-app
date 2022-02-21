import React, {useMemo} from "react";
import styled from "@mui/material/styles/styled";
import {WeatherTabs} from "../WeatherTabs/WeatherTabs";
import {ActiveLocationStateDataType} from "../../../state/types/stateData.types";
import {PaddedContentFlexBoxColumn} from "../../common/components";
import {Loading} from "../Loading";
import {NoData} from "../NoData";

export const WeatherDisplayFlex = styled(PaddedContentFlexBoxColumn)(({theme}) => ({
  minHeight: 400,
}));

type WeatherDisplayProps = {
  data: ActiveLocationStateDataType;
  loading: boolean;
};

export const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ data, loading }) => {

  const { weatherByDate, locationData } = data;

  const hasData = useMemo(() => (
    Object.keys(weatherByDate).length && Object.keys(locationData).length
  ), [data]);

  return(
    <WeatherDisplayFlex>
      {loading ? <Loading/> :
        hasData ? <WeatherTabs data={data}/> : <NoData />}
    </WeatherDisplayFlex>
  );
};
