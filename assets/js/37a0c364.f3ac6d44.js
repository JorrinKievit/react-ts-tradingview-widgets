(self.webpackChunkreact_ts_tradingview_widgets_docs=self.webpackChunkreact_ts_tradingview_widgets_docs||[]).push([[596],{5496:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),i=a(492),p=["components"],o={sidebar_position:14},d={unversionedId:"components/ForexHeatMap",id:"components/ForexHeatMap",isDocsHomePage:!1,title:"Forex Heat Map Widget",description:"This is the React component for the Forex Heat Map Widget",source:"@site/docs/components/ForexHeatMap.md",sourceDirName:"components",slug:"/components/ForexHeatMap",permalink:"/docs/components/ForexHeatMap",editUrl:"https://github.com/JorrinKievit/react-ts-tradingview-widgets/edit/master/docs/docs/components/ForexHeatMap.md",version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Forex Cross Rates Widget",permalink:"/docs/components/ForexCrossRates"},next:{title:"Screener Widget",permalink:"/docs/components/Screener"}},m=[{value:"Example",id:"example",children:[]},{value:"Used Public types",id:"public-types",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Default currencies",id:"default-currencies",children:[]}],s={toc:m};function u(t){var e=t.components,a=(0,r.Z)(t,p);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This is the React component for the ",(0,l.kt)("a",{parentName:"p",href:"https://www.tradingview.com/widget/forex-heat-map/"},"Forex Heat Map Widget")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'import { ForexHeatMap } from "react-ts-tradingview-widgets";\n\n<ForexHeatMap colorTheme="dark" autosize></ForexHeatMap>\n')),(0,l.kt)(i.R6,{colorTheme:"dark",autosize:!0,mdxType:"ForexHeatMap"}),(0,l.kt)("h2",{id:"public-types"},"Used Public types"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ColorTheme"),(0,l.kt)("td",{parentName:"tr",align:null},"light / dark")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},"number/string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"700"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets a static width on the component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},"number/string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets a static height on the component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autosize"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the width and height to 100%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"currencies"),(0,l.kt)("td",{parentName:"tr",align:null},"string[]"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#currencies"},(0,l.kt)("em",{parentName:"a"},(0,l.kt)("strong",{parentName:"em"},"here")))),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the default currencies")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isTransparent"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Transparent background for component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"colorTheme"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#public-types"},(0,l.kt)("em",{parentName:"a"},(0,l.kt)("strong",{parentName:"em"},"ColorTheme")))),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"light"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the default theme")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"locale"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"en"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the default locale")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"largeChartUrl"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"Make widget redirect to larger chart")))),(0,l.kt)("h2",{id:"default-currencies"},"Default currencies"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD", "CNY"]\n')))}u.isMDXComponent=!0}}]);