import{a as p,t as f}from"../chunks/disclose-version.BlfRRn3x.js";import{x as g,s as y,aa as L,c as l,r as u,ab as h,p as x,a as S}from"../chunks/runtime.BZDbob96.js";import{p as k,a as c}from"../chunks/props.BH0R1WOI.js";import{i as b}from"../chunks/instruments.DCVs4qqt.js";import{i as w}from"../chunks/if.DhnByTD-.js";import{M as A,S as B}from"../chunks/MidiBoardGrid.5shXhXpG.js";var M=f('<div class="basis-1/12"><!></div>'),j=f(`<div class="
            flex
            h-full
            w-full
            justify-stretch
            rounded-2xl
            border-x-[10px]
            border-b-[20px]
            border-t-[10px]
			border-b-gray-600
            border-l-gray-200
            border-r-gray-400
            border-t-gray-400
            bg-[#d1d5db]
            p-3
			lg:p-10"><div class="basis-11/12"><!></div> <!></div>`);function C(n,r){let a=k(r,"useTileSounds",3,!0),t=L(.4);var s=j(),i=l(s),o=l(i);A(o,{get volume(){return g(t)},get activeTileList(){return r.activeTileList},get pauseTileList(){return r.pauseTileList},get useTileSounds(){return a()},get instruments(){return r.instruments},get onmouseup(){return r.onmouseup}}),u(i);var d=y(i,2);{var v=e=>{var m=M(),_=l(m);B(_,{get volume(){return g(t)},set volume(T){h(t,c(T))}}),u(m),p(e,m)};w(d,e=>{a()&&e(v)})}u(s),p(n,s)}var D=f('<div class="h-screen w-full bg-blue-200 p-5"><!></div>');function I(n,r){x(r,!0);let a=b.length;const t=c(Array(a).fill(!1)),s=c(Array(a).fill(!0));function i(v=!1,e){t[e]=!t[e],v||(s[e]=!s[e])}var o=D(),d=l(o);C(d,{instruments:b,get activeTileList(){return t},get pauseTileList(){return s},onmouseup:i}),u(o),p(n,o),S()}export{I as component};
