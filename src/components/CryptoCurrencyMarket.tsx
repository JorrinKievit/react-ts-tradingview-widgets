import React from "react";
import setDivRef from "../setDivRef";
import { ColorTheme, DefaultColumns } from "../index";

export type CryptoCurrencyMarketProps = {
  width?: string | number;
  height?: string | number;
  autosize?: boolean;
  defaultColumn?: DefaultColumns;
  screener_type?: string;
  displayCurrency?: "USD" | "BTC";
  colorTheme?: ColorTheme;
  locale?: string;
  isTransparent?: boolean;

  children?: never;
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
  ...props
}) => {
  return setDivRef(
    {
      ...(!autosize ? { width } : { width: "100%" }),
      ...(!autosize ? { height } : { height: "100%" }),
      defaultColumn,
      screener_type,
      displayCurrency,
      colorTheme,
      locale,
      isTransparent,
      ...props,
    },
    "https://s3.tradingview.com/external-embedding/embed-widget-screener.js"
  );
};

export default CryptoCurrencyMarket;
