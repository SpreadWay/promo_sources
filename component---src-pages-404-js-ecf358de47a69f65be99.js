(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{137:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(148);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},142:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return d}),a.d(t,"StaticQueryContext",function(){return h}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),c=a(141),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var o=a(143),m=a.n(o);a.d(t,"PageRenderer",function(){return m.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var h=r.a.createContext({}),p=function(e){return r.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function d(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},143:function(e,t,a){var n;e.exports=(n=a(145))&&n.default||n},144:function(e){e.exports={data:{site:{siteMetadata:{title:"Spread"}}}}},145:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),c=a(48),l=a(2),o=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=o},146:function(e,t,a){},148:function(e,t,a){"use strict";var n=a(144),r=a(0),i=a.n(r),s=a(4),c=a.n(s),l=a(149),o=a.n(l),m=a(142),u=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{display:"none",background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(m.Link,{to:"/",style:{}},t))))},h=(a(146),function(e){var t=e.children;return i.a.createElement(m.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"}),i.a.createElement("meta",{httpEquiv:"X-UA-Compatible"}),i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("meta",{content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",name:"viewport"}),i.a.createElement("title",null,"Spread"),i.a.createElement("link",{href:"/stylesheets/site.css",rel:"stylesheet"}),i.a.createElement("link",{href:"//fonts.googleapis.com/css?family=Lato:300,400",rel:"stylesheet",type:"text/css"}),i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("meta",{httpEquiv:"content-language",content:"en"}),i.a.createElement("meta",{name:"viewport",content:"initial-scale=1.0, user-scalable=yes"}),i.a.createElement("meta",{name:"description",content:"Spread"}),i.a.createElement("meta",{content:"IE=edge,chrome=1",httpEquiv:"X-UA-Compatible"}),i.a.createElement("link",{href:"/stylesheets/bootstrap.css",rel:"stylesheet"}),i.a.createElement("link",{href:"/stylesheets/font-awesome.css",rel:"stylesheet"}),i.a.createElement("link",{rel:"stylesheet",href:"https://gitcoin.co/static/v2/css/gitcoin.css"}),i.a.createElement("link",{rel:"stylesheet",href:"https://gitcoin.co/static/v2/css/base.css"}),i.a.createElement("link",{rel:"stylesheet",href:"https://gitcoin.co/static/v2/css/jquery-ui.css"}),i.a.createElement("link",{rel:"stylesheet",href:"https://gitcoin.co/static/v2/css/jquery.modal.min.css"}),i.a.createElement("link",{rel:"stylesheet",href:"https://gitcoin.co/static/v2/css/jquery.select2.min.css"}),i.a.createElement("link",{rel:"stylesheet",href:"https://gitcoin.co/static/v2/css/animate.min.css"}),i.a.createElement("link",{rel:"stylesheet",href:"https://gitcoin.co/static/v2/css/rain.css"}),i.a.createElement("link",{rel:"stylesheet",href:"https://gitcoin.co/static/v2/css/buttons.css"}),i.a.createElement("link",{rel:"stylesheet",href:"https://gitcoin.co/static/v2/css/timeline.css"}),i.a.createElement("link",{rel:"stylesheet",href:"https://gitcoin.co/static/v2/css/carousel.css"}),i.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"/stylesheets/site.css"}),i.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),i.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/images/favicons/favicon-32x32.png"}),i.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/images/favicons/favicon-16x16.png"}),i.a.createElement("link",{rel:"manifest",href:"/manifest.json"}),i.a.createElement("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#5bbad5"}),i.a.createElement("meta",{name:"theme-color",content:"#ffffff"}),i.a.createElement("link",{rel:"shortcut icon",href:"/images/favicons/favicon.ico"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=latin,cyrillic",rel:"stylesheet"}),i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"})),i.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})});h.propTypes={children:c.a.node.isRequired};t.a=h}}]);
//# sourceMappingURL=component---src-pages-404-js-ecf358de47a69f65be99.js.map