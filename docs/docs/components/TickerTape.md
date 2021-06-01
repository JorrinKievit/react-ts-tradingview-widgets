---
sidebar_position: 8
---

# Ticker Tape Widget

This is the React component for the [Ticker Tape Widget](https://www.tradingview.com/widget/ticker-tape/)

## Example

```
import { TickerTape } from "react-ts-tradingview-widgets";

<TickerTape colorTheme="dark"></TickerTape>
```

import { TickerTape } from "react-ts-tradingview-widgets";

<TickerTape colorTheme="dark"></TickerTape>

## Used Public types {#public-types}

| Type         | Value                                      |
| ------------ | ------------------------------------------ |
| ColorTheme   | light / dark                               |
| TickerSymbol | [_**TickerTapeSymbol[]**_](#ticker-symbol) |
| DisplayMode  | regular / compact / adaptive               |

## Ticker roperties

| Property       | Type                                   | Required | Default                    | Description                          |
| -------------- | -------------------------------------- | -------- | -------------------------- | ------------------------------------ |
| symbols        | [_**TickerSymbol[]**_](#ticker-symbol) | false    | See [_**Here**_](#tickers) | Default symbols in widget            |
| showSymbolLogo | boolean                                | false    | true                       | Show ticker symbol                   |
| colorTheme     | [_**ColorTheme**_](#public-types)      | false    | light                      | Sets the default theme               |
| isTransparent  | boolean                                | false    | false                      | Transparent background for component |
| largeChartUrl  | string                                 | false    | undefined                  | Make widget redirect to larger chart |
| displayMode    | [_**DisplayMode**_](#public-types)     | false    | adaptive                   | Sets default display mode            |
| locale         | string                                 | false    | en                         | Sets the default locale              |

## TickerTapeSymbol {#ticker-symbol}

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
