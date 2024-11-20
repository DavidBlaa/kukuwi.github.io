import{t as y,a as h}from"../chunks/disclose-version.DDCgqJuG.js";import"../chunks/legacy.C7xST7Is.js";import{p as w,a as _,t as o,w as f,v as n}from"../chunks/runtime.CAWppyhh.js";import{e as p}from"../chunks/events.CBCMWz0R.js";import{i as j}from"../chunks/lifecycle.CDr--z5I.js";import{g as m}from"../chunks/entry.m7QxkMHW.js";import{b as k}from"../chunks/paths.xXlC1osm.js";const T=/[&"<]/g;function $(e,r){const t=String(e??""),a=T;a.lastIndex=0;let s="",l=0;for(;a.test(t);){const i=a.lastIndex-1,c=t[i];s+=t.substring(l,i)+(c==="&"?"&amp;":c==='"'?"&quot;":"&lt;"),l=i+1}return s+t.substring(l)}const x={translate:new Map([[!0,"yes"],[!1,"no"]])};function S(e,r,t=!1){if(r==null||!r&&t||r===""&&e==="class")return"";const a=e in x&&x[e].get(r)||r,s=t?"":`="${$(a)}"`;return` ${e}${s}`}var E=y(`<main><div class="flex flex-col h-screen bg-blue-200"><div class="h-3/5 flex items-center justify-center"><img src="/images/logo.png" alt="logo" class="max-w-full max-h-full object-contain"></div> <div class="h-2/5 flex"><div class="w-1/2 flex items-center justify-center"><div class="flex flex-col items-center rounded-2xl"><button class="flex flex-col items-center justify-center
						border-b-gray-600
                     border-l-gray-200
                     border-t-gray-400
                     border-r-gray-400
					  border-b-[20px]
                      border-l-[10px]
                      border-r-[10px]
                      border-t-[10px]
                      shadow-2xl [rotate-y-20deg]
					  bg-gray-300"><img src="/images/Hut_2.png" alt="Hut" class="w-20 h-20 object-cover"> <span class="text-6xl font-bold">Üben</span></button></div></div> <div class="w-1/2 flex items-center justify-center"><div class="flex flex-col items-center rounded-2xl"><button class="flex flex-col items-center justify-center
						 border-b-gray-600
                         border-l-gray-200
                         border-t-gray-400
                         border-r-gray-400
					       border-b-[20px]
                           border-l-[10px]
                           border-r-[10px]
                           border-t-[10px]
                           shadow-2xl [rotate-y-20deg]
						   bg-gray-300"><img${S("src",k+"/images/Pokal.png")} alt="Pokal" class="w-20 h-20"> <span class="text-6xl font-bold">Start</span></button></div></div></div></div></main>`);function G(e,r){w(r,!1);function t(){m("/uebung")}function a(){m("/raten")}j();var s=E(),l=o(s),i=f(o(l),2),c=o(i),d=o(c),u=o(d);n(d),n(c);var b=f(c,2),g=o(b),v=o(g);n(g),n(b),n(i),n(l),n(s),p("click",u,t),p("click",v,a),h(e,s),_()}export{G as component};
