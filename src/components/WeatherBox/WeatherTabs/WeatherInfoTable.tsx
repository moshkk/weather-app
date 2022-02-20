import React from "react";
import {TableContainer} from "@mui/material";
import Table from "@mui/material/Table";
import Box from "@mui/material/Box";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {WeatherStateDataType} from "../../../types/weatherStateData.types";

const celsiumSign = <span>&deg;C</span>;
const percentageSign = '%';

type WeatherInfoTableProps = {
  weatherDataByLocation: WeatherStateDataType;
};

export const WeatherInfoTable: React.FC<WeatherInfoTableProps> = ({ weatherDataByLocation }) => {

  const {
    id, actualTemp, airPressure, applicableDate, dateDay, humidity, maxTemp, minTemp, predictability,
    visibility, weatherStateAbbr, weatherStateName, windDirectionCompas, windSpeed
  } = weatherDataByLocation || {};

  return(
    <TableContainer component={Box}>
      <Table size={'small'}>
        <TableBody>
          <TableRow>
            <TableCell>Temperature:</TableCell>
            <TableCell>Min: {minTemp}{celsiumSign}, Max: {maxTemp}{celsiumSign}, Current: {actualTemp}{celsiumSign}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Wind:</TableCell>
            <TableCell>Direction: {windDirectionCompas}, Speed: {windSpeed} mph</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Air pressure:</TableCell>
            <TableCell>{airPressure} mbar</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Humidity:</TableCell>
            <TableCell>{humidity}{percentageSign}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Visibility:</TableCell>
            <TableCell>{visibility} miles</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Forecast accuracy:</TableCell>
            <TableCell>{predictability}{percentageSign}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
