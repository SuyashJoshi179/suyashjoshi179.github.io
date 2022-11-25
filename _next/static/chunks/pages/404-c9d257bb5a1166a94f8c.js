(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{7272:function(t,o,e){"use strict";e.d(o,{Z:function(){return v}});var r=e(3366),n=e(7462),i=e(7294),a=(e(5697),e(6010)),s=e(9050),c=e(7828),p=e(9612),l=e(2049),u=e(3353),h=e(5664);function m(t){return(0,h.Z)("MuiTypography",t)}(0,e(742).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=e(5893);const d=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],y=(0,p.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,o)=>{const{styleProps:e}=t;return[o.root,e.variant&&o[e.variant],"inherit"!==e.align&&o[`align${(0,u.Z)(e.align)}`],e.noWrap&&o.noWrap,e.gutterBottom&&o.gutterBottom,e.paragraph&&o.paragraph]}})((({theme:t,styleProps:o})=>(0,n.Z)({margin:0},o.variant&&t.typography[o.variant],"inherit"!==o.align&&{textAlign:o.align},o.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o.gutterBottom&&{marginBottom:"0.35em"},o.paragraph&&{marginBottom:16}))),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},f={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var v=i.forwardRef((function(t,o){const e=(0,l.Z)({props:t,name:"MuiTypography"}),i=(t=>f[t]||t)(e.color),p=(0,s.Z)((0,n.Z)({},e,{color:i})),{align:h="inherit",className:v,component:w,gutterBottom:_=!1,noWrap:x=!1,paragraph:Z=!1,variant:k="body1",variantMapping:j=b}=p,S=(0,r.Z)(p,d),B=(0,n.Z)({},p,{align:h,color:i,className:v,component:w,gutterBottom:_,noWrap:x,paragraph:Z,variant:k,variantMapping:j}),P=w||(Z?"p":j[k]||b[k])||"span",W=(t=>{const{align:o,gutterBottom:e,noWrap:r,paragraph:n,variant:i,classes:a}=t,s={root:["root",i,"inherit"!==t.align&&`align${(0,u.Z)(o)}`,e&&"gutterBottom",r&&"noWrap",n&&"paragraph"]};return(0,c.Z)(s,m,a)})(B);return(0,g.jsx)(y,(0,n.Z)({as:P,ref:o,styleProps:B,className:(0,a.Z)(W.root,v)},S))}))},7361:function(t,o,e){"use strict";e.r(o),e.d(o,{default:function(){return H}});var r=e(3366),n=e(7462),i=e(7294),a=(e(5697),e(6010)),s=e(7828),c=e(8245),p=e(2730),l=e(3353),u=e(9612),h=e(2049),m=e(5135),g=e(7531),d=e(7272),y=e(5664);function b(t){return(0,y.Z)("MuiLink",t)}var f=(0,e(742).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),v=e(5893);const w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],_={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},x=(0,u.ZP)(d.Z,{name:"MuiLink",slot:"Root",overridesResolver:(t,o)=>{const{styleProps:e}=t;return[o.root,o[`underline${(0,l.Z)(e.underline)}`],"button"===e.component&&o.button]}})((({theme:t,styleProps:o})=>{const e=(0,c.D)(t,`palette.${(t=>_[t]||t)(o.color)}`)||o.color;return(0,n.Z)({},"none"===o.underline&&{textDecoration:"none"},"hover"===o.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===o.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==e?(0,p.Fq)(e,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===o.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${f.focusVisible}`]:{outline:"auto"}})}));var Z=i.forwardRef((function(t,o){const e=(0,h.Z)({props:t,name:"MuiLink"}),{className:c,color:p="primary",component:u="a",onBlur:d,onFocus:y,TypographyClasses:f,underline:_="always",variant:Z="inherit"}=e,k=(0,r.Z)(e,w),{isFocusVisibleRef:j,onBlur:S,onFocus:B,ref:P}=(0,m.Z)(),[W,H]=i.useState(!1),M=(0,g.Z)(o,P),N=(0,n.Z)({},e,{color:p,component:u,focusVisible:W,underline:_,variant:Z}),C=(t=>{const{classes:o,component:e,focusVisible:r,underline:n}=t,i={root:["root",`underline${(0,l.Z)(n)}`,"button"===e&&"button",r&&"focusVisible"]};return(0,s.Z)(i,b,o)})(N);return(0,v.jsx)(x,(0,n.Z)({className:(0,a.Z)(C.root,c),classes:f,color:p,component:u,onBlur:t=>{S(t),!1===j.current&&H(!1),d&&d(t)},onFocus:t=>{B(t),!0===j.current&&H(!0),y&&y(t)},ref:M,styleProps:N,variant:Z},k))})),k=e(330),j=e(9008),S=e(4298),B=e(9925),P=e(4476),W=e.n(P);function H(){return(0,v.jsx)(k.Z,{theme:B.r,children:(0,v.jsxs)("div",{className:W().container,children:[(0,v.jsxs)(j.default,{children:[(0,v.jsx)("title",{children:"Suyash Joshi | Portfolio"}),(0,v.jsx)("meta",{name:"description",content:"Suyash Joshi's Portfolio"}),(0,v.jsx)("link",{rel:"icon",href:"/Logo.svg"}),(0,v.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"})]}),(0,v.jsxs)("main",{className:W().main,children:[(0,v.jsx)(S.default,{src:"/lottie-player.js",strategy:"beforeInteractive"}),(0,v.jsx)("lottie-player",{src:"/under_construction.json",background:"transparent",speed:"1",style:{width:"70vw",height:"70vh"},loop:!0,autoplay:!0}),(0,v.jsx)("br",{}),(0,v.jsx)(Z,{href:"/",children:"Go back to home"})]})]})})}},9925:function(t,o,e){"use strict";e.d(o,{j:function(){return n},r:function(){return i}});var r=e(7717),n={resume:"https://drive.google.com/file/d/19SDg_eb-noc95C7uZ_hLTPd9UYMVrP7U/view?usp=sharing",github:"https://github.com/SuyashJoshi179/",linkedin:"https://www.linkedin.com/in/suyash-joshi/",email:"mailto:suyash.joshi179@gmail.com",inquizitive:{github:"https://github.com/credenz/Inquizitive-Frontend"},crypt:{website:"https://crypt-web.web.app/",github:"https://github.com/SuyashJoshi179/Crypt-Web",proxy:"https://cors-proxyserver.herokuapp.com/"},bounce_ball:{github:"https://github.com/SuyashJoshi179/Bouncing-Ball-Game"},portfolio:{website:"/",github:"https://github.com/SuyashJoshi179/suyashjoshi179.github.io"},cleancss:{website:"https://clean-css.github.io/",github:"https://github.com/clean-css/clean-css",issue:"https://github.com/clean-css/clean-css/issues/1180",pr:"https://github.com/clean-css/clean-css/pull/1182"},tools:{cpp:"https://isocpp.org/",python:"https://www.python.org/",numpy:"https://numpy.org/",octave:"https://www.gnu.org/software/octave/index",tensorflow:"https://www.tensorflow.org/",html:"https://developer.mozilla.org/en-US/docs/Web/HTML",css:"https://developer.mozilla.org/en-US/docs/Web/CSS",javascript:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",react:"https://reactjs.org/",node:"https://nodejs.org/en/",mongo:"https://www.mongodb.com/",express:"https://expressjs.com/",next:"https://nextjs.org/",bootstrap:"https://getbootstrap.com/",jquery:"https://jquery.com/",materialui:"https://material-ui.com/",firebase:"https://firebase.google.com/",firestore:"https://firebase.google.com/products/firestore/",spark_plan:"https://firebase.google.com/pricing/",cryptowatch:"https://cryptowat.ch/products/cryptocurrency-market-data-api",coingecko:"https://www.coingecko.com/en/api",coinapi:"https://www.coinapi.io/",cors:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",cors_anywhere:"https://github.com/Rob--W/cors-anywhere",heroku:"https://www.heroku.com/",rest:"https://en.wikipedia.org/wiki/Representational_state_transfer",google_charts:"https://developers.google.com/chart",aws:"https://aws.amazon.com/"}},i=(0,r.Z)({palette:{primary:{main:"#007FFF"}},typography:{fontFamily:"Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"}})},2448:function(t,o,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return e(7361)}])},4476:function(t){t.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",links:"Home_links__1-GKm",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},4298:function(t,o,e){t.exports=e(7926)}},function(t){t.O(0,[774,363,888,179],(function(){return o=2448,t(t.s=o);var o}));var o=t.O();_N_E=o}]);