import{a as p,t as f}from"../chunks/disclose-version.BKubmXxM.js";import{g,s as y,d as L,c as l,r as u,b as h,p as x,a as S}from"../chunks/runtime.BaLyREtQ.js";import{b as k,p as c}from"../chunks/props.BB9OUOYN.js";import{i as b}from"../chunks/instruments.CL6ozyEj.js";import{i as w}from"../chunks/if.D3iIYnVb.js";import{M as A,S as B}from"../chunks/MidiBoardGrid.De8qEMCo.js";var M=f('<div class="basis-1/12"><!></div>'),j=f(`<div class="
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
			lg:p-10"><div class="basis-11/12"><!></div> <!></div>`);function C(n,r){let i=k(r,"useTileSounds",3,!0),t=L(.4);var s=j(),a=l(s),o=l(a);A(o,{get volume(){return g(t)},get activeTileList(){return r.activeTileList},get pauseTileList(){return r.pauseTileList},get useTileSounds(){return i()},get instruments(){return r.instruments},get onmouseup(){return r.onmouseup}}),u(a);var d=y(a,2);{var v=e=>{var m=M(),_=l(m);B(_,{get volume(){return g(t)},set volume(T){h(t,c(T))}}),u(m),p(e,m)};w(d,e=>{i()&&e(v)})}u(s),p(n,s)}var D=f('<div class="h-screen w-full bg-blue-200 p-5"><!></div>');function I(n,r){x(r,!0);let i=b.length;const t=c(Array(i).fill(!1)),s=c(Array(i).fill(!0));function a(v=!1,e){t[e]=!t[e],v||(s[e]=!s[e])}var o=D(),d=l(o);C(d,{instruments:b,get activeTileList(){return t},get pauseTileList(){return s},onmouseup:a}),u(o),p(n,o),S()}export{I as component};
