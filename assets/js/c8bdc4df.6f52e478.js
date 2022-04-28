"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2888],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(r),f=o,m=c["".concat(p,".").concat(f)]||c[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},25530:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={id:"file-uploads",title:"File uploads",sidebar_label:"File uploads",original_id:"file-uploads"},p=void 0,u={unversionedId:"file-uploads",id:"version-4.0/file-uploads",title:"File uploads",description:"GraphQL does not support natively the notion of file uploads, but an extension to the GraphQL protocol was proposed",source:"@site/versioned_docs/version-4.0/file_uploads.md",sourceDirName:".",slug:"/file-uploads",permalink:"/docs/4.0/file-uploads",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/file_uploads.md",tags:[],version:"4.0",lastUpdatedBy:"Andrii Dembitskyi",lastUpdatedAt:1651185196,formattedLastUpdatedAt:"4/28/2022",frontMatter:{id:"file-uploads",title:"File uploads",sidebar_label:"File uploads",original_id:"file-uploads"},sidebar:"version-4.0/docs",previous:{title:"Prefetching records",permalink:"/docs/4.0/prefetch-method"},next:{title:"Pagination",permalink:"/docs/4.0/pagination"}},s=[{value:"If you are using the Symfony bundle",id:"if-you-are-using-the-symfony-bundle",children:[],level:2},{value:"If you are using a PSR-15 compatible framework",id:"if-you-are-using-a-psr-15-compatible-framework",children:[],level:2},{value:"If you are using another framework not compatible with PSR-15",id:"if-you-are-using-another-framework-not-compatible-with-psr-15",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],d={toc:s};function c(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"GraphQL does not support natively the notion of file uploads, but an extension to the GraphQL protocol was proposed\nto add support for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jaydenseric/graphql-multipart-request-spec"},"multipart requests"),"."),(0,a.kt)("p",null,"GraphQLite supports this extension through the use of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Ecodev/graphql-upload"},"Ecodev/graphql-upload")," library."),(0,a.kt)("h2",{id:"if-you-are-using-the-symfony-bundle"},"If you are using the Symfony bundle"),(0,a.kt)("p",null,"If you are using our Symfony bundle, the file upload middleware is managed by the bundle. You have nothing to do\nand can start using it right away."),(0,a.kt)("h2",{id:"if-you-are-using-a-psr-15-compatible-framework"},"If you are using a PSR-15 compatible framework"),(0,a.kt)("p",null,"In order to use this, you must first be sure that the ",(0,a.kt)("inlineCode",{parentName:"p"},"ecodev/graphql-upload")," PSR-15 middleware is part of your middleware pipe."),(0,a.kt)("p",null,"Simply add ",(0,a.kt)("inlineCode",{parentName:"p"},"GraphQL\\Upload\\UploadMiddleware")," to your middleware pipe."),(0,a.kt)("h2",{id:"if-you-are-using-another-framework-not-compatible-with-psr-15"},"If you are using another framework not compatible with PSR-15"),(0,a.kt)("p",null,"Please check the Ecodev/graphql-upload library ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Ecodev/graphql-upload"},"documentation"),"\nfor more information on how to integrate it in your framework."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"To handle an uploaded file, you type-hint against the PSR-7 ",(0,a.kt)("inlineCode",{parentName:"p"},"UploadedFileInterface"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @Mutation\n     */\n    public function saveDocument(string $name, UploadedFileInterface $file): Document\n    {\n        // Some code that saves the document.\n        $file->moveTo($someDir);\n    }\n}\n")),(0,a.kt)("p",null,"Of course, you need to use a GraphQL client that is compatible with multipart requests."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jaydenseric/graphql-multipart-request-spec#client"},"jaydenseric/graphql-multipart-request-spec")," for a list of compatible clients."))}c.isMDXComponent=!0}}]);