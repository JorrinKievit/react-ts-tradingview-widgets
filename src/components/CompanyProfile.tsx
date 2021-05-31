import React from "react";
import setDivRef from "../setDivRef";
import { ColorTheme } from "../index";

export type CompanyProfileProps = {
  symbol?: string;
  width?: string | number;
  height?: string | number;
  autosize?: boolean;
  colorTheme?: ColorTheme;
  isTransparent?: boolean;
  locale?: string;
  largeChartUrl?: string;

  children?: never;
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
  ...props
}) => {
  return setDivRef(
    {
      ...(!autosize ? { width } : { width: "100%" }),
      ...(!autosize ? { height } : { height: "100%" }),
      symbol,
      colorTheme,
      isTransparent,
      locale,
      largeChartUrl,
      ...props,
    },
    "https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js"
  );
};

export default CompanyProfile;
