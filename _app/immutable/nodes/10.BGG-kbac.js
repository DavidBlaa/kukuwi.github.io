import"../chunks/disclose-version.Bg9kRutz.js";import{t as A,y as b,a3 as y,s as B,a4 as M,c as u,r as n,p as S,a as j}from"../chunks/runtime.DBSzk1xQ.js";import{a as g,t as p}from"../chunks/template.Cv5zbk9r.js";import{p as c,a as d}from"../chunks/props.CLTgNlsy.js";import{i as C}from"../chunks/if.C_dJyYU9.js";import{s as D}from"../chunks/class.DooIvUr-.js";import{M as G,S as q}from"../chunks/MidiBoardGrid.Dgdbs7Bi.js";import{i as h}from"../chunks/instruments.B9gjmlYA.js";var z=p('<div class="basis-1/12"><!></div>'),E=p('<div><div class="basis-11/12"><!></div> <!></div>');function F(v,e){let _=c(e,"use_sound_level",3,!0),a=c(e,"board_bg_color",3,"bg-[#252525]"),l=c(e,"use_tile_sounds",3,!0),r=M(.4);var t=E(),o=u(t),f=u(o);G(f,{get active_tile_list(){return e.active_tile_list},get pause_tile_list(){return e.pause_tile_list},get use_tile_sounds(){return l()},get instruments(){return e.instruments},get onmouseup(){return e.onmouseup},get sound_level_float(){return b(r)},set sound_level_float(i){y(r,d(i))}}),n(o);var s=B(o,2);{var x=i=>{var m=z(),k=u(m);q(k,{get sound_level_float(){return b(r)},set sound_level_float(w){y(r,d(w))}}),n(m),g(i,m)};C(s,i=>{_()&&i(x)})}n(t),A(()=>D(t,`
            flex
            justify-stretch
            rounded-2xl
            ${a()??""}
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
						lg:p-10`)),g(v,t)}var H=p('<div class="h-screen w-full bg-blue-200 p-5"><!></div>');function R(v,e){S(e,!0);let _=h.length;const a=d(Array(_).fill(!1)),l=d(Array(_).fill(!0));function r(f=!1,s){a[s]=!a[s],f||(l[s]=!l[s])}var t=H(),o=u(t);F(o,{instruments:h,get active_tile_list(){return a},get pause_tile_list(){return l},board_bg_color:"bg-gray-300",onmouseup:r}),n(t),g(v,t),j()}export{R as component};
