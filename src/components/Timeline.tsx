import React from "react";
import setDivRef from "../setDivRef";
import { ColorTheme, DisplayMode } from "../index";

export type TimelineProps = {
  colorTheme?: ColorTheme;
  isTransparent?: boolean;
  displayMode?: DisplayMode;
  width?: number | number;
  height?: number | number;
  autosize?: boolean;
  locale?: string;
  symbol?: string;
  largeChartUrl?: string;

  children?: never;
};

const Timeline: React.FC<TimelineProps> = ({
  colorTheme = "light",
  isTransparent = false,
  displayMode = "regular",
  width = 480,
  height = 830,
  autosize = false,
  locale = "en",
  symbol = undefined,
  largeChartUrl = undefined,
  ...props
}) => {
  return setDivRef(
    {
      ...(!autosize ? { width } : { width: "100%" }),
      ...(!autosize ? { height } : { height: "100%" }),
      colorTheme,
      isTransparent,
      displayMode,
      locale,
      symbol,
      largeChartUrl,
      ...props,
    },
    "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js"
  );
};

export default Timeline;
