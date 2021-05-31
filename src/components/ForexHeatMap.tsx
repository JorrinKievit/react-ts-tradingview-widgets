import React from "react";
import setDivRef from "../setDivRef";
import { ColorTheme } from "../index";

export type ForexHeatMapProps = {
  width?: string | number;
  height?: string | number;
  autosize?: boolean;
  currencies?: string[];
  isTransparent?: boolean;
  colorTheme?: ColorTheme;
  locale?: string;
  largeChartUrl?: string;

  children?: never;
};

const defaultCurrencies = [
  "EUR",
  "USD",
  "JPY",
  "GBP",
  "CHF",
  "AUD",
  "CAD",
  "NZD",
  "CNY",
];

const ForexHeatMap: React.FC<ForexHeatMapProps> = ({
  width = 700,
  height = 400,
  autosize = false,
  currencies = defaultCurrencies,
  isTransparent = false,
  colorTheme = "light",
  locale = "en",
  largeChartUrl = undefined,
  ...props
}) => {
  return setDivRef(
    {
      ...(!autosize ? { width } : { width: "100%" }),
      ...(!autosize ? { height } : { height: "100%" }),
      currencies,
      isTransparent,
      colorTheme,
      locale,
      largeChartUrl,
      ...props,
    },
    "https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js"
  );
};

export default ForexHeatMap;
