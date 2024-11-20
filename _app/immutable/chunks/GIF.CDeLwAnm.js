import"./disclose-version.Bg9kRutz.js";import{p as M,t as c,w as l,v as u,M as G,x as I,a as j}from"./runtime.BoY70jnu.js";import{a as b}from"./store.CPNWNroT.js";import{a as k,t as z}from"./template.BqF7vZlw.js";import{i as F,a as d,b as C,c as R,s as T}from"./instruments.DzB2YNIC.js";import{d as A}from"./events.DS6B4PPE.js";import{p as m}from"./props.DxYjNcqg.js";import{b as g}from"./paths.CiA51Mmq.js";const B=["success1.gif","success2.gif","success3.gif","success4.gif","success5.gif","gil-cat.gif","happy-snoopy.gif"],H=["fail1.gif","fail2.gif","fail3.gif","fail4.gif"];function S(e,t){let s=[];return s=F,s=K(s).slice(0,e),s.map((a,r)=>({index:r,name:a.name,category:a.category,image:a.image,audio:a.audios[Math.floor(Math.random()*a.audios.length)]}))}function K(e){for(let t=e.length;t>0;t--){const s=Math.floor(Math.random()*t);[e[t-1],e[s]]=[e[s],e[t-1]]}return e}function U(e){return e[Math.floor(Math.random()*e.length)]}function Q(e){const t=e?B:H;return t[Math.floor(Math.random()*t.length)]}var V=z(`<div class="fixed bottom-0 top-0 h-screen w-screen flex-col items-center justify-start"><div class="fixed bottom-0 top-0 z-50 flex h-full w-full flex-col items-center justify-start p-7"><img> <button class="
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
					"> <br> </button> <audio></audio></div> <div class="z-15 fixed bottom-0 top-0 flex h-screen w-screen flex-col items-center justify-center bg-gray-500 opacity-80"></div></div>`);function W(e,t){M(t,!0);let s=m(t,"success",11,!0),a=m(t,"gif_sound_pause",15,!0),r=m(t,"volume",15,.5),h=Q(s()),v=s()?g+"/audios/gif-sounds/success-fanfare-trumpets-6185.mp3":g+"/audios/gif-sounds/trumpet-fail-242645.mp3";var f=V(),p=c(f),o=c(p);d(o,"src",g+"/gifs/"+h);var i=l(o,2);i.__click=function(...y){var x;(x=t.onclick)==null||x.apply(this,y)};var _=c(i),w=l(_,2);u(i);var n=l(i,2);d(n,"src",v),u(p),G(2),u(f),I(()=>{T(o,`h-5/6 ${(s()?"border-green-800":"border-red-600")??""} border-8 shadow-2xl`),d(o,"alt",s()?"Gewonnen!!!":"Verloren :("),b(_,`${(s()?"RICHTIG :)":" leider falsch :(")??""} `),b(w,` ${(s()?"weiter":"nochmal?")??""}`)}),C(n,a),R(n,r),k(e,f),j()}A(["click"]);export{W as G,S as g,U as s};
