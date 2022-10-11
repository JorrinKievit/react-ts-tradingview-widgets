(self.webpackChunkreact_ts_tradingview_widgets_docs=self.webpackChunkreact_ts_tradingview_widgets_docs||[]).push([[98],{9813:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c},default:function(){return g}});var n=i(2122),s=i(9756),r=(i(7294),i(3905)),a=["components"],o={sidebar_position:2},d={unversionedId:"Usage with Next",id:"Usage with Next",isDocsHomePage:!1,title:"Usage with Next",description:"Usage with Next.js",source:"@site/docs/Usage with Next.md",sourceDirName:".",slug:"/Usage with Next",permalink:"/docs/Usage with Next",editUrl:"https://github.com/JorrinKievit/react-ts-tradingview-widgets/edit/master/docs/docs/Usage with Next.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Welcome!",permalink:"/docs/intro"},next:{title:"Copyright attribute",permalink:"/docs/Copyright attribute"}},c=[{value:"Usage with Next.js",id:"usage-with-nextjs",children:[]}],u={toc:c};function g(e){var t=e.components,i=(0,s.Z)(e,a);return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"usage-with-nextjs"},"Usage with Next.js"),(0,r.kt)("p",null,"The TradingView widgets are loaded client-side. This means that you are required to load them without Server Side Rendering (SSR) using next/dynamic. An example is found below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import dynamic from "next/dynamic";\nconst SymbolOverviewNoSSR = dynamic(\n  () => import("react-ts-tradingview-widgets").then((w) => w.SymbolOverview),\n  {\n    ssr: false,\n  }\n);\n')))}g.isMDXComponent=!0}}]);