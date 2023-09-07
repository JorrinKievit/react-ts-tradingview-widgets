import React, { FC, memo } from "react";
import { ColorTheme, CopyrightStyles, Exchanges, Locales } from "..";
import Widget from "./Widget";

type ConditionalStockHeatmapDataSetProps =
  | {
      hasTopBar?: true;
      isSetDataSetEnabled?: boolean;
    }
  | {
      hasTopBar?: false;
      isSetDataSetEnabled?: never;
    };

export type StockHeatmapProps = {
  dataSource?: string;
  exchanges?: Exchanges[];
  grouping?: "no_group" | "sector";
  blockSize?:
    | "market_cap_basic"
    | "number_of_employees"
    | "dividend_yield_recent"
    | "price_earnings_ttm"
    | "price_sales_current"
    | "price_book_fq"
    | "volume|60"
    | "volume|240"
    | "volume"
    | "volume|1W"
    | "volume|1M"
    | "Value.Traded|60"
    | "Value.Traded|240"
    | "Value.Traded"
    | "Value.Traded|1W"
    | "Value.Traded|1M";
  blockColor?:
    | "change|60"
    | "change|240"
    | "change"
    | "Perf.W"
    | "Perf.1M"
    | "Perf.3M"
    | "Perf.6M"
    | "Perf.YTD"
    | "Perf.Y"
    | "premarket_change"
    | "postmarket_change"
    | "relative_volume_10d_calc"
    | "Volatility.D"
    | "gap";
  locale?: Locales;
  autoSize?: boolean;
  height?: number | string;
  width?: number | string;
  symbolUrl?: string;
  colorTheme?: ColorTheme;
  isZoomEnabled?: boolean;
  hasSymbolTooltip?: boolean;

  children?: never;

  copyrightStyles?: CopyrightStyles;
} & ConditionalStockHeatmapDataSetProps;

const StockHeatmap: FC<StockHeatmapProps> = ({
  dataSource = "SPX500",
  exchanges = ["NYSE"],
  grouping = "sector",
  blockSize = "market_cap_basic",
  blockColor = "change",
  locale = "en",
  autoSize = false,
  height = undefined,
  width = undefined,
  symbolUrl = "",
  colorTheme = "light",
  isZoomEnabled = true,
  hasSymbolTooltip = true,
  hasTopBar = true,
  isSetDataSetEnabled = true,
  copyrightStyles,
  ...props
}) => {
  return (
    <Widget
      scriptHTML={{
        dataSource,
        exchanges,
        grouping,
        blockSize,
        blockColor,
        locale,
        autoSize,
        ...(autoSize ? { width: "100%", height: "100%" } : { width, height }),
        symbolUrl,
        colorTheme,
        isZoomEnabled,
        hasSymbolTooltip,
        hasTopBar,
        isSetDataSetEnabled,
        ...props,
      }}
      scriptSRC="https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js"
      copyrightProps={{
        copyrightStyles,
        href: `https://www.tradingview.com/?utm_source=www.tradingview.com&utm_medium=widget_new&utm_campaign=stock-heatmap`,
        spanText: `Track all markets on TradingView`,
      }}
    />
  );
};

export default memo(StockHeatmap);
