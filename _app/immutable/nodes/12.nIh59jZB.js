import"../chunks/disclose-version.Bg9kRutz.js";import{c as f,r as u,s as x,t as I,p as C,d as p,a as z,g as e,b as o,e as D}from"../chunks/runtime.BFcw_75_.js";import{a as B,t as R}from"../chunks/template.B-ObnXcP.js";import{i as T}from"../chunks/if.BqcDyKEL.js";import{e as E,i as J}from"../chunks/each.CJS3MHhM.js";import{b as A,p as v}from"../chunks/props.073RLZyP.js";import{o as q}from"../chunks/index-client.Bxs-rmcU.js";import{d as H}from"../chunks/render.DJfPp5iK.js";import{s as k,a as j}from"../chunks/Button3d.SKqD834h.js";import{b as K}from"../chunks/instruments.rsH6nJgP.js";import{b}from"../chunks/paths.DCwD0S_x.js";import{a as L,b as F,c as N,G as O}from"../chunks/GIF.D1-RCoXJ.js";import{g as Q}from"../chunks/entry.DRg3m0m5.js";var U=R('<div class="flex flex-col items-center justify-center justify-items-center"><button class="flex cursor-pointer flex-col items-center justify-center w-[200px] h-[200px] perspective-1000 svelte-10443yl"><div><div class="absolute h-full w-full rounded-xl border-8 border-blue-900 backface-hidden svelte-10443yl"><img alt="Front" class="h-full w-full object-cover shadow-lg"></div> <div><img alt="Back" class="h-full w-full object-cover shadow-lg"></div></div> <audio></audio></button></div>');function V(w,i){let a=A(i,"paused",15,!0);var n=U(),r=f(n);r.__mouseup=function(...g){var m;(m=i.onmouseup)==null||m.apply(this,g)};var l=f(r),d=f(l),c=f(d);k(c,"src",b+"/icons/Memory/200w/Front200.webp"),u(d);var h=x(d,2),_=f(h);u(h),u(l);var y=x(l,2);u(r),u(n),I(()=>{r.disabled=i.finished,j(l,`${`absolute w-full h-full transform-style-3d transition-transform duration-500 ${i.isRotated?"rotate-y-180":""}`??""} svelte-10443yl`),j(h,`absolute w-full h-full backface-hidden transform rotate-y-180 rounded-xl border-8 ${(i.finished?"border-gray-600":"border-green-700")??""} svelte-10443yl`),k(_,"src",i.finished?b+"/icons/Memory/200w/Back-Gray200.webp":b+"/icons/Memory/200w/Back200.webp"),k(y,"src",b+i.audioSource)}),K(y,a),B(w,n)}H(["mouseup"]);const W=[{genre:"Jazz",audioPaths:["Drums - Jazz Break 125 bpm.mp3"]},{genre:"Funk",audioPaths:["Bs1 Funk Cmaj 124bpm.mp3"]},{genre:"Punk",audioPaths:["Gt1 Punk Emaj 170bpm.mp3"]},{genre:"Blues",audioPaths:["Piano Phrase Blues Sky Eb Minor 92bpm.mp3"]}];var X=R('<div class="absolute top-0 left-0"><!></div>'),Y=R('<div class="flex h-screen w-screen flex-col items-center justify-center justify-items-center"><div class="grid h-fit w-fit grid-cols-4 gap-5 rounded-xl bg-gray-300 p-12"></div> <!></div>');function fe(w,i){C(i,!0);let a=p(v([])),n=p(-1),r=p(0),l=p(""),d=p(0),c=p(!1),h=1;function _(){Q(b+"/")}q(()=>{for(const t of L(W,4))e(a).push({index:-1,genre:t.genre,paused:!0,isRotated:!1,audioPath:t.audioPaths[F(t.audioPaths)],finished:!1}),e(a).push({index:-1,genre:t.genre,paused:!0,isRotated:!1,audioPath:t.audioPaths[F(t.audioPaths)],finished:!1});o(a,v(N(e(a))));for(const[t,s]of e(a).entries())s.index=t;o(d,v(e(a).length))});function y(t){if(!e(a)[t].finished&&e(n)!=t){if(e(r)==2){o(r,0);for(const s of e(a))s.finished||(s.isRotated=!1)}for(const s of e(a))s.paused=!0;if(e(a)[t].isRotated=!e(a)[t].isRotated,e(a)[t].paused=!e(a)[t].paused,e(r)==0?(o(r,1),o(l,v(e(a)[t].genre)),o(n,v(t))):e(r)==1&&(o(r,2),e(l)===e(a)[t].genre&&(e(a)[t].finished=!0,e(a)[e(n)].finished=!0,o(d,e(d)-2))),e(d)==0){for(const s of e(a))s.paused=!0;o(c,!0)}}}var g=Y(),m=f(g);E(m,21,()=>e(a),J,(t,s)=>{var P=D(()=>"/audios/"+e(s).audioPath);V(t,{get isRotated(){return e(s).isRotated},get paused(){return e(s).paused},onmouseup:()=>y(e(s).index),get audioSource(){return e(P)},get finished(){return e(s).finished}})}),u(m);var G=x(m,2);{var M=t=>{var s=X(),P=f(s);O(P,{onclick:_,GIFButtonTextSuccess:"Gewonnen",GIFButtonTextFailure:" ",gifSoundPaused:!1,get volume(){return h},get success(){return e(c)},set success(S){o(c,v(S))}}),u(s),B(t,s)};T(G,t=>{e(c)&&t(M)})}u(g),B(w,g),z()}export{fe as component};
