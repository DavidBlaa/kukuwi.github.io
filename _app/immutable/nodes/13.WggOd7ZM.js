import"../chunks/disclose-version.Bg9kRutz.js";import{p as b,f as k,a as P,b as $,g as t,d as n,c as F,r as G,u as I,e as N}from"../chunks/runtime.BF1lsdxA.js";import{c as B,a as i,t as E}from"../chunks/template.sUr9O-vt.js";import{i as R}from"../chunks/if.B6rBiUnJ.js";import{e as T,k as w,p as M}from"../chunks/index.DZ6U9S6t.js";import{s as S,p as V,a as j}from"../chunks/props.BJTZrMLw.js";import{P as q}from"../chunks/PatternGame.CMO6Vflr.js";import{o as z}from"../chunks/index-client.CXdwGFqR.js";var A=E('<main class="h-screen w-screen bg-blue-200 p-5"><!></main>');function U(u,c){b(c,!0);const f=S(),m=()=>j(M,"$page",f);let p=.4,s=n(1),a=n(void 0);z(()=>{const e=m().url.searchParams.get("difficulty");e===null&&T(404,{message:"No difficulty defined in search params."}),$(a,V(e))});function d(e){e!==0&&I(s)}const l="Nächste Runde",g="Erneuter Versuch";var o=B(),v=k(o);{var h=e=>{var r=A(),_=F(r);w(_,()=>t(s),y=>{var x=N(()=>parseInt(t(a)));q(y,{get difficulty(){return t(x)},handleNextRound:d,get volume(){return p},GIFButtonTextSuccess:l,GIFButtonTextFailure:g})}),G(r),i(e,r)};R(v,e=>{t(a)&&e(h)})}i(u,o),P()}export{U as component};