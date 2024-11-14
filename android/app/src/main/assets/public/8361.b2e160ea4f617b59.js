"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8361],{8361:(q,K,y)=>{y.r(K),y.d(K,{startInputShims:()=>Z});var w=y(467),l=y(8476),I=y(909),m=y(4920),R=y(6760);y(8438);const P=new WeakMap,T=(e,t,s,r=0,o=!1)=>{P.has(e)!==s&&(s?k(e,t,r,o):G(e,t))},k=(e,t,s,r=!1)=>{const o=t.parentNode,n=t.cloneNode(!1);n.classList.add("cloned-input"),n.tabIndex=-1,r&&(n.disabled=!0),o.appendChild(n),P.set(e,n);const a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${a}px,${s}px,0) scale(0)`},G=(e,t)=>{const s=P.get(e);s&&(P.delete(e),s.remove()),e.style.pointerEvents="",t.style.transform=""},C="input, textarea, [no-blur], [contenteditable]",N="$ionPaddingTimer",B=(e,t,s)=>{const r=e[N];r&&clearTimeout(r),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[N]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},j=(e,t,s)=>{e.addEventListener("focusout",()=>{t&&B(t,0,s)},{once:!0})};let D=0;const O="data-ionic-skip-scroll-assist",V=(e,t,s,r,o,n,i,a=!1)=>{const _=n&&(void 0===i||i.mode===R.a.None);let L=!1;const c=void 0!==l.w?l.w.innerHeight:0,f=S=>{!1!==L?F(e,t,s,r,S.detail.keyboardHeight,_,a,c,!1):L=!0},u=()=>{L=!1,null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",u)},h=function(){var S=(0,w.A)(function*(){t.hasAttribute(O)?t.removeAttribute(O):(F(e,t,s,r,o,_,a,c),null==l.w||l.w.addEventListener("ionKeyboardDidShow",f),e.addEventListener("focusout",u))});return function(){return S.apply(this,arguments)}}();return e.addEventListener("focusin",h),()=>{e.removeEventListener("focusin",h),null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",u)}},p=e=>{document.activeElement!==e&&(e.setAttribute(O,"true"),e.focus())},F=function(){var e=(0,w.A)(function*(t,s,r,o,n,i,a=!1,_=0,L=!0){if(!r&&!o)return;const c=((e,t,s,r)=>{var o;return((e,t,s,r)=>{const o=e.top,n=e.bottom,i=t.top,_=i+15,c=Math.min(t.bottom,r-s)-50-n,f=_-o,u=Math.round(c<0?-c:f>0?-f:0),h=Math.min(u,o-i),A=Math.abs(h)/.3;return{scrollAmount:h,scrollDuration:Math.min(400,Math.max(150,A)),scrollPadding:s,inputSafeY:4-(o-_)}})((null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e).getBoundingClientRect(),t.getBoundingClientRect(),s,r)})(t,r||o,n,_);if(r&&Math.abs(c.scrollAmount)<4)return p(s),void(i&&null!==r&&(B(r,D),j(s,r,()=>D=0)));if(T(t,s,!0,c.inputSafeY,a),p(s),(0,m.r)(()=>t.click()),i&&r&&(D=c.scrollPadding,B(r,D)),typeof window<"u"){let f;const u=function(){var S=(0,w.A)(function*(){void 0!==f&&clearTimeout(f),window.removeEventListener("ionKeyboardDidShow",h),window.removeEventListener("ionKeyboardDidShow",u),r&&(yield(0,I.c)(r,0,c.scrollAmount,c.scrollDuration)),T(t,s,!1,c.inputSafeY),p(s),i&&j(s,r,()=>D=0)});return function(){return S.apply(this,arguments)}}(),h=()=>{window.removeEventListener("ionKeyboardDidShow",h),window.addEventListener("ionKeyboardDidShow",u)};if(r){const S=yield(0,I.g)(r);if(L&&c.scrollAmount>S.scrollHeight-S.clientHeight-S.scrollTop)return"password"===s.type?(c.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",h)):window.addEventListener("ionKeyboardDidShow",u),void(f=setTimeout(u,1e3))}u()}});return function(s,r,o,n,i,a){return e.apply(this,arguments)}}(),Z=function(){var e=(0,w.A)(function*(t,s){if(void 0===l.d)return;const r="ios"===s,o="android"===s,n=t.getNumber("keyboardHeight",290),i=t.getBoolean("scrollAssist",!0),a=t.getBoolean("hideCaretOnScroll",r),_=t.getBoolean("inputBlurring",!1),L=t.getBoolean("scrollPadding",!0),c=Array.from(l.d.querySelectorAll("ion-input, ion-textarea")),f=new WeakMap,u=new WeakMap,h=yield R.K.getResizeMode(),S=function(){var v=(0,w.A)(function*(d){yield new Promise(M=>(0,m.c)(d,M));const x=d.shadowRoot||d,g=x.querySelector("input")||x.querySelector("textarea"),b=(0,I.f)(d),W=b?null:d.closest("ion-footer");if(g){if(b&&a&&!f.has(d)){const M=((e,t,s)=>{if(!s||!t)return()=>{};const r=a=>{(e=>e===e.getRootNode().activeElement)(t)&&T(e,t,a)},o=()=>T(e,t,!1),n=()=>r(!0),i=()=>r(!1);return(0,m.a)(s,"ionScrollStart",n),(0,m.a)(s,"ionScrollEnd",i),t.addEventListener("blur",o),()=>{(0,m.b)(s,"ionScrollStart",n),(0,m.b)(s,"ionScrollEnd",i),t.removeEventListener("blur",o)}})(d,g,b);f.set(d,M)}if("date"!==g.type&&"datetime-local"!==g.type&&(b||W)&&i&&!u.has(d)){const M=V(d,g,b,W,n,L,h,o);u.set(d,M)}}});return function(x){return v.apply(this,arguments)}}();_&&(()=>{let e=!0,t=!1;const s=document;(0,m.a)(s,"ionScrollStart",()=>{t=!0}),s.addEventListener("focusin",()=>{e=!0},!0),s.addEventListener("touchend",i=>{if(t)return void(t=!1);const a=s.activeElement;if(!a||a.matches(C))return;const _=i.target;_!==a&&(_.matches(C)||_.closest(C)||(e=!1,setTimeout(()=>{e||a.blur()},50)))},!1)})();for(const v of c)S(v);l.d.addEventListener("ionInputDidLoad",v=>{S(v.detail)}),l.d.addEventListener("ionInputDidUnload",v=>{(v=>{if(a){const d=f.get(v);d&&d(),f.delete(v)}if(i){const d=u.get(v);d&&d(),u.delete(v)}})(v.detail)})});return function(s,r){return e.apply(this,arguments)}}()}}]);