---
sidebar_position: 9
---

# Single Ticker Widget

This is the React component for the [Single Ticker Widget](https://www.tradingview.com/widget/single-ticker/)

## Example

```
import { SingleTicker } from "react-ts-tradingview-widgets";

<SingleTicker colorTheme="dark" width="100%"></SingleTicker>
```

import { SingleTicker } from "react-ts-tradingview-widgets";

<SingleTicker colorTheme="dark" width="100%"></SingleTicker>

## Used Public types {#public-types}

| Type       | Value        |
| ---------- | ------------ |
| ColorTheme | light / dark |

## Properties

| Property      | Type                              | Required | Default   | Description                          |
| ------------- | --------------------------------- | -------- | --------- | ------------------------------------ |
| symbol        | string                            | false    | FX:EURUSD | Default symbol for widget            |
| width         | number/string                     | false    | 350       | Sets a static width on the component |
| autosize      | boolean                           | false    | false     | Sets the width to 100%               |
| colorTheme    | [_**ColorTheme**_](#public-types) | false    | light     | Sets the default theme               |
| isTransparent | boolean                           | false    | false     | Transparent background for component |
| locale        | string                            | false    | en        | Sets the default locale              |
| largeChartUrl | string                            | false    | undefined | Make widget redirect to larger chart |
