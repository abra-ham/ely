(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/h46":function(e,t,n){n("cHUd")("Map")},LX0d:function(e,t,n){e.exports=n("UDep")},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var i=n("MX0m"),r=n.n(i),o=n("q1tI"),a=n.n(o),s=n("YFqc"),c=n.n(s),l=n("8Kt/"),f=n.n(l),p=a.a.createElement;function u(){return p("div",{className:"jsx-2015361706"},p(f.a,null,p("title",{className:"jsx-2015361706"},"Hey"),p("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width",className:"jsx-2015361706"})),p("p",{className:"jsx-2015361706 eliza"},"Eliza,"),p("p",{className:"jsx-2015361706 question"},"\xbfQuieres ser mi novia?"),p("div",{className:"jsx-2015361706 links"},p(c.a,{href:"/yes"},p("a",{className:"jsx-2015361706"},"S\xed"))),p(r.a,{id:"2015361706"},["html{height:100%;width:100%;overflow:hidden;}","body{margin:0;padding:1rem 2rem;background:#a8c0ff;background:-webkit-linear-gradient(to right,#a8c0ff,#3f2b96);background:linear-gradient(to right,#a8c0ff,#3f2b96);color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;}",".eliza,.question{margin:0;font-size:75px;text-align:left;max-width:100%;}",".question{font-size:80px;}",".links{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:4rem;}",".links a{font-size:30px;color:white;-webkit-text-decoration:none;text-decoration:none;position:relative;border:1px solid white;width:100px;text-align:center;padding:0.5rem 1rem;}",".links a::after{position:absolute;height:7px;opacity:0.7;width:100%;bottom:0;left:0;right:0;content:'';background-color:black;z-index:-1;}","@media (max-width:400px){.date{font-size:40px;}.eliza{font-size:45px;}.question{font-size:50px;}.links a{font-size:20px;color:white;-webkit-text-decoration:none;text-decoration:none;position:relative;border:1px solid white;width:100px;text-align:center;padding:0.5rem 1rem;}}"]))}},UDep:function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),e.exports=n("WEpk").Map},XLbu:function(e,t,n){var i=n("Y7ZC");i(i.P+i.R,"Map",{toJSON:n("8iia")("Map")})},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var i=n("/HRN"),r=n("WaGi"),o=n("ZDA2"),a=n("/+P4"),s=n("N9n2"),c=n("LX0d"),l=n("KI45"),f=n("5Uuq");t.__esModule=!0,t.default=void 0;var p,u=n("CxY0"),d=f(n("q1tI")),h=l(n("nOHt")),v=n("g/15");function w(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var x=new c,m=window.IntersectionObserver,g={};function b(){return p||(m?p=new m((function(e){e.forEach((function(e){if(x.has(e.target)){var t=x.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),x.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var k=function(e){function t(e){var n;return i(this,t),(n=o(this,a(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,i=null;return function(r,o){if(i&&r===t&&o===n)return i;var a=e(r,o);return t=r,n=o,i=a,a}}((function(e,t){return{href:w(e),as:t?w(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,i=t.nodeName,r=t.target;if("A"!==i||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=n.formatUrls(n.props.href,n.props.as),a=o.href,s=o.as;if(function(e){var t=(0,u.parse)(e,!1,!0),n=(0,u.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var c=window.location.pathname;a=(0,u.resolve)(c,a),s=s?(0,u.resolve)(c,s):a,e.preventDefault();var l=n.props.scroll;null==l&&(l=s.indexOf("#")<0),h.default[n.props.replace?"replace":"push"](a,s,{shallow:n.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return s(t,e),r(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href;return(0,u.resolve)(e,t)}},{key:"handleRef",value:function(e){var t=this,n=g[this.getHref()];this.p&&m&&e&&e.tagName&&(this.cleanUpListeners(),n||(this.cleanUpListeners=function(e,t){var n=b();return n?(n.observe(e),x.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}x.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var e=this.getHref();h.default.prefetch(e),g[e]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),i=n.href,r=n.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var o=d.Children.only(t),a={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch()},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(a.href=r||i),d.default.cloneElement(o,a)}}]),t}(d.Component);t.default=k},dVTT:function(e,t,n){n("aPfg")("Map")},g33z:function(e,t,n){"use strict";var i=n("Wu5q"),r=n("n3ko");e.exports=n("raTm")("Map",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(e){var t=i.getEntry(r(this,"Map"),e);return t&&t.v},set:function(e,t){return i.def(r(this,"Map"),0===e?0:e,t)}},i,!0)},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",1,2,0,3,4]]]);