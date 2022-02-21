import React from "react";
import {WeatherDisplayContainer} from "../WeatherBox/WeatherDisplay/WeatherDisplayContainer";
import {SearchBoxContainer} from "../SearchBox/SearchBoxContainer";
import {PageCenteredLayout} from "../../system/layouts/PageCenteredLayout";

export const AppContainerBox: React.FC = () => (
  <PageCenteredLayout>
    <SearchBoxContainer />
    <WeatherDisplayContainer />
  </PageCenteredLayout>
);
