import{ap as D,aq as j,ar as H,W as P,as as V,ab as g,at as N,U as _,x as y,G as C,au as Z,a5 as $,C as W,_ as B,t as q,ad as J,V as z,av as Q,aw as X,ax as p,ay as k,az as G,ag as ee,aA as re,aB as ne,aC as te,z as K,aD as ae,aE as ie,aF as ue,aG as se,aH as fe}from"./runtime.BZDbob96.js";function O(e,n=null,l){if(typeof e!="object"||e===null||D in e)return e;const f=$(e);if(f!==j&&f!==H)return e;var u=new Map,c=W(e),w=P(0);c&&u.set("length",P(e.length));var I;return new Proxy(e,{defineProperty(s,r,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&V();var i=u.get(r);return i===void 0?(i=P(t.value),u.set(r,i)):g(i,O(t.value,I)),!0},deleteProperty(s,r){var t=u.get(r);if(t===void 0)r in s&&u.set(r,P(_));else{if(c&&typeof r=="string"){var i=u.get("length"),a=Number(r);Number.isInteger(a)&&a<i.v&&g(i,a)}g(t,_),M(w)}return!0},get(s,r,t){var o;if(r===D)return e;var i=u.get(r),a=r in s;if(i===void 0&&(!a||(o=N(s,r))!=null&&o.writable)&&(i=P(O(a?s[r]:_,I)),u.set(r,i)),i!==void 0){var d=y(i);return d===_?void 0:d}return Reflect.get(s,r,t)},getOwnPropertyDescriptor(s,r){var t=Reflect.getOwnPropertyDescriptor(s,r);if(t&&"value"in t){var i=u.get(r);i&&(t.value=y(i))}else if(t===void 0){var a=u.get(r),d=a==null?void 0:a.v;if(a!==void 0&&d!==_)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return t},has(s,r){var d;if(r===D)return!0;var t=u.get(r),i=t!==void 0&&t.v!==_||Reflect.has(s,r);if(t!==void 0||C!==null&&(!i||(d=N(s,r))!=null&&d.writable)){t===void 0&&(t=P(i?O(s[r],I):_),u.set(r,t));var a=y(t);if(a===_)return!1}return i},set(s,r,t,i){var h;var a=u.get(r),d=r in s;if(c&&r==="length")for(var o=t;o<a.v;o+=1){var R=u.get(o+"");R!==void 0?g(R,_):o in s&&(R=P(_),u.set(o+"",R))}a===void 0?(!d||(h=N(s,r))!=null&&h.writable)&&(a=P(void 0),g(a,O(t,I)),u.set(r,a)):(d=a.v!==_,g(a,O(t,I)));var b=Reflect.getOwnPropertyDescriptor(s,r);if(b!=null&&b.set&&b.set.call(i,t),!d){if(c&&typeof r=="string"){var m=u.get("length"),x=Number(r);Number.isInteger(x)&&x>=m.v&&g(m,x+1)}M(w)}return!0},ownKeys(s){y(w);var r=Reflect.ownKeys(s).filter(a=>{var d=u.get(a);return d===void 0||d.v!==_});for(var[t,i]of u)i.v!==_&&!(t in s)&&r.push(t);return r},setPrototypeOf(){Z()}})}function M(e,n=1){g(e,e.v+n)}function le(e,n,l){if(e==null)return n(void 0),B;const f=q(()=>e.subscribe(n,l));return f.unsubscribe?()=>f.unsubscribe():f}let A=!1;function ce(e,n,l){const f=l[n]??(l[n]={store:null,source:z(void 0),unsubscribe:B});if(f.store!==e)if(f.unsubscribe(),f.store=e??null,e==null)f.source.v=void 0,f.unsubscribe=B;else{var u=!0;f.unsubscribe=le(e,c=>{u?f.source.v=c:g(f.source,c)}),u=!1}return y(f.source)}function oe(){const e={};return J(()=>{for(var n in e)e[n].unsubscribe()}),e}function de(e){var n=A;try{return A=!1,[e(),A]}finally{A=n}}function be(e,n=1){const l=e();return e(l+n),l}const ve={get(e,n){if(!e.exclude.includes(n))return e.props[n]},set(e,n){return!1},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function ge(e,n,l){return new Proxy({props:e,exclude:n},ve)}function Y(e){for(var n=C,l=C;n!==null&&!(n.f&(p|k));)n=n.parent;try{return G(n),e()}finally{G(l)}}function ye(e,n,l,f){var U;var u=(l&se)!==0,c=!ee||(l&re)!==0,w=(l&ne)!==0,I=(l&fe)!==0,s=!1,r;w?[r,s]=de(()=>e[n]):r=e[n];var t=D in e||te in e,i=((U=N(e,n))==null?void 0:U.set)??(t&&w&&n in e?v=>e[n]=v:void 0),a=f,d=!0,o=!1,R=()=>(o=!0,d&&(d=!1,I?a=q(f):a=f),a);r===void 0&&f!==void 0&&(i&&c&&Q(),r=R(),i&&i(r));var b;if(c)b=()=>{var v=e[n];return v===void 0?R():(d=!0,o=!1,v)};else{var m=Y(()=>(u?K:ae)(()=>e[n]));m.f|=X,b=()=>{var v=y(m);return v!==void 0&&(a=void 0),v===void 0?a:v}}if(!(l&ie))return b;if(i){var x=e.$$legacy;return function(v,E){return arguments.length>0?((!c||!E||x||s)&&i(E?b():v),v):b()}}var h=!1,F=!1,T=z(r),S=Y(()=>K(()=>{var v=b(),E=y(T);return h?(h=!1,F=!0,E):(F=!1,T.v=v)}));return u||(S.equals=ue),function(v,E){if(arguments.length>0){const L=E?y(S):c&&w?O(v):v;return S.equals(L)||(h=!0,g(T,L),o&&a!==void 0&&(a=L),q(()=>y(S))),v}return y(S)}}export{O as a,ce as b,ye as p,ge as r,oe as s,be as u};