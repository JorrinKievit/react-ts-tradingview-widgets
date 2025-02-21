---
sidebar_position: 1
---

# Advanced Real-Time Chart Widget

This is the React component for the [Advanced Real-Time Chart Widget](https://www.tradingview.com/widget/advanced-chart/)

## Example

```
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

<AdvancedRealTimeChart theme="dark" autosize></AdvancedRealTimeChart>
```

import { AdvancedRealTimeChart} from "react-ts-tradingview-widgets";
import "../style.css"

<div className="height-400">
<AdvancedRealTimeChart theme="dark" autosize></AdvancedRealTimeChart>
</div>

## Used Private types {#private-types}

| Type     | Value                                              |
| -------- | -------------------------------------------------- |
| Interval | 1 / 3 / 5 / 15 / 30 / 60 / 120 / 180 / 240 / D / W |
| Range    | 1D / 5D / 1M / 3M / 6M / YTD / 12M / 60M / ALL     |

## Used Public types {#public-types}

| Type           | Value                                                                                                          |
| -------------- | -------------------------------------------------------------------------------------------------------------- |
| ColorTheme     | light / dark                                                                                                   |
| Style          | 0 / 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9                                                                          |
| WidgetFeatures | All features can be found [here](https://github.com/landoyjx/charting_library_wiki/blob/master/Featuresets.md) |

## Properties

| Property            | Type                                    | Required | Default                         | Description                                                                                  |
| ------------------- | --------------------------------------- | -------- | ------------------------------- | -------------------------------------------------------------------------------------------- |
| width               | number/string                           | false    | 980                             | Sets a static width on the component                                                         |
| height              | number/string                           | false    | 610                             | Sets a static height on the component                                                        |
| autosize            | boolean                                 | false    | false                           | Sets the width and height to 100%                                                            |
| symbol              | string                                  | false    | NASDAQ:AAPL                     | Sets the default ticker symbol                                                               |
| interval            | [_**Interval**_](#private-types)        | false    | D                               | Sets the default interval, overrides range                                                   |
| range               | [_**Range**_](#private-types)           | false    | undefined                       | Sets the default range, overrides interval                                                   |
| timezone            | string                                  | false    | UTC                             | Sets the default timezone                                                                    |
| theme               | [_**ColorTheme**_](#public-types)       | false    | light                           | Sets the default theme                                                                       |
| style               | Style                                   | false    | 1                               | Sets the default [style](https://www.tradingview.com/widget/advanced-chart/) (Bars, Candles) |
| locale              | [Locales](../types/Locales.md)          | false    | en                              | Sets the default locale                                                                      |
| toolbar_bg          | string                                  | false    | #f1f3f6                         | Sets the default toolbar background                                                          |
| enable_publishing   | boolean                                 | false    | false                           | Show the publishing button on the chart                                                      |
| hide_top_toolbar    | boolean                                 | false    | false                           | Hide top toolbar                                                                             |
| hide_legend         | boolean                                 | false    | false                           | Show symbol description                                                                      |
| withdateranges      | boolean                                 | false    | false                           | Show bottom toolbar                                                                          |
| hide_side_toolbar   | boolean                                 | false    | false                           | Hide side toolbar                                                                            |
| allow_symbol_change | boolean                                 | false    | true                            | Allow symbol change in chart                                                                 |
| save_image          | boolean                                 | false    | true                            | Get image button                                                                             |
| show_popup_button   | boolean                                 | false    | false                           | Show the popup button to popup the chart in a new window                                     |
| popup_width         | string                                  | false    | 600                             | Sets the default width of the popup                                                          |
| popup_height        | string                                  | false    | 400                             | Sets the default height of the popup                                                         |
| details             | boolean                                 | false    | false                           | Show details sidebar                                                                         |
| hotlist             | boolean                                 | false    | false                           | Show hotlist sidebar                                                                         |
| calendar            | boolean                                 | false    | false                           | Show calendar sidebar                                                                        |
| watchlist           | string[]                                | false    | undefined                       | Show watchlist with added symbols                                                            |
| studies             | string[]                                | false    | undefined                       | Add default indicators to chart                                                              |
| disabled_features   | [_**WidgetFeatures[]**_](#public-types) | false    | undefined                       | Disable specific features in the chart                                                       |
| enabled_features    | [_**WidgetFeatures[]**_](#public-types) | false    | undefined                       | Enable specific features in the chart                                                        |
| container_id        | string                                  | false    | advanced-chart-widget-container | Set container_id generated [here](https://www.tradingview.com/widget/advanced-chart/)        |
| backgroundColor     | string                                  | false    | undefined                       | Sets the graph background color, hex (#ffffff) or RGBA (rgba(16, 14, 28, 1)) can be used     |
