---
sidebar_position: 16
---

# Cryptocurrency Market Widget

This is the React component for the [Cryptocurrency Market Widget](https://www.tradingview.com/widget/crypto-mkt-screener/)

## Example

```
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";

<CryptoCurrencyMarket colorTheme="dark" width="100%" height={400}></CryptoCurrencyMarket>
```

import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";

<CryptoCurrencyMarket colorTheme="dark" width="100%" height={400}></CryptoCurrencyMarket>

## Used Public types {#public-types}

| Type           | Value                                                  |
| -------------- | ------------------------------------------------------ |
| ColorTheme     | light / dark                                           |
| DefaultColumns | overview / performance / oscillators / moving_averages |

## Properties

| Property        | Type                                  | Required | Default    | Description                                |
| --------------- | ------------------------------------- | -------- | ---------- | ------------------------------------------ |
| width           | number/string                         | false    | 1000       | Sets a static width on the component       |
| height          | number/string                         | false    | 490        | Sets a static height on the component      |
| autosize        | boolean                               | false    | false      | Sets the width and height to 100%          |
| defaultColumn   | [_**DefaultColumns**_](#public-types) | false    | overview   | Sets default columns                       |
| screener_type   | crypto_mkt                            | false    | crypto_mkt | Sets screener_type (Its always crypto_mkt) |
| displayCurrency | USD / BTC                             | false    | USD        | Sets default Display currency              |
| colorTheme      | [_**ColorTheme**_](#public-types)     | false    | light      | Sets the default theme                     |
| locale          | string                                | false    | en         | Sets the default locale                    |
| isTransparent   | boolean                               | false    | false      | Transparent background for component       |
