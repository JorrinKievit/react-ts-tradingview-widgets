import React, { memo } from "react";
import { ColorTheme, CopyrightStyles, DisplayMode, Locales } from "../index";
import Widget from "./Widget";

export type FundamentalDataProps = {
  symbol?: string;
  colorTheme?: ColorTheme;
  isTransparent?: boolean;
  largeChartUrl?: string;
  displayMode?: DisplayMode;
  width?: string | number;
  height?: string | number;
  autosize?: boolean;
  locale?: Locales;

  children?: never;

  copyrightStyles?: CopyrightStyles;
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
  copyrightStyles,
  ...props
}) => {
  return (
    <Widget
      scriptHTML={{
        ...(!autosize ? { width } : { width: "100%" }),
        ...(!autosize ? { height } : { height: "100%" }),
        symbol,
        colorTheme,
        isTransparent,
        largeChartUrl,
        displayMode,
        locale,
        ...props,
      }}
      scriptSRC="https://s3.tradingview.com/external-embedding/embed-widget-financials.js"
      copyrightProps={{
        copyrightStyles,
        href: `https://www.tradingview.com/symbols/${symbol.replace(
          ":",
          "-"
        )}/financials-overview/`,
        spanText: `${symbol} Fundamental Data`,
      }}
    />
  );
};

export default memo(FundamentalData);
