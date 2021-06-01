---
sidebar_position: 18
---

# Company Profile Widget

This is the React component for the [Company Profile Widget](https://www.tradingview.com/widget/symbol-profile/)

## Example

```
import { CompanyProfile } from "react-ts-tradingview-widgets";

<CompanyProfile colorTheme="dark" height={400}></CompanyProfile>
```

import { CompanyProfile } from "react-ts-tradingview-widgets";

<CompanyProfile colorTheme="dark" height={400}></CompanyProfile>

## Used Public types {#public-types}

| Type       | Value        |
| ---------- | ------------ |
| ColorTheme | light / dark |

## Properties

| Property      | Type                              | Required | Default     | Description                           |
| ------------- | --------------------------------- | -------- | ----------- | ------------------------------------- |
| symbol        | string                            | false    | NASDAQ:AAPL | Sets the default ticker symbol        |
| width         | number/string                     | false    | 480         | Sets a static width on the component  |
| height        | number/string                     | false    | 650         | Sets a static height on the component |
| autosize      | boolean                           | false    | false       | Sets the width and height to 100%     |
| colorTheme    | [_**ColorTheme**_](#public-types) | false    | light       | Sets the default theme                |
| isTransparent | boolean                           | false    | false       | Transparent background for component  |
| locale        | string                            | false    | en          | Sets the default locale               |
| largeChartUrl | string                            | false    | undefined   | Make widget redirect to larger chart  |
