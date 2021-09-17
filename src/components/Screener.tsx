import React from "react";
import setDivRef from "../setDivRef";
import { ColorTheme } from "../index";

type DefaultColumnForexOrCrypto =
  //forex, crypto
  "overview" | "performance" | "oscillators" | "moving_averages";

type DefaultColumnCountries =
  //US, australia, canada, egypt, germany, india, israel, italy, luxembourgh, poland, korea, sweden, turkey, uk
  | "overview"
  | "performance"
  | "valuation"
  | "dividends"
  | "margins"
  | "income_statement"
  | "balance_sheet"
  | "oscillators"
  | "moving_averages";

type DefaultScreenForexOrCrypto =
  //forex, crypto
  | "general"
  | "top_gainers"
  | "top_losers"
  | "ath"
  | "atl"
  | "above_52wk_high"
  | "below_52wk_low"
  | "monthly_high"
  | "monthly_low"
  | "most_volatile"
  | "overbought"
  | "oversold"
  | "outperforming_SMA50"
  | "underperforming_SMA50";

type DefaultScreenCountries =
  //US, australia, canada, egypt, germany, india, israel, italy, luxembourgh, poland, korea, sweden, turkey, uk
  | "most_capitalized"
  | "volume_leaders"
  | "top_gainers"
  | "top_losers"
  | "ath"
  | "atl"
  | "high_dividend"
  | "above_52wk_high"
  | "below_52wk_low"
  | "monthly_high"
  | "monthly_low"
  | "most_volatile"
  | "unusual_volume"
  | "overbought"
  | "oversold"
  | "outperforming_SMA50"
  | "underperforming_SMA50"
  | "earnings_this_week";

type MarketCountries =
  | "america"
  | "australia"
  | "canada"
  | "egypt"
  | "germany"
  | "india"
  | "israel"
  | "italy"
  | "luxembourg"
  | "poland"
  | "korea"
  | "sweden"
  | "turkey"
  | "uk"
  | "vietnam";

type MarketForexOrCrypto = "forex" | "crypto";

type ConditionalScreenerProps =
  | {
      market?: MarketForexOrCrypto;
      defaultColumn?: DefaultColumnForexOrCrypto;
      defaultScreen?: DefaultScreenForexOrCrypto;
    }
  | {
      market?: MarketCountries;
      defaultColumn?: DefaultColumnCountries;
      defaultScreen?: DefaultScreenCountries;
    };

export type ScreenerProps = {
  width?: string | number;
  height?: string | number;
  autosize?: boolean;
  showToolbar?: boolean;
  colorTheme?: ColorTheme;
  locale?: string;
  isTransparent?: boolean;
  largeChartUrl?: string;

  children?: never;
} & ConditionalScreenerProps;

const Screener: React.FC<ScreenerProps> = ({
  width = 1100,
  height = 512,
  autosize = false,
  defaultColumn = "overview",
  defaultScreen = "general",
  market = "forex",
  showToolbar = true,
  colorTheme = "light",
  locale = "en",
  isTransparent = false,
  largeChartUrl = undefined,
  ...props
}) => {
  return setDivRef(
    {
      ...(!autosize ? { width } : { width: "100%" }),
      ...(!autosize ? { height } : { height: "100%" }),
      autosize,
      defaultColumn,
      defaultScreen,
      market,
      showToolbar,
      colorTheme,
      locale,
      isTransparent,
      largeChartUrl,
      ...props,
    },
    "https://s3.tradingview.com/external-embedding/embed-widget-screener.js"
  );
};

export default Screener;
