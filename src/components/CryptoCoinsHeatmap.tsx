import React, { FC, memo } from "react";
import { ColorTheme, CopyrightStyles, Locales } from "..";
import Widget from "./Widget";

type ConditionalCryptoCoinsHeatmapDataSetProps =
  | {
      hasTopBar?: true;
      isSetDataSetEnabled?: boolean;
    }
  | {
      hasTopBar?: false;
      isSetDataSetEnabled?: never;
    };

export type CryptoCoinsHeatmapProps = {
  dataSource?:
    | "Crypto"
    | "CryptoWithoutBTC"
    | "CryptoWithoutStable"
    | "CryptoDeFi";
  blockSize?:
    | "market_cap_calc"
    | "market_cap_diluted_calc"
    | "24h_vol_cmc"
    | "tvl"
    | "24h_vol_to_market_cap"
    | "market_cap_to_tvl";
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
    | "24h_vol_change_cmc"
    | "24h_vol_cmc"
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
} & ConditionalCryptoCoinsHeatmapDataSetProps;

const CryptoCoinsHeatmap: FC<CryptoCoinsHeatmapProps> = ({
  dataSource = "Crypto",
  blockSize = "market_cap_calc",
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
      scriptSRC="https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js"
      copyrightProps={{
        copyrightStyles,
        href: `https://www.tradingview.com/?utm_source=www.tradingview.com&utm_medium=widget_new&utm_campaign=stock-heatmap`,
        spanText: `Track all markets on TradingView`,
      }}
    />
  );
};

export default memo(CryptoCoinsHeatmap);
