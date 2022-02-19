import React from "react";
import {PageCenteredLayout} from "../system/layouts/PageCenteredLayout";
import {WeatherBox} from "../components/WeatherBox/WeatherBox";

export const Weather: React.FC = () => {
  return (
    <PageCenteredLayout>
      <WeatherBox />
    </PageCenteredLayout>
  );
};
