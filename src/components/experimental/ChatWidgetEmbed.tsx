import React, { FC } from "react";
import { CopyrightStyles, Locales } from "../..";
import { createId } from "../../utils";
import Copyright from "../Copyright";
import Widget from "../Widget";

export type ChatWidgetEmbedProps = {
  width?: number | string;
  height?: number | string;
  container_id?: string;
  room?: string;
  whotrades?: string;
  locale?: Locales;
  type?: "chat-embed";

  children?: never;
  copyrightStyles?: CopyrightStyles;
};

const ChatWidgetEmbed: FC<ChatWidgetEmbedProps> = ({
  width = 486,
  height = 670,
  container_id = `tradingview_${createId(5)}`,
  room = "",
  whotrades = "",
  locale = "en",
  type = "ideas-stream",
  copyrightStyles,
}) => {
  return (
    <div id="tradingview_widget_wrapper">
      <Widget
        scriptHTML={{
          width,
          height,
          container_id,
          room,
          whotrades,
          type,
          locale,
        }}
        scriptSRC="https://s3.tradingview.com/tv.js"
        containerId={container_id}
        type="ChatWidgetEmbed"
      />
      <Copyright copyrightStyles={copyrightStyles} spanText={"Chat embed"} />
    </div>
  );
};

export default ChatWidgetEmbed;
