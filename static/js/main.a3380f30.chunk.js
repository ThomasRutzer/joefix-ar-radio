(this["webpackJsonpjoe-fix-ar-radio"]=this["webpackJsonpjoe-fix-ar-radio"]||[]).push([[0],{22:function(e,t,n){"use strict";var a=n(30),c=n(23),r=Object(a.a)((function(e){return{view:c.e.INTRO,appState:null,arEngineReady:!0,sceneEntered:!0,mute:!1,currentSongDuration:null,audioAnalyseState:{signal:!1}}}));t.a=r},23:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return o}));var a=3e3,c=2300,r={INTRO:"intro",SCENE:"scene"},i={PREPARE_PLAY:"preparePlay",SHALL_PLAY:"shallPlay",PLAY:"play",PLAY_FINISHED:"playFinished"},o={width:200,height:200,depth:200}},57:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(26),r=n.n(c),i=(n(57),n(49)),o=n(22),s=n(23),u=n(6),l=n.p+"static/media/song.a30f0198.mp3",d=n.p+"static/media/atmo.5e0eb98a.mp3",j=n.p+"static/media/analyzed.a1b0ce3d.mp3";var f=function(e,t){var n=Object(a.useRef)(e);Object(a.useEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){if(null!==t){var e=setTimeout((function(){return n.current()}),t);return function(){return clearTimeout(e)}}}),[t])},b=n(9),p=n(14),O=n.n(p),m=n(20),h=n(13),x=function(e){var t=Object(a.useCallback)((function(){e.current&&(e.current.play(),e.current.pause(),e.current.currentTime=0,document.body.removeEventListener("click",t),document.body.removeEventListener("touchstart",t))}),[e]);Object(a.useEffect)((function(){if(e.current){var n=navigator.userAgent.toLowerCase();-1!==n.indexOf("safari")&&!n.indexOf("chrome")>-1&&(document.body.addEventListener("click",t),document.body.addEventListener("touchstart",t))}}),[e,t])},y=n(11),v=["src","srcType","shallPlay","onPlay","onLoadedMetaData","onEnded"],g=function(e){var t=e.src,n=e.srcType,c=void 0===n?"mp3":n,r=e.shallPlay,i=e.onPlay,o=void 0===i?function(){}:i,s=e.onLoadedMetaData,l=void 0===s?function(){}:s,d=e.onEnded,j=void 0===d?function(){}:d,f=Object(h.a)(e,v),p=Object(a.useRef)(),g=Object(a.useState)(!1),_=Object(u.a)(g,2),w=_[0],S=_[1];return x(p,t),Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.current.play();case 3:S(!0),o(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}r&&!w?function(){e.apply(this,arguments)}():!r&&w&&(p.current.pause(),S(!1))}),[r,o,w]),Object(y.jsx)("audio",Object(b.a)(Object(b.a)({ref:p,onEnded:j,onLoadedMetadata:l,preload:"auto"},f),{},{style:{display:"none"},children:Object(y.jsx)("source",{src:t,type:"audio/".concat(c)})}))},_=n(45);function w(e){return S.apply(this,arguments)}function S(){return(S=Object(m.a)(O.a.mark((function e(t){var n,a,c,r,i,o,s,u,l,d=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d.length>1&&void 0!==d[1]?d[1]:10,e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.arrayBuffer();case 6:return c=e.sent,r=new(window.AudioContext||window.webkitAudioContext),(i=r.createAnalyser()).fftSize=2048,o=new Uint8Array(i.frequencyBinCount),s=r.createBufferSource(),e.next=14,new Promise((function(e){return r.decodeAudioData(c,e)}));case 14:return s.buffer=e.sent,s.loop=!0,(u=r.createGain()).gain.value=0,u.connect(r.destination),s.connect(i),i.connect(u),l={source:s,data:o,signal:!1,avg:0,update:function(){var e=0;i.getByteFrequencyData(o);for(var t=0;t<o.length;t++)e+=o[t];var a=l.avg=e/o.length;l.signal=!!(n&&a>n)}},e.abrupt("return",l);case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=function(e){var t=e.src,n=e.shallAnalyze,c=e.shallPrepareAnalyze,r=Object(a.useState)(null),i=Object(u.a)(r,2),s=i[0],l=i[1];return Object(a.useEffect)((function(){!s&&c&&function(){var e=Object(m.a)(O.a.mark((function e(){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:n=e.sent,l(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s,t,c]),Object(a.useEffect)((function(){n&&(s.source.start(0),Object(_.b)((function(){s.update(),o.a.setState({audioAnalyseState:s})})))}),[s,n]),null},E=function(){var e=Object(o.a)((function(e){return e.appState})),t=Object(o.a)((function(e){return e.mute})),n=Object(a.useState)(null),c=Object(u.a)(n,2),r=c[0],i=c[1],b=Object(a.useState)(null),p=Object(u.a)(b,2),O=p[0],m=p[1],h=Object(a.useState)(null),x=Object(u.a)(h,2),v=x[0],_=x[1],w=Object(a.useState)(null),S=Object(u.a)(w,2),E=S[0],A=S[1];return f((function(){return i(!0)}),O?s.c:null),f((function(){return _(!0)}),O?s.b:null),Object(a.useEffect)((function(){switch(e){case s.a.SHALL_PLAY:return A(!0),void m(!0);case s.a.PLAY_FINISHED:return A(!1),i(!1),m(!1),void _(!1);default:return null}}),[e]),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(k,{shallPrepareAnalyze:O,shallAnalyze:v,src:j}),Object(y.jsx)(g,{onLoadedMetaData:function(e){return o.a.setState({currentSongDuration:Math.round(1e3*e.target.duration)})},onEnded:function(){return o.a.setState({appState:s.a.PLAY_FINISHED})},shallPlay:r,src:l,loop:!1,muted:t}),Object(y.jsx)(g,{onPlay:function(){return o.a.setState({appState:s.a.PLAY})},src:d,shallPlay:E,loop:!0,muted:t})]})},A=n(24),N=(n(75),n.p+"static/media/tracked-image.2c278093.png"),P=(n(76),function(){return Object(y.jsxs)("div",{className:"media",children:[Object(y.jsx)("img",{alt:"Cover of Joe Fix \u2013 of ties & knives EP",src:N}),Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{className:"media__subtitle",children:"Listen to"}),Object(y.jsxs)("h1",{className:"media__title",children:["Joe Fix \u2013 of ties ",Object(y.jsx)("br",{})," & knives"]})]})]})}),L=(n(77),function(e){var t=e.label,n=e.link;return Object(y.jsxs)("a",{className:"external-link",href:n,rel:"noopener noreferrer",target:"_blank",children:[t,Object(y.jsx)("svg",{className:"external-link__icon","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"#000000",strokeWidth:"2",strokeLinecap:"square",strokeLinejoin:"arcs",children:Object(y.jsx)("path",{d:"M7 17l9.2-9.2M17 17V7H7"})})]})}),R=function(e){var t=e.onStartButton,n=Object(a.useState)(!0),c=Object(u.a)(n,2),r=c[0],i=c[1];return Object(A.useTransition)(r,{from:{opacity:0,y:300},enter:{opacity:1,y:0},leave:{opacity:0,y:300},delay:r?1e3:0,config:A.config.molasses,onRest:function(){r||t()}})((function(e,t){return t&&Object(y.jsx)(A.animated.div,{className:"info",style:e,children:Object(y.jsxs)("div",{className:"info__content",children:[Object(y.jsx)(P,{}),Object(y.jsxs)("div",{className:"info__explanation",children:[Object(y.jsx)("p",{className:"info__copy",children:"Welcome to the JOE FIX AR Radio. It's experimental, sometimes doesn't work and it's gonna be loud & fix. But you'll be just fine, no worries!"}),Object(y.jsx)("button",{className:"info__cta",onClick:function(){return i(!1)},children:"Show me!"}),Object(y.jsxs)("div",{className:"info__link-list-wrapper",children:[Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:Object(y.jsx)(L,{label:"turntable model",link:"https://market.pmnd.rs/model/turntable"})}),Object(y.jsx)("li",{children:Object(y.jsx)(L,{label:"vinyl model",link:"https://www.turbosquid.com/3d-models/disc-vinyl-3d-model-1608654"})})]}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:Object(y.jsx)(L,{label:"listen on Bandcamp",link:"https://joefix1.bandcamp.com/releases"})}),Object(y.jsx)("li",{children:Object(y.jsx)(L,{label:"made by Thomas Rutzer",link:"https://thomasrutzer.dev/legal"})})]})]})]})]})})}))},F=(n(78),function(){var e=Object(o.a)((function(e){return e.view})),t=Object(o.a)((function(e){return e.arEngineReady})),n=Object(A.useTransition)(e!==s.e.INTRO,{from:{opacity:0,y:30},enter:{opacity:1,y:0},delay:300,config:A.config.molasses}),a=Object(A.useTransition)(!t,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0},config:A.config.molasses});return f((function(){document.querySelector("meta[name='theme-color']").setAttribute("content","#e2192c")}),9e4),Object(y.jsx)(y.Fragment,{children:a((function(e,t){return t&&Object(y.jsxs)(A.animated.div,{className:"loading-indicator",style:e,children:[n((function(e,t){return t&&Object(y.jsx)(A.animated.p,{className:"loading-indicator__label",style:e,children:"Pump up the volume\u2026"})})),Object(y.jsx)("div",{className:"loading-indicator__logo"}),Object(y.jsx)("span",{className:"loading-indicator__drop"}),Object(y.jsx)("span",{className:"loading-indicator__drop loading-indicator__drop--delay-300 loading-indicator__drop--small"}),Object(y.jsx)("span",{className:"loading-indicator__fill"})]})}))})}),I=Object(a.lazy)((function(){return Promise.all([n.e(2),n.e(4)]).then(n.bind(null,211))})),T=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(F,{}),Object(y.jsx)(R,{onStartButton:function(){return o.a.setState({view:s.e.SCENE})}}),Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(a.Suspense,{fallback:Object(y.jsx)(F,{}),children:Object(y.jsx)(I,{})})}),Object(y.jsx)(E,{}),Object(y.jsx)(i.a,{collapsed:!0,hidden:!0})]})},B=document.getElementById("root");r.a.render(Object(y.jsx)(T,{}),B)}},[[79,1,3]]]);
//# sourceMappingURL=main.a3380f30.chunk.js.map