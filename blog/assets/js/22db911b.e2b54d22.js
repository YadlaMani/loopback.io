"use strict";(self.webpackChunkloopback_blog=self.webpackChunkloopback_blog||[]).push([[3335],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>g});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(o),m=n,g=u["".concat(c,".").concat(m)]||u[m]||h[m]||i;return o?r.createElement(g,a(a({ref:t},p),{},{components:o})):r.createElement(g,a({ref:t},p))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=o[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4819:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=o(7462),n=(o(7294),o(3905));const i={title:"Making Your Contribution Process Simpler - Switching from CLA to DCO",date:new Date("2020-07-29T00:00:00.000Z"),authors:"dhmlau",slug:"switching-to-dco",tags:["Community","Contribution"]},a=void 0,l={permalink:"/blog/switching-to-dco",editUrl:"https://github.com/loopbackio/loopback-blog/blog/2020/2020-07-29-dco.md",source:"@site/blog/2020/2020-07-29-dco.md",title:"Making Your Contribution Process Simpler - Switching from CLA to DCO",description:"Originally published on strongloop.com",date:"2020-07-29T00:00:00.000Z",formattedDate:"July 29, 2020",tags:[{label:"Community",permalink:"/blog/tags/community"},{label:"Contribution",permalink:"/blog/tags/contribution"}],readingTime:1.615,hasTruncateMarker:!0,authors:[{name:"Diana Lau",title:"LoopBack Maintainer",url:"https://github.com/dhmlau",imageURL:"https://avatars2.githubusercontent.com/u/25489897",key:"dhmlau"}],frontMatter:{title:"Making Your Contribution Process Simpler - Switching from CLA to DCO",date:"2020-07-29T00:00:00.000Z",authors:"dhmlau",slug:"switching-to-dco",tags:["Community","Contribution"]},prevItem:{title:"LoopBack 4 July 2020 Milestone Update",permalink:"/blog/july-2020-milestone"},nextItem:{title:"Community Q&A Monthly Digest - Jun 2020",permalink:"/blog/2020-Jun-slack-qa"}},c={authorsImageUrls:[void 0]},s=[{value:"What Is Developer Certificate of Origin (DCO)?",id:"what-is-developer-certificate-of-origin-dco",level:2},{value:"Why Are We Switching?",id:"why-are-we-switching",level:2},{value:"What Does It Mean To You?",id:"what-does-it-mean-to-you",level:2},{value:"Start Contributing!",id:"start-contributing",level:2}],p={toc:s},u="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Originally published on ",(0,n.kt)("a",{parentName:"em",href:"https://strongloop.com"},"strongloop.com"))),(0,n.kt)("p",null,"Since the beginning of the LoopBack project, we have been using the Contributor License Agreement (CLA) as the contribution method. Contributors need to sign each CLA for each LoopBack repository they're contributing. To simplify the contribution process and encourage community contributions, we are planning to gradually switch to use ",(0,n.kt)("a",{parentName:"p",href:"https://developercertificate.org/"},"Developer Certificate of Origin (DCO)")," as the contribution method. "),(0,n.kt)("h2",{id:"what-is-developer-certificate-of-origin-dco"},"What Is Developer Certificate of Origin (DCO)?"),(0,n.kt)("p",null,"As an alternative to CLA, a Developer Ceritifcate of Origin (DCO) is a more lightweight contribution method. According to ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Developer_Certificate_of_Origin"},"Wikipedia"),":"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Instead a signed legal contract, a DCO is an affirmation that the source code being submitted originated from the developer, or that the developer has permission to submit the code.")),(0,n.kt)("p",null,"The full text of DCO can be found: ",(0,n.kt)("a",{parentName:"p",href:"https://developercertificate.org/"},"https://developercertificate.org/"),". "),(0,n.kt)("h2",{id:"why-are-we-switching"},"Why Are We Switching?"),(0,n.kt)("p",null,"Community contributions are vital to the success of LoopBack. Since DCO simply needs your affirmation that you are the one who is submitting the code, we hope this switch would make the contribution process simpler and thus encourages more contributions from you!"),(0,n.kt)("p",null,"In addition, this change can help us to reduce the infrastructure cost, including the team's time and effort, to maintain the CLA server. "),(0,n.kt)("h2",{id:"what-does-it-mean-to-you"},"What Does It Mean To You?"),(0,n.kt)("p",null,"Currently, the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback4-example-shopping"},"loopback4-example-shopping")," is already using DCO. "),(0,n.kt)("p",null,"To sign off the commit, you can:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'git commit -s -m "feat: my commit message"\n')),(0,n.kt)("p",null,"Over the next little while, we'll start the switch for the repositories with the most community contributions, namely ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-next"},"loopback-next"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback.io"},"loopback.io")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strongloop/loopback-datasource-juggler"},"loopback-datasource-juggler"),", then we'll roll it out for the connector repos. "),(0,n.kt)("h2",{id:"start-contributing"},"Start Contributing!"),(0,n.kt)("p",null,"You are more than welcome to contribute on something that you find it relevant and interesting to you. If you're simply looking for items that we want help, you can look for GitHub issues with ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+user%3Astrongloop+label%3A%22help+wanted%22"},(0,n.kt)("inlineCode",{parentName:"a"},"help wanted"))," or ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+user%3Astrongloop+label%3A%22good+first+issue%22"},(0,n.kt)("inlineCode",{parentName:"a"},"good first issue"))," labels. "),(0,n.kt)("p",null,"More questions? Feel free to ask in the #loopback-contributors channel of the ",(0,n.kt)("a",{parentName:"p",href:"https://join.slack.com/t/loopbackio/shared_invite/zt-8lbow73r-SKAKz61Vdao~_rGf91pcsw"},"LoopBack Slack community"),"."))}h.isMDXComponent=!0}}]);