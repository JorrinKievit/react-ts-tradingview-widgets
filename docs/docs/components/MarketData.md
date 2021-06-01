---
sidebar_position: 4
---

# Market Data Widget

This is the React component for the [Market Data Widget](https://www.tradingview.com/widget/market-quotes/)

## Example

```
import { MarketData } from "react-ts-tradingview-widgets";

<MarketData colorTheme="dark" width="100%" height={400}></MarketData>
```

import { MarketData } from "react-ts-tradingview-widgets";

<MarketData colorTheme="dark" width="100%" height={400}></MarketData>

## Used Public types {#public-types}

| Type                   | Value                           |
| ---------------------- | ------------------------------- |
| ColorTheme             | light / dark                    |
| MarketDataSymbolsGroup | See [_**here**_](#symbol-group) |
| MarketDataSymbol       | See [_**here**_](#symbol)       |

## MarketData properties

| Property       | Type                                      | Required | Default                    | Description                           |
| -------------- | ----------------------------------------- | -------- | -------------------------- | ------------------------------------- |
| width          | number/string                             | false    | 770                        | Sets a static width on the component  |
| height         | number/string                             | false    | 450                        | Sets a static height on the component |
| autosize       | boolean                                   | false    | false                      | Sets the width and height to 100%     |
| symbolsGroup   | [MarketDataSymbolsGroup[]](#symbol-group) | false    | See [_**here**_](#symbols) | Default symbols used in widget        |
| showSymbolLogo | boolean                                   | false    | true                       | Show symbol of ticker                 |
| colorTheme     | [_**ColorTheme**_](#public-types)         | false    | light                      | Sets the default theme                |
| isTransparent  | boolean                                   | false    | false                      | Transparent background for component  |
| locale         | string                                    | false    | en                         | Sets the default locale               |
| largeChartUrl  | string                                    | false    | undefined                  | Make widget redirect to larger chart  |

## MarketDataSymbolsGroup properties {#symbol-group}

| Property     | Type               | Required | Default                    | Description                      |
| ------------ | ------------------ | -------- | -------------------------- | -------------------------------- |
| name         | string             | true     | See [_**here**_](#symbols) | Name of the symbolgroup          |
| originalName | string             | true     | See [_**here**_](#symbols) | Original name of the symbolgroup |
| symbols      | MarketDataSymbol[] | true     | See [_**here**_](#symbols) | Array of symbols                 |

## MarketDataSymbol properties {#symbol}

| Property    | Type   | Required | Default                    | Description                |
| ----------- | ------ | -------- | -------------------------- | -------------------------- |
| name        | string | true     | See [_**here**_](#symbols) | Name of the symbol         |
| displayName | string | false    | See [_**here**_](#symbols) | Display name of the symbol |

## Default symbolsGroup value

```json
[
  {
    "name": "Indices",
    "originalName": "Indices",
    "symbols": [
      {
        "name": "FOREXCOM:SPXUSD",
        "displayName": "S&P 500"
      },
      {
        "name": "FOREXCOM:NSXUSD",
        "displayName": "Nasdaq 100"
      },
      {
        "name": "FOREXCOM:DJI",
        "displayName": "Dow 30"
      },
      {
        "name": "INDEX:NKY",
        "displayName": "Nikkei 225"
      },
      {
        "name": "INDEX:DEU30",
        "displayName": "DAX Index"
      },
      {
        "name": "FOREXCOM:UKXGBP",
        "displayName": "UK 100"
      }
    ]
  },
  {
    "name": "Commodities",
    "originalName": "Commodities",
    "symbols": [
      {
        "name": "CME_MINI:ES1!",
        "displayName": "S&P 500"
      },
      {
        "name": "CME:6E1!",
        "displayName": "Euro"
      },
      {
        "name": "COMEX:GC1!",
        "displayName": "Gold"
      },
      {
        "name": "NYMEX:CL1!",
        "displayName": "Crude Oil"
      },
      {
        "name": "NYMEX:NG1!",
        "displayName": "Natural Gas"
      },
      {
        "name": "CBOT:ZC1!",
        "displayName": "Corn"
      }
    ]
  },
  {
    "name": "Bonds",
    "originalName": "Bonds",
    "symbols": [
      {
        "name": "CME:GE1!",
        "displayName": "Eurodollar"
      },
      {
        "name": "CBOT:ZB1!",
        "displayName": "T-Bond"
      },
      {
        "name": "CBOT:UB1!",
        "displayName": "Ultra T-Bond"
      },
      {
        "name": "EUREX:FGBL1!",
        "displayName": "Euro Bund"
      },
      {
        "name": "EUREX:FBTP1!",
        "displayName": "Euro BTP"
      },
      {
        "name": "EUREX:FGBM1!",
        "displayName": "Euro BOBL"
      }
    ]
  },
  {
    "name": "Forex",
    "originalName": "Forex",
    "symbols": [
      {
        "name": "FX:EURUSD"
      },
      {
        "name": "FX:GBPUSD"
      },
      {
        "name": "FX:USDJPY"
      },
      {
        "name": "FX:USDCHF"
      },
      {
        "name": "FX:AUDUSD"
      },
      {
        "name": "FX:USDCAD"
      }
    ]
  }
]
```
