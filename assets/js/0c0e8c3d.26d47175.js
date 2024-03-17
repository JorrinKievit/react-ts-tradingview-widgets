"use strict";(self.webpackChunkreact_ts_tradingview_widgets_docs=self.webpackChunkreact_ts_tradingview_widgets_docs||[]).push([[144],{9623:(t,e,a)=>{a.r(e),a.d(e,{default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var n=a(7462),l=(a(7294),a(3905)),r=a(492);const i={sidebar_position:2},d={unversionedId:"components/TechnicalAnalysis",id:"components/TechnicalAnalysis",isDocsHomePage:!1,title:"Technical Analysis Widget",description:"This is the React component for the Technical Analysis Widget",source:"@site/docs/components/TechnicalAnalysis.md",sourceDirName:"components",slug:"/components/TechnicalAnalysis",permalink:"/docs/components/TechnicalAnalysis",editUrl:"https://github.com/JorrinKievit/react-ts-tradingview-widgets/edit/master/docs/docs/components/TechnicalAnalysis.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Advanced Real-Time Chart Widget",permalink:"/docs/components/AdvancedRealTimeChartWidget"},next:{title:"Market Overview Widget",permalink:"/docs/components/MarketOverview"}},p=[{value:"Example",id:"example",children:[]},{value:"Used Private types",id:"private-types",children:[]},{value:"Used Public types",id:"public-types",children:[]},{value:"Properties",id:"properties",children:[]}],m={toc:p},s="wrapper";function o(t){let{components:e,...a}=t;return(0,l.kt)(s,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This is the React component for the ",(0,l.kt)("a",{parentName:"p",href:"https://www.tradingview.com/widget/technical-analysis/"},"Technical Analysis Widget")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'import { TechnicalAnalysis } from "react-ts-tradingview-widgets";\n\n<TechnicalAnalysis colorTheme="dark" width="100%"></TechnicalAnalysis>\n')),(0,l.kt)(r.Xw,{colorTheme:"dark",width:"100%",mdxType:"TechnicalAnalysis"}),(0,l.kt)("h2",{id:"private-types"},"Used Private types"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Interval"),(0,l.kt)("td",{parentName:"tr",align:null},"1m / 5m / 15m / 30m / 1h / 4h / 1D / 1W / 1M")))),(0,l.kt)("h2",{id:"public-types"},"Used Public types"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ColorTheme"),(0,l.kt)("td",{parentName:"tr",align:null},"light / dark")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interval"),(0,l.kt)("td",{parentName:"tr",align:null},"Interval"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"1m"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the default interval")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},"number/string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"425"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets a static width on the component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},"number/string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"450"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets a static height on the component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autosize"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the width and height to 100%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isTransparent"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Transparent background for component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"symbol"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"NASDAQ:AAPL"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the default ticker symbol")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"showIntervalTabs"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Show the interval tabs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"locale"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/types/Locales"},"Locales")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"en"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the default locale")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"colorTheme"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#public-types"},(0,l.kt)("em",{parentName:"a"},(0,l.kt)("strong",{parentName:"em"},"ColorTheme")))),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"light"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the default theme")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"largeChartUrl"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"Make widget redirect to larger chart")))))}o.isMDXComponent=!0}}]);