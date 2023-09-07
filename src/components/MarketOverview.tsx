import React, { memo } from "react";
import { ColorTheme, DateRange, CopyrightStyles, Locales } from "../index";
import Widget from "./Widget";

export type MarketOverviewSymbol = {
  s: string;
  d?: string;
};

export type MarketOverviewTab = {
  title: string;
  symbols: MarketOverviewSymbol[];
  originalTitle: string;
};

export type MarketOverviewProps = {
  colorTheme?: ColorTheme;
  dateRange?: DateRange;
  showChart?: boolean;
  locale?: Locales;
  largeChartUrl?: string;
  isTransparent?: boolean;
  showSymbolLogo?: boolean;
  showFloatingTooltip?: boolean;
  width?: string | number;
  height?: string | number;
  autosize?: boolean;
  plotLineColorGrowing?: string;
  plotLineColorFalling?: string;
  gridLineColor?: string;
  scaleFontColor?: string;
  belowLineFillColorGrowing?: string;
  belowLineFillColorFalling?: string;
  belowLineFillColorGrowingBottom?: string;
  belowLineFillColorFallingBottom?: string;
  symbolActiveColor?: string;
  tabs?: MarketOverviewTab[];

  children?: never;

  copyrightStyles?: CopyrightStyles;
};

const defaultTabs: MarketOverviewTab[] = [
  {
    title: "Indices",
    symbols: [
      {
        s: "FOREXCOM:SPXUSD",
        d: "S&P 500",
      },
      {
        s: "FOREXCOM:NSXUSD",
        d: "Nasdaq 100",
      },
      {
        s: "FOREXCOM:DJI",
        d: "Dow 30",
      },
      {
        s: "INDEX:NKY",
        d: "Nikkei 225",
      },
      {
        s: "INDEX:DEU30",
        d: "DAX Index",
      },
      {
        s: "FOREXCOM:UKXGBP",
        d: "UK 100",
      },
    ],
    originalTitle: "Indices",
  },
  {
    title: "Commodities",
    symbols: [
      {
        s: "CME_MINI:ES1!",
        d: "S&P 500",
      },
      {
        s: "CME:6E1!",
        d: "Euro",
      },
      {
        s: "COMEX:GC1!",
        d: "Gold",
      },
      {
        s: "NYMEX:CL1!",
        d: "Crude Oil",
      },
      {
        s: "NYMEX:NG1!",
        d: "Natural Gas",
      },
      {
        s: "CBOT:ZC1!",
        d: "Corn",
      },
    ],
    originalTitle: "Commodities",
  },
  {
    title: "Bonds",
    symbols: [
      {
        s: "CME:GE1!",
        d: "Eurodollar",
      },
      {
        s: "CBOT:ZB1!",
        d: "T-Bond",
      },
      {
        s: "CBOT:UB1!",
        d: "Ultra T-Bond",
      },
      {
        s: "EUREX:FGBL1!",
        d: "Euro Bund",
      },
      {
        s: "EUREX:FBTP1!",
        d: "Euro BTP",
      },
      {
        s: "EUREX:FGBM1!",
        d: "Euro BOBL",
      },
    ],
    originalTitle: "Bonds",
  },
  {
    title: "Forex",
    symbols: [
      {
        s: "FX:EURUSD",
      },
      {
        s: "FX:GBPUSD",
      },
      {
        s: "FX:USDJPY",
      },
      {
        s: "FX:USDCHF",
      },
      {
        s: "FX:AUDUSD",
      },
      {
        s: "FX:USDCAD",
      },
    ],
    originalTitle: "Forex",
  },
];

const MarketOverview: React.FC<MarketOverviewProps> = ({
  colorTheme = "light",
  dateRange = "12M",
  showChart = true,
  locale = "en",
  largeChartUrl = undefined,
  isTransparent = false,
  showSymbolLogo = true,
  showFloatingTooltip = false,
  width = 400,
  height = 660,
  autosize = false,
  plotLineColorGrowing = "rgba(33, 150, 243, 1)",
  plotLineColorFalling = "rgba(33, 150, 243, 1)",
  gridLineColor = "rgba(240, 243, 250, 1)",
  scaleFontColor = "rgba(120, 123, 134, 1)",
  belowLineFillColorGrowing = "rgba(33, 150, 243, 0.12)",
  belowLineFillColorFalling = "rgba(33, 150, 243, 0.12)",
  belowLineFillColorGrowingBottom = "rgba(41, 98, 255, 0)",
  belowLineFillColorFallingBottom = "rgba(41, 98, 255, 0)",
  symbolActiveColor = "rgba(33, 150, 243, 0.12)",
  tabs = defaultTabs,
  copyrightStyles,
  ...props
}) => {
  return (
    <Widget
      scriptHTML={{
        colorTheme,
        dateRange,
        showChart,
        locale,
        largeChartUrl,
        isTransparent,
        showSymbolLogo,
        showFloatingTooltip,
        ...(!autosize ? { width } : { width: "100%" }),
        ...(!autosize ? { height } : { height: "100%" }),
        ...(showChart && {
          plotLineColorGrowing,
          plotLineColorFalling,
          gridLineColor,
          scaleFontColor,
          belowLineFillColorGrowing,
          belowLineFillColorFalling,
          belowLineFillColorGrowingBottom,
          belowLineFillColorFallingBottom,
          symbolActiveColor,
        }),
        tabs,
        ...props,
      }}
      scriptSRC="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
      copyrightProps={{
        copyrightStyles,
        spanText: `Financial Markets`,
        href: "https://www.tradingview.com/markets/",
      }}
    />
  );
};

export default memo(MarketOverview);
