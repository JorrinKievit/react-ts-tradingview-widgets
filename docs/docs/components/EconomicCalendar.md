---
sidebar_position: 6
---

# Economic Calendar

This is the React component for the [Economic Calendar](https://www.tradingview.com/widget/economic-calendar/)

## Example

```
import { EconomicCalendar } from "react-ts-tradingview-widgets";

<EconomicCalendar colorTheme="dark" height={400} width="100%"></EconomicCalendar>
```

import { EconomicCalendar } from "react-ts-tradingview-widgets";

<EconomicCalendar colorTheme="dark" height={400} width="100%"></EconomicCalendar>

## Used Private types {#private-types}

| Type             | Value        |
| ---------------- | ------------ |
| ImportanceFilter | -1,0,1 / 0,1 |

## Used Public types {#public-types}

| Type       | Value        |
| ---------- | ------------ |
| ColorTheme | light / dark |

## Properties

| Property         | Type                                     | Required | Default   | Description                           |
| ---------------- | ---------------------------------------- | -------- | --------- | ------------------------------------- |
| colorTheme       | [_**ColorTheme**_](#public-types)        | false    | light     | Sets the default theme                |
| isTransparent    | boolean                                  | false    | false     | Transparent background for component  |
| width            | number/string                            | false    | 425       | Sets a static width on the component  |
| height           | number/string                            | false    | 450       | Sets a static height on the component |
| autosize         | boolean                                  | false    | false     | Sets the width and height to 100%     |
| locale           | string                                   | false    | en        | Sets the default locale               |
| importanceFilter | [_**ImportanceFilter**_](#private-types) | false    | -1,0,1    | High performance                      |
| currencyFilter   | string                                   | false    | undefined | Default countries                     |
