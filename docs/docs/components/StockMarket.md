---
sidebar_position: 5
---

# Stock Market Widget

This is the React component for the [Stock Market Widget](https://www.tradingview.com/widget/market-movers/)

## Example

```
import { StockMarket } from "react-ts-tradingview-widgets";

<StockMarket colorTheme="dark" height={400} width="100%"></StockMarket>
```

import { StockMarket } from "react-ts-tradingview-widgets";

<StockMarket colorTheme="dark" height={400} width="100%"></StockMarket>

## Used Private types {#private-types}

| Type     | Value                                                                                                                                                                                              |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| exchange | US / NASDAQ / NYSE / AMEX / OTC / ASX / CSE / NEO / TSX / TSXV / EGX / BER / DUS / FWB / SWB / HAM/ HAN / XETR / BSE / NSE / TASE / MIL / LUXSE / NEWCONNECT / KRX / NGM / BIST / LSE / LSIN / HNX |

## Used Public types {#public-types}

| Type       | Value                          |
| ---------- | ------------------------------ |
| ColorTheme | light / dark                   |
| DateRange  | 1D / 1M / 3M / 12M / 60M / ALL |

## Properties

| Property                        | Type                              | Required | Default                  | Description                           |
| ------------------------------- | --------------------------------- | -------- | ------------------------ | ------------------------------------- |
| colorTheme                      | [_**ColorTheme**_](#public-types) | false    | light                    | Sets the default theme                |
| dateRange                       | [_**DateRange**_](#public-types)  | false    | 12M                      | Default date range of chart           |
| exchange                        | string                            | false    | US                       | Default exchange for widget           |
| showChart                       | boolean                           | false    | true                     | Include chart in widget               |
| locale                          | string                            | false    | en                       | Sets the default locale               |
| largeChartUrl                   | string                            | false    | undefined                | Make widget redirect to larger chart  |
| isTransparent                   | boolean                           | false    | false                    | Transparent background for component  |
| showSymbolLogo                  | boolean                           | false    | true                     | Show symbol of ticker                 |
| showFloatingTooltip             | boolean                           | false    | false                    | Show floating tooltip on chart        |
| width                           | number/string                     | false    | 400                      | Sets a static width on the component  |
| height                          | number/string                     | false    | 600                      | Sets a static height on the component |
| autosize                        | boolean                           | false    | false                    | Sets the width and height to 100%     |
| plotLineColorGrowing            | string                            | false    | rgba(33, 150, 243, 1)    | Price line growing color              |
| plotLineColorFalling            | string                            | false    | rgba(33, 150, 243, 1)    | Price line falling color              |
| gridLineColor                   | string                            | false    | rgba(240, 243, 250, 1)   | Grid color                            |
| scaleFontColor                  | string                            | false    | rgba(120, 123, 134, 1)   | Font color                            |
| belowLineFillColorGrowing       | string                            | false    | rgba(33, 150, 243, 0.12) | Under line area growing color         |
| belowLineFillColorFalling       | string                            | false    | rgba(33, 150, 243, 0.12) | Under line area falling color         |
| belowLineFillColorGrowingBottom | string                            | false    | rgba(41, 98, 255, 0)     | Under line area growing bottom color  |
| belowLineFillColorFallingButtom | string                            | false    | rgba(41, 98, 255, 0)     | Under line area falling bottom collor |
| symbolActiveColor               | string                            | false    | rgba(33, 150, 243, 0.12) | Active Ticker color                   |
