import"../chunks/disclose-version.Bg9kRutz.js";import"../chunks/legacy.kkaBD5aU.js";import{p as D,a as E,s as b,c as s,r as i,g as r,n as x,t as H,a9 as h}from"../chunks/runtime.BF1lsdxA.js";import{s as I}from"../chunks/render.BxGQUWuo.js";import{e as k,i as y}from"../chunks/each.C-h4Xvgg.js";import{b as $,a,t as d}from"../chunks/template.sUr9O-vt.js";import{B as w,s as J}from"../chunks/Button3d.wjt0wZGt.js";import{i as K}from"../chunks/lifecycle.BZ4zUSDy.js";import{g as _}from"../chunks/entry.BX5ZIsgi.js";import{b as B}from"../chunks/paths.COvWp3PK.js";import{k as M}from"../chunks/klangQuizLevels.C_kQ09Xn.js";import{p as N}from"../chunks/patternLevels.BRSVCcvJ.js";const O=[{difficulty:"einfach",pairs:2},{difficulty:"mittel",pairs:3},{difficulty:"schwer",pairs:4}];var S=d('<div class="flex h-full w-full items-center justify-center text-5xl font-bold text-white"><!></div>'),T=d('<div class="flex h-full flex-col items-center gap-8"><h1> </h1> <div class="grid h-5/6 w-full gap-8"></div></div>'),U=d('<main class="flex h-screen flex-col overflow-hidden"><div class="grid h-4/5 grid-cols-3 gap-2 pt-12"></div> <!></main>');function ct(F,C){D(C,!1);const u=[{difficulty:"einfach",bgFront:"bg-green-500",bgBack:"bg-green-600"},{difficulty:"mittel",bgFront:"bg-yellow-500",bgBack:"bg-yellow-600"},{difficulty:"schwer",bgFront:"bg-red-500",bgBack:"bg-red-600"}],L=[{title:"Ratespiel",textColor:"text-kukuwi-red",path:"Quiz-Game",levels:M.slice(0,3)},{title:"Pattern",textColor:"text-kukuwi-yellow",path:"Pattern-Game",levels:N},{title:"Genre",textColor:"text-kukuwi-blue",path:"Genre-Game",levels:O}];function G(e,t){_(`${B}/${e}?difficulty=${t}`)}function P(e){return u.find(t=>t.difficulty===e).bgFront}function j(e){return u.find(t=>t.difficulty===e).bgBack}K();var n=U(),f=s(n);k(f,5,()=>L,y,(e,t)=>{var l=T(),o=s(l),Q=s(o,!0);i(o);var p=b(o,2);k(p,5,()=>r(t).levels,y,(q,g,v)=>{var c=S(),R=s(c),V=h(()=>P(r(g).difficulty)),Z=h(()=>j(r(g).difficulty));w(R,{get bgFront(){return r(V)},get bgBack(){return r(Z)},padding:"px-1 py-1 md:px-2 md:py-2 lg:px-8 lg:py-6",onclick:()=>G(r(t).path,v+1),onmouseup:()=>{},children:(A,W)=>{x();var m=$();m.nodeValue=`Level ${v+1}`,a(A,m)},$$slots:{default:!0}}),i(c),a(q,c)}),i(p),i(l),H(()=>{J(o,`flex items-center justify-center text-7xl font-bold ${r(t).textColor} h-1/6`),I(Q,r(t).title)}),a(e,l)}),i(f);var z=b(f,2);w(z,{bgFront:"bg-kukuwi-blue",bgBack:"bg-kukuwi-blue-dark",padding:"px-8 py-2",onclick:()=>_(`${B}/`),onmouseup:()=>{},children:(e,t)=>{x();var l=$("Zurück");a(e,l)},$$slots:{default:!0}}),i(n),a(F,n),E()}export{ct as component};