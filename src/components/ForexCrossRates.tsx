import React, { memo } from "react";
import { ColorTheme, Currencies, CopyrightStyles, Locales } from "../index";
import Widget from "./Widget";

export type ForexCrossRatesProps = {
  width?: number | string;
  height?: number | string;
  autosize?: boolean;
  currencies?: Currencies[];
  isTransparent?: boolean;
  colorTheme?: ColorTheme;
  locale?: Locales;
  largeChartUrl?: string;

  children?: never;

  copyrightStyles?: CopyrightStyles;
};

const defaultCurrencies: Currencies[] = [
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

const ForexCrossRates: React.FC<ForexCrossRatesProps> = ({
  width = 770,
  height = 400,
  autosize = false,
  currencies = defaultCurrencies,
  isTransparent = false,
  colorTheme = "light",
  locale = "en",
  largeChartUrl = undefined,
  copyrightStyles,
  ...props
}) => {
  return (
    <Widget
      scriptHTML={{
        ...(!autosize ? { width } : { width: "100%" }),
        ...(!autosize ? { height } : { height: "100%" }),
        currencies,
        isTransparent,
        colorTheme,
        locale,
        largeChartUrl,
        ...props,
      }}
      scriptSRC="https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js"
      copyrightProps={{
        copyrightStyles,
        href: `https://www.tradingview.com/markets/currencies/forex-cross-rates/`,
        spanText: `Exchange Rates`,
      }}
    />
  );
};

export default memo(ForexCrossRates);
