import"../chunks/disclose-version.Bg9kRutz.js";import{x as w,k as p,s as y,q as A,t as _,v as u,w as B,p as M,a as S}from"../chunks/runtime.BoY70jnu.js";import{a as b,t as m}from"../chunks/template.BqF7vZlw.js";import{p as g,i as j,a as n}from"../chunks/props.DxYjNcqg.js";import{s as q,i as h}from"../chunks/instruments.DzB2YNIC.js";import{M as C,S as D}from"../chunks/MidiBoardGrid.DG9K7ZDR.js";var G=m('<div class="basis-1/12"><!></div>'),z=m('<div><div class="basis-11/12"><!></div> <!></div>');function E(d,e){let i=g(e,"use_sound_level",3,!0),l=g(e,"board_bg_color",3,"bg-[#252525]"),a=g(e,"use_tile_sounds",3,!0),r=A(.4);var t=z(),o=_(t),v=_(o);C(v,{get sound_level_float(){return p(r)},set sound_level_float(f){y(r,n(f))},get active_tile_list(){return e.active_tile_list},get pause_tile_list(){return e.pause_tile_list},get use_tile_sounds(){return a()},get instruments(){return e.instruments},get onmouseup(){return e.onmouseup}}),u(o);var s=B(o,2);j(s,i,f=>{var c=G(),x=_(c);D(x,{get sound_level_float(){return p(r)},set sound_level_float(k){y(r,n(k))}}),u(c),b(f,c)}),u(t),w(()=>q(t,`
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
						lg:p-10`)),b(d,t)}var F=m('<div class="h-screen w-full bg-blue-200 p-5"><!></div>');function O(d,e){M(e,!0);let i=h.length;const l=n(Array(i).fill(!1)),a=n(Array(i).fill(!0));function r(v=!1,s){l[s]=!l[s],v||(a[s]=!a[s])}var t=F(),o=_(t);E(o,{instruments:h,get active_tile_list(){return l},get pause_tile_list(){return a},board_bg_color:"bg-gray-300",onmouseup:r}),u(t),b(d,t),S()}export{O as component};
