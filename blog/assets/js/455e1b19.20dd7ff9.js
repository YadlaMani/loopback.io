"use strict";(self.webpackChunkloopback_blog=self.webpackChunkloopback_blog||[]).push([[881],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,d=s["".concat(p,".").concat(m)]||s[m]||g[m]||i;return n?o.createElement(d,r(r({ref:t},u),{},{components:n})):o.createElement(d,r({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={title:"Building an Online Game With LoopBack 4 - Customizing APIs in Controller (Part 3)",date:new Date("2019-05-28T00:00:00.000Z"),authors:"wenbo",slug:"building-an-online-game-with-loopback-4-pt3",tags:["how-to"]},r=void 0,l={permalink:"/blog/building-an-online-game-with-loopback-4-pt3",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2019/2019-05-28-building-an-online-game-with-loopback-4-pt3.md",source:"@site/blog/2019/2019-05-28-building-an-online-game-with-loopback-4-pt3.md",title:"Building an Online Game With LoopBack 4 - Customizing APIs in Controller (Part 3)",description:"Originally published on strongloop.com",date:"2019-05-28T00:00:00.000Z",formattedDate:"May 28, 2019",tags:[{label:"how-to",permalink:"/blog/tags/how-to"}],readingTime:7.68,hasTruncateMarker:!0,authors:[{name:"Wen Bo",title:"LoopBack Maintainer",url:"https://github.com/gobackhuoxing",imageURL:"https://avatars.githubusercontent.com/u/22156589",key:"wenbo"}],frontMatter:{title:"Building an Online Game With LoopBack 4 - Customizing APIs in Controller (Part 3)",date:"2019-05-28T00:00:00.000Z",authors:"wenbo",slug:"building-an-online-game-with-loopback-4-pt3",tags:["how-to"]},prevItem:{title:"LoopBack 4 May 2019 Milestone Update",permalink:"/blog/may-2019-milestone"},nextItem:{title:"Building an Online Game With LoopBack 4, Part 2 - Generating Universally Unique ID and Managing Models Relationships",permalink:"/blog/building-an-online-game-with-loopback-4-pt2"}},p={authorsImageUrls:[void 0]},c=[{value:"Part 3: Customizing APIs in Controller",id:"part-3-customizing-apis-in-controller",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Previously on Building an Online Game With LoopBack 4",id:"previously-on-building-an-online-game-with-loopback-4",level:3}],u={toc:c},s="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Originally published on ",(0,a.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,a.kt)("h2",{id:"part-3-customizing-apis-in-controller"},"Part 3: Customizing APIs in Controller"),(0,a.kt)("h3",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In this series, I\u2019m going to help you learn LoopBack 4 and how to use it to easily build your own API and web project. We\u2019ll create a new project I\u2019ve been working on: an online web text-based adventure game. In this game, you can create your own account to build characters, fight monsters and find treasures. You will be able to control your character to take a variety of actions: attacking enemies, casting spells, and getting loot. This game also allows multiple players to log in and play with their friends."),(0,a.kt)("h3",{id:"previously-on-building-an-online-game-with-loopback-4"},"Previously on Building an Online Game With LoopBack 4"),(0,a.kt)("p",null,"In the last episode, we used a third-party library to generate UUID and built relations between ",(0,a.kt)("inlineCode",{parentName:"p"},"character"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"weapon"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"armor"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"skill"),"."),(0,a.kt)("p",null,"Here are the previous episodes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://strongloop.com/strongblog/building-online-game-with-loopback-4-pt1/"},"Part 1: Building a Simple LoopBack Project With MongoDB")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://strongloop.com/strongblog/building-an-online-game-with-loopback-4-pt2/"},"Part 2: Generating Universally Unique ID and Managing Models Relationships"))))}g.isMDXComponent=!0}}]);