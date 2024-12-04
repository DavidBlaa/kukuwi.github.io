import"../chunks/disclose-version.Bg9kRutz.js";import{t as k,A as b,D as y,F as w,c as _,r as u,s as B,p as D,a as M}from"../chunks/runtime.Dgcl8lwH.js";import{a as g,t as p}from"../chunks/template.DhBhQ93j.js";import{p as c,a as n}from"../chunks/props.CgdjyrhU.js";import{i as S}from"../chunks/if.AfytF6cQ.js";import{s as j}from"../chunks/class.CV46b0B3.js";import{M as C,S as F}from"../chunks/MidiBoardGrid.Ci551nKV.js";import{i as h}from"../chunks/instruments.kv95DB1w.js";var G=p('<div class="basis-1/12"><!></div>'),q=p('<div><div class="basis-11/12"><!></div> <!></div>');function z(d,e){let i=c(e,"use_sound_level",3,!0),l=c(e,"board_bg_color",3,"bg-[#252525]"),o=c(e,"use_tile_sounds",3,!0),r=w(.4);var t=q(),a=_(t),v=_(a);C(v,{get sound_level_float(){return b(r)},set sound_level_float(f){y(r,n(f))},get active_tile_list(){return e.active_tile_list},get pause_tile_list(){return e.pause_tile_list},get use_tile_sounds(){return o()},get instruments(){return e.instruments},get onmouseup(){return e.onmouseup}}),u(a);var s=B(a,2);S(s,i,f=>{var m=G(),x=_(m);F(x,{get sound_level_float(){return b(r)},set sound_level_float(A){y(r,n(A))}}),u(m),g(f,m)}),u(t),k(()=>j(t,`
            flex
            justify-stretch
            rounded-2xl
            ${l()??""}
            h-full
            w-full
            border-x-[10px]
            border-b-[20px]
            border-t-[10px]
            border-b-gray-600
            border-l-gray-200
            border-r-gray-400
            border-t-gray-400
            p-3
						lg:p-10`)),g(d,t)}var E=p('<div class="h-screen w-full bg-blue-200 p-5"><!></div>');function Q(d,e){D(e,!0);let i=h.length;const l=n(Array(i).fill(!1)),o=n(Array(i).fill(!0));function r(v=!1,s){l[s]=!l[s],v||(o[s]=!o[s])}var t=E(),a=_(t);z(a,{instruments:h,get active_tile_list(){return l},get pause_tile_list(){return o},board_bg_color:"bg-gray-300",onmouseup:r}),u(t),g(d,t),M()}export{Q as component};
