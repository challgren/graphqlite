"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5593],{58215:function(e,n,r){var t=r(67294);n.Z=function(e){var n=e.children,r=e.hidden,a=e.className;return t.createElement("div",{role:"tabpanel",hidden:r,className:a},n)}},55064:function(e,n,r){r.d(n,{Z:function(){return d}});var t=r(87462),a=r(67294),o=r(72389),i=r(79443);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=r(83039),p=r(86010),c="tabItem_vU9c";function u(e){var n,r,t,o=e.lazy,i=e.block,u=e.defaultValue,d=e.values,h=e.groupId,m=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:f.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,s.lx)(y,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===u?u:null!=(n=null!=u?u:null==(r=f.find((function(e){return e.props.default})))?void 0:r.props.value)?n:null==(t=f[0])?void 0:t.props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=l(),w=v.tabGroupChoices,b=v.setTabGroupChoices,$=(0,a.useState)(k),S=$[0],C=$[1],N=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var T=w[h];null!=T&&T!==S&&y.some((function(e){return e.value===T}))&&C(T)}var q=function(e){var n=e.currentTarget,r=N.indexOf(n),t=y[r].value;t!==S&&(x(n),C(t),null!=h&&b(h,t))},P=function(e){var n,r=null;switch(e.key){case"ArrowRight":var t=N.indexOf(e.currentTarget)+1;r=N[t]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.currentTarget)-1;r=N[a]||N[N.length-1]}null==(n=r)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":i},m)},y.map((function(e){var n=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:S===n?0:-1,"aria-selected":S===n,className:(0,p.Z)("tabs__item",c,{"tabs__item--active":S===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:P,onFocus:q,onClick:q},null!=r?r:n)}))),o?(0,a.cloneElement)(f.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==S})}))))}function d(e){var n=(0,o.Z)();return a.createElement(u,(0,t.Z)({key:String(n)},e))}},19508:function(e,n,r){r.r(n),r.d(n,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),i=r(55064),l=r(58215),s=["components"],p={id:"other-frameworks",title:"Getting started with any framework",sidebar_label:"Other frameworks / No framework",original_id:"other-frameworks"},c=void 0,u={unversionedId:"other-frameworks",id:"version-4.1/other-frameworks",isDocsHomePage:!1,title:"Getting started with any framework",description:"If you are using Symfony 4.x, checkout the Symfony bundle.",source:"@site/versioned_docs/version-4.1/other_frameworks.mdx",sourceDirName:".",slug:"/other-frameworks",permalink:"/docs/4.1/other-frameworks",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.1/other_frameworks.mdx",tags:[],version:"4.1",lastUpdatedBy:"Jakub Janata",lastUpdatedAt:1646429510,formattedLastUpdatedAt:"3/4/2022",frontMatter:{id:"other-frameworks",title:"Getting started with any framework",sidebar_label:"Other frameworks / No framework",original_id:"other-frameworks"},sidebar:"version-4.1/docs",previous:{title:"Universal service providers",permalink:"/docs/4.1/universal_service_providers"},next:{title:"Queries",permalink:"/docs/4.1/queries"}},d=[{value:"Installation",id:"installation",children:[],level:2},{value:"Requirements",id:"requirements",children:[],level:2},{value:"Integration",id:"integration",children:[{value:"GraphQLite context",id:"graphqlite-context",children:[],level:3}],level:2},{value:"Minimal example",id:"minimal-example",children:[],level:2},{value:"PSR-15 Middleware",id:"psr-15-middleware",children:[{value:"Example",id:"example",children:[],level:3}],level:2}],h={toc:d};function m(e){var n=e.components,p=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},h,p,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you are using ",(0,o.kt)("strong",{parentName:"p"},"Symfony 4.x"),", checkout the ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.1/symfony-bundle"},"Symfony bundle"),"."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Open a terminal in your current project directory and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ composer require thecodingmachine/graphqlite\n")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"In order to bootstrap GraphQLite, you will need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A PSR-11 compatible container"),(0,o.kt)("li",{parentName:"ul"},"A PSR-16 cache")),(0,o.kt)("p",null,"Additionally, you will have to route the HTTP requests to the underlying GraphQL library."),(0,o.kt)("p",null,"GraphQLite relies on the ",(0,o.kt)("a",{parentName:"p",href:"http://webonyx.github.io/graphql-php/"},"webonyx/graphql-php")," library internally.\nThis library plays well with PSR-7 requests and we also provide a ",(0,o.kt)("a",{parentName:"p",href:"#psr-15-middleware"},"PSR-15 middleware"),"."),(0,o.kt)("h2",{id:"integration"},"Integration"),(0,o.kt)("p",null,"Webonyx/graphql-php library requires a ",(0,o.kt)("a",{parentName:"p",href:"https://webonyx.github.io/graphql-php/type-system/schema/"},"Schema")," in order to resolve\nGraphQL queries. We provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"SchemaFactory")," class to create such a schema:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\SchemaFactory;\n\n// $cache is a PSR-16 compatible cache\n// $container is a PSR-11 compatible container\n$factory = new SchemaFactory($cache, $container);\n$factory->addControllerNamespace('App\\\\Controllers\\\\')\n        ->addTypeNamespace('App\\\\');\n\n$schema = $factory->createSchema();\n")),(0,o.kt)("p",null,"You can now use this schema with ",(0,o.kt)("a",{parentName:"p",href:"https://webonyx.github.io/graphql-php/getting-started/#hello-world"},"Webonyx GraphQL facade"),"\nor the ",(0,o.kt)("a",{parentName:"p",href:"https://webonyx.github.io/graphql-php/executing-queries/#using-server"},"StandardServer class"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"SchemaFactory")," class also comes with a number of methods that you can use to customize your GraphQLite settings."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'// Configure an authentication service (to resolve the @Logged annotations).\n$factory->setAuthenticationService(new VoidAuthenticationService());\n// Configure an authorization service (to resolve the @Right annotations).\n$factory->setAuthorizationService(new VoidAuthorizationService());\n// Change the naming convention of GraphQL types globally.\n$factory->setNamingStrategy(new NamingStrategy());\n// Add a custom type mapper.\n$factory->addTypeMapper($typeMapper);\n// Add a custom type mapper using a factory to create it.\n// Type mapper factories are useful if you need to inject the "recursive type mapper" into your type mapper constructor.\n$factory->addTypeMapperFactory($typeMapperFactory);\n// Add a root type mapper.\n$factory->addRootTypeMapper($rootTypeMapper);\n// Add a parameter mapper.\n$factory->addParameterMapper($parameterMapper);\n// Add a query provider. These are used to find queries and mutations in the application.\n$factory->addQueryProvider($queryProvider);\n// Add a query provider using a factory to create it.\n// Query provider factories are useful if you need to inject the "fields builder" into your query provider constructor.\n$factory->addQueryProviderFactory($queryProviderFactory);\n// Add custom options to the Webonyx underlying Schema.\n$factory->setSchemaConfig($schemaConfig);\n// Configures the time-to-live for the GraphQLite cache. Defaults to 2 seconds in dev mode.\n$factory->setGlobTtl(2);\n// Enables prod-mode (cache settings optimized for best performance).\n// This is a shortcut for `$schemaFactory->setGlobTtl(null)`\n$factory->prodMode();\n// Enables dev-mode (this is the default mode: cache settings optimized for best developer experience).\n// This is a shortcut for `$schemaFactory->setGlobTtl(2)`\n$factory->devMode();\n')),(0,o.kt)("h3",{id:"graphqlite-context"},"GraphQLite context"),(0,o.kt)("p",null,'Webonyx allows you pass a "context" object when running a query.\nFor some GraphQLite features to work (namely: the prefetch feature), GraphQLite needs you to initialize the Webonyx context\nwith an instance of the ',(0,o.kt)("inlineCode",{parentName:"p"},"TheCodingMachine\\GraphQLite\\Context\\Context")," class."),(0,o.kt)("p",null,"For instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Context\\Context;\n\n$result = GraphQL::executeQuery($schema, $query, null, new Context(), $variableValues);\n")),(0,o.kt)("h2",{id:"minimal-example"},"Minimal example"),(0,o.kt)("p",null,"The smallest working example using no framework is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nuse GraphQL\\GraphQL;\nuse GraphQL\\Type\\Schema;\nuse TheCodingMachine\\GraphQLite\\SchemaFactory;\nuse TheCodingMachine\\GraphQLite\\Context\\Context;\n\n// $cache is a PSR-16 compatible cache.\n// $container is a PSR-11 compatible container.\n$factory = new SchemaFactory($cache, $container);\n$factory->addControllerNamespace('App\\\\Controllers\\\\')\n        ->addTypeNamespace('App\\\\');\n\n$schema = $factory->createSchema();\n\n$rawInput = file_get_contents('php://input');\n$input = json_decode($rawInput, true);\n$query = $input['query'];\n$variableValues = isset($input['variables']) ? $input['variables'] : null;\n\n$result = GraphQL::executeQuery($schema, $query, null, new Context(), $variableValues);\n$output = $result->toArray();\n\nheader('Content-Type: application/json');\necho json_encode($output);\n")),(0,o.kt)("h2",{id:"psr-15-middleware"},"PSR-15 Middleware"),(0,o.kt)("p",null,"When using a framework, you will need a way to route your HTTP requests to the ",(0,o.kt)("inlineCode",{parentName:"p"},"webonyx/graphql-php")," library."),(0,o.kt)("p",null,"If the framework you are using is compatible with PSR-15 (like Slim PHP or Zend-Expressive / Laminas), GraphQLite\ncomes with a PSR-15 middleware out of the box."),(0,o.kt)("p",null,"In order to get an instance of this middleware, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Psr15GraphQLMiddlewareBuilder")," builder class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// $schema is an instance of the GraphQL schema returned by SchemaFactory::createSchema (see previous chapter)\n$builder = new Psr15GraphQLMiddlewareBuilder($schema);\n\n$middleware = $builder->createMiddleware();\n\n// You can now inject your middleware in your favorite PSR-15 compatible framework.\n// For instance:\n$zendMiddlewarePipe->pipe($middleware);\n")),(0,o.kt)("p",null,"The builder offers a number of setters to modify its behaviour:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'$builder->setUrl("/graphql"); // Modify the URL endpoint (defaults to /graphql)\n$config = $builder->getConfig(); // Returns a Webonyx ServerConfig object. Use this object to configure Webonyx in details.\n$builder->setConfig($config);\n\n$builder->setResponseFactory(new ResponseFactory()); // Set a PSR-18 ResponseFactory (not needed if you are using zend-framework/zend-diactoros ^2\n$builder->setStreamFactory(new StreamFactory()); // Set a PSR-18 StreamFactory (not needed if you are using zend-framework/zend-diactoros ^2\n$builder->setHttpCodeDecider(new HttpCodeDecider()); // Set a class in charge of deciding the HTTP status code based on the response.\n')),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"In this example, we will focus on getting a working version of GraphQLite using:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.zendframework.com/zend-stratigility/"},"Zend Stratigility")," as a PSR-15 server"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mouf/picotainer")," (a micro-container) for the PSR-11 container"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"symfony/cache ")," for the PSR-16 cache")),(0,o.kt)("p",null,"The choice of the libraries is really up to you. You can adapt it based on your needs."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"composer.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "autoload": {\n    "psr-4": {\n      "App\\\\": "src/"\n    }\n  },\n  "require": {\n    "thecodingmachine/graphqlite": "^4",\n    "zendframework/zend-diactoros": "^2",\n    "zendframework/zend-stratigility": "^3",\n    "zendframework/zend-httphandlerrunner": "^1.0",\n    "mouf/picotainer": "^1.1",\n    "symfony/cache": "^4.2"\n  },\n  "minimum-stability": "dev",\n  "prefer-stable": true\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"index.php")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nuse Laminas\\Diactoros\\Response;\nuse Laminas\\Diactoros\\ServerRequest;\nuse Laminas\\Diactoros\\ServerRequestFactory;\nuse Zend\\HttpHandlerRunner\\Emitter\\SapiStreamEmitter;\nuse Zend\\Stratigility\\Middleware\\ErrorResponseGenerator;\nuse Zend\\Stratigility\\MiddlewarePipe;\nuse Laminas\\Diactoros\\Server;\nuse Zend\\HttpHandlerRunner\\RequestHandlerRunner;\n\nrequire_once __DIR__ . '/vendor/autoload.php';\n\n$container = require 'config/container.php';\n\n$serverRequestFactory = [ServerRequestFactory::class, 'fromGlobals'];\n\n$errorResponseGenerator = function (Throwable $e) {\n    $generator = new ErrorResponseGenerator();\n    return $generator($e, new ServerRequest(), new Response());\n};\n\n$runner = new RequestHandlerRunner(\n    $container->get(MiddlewarePipe::class),\n    new SapiStreamEmitter(),\n    $serverRequestFactory,\n    $errorResponseGenerator\n);\n$runner->run();\n")),(0,o.kt)("p",null,"Here we are initializing a Zend ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestHandler")," (it receives requests) and we pass it to a Zend Stratigility ",(0,o.kt)("inlineCode",{parentName:"p"},"MiddlewarePipe"),".\nThis ",(0,o.kt)("inlineCode",{parentName:"p"},"MiddlewarePipe")," comes from the container declared in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config/container.php")," file:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"config/container.php")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nuse GraphQL\\Type\\Schema;\nuse Mouf\\Picotainer\\Picotainer;\nuse Psr\\Container\\ContainerInterface;\nuse Psr\\SimpleCache\\CacheInterface;\nuse Symfony\\Component\\Cache\\Simple\\ApcuCache;\nuse TheCodingMachine\\GraphQLite\\Http\\Psr15GraphQLMiddlewareBuilder;\nuse TheCodingMachine\\GraphQLite\\SchemaFactory;\nuse Zend\\Stratigility\\MiddlewarePipe;\n\n// Picotainer is a minimalist PSR-11 container.\nreturn new Picotainer([\n    MiddlewarePipe::class => function(ContainerInterface $container) {\n        $pipe = new MiddlewarePipe();\n        $pipe->pipe($container->get(WebonyxGraphqlMiddleware::class));\n        return $pipe;\n    },\n    // The WebonyxGraphqlMiddleware is a PSR-15 compatible\n    // middleware that exposes Webonyx schemas.\n    WebonyxGraphqlMiddleware::class => function(ContainerInterface $container) {\n        $builder = new Psr15GraphQLMiddlewareBuilder($container->get(Schema::class));\n        return $builder->createMiddleware();\n    },\n    CacheInterface::class => function() {\n        return new ApcuCache();\n    },\n    Schema::class => function(ContainerInterface $container) {\n        // The magic happens here. We create a schema using GraphQLite SchemaFactory.\n        $factory = new SchemaFactory($container->get(CacheInterface::class), $container);\n        $factory->addControllerNamespace('App\\\\Controllers\\\\');\n        $factory->addTypeNamespace('App\\\\');\n        return $factory->createSchema();\n    }\n]);\n")),(0,o.kt)("p",null,"Now, we need to add a first query and therefore create a controller.\nThe application will look into the ",(0,o.kt)("inlineCode",{parentName:"p"},"App\\Controllers")," namespace for GraphQLite controllers."),(0,o.kt)("p",null,"It assumes that the container has an entry whose name is the controller's fully qualified class name."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"src/Controllers/MyController.php")),(0,o.kt)(i.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controllers;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass MyController\n{\n    #[Query]\n    public function hello(string $name): string\n    {\n        return 'Hello '.$name;\n    }\n}\n"))),(0,o.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controllers;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass MyController\n{\n    /**\n     * @Query\n     */\n    public function hello(string $name): string\n    {\n        return 'Hello '.$name;\n    }\n}\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"config/container.php")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use App\\Controllers\\MyController;\n\nreturn new Picotainer([\n    // ...\n\n    // We declare the controller in the container.\n    MyController::class => function() {\n        return new MyController();\n    },\n]);\n")),(0,o.kt)("p",null,"And we are done! You can now test your query using your favorite GraphQL client."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(46637).Z})))}m.isMDXComponent=!0},46637:function(e,n,r){n.Z=r.p+"assets/images/query1-5a22bbe2398efcc725ea571a07ff2c9b.png"}}]);