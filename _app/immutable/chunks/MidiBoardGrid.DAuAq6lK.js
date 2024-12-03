import"./disclose-version.Bg9kRutz.js";import{p as B,c as w,t as g,r as v,s as y,a as C,A as u,C as G}from"./runtime.ByPQCJTE.js";import{d as D,e as J}from"./utils.zpwiwq4o.js";import{a as x,t as m}from"./template.CElCRC7T.js";import{e as E,i as F,s as j}from"./class.CSIqV9wI.js";import{p as l,a as K}from"./props.6q4YRsUj.js";import{a as L}from"./store.B_wTVehC.js";import{i as z}from"./if.jLSaHWu0.js";import{s as q}from"./attributes.w1SPjBoc.js";import{b as N,a as O}from"./instruments.4F5DZGXP.js";import{b as A}from"./paths.BAYpO7io.js";var P=m("<div></div>"),Q=(n,e)=>e(!0),R=(n,e)=>e(!1),T=m(`<div class="flex flex-col justify-end items-center w-full h-full"><div class="flex flex-col-reverse justify-center w-4/6 lg:w-1/3 h-full mb-5 rounded-2xl"></div> <button class="w-5/6 lg:w-3/5 aspect-square bg-amber-500 rounded-full cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_8px_0_0_#b07209,0_13px_0_0_#1b70f841]
    border-[1px]
    "><span class="flex flex-col justify-center items-center h-full text-white font-bold text-6xl pb-3">+</span></button> <button class="w-5/6 lg:w-3/5 aspect-square bg-amber-500  rounded-full cursor-pointer select-none mt-5
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_8px_0_0_#b07209,0_13px_0_0_#1b70f841]
    border-[1px]
    "><span class="flex flex-col justify-center items-center h-full text-white font-bold text-6xl pb-3">-</span></button></div>`);function ue(n,e){B(e,!0);let r=l(e,"sound_level_float",15);const a=K(Array(10).fill(!1));let t=40;for(let s=0;s<t/10;s++)a[s]=!0;function i(s){if(s){if(t>=100)return;t+=10,a[t/10-1]=!0,r(t/100)}else{if(t<=0)return;a[t/10-1]=!1,t-=10,r(t/100)}}var _=T(),d=w(_);E(d,21,()=>a,F,(s,p)=>{var b=P();g(()=>j(b,`${(u(p)?"bg-green-500":"bg-green-100")??""} w-full h-full border-2 lg:border-4 border-gray-500`)),x(s,b)}),v(d);var f=y(d,2);f.__click=[Q,i];var k=y(f,2);k.__click=[R,i],v(_),x(n,_),C()}D(["click"]);var U=m("<p> </p>"),V=m("<audio></audio>"),W=m('<div class="flex h-full flex-col"><!> <button><img class="flex flex-col items-center justify-center rounded-xl p-2 lg:p-0"> <!></button></div>');function X(n,e){B(e,!0);let r=l(e,"is_active",7),a=l(e,"paused",7,!0),t=l(e,"active_color_top",3,"bg-blue-400"),i=l(e,"active_color_bottom",3,"[box-shadow:0_10px_0_0_#4e81bf,0_15px_0_0_#1b70f841]"),_=l(e,"passiv_color_top",3,"bg-blue-100"),d=l(e,"passiv_color_bottom",3,"[box-shadow:0_10px_0_0_#b0b1b5,0_15px_0_0_#1b70f841]"),f=l(e,"use_audio",3,!0),k=l(e,"use_header",3,!0),s=l(e,"volume",7,.5);function p(c=!1){r(!r()),c||a(!a())}var b=W(),S=w(b);z(S,k,c=>{var o=U(),I=w(o,!0);v(o),g(()=>{j(o,`flex w-fit flex-col items-start justify-center px-1 text-xs lg:text-xl ${(r()?t():_())??""} mb-1 rounded-sm font-bold`),L(I,e.name)}),x(c,o)});var h=y(S,2);h.__mouseup=function(...c){var o;(o=e.onmouseup)==null||o.apply(this,c)};var M=w(h),H=y(M,2);return z(H,f,c=>{var o=V();g(()=>q(o,"src",e.audio_url)),J("ended",o,()=>p(!0)),N(o,a),O(o,s),x(c,o)}),v(h),v(b),g(()=>{j(h,`flex h-full flex-col items-center justify-center ${(r()?t():_())??""} order-[1px] cursor-pointer select-none
    rounded-lg transition-all
    duration-150 active:translate-y-2
    active:border-b-[0px] active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] ${(r()?i():d())??""}
    border-b-[1px] border-white`),q(M,"alt",e.name),q(M,"src",e.img_url)}),x(n,b),C({handle_music_tile_click:p})}D(["mouseup"]);var Y=m("<div></div>");function ne(n,e){B(e,!0);let r=l(e,"grid_layout",3,"grid-cols-6 lg:grid-cols-5");var a=Y();E(a,21,()=>e.instruments,F,(t,i,_)=>{var d=G(()=>A+"/images/instruments/"+u(i).image),f=G(()=>e.use_tile_sounds?"audio"in u(i)?`${A}/audios/${u(i).audio}`:`${A}/audios/${u(i).audios[0]}`:"");X(t,{get img_url(){return u(d)},get is_active(){return e.active_tile_list[_]},get use_audio(){return e.use_tile_sounds},get audio_url(){return u(f)},get name(){return u(i).name},use_header:!0,get paused(){return e.pause_tile_list[_]},onmouseup:()=>e.onmouseup(!1,_),get volume(){return e.sound_level_float}})}),v(a),g(()=>j(a,`
        grid
        ${r()??""}
        h-full
        w-full
        items-stretch
        gap-5
				p-3
				lg:gap-x-12
        lg:gap-y-20`)),x(n,a),C()}export{ne as M,ue as S};
