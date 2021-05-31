import React from "react";
import setDivRef from "../setDivRef";
import { ColorTheme } from "../index";

export type TickerProps = {
  colorTheme?: ColorTheme;
  isTransparent?: boolean;
  showSymbolLogo?: boolean;
  locale?: string;
  symbols?: TickerSymbols;

  children?: never;
};

export type TickerSymbols = TickerSymbol[];

export type TickerSymbol = {
  proName: string;
  title: string;
};

const defaultSymbols: TickerSymbols = [
  {
    proName: "FOREXCOM:SPXUSD",
    title: "S&P 500",
  },
  {
    proName: "FOREXCOM:NSXUSD",
    title: "Nasdaq 100",
  },
  {
    proName: "FX_IDC:EURUSD",
    title: "EUR/USD",
  },
  {
    proName: "BITSTAMP:BTCUSD",
    title: "BTC/USD",
  },
  {
    proName: "BITSTAMP:ETHUSD",
    title: "ETH/USD",
  },
];

const Ticker: React.FC<TickerProps> = ({
  colorTheme = "light",
  isTransparent = false,
  showSymbolLogo = true,
  locale = "en",
  symbols = defaultSymbols,
  ...props
}) => {
  return setDivRef(
    {
      colorTheme,
      isTransparent,
      showSymbolLogo,
      locale,
      symbols,
      ...props,
    },
    "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js"
  );
};

export default Ticker;
