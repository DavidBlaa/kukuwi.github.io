import"./disclose-version.Bg9kRutz.js";import{I as Z,t as x,c as o,r as i,s as f,D as L,A as M,F as E,C as q,p as J,n as O,a as U}from"./runtime.B7fCM4Oa.js";import{a as m}from"./store.a1xX2E71.js";import{a as I,t as G}from"./template.hec62Xai.js";import{s as k}from"./attributes.C9k-nJpy.js";import{d as N}from"./utils.D9OdP2rZ.js";import{i as W,c as X,b as S,a as T}from"./instruments.CifbHNiS.js";import{p as l,u as Y}from"./props.Cxt6yCBM.js";import{s as A}from"./class.B7YY2zb_.js";import{I as $,F as ee}from"./Icon.DYWuNL8h.js";import{b as V}from"./paths.HHASukNr.js";function re(r,e,t,a,s){var n=()=>{a(t[r])};t.addEventListener(e,n),n(),(t===document.body||t===window||t===document)&&Z(()=>{t.removeEventListener(e,n)})}const te=["success1.gif","success2.gif","success3.gif","success4.gif","success5.gif","gil-cat.gif","happy-snoopy.gif"],ae=["fail1.gif","fail2.gif","fail3.gif","fail4.gif"];function ke(r,e){let t=[];return t=W,t=se(t).slice(0,r),t.map((a,s)=>({index:s,name:a.name,category:a.category,image:a.image,audio:a.audios[Math.floor(Math.random()*a.audios.length)]}))}function se(r){for(let e=r.length;e>0;e--){const t=Math.floor(Math.random()*e);[r[e-1],r[t]]=[r[t],r[e-1]]}return r}function Ie(r){return r[Math.floor(Math.random()*r.length)]}function oe(r){const e=r?te:ae;return e[Math.floor(Math.random()*e.length)]}function ie(r){return r!=null?parseInt(""+Math.random()*r.length):-1}function Ge(r,e){const t=[],a=[];do{const s=ie(r);t.includes(s)||(t.push(s),a.push(r[s]))}while(a.length<e);return a}var ne=G(`<div><div><div class="flex flex-row justify-center items-center w-5/6 h-5/6 rounded-full bg-gray-800


            "><div class="flex flex-row justify-center items-center w-5/6 h-5/6 rounded-full bg-gray-800
                            border-t-gray-300 border-t-2
                            border-b-gray-300 border-b-2
                            border-l-gray-800 border-l-2
                            border-r-gray-800 border-r-2"><div class="flex flex-row justify-center items-center w-5/6 h-5/6 rounded-full bg-gray-800
                            border-t-gray-300 border-t-2
                            border-b-gray-300 border-b-2
                            border-l-gray-800 border-l-2
                            border-r-gray-800 border-r-2"><div class="flex flex-row justify-center items-center w-5/6 h-5/6 rounded-full bg-gray-800
                            border-t-gray-300 border-t-2
                            border-b-gray-300 border-b-2
                            border-l-gray-800 border-l-2
                            border-r-gray-800 border-r-2"><div class="flex flex-row justify-center items-center w-4/6 h-4/6 rounded-full bg-red-800"><div class="flex flex-row justify-center items-center w-1/6 h-1/6 rounded-full bg-white"></div></div></div></div></div></div></div></div>`);function de(r,e){let t=l(e,"spinning",3,!1),a=l(e,"height",3,"h-min-1/10 h-full");var s=ne(),n=o(s);i(s),x(()=>{A(s,`flex flex-row justify-center items-center ${a()??""}`),A(n,`flex flex-row justify-center items-center w-full h-full rounded-full bg-gray-600 ${(t()?"animate-spin-slow":"")??""}`)}),I(r,s)}var le=G('<div class="grid grid-cols-2 bg-blue-200 border-gray-500 border-2 text-xs lg:text-2xl"><span class="border-2 p-1  border-gray-500">Gehört</span> <span class="border-2 p-1 items-center border-gray-500"> </span> <span class="border-2 p-1  border-gray-500">Versuche</span> <span class="border-2 p-1 items-center  border-gray-500"> </span> <span class="border-2 p-1  border-gray-500">Zeit</span> <span class="border-2 p-1 items-center border-gray-500"> </span></div>');function ce(r,e){let t=l(e,"time",11,0),a=l(e,"tries",11,0),s=l(e,"repeats",11,0);var n=le(),b=f(o(n),2),g=o(b,!0);i(b);var c=f(b,4),v=o(c,!0);i(c);var u=f(c,4),p=o(u,!0);i(u),i(n),x(()=>{m(g,s()),m(v,a()),m(p,t())}),I(r,n)}var fe=(r,e)=>e(),ue=G(`<div class="flex flex-col justify-evenly items-center h-full w-full"><div class="h-52  w-52 max-lg:hidden"><!></div> <div class="flex flex-row justify-evenly items-stretch"><span class="h-fit w-full bg-green-500 text-white text-xl font-bold border-4 border-gray-500 p-1 ml-1"> </span> <span class="h-fit w-full bg-green-500 text-white text-xl font-bold border-4 border-gray-500 p-1"> </span></div> <div><!></div> <button class="
            flex
            flex-col
            justify-center
            w-5/6
            h-1/6
            bg-blue-400
            rounded-lg
            cursor-pointer
            select-none
            active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
            active:border-b-[0px]
            transition-all duration-150 [box-shadow:0_8px_0_0_#477aba,0_13px_0_0_#1b70f841]
            border-[1px]
            p-3
        "><!></button> <audio></audio></div>`);function Fe(r,e){let t=l(e,"sound_level_float",15,.5),a=l(e,"track_paused",15,!0),s=l(e,"time",7,0),n=l(e,"tries",7,0),b=l(e,"repeats",7,0),g=E(0),c=E(0);function v(){L(c,0),a(!1),Y(b)}function u(d){if(isNaN(d))return"...";const Q=Math.floor(d/60),R=Math.floor(d%60);return`${Q}:${R<10?`0${R}`:R}`}var p=ue(),h=o(p),y=o(h),F=q(()=>!a());de(y,{get spinning(){return M(F)}}),i(h);var _=f(h,2),z=o(_),D=o(z,!0);x(()=>m(D,u(M(c)))),i(z);var B=f(z,2),H=o(B,!0);x(()=>m(H,u(M(g)))),i(B),i(_);var C=f(_,2),K=o(C);ce(K,{get time(){return s()},set time(d){s(d)},get repeats(){return b()},set repeats(d){b(d)},get tries(){return n()},set tries(d){n(d)}}),i(C);var j=f(C,2);j.__click=[fe,v];var P=o(j);$(P,{size:"100%",color:"white",src:ee}),i(j);var w=f(j,2);i(p),x(()=>k(w,"src",e.track_source)),X(w,()=>M(c),d=>L(c,d)),re("duration","durationchange",w,d=>L(g,d)),S(w,a),T(w,t),I(r,p)}N(["click"]);var be=G(`<div class="fixed bottom-0 top-0 h-screen w-screen flex-col items-center justify-start"><div class="fixed bottom-0 top-0 z-50 flex h-full w-full flex-col items-center justify-start p-7"><img> <button class="
							mt-3
							flex
							h-1/6
							w-fit
							cursor-pointer
							select-none
							flex-col
							justify-center
							rounded-lg
							border-[1px] bg-amber-500
							px-7
							py-2 text-3xl font-extrabold
							transition-all
							duration-150
							[box-shadow:0_8px_0_0_#d1870a,0_13px_0_0_#1b70f841]
							active:translate-y-2
							active:border-b-[0px]
							active:[box-shadow:0_0px_0_0_#d1870a,0_0px_0_0_#1b70f841]
					"> <br> </button> <audio></audio></div> <div class="z-15 fixed bottom-0 top-0 flex h-screen w-screen flex-col items-center justify-center bg-gray-500 opacity-80"></div></div>`);function ze(r,e){J(e,!0);let t=l(e,"success",11,!0),a=l(e,"gif_sound_pause",15,!0),s=l(e,"volume",15,.5),n=oe(t()),b=t()?V+"/audios/gif-sounds/success-fanfare-trumpets-6185.mp3":V+"/audios/gif-sounds/trumpet-fail-242645.mp3";var g=be(),c=o(g),v=o(c);k(v,"src",V+"/gifs/"+n);var u=f(v,2);u.__click=function(...F){var _;(_=e.onclick)==null||_.apply(this,F)};var p=o(u),h=f(p,2);i(u);var y=f(u,2);k(y,"src",b),i(c),O(2),i(g),x(()=>{A(v,`h-5/6 ${(t()?"border-green-800":"border-red-600")??""} border-8 shadow-2xl`),k(v,"alt",t()?"Gewonnen!!!":"Verloren :("),m(p,`${(t()?"RICHTIG :)":" leider falsch :(")??""} `),m(h,` ${(t()?"weiter":"nochmal?")??""}`)}),S(y,a),T(y,s),I(r,g),U()}N(["click"]);export{ze as G,Fe as M,Ge as a,ie as b,ke as g,Ie as s};
