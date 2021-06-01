---
sidebar_position: 12
---

# Symbol Info Widget

This is the React component for the [Symbol Info Widget](https://www.tradingview.com/widget/symbol-info/)

## Example

```
import { SymbolInfo } from "react-ts-tradingview-widgets";

<SymbolInfo colorTheme="dark" autosize></SymbolInfo>
```

import { SymbolInfo } from "react-ts-tradingview-widgets";

<SymbolInfo colorTheme="dark" autosize></SymbolInfo>

## Used Public types {#public-types}

| Type       | Value        |
| ---------- | ------------ |
| ColorTheme | light / dark |

## Properties

| Property      | Type                              | Required | Default     | Description                          |
| ------------- | --------------------------------- | -------- | ----------- | ------------------------------------ |
| symbol        | string                            | false    | NASDAQ:AAPL | Sets the default ticker symbol       |
| width         | number/string                     | false    | 1000        | Sets a static width on the component |
| locale        | string                            | false    | en          | Sets the default locale              |
| colorTheme    | [_**ColorTheme**_](#public-types) | false    | light       | Sets the default theme               |
| isTransparent | boolean                           | false    | false       | Transparent background for component |
| largeChartUrl | string                            | false    | undefined   | Make widget redirect to larger chart |
