import{l as nn}from"./index.BFqC5wTN.js";const dn=!1;var Ot=Array.isArray,Dt=Array.from,kt=Object.defineProperty,_n=Object.getOwnPropertyDescriptor,zn=Object.getOwnPropertyDescriptors,Ct=Object.prototype,Nt=Array.prototype,Wn=Object.getPrototypeOf;const bt=()=>{};function Pt(n){return n()}function Xn(n){for(var t=0;t<n.length;t++)n[t]()}const y=2,En=4,Y=8,tn=16,m=32,Z=64,x=128,V=256,p=512,S=1024,b=2048,N=4096,j=8192,Jn=16384,yn=32768,Ft=65536,Qn=1<<18,wn=1<<19,cn=Symbol("$state"),qt=Symbol("legacy props"),Lt=Symbol("");function Tn(n){return n===this.v}function nt(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function An(n){return!nt(n,this.v)}function tt(n){throw new Error("effect_in_teardown")}function rt(){throw new Error("effect_in_unowned_derived")}function et(n){throw new Error("effect_orphan")}function st(){throw new Error("effect_update_depth_exceeded")}function Mt(){throw new Error("hydration_failed")}function Ht(n){throw new Error("props_invalid_value")}function Yt(){throw new Error("state_descriptors_fixed")}function jt(){throw new Error("state_prototype_fixed")}function at(){throw new Error("state_unsafe_local_read")}function lt(){throw new Error("state_unsafe_mutation")}function rn(n){return{f:0,v:n,reactions:null,equals:Tn,version:0}}function Bt(n){return mn(rn(n))}function ut(n,t=!1){var e;const r=rn(n);return t||(r.equals=An),nn&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Ut(n,t=!1){return mn(ut(n,t))}function mn(n){return o!==null&&o.f&y&&(A===null?Tt([n]):A.push(n)),n}function Vt(n,t){return en(n,Zn(()=>on(n))),t}function en(n,t){return o!==null&&un()&&o.f&(y|tn)&&(A===null||!A.includes(n))&&lt(),ot(n,t)}function ot(n,t){return n.equals(t)||(n.v=t,n.version=Bn(),gn(n,S),un()&&u!==null&&u.f&p&&!(u.f&m)&&(c!==null&&c.includes(n)?(T(u,S),z(u)):g===null?At([n]):g.push(n))),t}function gn(n,t){var r=n.reactions;if(r!==null)for(var e=un(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&S||!e&&l===u||(T(l,t),i&(p|x)&&(i&y?gn(l,b):z(l)))}}const Gt=1,Kt=2,$t=4,Zt=8,zt=16,Wt=1,Xt=2,Jt=4,Qt=8,nr=16,tr=1,rr=2,it="[",ft="[!",_t="]",Sn={},er=Symbol();function Rn(n){console.warn("hydration_mismatch")}let I=!1;function sr(n){I=n}let w;function L(n){if(n===null)throw Rn(),Sn;return w=n}function ar(){return L(O(w))}function lr(n){if(I){if(O(w)!==null)throw Rn(),Sn;w=n}}function ur(n=1){if(I){for(var t=n,r=w;t--;)r=O(r);w=r}}function or(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===_t){if(n===0)return t;n-=1}else(r===it||r===ft)&&(n+=1)}var e=O(t);t.remove(),t=e}}var vn,In,xn;function ir(){if(vn===void 0){vn=window;var n=Element.prototype,t=Node.prototype;In=_n(t,"firstChild").get,xn=_n(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function W(n=""){return document.createTextNode(n)}function X(n){return In.call(n)}function O(n){return xn.call(n)}function fr(n,t){if(!I)return X(n);var r=X(w);if(r===null)r=w.appendChild(W());else if(t&&r.nodeType!==3){var e=W();return r==null||r.before(e),L(e),e}return L(r),r}function _r(n,t){if(!I){var r=X(n);return r instanceof Comment&&r.data===""?O(r):r}return w}function cr(n,t=1,r=!1){let e=I?w:n;for(var s;t--;)s=e,e=O(e);if(!I)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var l=W();return e===null?s==null||s.after(l):e.before(l),L(l),l}return L(e),e}function vr(n){n.textContent=""}function ct(n){var t=y|S;u===null?t|=x:u.f|=wn;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:Tn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function pr(n){const t=ct(n);return t.equals=An,t}function On(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&y?sn(e):F(e)}}}function vt(n){for(var t=n.parent;t!==null;){if(!(t.f&y))return t;t=t.parent}return null}function Dn(n){var t,r=u;$(vt(n));try{On(n),t=Un(n)}finally{$(r)}return t}function kn(n){var t=Dn(n),r=(D||n.f&x)&&n.deps!==null?b:p;T(n,r),n.equals(t)||(n.v=t,n.version=Bn())}function sn(n){On(n),H(n,0),T(n,j),n.v=n.children=n.deps=n.ctx=n.reactions=null}function Cn(n){u===null&&o===null&&et(),o!==null&&o.f&x&&rt(),ln&&tt()}function pt(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function P(n,t,r,e=!0){var s=(n&Z)!==0,a=u,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|S,first:null,fn:t,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=k;try{pn(!0),B(l),l.f|=Jn}catch(_){throw F(l),_}finally{pn(i)}}else t!==null&&z(l);var E=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&wn)===0;if(!E&&!s&&e&&(a!==null&&pt(l,a),o!==null&&o.f&y)){var h=o;(h.children??(h.children=[])).push(l)}return l}function hr(n){const t=P(Y,null,!1);return T(t,p),t.teardown=n,t}function dr(n){Cn();var t=u!==null&&(u.f&m)!==0&&f!==null&&!f.m;if(t){var r=f;(r.e??(r.e=[])).push({fn:n,effect:u,reaction:o})}else{var e=Nn(n);return e}}function Er(n){return Cn(),an(n)}function yr(n){const t=P(Z,n,!0);return()=>{F(t)}}function Nn(n){return P(En,n,!1)}function wr(n,t){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=an(()=>{n(),!e.ran&&(e.ran=!0,en(r.l.r2,!0),Zn(t))})}function Tr(){var n=f;an(()=>{if(on(n.l.r2)){for(var t of n.l.r1){var r=t.effect;r.f&p&&T(r,b),q(r)&&B(r),t.ran=!1}n.l.r2.v=!1}})}function an(n){return P(Y,n,!0)}function Ar(n){return ht(n)}function ht(n,t=0){return P(Y|tn|t,n,!0)}function mr(n,t=!0){return P(Y|m,n,!0,t)}function bn(n){var t=n.teardown;if(t!==null){const r=ln,e=o;hn(!0),K(null);try{t.call(null)}finally{hn(r),K(e)}}}function Pn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)sn(t[r])}}function Fn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;F(r,t),r=e}}function dt(n){for(var t=n.first;t!==null;){var r=t.next;t.f&m||F(t),t=r}}function F(n,t=!0){var r=!1;if((t||n.f&Qn)&&n.nodes_start!==null){for(var e=n.nodes_start,s=n.nodes_end;e!==null;){var a=e===s?null:O(e);e.remove(),e=a}r=!0}Fn(n,t&&!r),Pn(n),H(n,0),T(n,j);var l=n.transitions;if(l!==null)for(const E of l)E.stop();bn(n);var i=n.parent;i!==null&&i.first!==null&&qn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes_start=n.nodes_end=null}function qn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function gr(n,t){var r=[];Ln(n,r,!0),Et(r,()=>{F(n),t&&t()})}function Et(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var s of n)s.out(e)}else t()}function Ln(n,t,r){if(!(n.f&N)){if(n.f^=N,n.transitions!==null)for(const l of n.transitions)(l.is_global||r)&&t.push(l);for(var e=n.first;e!==null;){var s=e.next,a=(e.f&yn)!==0||(e.f&m)!==0;Ln(e,t,a?r:!1),e=s}}}function Sr(n){Mn(n,!0)}function Mn(n,t){if(n.f&N){q(n)&&B(n),n.f^=N;for(var r=n.first;r!==null;){var e=r.next,s=(r.f&yn)!==0||(r.f&m)!==0;Mn(r,s?t:!1),r=e}if(n.transitions!==null)for(const a of n.transitions)(a.is_global||t)&&a.in()}}let G=!1,J=[];function Hn(){G=!1;const n=J.slice();J=[],Xn(n)}function Rr(n){G||(G=!0,queueMicrotask(Hn)),J.push(n)}function yt(){G&&Hn()}const Yn=0,wt=1;let U=Yn,M=!1,k=!1,ln=!1;function pn(n){k=n}function hn(n){ln=n}let R=[],C=0;let o=null;function K(n){o=n}let u=null;function $(n){u=n}let A=null;function Tt(n){A=n}let c=null,d=0,g=null;function At(n){g=n}let jn=0,D=!1,f=null;function Bn(){return++jn}function un(){return!nn||f!==null&&f.l===null}function q(n){var l,i;var t=n.f;if(t&S)return!0;if(t&b){var r=n.deps,e=(t&x)!==0;if(r!==null){var s;if(t&V){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(n);n.f^=V}for(s=0;s<r.length;s++){var a=r[s];if(q(a)&&kn(a),e&&u!==null&&!D&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(n))&&(a.reactions??(a.reactions=[])).push(n),a.version>n.version)return!0}}e||T(n,p)}return!1}function mt(n,t,r){throw n}function Un(n){var fn;var t=c,r=d,e=g,s=o,a=D,l=A,i=f,E=n.f;c=null,d=0,g=null,o=E&(m|Z)?null:n,D=!k&&(E&x)!==0,A=null,f=n.ctx;try{var h=(0,n.fn)(),_=n.deps;if(c!==null){var v;if(H(n,d),_!==null&&d>0)for(_.length=d+c.length,v=0;v<c.length;v++)_[d+v]=c[v];else n.deps=_=c;if(!D)for(v=d;v<_.length;v++)((fn=_[v]).reactions??(fn.reactions=[])).push(n)}else _!==null&&d<_.length&&(H(n,d),_.length=d);return h}finally{c=t,d=r,g=e,o=s,D=a,A=l,f=i}}function gt(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[e]=r[s],r.pop())}}r===null&&t.f&y&&(c===null||!c.includes(t))&&(T(t,b),t.f&(x|V)||(t.f^=V),H(t,0))}function H(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)gt(n,r[e])}function B(n){var t=n.f;if(!(t&j)){T(n,p);var r=u;u=n;try{t&tn?dt(n):Fn(n),Pn(n),bn(n);var e=Un(n);n.teardown=typeof e=="function"?e:null,n.version=jn}catch(s){mt(s)}finally{u=r}}}function Vn(){C>1e3&&(C=0,st()),C++}function Gn(n){var t=n.length;if(t!==0){Vn();var r=k;k=!0;try{for(var e=0;e<t;e++){var s=n[e];s.f&p||(s.f^=p);var a=[];Kn(s,a),St(a)}}finally{k=r}}}function St(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];!(e.f&(j|N))&&q(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?qn(e):e.fn=null))}}function Rt(){if(M=!1,C>1001)return;const n=R;R=[],Gn(n),M||(C=0)}function z(n){U===Yn&&(M||(M=!0,queueMicrotask(Rt)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(Z|m)){if(!(r&p))return;t.f^=p}}R.push(t)}function Kn(n,t){var r=n.first,e=[];n:for(;r!==null;){var s=r.f,a=(s&m)!==0,l=a&&(s&p)!==0;if(!l&&!(s&N))if(s&Y){a?r.f^=p:q(r)&&B(r);var i=r.first;if(i!==null){r=i;continue}}else s&En&&e.push(r);var E=r.next;if(E===null){let v=r.parent;for(;v!==null;){if(n===v)break n;var h=v.next;if(h!==null){r=h;continue n}v=v.parent}}r=E}for(var _=0;_<e.length;_++)i=e[_],t.push(i),Kn(i,t)}function $n(n){var t=U,r=R;try{Vn();const s=[];U=wt,R=s,M=!1,Gn(r);var e=n==null?void 0:n();return yt(),(R.length>0||s.length>0)&&$n(),C=0,e}finally{U=t,R=r}}async function Ir(){await Promise.resolve(),$n()}function on(n){var _;var t=n.f,r=(t&y)!==0;if(r&&t&j){var e=Dn(n);return sn(n),e}if(o!==null){A!==null&&A.includes(n)&&at();var s=o.deps;c===null&&s!==null&&s[d]===n?d++:c===null?c=[n]:c.push(n),g!==null&&u!==null&&u.f&p&&!(u.f&m)&&g.includes(n)&&(T(u,S),z(u))}else if(r&&n.deps===null)for(var a=n,l=a.parent,i=a;l!==null;)if(l.f&y){var E=l;i=E,l=E.parent}else{var h=l;(_=h.deriveds)!=null&&_.includes(i)||(h.deriveds??(h.deriveds=[])).push(i);break}return r&&(a=n,q(a)&&kn(a)),n.v}function Zn(n){const t=o;try{return o=null,n()}finally{o=t}}const It=~(S|b|p);function T(n,t){n.f=n.f&It|t}function xr(n,t=1){var r=+on(n);return en(n,r+t),r}function Or(n,t=!1,r){f={p:f,c:null,e:null,m:!1,s:n,x:null,l:null},nn&&!t&&(f.l={s:null,u:null,r1:[],r2:rn(!1)})}function Dr(n){const t=f;if(t!==null){n!==void 0&&(t.x=n);const l=t.e;if(l!==null){var r=u,e=o;t.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];$(a.effect),K(a.reaction),Nn(a.fn)}}finally{$(r),K(e)}}f=t.p,t.m=!0}return n||{}}function kr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(cn in n)Q(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&cn in r&&Q(r)}}}function Q(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{Q(n[e],t)}catch{}const r=Wn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=zn(r);for(let s in e){const a=e[s].get;if(a)try{a.call(n)}catch{}}}}}export{Ft as $,Wn as A,zn as B,W as C,X as D,yn as E,u as F,rr as G,L as H,ar as I,xr as J,Ct as K,Lt as L,Nt as M,rn as N,Yt as O,_n as P,jt as Q,Ot as R,cn as S,tr as T,er as U,Sr as V,gr as W,ft as X,or as Y,sr as Z,Ht as _,Dr as a,Jt as a0,An as a1,m as a2,Z as a3,$ as a4,Wt as a5,Xt as a6,Qt as a7,qt as a8,pr as a9,Nn as aA,$n as aB,Ir as aC,wr as aD,Tr as aE,Ut as aF,Vt as aG,nt as aH,nr as aa,ut as ab,ir as ac,it as ad,O as ae,Sn as af,_t as ag,Rn as ah,Mt as ai,vr as aj,Dt as ak,yr as al,hr as am,K as an,o as ao,kt as ap,N as aq,ot as ar,Ln as as,Et as at,Gt as au,Kt as av,$t as aw,Zt as ax,zt as ay,an as az,ht as b,fr as c,mr as d,F as e,_r as f,w as g,I as h,ur as i,dr as j,f as k,Zn as l,Pt as m,bt as n,Xn as o,Or as p,on as q,lr as r,cr as s,Ar as t,Er as u,kr as v,ct as w,en as x,Bt as y,Rr as z};
