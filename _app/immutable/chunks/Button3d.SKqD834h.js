import{ao as me,i as N,aH as ye,aI as ve,aJ as xe,p as we,t as _e,a as ke,c as D,r as ee,g as re,e as te}from"./runtime.BFcw_75_.js";import{i as Ce,c as Ae,d as le,b as ze,n as Se,f as Me,g as Ne}from"./render.DJfPp5iK.js";import"./disclose-version.Bg9kRutz.js";import{a as Ge,t as Ie}from"./template.B-ObnXcP.js";import{s as Re}from"./snippet.DIbQAs0V.js";import{b as Pe}from"./props.073RLZyP.js";function ce(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(r=0;r<s;r++)e[r]&&(t=ce(e[r]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function Te(){for(var e,r,t=0,o="",s=arguments.length;t<s;t++)(e=arguments[t])&&(r=ce(e))&&(o&&(o+=" "),o+=r);return o}function q(e){return typeof e=="object"?Te(e):e??""}function xr(e){if(N){var r=!1,t=()=>{if(!r){if(r=!0,e.hasAttribute("value")){var o=e.value;Y(e,"value",null),e.value=o}if(e.hasAttribute("checked")){var s=e.checked;Y(e,"checked",null),e.checked=s}}};e.__on_r=t,xe(t),Me()}}function je(e,r){r?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Y(e,r,t,o){var s=e.__attributes??(e.__attributes={});N&&(s[r]=e.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&e.nodeName==="LINK")||s[r]!==(s[r]=t)&&(r==="style"&&"__styles"in e&&(e.__styles={}),r==="loading"&&(e[ve]=t),t==null?e.removeAttribute(r):typeof t!="string"&&de(e).includes(r)?e[r]=t:e.setAttribute(r,t))}function wr(e,r,t,o,s=!1,n=!1,i=!1){var a=r||{},p=e.tagName==="OPTION";for(var f in r)f in t||(t[f]=null);t.class&&(t.class=q(t.class));var m=de(e),k=e.__attributes??(e.__attributes={});for(const c in t){let u=t[c];if(p&&c==="value"&&u==null){e.value=e.__value="",a[c]=u;continue}var x=a[c];if(u!==x){a[c]=u;var C=c[0]+c[1];if(C!=="$$"){if(C==="on"){const y={},v="$$"+c;let _=c.slice(2);var w=Ne(_);if(Ce(_)&&(_=_.slice(0,-7),y.capture=!0),!w&&x){if(u!=null)continue;e.removeEventListener(_,a[v],y),a[v]=null}if(u!=null)if(w)e[`__${_}`]=u,le([_]);else{let j=function(E){a[c].call(this,E)};a[v]=Ae(_,e,j,y)}else w&&(e[`__${_}`]=void 0)}else if(c==="style"&&u!=null)e.style.cssText=u+"";else if(c==="autofocus")ze(e,!!u);else if(c==="__value"||c==="value"&&u!=null)e.value=e[c]=e.__value=u;else if(c==="selected"&&p)je(e,u);else{var d=c;s||(d=Se(d));var g=d==="defaultValue"||d==="defaultChecked";if(u==null&&!n&&!g)if(k[c]=null,d==="value"||d==="checked"){let y=e;if(d==="value"){let v=y.defaultValue;y.removeAttribute(d),y.defaultValue=v}else{let v=y.defaultChecked;y.removeAttribute(d),y.defaultChecked=v}}else e.removeAttribute(c);else g||m.includes(d)&&(n||typeof u!="string")?e[d]=u:typeof u!="function"&&(N&&(d==="src"||d==="href"||d==="srcset")||Y(e,d,u))}c==="style"&&"__styles"in e&&(e.__styles={})}}}return a}var oe=new Map;function de(e){var r=oe.get(e.nodeName);if(r)return r;oe.set(e.nodeName,r=[]);for(var t,o=e,s=Element.prototype;s!==o;){t=ye(o);for(var n in t)t[n].set&&r.push(n);o=me(o)}return r}function _r(e,r,t){var o=e.__className,s=ue(r);N&&e.getAttribute("class")===s?e.__className=s:(o!==s||N&&e.getAttribute("class")!==s)&&(s===""?e.removeAttribute("class"):e.setAttribute("class",s),e.__className=s)}function se(e,r,t){var o=e.__className,s=ue(r);N&&e.className===s?e.__className=s:(o!==s||N&&e.className!==s)&&(r==null?e.removeAttribute("class"):e.className=s,e.__className=s)}function ue(e,r){return(e??"")+""}const H="-",Ee=e=>{const r=Oe(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:i=>{const a=i.split(H);return a[0]===""&&a.length!==1&&a.shift(),pe(a,r)||Le(i)},getConflictingClassGroupIds:(i,a)=>{const p=t[i]||[];return a&&o[i]?[...p,...o[i]]:p}}},pe=(e,r)=>{var i;if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),s=o?pe(e.slice(1),o):void 0;if(s)return s;if(r.validators.length===0)return;const n=e.join(H);return(i=r.validators.find(({validator:a})=>a(n)))==null?void 0:i.classGroupId},ne=/^\[(.+)\]$/,Le=e=>{if(ne.test(e)){const r=ne.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},Oe=e=>{const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return Be(Object.entries(e.classGroups),t).forEach(([n,i])=>{J(i,o,n,r)}),o},J=(e,r,t,o)=>{e.forEach(s=>{if(typeof s=="string"){const n=s===""?r:ae(r,s);n.classGroupId=t;return}if(typeof s=="function"){if(Ve(s)){J(s(o),r,t,o);return}r.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([n,i])=>{J(i,ae(r,n),t,o)})})},ae=(e,r)=>{let t=e;return r.split(H).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t},Ve=e=>e.isThemeGetter,Be=(e,r)=>r?e.map(([t,o])=>{const s=o.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([i,a])=>[r+i,a])):n);return[t,s]}):e,We=e=>{if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;const s=(n,i)=>{t.set(n,i),r++,r>e&&(r=0,o=t,t=new Map)};return{get(n){let i=t.get(n);if(i!==void 0)return i;if((i=o.get(n))!==void 0)return s(n,i),i},set(n,i){t.has(n)?t.set(n,i):s(n,i)}}},fe="!",Fe=e=>{const{separator:r,experimentalParseClassName:t}=e,o=r.length===1,s=r[0],n=r.length,i=a=>{const p=[];let f=0,m=0,k;for(let g=0;g<a.length;g++){let c=a[g];if(f===0){if(c===s&&(o||a.slice(g,g+n)===r)){p.push(a.slice(m,g)),m=g+n;continue}if(c==="/"){k=g;continue}}c==="["?f++:c==="]"&&f--}const x=p.length===0?a:a.substring(m),C=x.startsWith(fe),w=C?x.substring(1):x,d=k&&k>m?k-m:void 0;return{modifiers:p,hasImportantModifier:C,baseClassName:w,maybePostfixModifierPosition:d}};return t?a=>t({className:a,parseClassName:i}):i},Ue=e=>{if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r},qe=e=>({cache:We(e.cacheSize),parseClassName:Fe(e),...Ee(e)}),Ye=/\s+/,Je=(e,r)=>{const{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:s}=r,n=[],i=e.trim().split(Ye);let a="";for(let p=i.length-1;p>=0;p-=1){const f=i[p],{modifiers:m,hasImportantModifier:k,baseClassName:x,maybePostfixModifierPosition:C}=t(f);let w=!!C,d=o(w?x.substring(0,C):x);if(!d){if(!w){a=f+(a.length>0?" "+a:a);continue}if(d=o(x),!d){a=f+(a.length>0?" "+a:a);continue}w=!1}const g=Ue(m).join(":"),c=k?g+fe:g,u=c+d;if(n.includes(u))continue;n.push(u);const y=s(d,w);for(let v=0;v<y.length;++v){const _=y[v];n.push(c+_)}a=f+(a.length>0?" "+a:a)}return a};function He(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=be(r))&&(o&&(o+=" "),o+=t);return o}const be=e=>{if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=be(e[o]))&&(t&&(t+=" "),t+=r);return t};function Ke(e,...r){let t,o,s,n=i;function i(p){const f=r.reduce((m,k)=>k(m),e());return t=qe(f),o=t.cache.get,s=t.cache.set,n=a,a(p)}function a(p){const f=o(p);if(f)return f;const m=Je(p,t);return s(p,m),m}return function(){return n(He.apply(null,arguments))}}const b=e=>{const r=t=>t[e]||[];return r.isThemeGetter=!0,r},ge=/^\[(?:([a-z-]+):)?(.+)\]$/i,Xe=/^\d+\/\d+$/,Ze=new Set(["px","full","screen"]),Qe=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,$e=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,De=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,er=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,rr=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,z=e=>G(e)||Ze.has(e)||Xe.test(e),S=e=>I(e,"length",cr),G=e=>!!e&&!Number.isNaN(Number(e)),U=e=>I(e,"number",G),P=e=>!!e&&Number.isInteger(Number(e)),tr=e=>e.endsWith("%")&&G(e.slice(0,-1)),l=e=>ge.test(e),M=e=>Qe.test(e),or=new Set(["length","size","percentage"]),sr=e=>I(e,or,he),nr=e=>I(e,"position",he),ar=new Set(["image","url"]),ir=e=>I(e,ar,ur),lr=e=>I(e,"",dr),T=()=>!0,I=(e,r,t)=>{const o=ge.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1},cr=e=>$e.test(e)&&!De.test(e),he=()=>!1,dr=e=>er.test(e),ur=e=>rr.test(e),pr=()=>{const e=b("colors"),r=b("spacing"),t=b("blur"),o=b("brightness"),s=b("borderColor"),n=b("borderRadius"),i=b("borderSpacing"),a=b("borderWidth"),p=b("contrast"),f=b("grayscale"),m=b("hueRotate"),k=b("invert"),x=b("gap"),C=b("gradientColorStops"),w=b("gradientColorStopPositions"),d=b("inset"),g=b("margin"),c=b("opacity"),u=b("padding"),y=b("saturate"),v=b("scale"),_=b("sepia"),j=b("skew"),E=b("space"),K=b("translate"),V=()=>["auto","contain","none"],B=()=>["auto","hidden","clip","visible","scroll"],W=()=>["auto",l,r],h=()=>[l,r],X=()=>["",z,S],L=()=>["auto",G,l],Z=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],O=()=>["solid","dashed","dotted","double","none"],Q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],F=()=>["start","end","center","between","around","evenly","stretch"],R=()=>["","0",l],$=()=>["auto","avoid","all","avoid-page","page","left","right","column"],A=()=>[G,l];return{cacheSize:500,separator:":",theme:{colors:[T],spacing:[z,S],blur:["none","",M,l],brightness:A(),borderColor:[e],borderRadius:["none","","full",M,l],borderSpacing:h(),borderWidth:X(),contrast:A(),grayscale:R(),hueRotate:A(),invert:R(),gap:h(),gradientColorStops:[e],gradientColorStopPositions:[tr,S],inset:W(),margin:W(),opacity:A(),padding:h(),saturate:A(),scale:A(),sepia:R(),skew:A(),space:h(),translate:h()},classGroups:{aspect:[{aspect:["auto","square","video",l]}],container:["container"],columns:[{columns:[M]}],"break-after":[{"break-after":$()}],"break-before":[{"break-before":$()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Z(),l]}],overflow:[{overflow:B()}],"overflow-x":[{"overflow-x":B()}],"overflow-y":[{"overflow-y":B()}],overscroll:[{overscroll:V()}],"overscroll-x":[{"overscroll-x":V()}],"overscroll-y":[{"overscroll-y":V()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[d]}],"inset-x":[{"inset-x":[d]}],"inset-y":[{"inset-y":[d]}],start:[{start:[d]}],end:[{end:[d]}],top:[{top:[d]}],right:[{right:[d]}],bottom:[{bottom:[d]}],left:[{left:[d]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",P,l]}],basis:[{basis:W()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",l]}],grow:[{grow:R()}],shrink:[{shrink:R()}],order:[{order:["first","last","none",P,l]}],"grid-cols":[{"grid-cols":[T]}],"col-start-end":[{col:["auto",{span:["full",P,l]},l]}],"col-start":[{"col-start":L()}],"col-end":[{"col-end":L()}],"grid-rows":[{"grid-rows":[T]}],"row-start-end":[{row:["auto",{span:[P,l]},l]}],"row-start":[{"row-start":L()}],"row-end":[{"row-end":L()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",l]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",l]}],gap:[{gap:[x]}],"gap-x":[{"gap-x":[x]}],"gap-y":[{"gap-y":[x]}],"justify-content":[{justify:["normal",...F()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...F(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...F(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[u]}],px:[{px:[u]}],py:[{py:[u]}],ps:[{ps:[u]}],pe:[{pe:[u]}],pt:[{pt:[u]}],pr:[{pr:[u]}],pb:[{pb:[u]}],pl:[{pl:[u]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[E]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[E]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",l,r]}],"min-w":[{"min-w":[l,r,"min","max","fit"]}],"max-w":[{"max-w":[l,r,"none","full","min","max","fit","prose",{screen:[M]},M]}],h:[{h:[l,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[l,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[l,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[l,r,"auto","min","max","fit"]}],"font-size":[{text:["base",M,S]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",U]}],"font-family":[{font:[T]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",l]}],"line-clamp":[{"line-clamp":["none",G,U]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",z,l]}],"list-image":[{"list-image":["none",l]}],"list-style-type":[{list:["none","disc","decimal",l]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[c]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[c]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...O(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",z,S]}],"underline-offset":[{"underline-offset":["auto",z,l]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:h()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",l]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",l]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[c]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Z(),nr]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",sr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},ir]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[C]}],"gradient-via":[{via:[C]}],"gradient-to":[{to:[C]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[c]}],"border-style":[{border:[...O(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[c]}],"divide-style":[{divide:O()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...O()]}],"outline-offset":[{"outline-offset":[z,l]}],"outline-w":[{outline:[z,S]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:X()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[c]}],"ring-offset-w":[{"ring-offset":[z,S]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",M,lr]}],"shadow-color":[{shadow:[T]}],opacity:[{opacity:[c]}],"mix-blend":[{"mix-blend":[...Q(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Q()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[p]}],"drop-shadow":[{"drop-shadow":["","none",M,l]}],grayscale:[{grayscale:[f]}],"hue-rotate":[{"hue-rotate":[m]}],invert:[{invert:[k]}],saturate:[{saturate:[y]}],sepia:[{sepia:[_]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[p]}],"backdrop-grayscale":[{"backdrop-grayscale":[f]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[m]}],"backdrop-invert":[{"backdrop-invert":[k]}],"backdrop-opacity":[{"backdrop-opacity":[c]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[_]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",l]}],duration:[{duration:A()}],ease:[{ease:["linear","in","out","in-out",l]}],delay:[{delay:A()}],animate:[{animate:["none","spin","ping","pulse","bounce",l]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[v]}],"scale-x":[{"scale-x":[v]}],"scale-y":[{"scale-y":[v]}],rotate:[{rotate:[P,l]}],"translate-x":[{"translate-x":[K]}],"translate-y":[{"translate-y":[K]}],"skew-x":[{"skew-x":[j]}],"skew-y":[{"skew-y":[j]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",l]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",l]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":h()}],"scroll-mx":[{"scroll-mx":h()}],"scroll-my":[{"scroll-my":h()}],"scroll-ms":[{"scroll-ms":h()}],"scroll-me":[{"scroll-me":h()}],"scroll-mt":[{"scroll-mt":h()}],"scroll-mr":[{"scroll-mr":h()}],"scroll-mb":[{"scroll-mb":h()}],"scroll-ml":[{"scroll-ml":h()}],"scroll-p":[{"scroll-p":h()}],"scroll-px":[{"scroll-px":h()}],"scroll-py":[{"scroll-py":h()}],"scroll-ps":[{"scroll-ps":h()}],"scroll-pe":[{"scroll-pe":h()}],"scroll-pt":[{"scroll-pt":h()}],"scroll-pr":[{"scroll-pr":h()}],"scroll-pb":[{"scroll-pb":h()}],"scroll-pl":[{"scroll-pl":h()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",l]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[z,S,U]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},ie=Ke(pr);var fr=Ie("<button><span><!></span></button>");function kr(e,r){we(r,!0);let t=Pe(r,"translateY",3,"translate-y-[-0.375rem]");var o=fr();const s=te(()=>q(ie("rounded-xl border-none p-0 active:[&>span]:translate-y-[-0.125rem]",r.bgBack,r.style)));o.__click=function(...p){var f;(f=r.onclick)==null||f.apply(this,p)},o.__mouseup=function(...p){var f;(f=r.onmouseup)==null||f.apply(this,p)},o.__mousedown=function(...p){var f;(f=r.onmousedown)==null||f.apply(this,p)};var n=D(o);const i=te(()=>q(ie(`block rounded-xl duration-75 ${t()} ${r.bgFront}`,r.padding)));var a=D(n);Re(a,()=>r.children),ee(n),ee(o),_e(()=>{se(o,re(s)),se(n,re(i))}),Ge(e,o),ke()}le(["click","mouseup","mousedown"]);export{kr as B,se as a,wr as b,_r as c,xr as r,Y as s};
