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

| Type          | Value                                                                                                                                                                                                |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DefaultScreen | general / top_gainers / top_losers / ath / atl / above_52wk_high / below_52wk_low / monthly_high / monthly_low / most_volatile / overbought / oversold / outperforming_SMA50 / underperforming_SMA50 |
| Market        | america / australia / canada / egypt / germany / india / israel / italy / luxembourg / poland / sweden / turkey / uk / vietnam / forex / crypto                                                      |

## Used Public types {#public-types}

| Type           | Value                                                  |
| -------------- | ------------------------------------------------------ |
| ColorTheme     | light / dark                                           |
| DefaultColumns | overview / performance / oscillators / moving_averages |

## Properties

| Property      | Type                                  | Required | Default   | Description                           |
| ------------- | ------------------------------------- | -------- | --------- | ------------------------------------- |
| width         | number/string                         | false    | 1100      | Sets a static width on the component  |
| height        | number/string                         | false    | 512       | Sets a static height on the component |
| autosize      | boolean                               | false    | false     | Sets the width and height to 100%     |
| defaultColumn | [_**DefaultColumns**_](#public-types) | false    | overview  | Sets default columns                  |
| defaultScreen | [_**DefaultScreen**_](#private-types) | false    | general   | Sets default screens                  |
| market        | [_**Market**_](#private-types)        | false    | forex     | Sets default exchange                 |
| showToolbar   | boolean                               | false    | true      | Sets default Show top toolbar         |
| colorTheme    | [_**ColorTheme**_](#public-types)     | false    | light     | Sets the default theme                |
| locale        | string                                | false    | en        | Sets the default locale               |
| isTransparent | boolean                               | false    | false     | Transparent background for component  |
| largeChartUrl | string                                | false    | undefined | Make widget redirect to larger chart  |
