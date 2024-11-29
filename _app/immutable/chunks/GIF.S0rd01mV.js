import"./disclose-version.Bg9kRutz.js";import{p as M,g as c,s as l,r as u,i as G,y as I,a as j}from"./runtime.Buz-Ab-H.js";import{a as x}from"./store._s3TlCSQ.js";import{a as k,t as z}from"./template.ByiHjxH9.js";import{s as d}from"./attributes.D7pF87Us.js";import{i as F,b as C,a as R,s as T}from"./instruments.CVYOVaCU.js";import{d as A}from"./utils.eJbWBJJ3.js";import{p as m}from"./props.CZg9-NLD.js";import{b as g}from"./paths.D-zkjI5B.js";const B=["success1.gif","success2.gif","success3.gif","success4.gif","success5.gif","gil-cat.gif","happy-snoopy.gif"],H=["fail1.gif","fail2.gif","fail3.gif","fail4.gif"];function U(e,t){let s=[];return s=F,s=K(s).slice(0,e),s.map((o,r)=>({index:r,name:o.name,category:o.category,image:o.image,audio:o.audios[Math.floor(Math.random()*o.audios.length)]}))}function K(e){for(let t=e.length;t>0;t--){const s=Math.floor(Math.random()*t);[e[t-1],e[s]]=[e[s],e[t-1]]}return e}function W(e){return e[Math.floor(Math.random()*e.length)]}function Q(e){const t=e?B:H;return t[Math.floor(Math.random()*t.length)]}var V=z(`<div class="fixed bottom-0 top-0 h-screen w-screen flex-col items-center justify-start"><div class="fixed bottom-0 top-0 z-50 flex h-full w-full flex-col items-center justify-start p-7"><img> <button class="
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
					"> <br> </button> <audio></audio></div> <div class="z-15 fixed bottom-0 top-0 flex h-screen w-screen flex-col items-center justify-center bg-gray-500 opacity-80"></div></div>`);function X(e,t){M(t,!0);let s=m(t,"success",11,!0),o=m(t,"gif_sound_pause",15,!0),r=m(t,"volume",15,.5),h=Q(s()),v=s()?g+"/audios/gif-sounds/success-fanfare-trumpets-6185.mp3":g+"/audios/gif-sounds/trumpet-fail-242645.mp3";var f=V(),p=c(f),a=c(p);d(a,"src",g+"/gifs/"+h);var i=l(a,2);i.__click=function(...w){var b;(b=t.onclick)==null||b.apply(this,w)};var _=c(i),y=l(_,2);u(i);var n=l(i,2);d(n,"src",v),u(p),G(2),u(f),I(()=>{T(a,`h-5/6 ${(s()?"border-green-800":"border-red-600")??""} border-8 shadow-2xl`),d(a,"alt",s()?"Gewonnen!!!":"Verloren :("),x(_,`${(s()?"RICHTIG :)":" leider falsch :(")??""} `),x(y,` ${(s()?"weiter":"nochmal?")??""}`)}),C(n,o),R(n,r),k(e,f),j()}A(["click"]);export{X as G,U as g,W as s};
