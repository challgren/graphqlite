"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9872],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18962:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"migrating",title:"Release notes",sidebar_label:"Release notes",original_id:"migrating"},s=void 0,c={unversionedId:"migrating",id:"version-3.0/migrating",title:"Release notes",description:"First stable release of GraphQLite",source:"@site/versioned_docs/version-3.0/migrating.md",sourceDirName:".",slug:"/migrating",permalink:"/docs/3.0/migrating",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-3.0/migrating.md",tags:[],version:"3.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1650920071,formattedLastUpdatedAt:"4/25/2022",frontMatter:{id:"migrating",title:"Release notes",sidebar_label:"Release notes",original_id:"migrating"}},p=[{value:"First stable release of GraphQLite",id:"first-stable-release-of-graphqlite",children:[],level:2},{value:"Basic example",id:"basic-example",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"first-stable-release-of-graphqlite"},"First stable release of GraphQLite"),(0,o.kt)("p",null,"GraphQLite is PHP library that allows you to write your GraphQL queries in simple-to-write controllers."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a complete GraphQL API by simply annotating your PHP classes"),(0,o.kt)("li",{parentName:"ul"},"Framework agnostic, but Symfony and Laravel bindings available!"),(0,o.kt)("li",{parentName:"ul"},"Comes with batteries included: queries, mutations, mapping of arrays / iterators, file uploads, extendable types and more!")),(0,o.kt)("p",null,"After several months of work, we are very happy to announce the availability of GraphQLite v3.0."),(0,o.kt)("p",null,'If you are wondering where are v1 and v2... yeah... GraphQLite is a fork of "thecodingmachine/graphql-controllers" that already had a v1 and a v2. But so much has changed that it deserved a new name!'),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://graphqlite.thecodingmachine.io"},"Check out the documentation")),(0,o.kt)("h2",{id:"basic-example"},"Basic example"),(0,o.kt)("p",null,"First, declare a query in your controller:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"class ProductController\n{\n    /**\n     * @Query()\n     */\n    public function product(string $id): Product\n    {\n        // Some code that looks for a product and returns it.\n    }\n}\n")),(0,o.kt)("p",null,"Then, annotate the ",(0,o.kt)("inlineCode",{parentName:"p"},"Product")," class to declare what fields are exposed to the GraphQL API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type()\n */\nclass Product\n{\n    /**\n     * @Field()\n     */\n    public function getName(): string\n    {\n        return $this->name;\n    }\n    // ...\n}\n")),(0,o.kt)("p",null,"That's it, you're good to go \ud83c\udf89! Query and enjoy!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  product(id: 42) {\n    name\n  }\n}\n")))}d.isMDXComponent=!0}}]);