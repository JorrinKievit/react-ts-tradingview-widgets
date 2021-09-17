---
sidebar_position: 3
---

# Market Overview Widget

This is the React component for the [Market Overview Widget](https://www.tradingview.com/widget/market-overview/)

## Example

```
import { MarketOverview } from "react-ts-tradingview-widgets";

<MarketOverview colorTheme="dark" height={400} showFloatingTooltip></MarketOverview>
```

import { MarketOverview } from "react-ts-tradingview-widgets";

<MarketOverview colorTheme="dark" height={400} showFloatingTooltip></MarketOverview>

## Used Public types {#public-types}

| Type                 | Value                          |
| -------------------- | ------------------------------ |
| ColorTheme           | light / dark                   |
| DateRange            | 1D / 1M / 3M / 12M / 60M / ALL |
| MarketOverviewTab    | See [_**here**_](#tab)         |
| MarketOverviewSymbol | See [_**here**_](#symbol)      |

## MarketOverview properties

| Property                        | Type                              | Required | Default                  | Description                           |
| ------------------------------- | --------------------------------- | -------- | ------------------------ | ------------------------------------- |
| colorTheme                      | [_**ColorTheme**_](#public-types) | false    | light                    | Sets the default theme                |
| dateRange                       | [_**DateRange**_](#public-types)  | false    | 12M                      | Default date range of chart           |
| showChart                       | boolean                           | false    | true                     | Show chart in overview                |
| locale                          | string                            | false    | en                       | Sets the default locale               |
| largeChartUrl                   | string                            | false    | undefined                | Make widget redirect to larger chart  |
| isTransparent                   | boolean                           | false    | false                    | Transparent background for component  |
| showSymbolLogo                  | boolean                           | false    | true                     | Show logo of symbol                   |
| showFloatingTooltip             | boolean                           | false    | false                    | Show floating tooltip on chart        |
| width                           | number/string                     | false    | 400                      | Sets a static width on the component  |
| height                          | number/string                     | false    | 660                      | Sets a static height on the component |
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
| tabs                            | [_**MarketOverviewTab[]**_](#tab) | false    | See [_**here**_](#tabs)  | Tabs in market overview               |

## MarketOverviewTab properties {#tab}

| Property      | Type                   | Required | Default                 | Description               |
| ------------- | ---------------------- | -------- | ----------------------- | ------------------------- |
| title         | string                 | true     | See [_**here**_](#tabs) | title of the tab          |
| symbols       | MarketOverviewSymbol[] | true     | See [_**here**_](#tabs) | symbols of the tab        |
| originalTitle | string                 | true     | See [_**here**_](#tabs) | original title of the tab |

## MarketOverviewSymbol properties {#symbol}

| Property | Type   | Required | Default                 | Description |
| -------- | ------ | -------- | ----------------------- | ----------- |
| s        | string | true     | See [_**here**_](#tabs) | Symbol type |
| d        | string | false    | See [_**here**_](#tabs) | Symbol name |

## Tabs default value {#tabs}

```json
[
  {
    "title": "Indices",
    "symbols": [
      {
        "s": "FOREXCOM:SPXUSD",
        "d": "S&P 500"
      },
      {
        "s": "FOREXCOM:NSXUSD",
        "d": "Nasdaq 100"
      },
      {
        "s": "FOREXCOM:DJI",
        "d": "Dow 30"
      },
      {
        "s": "INDEX:NKY",
        "d": "Nikkei 225"
      },
      {
        "s": "INDEX:DEU30",
        "d": "DAX Index"
      },
      {
        "s": "FOREXCOM:UKXGBP",
        "d": "UK 100"
      }
    ],
    "originalTitle": "Indices"
  },
  {
    "title": "Commodities",
    "symbols": [
      {
        "s": "CME_MINI:ES1!",
        "d": "S&P 500"
      },
      {
        "s": "CME:6E1!",
        "d": "Euro"
      },
      {
        "s": "COMEX:GC1!",
        "d": "Gold"
      },
      {
        "s": "NYMEX:CL1!",
        "d": "Crude Oil"
      },
      {
        "s": "NYMEX:NG1!",
        "d": "Natural Gas"
      },
      {
        "s": "CBOT:ZC1!",
        "d": "Corn"
      }
    ],
    "originalTitle": "Commodities"
  },
  {
    "title": "Bonds",
    "symbols": [
      {
        "s": "CME:GE1!",
        "d": "Eurodollar"
      },
      {
        "s": "CBOT:ZB1!",
        "d": "T-Bond"
      },
      {
        "s": "CBOT:UB1!",
        "d": "Ultra T-Bond"
      },
      {
        "s": "EUREX:FGBL1!",
        "d": "Euro Bund"
      },
      {
        "s": "EUREX:FBTP1!",
        "d": "Euro BTP"
      },
      {
        "s": "EUREX:FGBM1!",
        "d": "Euro BOBL"
      }
    ],
    "originalTitle": "Bonds"
  },
  {
    "title": "Forex",
    "symbols": [
      {
        "s": "FX:EURUSD"
      },
      {
        "s": "FX:GBPUSD"
      },
      {
        "s": "FX:USDJPY"
      },
      {
        "s": "FX:USDCHF"
      },
      {
        "s": "FX:AUDUSD"
      },
      {
        "s": "FX:USDCAD"
      }
    ],
    "originalTitle": "Forex"
  }
]
```
