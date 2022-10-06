import React, { createRef, useEffect } from "react";

interface WidgetProps {
  scriptHTML: any;
  scriptSRC: string;
  containerId?: string;
  type?:
    | "Widget"
    | "MediumWidget"
    | "EventsWidget"
    | "IdeasStreamWidget"
    | "ChatWidgetEmbed";
}

declare const TradingView: any;

const Widget: React.FC<WidgetProps> = ({
  scriptHTML,
  scriptSRC,
  containerId,
  type,
}) => {
  const ref: { current: HTMLDivElement | null } = createRef();

  useEffect(() => {
    let refValue: any;

    if (ref.current) {
      const script = document.createElement("script");
      script.src = scriptSRC;
      script.async = true;
      script.type = "text/javascript";

      if (type) {
        if (typeof TradingView !== undefined) {
          script.onload = () => {
            switch (type) {
              case "Widget":
                script.innerHTML = new TradingView.widget(scriptHTML);
                break;
              case "MediumWidget":
                script.innerHTML = new TradingView.MediumWidget(scriptHTML);
                break;
              case "IdeasStreamWidget":
                script.innerHTML = new TradingView.IdeasStreamWidget(
                  scriptHTML
                );
                break;
              case "ChatWidgetEmbed":
                script.innerHTML = new TradingView.ChatWidgetEmbed(scriptHTML);
                break;
            }
          };
        }
      } else {
        script.innerHTML = JSON.stringify(scriptHTML);
      }
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
  }, [ref, scriptHTML]);

  return <div ref={ref} id={containerId} />;
};

export default Widget;
