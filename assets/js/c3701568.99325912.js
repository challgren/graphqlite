"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8165],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73096:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],l={id:"autowiring",title:"Autowiring services",sidebar_label:"Autowiring services",original_id:"autowiring"},s=void 0,c={unversionedId:"autowiring",id:"version-4.0/autowiring",title:"Autowiring services",description:"GraphQLite can automatically inject services in your fields/queries/mutations signatures.",source:"@site/versioned_docs/version-4.0/autowiring.mdx",sourceDirName:".",slug:"/autowiring",permalink:"/docs/4.0/autowiring",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/autowiring.mdx",tags:[],version:"4.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1650920071,formattedLastUpdatedAt:"4/25/2022",frontMatter:{id:"autowiring",title:"Autowiring services",sidebar_label:"Autowiring services",original_id:"autowiring"},sidebar:"version-4.0/docs",previous:{title:"Type mapping",permalink:"/docs/4.0/type_mapping"},next:{title:"Extending a type",permalink:"/docs/4.0/extend_type"}},u=[{value:"Sample",id:"sample",children:[],level:2},{value:"Best practices",id:"best-practices",children:[],level:2},{value:"Fetching a service by name (discouraged!)",id:"fetching-a-service-by-name-discouraged",children:[],level:2},{value:"Alternative solution",id:"alternative-solution",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"GraphQLite can automatically inject services in your fields/queries/mutations signatures."),(0,a.kt)("p",null,"Some of your fields may be computed. In order to compute these fields, you might need to call a service."),(0,a.kt)("p",null,"Most of the time, your ",(0,a.kt)("inlineCode",{parentName:"p"},"@Type")," annotation will be put on a model. And models do not have access to services.\nHopefully, if you add a type-hinted service in your field's declaration, GraphQLite will automatically fill it with\nthe service instance."),(0,a.kt)("h2",{id:"sample"},"Sample"),(0,a.kt)("p",null,"Let's assume you are running an international store. You have a ",(0,a.kt)("inlineCode",{parentName:"p"},"Product")," class. Each product has many names (depending\non the language of the user)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Autowire;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\nuse Symfony\\Component\\Translation\\TranslatorInterface;\n\n/**\n * @Type()\n */\nclass Product\n{\n    // ...\n\n    /**\n     * @Field()\n     * @Autowire(for=\"$translator\")\n     */\n    public function getName(TranslatorInterface $translator): string\n    {\n        return $translator->trans('product_name_'.$this->id);\n    }\n}\n")),(0,a.kt)("p",null,"When GraphQLite queries the name, it will automatically fetch the translator service."),(0,a.kt)("div",{class:"alert alert--warning"},"As with most autowiring solutions, GraphQLite assumes that the service identifier in the container is the fully qualified class name of the type-hint. So in the example above, GraphQLite will look for a service whose name is ",(0,a.kt)("code",null,"Symfony\\Component\\Translation\\TranslatorInterface"),"."),(0,a.kt)("h2",{id:"best-practices"},"Best practices"),(0,a.kt)("p",null,"It is a good idea to refrain from type-hinting on concrete implementations.\nMost often, your field declaration will be in your model. If you add a type-hint on a service, you are binding your domain\nwith a particular service implementation. This makes your code tightly coupled and less testable."),(0,a.kt)("div",{class:"alert alert--danger"},"Please don't do that:",(0,a.kt)("pre",null,(0,a.kt)("code",null,"    /** * @Field() */ public function getName(MyTranslator $translator): string"))),(0,a.kt)("p",null,"Instead, be sure to type-hint against an interface."),(0,a.kt)("div",{class:"alert alert--success"},"Do this instead:",(0,a.kt)("pre",null,(0,a.kt)("code",null,"    /** * @Field() */ public function getName(TranslatorInterface $translator): string"))),(0,a.kt)("p",null,"By type-hinting against an interface, your code remains testable and is decoupled from the service implementation."),(0,a.kt)("h2",{id:"fetching-a-service-by-name-discouraged"},"Fetching a service by name (discouraged!)"),(0,a.kt)("p",null,"Optionally, you can specify the identifier of the service you want to fetch from the controller:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Autowire(for="$translator", identifier="translator")\n */\n')),(0,a.kt)("div",{class:"alert alert--danger"},"While GraphQLite offers the possibility to specify the name of the service to be autowired, we would like to emphasize that this is ",(0,a.kt)("strong",null,"highly discouraged"),'. Hard-coding a container identifier in the code of your class is akin to using the "service locator" pattern, which is known to be an anti-pattern. Please refrain from doing this as much as possible.'),(0,a.kt)("h2",{id:"alternative-solution"},"Alternative solution"),(0,a.kt)("p",null,"You may find yourself uncomfortable with the autowiring mechanism of GraphQLite. For instance maybe:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your service identifier in the container is not the fully qualified class name of the service (this is often true if you are not using a container supporting autowiring)"),(0,a.kt)("li",{parentName:"ul"},"You do not want to inject a service in a domain object"),(0,a.kt)("li",{parentName:"ul"},"You simply do not like the magic of injecting services in a method signature")),(0,a.kt)("p",null,"If you do not want to use autowiring and if you still need to access services to compute a field, please read on\nthe next chapter to learn ",(0,a.kt)("a",{parentName:"p",href:"extend_type"},"how to extend a type"),"."))}d.isMDXComponent=!0}}]);