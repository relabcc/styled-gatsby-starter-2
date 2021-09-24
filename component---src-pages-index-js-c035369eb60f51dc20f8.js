"use strict";(self.webpackChunkstyled_gatsby_starter=self.webpackChunkstyled_gatsby_starter||[]).push([[678],{1046:function(t,e,A){A.d(e,{w_:function(){return u}});var n=A(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(r),i=function(){return i=Object.assign||function(t){for(var e,A=1,n=arguments.length;A<n;A++)for(var r in e=arguments[A])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},i.apply(this,arguments)},o=function(t,e){var A={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(A[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(A[n[r]]=t[n[r]])}return A};function c(t){return t&&t.map((function(t,e){return n.createElement(t.tag,i({key:e},t.attr),c(t.child))}))}function u(t){return function(e){return n.createElement(f,i({attr:i({},t.attr)},e),c(t.child))}}function f(t){var e=function(e){var A,r=t.attr,a=t.size,c=t.title,u=o(t,["attr","size","title"]),f=a||e.size||"1em";return e.className&&(A=e.className),t.className&&(A=(A?A+" ":"")+t.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,r,u,{className:A,style:i(i({color:t.color||e.color},e.style),t.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),t.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(t){return e(t)})):e(r)}},8728:function(t,e,A){A.r(e),A.d(e,{default:function(){return O}});var n=A(7294),r=A(3201),a=A(7317),i=A(7690),o=A(2359),c=A(6810),u=A(3347),f=A(9370),s=A(4038),l=A(1531),d=A(2755),h=A(6425),p=A(3431),g=["href"],w=function(t){var e=t.href,A=(0,l.Z)(t,g);return e?(0,p.tZ)(d.z,(0,s.Z)({as:function(t){return(0,p.tZ)(h.Z,(0,s.Z)({},t,{href:e}))}},A)):(0,p.tZ)(d.z,A)};w.defaultProps={colorScheme:"blue"},w.Secondary=function(t){return(0,p.tZ)(w,(0,s.Z)({colorScheme:"green"},t))},w.Danger=function(t){return(0,p.tZ)(w,(0,s.Z)({colorScheme:"red"},t))};var m=w;var E=function(t){(0,n.useEffect)(t,[])},b=function(t){var e=(0,n.useRef)(t);e.current=t,E((function(){return function(){return e.current()}}))},v=function(t){var e=(0,n.useRef)(0),A=(0,n.useState)(t),r=A[0],a=A[1],i=(0,n.useCallback)((function(t){cancelAnimationFrame(e.current),e.current=requestAnimationFrame((function(){a(t)}))}),[]);return b((function(){cancelAnimationFrame(e.current)})),[r,i]},Z=function(){};var j="undefined"!=typeof window,y=function(t,e){void 0===t&&(t=1/0),void 0===e&&(e=1/0);var A=v({width:j?window.innerWidth:t,height:j?window.innerHeight:e}),r=A[0],a=A[1];return(0,n.useEffect)((function(){if(j){var t=function(){a({width:window.innerWidth,height:window.innerHeight})};return function(t){for(var e=[],A=1;A<arguments.length;A++)e[A-1]=arguments[A];t&&t.addEventListener&&t.addEventListener.apply(t,e)}(window,"resize",t),function(){!function(t){for(var e=[],A=1;A<arguments.length;A++)e[A-1]=arguments[A];t&&t.removeEventListener&&t.removeEventListener.apply(t,e)}(window,"resize",t)}}}),[]),r},x=j?n.useLayoutEffect:n.useEffect,Q={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};var B,R=j&&void 0!==window.ResizeObserver?function(){var t=(0,n.useState)(null),e=t[0],A=t[1],r=(0,n.useState)(Q),a=r[0],i=r[1],o=(0,n.useMemo)((function(){return new window.ResizeObserver((function(t){if(t[0]){var e=t[0].contentRect,A=e.x,n=e.y,r=e.width,a=e.height,o=e.top,c=e.left,u=e.bottom,f=e.right;i({x:A,y:n,width:r,height:a,top:o,left:c,bottom:u,right:f})}}))}),[]);return x((function(){if(e)return o.observe(e),function(){o.disconnect()}}),[e]),[A,a]}:function(){return[Z,Q]},C=A(3941),S=A(4774),N=A(1716),D=["children"],Y=function(t){var e,A,r=t.children,a=(0,l.Z)(t,D),i=(0,n.useContext)(N.Z),o=i.hideHeader,c=i.headerHeight,u=y(),f=R(),d=f[0],h=f[1].height,g=(0,n.useMemo)((function(){return h<u.height}),[h,u.height]);return(0,p.tZ)(C.Z,(0,s.Z)({height:"100vh",mt:!o&&(0,S.go)(B||(e=["-",""],A||(A=e.slice(0)),e.raw=A,B=e),c),pt:!o&&c},a),(0,p.tZ)(C.Z,{position:"relative",height:"100%"},(0,p.tZ)(C.Z,{position:g?"absolute":"static",top:"50%",width:"100%",transform:g&&"translateY(-50%)",ref:d},r)))},O=function(){return(0,p.tZ)(Y,null,(0,p.tZ)(c.ZP,{as:a.Kq,py:(0,S.jW)(0,"2em")},(0,p.tZ)(u.Z,{alignItems:"center"},(0,p.tZ)(f.Z,{fontSize:(0,S.jW)("1em","1.5em"),color:(0,S.jW)("red.400","green.500","blue.500","purple.500")},"Styled Components + Styled System 超方便！",(0,p.tZ)(S.pU,{at:"mobile"},"Mobile"),(0,p.tZ)(S.pU,{at:"tablet"},"Tablet"),(0,p.tZ)(S.pU,{at:"laptop"},"Laptop"),(0,p.tZ)(S.pU,{greaterThan:"laptop"},"Desktop")),(0,p.tZ)(i.Cd,{size:"2em",bg:"primary",color:"white",mx:"1em"},(0,p.tZ)(r.spm,null))),(0,p.tZ)(o.S,{alt:"Homepage",src:"../../images/1920x1080.jpg",__imageData:A(2734)}),(0,p.tZ)(a.Ug,{spacing:"1em"},(0,p.tZ)(m,{as:h.Z,to:"/about"},"關於"),(0,p.tZ)(m.Secondary,{rightIcon:(0,p.tZ)(r.spm,null)},"範例Button"),(0,p.tZ)(m,{disabled:!0},"不可點"))))}},2734:function(t){t.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMCBAX/xAAWAQEBAQAAAAAAAAAAAAAAAAABAAL/2gAMAwEAAhADEAAAAWMyGFfImj//xAAZEAADAQEBAAAAAAAAAAAAAAAAAQIDExT/2gAIAQEAAQUCndyPaUenIRjTVc4P/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQMBAT8Bh//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/Aaf/xAAfEAABAwMFAAAAAAAAAAAAAAAAAREhAhASIzEyQVH/2gAIAQEABj8C1EYmmPTa2LwvRxQ//8QAHRAAAgIBBQAAAAAAAAAAAAAAAAERQSExUWFx8f/aAAgBAQABPyF4oG6kWXKI5pnqQxuqHlH/2gAMAwEAAgADAAAAEFcP/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERQf/aAAgBAwEBPxB6RT//xAAXEQADAQAAAAAAAAAAAAAAAAAAASFR/9oACAECAQE/EFtEP//EABwQAQEAAgMBAQAAAAAAAAAAAAERADEhQYGR4f/aAAgBAQABPxC8D6R+jDbTXwn24hDQdlxsHK7+ZeCDQq8cq1rj/9k="},"images":{"fallback":{"src":"/static/f6f3fadb0ed895c1148b06ed093a9a47/a764f/1920x1080.jpg","srcSet":"/static/f6f3fadb0ed895c1148b06ed093a9a47/fb67e/1920x1080.jpg 480w,\\n/static/f6f3fadb0ed895c1148b06ed093a9a47/3059d/1920x1080.jpg 960w,\\n/static/f6f3fadb0ed895c1148b06ed093a9a47/a764f/1920x1080.jpg 1920w","sizes":"(min-width: 1920px) 1920px, 100vw"},"sources":[{"srcSet":"/static/f6f3fadb0ed895c1148b06ed093a9a47/3a3a2/1920x1080.webp 480w,\\n/static/f6f3fadb0ed895c1148b06ed093a9a47/bde8a/1920x1080.webp 960w,\\n/static/f6f3fadb0ed895c1148b06ed093a9a47/c512e/1920x1080.webp 1920w","type":"image/webp","sizes":"(min-width: 1920px) 1920px, 100vw"}]},"width":1920,"height":1080}')}}]);
//# sourceMappingURL=component---src-pages-index-js-c035369eb60f51dc20f8.js.map