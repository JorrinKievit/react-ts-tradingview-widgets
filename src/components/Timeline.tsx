import React from "react";
import { setDivRef } from "../utils";
import { ColorTheme, DisplayMode } from "../index";

type Market = "crypto" | "forex" | "stock" | "index" | "futures" | "cfd";

type ConditionalTimelineProps =
  | {
      feedMode?: "market";
      market: Market;
    }
  | {
      feedMode?: "symbol";
      symbol: string;
    }
  | { feedMode?: "all_symbols" };

export type TimelineProps = {
  colorTheme?: ColorTheme;
  isTransparent?: boolean;
  displayMode?: DisplayMode;
  width?: number | number;
  height?: number | number;
  autosize?: boolean;
  locale?: string;
  largeChartUrl?: string;

  children?: never;
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
  ...props
}) => {
  return setDivRef(
    {
      ...(!autosize ? { width } : { width: "100%" }),
      ...(!autosize ? { height } : { height: "100%" }),
      feedMode,
      colorTheme,
      isTransparent,
      displayMode,
      locale,
      largeChartUrl,
      ...props,
    },
    "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js"
  );
};

export default Timeline;
