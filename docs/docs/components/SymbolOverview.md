---
sidebar_position: 11
---

# Symbol Overview Widget

This is the React component for the [Symbol Overview Widget](https://www.tradingview.com/widget/symbol-overview/)

## Example

```
import { SymbolOverview } from "react-ts-tradingview-widgets";

<SymbolOverview colorTheme="dark"
                autosize
                chartType="candlesticks"
                downColor="#800080"
                borderDownColor="#800080"
                wickDownColor="#800080" />
```

import { SymbolOverview } from "react-ts-tradingview-widgets";
import "../style.css"

<div className="height-400">
  <SymbolOverview colorTheme="dark" autosize chartType="candlesticks" downColor="#800080" borderDownColor="#800080" wickDownColor="#800080"></SymbolOverview>
</div>

## Used Private types {#private-types}

| Type            | Value                                                                      |
| --------------- | -------------------------------------------------------------------------- |
| FontSize        | "10" / "11" / "12" / "13" / "14" / "16" / "18" / "20" / "22" / "24" / "28" |
| ValuesTracking  | "0" / "1" / "2" / "3"                                                      |
| LineWidth       | 1 / 2 / 3 / 4                                                              |
| TimeHoursFormat | "12-hours" / "24-hours"                                                    |

## Used Public types {#public-types}

| Type          | Value                                                                                                                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ColorTheme    | light / dark                                                                                                                                                                                      |
| ScalePosition | no / left / right                                                                                                                                                                                 |
| ScaleMode     | Normal / Percentage / Logarithmic                                                                                                                                                                 |
| ChartType     | area / bars / candlesticks                                                                                                                                                                        |
| DateFormat    | / "dd MMM 'yy" / "MMM dd, yyyy" / "MMM dd" / "dd MMM" / "yyyy-MM-dd" / "yy-MM-dd" / "yy/MM/dd" / "yyyy/MM/dd" / "dd-MM-yyyy" / "dd-MM-yy" / "dd/MM/yy" / "dd/MM/yyyy" / "MM/dd/yy" / "MM/dd/yyyy" |

## Properties

| Property            | Type                                    | Required | Default                          | Description                                                                           |
| ------------------- | --------------------------------------- | -------- | -------------------------------- | ------------------------------------------------------------------------------------- |
| symbols             | string[][]                              | false    | See [_**here**_](#symbols)       |
| chartOnly           | boolean                                 | false    | false                            | Chart only in widget                                                                  |
| width               | number/string                           | false    | 1000                             | Sets a static width on the component                                                  |
| height              | number/string                           | false    | 400                              | Sets a static height on the component                                                 |
| autosize            | boolean                                 | false    | false                            | Sets the width and height to 100%                                                     |
| colorTheme          | [_**ColorTheme**_](#public-types)       | false    | light                            | Sets the default theme                                                                |
| locale              | string                                  | false    | en                               | Sets the default locale                                                               |
| gridLineColor       | string                                  | false    | #F0F3FA                          | Grid color                                                                            |
| fontColor           | string                                  | false    | #787B86                          | Font color                                                                            |
| fontSize            | string                                  | false    | 10                               | Font size in widget                                                                   |
| isTransparent       | boolean                                 | false    | false                            | Transparent background for component                                                  |
| showFloatingTooltip | boolean                                 | false    | true                             | Show floating tooltip                                                                 |
| scalePosition       | [_**ScalePosition**_](#public-types)    | false    | no                               | Scale position                                                                        |
| scaleMode           | [_**ScaleMode**_](#public-types)        | false    | Normal                           | Sets the scale type                                                                   |
| fontFamily          | string                                  | false    | Trebuchet MS, sans-serif         | Set the chart font                                                                    |
| noTimeScale         | boolean                                 | false    | false                            | Include a time scale or not                                                           |
| valuesTracking      | [_**ValuesTracking**_](#private-types)  | false    | 1                                | Floating tooltip, Colored tooltip, Legend, Scale labels                               |
| lineWidth           | [_**LineWidth**_](#private-types)       | false    | 3                                | Width of ticker line                                                                  |
| showVolume          | boolean                                 | false    | false                            | Show volume indicator                                                                 |
| volumeUpColor       | string                                  | false    | rgba(34, 171, 148, 0.5)          | Set the volume up color of the indicator                                              |
| volumeDownColor     | string                                  | false    | rgba(247, 82, 95, 0.5)           | Set the volume down color of the indicator                                            |
| dateFormat          | [_**DateFormat**_](#public-types)       | false    | dd MMM 'yy                       | Sets the date format in the widget                                                    |
| timeHoursFormat     | [_**TimeHoursFormat**_](#private-types) | false    | 24-hours                         | Sets the time format                                                                  |
| hideMarketStatus    | boolean                                 | false    | false                            | Shows market status or not                                                            |
| hideDateRanges      | boolean                                 | false    | false                            | Hides or shows date ranges                                                            |
| backGroundColor     | string                                  | false    | rgba(19, 23, 34, 0)              | Sets the background color in the widget                                               |
| widgetFontColor     | string                                  | false    | rgba(216, 216, 216, 1)           | Sets the font color in the widget                                                     |
| chartType           | [_**ChartType**_](#public-types)        | false    | area                             | Sets the chart type                                                                   |
| lineColor           | string                                  | false    | #2962FF                          | Sets the line color, chartType **area** only.                                         |
| bottomColor         | string                                  | false    | rgba(41, 98, 255, 0)             | Sets the bottom color, chartType **area** only.                                       |
| topColor            | string                                  | false    | rgba(41, 98, 255, 0.3)           | Sets the top color, chartType **area** only.                                          |
| upColor             | string                                  | false    | #26a69a                          | Sets the default up color, chartType **bars or candlesticks** only                    |
| downColor           | string                                  | false    | #26a69a                          | Sets the default down color, chartType **bars or candlesticks** only                  |
| borderUpColor       | string                                  | false    | #26a69a                          | Sets the default borderUp color, chartType **candlesticks** only                      |
| borderDownColor     | string                                  | false    | #ef5350                          | Sets the default borderDown color, chartType **candlesticks** only                    |
| wickUpColor         | string                                  | false    | #26a69a                          | Sets the default wickUp color, chartType **candlesticks** only                        |
| wickDownColor       | string                                  | false    | #ef5350                          | Sets the default wickDown color, chartType **candlesticks** only                      |
| container_id        | string                                  | false    | symbol-overview-widget-container | Set container_id generated [here](https://www.tradingview.com/widget/advanced-chart/) |

## Default symbols {#symbols}

```json
[
  ["Apple", "AAPL"],
  ["Google", "GOOGL"],
  ["Microsoft", "MSFT"]
]
```
