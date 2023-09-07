---
sidebar_position: 20
---

# Stock Heatmap Widget

This is the React component for the [Stock Heatmap Widget](https://www.tradingview.com/widget/stock-heatmap/)

## Example

```
import { StockHeatmap } from "react-ts-tradingview-widgets";

<StockHeatmap colorTheme="dark"></StockHeatmap>
```

import { StockHeatmap } from "react-ts-tradingview-widgets";

<StockHeatmap colorTheme="dark"></StockHeatmap>

## Used Private types {#private-types}

| Type       | Value                                                                                                                                                                                                                                                                                                               |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BlockSize  | market_cap_basic / number_of_employees / dividend_yield_recent / price_earnings_ttm / price_sales_current / price_book_fq / volume&vert;60 / volume&vert;240 / volume / volume&vert;1W / volume&vert;1M / Value.Traded&vert;60 / Value.Traded&vert;240 / Value.Traded / Value.Traded&vert;1W / Value.Traded&vert;1M |
| BlockColor | change&vert;60 / change&vert;240 / change / Perf.W / Perf.1M / Perf.3M / Perf.6M / Perf.Y / Perf.YTD / premarket_change / postmarket_change / relative_volume_10d_calc / Volatility.D / gap                                                                                                                         |

## Used Public types {#public-types}

| Type       | Value                             |
| ---------- | --------------------------------- |
| ColorTheme | light / dark                      |
| Exchanges  | [See here](../types/Exchanges.md) |

## Properties

| Property            | Type                               | Required | Default          | Description                                                           |
| ------------------- | ---------------------------------- | -------- | ---------------- | --------------------------------------------------------------------- |
| dataSource          | string                             | false    | SPX500           | Default dataSource                                                    |
| exchanges           | [_**Exchanges**_](#public-types)   | false    | ["SPX500"]       | Choose which exchanges to create a heatmap for                        |
| grouping            | no_group / sector                  | false    | sector           | Grouping of the heatmap                                               |
| blockSize           | [_**BlockSize**_](#private-types)  | false    | market_cap_basic | Size of the blocks in the heatmap                                     |
| blockColor          | [_**BlockColor**_](#private-types) | false    | change           | Color of the blocks in the heatmap                                    |
| locale              | [Locales](../types/Locales.md)     | false    | en               | Sets the default locale                                               |
| autosize            | boolean                            | false    | false            | Sets the width and height to 100%                                     |
| symbolUrl           | string                             | false    | ""               | Make widget redirect to symbol url                                    |
| colorTheme          | [_**ColorTheme**_](#public-types)  | false    | light            | Sets the default theme                                                |
| isZoomEnabled       | boolean                            | false    | true             | Enables zoom                                                          |
| hasTopBar           | boolean                            | false    | true             | Enables top bar                                                       |
| isSetDataSetEnabled | boolean                            | false    | true             | Enables set data set button. Can only be enabled if hasTopBar is true |
