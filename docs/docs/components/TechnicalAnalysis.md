---
sidebar_position: 2
---

# Technical Analysis Widget

This is the React component for the [Technical Analysis Widget](https://www.tradingview.com/widget/technical-analysis/)

## Example

```
import { TechnicalAnalysis } from "react-ts-tradingview-widgets";

<TechnicalAnalysis colorTheme="dark"></TechnicalAnalysis>
```

import { TechnicalAnalysis } from "react-ts-tradingview-widgets";

<TechnicalAnalysis colorTheme="dark"></TechnicalAnalysis>

## Used Private types {#private-types}

| Type     | Value                                  |
| -------- | -------------------------------------- |
| Interval | 1m / 5m / 15m / 1h / 4h / 1D / 1W / 1M |

## Used Public types {#public-types}

| Type       | Value        |
| ---------- | ------------ |
| ColorTheme | light / dark |

## Properties

| Property         | Type                              | Required | Default     | Description                           |
| ---------------- | --------------------------------- | -------- | ----------- | ------------------------------------- |
| interval         | Interval                          | false    | 1m          | Sets the default interval             |
| width            | number/string                     | false    | 425         | Sets a static width on the component  |
| height           | number/string                     | false    | 450         | Sets a static height on the component |
| autosize         | boolean                           | false    | false       | Sets the width and height to 100%     |
| isTransparent    | boolean                           | false    | false       | Transparent background for component  |
| symbol           | string                            | false    | NASDAQ:AAPL | Sets the default ticker symbol        |
| showIntervalTabs | boolean                           | false    | true        | Show the interval tabs                |
| locale           | string                            | false    | en          | Sets the default locale               |
| colorTheme       | [_**ColorTheme**_](#public-types) | false    | light       | Sets the default theme                |
| largeChartUrl    | string                            | false    | undefined   | Make widget redirect to larger chart  |
