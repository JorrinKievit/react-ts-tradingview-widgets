import React from "react";
import { ChartType, ColorTheme, ScaleMode, ScalePosition } from "../index";
import setDivRef from "../setDivRef";

export type SymbolOverviewProps = {
  symbols?: string[][];
  chartOnly?: boolean;
  width?: string | number;
  height?: string | number;
  locale?: string;
  colorTheme?: ColorTheme;
  gridLineColor?: string;
  fontColor?: string;
  isTransparent?: boolean;
  showFloatingTooltip?: boolean;
  scalePosition?: ScalePosition;
  scaleMode?: ScaleMode;
  fontFamily?: string;
  noTimeScale?: boolean;
  chartType?: ChartType;

  //area
  lineColor?: string;
  bottomColor?: string;
  topColor?: string;

  //bars & candles
  upColor?: string;
  downColor?: string;

  //candles
  borderUpColor?: string;
  borderDownColor?: string;
  wickUpColor?: string;
  wickDownColor?: string;

  autosize?: boolean;
  container_id?: string;

  children?: never;
};

const defaultSymbols = [
  ["Apple", "AAPL"],
  ["Google", "GOOGL"],
  ["Microsoft", "MSFT"],
];

const SymbolOverview: React.FC<SymbolOverviewProps> = ({
  symbols = defaultSymbols,
  chartOnly = false,
  width = 1000,
  height = 400,
  locale = "en",
  colorTheme = "light",
  gridLineColor = "rgba(42, 46, 57, 0)",
  fontColor = "#787B86",
  isTransparent = false,
  showFloatingTooltip = true,
  scalePosition = "no",
  scaleMode = "Normal",
  fontFamily = "Trebuchet MS, sans-serif",
  noTimeScale = false,
  chartType = "area",

  //area
  lineColor = "#2962FF",
  bottomColor = "rgba(41, 98, 255, 0)",
  topColor = "rgba(41, 98, 255, 0.3)",

  //bars & candles
  upColor = "#26a69a",
  downColor = "#ef5350",

  //candles
  borderUpColor = "#26a69a",
  borderDownColor = "#ef5350",
  wickUpColor = "#26a69a",
  wickDownColor = "#ef5350",

  autosize = false,
  container_id = `symbol-overview-widget-container_${Math.random()}`,
  ...props
}) => {
  return setDivRef(
    {
      symbols,
      chartOnly,
      ...(!autosize ? { width } : { width: "100%" }),
      ...(!autosize ? { height } : { height: "100%" }),
      locale,
      colorTheme,
      gridLineColor,
      fontColor,
      isTransparent,
      showFloatingTooltip,
      scalePosition,
      scaleMode,
      fontFamily,
      noTimeScale,
      chartType,
      ...(chartType === "area" && { lineColor, bottomColor, topColor }),
      ...((chartType === "bars" || chartType === "candlesticks") && {
        upColor,
        downColor,
      }),
      ...(chartType === "candlesticks" && {
        borderUpColor,
        borderDownColor,
        wickUpColor,
        wickDownColor,
      }),
      autosize,
      container_id,
      ...props,
    },
    "https://s3.tradingview.com/tv.js",
    container_id,
    "MediumWidget"
  );
};

export default SymbolOverview;
