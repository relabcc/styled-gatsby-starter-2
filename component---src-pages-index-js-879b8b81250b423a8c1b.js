(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{370:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(425),i=n(67),c=n(385),l=(n(14),n(374)),s=n.n(l),u=n(1),d=n.n(u),p=n(380),m=n(106),f=n(24),h=n(2),g=n(108),b=n.n(g),y=n(378),v=n(107),E=Object(f.c)(["",";",";",";"],Object(y.a)("hoverColor"),Object(y.a)("hoverBg","backgroundColor"),Object(y.a)("hoverBorder","borderColor")),j=Object(f.c)(["padding:0;border:none;font-family:inherit;line-height:1;text-decoration:none;"," "," "," "," "," "," "," "," "," "," "," appearance:none;transition:all ","ms;cursor:pointer;&:hover,&:focus{"," outline:none;}"," ",""],h.display,h.fontSize,h.position,h.space,h.color,h.width,h.borders,h.borderColor,h.borderRadius,h.fontWeight,h.letterSpacing,Object(h.themeGet)("duration",250),function(e){return!e.disabled&&E},function(e){return e.active&&!e.disabled&&E},function(e){return e.disabled&&"\n    cursor: not-allowed;\n    opacity: 0.5;\n  "}),C=Object(f.d)(b.a).withConfig({displayName:"Button__ButtonBase",componentId:"onvwh0-0"})(["",""],j),x=function(e){return r.a.createElement(m.a,Object.assign({is:"span"},e))},O=function(e){var t=e.leftIcon,n=e.rightIcon,a=e.iconSpacing,o=e.children,i=e.verticalAlign,c=s()(e,["leftIcon","rightIcon","iconSpacing","children","verticalAlign"]);return r.a.createElement(C,c,t?r.a.createElement(x,{mr:a},t()):null,r.a.createElement(x,{verticalAlign:i},o),n?r.a.createElement(x,{ml:a},n()):null)};O.defaultProps={blacklist:v.a,is:"button",fontSize:"1.25em",border:"2px solid",borderColor:"primary",bg:"primary",color:"white",hoverColor:"primary",hoverBg:"white",px:"2.5em",py:"0.75em",fontWeight:"bold",iconSpacing:"0.25em",borderRadius:"0.25em",display:"inline-block",verticalAlign:"text-top"},O.displayName="Button",O.secondary=function(e){return r.a.createElement(O,Object.assign({bg:"secondary",borderColor:"secondary",hoverColor:"secondary"},e))},O.transparent=function(e){return r.a.createElement(O,Object.assign({border:"1px solid transparent",bg:"transparent",color:"text",hoverBorder:"primary"},e))};var k,w=O,R=n(381),S=n(43),T=n(116),P=n(63),I=n(427),N=n(428),z=n(429),M=Object(I.a)({INCREMENT:function(){return{amount:1}},DECREMENT:function(){return{amount:-1}}}),A=M.increment,q=M.decrement,W=Object(P.fromJS)({count:0}),B=Object(N.a)(((k={})[Object(z.a)(A,q)]=function(e,t){var n=t.payload.amount;return e.set("count",e.get("count")+n)},k),W),L=(n(414),n(7)),H=n.n(L),G=n(415),_=n.n(G),D=(n(418),n(4)),F=n.n(D),Q=n(419),J=n.n(Q),U=n(70),V=n.n(U),Y=n(420),K=n.n(Y),X=n(421),Z=n.n(X),$=n(13),ee=n.n($);function te(e){var t={dispatch:V.a,subscribe:V.a,getState:V.a,replaceReducer:V.a,injectedReducers:ee.a};F()(Z()(e,t),"(src/utils...) injectors: Expected a valid redux store")}var ne=n(151);function ae(e,t){return function(n,a){t||te(e),F()(K()(n)&&!J()(n)&&V()(a),"(src/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,n)&&e.injectedReducers[n]===a||(e.injectedReducers[n]=a,e.replaceReducer(Object(ne.a)(e.injectedReducers)))}}var re,oe,ie,ce=(oe=(re={key:"counter",reducer:B}).key,ie=re.reducer,function(e){var t=function(t){function n(){for(var e,n,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).injectors=(te(n=e.context.store),{injectReducer:ae(n,!0)}),e}H()(n,t);var a=n.prototype;return a.componentWillMount=function(){(0,this.injectors.injectReducer)(oe,ie)},a.render=function(){return r.a.createElement(e,this.props)},n}(r.a.Component);return t.WrappedComponent=e,t.contextType=T.b,t.displayName="withReducer("+(e.displayName||e.name||"Component")+")",_()(t,e)}),le=Object(T.c)(function(e){return{count:e.getIn(["counter","count"])}},function(e){return Object(S.a)({increment:A,decrement:q},e)}),se=Object(S.b)(ce,le),ue=function(e){var t=e.count,n=e.increment,a=e.decrement,o=s()(e,["count","increment","decrement"]);return r.a.createElement(p.a,Object.assign({alignItems:"center",my:"1em"},o),r.a.createElement(w,{onClick:a},"-"),r.a.createElement(m.a,{px:"1em"},r.a.createElement(R.a,{color:"primary",f:"2em"},t)),r.a.createElement(w,{onClick:n},"+"))};ue.propTypes={count:d.a.number,increment:d.a.func,decrement:d.a.func};var de=se(ue),pe=n(390),me=function(e){var t=e.children,n=e.border,a=e.borderColor,o=e.bg,i=e.is,c=s()(e,["children","border","borderColor","bg","is"]);return r.a.createElement(m.a,c,r.a.createElement(m.a,{position:"relative",pt:"100%"},r.a.createElement(m.a,{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",width:1,borderRadius:"50%",border:n,borderColor:a,bg:o,is:i},r.a.createElement(m.a,{top:"50%",left:"50%",transform:"translate(-50%, -50%)",position:"absolute",lineHeight:"0"},t))))};me.propTypes={children:d.a.node,border:d.a.string,borderColor:d.a.string,bg:d.a.string,is:d.a.oneOfType([d.a.string,d.a.func])},me.displayName="Circle";var fe=me,he=Object(f.d)(m.a).withConfig({displayName:"BackgroundImage",componentId:"sc-1yvvs87-0"})(["position:relative;background-image:url(",");background-size:",";background-position:",";background-repeat:no-repeat;",""],function(e){return e.src},function(e){return e.size},function(e){return e.backgroundPosition},function(e){return e.height?"":Object(h.ratio)(e)});he.propTypes={src:d.a.string,size:d.a.string,position:d.a.string},he.defaultProps={ratio:1,size:"cover",backgroundPosition:"50% 50%"},he.displayName="BackgroundImage";var ge=he,be=n(423),ye=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={},t.handleContainerRef=function(e){t.containerRef=e},t.handleResize=function(e){var n=t.state.shouldCenter,a=void 0!==t.containerRef&&t.containerRef.getBoundingClientRect().height>e.bounds.height;t.count+=1,t.setState({shouldCenter:t.count>4?n:a},function(){t.props.onAlignChange(t.state.shouldCenter)})},t.clearCount=function(){t.count=0},t}H()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.timer=setInterval(this.clearCount,200),this.count=0},n.componentWillUnmount=function(){clearInterval(this.timer)},n.render=function(){var e=this.props,t=e.children,n=(e.onAlignChange,s()(e,["children","onAlignChange"])),a=this.state.shouldCenter;return r.a.createElement(m.a,Object.assign({position:"relative",height:"100%",ref:this.handleContainerRef},n),r.a.createElement(be.a,{bounds:!0,onResize:this.handleResize},function(e){var n=e.measureRef;return r.a.createElement(m.a,{position:a&&"absolute",top:a?"50%":0,width:1,transform:a&&"translateY(-50%)",ref:n},V()(t)?t(a):t)}))},t}(a.PureComponent);ye.displayName="VerticalCenter",ye.propTypes={onAlignChange:d.a.func},ye.defaultProps={onAlignChange:function(){}};var ve=ye,Ee=n(25),je=n(377),Ce="HomePage",xe=Object(i.d)({header:{id:Ce+".header",defaultMessage:"Styled Components + Styled System 超方便！"},about:{id:Ce+".buttons.about",defaultMessage:"關於"},good:{id:Ce+".buttons.good",defaultMessage:"範例Button"},bad:{id:Ce+".buttons.bad",defaultMessage:"不可點"}}),Oe=function(){return r.a.createElement(c.a,null,r.a.createElement(ve,null,r.a.createElement(pe.a,{py:Object(Ee.d)(0,"2em")},r.a.createElement(p.a,null,r.a.createElement(R.a,null,r.a.createElement(i.a,xe.header)),r.a.createElement(fe,{width:"2em",bg:"blue",color:"white",display:"inline-block",mx:"1em",verticalAlign:"middle"},r.a.createElement(o.a,null))),r.a.createElement(de,null),r.a.createElement(ge,{my:"2em",src:"https://loremflickr.com/1920/1080",ratio:9/16}),r.a.createElement(m.a,{mx:"-1em"},r.a.createElement(w,{m:"0.5em",is:je.a,to:"/about"},r.a.createElement(i.a,xe.about)),r.a.createElement(w.secondary,{m:"0.5em"},r.a.createElement(i.a,xe.good)),r.a.createElement(w,{m:"0.5em",disabled:!0},r.a.createElement(i.a,xe.bad))))))};t.default=Oe},375:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(1),i=n.n(o),c=n(373),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(376),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(68);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},376:function(e,t,n){var a;e.exports=(a=n(379))&&a.default||a},377:function(e,t,n){"use strict";n(14);var a=n(374),r=n.n(a),o=n(7),i=n.n(o),c=n(0),l=n.n(c),s=n(1),u=n.n(s),d=n(24),p=n(2),m=n(108),f=n.n(m),h=n(375),g=n(107),b=n(378),y=Object(d.c)([""," "," "," "," "," "," "," text-decoration:none;"," &:hover{",";}"],p.fontSize,p.space,p.color,p.fontWeight,p.lineHeight,p.letterSpacing,p.display,function(e){return e.disabled&&"\n    pointer-events: none;\n  "},Object(b.a)("hoverColor")),v=Object(d.d)(f.a).withConfig({displayName:"Link__NomalLink",componentId:"sc-53k5wg-0"})(["",""],y),E=Object(d.d)(h.Link).withConfig({displayName:"Link__GatsbyStyledLink",componentId:"sc-53k5wg-1"})(["",""],y),j=function(e){var t=e.to,n=(e.button,e.blacklist),a=r()(e,["to","button","blacklist"]);return t?l.a.createElement(E,Object.assign({to:t},a)):l.a.createElement(v,Object.assign({is:"a",target:"_blank",blacklist:n},a))};j.displayName="Link",j.defaultProps={blacklist:g.a,fontWeight:"bold"};var C=j,x=n(69),O=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.to,n=e.children,a=r()(e,["to","children"]),o=this.context.locale,i=o?"/"+o+t:""+t;return l.a.createElement(C,Object.assign({to:i},a),n)},t}(c.PureComponent);O.propTypes={to:u.a.string.isRequired,children:u.a.node.isRequired},O.contextType=x.a;t.a=O},378:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(2),r=function(e,t){return void 0===t&&(t="color"),Object(a.style)({prop:e,cssProperty:t,key:"colors"})}},379:function(e,t,n){"use strict";n.r(t);n(14);var a=n(0),r=n.n(a),o=n(1),i=n.n(o),c=n(110),l=n(5),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},380:function(e,t,n){"use strict";var a=n(2),r=n(24),o=n(106),i=n(107),c=Object(r.d)(o.a).withConfig({displayName:"Flex",componentId:"sc-1wakzhz-0"})([""," "," "," ",""],a.alignItems,a.justifyContent,a.flexDirection,a.flexWrap);c.defaultProps={display:"flex",blacklist:i.a},c.displayName="Flex",t.a=c},381:function(e,t,n){"use strict";n(109),n(14);var a=n(0),r=n.n(a),o=n(24),i=n(76),c=n.n(i),l=n(2),s=n(108),u=n.n(s),d=n(107),p=n(32),m=Object(o.d)(u.a).withConfig({displayName:"Text",componentId:"sc-1vna78b-0"})(["margin-top:0;margin-bottom:0;"," "," "," "," "," "," "," "," "," "," "," ",""],l.display,l.fontSize,l.space,l.color,l.textAlign,l.fontWeight,l.fontFamily,l.lineHeight,l.letterSpacing,l.position,Object(p.a)("verticalAlign"),Object(p.a)("textTransform"));m.defaultProps={is:"p",fontSize:"1em",lineHeight:1.5,blacklist:d.a},m.inline=function(e){return r.a.createElement(m,Object.assign({is:"span"},e))},m.bold=function(e){return r.a.createElement(m,Object.assign({fontWeight:"bold"},e))},m.thin=function(e){return r.a.createElement(m,Object.assign({fontWeight:"200"},e))},m.dosis=function(e){return r.a.createElement(m,Object.assign({fontFamily:"Dosis"},e))},c()(1,7).forEach(function(e){var t="h"+e;m[t]=function(n){return r.a.createElement(m,Object.assign({is:t,fontSize:1+.125*(6-e)+"em"},n))}}),m.displayName="Text",t.a=m},382:function(e){e.exports={data:{site:{siteMetadata:{url:"https://relabcc.github.io/styled-gatsby-starter-2"}}}}},385:function(e,t,n){"use strict";var a=n(382),r=n(0),o=n.n(r),i=n(1),c=n.n(i),l=n(389),s=n.n(l),u=n(375),d=n(67),p=(n(14),n(374)),m=n.n(p),f=n(106),h=n(380),g=n(381),b=n(377),y=n(7),v=n.n(y),E=n(69),j=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={value:""},t.handleChange=function(e){var n=t.context.changeLocale,a=e.target.value;a!==t.state.value&&t.setState({value:a},function(){n(a)})},t}v()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.context,t=e.locale,n=e.detected;this.setState({value:t||n})},n.render=function(){var e=this.context.languages,t=this.state.value;return t?o.a.createElement("select",{value:t,onChange:this.handleChange},e.map(function(e){var t=e.value,n=e.text;return o.a.createElement("option",{key:t,value:t},n)})):null},t}(r.Component);j.contextType=E.a;var C=j,x=function(e){var t=e.siteTitle,n=m()(e,["siteTitle"]);return o.a.createElement(h.a,Object.assign({position:"fixed",bg:"primary",top:0,left:0,right:0,alignItems:"center",zOrder:2},n),o.a.createElement(f.a,{px:"1em",flex:1},o.a.createElement(g.a.h1,null,o.a.createElement(b.a,{to:"/",color:"white"},t))),o.a.createElement(f.a,{px:"1em"},o.a.createElement(C,null)))},O=n(25),k=Object(d.d)({title:{id:"siteMetadata.title",defaultMessage:"Gatsby Styled Starter"},description:{id:"siteMetadata.description",defaultMessage:"Styled Components + Styled System is cool!"}}),w=function(e){var t=e.children,n=e.noHeader,r=e.intl;return o.a.createElement(u.StaticQuery,{query:"399879538",render:function(e){var a=e.site.siteMetadata.url,i=r.formatMessage(k.title),c=r.formatMessage(k.description);return o.a.createElement("div",null,o.a.createElement(s.a,null,o.a.createElement("html",{lang:r.locale}),o.a.createElement("title",null,i),o.a.createElement("meta",{name:"description",content:c}),o.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:Object(u.withPrefix)("/apple-touch-icon.png")}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:Object(u.withPrefix)("/favicon-32x32.png")}),o.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:Object(u.withPrefix)("/favicon-16x16.png")}),o.a.createElement("link",{rel:"mask-icon",color:"#5bbad",href:Object(u.withPrefix)("/safari-pinned-tab.svg")}),o.a.createElement("meta",{name:"msapplication-TileColor",content:"#da532c"}),o.a.createElement("meta",{name:"theme-color",content:"#ffffff"}),o.a.createElement("meta",{property:"og:url",content:a}),o.a.createElement("meta",{property:"og:title",content:i}),o.a.createElement("meta",{property:"og:description",content:c}),o.a.createElement("meta",{property:"og:image",content:a+"/fb.png"})),!n&&o.a.createElement(x,{height:O.c.headerHeight,siteTitle:i}),o.a.createElement(f.a,{height:"100vh",pt:!n&&O.c.headerHeight},t))},data:a})};w.propTypes={children:c.a.node.isRequired};t.a=Object(d.e)(w)},390:function(e,t,n){"use strict";var a=n(2),r=n(24),o=n(106),i=n(25),c=Object(r.d)(o.a).withConfig({displayName:"Container",componentId:"fuc9tj-0"})(["",""],a.maxWidth);c.defaultProps={mx:"auto",px:["1em",null,"2em"],width:1,maxWidth:i.b},c.displayName="Container",t.a=c}}]);
//# sourceMappingURL=component---src-pages-index-js-879b8b81250b423a8c1b.js.map