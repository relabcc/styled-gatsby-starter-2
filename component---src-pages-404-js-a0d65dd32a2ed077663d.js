(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{324:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(337);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},330:function(e,t,n){var a;e.exports=(a=n(336))&&a.default||a},331:function(e,t,n){"use strict";n(20);var a=n(329),r=n.n(a),i=n(0),o=n.n(i),c=n(21),l=n(2),s=n(91),u=n.n(s),p=n(328),d=n.n(p),f=n(92),m=n(334),g=Object(c.b)([""," "," "," "," "," "," "," text-decoration:none;"," &:hover{",";}"],l.fontSize,l.space,l.color,l.fontWeight,l.lineHeight,l.letterSpacing,l.display,function(e){return e.disabled&&"\n    pointer-events: none;\n  "},Object(m.a)("hoverColor")),h=Object(c.c)(u.a).withConfig({displayName:"Link__NomalLink",componentId:"sc-53k5wg-0"})(["",""],g),b=Object(c.c)(d.a).withConfig({displayName:"Link__GatsbyStyledLink",componentId:"sc-53k5wg-1"})(["",""],g),y=function(e){var t=e.to,n=(e.button,e.blacklist),a=r()(e,["to","button","blacklist"]);return t?o.a.createElement(b,Object.assign({to:t},a)):o.a.createElement(h,Object.assign({is:"a",target:"_blank",blacklist:n},a))};y.displayName="Link",y.defaultProps={blacklist:f.a,fontWeight:"bold"},t.a=y},332:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(1),o=n.n(i),c=n(328),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(330),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var p=n(59);n.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},333:function(e,t,n){"use strict";n(93),n(145),n(20);var a=n(0),r=n.n(a),i=n(21),o=n(62),c=n.n(o),l=n(2),s=n(91),u=n.n(s),p=n(92),d=n(13),f=Object(i.c)(u.a).withConfig({displayName:"Text",componentId:"sc-1vna78b-0"})(["margin-top:0;margin-bottom:0;"," "," "," "," "," "," "," "," "," "," "," ",""],l.display,l.fontSize,l.space,l.color,l.textAlign,l.fontWeight,l.fontFamily,l.lineHeight,l.letterSpacing,l.position,Object(d.a)("verticalAlign"),Object(d.a)("textTransform"));f.defaultProps={is:"p",fontSize:"1em",lineHeight:1.5,blacklist:p.a},f.inline=function(e){return r.a.createElement(f,Object.assign({is:"span"},e))},f.bold=function(e){return r.a.createElement(f,Object.assign({fontWeight:"bold"},e))},f.thin=function(e){return r.a.createElement(f,Object.assign({fontWeight:"200"},e))},f.dosis=function(e){return r.a.createElement(f,Object.assign({fontFamily:"Dosis"},e))},c()(1,7).forEach(function(e){var t="h"+e;f[t]=function(n){return r.a.createElement(f,Object.assign({is:t,fontSize:1+.125*(6-e)+"em"},n))}}),f.displayName="Text",t.a=f},334:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(2),r=function(e,t){return void 0===t&&(t="color"),Object(a.style)({prop:e,cssProperty:t,key:"colors"})}},335:function(e){e.exports={data:{site:{siteMetadata:{title:"Styled Gatsby Starter",description:"Styled Components + Styled System is cool!",url:"https://relabcc.github.io/styled-gatsby-starter-v2"}}}}},336:function(e,t,n){"use strict";n.r(t);n(20);var a=n(0),r=n.n(a),i=n(1),o=n.n(i),c=n(94),l=n(4),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},337:function(e,t,n){"use strict";var a=n(335),r=n(0),i=n.n(r),o=n(1),c=n.n(o),l=n(338),s=n.n(l),u=n(332),p=n(328),d=(n(20),n(329)),f=n.n(d),m=n(90),g=n(2),h=n(21),b=Object(h.c)(m.a).withConfig({displayName:"Flex",componentId:"sc-1wakzhz-0"})([""," "," "," ",""],g.alignItems,g.justifyContent,g.flexDirection,g.flexWrap);b.defaultProps={display:"flex"},b.displayName="Flex";var y=b,E=n(333),v=n(331),x=function(e){var t=e.siteTitle,n=f()(e,["siteTitle"]);return i.a.createElement(y,Object.assign({position:"fixed",bg:"primary",top:0,left:0,right:0,alignItems:"center",zOrder:2},n),i.a.createElement(m.a,{px:"1em"},i.a.createElement(E.a.h1,null,i.a.createElement(v.a,{to:"/",color:"white"},t))))},j=n(38),w=function(e){var t=e.children;return i.a.createElement(u.StaticQuery,{query:"4209995673",render:function(e){var n=e.site.siteMetadata,a=n.title,r=n.description,o=n.url;return i.a.createElement("div",null,i.a.createElement(s.a,null,i.a.createElement("html",{lang:"zh-Hant"}),i.a.createElement("title",null,a),i.a.createElement("meta",{name:"description",content:r}),i.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:Object(p.withPrefix)("/apple-touch-icon.png")}),i.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:Object(p.withPrefix)("/favicon-32x32.png")}),i.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:Object(p.withPrefix)("/favicon-16x16.png")}),i.a.createElement("link",{rel:"mask-icon",color:"#5bbad",href:Object(p.withPrefix)("/safari-pinned-tab.svg")}),i.a.createElement("meta",{name:"msapplication-TileColor",content:"#da532c"}),i.a.createElement("meta",{name:"theme-color",content:"#ffffff"}),i.a.createElement("meta",{property:"og:url",content:o}),i.a.createElement("meta",{property:"og:title",content:a}),i.a.createElement("meta",{property:"og:description",content:r}),i.a.createElement("meta",{property:"og:image",content:o+"/fb.png"})),i.a.createElement(x,{height:j.b.headerHeight,siteTitle:a}),i.a.createElement(m.a,{height:"100vh",pt:j.b.headerHeight},t))},data:a})};w.propTypes={children:c.a.node.isRequired};t.a=w}}]);
//# sourceMappingURL=component---src-pages-404-js-a0d65dd32a2ed077663d.js.map