import React, { FC } from "react";
import { CopyrightStyles } from "../..";
import { createId } from "../../utils";
import Copyright from "../Copyright";
import Widget from "../Widget";

export type EventsWidgetProps = {
  width?: number | string;
  height?: number | string;
  container_id?: string;
  currencyFilter?: string | string[];
  importanceFilter?: string | string[];
  type?: "economic-calendar";

  children?: never;
  copyrightStyles?: CopyrightStyles;
};

const EventsWidget: FC<EventsWidgetProps> = ({
  width = 486,
  height = 670,
  container_id = `tradingview_${createId(5)}`,
  currencyFilter = "USD",
  importanceFilter = "1",
  type = "economic-calendar",
  copyrightStyles,
}) => {
  return (
    <div id="tradingview_widget_wrapper">
      <Widget
        scriptHTML={{
          width,
          height,
          container_id,
          currencyFilter,
          importanceFilter,
          type,
        }}
        scriptSRC="https://s3.tradingview.com/tv.js"
        containerId={container_id}
        type="EventsWidget"
      />
      <Copyright copyrightStyles={copyrightStyles} spanText={"Events"} />
    </div>
  );
};

export default EventsWidget;
