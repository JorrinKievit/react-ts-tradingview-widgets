---
sidebar_position: 15
---

# Screener Widget

This is the React component for the [Screener Widget](https://www.tradingview.com/widget/screener/)

## Example

```
import { Screener } from "react-ts-tradingview-widgets";

<Screener colorTheme="dark" width="100%" height={300}></Screener>
```

import { Screener } from "react-ts-tradingview-widgets";

<Screener colorTheme="dark" width="100%" height={300}></Screener>

## Used Private types {#private-types}

| Type                       | Value                                                                                                                                                                                                                                                   |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DefaultColumnForexOrCrypto | overview / performance / oscillators / moving_averages                                                                                                                                                                                                  |
| DefaultColumnCountries     | overview / performance / valuation / dividends / margins / income_statement / balance_sheet / oscillators / moving_averages                                                                                                                             |
| DefaultScreenForexOrCrypto | general / top_gainers / top_losers / ath / atl / above_52wk_high / below_52wk_low / monthly_high / monthly_low / most_volatile / overbought / oversold / outperforming_SMA50 / underperforming_SMA50                                                    |
| DefaultScreenCountries     | most_capitalized / volume_leaders / top_gainers / top_losers / ath / atl / high_dividend / above_52wk_high / below_52wk_low / most_volatile / unusual_volume / overbought / oversold / outperforming_SMA50 / underperforming_SMA50 / earnings_this_week |
| MarketCountries            | america / australia / canada / egypt / germany / india / israel / italy / luxembourg / poland / sweden / turkey / uk / vietnam                                                                                                                          |
| MarketForexOrCrypto        | forex / crypto                                                                                                                                                                                                                                          |

## Used Public types {#public-types}

| Type       | Value        |
| ---------- | ------------ |
| ColorTheme | light / dark |

## Properties

The defaultColumn and defaultScreen properties are different based on the choice of market. So if the market is one of MarketCountries, the choices for defaultColumn and defaultScreen are DefaultColumnCountries and DefaultScreenCountries. The same applies to MarketForexOrCrypto.

| Property      | Type                                                                               | Required | Default   | Description                           |
| ------------- | ---------------------------------------------------------------------------------- | -------- | --------- | ------------------------------------- |
| width         | number/string                                                                      | false    | 1100      | Sets a static width on the component  |
| height        | number/string                                                                      | false    | 512       | Sets a static height on the component |
| autosize      | boolean                                                                            | false    | false     | Sets the width and height to 100%     |
| market        | [_**MarketCountries**_ or _**MarketForexOrCrypto**_](#private-types)               | false    | forex     | Sets default exchange                 |
| defaultColumn | [_**DefaultColumnCountries**_ or _**DefaultColumnForexOrCrypto**_](#private-types) | false    | overview  | Sets default columns                  |
| defaultScreen | [_**DefaultScreenCountries**_ or _**DefaultScreenForexOrCrypto**_](#private-types) | false    | general   | Sets default screens                  |
| showToolbar   | boolean                                                                            | false    | true      | Sets default Show top toolbar         |
| colorTheme    | [_**ColorTheme**_](#public-types)                                                  | false    | light     | Sets the default theme                |
| locale        | string                                                                             | false    | en        | Sets the default locale               |
| isTransparent | boolean                                                                            | false    | false     | Transparent background for component  |
| largeChartUrl | string                                                                             | false    | undefined | Make widget redirect to larger chart  |
