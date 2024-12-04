import"./disclose-version.Bg9kRutz.js";import{p as A,c as p,t as x,r as f,s as y,a as N,A as n,C as S}from"./runtime.Dgcl8lwH.js";import{d as I,e as F}from"./utils.IflBIZZh.js";import{a as v,t as g,n as H}from"./template.DhBhQ93j.js";import{e as R,i as z,s as k,a as J}from"./class.CV46b0B3.js";import{p as r,a as K}from"./props.CgdjyrhU.js";import{a as L}from"./store.k_481swU.js";import{i as G}from"./if.AfytF6cQ.js";import{s as M}from"./attributes.C3-4pM30.js";import{b as O,a as P}from"./instruments.kv95DB1w.js";import"./legacy.CtaTdtmd.js";import{b as B}from"./paths.XQTvu30o.js";var Q=g("<div></div>"),T=(_,e)=>e(!0),U=(_,e)=>e(!1),V=g(`<div class="flex flex-col justify-end items-center w-full h-full"><div class="flex flex-col-reverse justify-center w-4/6 lg:w-1/3 h-full mb-5 rounded-2xl"></div> <button class="w-5/6 lg:w-3/5 aspect-square bg-amber-500 rounded-full cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_8px_0_0_#b07209,0_13px_0_0_#1b70f841]
    border-[1px]
    "><span class="flex flex-col justify-center items-center h-full text-white font-bold text-6xl pb-3">+</span></button> <button class="w-5/6 lg:w-3/5 aspect-square bg-amber-500  rounded-full cursor-pointer select-none mt-5
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_8px_0_0_#b07209,0_13px_0_0_#1b70f841]
    border-[1px]
    "><span class="flex flex-col justify-center items-center h-full text-white font-bold text-6xl pb-3">-</span></button></div>`);function ve(_,e){A(e,!0);let i=r(e,"sound_level_float",15);const o=K(Array(10).fill(!1));let t=40;for(let u=0;u<t/10;u++)o[u]=!0;function a(u){if(u){if(t>=100)return;t+=10,o[t/10-1]=!0,i(t/100)}else{if(t<=0)return;o[t/10-1]=!1,t-=10,i(t/100)}}var s=V(),d=p(s);R(d,21,()=>o,z,(u,h)=>{var m=Q();x(()=>k(m,`${(n(h)?"bg-green-500":"bg-green-100")??""} w-full h-full border-2 lg:border-4 border-gray-500`)),v(u,m)}),f(d);var b=y(d,2);b.__click=[T,a];var j=y(b,2);j.__click=[U,a],f(s),v(_,s),N()}I(["click"]);var W=H('<svg xmlns="http://www.w3.org/2000/svg" role="img"><image width="100%" height="100%" preserveAspectRatio="xMidyMid meet"></image></svg>');function X(_,e){let i=r(e,"viewBox",8,"0 0 48 48"),o=r(e,"className",8,""),t=r(e,"src",8);var a=W(),s=p(a);f(a),x(()=>{M(a,"viewBox",i()),J(a,`icon p-2 sm:p-3 md:p-4 lg:p-5 ${o()}`),M(s,"href",t())}),v(_,a)}var Y=g("<p> </p>"),Z=g("<audio></audio>"),$=g('<div class="flex h-full flex-col"><!> <button><!> <!></button></div>');function ee(_,e){A(e,!0);let i=r(e,"is_active",7),o=r(e,"paused",7,!0),t=r(e,"active_color_top",3,"bg-blue-400"),a=r(e,"active_color_bottom",3,"[box-shadow:0_10px_0_0_#4e81bf,0_15px_0_0_#1b70f841]"),s=r(e,"passiv_color_top",3,"bg-blue-100"),d=r(e,"passiv_color_bottom",3,"[box-shadow:0_10px_0_0_#b0b1b5,0_15px_0_0_#1b70f841]"),b=r(e,"use_audio",3,!0),j=r(e,"use_header",3,!0),u=r(e,"volume",7,.5);function h(c=!1){i(!i()),c||o(!o())}var m=$(),q=p(m);G(q,j,c=>{var l=Y(),E=p(l,!0);f(l),x(()=>{k(l,`flex w-fit flex-col items-start justify-center px-1 text-xs lg:text-xl ${(i()?t():s())??""} mb-1 rounded-sm font-bold`),L(E,e.name)}),v(c,l)});var w=y(q,2);w.__mouseup=function(...c){var l;(l=e.onmouseup)==null||l.apply(this,c)};var C=p(w);X(C,{get src(){return e.img_url},className:""});var D=y(C,2);return G(D,b,c=>{var l=Z();x(()=>M(l,"src",e.audio_url)),F("ended",l,()=>h(!0)),O(l,o),P(l,u),v(c,l)}),f(w),f(m),x(()=>k(w,`flex h-full flex-col items-center justify-center ${(i()?t():s())??""} order-[1px] cursor-pointer select-none
    rounded-lg transition-all
    duration-150 active:translate-y-2
    active:border-b-[0px] active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] ${(i()?a():d())??""}
    border-b-[1px] border-white`)),v(_,m),N({handle_music_tile_click:h})}I(["mouseup"]);var te=g("<div></div>");function be(_,e){A(e,!0);let i=r(e,"grid_layout",3,"grid-cols-4");var o=te();R(o,21,()=>e.instruments,z,(t,a,s)=>{var d=S(()=>B+"/icons/instruments/"+n(a).image),b=S(()=>e.use_tile_sounds?"audio"in n(a)?`${B}/audios/${n(a).audio}`:`${B}/audios/${n(a).audios[0]}`:"");ee(t,{get img_url(){return n(d)},get is_active(){return e.active_tile_list[s]},get use_audio(){return e.use_tile_sounds},get audio_url(){return n(b)},get name(){return n(a).name},use_header:!0,get paused(){return e.pause_tile_list[s]},onmouseup:()=>e.onmouseup(!1,s),get volume(){return e.sound_level_float}})}),f(o),x(()=>k(o,`
        grid
        ${i()??""}
        h-full
        w-full
        items-stretch
        gap-5
				p-3
				lg:gap-x-12
        lg:gap-y-20`)),v(_,o),N()}export{be as M,ve as S};
