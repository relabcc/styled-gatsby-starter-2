(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{373:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(388);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},378:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),i=n(1),o=n.n(i),c=n(69),l=n.n(c);n.d(t,"a",function(){return l.a}),n.d(t,"c",function(){return c.withPrefix});n(379);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},379:function(e,t,n){var a;e.exports=(a=n(382))&&a.default||a},380:function(e,t,n){"use strict";n(18);var a=n(173),r=n.n(a),i=n(7),o=n.n(i),c=n(0),l=n.n(c),s=n(1),u=n.n(s),d=n(29),p=n(8),m=n(112),f=n.n(m),h=n(378),g=n(111),b=n(381),y=Object(d.c)([""," "," "," "," "," "," "," text-decoration:none;"," &:hover{",";}"],p.h,p.o,p.d,p.i,p.l,p.k,p.e,function(e){return e.disabled&&"\n    pointer-events: none;\n  "},Object(b.a)("hoverColor")),v=Object(d.d)(f.a).withConfig({displayName:"Link__NomalLink",componentId:"sc-53k5wg-0"})(["",""],y),E=Object(d.d)(h.a).withConfig({displayName:"Link__GatsbyStyledLink",componentId:"sc-53k5wg-1"})(["",""],y),x=function(e){var t=e.to,n=(e.button,e.blacklist),a=r()(e,["to","button","blacklist"]);return t?l.a.createElement(E,Object.assign({to:t},a)):l.a.createElement(v,Object.assign({is:"a",target:"_blank",blacklist:n},a))};x.displayName="Link",x.defaultProps={blacklist:g.a,fontWeight:"bold"};var j=x,O=n(71),k=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.to,n=e.children,a=r()(e,["to","children"]),i=this.context.locale,o=i?"/"+i+t:""+t;return l.a.createElement(j,Object.assign({to:o},a),n)},t}(c.PureComponent);k.propTypes={to:u.a.string.isRequired,children:u.a.node.isRequired},k.contextType=O.a;t.a=k},381:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(8),r=function(e,t){return void 0===t&&(t="color"),Object(a.p)({prop:e,cssProperty:t,key:"colors"})}},382:function(e,t,n){"use strict";n.r(t);n(18);var a=n(0),r=n.n(a),i=n(1),o=n.n(i),c=n(113),l=n(4),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},383:function(e,t,n){"use strict";var a=n(8),r=n(29),i=n(110),o=n(111),c=Object(r.d)(i.a).withConfig({displayName:"Flex",componentId:"sc-1wakzhz-0"})(["",""],a.g);c.defaultProps={display:"flex",blacklist:o.a},c.displayName="Flex",t.a=c},384:function(e,t,n){"use strict";n(392),n(18);var a=n(0),r=n.n(a),i=n(29),o=n(78),c=n.n(o),l=n(8),s=n(112),u=n.n(s),d=n(111),p=n(46),m=Object(i.d)(u.a).withConfig({displayName:"Text",componentId:"sc-1vna78b-0"})(["margin-top:0;margin-bottom:0;"," "," "," "," "," ",""],l.q,l.e,l.o,l.d,l.n,Object(p.a)("textTransform"));m.defaultProps={is:"p",fontSize:"1em",blacklist:d.a},m.inline=function(e){return r.a.createElement(m,Object.assign({is:"span"},e))},m.bold=function(e){return r.a.createElement(m,Object.assign({fontWeight:"bold"},e))},m.thin=function(e){return r.a.createElement(m,Object.assign({fontWeight:"200"},e))},c()(1,7).forEach(function(e){var t="h"+e;m[t]=function(n){return r.a.createElement(m,Object.assign({is:t,fontSize:1+.125*(6-e)+"em"},n))}}),m.displayName="Text",t.a=m},385:function(e){e.exports={data:{site:{siteMetadata:{title:"Styled Gatsby Starter",description:"Styled Components + Styled System is cool!",url:"https://relabcc.github.io/styled-gatsby-starter-2"}}}}},388:function(e,t,n){"use strict";var a=n(385),r=n(0),i=n.n(r),o=n(1),c=n.n(o),l=n(391),s=n.n(l),u=n(378),d=n(70),p=n(110),m=n(30),f=(n(18),n(173)),h=n.n(f),g=n(383),b=n(384),y=n(380),v=n(7),E=n.n(v),x=n(71),j=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={value:""},t.handleChange=function(e){var n=t.context.changeLocale,a=e.target.value;a!==t.state.value&&t.setState({value:a},function(){n(a)})},t}E()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.context,t=e.locale,n=e.detected;this.setState({value:t||n})},n.render=function(){var e=this.context.languages,t=this.state.value;return t?i.a.createElement("select",{value:t,onChange:this.handleChange},e.map(function(e){var t=e.value,n=e.text;return i.a.createElement("option",{key:t,value:t},n)})):null},t}(r.Component);j.contextType=x.a;var O=j,k=function(e){var t=e.siteTitle,n=h()(e,["siteTitle"]);return i.a.createElement(g.a,Object.assign({position:"fixed",bg:"primary",top:0,left:0,right:0,alignItems:"center",zOrder:2},n),i.a.createElement(p.a,{px:"1em",flex:1},i.a.createElement(b.a.h1,null,i.a.createElement(y.a,{to:"/",color:"white"},t))),i.a.createElement(p.a,{px:"1em"},i.a.createElement(O,null)))},S=Object(d.d)({title:{id:"siteMetadata.title",defaultMessage:"Gatsby Styled Starter"},description:{id:"siteMetadata.description",defaultMessage:"Styled Components + Styled System is cool!"}}),w=function(e){var t=e.children,n=e.noHeader,r=e.intl;return i.a.createElement(u.b,{query:"2669241669",render:function(e){var a=e.site.siteMetadata,o=S.title?r.formatMessage(S.title):a.title,c=S.description?r.formatMessage(S.description):a.description;return i.a.createElement("div",null,i.a.createElement(s.a,null,i.a.createElement("html",{lang:r.locale}),i.a.createElement("title",null,o),i.a.createElement("meta",{name:"description",content:c}),i.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:Object(u.c)("/apple-touch-icon.png")}),i.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:Object(u.c)("/favicon-32x32.png")}),i.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:Object(u.c)("/favicon-16x16.png")}),i.a.createElement("link",{rel:"mask-icon",color:"#5bbad",href:Object(u.c)("/safari-pinned-tab.svg")}),i.a.createElement("meta",{name:"msapplication-TileColor",content:"#da532c"}),i.a.createElement("meta",{name:"theme-color",content:"#ffffff"}),i.a.createElement("meta",{property:"og:url",content:a.url}),i.a.createElement("meta",{property:"og:title",content:o}),i.a.createElement("meta",{property:"og:description",content:c}),i.a.createElement("meta",{property:"og:image",content:a.url+"/fb.png"})),!n&&i.a.createElement(k,{height:m.c.headerHeight,siteTitle:o}),i.a.createElement(p.a,{height:"100vh",pt:!n&&m.c.headerHeight},t))},data:a})};w.propTypes={children:c.a.node.isRequired};t.a=Object(d.e)(w)}}]);
//# sourceMappingURL=component---src-pages-404-js-359348a2a298e175af29.js.map