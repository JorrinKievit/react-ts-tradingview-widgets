import React from "react";
import setDivRef from "../setDivRef";
import { ColorTheme, DisplayMode } from "../index";

export type FundamentalDataProps = {
  symbol?: string;
  colorTheme?: ColorTheme;
  isTransparent?: boolean;
  largeChartUrl?: string;
  displayMode?: DisplayMode;
  width?: string | number;
  height?: string | number;
  autosize?: boolean;
  locale?: string;

  children?: never;
};

const FundamentalData: React.FC<FundamentalDataProps> = ({
  symbol = "NASDAQ:AAPL",
  colorTheme = "light",
  isTransparent = false,
  largeChartUrl = undefined,
  displayMode = "regular",
  width = 480,
  height = 830,
  autosize = false,
  locale = "en",
  ...props
}) => {
  return setDivRef(
    {
      ...(!autosize ? { width } : { width: "100%" }),
      ...(!autosize ? { height } : { height: "100%" }),
      symbol,
      colorTheme,
      isTransparent,
      largeChartUrl,
      displayMode,
      locale,
      ...props,
    },
    "https://s3.tradingview.com/external-embedding/embed-widget-financials.js"
  );
};

export default FundamentalData;
