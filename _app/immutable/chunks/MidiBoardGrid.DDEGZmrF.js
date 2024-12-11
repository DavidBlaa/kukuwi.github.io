import"./disclose-version.Bg9kRutz.js";import{p as A,c as p,t as x,r as f,s as y,a as N,A as d,C as S}from"./runtime.B7fCM4Oa.js";import{d as I,e as J}from"./utils.D9OdP2rZ.js";import{a as v,t as g,n as K}from"./template.hec62Xai.js";import{e as R,i as z,s as k,a as L}from"./class.B7YY2zb_.js";import{p as r,a as O}from"./props.Cxt6yCBM.js";import{a as P}from"./store.a1xX2E71.js";import{i as G}from"./if.DwGaze87.js";import{s as M}from"./attributes.C9k-nJpy.js";import{b as Q,a as T}from"./instruments.CifbHNiS.js";import"./legacy.CtaTdtmd.js";import{b as B}from"./paths.HHASukNr.js";var U=g("<div></div>"),V=(u,e)=>e(!0),W=(u,e)=>e(!1),X=g(`<div class="flex flex-col justify-end items-center w-full h-full"><div class="flex flex-col-reverse justify-center w-4/6 lg:w-1/3 h-full mb-5 rounded-2xl"></div> <button class="w-5/6 lg:w-3/5 aspect-square bg-amber-500 rounded-full cursor-pointer select-none
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_8px_0_0_#b07209,0_13px_0_0_#1b70f841]
    border-[1px]
    "><span class="flex flex-col justify-center items-center h-full text-white font-bold text-6xl pb-3">+</span></button> <button class="w-5/6 lg:w-3/5 aspect-square bg-amber-500  rounded-full cursor-pointer select-none mt-5
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_8px_0_0_#b07209,0_13px_0_0_#1b70f841]
    border-[1px]
    "><span class="flex flex-col justify-center items-center h-full text-white font-bold text-6xl pb-3">-</span></button></div>`);function me(u,e){A(e,!0);let i=r(e,"sound_level_float",15);const o=O(Array(10).fill(!1));let t=40;for(let n=0;n<t/10;n++)o[n]=!0;function a(n){if(n){if(t>=100)return;t+=10,o[t/10-1]=!0,i(t/100)}else{if(t<=0)return;o[t/10-1]=!1,t-=10,i(t/100)}}var s=X(),c=p(s);R(c,21,()=>o,z,(n,h)=>{var m=U();x(()=>k(m,`${(d(h)?"bg-green-500":"bg-green-100")??""} w-full h-full border-2 lg:border-4 border-gray-500`)),v(n,m)}),f(c);var b=y(c,2);b.__click=[V,a];var j=y(b,2);j.__click=[W,a],f(s),v(u,s),N()}I(["click"]);var Y=K('<svg xmlns="http://www.w3.org/2000/svg" role="img"><image width="100%" height="100%" preserveAspectRatio="xMidyMid meet"></image></svg>');function Z(u,e){let i=r(e,"viewBox",8,"0 0 48 48"),o=r(e,"className",8,""),t=r(e,"src",8);var a=Y(),s=p(a);f(a),x(()=>{M(a,"viewBox",i()),L(a,`icon p-2 sm:p-3 md:p-4 lg:p-5 ${o()}`),M(s,"href",t())}),v(u,a)}var $=g("<p> </p>"),ee=g("<audio></audio>"),te=g('<div class="flex h-full flex-col"><!> <button><!> <!></button></div>');function ae(u,e){A(e,!0);let i=r(e,"is_active",7),o=r(e,"paused",7,!0),t=r(e,"active_color_top",3,"bg-blue-400"),a=r(e,"active_color_bottom",3,"[box-shadow:0_10px_0_0_#4e81bf,0_15px_0_0_#1b70f841]"),s=r(e,"passiv_color_top",3,"bg-blue-100"),c=r(e,"passiv_color_bottom",3,"[box-shadow:0_10px_0_0_#b0b1b5,0_15px_0_0_#1b70f841]"),b=r(e,"use_audio",3,!0),j=r(e,"use_header",3,!0),n=r(e,"volume",7,.5);function h(_=!1){i(!i()),_||o(!o())}var m=te(),q=p(m);{var D=_=>{var l=$(),H=p(l,!0);f(l),x(()=>{k(l,`flex w-fit flex-col items-start justify-center px-1 text-xs lg:text-xl ${(i()?t():s())??""} mb-1 rounded-sm font-bold`),P(H,e.name)}),v(_,l)};G(q,_=>{j()&&_(D)})}var w=y(q,2);w.__mouseup=function(..._){var l;(l=e.onmouseup)==null||l.apply(this,_)};var C=p(w);Z(C,{get src(){return e.img_url},className:""});var E=y(C,2);{var F=_=>{var l=ee();x(()=>M(l,"src",e.audio_url)),J("ended",l,()=>h(!0)),Q(l,o),T(l,n),v(_,l)};G(E,_=>{b()&&_(F)})}return f(w),f(m),x(()=>k(w,`flex h-full flex-col items-center justify-center ${(i()?t():s())??""} order-[1px] cursor-pointer select-none
    rounded-lg transition-all
    duration-150 active:translate-y-2
    active:border-b-[0px] active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] ${(i()?a():c())??""}
    border-b-[1px] border-white`)),v(u,m),N({handle_music_tile_click:h})}I(["mouseup"]);var oe=g("<div></div>");function xe(u,e){A(e,!0);let i=r(e,"grid_layout",3,"grid-cols-4");var o=oe();R(o,21,()=>e.instruments,z,(t,a,s)=>{var c=S(()=>B+"/icons/instruments/"+d(a).image),b=S(()=>e.use_tile_sounds?"audio"in d(a)?`${B}/audios/${d(a).audio}`:`${B}/audios/${d(a).audios[0]}`:"");ae(t,{get img_url(){return d(c)},get is_active(){return e.active_tile_list[s]},get use_audio(){return e.use_tile_sounds},get audio_url(){return d(b)},get name(){return d(a).name},use_header:!0,get paused(){return e.pause_tile_list[s]},onmouseup:()=>e.onmouseup(!1,s),get volume(){return e.sound_level_float}})}),f(o),x(()=>k(o,`
        grid
        ${i()??""}
        h-full
        w-full
        items-stretch
        gap-5
				p-3
				lg:gap-x-12
        lg:gap-y-20`)),v(u,o),N()}export{xe as M,me as S};
