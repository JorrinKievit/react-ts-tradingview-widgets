"use strict";(self.webpackChunkreact_ts_tradingview_widgets_docs=self.webpackChunkreact_ts_tradingview_widgets_docs||[]).push([[848],{6892:(e,a,t)=>{t.r(a),t.d(a,{default:()=>d,frontMatter:()=>g,metadata:()=>m,toc:()=>p});var n=t(8168),r=(t(6540),t(5680)),l=t(6472);const g={sidebar_position:4},m={unversionedId:"components/MarketData",id:"components/MarketData",isDocsHomePage:!1,title:"Market Data Widget",description:"This is the React component for the Market Data Widget",source:"@site/docs/components/MarketData.md",sourceDirName:"components",slug:"/components/MarketData",permalink:"/docs/components/MarketData",editUrl:"https://github.com/JorrinKievit/react-ts-tradingview-widgets/edit/master/docs/docs/components/MarketData.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Market Overview Widget",permalink:"/docs/components/MarketOverview"},next:{title:"Stock Market Widget",permalink:"/docs/components/StockMarket"}},p=[{value:"Example",id:"example",children:[]},{value:"Used Public types",id:"public-types",children:[]},{value:"MarketData properties",id:"marketdata-properties",children:[]},{value:"MarketDataSymbolsGroup properties",id:"symbol-group",children:[]},{value:"MarketDataSymbol properties",id:"symbol",children:[]},{value:"Default symbolsGroup value",id:"default-symbolsgroup-value",children:[]}],i={toc:p},y="wrapper";function d(e){let{components:a,...t}=e;return(0,r.yg)(y,(0,n.A)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This is the React component for the ",(0,r.yg)("a",{parentName:"p",href:"https://www.tradingview.com/widget/market-quotes/"},"Market Data Widget")),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'import { MarketData } from "react-ts-tradingview-widgets";\n\n<MarketData colorTheme="dark" width="100%" height={400}></MarketData>\n')),(0,r.yg)(l.Zi,{colorTheme:"dark",width:"100%",height:400,mdxType:"MarketData"}),(0,r.yg)("h2",{id:"public-types"},"Used Public types"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ColorTheme"),(0,r.yg)("td",{parentName:"tr",align:null},"light / dark")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MarketDataSymbolsGroup"),(0,r.yg)("td",{parentName:"tr",align:null},"See ",(0,r.yg)("a",{parentName:"td",href:"#symbol-group"},(0,r.yg)("em",{parentName:"a"},(0,r.yg)("strong",{parentName:"em"},"here"))))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MarketDataSymbol"),(0,r.yg)("td",{parentName:"tr",align:null},"See ",(0,r.yg)("a",{parentName:"td",href:"#symbol"},(0,r.yg)("em",{parentName:"a"},(0,r.yg)("strong",{parentName:"em"},"here"))))))),(0,r.yg)("h2",{id:"marketdata-properties"},"MarketData properties"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Property"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"width"),(0,r.yg)("td",{parentName:"tr",align:null},"number/string"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"770"),(0,r.yg)("td",{parentName:"tr",align:null},"Sets a static width on the component")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"height"),(0,r.yg)("td",{parentName:"tr",align:null},"number/string"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"450"),(0,r.yg)("td",{parentName:"tr",align:null},"Sets a static height on the component")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"autosize"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the width and height to 100%")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"symbolsGroups"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#symbol-group"},"MarketDataSymbolsGroup[]")),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"See ",(0,r.yg)("a",{parentName:"td",href:"#symbols"},(0,r.yg)("em",{parentName:"a"},(0,r.yg)("strong",{parentName:"em"},"here")))),(0,r.yg)("td",{parentName:"tr",align:null},"Default symbols used in widget")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"showSymbolLogo"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"Show symbol of ticker")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"colorTheme"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#public-types"},(0,r.yg)("em",{parentName:"a"},(0,r.yg)("strong",{parentName:"em"},"ColorTheme")))),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"light"),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the default theme")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"isTransparent"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Transparent background for component")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"locale"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"/docs/types/Locales"},"Locales")),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"en"),(0,r.yg)("td",{parentName:"tr",align:null},"Sets the default locale")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"largeChartUrl"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"undefined"),(0,r.yg)("td",{parentName:"tr",align:null},"Make widget redirect to larger chart")))),(0,r.yg)("h2",{id:"symbol-group"},"MarketDataSymbolsGroup properties"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Property"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"name"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"See ",(0,r.yg)("a",{parentName:"td",href:"#symbols"},(0,r.yg)("em",{parentName:"a"},(0,r.yg)("strong",{parentName:"em"},"here")))),(0,r.yg)("td",{parentName:"tr",align:null},"Name of the symbolgroup")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"originalName"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"See ",(0,r.yg)("a",{parentName:"td",href:"#symbols"},(0,r.yg)("em",{parentName:"a"},(0,r.yg)("strong",{parentName:"em"},"here")))),(0,r.yg)("td",{parentName:"tr",align:null},"Original name of the symbolgroup")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"symbols"),(0,r.yg)("td",{parentName:"tr",align:null},"MarketDataSymbol[]"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"See ",(0,r.yg)("a",{parentName:"td",href:"#symbols"},(0,r.yg)("em",{parentName:"a"},(0,r.yg)("strong",{parentName:"em"},"here")))),(0,r.yg)("td",{parentName:"tr",align:null},"Array of symbols")))),(0,r.yg)("h2",{id:"symbol"},"MarketDataSymbol properties"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Property"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"name"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"See ",(0,r.yg)("a",{parentName:"td",href:"#symbols"},(0,r.yg)("em",{parentName:"a"},(0,r.yg)("strong",{parentName:"em"},"here")))),(0,r.yg)("td",{parentName:"tr",align:null},"Name of the symbol")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"displayName"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"See ",(0,r.yg)("a",{parentName:"td",href:"#symbols"},(0,r.yg)("em",{parentName:"a"},(0,r.yg)("strong",{parentName:"em"},"here")))),(0,r.yg)("td",{parentName:"tr",align:null},"Display name of the symbol")))),(0,r.yg)("h2",{id:"default-symbolsgroup-value"},"Default symbolsGroup value"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "Indices",\n    "originalName": "Indices",\n    "symbols": [\n      {\n        "name": "FOREXCOM:SPXUSD",\n        "displayName": "S&P 500"\n      },\n      {\n        "name": "FOREXCOM:NSXUSD",\n        "displayName": "Nasdaq 100"\n      },\n      {\n        "name": "FOREXCOM:DJI",\n        "displayName": "Dow 30"\n      },\n      {\n        "name": "INDEX:NKY",\n        "displayName": "Nikkei 225"\n      },\n      {\n        "name": "INDEX:DEU30",\n        "displayName": "DAX Index"\n      },\n      {\n        "name": "FOREXCOM:UKXGBP",\n        "displayName": "UK 100"\n      }\n    ]\n  },\n  {\n    "name": "Commodities",\n    "originalName": "Commodities",\n    "symbols": [\n      {\n        "name": "CME_MINI:ES1!",\n        "displayName": "S&P 500"\n      },\n      {\n        "name": "CME:6E1!",\n        "displayName": "Euro"\n      },\n      {\n        "name": "COMEX:GC1!",\n        "displayName": "Gold"\n      },\n      {\n        "name": "NYMEX:CL1!",\n        "displayName": "Crude Oil"\n      },\n      {\n        "name": "NYMEX:NG1!",\n        "displayName": "Natural Gas"\n      },\n      {\n        "name": "CBOT:ZC1!",\n        "displayName": "Corn"\n      }\n    ]\n  },\n  {\n    "name": "Bonds",\n    "originalName": "Bonds",\n    "symbols": [\n      {\n        "name": "CME:GE1!",\n        "displayName": "Eurodollar"\n      },\n      {\n        "name": "CBOT:ZB1!",\n        "displayName": "T-Bond"\n      },\n      {\n        "name": "CBOT:UB1!",\n        "displayName": "Ultra T-Bond"\n      },\n      {\n        "name": "EUREX:FGBL1!",\n        "displayName": "Euro Bund"\n      },\n      {\n        "name": "EUREX:FBTP1!",\n        "displayName": "Euro BTP"\n      },\n      {\n        "name": "EUREX:FGBM1!",\n        "displayName": "Euro BOBL"\n      }\n    ]\n  },\n  {\n    "name": "Forex",\n    "originalName": "Forex",\n    "symbols": [\n      {\n        "name": "FX:EURUSD"\n      },\n      {\n        "name": "FX:GBPUSD"\n      },\n      {\n        "name": "FX:USDJPY"\n      },\n      {\n        "name": "FX:USDCHF"\n      },\n      {\n        "name": "FX:AUDUSD"\n      },\n      {\n        "name": "FX:USDCAD"\n      }\n    ]\n  }\n]\n')))}d.isMDXComponent=!0}}]);