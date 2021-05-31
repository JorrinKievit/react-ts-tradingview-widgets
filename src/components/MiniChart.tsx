import React from "react";
import setDivRef from "../setDivRef";
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
  trendLineColor = "#37a6ef",
  underLineColor = "#E3F2FD",
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
