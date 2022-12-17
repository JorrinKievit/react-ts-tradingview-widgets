export { AdvancedRealTimeChart } from "./components";
export { CompanyProfile } from "./components";
export { CryptoCurrencyMarket } from "./components";
export { EconomicCalendar } from "./components";
export { ForexCrossRates } from "./components";
export { ForexHeatMap } from "./components";
export { FundamentalData } from "./components";
export { MarketData } from "./components";
export { MarketOverview } from "./components";
export { MiniChart } from "./components";
export { Screener } from "./components";
export { SingleTicker } from "./components";
export { StockMarket } from "./components";
export { SymbolInfo } from "./components";
export { SymbolOverview } from "./components";
export { TechnicalAnalysis } from "./components";
export { Ticker } from "./components";
export { TickerTape } from "./components";
export { Timeline } from "./components";

export type { AdvancedRealTimeChartProps } from "./components";
export type { CompanyProfileProps } from "./components";
export type { CryptoCurrencyMarketProps } from "./components";
export type { EconomicCalendarProps } from "./components";
export type { ForexCrossRatesProps } from "./components";
export type { ForexHeatMapProps } from "./components";
export type { FundamentalDataProps } from "./components";
export type {
  MarketDataProps,
  MarketDataSymbolsGroup,
  MarketDataSymbol,
} from "./components";
export type {
  MarketOverviewProps,
  MarketOverviewSymbol,
  MarketOverviewTab,
} from "./components";
export type { MiniChartProps } from "./components";
export type { ScreenerProps } from "./components";
export type { SingleTickerProps } from "./components";
export type { StockMarketProps } from "./components";
export type { SymbolInfoProps } from "./components";
export type { SymbolOverviewProps } from "./components";
export type { TechnicalAnalysisProps } from "./components";
export type { TickerProps, TickerSymbol, TickerSymbols } from "./components";
export type { TickerTapeProps, TickerTapeSymbol } from "./components";
export type { TimelineProps } from "./components";
export type { CopyrightProps } from "./components";

export type ColorTheme = "light" | "dark";

export type DateRange = "1D" | "1M" | "3M" | "12M" | "60M" | "ALL";

export type DateFormat =
  | "dd MMM 'yy"
  | "MMM dd, yyyy"
  | "MMM dd"
  | "dd MMM"
  | "yyyy-MM-dd"
  | "yy-MM-dd"
  | "yy/MM/dd"
  | "yyyy/MM/dd"
  | "dd-MM-yyyy"
  | "dd-MM-yy"
  | "dd/MM/yy"
  | "dd/MM/yyyy"
  | "MM/dd/yy"
  | "MM/dd/yyyy";

export type DisplayMode = "regular" | "compact" | "adaptive";

export type ChartType = "line" | "area" | "bars" | "candlesticks";

export type ScalePosition = "no" | "left" | "right";

export type ScaleMode = "Normal" | "Percentage" | "Logarithmic";

export type Market = "crypto" | "forex" | "stock" | "index" | "futures" | "cfd";

export type Locales =
  | "en"
  | "in"
  | "de_DE"
  | "fr"
  | "es"
  | "it"
  | "pl"
  | "sv_SE"
  | "tr"
  | "ru"
  | "br"
  | "id"
  | "ms_MY"
  | "th_TH"
  | "vi_VN"
  | "ja"
  | "kr"
  | "zh_CN"
  | "zh_TW"
  | "ar_AE"
  | "he_IL";

export type Currencies =
  | "EUR"
  | "USD"
  | "JPY"
  | "GBP"
  | "CHF"
  | "AUD"
  | "CAD"
  | "NZD"
  | "CNY"
  | "TRY"
  | "SEK"
  | "NOK"
  | "DKK"
  | "ZAR"
  | "HKD"
  | "SGD"
  | "THB"
  | "MXN"
  | "IDR"
  | "KRW"
  | "PLN"
  | "ISK"
  | "KWD"
  | "PHP"
  | "MYR"
  | "INR"
  | "TWD"
  | "SAR"
  | "AED"
  | "RUB"
  | "ILS"
  | "ARS"
  | "CLP"
  | "COP"
  | "PEN"
  | "UYU";

