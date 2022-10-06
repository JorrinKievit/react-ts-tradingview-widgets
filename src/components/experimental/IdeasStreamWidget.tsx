import React, { FC } from "react";
import { CopyrightStyles, Locales } from "../..";
import { createId } from "../../utils";
import Copyright from "../Copyright";
import Widget from "../Widget";

export type IdeasStreamWidgetProps = {
  width?: number | string;
  height?: number | string;
  container_id?: string;
  symbol?: string;
  username?: string;
  mode?: string;
  publishSource?: string;
  sort?: string | "trending";
  stream?: string;
  waitSymbol?: string;
  hideDescription?: boolean;
  startingCount?: number;
  bgColor?: string;
  headerColor?: string;
  borderColor?: string;
  locale?: Locales;
  type?: "ideas-stream";
  useWidgetHost?: boolean;

  children?: never;
  copyrightStyles?: CopyrightStyles;
};

const IdeasStreamWidget: FC<IdeasStreamWidgetProps> = ({
  width = 486,
  height = 670,
  container_id = `tradingview_${createId(5)}`,
  symbol = "",
  username = "",
  mode = "",
  publishSource = "",
  sort = "trending",
  stream = "",
  waitSymbol = "",
  hideDescription = false,
  startingCount = undefined,
  bgColor = "",
  headerColor = "",
  borderColor = "",
  locale = "en",
  type = "ideas-stream",
  useWidgetHost = false,
  copyrightStyles,
}) => {
  return (
    <div id="tradingview_widget_wrapper">
      <Widget
        scriptHTML={{
          width,
          height,
          container_id,
          type,
          symbol,
          username,
          mode,
          publishSource,
          sort,
          stream,
          waitSymbol,
          hideDescription,
          startingCount,
          bgColor,
          headerColor,
          borderColor,
          locale,
          useWidgetHost,
        }}
        scriptSRC="https://s3.tradingview.com/tv.js"
        containerId={container_id}
        type="IdeasStreamWidget"
      />
      <Copyright copyrightStyles={copyrightStyles} spanText={"Ideas stream"} />
    </div>
  );
};

export default IdeasStreamWidget;
