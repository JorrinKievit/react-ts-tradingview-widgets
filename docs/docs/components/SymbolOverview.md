---
sidebar_position: 11
---

# Symbol Overview Widget

This is the React component for the [Symbol Overview Widget](https://www.tradingview.com/widget/symbol-overview/)

## Example

```
import { SymbolOverview } from "react-ts-tradingview-widgets";

<SymbolOverview colorTheme="dark"></SymbolOverview>
```

import { SymbolOverview } from "react-ts-tradingview-widgets";
import "../style.css"

<div className="height-400">
  <SymbolOverview colorTheme="dark" autosize></SymbolOverview>
</div>

## Used Public types {#public-types}

| Type       | Value        |
| ---------- | ------------ |
| ColorTheme | light / dark |

## Properties

| Property       | Type                              | Required | Default                          | Description                                                                           |
| -------------- | --------------------------------- | -------- | -------------------------------- | ------------------------------------------------------------------------------------- |
| symbols        | string[][]                        | false    | See [_**here**_](#symbols)       |
| chartOnly      | boolean                           | false    | false                            | Chart only in widget                                                                  |
| width          | number/string                     | false    | 1000                             | Sets a static width on the component                                                  |
| height         | number/string                     | false    | 400                              | Sets a static height on the component                                                 |
| autosize       | boolean                           | false    | false                            | Sets the width and height to 100%                                                     |
| colorTheme     | [_**ColorTheme**_](#public-types) | false    | light                            | Sets the default theme                                                                |
| locale         | string                            | false    | en                               | Sets the default locale                                                               |
| gridLineColor  | string                            | false    | #F0F3FA                          | Grid color                                                                            |
| trendLineColor | string                            | false    | #2196F3                          | Sets default color of Price Line                                                      |
| fontColor      | string                            | false    | #787B86                          | Font color                                                                            |
| underlineColor | string                            | false    | #E3F2FD                          | Sets the default color of Under line area                                             |
| isTransparent  | boolean                           | false    | false                            | Transparent background for component                                                  |
| container_id   | string                            | false    | symbol-overview-widget-container | Set container_id generated [here](https://www.tradingview.com/widget/advanced-chart/) |

## Default symbols {#symbols}

```json
[
  ["Apple", "AAPL"],
  ["Google", "GOOGL"],
  ["Microsoft", "MSFT"]
]
```
