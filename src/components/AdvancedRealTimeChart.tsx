import React from "react";
import { ColorTheme } from "../index";
import setDivRef from "../setDivRef";

export type AdvancedRealTimeChartProps = {
  width?: number | string;
  height?: number | string;
  autosize?: boolean;
  symbol?: string;
  interval?:
    | "1"
    | "3"
    | "5"
    | "15"
    | "30"
    | "60"
    | "120"
    | "180"
    | "240"
    | "D"
    | "W";
  range?: "1D" | "5D" | "1M" | "3M" | "6M" | "YTD" | "12M" | "60M" | "ALL";
  timezone?: string;
  theme?: ColorTheme;
  style?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
  locale?: string;
  toolbar_bg?: string;
  enable_publishing?: boolean;
  hide_top_toolbar?: boolean;
  hide_legend?: boolean;
  withdateranges?: boolean;
  hide_side_toolbar?: boolean;
  allow_symbol_change?: boolean;
  save_image?: boolean;
  details?: boolean;
  hotlist?: boolean;
  calendar?: boolean;
  container_id?: string;
  studies?: string[];

  children?: never;
};

const AdvancedRealTimeChart: React.FC<AdvancedRealTimeChartProps> = ({
  width = 980,
  height = 610,
  autosize = false,
  symbol = "NASDAQ:AAPL",
  interval = "1",
  range = undefined,
  timezone = "UTC",
  theme = "light",
  style = "1",
  locale = "en",
  toolbar_bg = "#f1f3f6",
  enable_publishing = false,
  hide_top_toolbar = false,
  hide_legend = false,
  withdateranges = true,
  hide_side_toolbar = false,
  allow_symbol_change = true,
  save_image = true,
  details = false,
  hotlist = false,
  calendar = false,
  container_id = `advanced-chart-widget-container_${Math.random()}`,
  studies = undefined,
  ...props
}) => {
  return setDivRef(
    {
      ...(!autosize ? { width } : { width: "100%" }),
      ...(!autosize ? { height } : { height: "100%" }),
      symbol,
      ...(!range ? { interval } : { range }),
      timezone,
      theme,
      style,
      locale,
      toolbar_bg,
      enable_publishing,
      hide_top_toolbar,
      hide_legend,
      withdateranges,
      hide_side_toolbar,
      allow_symbol_change,
      save_image,
      details,
      hotlist,
      calendar,
      container_id,
      studies,
      ...props,
    },
    "https://s3.tradingview.com/tv.js",
    container_id,
    "Widget"
  );
};

export default AdvancedRealTimeChart;
