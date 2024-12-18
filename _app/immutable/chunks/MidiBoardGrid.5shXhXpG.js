import{a as f,t as g,n as D}from"./disclose-version.BlfRRn3x.js";import{p as M,c as p,Z as x,r as v,s as y,a as S,x as d,z as q}from"./runtime.BZDbob96.js";import{f as z,e as E}from"./events.CQ-CDWS2.js";import{e as C,i as G}from"./each.CaWgedCa.js";import{s as k,a as F}from"./class.CbU5o3FF.js";import{p as r,a as H}from"./props.BH0R1WOI.js";import{s as J}from"./render.DhTGtpIM.js";import{i as A}from"./if.DhnByTD-.js";import{s as L}from"./attributes.wvbF4nki.js";import{b as K}from"./instruments.DCVs4qqt.js";import"./legacy.Cx73ECVA.js";import{b as B}from"./paths.jZZZWFxg.js";var O=g("<div></div>"),P=(_,e)=>e(!0),Q=(_,e)=>e(!1),U=g(`<div class="flex h-full w-full flex-col items-center justify-end"><div class="mb-5 flex h-full w-4/6 flex-col-reverse justify-center rounded-2xl lg:w-1/3"></div> <button class="aspect-square w-5/6 cursor-pointer select-none rounded-full border-[1px] bg-amber-500
    transition-all duration-150
    [box-shadow:0_8px_0_0_#b07209,0_13px_0_0_#1b70f841]
    active:translate-y-2 active:border-b-[0px] active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    lg:w-3/5
    "><span class="flex h-full flex-col items-center justify-center pb-3 text-6xl font-bold text-white">+</span></button> <button class="aspect-square mt-5 w-5/6 cursor-pointer select-none rounded-full border-[1px] bg-amber-500
    transition-all duration-150
    [box-shadow:0_8px_0_0_#b07209,0_13px_0_0_#1b70f841]
    active:translate-y-2 active:border-b-[0px] active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    lg:w-3/5
    "><span class="flex h-full flex-col items-center justify-center pb-3 text-6xl font-bold text-white">-</span></button></div>`);function be(_,e){M(e,!0);let i=r(e,"volume",15);const o=H(Array(10).fill(!1));let t=i()*100;for(let n=0;n<t/10;n++)o[n]=!0;function a(n){if(n){if(t>=100)return;t+=10,o[t/10-1]=!0,i(t/100)}else{if(t<=0)return;o[t/10-1]=!1,t-=10,i(t/100)}}var s=U(),c=p(s);C(c,21,()=>o,G,(n,h)=>{var m=O();x(()=>k(m,`${(d(h)?"bg-green-500":"bg-green-100")??""} h-full w-full border-2 border-gray-500 lg:border-4`)),f(n,m)}),v(c);var b=y(c,2);b.__click=[P,a];var j=y(b,2);j.__click=[Q,a],v(s),f(_,s),S()}z(["click"]);var W=D('<svg xmlns="http://www.w3.org/2000/svg" role="img"><image width="100%" height="100%" preserveAspectRatio="xMidyMid meet"></image></svg>');function X(_,e){let i=r(e,"viewBox",8,"0 0 48 48"),o=r(e,"className",8,""),t=r(e,"src",8);var a=W(),s=p(a);v(a),x(()=>{L(a,"viewBox",i()),F(a,`icon p-2 sm:p-3 md:p-4 lg:p-5 ${o()}`),L(s,"href",t())}),f(_,a)}var Y=g("<p> </p>"),$=g("<audio></audio>"),ee=g('<div class="flex h-full flex-col"><!> <button><!> <!></button></div>');function te(_,e){M(e,!0);let i=r(e,"is_active",7),o=r(e,"paused",7,!0),t=r(e,"active_color_top",3,"bg-blue-400"),a=r(e,"active_color_bottom",3,"[box-shadow:0_10px_0_0_#4e81bf,0_15px_0_0_#1b70f841]"),s=r(e,"passiv_color_top",3,"bg-blue-100"),c=r(e,"passiv_color_bottom",3,"[box-shadow:0_10px_0_0_#b0b1b5,0_15px_0_0_#1b70f841]"),b=r(e,"use_audio",3,!0),j=r(e,"use_header",3,!0),n=r(e,"volume",3,.5);function h(u=!1){i(!i()),u||o(!o())}var m=ee(),T=p(m);{var I=u=>{var l=Y(),Z=p(l,!0);v(l),x(()=>{k(l,`flex w-fit flex-col items-start justify-center px-1 text-xs lg:text-xl ${(i()?t():s())??""} mb-1 rounded-sm font-bold`),J(Z,e.name)}),f(u,l)};A(T,u=>{j()&&u(I)})}var w=y(T,2);w.__mouseup=function(...u){var l;(l=e.onmouseup)==null||l.apply(this,u)};var N=p(w);X(N,{get src(){return e.img_url},className:""});var R=y(N,2);{var V=u=>{var l=$();x(()=>{L(l,"src",e.audio_url),l.volume=n()}),E("ended",l,()=>h(!0)),K(l,o),f(u,l)};A(R,u=>{b()&&u(V)})}return v(w),v(m),x(()=>k(w,`flex h-full flex-col items-center justify-center ${(i()?t():s())??""} order-[1px] cursor-pointer select-none
    rounded-lg transition-all
    duration-150 active:translate-y-2
    active:border-b-[0px] active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] ${(i()?a():c())??""}
    border-b-[1px] border-white`)),f(_,m),S({handle_music_tile_click:h})}z(["mouseup"]);var ae=g("<div></div>");function me(_,e){M(e,!0);let i=r(e,"grid_layout",3,"grid-cols-4");var o=ae();C(o,21,()=>e.instruments,G,(t,a,s)=>{var c=q(()=>B+"/icons/instruments/"+d(a).image),b=q(()=>e.useTileSounds?"audio"in d(a)?`${B}/audios/${d(a).audio}`:`${B}/audios/${d(a).audios[0]}`:"");te(t,{get img_url(){return d(c)},get is_active(){return e.activeTileList[s]},get use_audio(){return e.useTileSounds},get audio_url(){return d(b)},get name(){return d(a).name},use_header:!0,get paused(){return e.pauseTileList[s]},onmouseup:()=>e.onmouseup(!1,s),get volume(){return e.volume}})}),v(o),x(()=>k(o,`
        grid
        ${i()??""}
        h-full
        w-full
        items-stretch
        gap-5
		p-3
		lg:gap-x-12
        lg:gap-y-20`)),f(_,o),S()}export{me as M,be as S};