export type Timezone =
  | "Etc/UTC"
  | "exchange"
  | "Pacific/Honolulu"
  | "America/Juneau"
  | "America/Los_Angeles"
  | "America/Vancouver"
  | "US/Mountain"
  | "America/Phoenix"
  | "America/El_Salvador"
  | "America/Bogota"
  | "America/Chicago"
  | "America/Mexico_City"
  | "America/El_Salvador"
  | "America/Bogota"
  | "America/Lima"
  | "America/Caracas"
  | "America/New_York"
  | "America/Toronto"
  | "America/Argentina/Buenos_Aires"
  | "America/Santiago"
  | "America/Sao_Paulo"
  | "Atlantic/Reykjavik"
  | "Europe/Dublin"
  | "Europe/Lisbon"
  | "Europe/London"
  | "Europe/Amsterdam"
  | "Europe/Belgrade"
  | "Europe/Berlin"
  | "Europe/Brussels"
  | "Europe/Copenhagen"
  | "Africa/Lagos"
  | "Europe/Luxembourg"
  | "Europe/Madrid"
  | "Europe/Malta"
  | "Europe/Oslo"
  | "Europe/Paris"
  | "Europe/Rome"
  | "Europe/Stockholm"
  | "Europe/Warsaw"
  | "Europe/Zurich"
  | "Europe/Athens"
  | "Afrika/Cairo"
  | "Europe/Helsinki"
  | "Asia/Jerusalem"
  | "Africa/Johannesburg"
  | "Europe/Riga"
  | "Europe/Tallinn"
  | "Europe/Vilnius"
  | "Asia/Bahrain"
  | "Europe/Istanbul"
  | "Asia/Kuwait"
  | "Europe/Moscow"
  | "Asia/Qatar"
  | "Asia/Riyadh"
  | "Asia/Tehran"
  | "Asia/Dubai"
  | "Asia/Muscat"
  | "Asia/Ashkhabad"
  | "Asia/Kolkata"
  | "Asia/Almaty"
  | "Asia/Bangkok"
  | "Asia/Ho_Chi-Minh"
  | "Asia/Jakarta"
  | "Asia/Chongqing"
  | "Asia/Hong_Kong"
  | "Asia/Manila"
  | "Australia/Perth"
  | "Asia/Shanghai"
  | "Asia/Singapore"
  | "Asia/Taipei"
  | "Asia/Tokyo"
  | "Asia/Seoul"
  | "Australia/Brisbane"
  | "Australia/Adelaide"
  | "Australia/Sydney"
  | "Pacific/Norfolk"
  | "Pacific/Auckland"
  | "Pacific/Fakaofo"
  | "Pacific/Chatham";

export type Studies =
  | "ACCD@tv-basicstudies"
  | "studyADR@tv-basicstudies"
  | "AROON@tv-basicstudies"
  | "ATR@tv-basicstudies"
  | "AwesomeOscillator@tv-basicstudies"
  | "BB@tv-basicstudies"
  | "BollingerBandsR@tv-basicstudies"
  | "BollingerBandsWidth@tv-basicstudies"
  | "CMF@tv-basicstudies"
  | "ChaikinOscillator@tv-basicstudies"
  | "chandeMO@tv-basicstudies"
  | "ChoppinessIndex@tv-basicstudies"
  | "CCI@tv-basicstudies"
  | "CRSI@tv-basicstudies"
  | "CorrelationCoefficient@tv-basicstudies"
  | "DetrendedPriceOscillator@tv-basicstudies"
  | "DM@tv-basicstudies"
  | "DONCH@tv-basicstudies"
  | "DoubleEMA@tv-basicstudies"
  | "EaseOfMovement@tv-basicstudies"
  | "EFI@tv-basicstudies"
  | "ENV@tv-basicstudies"
  | "FisherTransform@tv-basicstudies"
  | "HV@tv-basicstudies"
  | "hullMA@tv-basicstudies"
  | "IchimokuCloud@tv-basicstudies"
  | "KLTNR@tv-basicstudies"
  | "KST@tv-basicstudies"
  | "LinearRegression@tv-basicstudies"
  | "MACD@tv-basicstudies"
  | "MOM@tv-basicstudies"
  | "MF@tv-basicstudies"
  | "MoonPhases@tv-basicstudies"
  | "MASimple@tv-basicstudies"
  | "MAExp@tv-basicstudies"
  | "MAWeighted@tv-basicstudies"
  | "OBV@tv-basicstudies"
  | "PSAR@tv-basicstudies"
  | "PivotPointsHighLow@tv-basicstudies"
  | "PivotPointsStandard@tv-basicstudies"
  | "PriceOsc@tv-basicstudies"
  | "PriceVolumeTrend@tv-basicstudies"
  | "ROC@tv-basicstudies"
  | "RSI@tv-basicstudies"
  | "VigorIndex@tv-basicstudies"
  | "VolatilityIndex@tv-basicstudies"
  | "SMIErgodicIndicator@tv-basicstudies"
  | "SMIErgodicOscillator@tv-basicstudies"
  | "Stochastic@tv-basicstudies"
  | "StochasticRSI@tv-basicstudies"
  | "TripleEMA@tv-basicstudies"
  | "Trix@tv-basicstudies"
  | "UltimateOsc@tv-basicstudies"
  | "VSTOP@tv-basicstudies"
  | "Volume@tv-basicstudies"
  | "VWAP@tv-basicstudies"
  | "MAVolumeWeighted@tv-basicstudies"
  | "WilliamR@tv-basicstudies"
  | "WilliamsAlligator@tv-basicstudies"
  | "WilliamsFractal@tv-basicstudies"
  | "ZigZag@tv-basicstudies";

