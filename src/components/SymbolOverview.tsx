import React from "react";
import { ColorTheme } from "../index";
import setDivRef from "../setDivRef";

export type SymbolOverviewProps = {
  symbols?: string[][];
  chartOnly?: boolean;
  width?: string | number;
  height?: string | number;
  locale?: string;
  colorTheme?: ColorTheme;
  gridLineColor?: string;
  trendLineColor?: string;
  fontColor?: string;
  underLineColor?: string;
  isTransparent?: boolean;
  autosize?: boolean;
  container_id?: string;

  children?: never;
};

const defaultSymbols = [
  ["Apple", "AAPL"],
  ["Google", "GOOGL"],
  ["Microsoft", "MSFT"],
];

const SymbolOverview: React.FC<SymbolOverviewProps> = ({
  symbols = defaultSymbols,
  chartOnly = false,
  width = 1000,
  height = 400,
  locale = "en",
  colorTheme = "light",
  gridLineColor = "#F0F3FA",
  trendLineColor = "#2196F3",
  fontColor = "#787B86",
  underLineColor = "#E3F2FD",
  isTransparent = false,
  autosize = false,
  container_id = `symbol-overview-widget-container_${Math.random()}`,
  ...props
}) => {
  return setDivRef(
    {
      symbols,
      chartOnly,
      ...(!autosize ? { width } : { width: "100%" }),
      ...(!autosize ? { height } : { height: "100%" }),
      locale,
      colorTheme,
      gridLineColor,
      trendLineColor,
      fontColor,
      underLineColor,
      isTransparent,
      autosize,
      container_id,
      ...props,
    },
    "https://s3.tradingview.com/tv.js",
    container_id,
    "MediumWidget"
  );
};

export default SymbolOverview;
