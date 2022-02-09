---
sidebar_position: 19
---

# Timeline Widget

This is the React component for the [Timeline Widget](https://www.tradingview.com/widget/timeline/)

## Example

```
import { Timeline } from "react-ts-tradingview-widgets";

<Timeline colorTheme="dark" feedMode="market" market="crypto" height={400} width="100%"></Timeline>
```

import { Timeline } from "react-ts-tradingview-widgets";

<Timeline colorTheme="dark" feedMode="market" market="crypto" height={400} width="100%"></Timeline>

## Used private types {#private-types}

| Type     | Value                                          |
| -------- | ---------------------------------------------- |
| Market   | crypto / forex / stock / index / futures / cfd |
| FeedMode | all_symbols / market / symbol                  |

## Used Public types {#public-types}

| Type        | Value                        |
| ----------- | ---------------------------- |
| ColorTheme  | light / dark                 |
| DisplayMode | regular / compact / adaptive |

## Properties

| Property      | Type                               | Required | Default     | Description                                                        |
| ------------- | ---------------------------------- | -------- | ----------- | ------------------------------------------------------------------ |
| feedMode      | [_**FeedMode**_](#private-types)   | false    | all_symbols | Sets the feed mode                                                 |
| market        | [_**Market**_](#private-types)     | true     | undefined   | Sets the market type, only used when **FeedMode** is **market**    |
| symbol        | string                             | true     | undefined   | Sets the default symbol, only used when **FeedMode** is **symbol** |
| colorTheme    | [_**ColorTheme**_](#public-types)  | false    | light       | Sets the default theme                                             |
| isTransparent | boolean                            | false    | false       | Transparent background for component                               |
| displayMode   | [_**Displaymode**_](#public-types) | false    | regular     | Sets default Display mode                                          |
| width         | number/string                      | false    | 480         | Sets a static width on the component                               |
| height        | number/string                      | false    | 830         | Sets a static height on the component                              |
| autosize      | boolean                            | false    | false       | Sets the width and height to 100%                                  |
| locale        | string                             | false    | en          | Sets the default locale                                            |
| symbol        | string                             | false    | undefined   | Set default ticker instead of default all tickers                  |
| largeChartUrl | string                             | false    | undefined   | Make widget redirect to larger chart                               |
