"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[766],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},72590:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"semver",title:"Our backward compatibility promise",sidebar_label:"Semantic versioning"},l=void 0,p={unversionedId:"semver",id:"version-3.0/semver",title:"Our backward compatibility promise",description:"Ensuring smooth upgrades of your project is a priority. That's why we promise you backward compatibility (BC) for all",source:"@site/versioned_docs/version-3.0/semver.md",sourceDirName:".",slug:"/semver",permalink:"/docs/3.0/semver",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-3.0/semver.md",tags:[],version:"3.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1647762737,formattedLastUpdatedAt:"3/20/2022",frontMatter:{id:"semver",title:"Our backward compatibility promise",sidebar_label:"Semantic versioning"}},u=[],c={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ensuring smooth upgrades of your project is a priority. That's why we promise you backward compatibility (BC) for all\nminor GraphQLite releases. You probably recognize this strategy as ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning"),". In short,\nSemantic Versioning means that only major releases (such as 4.0, 5.0 etc.) are allowed to break backward compatibility.\nMinor releases (such as 4.0, 4.1 etc.) may introduce new features, but must do so without breaking the existing API of\nthat release branch (4.x in the previous example)."),(0,o.kt)("p",null,'But sometimes, a new feature is not quite "dry" and we need a bit of time to find the perfect API.\nIn such cases, we prefer to gather feedback from real-world usage, adapt the API, or remove it altogether.\nDoing so is not possible with a no BC-break approach.'),(0,o.kt)("p",null,"To avoid being bound to our backward compatibility promise, such features can be marked as ",(0,o.kt)("strong",{parentName:"p"},"unstable")," or ",(0,o.kt)("strong",{parentName:"p"},"experimental"),"\nand their classes and methods are marked with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@unstable")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"@experimental")," tag."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@unstable")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"@experimental")," classes / methods will ",(0,o.kt)("strong",{parentName:"p"},"not break")," in a patch release, but ",(0,o.kt)("em",{parentName:"p"},"may be broken")," in a minor version."),(0,o.kt)("p",null,"As a rule of thumb:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are a GraphQLite user (using GraphQLite mainly through its annotations), we guarantee strict semantic versioning"),(0,o.kt)("li",{parentName:"ul"},"If you are extending GraphQLite features (if you are developing custom annotations, or if you are developing a GraphQlite integration\nwith a framework...), be sure to check the tags.")),(0,o.kt)("p",null,"Said otherwise:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you are a GraphQLite user, in your ",(0,o.kt)("inlineCode",{parentName:"li"},"composer.json"),", target a major version:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "require": {\n    "thecodingmachine/graphqlite": "^4"\n  }\n}\n'))),(0,o.kt)("li",{parentName:"ul"},"If you are extending the GraphQLite ecosystem, in your ",(0,o.kt)("inlineCode",{parentName:"li"},"composer.json"),", target a minor version:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "require": {\n    "thecodingmachine/graphqlite": "~4.1.0"\n  }\n}\n')))),(0,o.kt)("p",null,"Finally, classes / methods annotated with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@internal")," annotation are not meant to be used in your code or third-party library.\nThey are meant for GraphQLite internal usage and they may break anytime. Do not use those directly."))}m.isMDXComponent=!0}}]);