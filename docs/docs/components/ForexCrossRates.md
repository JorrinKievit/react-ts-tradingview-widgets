---
sidebar_position: 13
---

# Forex Cross Rates Widget

This is the React component for the [Forex Cross Rates Widget](https://www.tradingview.com/widget/forex-cross-rates/)

## Example

```
import { ForexCrossRates } from "react-ts-tradingview-widgets";

<ForexCrossRates colorTheme="dark" autosize></ForexCrossRates>
```

import { ForexCrossRates } from "react-ts-tradingview-widgets";

<ForexCrossRates colorTheme="dark" autosize></ForexCrossRates>

## Used Public types {#public-types}

| Type       | Value        |
| ---------- | ------------ |
| ColorTheme | light / dark |

## Properties

| Property      | Type                              | Required | Default                       | Description                           |
| ------------- | --------------------------------- | -------- | ----------------------------- | ------------------------------------- |
| width         | number/string                     | false    | 770                           | Sets a static width on the component  |
| height        | number/string                     | false    | 400                           | Sets a static height on the component |
| autosize      | boolean                           | false    | false                         | Sets the width and height to 100%     |
| currencies    | string[]                          | false    | See [_**here**_](#currencies) | Sets the default currencies           |
| isTransparent | boolean                           | false    | false                         | Transparent background for component  |
| colorTheme    | [_**ColorTheme**_](#public-types) | false    | light                         | Sets the default theme                |
| locale        | string                            | false    | en                            | Sets the default locale               |
| largeChartUrl | string                            | false    | undefined                     | Make widget redirect to larger chart  |

## Default currencies

```json
["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD", "CNY"]
```
