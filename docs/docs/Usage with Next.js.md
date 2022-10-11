---
sidebar_position: 2
---

The TradingView widgets are loaded client-side. This means that you are required to load them without Server Side Rendering (SSR) using next/dynamic. An example is found below:

```js
import dynamic from "next/dynamic";
const SymbolOverviewNoSSR = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.SymbolOverview),
  {
    ssr: false,
  }
);
```
