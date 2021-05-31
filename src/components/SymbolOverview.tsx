import React, { createRef, useEffect } from "react";
import { ColorTheme } from "../index";

export type SymbolOverviewProps = {
  symbols?: string[][];
  chartOnly?: boolean;
  width?: string | number;
  height?: string | number;
  locale?: string;
  colorTheme?: ColorTheme;
  gridLineColor?: string;
  trendLineColor?: string;
  fontColor?: string;
  underLineColor?: string;
  isTransparent?: boolean;
  autosize?: boolean;
  container_id?: string;

  children?: never;
};

declare const TradingView: any;

const defaultSymbols = [
  ["Apple", "AAPL"],
  ["Google", "GOOGL"],
  ["Microsoft", "MSFT"],
];

const SymbolOverview: React.FC<SymbolOverviewProps> = ({
  symbols = defaultSymbols,
  chartOnly = false,
  width = 1000,
  height = 400,
  locale = "en",
  colorTheme = "light",
  gridLineColor = "#F0F3FA",
  trendLineColor = "#2196F3",
  fontColor = "#787B86",
  underLineColor = "#E3F2FD",
  isTransparent = false,
  autosize = false,
  container_id = "symbol-overview-widget-container",
  ...props
}) => {
  const ref: { current: HTMLDivElement | null } = createRef();

  useEffect(() => {
    let refValue: any;

    if (ref.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;
      script.type = "text/javascript";
      script.onload = () => {
        if (typeof TradingView !== undefined) {
          new TradingView.MediumWidget({
            symbols,
            chartOnly,
            ...(!autosize ? { width } : { width: "100%" }),
            ...(!autosize ? { height } : { height: "100%" }),
            locale,
            colorTheme,
            gridLineColor,
            trendLineColor,
            fontColor,
            underLineColor,
            isTransparent,
            autosize,
            container_id,
            ...props,
          });
        }
      };
      ref.current.appendChild(script);
      refValue = ref.current;
    }
    return () => {
      if (refValue) {
        while (refValue.firstChild) {
          refValue.removeChild(refValue.firstChild);
        }
      }
    };
  }, [
    ref,
    symbols,
    chartOnly,
    width,
    height,
    locale,
    colorTheme,
    gridLineColor,
    trendLineColor,
    fontColor,
    underLineColor,
    isTransparent,
    autosize,
    container_id,
  ]);
  return <div id={container_id} ref={ref} />;
};

export default SymbolOverview;
