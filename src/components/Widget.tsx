import React, { useEffect } from "react";
import Copyright, { CopyrightProps } from "./Copyright";

interface WidgetProps {
  scriptHTML: any;
  scriptSRC: string;
  containerId?: string;
  type?: "Widget" | "MediumWidget";
  copyrightProps: CopyrightProps;
}

declare const TradingView: any;

const Widget: React.FC<WidgetProps> = ({
  scriptHTML,
  scriptSRC,
  type,
  containerId,
  copyrightProps,
}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("data-nscript", "afterInteractive");
    script.src = scriptSRC;
    script.async = true;
    script.type = "text/javascript";

    if (type === "Widget" || type === "MediumWidget") {
      script.onload = () => {
        if (typeof TradingView !== undefined) {
          script.innerHTML = JSON.stringify(
            type === "Widget"
              ? new TradingView.widget(scriptHTML)
              : type === "MediumWidget"
              ? new TradingView.MediumWidget(scriptHTML)
              : undefined
          );
        }
      };
    } else {
      script.innerHTML = JSON.stringify(scriptHTML);
    }

    const container = document.querySelector(
      containerId ? `#${containerId}` : ".tradingview-widget-container__widget"
    );

    if (!container) return;

    container.parentNode?.insertBefore(script, container);

    return () => {
      container.parentNode?.removeChild(script);
    };
  }, [scriptHTML, type, scriptSRC, containerId]);

  return (
    <div className="tradingview-widget-container">
      <div
        id={containerId}
        className={
          !containerId ? "tradingview-widget-container__widget" : undefined
        }
      />
      <Copyright {...copyrightProps} />
    </div>
  );
};

export default Widget;
