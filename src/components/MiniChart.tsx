import React from "react";
import { ColorTheme, DateRange, CopyrightStyles, Locales } from "../index";
import Copyright from "./Copyright";
import Widget from "./Widget";

export type MiniChartProps = {
  symbol?: string;
  width?: number | string;
  height?: number | string;
  locale?: Locales;
  dateRange?: DateRange;
  colorTheme?: ColorTheme;
  trendLineColor?: string;
  underLineColor?: string;
  underLineBottomColor?: string;
  isTransparent?: boolean;
  autosize?: boolean;
  largeChartUrl?: string;

  children?: never;

  copyrightStyles?: CopyrightStyles;
};

const MiniChart: React.FC<MiniChartProps> = ({
  symbol = "FX:EURUSD",
  width = 350,
  height = 220,
  locale = "en",
  dateRange = "12M",
  colorTheme = "light",
  trendLineColor = "rgba(41, 98, 255, 1)",
  underLineColor = "rgba(41, 98, 255, 0.3)",
  underLineBottomColor = "rgba(41, 98, 255, 0)",
  isTransparent = false,
  autosize = false,
  largeChartUrl = undefined,
  copyrightStyles,
  ...props
}) => {
  return (
    <div id="tradingview_widget_wrapper">
      <Widget
        scriptHTML={{
          symbol,
          ...(!autosize ? { width } : { width: "100%" }),
          ...(!autosize ? { height } : { height: "100%" }),
          locale,
          dateRange,
          colorTheme,
          trendLineColor,
          underLineColor,
          isTransparent,
          autosize,
          largeChartUrl,
          ...props,
        }}
        scriptSRC="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js"
      ></Widget>
      <Copyright
        copyrightStyles={copyrightStyles}
        href={`https://www.tradingview.com/symbols/${symbol}/`}
        spanText={`${symbol} Rates`}
      />
    </div>
  );
};

export default MiniChart;
