import"../chunks/disclose-version.Bg9kRutz.js";import{p as T,f as q,c as m,A as e,D as r,r as g,s as A,t as O,a as E,F as n,as as K,C as k}from"../chunks/runtime.B7fCM4Oa.js";import{a as x,t as F,c as P}from"../chunks/template.hec62Xai.js";import{i as D}from"../chunks/if.DwGaze87.js";import{p as R,a as i}from"../chunks/props.Cxt6yCBM.js";import{o as U}from"../chunks/index-client.D5hdirgC.js";import{s as V}from"../chunks/class.B7YY2zb_.js";import{M as W,S as X}from"../chunks/MidiBoardGrid.C8XazuWa.js";import{M as Y,G as Z,g as $,s as ee}from"../chunks/GIF.BdbuVJK9.js";import{g as te}from"../chunks/entry.C4QHN5lL.js";import{b as re}from"../chunks/paths.DM7q4a_j.js";const se=[{difficulty:"einfach",instruments:4,sameCategory:!1},{difficulty:"mittel",instruments:6,sameCategory:!1},{difficulty:"schwer",instruments:8,sameCategory:!1},{difficulty:"sehr schwer",instruments:3,sameCategory:!0}];var ae=F('<div class="absolute left-0 top-0"><!></div>'),ne=F('<div><div class="basis-2/12"><!></div> <div class="basis-8/12"><!></div> <div class="basis-1/12"><!></div></div> <!>',1);function le(Q,l){T(l,!0);let w=R(l,"board_bg_color",3,"bg-[#252525]"),o=n(.4);function B(s,y){r(p,!1),r(d,!0),r(u,y==l.correct_instrument_id),r(c,!0),r(f,!1)}function _(){e(u)?te("/"):(K(I),r(p,!0),r(c,!1))}let d=n(!1),f=n(!1),c=n(!1),u=n(!1),C=n(0),p=n(!0),I=n(0),G=0;function L(){setInterval(()=>{e(p)&&K(C)},1e3)}L();var M=ne(),t=q(M),a=m(t),z=m(a);Y(z,{get time(){return e(C)},get track_source(){return l.track_source},get tries(){return e(I)},get repeats(){return G},get sound_level_float(){return e(o)},set sound_level_float(s){r(o,i(s))},get track_paused(){return e(d)},set track_paused(s){r(d,i(s))}}),g(a);var b=A(a,2),S=m(b);W(S,{get active_tile_list(){return l.active_tile_list},get pause_tile_list(){return l.pause_tile_list},use_tile_sounds:!1,get instruments(){return l.instruments},onmouseup:B,get sound_level_float(){return e(o)},set sound_level_float(s){r(o,i(s))}}),g(b);var v=A(b,2),j=m(v);X(j,{get sound_level_float(){return e(o)},set sound_level_float(s){r(o,i(s))}}),g(v),g(t);var H=A(t,2);{var J=s=>{var y=ae(),N=m(y);Z(N,{onclick:_,get success(){return e(u)},set success(h){r(u,i(h))},get gif_sound_pause(){return e(f)},set gif_sound_pause(h){r(f,i(h))},get volume(){return e(o)},set volume(h){r(o,i(h))}}),g(y),x(s,y)};D(H,s=>{e(c)&&s(J)})}O(()=>V(t,`
            flex
            justify-evenly
            rounded-2xl
            ${w()??""}
            [rotate-y-20deg]
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
            shadow-2xl lg:p-10`)),x(Q,M),E()}var oe=F("<h1>Gewonnen</h1>"),ie=F('<div class="h-screen w-screen bg-blue-200 p-5"><!> <!></div>');function he(Q,l){T(l,!0);let w=n(!1),B=se[1],_=n(void 0),d=n(void 0);U(()=>{r(_,i($(B.instruments))),r(d,i(ee(e(_))))});let f=k(()=>{var t;return(t=e(d))==null?void 0:t.index}),c=k(()=>{var t;return(t=e(_))==null?void 0:t.length});const u=k(()=>Array(e(c)).fill(!1)),C=k(()=>Array(e(c)).fill(!0));let p=k(()=>{var t;return re+"/audios/"+((t=e(d))==null?void 0:t.audio)});function I(t=!1,a){e(u)[a]=!e(u)[a],a==e(f)&&!t&&r(w,!0)}var G=P(),L=q(G);{var M=t=>{var a=ie(),z=m(a);le(z,{get instruments(){return e(_)},get active_tile_list(){return e(u)},get pause_tile_list(){return e(C)},board_bg_color:"bg-gray-300",onmouseup:I,get track_source(){return e(p)},get correct_instrument_id(){return e(f)}});var b=A(z,2);{var S=v=>{var j=oe();x(v,j)};D(b,v=>{e(w)&&v(S)})}g(a),x(t,a)};D(L,t=>{e(_)&&e(f)&&t(M)})}x(Q,G),E()}export{he as component};
