import React from "react";
import { setDivRef } from "../utils";
import { ColorTheme, DisplayMode } from "../index";

export interface TickerTapeSymbol {
  proName: string;
  title: string;
}

export interface TickerTapeProps {
  symbols?: TickerTapeSymbol[];
  showSymbolLogo?: boolean;
  colorTheme?: ColorTheme;
  isTransparent?: boolean;
  largeChartUrl?: string;
  displayMode?: DisplayMode;
  locale?: string;

  children?: never;
}

const defaultSymbols: TickerTapeSymbol[] = [
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

const TickerTape: React.FC<TickerTapeProps> = ({
  symbols = defaultSymbols,
  showSymbolLogo = true,
  colorTheme = "light",
  isTransparent = false,
  largeChartUrl = undefined,
  displayMode = "adaptive",
  locale = "en",
  ...props
}) => {
  return setDivRef(
    {
      symbols,
      showSymbolLogo,
      colorTheme,
      isTransparent,
      largeChartUrl,
      displayMode,
      locale,
      ...props,
    },
    "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
  );
};

export default TickerTape;
