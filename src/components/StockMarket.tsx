import React from "react";
import setDivRef from "../setDivRef";
import { ColorTheme, DateRange } from "../index";

export type StockMarketProps = {
  colorTheme?: ColorTheme;
  dateRange?: DateRange;
  exchange?:
    | "US"
    | "NASDAQ"
    | "NYSE"
    | "AMEX"
    | "OTC"
    | "ASX"
    | "CSE"
    | "NEO"
    | "TSX"
    | "TSXV"
    | "EGX"
    | "BER"
    | "DUS"
    | "FWB"
    | "HAM"
    | "HAN"
    | "MUN"
    | "SWB"
    | "XETR"
    | "BSE"
    | "NSE"
    | "TASE"
    | "MIL"
    | "LUXSE"
    | "NEWCONNECT"
    | "KRX"
    | "NGM"
    | "BIST"
    | "LSE"
    | "LSIN"
    | "HNX";
  showChart?: boolean;
  locale?: string;
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

  children?: never;
};

const StockMarket: React.FC<StockMarketProps> = ({
  colorTheme = "light",
  dateRange = "12M",
  exchange = "US",
  showChart = true,
  locale = "en",
  largeChartUrl = undefined,
  isTransparent = false,
  showSymbolLogo = true,
  showFloatingTooltip = false,
  width = 400,
  height = 600,
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
  ...props
}) => {
  return setDivRef(
    {
      colorTheme,
      dateRange,
      exchange,
      showChart,
      locale,
      largeChartUrl,
      isTransparent,
      showSymbolLogo,
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
      ...props,
    },
    "https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js"
  );
};

export default StockMarket;
