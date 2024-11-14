import{a as z,t as R}from"./disclose-version.C6y0ohnU.js";import{p as S,v as f,x as u,w as c,z as A,y as C,a as F}from"./runtime.CAD8VR5C.js";import{d as H,a as b}from"./store.CwYFn7uV.js";import{b as M,a as O,s as T,c as l,d as V,f as q,e as B,g as D}from"./data.DghzS6zA.js";import{p as m,a as v}from"./props.Bje3ZE7K.js";import{b as o}from"./paths.DHHCQfCo.js";function E(e){return e!=null?parseInt(""+Math.random()*e.length):-1}function i(e){return e[E(e)]}var J=R(`<div class="fixed top-0 bottom-0 w-screen h-screen flex-col justify-start items-center"><div class="fixed top-0 bottom-0 flex flex-col justify-start items-center h-full w-full z-50 p-7"><img> <button class="
							flex
							flex-col
							justify-center
							bg-amber-500
							h-1/6
							w-fit
							rounded-lg
							cursor-pointer
							select-none
							active:translate-y-2  active:[box-shadow:0_0px_0_0_#d1870a,0_0px_0_0_#1b70f841]
							active:border-b-[0px]
							transition-all duration-150 [box-shadow:0_8px_0_0_#d1870a,0_13px_0_0_#1b70f841]
							border-[1px]
							mt-3
							text-3xl
							font-extrabold
							py-2
							px-7
					"> <br> </button> <audio></audio></div> <div class="fixed top-0 bottom-0 flex flex-col justify-center items-center h-screen w-screen  z-15 opacity-80 bg-gray-500"></div></div>`);function W(e,s){S(s,!0);let t=m(s,"success",11,!0),g=m(s,"gif_sound_pause",15,!0),h=m(s,"volume",15,.5);function y(){return t()?o+"/gifs/"+i(V):o+"/gifs/"+i(q)}function w(){return t()?o+"/audios/gif-sounds/"+i(B):o+"/audios/gif-sounds/"+i(D)}let G=v(y()),j=v(w());var n=J(),p=f(n),a=f(p),r=u(a,2);r.__click=function(...k){var _;(_=s.onclick)==null||_.apply(this,k)};var x=f(r),I=u(x,2);c(r);var d=u(r,2);c(p),A(2),c(n),C(()=>{T(a,`h-5/6 ${(t()?"border-green-800":"border-red-600")??""} border-8 shadow-2xl`),l(a,"src",G),l(a,"alt",t()?"Gewonnen!!!":"Verloren :("),b(x,`${(t()?"RICHTIG :)":" leider falsch :(")??""} `),b(I,` ${(t()?"weiter":"nochmal?")??""}`),l(d,"src",j)}),M(d,g),O(d,h),z(e,n),F()}H(["click"]);export{W as G};
