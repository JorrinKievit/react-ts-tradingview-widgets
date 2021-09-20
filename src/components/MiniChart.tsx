import React from "react";
import { setDivRef } from "../utils";
import { ColorTheme, DateRange } from "../index";

export type MiniChartProps = {
  symbol?: string;
  width?: number | number;
  height?: number | number;
  locale?: string;
  dateRange?: DateRange;
  colorTheme?: ColorTheme;
  trendLineColor?: string;
  underLineColor?: string;
  underLineBottomColor?: string;
  isTransparent?: boolean;
  autosize?: boolean;
  largeChartUrl?: string;

  children?: never;
};

const MiniChart: React.FC<MiniChartProps> = ({
  symbol = "FX:EURUSD",
  width = 350,
  height = 220,
  locale = "en",
  dateRange = "12M",
  colorTheme = "light",
  trendLineColor = "rgba(41, 98, 255, 1)",
  underLineColor = "rgba(41, 98, 255, 0.3)",
  underLineBottomColor = "rgba(41, 98, 255, 0)",
  isTransparent = false,
  autosize = false,
  largeChartUrl = undefined,
  ...props
}) => {
  return setDivRef(
    {
      symbol,
      ...(!autosize ? { width } : { width: "100%" }),
      ...(!autosize ? { height } : { height: "100%" }),
      locale,
      dateRange,
      colorTheme,
      trendLineColor,
      underLineColor,
      isTransparent,
      autosize,
      largeChartUrl,
      ...props,
    },
    "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js"
  );
};

export default MiniChart;
