import React from "react";
import setDivRef from "../setDivRef";
import { ColorTheme, DefaultColumns } from "../index";

export type ScreenerProps = {
  width?: string | number;
  height?: string | number;
  autosize?: boolean;
  defaultColumn?: DefaultColumns;
  defaultScreen?:
    | "general"
    | "top_gainers"
    | "top_losers"
    | "ath"
    | "atl"
    | "above_52wk_high"
    | "below_52wk_low"
    | "monthly_high"
    | "monthly_low"
    | "most_volatile"
    | "overbought"
    | "oversold"
    | "outperforming_SMA50"
    | "underperforming_SMA50";
  market?:
    | "america"
    | "australia"
    | "canada"
    | "egypt"
    | "germany"
    | "india"
    | "israel"
    | "italy"
    | "luxembourg"
    | "poland"
    | "sweden"
    | "turkey"
    | "uk"
    | "vietnam"
    | "forex"
    | "crypto";
  showToolbar?: boolean;
  colorTheme?: ColorTheme;
  locale?: string;
  isTransparent?: boolean;
  largeChartUrl?: string;

  children?: never;
};

const Screener: React.FC<ScreenerProps> = ({
  width = 1100,
  height = 512,
  autosize = false,
  defaultColumn = "overview",
  defaultScreen = "general",
  market = "forex",
  showToolbar = true,
  colorTheme = "light",
  locale = "en",
  isTransparent = false,
  largeChartUrl = undefined,
  ...props
}) => {
  return setDivRef(
    {
      ...(!autosize ? { width } : { width: "100%" }),
      ...(!autosize ? { height } : { height: "100%" }),
      autosize,
      defaultColumn,
      defaultScreen,
      market,
      showToolbar,
      colorTheme,
      locale,
      isTransparent,
      largeChartUrl,
      ...props,
    },
    "https://s3.tradingview.com/external-embedding/embed-widget-screener.js"
  );
};

export default Screener;
