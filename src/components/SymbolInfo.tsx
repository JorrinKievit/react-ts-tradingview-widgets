import React, { memo } from "react";
import { ColorTheme, CopyrightStyles, Locales } from "../index";
import Widget from "./Widget";

export type SymbolInfoProps = {
  symbol?: string;
  width?: string | number;
  autosize?: boolean;
  locale?: Locales;
  colorTheme?: ColorTheme;
  isTransparent?: boolean;
  largeChartUrl?: string;

  children?: never;

  copyrightStyles?: CopyrightStyles;
};

const SymbolInfo: React.FC<SymbolInfoProps> = ({
  symbol = "NASDAQ:AAPL",
  width = 1000,
  autosize = false,
  locale = "en",
  colorTheme = "light",
  isTransparent = false,
  largeChartUrl = undefined,
  copyrightStyles,
  ...props
}) => {
  return (
    <Widget
      scriptHTML={{
        symbol,
        ...(!autosize ? { width } : { width: "100%" }),
        locale,
        colorTheme,
        isTransparent,
        largeChartUrl,
        ...props,
      }}
      scriptSRC="https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js"
      copyrightProps={{
        copyrightStyles,
        href: `https://www.tradingview.com/symbols/${symbol}/`,
        spanText: `${symbol} Profile`,
      }}
    />
  );
};

export default memo(SymbolInfo);
