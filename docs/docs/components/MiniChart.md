---
sidebar_position: 10
---

# Mini Chart Widget

This is the React component for the [Mini Chart Widget](https://www.tradingview.com/widget/mini-chart/)

## Example

```
import { MiniChart } from "react-ts-tradingview-widgets";

<MiniChart colorTheme="dark" width="100%"></MiniChart>
```

import { MiniChart } from "react-ts-tradingview-widgets";

<MiniChart colorTheme="dark" width="100%"></MiniChart>

## Used Public types {#public-types}

| Type       | Value                          |
| ---------- | ------------------------------ |
| ColorTheme | light / dark                   |
| DateRange  | 1D / 1M / 3M / 12M / 60M / ALL |

## Properties

| Property             | Type                              | Required | Default                | Description                               |
| -------------------- | --------------------------------- | -------- | ---------------------- | ----------------------------------------- |
| symbol               | string                            | false    | FX:EURUSD              | Default symbol for widget                 |
| width                | number/string                     | false    | 350                    | Sets a static width on the component      |
| height               | number/string                     | false    | 220                    | Sets a static height on the component     |
| locale               | [Locales](../types/Locales.md)    | false    | en                     | Sets the default locale                   |
| dateRange            | [_**DateRange**_](#public-types)  | false    | 12M                    | Default date range of chart               |
| autosize             | boolean                           | false    | false                  | Sets the width and height to 100%         |
| colorTheme           | [_**ColorTheme**_](#public-types) | false    | light                  | Sets the default theme                    |
| trendLineColor       | string                            | false    | rgba(41, 98, 255, 1)   | Sets default color of Price Line          |
| underLineColor       | string                            | false    | rgba(41, 98, 255, 0.3) | Sets the default color of Under line area |
| underLineBottomColor | string                            | false    | rgba(41, 98, 255, 0)   | Sets under line bottom color              |
| isTransparent        | boolean                           | false    | false                  | Transparent background for component      |
| largeChartUrl        | string                            | false    | undefined              | Make widget redirect to larger chart      |
