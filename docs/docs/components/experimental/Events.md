# Title

This is the React component for the [Title](url)

## Example

```
import { Component } from "react-ts-tradingview-widgets";

<Component theme="dark"></Component>
```

import { Component } from "react-ts-tradingview-widgets";

<Component theme="dark"></Component>

## Used Private types {#private-types}

| Type | Value |
| ---- | ----- |

## Used Public types {#public-types}

| Type       | Value                          |
| ---------- | ------------------------------ |
| ColorTheme | light / dark                   |
| DateRange  | 1D / 1M / 3M / 12M / 60M / ALL |

## Properties

| Property       | Type                              | Required | Default   | Description                           |
| -------------- | --------------------------------- | -------- | --------- | ------------------------------------- |
| width          | number/string                     | false    | 425       | Sets a static width on the component  |
| height         | number/string                     | false    | 450       | Sets a static height on the component |
| autosize       | boolean                           | false    | false     | Sets the width and height to 100%     |
| theme          | [_**ColorTheme**_](#public-types) | false    | light     | Sets the default theme                |
| locale         | string                            | false    | en        | Sets the default locale               |
| isTransparent  | boolean                           | false    | false     | Transparent background for component  |
| largeChartUrl  | string                            | false    | undefined | Make widget redirect to larger chart  |
| dateRange      | [_**DateRange**_](#public-types)  | false    | 12M       | Default date range of chart           |
| showSymbolLogo | boolean                           | false    | true      | Show symbol of ticker                 |
