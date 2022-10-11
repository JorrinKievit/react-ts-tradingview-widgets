---
sidebar_position: 3
---

Every component has an attribute under the chart linked to the original TradingView website. This is required by TradingView.

### Customizing the attribute

Every component is shipped with an copyrightStyles property.

The copyright component has three elements: parent, link and span.
The component is wrapped in the parent element. The parent contains a link to the designated TradingView page, and a span which is the text of the link.

### Example

```js
import { Ticker, CopyrightStyles } from "react-ts-tradingview-widgets";

export const Example = () => {
  const styles: CopyrightStyles = {
    parent: {
      fontSize: "24px",
      color: "red",
    },
    link: {
      textDecoration: "line-trough",
    },
    span: {
      color: "darkblue",
    },
  };
  return <Ticker colorTheme="dark" copyrightStyles={styles} />;
};
```

import { Ticker } from "react-ts-tradingview-widgets";

export const Example = () => {
const styles = {
parent: {
fontSize: "24px",
color: "red",
},
link: {
textDecoration: "line-trough",
},
span: {
color: "darkblue",
},
};
return <Ticker colorTheme="dark" copyrightStyles={styles} />;
};

<Example />
