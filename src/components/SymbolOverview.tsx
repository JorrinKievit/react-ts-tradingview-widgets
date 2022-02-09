import React from "react";
import {
  ChartType,
  ColorTheme,
  CopyrightStyles,
  Locales,
  ScaleMode,
  ScalePosition,
} from "../index";
import { createId } from "../utils";
import Copyright from "./Copyright";
import Widget from "./Widget";

export type SymbolOverviewProps = {
  symbols?: string[][];
  chartOnly?: boolean;
  width?: string | number;
  height?: string | number;
  locale?: Locales;
  colorTheme?: ColorTheme;
  gridLineColor?: string;
  fontColor?: string;
  isTransparent?: boolean;
  showFloatingTooltip?: boolean;
  scalePosition?: ScalePosition;
  scaleMode?: ScaleMode;
  fontFamily?:
    | "Trebuchet MS, sans-serif"
    | "Arial, sans-serif"
    | "Times, Times New Roman, serif"
    | "Andale Mono, monospace"
    | "Courier New, monospace"
    | "Comic Sans MS, Comic Sans, cursive"
    | "Trattatello, fantasy";
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

  copyrightStyles?: CopyrightStyles;
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
  container_id = `tradingview_${createId(5)}`,
  copyrightStyles,
  ...props
}) => {
  return (
    <div id="tradingview_widget_wrapper">
      <Widget
        scriptHTML={{
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
        }}
        scriptSRC="https://s3.tradingview.com/tv.js"
        containerId={container_id}
        type="MediumWidget"
      ></Widget>
      <Copyright
        copyrightStyles={copyrightStyles}
        href={`https://www.tradingview.com/symbols/${symbols[0][1]}`}
        spanText={`${symbols[0][1]}`}
      />
    </div>
  );
};

export default SymbolOverview;
