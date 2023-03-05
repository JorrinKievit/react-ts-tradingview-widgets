import React from "react";
import { CopyrightStyles } from "..";

export type CopyrightProps = {
  copyrightStyles?: CopyrightStyles;
  href?: string;
  spanText?: string;
  text?: string;
  children?: never;
};

const Copyright: React.FC<CopyrightProps> = ({
  href,
  spanText,
  text = "By TradingView",
  copyrightStyles,
}) => {
  const defaultStyles: CopyrightStyles = {
    parent: {
      fontSize: "13px",
      lineHeight: "32px",
      textAlign: "center",
      verticalAlign: "center",
      fontFamily: "Trebuchet MS, Arial, sans-serif",
      color: "#9db2bd",
    },
    link: {
      textDecoration: "none",
      color: "#9db2bd",
    },
    span: {
      color: "#2962FF",
    },
  };

  return (
    <div
      style={Object.assign({}, defaultStyles.parent, copyrightStyles?.parent)}
      className="tradingview-widget-copyright"
    >
      <a
        style={Object.assign({}, defaultStyles.link, copyrightStyles?.link)}
        href={href}
        target="_blank"
      >
        <span
          style={Object.assign({}, defaultStyles.span, copyrightStyles?.span)}
        >
          {spanText}{" "}
        </span>
      </a>
      {text}
    </div>
  );
};

export default Copyright;
