import React, { memo } from "react";
import { ColorTheme, CopyrightStyles, Locales } from "../index";
import Widget from "./Widget";

export type CryptoCurrencyMarketProps = {
  width?: string | number;
  height?: string | number;
  autosize?: boolean;
  defaultColumn?:
    | "overview"
    | "performance"
    | "oscillators"
    | "moving_averages";
  screener_type?: "crypto_mkt";
  displayCurrency?: "USD" | "BTC";
  colorTheme?: ColorTheme;
  locale?: Locales;
  isTransparent?: boolean;

  children?: never;

  copyrightStyles?: CopyrightStyles;
};

const CryptoCurrencyMarket: React.FC<CryptoCurrencyMarketProps> = ({
  width = 1000,
  height = 490,
  autosize = false,
  defaultColumn = "overview",
  screener_type = "crypto_mkt",
  displayCurrency = "USD",
  colorTheme = "light",
  locale = "en",
  isTransparent = false,
  copyrightStyles,
  ...props
}) => {
  return (
    <Widget
      scriptHTML={{
        ...(!autosize ? { width } : { width: "100%" }),
        ...(!autosize ? { height } : { height: "100%" }),
        defaultColumn,
        screener_type,
        displayCurrency,
        colorTheme,
        locale,
        isTransparent,
        ...props,
      }}
      scriptSRC="https://s3.tradingview.com/external-embedding/embed-widget-screener.js"
      copyrightProps={{
        copyrightStyles,
        href: `https://www.tradingview.com/markets/cryptocurrencies/prices-all/`,
        spanText: `Cryptocurrency Markets`,
      }}
    />
  );
};

export default memo(CryptoCurrencyMarket);
