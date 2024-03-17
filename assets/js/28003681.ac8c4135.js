"use strict";(self.webpackChunkreact_ts_tradingview_widgets_docs=self.webpackChunkreact_ts_tradingview_widgets_docs||[]).push([[430],{713:(t,e,a)=>{a.r(e),a.d(e,{default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var n=a(7462),l=(a(7294),a(3905)),r=a(492);const i={sidebar_position:17},d={unversionedId:"components/FundamentalData",id:"components/FundamentalData",isDocsHomePage:!1,title:"Fundamental Data Widget",description:"This is the React component for the Fundamental Data Widget",source:"@site/docs/components/FundamentalData.md",sourceDirName:"components",slug:"/components/FundamentalData",permalink:"/docs/components/FundamentalData",editUrl:"https://github.com/JorrinKievit/react-ts-tradingview-widgets/edit/master/docs/docs/components/FundamentalData.md",version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Cryptocurrency Market Widget",permalink:"/docs/components/CryptocurrencyMarket"},next:{title:"Company Profile Widget",permalink:"/docs/components/CompanyProfile"}},p=[{value:"Example",id:"example",children:[]},{value:"Used Public types",id:"public-types",children:[]},{value:"Properties",id:"properties",children:[]}],m={toc:p},o="wrapper";function u(t){let{components:e,...a}=t;return(0,l.kt)(o,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This is the React component for the ",(0,l.kt)("a",{parentName:"p",href:"https://www.tradingview.com/widget/fundamental-data/"},"Fundamental Data Widget")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'import { FundamentalData } from "react-ts-tradingview-widgets";\n\n<FundamentalData colorTheme="dark" height={400} width="100%"></FundamentalData>\n')),(0,l.kt)(r.wf,{colorTheme:"dark",height:400,width:"100%",mdxType:"FundamentalData"}),(0,l.kt)("h2",{id:"public-types"},"Used Public types"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ColorTheme"),(0,l.kt)("td",{parentName:"tr",align:null},"light / dark")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DisplayMode"),(0,l.kt)("td",{parentName:"tr",align:null},"regular / compact / adaptive")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"symbol"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"NASDAQ:AAPL"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the default ticker symbol")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"colorTheme"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#public-types"},(0,l.kt)("em",{parentName:"a"},(0,l.kt)("strong",{parentName:"em"},"ColorTheme")))),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"light"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the default theme")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isTransparent"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Transparent background for component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"largeChartUrl"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"Make widget redirect to larger chart")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"displayMode"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#public-types"},(0,l.kt)("em",{parentName:"a"},(0,l.kt)("strong",{parentName:"em"},"Displaymode")))),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"regular"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets default Display mode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},"number/string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"480"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets a static width on the component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},"number/string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"830"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets a static height on the component")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autosize"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the width and height to 100%")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"locale"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/types/Locales"},"Locales")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"en"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the default locale")))))}u.isMDXComponent=!0}}]);