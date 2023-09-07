import React, { memo } from "react";
import {
  ChartType,
  ColorTheme,
  CopyrightStyles,
  DateFormat,
  Locales,
  ScaleMode,
  ScalePosition,
} from "../index";
import { createId } from "../utils";
import Widget from "./Widget";

export type SymbolOverviewProps = {
  symbols?: string[][];
  chartOnly?: boolean;
  width?: string | number;
  height?: string | number;
  locale?: Locales;
  colorTheme?: ColorTheme;
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
  fontSize?:
    | "10"
    | "11"
    | "12"
    | "13"
    | "14"
    | "16"
    | "18"
    | "20"
    | "22"
    | "24"
    | "28";
  fontColor?: string;
  noTimeScale?: boolean;
  hideDateRanges?: boolean;
  hideMarketStatus?: boolean;
  valuesTracking?: "0" | "1" | "2" | "3";
  lineWidth?: 1 | 2 | 3 | 4;
  showVolume?: boolean;
  volumeUpColor?: string;
  volumeDownColor?: string;
  dateFormat: DateFormat;
  timeHoursFormat?: "12-hours" | "24-hours";

  chartType?: ChartType;

  //area & line
  lineColor?: string;

  //area
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

  //colors
  backGroundColor?: string;
  gridLineColor?: string;
  widgetFontColor?: string;

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
  fontColor = "#787B86",
  fontSize = "10",
  isTransparent = false,
  showFloatingTooltip = true,
  scalePosition = "no",
  scaleMode = "Normal",
  fontFamily = "Trebuchet MS, sans-serif",
  noTimeScale = false,
  valuesTracking = "1",
  lineWidth = 3,
  showVolume = false,
  volumeUpColor = "rgba(34, 171, 148, 0.5)",
  volumeDownColor = "rgba(247, 82, 95, 0.5)",
  dateFormat = "dd MMM 'yy",
  timeHoursFormat = "24-hours",
  hideMarketStatus = false,
  hideDateRanges = false,
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

  backGroundColor = "rgba(19, 23, 34, 0)",
  gridLineColor = "rgba(42, 46, 57, 0)",
  widgetFontColor = "rgba(216, 216, 216, 1)",

  autosize = false,
  container_id = `tradingview_${createId(5)}`,
  copyrightStyles,
  ...props
}) => {
  return (
    <Widget
      scriptHTML={{
        symbols,
        chartOnly,
        ...(!autosize ? { width } : { width: "100%" }),
        ...(!autosize ? { height } : { height: "100%" }),
        locale,
        colorTheme,
        fontColor,
        fontSize,
        isTransparent,
        showFloatingTooltip,
        scalePosition,
        scaleMode,
        fontFamily,
        noTimeScale,
        hideDateRanges,
        hideMarketStatus,
        valuesTracking,
        lineWidth,
        showVolume,
        ...(showVolume && { volumeUpColor, volumeDownColor }),
        dateFormat,
        timeHoursFormat,
        chartType,
        ...(chartType === "line" && { lineColor }),
        ...(chartType === "area" && { lineColor, bottomColor, topColor }),
        ...((chartType === "bars" || chartType === "candlesticks") && {
          upColor,
          downColor,
        }),
        ...(chartType === "candlesticks" && {
          upColor,
          downColor,
          borderUpColor,
          borderDownColor,
          wickUpColor,
          wickDownColor,
        }),
        backGroundColor,
        widgetFontColor,
        gridLineColor,
        autosize,
        container_id,
        ...props,
      }}
      scriptSRC="https://s3.tradingview.com/tv.js"
      containerId={container_id}
      type="MediumWidget"
      copyrightProps={{
        href: `https://www.tradingview.com/symbols/${symbols[0][1]}`,
        spanText: `${symbols[0][1]}`,
      }}
    />
  );
};

export default memo(SymbolOverview);
