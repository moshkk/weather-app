import React from "react";
import {TableContainer} from "@mui/material";
import Table from "@mui/material/Table";
import Box from "@mui/material/Box";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {WeatherStateDataType} from "../../../state/types/stateData.types";

const celsiumSign = <span>&deg;C</span>;
const percentageSign = '%';

type WeatherInfoTableProps = {
  weatherDataByLocation: WeatherStateDataType;
};

export const WeatherInfoTable: React.FC<WeatherInfoTableProps> = ({weatherDataByLocation}) => {

  const {
    actualTemp, airPressure, humidity, maxTemp, minTemp, predictability, visibility, windDirectionCompas, windSpeed
  } = weatherDataByLocation || {};

  return (
    <TableContainer component={Box}>
      <Table size={'small'}>
        <TableBody>
          <TableRow>
            <TableCell>Temperature:</TableCell>
            <TableCell>Min: {minTemp}{celsiumSign}, Max: {maxTemp}{celsiumSign},
              Current: {actualTemp}{celsiumSign}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Wind:</TableCell>
            <TableCell>Direction: {windDirectionCompas}, Speed: {windSpeed} kt</TableCell>
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
