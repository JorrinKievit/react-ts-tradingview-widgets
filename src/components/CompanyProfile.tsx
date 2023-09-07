import React, { memo } from "react";
import { ColorTheme, CopyrightStyles, Locales } from "../index";
import Widget from "./Widget";

export type CompanyProfileProps = {
  symbol?: string;
  width?: string | number;
  height?: string | number;
  autosize?: boolean;
  colorTheme?: ColorTheme;
  isTransparent?: boolean;
  locale?: Locales;
  largeChartUrl?: string;

  children?: never;

  copyrightStyles?: CopyrightStyles;
};

const CompanyProfile: React.FC<CompanyProfileProps> = ({
  symbol = "NASDAQ:AAPL",
  width = 480,
  height = 650,
  autosize = false,
  colorTheme = "light",
  isTransparent = false,
  locale = "en",
  largeChartUrl = undefined,
  copyrightStyles,
  ...props
}) => {
  return (
    <Widget
      scriptHTML={{
        ...(!autosize ? { width } : { width: "100%" }),
        ...(!autosize ? { height } : { height: "100%" }),
        symbol,
        colorTheme,
        isTransparent,
        locale,
        largeChartUrl,
        ...props,
      }}
      scriptSRC="https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js"
      copyrightProps={{
        copyrightStyles,
        href: `https://www.tradingview.com/symbols/${symbol}/`,
        spanText: `${symbol} Profile`,
      }}
    />
  );
};

export default memo(CompanyProfile);
