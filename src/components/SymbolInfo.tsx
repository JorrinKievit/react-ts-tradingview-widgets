import React from "react";
import setDivRef from "../setDivRef";
import { ColorTheme } from "../index";

export type SymbolInfoProps = {
  symbol?: string;
  width?: string | number;
  locale?: string;
  colorTheme?: ColorTheme;
  isTransparent?: boolean;
  largeChartUrl?: string;

  children?: never;
};

const SymbolInfo: React.FC<SymbolInfoProps> = ({
  symbol = "NASDAQ:AAPL",
  width = 1000,
  locale = "en",
  colorTheme = "light",
  isTransparent = false,
  largeChartUrl = undefined,
  ...props
}) => {
  return setDivRef(
    {
      symbol,
      width,
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
