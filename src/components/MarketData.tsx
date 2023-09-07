import React, { memo } from "react";
import { ColorTheme, CopyrightStyles, Locales } from "../index";
import Widget from "./Widget";

export interface MarketDataSymbol {
  name: string;
  displayName?: string;
}

export interface MarketDataSymbolsGroup {
  name: string;
  originalName: string;
  symbols: MarketDataSymbol[];
}

export interface MarketDataProps {
  width?: number | string;
  height?: number | string;
  autosize?: boolean;
  symbolsGroups?: MarketDataSymbolsGroup[];
  showSymbolLogo?: boolean;
  colorTheme?: ColorTheme;
  isTransparent?: boolean;
  locale?: Locales;
  largeChartUrl?: string;

  children?: never;

  copyrightStyles?: CopyrightStyles;
}

const defaultSymbolGroup = [
  {
    name: "Indices",
    originalName: "Indices",
    symbols: [
      {
        name: "FOREXCOM:SPXUSD",
        displayName: "S&P 500",
      },
      {
        name: "FOREXCOM:NSXUSD",
        displayName: "Nasdaq 100",
      },
      {
        name: "FOREXCOM:DJI",
        displayName: "Dow 30",
      },
      {
        name: "INDEX:NKY",
        displayName: "Nikkei 225",
      },
      {
        name: "INDEX:DEU30",
        displayName: "DAX Index",
      },
      {
        name: "FOREXCOM:UKXGBP",
        displayName: "UK 100",
      },
    ],
  },
  {
    name: "Commodities",
    originalName: "Commodities",
    symbols: [
      {
        name: "CME_MINI:ES1!",
        displayName: "S&P 500",
      },
      {
        name: "CME:6E1!",
        displayName: "Euro",
      },
      {
        name: "COMEX:GC1!",
        displayName: "Gold",
      },
      {
        name: "NYMEX:CL1!",
        displayName: "Crude Oil",
      },
      {
        name: "NYMEX:NG1!",
        displayName: "Natural Gas",
      },
      {
        name: "CBOT:ZC1!",
        displayName: "Corn",
      },
    ],
  },
  {
    name: "Bonds",
    originalName: "Bonds",
    symbols: [
      {
        name: "CME:GE1!",
        displayName: "Eurodollar",
      },
      {
        name: "CBOT:ZB1!",
        displayName: "T-Bond",
      },
      {
        name: "CBOT:UB1!",
        displayName: "Ultra T-Bond",
      },
      {
        name: "EUREX:FGBL1!",
        displayName: "Euro Bund",
      },
      {
        name: "EUREX:FBTP1!",
        displayName: "Euro BTP",
      },
      {
        name: "EUREX:FGBM1!",
        displayName: "Euro BOBL",
      },
    ],
  },
  {
    name: "Forex",
    originalName: "Forex",
    symbols: [
      {
        name: "FX:EURUSD",
      },
      {
        name: "FX:GBPUSD",
      },
      {
        name: "FX:USDJPY",
      },
      {
        name: "FX:USDCHF",
      },
      {
        name: "FX:AUDUSD",
      },
      {
        name: "FX:USDCAD",
      },
    ],
  },
];

const MarketData: React.FC<MarketDataProps> = ({
  width = 770,
  height = 450,
  autosize = false,
  symbolsGroups = defaultSymbolGroup,
  showSymbolLogo = true,
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
        ...(!autosize ? { width } : { width: "100%" }),
        ...(!autosize ? { height } : { height: "100%" }),
        symbolsGroups,
        showSymbolLogo,
        colorTheme,
        isTransparent,
        locale,
        largeChartUrl,
        ...props,
      }}
      scriptSRC="https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js"
      copyrightProps={{
        copyrightStyles,
        spanText: `Financial Markets`,
        href: "https://www.tradingview.com/markets/",
      }}
    />
  );
};

export default memo(MarketData);
