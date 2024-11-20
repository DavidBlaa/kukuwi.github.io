import{a as b,t as m}from"../chunks/disclose-version.DDCgqJuG.js";import{y as k,l as p,s as y,q as A,t as _,v as u,w as B,p as M,a as S}from"../chunks/runtime.CAWppyhh.js";import{p as c,i as j,a as n}from"../chunks/props.DqhLB1P2.js";import{s as q,i as h}from"../chunks/data.95jJZxmN.js";import{M as C,S as D}from"../chunks/MidiBoardGrid.Cho74vne.js";var G=m('<div class="basis-1/12"><!></div>'),z=m('<div><div class="basis-11/12 "><!></div> <!></div>');function E(d,e){let i=c(e,"use_sound_level",3,!0),o=c(e,"board_bg_color",3,"bg-[#252525]"),s=c(e,"use_tile_sounds",3,!0),l=A(.4);var t=z(),a=_(t),v=_(a);C(v,{get sound_level_float(){return p(l)},set sound_level_float(f){y(l,n(f))},get active_tile_list(){return e.active_tile_list},get pause_tile_list(){return e.pause_tile_list},get use_tile_sounds(){return s()},get instruments(){return e.instruments},get onmouseup(){return e.onmouseup}}),u(a);var r=B(a,2);j(r,i,f=>{var g=G(),x=_(g);D(x,{get sound_level_float(){return p(l)},set sound_level_float(w){y(l,n(w))}}),u(g),b(f,g)}),u(t),k(()=>q(t,`
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
