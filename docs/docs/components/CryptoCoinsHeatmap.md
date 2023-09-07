---
sidebar_position: 21
---

# Crypto Coins Heatmap Widget

This is the React component for the [Crypto Coins Heatmap Widget](https://www.tradingview.com/widget/crypto-coins-heatmap/)

## Example

```
import { CryptoCoinsHeatmap } from "react-ts-tradingview-widgets";

<CryptoCoinsHeatmap colorTheme="dark"></CryptoCoinsHeatmap>
```

import { CryptoCoinsHeatmap } from "react-ts-tradingview-widgets";

<CryptoCoinsHeatmap colorTheme="dark" width={700} height={500}></CryptoCoinsHeatmap>

## Used Private types {#private-types}

| Type       | Value                                                                                                                                                                       |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BlockSize  | market_cap_calc / market_cap_diluted_calc / 24h_vol_cmc / tvl / 24h_vol_to_market_cap / market_cap_to_tvl                                                                   |
| BlockColor | change&vert;60 / change&vert;240 / change / Perf.W / Perf.1M / Perf.3M / Perf.6M / Perf.Y / Perf.YTD / 24h_vol_change_cmc / 24h_vol_cmc / Volatility.D / Volatility.D / gap |

## Used Public types {#public-types}

| Type       | Value        |
| ---------- | ------------ |
| ColorTheme | light / dark |

## Properties

| Property            | Type                                                         | Required | Default          | Description                                                           |
| ------------------- | ------------------------------------------------------------ | -------- | ---------------- | --------------------------------------------------------------------- |
| dataSource          | Crypto / CryptoWithoutBTC / CryptoWithoutStable / CryptoDefi | false    | Crypto           | Default dataSource                                                    |
| blockSize           | [_**BlockSize**_](#private-types)                            | false    | market_cap_basic | Size of the blocks in the heatmap                                     |
| blockColor          | [_**BlockColor**_](#private-types)                           | false    | change           | Color of the blocks in the heatmap                                    |
| locale              | [Locales](../types/Locales.md)                               | false    | en               | Sets the default locale                                               |
| autosize            | boolean                                                      | false    | false            | Sets the width and height to 100%                                     |
| symbolUrl           | string                                                       | false    | ""               | Make widget redirect to symbol url                                    |
| colorTheme          | [_**ColorTheme**_](#public-types)                            | false    | light            | Sets the default theme                                                |
| isZoomEnabled       | boolean                                                      | false    | true             | Enables zoom                                                          |
| hasTopBar           | boolean                                                      | false    | true             | Enables top bar                                                       |
| isSetDataSetEnabled | boolean                                                      | false    | true             | Enables set data set button. Can only be enabled if hasTopBar is true |
