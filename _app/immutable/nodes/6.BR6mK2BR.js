import{a as b,t as m}from"../chunks/disclose-version.BNgU4K-H.js";import{y as k,o as p,v as y,w as A,g as _,r as u,s as B,p as M,a as S}from"../chunks/runtime.DuCQTMz_.js";import{p as c,i as j,a as n}from"../chunks/props.CTwwBnVA.js";import{s as C,i as h}from"../chunks/data.Bl9fuj5g.js";import{M as D,S as G}from"../chunks/MidiBoardGrid.C4V2MeAn.js";var q=m('<div class="basis-1/12"><!></div>'),z=m('<div><div class="basis-11/12 "><!></div> <!></div>');function E(d,e){let i=c(e,"use_sound_level",3,!0),o=c(e,"board_bg_color",3,"bg-[#252525]"),s=c(e,"use_tile_sounds",3,!0),l=A(.4);var t=z(),a=_(t),v=_(a);D(v,{get sound_level_float(){return p(l)},set sound_level_float(g){y(l,n(g))},get active_tile_list(){return e.active_tile_list},get pause_tile_list(){return e.pause_tile_list},get use_tile_sounds(){return s()},get instruments(){return e.instruments},get onmouseup(){return e.onmouseup}}),u(a);var r=B(a,2);j(r,i,g=>{var f=q(),x=_(f);G(x,{get sound_level_float(){return p(l)},set sound_level_float(w){y(l,n(w))}}),u(f),b(g,f)}),u(t),k(()=>C(t,`
            flex
            flex-row
            justify-stretch
            rounded-2xl
            ${o()??""}
            w-full
            h-full
            p-3
            lg:p-10
            border-b-gray-600
            border-l-gray-200
            border-t-gray-400
            border-r-gray-400
            border-b-[20px]
            border-l-[10px]
            border-r-[10px]
            border-t-[10px]
            shadow-2xl [rotate-y-20deg]`)),b(d,t)}var F=m('<div class="w-full h-screen p-5 bg-blue-200"><!></div>');function N(d,e){M(e,!0);let i=h.length;const o=n(Array(i).fill(!1)),s=n(Array(i).fill(!0));function l(v=!1,r){o[r]=!o[r],v||(s[r]=!s[r],console.log(s[r]))}var t=F(),a=_(t);E(a,{instruments:h,get active_tile_list(){return o},get pause_tile_list(){return s},board_bg_color:"bg-gray-300",onmouseup:l}),u(t),b(d,t),S()}export{N as component};
