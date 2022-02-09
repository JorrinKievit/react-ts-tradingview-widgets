import React from "react";
import { ColorTheme, CopyrightStyles, Locales } from "../index";
import Copyright from "./Copyright";
import Widget from "./Widget";

export type TickerProps = {
  colorTheme?: ColorTheme;
  isTransparent?: boolean;
  showSymbolLogo?: boolean;
  locale?: Locales;
  symbols?: TickerSymbols;

  children?: never;

  copyrightStyles?: CopyrightStyles;
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
  copyrightStyles,
  ...props
}) => {
  return (
    <div id="tradingview_widget_wrapper">
      <Widget
        scriptHTML={{
          colorTheme,
          isTransparent,
          showSymbolLogo,
          locale,
          symbols,
          ...props,
        }}
        scriptSRC="https://s3.tradingview.com/external-embedding/embed-widget-tickers.js"
      ></Widget>
      <Copyright
        copyrightStyles={copyrightStyles}
        href={`https://www.tradingview.com/`}
        spanText={`Qoutes`}
      />
    </div>
  );
};

export default Ticker;
