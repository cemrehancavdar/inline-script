window.addEventListener("load",function(){const s=window.inlineScriptSelector||"script",r="["+s+"]";function c(i){i.forEach(o=>{const e=o.getAttribute(s);new Function("me",e)(o)})}function n(i,o){i.forEach(e=>{e.type==="childList"&&e.addedNodes.forEach(t=>{if(console.log(t),t.nodeType===1){t.matches(r)&&c([t]);const u=t.querySelectorAll(r);c(u)}})})}new MutationObserver(n).observe(document.body,{childList:!0,subtree:!0});const l=document.querySelectorAll(r);c(l)});
//# sourceMappingURL=inline-script.js.map
