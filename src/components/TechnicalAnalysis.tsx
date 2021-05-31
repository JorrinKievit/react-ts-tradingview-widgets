import React from "react";
import setDivRef from "../setDivRef";
import { ColorTheme } from "../index";

export type TechnicalAnalysisProps = {
  interval?: "1m" | "5m" | "15m" | "1h" | "4h" | "1D" | "1W" | "1M";
  width?: number | number;
  height?: number | number;
  autosize?: boolean;
  isTransparent?: boolean;
  symbol?: string;
  showIntervalTabs?: boolean;
  locale?: string;
  colorTheme?: ColorTheme;
  largeChartUrl?: string;

  children?: never;
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
  ...props
}) => {
  return setDivRef(
    {
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
    },
    "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js"
  );
};

export default TechnicalAnalysis;
