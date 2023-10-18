"use strict";(self.webpackChunkloopback_blog=self.webpackChunkloopback_blog||[]).push([[7047],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>d});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(o),m=n,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||i;return o?a.createElement(d,r(r({ref:t},c),{},{components:o})):a.createElement(d,r({ref:t},c))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:n,r[1]=p;for(var s=2;s<i;s++)r[s]=o[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},7941:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=o(7462),n=(o(7294),o(3905));const i={title:"What's New in LoopBack 4 Authentication 2.0",date:new Date("2019-07-03T00:00:00.000Z"),authors:"emonddr",slug:"loopback-4-authentication-updates",tags:["feature","authentication"]},r=void 0,p={permalink:"/blog/loopback-4-authentication-updates",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2019/2019-07-03-loopback-4-authentication-updates.md",source:"@site/blog/2019/2019-07-03-loopback-4-authentication-updates.md",title:"What's New in LoopBack 4 Authentication 2.0",description:"Originally published on strongloop.com",date:"2019-07-03T00:00:00.000Z",formattedDate:"July 3, 2019",tags:[{label:"feature",permalink:"/blog/tags/feature"},{label:"authentication",permalink:"/blog/tags/authentication"}],readingTime:1.935,hasTruncateMarker:!0,authors:[{name:"Dominique Emond",title:"LoopBack Maintainer",url:"https://github.com/emonddr",imageURL:"https://avatars0.githubusercontent.com/u/6864736",key:"emonddr"}],frontMatter:{title:"What's New in LoopBack 4 Authentication 2.0",date:"2019-07-03T00:00:00.000Z",authors:"emonddr",slug:"loopback-4-authentication-updates",tags:["feature","authentication"]},prevItem:{title:"LoopBack 4 June 2019 Milestone Update",permalink:"/blog/loopback-june-2019-milestone"},nextItem:{title:"Building an Online Game With LoopBack 4 - User Authentication and Role-Based Access Control (Part 4)",permalink:"/blog/building-an-online-game-with-loopback-4-pt4"}},l={authorsImageUrls:[void 0]},s=[{value:"Looking for User References",id:"looking-for-user-references",level:2},{value:"Call to Action",id:"call-to-action",level:2}],c={toc:s},u="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Originally published on ",(0,n.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,n.kt)("p",null,"We've refactored the authentication component to be more extensible and easier to use."),(0,n.kt)("p",null,"Now you can secure your endpoints with both ",(0,n.kt)("a",{parentName:"p",href:"http://www.passportjs.org/"},"passport-based"),"  and ",(0,n.kt)("inlineCode",{parentName:"p"},"LoopBack native")," authentication strategies that implement the interface ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/apidocs.authentication.authenticationstrategy.html"},"AuthenticationStrategy"),"."),(0,n.kt)("p",null,"The new design greatly simplifies the effort of application developers and extension developers since they now only need to focus on binding strategies to the application without having to understand/modify the strategy resolver or the action provider."),(0,n.kt)("p",null,"The core of the authentication component is available in ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@loopback/authentication"},"@loopback/authentication")," version ",(0,n.kt)("inlineCode",{parentName:"p"},"2.x"),", and the passport-based capabilities are now available in ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@loopback/authentication-passport"},"@loopback/authentication-passport"),"."),(0,n.kt)("p",null,"Here is a ",(0,n.kt)("strong",{parentName:"p"},"high level")," overview of the authentication component."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://loopback.io/pages/en/lb4/imgs/authentication_overview_highlevel.png",alt:"authentication_overview_highlevel"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A decorator to express an authentication requirement on controller methods"),(0,n.kt)("li",{parentName:"ul"},"A provider to access method-level authentication metadata"),(0,n.kt)("li",{parentName:"ul"},"An action in the REST sequence to enforce authentication"),(0,n.kt)("li",{parentName:"ul"},"An extension point to discover all authentication strategies and handle the delegation")),(0,n.kt)("p",null,"Detailed documentation about the design and usage of ",(0,n.kt)("inlineCode",{parentName:"p"},"@loopback/authentication@2.x")," can be found ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Loopback-component-authentication.html"},"here"),"."),(0,n.kt)("p",null,"As an ",(0,n.kt)("strong",{parentName:"p"},"application developer"),", you only need 3 steps to secure your endpoints:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Decorate the endpoints of a controller with the ",(0,n.kt)("inlineCode",{parentName:"li"},"@authenticate(strategyName, options?)")," decorator"),(0,n.kt)("li",{parentName:"ul"},"Insert the authentication action in a custom sequence "),(0,n.kt)("li",{parentName:"ul"},"Register the authentication strategy")),(0,n.kt)("p",null,"As an ",(0,n.kt)("strong",{parentName:"p"},"extension developer"),", you can ",(0,n.kt)("strong",{parentName:"p"},"contribute")," a ",(0,n.kt)("inlineCode",{parentName:"p"},"LoopBack native")," authentication strategy by following the steps in ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Loopback-component-authentication.html#creating-a-custom-authentication-strategy"},"Creating a Custom Authentication Strategy"),", or a ",(0,n.kt)("inlineCode",{parentName:"p"},"passport-based")," authentication strategy by following the steps in ",(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@loopback/authentication-passport"},"Wrapping a Passport-based Strategy with the Passport Strategy Adapter"),"."),(0,n.kt)("p",null,"A tutorial and reference implementation on how to add JWT authentication to a LoopBack 4 application using ",(0,n.kt)("inlineCode",{parentName:"p"},"@loopback/authentication@2.x")," can be found ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/doc/en/lb4/Authentication-Tutorial.html"},"here"),". It involves an updated version of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback4-example-shopping"},"example shopping cart application"),"."),(0,n.kt)("h2",{id:"looking-for-user-references"},"Looking for User References"),(0,n.kt)("p",null,"As you might be aware, our ",(0,n.kt)("a",{parentName:"p",href:"https://loopback.io/"},"loopback.io")," web site has a brand new look. We're rebuilding the ",(0,n.kt)("inlineCode",{parentName:"p"},'"Who\'s using LoopBack"')," section to showcase our users and the use cases. If you would like to be a part of it, see the details in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next/issues/3047"},"this GitHub issue"),"."),(0,n.kt)("h2",{id:"call-to-action"},"Call to Action"),(0,n.kt)("p",null,"LoopBack's future success depends on you. We appreciate your continuous support and engagement to make LoopBack even better and meaningful for your API creation experience. Please join us and help the project by:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues"},"Reporting issues"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/blob/master/docs/CONTRIBUTING.md"},"Contributing")," code and documentation."),(0,n.kt)("li",{parentName:"ul"},"Opening a pull request on one of our ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/labels/good%20first%20issue"},'"good first issues"'),"."),(0,n.kt)("li",{parentName:"ul"},"Joining our ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/strongloop/loopback-next/issues/110"},"user group"),".")))}h.isMDXComponent=!0}}]);