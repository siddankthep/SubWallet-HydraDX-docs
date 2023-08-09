"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[462],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),h=a,m=c["".concat(d,".").concat(h)]||c[h]||u[h]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2251:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var n=r(3117),a=(r(7294),r(3905)),i=r(4996);const o={id:"omnipool_dca",title:"DCA Trading"},l=void 0,d={unversionedId:"omnipool_dca",id:"omnipool_dca",title:"DCA Trading",description:"HydraDX DCA and Split Trade (easy DCA) are two user-friendly features which allow traders to implement the dollar-cost-averaging (DCA) strategy when trading in the Omnipool - in a permissionless and non-custodial way.",source:"@site/docs/omnipool_dca.md",sourceDirName:".",slug:"/omnipool_dca",permalink:"/de/omnipool_dca",draft:!1,editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/omnipool_dca.md",tags:[],version:"current",frontMatter:{id:"omnipool_dca",title:"DCA Trading"},sidebar:"sidebar",previous:{title:"Efficient Trading",permalink:"/de/omnipool_trading"},next:{title:"Single-Sided LPing",permalink:"/de/omnipool_lp"}},s={},p=[{value:"HydraDX DCA",id:"hydradx-dca",level:2},{value:"Split Trade (easy DCA)",id:"split-trade",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://app.hydradx.io/dca"},"HydraDX DCA")," and ",(0,a.kt)("a",{parentName:"p",href:"https://app.hydradx.io/trade"},"Split Trade")," (easy DCA) are two user-friendly features which allow traders to implement the dollar-cost-averaging (DCA) strategy when trading in the Omnipool - in a permissionless and non-custodial way."),(0,a.kt)("p",null,"Following the DCA strategy, orders are not placed at once but instead split into smaller trades which are executed at regular intervals of time. By doing so, traders may protect themselves against price volatility and achieve an average price. Additionally, splitting a large order in smaller chunks will result in less slippage."),(0,a.kt)("p",null,"HydraDX has two DCA implementations - the ",(0,a.kt)("a",{parentName:"p",href:"#hydradx-dca"},"full DCA feature"),", and ",(0,a.kt)("a",{parentName:"p",href:"#split-trade"},"Split Trade")," (easy DCA) which can be found on the main trading page. Further down, you can learn more about these features."),(0,a.kt)("p",null,"If you are looking for step-by-step guidance, check out the ",(0,a.kt)("a",{parentName:"p",href:"/howto_dca"},"how-to place a DCA order guide"),"."),(0,a.kt)("h2",{id:"hydradx-dca"},"HydraDX DCA"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://app.hydradx.io/dca"},"HydraDX DCA")," provides an intuitive UI which enables users to fine-tune their DCA orders in the Omnipool."),(0,a.kt)("p",null,"When setting up their order, users specify the amount of Asset A they would like to spend in order to obtain Asset B, as well as the frequency of the trades - in hours (approximation) or number of blocks (more granularity)."),(0,a.kt)("p",null,"After placing the order, the HydraDX DCA pallet makes sure that trades are scheduled at the specified intervals until the predetermined amount of Asset A has been spent. Placing multiple DCA orders which are executed in parallel is supported."),(0,a.kt)("p",null,"Users can track the status of their orders on the UI. Open orders can at any time be terminated for the remaining amount."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:(0,i.Z)("/omnipool_dca/dca.jpg")})),(0,a.kt)("h2",{id:"split-trade"},"Split Trade (easy DCA)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://app.hydradx.io/trade"},"Split Trade")," is a more simple implementation of DCA directly into the main trade page. It provides users with a one-click solution for splitting larger orders in order to protect themselves from slippage."),(0,a.kt)("p",null,"When activated, Split Trade will split the order in smaller chunks until the size of the trades is small enough to achieve <0.1% slippage (estimate only - the exact slippage for future trades can never be predicted in advance)."),(0,a.kt)("p",null,"Open Split Trade orders can be terminated by the user at any time, just like any regular DCA order."))}u.isMDXComponent=!0}}]);