export type CopyrightStyles = {
  parent?: React.CSSProperties;
  link?: React.CSSProperties;
  span?: React.CSSProperties;
};

export type WidgetFeatures =
  | "header_widget"
  | "header_widget_dom_node"
  | "header_symbol_search"
  | "symbol_search_hot_key"
  | "header_resolutions"
  | "header_interval_dialog_button"
  | "show_interval_dialog_on_key_press"
  | "header_chart_type"
  | "header_settings"
  | "header_indicators"
  | "header_compare"
  | "header_undo_redo"
  | "header_screenshot"
  | "header_fullscreen_button"
  | "compare_symbol"
  | "border_around_the_chart"
  | "header_saveload"
  | "left_toolbar"
  | "control_bar"
  | "timeframes_toolbar"
  | "show_hide_button_in_legend"
  | "format_button_in_legend"
  | "study_buttons_in_legend"
  | "delete_button_in_legend"
  | "context_menus"
  | "pane_context_menu"
  | "scales_context_menu"
  | "legend_context_menu"
  | "main_series_scale_menu"
  | "display_market_status"
  | "remove_library_container_border"
  | "chart_property_page_style"
  | "property_pages"
  | "show_chart_property_page"
  | "chart_property_page_scales"
  | "chart_property_page_background"
  | "chart_property_page_timezone_sessions"
  | "chart_property_page_trading"
  | "countdown"
  | "caption_buttons_text_if_possible"
  | "dont_show_boolean_study_arguments"
  | "hide_last_na_study_output"
  | "symbol_info"
  | "timezone_menu"
  | "snapshot_trading_drawings"
  | "source_selection_markers"
  | "go_to_date"
  | "adaptive_logo"
  | "show_dom_first_time"
  | "hide_left_toolbar_by_default"
  | "use_localstorage_for_settings"
  | "items_favoriting"
  | "save_chart_properties_to_local_storage"
  | "create_volume_indicator_by_default"
  | "create_volume_indicator_by_default_once"
  | "volume_force_overlay"
  | "right_bar_stays_on_scroll"
  | "constraint_dialogs_movement"
  | "charting_library_debug_mode"
  | "show_dialog_on_snapshot_ready"
  | "study_market_minimized"
  | "study_dialog_search_control"
  | "side_toolbar_in_fullscreen_mode"
  | "same_data_requery"
  | "disable_resolution_rebuild"
  | "chart_scroll"
  | "chart_zoom"
  | "high_density_bars"
  | "cl_feed_return_all_data"
  | "uppercase_instrument_names"
  | "no_min_chart_width"
  | "fix_left_edge"
  | "lock_visible_time_range_on_resize"
  | "study_templates"
  | "datasource_copypaste"
  | "seconds_resolution";
