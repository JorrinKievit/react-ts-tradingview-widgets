import React from "react";
import setDivRef from "../setDivRef";
import { ColorTheme } from "../index";

export type EconomicCalendarProps = {
  colorTheme?: ColorTheme;
  isTransparent?: boolean;
  width?: string | number;
  height?: string | number;
  autosize?: boolean;
  locale?: string;
  importanceFilter?: "-1,0,1" | "0,1";
  currencyFilter?: string;

  children?: never;
};

const EconomicCalendar: React.FC<EconomicCalendarProps> = ({
  colorTheme = "light",
  isTransparent = false,
  width = 510,
  height = 600,
  autosize = false,
  locale = "en",
  importanceFilter = "-1,0,1",
  currencyFilter = undefined,
  ...props
}) => {
  return setDivRef(
    {
      colorTheme,
      isTransparent,
      ...(!autosize ? { width } : { width: "100%" }),
      ...(!autosize ? { height } : { height: "100%" }),
      locale,
      importanceFilter,
      currencyFilter,
      ...props,
    },
    "https://s3.tradingview.com/external-embedding/embed-widget-events.js"
  );
};

export default EconomicCalendar;
