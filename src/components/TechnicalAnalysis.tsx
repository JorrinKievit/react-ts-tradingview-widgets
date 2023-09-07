import React, { memo } from "react";
import { ColorTheme, CopyrightStyles, Locales } from "../index";
import Widget from "./Widget";

export type TechnicalAnalysisProps = {
  interval?:
    | "1m"
    | "5m"
    | "15m"
    | "30m"
    | "1h"
    | "2h"
    | "4h"
    | "1D"
    | "1W"
    | "1M";
  width?: number | string;
  height?: number | string;
  autosize?: boolean;
  isTransparent?: boolean;
  symbol?: string;
  showIntervalTabs?: boolean;
  locale?: Locales;
  colorTheme?: ColorTheme;
  largeChartUrl?: string;

  children?: never;

  copyrightStyles?: CopyrightStyles;
};

const TechnicalAnalysis: React.FC<TechnicalAnalysisProps> = ({
  interval = "1m",
  width = 425,
  height = 450,
  autosize = false,
  isTransparent = false,
  symbol = "NASDAQ:AAPL",
  showIntervalTabs = true,
  locale = "en",
  colorTheme = "light",
  largeChartUrl = undefined,
  copyrightStyles,
  ...props
}) => {
  return (
    <Widget
      scriptHTML={{
        interval,
        ...(!autosize ? { width } : { width: "100%" }),
        ...(!autosize ? { height } : { height: "100%" }),
        isTransparent,
        symbol,
        showIntervalTabs,
        locale,
        colorTheme,
        largeChartUrl,
        ...props,
      }}
      scriptSRC="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js"
      copyrightProps={{
        copyrightStyles,
        href: `https://www.tradingview.com/symbols/${symbol.replace(
          ":",
          "-"
        )}/technicals/`,
        spanText: `Technical Analysis for ${symbol}`,
      }}
    />
  );
};

export default memo(TechnicalAnalysis);
