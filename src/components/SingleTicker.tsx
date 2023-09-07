import React, { memo } from "react";
import { ColorTheme, CopyrightStyles, Locales } from "../index";
import Widget from "./Widget";

export type SingleTickerProps = {
  symbol?: string;
  width?: string | number;
  autosize?: boolean;
  colorTheme?: ColorTheme;
  isTransparent?: boolean;
  locale?: Locales;
  largeChartUrl?: string;

  children?: never;

  copyrightStyles?: CopyrightStyles;
};

const SingleTicker: React.FC<SingleTickerProps> = ({
  symbol = "FX:EURUSD",
  width = 350,
  autosize = false,
  colorTheme = "light",
  isTransparent = false,
  locale = "en",
  largeChartUrl = undefined,
  copyrightStyles,
  ...props
}) => {
  return (
    <Widget
      scriptHTML={{
        symbol,
        ...(!autosize ? { width } : { width: "100%" }),
        colorTheme,
        isTransparent,
        locale,
        largeChartUrl,
        ...props,
      }}
      scriptSRC="https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js"
      copyrightProps={{
        copyrightStyles,
        href: `https://www.tradingview.com/symbols/${symbol}/`,
        spanText: `${symbol} Rates`,
      }}
    />
  );
};

export default memo(SingleTicker);
