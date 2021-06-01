import React from "react";
import setDivRef from "../setDivRef";
import { ColorTheme } from "../index";

export type SymbolInfoProps = {
  symbol?: string;
  width?: string | number;
  autosize?: boolean;
  locale?: string;
  colorTheme?: ColorTheme;
  isTransparent?: boolean;
  largeChartUrl?: string;

  children?: never;
};

const SymbolInfo: React.FC<SymbolInfoProps> = ({
  symbol = "NASDAQ:AAPL",
  width = 1000,
  autosize = false,
  locale = "en",
  colorTheme = "light",
  isTransparent = false,
  largeChartUrl = undefined,
  ...props
}) => {
  return setDivRef(
    {
      symbol,
      ...(!autosize ? { width } : { width: "100%" }),
      locale,
      colorTheme,
      isTransparent,
      largeChartUrl,
      ...props,
    },
    "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js"
  );
};

export default SymbolInfo;
