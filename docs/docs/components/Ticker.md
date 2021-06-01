---
sidebar_position: 7
---

# Ticker Widget

This is the React component for the [Ticker Widget](https://www.tradingview.com/widget/ticker/)

## Example

```
import { Ticker } from "react-ts-tradingview-widgets";

<Ticker colorTheme="dark"></Ticker>
```

import { Ticker } from "react-ts-tradingview-widgets";

<Ticker colorTheme="dark"></Ticker>

## Used Public types {#public-types}

| Type         | Value                                  |
| ------------ | -------------------------------------- |
| ColorTheme   | light / dark                           |
| TickerSymbol | [_**TickerSymbol[]**_](#ticker-symbol) |

## Ticker roperties

| Property      | Type                                   | Required | Default                    | Description                          |
| ------------- | -------------------------------------- | -------- | -------------------------- | ------------------------------------ |
| colorTheme    | [_**ColorTheme**_](#public-types)      | false    | light                      | Sets the default theme               |
| isTransparent | boolean                                | false    | false                      | Transparent background for component |
| locale        | string                                 | false    | en                         | Sets the default locale              |
| symbols       | [_**TickerSymbol[]**_](#ticker-symbol) | false    | See [_**Here**_](#tickers) | Default symbols in widget            |

## TickerSymbol {#ticker-symbol}

| Property | Type   | Required | Default                    | Description  |
| -------- | ------ | -------- | -------------------------- | ------------ |
| proName  | string | true     | See [_**Here**_](#tickers) | Ticker name  |
| title    | string | true     | See [_**Here**_](#tickers) | Ticker title |

## Ticker default symbols {#tickers}

```json
[
  {
    "proName": "FOREXCOM:SPXUSD",
    "title": "S&P 500"
  },
  {
    "proName": "FOREXCOM:NSXUSD",
    "title": "Nasdaq 100"
  },
  {
    "proName": "FX_IDC:EURUSD",
    "title": "EUR/USD"
  },
  {
    "proName": "BITSTAMP:BTCUSD",
    "title": "BTC/USD"
  },
  {
    "proName": "BITSTAMP:ETHUSD",
    "title": "ETH/USD"
  }
]
```
