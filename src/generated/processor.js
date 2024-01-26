!function(){"use strict";var e="undefined"!=typeof document?document.currentScript:null;!function(e){function t(){}function n(){}t.prototype.encode=function(e){const t=[],n=e.length;let r=0;for(;r<n;){const n=e.codePointAt(r);let o=0,s=0;for(n<=127?(o=0,s=0):n<=2047?(o=6,s=192):n<=65535?(o=12,s=224):n<=2097151&&(o=18,s=240),t.push(s|n>>o),o-=6;o>=0;)t.push(128|n>>o&63),o-=6;r+=n>=65536?2:1}return t},globalThis.TextEncoder=t,e.TextEncoder||(e.TextEncoder=t),n.prototype.decode=function(e){if(!e)return"";let t="",n=0;for(;n<e.length;){let r=e[n],o=0,s=0;if(r<=127?(o=0,s=255&r):r<=223?(o=1,s=31&r):r<=239?(o=2,s=15&r):r<=244&&(o=3,s=7&r),e.length-n-o>0){let t=0;for(;t<o;)r=e[n+t+1],s=s<<6|63&r,t+=1}else s=65533,o=e.length-n;t+=String.fromCodePoint(s),n+=o+1}return t},globalThis.TextDecoder=n,e.TextDecoder||(e.TextDecoder=n)}("undefined"==typeof globalThis?"undefined"==typeof global?"undefined"==typeof self?void 0:self:global:globalThis);let t;const n=new Array(128).fill(void 0);function r(e){return n[e]}n.push(void 0,null,!0,!1);let o=n.length;function s(e){const t=r(e);return function(e){e<132||(n[e]=o,o=e)}(e),t}function i(e){o===n.length&&n.push(n.length+1);const t=o;return o=n[t],n[t]=e,t}const c="undefined"!=typeof TextDecoder?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};"undefined"!=typeof TextDecoder&&c.decode();let a=null;function u(){return null!==a&&0!==a.byteLength||(a=new Uint8Array(t.memory.buffer)),a}function f(e,t){return e>>>=0,c.decode(u().subarray(e,e+t))}function _(e){const t=typeof e;if("number"==t||"boolean"==t||null==e)return`${e}`;if("string"==t)return`"${e}"`;if("symbol"==t){const t=e.description;return null==t?"Symbol":`Symbol(${t})`}if("function"==t){const t=e.name;return"string"==typeof t&&t.length>0?`Function(${t})`:"Function"}if(Array.isArray(e)){const t=e.length;let n="[";t>0&&(n+=_(e[0]));for(let r=1;r<t;r++)n+=", "+_(e[r]);return n+="]",n}const n=/\[object ([^\]]+)\]/.exec(toString.call(e));let r;if(!(n.length>1))return toString.call(e);if(r=n[1],"Object"==r)try{return"Object("+JSON.stringify(e)+")"}catch(e){return"Object"}return e instanceof Error?`${e.name}: ${e.message}\n${e.stack}`:r}let l=0;const d="undefined"!=typeof TextEncoder?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},h="function"==typeof d.encodeInto?function(e,t){return d.encodeInto(e,t)}:function(e,t){const n=d.encode(e);return t.set(n),{read:e.length,written:n.length}};function g(e,t,n){if(void 0===n){const n=d.encode(e),r=t(n.length,1)>>>0;return u().subarray(r,r+n.length).set(n),l=n.length,r}let r=e.length,o=t(r,1)>>>0;const s=u();let i=0;for(;i<r;i++){const t=e.charCodeAt(i);if(t>127)break;s[o+i]=t}if(i!==r){0!==i&&(e=e.slice(i)),o=n(o,r,r=i+3*e.length,1)>>>0;const t=u().subarray(o+i,o+r);i+=h(e,t).written}return l=i,o}let b=null;function w(){return null!==b&&0!==b.byteLength||(b=new Int32Array(t.memory.buffer)),b}function y(e){return null==e}class p{static __wrap(e){e>>>=0;const t=Object.create(p.prototype);return t.__wbg_ptr=e,t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();t.__wbg_wasmsoundfontsynth_free(e)}static new(e,n){const r=function(e,t){const n=t(1*e.length,1)>>>0;return u().set(e,n/1),l=e.length,n}(e,t.__wbindgen_export_0),o=l,s=t.wasmsoundfontsynth_new(r,o,n);return p.__wrap(s)}get_preset_headers(){return s(t.wasmsoundfontsynth_get_preset_headers(this.__wbg_ptr))}program_select(e,n,r){t.wasmsoundfontsynth_program_select(this.__wbg_ptr,e,n,r)}note_on(e,n,r,o){t.wasmsoundfontsynth_note_on(this.__wbg_ptr,e,n,r,!y(o),y(o)?0:o)}note_off(e,n,r){t.wasmsoundfontsynth_note_off(this.__wbg_ptr,e,n,!y(r),y(r)?0:r)}read_next_block(e){return s(t.wasmsoundfontsynth_read_next_block(this.__wbg_ptr,e))}}function m(){const e={wbg:{}};return e.wbg.__wbindgen_object_drop_ref=function(e){s(e)},e.wbg.__wbindgen_object_clone_ref=function(e){return i(r(e))},e.wbg.__wbindgen_number_new=function(e){return i(e)},e.wbg.__wbindgen_string_new=function(e,t){return i(f(e,t))},e.wbg.__wbg_set_20cbc34131e76824=function(e,t,n){r(e)[s(t)]=s(n)},e.wbg.__wbg_new_898a68150f225f2e=function(){return i(new Array)},e.wbg.__wbg_new_b51585de1b234aff=function(){return i(new Object)},e.wbg.__wbg_set_502d29070ea18557=function(e,t,n){r(e)[t>>>0]=s(n)},e.wbg.__wbg_new_abda76e883ba8a5f=function(){return i(new Error)},e.wbg.__wbg_stack_658279fe44541cf6=function(e,n){const o=g(r(n).stack,t.__wbindgen_export_0,t.__wbindgen_export_1),s=l;w()[e/4+1]=s,w()[e/4+0]=o},e.wbg.__wbg_error_f851667af71bcfc6=function(e,n){let r,o;try{r=e,o=n,console.error(f(e,n))}finally{t.__wbindgen_export_2(r,o,1)}},e.wbg.__wbindgen_debug_string=function(e,n){const o=g(_(r(n)),t.__wbindgen_export_0,t.__wbindgen_export_1),s=l;w()[e/4+1]=s,w()[e/4+0]=o},e.wbg.__wbindgen_throw=function(e,t){throw new Error(f(e,t))},e}async function x(n){if(void 0!==t)return t;void 0===n&&(n=new URL("sf2_synth_audio_worklet_wasm_bg.wasm",e&&e.src||new URL("processor.js",document.baseURI).href));const r=m();("string"==typeof n||"function"==typeof Request&&n instanceof Request||"function"==typeof URL&&n instanceof URL)&&(n=fetch(n));const{instance:o,module:s}=await async function(e,t){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,t)}catch(t){if("application/wasm"==e.headers.get("Content-Type"))throw t;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t)}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}(await n,r);return function(e,n){return t=e.exports,x.__wbindgen_wasm_module=n,b=null,a=null,t}(o,s)}class T extends AudioWorkletProcessor{synth;sf2Bytes;constructor(){super(),this.port.onmessage=e=>{this.onmessage(e)},this.synth=void 0,this.sf2Bytes=void 0}onmessage(e){const t=e.data;switch(t.type){case"send-wasm-module":x(WebAssembly.compile(t.wasmBytes)).then((()=>{this.port.postMessage({type:"wasm-module-loaded"})})).catch((()=>{console.error("An error occurred during wasm initialization")})),this.sf2Bytes=t.sf2Bytes;break;case"init-synth":{if(null==this.sf2Bytes)throw new Error("sf2Bytes is undefined");this.synth=p.new(new Uint8Array(this.sf2Bytes),t.sampleRate);const e={type:"init-completed-synth"};this.port.postMessage(e);break}case"note-on":this.noteOn(t.channel,t.key,t.vel,t.delayTime);break;case"note-off":this.noteOff(t.channel,t.key,t.delayTime);break;case"get-preset-headers":this.getPresetHeaders();break;case"set-program":this.setProgram(t.channel,t.bank,t.preset)}}noteOn(e,t,n,r){null!=this.synth&&this.synth.note_on(e,t,n,r)}noteOff(e,t,n){null!=this.synth&&this.synth.note_off(e,t,n)}getPresetHeaders(){if(null==this.synth)return;const e={type:"got-preset-headers",presetHeaders:this.synth.get_preset_headers()};this.port.postMessage(e)}setProgram(e,t,n){null!=this.synth&&this.synth.program_select(e,t,n)}process(e,t){if(null==this.synth)return!0;const n=t[0],r=n[0].length,o=this.synth.read_next_block(r);return n[0].set(o[0]),n.length>1&&n[1].set(o[1]),!0}}registerProcessor("sf2-synth-processor",T)}();
//# sourceMappingURL=processor.js.map
