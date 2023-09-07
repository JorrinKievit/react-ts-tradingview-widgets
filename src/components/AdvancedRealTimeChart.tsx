import React, { memo } from "react";
import {
  ColorTheme,
  CopyrightStyles,
  Locales,
  Studies,
  Timezone,
  WidgetFeatures,
} from "../index";
import { createId } from "../utils";
import Widget from "./Widget";

export type AdvancedRealTimeChartProps = {
  width?: number | string;
  height?: number | string;
  autosize?: boolean;
  symbol?: string;
  interval?:
    | "1"
    | "3"
    | "5"
    | "15"
    | "30"
    | "60"
    | "120"
    | "180"
    | "240"
    | "D"
    | "W";
  range?: "1D" | "5D" | "1M" | "3M" | "6M" | "YTD" | "12M" | "60M" | "ALL";
  timezone?: Timezone;
  theme?: ColorTheme;
  style?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
  locale?: Locales | "hu_HU" | "fa_IR";
  toolbar_bg?: string;
  enable_publishing?: boolean;
  withdateranges?: boolean;
  hide_top_toolbar?: boolean;
  hide_legend?: boolean;
  hide_side_toolbar?: boolean;
  allow_symbol_change?: boolean;
  save_image?: boolean;
  details?: boolean;
  hotlist?: boolean;
  calendar?: boolean;
  show_popup_button?: boolean;
  popup_width?: string;
  popup_height?: string;
  watchlist?: string[];
  studies?: Studies[];
  disabled_features?: WidgetFeatures[];
  enabled_features?: WidgetFeatures[];

  container_id?: string;
  children?: never;

  copyrightStyles?: CopyrightStyles;
};

const AdvancedRealTimeChart: React.FC<AdvancedRealTimeChartProps> = ({
  width = 980,
  height = 610,
  autosize = false,
  symbol = "NASDAQ:AAPL",
  interval = "1",
  range = undefined,
  timezone = "UTC",
  theme = "light",
  style = "1",
  locale = "en",
  toolbar_bg = "#f1f3f6",
  enable_publishing = false,
  hide_top_toolbar = false,
  hide_legend = false,
  withdateranges = true,
  hide_side_toolbar = false,
  allow_symbol_change = true,
  save_image = true,
  details = false,
  hotlist = false,
  calendar = false,
  show_popup_button = false,
  popup_width = "600",
  popup_height = "400",
  watchlist = undefined,
  studies = undefined,
  disabled_features = undefined,
  enabled_features = undefined,
  container_id = `tradingview_${createId(5)}`,

  copyrightStyles,

  ...props
}) => {
  return (
    <Widget
      scriptHTML={{
        ...(!autosize ? { width } : { width: "100%" }),
        ...(!autosize ? { height } : { height: "100%" }),
        autosize,
        symbol,
        ...(!range ? { interval } : { range }),
        timezone,
        theme,
        style,
        locale,
        toolbar_bg,
        enable_publishing,
        hide_top_toolbar,
        hide_legend,
        withdateranges,
        hide_side_toolbar,
        allow_symbol_change,
        save_image,
        details,
        hotlist,
        calendar,
        ...(show_popup_button && {
          show_popup_button,
          popup_width,
          popup_height,
        }),
        watchlist,
        studies,
        disabled_features,
        enabled_features,
        container_id,
        ...props,
      }}
      scriptSRC="https://s3.tradingview.com/tv.js"
      containerId={container_id}
      type="Widget"
      copyrightProps={{
        copyrightStyles,
        href: `https://www.tradingview.com/symbols/${symbol}`,
        spanText: `${symbol} Chart`,
      }}
    />
  );
};

export default memo(AdvancedRealTimeChart);
