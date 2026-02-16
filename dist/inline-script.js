window.addEventListener("load",function(){const n=window.inlineScriptSelector||"script",o="["+n+"]";function c(i){i.forEach(e=>{const r=e.getAttribute(n);try{new Function(r).call(e)}catch(t){console.error("[inline-script] Error on <"+e.tagName.toLowerCase()+">:",`
  Code: `+r,`
  Error: `+t.message,`
  Element:`,e)}})}function s(i,e){i.forEach(r=>{r.type==="childList"&&r.addedNodes.forEach(t=>{if(t.nodeType===1){t.matches(o)&&c([t]);const a=t.querySelectorAll(o);c(a)}})})}new MutationObserver(s).observe(document.body,{childList:!0,subtree:!0});const l=document.querySelectorAll(o);c(l)});
