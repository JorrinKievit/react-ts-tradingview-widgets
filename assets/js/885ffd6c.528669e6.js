(self.webpackChunkreact_ts_tradingview_widgets_docs=self.webpackChunkreact_ts_tradingview_widgets_docs||[]).push([[325],{6496:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return a},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var n=i(2122),r=i(9756),s=(i(7294),i(3905)),o=["components"],a={sidebar_position:2},d={unversionedId:"Usage with Next.js",id:"Usage with Next.js",isDocsHomePage:!1,title:"Usage with Next.js",description:"The TradingView widgets are loaded client-side. This means that you are required to load them without Server Side Rendering (SSR) using next/dynamic. An example is found below:",source:"@site/docs/Usage with Next.js.md",sourceDirName:".",slug:"/Usage with Next.js",permalink:"/docs/Usage with Next.js",editUrl:"https://github.com/JorrinKievit/react-ts-tradingview-widgets/edit/master/docs/docs/Usage with Next.js.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Welcome!",permalink:"/docs/intro"},next:{title:"Copyright attribute",permalink:"/docs/Copyright attribute"}},c=[],u={toc:c};function m(e){var t=e.components,i=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The TradingView widgets are loaded client-side. This means that you are required to load them without Server Side Rendering (SSR) using next/dynamic. An example is found below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'import dynamic from "next/dynamic";\nconst SymbolOverviewNoSSR = dynamic(\n  () => import("react-ts-tradingview-widgets").then((w) => w.SymbolOverview),\n  {\n    ssr: false,\n  }\n);\n')))}m.isMDXComponent=!0}}]);