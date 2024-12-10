import"../chunks/disclose-version.Bg9kRutz.js";import{t as w,A as b,D as y,F as B,c as u,r as n,s as D,p as M,a as S}from"../chunks/runtime.B7fCM4Oa.js";import{a as g,t as p}from"../chunks/template.hec62Xai.js";import{p as c,a as d}from"../chunks/props.Cxt6yCBM.js";import{i as j}from"../chunks/if.DwGaze87.js";import{s as C}from"../chunks/class.B7YY2zb_.js";import{M as F,S as G}from"../chunks/MidiBoardGrid.C8XazuWa.js";import{i as h}from"../chunks/instruments.CifbHNiS.js";var q=p('<div class="basis-1/12"><!></div>'),z=p('<div><div class="basis-11/12"><!></div> <!></div>');function E(v,e){let _=c(e,"use_sound_level",3,!0),l=c(e,"board_bg_color",3,"bg-[#252525]"),o=c(e,"use_tile_sounds",3,!0),r=B(.4);var t=z(),a=u(t),f=u(a);F(f,{get active_tile_list(){return e.active_tile_list},get pause_tile_list(){return e.pause_tile_list},get use_tile_sounds(){return o()},get instruments(){return e.instruments},get onmouseup(){return e.onmouseup},get sound_level_float(){return b(r)},set sound_level_float(i){y(r,d(i))}}),n(a);var s=D(a,2);{var x=i=>{var m=q(),A=u(m);G(A,{get sound_level_float(){return b(r)},set sound_level_float(k){y(r,d(k))}}),n(m),g(i,m)};j(s,i=>{_()&&i(x)})}n(t),w(()=>C(t,`
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
						lg:p-10`)),g(v,t)}var H=p('<div class="h-screen w-full bg-blue-200 p-5"><!></div>');function R(v,e){M(e,!0);let _=h.length;const l=d(Array(_).fill(!1)),o=d(Array(_).fill(!0));function r(f=!1,s){l[s]=!l[s],f||(o[s]=!o[s])}var t=H(),a=u(t);E(a,{instruments:h,get active_tile_list(){return l},get pause_tile_list(){return o},board_bg_color:"bg-gray-300",onmouseup:r}),n(t),g(v,t),S()}export{R as component};
