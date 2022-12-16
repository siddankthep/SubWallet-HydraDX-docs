"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[666],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=o,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1262:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return h}});var n=a(3117),o=a(102),r=(a(7294),a(3905)),i=a(4996),s=["components"],l={id:"claim",title:"Claim your HDX"},c=void 0,d={unversionedId:"claim",id:"claim",title:"Claim your HDX",description:"You can claim your HDX with the xHDX tokens (ERC-20) that you have obtained in the period when our Balancer LBP was live.",source:"@site/docs/claim.md",sourceDirName:".",slug:"/claim",permalink:"/claim",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/claim.md",tags:[],version:"current",frontMatter:{id:"claim",title:"Claim your HDX"},sidebar:"sidebar",previous:{title:"Participate in Council Elections",permalink:"/participate_in_council_elections"},next:{title:"Set your Identity",permalink:"/identity"}},u=[{value:"Prerequisites",id:"prequisites",children:[],level:2},{value:"Claim process",id:"claim-process",children:[{value:"00 Authorize",id:"00-authorize",children:[],level:3},{value:"01 Select your ETH address",id:"01-select-your-eth-address",children:[],level:3},{value:"02 Create and select an HDX address",id:"02-create-and-select-an-hdx-address",children:[],level:3},{value:"03 Sign",id:"03-sign",children:[],level:3},{value:"04 Claim",id:"04-claim",children:[],level:3}],level:2}],p={toc:u};function h(e){var t=e.components,a=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can claim your HDX with the xHDX tokens (ERC-20) that you have obtained in the period when our ",(0,r.kt)("a",{parentName:"p",href:"https://hydradx.substack.com/p/lbp-announcement"},"Balancer LBP")," was live."),(0,r.kt)("h2",{id:"prequisites"},"Prerequisites"),(0,r.kt)("p",null,"There are two prerequisites for claiming your HDX. In the first place, you need to install the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/extension/"},"Polkadot.js browser extension")," which will be used to create your HDX wallet. In the second place, you need access to your xHDX tokens which should be stored in a wallet supporting the signing of messages relating to ERC-20 tokens (e.g. Metamask)."),(0,r.kt)("p",null,"If your xHDX tokens are stored in Coinbase Wallet or Trust Wallet, you will need to use one of the following workarounds for claiming your HDX, as these wallets do not support the signing of messages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Metamask: You can use the Metamask browser extension and import your wallet using the recovery seed phrase."),(0,r.kt)("li",{parentName:"ul"},"MEW (MyEtherWallet): You can also use MEW by either importing your recovery seed phrase (",(0,r.kt)("em",{parentName:"li"},"Mnemonic Phrase"),") or by using the WalletLink connection option. Both options can be accessed from the ",(0,r.kt)("a",{parentName:"li",href:"https://www.myetherwallet.com/access-my-wallet"},"MEW wallet access page"),". If you are using Coinbase Wallet, you can use WalletLink which you can find the Settings of Coinbase Wallet.")),(0,r.kt)("h2",{id:"claim-process"},"Claim process"),(0,r.kt)("p",null,"After making sure that you have fulfilled the prerequisites described above, you can navigate to the ",(0,r.kt)("a",{parentName:"p",href:"https://claim.hydradx.io"},"HydraDX Claim app")," and proceed with the claim process."),(0,r.kt)("p",null,"During the claim process, you will use your xHDX tokens (ERC-20) to claim your share of HDX tokens."),(0,r.kt)("h3",{id:"00-authorize"},"00 Authorize"),(0,r.kt)("p",null,"The HydraDX Claim app will request authorization from the Polkadot.js browser extension."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Make sure that you are not the victim of a phishing attack and pay attention to the authorization popup: The application should be identifying itself as ",(0,r.kt)("strong",{parentName:"p"},"CLAIM.HYDRADX.IO")," and the request should be coming from ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://claim.hydradx.io"},"https://claim.hydradx.io")),"."))),(0,r.kt)("img",{alt:"authorize",src:(0,i.Z)("/claim/authorize.jpg")}),(0,r.kt)("p",null,"After authorizing, you will be prompted to update the metadata for the Polkadot.js browser extension. This will allow Polkadot.js to create HydraDX-specific addresses which are required to complete the claim process."),(0,r.kt)("img",{alt:"authorize",src:(0,i.Z)("/claim/metadata.jpg")}),(0,r.kt)("h3",{id:"01-select-your-eth-address"},"01 Select your ETH address"),(0,r.kt)("p",null,"In the first step of the claim process, you will be asked to select the account holding your xHDX tokens. This can be done by either connecting to your wallet holding the ERC-20 tokens (e.g. Metamask), or by entering your ETH address manually in the input box (in that case you will need to sign the message manually later)."),(0,r.kt)("p",null,"After entering your ETH address, you should see the balance of HDX tokens you can claim, including the ",(0,r.kt)("a",{parentName:"p",href:"https://hydradx.substack.com/p/first-governance-vote"},"refund of the gas fees")," that you have spent for obtaining your xHDX on Balancer."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You are not eligible for a gas refund if you have obtained your xHDX at some other place than the official Balancer pool (such as Uniswap), or if you have moved your tokens out of the original buying wallet."))),(0,r.kt)("img",{alt:"authorize",src:(0,i.Z)("/claim/claim-01.jpg")}),(0,r.kt)("h3",{id:"02-create-and-select-an-hdx-address"},"02 Create and select an HDX address"),(0,r.kt)("p",null,"In the second step, you will be asked to select your HDX address."),(0,r.kt)("p",null,"To create a new HDX address, open the Polkadot.js browser extension and click on the + sign to create a new account. In the first step of account creation, you will see the 12-word mnemonic phrase which can be used to recover your account. After saving your seed phrase in a secure place, click on ",(0,r.kt)("em",{parentName:"p"},"Next step"),". Here, you should change the ",(0,r.kt)("strong",{parentName:"p"},"Network")," by selecting the option ",(0,r.kt)("strong",{parentName:"p"},"HydraDX Snakenet"),". Enter a name and password for your account, and finish the account creation."),(0,r.kt)("img",{alt:"authorize",src:(0,i.Z)("/claim/create-account.png")}),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Make sure that you back up your recovery seed phrase by storing it in a safe place and never share it with anybody. Using the seed phrase is the only way you can recover your account and if you lose or leak it, your funds might be compromised. Please note that you need to secure your access to this wallet until the mainnet starts, as all HDX balances are currently locked. If you lose access to your HDX wallet you will also lose your HDX."))),(0,r.kt)("p",null,"After creating your HDX account, you should be able to select it in the HydraDX Claim app. After doing so, the app should provide you with an overview of the ETH and HDX addresses used for the claim process. Click on next to proceed to signing the message."),(0,r.kt)("img",{alt:"authorize",src:(0,i.Z)("/claim/claim-02.jpg")}),(0,r.kt)("h3",{id:"03-sign"},"03 Sign"),(0,r.kt)("p",null,"In the third step of the claim process using the HydraDX Claim app, you will be provided with the option to sign the message for using your xHDX tokens to claim HDX."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please note that in this step you will see the ",(0,r.kt)("strong",{parentName:"p"},"public key")," of your HDX address, and not the address in its human readable form as it was displayed in the previous step and in your Polkadot.js browser extension (for more details refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/keyring/start/ss58"},"ss58 docs"),"). If you have followed all steps as described above, there is nothing to worry about and it is safe to proceed with signing the message. We will also verify that the HDX account you are using to sign the claim transaction at the final step corresponds with the account which is receiving the claimed HDX."))),(0,r.kt)("p",null,"Depending on the choice you have made in the first step, you have two options to sign the message for using the xHDX tokens in the claim process:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you are using ",(0,r.kt)("strong",{parentName:"p"},"Metamask"),", after clicking the ",(0,r.kt)("em",{parentName:"p"},"Sign")," button you will be prompted by Metamask to sign the message. Follow the instructions in Metamask.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you have entered your ETH address manually, you will need to sign the message through the external wallet that holds the private keys of your xHDX tokens. Once you have signed the message, copy the signature (starting with ",(0,r.kt)("em",{parentName:"p"},"0x"),") to the respective field in the HydraDX Claim app."))),(0,r.kt)("img",{alt:"authorize",src:(0,i.Z)("/claim/claim-03.jpg")}),(0,r.kt)("h3",{id:"04-claim"},"04 Claim"),(0,r.kt)("p",null,"After signing the message with the wallet holding your xHDX tokens, the Polkadot.js extension should open and you will be asked to sign the transaction for claiming the HDX to your account. Enter your HDX account password, and click ",(0,r.kt)("em",{parentName:"p"},"Sign the transaction"),"."),(0,r.kt)("img",{alt:"authorize",src:(0,i.Z)("/claim/claim-sign.jpg")}),(0,r.kt)("p",null,"You have now completed the claim process, thereby officially becoming an HDX owner!"),(0,r.kt)("p",null,"You can check your balance using Polkadot/apps connected to the HydraDX network: ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.hydradx.cloud#/accounts"},"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.hydradx.cloud#/accounts")))}h.isMDXComponent=!0}}]);