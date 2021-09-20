import React from "react";
import { setDivRef } from "../utils";
import { ColorTheme } from "../index";

export type SingleTickerProps = {
  symbol?: string;
  width?: string | number;
  autosize?: boolean;
  colorTheme?: ColorTheme;
  isTransparent?: boolean;
  locale?: string;
  largeChartUrl?: string;

  children?: never;
};

const SingleTicker: React.FC<SingleTickerProps> = ({
  symbol = "FX:EURUSD",
  width = 350,
  autosize = false,
  colorTheme = "light",
  isTransparent = false,
  locale = "en",
  largeChartUrl = undefined,
  ...props
}) => {
  return setDivRef(
    {
      symbol,
      ...(!autosize ? { width } : { width: "100%" }),
      colorTheme,
      isTransparent,
      locale,
      largeChartUrl,
      ...props,
    },
    "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js"
  );
};

export default SingleTicker;
