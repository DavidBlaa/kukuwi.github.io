import"../chunks/disclose-version.Bg9kRutz.js";import"../chunks/legacy.CtaTdtmd.js";import{p as y,a as h,t as o,w as p,v as n}from"../chunks/runtime.BoY70jnu.js";import{e as f}from"../chunks/events.DS6B4PPE.js";import{t as w,a as _}from"../chunks/template.BqF7vZlw.js";import{i as j}from"../chunks/lifecycle.DnoxU_Fn.js";import{g as m}from"../chunks/entry.1Vot0hHv.js";import{b as k}from"../chunks/paths.CiA51Mmq.js";const T=/[&"<]/g;function $(r,e){const t=String(r??""),a=T;a.lastIndex=0;let s="",l=0;for(;a.test(t);){const i=a.lastIndex-1,c=t[i];s+=t.substring(l,i)+(c==="&"?"&amp;":c==='"'?"&quot;":"&lt;"),l=i+1}return s+t.substring(l)}const x={translate:new Map([[!0,"yes"],[!1,"no"]])};function S(r,e,t=!1){if(e==null||!e&&t||e===""&&r==="class")return"";const a=r in x&&x[r].get(e)||e,s=t?"":`="${$(a)}"`;return` ${r}${s}`}var E=w(`<main><div class="flex flex-col h-screen bg-blue-200"><div class="h-3/5 flex items-center justify-center"><img src="/images/logo.png" alt="logo" class="max-w-full max-h-full object-contain"></div> <div class="h-2/5 flex"><div class="w-1/2 flex items-center justify-center"><div class="flex flex-col items-center rounded-2xl"><button class="flex flex-col items-center justify-center
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
						   bg-gray-300"><img${S("src",k+"/images/Pokal.png")} alt="Pokal" class="w-20 h-20"> <span class="text-6xl font-bold">Start</span></button></div></div></div></div></main>`);function M(r,e){y(e,!1);function t(){m("/uebung")}function a(){m("/raten")}j();var s=E(),l=o(s),i=p(o(l),2),c=o(i),d=o(c),u=o(d);n(d),n(c);var b=p(c,2),g=o(b),v=o(g);n(g),n(b),n(i),n(l),n(s),f("click",u,t),f("click",v,a),_(r,s),h()}export{M as component};
