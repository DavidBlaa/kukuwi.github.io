import{a5 as T,h as n,a6 as C,a7 as I,a8 as V}from"./runtime.BZDbob96.js";import{b as B,c as E,d as M,f as j,g as q,n as z,j as D}from"./events.CQ-CDWS2.js";function S(s){if(n){var r=!1,t=()=>{if(!r){if(r=!0,s.hasAttribute("value")){var l=s.value;h(s,"value",null),s.value=l}if(s.hasAttribute("checked")){var u=s.checked;h(s,"checked",null),s.checked=u}}};s.__on_r=t,I(t),B()}}function G(s,r){r?s.hasAttribute("selected")||s.setAttribute("selected",""):s.removeAttribute("selected")}function h(s,r,t,l){var u=s.__attributes??(s.__attributes={});n&&(u[r]=s.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&s.nodeName==="LINK")||u[r]!==(u[r]=t)&&(r==="style"&&"__styles"in s&&(s.__styles={}),r==="loading"&&(s[V]=t),t==null?s.removeAttribute(r):typeof t!="string"&&N(s).includes(r)?s[r]=t:s.setAttribute(r,t))}function Y(s,r,t,l,u=!1,v=!1,K=!1){var _=r||{},p=s.tagName==="OPTION";for(var y in r)y in t||(t[y]=null);var $=N(s),w=s.__attributes??(s.__attributes={});for(const i in t){let e=t[i];if(p&&i==="value"&&e==null){s.value=s.__value="",_[i]=e;continue}var g=_[i];if(e!==g){_[i]=e;var A=i[0]+i[1];if(A!=="$$"){if(A==="on"){const f={},c="$$"+i;let o=i.slice(2);var d=D(o);if(E(o)&&(o=o.slice(0,-7),f.capture=!0),!d&&g){if(e!=null)continue;s.removeEventListener(o,_[c],f),_[c]=null}if(e!=null)if(d)s[`__${o}`]=e,j([o]);else{let L=function(O){_[i].call(this,O)};_[c]=M(o,s,L,f)}else d&&(s[`__${o}`]=void 0)}else if(i==="style"&&e!=null)s.style.cssText=e+"";else if(i==="autofocus")q(s,!!e);else if(i==="__value"||i==="value"&&e!=null)s.value=s[i]=s.__value=e;else if(i==="selected"&&p)G(s,e);else{var a=i;u||(a=z(a));var k=a==="defaultValue"||a==="defaultChecked";if(e==null&&!v&&!k)if(w[i]=null,a==="value"||a==="checked"){let f=s;if(a==="value"){let c=f.defaultValue;f.removeAttribute(a),f.defaultValue=c}else{let c=f.defaultChecked;f.removeAttribute(a),f.defaultChecked=c}}else s.removeAttribute(i);else k||$.includes(a)&&(v||typeof e!="string")?s[a]=e:typeof e!="function"&&(n&&(a==="src"||a==="href"||a==="srcset")||h(s,a,e))}i==="style"&&"__styles"in s&&(s.__styles={})}}}return _}var b=new Map;function N(s){var r=b.get(s.nodeName);if(r)return r;b.set(s.nodeName,r=[]);for(var t,l=s,u=Element.prototype;u!==l;){t=C(l);for(var v in t)t[v].set&&r.push(v);l=T(l)}return r}export{Y as a,S as r,h as s};