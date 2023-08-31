"use strict";(self.webpackChunkreact_ts_tradingview_widgets_docs=self.webpackChunkreact_ts_tradingview_widgets_docs||[]).push([[921],{3688:(t,e,a)=>{a.r(e),a.d(e,{default:()=>o,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),l=a(492);const i={sidebar_position:8},p={unversionedId:"components/TickerTape",id:"components/TickerTape",isDocsHomePage:!1,title:"Ticker Tape Widget",description:"This is the React component for the Ticker Tape Widget",source:"@site/docs/components/TickerTape.md",sourceDirName:"components",slug:"/components/TickerTape",permalink:"/docs/components/TickerTape",editUrl:"https://github.com/JorrinKievit/react-ts-tradingview-widgets/edit/master/docs/docs/components/TickerTape.md",version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Ticker Widget",permalink:"/docs/components/Ticker"},next:{title:"Single Ticker Widget",permalink:"/docs/components/SingleTicker"}},m=[{value:"Example",id:"example",children:[]},{value:"Used Public types",id:"public-types",children:[]},{value:"Ticker roperties",id:"ticker-roperties",children:[]},{value:"TickerTapeSymbol",id:"ticker-symbol",children:[]},{value:"Ticker default symbols",id:"tickers",children:[]}],k={toc:m},d="wrapper";function o(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is the React component for the ",(0,r.kt)("a",{parentName:"p",href:"https://www.tradingview.com/widget/ticker-tape/"},"Ticker Tape Widget")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import { TickerTape } from "react-ts-tradingview-widgets";\n\n<TickerTape colorTheme="dark"></TickerTape>\n')),(0,r.kt)(l.GQ,{colorTheme:"dark",mdxType:"TickerTape"}),(0,r.kt)("h2",{id:"public-types"},"Used Public types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ColorTheme"),(0,r.kt)("td",{parentName:"tr",align:null},"light / dark")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TickerSymbol"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#ticker-symbol"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("strong",{parentName:"em"},"TickerTapeSymbol[]"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DisplayMode"),(0,r.kt)("td",{parentName:"tr",align:null},"regular / compact / adaptive")))),(0,r.kt)("h2",{id:"ticker-roperties"},"Ticker roperties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbols"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#ticker-symbol"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("strong",{parentName:"em"},"TickerSymbol[]")))),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#tickers"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("strong",{parentName:"em"},"Here")))),(0,r.kt)("td",{parentName:"tr",align:null},"Default symbols in widget")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showSymbolLogo"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Show ticker symbol")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"colorTheme"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#public-types"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("strong",{parentName:"em"},"ColorTheme")))),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"light"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the default theme")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isTransparent"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Transparent background for component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"largeChartUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"Make widget redirect to larger chart")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"displayMode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#public-types"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("strong",{parentName:"em"},"DisplayMode")))),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"adaptive"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets default display mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"locale"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"en"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the default locale")))),(0,r.kt)("h2",{id:"ticker-symbol"},"TickerTapeSymbol"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#tickers"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("strong",{parentName:"em"},"Here")))),(0,r.kt)("td",{parentName:"tr",align:null},"Ticker name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#tickers"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("strong",{parentName:"em"},"Here")))),(0,r.kt)("td",{parentName:"tr",align:null},"Ticker title")))),(0,r.kt)("h2",{id:"tickers"},"Ticker default symbols"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "proName": "FOREXCOM:SPXUSD",\n    "title": "S&P 500"\n  },\n  {\n    "proName": "FOREXCOM:NSXUSD",\n    "title": "Nasdaq 100"\n  },\n  {\n    "proName": "FX_IDC:EURUSD",\n    "title": "EUR/USD"\n  },\n  {\n    "proName": "BITSTAMP:BTCUSD",\n    "title": "BTC/USD"\n  },\n  {\n    "proName": "BITSTAMP:ETHUSD",\n    "title": "ETH/USD"\n  }\n]\n')))}o.isMDXComponent=!0}}]);