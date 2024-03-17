"use strict";(self.webpackChunkreact_ts_tradingview_widgets_docs=self.webpackChunkreact_ts_tradingview_widgets_docs||[]).push([[184],{9413:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),l=a(492);const i={sidebar_position:7},m={unversionedId:"components/Ticker",id:"components/Ticker",isDocsHomePage:!1,title:"Ticker Widget",description:"This is the React component for the Ticker Widget",source:"@site/docs/components/Ticker.md",sourceDirName:"components",slug:"/components/Ticker",permalink:"/docs/components/Ticker",editUrl:"https://github.com/JorrinKievit/react-ts-tradingview-widgets/edit/master/docs/docs/components/Ticker.md",version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Economic Calendar",permalink:"/docs/components/EconomicCalendar"},next:{title:"Ticker Tape Widget",permalink:"/docs/components/TickerTape"}},p=[{value:"Example",id:"example",children:[]},{value:"Used Public types",id:"public-types",children:[]},{value:"Ticker roperties",id:"ticker-roperties",children:[]},{value:"TickerSymbol",id:"ticker-symbol",children:[]},{value:"Ticker default symbols",id:"tickers",children:[]}],k={toc:p},o="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(o,(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is the React component for the ",(0,r.kt)("a",{parentName:"p",href:"https://www.tradingview.com/widget/ticker/"},"Ticker Widget")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import { Ticker } from "react-ts-tradingview-widgets";\n\n<Ticker colorTheme="dark"></Ticker>\n')),(0,r.kt)(l.vB,{colorTheme:"dark",mdxType:"Ticker"}),(0,r.kt)("h2",{id:"public-types"},"Used Public types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ColorTheme"),(0,r.kt)("td",{parentName:"tr",align:null},"light / dark")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TickerSymbol"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#ticker-symbol"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("strong",{parentName:"em"},"TickerSymbol[]"))))))),(0,r.kt)("h2",{id:"ticker-roperties"},"Ticker roperties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"colorTheme"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#public-types"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("strong",{parentName:"em"},"ColorTheme")))),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"light"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the default theme")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isTransparent"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Transparent background for component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"locale"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/types/Locales"},"Locales")),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"en"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the default locale")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbols"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#ticker-symbol"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("strong",{parentName:"em"},"TickerSymbol[]")))),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#tickers"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("strong",{parentName:"em"},"Here")))),(0,r.kt)("td",{parentName:"tr",align:null},"Default symbols in widget")))),(0,r.kt)("h2",{id:"ticker-symbol"},"TickerSymbol"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"proName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#tickers"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("strong",{parentName:"em"},"Here")))),(0,r.kt)("td",{parentName:"tr",align:null},"Ticker name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#tickers"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("strong",{parentName:"em"},"Here")))),(0,r.kt)("td",{parentName:"tr",align:null},"Ticker title")))),(0,r.kt)("h2",{id:"tickers"},"Ticker default symbols"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "proName": "FOREXCOM:SPXUSD",\n    "title": "S&P 500"\n  },\n  {\n    "proName": "FOREXCOM:NSXUSD",\n    "title": "Nasdaq 100"\n  },\n  {\n    "proName": "FX_IDC:EURUSD",\n    "title": "EUR/USD"\n  },\n  {\n    "proName": "BITSTAMP:BTCUSD",\n    "title": "BTC/USD"\n  },\n  {\n    "proName": "BITSTAMP:ETHUSD",\n    "title": "ETH/USD"\n  }\n]\n')))}d.isMDXComponent=!0}}]);