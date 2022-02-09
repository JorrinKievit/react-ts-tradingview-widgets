import React from "react";
import { ColorTheme, DateRange, CopyrightStyles, Locales } from "../index";
import Copyright from "./Copyright";
import Widget from "./Widget";

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
    | "PSE"
    | "NEWCONNECT"
    | "KRX"
    | "NGM"
    | "TPEX"
    | "BIST"
    | "LSE"
    | "LSIN"
    | "HNX";
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

  children?: never;

  copyrightStyles?: CopyrightStyles;
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
  copyrightStyles,
  ...props
}) => {
  return (
    <div id="tradingview_widget_wrapper">
      <Widget
        scriptHTML={{
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
        }}
        scriptSRC="https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js"
      ></Widget>
      <Copyright
        copyrightStyles={copyrightStyles}
        href={`https://www.tradingview.com/markets/stocks-usa/`}
        spanText={`Stock market Today`}
      />
    </div>
  );
};

export default StockMarket;
