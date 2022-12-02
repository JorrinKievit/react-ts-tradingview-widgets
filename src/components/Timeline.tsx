import React, { useEffect, useState } from "react";
import {
  ColorTheme,
  CopyrightStyles,
  DisplayMode,
  Locales,
  Market,
} from "../index";
import Copyright from "./Copyright";
import Widget from "./Widget";

type ConditionalTimelineProps =
  | {
      feedMode?: "market";
      market?: Market;
      symbol?: never;
    }
  | {
      feedMode?: "symbol";
      symbol?: string;
      market?: never;
    }
  | { feedMode?: "all_symbols"; market?: never; symbol?: never };

export type TimelineProps = {
  colorTheme?: ColorTheme;
  isTransparent?: boolean;
  displayMode?: DisplayMode;
  width?: number | string;
  height?: number | string;
  autosize?: boolean;
  locale?: Locales;
  largeChartUrl?: string;

  children?: never;

  copyrightStyles?: CopyrightStyles;
} & ConditionalTimelineProps;

const Timeline: React.FC<TimelineProps> = ({
  feedMode = "all_symbols",
  colorTheme = "light",
  isTransparent = false,
  displayMode = "regular",
  width = 480,
  height = 830,
  autosize = false,
  locale = "en",
  largeChartUrl = undefined,
  copyrightStyles,
  symbol = "BTCUSD",
  market = "crypto",
  ...props
}) => {
  const [href, sethref] = useState("");
  const [spanText, setspanText] = useState("");

  useEffect(() => {
    if (feedMode == "all_symbols") {
      sethref("key_events");
      setspanText("Daily news roundup");
    } else if (feedMode == "market") {
      switch (market) {
        case "crypto":
          sethref("markets/cryptocurrencies/key-events/");
          setspanText("Daily cryptocurrency news");
          break;
        case "forex":
          sethref("markets/currencies/key-events/");
          setspanText("Daily currency news");
          break;
        case "stock":
          sethref("markets/stocks-usa/key-events/");
          setspanText("Daily stock news");
          break;
        case "index":
          sethref("markets/indices/key-events/");
          setspanText("Daily index news");
          break;
        case "futures":
          sethref("markets/futures/key-events/");
          setspanText("Daily futures news");
          break;
        case "cfd":
          sethref("markets/bonds/key-events/");
          setspanText("Daily bonds news");
          break;
      }
    } else if (feedMode == "symbol") {
      sethref(`symbols/${symbol}/history-timeline/`);
      setspanText(`${symbol} History`);
    }
  }, [feedMode, symbol, market]);

  return (
    <div id="tradingview_widget_wrapper">
      <Widget
        scriptHTML={{
          ...(!autosize ? { width } : { width: "100%" }),
          ...(!autosize ? { height } : { height: "100%" }),
          feedMode,
          ...(feedMode == "market"
            ? { market }
            : feedMode == "symbol"
            ? { symbol }
            : {}),
          colorTheme,
          isTransparent,
          displayMode,
          locale,
          largeChartUrl,
          ...props,
        }}
        scriptSRC="https://s3.tradingview.com/external-embedding/embed-widget-timeline.js"
      ></Widget>
      <Copyright
        copyrightStyles={copyrightStyles}
        href={`https://www.tradingview.com/${href}`}
        spanText={spanText}
      />
    </div>
  );
};

export default Timeline;
