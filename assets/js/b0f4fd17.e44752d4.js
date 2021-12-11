"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7189],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6188:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],c={id:"canvasview.imagedata",title:"Interface: ImageData",sidebar_label:"ImageData",custom_edit_url:null},l=void 0,p={unversionedId:"api/core/interfaces/canvasview.imagedata",id:"api/core/interfaces/canvasview.imagedata",isDocsHomePage:!1,title:"Interface: ImageData",description:"CanvasView.ImageData",source:"@site/docs/api/core/interfaces/canvasview.imagedata.md",sourceDirName:"api/core/interfaces",slug:"/api/core/interfaces/canvasview.imagedata",permalink:"/live/docs/api/core/interfaces/canvasview.imagedata",editUrl:null,version:"current",frontMatter:{id:"canvasview.imagedata",title:"Interface: ImageData",sidebar_label:"ImageData",custom_edit_url:null},sidebar:"api",previous:{title:"CanvasRenderingContext2D",permalink:"/live/docs/api/core/interfaces/canvasview.canvasrenderingcontext2d"},next:{title:"Image",permalink:"/live/docs/api/core/interfaces/imagemodule.image"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"ID",id:"id",children:[]},{value:"data",id:"data",children:[]},{value:"height",id:"height",children:[]},{value:"width",id:"width",children:[]}]},{value:"Methods",id:"methods",children:[{value:"release",id:"release",children:[]}]}],d={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/live/docs/api/core/modules/canvasview"},"CanvasView"),".ImageData"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/nativejsref.nativejsref-1"},"NativeJSRef")),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},"ImageData")))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"id"},"ID"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"ID"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The internal ID for the object instance in native. Instead of serializing\nthe object in native and sending it via the React Native Bridge, each\nnative object will be assigned an ID which is sent to JavaScript instead.\nThe ID will be used to reference the native object instance when calling\nfunctions on the JavaScript object."),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/nativejsref.nativejsref-1"},"NativeJSRef"),".",(0,i.kt)("a",{parentName:"p",href:"/live/docs/api/core/interfaces/nativejsref.nativejsref-1#id"},"ID")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/6f2fda9/react-native-pytorch-core/src/NativeJSRef.ts#L64"},"NativeJSRef.ts:64")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"data"},"data"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"data"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Uint8ClampedArray")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/6f2fda9/react-native-pytorch-core/src/CanvasView.tsx#L30"},"CanvasView.tsx:30")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"height"},"height"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"height"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/6f2fda9/react-native-pytorch-core/src/CanvasView.tsx#L29"},"CanvasView.tsx:29")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"width"},"width"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"width"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/6f2fda9/react-native-pytorch-core/src/CanvasView.tsx#L28"},"CanvasView.tsx:28")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"release"},"release"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"release"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pytorch/live/blob/6f2fda9/react-native-pytorch-core/src/CanvasView.tsx#L31"},"CanvasView.tsx:31")))}u.isMDXComponent=!0}}]);