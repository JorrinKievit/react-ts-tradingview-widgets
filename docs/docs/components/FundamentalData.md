---
sidebar_position: 17
---

# Fundamental Data Widget

This is the React component for the [Fundamental Data Widget](https://www.tradingview.com/widget/fundamental-data/)

## Example

```
import { FundamentalData } from "react-ts-tradingview-widgets";

<FundamentalData colorTheme="dark" height={400} width="100%"></FundamentalData>
```

import { FundamentalData } from "react-ts-tradingview-widgets";

<FundamentalData colorTheme="dark" height={400} width="100%"></FundamentalData>

## Used Public types {#public-types}

| Type        | Value                        |
| ----------- | ---------------------------- |
| ColorTheme  | light / dark                 |
| DisplayMode | regular / compact / adaptive |

## Properties

| Property      | Type                               | Required | Default     | Description                           |
| ------------- | ---------------------------------- | -------- | ----------- | ------------------------------------- |
| symbol        | string                             | false    | NASDAQ:AAPL | Sets the default ticker symbol        |
| colorTheme    | [_**ColorTheme**_](#public-types)  | false    | light       | Sets the default theme                |
| isTransparent | boolean                            | false    | false       | Transparent background for component  |
| largeChartUrl | string                             | false    | undefined   | Make widget redirect to larger chart  |
| displayMode   | [_**Displaymode**_](#public-types) | false    | regular     | Sets default Display mode             |
| width         | number/string                      | false    | 480         | Sets a static width on the component  |
| height        | number/string                      | false    | 830         | Sets a static height on the component |
| autosize      | boolean                            | false    | false       | Sets the width and height to 100%     |
| locale        | string                             | false    | en          | Sets the default locale               |
