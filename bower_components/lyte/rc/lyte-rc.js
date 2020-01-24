if(window.ZSEC||Object.defineProperty(window,"ZSEC",{value:{},writable:!1,configurable:!1,enumerable:!1}),Object.defineProperty(ZSEC,"util",{value:{},writable:!1,configurable:!1,enumerable:!1}),function(){if(!Object.defineProperty||!function(){try{return Object.defineProperty({},"x",{}),!0}catch(e){return!1}}()){var e=Object.defineProperty;Object.defineProperty=function(t,r,o){if(e)try{return e(t,r,o)}catch(e){}if(t!==Object(t))throw TypeError("Object.defineProperty called on non-object");return Object.prototype.__defineGetter__&&"get"in o&&Object.prototype.__defineGetter__.call(t,r,o.get),Object.prototype.__defineSetter__&&"set"in o&&Object.prototype.__defineSetter__.call(t,r,o.set),"value"in o&&(t[r]=o.value),t}}}(),ZSEC.util.defineProperty=function(e,t,r,o,n,i,a){if(o||!(t in e))return n=1==n,i=1==i,a=1==a,Object.defineProperty(e,t,{value:r,writable:n,configurable:i,enumerable:a})},ZSEC.util.defineProperty(ZSEC,"version","4.0",!0),ZSEC.util.defineProperty(ZSEC,"constants",ZSEC.constants||{},!0),ZSEC.util.ArrayIndexOf=Array.prototype.indexOf,ZSEC.util.ArrayIndexOf||(ZSEC.util.ArrayIndexOf=function(e){if(void 0===this||null===this)throw TypeError();var t=Object(this),r=t.length>>>0;if(0===r)return-1;var o=0;if(arguments.length>0&&(o=Number(arguments[1]),isNaN(o)?o=0:0!==o&&o!==1/0&&o!==-1/0&&(o=(o>0||-1)*Math.floor(Math.abs(o)))),o>=r)return-1;for(var n=o>=0?o:Math.max(r-Math.abs(o),0);n<r;n++)if(n in t&&t.charAt(n)===e)return n;return-1}),String.prototype.codePointAt)ZSEC.util.defineProperty(String.prototype,"codePointAt",String.prototype.codePointAt,!0);else{var codePointAt=function(e){if(null==this)throw TypeError();var t=String(this),r=t.length,o=e?Number(e):0;if(o!=o&&(o=0),!(o<0||o>=r)){var n,i=t.charCodeAt(o);return i>=55296&&i<=56319&&r>o+1&&(n=t.charCodeAt(o+1))>=56320&&n<=57343?1024*(i-55296)+n-56320+65536:i}};ZSEC.util.defineProperty(String.prototype,"codePointAt",codePointAt,!1)}if(String.fromCodePoint)ZSEC.util.defineProperty(String,"fromCodePoint",String.fromCodePoint,!0);else{var stringFromCharCode=String.fromCharCode,floor=Math.floor,fromCodePoint=function(){var e,t,r=[],o=-1,n=arguments.length;if(!n)return"";for(var i="";++o<n;){var a=Number(arguments[o]);if(!isFinite(a)||a<0||a>1114111||floor(a)!=a)throw RangeError("Invalid code point: "+a);a<=65535?r.push(a):(e=55296+((a-=65536)>>10),t=a%1024+56320,r.push(e,t)),(o+1==n||r.length>16384)&&(i+=stringFromCharCode.apply(null,r),r.length=0)}return i};ZSEC.util.defineProperty(String,"fromCodePoint",fromCodePoint,!1)}!function(){var e={log:function(e){if(navigator&&navigator.userAgent){var t=navigator.userAgent.match(/opera|chrome|safari|firefox|msie|trident(?=\/)/i);if(t&&t[0].search(/trident|msie/i)<0)return window.console.log("%cSTOP!","color:red;font-size:xx-large;font-weight:bold;"),void window.console.log("%cThis is a browser feature intended for developers. Do not enter or paste code which you don't understand. It may allow attackers to steal your information or impersonate you.\nSee https://en.wikipedia.org/wiki/Self-XSS for more details","font-size:large;")}window.console.log("STOP!\nThis is a browser feature intended for developers. Do not enter or paste code which you don't understand. It may allow attackers to steal your information or impersonate you.\nSee https://en.wikipedia.org/wiki/Self-XSS for more details")}};ZSEC.util.defineProperty(ZSEC,"Console",e,!0,!1,!1,!0)}(),ZSEC.Console.log();function addToSet(e,t){for(var r=t.length;r--;)e[t[r]]=!0;return e}function addObjsToSet(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=!0);return e}function removeFromSet(e,t){var r={};for(var o in e)e.hasOwnProperty(o)&&o!=t&&(r[o]=e[o]);return r}!function(e){window.DOMPurify=e(window)}(function e(t){var r=function(t){return e(t)};if(r.version="0.8.5",r.removed=[],!t||!t.document||9!==t.document.nodeType)return r.isSupported=!1,r;var o=t.document,n=o,T=t.DocumentFragment,i=t.HTMLTemplateElement,a=t.Node,A=t.NodeFilter,_=t.NamedNodeMap||t.MozNamedAttrMap,E=t.Text,O=t.Comment,L=t.DOMParser;if("function"==typeof i){var s=o.createElement("template");s.content&&s.content.ownerDocument&&(o=s.content.ownerDocument)}var l=o.implementation,d=o.createNodeIterator,u=o.getElementsByTagName,c=o.createDocumentFragment,R=n.importNode,S={};r.isSupported=void 0!==l.createHTMLDocument&&9!==o.documentMode;var f=function(e,t){for(var r=t.length;r--;)"string"==typeof t[r]&&(t[r]=t[r].toLowerCase()),e[t[r]]=!0;return e},p=null,B=f({},[]),m=null,N=f({},[]),D=null,I=null,h=!0,U=!0,v=!1,b=!1,y=!1,g=/\{\{[\s\S]*|[\s\S]*\}\}/gm,G=/<%[\s\S]*|[\s\S]*%>/gm,F=!1,w=!0,M=!1,C=!1,P=!1,W=!0,J=!0,x=f({},["audio","head","math","script","svg","video","style"]),H=f({},["audio","video","img","source","image"]),k=f({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Y=null,z=o.createElement("form"),V=function(e){"object"!=typeof e&&(e={}),p="ALLOWED_TAGS"in e?f({},e.ALLOWED_TAGS):B,m="ALLOWED_ATTR"in e?f({},e.ALLOWED_ATTR):N,D="FORBID_TAGS"in e?f({},e.FORBID_TAGS):{},I="FORBID_ATTR"in e?f({},e.FORBID_ATTR):{},h=!1!==e.ALLOW_ARIA_ATTR,U=!1!==e.ALLOW_DATA_ATTR,v=e.ALLOW_UNKNOWN_PROTOCOLS||!1,b=e.SAFE_FOR_JQUERY||!1,y=e.SAFE_FOR_TEMPLATES||!1,F=e.WHOLE_DOCUMENT||!1,M=e.RETURN_DOM||!1,C=e.RETURN_DOM_FRAGMENT||!1,P=e.RETURN_DOM_IMPORT||!1,w=!1!==e.FORCE_BODY,W=!1!==e.SANITIZE_DOM,J=!1!==e.KEEP_CONTENT,y&&(U=!1),C&&(M=!0),e.ADD_URI_SAFE_ATTR&&f(k,e.ADD_URI_SAFE_ATTR),J&&(p["#text"]=!0),Object&&"freeze"in Object&&Object.freeze(e),Y=e},j=function(e){r.removed.push({element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=""}},Q=function(e,t){r.removed.push({attribute:t.getAttributeNode(e),from:t}),t.removeAttribute(e)},X=function(e){var t,r;w&&(e="<remove></remove>"+e);try{t=(new L).parseFromString(e,"text/html")}catch(e){}return t&&t.documentElement||((r=(t=l.createHTMLDocument("")).body).parentNode.removeChild(r.parentNode.firstElementChild),r.outerHTML=e),"function"==typeof t.getElementsByTagName?t.getElementsByTagName(F?"html":"body")[0]:u.call(t,F?"html":"body")[0]},Z=function(e){return d.call(e.ownerDocument||e,e,A.SHOW_ELEMENT|A.SHOW_COMMENT|A.SHOW_TEXT,function(){return A.FILTER_ACCEPT},!1)},K=function(e){return!(e instanceof E||e instanceof O)&&!("string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof _&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute)},q=function(e){return"object"==typeof a?e instanceof a:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},$=function(e){var t,o;if(ae("beforeSanitizeElements",e,null),K(e))return j(e),!0;if(t=e.nodeName.toLowerCase(),ae("uponSanitizeElement",e,{tagName:t,allowedTags:p}),!p[t]||D[t]){if(J&&!x[t]&&"function"==typeof e.insertAdjacentHTML)try{e.insertAdjacentHTML("AfterEnd",e.innerHTML)}catch(e){}return j(e),!0}return"style"!=t?(!b||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(r.removed.push({element:e.cloneNode()}),e.innerHTML=e.textContent.replace(/</g,"&lt;")),y&&3===e.nodeType&&(o=(o=(o=e.textContent).replace(g," ")).replace(G," "),e.textContent!==o&&(r.removed.push({element:e.cloneNode()}),e.textContent=o))):!b||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(r.removed.push({element:e.cloneNode()}),e.innerHTML=e.textContent.replace(/</g,"\\3c ")),ae("afterSanitizeElements",e,null),!1},ee=/^data-[-\w.\u00B7-\uFFFF]/,te=/^aria-[-\w]+$/,re=/^(?:(?:https?|mailto|tel):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i,oe=/^(?:\w+script|data):/i,ne=/[\x00-\x20\xA0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,Te=function(e){var t,n,T,i,a,A,_,E;if(ae("beforeSanitizeAttributes",e,null),A=e.attributes){for(_={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:m},E=A.length;E--;)if(t=A[E],n=t.name,T=t.value.trim(),i=n.toLowerCase(),_.attrName=i,_.attrValue=T,_.keepAttr=!0,ae("uponSanitizeAttribute",e,_),T=_.attrValue,"name"===i&&"IMG"===e.nodeName&&A.id?(a=A.id,A=Array.prototype.slice.apply(A),Q("id",e),Q(n,e),A.indexOf(a)>E&&e.setAttribute("id",a.value)):("id"===n&&e.setAttribute(n,""),Q(n,e)),_.keepAttr&&(!W||"id"!==i&&"name"!==i||!(T in o||T in z))){y&&(T=(T=T.replace(g," ")).replace(G," "));if(U&&ee.test(i))!0;else if(h&&te.test(i))!0;else{if(!m[i]||I[i])continue;if(k[i])!0;else if(re.test(T.replace(ne,"")))!0;else if("src"!==i&&"xlink:href"!==i||0!==T.indexOf("data:")||!H[e.nodeName.toLowerCase()])if(v&&!oe.test(T.replace(ne,"")))!0;else{if(T)continue;!0}else!0}try{e.setAttribute(n,T),r.removed.pop()}catch(e){}}ae("afterSanitizeAttributes",e,null)}},ie=function(e){var t,r=Z(e);for(ae("beforeSanitizeShadowDOM",e,null);t=r.nextNode();)ae("uponSanitizeShadowNode",t,null),$(t)||(t.content instanceof T&&ie(t.content),Te(t));ae("afterSanitizeShadowDOM",e,null)},ae=function(e,t,o){S[e]&&S[e].forEach(function(e){e.call(r,t,o,Y)})};return r.sanitize=function(e,o){var i,A,_,E,O,L;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!q(e)){if("function"!=typeof e.toString)throw new TypeError("toString is not a function");e=e.toString()}if(!r.isSupported){if("object"==typeof t.toStaticHTML||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(q(e))return t.toStaticHTML(e.outerHTML)}return e}if(V(o),r.removed=[],e instanceof a)1===(A=(i=X("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===A.nodeName?i=A:i.appendChild(A);else{if(!M&&!F&&-1===e.indexOf("<"))return e;if(!(i=X(e)))return M?null:""}for(w&&j(i.firstChild),O=Z(i);_=O.nextNode();)3===_.nodeType&&_===E||$(_)||(_.content instanceof T&&ie(_.content),Te(_),E=_);if(M){if(C)for(L=c.call(i.ownerDocument);i.firstChild;)L.appendChild(i.firstChild);else L=i;return P&&(L=R.call(n,L,!0)),L}return F?i.outerHTML:i.innerHTML},r.addHook=function(e,t){"function"==typeof t&&(S[e]=S[e]||[],S[e].push(t))},r.removeHook=function(e){S[e]&&S[e].pop()},r.removeHooks=function(e){S[e]&&(S[e]=[])},r.removeAllHooks=function(){S={}},r}),function(e){var t={};t.ALLOW_ARIA_ATTR=!0,t.ALLOW_DATA_ATTR=!0,t.ALLOW_UNKNOWN_PROTOCOLS=!1,t.SAFE_FOR_JQUERY=!1,t.SAFE_FOR_TEMPLATES=!1,t.WHOLE_DOCUMENT=!1,t.RETURN_DOM=!1,t.RETURN_DOM_FRAGMENT=!1,t.RETURN_DOM_IMPORT=!1,t.FORCE_BODY=!0,t.SANITIZE_DOM=!0,t.KEEP_CONTENT=!0,t.STYLE_VALIDATION=!0,t.REMOVE_ONEVENTS=!0,t.ALLOWED_STYLE="NONE",t.ALLOWED_TAGS="a|abbr|acronym|address|area|article|aside|audio|b|bdi|bdo|big|blink|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|content|data|datalist|dd|decorator|del|details|dfn|dir|div|dl|dt|element|em|fieldset|figcaption|figure|font|footer|form|h1|h2|h3|h4|h5|h6|head|header|hgroup|hr|html|i|img|input|ins|kbd|label|legend|li|main|map|mark|marquee|menu|menuitem|meter|nav|nobr|ol|optgroup|option|output|p|pre|progress|q|rp|rt|ruby|s|samp|section|select|shadow|small|source|spacer|span|strike|strong|sub|summary|sup|table|tbody|td|template|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video|wbr|#text".split("|"),t.ALLOWED_ATTR="accept|action|align|alt|autocomplete|background|bgcolor|border|cellpadding|cellspacing|checked|cite|class|clear|color|cols|colspan|coords|datetime|default|dir|disabled|download|enctype|face|for|headers|height|hidden|high|href|hreflang|id|ismap|label|lang|list|loop|low|max|maxlength|media|method|min|multiple|name|noshade|novalidate|nowrap|open|optimum|pattern|placeholder|poster|preload|pubdate|radiogroup|readonly|rel|required|rev|reversed|role|rows|rowspan|spellcheck|scope|selected|shape|size|span|srclang|start|src|step|summary|tabindex|title|target|type|usemap|valign|value|width|xmlns|sandbox".split("|"),t.ALLOWED_STYLE_PROPS="azimuth|background|background-attachment|background-color|background-image|background-position|content|background-repeat|border-collapse|border-color|border-top-color|border-right-color|border-bottom-color|border-left-color|bottom|caption-side|clear|color|cue-after|cue-before|direction|display|elevation|empty-cells|float|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|height|left|letter-spacing|line-height|list-style-image|list-style-position|list-style-type|marker-offset|max-height|max-width|min-height|min-width|orphans|outline-color|overflow|page-break-after|page-break-before|page-break-inside|pause-after|pause-before|pitch|pitch-range|position|richness|right|size|speak|speak-header|speak-numeral|speak-punctuation|speech-rate|stress|table-layout|text-indent|text-transform|top|unicode-bidi|vertical-align|visibility|volume|white-space|widows|width|word-spacing|border-style|border-top-style|border-right-style|border-bottom-style|border-left-style|border-top-width|border-right-width|border-bottom-width|border-left-width|border-width|margin|margin-top|margin-right|margin-bottom|margin-left|outline-style|outline-width|padding|padding-top|padding-right|padding-bottom|padding-left|border|border-top|border-right|border-bottom|border-left|cue|list-style|marks|outline|pause|text-decoration|border-spacing|clip|counter-increment|clip|cursor|text-shadow|font|font-family|page|play-during|text-align|voice-family".split("|"),t.FORBID_TAGS=[],t.FORBID_ATTR=[],t.ALLOWED_TAGS_OBJ={},t.ALLOWED_ATTR_OBJ={},t.FORBID_TAGS_OBJ={},t.FORBID_ATTR_OBJ={},t.ADD_URI_SAFE_ATTR=[],t.EXTENDS=["GLOBAL_ATTRIBUTES","GLOBAL_TAGS","FORBID_TAGS","FORBID_ATTR","GLOBAL_APPEND_ATTRIBUTES","GLOBAL_ATTRIBUTE_RULES","ADD_URI_SAFE_ATTR","TAG_RULES"],t.TAG_RULES={a:{APPEND_ATTRIBUTES:[{NAME:"rel",VALUE:"noopener noreferrer",CRITERIA:[{NAME:"target",CONTAINS:"_blank"}]}]}},t.GLOBAL_APPEND_ATTRIBUTES=[],t.GLOBAL_ATTRIBUTE_RULES={},ZSEC.util.defineProperty(ZSEC,"HTMLPurifier",e(t,DOMPurify(window)),!0,!1,!1,!0),delete window.DOMPurify}(function e(t,r){function o(e){if(!e||e.constructor!==Object)return t;var r={};for(var o in t)t.hasOwnProperty(o)&&(o in e?o in m&&(1==e[o]||0==e[o]?r[o]=e[o]:r[o]=t[o]):r[o]=t[o]);return r.SAFE_FOR_TEMPLATES&&(r.ALLOW_DATA_ATTR=!1),r.RETURN_DOM_FRAGMENT&&(r.RETURN_DOM=!0),r.KEEP_CONTENT&&(r.ALLOWED_TAGS_OBJ["#text"]=!0),r}function n(e){for(var t in e)e.hasOwnProperty(t)&&e[t].constructor==String&&(e[t]&&b[t]?v=!0:e[t]&&("cssText"==t||/^\d.*/.test(t)||(e[t]="",I=!0)))}function T(e){for(var t=e.length-1;t>=0;t--){var r=e[t];1==r.type&&r.selectorText||8==r.type&&r.keyText?r.style&&n(r.style):4!=r.type&&7!=r.type||!r.cssRules||T(r.cssRules)}}function i(e,t){for(var r=t.length-1;r>=0;r--)1!=t[r].type&&4!=t[r].type&&7!=t[r].type||e.push(t[r].cssText)}function a(e,t,r){var r=void 0==r?e.IS_MANDATORY:r;if(e.NAME&&!t.hasAttribute(e.NAME.toLowerCase()))return e.IS_FORBIDDEN||!r;if(e.IS_FORBIDDEN)return!1;var o=t.getAttribute(e.NAME.toLowerCase());if(void 0!==o&&null!==o||(o=""),o.constructor==String){if(e.DONT_TRIM||(o=o.trim()),e.CASE_SENSITIVE||!1||(o=o.toLowerCase()),e.MAX_LENGTH&&o.length>e.MAX_LENGTH)return!1;if(e.MIN_LENGTH&&o.length<e.MIN_LENGTH)return!1;if(void 0!=e.REGEX){if(e.REGEX.constructor==RegExp&&-1==o.search(e.REGEX))return!1;if(e.REGEX.constructor==Array)for(T=0;T<e.REGEX.length;T++)if(-1==o.search(e.REGEX[T]))return!1}}if(e.LIST&&-1==e.LIST.indexOf(o))return!1;if("INTEGER"==e.TYPE||"FLOAT"==e.TYPE){var n;try{n="INTEGER"==e.TYPE?window.parseInt(o,10):window.parseFloat(o)}catch(e){return!1}if(window.isNaN(n))return!1;if(void 0!=e.GREATER_THAN&&n<=e.GREATER_THAN)return!1;if(void 0!=e.GREATER_THAN_OR_EQUAL&&n<e.GREATER_THAN_OR_EQUAL)return!1;if(void 0!=e.LESSER_THAN&&n>=e.LESSER_THAN)return!1;if(void 0!=e.LESSER_THAN_OR_EQUAL&&n>e.LESSER_THAN_OR_EQUAL)return!1;if(void 0!=e.EQUAL&&n!=e.EQUAL)return!1;if(void 0!=e.NOT_EQUAL&&n==e.NOT_EQUAL)return!1}else if(o.constructor==String){if(void 0!=e.STARTS_WITH&&0!=o.indexOf(e.STARTS_WITH))return!1;if(void 0!=e.ENDS_WITH&&o.lastIndexOf(e.ENDS_WITH)!=o.length-e.ENDS_WITH.length)return!1;if(void 0!=e.CONTAINS){if(e.CONTAINS.constructor==String&&-1==o.indexOf(e.CONTAINS))return!1;if(e.CONTAINS.constructor==Array)for(T=0;T<e.CONTAINS.length;T++)if(-1==o.indexOf(e.CONTAINS[T]))return!1}if(void 0!=e.NOT_CONTAINS){if(e.NOT_CONTAINS.constructor==String&&o.indexOf(e.NOT_CONTAINS)>-1)return!1;if(e.NOT_CONTAINS.constructor==Array)for(var T=0;T<e.NOT_CONTAINS.length;T++)if(o.indexOf(e.NOT_CONTAINS[T])>-1)return!1}if(void 0!=e.EQUAL&&o!==e.EQUAL)return!1;if(void 0!=e.NOT_EQUAL&&o===e.NOT_EQUAL)return!1}return!0}function A(e){if(!e)return e;if(e.constructor==Object)for(var t in e)e.hasOwnProperty(t)&&(e[t]=E(e[t]));return e}function _(e){if(!e)return e;if(e.constructor==Array)for(var t=0;t<e.length;t++)if(e[t].CRITERIA)for(var r=0;r<e[t].CRITERIA.length;r++)e[t].CRITERIA[r]=E(e[t].CRITERIA[r]);return e}function E(e){if(e){var t=["STARTS_WITH","ENDS_WITH","CONTAINS","EQUAL","NOT_EQUAL","LIST"];if(!(e.CASE_SENSITIVE||!1))for(var r=0;r<t.length;r++){var o=t[r];e[o]&&(e[o]=O(e[o]))}}return e}function O(e){if(e&&e.constructor==String)return e.toLowerCase();if(e.constructor==Array)for(var t=0;t<e.length;t++)e[t]=O(e[t]);return e}function L(e,t){if(!e||e.constructor==Object)return e;for(var r={},o=0;o<e.length;o++){var n=e[o];r[n[t]]=n}return r}function s(e,t){if(e)for(var r=0;r<e.length;r++){var o=e[r];if(!t.hasAttribute(o.NAME.toLowerCase())){var n=!0;if(o.CRITERIA)for(var T=0;T<o.CRITERIA.length;T++)if(!a(o.CRITERIA[T],t,!0)){n=!1;break}n?t.setAttribute(o.NAME,o.VALUE):void 0!=o.DEFAULT_VALUE&&t.setAttribute(o.NAME,o.DEFAULT_VALUE)}}}function l(e,t){if(!t||t.constructor!==Object)return e;if(!e||e.constructor!==Object)return t;for(var r in t)t.hasOwnProperty(r)&&r in e?(void 0==e[r].APPEND_ATTRIBUTES&&(e[r].APPEND_ATTRIBUTES=t[r].APPEND_ATTRIBUTES),void 0==e[r].ATTRIBUTE_RULES&&(e[r].ATTRIBUTE_RULES=t[r].ATTRIBUTE_RULES)):e[r]=t[r];return e}function d(e,t,r){return!(t&&!a(t,e))||(void 0!==t.DEFAULT_VALUE?e.setAttribute(r,t.DEFAULT_VALUE):e.removeAttribute(r),!1)}function u(e){if("object"==typeof e){e.ALLOWED_TAGS=e.GLOBAL_TAGS,e.ALLOWED_ATTR=e.GLOBAL_ATTRIBUTES;for(var r in h)!h.hasOwnProperty(r)||void 0!=e[r]||r in D||(e[r]=t[r]);if(e.TAG_RULES=L(e.TAG_RULES,"NAME"),e.TAG_RULES&&e.TAG_RULES.constructor==Object)for(var o in e.TAG_RULES)if(e.TAG_RULES.hasOwnProperty(o)){var n=e.TAG_RULES[o];n.ATTRIBUTE_RULES=A(L(n.ATTRIBUTE_RULES,"NAME")),n.APPEND_ATTRIBUTES=_(n.APPEND_ATTRIBUTES)}if(e.GLOBAL_ATTRIBUTE_RULES=A(L(e.GLOBAL_ATTRIBUTE_RULES,"NAME")),e.GLOBAL_APPEND_ATTRIBUTES=_(e.GLOBAL_APPEND_ATTRIBUTES),e.EXTENDS)for(var T=0;T<e.EXTENDS.length;T++){var i=e.EXTENDS[T];switch("GLOBAL_TAGS"==i&&(i="ALLOWED_TAGS"),"GLOBAL_ATTRIBUTES"==i&&(i="ALLOWED_ATTR"),i){case"ALLOWED_TAGS":case"ALLOWED_ATTR":case"FORBID_TAGS":case"FORBID_ATTR":e[i+="_OBJ"]={},t[i]&&(e[i]=addObjsToSet(e[i],t[i]));break;case"ADD_URI_SAFE_ATTR":case"GLOBAL_APPEND_ATTRIBUTES":if(e[i]||(e[i]=[]),!t[i]||t[i].constructor!==Array)break;e[i]=e[i].concat(t[i]);break;case"GLOBAL_ATTRIBUTE_RULES":if(e.GLOBAL_ATTRIBUTE_RULES||(e.GLOBAL_ATTRIBUTE_RULES={}),t.GLOBAL_ATTRIBUTE_RULES&&t.GLOBAL_ATTRIBUTE_RULES.constructor==Object)for(var a in t.GLOBAL_ATTRIBUTE_RULES)t.GLOBAL_ATTRIBUTE_RULES.hasOwnProperty(a)&&!e.GLOBAL_ATTRIBUTE_RULES[a]&&(e.GLOBAL_ATTRIBUTE_RULES[a]=t.GLOBAL_ATTRIBUTE_RULES[a]);break;case"TAG_RULES":e.TAG_RULES||(e.TAG_RULES={}),e.TAG_RULES=l(e.TAG_RULES,t.TAG_RULES)}}for(var E in N)N.hasOwnProperty(E)&&(e[E+"_OBJ"]||(e[E+"_OBJ"]={}),void 0!=e[E]?e[E].constructor===Array&&(e[E+"_OBJ"]=addToSet(e[E+"_OBJ"],e[E])):e[E]=[]);for(var O=0;O<B.length;O++){var s=B[O];e[s]||(e[s]=[])}"ALL"==e.ALLOWED_STYLE?(e.FORBID_TAGS_OBJ=removeFromSet(e.FORBID_TAGS_OBJ,"style"),e.FORBID_ATTR_OBJ=removeFromSet(e.FORBID_ATTR_OBJ,"style"),e.ALLOWED_TAGS_OBJ=addToSet(e.ALLOWED_TAGS_OBJ,["style"]),e.ALLOWED_ATTR_OBJ=addToSet(e.ALLOWED_ATTR_OBJ,["style"])):"INLINE"==e.ALLOWED_STYLE?(e.FORBID_ATTR_OBJ=removeFromSet(e.FORBID_ATTR_OBJ,"style"),e.ALLOWED_ATTR_OBJ=addToSet(e.ALLOWED_ATTR_OBJ,["style"]),e.FORBID_TAGS_OBJ=addToSet(e.FORBID_TAGS_OBJ,["style"]),e.ALLOWED_TAGS_OBJ=removeFromSet(e.ALLOWED_TAGS_OBJ,"style")):"INTERNAL"==e.ALLOWED_STYLE?(e.FORBID_TAGS_OBJ=removeFromSet(e.FORBID_TAGS_OBJ,"style"),e.ALLOWED_TAGS_OBJ=addToSet(e.ALLOWED_TAGS_OBJ,["style"]),e.FORBID_ATTR_OBJ=addToSet(e.FORBID_ATTR_OBJ,["style"]),e.ALLOWED_ATTR_OBJ=removeFromSet(e.ALLOWED_ATTR_OBJ,"style")):"NONE"==e.ALLOWED_STYLE&&(e.FORBID_TAGS_OBJ=addToSet(e.FORBID_TAGS_OBJ,["style"]),e.FORBID_ATTR_OBJ=addToSet(e.FORBID_ATTR_OBJ,["style"]),e.ALLOWED_TAGS_OBJ=removeFromSet(e.ALLOWED_TAGS_OBJ,"style"),e.ALLOWED_ATTR_OBJ=removeFromSet(e.ALLOWED_ATTR_OBJ,"style"));for(var d in N)if(N.hasOwnProperty(d)){for(var u in e[d+"_OBJ"])e[d+"_OBJ"].hasOwnProperty(u)&&e[d].push(u);e[d+"_OBJ"]=addToSet(e[d+"_OBJ"],e[d])}ZSEC.configValidator&&ZSEC.configValidator.HTMLPurifierValidation(e,h,N,c,R)}else{e={};for(var S in t)t.hasOwnProperty(S)&&(e[S]=t[S].valueOf())}return e}var c=addToSet({},["script"]),R=addToSet({},[]),S=["ALLOW_ARIA_ATTR","ALLOW_DATA_ATTR","ALLOW_UNKNOWN_PROTOCOLS","SAFE_FOR_JQUERY","SAFE_FOR_TEMPLATES","WHOLE_DOCUMENT","RETURN_DOM","RETURN_DOM_FRAGMENT","RETURN_DOM_IMPORT","FORCE_BODY","SANITIZE_DOM","KEEP_CONTENT","ALLOWED_STYLE_PROPS"],f=["ALLOWED_TAGS","ALLOWED_ATTR","FORBID_TAGS","FORBID_ATTR"],p=["ALLOWED_TAGS_OBJ","ALLOWED_ATTR_OBJ","FORBID_TAGS_OBJ","FORBID_ATTR_OBJ"],B=["ADD_URI_SAFE_ATTR","GLOBAL_APPEND_ATTRIBUTES","GLOBAL_ATTRIBUTE_RULES","TAG_RULES"],m=addToSet({},S),N=addToSet({},f),D=(addToSet({},p),addToSet({},B));D=addToSet(D,f),D=addToSet(D,p);var I,h=addToSet({},S.concat(["STYLE_VALIDATION","ALLOWED_STYLE","EXTENDS","REMOVE_ONEVENTS","GLOBAL_ATTRIBUTES","GLOBAL_TAGS"],f,p,B)),U={iframe:{NAME:"iframe",ATTRIBUTE_RULES:{sandbox:{NAME:"sandbox",NOT_CONTAINS:["allow-top-navigation","allow-popups-to-escape-sandbox"],DEFAULT_VALUE:"allow-popups allow-forms allow-scripts allow-same-origin"}},APPEND_ATTRIBUTES:[{NAME:"sandbox",VALUE:"allow-popups allow-forms allow-scripts allow-same-origin"}]}},v=!1,b=addToSet({},t.ALLOWED_STYLE_PROPS);!function(){t.FORBID_TAGS_OBJ=addObjsToSet(t.FORBID_TAGS_OBJ,c),t.FORBID_ATTR_OBJ=addObjsToSet(t.FORBID_ATTR_OBJ,R);for(var e in N)N.hasOwnProperty(e)&&(t[e+"_OBJ"]=addToSet(t[e+"_OBJ"],t[e]));r.removeAllHooks(),I=!1,"NONE"==t.ALLOWED_STYLE&&(t.FORBID_TAGS_OBJ=addToSet(t.FORBID_TAGS_OBJ,["style"]),t.FORBID_ATTR_OBJ=addToSet(t.FORBID_ATTR_OBJ,["style"])),"INLINE"!=t.ALLOWED_STYLE&&"ALL"!=t.ALLOWED_STYLE||(t.STYLE_VALIDATION&&r.addHook("afterSanitizeAttributes",function(e){if(!e.ownerDocument.baseURI){var t=document.createElement("base");t.href=document.baseURI,e.ownerDocument.head.appendChild(t)}if(e.hasAttribute("style")){var r="";I=!1,n(e.style),(r=I?e.style.cssText:e.getAttribute("style")).length?e.setAttribute("style",r):e.removeAttribute("style")}}),"INLINE"==t.ALLOWED_STYLE&&(t.FORBID_TAGS_OBJ=addToSet(t.FORBID_TAGS_OBJ,["style"]),t.FORBID_ATTR_OBJ=removeFromSet(t.FORBID_ATTR_OBJ,"style"))),"INTERNAL"!=t.ALLOWED_STYLE&&"ALL"!=t.ALLOWED_STYLE||(t.STYLE_VALIDATION&&r.addHook("uponSanitizeElement",function(e,t){if("style"===t.tagName&&null!=e.sheet){var r=e.sheet.cssRules;if(I=!1,T(r),I){var o=[];i(o,r),e.textContent=o.join("\n")}}}),"INTERNAL"==t.ALLOWED_STYLE&&(t.FORBID_ATTR_OBJ=addToSet(t.FORBID_ATTR_OBJ,["style"]),t.FORBID_TAGS_OBJ=removeFromSet(t.FORBID_TAGS_OBJ,"style"))),"ALL"==t.ALLOWED_STYLE&&(t.FORBID_TAGS_OBJ=removeFromSet(t.FORBID_TAGS_OBJ,"style"),t.FORBID_ATTR_OBJ=removeFromSet(t.FORBID_ATTR_OBJ,"style")),(t.GLOBAL_ATTRIBUTE_RULES||t.TAG_RULES)&&r.addHook("afterSanitizeAttributes",function(e){for(var r=e.nodeName.toLowerCase(),o=t.GLOBAL_ATTRIBUTE_RULES,n=t.TAG_RULES&&t.TAG_RULES[r]&&t.TAG_RULES[r].ATTRIBUTE_RULES,T=U&&U[r]&&U[r].ATTRIBUTE_RULES,i=e.attributes.length;i--;){var a=e.attributes[i].name;d(e,n&&n[a]||o&&o[a],a)&&d(e,T&&T[a],a)}}),(t.GLOBAL_APPEND_ATTRIBUTES||t.TAG_RULES)&&r.addHook("afterSanitizeAttributes",function(e){var r=e.nodeName.toLowerCase();s(t.TAG_RULES&&t.TAG_RULES[r]&&t.TAG_RULES[r].APPEND_ATTRIBUTES,e),s(t.GLOBAL_APPEND_ATTRIBUTES,e),s(U&&U[r]&&U[r].APPEND_ATTRIBUTES,e)}),t.REMOVE_ONEVENTS&&r.addHook("uponSanitizeAttribute",function(e,t){0==t.attrName.indexOf("on")&&(t.keepAttr=!1)})}();var y=function(t){return t=u(t),e(t,r(window))};return y.isSupported=r.isSupported,y.removed="",ZSEC.util.defineProperty(y,"sanitize",function(e,t){var n=o(t),T=r.sanitize(e,n);return y.removed=r.removed,T},!1,!1,!0),y});!function(r){function e(r){for(var e=[],a=0;a<r.length;a++)e.push(r[a].charCodeAt(0));return e}var a={},t="34=&quot|38=&amp|60=&lt|62=&gt|160=&nbsp|161=&iexcl|162=&cent|163=&pound|164=&curren|165=&yen|166=&brvbar|167=&sect|168=&uml|169=&copy|170=&ordf|171=&laquo|172=&not|173=&shy|174=&reg|175=&macr|176=&deg|177=&plusmn|178=&sup2|179=&sup3|180=&acute|181=&micro|182=&para|183=&middot|184=&cedil|185=&sup1|186=&ordm|187=&raquo|188=&frac14|189=&frac12|190=&frac34|191=&iquest|192=&Agrave|193=&Aacute|194=&Acirc|195=&Atilde|196=&Auml|197=&Aring|198=&AElig|199=&Ccedil|200=&Egrave|201=&Eacute|202=&Ecirc|203=&Euml|204=&Igrave|205=&Iacute|206=&Icirc|207=&Iuml|208=&ETH|209=&Ntilde|210=&Ograve|211=&Oacute|212=&Ocirc|213=&Otilde|214=&Ouml|215=&times|216=&Oslash|217=&Ugrave|218=&Uacute|219=&Ucirc|220=&Uuml|221=&Yacute|222=&THORN|223=&szlig|224=&agrave|225=&aacute|226=&acirc|227=&atilde|228=&auml|229=&aring|230=&aelig|231=&ccedil|232=&egrave|233=&eacute|234=&ecirc|235=&euml|236=&igrave|237=&iacute|238=&icirc|239=&iuml|240=&eth|241=&ntilde|242=&ograve|243=&oacute|244=&ocirc|245=&otilde|246=&ouml|247=&divide|248=&oslash|249=&ugrave|250=&uacute|251=&ucirc|252=&uuml|253=&yacute|254=&thorn|255=&yuml|338=&OElig|339=&oelig|352=&Scaron|353=&scaron|376=&Yuml|402=&fnof|710=&circ|732=&tilde|913=&Alpha|914=&Beta|915=&Gamma|916=&Delta|917=&Epsilon|918=&Zeta|919=&Eta|920=&Theta|921=&Iota|922=&Kappa|923=&Lambda|924=&Mu|925=&Nu|926=&Xi|927=&Omicron|928=&Pi|929=&Rho|931=&Sigma|932=&Tau|933=&Upsilon|934=&Phi|935=&Chi|936=&Psi|937=&Omega|945=&alpha|946=&beta|947=&gamma|948=&delta|949=&epsilon|950=&zeta|951=&eta|952=&theta|953=&iota|954=&kappa|955=&lambda|956=&mu|957=&nu|958=&xi|959=&omicron|960=&pi|961=&rho|962=&sigmaf|963=&sigma|964=&tau|965=&upsilon|966=&phi|967=&chi|968=&psi|969=&omega|977=&thetasym|978=&upsih|982=&piv|8194=&ensp|8195=&emsp|8201=&thinsp|8204=&zwnj|8205=&zwj|8206=&lrm|8207=&rlm|8211=&ndash|8212=&mdash|8216=&lsquo|8217=&rsquo|8218=&sbquo|8220=&ldquo|8221=&rdquo|8222=&bdquo|8224=&dagger|8225=&Dagger|8226=&bull|8230=&hellip|8240=&permil|8242=&prime|8243=&Prime|8249=&lsaquo|8250=&rsaquo|8254=&oline|8260=&frasl|8364=&euro|8465=&image|8472=&weierp|8476=&real|8482=&trade|8501=&alefsym|8592=&larr|8593=&uarr|8594=&rarr|8595=&darr|8596=&harr|8629=&crarr|8656=&lArr|8657=&uArr|8658=&rArr|8659=&dArr|8660=&hArr|8704=&forall|8706=&part|8707=&exist|8709=&empty|8711=&nabla|8712=&isin|8713=&notin|8715=&ni|8719=&prod|8721=&sum|8722=&minus|8727=&lowast|8730=&radic|8733=&prop|8734=&infin|8736=&ang|8743=&and|8744=&or|8745=&cap|8746=&cup|8747=&int|8756=&there4|8764=&sim|8773=&cong|8776=&asymp|8800=&ne|8801=&equiv|8804=&le|8805=&ge|8834=&sub|8835=&sup|8836=&nsub|8838=&sube|8839=&supe|8853=&oplus|8855=&otimes|8869=&perp|8901=&sdot|8968=&lceil|8969=&rceil|8970=&lfloor|8971=&rfloor|10216=&lang|10217=&rang|9674=&loz|9824=&spades|9827=&clubs|9829=&hearts|9830=&diams";t=t.split("|");for(var i=0;i<t.length;i++){var n=t[i].split("=");a[n[0]]=n[1]}var u={characterToEntityMap:a,IMMUNE_HTML:e(new Array(",",".","-","_"," ")),IMMUNE_HTMLATTR:e(new Array(",",".","-","_")),IMMUNE_CSS:e(new Array),IMMUNE_JAVASCRIPT:e(new Array(",",".","_"))};ZSEC.util.defineProperty(ZSEC,"Encoder",r(u),!0,!1,!1,!0)}(function(r){function e(r,e,a,t){if(null==e||void 0==e||"string"!=typeof e)return e;for(var i="",n=0;n<e.length;n++)if(t){var u=e.codePointAt(n);i+=a(r,u,t),u>65535&&n++}else i+=a(r,e.charCodeAt(n));return i}for(var a={},t=r.characterToEntityMap,i=[],n=0;n<255;n++)i[n]=n>=48&&n<=57||n>=65&&n<=90||n>=97&&n<=122?null:n.toString(16);var u=function(r){return r<256?i[r]:r.toString(16)},o=function(r,e){if(-1!=ZSEC.util.ArrayIndexOf.call(r,e))return String.fromCodePoint(e);var a=u(e);if(null==a)return String.fromCodePoint(e);if(e<=31&&"\t"!=e&&"\n"!=e&&"\r"!=e||e>=127&&e<=159||" "==e)return" ";var i=t[e];return null!=i?i+";":"&#x"+a+";"},l=function(r,e){if(-1!=ZSEC.util.ArrayIndexOf.call(r,e))return String.fromCharCode(e);if(null==u(e))return String.fromCharCode(e);var a=e.toString(16);if(e<256){var t="00".substr(a.length);return"\\x"+t+a.toUpperCase()}return"\\u"+(t="0000".substr(a.length))+a.toUpperCase()},c=function(r,e){if(-1!=ZSEC.util.ArrayIndexOf.call(r,e))return String.fromCodePoint(e);var a=u(e);return null==a?String.fromCodePoint(e):"\\"+a+" "};return a.encodeForHTML=function(a){return e(r.IMMUNE_HTML,a,o,!0)},a.encodeForHTMLAttribute=function(a){return e(r.IMMUNE_HTMLATTR,a,o,!0)},a.encodeForJavaScript=function(a){return e(r.IMMUNE_JAVASCRIPT,a,l,!1)},a.encodeForCSS=function(a){return e(r.IMMUNE_CSS,a,c,!0)},Object.freeze&&Object.freeze(a),a});/*Polyfills for functions not available in other browsers. */

/*Polyfill for Node.after
//Not supported out of the box in IE and Edge. 
//from: https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/after()/after().md */
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('after')) {
      return;
    }
    Object.defineProperty(item, 'after', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function after() {
        var argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();
        
        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });
        
        this.parentNode.insertBefore(docFrag, this.nextSibling);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);


/*Polyfill for replaceWith. 
//Not supported out of the box for IE and Edge. */
function ReplaceWith(Ele) {
    var parent = this.parentNode,
        i = arguments.length,
        firstIsNode = +(parent && typeof Ele === 'object');
    if (!parent){
        return;
    } 
    
    while (i-- > firstIsNode){
      if (parent && typeof arguments[i] !== 'object'){
        arguments[i] = document.createTextNode(arguments[i]);
      } if (!parent && arguments[i].parentNode){
        arguments[i].parentNode.removeChild(arguments[i]);
        continue;
      }
      parent.insertBefore(this.previousSibling, arguments[i]);
    }
    if (firstIsNode){
        parent.replaceChild(this, Ele);
    } 
}
if (!Element.prototype.replaceWith){
    Element.prototype.replaceWith = ReplaceWith;
}
if (!CharacterData.prototype.replaceWith){
    CharacterData.prototype.replaceWith = ReplaceWith;
}
if (!DocumentType.prototype.replaceWith) {
    DocumentType.prototype.replaceWith = ReplaceWith;
}

/*Polyfill for startsWith
//Not supported out of the box for  IE */
if(!String.prototype.startsWith) {
      String.prototype.startsWith = function(searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
    };
}

/*Polyfill for endsWith
//Not supported out of the box for  IE */
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(search, this_len) {
    if (this_len === undefined || this_len > this.length) {
      this_len = this.length;
    }
    return this.substring(this_len - search.length, this_len) === search;
  };
}

var Lyte = {
    version : "2.1.0",
    $ : {},
    registeredMixins : {},
    Mixin : {},
    debug : false,
    performance : false,
    toBeRegistered : [],
    Security: {
      "_ourSanitizerInstance_" :{},
      "_userSanitizerInstance_":{}
    }
};

var sec = { "GLOBAL_TAGS": [], "GLOBAL_ATTRIBUTES": [],"FORBID_TAGS":[],"FORBID_ATTR":[] };
Lyte.Security._ourSanitizerInstance_ = ZSEC.HTMLPurifier(sec);
Lyte.Security._ourSanitizerInstance_._GLOBAL_TAGS = sec.GLOBAL_TAGS;
Lyte.Security._ourSanitizerInstance_._GLOBAL_ATTRIBUTES = sec.GLOBAL_ATTRIBUTES;
Lyte.Security._ourSanitizerInstance_._FORBID_TAGS = sec.FORBID_TAGS;
Lyte.Security._ourSanitizerInstance_._FORBID_ATTR = sec.FORBID_ATTR;
Lyte.Security.createSanitizer = function(obb){
    if(!obb.GLOBAL_TAGS){
        obb.GLOBAL_TAGS = [];
    }
    if(!obb.GLOBAL_ATTRIBUTES){
        obb.GLOBAL_ATTRIBUTES = [];
    }
    if(!obb.FORBID_TAGS){
        obb.FORBID_TAGS = [];
    }
    if(!obb.GLOBAL_ATTR){
        obb.GLOBAL_ATTR = [];
    }
    Lyte.Security._userSanitizerInstance_ = ZSEC.HTMLPurifier(obb);
    Lyte.Security._userSanitizerInstance_._GLOBAL_TAGS = obb.GLOBAL_TAGS;
    Lyte.Security._userSanitizerInstance_._GLOBAL_ATTRIBUTES = obb.GLOBAL_ATTRIBUTES;
    Lyte.Security._userSanitizerInstance_._FORBID_TAGS = obb.FORBID_TAGS;
    Lyte.Security._userSanitizerInstance_._FORBID_ATTR = obb.FORBID_ATTR;
    return Lyte.Security._userSanitizerInstance_;
}
var consoleTime = [];

Lyte.$.assetsDiv = document.createElement("div");
Lyte.$.assetsDiv.setAttribute("id", "lyteAssetsDiv");

Lyte.registerErrorCodes = function(obj) {
    Object.assign(Lyte.errorCodes, obj);
}

Lyte.establishObserverBindings  = function(observers,fromStore,properties) {
    var scope = this;
    if(fromStore){
        scope = fromStore;      
    }
    for(var i=0;i<observers.length;i++) {
        var props = observers[i].properties;
        for(var j=0;j<props.length;j++) {
            var actProp;
            var isArrayObserver = false;
            if(props[j].indexOf('.[]') !== -1) {
                isArrayObserver = true;
                actProp = Lyte.getProperty.call(this,props[j].substring(0, props[j].indexOf('.[]')),fromStore,properties);
            } else {
                actProp = Lyte.getProperty.call(this,props[j],fromStore,properties);
            }
            if(!actProp._observers) {
                Object.defineProperty(actProp, '_observers', {
                    value : new Set(),
                    enumerable: false, 
                    writable: true,
                    configurable: true
                });
            }
            actProp._observers.add({callee : scope, observer: observers[i], isArrayObserver : isArrayObserver});
        }
    }
}

Lyte.getProperty = function(key,fromStore,properties) {
    let arr = key.split('.');
    let property = this;
    if(fromStore){
        property = properties;
        if(!properties[arr[0]]){
            properties[arr[0]] = {};
        }
        property = properties[arr[0]];
    }
    else {                      
        if(!property._properties[arr[0]]) {
            property._properties[arr[0]] = {};
        } 
        property = property._properties[arr[0]];
    }

    Object.defineProperty(property, '_path', {enumerable: false, value : arr[0]});
    for(let i=1;i<arr.length;i++) {
        if(!property[arr[i]]) {
            property[arr[i]] = {};
            Object.defineProperty(property[arr[i]], '_path', {enumerable: false, value : property._path + "." + arr[i]});
        }
        property = property[arr[i]];
    }
    return property;
}

Lyte.getErrorMessage = function(code) {
    var args = Array.from(arguments).slice(1);
    if(Lyte.errorCodes[code]) {
        return Lyte.errorCodes[code].replace(/{(\d+)}/g, function(t, i) {
            return args[i]
        });
    } else {
        return code;
    }
}

Lyte.error = function () {
    var errorObj = arguments[0],
    parse = errorObj.stack;
    errorObj = parse ? errorObj : Error(Lyte.getErrorMessage.apply(Lyte, arguments));
    if (Lyte.onerror) {
        Lyte.onerror.call(this, errorObj);
    }
    Lyte.triggerEvent("error", errorObj);
    if(parse) {
        errorObj = JSON.parse(JSON.stringify(errorObj, Object.getOwnPropertyNames(errorObj)))
    }
    console.error(errorObj.stack);
};

Lyte.warn = function () {
    var errorObj = arguments[0];
    errorObj = errorObj.stack ? JSON.parse(JSON.stringify(errorObj, Object.getOwnPropertyNames(errorObj))) : Error(Lyte.getErrorMessage.apply(Lyte, arguments));
    console.warn(errorObj.stack.replace("Error: ",""));
};


var requiredMixins  = {};
Lyte.Mixin.register = function (name, mixin) {
  Lyte.registeredMixins[name] = mixin;
  var req;
  if(req = requiredMixins[name]) {
    for(var key in req) {
      Lyte.$.requiredMixins[key](mixin, req[key],key);
    }
  }
};

Lyte.$.requiredMixins = function(mixin,dir,type) {
  var req = requiredMixins[mixin] ? requiredMixins[mixin] : (requiredMixins[mixin] = {});
  if(!req[type]) {
    req[type] = [dir];
  } else {
    req[type].push(dir);  
  }
}

Lyte.Mixin.exists = function (name) {
  if (!Lyte.registeredMixins[name]) {
    // Lyte.error('Mixin used before being registered.');
    return false;
  }
  return true;
};

Lyte.log = function (text, src, color) {
  if (Lyte.debug) {
      if(color) {
          console.log("%c" + text,'color:' + color);
      } else {
        console.log(text);      
      }
  }
};

Lyte.time = function(fn) {
  if(Lyte.performance) {
    var index;
    if((index = consoleTime.indexOf(fn)) != -1) {
      consoleTime.splice(index,1);
      console.timeEnd(fn);
    } else {
      consoleTime.push(fn)
      console.time(fn);
    }
  }
}

Lyte.isRecord = function(object){
  if(object && object.$ && object.$.hasOwnProperty("isModified")) {
    return true;
  }
  return false;
}

Lyte.isComponent = function(object) {
  if(object && object.$node && object.__data) {
    return true;
  }
  return false;
}


/* --------- lyte router v2 changes starts---- */
var reqFiles = {};

Lyte.injectResources = function (files, every, completed) {
  var successFiles = [],
  errorFiles = []; 
  every = every || function() {};
  completed = completed || function() {};
  return new Promise(function(resolve) {
    processRequirements(files, resolve);   
  }).then(function() {
    completed(successFiles,errorFiles);  
  });

  function processRequirements(files, resolve) {
    if(!files) {
      resolve();
    } else {
      if(!Array.isArray(files)) {
        files = [files];
      }
      if(!files.length) {
        resolve();
      }
      var len = -(files.length);
      files.forEach(function(file) {
        if(typeof file == "string"){
          requestFile(file, Lyte.injectResources.availableTags[file], function() {
            loaded();
          });  
        } else if(Array.isArray(file)) {
          new Promise(function(r){
            processRequirements(file, r);
          }).then(function(){
            loaded();
          })
        } else {
          new Promise(function(r){
            processRequirements(file.parent, r);
          }).then(function(){
            new Promise(function(r1){
              processRequirements(file.child, r1)
            }).then(function(){
              loaded();
            })
          })
        }
      })
    }

    function loaded() {
      len++;
      if(len == 0) {
        resolve();
      }
    }
    
    function requestFile(file,cached,resolve) {
      if(reqFiles[file]) {
        reqFiles[file].push(resolve)
      } else {
        reqFiles[file] = [resolve];
        if(cached && cached.event.type != "error") {
          if(Lyte.removeFromCache.arr.indexOf(file) != -1) {
            Lyte.removeFromCache.arr.splice(Lyte.removeFromCache.arr.indexOf(file),1);
          }
          fileLoaded.call(cached.tag,cached.event,true);
          resolve();
        } else {
          makeRequest(file,
            function(event) {
              reqFiles[file].forEach(function(resolve) {
                resolve();
              });
              fileLoaded.call(this,event);
              every.call(this,event);
            }
          );
        }
      }
    }

    function fileLoaded(event,cached) {
      var file = this.getAttribute('src') || this.getAttribute('href');
      delete reqFiles[file];
      if(!cached) {
        if(Lyte.injectResources.availableTags[file]) {
          Lyte.injectResources.availableTags[file].tag.remove();
        }
        this.onerror = this.onload = undefined;
        Lyte.injectResources.availableTags[file] = {tag : this, event : {type : event.type}};
      }
    }
  }

  function makeRequest(file,callBack) {
    var tag,
    fileSplit = file.split('.'),
    type = fileSplit[fileSplit.length - 1],
    tags = { js: 'script', css: 'link' };
    tag = document.createElement(tags[type]);
    if (fileSplit.length == 1) {
      Lyte.error('Type of file is not specified in injectResources.');
      return;
    }
    if (type == 'css') {
      tag.setAttribute('href', file);
      tag.setAttribute('type', "text/css");
      tag.setAttribute('rel', "stylesheet");
    } else {
      tag.setAttribute('src', file);
    }
    tag.onerror = tag.onload = function (event) {
      if(event.type == "error") {
        errorFiles.push(event);  
      } else {
        successFiles.push(event);
      }
      if(callBack) {
        callBack.call(this,event);
      }
    };
    var ev = every.internal || {};
    ev.tag = tag;
    Lyte.triggerEvent("onBeforeInject", ev);
    Lyte.$.assetsDiv.appendChild(tag);
  };
};

Lyte.injectResources.availableTags = [];

Lyte.removeFromCache = function(arr) {
  Lyte.removeFromCache.assign(arr);
  if(Lyte.removeFromCache.arr.length) {
    Lyte.removeFromCache.arr.forEach(function(file) {
      if(Lyte.injectResources.availableTags[file]) {
        Lyte.injectResources.availableTags[file].tag.remove();
        delete Lyte.injectResources.availableTags[file];  
      }
    });
    Lyte.removeFromCache.arr = [];
  }
}

Lyte.removeFromCache.arr = [];

Lyte.removeFromCache.assign = function(arr) {
  arr = arr == "*" ? Object.keys(Lyte.injectResources.availableTags) : (Array.isArray(arr) ? arr : [arr]); 
  Lyte.removeFromCache.arr = Lyte.removeFromCache.arr.concat(arr);
  return;
}

/* --------- lyte router v2 changes ends ---- */

Lyte.checkProperty = function(property, dataVal, key, fieldVal, record, type){
  var exts = "extends";
  switch(property){
    case "type" : 
      if(Lyte.Transform.hasOwnProperty(fieldVal) && dataVal !== undefined && dataVal !== null){
        if(Array.isArray(dataVal)){
          if(Lyte.Transform[fieldVal][exts] != "array"){
            return {code : "ERR03", message : Lyte.errorCodes.ERR03, expected : fieldVal};
          }
        }
        else if(Lyte.Transform[fieldVal][exts] != (typeof dataVal)){
          return {code : "ERR03", message : Lyte.errorCodes.ERR03, expected : fieldVal};
        }
      }
      else if(dataVal !== undefined && dataVal !== null){
        if(Array.isArray(dataVal)){
           if(fieldVal != "array"){
              return {code : "ERR03", message : Lyte.errorCodes.ERR03, expected : fieldVal};
           }
        }
        else if(fieldVal != (typeof dataVal)){
          return {code : "ERR03", message : Lyte.errorCodes.ERR03, expected : fieldVal};
        }
      }
      break;
    case "mandatory":
      if(fieldVal && (dataVal == undefined || dataVal == null || dataVal === "")){
        return {code : "ERR02", message: Lyte.errorCodes.ERR02 };
      }
      break;
    case "maximum" :
      if((typeof dataVal == "number") && dataVal > fieldVal){
        return {code : "ERR04", message : Lyte.errorCodes.ERR04, expected : fieldVal};
      }
      break;
    case "minimum" :
      if((typeof dataVal == "number") && dataVal < fieldVal){
        return {code : "ERR05", message : Lyte.errorCodes.ERR05, expected : fieldVal};
      }
      break;
    case "maxLength" :
    case "maxItems" :
      if(dataVal && dataVal.length > fieldVal){
        return {code : "ERR06", message : Lyte.errorCodes.ERR06, expected : fieldVal};
      }
      break;
    case "minLength" :
    case "minItems" :
      if(dataVal && dataVal.length < fieldVal){
        return {code : "ERR07", message : Lyte.errorCodes.ERR07, expected : fieldVal};
      }
      break;
    case "pattern" :
      if( typeof dataVal == "string" && !(new RegExp(fieldVal).test(dataVal))){
        return {code : "ERR08", message : Lyte.errorCodes.ERR08, expected : fieldVal};
      }
      break;
    case "uniqueItems" :{
      if(Array.isArray(dataVal) && fieldVal){
        var newArr = [];
        for(var i=0; i<dataVal.length; i++){
          var val = dataVal[i];
          if(newArr.indexOf(val) != -1){
            return {code : "ERR09", message : Lyte.errorCodes.ERR09};
          }
          newArr.push(val);
        }         
      }
      break;        
    }
    case "constant" :
      if(Array.isArray(dataVal)){
        var resp = dataVal.length==fieldVal.length && dataVal.every(function(v,i) { return v === fieldVal[i]});
        if(!resp){
          return {code : "ERR10", message : Lyte.errorCodes.ERR10, expected : fieldVal};
        }
      }
      else if(typeof dataVal == "object"){
        var resp = store.adapter.$.compareObjects(dataVal, fieldVal);
        if(!resp){
          return {code : "ERR10", message : Lyte.errorCodes.ERR10, expected : fieldVal};
        }
      }
      else if(dataVal && dataVal != fieldVal){
        return {code : "ERR10", message : Lyte.errorCodes.ERR10, expected : fieldVal};
      }
      break;
    case "items" :{
      if(Array.isArray(dataVal)){
        for(var i=0; i<dataVal.length; i++){
          for(var property in fieldVal){
            var resp = Lyte.checkProperty(property, dataVal[i], i, fieldVal[property]);
            if(resp != true){
              return resp;
            }
          }
        }         
      }
      break;        
    }
    case "properties" :
      if(typeof dataVal == "object" && !Array.isArray(dataVal)){
        for(var key in dataVal){
          for(var property in fieldVal){
            var resp = Lyte.checkProperty(property, dataVal[key], key, fieldVal[property]);
            if(resp != true){
              return resp;
            }
          }
        }         
      }
      break;
    case "validation" :{
      var resp =  Lyte.customValidator[fieldVal].apply(record, [key, dataVal]);
      if(resp != true){
        return resp;
      }
    }       
  }
  return true;
}

Lyte.types = ["string", "object", "number", "boolean", "array"];

Lyte.attr = function(type, opts){
  var obj = {};
  obj.type = type;
  if(opts == undefined){
    opts = {};
  }
  if(this.types.indexOf(type) == -1 && !Lyte.Transform.hasOwnProperty(type)){
    throw new Error("Not a valid field type - "+type);
  }
  Object.assign(obj,opts);
  return obj;
}

Lyte.defineRelation = function(name,type,opts){
  var relation = {type : "relation", relType : type, relatedTo : name};
  if(opts){
    relation.opts = opts;
  }
  return relation;
}

Lyte.belongsTo = function(name,opts){
  return this.defineRelation(name,"belongsTo",opts);
}

Lyte.hasMany = function(name,opts){
  return this.defineRelation(name,"hasMany",opts);
}

Lyte.Transform = {};

Lyte.customValidator = {};

Lyte.registerDataType = function(fieldTypeName, properties){
  var exts = "extends";
  if(this.Transform.hasOwnProperty(fieldTypeName)){
    throw new Error("Custom Field Type - "+fieldTypeName+" -  already exists.");
  }
  if(properties[exts] == undefined || Lyte.types.indexOf(properties[exts]) == -1){
    throw new Error("Not a valid field type - "+properties[exts]);
  }
  this.Transform[fieldTypeName] = properties;
}

Lyte.registerValidator = function(customValidatorName, func){
  if(this.customValidator.hasOwnProperty(customValidatorName)){
    throw new Error("Custom Validator with name - "+customValidatorName+" - already exists");
  }
  this.customValidator[customValidatorName] = func;
}

Lyte.patterns = {
  email : /^([A-Za-z0-9._%\-'+/]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,22})$/,
  url : /(^(ht|f)tp(s?):\/\/[0-9a-zA-Z][-.\w]*(:[0-9])*(\/?)([a-zA-Z0-9\-.?,:'/\\+=&amp;%$#_[\]@!()*;~]*)?$)/,
  ampm : /^(AM|PM|am|pm)$/,
  hour : /^(0?[0-9]|1[0-9]|2[0-4])$/,
  minute : /^(0?[0-9]|[1-5][0-9]|60)$/,
  boolean : /^(true|false|TRUE|FALSE)$/,
  alphaNumeric : /([a-zA-Z0-9])+/,
  alphabetsOnly : /([a-zA-Z])+/,
  numeric : /([0-9])+/,
  phoneNo : /^[0-9a-zA-Z+.()\-;\s]+$/
}

Lyte.validate = function(object, key, value, component) {
  var definition = component.__data[key];
  var isError = false;
  var type = definition ? definition.type : undefined;
  for(var defKey in definition) {
    isError = Lyte.checkProperty(defKey, value, key, definition[defKey], object, type);
    if(isError !== true) {
      return isError;
    }
  }
  return false;
}

Lyte.registerPattern = function(patternName, pattern){
  this.patterns[patternName] = pattern;
}

Lyte.errorCodes = {
  ERR01 : "Primary key cannot be modified", ERR02 : "Mandatory field cannot be empty", ERR03 : "Type of value does not match the specified data type", ERR04 : "Value is greater than the maximum value allowed",
  ERR05 : "Value is less than the minimum value allowed", ERR06 : "Length of string/array is greater than the maximum limit allowed", ERR07 : "Length of string/array is less than the minimum limit allowed",
  ERR08 : "String does not match the specified pattern", ERR09 : "Values in array are not unique", ERR10 : "Value is not equal to the specified constant", ERR11 : "Model of related field is not defined",
  ERR12 : "Model of backward relation is not defined", ERR13 : "Record not found", ERR14 : "Model does not match the related field model", ERR15 : "Error in creating a record as a relation",
  ERR16 : "Record with primary key already exists", ERR17 : "Value cannot be changed because record has been deleted", ERR18 : "Action not defined", ERR19 : "Model not defined",
  ERR20 : "Key not specified", ERR21 : "'belongsTo' relationship expects a single object/id", ERR22 : "Type not specified for polymorphic relation", ERR23: "Primary Key value not present", ERR24: "Error while relating record", ERR25: "Backward relation not present"
}

Lyte.registeredGlobalEvents = {};
Lyte.triggerEvent = function() {
   var args = Array.prototype.slice.call(arguments, 1)
   var eventName = arguments[0];
   var stopEvent = false;
   var s = this.registeredGlobalEvents[eventName];
     if(!s) {
       s = this.registeredGlobalEvents[eventName] = {"listeners" : []};
     } else {
       for(var i=0;i<s.listeners.length;i++) {
         var func = s.listeners[i];
         if(func) {
            var ret = func.apply(this, args);
            if(ret === false) {
              stopEvent = true;
              break;
            }
         }
       }
     }
     var customEvent = new CustomEvent(eventName, {"detail" : args});
     if(!stopEvent) {
      document.dispatchEvent(customEvent); 
     } 
 }

 Lyte.addEventListener = function(eventName, func) {
   if(typeof func !== "function") {
       Lyte.error("Second parameter to Lyte.Component.addGlobalEventListener() must be a function");
       return;
   }
   var s = this.registeredGlobalEvents[eventName];
   if(!s) {
     s = this.registeredGlobalEvents[eventName] = {"listeners" : []};
   }
   var d = s.listeners.push(func);
   return eventName + "-" + (d - 1);
 }

Lyte.removeEventListener = function(id) {
   if(!id) {
     Lyte.error("listener unique id not specified");
     return;
   }
   var globalId  = id.split("-");
   var s = this.registeredGlobalEvents[globalId[0]];
   if(!s || !s.listeners[globalId[1]]) {
       Lyte.error("No such listener registered");
       return;
   }
   s.listeners[globalId[1]] = null;
 }

Lyte.deepCopyObject = function( obj )  {
var targetVal = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
var current, copies = [{source : obj, target : targetVal}], keys, propertyIndex, descriptor, nextSource, indexOf, sourceReferences = [obj];
var cloneObject = copies[0].target, targetReferences = [cloneObject];
while(current = copies.shift()){
    keys = Object.keys(current.source);
    for(propertyIndex = 0; propertyIndex < keys.length; propertyIndex++){
        descriptor = Object.getOwnPropertyDescriptor(current.source, keys[propertyIndex]);
        if(!descriptor.value || typeof descriptor.value != "object"){
            Object.defineProperty(current.target, keys[propertyIndex], descriptor);
            continue;
        }
        nextSource = descriptor.value;
        descriptor.value = Array.isArray(nextSource) ? [] : nextSource instanceof Set ? new Set() : Object.create(Object.getPrototypeOf(nextSource));
        indexOf = sourceReferences.indexOf(nextSource);
        if(indexOf != -1){
            descriptor.value = targetReferences[indexOf];
            Object.defineProperty(current.target, keys[propertyIndex], descriptor);
            continue;
        }
        sourceReferences.push(nextSource);
        targetReferences.push(descriptor.value);
        Object.defineProperty(current.target, keys[propertyIndex], descriptor);
        copies.push({source : nextSource, target : descriptor.value});
    }
    if(Lyte.isRecord(current.source)){
      Object.defineProperty(current.target, "$", {
        value: {}
      });
      current.target.$.isNew = current.source.$.isNew;
      current.target.$.isModified = current.source.$.isModified;
      current.target.$.isDeleted = current.source.$.isDeleted;
      current.target.$.pK = current.source.$.pK;
      current.target.$._attributes = current.source.$._attributes;
      if(current.source.$.hasOwnProperty("deepNest")){
        current.target.$.deepNest = current.source.$.deepNest;
      }
      if(current.source.$.hasOwnProperty("partialType")){
        current.target.$.partialType = current.source.$.partialType;
      }
    }
    if(Array.isArray(current.source)){
      if(current.source.partial){
        Object.defineProperty(current.target, "partial", {
          value: current.source.partial
        });
      }
    }
}
return cloneObject;
}

Lyte.resolvePromises = function(promises) {
  if(typeof promises == "string" || promises instanceof Promise) {
      return promises;
  } else {
    if(Array.isArray(promises)) {
      return promiseArray(promises);
    } else if(typeof promises == "object") {
      return promiseHash(promises);
    }    
  }

  function promiseHash(promiseObj) {
    var actPromKeys = [],
    promises = [],
    promiseKeys = Object.keys(promiseObj);
    promiseKeys.forEach(function(key) {
        var value = promiseObj[key];
      if(value instanceof Promise) {
        actPromKeys.push(key)
        promises.push(value);
      }
    });
    if(!promises.length) {
      return Promise.resolve(promiseObj);
    } else {
       var obj = {},promise = new Promise(function(resolve,reject) {
          Promise.all(promises).then(function(data) {
            promiseKeys.forEach(function(promiseKey) {
              if(actPromKeys.indexOf(promiseKey) != -1) {
                obj[promiseKey] = data[actPromKeys.indexOf(promiseKey)]
              } else {
                obj[promiseKey] = promiseObj[promiseKey];
              }
            });
          resolve(obj);
        },function(err) {
          reject(err);
          Lyte.error(err);
        });
      });   
     return promise;
    }
  }

  function promiseArray(promiseArray) {
    var array = [],
    hasPromise = false;
    promiseArray.every(function(item,i) {
        if(item instanceof Promise) { 
            hasPromise = true;
            return false;
        }
        return true
    });
    if(!hasPromise) {
        return Promise.resolve(promiseArray);
    }
    var promise = new Promise(function(resolve,reject) {
      Promise.all(promiseArray).then(function(data) {
        promiseArray.forEach(function(key,index){
          array[index] = data[index];
        });
        resolve(array);
      },function(err) {
        reject(err);
        Lyte.error(err);
      });
    });   
   return promise;
  }
};

Lyte.createCustomElement = function (customElementName, definition) {
  var constructor = definition.constructor;
  delete definition.constructor;
  this.defProperty = function(obj, key, val) {
    var obj1 = {};
    if(val.get) {
      obj1.get = val.get
    }
    if(val.set) {
      obj1.set = val.set
    }
    Object.defineProperty(obj, key, obj1);
  }
  class classDef extends HTMLElement {
    constructor() {
      super();
      if(constructor) {
        constructor.apply(this, Array.from(arguments));
      }
    }
  }
  var staticDef = definition.static;
  if(staticDef) {
    for(var key in staticDef) {
      if(typeof staticDef[key] === "object") {
        this.defProperty(classDef, key, staticDef[key]);
      } else {
        Object.defineProperty(classDef, key, {
          value : staticDef[key]
        });
      }
    }
    delete definition.static;
  }
  for(var key in definition) {
    if(typeof definition[key] === "object") {
      this.defProperty(classDef.prototype, key, definition[key]);
    } else {
      Object.defineProperty(classDef.prototype, key, { value : definition[key]});
    }
  }
  definition.static = staticDef[key];
  definition.constructor = constructor;
  if (document.readyState === "complete" || document.readyState === "interactive") {     
    // document is already ready to go
    customElements.define(customElementName,classDef);
  }
  else{
    Lyte.toBeRegistered.push({name:customElementName, def: classDef});
  }
}

function domContentLoaded1() {
  document.head.appendChild(Lyte.$.assetsDiv);
  let comp = Lyte.toBeRegistered;    
  if(comp.length){    
      for(let j=0; j<comp.length;j++){
          customElements.define(comp[j].name, comp[j].def);    
      }    
      Lyte.toBeRegistered = [];    
  }
}


if(document.readyState === "complete" || document.readyState === "interactive") {
    domContentLoaded1();
} else {
    document.addEventListener("DOMContentLoaded", function(e){
        domContentLoaded1();
    },true);
};

;(function(window) {
	function Router(routes) {
	  /*-----------string declaration starts------------*/
    var functionStr = "function",
    routeStr = "route",
    TransitionStr = "Transition",
    pendingStr = "pending",
    completedStr = "completed",
    TransitionAbortedStr = TransitionStr+" aborted.",
    TransitionResumedStr = TransitionStr+" resumed.",
    TransitionPausedStr = TransitionStr+" paused.",
    TransitionComletedStr = TransitionStr+" "+completedStr+".",
    parseRouteMappingStr = "parseRouteMapping",
    constructRunLoopStr = "constructRunLoop",
    RouteTransitionStr = "Route"+TransitionStr,
    getDependenciesStr = "getDependencies",
	getResourcesStr = "getResources",
	beforeModelStr = "beforeModel",
	modelStr = "model",
	afterModelStr = "afterModel",
	redirectStr = "redirect",
	renderTemplateStr = "renderTemplate",
	afterRenderStr = "afterRender",
    beforeExitStr = "beforeExit",
    didDestroyStr = "didDestroy",
	willTransitionStr = "will"+TransitionStr,
	didTransitionStr = "did"+TransitionStr,
	onErrorStr = "onError",
	onBeforeLoadStr = "onBeforeLoad",
	beforeRouteTransitionStr = "beforeRoute"+TransitionStr,
	afterRouteTransitionStr = "afterRoute"+TransitionStr,
	beforeTemplateDestroyStr = "beforeTemplateDestroy",
	resourcesStr = "resources",
    dependenciesStr = "dependencies",
    pRoute = "lt-prop-"+routeStr,
    pFragment = "lt-prop-fragment",
    pDp = "lt-prop-dp",
    pQp = "lt-prop-qp",
    pTrans = "lt-prop-trans",
    pRefreshRoute = "lt-prop-refresh-"+routeStr,
    abortedStr = "aborted",

	/*-----------string declaration ends------------*/
	fontColor = 'MediumOrchid',
	newTransInfo,
	t = Lyte.time,
	l = Lyte.log,
    parse = JSON.parse,
    LR = this,
    d = document,
	dloc = d.location,
	config = {
		queryParamOptions : {}
	},
	trans,
	prevTrans,
	newTrans,
	visibleTrans,
	routeHash = {},
	historyObj,
	initialLoad = true,
	allowHistoryChange = false,
	fromHistoryGo = false,
	routeParser,
	processedDispatch,
	emptyFn = function() {},
	run = {},
	reqestedType = {
	getResources : resourcesStr,
	getDependencies : dependenciesStr
	};

	run[getDependenciesStr] = run[getResourcesStr] = function(hook,index) {
		var r = this.R[index],
		callback = r[hook],
		require = callHookWithoutPromise.call(this,callback,this.routes[index],hook,params(index));
		r.__lp[reqestedType[hook]+'Loaded'] = !callback;
		if(callback && validateTransition(this)) {
			r.__lp[reqestedType[hook]] = require;
			if(require && hook == getDependenciesStr) {
				console.log('Requesting files in getDependencies will stall execution of route till download completes. Please validate files before requesting.');
			}
			getRequirements.call(this,{reqType : reqestedType[hook],r : r,  index : index});
		}
		return callHookWithPromise();
	};

	run[beforeModelStr] = 
	run[modelStr] = 
	run[afterModelStr] = 
	run[redirectStr] = function(hook,index) {
		var routeInstance = this.routes[index],
		args = [this.R[index][hook],routeInstance,params(index)];
		if([afterModelStr,redirectStr].indexOf(hook) != -1) {
			args.splice(2,0,routeInstance.currentModel);
		}
		return callHookWithPromise.apply(this,args);
		};

	run[onErrorStr] = function(index,err,hook,state) {
		setPendingResume.call(trans,trans.prom);
		var instance = this.routes[index];
		consoleErrorFromCallback(err,hook,instance.routeName,state);
		for(; index >= 0 && !this.aborted && this.paused; index--) {
			l(onErrorStr+" of "+ instance.routeName,routeStr,fontColor);
			if(callAction.call(this,onErrorStr,index,[err,this._trans,params(index),hook]) == false) {
			break;
			}  
		}
	};

	run[willTransitionStr] = function(hook,index) {
		if(callAction.call(prevTrans,hook,index,[trans._trans]) == false) {
			removeHook(trans.runLoop.previous,hook);
		}
		return callHookWithPromise();
	};

	run[beforeRouteTransitionStr] = function() {
		if(newTransInfo && validateTransition(this)) {
			newTransInfo.state = getHistoryState({
			replace : newTransInfo.replace,
			data : trans._trans.data,
			url : trans.url,
			matched : trans.matched
			});
			var obj = {
			prevTrans : prevTrans && prevTrans._trans || undefined,
			trans : trans._trans,
			history : getHistoryObj(newTransInfo)
			};
			LR[beforeRouteTransitionStr](obj.prevTrans, obj.trans , obj.history);
			Lyte.triggerEvent(beforeRouteTransitionStr, obj);
		}
		return callHookWithPromise();
	};

	run[afterRouteTransitionStr] = function(_trans) {
		LR[afterRouteTransitionStr](_trans);
		Lyte.triggerEvent(afterRouteTransitionStr, {trans : _trans});
		return;
	};

	run[onBeforeLoadStr] = function() {
		return new Promise(function(resolve,reject) {
			for(var len = trans.matched.route.length,i=1; i <= len; i++) {
		var l = len-i;
		if((callAction.call(trans,onBeforeLoadStr,l,[params(l)]) == false) || (i == len)) {
			resolve();
			break;
		}
			}
		});
	};

	run[afterRenderStr] = function(hook,index) {
		return new Promise(function(resolve, reject) {
			var ar = setTimeout(function() {
				var routeInstance = this.routes[index];
				routeInstance.__lp.rendered =  true;
				callHookWithPromise.call(this,this.R[index][hook],routeInstance,routeInstance.currentModel,params(index),routeInstance.component).then(function(data) {
					resolve(data);
				}, function(data) {
					reject(data);
				});
			}.bind(this,hook,index),0);
			this.fns.push(ar);          
		}.bind(this));
	};
	
	run[didTransitionStr] = function(hook,index) {
		return new Promise(function(resolve, reject) {
			var dt = setTimeout(function() {
			run.removeTemplate.call(this);
			if(callAction.call(this,hook,index,[params(index),trans._trans]) == false) {
				removeHook(trans.runLoop.current,hook);
				index = 0;
			}
			resolve();
			if(index == 0) {
				transitionCompleted({state : 200});
			}
			}.bind(this,hook,index),0);
			this.fns.push(dt);          
		}.bind(this));
	};

	run[didDestroyStr] = function() {
		if(prevTrans) {
			var index = prevTrans.routes.length-1,
			instance;
			for(;index >= 0 && validateTransition(this); index--) {
				instance = prevTrans.routes[index];
				callDidDestroy.call(this,instance,index,prevTrans);
			}  
		}
	};

	run[beforeExitStr] = function(hook,index) {
		var prevTransRouteInstance = prevTrans.routes[index],
		callback = prevTrans.R[index][hook];
		if(callback) {
			Lyte.warn('beforeExit callback is deprecated and will be removed in next version. Move code from beforeExit to didDestroy or willTransition method.');
		}
		return callHookWithPromise.call(this,callback,prevTransRouteInstance,prevTransRouteInstance.currentModel,params(index,prevTrans));
	};

	run[renderTemplateStr] = function(hook,index) {
		var r = this.R[index],
		routeInstance = this.routes[index];
		if(r[hook]) {
			run.removeTemplate.call(this);
			var renderTemplate = callHookWithoutPromise.call(this,r[hook],routeInstance,hook,routeInstance.currentModel,params(index));
			if(validateTransition(this)) {
			if(renderTemplate && (routeInstance.outletName = renderTemplate.outlet)) {
				var data = routeInstance.currentModel,
				outlet;
				if(routeInstance.outlet = outlet = getOutlet(renderTemplate.outlet,routeInstance.parent)) {
				var  obj = {
					outlet : renderTemplate.outlet,
					route : routeInstance
				};
				if(renderTemplate.component) {
					var component;
					if(routeInstance.component && !renderTemplate.reRender && (routeInstance.component.tagName.toLocaleLowerCase() == renderTemplate.component) && routeInstance.outlet == outlet && outlet.contains(routeInstance.component)) {
					component = routeInstance.component;
					component._route = routeInstance.__lp.objPath;
					setDataInComponent.call(this,component,data,routeInstance);
					} else {
					Lyte.triggerEvent(beforeTemplateDestroyStr, obj);
					component = d.createElement(renderTemplate.component);
					component._route = routeInstance.__lp.objPath;
					setDataInComponent(component,data,routeInstance);
					outlet.innerHTML = '';
					outlet.appendChild(component);
					}
					routeInstance.component = component;
				} else if(renderTemplate.html) {
					routeInstance.component = undefined;
					Lyte.triggerEvent(beforeTemplateDestroyStr, obj);
					outlet.innerHTML = renderTemplate.html;
					var scripts = outlet.getElementsByTagName('script');
					if(scripts.length) {
					scriptExecution(Array.from(scripts),outlet);
					}
				}
				}
			} else {
				Lyte.warn("renderTemplate hook should return either component or HTML. Rendering of HTML directly into the DOM within the renderTemplate hook is deprecated.");
			}
			}  
		} else if(validateTransition(this) && this.runLoop.templateToRemove && this.R.length == index+1) {
			run.removeTemplate.call(this);
		}
		return callHookWithPromise();
	};

	function setDataInComponent(component,data,routeInstance) {
		if(data) {
			if(typeof data == "object" && !Array.isArray(data)) {
			component.setData(data);
			} else {
			processError.call(this,true,Error(getError(203)).stack,routeInstance);
			}   
		}
	}
	
	function getOutlet(outlet,parent) {
		var _outlet;
		if(parent) {
			_outlet =  parent.outlet ? parent.outlet.querySelector(outlet) : undefined;
			if(!_outlet) {
			return getOutlet(outlet,parent.parent);
			}
		} else if(!(_outlet = d.querySelector(outlet))) {
			consoleError(428,outlet);
		}
		return _outlet;
	}

	function scriptExecution(scriptNode,elm) {
		for(var i=0,currentScript;currentScript = scriptNode[i];i++) {
			var parent = currentScript.parentNode,
			s = d.createElement("script");
			for(var j = 0,attributes;attributes = currentScript.attributes[j]; j++) {
			s.setAttribute(attributes.name, attributes.value);
			}
			s.innerHTML = currentScript.innerHTML;
			parent.appendChild(s);
			parent.removeChild(currentScript);
		}
	}
	
	run.removeTemplate = function() {
		var arr = this.runLoop.templateToRemove;
		if(!this.cleared) {
			if(prevTrans && arr) {
			templateDelete(arr);
			}
			this.cleared = true;
			if(visibleTrans != this) {
				visibleTrans = this;
			}
			delete this.runLoop.templateToRemove;
			Lyte.removeFromCache();
		}
	};

	function params(index,t) {
		t = t || trans;
		var routeInstance = t.routes[index];
		return {
			queryParams : routeInstance.__lp.queryParams, 
			dynamicParam : routeInstance.__lp.dynamicParam
		};
	}

	function validateTransition(trans) {
		return !trans.aborted && !trans.paused;
	}
	
	function addToHistory(obj) {
		var type = obj.replace ? "replaceState" : "pushState",
		url = config.history ? _delimit(shiftBaseURL(obj.url, true)) : '#'+_delimit(obj.url);
		obj.title = obj.title || d.title;
		/* support for windows, undefined is appended to url */
		if(url) {
			window.history[type](obj.state, obj.title, url);
		} else {
			window.history[type](obj.state, obj.title);
		}
		return obj;
	}

	function getMeta() {
		return history.state && history.state.meta;
	}

	function getData() {
		return history.state && history.state.data;
	}

	function getHistoryState(obj) {
		/* 
			state data which needs to be pushed to history. 
			- Matched object is added to process url directly with history back and forward.
			- Index is used to detect browser back or forward.
		*/
		return {
			meta : {
			matched : obj.matched,
			url : obj.url,
			index : (obj.replace && getMeta()) ? getMeta().index : (initialLoad ? history.length-1 : history.length)
			},
			data : obj.data
		};
	}

	function getHistoryObj(obj) {
		/* parses history state to history object. */
		if(!LR.history) {
			historyRegistration();
		}
		LR.history.fromHistory = obj.fromHistory ? ((LR.history.index = obj.state.meta.index) < history.length-1 ? 'back' : (history.state ? 'reload' : 'forward')) : false;
		allowHistoryChange = true;
		LR.history.state = getData() ? getData() : {};
		LR.history.initial = initialLoad;
		return LR.history;
	}

	this.configureDefaults = function(options) {
		options = options || {};
		config.history = options.history == "html5";
		config.baseURL = options.baseURL;
		config.deferInit = options.deferInit || false;
		config.queryParamOptions = {
			sticky : options.queryParamOptions && options.queryParamOptions.hasOwnProperty('sticky') ?  options.queryParamOptions.sticky : true
		};
		this.__lp.config = config;
	}; 

	this.__lp = {
		version : "2.1.0",
		getDefinition : function(arr,def) {
			if(arr == "*") {
			return config.routes;
			} else {
			def = def || config.routes;
			def = _getObj(arr,def);
			return def && def.__lp && def.__lp.def || undefined;  
			}
		}
	};

	this.configureRoutes = function (map) {
		if(!this.__lp) {
			this.configureDefaults();
		}
		config.routes = typeof map == functionStr ? parseRouteMapping.call(this, map) : map;
		if(d.readyState === "complete" || d.readyState === "interactive") { 
			init();
		} else {
			window.addEventListener('DOMContentLoaded', function() {
			init();
			});
		}
	};

	function init () {
		if(!config.deferInit && LR.init) {
			LR.init();
		}  
	}

	this.init = function(r) {
		delete this.init;
		window.onpopstate = function(onChangeEvent) {
			if(fromHistoryGo) {
			fromHistoryGo = false;
			return;
			}
			var url;
			if(!(getMeta() && (url = getMeta().url))) {
			if(config.history) {
				url = getLocation();
			} else {
				var newURL = onChangeEvent && onChangeEvent.newURL || dloc.hash;
				url = checkForEmptyPath(newURL.replace(/.*#/, ''));
			}  
			}
			historyObj = {
			fromHistory : true,
			url : url
			};
			if(onChangeEvent && history.state) {
			historyObj.data = history.state;
			}
			dispatch(url);
		};
		if(config.history) {
			window.onpopstate();
		} else {
			historyObj = {
			fromHistory : true,
			url : getLocation()
			};
			dispatch(historyObj.url);
		}
		linkToRegistration();
		return this;
	};
	
	this.beforeScroll = this[beforeRouteTransitionStr] = this[afterRouteTransitionStr] = emptyFn;

	function setRouteDef(dir,value) {
		var cache = config.routes,
		dirLen = dir.length-1;
		dir.forEach(function(key,i) {
			if(dirLen === i) {
			if(cache[key] && cache[key].__lp) {
				cache[key].__lp.def = value;
			} else if(cache[key]) {
				cache[key].__lp = {def : value} ;
			} else {
				cache[key] = {__lp : {def : value}};
			}
			} else if(!cache[key])  {
			cache[key]= {};
			}
			cache = cache[key];
		});
	}   
  
	  function linkToRegistration() {
		class LinkTo extends HTMLElement {
			static get observedAttributes() {
				return [pRoute, pDp, pFragment, pQp, 'lt-prop', 'lt-prop-class', 'lt-prop-id', 'lt-prop-rel', 'lt-prop-title', 'lt-prop-style', 'lt-prop-target'];
			}
			attributeChangedCallback(attr, oldValue, newValue) {
      		var ha = this.hasAttribute.bind(this);
			if(ha("lyte-rendered") && this._linkCreated) {
			  let firstChild = this.children[0];
			  //If attr is ltProp
			if(attr === "lt-prop") {
				this.handleLtProp();
				if(!ha("lt-prop-custom")) {
				  this.setCustomAttributes(firstChild, true);
				}
				if(!this.pendingCallback) {
				  this.pendingCallback = true;
				  setTimeout(function() {
					this.pendingCallback = false;
					this.getMatchedObject();
				  }.bind(this),0);  
				}
				if(firstChild.tagName === "A") {
				  this.constructHref(firstChild);
				}
			} else if(/^(lt-prop-route|lt-prop-fragment|lt-prop-dp|lt-prop-qp)$/.test(attr)) {
				//if it is a route transition attribute
				this.getMatchedObject();
				if(firstChild.tagName === "A") {
				  this.constructHref(firstChild, attr, oldValue, newValue);
				}
			} else if(!ha('lt-prop-custom')) {
				//for rest of the attributes
				firstChild.setAttribute(attr.substring(8), newValue);
			  }
			}
		}
		connectedCallback() {
		this.ltProp = this.ltProp || {};
		var ha = this.hasAttribute.bind(this);
			if(ha("lyte-rendered")) {
				this._linkCreated = true;
				this.getMatchedObject();
				return;
			} 
			this.handleLtProp();
			let isCustom = ha("lt-prop-custom") || this.ltProp.custom,
			linkTag;
			if(isCustom) {
			  //To set the matched object. 
				this.getMatchedObject();
				if(this.children[0].tagName === "A") {
					//update only href.
					this.constructHref(this.children[0]);
				}
			} else {
			  	linkTag = d.createElement("a");
				for(let i=0,childNode;childNode = this.childNodes[i]; i++) {
				  	linkTag.appendChild(childNode);
				}
				//update Href and other attributes to linkTag
				this.setCustomAttributes(linkTag);
				// sets Matched Obj in this and constructs href
				this.getMatchedObject();
				this.constructHref(linkTag);
				this.appendChild(linkTag);
			}
			this.setAttribute("lyte-rendered", "");
			if(Lyte.Component) {
			  	this._linkToEventId = Lyte.Component.addLyteEventListener(this, "click", function(event) {
					linkToEventListener(event, this);
			  	}, this);
			} else {
				this.addEventListener("click", linkToEventListener);
			}
			this._linkCreated = true;
		  }
		  modifyLinkToTagsInRoute(remove) {
			let routesObj = config.routes,
			routes = remove && remove != true ? remove : this.matched.route;
			if(!routes) {
			  return;
			} 
			routes =  dotSerperator(routes);
			routes.forEach(function(r,i,) {
			  routesObj =  _getObj(r,routesObj);
			  if(!routesObj || !routesObj.__lp) {
				consoleError(422,routes,i);
				return false;
			  }
			  var def = routesObj.__lp.def.__lp;
			  if(remove) {
				def.linkTags.splice(def.linkTags.indexOf(this),1);
			  } else {
				def.linkTags.push(this);  
			  }
			}.bind(this));
		  }
		  disconnectedCallback() {
			if(this._linkToEventId) {
				if(!Lyte.Component.shouldIgnoreDisconnect()) {
					this.modifyLinkToTagsInRoute(true);
					Lyte.Component.removeLyteEventListener(this, this._linkToEventId);
				} 
			} else {
				this.modifyLinkToTagsInRoute(true);
			}
		  }
		  handleLtProp() {
			var ltProp = this.getAttribute("lt-prop");
			if(ltProp) {
			  try{
				var jsonObj = parse(ltProp);
				this.ltProp = jsonObj;
			  } catch(e) {
				Lyte.warn("Error while parsing ltProp in link-to");
			  }
			}
		  }
		  setCustomAttributes(linkTag, onlyLtProp) {
		  for(let key in this.ltProp) {
			if(/^(id|class|style|target)$/.test(key)) {
				linkTag.setAttribute(key, this.ltProp[key]);
			  }
		  }
		  if(!onlyLtProp) {
			for(let i=0,attr;attr = attr = this.attributes[i];i++) {
			  let attrName = attr.nodeName;
			  if(attrName !== "lt-prop" && /^(lt-prop-id|lt-prop-class|lt-prop-style|lt-prop-target)$/.test(attrName)) {
				linkTag.setAttribute(attrName.substring(8), attr.nodeValue);
			  }
			}
		  }
		  }
		  constructHref(linkTag, attr, oldValue , newValue) {
			let href,
			m = this.modifyLinkToTagsInRoute.bind(this);
			if(href = LR.getURL(this,this.matched)) {
			  linkTag.setAttribute("href", href); 
			  if(attr) {
				if(attr == pRoute) {
				  m(oldValue);
				} else {
				  m(this.matched.route);
				}
			  }
			  m();
			}
		  }
		}
		LinkTo.prototype.getMatchedObject = function(reset) {
		  let matched = reset ? {} : (this.matched || {}),
		  ga = this.getAttribute.bind(this);
		  matched.route = ga(pRoute) || this.ltProp.route;
		  matched.fragment = ga(pFragment);
		  let dynamicParams = ga(pDp) || this.ltProp.dp || [],
		  queryParams = ga(pQp) || this.ltProp.qp || {};
		  if(!(dynamicParams instanceof Array)) {
			try {
			  matched.dynamicParams = parse(dynamicParams) || [];  
			} catch(e) {
			  consoleError(498,"dynamicParams",this.outerHTML);
			  matched.dynamicParams = [];
			  return;
			}
		  } else {
			matched.dynamicParams = [];
		  }
		  if(!(queryParams instanceof Object)) {
			try{
			  matched.queryParams = parse(queryParams);
			} catch(e) {
			  consoleError(498,"queryParams",this.outerHTML);
			  matched.queryParams = {};
			}
		  } else {
			matched.queryParams = {};
		  }
		  return this.matched = matched;
		};
		customElements.define('link-to', LinkTo);
	  }
  
	  function linkToEventListener(event, linkTo) {
      if(event.button == 2 || event.defaultPrevented) {
        return;
      }
      var targetElem = linkTo || event.currentTarget;
      if(targetElem.children[0].tagName === "A" && (event.ctrlKey == true || event.metaKey == true || event.which == 2 || (targetElem.children[0].hasAttribute("target") && targetElem.children[0].getAttribute("target") !== "_self")) ) {
        return;  
      }
      event.preventDefault();
      var currentTransition = LR.getRouteInstance().transition,
      transitionInstance;
      if(currentTransition && LR.checkIfSameRoute(targetElem.matched, currentTransition.info) && targetElem.hasAttribute(pRefreshRoute)) {
        transitionInstance = LR.getRouteInstance(targetElem.getAttribute(pRefreshRoute)).refresh(); 
      } else {
        transitionInstance = LR.transitionTo(targetElem.matched);
      }
      var transObj = {},
      transProp;
      if(transProp = targetElem.getAttribute(pTrans)) {
        try{
        	transObj = parse(transProp);  
        }
        catch(e) {
        	consoleError(498, pTrans, this.outerHTML);
        }
      }
    
      let transitionData = targetElem.getAttribute("lt-prop-td");
      transitionData = transitionData || transObj.data;
      if(transitionData) {
        if(typeof transitionData === "string") {
          try {
            transitionData = parse(transitionData);
          } catch(e) {
            consoleError(498, "lt-prop-td", this.outerHTML);
          }
        }
        transObj.data = transitionData;
      }
      for(var key in transObj) {
        transitionInstance[key] = transObj[key];
      }
	  }
  
	this.checkIfSameRoute = function(transInfo1, transInfo2) {
		if(transInfo1.route == transInfo2.route && transInfo1.dynamicParams.length === transInfo2.dynamicParams.length && _compareObj(transInfo1.queryParams,transInfo2.queryParams)) {
			if(transInfo1.dynamicParams.length) {
				for(var i = 0,dynamicParam; dynamicParam = transInfo1.dynamicParams[i]; i++) {
					return dynamicParam == transInfo2.dynamicParams[i];
				}
			}
			return true;
		}
		return false;
	};
  
	  this.addRoutes = function(map) { 
      Lyte.warn("addRoutes function will be deprecated from next version");
      Object.assign(config.routes,parseRouteMapping.call(routeParser,map));
	  };
  
	  function dotSerperator(str) {
		  return str.split('.').filter(function(s) {return s != "";});
	  }
	  
	  function _arrayClean(e) {
		 return e != undefined;
	  }
  
	  function parseRouteMapping(map) {
		t(parseRouteMappingStr);
		var routesObj = {},
		mapObj = {}, 
		pathStringArr = [], 
		routeStringArr = [];
		routeParser = {
		  route : function(routeName,obj,nestedFn) {
			if(typeof obj == "object") {
			  if(!obj.path) {
				obj.path = _delimit(routeName);
			  } else {
				if(_presence(obj.path,"?")) {
				  var split = obj.path.split('?');
				  obj.defQP = frameQueryParams(split[1]);
				  obj.path = split[0];
				}  
			  }
			  if(obj.queryParams) {
				obj.defQP = obj.queryParams;
			  }
			} else {
			  if(typeof obj == functionStr) {
				nestedFn = obj;
			  }
			  obj = {path : _delimit(routeName)};  
			}
			mapObj = _getObj(pathStringArr,routeHash)[obj.path] = {__lp : {}};
			if(obj.path == '/') {
			  pathStringArr.push('/');
			} else {
			  var trimedPath = obj.path;
			  if(dynamicRouteCheck(trimedPath) || wildcardRouteCheck(trimedPath)) {
				_splitPath(trimedPath).every(function(seg,index,arr) {
				  if(dynamicRouteCheck(seg) || wildcardRouteCheck(seg)) {
					var dkey;
					if(dynamicRouteCheck(seg)) {
					  dkey = seg.replace(":","");
					} else  {
					  dkey = seg.replace("*","");
					  obj.wildcard = mapObj.__lp.wildcard = true;
					  obj.sufix = mapObj.__lp.sufix = [];
					  for(var i = index+1,j; j = arr[i]; i++) {
						mapObj.__lp.sufix.push(j);
					  }
					}
					obj.dkey = mapObj.__lp.dkey = dkey;
					obj.dIndex = mapObj.__lp.dIndex = index;
					return false;
				  }
				  return true;
				});
			  } 
			  pathStringArr.push(trimedPath);
			}
			var routes = _getObj(routeStringArr,routesObj) || routesObj;
			routeStringArr.push(routeName);
			mapObj.__lp.route = Array.from(routeStringArr);
			routes[routeName] ? (Object.assign(routes[routeName].__lp,obj)) : (routes[routeName] = {__lp : obj});
			if(nestedFn) {
			  nestedFn.call(this,{});
			}
			routeStringArr.pop();
			pathStringArr.pop();
		  }
		};
		map.call(routeParser,{});
		t(parseRouteMappingStr);
		return routesObj;
	  }
  
	  this.replaceWith = function() {
		var args = normalizeTransitionParams.apply(this,arguments);
		if(args) {
		  args.replace = true;
		  return routeTransition(args);   
		}
	  };
  
	  this.transitionTo = function() {
		var matched;
		if(matched = normalizeTransitionParams.apply(this,arguments)) {
		  return routeTransition(matched);  
		}
	  };
  
	  this.getURL = function (linkTo) {
		var args = Array.from(arguments),
		url,
		matched;
		if(args[0].tagName == "LINK-TO") {
			linkTo = linkTo.outerHTML;
			args.splice(0,1);
		} else {
			linkTo = undefined;	
		}
		if(matched  = normalizeTransitionParams.apply(this,args)) {
		  url = constructURLFromRoute(matched,linkTo);
		}
		return config.history ? shiftBaseURL(url, true) : '#'+url;
	  };
  
	  this.getRoute = function(url) {
		var matched = traverse(shiftBaseURL(url),true);
		if(matched) {
		  matched.dynamicParams = matched.dynamicParams.filter(_arrayClean);
		  matched.route = matched.route.join('.');
		}
		return matched;  
	  };
  
	  function routeTransition(matched) {
		newTransInfo = {
		  replace : matched.replace,
		  title : trans ? trans.title : d.title,
		  fromHistory : false
		};
		var url = dispatchTransition(matched);
		l('Transitioning to '+matched.route.join('.')+' '+url,routeStr);
		return newTrans._trans;  
	  }
  
	   function getLocation() {
		if(config.history) {
		  var path = checkForEmptyPath(dloc.pathname + dloc.search + (dloc.hash || ""));
		  path = shiftBaseURL(path);
		  return _delimit(path);  
		} else {
		  return _delimit(checkForEmptyPath(dloc.hash.replace('#','')));
		}
	  }
  
	  function checkForEmptyPath(path) {
		if(!path) {
		  addToHistory({
			replace : true,
			state : getHistoryState({
			  replace : true,
			  data : getData() ? getData() : undefined,
			  url : (path = '/')
			}),
			url : path
		  });
		}
		return path;
	  }
  
	  function shiftBaseURL(path,append) {
		var baseURL;
		if((baseURL = config.baseURL) && path) {
		  baseURL = _delimit(baseURL);
		  if(path.indexOf(baseURL) == 0 && !append) {
			return path.replace(baseURL,'');
		  } else if(append && path.indexOf(baseURL) == -1) {
			return baseURL+path;
		  } 
		} 
		return path;
	  }
  
	  function constructURLFromRoute(matched,linkTo) {
		if(matched) {
		  if(matched.route && !Array.isArray(matched.route)) {
			matched.route = dotSerperator(matched.route);
		  }
		  var sameRoute = trans ? true : false,
		  refreshModel = false,
		  qp,
		  routeObj = config.routes,
		  url = '';  
		  matched.route.forEach(function(route,index) {
			if(sameRoute && trans && trans.matched.route[index] != route) {
			  sameRoute = false;
			}
			routeObj = _getObj(route,routeObj);
			if(!routeObj && !routeObj.__lp) {
			  consoleError(422,matched.route,index);
			  return false;
			}
			var def = routeObj.__lp.def;
			if(!def) {
			  consoleError(getError(422,matched.route,index));
			}
			var path = routeObj.__lp.path,
			defaultQP;
			if(!def || !def.__lp) {
			  if(defaultQP = routeObj.__lp.defQP) {
				for(var key in defaultQP) {
				  if(matched.queryParams && !matched.queryParams.hasOwnProperty(key)) {
					matched.queryParams[key] = defaultQP[key];
				  } 
				}
			  }
			} else if(def.queryParams) {
			  defaultQP = routeObj.__lp.defQP;
			  var qpdef = def.__lp.qpdef;
			  for(var key in qpdef) {
				if(!matched.queryParams.hasOwnProperty(key)) {
				  if(sameRoute && qpdef[key].sticky) {
					matched.queryParams[key] = def.__lp.queryParams[key];
				  } else if(defaultQP && defaultQP.hasOwnProperty(key)) {
					matched.queryParams[key] = defaultQP[key];
				  }
				}
				if(!refreshModel && qpdef[key].refreshModel) {
				  matched.refreshModel = true;
				}
			  }
			}
			if(routeObj.__lp.dkey) {
			  var dynamicPathSplit = _splitPath(path);
			  if(!matched.dynamicParams || !matched.dynamicParams[index]) {
				consoleError(499,route,linkTo);
				return false;   
			  } else {
				dynamicPathSplit[routeObj.__lp.dIndex] = encodeURI(matched.dynamicParams[index]);
				url += _delimit(dynamicPathSplit.join('/')); 
			  } 
			} else {
			  url += _delimit(path);
			}
		  }.bind(this));
		  url = url[url.length-1] == '/' && url.length != 1 ? url.slice(0,-1) : url;
		  qp = Object.keys(matched.queryParams).filter(function(key){
			  return matched.queryParams[key] == undefined ? false : key;
			});
		  if(matched.queryParams && qp.length) {
			url += '?';
			qp.forEach(function(key,index) {
			  url+= key+'='+encodeURIComponent(matched.queryParams[key])+(index < qp.length-1 ? '&' : '');  
			});
		  }
		  if(config.history && matched.fragment) {
			url = url+"#"+matched.fragment;
		  }
		  return validateURL(url);
		}
	  }
  
	  function historyRegistration() {
		LR.history = new History();
		function History() {
		  return this;
		}
  
		Object.defineProperty(History.prototype, 'state', {
		  get : function() {
			return getData();
		  },
		  set : function(data) {
			if(allowHistoryChange) {
			  allowHistoryChange = false;
			} else {
			  Lyte.warn('setting on data will not be pushed to history. If needed, use `LR.history.replaceState`.');
			}
			return data;
		  }
		});
  
		History.prototype.replaceState = function() {
		  stateChange.apply(Array.from(arguments).push(true));
		};
  
		History.prototype.pushState = function() {
		  stateChange.apply(Array.from(arguments));
		};
  
		function stateChange(data,title,url,replace) {
      if(!replace) {
        getMeta().index++;
      }
		  addToHistory({
			state : {
			  meta : getMeta(),
			  data : data
			},
			title: title, 
			url: url
		  });
		}
	  }  
  
	  var invokeRunLoop;
	  function dispatch(path,processed) {
		t(RouteTransitionStr);
		processed = processed || (!initialLoad && getMeta() && getMeta().matched && getMeta().url == getLocation() ? setParamsInDef(getMeta().matched) : traverse(path));
		if(processed && processed.matched.route.length) {
		  clearTimeout(invokeRunLoop);
		  processed.prevTrans = processed.prevTrans || prevTrans;
		  invoke(path,processed);
		  invokeRunLoop = setTimeout(function() {
			if(trans && trans.state == 102 && newTrans && LR.checkIfSameRoute(newTrans.info,trans.info) && !trans.aborted && JSON.stringify(trans._data) == JSON.stringify(newTrans._trans.data)) {
			  if(trans.internalPause == true) {
				trans.resume();    
			  }
			return;
			} else if(trans && trans.state == 102) {
			  trans.abort({state : 409, internalAbort : true});
			}
			trans = newTrans;
      trans._data = trans._trans.data ? Lyte.deepCopyObject(trans._trans.data) : undefined;
			processed.previous = true;
			processed.transComp = processed.transComp || getTransitionDiffernce(processed.prevTrans, processed.matched,processed.R);
			trans.runLoop = constructRunLoop(processedDispatch = processed);
			if(newTransInfo && trans._trans.data) {
			  newTransInfo.data = trans._trans.data;
			}
			trans.run();
		  },0);
		} 
		return;
	  }
  
	  function getTransitionDiffernce(prevTrans, matched, R) {
		var like = true,
		similar = true,
		rendered = [],
		common = [],
		unRendered = [],
		templateToRemove,
		r;   
  
		if(prevTrans) {
		  var prevMatched = prevTrans.matched;
		  matched.route.forEach(function(route,index) {
			if(similar && route == prevMatched.route[index]) {
			  common.push(route);
			  r = R ? R[index] : LR.__lp.getDefinition(route.slice(0,index));
			  if(like && compareRoute(r,index,prevMatched,matched)) {
				if(prevTrans.routes[index].__lp.rendered) {
				  rendered.push(route);  
				} else {
				  like = false;
				  unRendered.push(route);  
				}
			  } else {
				like = false;
				unRendered.push(route);
			  }
			} else {
			  similar = false;
			  if(templateToRemove == undefined && prevTrans.routes[index] && prevTrans.routes[index].__lp.rendered) {
				templateToRemove = index;
			  }
			  unRendered.push(route);
			}
		  });
		  if(prevMatched.route.length > matched.route.length) {
			var index = matched.route.length;
			if(templateToRemove == undefined && prevTrans.routes[index].__lp.rendered) {
			  templateToRemove = index;
			}
		  }
		} else {
		  unRendered = unRendered.concat(matched.route);
		}
		return {
		  rendered : rendered,
		  unRendered : unRendered,
		  common : common,
		  templateToRemove : templateToRemove
		};
	  }
  
	  function compareRoute(r,index,prevMatched,matched) {
		var same = true,
		routeObj = _getObj(r.__lp.objPath,config.routes);
		if(!r.queryParams && !routeObj.__lp.dkey) {
		  return true;
		}
		if(routeObj.__lp.dkey && prevMatched.dynamicParams[index] != matched.dynamicParams[index]) {
		  return false;
		} else if(r.queryParams && matched.refreshModel) {
		  r.queryParams.every(function(key) {
			if(same && r.__lp.qpdef[key].refreshModel && (matched.queryParams || prevMatched.queryParams) && matched.queryParams[key] != prevMatched.queryParams[key]) {
			  return same = false;
			} else {
			  return true;
			} 
		  });
		}
		return same;
	  }
  
	  var basicHooks = [beforeModelStr,modelStr,afterModelStr,redirectStr,renderTemplateStr,afterRenderStr];
	  function constructRunLoop(processed) {
		t(constructRunLoopStr);
		var transComp = processed.transComp,
		runLoop = [],
		forceFetch = {},
		req = [],
		b4Exit = [],
		willTransit = [],
		didTransit = [];
  
		if (processed.previous) {
		  var b4RouteTrans = [{hook : beforeRouteTransitionStr}];
		  if(prevTrans) {
			for(var i = prevTrans.matched.route.length-1,r ;r = prevTrans.matched.route[i]; i--) {
        var r1 = trans.matched.route[i];
			  if(!r1 || r != r1) {
				  b4Exit.push({hook : beforeExitStr, index : i});
			  }
			  willTransit.push({hook : willTransitionStr, index : i});
			}
			t(constructRunLoopStr);
			return {previous : willTransit.concat(b4RouteTrans).concat(b4Exit) ,current : b4Exit};   
		  }
		  t(constructRunLoopStr);
		  return {previous : b4RouteTrans};
		}
		if(transComp.rendered && transComp.rendered.length) {
		  transComp.rendered.forEach(function(hook,index) {
			trans.routes[index].__lp.rendered = true;
			runLoop.push({hook : redirectStr,index : index});
			didTransit.push({hook : didTransitionStr,index : trans.matched.route.length-index-1});
		  });
		}
		if(transComp.unRendered && transComp.unRendered.length) {
		  transComp.unRendered.forEach(function(hook,index) {
			index = transComp.rendered.length+index;
			if(!transComp.redirected || (transComp.redirected && transComp.redirected.index != index)) {
			  req = req.concat([{hook : getDependenciesStr,index : index},{hook : getResourcesStr,index : index}]);
			}
			var routeInstance = trans.routes[index];
			if(typeof routeInstance.forceFetch == functionStr ? callHookWithoutPromise.call(this,routeInstance.forceFetch,routeInstance,"forceFetch",params(index)) : routeInstance.forceFetch) {
			  forceFetch[index] = [
				{hook : beforeModelStr, index : index},
				{hook : modelStr, index : index},
				{hook : afterModelStr, index : index}
			  ];
			  processed.R[index]._fetchStatus = pendingStr;
			  [redirectStr,renderTemplateStr,afterRenderStr].forEach(function(h) {
				runLoop.push({hook : h,index : index});  
			  });
			} else {
			  basicHooks.forEach(function(h) {
				if(transComp.redirected && transComp.redirected.index == index && h != redirectStr) {
				  if([beforeModelStr,modelStr,afterModelStr].indexOf(h) == -1) {
					runLoop.push({hook : h,index : index});
				  }
				} else {
				  runLoop.push({hook : h,index : index});    
				}
			  });  
			}
			didTransit.push({hook : didTransitionStr,index : trans.matched.route.length-index-1});
		  });
		}
		
		runLoop = {
		  previous : [],
		  current : [{hook : onBeforeLoadStr}].concat(req.concat(runLoop).concat(didTransit)),
		  forceFetch : forceFetch
		};
		runLoop.templateToRemove = (prevTrans && prevTrans.runLoop.templateToRemove) ? prevTrans.runLoop.templateToRemove : [];
		if(transComp.templateToRemove != undefined) {
		  runLoop.templateToRemove.push({index : transComp.templateToRemove, routes : visibleTrans.routes});
		}
		t(constructRunLoopStr);
		return runLoop;
	  }
  
	  function invoke(path,processed) {
		newTrans = new Transition(processed);
		newTrans.url = path;
		newTrans.runLoop = {};
		newTrans._trans = limitTransition(newTrans);
		newTrans.routes = initRoute(processed);
		if(historyObj) {
		  newTransInfo = historyObj;
		  newTrans._trans.data = getData() ? getData() : {};
		  historyObj.replace = true;
		  historyObj = undefined;
		} else if(newTrans._trans.data) {
		  LR.history.replaceState(newTrans._trans.data);
		}
	  }
  
	  function _getObj(arr,obj) {
		if(!obj) {
		  return;
		} else if(!arr) {
		  return obj;
		} else if(!Array.isArray(arr) && typeof arr == 'string') {
		  arr = dotSerperator(arr);
		}
		arr.every(function(key)  {
		  if(obj && obj[key]) {
			obj = obj[key];
			return true;
		  }
		  return obj = false;
		});
		return obj;
	  }
  
	  function abortRunningPromises(trans) {
	   if(trans.runningProm) {
		  trans.runningProm.reject(abortedStr);  
		}
		if(trans.fRunningProm) {
		  trans.fRunningProm.reject(abortedStr);   
		}
	  }
  
	  function Transition(processed) {
		this.matched = processed.matched;
		this.target = processed.matched.target;
		this.fns = [];
		this.pending = {};
		this.info = {
		  route : processed.matched.target,
		  queryParams : processed.matched.queryParams,
		  dynamicParams : processed.matched.dynamicParams.filter(_arrayClean)
		};
		if(processed.matched.fragment) {
		  this.info.fragment = processed.matched.fragment;
		}
		this.R = processed.R;
		this.running = this.aborted = this.paused = false;
		this.abort = function(obj) {
		  if(!this.aborted) {
			abortRunningPromises(this);
			this.aborted = true;
			if(!obj) {
			  obj = {state : 308};
      } 
      if(this.running) {
        l(TransitionAbortedStr,routeStr);
      }
			if(!obj.internalAbort) {
			  delete this.runLoop.templateToRemove;
			  if(prevTrans && visibleTrans && prevTrans.url != getLocation() && trans != visibleTrans) {
				fromHistoryGo = true;
				if(getMeta() && getMeta().index != undefined && getMeta().index < history.length) {
				  history.go(1);
				} else {
				  history.go(-1);
				}
			  }  
			}
			transitionCompleted(obj);
		  }
		}.bind(this);
		this.pause = function (obj) {
		  l(TransitionPausedStr, routeStr);
		  if (obj && obj.internalPause) {
			this.internalPause = true;
		  } else {
			this.internalPause = false;
			this.state = this._trans.state = 307;
		  }
		  this.paused = trans.prom || true;
		  this.resume = this._trans.resume = function (t) {
			t = t || this;
			if (t.prom != t.eProm) {
			  if (!t.pendingResume) {
				t.pendingResume = t.resume;
				delete t._trans.resume;
				delete t.resume;
			  }
			  return;
			}
			delete t._trans.resume;
			delete t.resume;
			l(TransitionResumedStr, routeStr);
			if (t.paused) {
			  var state,
			  prom = t.prom;
			  if(t.paused != true) {
				state = t.paused.state;
			  }
			  if (t.runLoop[state]) {
				if(state == "forceFetch") {
				  t.runLoop.forceFetch[prom.index].splice(0, 1);
				} else if(t.runLoop[state][0] && t.runLoop[state][0].hook == t.paused.hook && t.runLoop[state][0].index == t.paused.index) {
				  removeHook(t.runLoop[state], t.paused.hook, t.paused.index);
				}
			  }
			  t.paused = false;
			  t.state = t._trans.state = 102;
			  if(this.forceFetchRunning) {
				if(t.runLoop.forceFetch[prom.index][0]) {
				  t.run(t.runLoop.forceFetch[prom.index][0]);
				} else {
				  t.R[prom.index]._fetchStatus = completedStr;
				  if (t.pending.forceFetch != undefined && t.pending.forceFetch == prom.index) {
					delete t.pending.forceFetch;
					t.run();
				  }
				}
			  } else {
				if(state && state == "forceFetch" && !t.runLoop.forceFetch[prom.index][0]) {
				  t.R[prom.index]._fetchStatus = completedStr;
				} 
				t.run();  
			  }
			}
		  }.bind(this);
		  return this._trans;
		}.bind(this);
	  }
  
	  function getRequirements(object) {
		/* download files that are returned from getResources and getDependencies */
		var every = function() {};
		every.internal = {};
		var reqType = object.reqType,
		r = object.r,
		index = object.index,
		hook = every.internal.hook = trans.prom.hook,
		errorType = reqType == dependenciesStr ? "errorDependencies" : "errorResources",
		self = this;
		every.internal.route = r.__lp.objPath;
		Lyte.injectResources(
		  r.__lp[reqType],
		  every,
		  function(successFiles,errorFiles) {
			/* completed callback */
			r.__lp[reqType+'Loaded'] = true;
			if(!errorFiles.length) {
				var pending;
				if(trans.pending && (pending = trans.pending[reqType]) != undefined && pending == index) {
					delete trans.pending[reqType];
					if((pending = trans.pending.forceFetch) != undefined && pending == index && trans.forceFetchRunning) {
						delete trans.pending.forceFetch;
						nestedForcedPromises.call(trans, trans.runLoop.forceFetch , trans.fRunningProm.resolve ,trans.runLoop.forceFetch[index][0]);
					}
					nestedPromises.call(trans,trans.runLoop,"current",trans.runningProm.resolve);
				}
			} else {
				if(!self.aborted) {
					if(!self.paused) {
						self.pause({internalPause : true});  
					}
					run[onErrorStr].call(self, index, (r.__lp[errorType] = errorFiles), hook, 424);  
			  }
			}         
		  }
		);
	  }
  
	  var requirements = {
		get : function(def,type) {
		  return def.__lp[type+'Loaded'] != false;
		}
	  };
  
	  function templateDelete(arr) {
      /* clears outlet, from parent to child */
      arr.forEach(function(obj) {
        for (var inst, i = obj.routes.length - 1; i >= obj.index; i--) {
        inst = obj.routes[i];
        delete inst.__lp.rendered;  
        if (inst.outlet) {
          Lyte.triggerEvent(beforeTemplateDestroyStr,{outlet : inst.outletName, route : inst});
          inst.outlet.innerHTML = "";
          callDidDestroy.call(this,inst,i,obj);
        }
        }
      });
    }
    
    function callDidDestroy(inst,index,obj) {
      l(didDestroyStr+" of "+ inst.routeName,routeStr,fontColor);
      callHookWithoutPromise.call(this,inst.didDestroy,inst,didDestroyStr,inst.currentModel,params(index,obj));
    } 
  
	  var stoppableHooks = [getDependenciesStr,getResourcesStr,beforeModelStr,modelStr,afterModelStr]; 
	  // error in these hooks should pause transition and call onerror action
	  function errorStoppableHook(hook) {
		return _presence(stoppableHooks,hook);
	  }
  
	  function callHookWithPromise(callback,instance) {
		/* executes route hooks which will returns promise */
		if(callback) { 
		  var args = arguments,
		  resp,
		  t = trans,
		  prom = trans.prom,
		  hook = prom.hook,
		  stopTrans = errorStoppableHook(hook),
		  self = this;
		  return Promise.resolve(new Promise(function(resolve,reject) {
			try {
			  var result = callback.apply(instance,Array.from(args).slice(2));
			  if(stopTrans && result) {
				result = Lyte.resolvePromises(result);
			  }
			  resp = Promise.resolve(result);
			} catch(err) {
			  processError.call(self,stopTrans,err,instance,{promise : {resolve : resolve, reject : reject}});
			  return;
			}
			resp.then(function(data) {
			  resolve(data);
			},function(err) {
			  t.prom = prom;
			  if(hook == modelStr) {
				instance.currentModel = err;
			  }
			  processError.call(self,stopTrans,err,instance);
			});  
		  }));
		} else {
		  return Promise.resolve();
		}
	  }
  
	  function callHookWithoutPromise(callback,instance,hook) {
		/* executes route hooks which wont return promise  */
		if(callback) {
		  var stopTrans = errorStoppableHook(hook);
		  try {
			return callback.apply(instance,Array.from(arguments).slice(3));
		  } catch(err) {
			processError.call(this,stopTrans,err,instance);
			return;
		  }  
		}
	  }
  
	  function callAction(hook,index,args) {
		/* executes route's actions  */
		var action,
		routeInstance = this.routes[index];
		if(routeInstance.actions && (action = routeInstance.actions[hook])) {
		  try {
			if(action.apply(routeInstance,args) == false) {
			  return false;
			}
		  } catch(e) {
			consoleErrorFromCallback(e,hook,routeInstance.routeName);
			return false;
		  } 
		}
	  }

	  function consoleErrorFromCallback(err,hook,routeName,state) {
		  	if(!err.$) {
				if(!err.stack) {
					err = Error(err);
				}
				err.$ = true
				var internalErr = getError(state || 420,hook,routeName);
				err.stack = err.stack.replace(err.message,err.message = err.message+"\n\t"+internalErr);
				consoleError(err);
			}
	  }
  
	  function processError(stopTrans,err,instance,options) {
		/* handles error in hooks */
		if(trans.prom) {
		  options = options || {};
		  var hook = trans.prom.hook,
		  index = trans.prom.index;
		  if(!stopTrans) {
			consoleErrorFromCallback(err,hook,instance.routeName);
			if(_presence([willTransitionStr,didTransitionStr,beforeExitStr],hook)) {
			  if(options.promise) {
				options.promise.resolve();
			  }
			} else {
			  trans.abort({state : 4, internalAbort : true});
			}
		  } else {
			trans.pause();
			run[onErrorStr].call(this,index,err,hook);
		  }  
		}
	  }
  
	  function runLoopPromise(fn,fnName,loop,success,failure) {
		success = success || emptyFn;
		failure = failure || function(error) {
		  if(error != abortedStr) {
			consoleError(error);
		  }
		};
		new Promise(function(resolve,reject) {
		  if(fnName == "nestedForcedPromises" ) {
			this.fRunningProm = {resolve : resolve, reject : reject};
			fn.call(this,this.runLoop.forceFetch,resolve);
		  } else {
			this.runningProm = {resolve : resolve, reject : reject};
			fn.call(this,this.runLoop,loop,resolve);  
		  }
		}.bind(this)).then(success,failure);
	  }
  
	  Transition.prototype.run = function (pausedForcedProm) {
		if(pausedForcedProm) {
		  nestedForcedPromises.call(this, this.runLoop.forceFetch , this.fRunningProm.resolve ,pausedForcedProm);
		  return;
		}
		processRunLoop.call(this);
		d.title = this.title = this.routes[this.routes.length-1].title || d.title;
	  };
  
	  function processRunLoop() {
		runLoopPromise.call(this,nestedPromises,"nestedPromises",'previous',function() {
		  if(processedDispatch && !trans.running && !trans.aborted ) {
			trans.state = trans._trans.state = 102;
			if(newTransInfo) {
			  newTransInfo.state.data = trans._trans.data || newTransInfo.state.data;
			  addToHistory(newTransInfo);
			}
			LR.__lp.trans = trans;            
			processedDispatch.previous = false;
			trans.runLoop = constructRunLoop(processedDispatch);
			processedDispatch = newTransInfo = undefined;
			trans.running = true;
		  }
		  runLoopPromise.call(this,nestedPromises,"nestedPromises",'current');
		}.bind(this));
	  }
  
	  function setPendingResume(promise) {
		this.eProm = promise;
		if (this.pendingResume) {
		  var resume = this.pendingResume;
		  delete this.pendingResume;
		  resume();
		}
	  }
  
	  function nestedForcedPromises(forcedLoop, resolve, promise) {
		if (validateTransition(this) && forcedLoop) {
		  if(!promise) {
			for(var key in forcedLoop) {
			  var routeLoop = forcedLoop[key],
			  p = routeLoop[0];
			  if(p) {
				if(requirements.get(this.R[p.index],dependenciesStr)) {
				  if(!routeLoop[0].running) {
					nestedForcedPromises.call(this, forcedLoop, resolve,routeLoop[0]);    
				  }
				} else {
				  this.pending[dependenciesStr] = p.index;
				} 
			  }
			}
			return;
		  }
		  var r = this.R[promise.index],
		  routeInstance = this.routes[promise.index];
		  promise.state = "forceFetch";
		  trans.prom = promise;
		  if (promise.hook == beforeModelStr && !requirements.get(routeInstance, dependenciesStr)) {
			this.pending[dependenciesStr] = promise.index;
			return;
		  }
		  logCallbacks(promise);
		  forcedLoop[promise.index][0].running = true;
		  run[promise.hook].call(this, promise.hook, promise.index).then(function (data) {
			forcedLoop[promise.index].splice(0, 1);
			setPendingResume.call(trans, trans.prom);
			switch (promise.hook) {
			  case beforeModelStr:
				nestedForcedPromises.call(this, forcedLoop, resolve, forcedLoop[promise.index][0]);
				break;
			  case modelStr:
				this.routes[promise.index].currentModel = data;
				nestedForcedPromises.call(this, forcedLoop, resolve, forcedLoop[promise.index][0]);
				break;
			  case afterModelStr:
				r._fetchStatus = completedStr;
				if (this.pending.forceFetch != undefined && this.pending.forceFetch == promise.index) {
				  delete this.pending.forceFetch;
				  nestedPromises.call(this,this.runLoop,"current",this.runningProm.resolve);
				}
				break;
			}
		  }.bind(this));
		} else {
		  this.forceFetchRunning = false;
		}
	  }
  
	  function logCallbacks(promise) {
		if(Lyte.debug) {
		  var hook = promise.hook,
		  index = promise.index;
		  if([beforeRouteTransitionStr, onBeforeLoadStr].indexOf(promise.hook) != -1) {
			l(hook,routeStr,fontColor);
			return;  
		  }
		  var route = promise.state == "previous" ? prevTrans.R[index] : trans.R[index];
		  l(hook +' of route '+route.routeName,routeStr,fontColor);    
		}
	  }
  
	  function nestedPromises(loop,state,resolve) {
		if(validateTransition(this)) {
		  var runLoop = loop[state];
		  if(runLoop && runLoop.length) {
			var promise = runLoop[0],
			r = this.R[promise.index];
			if(promise.hook == beforeModelStr && !requirements.get(r,dependenciesStr)) {
			  this.pending[dependenciesStr] = promise.index;
			  return;
			} else if(promise.hook == renderTemplateStr && !requirements.get(r,resourcesStr)) {
			  this.pending[resourcesStr] = promise.index;
			  return;
			} else if(promise.hook == redirectStr && r.forceFetch && r._fetchStatus == pendingStr) {
			  if(!this.forceFetchRunning) {
				this.forceFetchRunning = true;
				runLoopPromise.call(this,nestedForcedPromises,"nestedForcedPromises");
			  }
			  this.pending.forceFetch = promise.index;
			  return;
			} else {
			  promise.state = state;
			  trans.prom = promise;
			  logCallbacks(promise);
			  t(promise.hook+promise.index);
			  run[promise.hook].call(this,promise.hook,promise.index).then(function(data) {
				setPendingResume.call(trans,trans.prom);
				t(promise.hook+promise.index);
				if(promise.hook == modelStr) {
					this.routes[promise.index].currentModel = data;
				}
				if(this.runningProm.resolve == resolve) {
				  removeHook(loop[state],promise.hook,promise.index);
				  nestedPromises.call(this,loop,state,resolve);  
				}
			  }.bind(this));
			}
		  } else if(resolve) {
			resolve();
		  }
		} else if(this.paused && this.runningProm) {
		  this.runningProm.reject('aborted');  
		}
	  }
  
	  function removeHook(loop,hook,index) {
      for(var i = 0,obj;obj = loop[i]; i++) {
        if(obj.hook == hook) {
        if(index != undefined) {
          if(index == obj.index) {
          loop.splice(i,1);
          break;
          }
        } else {
          loop.splice(i,1);
          i--;
        }
        }
      }
	  }
  
	  function frameQueryParams(url) {
		if(url && _presence(url,"=")) {
		  var qp = {},
		  split,
		  params = _presence(url,"?") ? url.split("?")[1] : url;
		  params = _presence(params,"&") ? params.split(/&/g) : [params];
		  params.forEach(function(param) {
			qp[(split = param.split('='))[0]] = split[1] ? decodeURIComponent(split[1]) : split[1];
		  });
		  return qp;
		} 
		return;    
	  }
  
	  function frameDynamicParams(url,matched) {
		if(url) { 
		  var routesObj = config.routes,
		  dynamicParam,
		  fdp,
		  framedDP = [],
		  urlSplit = _splitPath(url.split('?')[0]);
		  matched.route.forEach(function(r,i,arr) {
			routesObj = _getObj([r],routesObj);
			if(routesObj.__lp.wildcard) {
			  if(routesObj.__lp.sufix.length) {
				var dp = urlSplit.slice(0,urlSplit.indexOf(routesObj.__lp.sufix[0]));
				fdp = decodeURI(dp.join('/'));
				_pop(dp.concat(routesObj.__lp.sufix),urlSplit);
			  } else {
				fdp = decodeURI(urlSplit.join('/'));
			  }
			} else if(routesObj.__lp.dkey) {
			  dynamicParam = urlSplit[routesObj.__lp.dIndex];
			  _pop(_splitPath(routesObj.__lp.path),urlSplit);
			  fdp = decodeURI(dynamicParam);
			} else {
			  _pop(_splitPath(routesObj.__lp.path),urlSplit);
			  fdp = undefined;
			}
			framedDP.push(fdp);
		  });
		  return framedDP;
		}
	  }
  
	  function _pop(path,urlSplit) {
		path.forEach(function() {
		  urlSplit.shift();
		});  
	  }
  
	  function _presence(str,char) {
		return str.indexOf(char) != -1 ? true : false;
	  }
  
	  function transitionCompleted(obj) {
		/* called after a atransition is completed or aborted*/
		if(trans.running) {
		  if(trans == newTrans) {
			newTrans = undefined;  
      }
      trans.fns.forEach(function(callback) {
			  clearTimeout(callback);
			});
		  trans.pendingResume = undefined;
		  trans.running = false;
		  trans.state = trans._trans.state = obj.state;
		  if(initialLoad || trans.state == 200) {
			LR.__lp.prevTrans = prevTrans =  trans;
			t(RouteTransitionStr);
			l(TransitionComletedStr,routeStr);
			if(config.history && trans.info.fragment) {
			  var elem;
			  if((elem = d.getElementById(trans._trans.info.fragment)) && elem.scrollIntoView && (LR.beforeScroll(trans._trans) != false)) {
				elem.scrollIntoView();
			  }
			}
			run[afterRouteTransitionStr](trans._trans);
		  } else if(obj.internalAbort || visibleTrans == trans) {
			LR.__lp.prevTrans = prevTrans = trans;
			 if (trans.state && trans.state != 201) {
			  run[afterRouteTransitionStr](trans._trans);
			}
		  } else {
			 if (trans.state && trans.state != 201) {
				run[afterRouteTransitionStr](trans._trans);
			  }
			LR.__lp.trans = trans = prevTrans;  
		  }
		  if(initialLoad) {
			initialLoad = false;
		  }
		} else {
		  LR.__lp.trans = trans = prevTrans;
		}
	  }
  
	  function _delimit(seg) {
		return seg[0] == "/"? seg : "/"+seg;
	  }
  
	  function _splitPath(path) {
		return path.match(/[^/?]+/g) || [];
	  }
  
	  function validateURL(url) {
		url = url.replace(/\/\//g,'/');
		url = url.replace(/\/\?/g,'?');
		return url;
	  }
  
	  function getError() {
		var args = arguments,
		error;
		switch(args[0]) {
			case 400 :
				error = "url '"+args[1]+"' is not defined in router.";
				break;
			case 422 :
				error = "There is no route definition for the route "+(args[1].splice(0,args[2]+1).join('.'))+".";
				break;
			case 424 : 
				error = "File not loaded in "+args[1]+ " of route "+args[2]+".";
				break;
			case 498: 
				error = "Invalid argument " + args[1] + (args[2] ? " provided in "+args[2] : ".");
				break;
			case 499 : 
				error = args[1] ? ("Dynamic params for the route "+args[0]+" is not provided" + (args[2] ? " in "+args[2] : ".")) : "Transition tried without arguments.";
				break;
			case 420 : 
				error = "Error on "+args[1]+" of route "+args[2]+".";
				break;
			case 428 : 
				error = "There is no outlet named "+args[1]+".";
				break;
			case 203 :
				error =  "Data provided for component is not valid.";
				break;
		}
		return 'LR '+args[0]+': '+error;
	  }
  
	  function consoleError() {
		Lyte.error(arguments[0].stack ? arguments[0] : getError.apply(this,arguments));
	  }
  
	  function traverse(path,get) {
		if(!path) {
		  consoleError(400,'');
		  return;
		}
		var selectedPaths = [],
		fragment;
		if(config.history) {
		  var fragSplit = path.split('#');
		  if(fragment = fragSplit[1]) {
			path = fragSplit[0];
		  }
		}
		var pathSplit = path.split('?');
		path = decodeURI(pathSplit[0]);
		if(path == '/') {
		  if(_getObj(['/'],routeHash)) {
			selectedPaths.push([path]);  
		  } else {
			consoleError(400,path);
			return;
		  }
		} else {
		  var params = pathSplit[1],
		  pathSplitArr = _splitPath(path);
		  var pathLevel = 0,
		  pathArrLevel = [0],
		  exactMatch,
		  matchedPath = [];
		  matchedPath.dynamicParams = [];
		  findPossibleMatch(routeHash);
  
		  function findPossibleMatch(mapObj) {
			for(var mapPath in mapObj) {
			  if(!exactMatch) {
				var pathObj = mapObj[mapPath],
				innerLevel;
				if(mapPath != "__lp") {
				  var mapPathSplit = _splitPath(mapPath);
				  if(mapPathSplit) {
					if((innerLevel = checkArrayMatch(mapPathSplit,pathSplitArr,pathLevel,pathObj,matchedPath)) !== false) {
					  pathArrLevel.push(innerLevel);
					  pathLevel = pathArrLevel[pathArrLevel.length-1];
					  if(pathSplitArr.length == pathLevel) {
						var path = Array.from(matchedPath.concat(mapPath));
						if(pathObj["/"]) {
						  path = path.concat('/');
						}
						selectedPaths.push(path);
						if(pathObj.__lp.wildcard || pathObj.__lp.dkey) {
						  pathArrLevel.pop();
						  pathLevel = pathArrLevel[pathArrLevel.length-1];
						} else {
						  if(!/[:*]/.test(path.join(''))) {
							exactMatch = path;  
						  }
						  return;  
						}
					  } else {
						var innerRoutes = Object.keys(pathObj);
						matchedPath.push(mapPath);
						if(pathSplitArr[pathLevel]) {
						  if(pathObj.__lp.wildcard && !pathObj.__lp.sufix.length && innerRoutes.length == 1) {
							var wildcard= Array.from(matchedPath);
							if(pathObj["/"]) {
							  wildcard = wildcard.concat('/');
							}
							selectedPaths.push(wildcard);
						  } else if(innerRoutes.length > 1) {
							findPossibleMatch(pathObj);    
						  }
						} 
						matchedPath.pop();
						pathArrLevel.pop();
						pathLevel = pathArrLevel[pathArrLevel.length-1];
					  }
					}
				  }
				}
			  }
			}
		  }
		}
		if(exactMatch) {
		  return pathProcessor(get,exactMatch,path,params,fragment);
		} else if(selectedPaths.length == 1) {
		  return pathProcessor(get,selectedPaths[0],path,params,fragment);
		} else if(selectedPaths.length) {
		  return pathProcessor(get,getBestMatch(getStaticMatches(selectedPaths),selectedPaths),path,params,fragment);
  
		  function getBestMatch(staticMatches, selectedPaths, position) {
			position = position || 0;
			var traversedStaticMatch = traversedStaticMatch || traverseArray(staticMatches),
			maxStaticSeg = Math.max(...traversedStaticMatch[position]),
			duplicatePos,
			duplicatePosCheck = function(index) {
			  newSelectedPaths.push(selectedPaths[index]);
			  newStaticMatches.push(staticMatches[index]);
			},
			filterDuplicates = function(arr,index) {
			  if(arr[position] != undefined) {
				newSelectedPathsFiltered.push(newSelectedPaths[index]);
				newStaticMatchesFiltered.push(newStaticMatches[index]);
			  }
			};
			while(duplicatePos = checkForArrayDuplicates(traversedStaticMatch[position], maxStaticSeg, selectedPaths, staticMatches)) {
			  position = position+1;
			  var newSelectedPaths = [],
			  newStaticMatches = [];
			  duplicatePos.forEach(duplicatePosCheck);
			  var newSelectedPathsFiltered = [],
			  newStaticMatchesFiltered = [];
			  newStaticMatches.forEach(filterDuplicates);
			  if(!newSelectedPathsFiltered.length) {
				return newSelectedPaths[0];
			  } else if(newSelectedPathsFiltered.length == 1) {
				return newSelectedPathsFiltered[0];
			  }
			  return getBestMatch(newStaticMatchesFiltered, newSelectedPathsFiltered, position);
			}
			return selectedPaths[traversedStaticMatch[position].indexOf(maxStaticSeg)];
		  }
  
		  function getStaticMatches(selectedPaths) {
			var staticSegmentsInMatch = [];
			selectedPaths.forEach(function(arr) {
			  arr = Array.from(arr);
			  var staticPath = 0,
			  result = [];
			  if(arr[0] == "/") {
				arr.shift();
			  }
			  if(arr[arr.length-1] == "/") {
				arr.pop();
			  }
			  var counter = -1;
			  arr.every(function(seg,i) {
				var noWildcard = true;
				_splitPath(seg).every(function(innerSeg,j) {
				  counter++;
				  if(innerSeg == pathSplitArr[counter]) {
					staticPath++;
					if(arr.length == i+1){
					  result.push(staticPath);
					}
					return true;
				  } else if(innerSeg.indexOf(':') != -1) {
					result.push(staticPath);
					staticPath = 0;
					return true;
				  } else {
					if(innerSeg.indexOf('*') != -1) {
					  noWildcard = false;
					}
					result.push(staticPath);
					return false;
				  }
				});  
				return noWildcard;
			  });
			  staticSegmentsInMatch.push(result);
			});
			return staticSegmentsInMatch;
		  }
		} else {
		  consoleError(400,path);
		}
	  }
  
	  function checkArrayMatch(arr1,arr2,l,pathObj,matchedPath) {
		if(!(pathObj.__lp.wildcard || pathObj.__lp.dkey)) {
		  var prevObj;
		  if(prevObj = _getObj(matchedPath,routeHash).__lp) {
			if(prevObj.wildcard) {
			  var pathArr = arr2.slice(l);
			  if(!(l += pathArr.indexOf(arr1[0]))) {
				return false;
			  }  
			}
		  }
		}
		for(var i = 0,a1;a1 = arr1[i]; i++,l++) {
		  if(a1 != arr2[l] && !dynamicRouteCheck(a1)) {
			if(wildcardRouteCheck(a1)) {
			  if(pathObj.__lp.sufix.length) {
				l = arr2.indexOf(pathObj.__lp.sufix[0])-1; 
			  }
			} else if(arr1[l] == '/') {
			  l--;
			} else {
			  return false;  
			}
		  }
		}
		return l;
	  }
  
	  function checkForArrayDuplicates(arr, value, selectedPaths, staticMatches) {
		var pos = [];
		arr.forEach(function(elem,index) {
		  if(elem == value) {
			pos.push(index);
		  }
		});
		return pos.length == 1 ? false : pos;
	  }
  
	  function traverseArray(arr) {
		var res = [],
		maxArrLen = 0;
		arr.forEach(function(a) {
		  maxArrLen = a.length > maxArrLen ? a.length : maxArrLen;
		});
		for(var i=0,a ;a = arr[i]; i++) {
		  for(var j=0; j<maxArrLen; j++) {
			res[j] = res[j] || [];    
			res[j][i] = a[j];
		  } 
		}
		return res;
	  }
  
	  function pathProcessor(get,selectedPaths,path,params,fragment) {
		var newURL,
		newMatched,
		matched = {
		  route : _getObj(selectedPaths,routeHash).__lp.route,
		  queryParams : params ? frameQueryParams(params) : {}
		};
		if(config.history) {
		  matched.fragment = fragment;
		}
		matched.dynamicParams = frameDynamicParams(path,matched);
		if(get) {return matched;}
		var transInfo = setParamsInDef(normalizeMatchedObj(matched));
		if(transInfo != false) {
		  newMatched = Lyte.deepCopyObject(transInfo.matched);
		  newURL = constructURLFromRoute(newMatched);
		  if(!_compareObj(newMatched.queryParams,matched.queryParams)) {
			historyObj = addToHistory({replace : true,data : window.history.state,url : newURL,fromHistory : true});
		  }  
		}
		return transInfo;
	  }
  
	  function setParamsInDef(matched) {
		var routesObj = config.routes,
		R = [];
		try {
		  matched.route.every(function(r,i) { 
			routesObj = _getObj([r],routesObj);
			if(!routesObj && !routesObj.__lp) {
			  throw Error(getError(422,matched.route,i));
			}
			var def = routesObj.__lp.def;
			if(def.queryParams) {
			  def.__lp.queryParams = {};
			  def.queryParams.forEach(function(key) {
				def.__lp.queryParams[key] = matched.queryParams[key];
			  });
			}
			def.__lp.dynamicParam = matched.dynamicParams[i];
			var linkTags = def.__lp.linkTags;
			if(linkTags.length) {
			  linkTags.forEach(function(tag) {
				if(tag.firstChild.tagName === "A") {
				  tag.firstChild.setAttribute("href", LR.getURL(tag.getMatchedObject(true))); 
				}
			  });
			}
			return R.push(def);
		  });  
		} catch(e) {
		  consoleError(e);
		  return false;
		}
		return {
		  R : R,
		  matched : matched
		};
	  }
  
	  function assignMixin(options,fns,dir,lazyload) {
		if(options && options.mixins) {
		  if(!Array.isArray(options.mixins)) {
			options.mixins = [options.mixins];
		  }
		  options.mixins.forEach(function(mixin) {
			if(Lyte.registeredMixins[mixin]) {
			  mixin = Lyte.registeredMixins[mixin];
			  if(lazyload) {
				var prevTransRouteInstance = LR.getRouteInstance(dir,prevTrans),
				transRouteInstance = LR.getRouteInstance(dir,trans);
				if(prevTransRouteInstance || transRouteInstance) {
				  prevTransRouteInstance = prevTransRouteInstance ||  {};
				  transRouteInstance = transRouteInstance ||  {};
				  setMixinPropInDefandIns(mixin,fns,prevTransRouteInstance,transRouteInstance);
				} else {
				  setMixinPropInDef(mixin,fns);
				}
			  } else {
				setMixinPropInDef(mixin,fns);
			  }
			} else if(!lazyload) {
			  Lyte.$.requiredMixins(mixin,dir,"router");
			}
		  });
		}
	  }
  
	  Lyte.$.requiredMixins.router = function(mixin,dir) {
		dir.forEach(function(d) {
		  var fns = LR.__lp.getDefinition(d);
		  if(mixin && fns) {
			assignMixin(fns.__lp.options,fns,d,true);  
		  }
		});
	  };
  
	  function setMixinPropInDef(mixin,fns) {
		for(var key in mixin) {
		  if(key == "actions") {
			if(!fns.actions) {
			  fns.actions = {};
			}
			for(var action in mixin.actions) {
			  fns.actions[action] = mixin.actions[action];
			}
		  } else {
			fns[key] = mixin[key];  
		  }
		} 
	  }
  
	  function setMixinPropInDefandIns(mixin,fns,prev,curr) {
		for(var key in mixin) {
		  if(key == "actions") {
			if(!fns.actions) {
			  curr.actions = prev.actions = fns.actions = {};
			}
			for(var action in mixin.actions) {
			  prev.actions[action] = curr.actions[action] = fns.actions[action] = mixin.actions[action];
			}
		  } else {
			prev[key] = curr[key] = fns[key] = mixin[key];  
		  }
		} 
	  }
  
	  this.registerRoute = function(dir,fns,options) {
		assignMixin(options,fns,dir);
		fns.__lp = {
		  options : options,
		  objPath : dir.replace(/\//g,'.'),
		  linkTags : []
		};
		if(fns.queryParams) {
		  fns.__lp.qpdef = {};
		  fns.queryParams.forEach(function(qp,i) {
			if(typeof qp == "string") {
			  fns.__lp.qpdef[qp] = {
				sticky : config.queryParamOptions.sticky,
				refreshModel : true
			  };
			} else {
			  for(var key in qp) {
				fns.__lp.qpdef[key] = {
				  sticky : qp[key].hasOwnProperty('sticky') ? qp[key].sticky : config.queryParamOptions.sticky,
				  refreshModel : qp[key].hasOwnProperty('refreshModel') ? qp[key].refreshModel : true
				};
			  }
			  fns.queryParams[i] = key;
			}
		  });  
		}
		dir = dotSerperator(dir);
		var len = dir.length -1;
		fns.routeName = dir[len];
		setRouteDef(dir,fns);
	  };
  
	  var transPredefined = ['runLoop','running','paused','R','routes','aborted','prom','run',pendingStr,'matched','fns'];
  
	  function limitTransition(int) {
		var _trans = new transition(int);
		int.state = _trans.state = 201;
		return _trans;
	  }
  
	  function dummy() {
		/*
		  Dont delete this function.
		  This one is to avoid function to be merged during minification.
		 */
		var _trans = new transition(int);
	  }
  
	  function transition(int) {
		for(var prop in int) {
		  if(transPredefined.indexOf(prop) == -1) {
			if(prop == 'info') {
			  this.info = Lyte.deepCopyObject(int[prop]);
			} else {
			  this[prop] = int[prop];
			}
		  }
		}
	  }
  
	  function dynamicRouteCheck(route) {
		return _presence(route,":") ? true : false;
	  }
  
	  function wildcardRouteCheck(route) {
		return _presence(route,"*") ? true : false;
	  }
	  
	  function _compareObj(obj1,obj2) {
		var obj1keys = Object.keys(obj1),
		obj2keys = Object.keys(obj2);
		if(obj1keys.length != obj2keys.length) {
		  return false;
		} else {
		  for(var key in obj1) {
			if(obj1[key] != obj2[key]) {
			  return false;
			}
		  }
		  return true;
		}
	  }
  
	  this.getRouteInstance = function(routeName,t) {
		var newTrans;
		if(LR && !LR.init && (newTrans = (t || (LR.__lp && LR.__lp.trans) || trans)) && newTrans.routes) {
		  if(routeName == "*") {
			return newTrans.routes;
		  } else {
			routeName = routeName || newTrans.target;
			var match;
			newTrans.routes.every(function(inst,index) {
			  inst = newTrans.routes[newTrans.routes  .length-1-index];
			  if(inst.__lp.objPath == routeName) {
				match = inst;
				return false;
			  }
			  return true;
			});
			return match;
		  }
		}
	  };
  
	  function normalizeTransitionParams(obj) {
		// To normalize argument for transition, returns matched obj from obj or native tranisitionTo argument.
		var params;
		if(typeof obj == "object") {
		  params = obj;
		} else {
		  params = {
			queryParams : {},
			dynamicParams : []
		  };
		  Array.from(arguments).forEach(function(arg,index) {
			if(Array.isArray(arg)) {
			  consoleError(498,JSON.stringify(arg));
			  return;
			} else {
			  if(index == 0) {
				params.route = arg;
			  } else if(typeof arg == "object") {
				params.queryParams = arg;
			  } else {
				params.dynamicParams.push(arg);
			  }  
			}
		  });
		}
		return normalizeMatchedObj(params);  
	  }
  
	  function normalizeMatchedObj(obj) {
		// To construct dynamic params array.
		if(obj._routes) {
		  return obj;
		} else if(obj.route) {
			var matched = {
			route : Array.isArray(obj.route) ? obj.route : dotSerperator(obj.route),
			queryParams : obj.queryParams || {},
			dynamicParams : [],
			fragment : obj.fragment,
			target : "",
			_routes : []
			};
			if(obj.dynamicParams) {
				if(obj.dynamicParams.length == matched.route.length) {
					matched.dynamicParams = Array.from(obj.dynamicParams);
				} else {
					var dynamicParams =  Array.from(obj.dynamicParams);
				}
			}
			try {
				matched.route.forEach(function(route,index) {
					matched.target = matched.target ? matched.target+'.'+route : route;
					var r = dotSerperator(matched.target);
					matched._routes.push(r);
					var routesObj = _getObj(matched.route.slice(0,index+1),config.routes);
					if(!routesObj) {
					throw Error(getError(400,matched.target));
					}
					if(dynamicParams) {
					matched.dynamicParams.push(routesObj.__lp.dkey ? dynamicParams.shift() : undefined);
					}
				});
			} catch(e) {
				consoleError(e);
				return false;
			}
			return matched;  
		} else {
			consoleError(499);  
		}
	  }
  
	  var routePredefined = [getDependenciesStr,getResourcesStr,beforeModelStr,modelStr,afterModelStr,redirectStr,renderTemplateStr,afterRenderStr,beforeExitStr],
	  Route;
  
	  function cloneLyteProperty(inst,lp) {
		inst.__lp = {};
		for(var key in lp) {
		  if(key != "rendered") {
			inst.__lp[key] = lp[key];
		  }
		}
	  }
  
	  function initRoute(processed) {
		var routeObj,
		matched = processed.matched,
		routes = [],
		refMatch = processed.prevTrans,
		similarRoute = true;
  
		for(var i=0,route; route = matched.route[i];i++) {
		  routeObj = LR.__lp.getDefinition(newTrans.matched._routes[i]);
		  if(!routeObj) {return false;}
		  if(refMatch && similarRoute && refMatch.matched && refMatch.matched.route[i] == route) {
			  routes.push(new Route(matched, routes, routeObj,i,refMatch.routes[i]));
		  } else {
			  routes[i] = new Route(matched, routes, routeObj,i);
			similarRoute = false;
		  }
		}
		refMatch = undefined;
		return routes;
	  }
  
	  Route = function(matched, routes, fns,index,prevInstance)  {
		var src = prevInstance || fns;
		for(var key in src) {
		  if(prevInstance || !_presence(routePredefined,key)) {
			if(key == "__lp") {
			  cloneLyteProperty(this,fns.__lp);
			} else {
			  this[key] = src[key];
			}
		  } 
		}
		this.parent = routes[index-1];
		this.transition = newTrans._trans;
		this.replaceWith = LR.replaceWith;
		this.transitionTo = LR.transitionTo;
		this.removeFromCache = function(arr) {
		  Lyte.removeFromCache.assign(arr);
		  return;
		};
		this.refresh = function(obj) {
		  var processed = setParamsInDef(trans.matched),
		  refreshFrom = dotSerperator(this.__lp.objPath).length-1,
		  route = Array.from(trans.matched.route);
		  processed.transComp = {
			unRendered : route.splice(refreshFrom),
			rendered : route
		  };
		  trans.abort({state : 308, internalAbort : true});
		  newTransInfo = {replace : true,data : trans.data,fromHistory : false,url : trans.url};
		  dispatch(undefined,processed);
		  if(obj && obj.refreshTemplate) {
			for(var i = refreshFrom,r; r = newTrans.routes[i]; i++) {
			  delete r.component;
			}
		  }
		  return newTrans._trans;
		};
		this.setTitle = function(title) {
		  d.title = this.title = title;
		};
		this.getQueryParams = function() {
		  return this.__lp.queryParams || {};
		};
		this.getDynamicParam = function() {
		  return this.__lp.dynamicParam;
		};
		this.getRouteInstance = function(routeName) {
		  return LR.getRouteInstance(routeName);
		};
		this.setDynamicParam = function(value) {
		  if(value && this.__lp.dynamicParam && this.__lp.dynamicParam != value) {
			var dynamicParams = Array.from(trans.matched.dynamicParams);
			dynamicParams.splice(this.__lp.objPath.split(".").length-1, 1, value);
			var matched = cloneMatchedObj(trans.matched,{dynamicParams : dynamicParams});
	  
			return paramChangeTrans(matched);
		  }
		  return trans._trans;
		};
		function paramChangeTrans(matched) {
		  var url = constructURLFromRoute(matched),
		  processed = setParamsInDef(matched);
		  newTransInfo = {
			data: trans.data,
			url: url,
			fromHistory: false
		  };
		  dispatch(url, decideTransition(processed));
		  return newTrans._trans;
		}
		this.setQueryParams = function(key,value,options)  {
		  var obj = {},
		  refresh;
		  if(typeof key == "object") {
			for(var i in key) {
			  obj[i] = key[i];
			}
			options = value;
		  } else {
			obj[key] = value;
		  }
		  if(typeof options == "object") {
			refresh = options.refresh;
		  }
		  refresh = options;
		  var matched = cloneMatchedObj(trans.matched,{queryParams : Object.assign({},trans.matched.queryParams,obj)});
		  if(!_compareObj(trans.matched.queryParams,matched.queryParams)) {
			matched.refreshModel = matched.refreshModel == undefined ? refresh : matched.refreshModel;
			return paramChangeTrans(matched);
		  }
		  return trans._trans;
		};
		if(this.init) {this.init();}
		if(typeof Lyte.Component !== "undefined") {this.throwEvent = Lyte.Component.throwEvent;}
	  };
  
	  function cloneMatchedObj(matched, data) {
		var obj = Object.assign({},matched);
		obj.route = data.route || Array.from(matched.route);
		obj.dynamicParams = data.dynamicParams || Array.from(matched.dynamicParams);
		obj.queryParams = data.queryParams || Object.assign(matched.queryParams);
		return obj;
	  }
  
	  function dispatchTransition(newMatch) {
		var url = newTransInfo.url = constructURLFromRoute(newMatch),
		processed = setParamsInDef(newMatch);
		dispatch(url,decideTransition(processed));
		return url;
	  }
  
	  var allHooks = [getDependenciesStr,getResourcesStr,beforeModelStr,modelStr,afterModelStr,redirectStr,renderTemplateStr,afterRenderStr];
	  function decideTransition(processed) {
		/* determines which transition to consider as previous transition */
		if(trans.running) {
		  var hook;
		  var transComp = getTransitionDiffernce(trans,processed.matched,processed.R);
		  if(trans.state == 102 && trans.prom && (hook = trans.prom.hook) == redirectStr ) {
			var transitioningRoute = allHooks.indexOf(trans.prom.hook) <= 5 ? trans.prom.index : trans.prom.index+1;
			if((transComp.common.length-1) <= transitioningRoute) {
			  var visibleTransComparison = getTransitionDiffernce(visibleTrans,processed.matched,processed.R);
			  if(transComp.common.length < visibleTransComparison.common.length) {
				if(trans.runLoop.templateToRemove.length) {
				  trans.runLoop.templateToRemove.pop();
				}
				if(transComp.rendered.length < visibleTransComparison.rendered.length) {
				  processed.prevTrans = visibleTrans;
				}
				transComp = visibleTransComparison;
				transComp.redirected = trans.prom;
			  } else if(trans.prom.index <= transComp.common.length -1) {
				transComp.redirected = trans.prom;  
			  }
			}
		  }
		  var info = {
			route : processed.matched.target,
			queryParams : processed.matched.queryParams,
			dynamicParams : processed.matched.dynamicParams.filter(_arrayClean)
		  };
		  if(LR.checkIfSameRoute(trans.info,info) && !trans.aborted) {
			trans.pause({internalPause : true});  
		  } else {
			trans.abort({state : 409, internalAbort : true});
		  }
		  processed.transComp = transComp;  
		} else if(trans && !trans.aborted) {
		  trans.abort({state : 409, internalAbort : true});
		}
		return processed;
	  }
	  return this;
	}
	var LR = Lyte.Router = new Router();
  })(window);(function(window) {
// For minification
var _Lyte = Lyte;
//var toArrayLyte = "toArrayLyte";
//var bindStr = "_bindings";
//var compStr = "component";
//var forHelperStr = "_forHelpers";
//var dynamicNodesStr = "_dynamicNodes";
//var calleeStr = "_callee";
//var getAttributeStr = "getAttribute";
//var hasAttributeStr = "hasAttribute";
//var removeAttributeStr ="removeAttribute";
//var setAttributeStr = "setAttribute";
//var parentNodeStr = "parentNode";
//var nodeNameStr = "nodeName";
//var ownerElementStr = "ownerElement";
var globalDOMEvents = ["focus","focusin","focusout","resize","scroll","click","dblclick","mousedown","mouseup","mousemove","mouseover","mouseout","change","select","submit","keydown","keypress","keyup","contextmenu"];
var registerHelperStr = "registerHelper";
var delStr = "delete";

function defProp() {
	Object.defineProperty.apply(Object, arguments);
}

function makeSet(obj, key) {
	if(!obj[key]) {
		defProp(obj, key, {
			value : new Set(),
			enumerable : false,
			writable : true,
			configurable : true
		})
	}
}

function makeArray(obj, key) {
	if(!obj[key]) {
		defProp(obj, key, {
			value : [],
			enumerable : false,
			writable : true,
			configurable : true
		})
	}
}

function createDocFragment() {
	return document.createDocumentFragment();
}

function createElement(elm) {
	return document.createElement(elm);
}

function insertBefore(parent, newNode, refNode) {
	parent.insertBefore(newNode, refNode);
}

function deleteBindingCheckSize(obj, key, valToDelete) {
	obj[key][delStr](valToDelete);
	if(!obj[key].size) {
		delete obj[key];
	}
}
_Lyte.registerErrorCodes({
    "LC001" : "Error while parsing custom prop handler attribute {0}. Check if the value provided is a valid JSON",
    "LC002" : "{0} Component is not compiled. Please compile using Lyte CLI",
    "LC003" : "Helper named {0} is not defined",
    "LC004" : "Action named {0} doesn't exists",
    "LC005" : "Lyte.objectUtils doesn't support {0} function", 
    "LC006" : "Lyte.arrayUtils doesn't support {0} function", 
    "LC007" : "Component name not specified in Lyte.Component.render", 
    "LC008" : "Specified outlet {0} doesn't exists - Lyte.Component.render", 
    "LC009" : "Method named {0} doesn't exists in {1} component",
    "LC010" : "Parent Node / reference Node not provided for insertBefore method"
});

/*	IE Browser
	_Lyte._ie 
	Edge Browser
	_Lyte._ed 
	Replace with needed;
	_Lyte._rwpf 
	IE / Edge Browser
	_Lyte._ms
*/

//temporary fix for IE 11
if(navigator.userAgent.match(/rv:11/)) {
	_Lyte._ie = true;
    window.action = function() {
        return;
    }
}
if(navigator.userAgent.match('Edge')) {
    var s = createElement("div");
    s.innerHTML= "<template><div>c</div></template>";
    if(s.querySelector("template").childNodes.length) {
        _Lyte._ie = true;
    } else {
        _Lyte._ed = true;    
    }
    s.remove()
}

if(_Lyte._ie || _Lyte._ed) {
	var doc = createDocFragment();
	doc.appendChild(document.createTextNode("  dummy "));
	doc.childNodes[0].replaceWith(document.createTextNode("changed"));
	if(doc.childNodes[0].textContent !== "changed") {
		_Lyte._rwpf = true;
	}
	_Lyte._ms = true;
}

_Lyte.Component = {};

var _LyteComponent = _Lyte.Component;

_Lyte.arrayUtils =  function() {
	//arrayFunctions
    return _LC.aF.apply(_LC, arguments);
};
_Lyte.objectUtils =  function() {
	//objectFunctions
    return _LC.oF.apply(_LC, arguments);
}

_LyteComponent.register = function() {
    _LC.registerComponent.apply(_LC, arguments);
}

_LyteComponent.registerHelper = function() {
    _LC.registerHelper.apply(_LC, arguments);
}
_LyteComponent.set = function() {
    _LC.set.apply(_LC, arguments);
}
_LyteComponent.registeredHelpers = {};
_LyteComponent.registeredComponents = {};
function noop() {

}
_LyteComponent.registerCustomPropHandler = function(propName) {
    let dasherized = _LC.String.dasherize(propName);
    propName = _LC.String.toCamelCase(propName);
    if(_LC.customPropHandlers.indexOf(propName) === -1) {
        _LC.customPropHandlers.push(propName);
        customElementPrototype.prototype[propName] = function() {
            let argsLength = arguments.length;
            let arg0 = arguments[0];
            if(!arg0) {
                //Read all the values
                let obj = {};
                for(let key in this.component.data) {
                    if(key.startsWith(propName)) {
                        let objKey = key.substring(propName.length);
                        objKey = _LC.String.lowerCaseFirstLetter(objKey);
                        obj[objKey] = this.component.data[key];
                    }
                }
                return obj;
                
            } else if(typeof arg0 === "string") {
                if(argsLength > 1) {
                    //Set a value
                    this.set(propName+ _LC.String.upperCaseFirstLetter(arg0), arguments[1]);
                } else {
                    //Read a value
                    let actKey = propName + _LC.String.upperCaseFirstLetter(arg0);
                    return this.component.data[actKey];
                }
            } else if(typeof arg0 === "object") {
                //Write a set of values
                for(let key in arg0) {
                    let objKey = propName + _LC.String.upperCaseFirstLetter(key);
                    this.set(objKey, arg0[key]);
                }
            }
        }
        _LC.customPropRegex = new RegExp("^(" + _LC.customPropHandlers.join("|")+ ")");
    }
}
_LyteComponent.unregisterComponent = function(componentName) {
    if(_LyteComponent.registeredComponents[componentName]) {
        var comp = _LC._registeredComponents[componentName];
        if(comp.activeInstances > 0) {
            _Lyte.warn("There are active instances of the component " + componentName + " and hence cannot be unregistered");
        } else {
            //Do the unregisteration here
            comp._properties = {};
            comp.component = comp._mixins = comp._actions = comp._template = comp._dynamicNodes = null;            
            comp._callBacks = {};
            comp._observers = [];
            comp._data = undefined;
            comp._methods = {};
            comp.prototype.get = noop;
            comp.prototype.set = noop;
            delete _LyteComponent.registeredComponents[componentName];
            var template = document.querySelector("template[tag-name="+componentName+ "]")
            if(template) {
                template.remove();
            }
            if(comp._depthTemp) {
                comp._depthTemp.remove();    
            }
        }
    } else {
        _Lyte.warn("Component "+ componentName + " not yet registered");
    }
}
    
var elementPrototype = typeof HTMLElement !== "undefined" ? HTMLElement : Element;



function onDomContentForLyte() {
    if(!_Lyte._ie){
    	document.body.appendChild(_LC.lyteComponentsDiv);
        document.body.appendChild(_LC.tDiv);
        if(_LC.needDummyComponentsDiv) {
          document.body.appendChild(_LC.dummyLyteComponentsDiv);  
        } else {
          _LC.dummyLyteComponentsDiv.remove();
          _LC.dummyLyteComponentsDiv = undefined;
        }
    }
    document.body.appendChild(_LC.hDiv);
    let bodyEvents = globalDOMEvents;    
    for(let i=0; i<bodyEvents.length; i++){    
        var evnt = bodyEvents[i];    
        document.body.addEventListener(evnt,globalEventHandler, true);    
    }    
    let comp = _LC.toBeRegistered;    
    if(comp.length){    
        for(let j=0; j<comp.length;j++){
            customElements.define(comp[j].name, comp[j].def);    
        }    
        _LC.toBeRegistered = [];    
    }
    if(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
        var style = createElement("style");
        style.innerHTML = "* { cursor : pointer}";
        document.head.appendChild(style);
    }
}

document.addEventListener("change", function(event) {
	var target = event.target || event.srcElement;
	if(!target._attributeDetails) {
		return;
	}
	var attributeName = "value";
	if(target.type === "checkbox" || target.type=== "radio") {
		attributeName = "checked";
	}
	let contextSwitchArray = [];
	var attrNode ;
	var attrDetail = target._attributeDetails[attributeName]
	if(!attrDetail || !attrDetail.isLbind) {
		return;
	}
	//attrNode = (attributeName === "checked") ? target._attributeDetails[attributeName].bindedNode : target.getAttributeNode(attributeName);
	var callee = target;
	if(!target._callee){
		while(callee && !_LC.isCustomElement(callee) && callee.tagName !== "LYTE-YIELD") {
			if(callee.tagName === "BODY") {
				callee = null;
				break;
			}
			callee = callee.parentNode;
		}
		if(callee && callee.tagName === "LYTE-YIELD"){
			target._callee = callee._registerYield._callee;
		} else {
			target._callee = callee;
		}
	}
	let self = target._callee;
	if(target) {
		_LC.adCx(target, contextSwitchArray);
	}
	let obj = _LC.getNew(self.component.data, attrDetail.dynamicValue);
	_LC.set(obj.context, obj.lastKey, target[attributeName]);
	if(target) {
		_LC.rmCx(target, contextSwitchArray);
	}		
});
var globalEventHandler = function(ev){
	var evnt = ev.type;
	var target = ev.target,toRemove;
	if(!window.event){
		toRemove = true;
		window.event = ev;
	}
    let eventStopped = false;
	while(target && (target.getAttribute && !target.getAttribute(evnt)) && target.tagName != "BODY"){
		if(_LC.hasLyteEvents(target, evnt)) {
            eventStopped = _LC.handleLyteEvents(target, ev);
            if(eventStopped) {
                break;
            }
        }
        target = target.parentNode;
	}
    if(eventStopped || !target) {
        return;
    }
 	var callee = target;
	if(!target._callee){
		while(callee && !_LC.isCustomElement(callee) && callee.tagName !== "LYTE-YIELD") {
			if(callee.tagName === "BODY") {
				callee = null;
				break;
			}
			callee = callee.parentNode;
		}
		if(callee && callee.tagName === "LYTE-YIELD"){
			target._callee = callee._registerYield._callee;
		} else {
			target._callee = callee === target ? undefined : callee;
		}
	}
	if(target._evBoundEvents && target._evBoundEvents[evnt]) {
        //Not needed - but check and remove
		let actions = target._callee? target._callee.constructor._actions : target.constructor._actions ;
        //let actions = target.constructor._actions;
		let actObj = target._evBoundEvents[evnt];
        let cloneActObj = _Lyte.deepCopyObject(actObj);
		cloneActObj.args.shift();
		_LC.throwAction.call(target,target,evnt,cloneActObj, undefined, undefined, target, ev);
	} else if(target.getAttribute && target.getAttribute(evnt)){
		let actions = target._callee.constructor._actions;
        let func = target.getAttribute(evnt).split(" => ")[1];
        let evntType = evnt;
        if(ev.currentTarget != document.body) {
            evntType = "on" + evnt;
        }
		let actObj = target._boundEvents[evntType];
		let cloneActObj = _Lyte.deepCopyObject(actObj);
		cloneActObj.args.shift();
		_LC.throwAction.call(target._callee,target._callee,evnt,cloneActObj, undefined, undefined, target, ev);
	}
	if(target.tagName === "LABEL"){
		var input = target.querySelector("input");
		if(input && input.getAttribute(evnt)){
			let actions = target._callee.constructor._actions;
			let func = input.getAttribute(evnt).split(" => ")[1];
			//	let actObj = target._callee.constructor.getHelper(func);
			let actObj = target._boundEvents[evnt];
			let args = Array.from(actObj.args);
			let cloneActObj = Object.assign({},actObj);
			args.shift();
			cloneActObj.args = args;
			_LC.throwAction.call(target._callee,target._callee,evnt,cloneActObj, undefined, undefined, input,ev);
		}
	}
	if(toRemove){
		window.event = undefined;
	}
}

class LyteYield extends HTMLElement{
	disconnectedCallback(){
		if(_LC.ignoreDisconnect || this._deleted) {
		    return;
		}
		this._deleted = true;
		var nodeContextSwitchArray = [];
		_LC.adCx(this, nodeContextSwitchArray);
		_LC.removeSelectedBindingDeep(this._properties, this.component.data);
		let node = this._registerYield;
		if(!node) {
		return;
		}
		var toAppendContextSwitchArray = [];
		//newContext not needed
        var del = "delete";//for ie 11.0
		_LC.adCx(node, toAppendContextSwitchArray);
		for(let key in this._dynamicProperty) {
			if(this._dynamicProperty[key].isActualNode) {
				this._dynamicProperty[key].isActualNode._helperNodes[del](this);
			}else {
                let helperNodes = node._callee.getProperty(key)._helperNodes;
				if(helperNodes) {
					helperNodes[del](this);
				}
			}
		}
		this._dynamicProperty = {};
		for(let i=0;i<this._helpers.length;i++) {
			node._callee.removeHelpers(this._helpers[i]);
		}
		this._helpers = [];
		_LC.rmCx(node, toAppendContextSwitchArray);
		_LC.rmCx(this, nodeContextSwitchArray);
        // var self = this;
        // setTimeout(function() {
        //     self._registerYield = null
        //     self._callee = null;
        // },0);
	}
	getProperty(key) {
        	let arr = key.split('.');
        	let property = this;
        	if(!property._properties[arr[0]]) {
            		property._properties[arr[0]] = {};
       	 	} 
       	 	property = property._properties[arr[0]];
        
        	defProp(property, '_path', {enumerable: false, value : arr[0]});
        	for(let i=1;i<arr.length;i++) {
            		if(!property[arr[i]]) {
                		property[arr[i]] = {};
                		defProp(property[arr[i]], '_path', {enumerable: false, value : property._path + "." + arr[i]});
           	 	}
            	property = property[arr[i]];
       	 	}
       		return property;
    	}
}

customElements.define("lyte-yield", LyteYield);

class customElementPrototype extends elementPrototype{
    constructor() {
        super();
        if(!_LyteComponent.registeredComponents[this.localName]) {
        	return;
        }
        this.constructor.activeInstances++; 
        this.component = new this.constructor.component();
        this.data = {};
        this._properties = {};
        this.component.methods = {};
//        this.component.data = this.constructor._data ? this.constructor._data() : {};
        //comment the following two when return cli update is done.
        this.component.data = {};
        let data = this.constructor._data ? this.constructor._data() : {};
        var def = "default";
        for(let key in data) {
            this.component.data[key] = data[key][def];
        }
        this.component.data.errors = {};
        this.component.__data = data;
        for(let key in this.constructor._methods) {
            this.component.methods[key] = this.constructor._methods[key];
        }
        defProp(this.component.data, '__component__', {
        	value : this,
        	configurable : true,
        	writable: true,
            enumerable : false
        });
        this.component.$node = this;
        this.callback("constructor");
        this._actions = this._actions ? this._actions : {};
        this._callee = this._callee || this.getCallee(this.parentNode);
        //checking lyte.attr ytpe and given default value type
        for (var key in this.component.data) {
            var error = _LC.handleValidation(this.component.data, key, this.component.data[key], this.component);
            if (error) {
              this.component.data[key] = undefined;
            }
          }
    }
    getMethods(arg0) {
        return this.component.getMethods(arg0);
    }
    setMethods(arg0, arg1) {
        return this.component.setMethods(arg0, arg1);
    }
    getData(arg0) {
        return this.component.getData(arg0);
    }
    setData(arg0, arg1) {
        return this.component.setData(arg0, arg1);
    }
    getCallee(callee){
        while(callee &&  !_LC.isCustomElement(callee) && callee.tagName !== "LYTE-YIELD") {
            if(callee.tagName === "BODY") {
                callee = null;
                break;
            }
            callee = callee.parentNode;
        }
        if(callee && callee.tagName === "LYTE-YIELD") {
        return callee._registerYield._callee;
        }
        return ((this ===  callee) ? undefined : callee);
    }
    afterConnected() {
        //initProperties is used because, we may have cases where the component wouldn't have been registered but 
        //it would be in dom already with some attributes. In those cases we can store the data in _initProperties as key, value.
        //These properties would then be applied to the component, once it gets instantiated. 
        
        //This is done, in order to solve when on a string value update of an if helper, the binding in the true or false case must be established. 
        //Without this, we won't establish the _properties in the component to the actual Data. 
        
        let obsattr = this.constructor._observedAttributes;
        for(let i=0;i<obsattr.length;i++){
            let key = obsattr[i];
            let prop = this.getProperty(key);
            defProp(prop, '__fromComponent', {
            	value : true,
                enumerable : false
            });
        }
        this.getProperty("errors");
        if(this._initProperties) {
            let initProperties = this._initProperties;
            for(let key in initProperties) {
                let actVal;
                if(this.component.__data[key] && this.component.__data[key].type !== _LC.getDataType(initProperties[key]) && (initProperties[key] !== undefined  || this.component.__data[key].type === "boolean")) {
                    actVal = _LC.typeCast(initProperties[key], this.component.__data[key].type);
                } else {
                     actVal = initProperties[key];
                }
                let error = _LC.handleValidation(this.component.data, key, actVal, this.component);
                if(!error) {
                    this.component.data[key] = actVal;    
                }
            }
            this._initProperties = undefined;
        }
        if(this._initMethods) {
            let initMethods = this._initMethods;
            for(let key in initMethods) {
                this.component.methods[key] = initMethods[key];
            }
            this._initMethods = undefined;
        }
        this.callback('init');
        this.onCallBack('init');
        this.registerYields();
        if(this.component.data.lyteUnbound) {
        	_LC.unbound = true;
        }
        let content = this.renderNodes(this.constructor._template, this.constructor._dynamicNodes,undefined,undefined, undefined, undefined, this.constructor._templateContent);
        return content;
    }
    //This is the function where the actual rendering takes place. 
    //It takes the template, finds the actual dynamic nodes uwing dynamicNodes argument and then binds each node with the associated
    //property by calling bindNode. 
    getDynamicNode(content, positions){
        let dynamicN = content;
        for(var i=0; i<positions.length; i++){
            dynamicN = (dynamicN.tagName != "TEMPLATE" || _Lyte._ie) ? dynamicN.childNodes[positions[i]] : dynamicN.content.childNodes[positions[i]];
        }
        return dynamicN;
    }
    //RN
    renderNodes(toAppend, dynamicNodes, helperNode, options, establishBindings, returnVal, templateContent) {
        options = options || {};
        let content;
        /*if(_Lyte._ie){
            let newFrag = toAppend.cloneNode(true, "lyte");
            this.constructor.splitTextNodes(newFrag);
            content = newFrag;
        }
        else{
            content = toAppend.cloneNode(true, "lyte");
        }*/
        let templateDepthHandlingNeeded = false;
        if (_Lyte._ms || !toAppend) {
            templateDepthHandlingNeeded = true;
            content = _LC.getContentForIE(templateContent , this.constructor);
        } else if(toAppend.hasAttribute("depth")) {
        	templateDepthHandlingNeeded = true;
        	content = _LC.getContentForIE(toAppend , this.constructor);
        } else {
            content = toAppend.content.cloneNode(true, "lyte");
        }
        let updateHelpers = [],processLast = [],helperFunc,stoppedNode;
        for(let i=0;i<dynamicNodes.length;i++) {
            let info = dynamicNodes[i], type = info.type, pos = info.position, dynamicN = content, helperInfo;
            dynamicN = this.getDynamicNode(dynamicN,pos);
            if(type ===  "componentDynamic") {
            	if(options.node) {
            		dynamicN._cx = options;
            	} else if(helperNode) {
            		dynamicN._cx	= helperNode._cx;
            	}
            } 
            else if(type === "text"){
                 this.bindNode(dynamicN, undefined, helperNode, options, dynamicNodes[i], processLast, establishBindings);
            }
            else if(type === "attr"){
            	dynamicN._attributeDetails = info.attr;            	
                if(dynamicN.nodeName === "LYTE-YIELD") {
                    dynamicN._callee = this;
                    dynamicN.component = {}
                    dynamicN.component.data = {};
                    defProp(dynamicN.component.data, "__component__", {
                    	value : dynamicN,
                    	configurable : true,
                    	writable : true,
                        enumerable : false
                    });
                    dynamicN._properties = {};
                    for(let j=0;j<dynamicN.attributes.length;j++) {
                        let attr = dynamicN.attributes[j];
                        if(attr.nodeName !== "is" && attr.nodeName !== "yield-name") {
                            dynamicN._properties[_LC.String.toCamelCase(attr.nodeName)] = {};
                        }
                    }
                }
                let toBeRemoved = [];
				for(let key in info.attr) {
                	let attr = info.attr[key];
                	attr._depthTemp = info._depthTemp;
                	let attrName = key;
                    if(attr && (attr.dynamicValue || attr.helperInfo)) {
                        if(options.node) {
                                dynamicN._cx = options;
                        }
                        else if(helperNode) {
                            dynamicN._cx = helperNode._cx;
                        }
                        let actionName, boundName;
                        if(attr.helperInfo && attr.helperInfo.name === "action") {
                            dynamicN._boundEvents = dynamicN._boundEvents || {};
                            actionName = attr.helperInfo.args[0];
                            if(actionName.startsWith('"') || actionName.startsWith("'")) {
                                boundName = actionName.substring(1, actionName.length - 1);
                            } else {
                                // _Lyte.warn("Deprecation warning. Action name " + actionName + " must be in quotes");
                                boundName = actionName;
                            }
                            dynamicN._boundEvents[attrName] = {"name" : boundName, "args" : attr.helperInfo.args};
                        }            
			            if(!attr.globalEvent) {
                            /*this.bindNode(dynamicN.getAttributeNode(attrName), toBeRemoved, helperNode, options, attr, undefined, establishBindings);
                             */
                            if(!dynamicN.hasAttribute(attrName)) {
                                dynamicN.setAttribute(attrName, "{{dummy}}");
                            }
                        	var node = this.bindNode(dynamicN.attributes.getNamedItem(attrName), toBeRemoved, helperNode, options, attr, undefined, establishBindings);
                            if(node !== dynamicN.attributes.getNamedItem(attrName)) {
                            	dynamicN._removedAttributes = dynamicN._removedAttributes || {};
                            	dynamicN._removedAttributes[attrName] = node;
                            }
                        }
                    }
                }
                //Added now
                if(info.attr && Object.keys(info.attr).length) {
                	dynamicN._callee = this;
                }
                for(let d=0;d<toBeRemoved.length;d++) {
                    dynamicN.removeAttribute(toBeRemoved[d]);
                }
            }
            else if(/^(for|forIn|component)$/.test(type)){
            	if(options.node) {
            		dynamicN._cx = options;
            	} else if(helperNode) {
            		dynamicN._cx	= helperNode._cx;
            	}
                dynamicN._dynamicNodes = info.dynamicNodes;
                if(_Lyte._ms) {
                    dynamicN._templateContent = info.templateContent;  
                }
                if(info.actualTemplate) {
                    dynamicN._templateContent = info.actualTemplate;
                }
                let returnVal;
                switch(type) {
                case "for" : 
                	returnVal = this.updateForHelper(dynamicN,{"type" : "default"} , options.node? options : undefined, establishBindings);
                	break;
                case "forIn" : 
                	returnVal = this.updateForInHelper(dynamicN,{"type" : "default"} , options.node? options : undefined, establishBindings);
                	break;
                case "component" : 
                	returnVal = this.updateDynamicComponent(dynamicN, false, options.node ? options : undefined, establishBindings);
                }
                if(returnVal) {
                	updateHelpers.push(returnVal);
                }
            }
            else if(/^(if|switch)$/.test(type)){
                var def ="default";
                dynamicN._cases = info.cases; 
                dynamicN._default = info[def];
                if(options.node) {
            		dynamicN._cx = options;
            	} else if(helperNode) {
            		dynamicN._cx	= helperNode._cx;
            	}
                if(info.actualTemplate) {
                    dynamicN._templateContent = info.actualTemplate;
                    if(!dynamicN._origTemplate) {
                    	if(_Lyte._ie) {
                    		dynamicN._origTemplate = createElement("template")
                    	} else {
        	            	dynamicN._origTemplate = info._depthTemp.cloneNode(true);
                    	}
                    	if(dynamicN.hasAttribute("value")) {
                    		dynamicN._origTemplate.setAttribute("value", dynamicN.getAttribute("value"));
                    	}
                    }
                }
                let returnVal = this.updateSwitchHelper(type, dynamicN, options.node ? options : undefined, undefined, establishBindings);
                if(returnVal) {
                	updateHelpers.push(returnVal);
                	let isBreak = returnVal.toAppendMain.querySelector("template[is=break]");
                	if(isBreak) {
                		dynamicN._isStopped = "break";
                		content = this.constructor.getTrimmedContent(content, info.position,undefined);
                		stoppedNode = info.position;
                		break;
                	}
                	let isContinue = returnVal.toAppendMain.querySelector("template[is=continue]");
                	if(isContinue) {
                		dynamicN._isStopped = "continue";
                		content = this.constructor.getTrimmedContent(content, info.position,undefined);
//                		stoppedNode = info.position;
                		break;
                	}
                }
            } else if(type === "registerYield") {
                dynamicN._dynamicNodes = info.dynamicNodes;
                if(_Lyte._ms) {
                    dynamicN._templateContent = info.templateContent;  
                }
//                updateHelpers.push(dynamicN);
                if(options.node) {
                    dynamicN._cx = options;
                }
                else if(helperNode) {
                    dynamicN._cx = helperNode._cx;
                }
                //Added now                
                dynamicN._callee = this;
            } else if(type === "insertYield") {
            	if(options.node) {
            		dynamicN._cx = options;
            	} else if(helperNode) {
            		dynamicN._cx	= helperNode._cx;
            	}
                dynamicN.component = dynamicN.component || {"data" : {}};
                dynamicN._properties = dynamicN._properties || {};
                this.updateYield(dynamicN, false, options.node? options : undefined);
            }
        }
        for(let i=0;i<processLast.length;i++) {
             let dynamicPosition = processLast[i].dynamicPositions;
                 let processNode = dynamicPosition.initialNode;
                 let nodeValue = dynamicPosition.dynamicNodeValue;
                 let childLen = nodeValue.childNodes.length;
                 if(!childLen) {
                    nodeValue.appendChild(document.createTextNode(""));
                        childLen = 1;
                 }
                 let startingNode = nodeValue.childNodes[0];
                 if(_Lyte._rwpf && processNode.parentNode.nodeName === "#document-fragment") {
                 	while(nodeValue.childNodes.length) {
                 		insertBefore(processNode.parentNode, nodeValue.childNodes[0], processNode);
                    }
                 	processNode.remove();
                 } else {
                	 processNode.replaceWith.apply(processNode,nodeValue.childNodes);
                 }
                 processLast[i].dynamicPositions = {startingNode : startingNode, length: childLen}
        }
        if(stoppedNode) {
        	returnVal = returnVal || {};
        	returnVal.stop = true;
        }
        if(helperNode) {
            if(options.type) {
                helperNode._helpers[options.itemIndex] = updateHelpers;
                if(templateDepthHandlingNeeded) {
                    content = this.constructor.createDocFragment1(content);  
                }
                return content;
            } else {
                helperNode._helpers = helperNode._helpers || [];
                helperNode._helpers.push.apply(helperNode._helpers, updateHelpers);
                if(templateDepthHandlingNeeded) {
                    content = this.constructor.createDocFragment1(content);  
                }
                return content;
            }
        }
        this.executeBlockHelpers(updateHelpers);
        if(templateDepthHandlingNeeded) {
            content = this.constructor.createDocFragment1(content);  
        }
        return content;
    }

    executeBlockHelpers(updateHelpers, node) {
	    for(let i=0;i<updateHelpers.length;i++) {
            var lastNode = updateHelpers[i].lastNode;
            var parentNode = lastNode.parentNode; 
                
            if(lastNode._placeHolder) {
                lastNode = lastNode._placeHolder;
                parentNode = lastNode.parentNode;
            }
            //parentNode = updateHelpers[i].lastNode.parentNode || updateHelpers[i].lastNode._placeHolder.parentNode;
            insertBefore(parentNode, updateHelpers[i].toAppendMain, lastNode);
            updateHelpers[i] = updateHelpers[i].lastNode;
	    		// updateHelpers[i].lastNode.parentNode.insertBefore(updateHelpers[i].toAppendMain, updateHelpers[i].lastNode);
	    		// updateHelpers[i] = updateHelpers[i].lastNode;
	    		//updateHelpers[i]._parentIf = node;
//	    		if(!updateHelpers[i]._cx && node) {
//	    			updateHelpers[i]._cx = node._cx;
//	    		}
	    }	
    }
    
    updateBlockHelpers(updateHelpers,contextSwitchInfo){
        for(let i=0;i<updateHelpers.length;i++) {
            switch(updateHelpers[i].getAttribute('is')) {
            case "for" :
                this.updateForHelper(updateHelpers[i], {"type" : "default"},contextSwitchInfo);
                break;
            case "if" : 
                this.updateSwitchHelper("if",updateHelpers[i],contextSwitchInfo);
                break;
            case "forIn" : 
                this.updateForInHelper(updateHelpers[i] , {"type" : "default"},contextSwitchInfo);
                break;
            case "switch" :
                this.updateSwitchHelper("switch",updateHelpers[i],contextSwitchInfo);
                break;
            case "component" : 
                this.updateDynamicComponent(updateHelpers[i], false, contextSwitchInfo);
                break;
            case "insertYield" : 
//              this.updateYield(updateHelpers[i], false, contextSwitchInfo);
                break;
            case "yield" : 
            case "registerYield" : 
                if(contextSwitchInfo) {
                    updateHelpers[i]._cx = contextSwitchInfo;
                }
                break;
            default: 
                if(updateHelpers[i].tagName === "LYTE-YIELD") {
                    this.updateYield(updateHelpers[i], false, contextSwitchInfo);
                }
                
            }
         }
    }
    //AttributeChangedCallback will be called for the attributes mentioned in the this._observedAttributes array. 
    static get observedAttributes() {
    		let newArr = [];
            for(let i=0;i<this._observedAttributes.length;i++) {
                newArr[i] = _LC.String.dasherize(this._observedAttributes[i]);
            }

            _LC.customPropHandlers.forEach(function(item,index) {
                newArr.push(_LC.String.dasherize(item));
            })
            return newArr;	
    }
    
    //Callback from browser, whenever any of the observed attribute changes. 
    //We call the component set, in order to affect the related changes. 
    attributeChangedCallback(attr, oldValue, newValue) {
       	if(this.constructor._observedMethodAttributes && this.constructor._observedMethodAttributes[attr]) {
   		 	return;
    	}
        let actualAttr = _LC.String.toCamelCase(attr);
        let isCustomProp = _LC.customPropHandlers.indexOf(actualAttr);
        if(isCustomProp !== -1) {
            let propValue = _LC.customPropHandlers[isCustomProp];
            let lyteProps = newValue;
            if(lyteProps) {
                try{
                    lyteProps = JSON.parse(lyteProps);
                    for(let key in lyteProps) {
                        let actKey = propValue + _LC.String.upperCaseFirstLetter(key);
                        this.set(actKey, lyteProps[key]);
                    }
                } catch (e) {
                    _Lyte.error("LC001", attr);
                }
            }
            return;
        }
        if(oldValue === newValue) {
            return;
        }
        var attrNode = this.attributes.getNamedItem(attr);
        if(attrNode) {
            if(attrNode.__lyteIgnore) {
                this.attributes.getNamedItem(attr).__lyteIgnore = false;
                return;    
            }
        } else if(this["__"+attr]) {
            this["__"+attr] = false;
            return;
        }
        let dataType = this.component.__data[actualAttr].type;
        if(dataType !== "string") {
        	let obj = {"attr" : attr, "tagName" : this.tagName};
        	newValue = _LC.typeCast(newValue, dataType, obj);
        	if(obj.isError) {
        		_Lyte.warn("data type of the value provided for attribute "+attr+ " of " + this.tagName + " is not valid");
        		return;
        	}
        }
        if(this.component.data[actualAttr] !== newValue) {
            // Null check is done because when we do a removeAttribute directly on a component, the corresponding value expected is that of undefined and not null.
            this.set(actualAttr, newValue === null ? undefined: newValue);
        } else {
            _LC.clearError(this.component.data, actualAttr);
        }
    }
    
    //Used to remove helpers of specific index in a for helper. 
    removeHelpersSpecificIndex(node, index) {
        if(node._helpers[index]) {
            for(let j=0;j<node._helpers[index].length;j++) {
                    this.removeHelpers(node._helpers[index][j]);
            }
        }
        if(node._forContent[index]) {
            for(let i=0;i<node._forContent[index].length; i++ ) {
                node._forContent[index][i].remove();
            }
            var self = this;
            Object.keys(node._items[index]._dynamicProperty).forEach(function(key) {
                node._dynProps[key]--;  
                if(!node._dynProps[key]) {
                    let prop  = self.getProperty(key);
                    if(prop._helperNodes) {
                        prop._helperNodes[delStr](node);
                    }
                }
            });
            node._items[index] = {"_dynamicProperty" : {}, "itemProperty" : {}, "indexProperty": {}};
        }
    }
    //Used to remove all the helpers within an helper. 
    removeHelpers(node, update, direct) {
        if(!direct) {
            node.remove();
            var helpersArr = node.getAttribute("is") === "component" ? this.__dc : this.__h;
            var indexOf = helpersArr.indexOf(node);
            if(indexOf != -1) {
            	helpersArr.splice(indexOf, 1);
            }    
        }
        
        var del = "delete";
        let parent;
        var contextSwitchArray = [];
        _LC.adCx(node, contextSwitchArray);
        if(node._forContent) {
            if(node.getAttribute("is") === "for") {
        	if(node._helpers) {
                for(let i=0;i<node._helpers.length;i++) {
                    for(let j=0;j<node._helpers[i].length;j++) {
                            this.removeHelpers(node._helpers[i][j]);
                    }
                    node._helpers[i] = [];
                }
            }
            for(let s=0;s<node._forContent.length;s++) {
                for(let i=0;i<node._forContent[s].length; i++ ) {
                    node._forContent[s][i].remove();
                }
            }
            let key = node.getAttribute("item");
            if(node._items.length) {
                let prop = node._items[0].itemProperty;
                for(let i=0;i<node._items.length;i++) {
                    let dynProp = node._items[i]._dynamicProperty;
                    for(let dP in dynProp) {
                        let property = this.getProperty(dP); 
                        if(property._helperNodes){
                            property._helperNodes[del](node);                    
                        }
                    }    
                }
                if(prop) {
                    for(let i=0;i<node._items.length;i++) {
                        this.removeBindings({[key] : node._items[i].itemProperty}, {[key] : node._attributes.items[i]});
                    }
                }
            }
            if(!update) {
            	if(node._actualBinding) {
            		if(node._attributes.items && node._attributes.items._bindings && node._actualBinding._createdBinding) {
                        node._attributes.items._bindings[del](node._actualBinding);
                    } 
                    if(node._actualBinding._forHelpers) {
                        node._actualBinding._forHelpers[del](node);
                    }
                    if(node._removedAttributes && node._removedAttributes.items && !node._removedAttributes.items.helperValue && node._removedAttributes.items._multipleProperty) {
                    	node._removedAttributes.items._multipleProperty[0].actProp._forHelpers[del](node);
                    }
            	}
            }
            node._items = [];
        } else {
        	if(node._helpers) {
                let keys = Object.keys(node._helpers);
                for(let i=0;i<keys.length;i++) {
                    for(let j=0;j<node._helpers[keys[i]].length;j++) {
                        this.removeHelpers(node._helpers[keys[i]][j]);
                    }
                    node._helpers[keys[i]] = [];
                }
            }
            for(var ind in node._forContent) {
                for(let i=0;i<node._forContent[ind].length; i++ ) {
                    node._forContent[ind][i].remove();
                }
            }
            let items = node._items;
            let key = node.getAttribute("key");
            for(let index in items){
                let item = items[index];
                let prop = item.itemProperty;
                let dynamicProp = item._dynamicProperty;
                for(let dP in dynamicProp) {
                    let property = this.getProperty(dP); 
                    if(property._helperNodes){
                        property._helperNodes[del](node);                    
                    }
                }
                if(prop) {
                    this.removeBindings({[key] : node._items[index].itemProperty}, {[key] : node._attributes.object[index]});
                }

            }
            if(!update) {
                if(node._actualBinding) {
                    if(node._attributes.object && node._attributes.object._bindings && node._actualBinding._createdBinding) {
                        node._attributes.object._bindings[del](node._actualBinding);
                    } 
                    if(node._actualBinding._forHelpers) {
                        node._actualBinding._forHelpers[del](node);
                    }
                }
                if(node._removedAttributes.items && !node._removedAttributes.items.helperValue && node._removedAttributes.items._multipleProperty) {
                	node._removedAttributes.items._multipleProperty[0].actProp._forHelpers[del](node);
                }
                if(node._propBindingObject && node._attributes.object && node._attributes.object._bindings) {
                    node._attributes.object._bindings[del](node._propBindingObject);
                }
            }
            node._items= {};
          }
        } else if(node._caseContent || node._yieldContent) {
        	if(node._helpers) {
                for(let j=0;j<node._helpers.length;j++) {
                    this.removeHelpers(node._helpers[j]);
                }
                node._helpers = [];
            }
        	if(node._caseContent){
                for(let i=0;i<node._caseContent.length; i++ ) {
                    node._caseContent[i].remove();
                }
                for(let key in node._dynamicProperty) {
                    if(node._dynamicProperty[key].isActualNode) {
                        node._dynamicProperty[key].isActualNode._helperNodes[del](node);
                    }else {
                        let helperNodes = this.getProperty(key)._helperNodes;
                        if(helperNodes) {
                            helperNodes[del](node);
                        }
                    }
                }
                node._dynamicProperty = {};
                //node._parentIf = null;
            } else {
                for(let i=0;i<node._yieldContent.length; i++ ) {
                    node._yieldContent[i].remove();
                }
                node._dynamicProperty = {};
            }
        } else if(node._renderedComponent) {
            if(node._renderedComponent[node._currentComponent]) {
                node._renderedComponent[node._currentComponent].remove();
            }
            for(let key in node._renderedComponent) {
                node._renderedComponent[key] = null;
            }
        }
          _LC.rmCx(node, contextSwitchArray);
    }
    
    updateYield(node, update, contextSwitchInfo) {
        if(!node._callee) {
            node._callee = this;
        }        
        let toAppend = node._callee._yields[node.getAttribute("yield-name")];
        if(!toAppend) {
        	return;
        }
        node._registerYield = toAppend;
        //ADded now
        let parentScope = toAppend._callee || node._callee._callee;
        if(!parentScope) {
            if(_Lyte._ms) {
                var div = createElement("div");
                div.innerHTML = toAppend.outerHTML;
                var content1 = div.childNodes[0];
                this.constructor.splitTextNodes(content1);
                content1 = this.constructor.createDocFragment1(content1);
                node.appendChild(content1);
            } else {
                node.appendChild(toAppend.content.cloneNode(true, "lyte"));    
            }
            
            node._helpers = [];
            return;
        }    
	    if(!toAppend._callee) {
    		toAppend._callee = parentScope;
    	} 
        node._dynamicProperty = node._dynamicProperty || {};
        //set values from child component. 
        let obj = {},contextSwitchingArray = {},self = this,contextSwitchArray = [];
        _LC.adCx(toAppend, contextSwitchArray);
        Object.keys(node._properties).forEach(function(key) {
            contextSwitchingArray[key] = {};
            contextSwitchingArray[key].value = parentScope.component.data[key];
            contextSwitchingArray[key].property = parentScope._properties[key];
            parentScope._properties[key] = node._properties[key];
            parentScope.component.data[key] = node.component.data[key];
        }); 
        let content = parentScope.renderNodes(toAppend, toAppend._dynamicNodes || [], node, {"node" : node}, true, undefined, toAppend._templateContent);
        if(!node.component.data.lyteUnbound) {        	
        	_LC.establishBindings(node._properties, node.component.data);
        }
        parentScope.executeBlockHelpers(node._helpers);
        Object.keys(node._properties).forEach(function(key) {
            parentScope.component.data[key] = contextSwitchingArray[key].value;
            parentScope._properties[key] = contextSwitchingArray[key].property;
        });
        _LC.rmCx(toAppend, contextSwitchArray); 
        node.appendChild(content);
    }
    
     // It constructs/updates the dynamicComponent creation
    //upddc
    updateDynamicComponent(node, update, contextSwitchInfo, establishBindings) {
    	let returnVal;
        node._callee = this;
        let keepAlive = node.hasAttribute("lyte-keep-alive");
        node._renderedComponent = node._renderedComponent || {};
        node._cx = contextSwitchInfo || node._cx;
        node._dynamicProperty = node._dynamicProperty || {};
        let componentName = node.getAttribute("component-name") || (node._attributes ? node._attributes["component-name"] : undefined);
        if(!componentName) {
            return;
        }
        let component,newComponent = false;
        if(update) {
        	if(keepAlive) {
        		_LC.ignoreDisconnect = true;
        	}
            if(node._renderedComponent[node._currentComponent]) {
                node._renderedComponent[node._currentComponent].remove();
            }
            _LC.ignoreDisconnect = false;
            if(!keepAlive) {
                node._dynamicProperty = {};
            }
            if(node._renderedComponent[componentName] && keepAlive) {
                component = node._renderedComponent[componentName];
            } else {
                component = createElement(componentName);
                newComponent = true;
            }
        }  else {
            component = createElement(componentName);
            newComponent = true;
        }
        if(!keepAlive && node._currentComponent) {
            node._renderedComponent[node._currentComponent] = null;
        }
        if(newComponent) {
//          let componentData = {};
            for(let i=0;i<node.attributes.length;i++) {
                if(node.attributes[i].name !== "is" && node.attributes[i].name !== "component-name" && node.attributes[i].name !== "lyte-keep-alive") {
                    component.setAttribute(node.attributes[i].name, node.attributes[i].value);
                }
            }
//          componentData = component._attributes;
            if(node._attributes) {
                for(var key in node._attributes) {
                	if(key!== "component-name") {
                		component.setData(_LC.String.toCamelCase(key), node._attributes[key]);
                	}
                }
            }
            let toAppend = this.renderNodes(node, node._dynamicNodes, node, undefined, establishBindings, undefined, node._templateContent);
            component.appendChild(toAppend);
        }
        if(newComponent) {
                component._toRegEvnts = node._toRegEvnts;
        }
        if(!update) {
            this.__dc.push(node);
        	returnVal = {"toAppendMain" : component, "lastNode" : node};
        } else {
        	insertBefore(node.parentNode,component, node);
        }
        node._renderedComponent[componentName] = component;
        node._currentComponent = componentName;
	    component._callee = this;
	    component._actions = node._actions;
        component.setMethods(node._initMethods);
        component._attributeDetails = node._attributeDetails;
        component._boundEvents = node._boundEvents;
        component._cx = node._cx;
        return returnVal;
    }
    //updFH
    // It constructs/updates the for helper. 
    updateForHelper(node, options, contextSwitchInfo, establishBindings) {
        if(node.tagName !== "TEMPLATE") {
            Object.keys(node).forEach(function(item) {
            	if(item !== "innerHTML" && item !== "innerText") {
	                node._origTemplate[item] = node[item];            	
            	}
            });
            if(_Lyte._ie) {
            	var div = createElement("div");
                div.innerHTML = node._templateContent;
                node._origTemplate.innerHTML = div.children[0].innerHTML;
                this.constructor.splitTextNodes(node._origTemplate);
                if(node.hasAttribute("depth")) {
                    node._origTemplate.setAttribute("depth", node.getAttribute("depth"));    
                }
            }
            node._origTemplate._placeHolder = document.createTextNode("");
            node._origTemplate.setAttribute("item", node.getAttribute("item"));
            node._origTemplate.setAttribute("index", node.getAttribute("index"));
            
            if(node.hasAttribute("unbound")) {
                //What if unbound is dynamic attribute ? 
                node._origTemplate.setAttribute("unbound", "true");
            }
            //node.replaceWith(node._origTemplate._placeHolder);
            _LC.replaceWithPf(node, node._origTemplate._placeHolder);
            node = node._origTemplate;
            node.setAttribute("is", "for");
            
        } else if(!node._placeHolder){
            var emptyTextNode = document.createTextNode("");
            //node.replaceWith(emptyTextNode);
            _LC.replaceWithPf(node, emptyTextNode)
            node._placeHolder = emptyTextNode;
            _LC.apdNode(node, this);
        }
        let callee = this;
        node._callee = this;
        node._attributes = node._attributes || {};
        if(options.type === "update" && node._currentItems === node._attributes.items) {
            return {};
        }
        node._cx = contextSwitchInfo || node._cx;
        let  indexValue = node.getAttribute("index");
        if(!indexValue) {
            node.setAttribute("index", "index");
            indexValue = "index";
        }
        let itemValue = node.getAttribute("item");
        if(!itemValue) {
            node.setAttribute("item", "item");
            itemValue = "item";
        }
        let initialItemValue = callee.component.data[itemValue],initialIndexValue = callee.component.data[indexValue];
        let initialItemProp = callee._properties[itemValue],initialIndexProp = callee._properties[indexValue];
        callee._properties[itemValue] = callee._properties[indexValue] = {};
        let items = node._attributes.items,content = node.content,dynamicNodes = node._dynamicNodes,lastNode = node;
        if(!node._items) {
            node._items = [];
        }
        node._dynProps = node._dynProps || {};
        let lastIndexForIteration;
        let firstIndexForIteration;
        let firstIndex = options.firstIndex;
        let secondIndex = options.secondIndex;
        let thirdIndex = options.thirdIndex;
        if(options) {
            switch(options.type) {
            case "remove"  :{
                lastIndexForIteration = firstIndex;
                for(let i=firstIndex, v=secondIndex;v>0;v--, i++) {
                    this.removeHelpersSpecificIndex(node, i);
                }
                //ln
                /*for(let i=(firstIndex)?firstIndex-secondIndex:firstIndex;i<node._items.length;i++) {
                    let forItem = node._items[i].itemProperty;
                    if(forItem._helperNodes){
                        for (var item of forItem._helperNodes){
                            let ind = item._cx.itemIndex;
                            item._cx.itemIndex = (ind)? ind- secondIndex : ind;
                        }
                    }
                }*/
                for(let i=firstIndex + secondIndex; i<node._items.length;i++) {        
                    node._items[i]._cx.itemIndex = node._items[i]._cx.itemIndex - secondIndex;        
                }
                node._items.splice(firstIndex, secondIndex);
                node._helpers.splice(firstIndex, secondIndex);
                node._forContent.splice(firstIndex, secondIndex);
                break;
            }
            case "insert" : {
                firstIndexForIteration = firstIndex;
                lastIndexForIteration = secondIndex;
                if(node._forContent[firstIndex]) {
                    lastNode = node._forContent[firstIndex][0];
                }
                let newArr = [], newObj = [], newArr1 = [];
                for(let v=secondIndex, k=firstIndex;v>0;v--, k++) {
                    newArr.push([]);
                    newObj.push({});
                    newArr1.push([]);
                }
                node._helpers.splice.apply(node._helpers, [firstIndex, 0].concat(newArr));
                node._items.splice.apply(node._items, [firstIndex, 0].concat(newObj));
                //ln
//                  for(let i=firstIndex + secondIndex;i<node._items.length;i++) {
//                      let forItem = node._items[i].itemProperty;
//                      for (var item of forItem._helperNodes){
//                          item._cx.itemIndex = item._cx.itemIndex + secondIndex;
//                      }
//                  }
                for(let i=firstIndex + secondIndex; i<node._items.length;i++) {
                    node._items[i]._cx.itemIndex = node._items[i]._cx.itemIndex + secondIndex;
                }
                node._forContent.splice.apply(node._forContent, [firstIndex, 0].concat(newArr1));
            }
                break;
            case "replace" : {
                firstIndexForIteration = firstIndex;
                lastIndexForIteration = secondIndex;
                this.removeHelpersSpecificIndex(node, firstIndex);
                let toAppendMain = createDocFragment();
                if(node._forContent[firstIndex+1]) {
                    lastNode = node._forContent[firstIndex+1][0];
                }
                let newArr = [], newObj = [], newArr1 = [];
                for(let v=secondIndex, k=firstIndex;v>0;v--, k++) {
                    newArr.push([]);
                    newArr1.push([]);
                    newObj.push({});
                }
                node._helpers.splice.apply(node._helpers,[firstIndex, 1].concat(newArr));
                node._items.splice.apply(node._items, [firstIndex, 1].concat(newObj));
//                  for(let i=firstIndex + secondIndex;i<node._items.length;i++) {
//                      let forItem = node._items[i].itemProperty._forItem;
//                      forItem.itemIndex = forItem.itemIndex + secondIndex - 1 ;
//                  }
                for(let i=firstIndex + secondIndex; i<node._items.length;i++) {
                    node._items[i]._cx.itemIndex = node._items[i]._cx.itemIndex + secondIndex - 1;
                }
                node._forContent.splice.apply(node._forContent, [firstIndex, 1].concat(newArr1));
                break;
            }
            case "splice" : {
                firstIndexForIteration = firstIndex;
                lastIndexForIteration = secondIndex;
                for(let i=thirdIndex,j=0;i>0;i-- , j++) {
                    this.removeHelpersSpecificIndex(node, firstIndex + j);
                }
                let toAppendMain = createDocFragment();
                if(node._forContent[firstIndex+thirdIndex]) {
                    lastNode = node._forContent[firstIndex+thirdIndex][0];
                }
                let newArr = [], newObj = [], newArr1 = [];
                for(let v=secondIndex, k=firstIndex;v>0;v--, k++) {
                    newArr.push([]);
                    newArr1.push([]);
                    newObj.push({});
                }
                node._helpers.splice.apply(node._helpers,[firstIndex, thirdIndex].concat(newArr));
                node._items.splice.apply(node._items, [firstIndex, thirdIndex].concat(newObj));
//                  for(let i=firstIndex + secondIndex;i<node._items.length;i++) {
//                      let forItem = node._items[i].itemProperty._forItem;
//                      forItem.itemIndex = forItem.itemIndex + secondIndex - 1 ;
//                  }
                for(let i=firstIndex + secondIndex; i<node._items.length;i++) {
                    node._items[i]._cx.itemIndex = node._items[i]._cx.itemIndex + secondIndex - thirdIndex;
                }
                node._forContent.splice.apply(node._forContent, [firstIndex, thirdIndex].concat(newArr1));
                break;
            }
            break;
            case "update" : 
            {
                let key = node.getAttribute("item");
//                  this.removeHelpers(node, true);
                for(let i=0;i<node._items.length;i++) {
                    this.removeHelpersSpecificIndex(node, i);
                }
//                  if(node._attributes.items) {
//                      for(let i=0;i<node._attributes.items.length && node._items[i];i++) {
//                          _LC.removeSelectedBindingDeep(node._items[i].itemProperty[key], node._attributes.items[i]);
//                      }
//                  }
                node._items = [];
        }
            case "default" : 
            {
                node._forContent = [];
                node._helpers = [];
                firstIndexForIteration = 0;
                lastIndexForIteration = items? items.length : 0 ;
            }
            break;
            default: 
            _Lyte.error("Error in updateForHelper");
            }
        }
        if(!lastNode) {
            lastNode = node;
        }
	while(lastNode !== node && lastNode.tagName === "TEMPLATE") {
            let lastNodeType = lastNode.getAttribute("is");
            switch(lastNodeType) {
            case "for" :
            case "forIn" : 
                lastNode = lastNode._forContent[0][0] || lastNode;
                break;
            case "if" :
            case "switch" : 
                lastNode = lastNode._caseContent[0] || lastNode;
                break;
            case "component" : 
                lastNode = lastNode._renderedComponent[lastNode._currentComponent] || lastNode;
                break;
            }
        }
        let returnVal;
        var localUnbound = false;
        var initialUnbound = _LC.unbound;
        if(node.hasAttribute("unbound")) {
            localUnbound = true;
            _LC.unbound = true;
        }
        node._currentItems = items;        
        if(options.type !== "remove") {
            var toAppendMain = createDocFragment();
            for(let k = firstIndexForIteration,v=lastIndexForIteration;v>0; k++, v--) {
                node._helpers[k] = [];
                node._items[k] = {"_dynamicProperty" : {}, "itemProperty" : {}, "indexProperty": {}};
                callee.component.data[itemValue] = items[k];
                callee.component.data[indexValue] = k;
                callee._properties[itemValue] = {};
                callee._properties[indexValue] = {};
                let optns = {"itemValue" : itemValue, "itemIndex" : k, "type" : "for", "node" : node, "indexValue" : indexValue};
//                  defProp(callee._properties[itemValue], '_forItem', {
//                      enumerable: false, 
//                      writable: true, 
//                      configurable: true, 
//                      value : optns
//                  });
                node._items[k]._cx = optns;
                let breakCheck = {};
                let toAppend = this.renderNodes(node.hasAttribute("depth") ? node._depthTemp : node, dynamicNodes, node, optns, establishBindings, breakCheck, node._templateContent);
                let dynProps = Object.keys(node._items[k]._dynamicProperty);
                for(let d=0;d<dynProps.length;d++) {
                    let key = dynProps[d];
                    node._dynProps[key] ? node._dynProps[key]++ : (node._dynProps[key] = 1);    
                }
                node._items[k].itemProperty = this.getProperty(itemValue);
                node._items[k].indexProperty = this.getProperty(indexValue);    
//                  if(options.type !== "default") {
                if(!_LC.unbound) {
                	_LC.establishBindings({[itemValue] : node._items[k].itemProperty},{[itemValue]:node._attributes.items[k]});
                }
//                  }
                node._forContent[k] = Array.from(toAppend.childNodes);
                //Needs to revisit this and make sure it happen within renderNodes function itself;
//                  if(options.type !== "update") {
                this.executeBlockHelpers(node._helpers[k]);
                toAppendMain.appendChild(toAppend);
                if(breakCheck.stop) {
                    break;
                }
            }
            //Provided so that before appending the component to DOM it is reset to previous value
            _LC.unbound = initialUnbound;
            if(options.type === "default") {
                returnVal = {"toAppendMain" : toAppendMain, "lastNode" : lastNode};
            } else {
                //lastNode.parentNode.insertBefore(toAppendMain, lastNode);
                if(lastNode._placeHolder) {
                	insertBefore(lastNode._placeHolder.parentNode, toAppendMain, lastNode._placeHolder);                	
                } else {
                	insertBefore(lastNode.parentNode,toAppendMain, lastNode);                
                }
            }
            if(!localUnbound && node._removedAttributes && node._removedAttributes.items && !node._removedAttributes.items.helperValue && node._removedAttributes.items._multipleProperty) {
            	_LC.establishBindings({"items" : node._removedAttributes.items._multipleProperty[0].actProp}, {"items" : items});
            }
        }
        _LC.unbound = initialUnbound;
        for(let i=lastIndexForIteration;i<node._items.length;i++) {
//              for(let j=0;j<node._helpers[i].length;j++) {
//                  node._helpers[j]._cx.itemIndex = i;
//              }
            if(node._items[i].indexProperty) {
                _LC.affectChanges(node._items[i].indexProperty);
            }
        }
        callee.component.data[itemValue] = initialItemValue;
        callee.component.data[indexValue] = initialIndexValue;
        callee._properties[itemValue] = initialItemProp;
        callee._properties[indexValue] = initialIndexProp;
        node._currentItems = items;
        return returnVal;
    }
    //It constructs/updates forIn Helper.
    //updFIH
    updateForInHelper(node, options, contextSwitchInfo, establishBindings) {
        if(node.tagName !== "TEMPLATE") {
            Object.keys(node).forEach(function(item) {
                if(item !== "innerHTML" && item !== "innerText") {
	                node._origTemplate[item] = node[item];            	
            	}
            });
            if(_Lyte._ie) {
            	var div = createElement("div");
                div.innerHTML = node._templateContent;
                node._origTemplate.innerHTML = div.children[0].innerHTML;
                this.constructor.splitTextNodes(node._origTemplate);
                if(node.hasAttribute("depth")) {
                    node._origTemplate.setAttribute("depth", node.getAttribute("depth"));
                }
            }
            node._origTemplate._placeHolder = document.createTextNode("");
            node._origTemplate.setAttribute("key", node.getAttribute("key"));
            node._origTemplate.setAttribute("value", node.getAttribute("value"));
            if(node.hasAttribute("unbound")) {
                //What if unbound is dynamic attribute ? 
                node._origTemplate.setAttribute("unbound", "true");
            }
            
            //node.replaceWith(node._origTemplate._placeHolder);
            _LC.replaceWithPf(node, node._origTemplate._placeHolder)
            node = node._origTemplate;
            node.setAttribute("is", "forIn");
        } else if(!node._placeHolder){
            var emptyTextNode = document.createTextNode("");
            //node.replaceWith(emptyTextNode);
            _LC.replaceWithPf(node, emptyTextNode);
            node._placeHolder = emptyTextNode;
            _LC.apdNode(node, this);
        }
        let callee = this;
        node._callee = this;
        node._attributes = node._attributes || {};
        if(options.type === "update" && node._currentObject === node._attributes.object) {
            return {};
        }
        contextSwitchInfo = contextSwitchInfo ? contextSwitchInfo : node._cx;
        node._cx = contextSwitchInfo;
        let key = node.getAttribute("key");
        if(!key) {
            key = "key";
            node.setAttribute("key", "key");
        }
        let value = node.getAttribute("value");
        if(!value) {
            value = "value";
            node.setAttribute("value", "value");
        }
        let initialKeyValue = callee.component.data[key];
        let initialValueValue = callee.component.data[value];
        let initialKeyProp = callee._properties[key];
        let initialValueProp = callee._properties[value];
        callee._properties[key] = callee._properties[value] = {};
        let object = node._attributes.object;
        let content = node.content;
        let dynamicNodes = node._dynamicNodes;
        let lastNode = node;
        let keysArray = [];
        if(!node._items) {
            node._items = {};
        }
        node._dynProps = node._dynProps || {};
        if(options) {
            switch(options.type) {
            case "delete"  :{
                this.removeHelpersSpecificIndex(node, options.property);
                var delIndex = node._keysArray.indexOf(options.property);
                if(delIndex > -1) {
                  node._keysArray.splice(delIndex,1);
                }
                delete node._propBindingObject[options.property];
            }
            break;
            case "add" : {
                keysArray = [options.property];
                node._keysArray.push(options.property);
            }
            break;
            case "update" : 
            {
                node._keysArray.forEach(function (itemKey, index, array) {
                    this.removeHelpersSpecificIndex(node, itemKey);
                }, this);
                node._keysArray = keysArray = object ? Object.keys(object) : [];
                node._items = {};
                node._propBindingObject = {};
            }
            break;
            case "default" : 
            {
                node._forContent = {};
                node._helpers = {};
                node._keysArray = keysArray = object? Object.keys(object) : [];
//                  keysArray = Object.keys(object);

            }
            break;
            default: 
            _Lyte.error("Error in updateForHelper");  

            }
        }
        let returnVal;
        if(!object) {
            let toAppendMain = createDocFragment();
            if(options.type !== "default") {
            	insertBefore(lastNode.parentNode,toAppendMain, lastNode);
            } else {
                returnVal = {"toAppendMain" : toAppendMain, "lastNode" : lastNode};
            }    
        }
        let localUnbound = false;
        let initialUnbound = _LC.unbound;
        if(node.hasAttribute("unbound")) {
            localUnbound = true;
            _LC.unbound = true;
        }
		node._currentObject = object;
        if(object && options.type !== "remove") {
            var toAppendMain = createDocFragment();
            node._propBindingObject = node._propBindingObject || {};
            keysArray.forEach(function(itemKey, index, array) {
                node._helpers[itemKey] = [];
                node._items[itemKey] = {"_dynamicProperty" : {}, "itemProperty" : {}};
                callee.component.data[key] = itemKey;
                callee.component.data[value] = object[itemKey];
                callee._properties[key] = {};
                callee._properties[value] = {};
                let optns = {"itemIndex" : itemKey, "itemValue" : value, "keyValue" : key, "type" : "forIn", "node" : node};
                node._items[itemKey]._cx = optns;
                let toAppend = this.renderNodes(node.hasAttribute("depth") ? node._depthTemp : node, dynamicNodes, node, optns, establishBindings, undefined, node._templateContent);
                Object.keys(node._items[itemKey]._dynamicProperty).forEach(function(key) {
                    node._dynProps[key] ? node._dynProps[key]++ : (node._dynProps[key] = 1);    
                })
                node._items[itemKey].itemProperty = this.getProperty(value);
                node._propBindingObject[itemKey] = node._items[itemKey].itemProperty;
                node._forContent[itemKey] = Array.from(toAppend.childNodes);
//                    this.updateBlockHelpers(node._helpers[itemKey], optns);
                this.executeBlockHelpers(node._helpers[itemKey]);
                toAppendMain.appendChild(toAppend);
            }, this); 
//              if(options.type !== "update") {
            	if(!_LC.unbound) {
            		makeSet(node._attributes.object, "_bindings");
                    node._attributes.object._bindings.add(node._propBindingObject);
                    _LC.establishBindings(node._propBindingObject, node._attributes.object);
            	}
//              }
				_LC.unbound = initialUnbound;
                if(options.type !== "default") {
                    //lastNode.parentNode.insertBefore(toAppendMain, lastNode);
                    if(lastNode._placeHolder) {
                    	insertBefore(lastNode._placeHolder.parentNode,toAppendMain, lastNode._placeHolder);                    
                    } else {
                    	insertBefore(lastNode.parentNode,toAppendMain, lastNode);
                    }
                } else {
                    returnVal = {"toAppendMain" : toAppendMain, "lastNode" : lastNode};
                }

        }
        _LC.unbound = initialUnbound; 
        callee.component.data[key] = initialKeyValue;
        callee.component.data[value] = initialValueValue;
        callee._properties[key] = initialKeyProp;
        callee._properties[value] = initialValueProp;
        node._currentObject = object;
        return returnVal;
    }
        
    static getArrayIndex(array,value) {
        for(let i=0;i<array.length;i++) {
            if(array[i] === value) {
                return i
            };
        }
    }
    
    static getTrimmedContent(content, position, node) {
        let dummyContent = content;
        if(node) {
            position = [];
            let parentNode = node.parentNode;
            while(true) {
                position.unshift(this.getArrayIndex(parentNode.childNodes,node));
                parentNode = parentNode.parentNode;
                node = node.parentNode;
                if(!parentNode) {
                    break;
                }
            }
        }
        for(let i=0;i<position.length;i++) {
            for(let j=content.childNodes.length-1;j>position[i];j--) {
                content.childNodes[j].remove();
            }
            content = content.childNodes[position[i]];
        }
        return dummyContent;
    }
   //updSH
    updateSwitchHelper(type,node, contextSwitchInfo, update, establishBindings){
        if(node.tagName !== "TEMPLATE") {
            Object.keys(node).forEach(function(item) {
            	if(item !== "innerHTML" && item !== "innerText") {
            		node._origTemplate[item] = node[item];
            	}
            });
            if(_Lyte._ie) {
            	var div = createElement("div");
                div.innerHTML = node._templateContent;
                node._origTemplate.innerHTML = div.children[0].innerHTML;
                this.constructor.splitTextNodes(node._origTemplate);
                if(node.hasAttribute("depth")) {
                    node._origTemplate.setAttribute("depth", node.getAttribute("depth"));    
                }
            }
            node._origTemplate._placeHolder = document.createTextNode("");
            //node.replaceWith(node._origTemplate._placeHolder);
            _LC.replaceWithPf(node, node._origTemplate._placeHolder);
            node = node._origTemplate;
            node.setAttribute("is", type);
            
        } else if(!node._placeHolder){
            var emptyTextNode = document.createTextNode("");
            //node.replaceWith(emptyTextNode);
            _LC.replaceWithPf(node, emptyTextNode);
            node._placeHolder = emptyTextNode;
            _LC.apdNode(node, this);
        }
        let isNew = false;
        let lastNode = node;
        if(!node._callee) {
            node._callee = this;
            isNew = true;
        }
        contextSwitchInfo = contextSwitchInfo ? contextSwitchInfo : node._cx;
        node._cx = contextSwitchInfo;
        node._dynamicProperty = node._dynamicProperty ? node._dynamicProperty : {};
        let currentCaseName;
        let value;
        if(node.getAttribute("value")=== "" || node.getAttribute("value")) {
            value = node.getAttribute("value");
        } else if(node._attributes) {
            value = node._attributes.value;
        }
        if(node._currentCase && value === node._currentCase){
            return;
        }
        if(value) {
            currentCaseName = type === "if" ? "true" : value.toString();
        } else {
            if(type=== "if")  {
                currentCaseName = "false";
            } else {
                switch(value) {
                case undefined : 
                    currentCaseName = "undefined";
                    break;
                case null : 
                    currentCaseName = "null";
                    break;
                case false: 
                    currentCaseName = "false";
                    break;
                case "": 
                    currentCaseName = '""';
                    break;
                case 0 : 
                    currentCaseName = '0';
                }
            }
        }
        if(currentCaseName === node._currentCase) {
            return;
        }
        node._currentCase = currentCaseName;
        var nodeTemp = node._depthTemp || node;
//        let currentCase = node.content.querySelector('[case=\''+currentCaseName+'\']'),scope;
        let scope = node._cases[currentCaseName];
        let defaultContent;
        if(!scope){
            scope = node._default;
            defaultContent = (_Lyte._ms) ? scope.templateContent : nodeTemp.content.querySelector('[default]');
            node._isDefault = true; 
            if(!defaultContent) {
                if(node._caseContent && node._caseContent.length) {
                    this.removeHelpers(node, undefined, true);
                }
                node._caseContent = [];
                let emptyTextNode = document.createTextNode("");
                node._caseContent.push(emptyTextNode);
                node._currentCaseName = currentCaseName;
                if(update) {
                	//lastNode.parentNode.insertBefore(emptyTextNode, node);
                    if(lastNode._placeHolder) {
                    	insertBefore(lastNode._placeHolder.parentNode,emptyTextNode, lastNode._placeHolder);                    
                    } else {
                    	insertBefore(lastNode.parentNode,emptyTextNode, node);
                    }
                	return;
                } else {
                	let toAppendMain = createDocFragment();
                	toAppendMain.append(emptyTextNode);
                	return {lastNode : lastNode, toAppendMain : toAppendMain};
                }
            }
        }
        
//        if(currentCase) {
//              if(currentCase.tagName === "TEMPLATE" && !currentCase.getAttribute("is")){
//                  currentCase = currentCase.content;
//              } else {
//                  let temp = createElement('template');
//                  let clone = currentCase.cloneNode(true);
//                  temp.content.appendChild(clone);
//                  currentCase.removeAttribute('slot');
//                  currentCase = temp.content;
//              }
//              scope.content = currentCase;
//        }
 
        if(node._caseContent && node._caseContent.length) {
            this.removeHelpers(node, undefined, true);
        }
        let dummyScope = scope;
        let additionalContentArr = [];
        let cnt=0;
        let dummyCaseName = currentCaseName;
        let template;
        if(defaultContent) {
            template = defaultContent
        } else {
            template = (_Lyte._ms) ? {} : nodeTemp.content.querySelector('[case=\''+_LC.cssEscape(dummyCaseName)+'\']');
        }
        let contentArr = [];
        while(dummyScope) {
            let dynamicNodes = dummyScope.dynamicNodes;
            let processedContent = this.renderNodes(template, dynamicNodes, node, undefined, establishBindings, undefined, dummyScope.templateContent);
            contentArr.push(processedContent);
            if(dummyScope.additional) {
                if(dummyScope.additional.next) {
                    template = (_Lyte._ms) ? {} : node.content.querySelector('[case=\''+_LC.cssEscape(dummyScope.additional.next)+'\']');
                    dummyScope = node._cases[dummyScope.additional.next];
                } else {
                    template = (_Lyte._ms) ? {} : node.content.querySelector('[default]');
                    dummyScope = node._default;
                }
            } else {
                    break;
            }
        }
        node._caseContent = [];
        let toAppendMain = createDocFragment();;
        for(let i=0;i<contentArr.length;i++) {
            if(contentArr[i].nodeType == 11){
//                for(let j=0;j<contentArr[i].childNodes.length;j++) {
//                    node._caseContent.push(contentArr[i].childNodes[j]);
//                }
                node._caseContent = node._caseContent.concat(Array.from(contentArr[i].childNodes));
            }
            else{
                node._caseContent.push(contentArr[i]);
            }
                toAppendMain.append(contentArr[i]);
//            node.parentNode.insertBefore(contentArr[i], node);
        }
          this.executeBlockHelpers(node._helpers, node);
          if(update) {
        	  let returnVal;
        	  if(toAppendMain.querySelector("template[is=break]")) {
        		  returnVal = "break";
        	  } else if(toAppendMain.querySelector("template[is=continue]")) {
        		  returnVal = "continue";
        	  }
        	  //node.parentNode.insertBefore(toAppendMain, node);
              if(node._placeHolder) {
            	  insertBefore(node._placeHolder.parentNode,toAppendMain, node._placeHolder);              
              } else {
            	  insertBefore(node.parentNode,toAppendMain, node);
              }
        	  return returnVal;
          } else {
        	  return {"toAppendMain" : toAppendMain, "lastNode" : node};
          }
    }
    
    dummy(a,b) {
        let dummy = this.constructor._properties[boundValue].observer;
    }
    
    callObservers(boundValue, key) {
        let property = this.constructor._properties[boundValue];
        let observers = property?property.observer: undefined;
        if(observers) {
            for(let i=0;i<observers.length;i++) {
                if(key.indexOf('.') === -1 || observers[i].path === key) {
                    this["_"+observers[i].functionName].apply(this);
                }
            }
        }
    }
    
    static updateValue(property, path, value) {
        let pathVals = path.split('.');
        let context = property;
        for(let i=0;i<pathVals.length -1;i++) {
            context = context[pathVals[i]];
        }
        context[pathVals[i]] = value;
    }
    
//    static createDocFragment(template){
//        let childNodes = template.cloneNode(true,"lyte").childNodes;
////           let childNodes = template.childNodes;
//        let frag = document.createDocumentFragment();
//        let len = childNodes.length;
//        for(let i=0; i<len; i++){
//            frag.appendChild(childNodes[0]);
//        }
//        return frag;
//    }
    
    static createDocFragment1(template) {
        if(template.content) {
            return template.content;
        }
    	let childNodes = template.childNodes;
    	let frag = createDocFragment();
    	let len = childNodes.length;
    	for(let i=0; i<len; i++){
            frag.appendChild(childNodes[0]);
        }
    	return frag;
    }
    
    static _registerComponent(a,b) {
        let componentsDiv = _LC.lyteComponentsDiv;
        let styleDiv = _Lyte.$.assetsDiv;
        let origTemplateValue = this._template;
        if(this._template && typeof this._template === "string"){
            this._template.replace(/\\'/g,"'");
            let div = createElement("div");
            div.innerHTML = this._template;
            while(div.firstChild){
                if(div.firstChild.nodeName === "STYLE") {
                    styleDiv.appendChild(div.firstChild);
                } else {
                    componentsDiv.appendChild(div.firstChild);
                }
            }
/*        } else if(document.querySelector("#" + a)) { */
        } else if(document.querySelector("template[tag-name='"+a+"']")) {
            componentsDiv.appendChild(document.querySelector("template[tag-name='"+a+"']") );
        }
        this._template = componentsDiv.querySelector("template[tag-name='"+a+"']");
        if(!this._template) {
        	return;
        }
        if(_LC.needDummyComponentsDiv) {
            if(_Lyte._ie) {
                let temp = _Lyte.Compile.getTemplateFromString(origTemplateValue);
                _LC.dummyLyteComponentsDiv.appendChild(temp);
            } else {
                _LC.dummyLyteComponentsDiv.appendChild(this._template.cloneNode(true));    
            }
        }
        if(this._template && !this._template.content){
//            var frag = document.createDocumentFragment();
//            let childNodes = this._template.cloneNode(true,"lyte").childNodes;
//            //let childNodes = this._template.childNodes;
//            let len = childNodes.length;
//            for(let i=0; i<len; i++){
//                frag.appendChild(childNodes[0]);
//            }
//            this._template.content = frag;
        }
        var s = _Lyte._ie ? this._template : this._template.content;//)?this._template.content:document.createDocumentFragment(this._template);
        //This is used to split text nodes which contain multiple dynamic values 
        //Eg." Name is {{name}} and age is {{age}} "
        this.splitTextNodes(s);
        //This is used to find the dynamicNodes and helper nodes for the given component. 
        if(!this._dynamicNodes){
            if(_Lyte.Compile.getDynamicNodes) {
                this._dynamicNodes = _Lyte.Compile.getDynamicNodes(a, undefined, _Lyte._ie ? s : undefined).dynamicNodes;
            } else {
                _Lyte.error("LC002", a);  
            }
	    } 
        if(this._dynamicNodes) {
        doCompile(s, this._dynamicNodes, a, this);
        if(_Lyte._ed) { 
          this._templateContent = this._template.outerHTML;
        } else if(_Lyte._ie) {
          this._templateContent = s.outerHTML;
        }
        this._templateAttributes = this._templateAttributes || {type : "attr", "attr" : {}, position: []};
        var ta = [this._templateAttributes];
        doCompile(this._template, ta, a, this);
        this._templateAttributes = ta[0];
        if(this._templateAttributes && this._templateAttributes.attr) {
            var attributesT = this._template.attributes;
            try{
                for(let i=0;i<attributesT.length;i++) {
                    if(!this._templateAttributes.attr[attributesT[i].name] && attributesT[i].name !== "tag-name" && attributesT[i].name !== "use-strict") {
                        this._templateAttributes.attr[attributesT[i].name] = {"name" : attributesT[i].name, "staticValue" :  attributesT[i].value};
                    }
                }    
            } catch(e) {
                _Lyte.error("Error with templateAttributes. ");
            }
        }
        }
    }
    //This is used to split text nodes which contain multiple dynamicNodes. 
    static splitTextNodes(node) {
        if(node && node.childNodes && node.childNodes.length) {
            for(let i=node.childNodes.length-1;i>=0;i--) {
                this.splitTextNodes(node.childNodes[i]);
            }
        }
        if(node.tagName === "TEMPLATE" && !_Lyte._ie) {
            this.splitTextNodes(node.content);
        }
        if(node.nodeType === node.TEXT_NODE) {
            let nodeValue = node.nodeValue;
            if(nodeValue){
                let mustacheValues = nodeValue.match(/{{[^}]*?(?:(?:('|")[^\1]*?\1)[^}]*?)*}}/g); //'
                if(!mustacheValues) {
                    return;
                }
                let newNodeArray = [];
                for(let i=0;i<mustacheValues.length;i++) {
                    let mustacheStartIndex = nodeValue.indexOf(mustacheValues[i]);
                    let mustacheEndIndex = mustacheStartIndex + mustacheValues[i].length;
                    if(mustacheStartIndex) {
                            newNodeArray.push(document.createTextNode(nodeValue.substring(0, mustacheStartIndex)));
                    }
                    newNodeArray.push(document.createTextNode(nodeValue.substring(mustacheStartIndex, mustacheEndIndex)));
                    nodeValue = nodeValue.substring(mustacheEndIndex);
                }
                if(!(!nodeValue.trim() && node.nextSibling && node.nextSibling.nodeType === 3 && !node.nextSibling.nodeValue.trim())) {
                    newNodeArray.push(document.createTextNode(nodeValue));
                }
                //Fix for IE Edge issue with higher versions where node.replaceWith is not working when the parent is a doc fragment.
                if(_Lyte._rwpf && node.parentNode.nodeName === "#document-fragment") {
                	for(let i=0;i<newNodeArray.length;i++) {
                		insertBefore(node.parentNode,newNodeArray[i],node);
                      }
                    node.remove();
                } else {
                	node.replaceWith.apply(node, newNodeArray);
                }
            }
        }
    }
    //It registers the binding of the node with the properties with which the dynamicNode depends. 
    bindNode(node, toBeRemoved, helperNode, options, nodeInfo, processLast, establishBindings, isTemplate) {
        let itemValue = options.itemValue;
        let forIndex = options.itemIndex;
        let forType = options.type;
        let indexValue = options.indexValue;
        let dynamicValue = nodeInfo.dynamicValue;
        let helperFunc = nodeInfo.helperInfo;
        let nodeValue, ownerElement = node.ownerElement;
        let dynamicValuesArray = [];
//        if(node.nodeType === 2 && _LC.isCustomElement(node.ownerElement,true) ) {
//          node = {nodeName : node.nodeName, ownerElement: ownerElement, nodeType : 2, nodeValue : node.nodeValue};
//        }
        node._callee = this;
        let isHelper = false;
        if(helperFunc && Object.keys(helperFunc).length) {
            isHelper = true;
            let attrName = node.nodeName;
            nodeValue = node.helperValue = helperFunc;
            let helperArgs = [];
            if(helperFunc.name === "action"){
                let actName = helperFunc.args[0];
                helperFunc.args[0] = actName.startsWith("'")? actName.replace(/'/g,''):  actName;
                if(forType) {
                    ownerElement._cx = options;
                } else if(helperNode) {
                    ownerElement._cx = helperNode._cx;
                }
                actName = helperFunc.args.slice(0,1)[0];
                let args = helperFunc.args.slice(1,helperFunc.args.length), isCustom = false;
                let attrName = node.nodeName;
                if(attrName.indexOf("-") != -1){
                    isCustom = true;
                }
                helperArgs = [ownerElement,attrName,isCustom,{name:actName,args:args}];
                this.processHelper({"name" : helperFunc.name, "args" : helperArgs}, node);
                return;
            } else{
                if(helperFunc.name === "method") {
                    helperArgs = helperFunc.args;
                } else {
                    helperArgs = this.processArgs(this,helperFunc.args,dynamicValuesArray,undefined,node);    
                }
            }
            nodeValue = this.processHelper({"name" : helperFunc.name, "args" : helperArgs}, node);
            if(helperFunc.name === "unescape"){
//              let test = node.replaceWith.apply(node,nodeValue.childNodes);
                let obj = {initialNode : node, dynamicNodeValue : nodeValue};
                node = {dynamicPositions : obj, "_callee" : node._callee, helperValue : node.helperValue};
                nodeValue = undefined;
                processLast.push(node);
            }
        } else {
            helperFunc = {};
            node.syntaxValue = dynamicValue;
            let dynamicValues = [];
            nodeValue = _LC.get(this.component.data, dynamicValue, dynamicValues);
            dynamicValuesArray.push(dynamicValues);
        }
        if(node.nodeType === 2 && ( (typeof nodeValue !== "string" && (_LC.isCustomElement(node.ownerElement,true) || typeof nodeValue === "boolean") ) || _LC.isControlHelper(node.ownerElement) )) {
        //	let bindedNode = node;
            node = {nodeName : node.nodeName, ownerElement: ownerElement, nodeType : 2, nodeValue : node.nodeValue, _callee : this, syntaxValue : node.syntaxValue, helperValue : node.helperValue, _attributeDetails : node._attributeDetails};
            let tagName = node.ownerElement.tagName;
            if(tagName == "INPUT" || tagName == "TEXTAREA" || (tagName == "DIV" && node.ownerElement.hasAttribute("contenteditable") )) {
                var rA = node.ownerElement._rA = node.ownerElement._rA || [];
                node.ownerElement._rA.push(node);
            }
            if(!ownerElement._origTemplate && ( ownerElement.hasAttribute("lyte-for") || ownerElement.hasAttribute("lyte-if") || ownerElement.hasAttribute("lyte-switch") || ownerElement.hasAttribute("lyte-forIn") ) && ownerElement.tagName !== "TEMPLATE") {
                if(_Lyte._ie) {
                	node.ownerElement = createElement("template");
                	node.ownerElement.setAttribute("is", nodeInfo._depthTemp);
                } else {
                	node.ownerElement = nodeInfo._depthTemp.cloneNode(true);
                }
                ownerElement._origTemplate = node.ownerElement;
            }
        //	node.ownerElement._attributeDetails[node.nodeName].bindedNode = node;
        }
        let actMultiProp; 
        if(helperFunc.name !== "unbound" && !_LC.unbound) {
            let dynamicProp;
            if(helperNode) {
                dynamicProp = forType? helperNode._items[forIndex]._dynamicProperty : helperNode._dynamicProperty;
            }
            for(let d=0;d<dynamicValuesArray.length;d++) {
            	let dynamicValues = dynamicValuesArray[d];
            	for(let v=0;v<dynamicValues.length;v++) {
            		let actProperty = this.getProperty(dynamicValues[v]);
            		if(helperNode) {
            			let ind = dynamicValues[v].search(/\W/);
            			let boundValue;
            			if(ind !== -1) {
            				boundValue = dynamicValues[v].substring(0, ind);
            			} else {
            				boundValue = dynamicValues[v];
            			}
            			if(boundValue !== itemValue && boundValue !== indexValue && (!options.node || !options.node._properties || !options.node._properties[boundValue])) {
            				makeSet(actProperty, "_helperNodes");
            				actProperty._helperNodes.add(
            						helperNode
            				);
            				dynamicProp[dynamicValues[v]] ? dynamicProp[dynamicValues[v]].push(node): (dynamicProp[dynamicValues[v]] = []).push(node);
            			} 
            			else {
            				node._cx = options;
//            				if(!actProperty._dynamicNodes) {
//            					actProperty._dynamicNodes = [];
//            					defProp(actProperty, '_dynamicNodes', {
//            						value: [],
//            						enumerable: false, 
//            						writable: true, 
//            						configurable: true
//            					});
//            				}
            				makeArray(actProperty, "_dynamicNodes");
            				actProperty._dynamicNodes.push(node);
            				if(boundValue !== indexValue) {
            					actMultiProp = actProperty;
            				}
            			}
            		} else {
//            			if(!actProperty._dynamicNodes) {
//            				defProp(actProperty, '_dynamicNodes', {
//            					value : [], 
//            					enumerable: false, 
//            					writable: true,
//            					configurable: true
//            				});
//            			}
            			makeArray(actProperty, "_dynamicNodes");
            			actProperty._dynamicNodes.push(node);
            		}
            		if ((ownerElement && (ownerElement.hasAttribute("lyte-for") || ownerElement.hasAttribute("lyte-if") || ownerElement.hasAttribute("lyte-switch") || ownerElement.hasAttribute("lyte-forIn") )) || (ownerElement && ownerElement.tagName === "TEMPLATE" && /^(for|forIn)$/.test(ownerElement.getAttribute("is")) && !isHelper)) {
            			let type= ownerElement.getAttribute("is");
            			if( (type=== "for" && node.nodeName === "items") || (type==="forIn" && node.nodeName === "object")) {
            				if(!actProperty._forHelpers) {
            					makeSet(actProperty, "_forHelpers");
            				}
            				node.ownerElement._actualBinding = actProperty;
            				actProperty._forHelpers.add(node.ownerElement);
            			}
            		}
            		if(establishBindings) {
            			_LC.establishSelectedBinding(actProperty, this.component.data, this );
            		}
            	}
            	if(dynamicValues.length > 1) {
            		node._multipleProperty = node._multipleProperty || [];
            		node._multipleProperty.push({"dynamicProp" : actMultiProp ? undefined : dynamicProp, "actProp" : this.getProperty(dynamicValues[0]), "helperNode" : helperNode, "dynamicValues" : dynamicValues});
            	}
            }
        }
        nodeValue = !typeof nodeValue === "boolean" && !typeof nodeValue === "number" ? (nodeValue? nodeValue : ""): nodeValue;
        if(node.nodeType === 2) {
            let parentNode = node._parentNode? node._parentNode : node.ownerElement;
            if(parentNode.tagName) {
                let is = parentNode.getAttribute("is");
            }
            let isCustomElement = _LC.isCustomElement(parentNode,true);
            if(isCustomElement) {
                 if(parentNode.set) {
                    parentNode.set(_LC.String.toCamelCase(node.nodeName), nodeValue);
                 } else {
                    parentNode._initProperties = parentNode._initProperties || {};
                     parentNode._initProperties[_LC.String.toCamelCase(node.nodeName)] =nodeValue;
                }
            }
            let origNodeValue = nodeValue;
            //!== "string"
            if(isCustomElement && typeof nodeValue !== "string" && !isTemplate) {
                parentNode._attributes = parentNode._attributes || {};
                parentNode._attributes[node.nodeName] = nodeValue;
                if(parentNode.nodeName === "TEMPLATE" && isHelper) {
                    if((parentNode.getAttribute("is") === "for" && node.nodeName === "items") || (parentNode.getAttribute("is") === "forIn" && node.nodeName === "object") && !_LC.unbound) {
                        //node._actualBinding = {"_forHelpers" : new Set().add(parentNode)};
                        node.ownerElement._actualBinding = {"_forHelpers" : new Set().add(parentNode), "_createdBinding" : true};
                        if(nodeValue){
                            makeSet(nodeValue, "_bindings");
                            nodeValue._bindings.add(node.ownerElement._actualBinding);
                        }
                    }
                }
                toBeRemoved.push(node.nodeName);
            }
            else {
                if(typeof nodeValue === "boolean") {
                    parentNode._attributes = node.ownerElement._attributes || {};
                    parentNode._attributes[node.nodeName] = nodeValue;
                    if(!nodeValue) {
//                      node.ownerElement.removeAttribute(node.nodeName);
                        toBeRemoved.push(node.nodeName);
                    } else {
                        parentNode.setAttribute(node.nodeName, "");
                    }
                } else {
                    nodeValue = (nodeValue && typeof nodeValue === "object") ? ((typeof Record != "undefined" && nodeValue instanceof Record) ? JSON.stringify(nodeValue.$.toJSON()) : JSON.stringify(nodeValue)) : ((nodeValue === undefined || nodeValue === null) ? '' : nodeValue);
                    if(_LC.isControlHelper(node.ownerElement)) {
                    	 parentNode._attributes = node.ownerElement._attributes || {};
                         parentNode._attributes[node.nodeName] = nodeValue;
                         toBeRemoved.push(node.nodeName);
                    } else {
                         let locNodeVal = nodeValue === undefined ? "" : nodeValue;
                         //if(node.nodeName === "style") {
                         //   node.ownerElement.setAttribute("style",locNodeVal);
                         //} else {
                         //   node.nodeValue = locNodeVal;
                         //}
                         node.ownerElement.setAttribute(node.nodeName, locNodeVal);
                    }
                    
                }
            }
            if(parentNode.tagName === "LYTE-YIELD" /*parentNode.getAttribute("is") === "insertYield"*/) {
                parentNode.component.data[_LC.String.toCamelCase(node.nodeName)] = origNodeValue;
            }
            if (/^(INPUT|TEXTAREA|SELECT)$/.test(parentNode.nodeName)) {
                        if (node.nodeName === "value") {
                            parentNode.value = (nodeValue === undefined) ? "" : nodeValue;
                        } else if (node.nodeName === "checked") {
                            parentNode.checked = nodeValue;
                        }
            }
        } 
        else {
            node.nodeValue = nodeValue === undefined ? '' : nodeValue;
        }
	return node;
    }
    
    debounce(func, threshold) {
        var timeout;
        return function debounced() {
            var obj = this, args = arguments;
            function delayed() {
            	func.apply(obj, args);
                timeout = null;
            };
            if (timeout){
            	clearTimeout(timeout);
            }
            timeout = setTimeout(delayed, threshold || 100);
            //console.log(timeout,threshold);
        };
    }
    getProperty(key) {
        let arr = key.split('.');
        let property = this;
        if(!property._properties[arr[0]]) {
            property._properties[arr[0]] = {};
        } 
        property = property._properties[arr[0]];
        
        defProp(property, '_path', {enumerable: false, value : arr[0]});
        for(let i=1;i<arr.length;i++) {
            if(!property[arr[i]]) {
                property[arr[i]] = {};
                defProp(property[arr[i]], '_path', {enumerable: false, value : property._path + "." + arr[i]});
            }
            property = property[arr[i]];
        }
        return property;
    }
    //updN
    updateNode(node, updatePath) {
        var del = "delete";
        let multiplePropNode = [];
        let multipleProp;
        if(node._multipleProperty) {
        	for(var i=0;i<node._multipleProperty.length;i++) {
        		if(node._multipleProperty[i] && node._multipleProperty[i].dynamicValues.lastIndexOf(updatePath) > 0) {
                    multiplePropNode[i] = false;
                    multipleProp = node._multipleProperty[i];
		            let nodes;
		            if(multipleProp.dynamicProp) {
                        multiplePropNode[i] = multipleProp;
		                nodes = multipleProp.dynamicProp[multipleProp.actProp._path];
		                if(nodes) {
		                    let index = nodes.indexOf(node);
		                    nodes.splice(index, 1);
		                }
		                let helperNode = multipleProp.helperNode;
		                if(nodes.length === 0) {
		                    if(helperNode.getAttribute("is") === "if") {
		                        multipleProp.actProp._helperNodes[del](helperNode);
		                        delete multipleProp.dynamicProp[multipleProp.actProp._path];
		                    } else {
		                        delete multipleProp.dynamicProp[multipleProp.actProp._path];
		                        if(helperNode._items) {
		                            let removeHelper = true;
		                            for(let i=0;i<helperNode._items.length;i++) {
		                                if(helperNode._items[i]._dynamicProperty && helperNode._items[i]._dynamicProperty[multipleProp.actProp._path]) {
		                                    removeHelper = false;
		                                    break;
		                                }
		                            }
		                            if(removeHelper) {
		                                multipleProp.actProp._helperNodes[del](helperNode);
		                                //console.log('for helper is removed');
		                            }
		                        }
		                    }
		                }
		            }
		            if(!multiplePropNode[i]) {
		                multiplePropNode[i] = "dynamicNodes";
		                nodes = multipleProp.actProp._dynamicNodes;
		                if(nodes) {
		                    let index = nodes.indexOf(node);
		                    nodes.splice(index, 1);
		                    if(!nodes.length) {
		                        delete multipleProp.actProp._dynamicNodes;
		                    }
		                }
		            }
		        }
			}
		}
        if(!node.syntaxValue && !node.helperValue) {
            return;
        }
        let contextSwitchInfo;
        let isYieldContext;
        if(node._cx || (node.nodeType === 2 && node.ownerElement._cx)) {
            contextSwitchInfo = node._cx || node.ownerElement._cx;
            var contextSwitchArray = [];
            _LC.changeContext(contextSwitchInfo.node, contextSwitchArray, contextSwitchInfo );
        } else if(node.tagName === "LYTE-YIELD" && node._callee._cx) {
        	isYieldContext = true;
        	contextSwitchInfo = node._callee._cx;
        	var contextSwitchArray = [];
        	_LC.changeContext(contextSwitchInfo.node, contextSwitchArray, contextSwitchInfo, true);
        }
        let nodeValue;
        let dynamicValues = [];
        if(node.helperValue){
            nodeValue = node.helperValue;
                    let helperFunc = nodeValue;
                    let helperRetVal = this.processHelper({name : helperFunc.name, args : this.processArgs(this,helperFunc.args, dynamicValues, undefined, node)}, node);  
                    nodeValue = helperRetVal;
                    if(helperFunc.name === "unescape") {
                        let oldDynamicPosition = node.dynamicPositions;
                        let oldStartingNode = oldDynamicPosition.startingNode;
                        let oldChldLen = oldDynamicPosition.length;
                        while(oldChldLen > 1) {
                            let next = oldStartingNode.nextSibling;
                            oldStartingNode.remove();
                            oldStartingNode = next;
                            oldChldLen--;
                        }
                        let childLen = nodeValue.childNodes.length;
                        if(!childLen) {
                            nodeValue.appendChild(document.createTextNode(""));
                            childLen = 1;
                        }
                        let startingNode = nodeValue.childNodes[0];
                        oldStartingNode.replaceWith.apply(oldStartingNode,nodeValue.childNodes);
                        let obj = {startingNode : startingNode, length: childLen};
                        node.dynamicPositions = obj;
                        nodeValue = undefined;
                    }
        } else {
            let boundValue = node.syntaxValue;
            let path;
            if(boundValue.indexOf('.') !== -1 || boundValue.indexOf('[') !== -1) {
                path = boundValue;
                boundValue = boundValue.substring(0,boundValue.indexOf('.'));
            }
            let value = path ? _LC.get(this.component.data, path, dynamicValues) : this.component.data[boundValue]; 
            nodeValue = !typeof value === "boolean" && !typeof value === "number" ? (value? value : ""): value;
        }
		if(!(dynamicValues[0] instanceof Array)) {
        	dynamicValues = [dynamicValues];
		}
        
        if(multiplePropNode) {
        	for(var i=0;i<multiplePropNode.length;i++) {
        		if(multiplePropNode[i]) {
					let multipleProp = node._multipleProperty[i];
                    let prop = this.getProperty(dynamicValues[i][0]);
                    let totalProp = this.getProperty(dynamicValues[i][0].substring(0, dynamicValues[i][0].indexOf('.')));
                    let value = this.getData(dynamicValues[i][0].substring(0, dynamicValues[i][0].indexOf('.')));                            
	                if(multiplePropNode[i] === "dynamicNodes") {
//	                    if(!prop._dynamicNodes) {
//	                        defProp(prop, '_dynamicNodes', {
//	                            value: [],
//	                            enumerable: false, 
//	                            writable: true,
//	                            configurable: true
//	                        });
//	                    }
	                	makeArray(prop, "_dynamicNodes");
	                    prop._dynamicNodes.push(node);
	                } else {
	                	makeSet(prop, "_helperNodes");
	                    prop._helperNodes.add(
	                            multipleProp.helperNode
	                    );
	                    let dynamicProp = multipleProp.dynamicProp;
	                    dynamicProp[prop._path] ? dynamicProp[prop._path].push(node): (dynamicProp[prop._path] = []).push(node);
	                }
	                _LC.establishBindings(totalProp, value);
                    node._multipleProperty[i].actProp = prop;
                    node._multipleProperty[i].dynamicValues = dynamicValues[i];
	        	}
	        }
		}
        
        if(node.nodeType === 2) {
        	let parentNodes = [];
            let pN = node._parentNode ? node._parentNode :  node.ownerElement;
            if(pN.tagName === "TEMPLATE" && pN.getAttribute("is") === "component" && node.nodeName !== "component-name") {
            	let isKeepAlive = pN.hasAttribute("lyte-keep-alive");
            	if(isKeepAlive) {
            		for(var key in pN._renderedComponent) {
            			parentNodes.push(pN._renderedComponent[key]);
            		}
            	} else {
            		parentNodes.push(pN._renderedComponent[pN.getAttribute("component-name")]);
            	}
            }
            parentNodes.push(pN);
            for(let i=0;i<parentNodes.length;i++) {
            	let parentNode = parentNodes[i];
            	if(parentNode.set) {
                    parentNode.set(_LC.String.toCamelCase(node.nodeName), nodeValue, true);
                    } else {
                        parentNode._initProperties = parentNode._initProperties || {};
                        parentNode._initProperties[_LC.String.toCamelCase(node.nodeName)] = nodeValue;
                    }
                    if(parentNode.tagName === "LYTE-YIELD" && parentNode.component.data && node.nodeName && parentNode.component.data[node.nodeName] !== nodeValue /*parentNode.getAttribute("is") === "insertYield"*/) {
                        _LC.set(parentNode.component.data, _LC.String.toCamelCase(node.nodeName), nodeValue, undefined, parentNode);
                    }
                    parentNode._attributes = parentNode._attributes || {};
                    //!== "string"
                    if(_LC.isCustomElement(parentNode,true) && typeof nodeValue !== "string") {
                        if(node.ownerElement.nodeName === "TEMPLATE") {
                            if(node.helperValue) {
                            	if((node.ownerElement.getAttribute("is") ===  "for" && node.nodeName === "items") || (node.ownerElement.getAttribute("is") ===  "forIn" && node.nodeName === "object")) {
                            		let oldValue = node.ownerElement._attributes[node.nodeName];
                            		let newValue = nodeValue;
                            		_LC.removeSelectedBindingDeep(node.ownerElement._actualBinding, oldValue);
                            		if(newValue) {
                            			makeSet(newValue, "_bindings");
                            			newValue._bindings.add(node.ownerElement._actualBinding);
                            			_LC.establishBindings(node.ownerElement._actualBinding, newValue);
                            		}
                            		if(node.nodeName === "object") {
                            			_LC.removeSelectedBindingDeep(node.ownerElement._propBindingObject, oldValue);
                            		}
                            		//console.log("old Value ", oldValue, " new Value ", newValue);
                            	}
                            }
                            parentNode["__"+node.nodeName] = true;
                            parentNode.removeAttribute(node.nodeName);
                        } else {
                            //Needs revisiting
                            //parentNode.removeAttribute(node.nodeName);
                        }

                    } else {
                        if(typeof nodeValue === "boolean") {
                            parentNode._attributes = parentNode._attributes || {};
                            parentNode._attributes[node.nodeName] = nodeValue;
                            if(!nodeValue) {
                                parentNode.removeAttribute(node.nodeName);
                            } else {
                                parentNode.setAttribute(node.nodeName, "");
                            }
                        } else {
                            nodeValue = (nodeValue && typeof nodeValue === "object") ?((typeof Record != "undefined" && nodeValue instanceof Record) ? JSON.stringify(nodeValue.$.toJSON()) : JSON.stringify(nodeValue)) : (nodeValue== null || nodeValue == undefined) ? "" : nodeValue;
                            let locNodeVal = nodeValue === undefined ? "" : nodeValue;
                            // if(node.nodeName === "style") {
                            //     node.ownerElement.setAttribute("style",locNodeVal);
                            // } else {
                            //     node.nodeValue = locNodeVal;
                            // }
                            if(node instanceof Node) {
                                node.ownerElement.setAttribute(node.nodeName, locNodeVal);
                            } else {
                                node.nodeValue = locNodeVal;                              
                            }
                        }
                    }
                    parentNode._attributes[node.nodeName] = nodeValue;
                    if(/^(INPUT|TEXTAREA|SELECT)$/.test(parentNode.nodeName)) {
                        if(node.nodeName === "value") {
                             let val = (nodeValue === undefined) ? "" : nodeValue;
                             if(parentNode.value !== val) {
                                parentNode.value = val;
                             } 
                        } else if(node.nodeName === "checked") {
                            parentNode.checked = nodeValue;
                        }
                    }
                    let isStopped = parentNode._isStopped;
                    let result;
                    switch(parentNode.getAttribute("is")) {
                        case "for" :
                            this.updateForHelper(parentNode, {"type" : "update"});
                            break;
                        case "if" : 
                            result = this.updateSwitchHelper("if",parentNode, undefined, true, true);
                            break;
                        case "forIn" : 
                            this.updateForInHelper(parentNode , {"type" : "update"});
                            break;
                        case "switch" :
                            this.updateSwitchHelper("switch",parentNode, undefined, true, true);
                            break;
                        case "component" : 
                            if(node.nodeName === "component-name") {
                                this.updateDynamicComponent(parentNode, "update");    
                            }
                            break;
                        default:            
                    }
                	let handleBreakOptions;
                	if(isStopped &&  isStopped !== result) {
                		//console.log("new value is stopped");
                		if(!result) {
                			//console.log("new value is not stopped");
                			if(isStopped === "break") {
                				handleBreakOptions = "SM"
                			} else {
                				handleBreakOptions = "SS"
                			}
                		} else if(result === "break") {
                			handleBreakOptions = "MS";
                			//console.log("old value is continue and new value is break");
                		} else {
                			handleBreakOptions = "SM";
                			//console.log("old value is break and new value is continue");
                		}
                	} else if(result === "break") {
                		handleBreakOptions = "MS";
                		//console.log("old value not stopped and new value is break");
//                		this.handleBreak(parentNode._cx, "break");
                	} else if(result === "continue") {
                		handleBreakOptions = "SS";
                		//console.log("old value not stopped and new value is continue");
//                		this.handleBreak1(parentNode._cx , "continue");
                	}
                	if(handleBreakOptions) {
                		this.handleBreak(parentNode._cx, handleBreakOptions);
                	}
            }
        }
        else {
            node.nodeValue = nodeValue === undefined ? '' : nodeValue;
        }
        if(contextSwitchInfo) {
            _LC.removeContext(contextSwitchInfo.node, contextSwitchArray, contextSwitchInfo, isYieldContext);
        }
    }
    
    handleBreak(contextSwitchInfo, options) {
    	if(contextSwitchInfo) {
    		let forTemplate = contextSwitchInfo.node;
    		let breakIndex = contextSwitchInfo.itemIndex;
			let itemValue = forTemplate.getAttribute("item");
			let forContent = contextSwitchInfo.node._forContent;
			let endIndex = options[0] === "M" ? forContent.length : breakIndex + 1;
			for(let j=breakIndex;j<endIndex;j++) {
    			let currentForContent = forContent[j];
    			for(let i=0;i<currentForContent.length;i++) {
    				currentForContent[i].remove();
    				if(currentForContent[i]._forContent || currentForContent[i]._caseContent) {
    					this.removeHelpers(currentForContent[i]);
    				}
    			}	
    				forContent[j] = [];
    				_LC.removeSelectedBindingDeep(forTemplate._items[j].itemProperty, forTemplate._attributes.items[j]);
    				forTemplate._helpers[j] = [];
    				forTemplate._items[j] = {"_dynamicProperty" : {}, "itemProperty" : {}, "indexProperty": {}};
    		}
			let length = forTemplate._attributes.items.length;
			if(options[1] === "M") {
				this.updateForHelper(forTemplate, {firstIndex : breakIndex, secondIndex : length - breakIndex, "type" : "replace"}, undefined, {});
			} else {
				this.updateForHelper(forTemplate, {firstIndex : breakIndex, secondIndex : 1, "type" : "replace"}, undefined, {});
			}
    	}
    }
    
    createCustomEvent(eventName, parentNode, actObj){
        const customEvent = new CustomEvent(eventName);
        parentNode._actions[eventName] = customEvent;
        parentNode._actions[eventName].processAction = actObj;
    }

    isEmptyString(str){
        return (!(typeof str === "string") || str === "" );
    }

    processArgs(scope,args,dynamicValues,event, node){
        let helpers , j ;
        dynamicValues = dynamicValues || [];
        args = (Array.isArray(args)) ? Array.from(args) : args;
        for(let i=0; i<args.length; i++){
            if(!this.isEmptyString(args[i])) {
                if(args[i].startsWith("'") && args[i].endsWith("'")){
                    args[i] = args[i].substr(1,args[i].length-2);       
                } else {
                    args[i] = args[i].trim();
                    let dynamicVals = [];
                	if(args[i] === "event" && event) {
                		args[i] = event;
                	} else if(args[i] === "this" && node) {
                		args[i] = node.nodeType === 2 ? node.ownerElement : node;
                	} else {
                		args[i] = _LC.get(scope.component.data,args[i],dynamicVals);
                	}
                    dynamicValues.push(dynamicVals);
                }
            } else if(args[i] && args[i].type){
                this.internalHelpers(scope,args,i,dynamicValues, event, node);
            }
        }
        return args;
    }
    
    internalHelpers(scope,args,i,dynamicValues, event, node){
        //helperFunc = this.constructor.getHelper(args[i]);
        let helperFunc = args[i].value;
        let helperVal =  this.processHelper({"name" : helperFunc.name, "args" : this.processArgs(scope,helperFunc.args,dynamicValues, event, node)});
        args[i] = helperVal;
   }
    
    processHelper(helperFunc, node){
        let args = [];
        if(helperFunc.name === "method") {
            args.push(this, node);
        }
        if(helperFunc.name === "lbind"){
        	args.push(node.ownerElement);
        }
        if(!_LyteComponent.registeredHelpers[helperFunc.name]){
            _Lyte.error("LC003" , helperFunc.name);
            return;
	}
        return _LyteComponent.registeredHelpers[helperFunc.name].apply(this,args.concat(helperFunc.args));
    }
    
    getActionProperty(prop){
        let hostProp = this._properties;
        let value = (hostProp)?hostProp[prop].value:undefined;
        return value;
    }
    
    hasInternalBindings(content){
        return content.match(/[(]{1}[^)]+[)]{1}/);
    }
    
    getArgValues(argNames, properties) {
        let argValueArray = [];
        for(let i=0;i<argNames.length;i++) {
            argValueArray.push(properties[argNames[i]].value);
        }
        return argValueArray;
    }
    
    createEventListeners(node,actionType,actObj){
        let self = this;
        node._callee = this;
        if(globalDOMEvents.indexOf(actionType) == -1){
            let infoAttr = actionType.substr(2);
            let infoAttrVal = node.getAttribute(infoAttr);
            // var evntListener = function(event) {
        	// 	var toRemove;
            //     if(!window.event) {
            //         window.event = event;
            //         toRemove = true;
            //     }
            //     _LC.throwAction.call(self,self,actionType.substr(2),actObj, undefined, undefined, node, event);
            //     if(toRemove) {
            //         window.event = undefined;
            //     }
            // };
            if ((_LyteComponent.registeredComponents[node.localName] && !node.component) || (node.tagName === "TEMPLATE" && node.getAttribute("is") === "component")) {
            	node._toRegEvnts = node._toRegEvnts || {};
            	node._toRegEvnts[actionType.substr(2)] = {"listener" : globalEventHandler , "attrVal" : this.tagName.toLowerCase()+" => "+actObj.name};
            } else {
            	node.setAttribute(infoAttr, this.tagName.toLowerCase()+" => "+actObj.name);
            	//Event is not in capture phase because, in capture phase, multiple event listeners in hierarchy are called from parent to child (since registration is done in that order)
            	node.addEventListener(actionType.substr(2), globalEventHandler);
            }
            if(node.hasAttribute(actionType)){
            	node[actionType] = undefined;
            }
            node.removeAttribute(actionType);
        }
    }
    
    registerYields() {
        this._yields = {};
        let yields = this.querySelectorAll('template[is=registerYield],template[is=yield]');
        for(let i=0;i<yields.length;i++) {
            let parentYield;
            if(yields[i].hasAttribute("from-parent") && this._callee && (parentYield = this._callee._yields[yields[i].getAttribute("yield-name")]) ) {
                this._yields[yields[i].getAttribute("yield-name")] = parentYield;
            } else {
                this._yields[yields[i].getAttribute("yield-name")] = yields[i];
            }
        }
    }

    connectedCallback(){
        if(this.hasAttribute("lyte-rendered") || !_LyteComponent.registeredComponents[this.localName]) {
            return;
        }
        this.__h = [];
        this.__dc = [];
        let templateAttributes = this.constructor._templateAttributes;
        if(templateAttributes && templateAttributes.attr) {
        	for(let key in templateAttributes.attr) {
//        		let attr = templateAttributes.attr[i];
				let attr = templateAttributes.attr[key];
        		if((!this.hasAttribute(attr.name) && !this.component.data.hasOwnProperty(attr.name) ) || attr.globalEvent) {
        			if(attr.globalEvent) {
                        this._evBoundEvents = this._evBoundEvents || {};
                        let actionName = attr.helperInfo.args[0];
					    let boundName;
					    if(actionName.startsWith('"') || actionName.startsWith("'")) {
						boundName = actionName.substring(1, actionName.length - 1);
					    } else {
						//_Lyte.warn("Deprecation warning. Action name should be in quotes");
						boundName = actionName;
					    }
                        this._evBoundEvents[attr.name] = {"name" : boundName, "args" : attr.helperInfo.args, "from" : "component"};
                        let prevAttribute = this.getAttribute(attr.name);
                        let currentAttribute = this.constructor._template.getAttribute(attr.name);
                        //this.setAttribute("ev:"+attr.name, this.constructor._template.getAttribute(attr.name));
                        this.setAttribute(attr.name, currentAttribute + (prevAttribute ? " ; " + prevAttribute : ""));
                    } else {
                        attr.from = "component";
                        if(attr.staticValue) {
                            this.setAttribute(templateAttributes.attr[key].name, attr.staticValue);
                        } else {
                            this.setAttribute(templateAttributes.attr[key].name, "{{dummy}}");
							this.bindNode(this.attributes.getNamedItem(templateAttributes.attr[key].name), [], undefined, {}, templateAttributes.attr[key], undefined, undefined, true );
                        }
                    }
        			
        		}
        	}
        }
        for(let key in this._toRegEvnts) {
        	this.addEventListener(key, this._toRegEvnts[key].listener);
        	if(this.hasAttribute(key)) {
        		this.setAttribute(key, this.getAttribute(key) + " ; "+ this._toRegEvnts[key].attrVal);
        	} else {
        		this.setAttribute(key, this._toRegEvnts[key].attrVal);
        	}
        }
        this._toRegEvnts = {};
        let initialUnbound = _LC.unbound;
        let content =  this.afterConnected();
        if(!_LC.unbound) {
        	Lyte.establishObserverBindings.call(this,this.constructor._observers);
        	//this.establishObserverBindings();
        	makeSet(this.component.data, "_bindings");
        	this.component.data._bindings.add(this._properties);
        	_LC.establishBindings(this._properties, this.component.data);
        }

        _LC.unbound = initialUnbound;
        this.appendChild(content);
	    this.setAttribute("lyte-rendered", "");
        const customEvent = new CustomEvent("onReady");
        this.dispatchEvent(customEvent);
        this.callback("didConnect");
        this.onCallBack("didConnect");
    }
    onCallBack(name){
        let callbacks = this.constructor._callBacks[name];
        if(callbacks){
            for(let i=0;i<callbacks.length;i++){
                try{
                    callbacks[i].value.call(this.component);    
                } catch(e) {
                    _Lyte.error(e);
                }
                
            }
        }
    }
    callback(name){
        var func = this.component[name];
        var args;
        if(func){
            if(arguments.length > 1) {
                args = Array.from(arguments);
                args.splice(0,1)
            }
            try{
                func.apply(this.component, args || []);    
            } catch(e) {
                _Lyte.error(e);
            }
        }
    }
    establishObserverBindings() {
        let observers = this.constructor._observers;
        for(let i=0;i<observers.length;i++) {
            let props = observers[i].properties;
            for(let j=0;j<props.length;j++) {
                let actProp;
                let isArrayObserver = false;
                if(props[j].indexOf('.[]') !== -1) {
                    isArrayObserver = true;
                    actProp = this.getProperty(props[j].substring(0, props[j].indexOf('.[]')));
                } else {
                    actProp = this.getProperty(props[j]);
                }
                makeSet(actProp, "_observers");
                actProp._observers.add({callee : this, observer: observers[i], isArrayObserver : isArrayObserver});
            }
        }
    }
    removeBindings(properties, actualData) {
        var del = "delete";
        for(let i in properties) {
            let actData = actualData[i];
            if(actData && actData._bindings) {
                actData._bindings[del](properties[i]);
                //Error while trying to delete _bindings from actData when actData is of type Array
                /*  if(!actData._bindings.size) {
                    delete actData._bindings;
                } */
            }
            if(typeof properties[i] === "object" && actData) {
                this.removeBindings(properties[i], actData);
            }
        }
    }
    disconnectedCallback() {
        if(_LC.ignoreDisconnect || !this.component) {
	       return;
	    }
	    this.component._bindings = null;
        _LC.removeSelectedBindingDeep(this._properties, this.component.data);
//      _LC.removeBindings(this._properties, this.component);
        for(let key in this._properties) {
            this._properties[key] = {};
        }
        this.callback('didDestroy');
        this.onCallBack('didDestroy');
	var self = this;
	//setTimeout added to delay setting component to null until the LyteYield’s disconnectedCallbacks have been called. 
        setTimeout(function() {
            if(!self.component) {
                return;
            }
        self._cx = null;
        self._callee = null;
        self.component.$node = null;
        self.component.__data = null;
        self.component.data.__component__ = null;
        self.component.data = null;
        self.component = null;
        for(var i=0;i<self.__dc.length;i++) {
            var helper = self.__dc[i];
            //helper.remove();
            if(helper.hasAttribute("lyte-keep-alive")) {
                var objKeys = Object.keys(helper._renderedComponent);
                for(var j=0;j<objKeys.length;j++) {
                	let key = objKeys[j];
                	if(key !== helper._currentComponent) {
                        _LC.hDiv.appendChild(helper._renderedComponent[key]);
                        helper._renderedComponent[key].remove();
                        // helper._renderedComponent[key];
                    }
                }
            }
        }
        for(var i=0;i<self.__h.length;i++) {
            self.__h[i].remove();
        }
        self.__h = [];
        self.__dc = [];
        let yields = self._yields;
        for(var key in yields) {
            yields[key]._callee = null;
        }
	    self = null;
	 },0);
        this.constructor.activeInstances--;
    }
}

Function.prototype.on = function(){
    return {"type": "callBack", "value":(this.type === "observer") ? this.value:this , "properties":arguments, "observes":(this.type === "observer" ? this: undefined)}
}
Function.prototype.observes = function() {
    return {"type" : "observer", "value" : this, "properties" : arguments, "on":Function.prototype.on}
}
Function.prototype.computed = function() {
    return {"type" : "computed", "value" : this, "properties" : arguments}
}

 
let LyteComponent = {
        "customPropRegex" : "",
        "customPropHandlers" : [],
		"_registeredComponents" : {},
        "toBeRegistered" : [],
        "updateCustomCrmComponent" : function(def,customCrmComponent){
            for (let key in def) {
                if (def[key].type === "observer") {
                    customCrmComponent._observers.push(def[key]);
                } else if (def[key].type === "callBack") {
                    var props = def[key].properties;
                    for (var k = 0; k < props.length; k++) {
                        if (!customCrmComponent._callBacks[props[k]]) {
                            customCrmComponent._callBacks[props[k]] = [];
                        }
                        customCrmComponent._callBacks[props[k]].push(def[key]);
                    }
                    if (def[key].observes) {
                        customCrmComponent._observers.push(def[key].observes);
                    }
                } else {
                        customCrmComponent.component.prototype[key] = def[key];
                }
            }
            return def;
        },
        "dataFromMixin" : function(mixinsToBeUsed,actionsFromMixin,methodsFromMixin,newDefinition){
            var mixinslen = mixinsToBeUsed.length;
            for(let i=0; i<mixinslen ; i++) {
                for(let item in mixinsToBeUsed[i]){
                    if(item === "actions") {
                        Object.assign(actionsFromMixin, mixinsToBeUsed[i][item]);    
                    } else if(item === "methods") {
                        Object.assign(methodsFromMixin, mixinsToBeUsed[i][item]);    
                    } else {
                        newDefinition[item] = mixinsToBeUsed[i][item];
                    }
                }
            }
            return{"actionsFromMixin":actionsFromMixin,"methodsFromMixin":methodsFromMixin,"newDefinition":newDefinition}
          },
        "throwEvent" : function(eventName){
            let self = this.$node ? this.$node : this;
            const evt = self._actions? self._actions[eventName] : undefined; 
            let customArgs = [];        
            if(arguments.length > 1){        
                for(let i=1;i<arguments.length; i++){            
                    customArgs.push(arguments[i]);                
                    }        
                }
                //wait for release
                //eventName = _LC.String.toCamelCase(eventName);
                _LC.throwAction.call(self,self._callee,eventName,undefined,true,customArgs,self);
            if(this.$node) {
                self.dispatchEvent(evt? evt : new CustomEvent(eventName, {"detail" : customArgs}));
            }
        },
        //this and scope reference should be either a node or a route.
        "throwAction" : function(scope,eventName,actObj,isCustom,customArgs, node, event, hasHandled){
            let actionsObj;
            if(this._route && isCustom) {
                scope = _Lyte.Router.getRouteInstance(this._route);
                actionsObj = scope.actions || (scope.actions = {});
            } else if(this.routeName) {
                //process for the parent route and get the current component and proceed;
                let parentRoute = this.parent;
                if(parentRoute) {
                    if(parentRoute.component) {
                        scope = parentRoute.component;
                        actionsObj = scope.constructor._actions; 
                    } else {
                        scope = parentRoute;
                        actionsObj =  scope.actions || (scope.actions = {});            
                    }
                }
            } else if(scope){
                    actionsObj = scope.constructor._actions
            }
            if(!scope) {
                //Only warning is thrown because, we can have a eventListener for the dom directly. 
                if(!hasHandled) {
                    _Lyte.warn("Nothing handled the action "+ eventName + ".");    
                }
                return;
            }
            actObj = (actObj) ? actObj : this._actions && this._actions[eventName]? this._actions[eventName].processAction : void 0;     
            //wait for release
            /* 
            var dasherizedEventName = _LC.String.dasherize(eventName);
            actObj = (actObj) ? actObj : this._actions && this._actions[dasherizedEventName]? this._actions[dasherizedEventName].processAction : void 0;     
            */
            let args = customArgs ? customArgs : [];
            if(actObj){
            	var contextSwitchArray = [];
                if(node) {
                	_LC.adCx(node, contextSwitchArray);
                }
                args.splice.apply(args, [0,0].concat(this.processArgs(scope,actObj.args, undefined, event, node)));
                if(node) {
                	_LC.rmCx(node, contextSwitchArray);
                }
                if(actionsObj[actObj.name]){
                    if(!isCustom){  
                        //args.unshift(window.event);
                        let parent = node.parentNode;
                        let val = actionsObj[actObj.name].apply(this.component,args);
                        hasHandled = true;
                        if(val !== false && !event.cancelBubble){
                        	if(actObj.from && node.getAttribute(event.type) && node._boundEvents && node._boundEvents[event.type]) {
                        		let actions = node._callee.constructor._actions;
                        		let actObj = node._boundEvents[event.type];
                        		let cloneActObj = _Lyte.deepCopyObject(actObj);
		                        cloneActObj.args.shift();
                        		_LC.throwAction.call(node._callee,node._callee,event.type,cloneActObj, undefined, undefined, node, event, hasHandled);
                        	} else {
                                if(_LC.hasLyteEvents(node, eventName)) {
                                    let eventStopped = _LC.handleLyteEvents(node, event);
                                    val = eventStopped ? false : true;       
                                }
                                if(val === false) {
                                    return;
                                }
                        		if(_LC.isCustomElement(node)){
                        			scope = parent;
                        		}
                        		if(parent){
                                    let eventStopped;
                                    while(parent && (!parent.getAttribute(eventName) || parent.hasAttribute("disabled") ) && parent.tagName != "BODY"){
                        				if(_LC.hasLyteEvents(parent, eventName)) {
                                            eventStopped = _LC.handleLyteEvents(parent, event);
                                            if(eventStopped) {
                                                break;
                                            }
                                        }
                                        parent = parent.parentNode;
                        			}
                        			if(eventStopped || !parent || parent.tagName === "BODY"){
                        				return;
                        			}
                        			if(!parent._callee){
                        				parent._callee = parent.getCallee ? parent.getCallee(parent) : this.getCallee(parent);
                        			}
                        			if(parent && event.type === eventName && !event.cancelBubble){
                                       if(parent._evBoundEvents && parent._evBoundEvents[eventName]) {
                                           let actObj = parent._evBoundEvents[eventName];
                        		           let cloneActObj = _Lyte.deepCopyObject(actObj);
		                                   cloneActObj.args.shift();
                                           _LC.throwAction.call(parent,parent,eventName,cloneActObj,undefined,undefined,parent,event, hasHandled);  
                                       } else if(parent && parent._boundEvents && parent._boundEvents[eventName]) {
                                           let actObj = parent._boundEvents[eventName];
                        		           let cloneActObj = _Lyte.deepCopyObject(actObj);
		                                   cloneActObj.args.shift();
                                           _LC.throwAction.call(parent._callee,parent._callee,eventName,cloneActObj,undefined,undefined,parent,event, hasHandled);  
                                       }
                        			}
                        		}
                        	}
                        }
                    }            
                    else{                
                        actionsObj[actObj.name].apply(this._callee.component,args);
                        hasHandled = true;                                             
                    } 
                }
                else{
                    _Lyte.error("LC004" , actObj.name);
                }
            } else if(isCustom) {
                var eventsObj = actionsObj[eventName]  || actionsObj[_LC.String.toCamelCase(eventName)] || actionsObj[_LC.String.dasherize(eventName)];
                if(eventsObj) {
                    var scopeS = _LC.isCustomElement(scope) ? scope.component : scope;   
                    let val = eventsObj.apply(scopeS, args);
                    //let val = eventsObj.apply(_LC.isCustomElement(scope)? scope.component : scope, args);
                    hasHandled = true;
                    if(val !== false) {
                        _LC.throwAction.call(scope, scope._callee, eventName, actObj, isCustom, customArgs, undefined, undefined, hasHandled);
                    }
                } else {
                    _LC.throwAction.call(scope, scope._callee, eventName, actObj, isCustom, customArgs, undefined, undefined, hasHandled);
                }
            }
            
        },
        "isControlHelper" : function(ownerElement) {
        	return (ownerElement.tagName === "TEMPLATE" && ownerElement.getAttribute("is") && ownerElement.getAttribute("is") !== "component") || (ownerElement.hasAttribute("lyte-for") || ownerElement.hasAttribute("lyte-if") || ownerElement.hasAttribute("lyte-switch") || ownerElement.hasAttribute("lyte-forIn"));
        },
        "isCustomElement" : function(node, isTemplate) {
            return node.hasAttribute && ((( node.tagName ==="TEMPLATE" || node.hasAttribute("lyte-for") || node.hasAttribute("lyte-if") || node.hasAttribute("lyte-switch") || node.hasAttribute("lyte-forIn") ) && isTemplate )  || (node.nodeName && node.nodeName.indexOf('-') !== -1 && (_LyteComponent.registeredComponents[node.localName] || node.tagName === "LYTE-YIELD")));
        },
        "componentSet" : function(key, value, forceExecute, fromParent) {
            if(!forceExecute && this.get(key) === value) {
                _LC.clearError(this.data, key);
                return;
            }
            //temporary fix
            _LC.set(this.data, key, value, undefined, fromParent);
        },
        "componentGet" : function(key) {
            return key ? _LC.get(this.data, key) : this.data;
        },
        "nodeGet" : function(key) {
            return key ? this.component.get(key) : this.component.data;
        },
        "nodeSet" : function(key, value, fromParent) {
            this.component.set(key, value, undefined, fromParent);
        },
        "registerComponent" : function(componentName, definition, options) {
            if(_LyteComponent.registeredComponents[componentName]) {
            _Lyte.warn("Component "+ componentName + " already registered");
            return;
            }
            let customCrmComponent;
            if(_LC._registeredComponents[componentName]) {
            	customCrmComponent = _LC._registeredComponents[componentName];
            } else {
            	customCrmComponent = class extends customElementPrototype {}
                customCrmComponent._properties = {};
                customCrmComponent.activeInstances = 0;
                customCrmComponent._depthTemp = document.createElement("template");
                customCrmComponent.prototype.throwAction = this.throwAction;
            }
            customCrmComponent.prototype.get = this.nodeGet;
            customCrmComponent.prototype.set = this.nodeSet;
            options = options ? options : {};
            let mixinsToBeUsed = [];
            if (options.mixins) {
                options.mixins.forEach(function (element) {
                  if(Lyte.Mixin.exists(element)){
                    mixinsToBeUsed.push(Lyte.registeredMixins[element]);
                  }else{
                  Lyte.$.requiredMixins(element,componentName,"component");
                  }
                });
            }
            
            function Component() {}
            customCrmComponent.component = Component;
            Component.prototype.set = this.componentSet;
            Component.prototype.get = this.componentGet;
            Component.prototype.throwEvent = this.throwEvent;
            Component.prototype.executeMethod = _LC.executeMethod;
            Component.prototype.getData = _LC.componentGetData;
            Component.prototype.setData = _LC.componentSetData;
            Component.prototype.getMethods = _LC.componentGetMethods;
            Component.prototype.setMethods = _LC.componentSetMethods;
            customCrmComponent._mixins = options.mixins;
            let mixinslen = mixinsToBeUsed.length;

            let actionsFromMixin = {};
            let methodsFromMixin = {};
            let newDefinition = {};
            if(mixinsToBeUsed.length){
                _LC.dataFromMixin(mixinsToBeUsed,actionsFromMixin,methodsFromMixin,newDefinition);
            }
            definition = Object.assign(newDefinition, definition);
            customCrmComponent._actions = Object.assign({}, actionsFromMixin, definition.actions);
            customCrmComponent._template = definition._template;
            delete definition._template;
            customCrmComponent._dynamicNodes = definition._dynamicNodes;
            delete definition._dynamicNodes;
            customCrmComponent._templateAttributes = definition._templateAttributes;
            delete definition._templateAttributes;
            customCrmComponent._callBacks = {};
            customCrmComponent._observers = [];
//            let properties = definition.data ? definition.data : {};
            let properties = definition.data ? definition.data : undefined;
            let methods = Object.assign({},methodsFromMixin, definition.methods);
//            customCrmComponent._observedAttributes = Object.keys(properties);
            customCrmComponent._observedAttributes = definition._observedAttributes || [];
            customCrmComponent._observedMethodAttributes = definition._observedMethodAttributes || {};
            delete definition._observedAttributes;
            delete definition._observedMethodAttributes;
            delete definition.data;
            delete definition.methods;
            definition = _LC.updateCustomCrmComponent(definition,customCrmComponent);
            customCrmComponent._data = properties;
            customCrmComponent._methods = methods;
            customCrmComponent._registerComponent(componentName,customCrmComponent);
            _LyteComponent.registeredComponents[componentName] = true;
            if(!_LC._registeredComponents[componentName]) {
            	if (document.readyState === "complete" || document.readyState === "interactive") {     
            		// document is already ready to go
            		customElements.define(componentName, customCrmComponent);
            	}
            	else{
            		_LC.toBeRegistered.push({name:componentName, def: customCrmComponent});
            	}
            }
            if(!_LC._ie && customCrmComponent._depthTemp.content.childNodes.length) {
                customCrmComponent._depthTemp.setAttribute("data-id", "depthTemp_" + componentName);
                _LC.lyteComponentsDiv.appendChild(customCrmComponent._depthTemp);
            } else {
                delete customCrmComponent._depthTemp;
            }
            _LC._registeredComponents[componentName] = customCrmComponent;
        },
        "registerHelper" : function(name,helper){
            _LyteComponent.registeredHelpers[name] = helper;
        },
        "registerMixin" : function(name,mixin){
            _Lyte.Mixin.register.call(_Lyte, name, mixin);
        },
        "typeCast" : function(value, dataType, obj) {
        	if(value === null) {
        		return value;
        	}
        	try {
        		switch(dataType) {
            	case "string" : 
            		return typeof value === "object" ? JSON.stringify(value) : value.toString(); 	
            	break;
            	case "number" :
            		{
                    if(value == "") {
                        return undefined;
                    }
            		let val = +value;
            		if(isNaN(val)) {
            			throw "TypeCast exception";
            		} 
            		return val;
            		}
            	break;
            	case "array" : 
            	case "object" :
            		return JSON.parse(value);
            		break;
            	case "boolean" :
            		return ( (!value && value !== "") || value=== "false") ? false : true; 
            	break;
            	default : 
            		return value;
            	}
        	} catch(e) {
        		if(obj) {
        			obj.isError = true;
        		}
        		return value;
        	}
        	
        },
        "getDataType" : function(value) {
            var type = typeof value;
            if(type === "object") {
                if(value instanceof Array) {
                    return "array";
                }
            }
            return type;
        },
        "handleValidation" : function(object, property, value, component) {
            let error = _Lyte.validate(object, property, value, component);
            if(error) {
                _LC.set(component.data.errors, property, error);
                component.$node.callback("onError", property, error);
            } else {
                _LC.clearError(object, property);
            }
            return error;
        },
        "clearError" : function(data, property) {
            if(data.errors && data.errors[property]) {
                _Lyte.objectUtils(data.errors, "delete", property);
            }
        },
        "apdNode" : function(node, comp) {
            _LC.tDiv.appendChild(node);
            comp.__h.push(node);
        },
        "update":function(object, property, value, fromStore,oldValue,setterScope, actualProperty, fromParent){
        	let fromComponent = object.__component__;
        	let updateAttr = true;
        	if(!oldValue){
                oldValue = object[property];
                if(fromComponent && fromComponent.tagName !== "LYTE-YIELD") {
                	let dataType, dataDef = fromComponent.component.__data[property];
                	if(dataDef && (dataType = dataDef.type)) {
                		updateAttr = !dataDef.hideAttr;
                		if(dataType !== _LC.getDataType(value) && (value !== undefined || dataType === "boolean")) {
                			value = _LC.typeCast(value, dataType);
                		}
                	}
                	if(value === oldValue) {
                        _LC.clearError(object, property);
                        return;
                	}
                	let error = _LC.handleValidation(object, property, value, fromComponent.component);
                    if(error) {
                		return;
                	}
                }
            	//object[property] = value;
                if(!object.hasOwnProperty(property) && !(object instanceof Array)) {
                    _LC.oF(object, "add", property, value, true )
                } else {
                    object[property] = value;
                }
            }
            let toBeExecuted = fromComponent ? true : false;
            let dasherizedAttr = _LC.String.dasherize(property);
            if(fromComponent && actualProperty && ( (typeof value === "string" && fromComponent.getAttribute(dasherizedAttr) !==  value) || fromComponent.hasAttribute(dasherizedAttr) )) {
                 if((!_LC.customPropRegex.exec(property) || fromComponent.hasAttribute(dasherizedAttr) ) && updateAttr) {
                     if(typeof value === "object") {
                    	 let jsonString;
                         try{
                            jsonString = JSON.stringify(value);
                            fromComponent.attributes.getNamedItem(dasherizedAttr).__lyteIgnore = true;
                            fromComponent.setAttribute(dasherizedAttr, jsonString);
                         } catch(e) {

                         }
                     } else {
                    	 let attributeString = _LC.typeCast(value, "string");
                    	 if(fromComponent.getAttribute(dasherizedAttr) !== attributeString) {
                             let detAttr = fromComponent.attributes.getNamedItem(dasherizedAttr);
                             if(detAttr) {
                                 detAttr.__lyteIgnore = true;
                             }
                             attributeString = attributeString || "";
                             fromComponent.setAttribute(dasherizedAttr, attributeString);
                         }
                     }
                 }
            }
            if(value && typeof value !== "string" && typeof value !== "boolean" && typeof value !== "number" ) {
                //newValue is of type object 
                
                if(oldValue && typeof oldValue === "object" && oldValue._bindings) {
                    //Both oldValue and newValue are objects. 
                    if(!value._bindings) {
                        defProp(value, "_bindings", {
                            enumerable: false, 
                            writable: true, 
                            value : new Set(),
                            configurable: true
                        });
                    }
                    //for changing only child component
                    if(fromComponent && fromComponent.component.data === object && property.indexOf('.')=== -1) {
                        let bindings = fromComponent.getProperty(property);
                        this.removeSelectedBindingDeep(bindings, oldValue);
                        value._bindings.add(bindings);
                        this.establishBindings(bindings, value);
                        //For removing binding in the object due to forIn Helper ( actual object binding and not the _dynamicNodes binding).
                        if(bindings._forHelpers) {
                            let bindfor = bindings._forHelpers.toArrayLyte();
                            for(var i=0;i<bindfor.length;i++){
                                let item = bindfor[i];
                                if(item._propBindingObject) {
                                    this.removeSelectedBindingDeep(item._propBindingObject, oldValue);
//                                  value._bindings.add(item._propBindingObject);
//                                  this.establishBindings(item._propBindingObject, value);
                                }
                            }
                        }
                        this.affectChanges(bindings,undefined,oldValue,setterScope,object[property]);
                    } else {
                    	//To change only the bindings present in the object and not all the bindings present in the oldValue.
                    	if(object._bindings) {
                    		let oldbind = object._bindings.toArrayLyte();
                            for(let i=0; i<oldbind.length;i++){
                                let item = oldbind[i][property];
                                if(item) {
                                	this.removeSelectedBindingDeep(item, oldValue);
                                	value._bindings.add(item);
                                	this.establishBindings(item, value);
                                	//For removing binding in the object due to forIn Helper ( actual object binding and not the _dynamicNodes binding).
                                	if(item._forHelpers) {
                                		let forbind = item._forHelpers.toArrayLyte();
                                		for(let j=0;j<forbind.length;j++){
                                			let itemBinding = forbind[j];
                                			if(itemBinding._propBindingObject) {
                                				this.removeSelectedBindingDeep(itemBinding._propBindingObject, oldValue);
                                			}
                                		}
                                	}
                                	this.affectChanges(item,undefined,oldValue,setterScope,object[property]);
                                }
                            }
                    	}
                    
                    
                    }
                } else {
                    //newValue is object and oldValue is string. Hence establish bindings from oldValue's object and place it in the newValue. 
                    if(object._bindings) {
                    	makeSet(value, "_bindings");
                        let objbind = object._bindings.toArrayLyte();
                        for(let i=0;i<objbind.length;i++){
                            let item = objbind[i];
                            if(item[property]) {
                                value._bindings.add(item[property]);
                                this.establishBindings(item[property], value);
                                this.affectChanges(item[property],undefined,oldValue,setterScope,object[property]);
                            }
                        }
                    }
                }
            } else {
                //newValue is string
                
                if(oldValue && typeof oldValue === "object" && oldValue._bindings && object._bindings) {
                    //newValue is string and oldValue is object 
                    let objbind = object._bindings.toArrayLyte();
                    for(let i=0;i<objbind.length;i++){
                        let item = objbind[i];
                        if(item[property]) {
                            //oldValue._bindings.delete(item[property]);
                            //if(oldValue._bindings.size === 0) {
                            //  delete oldValue._bindings;
                            //  break;
                            //}
                        this.removeSelectedBindingDeep(item[property], oldValue);
                            if(item[property]._forHelpers) {
                                let forbind = item[property]._forHelpers.toArrayLyte();
                                for(let j=0;j<forbind.length;j++){
                                    let itemBinding =forbind[j];
                                    if(itemBinding._propBindingObject) {
                                        this.removeSelectedBindingDeep(itemBinding._propBindingObject, oldValue);
                                    }
                                }
                            }
                        }
                    }
                }
                
                //when newValue and oldValue , both are string, no need to change bindings. 
                if(object._bindings) {
                    let objbind = object._bindings.toArrayLyte();
                    for(let i=0;i<objbind.length;i++){
                        let item = objbind[i];
                        if(item[property]) {
                            this.affectChanges(item[property],undefined,oldValue,setterScope,object[property]);
                        }
                    }
                }
            }
            if(toBeExecuted && !fromParent && fromComponent._attributeDetails && fromComponent._callee) {
            	//let syntaxValue = fromComponent.getAttributeNode(property).syntaxValue;
            	let attrDetail = fromComponent._attributeDetails[_LC.String.dasherize(property)];
            	let syntaxValue;
            	if(attrDetail && attrDetail.isLbind) {
            		syntaxValue = attrDetail.dynamicValue;
            	}
            	if(syntaxValue) {
            		let contextSwitchArray;
            		if(fromComponent._cx) {
            			contextSwitchArray = [];
            			_LC.changeContext(fromComponent._cx.node, contextSwitchArray, fromComponent._cx )
            		}
            		let obj = _LC.getNew(fromComponent._callee.component.data, syntaxValue);
            		let exec = false;
            		if(obj.context === fromComponent._callee.component.data) {
            			if(fromComponent._callee._properties[obj.lastKey] && fromComponent._callee._properties[obj.lastKey].__fromComponent) {
            				exec = true;
            			}
            		} else {
            			exec = true;
            		}
            		//self.setData(this._lbind,this.value);
            		if(exec) {
            			_LC.set(obj.context, obj.lastKey, value);
            		}
            		if(contextSwitchArray) {
            			_LC.removeContext(fromComponent._cx.node, contextSwitchArray, fromComponent._cx )
            		}
            	}
            }
        },
        "getContentForIE" : function getContentForIE(content, constr) {
            var newlyCreated = false;
            if(typeof content === "string") {
                newlyCreated = true;
                var div = createElement("div");
                div.innerHTML = content;
                content = div.childNodes[0];
                constr.splitTextNodes(content);
            }
            if(content.getAttribute && content.getAttribute("depth")) {
                var itr = parseInt(content.getAttribute("depth"));
                content = _Lyte._ie ? content : (newlyCreated ? content.content : content.content.cloneNode(true));
                for(var i=0;i<itr;i++) {
                    content = content.childNodes[0];
                }
            }
            return content;
        },
        "replaceWithPf" : function(node1, node2) {
            if(_Lyte._rwpf) {
            	insertBefore(node1.parentNode,node2, node1);
                node1.remove();
            } else {
                node1.replaceWith(node2);
            }
        },
        "set" : function(object, property, value, fromStore, fromParent) {
            let lastIndex = -1;
            if(!(property instanceof Object) || !property){
                property = property+"";
                lastIndex = property.lastIndexOf('.');
            }
            let actualProperty = property;
            if(lastIndex !== -1) {
                let outerPropertyPath = property.substring(0, lastIndex);
                property = property.substring(lastIndex + 1);
                object = _LC.get(object, outerPropertyPath);
            }
            if(typeof property === "string" && object[property] === value) {
                if(object.__component__) {
                    _LC.clearError(object, property);
                } else if(_Lyte.isRecord(object)) {
                    store.$.clrRecErr(object.$, property);
                }
                return;
            }
            let oldValues = [];
            if(object._setterScope){
                var setterScope = object._setterScope;
            }
            actualProperty = actualProperty === property ? actualProperty : undefined
            if(property instanceof Object){
            	if(_Lyte.isRecord(object) && !fromStore) {
                        // for(let key in property){
                        //     if(Array.isArray(object[key])){
                        //         oldValues.push({key:key,oldValue:object[key].slice(0)});    
                        //     }
                        //     else{
                        //         oldValues.push({key:key,oldValue:object[key]});
                        //     }
                        // }
                        for(let key in property) {
                            let locValue = property[key];
                            let dataType = object.$.model.fieldList[key];
                            dataType = dataType ? dataType.type : undefined;
                            if(dataType && (locValue !== undefined || dataType === "boolean") && dataType !== _LC.getDataType(locValue)) {
                                property[key] = _LC.typeCast(locValue, dataType);
                            }
                        }
                        let record = store.$.setData(object.$, property);
                        if(record.$.isError){
                            return record;
                        }
                        // for(let i=0; i<oldValues.length; i++){
                        //     _LC.update(object,oldValues[i].key,object[oldValues[i].key],fromStore,(oldValues[i].oldValue === undefined)?null:oldValues[i].oldValue ,setterScope, actualProperty, fromParent);
                        // }
                } else {
                    //object[property] =  value;
                    for(let key in property){
                        //_LC.update(object,key,property[key],fromStore,undefined,setterScope, actualProperty, fromParent);
                        _LC.set(object,key,property[key],fromStore, fromParent);
                    }
                }
            }
            else{
                if(_Lyte.isRecord(object) && !fromStore) {
                    let old = object[property];
					let dataType = object.$.model.fieldList[property];
                    dataType = dataType ? dataType.type : undefined;
                    if(dataType && (value !== undefined || dataType === "boolean") && dataType !== _LC.getDataType(value)) {
                        value = _LC.typeCast(value, dataType);
                    }
                    let record = store.$.setData(object.$, property,value);
                    if(record.$.isError){
                        return record;
                    }
                    //Commented because update will happend when "set" is called from setData of store. 
                    //_LC.update(object,property,value,fromStore,(old === undefined) ? null : old,setterScope , actualProperty);    
                } else {
                    _LC.update(object,property,value,fromStore,undefined,setterScope,actualProperty, fromParent);
                }
            }
        },
        "adCx" : function(node, contextSwitchArray) {
        	let isYield = node.tagName === "LYTE-YIELD";
        	if(node._cx && (!isYield || node._cx.node.tagName !== "LYTE-YIELD")) {
        		_LC.changeContext(node._cx.node, contextSwitchArray, node._cx, isYield);
        	} else if(isYield && node._callee._cx) {
        		_LC.changeContext(node._callee._cx.node, contextSwitchArray, node._callee._cx, true);
        	}
        }, 
        "rmCx" : function(node, contextSwitchArray) {
        	let isYield = node.tagName === "LYTE-YIELD";
        	if(node._cx && (!isYield || node._cx.node.tagName !== "LYTE-YIELD")) {
        		_LC.removeContext(node._cx.node, contextSwitchArray, node._cx, isYield);
        	} else if(isYield && node._callee._cx) {
        		_LC.removeContext(node._callee._cx.node, contextSwitchArray, node._callee._cx, true);
        	}
        },
        "changeContext" : function(node, contextSwitchArray, contextSwitchInfo, proceedFurther) {
            if(!contextSwitchInfo) {
                return;
            }
            let isYield = node.tagName === "LYTE-YIELD";
            if(node._cx && (!isYield || node._cx.node.tagName !== "LYTE-YIELD")) {
                _LC.changeContext(node._cx.node, contextSwitchArray, node._cx, node.tagName === "LYTE-YIELD" || proceedFurther);
            } else if((node.tagName === "LYTE-YIELD" || proceedFurther) && node._callee && node._callee._cx) {
            	_LC.changeContext(node._callee._cx.node, contextSwitchArray, node._callee._cx);
            }
            if(isYield) {
                let insertYield = node._registerYield;
                let callee = insertYield._callee;
                if(callee && callee._cx) {
                    _LC.changeContext(callee._cx.node, contextSwitchArray, callee._cx);
                }
            }
            let indexValue, itemValue;
            if(contextSwitchInfo.type) {
                if(contextSwitchInfo.type === "for") {
                    indexValue = node.getAttribute("index");
                    itemValue = node.getAttribute("item");
                    if(node._items.length === 0) {
                        return;
                    }
                } else {
                    indexValue = node.getAttribute("key");
                    itemValue = node.getAttribute("value");
                    if(Object.keys(node._items).length === 0) {
                        return;
                    }
                }
                let callee = node._callee;
                let initialItemValue = callee.component.data[itemValue];
                let initialIndexValue = callee.component.data[indexValue];
                let initialItemProp = callee._properties[itemValue];
                let initialIndexProp = callee._properties[indexValue];
                 let items = contextSwitchInfo.type === "for" ? node._currentItems : node._currentObject;
                // let items = contextSwitchInfo.type === "for" ? node._attributes.items : node._attributes.object;
                callee.component.data[itemValue] = items[contextSwitchInfo.itemIndex];
                callee.component.data[indexValue] = contextSwitchInfo.itemIndex;
                callee._properties[itemValue] = node._items[contextSwitchInfo.itemIndex].itemProperty;
                callee._properties[indexValue] = {};
                let dummyObject = {"initialItemValue" : initialItemValue , "initialIndexValue" : initialIndexValue, "initialItemProp" : initialItemProp, "initialIndexProp" : initialIndexProp};
                contextSwitchArray.push(dummyObject);
            } else {
                //handling for yield
                let dummyObject = {};
                let callee = node._registerYield._callee;
                Object.keys(contextSwitchInfo.node._properties).forEach(function(key) {
                    dummyObject[key] = {};
                    dummyObject[key].value = callee.component.data[key];
                    dummyObject[key].property = callee._properties[key];
                    callee._properties[key] = contextSwitchInfo.node._properties[key];
                    callee.component.data[key] = contextSwitchInfo.node.component.data[key];
                }); 
                contextSwitchArray.push(dummyObject);
            }
        },
        "removeContext" : function(node, contextSwitchArray, contextSwitchInfo, proceedFurther) {
            if(!contextSwitchInfo) {
                return;
            }
            let isYield = node.tagName === "LYTE-YIELD";
            if(node._cx && (!isYield || node._cx.node.tagName !== "LYTE-YIELD")) {
                _LC.removeContext(node._cx.node, contextSwitchArray, node._cx, node.tagName === "LYTE-YIELD" || proceedFurther);
            } else if((node.tagName === "LYTE-YIELD" || proceedFurther) && node._callee && node._callee._cx) {
            	_LC.removeContext(node._callee._cx.node, contextSwitchArray, node._callee._cx)
            }
            if(isYield) {
                let insertYield = node._registerYield;
                let callee = insertYield._callee;
                if(callee && callee._cx) {
                    _LC.removeContext(callee._cx.node, contextSwitchArray, callee._cx);
                }
            }
            let indexValue, itemValue;
            if(contextSwitchInfo.type) {
                if(contextSwitchInfo.type === "for") {
                    indexValue = node.getAttribute("index");
                    itemValue = node.getAttribute("item");
                    if(node._items.length === 0) {
                        return;
                    }
                } else {
                    indexValue = node.getAttribute("key");
                    itemValue = node.getAttribute("value");
                    if(Object.keys(node._items).length === 0) {
                        return;
                    }
                }
                let callee = node._callee;
                let items = node._attributes.items;
                let removedObject = contextSwitchArray.shift();
                callee.component.data[itemValue] = removedObject.initialItemValue;
                callee.component.data[indexValue] = removedObject.initialIndexValue;
                callee._properties[itemValue] = removedObject.initialItemProp;
                callee._properties[indexValue] = removedObject.initialIndexProp;
            } else {
                let callee = node._registerYield._callee;
                let removedObject = contextSwitchArray.shift();
                Object.keys(contextSwitchInfo.node._properties).forEach(function(key) {
                    callee.component.data[key] = removedObject[key].value;
                    callee._properties[key] = removedObject[key].property;
                });
            }
        },
        "oF" : function() {
            let object = arguments[0];
            let functionName = arguments[1];
            let property = arguments[2];
            let newValue = arguments[3];
            let fromComponent = arguments[4];
            let fromStore = arguments[5];
            if(functionName === "add" && !fromComponent) {
            	_LC.set(object, property, newValue, fromStore);
            	return;
            }
            let options = {};
            options.type = functionName;
            options.property = property;
            if(!/^(add|delete)$/.test(functionName)) {
                _Lyte.error("LC005", functionName);
                return;
            }
            let bindings = object._bindings;
            if(functionName === "delete") {
            	_LC.set(object, property, undefined, fromStore);
            } else {
                object[property] = newValue;
            }
            if(bindings) {
                let bind = bindings.toArrayLyte();
                for(let i=0;i<bind.length;i++) {
                    let binding = bind[i];
                    let forHelpers = binding._forHelpers;
                    if(forHelpers) {
                    	let helperBind = forHelpers.toArrayLyte();
                        for(let j=0;j<helperBind.length;j++) {
                            let forHelper = helperBind[j];
                            let itemValue = forHelper.getAttribute("key");
                            //Need to check
//                            _LC.removeSelectedBindingDeep({[itemValue] :                        forHelper._items[property].itemProperty}, {[itemValue] : object[property]});
                        	let contextSwitchArray = [];
                            if(functionName === "add") {
                            	_LC.adCx(forHelper, contextSwitchArray);
                            }
                            forHelper._callee.updateForInHelper(forHelper, options);
                            if(functionName === "add") {
                                _LC.rmCx(forHelper, contextSwitchArray);
                            }
                        }
                    }
                }
            }
            if(functionName === "delete") {
                delete object[property];
            }
        },
        "aF" : function() {
            let array = arguments[0];
            let functionName = arguments[1];
            if(/^(replaceAt|removeAt|shift)$/.test(functionName) && !array.length) {
                _Lyte.warn(functionName + " operation cannot be performed on empty array");
                return;
            }
            let commArgs = arguments[2];
            switch(functionName) {
            case "replaceAt" : 
                {
                let index = parseInt(arguments[2]);
                if(index > array.length) {
                    _Lyte.warn("index provided for replaceAt is greater than array length");
                    return [];
                }
                //let args = Array.prototype.slice.call(arguments, 3);
                let args = arguments[3];
                if(!(args instanceof Array)) {
                    args = [args];
                }
                let deletedItems = array.splice.apply(array, [index, 1].concat(args));
                let options = {"firstIndex" : index, "secondIndex" : args.length, "type" : "replace"};
                //All references updated by now
                
                //remove binding from previous object
                if(array._bindings) {
                    let objbind = array._bindings.toArrayLyte();
                    for(let i=0;i<objbind.length;i++){
                        let item = objbind[i];
                        if(item._forHelpers) {
                            let helperbind = item._forHelpers.toArrayLyte();
                            for(let j=0;j<helperbind.length;j++){
                                let helper = helperbind[j];
                                /*if(helper.hasAttribute("unbound")) {
                            		continue;
                            	}*/
                                let finalIndex = index + deletedItems.length;
                                let itemValue = helper.getAttribute("item");
                                for(let i=index, j=0;i<finalIndex;i++,j++) {
                                    _LC.removeSelectedBindingDeep({[itemValue] : helper._items[i].itemProperty}, {[itemValue] : deletedItems[j]});
                                }
                                let contextSwitchArray = [];
                                _LC.adCx(helper, contextSwitchArray);
                                helper._callee.updateForHelper(helper, options);
                                _LC.rmCx(helper, contextSwitchArray);
                            }
                        }
                        for(let key in item) {
                            let parsedKey = parseInt(key);
                            if(!isNaN(parsedKey) && parsedKey >= options.firstIndex) {
                                let diff = parsedKey - options.firstIndex;
                                let oldObject;
                                if(diff <= options.thirdIndex) {
                                    oldObject = deletedItems[diff];
                                } else {
                                    oldObject = array[options.firstIndex - 1  + options.secondIndex + diff];
                                }
                                this.removeSelectedBindingDeep(item[key], oldObject);
                                if(item[key]._forHelpers) {
                                    let bindfor = item[key]._forHelpers.toArrayLyte();
                                    for(var j=0;j<bindfor.length;j++){
                                        let item1 = bindfor[j];
                                        if(item1._propBindingObject) {
                                            this.removeSelectedBindingDeep(item1._propBindingObject, oldObject);
//                                          value._bindings.add(item._propBindingObject);
//                                          this.establishBindings(item._propBindingObject, value);
                                        }
                                    }
                                }
                                if(array[parsedKey] && typeof array[parsedKey] === "object") {
                                	makeSet(array[parsedKey], "_bindings");
                                this.establishBindings({"dummy" : item[key]},{"dummy" : array[parsedKey]});
                                }
                                this.affectChanges(item[key]);
                            }
                        }
                    }
                }
                _LC.callArrayObservers(array,{type:"array",insertedItems:args,index:index});
                return deletedItems[0];
                }
                break;
            case "splice" : {
                let index = parseInt(arguments[2]);
                if(index > array.length) {
                    _Lyte.warn("index provided for replaceAt is greater than array length");
                    return [];
                }
                //let args = Array.prototype.slice.call(arguments, 3);
                let toBeDeleted = arguments[3];
                let args = arguments.length > 4 ? arguments[4] : [];
                if(!(args instanceof Array)) {
                    args = [args];
                }
                let deletedItems = array.splice.apply(array, [index, toBeDeleted].concat(args));
                let options = {"firstIndex" : index, "secondIndex" : args.length, "thirdIndex" : toBeDeleted, "type" : "splice"};
                //All references updated by now
                
                //remove binding from previous object
                if(array._bindings) {
                    let objbind = array._bindings.toArrayLyte();
                    for(let i=0;i<objbind.length;i++){
                        let item = objbind[i];
                        if(item._forHelpers) {
                            let helperbind = item._forHelpers.toArrayLyte();
                            for(let j=0;j<helperbind.length;j++){
                                let helper = helperbind[j];
                                /*if(helper.hasAttribute("unbound")) {
                            		continue;
                            	}*/
                                let finalIndex = index + deletedItems.length;
                                let itemValue = helper.getAttribute("item");
                                for(let i=index, j=0;i<finalIndex;i++,j++) {
                                    _LC.removeSelectedBindingDeep({[itemValue] : helper._items[i].itemProperty}, {[itemValue] : deletedItems[j]});
                                }
                                let contextSwitchArray = [];
                                _LC.adCx(helper, contextSwitchArray);
                                helper._callee.updateForHelper(helper, options);
                                _LC.rmCx(helper, contextSwitchArray);
                            }
                        }
                        for(let key in item) {
                            let parsedKey = parseInt(key);
                            if(!isNaN(parsedKey) && parsedKey >= options.firstIndex) {
                                let diff = parsedKey - options.firstIndex;
                                let oldObject;
                                if(diff <= options.thirdIndex) {
                                    oldObject = deletedItems[diff];
                                } else {
                                    oldObject = array[options.firstIndex - options.thirdIndex  + options.secondIndex + diff];
                                }
                                this.removeSelectedBindingDeep(item[key], oldObject);
                                if(item[key]._forHelpers) {
                                    let bindfor = item[key]._forHelpers.toArrayLyte();
                                    for(var j=0;j<bindfor.length;j++){
                                        let item1 = bindfor[j];
                                        if(item1._propBindingObject) {
                                            this.removeSelectedBindingDeep(item1._propBindingObject, oldObject);
//                                          value._bindings.add(item._propBindingObject);
//                                          this.establishBindings(item._propBindingObject, value);
                                        }
                                    }
                                }
                                if(array[parsedKey] && typeof array[parsedKey] === "object") {
                                	makeSet(array[parsedKey], "_bindings");
                                this.establishBindings({"dummy" : item[key]},{"dummy" : array[parsedKey]});
                                }
                                this.affectChanges(item[key]);
                            }
                        }
                    }
                }
                _LC.callArrayObservers(array,{type:'array',index:index,insertedItems:args, removedItems:deletedItems});
                return deletedItems;
            }
            break;
            case "push" : 
                {
                let toPush = arguments[2];
                if(!(toPush instanceof Array)) {
                    toPush = [toPush];
                }
                _LC.aF(array, 'insertAt', array.length, toPush);
                }
                break;
            case "pop" : 
                   return _LC.aF(array, 'remove', array.length -1)[0];
                break;
            case "shift" : 
            case "shiftObject" :
                  return _LC.aF(array, 'remove', 0)[0];
                  break;
            case "removeAt" : 
            case "remove" : 
                {
                let index = parseInt(arguments[2]);
                if(index > array.length) {
                    _Lyte.warn("index provided for removeAt is greater than array length");
                    return [];
                }
                let length = arguments[3] ? parseInt(arguments[3]) : 1;
                let options = {"firstIndex" : index, "secondIndex" : length, "type" : "remove"};
                let deletedItems = array.splice(index,length);
                if(array._bindings) {
                    let objbind = array._bindings.toArrayLyte();
                    for(let i=0;i<objbind.length;i++){
                        let item = objbind[i];
                        if(item._forHelpers) {
                            let helperbind = item._forHelpers.toArrayLyte();
                            for(let j=0;j<helperbind.length;j++){
                                let helper = helperbind[j];
                                /*if(helper.hasAttribute("unbound")) {
                            		continue;
                            	}*/
                                let finalIndex = index + deletedItems.length;
                                let itemValue = helper.getAttribute("item");
                                for(let i=index, j=0;i<finalIndex;i++,j++) {
                                    _LC.removeSelectedBindingDeep({[itemValue] : helper._items[i].itemProperty}, {[itemValue] : deletedItems[j]});
                                }
                                let contextSwitchArray = [];
                                _LC.adCx(helper, contextSwitchArray);
                                helper._callee.updateForHelper(helper, options);
                                _LC.rmCx(helper, contextSwitchArray);
                            }
                           }
                            for(let key in item) {
                            let parsedKey = parseInt(key);
                            if(!isNaN(parsedKey) && parsedKey >= options.firstIndex) {
                                let diff = parsedKey - options.firstIndex;
                                let oldObject;
                                if(diff < options.secondIndex) {
                                    oldObject = deletedItems[diff];
                                } else {
                                    oldObject = array[options.firstIndex - options.secondIndex + diff];
                                }
                                this.removeSelectedBindingDeep(item[key], oldObject);
                                if(item[key]._forHelpers) {
                                    let bindfor = item[key]._forHelpers.toArrayLyte();
                                    for(var j=0;j<bindfor.length;j++){
                                        let item1 = bindfor[j];
                                        if(item1._propBindingObject) {
                                            this.removeSelectedBindingDeep(item1._propBindingObject, oldObject);
//                                          value._bindings.add(item._propBindingObject);
//                                          this.establishBindings(item._propBindingObject, value);
                                        }
                                    }
                                }
                                if(array[parsedKey] && typeof array[parsedKey] === "object") {
                                	makeSet(array[parsedKey]._bindings);
                                this.establishBindings({"dummy" : item[key]},{"dummy" : array[parsedKey]});
                                }
                                this.affectChanges(item[key]);
                            }
                        }
                    }
                }
                _LC.callArrayObservers(array,{type:"array",removedItems:deletedItems,index:index});
                return deletedItems;
                }
                break;
            case "removeObject" : 
                    commArgs = [commArgs];
            case "removeObjects" :
                if(!(commArgs instanceof Array)) {
                    commArgs = [commArgs];
                }
                for(var i=0;i<commArgs.length;i++) {
                    let inde = array.indexOf(commArgs[i]);
                    if(inde !== -1) {
                       _LC.aF(array, 'removeAt', inde);                         
                    }
                }
                //_Lyte.arrayUtils(array, 'removeObject', actObj);
                //_Lyte.arrayUtils(array, 'removeObjects', []);
            break;
            case "unshift" : 
            case "unshiftObject" : 
            case "unshiftObjects" : 
                //_LC.aF.apply(_LC, [array, 'insertAt', 0].concat(Array.prototype.slice.call(arguments, 2)));
                {
                let toPush = arguments[2];
                if(!(toPush instanceof Array)) {
                    toPush = [toPush];
                }
                _LC.aF(array, 'insertAt', 0, toPush);
                }
                break;
            case "insertAt" : 
                {
                let index = parseInt(arguments[2]);
                //let args = Array.prototype.slice.call(arguments, 3);
                let args = arguments[3];
                let len = args.length;
                if(!(args instanceof Array)) {
                    args = [args];
                }
                for(let i=index;i>array.length;i--) {
                    args.unshift(undefined);
                    index--;
                }
                let options = {"firstIndex" : index, "secondIndex" : args.length, "type" : "insert"};
                array.splice.apply(array, [index, 0].concat(args));
                if(array._bindings) {
                    let arrbind = array._bindings.toArrayLyte();
                    for(let i=0;i<arrbind.length;i++){
                        let item = arrbind[i];
                        if(item._forHelpers) {
                            let forbind = item._forHelpers.toArrayLyte();
                            for(let j=0;j<forbind.length;j++){
                            	/*if(forbind[j].hasAttribute("unbound")) {
                            		continue;
                            	}*/
                                let helper = forbind[j];
                                let contextSwitchArray = [];
                                _LC.adCx(helper, contextSwitchArray);
                                helper._callee.updateForHelper(helper, options);
                                _LC.rmCx(helper, contextSwitchArray);
                            }
                        }
                        for(let key in item) {
                            let parsedKey = parseInt(key);
                            if(!isNaN(parsedKey) && parsedKey >= options.firstIndex) {
                                this.removeSelectedBindingDeep(item[key], array[parsedKey+options.secondIndex]);
                                if(item[key]._forHelpers) {
                                    let bindfor = item[key]._forHelpers.toArrayLyte();
                                    for(var j=0;j<bindfor.length;j++){
                                        let item1 = bindfor[j];
                                        if(item1._propBindingObject) {
                                            this.removeSelectedBindingDeep(item1._propBindingObject, oldObject);
//                                          value._bindings.add(item._propBindingObject);
//                                          this.establishBindings(item._propBindingObject, value);
                                        }
                                    }
                                }
                                if(array[parsedKey] && typeof array[parsedKey] === "object") {
                                	makeSet(array[parsedKey], "_bindings");
                                this.establishBindings({"dummy" : item[key]},{"dummy" : array[parsedKey]});    
                                }
                                this.affectChanges(item[key]);
                            }
                        }
                    }
                }
                let position = parseInt(arguments[2]);
		_LC.callArrayObservers(array,{type:"array",insertedItems:(!(arguments[3] instanceof Array)) ? [arguments[3]]: arguments[0].slice(position,position+len),index:position});
                }
                break;
            case "concat" : 
                //_LC.aF.apply(_LC, [array, 'insertAt',array.length].concat(arguments[2]));
                _LC.aF(array, 'insertAt', array.length, arguments[2]);
                break;
            default: 
                _Lyte.error("LC006" , functionName);
                return;
            }
        },
        "callArrayObservers" : function(array,args) {
            if(array._bindings) {
                let objbind = array._bindings.toArrayLyte();
                for(let i=0;i<objbind.length;i++){
                    let binding = objbind[i];
                    let path = objbind[i]._path;
                    if(binding._observers) {
                        let obsbind = binding._observers.toArrayLyte();
                        for(let j=0;j<obsbind.length;j++){
                            let observer = obsbind[j];
                            if(observer.isArrayObserver) {
                                if(args){
                                    args.item = path;
                                }
                                observer.observer.value.call( observer.callee && observer.callee.component ? observer.callee.component : array._setterScope? array._setterScope : window , args);                               }
                        }
                    }
                    if(binding.length) {
                        this.affectChanges(binding.length);
                    }
                }
            }
        },
        "establishUpdateBindings" : function(bindings, property, actualData) {
            let objbind = bindings.toArrayLyte();
            for(let i=0;i<objbind.length;i++){
                let item = objbind[i];
                if(item[property]) {
                    makeSet(actualData, "_bindings");
                    actualData._bindings.add(item[property]);
                    this.establishBindings(item[property], actualData);
                }

            }
        },
        "establishSelectedBinding" : function(property, actualData,node) {
            if(!property) {
                return;
            }
            let propName = property._path;
            let props = propName.split('.');
            let currentProp = node.getProperty(props[0]);
            let currentValue = actualData[props[0]];
            for(let i=0;i<props.length;i++) {
                if(!currentValue || typeof currentValue !== "object") {
                    break;
                } 
                makeSet(currentValue, "_bindings");
                    currentValue._bindings.add(currentProp);
                    currentProp = currentProp[props[i+1]];
                    currentValue = currentValue[props[i+1]];
            }
        },
        "establishBindings": function(properties, actualData) {
            if(properties._helperNodes) {
                let path = properties._path;
                let arr = properties._helperNodes.toArrayLyte();
                for(let s=0;s<arr.length;s++) {
                    let nodes = arr[s]._dynamicProperty ? arr[s]._dynamicProperty[path]: undefined;
                    if(nodes) {
                        for(let j=0;j<nodes.length;j++) {
                            let node = nodes[j];
                            let helper = node.ownerElement;
                            if(helper && helper.tagName === "TEMPLATE" && helper.getAttribute("is") === "for") {
                                if(helper._items) {
                                    let item = helper.getAttribute("item");
                                    for(let i=0;i<helper._items.length;i++) {
                                        let data = actualData[i];
                                        let item = helper.getAttribute("item");
                                        if(data) {
                                            if(typeof helper._items[i] === "object") {
                                                this.establishBindings(helper._items[i].itemProperty, {[item] : data});
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            for(let i in properties) {
                let actData = actualData[i];
                if(!actData || typeof actData === "string" || typeof actData === "number" || typeof actData === "boolean") {
                    if(!actualData._bindings) {
                    	makeSet(actualData, "_bindings");
                    }
                    actualData._bindings.add(properties);
                } else {
                    if(!actData._bindings) {
                    	makeSet(actData, "_bindings");
                    }
                    actData._bindings.add(properties[i]);
                    if(typeof properties[i] === "object") {
                        this.establishBindings(properties[i], actData);
                    }
                }
            }
        },
        "removeSelectedBindingDeep" : function(binding, actualData) {
            var del = "delete";
            if(!actualData) {
                return;
            }
            if(actualData._bindings) {
//                actualData._bindings[del](binding);
//                if(!actualData._bindings.size) {
//                    delete actualData._bindings;
//                }
            	deleteBindingCheckSize(actualData, "_bindings", binding);
            }
            for(let i in binding) {
                let actData = actualData[i];
                if(actData && actData._bindings) {
//                    actData._bindings[del](binding[i]);
//                    if(!actData._bindings.size) {
//                        delete actData._bindings;
//                    }
                    deleteBindingCheckSize(actData, "_bindings", binding[i]);
                }
                if(typeof binding[i] === "object" && actData) {
                    this.removeSelectedBindingDeep(binding[i], actData);
                }
            }
            if(binding._forHelpers) {
                let objbind = binding._forHelpers.toArrayLyte();
                for(let i=0;i<objbind.length;i++){
                    let fH = objbind[i];
                    if(fH.getAttribute("is") === "for") {
                        let item = fH.getAttribute("item");
                        let items = fH._attributes.items;
                        let itemCases = fH._items;
                        for(let i=0;i<itemCases.length;i++) {
                            this.removeSelectedBindingDeep(itemCases[i].itemProperty, items[i]);
                        }
                    } else {
                        if(fH._propBindingObject) {
                            if(actualData._bindings) {
//                                actualData._bindings[del](fH._propBindingObject);
//                                if(!actualData._bindings.size) {
//                                    delete actualData._bindings;
//                                }
                            	deleteBindingCheckSize(actualData, "_bindings", fH._propBindingObject);
                                this.removeSelectedBindingDeep(fH._propBindingObject, actualData);
                            }
                        }
                    }
                }
            }
        },
        "removeAllBindings" : function(properties, data) {
            var del = "delete";
            for(let key in properties) {
                if(data[key] && data[key]._bindings) {
//                    data[key]._bindings[del](properties[key]);
//                    if(!data[key]._bindings.size) {
//                        delete data[key]._bindings;
//                    }
                	deleteBindingCheckSize(data[key], "_bindings", properties[key]);
                }
                if(data[key] && typeof data[key] !== "string") {
                    _LC.removeAllBindings(properties[key], data[key]);
                }
            }
        },
        "affectChanges" : function(item, contextAlreadySwitched,oldValue,setterScope,newValue) {
            if(item._dynamicNodes) {
                for(let i=0;i<item._dynamicNodes.length;i++) {
                    item._dynamicNodes[i]._callee.updateNode(item._dynamicNodes[i], item._path);
                }
            }
            let propPath = item._path;
            if(item._helperNodes) {
                let nodes = [],itemHelperNodes = item._helperNodes.toArrayLyte();
                for(let s=0;s<itemHelperNodes.length;s++){
                    if(!item._helperNodes.has(itemHelperNodes[s])) {
                        continue;
                    }
                    if(itemHelperNodes[s].getAttribute("is") === "for" && itemHelperNodes[s]._items) {
                        let innerContextSwitchArray = [];
                        _LC.adCx(itemHelperNodes[s], innerContextSwitchArray);
                        let  indexValue = itemHelperNodes[s].getAttribute("index");
                        let itemValue = itemHelperNodes[s].getAttribute("item");
                        let callee = itemHelperNodes[s]._callee;
                        let initialItemValue = callee.component.data[itemValue];
                        let initialIndexValue = callee.component.data[indexValue];
                        let initialItemProp = callee._properties[itemValue];
                        let initialIndexProp = callee._properties[indexValue];
                        let items = itemHelperNodes[s]._attributes.items;
                        for(let i=0;i<itemHelperNodes[s]._items.length;i++) {
                            callee.component.data[itemValue] = items[i];
                            callee.component.data[indexValue] = i;
                            callee._properties[itemValue] = itemHelperNodes[s]._items[i].itemProperty;
                            if(itemHelperNodes[s]._items[i]._dynamicProperty[propPath]) {
                                nodes = itemHelperNodes[s]._items[i]._dynamicProperty[propPath];
                                for(let i=0;i<nodes.length;i++) {
                                    nodes[i]._callee.updateNode(nodes[i], propPath);
                                }
                            }
                        }
                        callee.component.data[itemValue] = initialItemValue;
                        callee.component.data[indexValue] = initialIndexValue;
                        callee._properties[itemValue] = initialItemProp;
                        callee._properties[indexValue] = initialIndexProp;
                        _LC.rmCx(itemHelperNodes[s], innerContextSwitchArray);                                    
                    } else if(itemHelperNodes[s].getAttribute("is") === "forIn" && itemHelperNodes[s]._items) {
                        let innerContextSwitchArray = [];
                        _LC.adCx(itemHelperNodes[s], innerContextSwitchArray);
                        let  indexValue = itemHelperNodes[s].getAttribute("key");
                        let itemValue = itemHelperNodes[s].getAttribute("value");
                        let callee = itemHelperNodes[s]._callee;
                        let initialItemValue = callee.component.data[itemValue];
                        let initialIndexValue = callee.component.data[indexValue];
                        let initialItemProp = callee._properties[itemValue];
                        let initialIndexProp = callee._properties[indexValue];
                        let object = itemHelperNodes[s]._attributes.object;
                        for(let key in itemHelperNodes[s]._items) {
                            callee.component.data[itemValue] = object[key];
                            callee.component.data[indexValue] = key;
                            callee._properties[itemValue] = itemHelperNodes[s]._items[key].itemProperty;
                            if(itemHelperNodes[s]._items[key]._dynamicProperty[propPath]) {
                                nodes = itemHelperNodes[s]._items[key]._dynamicProperty[propPath];
                                for(let i=0;i<nodes.length;i++) {
                                    nodes[i]._callee.updateNode(nodes[i], propPath);
                                }
                            }
                        }
                        callee.component.data[itemValue] = initialItemValue;
                        callee.component.data[indexValue] = initialIndexValue;
                        callee._properties[itemValue] = initialItemProp;
                        callee._properties[indexValue] = initialIndexProp;
                        _LC.rmCx(itemHelperNodes[s], innerContextSwitchArray);    
                    } else {
                        nodes = itemHelperNodes[s]._dynamicProperty[item._path] || [];
                        let contextSwitchArray = [];
                        if(nodes.length) {
                            _LC.adCx(itemHelperNodes[s], contextSwitchArray);
                            for(let i=0;i<nodes.length;i++) {
                                nodes[i]._callee.updateNode(nodes[i], item._path);
                            }
                            _LC.rmCx(itemHelperNodes[s], contextSwitchArray);    
                        }
                        
                    }
                }
            }
            if(item._observers) {
                let objbind = item._observers.toArrayLyte();
                for(let i=0;i<objbind.length;i++){
                    let observer = objbind[i];
                    observer.observer.value.call( observer.callee && observer.callee.component ? observer.callee.component : setterScope ? setterScope : window ,{type:"change",oldValue:oldValue,newValue:newValue, item: item._path});                      
                }
            }
            if(Array.isArray(item)){
                for(var i=0;i<item.length;i++){
                    for(let key in item[i]) {
                        this.affectChanges(item[i][key], true,oldValue?(oldValue[i]?oldValue[i][key]:oldValue[i]):oldValue,setterScope,newValue?(newValue[i]?newValue[i][key]:newValue[i]):newValue);
                    }
                }
            }
            else{
                for(let key in item) {
                    this.affectChanges(item[key], true,oldValue?oldValue[key]:oldValue,setterScope,newValue?newValue[key]:newValue);
                }
            }
        },
        "getDynamicData":function(context,dataArr){
            var self = this;
            dataArr.forEach(function(item,index){
                if(Array.isArray(item)){
                    if(context === undefined){
                        return undefined;
                    }
                    var inner = _LC.getDynamicData.call(self,self.component.data,item);
                    if(inner === undefined){
                        return undefined;
                    }
                    context = context[inner];
                }else{
                    if(context === undefined){
                        return undefined;
                    }
                    context = context[item];
                }
            });
            return context;
        },
        "get" : function(context, path, ac) {
            if(!ac) {
                ac = [];
            }
            try{
                let arr = path.match(/([^[\]]+|\[\])/g);
                let initialContext = context;
                ac.push(arr[0]);
                let locArr = arr[0].split('.'); 
                for(let k=0;k<locArr.length;k++) {
                    context = context[locArr[k]];
                }
                for(let i=1;i<arr.length;i++) {
                    let locVal = arr[i];
                    //this is context switching
                    if(locVal.startsWith(".")) {
                        //direct context switching
                        let locArr = locVal.substring(1).split('.');
                        for(let k=0;k<locArr.length;k++) {
                            context = context[locArr[k]];
                        }
                        ac[ac.length -1] = ac[ac.length - 1] + locVal;
                    } else if(locVal.startsWith("'") || locVal.startsWith('"') || !isNaN(locVal)) {
                        if(!isNaN(locVal)) {
                            ac[ac.length-1] = ac[0] + "." + locVal;
                        } else {
                            ac[ac.length-1] = ac[0] + "." + locVal.substring(1, locVal.length -1);
                        } 
                        context = context[locVal.substring(1, locVal.length -1)];
                    } else {
                        let length = ac.length;
                        let val = this.get(initialContext, locVal, ac);
                        ac[0] = ac[0] + "." + val;
                        context = context[val];
                    }
                    }
                return context;
            } catch(e) {
                return undefined;
            }
        },
        "getNew" : function(context, path) {
            try{
                let arr = path.match(/([^[\]]+|\[\])/g);
                let initialContext = context;
                let locArr = arr[0].split('.'); 
                if(arr.length < 2) {
                    if(locArr.length <2) {
                        return {"context": initialContext, "lastKey" : locArr[0]};
                    } else {
                        for(var k=0;k<locArr.length-1;k++) {
                            context = context[locArr[k]];
                        }
                        return {"context" : context, "lastKey" : locArr[k]}
                    }
                }
                for(let k=0;k<locArr.length;k++) {
                    context = context[locArr[k]];
                }
                for(var i=1;i<arr.length - 1;i++) {
                    let locVal = arr[i];
                    //this is context switching
                    if(locVal.startsWith(".")) {
                        //direct context switching
                        let locArr = locVal.substring(1).split('.');
                        for(let k=0;k<locArr.length;k++) {
                            context = context[locArr[k]];
                        }
                    } else if(locVal.startsWith("'") || locVal.startsWith('"') || !isNaN(locVal)) {
                        context = context[locVal.substring(1, locVal.length -1)];
                    } else {
                        let val = this.get(initialContext, locVal);
                        context = context[val];
                    }
                    }
                let lastKey = arr[i];
                if(lastKey.startsWith(".")) {
                    //direct context switching
                    let locArr = lastKey.substring(1).split('.');
                    let k=0
                    for(;k<locArr.length - 1;k++) {
                        context = context[locArr[k]];
                    }
                    lastKey = locArr[k];
                } else if(lastKey.startsWith("'") || lastKey.startsWith('"') || !isNaN(lastKey)) {
                    lastKey = lastKey.substring(1, lastKey.length -1);
                } else {
                    lastKey = this.get(initialContext, lastKey);
                }
                return {"context" : context, "lastKey" : lastKey };
            } catch(e) {
                return undefined;
            }
        },
        "componentGetData" : function(key){
            if(key) {
                return this.get(key);
            } else {
                return this.data;
            }
        },
        "componentSetData" : function(arg0, arg1) {
            if(typeof arg0 === "string") {
                this.set(arg0, arg1);
            } else if(arg0 instanceof Object) {
                for(let key in arg0) {
                    this.set(key, arg0[key]);
                }
            }
        },
        "componentGetMethods" : function(key) {
            if(key) {
                return this.methods[key];
            } else {
                return this.methods;
            }
        }, 
        "componentSetMethods" : function(arg0, arg1) {
            if(typeof arg0 === "string") {
                this.methods[arg0] = arg1;
            } else if(arg0 instanceof Object) {
                for(let key in arg0) {
                    this.methods[key] = arg0[key];
                }
            }
        },
        "render" : function(componentName, data, outlet) {
            if(componentName) {
                var component = createElement(componentName);
            } else {
                _Lyte.error("LC007");
                return;
            }
            if(data){
                component.setData(data);
            }
            if(outlet) {
                let actOutlet = document.querySelector(outlet);
                if(actOutlet) {
                    actOutlet.appendChild(component);
                    component._callee = component.getCallee ? component.getCallee(actOutlet) : undefined;
                } else {
                    _Lyte.error("LC008", outlet);
                }
            }
            return component;
        },
        "String" : {
            "upperCaseFirstLetter" : function(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            },
            "lowerCaseFirstLetter" : function(string) {
                return string.charAt(0).toLowerCase() + string.slice(1);
            }, 
            "toCamelCase" : function(string) {
                return string.replace(/(-\w)/g, function(m){return m[1].toUpperCase();})
            }, 
            "dasherize" : function(string) {
                return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
            }
        },
        "appendChild" : function(outlet, component) {
            _LC.ignoreDisconnect = true;
            outlet.appendChild(component);
            _LC.ignoreDisconnect = false;
        },
        "replaceWith" : function() {
            var argumentsArr = Array.from(arguments);
            var oldNode = argumentsArr.shift();
            _LC.ignoreDisconnect = true;
            var parentNode = oldNode.parentNode;
            for(var i=0,node;node=argumentsArr[i];i++) {
                parentNode.insertBefore(node,oldNode);
            }
            oldNode.remove();
            _LC.ignoreDisconnect = false;
        },	
        "insertBefore" : function(referenceNode, newNode, parentNode) {
            _LC.ignoreDisconnect = true;
            if(!parentNode) {
                if(!referenceNode) {
                    _Lyte.error("LC010");
                    _LC.ignoreDisconnect = false;
                    return;
                } else {
                    parentNode = referenceNode.parentNode;
                }
            }
            insertBefore(parentNode , newNode, referenceNode ? referenceNode : null);
            _LC.ignoreDisconnect = false;
        },
        "insertAfter" : function() {
            var argumentsArr = Array.from(arguments);
            var referenceNode = argumentsArr.shift();
            _LC.ignoreDisconnect = true;
            referenceNode.after.apply(referenceNode, argumentsArr);
            _LC.ignoreDisconnect = false;
        },
        "executeMethod" : function() {
            let args = Array.prototype.slice.call(arguments, 1);
            var methodName = _LC.String.toCamelCase(arguments[0]);
            if(!this.methods[methodName]) {
                _Lyte.error("LC009", methodName, this.$node.tagName);
                return;
            }
            return this.methods[methodName].apply(this, args);
        },
        "getProperData" : function(obj) {
            var dataType = obj.dataType;
            var attr = obj.attr;
            var newValue = obj.newValue;
            var tagName = obj.tagName;
            switch(dataType) {
            case "boolean" : 
                {
                    if(!newValue || newValue === "false") {
                        newValue= false;
                    } else {
                        newValue = true;
                    }
                }
                break;
            case "object" : 
                try{
                    newValue = JSON.parse(newValue);
                    if(!(newValue instanceof Object)) {
                        _Lyte.warn("data type of the value provided for attribute "+ attr + " of " + tagName + " is not valid");
                    }
                } catch(e) {
                    _Lyte.warn("attribute "+attr+ " is not a valid JSON string.");
                    return;
                }
                break;
            case "array":
                try{
                    newValue = JSON.parse(newValue);
                    if(!(newValue instanceof Array)) {
                        _Lyte.warn("data type of the value provided for attribute "+ attr + " of " + tagName + " is not valid");
                    }
                } catch(e) {
                    _Lyte.warn("attribute "+attr+ " is not a valid JSON string.");
                    return;
                }
                break;
            case "number":
                {
            let numValue = +newValue;
                if(newValue === numValue+"") {
                    newValue = numValue;
                } else {
                    _Lyte.warn("data type of the value provided for attribute "+ attr + " of " + tagName + " is not valid");
                    return;
                }
            }
                break;
            }
            obj.newValue = newValue;
            return true;
        }, 
        "cssEscape" : function(string) {
            if(string) {
                return string.replace(/['"]/g, "\\$&");    
            } else {
                return string;
            }
            
        }

}
_LyteComponent.chromeBugFix = function() {
    var version = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);;
    version = version ? parseInt(version[2], 10) : 0;
    if(version > 62) {
        this.chI = [];
        document.addEventListener("focus", function(event) {
            var target = event.target;
            if(target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.tagName === "DIV") {
                if(Lyte.Component.chI.indexOf(target) == -1) {
                    Lyte.Component.chI.push(target);
                }
            }
        } , true);
        this.chromeBugFix = function() {
            var tags = Lyte.Component.chI;
            var tagsL = tags.length;
            var toRemove = ["_callee", "_attributeDetails", "_attributes", "_removedAttributes", "_yields" , "_rA", "_cx"];//no i18n
            var toBeRemoved = [];
            var keepAliveInputs = [];
            document.querySelectorAll("[lyte-keep-alive]").forEach(function(item,index){
                for(var key in item._renderedComponent) {
                    keepAliveInputs.push.apply(keepAliveInputs, Array.from(item._renderedComponent[key].querySelectorAll("input")));
                }
            });
            for(var i= tagsL-1, item;item=tags[i];i--) {
                if((document.compareDocumentPosition(item) % 2) && (keepAliveInputs.indexOf(item) == -1)) {
                    tags.splice(i,1);
                    item.remove();
                    toBeRemoved.push(item);
                    item._rA = item._rA || [];
                    item._rA.forEach(function(remAttr) { //eslint-disable-line no-loop-func
                        remAttr.ownerElement = undefined;
                    });
                    toRemove.forEach(function(key) {//eslint-disable-line no-loop-func
                        item[key] = undefined;
                    });
                    Array.from(item.attributes).forEach(function(itemVal) {//eslint-disable-line no-loop-func
                        item.removeAttribute(itemVal.nodeName);
                    });
                }
            }
        }
        Lyte.addEventListener("afterRouteTransition", function() {
            Lyte.Component.chromeBugFix();
        });
        if(!Lyte.Router) {
            setInterval(function() {
                Lyte.Component.chromeBugFix();
            },300000)
        }
    }
}

let _LC = LyteComponent;
_LyteComponent.render = _LC.render;
//Change it in v3.0 - Remove from LyteComponent scope. 
_LyteComponent.insertBefore = _LC.insertBefore;
_LyteComponent.insertAfter = _LC.insertAfter;
_LyteComponent.replaceWith = _LC.replaceWith;
_LyteComponent.appendChild = _LC.appendChild;
_LC.tDiv = createElement("div");
_LC.tDiv.setAttribute("id", "dummy-templates-div");
_LC.tDiv.setAttribute("style", "display:none");
_LC.hDiv = createElement("div");
_LC.hDiv.setAttribute("id", "keep-alive-div");
_LC.hDiv.setAttribute("style", "display:none");
_LC.lyteComponentsDiv = createElement("div");
_LC.lyteComponentsDiv.setAttribute("id", "lyte-components-div");
_LC.dummyLyteComponentsDiv = createElement("div");
_LC.dummyLyteComponentsDiv.setAttribute("id", "dummy-lyte-components-div");

Set.prototype.toArrayLyte = function() {
    if(this.constructor.name === "Set"){
        return Array.from(this);
    }
    else{
        return Array.from(this._values);
    }
}
//_LC.registerListener(function() {
//  
//});

if(document.readyState === "complete" || document.readyState === "interactive") {
    onDomContentForLyte();
} else {
    document.addEventListener("DOMContentLoaded", function(e){
        onDomContentForLyte();
    },true);
}

// Compilation functions 

function getMustache(value){
    value=(value && typeof value === "string") ? value.trim() : value;
    if(/^{{(?=[\s]*[\w-_]+)/.test(value)){
        let arr = value.match(/{{[a-zA-Z0-9_.[\]()]*(?![\\])}}/g);
        if(arr && arr.length > 1){
            //console.log("length>1",value)
            return undefined;
        }
        if(!syntaxCheck(value) || !(/{{[^}]*?(?:(?:('|")[^\1]*?\1)[^}]*?)*}}$/.test(value))){ //'
            return undefined;
        }
        let dynamic = value.match(/[\w!@#$%^&*)(+=.,_-]+[\s]*[(]{0,1}(?:"([^"]|\\")*?"|'([^']|\\')*?'|[\w\s!@#$%^&*)([\]+=.,_-]*?)*?[)]{0,1}[\s]*(?=}})/g); //'
        if(dynamic && dynamic.length > 1){
            return undefined;
        }
        else{
            dynamic = (dynamic) ? dynamic[0].trim(): dynamic;                
        }
//        let dynamic = /[\w!@#\$%\^\&*\)\(+=.,_-]+(?:"([^"]|\\")*?"|'([^']|\\')*?'|[\w\s!@#\$%\^\&*\)\(\[\]+=.,_-]*?)*?(?=}}$)/.exec(value);
        return dynamic;
    }
    return undefined;
}

function getHelper(dynamicValue){
    let helperValue = /\((?:[^)]*|(?:(?:"(?:[^"\\]|\\.)*?")|(?:'([^'\\]|\\.)*?')|[\w\s!@#$%^&*)([\]+=.,_-]*?)*?)\)$/.exec(dynamicValue);
    if(helperValue){
        return getHelperInfo(dynamicValue,helperValue);
    }
    return undefined;
}


function getHelperInfo(dynamicValue, helperValue){
    let helperFunc = {};
    helperFunc.name = dynamicValue.substr(0,helperValue.index).replace(/\s/g,'');
    helperValue = (helperValue) ? helperValue[0].trim() : helperValue;
    let args = getHelperArgs(helperValue.substr(1,helperValue.length-2));
    if(args === false){
        return false;
    }
    helperFunc.args = args;
    return helperFunc;
}

function  getHelperArgs(str) {
    var stack = [],
        args = [],
        from = 0;
    var lastPushed = void 0;
    for (var _i86 = 0; _i86 < str.length; _i86++) {
        if (!stack.length && str.charAt(_i86) === ",") {
            var _toPush2 = str.substr(from, _i86 - from);
            _toPush2 = _toPush2.trim();
            if (_toPush2 && _toPush2.startsWith("\"") && _toPush2.endsWith("\"")) {
                _toPush2 = _toPush2.slice(1, -1);
                _toPush2 = "'" + _toPush2 + "'";
            }
            _toPush2 = getHelperArgValue(_toPush2);
            args.push(_toPush2);
            from = _i86 + 1;
        } else if (str.charAt(_i86) === "(") {
            if (stack[stack.length-1] != "'" && stack[stack.length-1] != "\"") {
                stack.push(str.charAt(_i86));
                lastPushed = str.charAt(_i86);
            }
        } else if (str.charAt(_i86) === ")") {
            if (stack[stack.length - 1] === "(") {
                stack.pop();
            }
        } else if (str.charAt(_i86) === "'" && str.charAt(_i86 - 1) !== "\\") {
            if (stack[stack.length - 1] === "'") {
                stack.pop();
            } else if (stack[stack.length - 1] !== "\"") {
                stack.push(str.charAt(_i86));
                lastPushed = str.charAt(_i86);
            }
        } else if (str.charAt(_i86) === "\"" && str.charAt(_i86 - 1) !== "\\") {
            if (stack[stack.length - 1] === "\"") {
                stack.pop();
                //                  str.replaceAt(i, "'");
            } else if (stack[stack.length - 1] !== "'") {
                stack.push(str.charAt(_i86));
                lastPushed = str.charAt(_i86);
                //                  str.replaceAt(i, "'");
            }
        }
    }
    if (stack.length) {
        return false;
    }
    var toPush = str.substr(from, str.length - from);
    toPush = toPush.trim();
    if (toPush && toPush.startsWith("\"") && toPush.endsWith("\"")) {
        toPush = toPush.slice(1, -1);
        toPush = "'" + toPush + "'";
    }
    try {
        toPush = getHelperArgValue(toPush);
    } catch (err) {
        //console.log("errr",err);
        return false;
    }
    args.push(toPush);
    return args;
};

function syntaxCheck(value){
    var stack = [],lastAdded;
    for(var i=0;i<value.length;i++){
        if(value[i] === "'"){
            if(lastAdded === "'" && value[i-1] !== "\\"){
                stack.pop();
                lastAdded = undefined;
            }
            else if(!stack.length){
                lastAdded = value[i];
                stack.push(lastAdded);
            }
        }
        else if(value[i] === "\""){
            if(lastAdded === "\"" && value[i-1] !== "\\"){
                stack.pop();
                lastAdded = undefined;
            }
            else if(!stack.length){
                lastAdded = value[i];
                stack.push(lastAdded);
            }
        }
    }
    if(stack.length){
        return false;
    }
    return true;
}

function doCompile(dynamicN, dynamicNodes, componentName, constr) {
    for(let j=0;j<dynamicNodes.length;j++) {
        let info = dynamicNodes[j], type = info.type, pos = info.position, helperInfo;
        let dynN = getDynamicNode(dynamicN,pos);
        switch(type) {
        case "text" : {
            let mustache = getMustache(dynN.nodeValue),dynamicValue,helperFunc;
            if(mustache){
                    helperFunc = getHelper(mustache);
            }   
            let dynamic = getMustache(dynN.nodeValue);
            if(helperFunc){
                 info.helperInfo = helperFunc;                 
            }
            else if(dynamic){
                //deepNodes.push({type: "text", position:deepN.slice(), dynamicValue: dynamic});
                info.dynamicValue = dynamic;
//              LN to do
//              deepNodes.push({type: "text", position:deepN.slice(), dynamicValue: getDynamicValue(dynamic)});                    
            }
        }
        break;
        case "attr" : {
            let add = false, toBeRemoved = [],toBeAdded = [];
            let node = dynN;
            let attr = info.attr = info.attr || {};
            for(let i=0;i<node.attributes.length;i++) {
                if(node.attributes[i].nodeValue.indexOf("{{") !== -1) {
                    let val = node.attributes[i].nodeValue;
                    let actValue = getMustache(val), actObj ;
                    if(actValue){
                        actObj = getHelper(actValue);  
                    }
                    else if(/{{.*}}/.test(val) && !(/\\{{.*}}/.test(val))){
                        actObj = splitMixedText(val);
                    }
                    if( actObj && (actObj.name === "action" || actObj.name === "method") && /^(onfocus|onfocusin|onfocusout|onresize|onscroll|onclick|ondblclick|onmousedown|onmouseup|onmousemove|onmouseover|onmouseout|onchange|onselect|onsubmit|onkeydown|onkeypress|onkeyup|oncontextmenu)$/.test(node.attributes[i].name)){
                            attr[node.attributes[i].name.substr(2)] = {name:node.attributes[i].name.substr(2),helperInfo: actObj, globalEvent: true};
                            let actArgs = _Lyte.deepCopyObject(actObj.args);
                            let actName = actArgs.splice(0,1)[0];
                            actName = actName.startsWith("'")? actName.replace(/'/g,''):  actName;
                            let actString = getArgString(actName, actArgs);
                            node.setAttribute(node.attributes[i].name.substr(2),componentName+" => "+ actString);
                            toBeRemoved.push(node.attributes[i].name);                            
                    }
                    else{
                        if(actObj || actValue) {
                            let attrToPush = {};
                            if(node.attributes[i].name.startsWith("lbind:")) {
                                toBeRemoved.push(node.attributes[i].name);
                                toBeAdded.push({"name" : node.attributes[i].name.substring(6), "value": node.attributes[i].nodeValue});
                                attrToPush.isLbind = true;
                                attrToPush.name = node.attributes[i].name.substring(6);
                            }
                            else {
                                attrToPush.name = node.attributes[i].name;
                            }
                            if(actObj) {
                                if(actObj.name === "lbind") {
                                    attrToPush.dynamicValue = actObj.args[0];
                                    attrToPush.isLbind = true;
                                }
                                else {
                                    attrToPush.helperInfo = actObj;
                                }
                            } 
                            else {
                                attrToPush.dynamicValue = actValue;
//                              LN to do
//                              attrToPush.dynamicValue = getDynamicValue(actValue);
                            }
                            add = true;
                            attr[attrToPush.name] = attrToPush;
                        }                  
                    }
                }
            }
            if(toBeRemoved.length){
                for(let i=0; i<toBeRemoved.length;i++){
                    node.removeAttribute(toBeRemoved[i]);
                }
            }
            if(toBeAdded.length) {
                for(let i=0;i<toBeAdded.length;i++) {
                    node.setAttribute(toBeAdded[i].name, toBeAdded[i].value);
                }
            }
        } 
        break;
        case "for" : 
        case "forIn" : 
        case "component" :
        case "registerYield" :{
            var actualTemplate = _Lyte._ie ? dynN : dynN.content;
                if(info.actualTemplate) {
                actualTemplate = _LC.getContentForIE(info.actualTemplate, constr);
                var depthTemp = type;
                if(!_Lyte._ie ) {
                	depthTemp = document.createElement("template");
                	depthTemp.setAttribute("is", type);
                	depthTemp.innerHTML = actualTemplate.innerHTML;
                	constr.splitTextNodes(depthTemp);
                    constr._depthTemp.content.appendChild(depthTemp);
                }
                if(dynamicNodes[j-1] && (dynamicNodes[j-1].position.toString() === dynamicNodes[j].position.toString())) {
            		dynamicNodes[j-1]._depthTemp = depthTemp;
            	} else {
            		dynamicNodes[j]._depthTemp = depthTemp;
            	}
                }
                  doCompile(actualTemplate, info.dynamicNodes, componentName, constr);
                  if(_Lyte._ms) {
                      if(info.actualTemplate) {
                          info.templateContent = actualTemplate.outerHTML;
                      } else {
                          info.templateContent = dynN.outerHTML;
                      }
                    dynN.innerHTML = "";  
                }
              }
        break;
        case "if" : 
        case "switch" : {
            var oldDyn = dynN;
            if(info.actualTemplate) {
                dynN = _LC.getContentForIE(info.actualTemplate, constr);
                var depthTemp = type;
                if(!_Lyte._ie ) {
                	depthTemp = document.createElement("template");
                	depthTemp.setAttribute("is", type )
                	depthTemp.innerHTML = dynN.innerHTML;
                	constr.splitTextNodes(depthTemp);
                    constr._depthTemp.content.appendChild(depthTemp);
                }
                if(dynamicNodes[j-1] && (dynamicNodes[j-1].position.toString() === dynamicNodes[j].position.toString())) {
            		dynamicNodes[j-1]._depthTemp = depthTemp;
            	} else {
            		dynamicNodes[j]._depthTemp = depthTemp;
            	}
            }
            var def = "default";
            if(_Lyte._ms) {
            	var cases = {};
                var defCase;
                var dynNchildNodes = _Lyte._ed ? dynN.content.childNodes : dynN.childNodes;
                for(var i=0;i<dynNchildNodes.length;i++) {
                  if(dynNchildNodes[i].tagName === "TEMPLATE"){
                	  if(dynNchildNodes[i].getAttribute("case")) {
                		  cases[dynNchildNodes[i].getAttribute("case")] = dynNchildNodes[i];
                	  } else if(dynNchildNodes[i].hasAttribute("default")) {
                		  defCase = dynNchildNodes[i];
                	  }
                  }
                }
                for (var key in info.cases) {
                    doCompile(_LC.getContentForIE(cases[key]), info.cases[key].dynamicNodes, componentName, constr);
                    cases[key].remove();
                    info.cases[key].templateContent = cases[key].outerHTML;
                }
                if (info[def].dynamicNodes) {
                    doCompile(_LC.getContentForIE(defCase), info[def].dynamicNodes, componentName, constr);
                    defCase.remove();
                    info[def].templateContent = defCase.outerHTML;
                }
            } else {
                var dynNContent = dynN.content || dynN;
            	for(let key in info.cases) {
                    var content = _LC.getContentForIE(dynNContent.querySelector("[case='"+_LC.cssEscape(key)+ "']"));
            		doCompile(content.tagName === "TEMPLATE" ? content.content : content, info.cases[key].dynamicNodes,componentName, constr);
            	}
            	if(info[def].dynamicNodes) {
                    var content = _LC.getContentForIE(dynNContent.querySelector("[default]"));
            		doCompile(content.tagName === "TEMPLATE" ? content.content : content, info[def].dynamicNodes,componentName, constr);
            	}
            	
            }
        }
        break;    
        }
    }
}

function getDynamicNode(content, positions){
    let dynamicN = content;
    for(var i=0; i<positions.length; i++){
        dynamicN = (dynamicN.tagName != "TEMPLATE" || _Lyte._ie) ? dynamicN.childNodes[positions[i]] : dynamicN.content.childNodes[positions[i]];
    }
    return dynamicN;
}

function splitMixedText(str){
    var stack=[], start=0, helper = { name:"concat", args: []};
    for(var i=0;i<str.length;i++){
      var j = i;
      if(str[i-1] !== "\\" && str[i] === "{" && str[++i] === "{"){
        stack.push('{{');
        helper.args.push("'"+str.substr(start,j-start)+"'");
        start = i + 1;
      }
      else if(str[i] === "}" && str[++i] === "}" && stack.length){
        stack.pop(start);
        var toPush = str.substr(start,j-start);
        var actObj = getHelper(toPush);  
        if(actObj){
            toPush = actObj;
        helper.args.push({type:"helper",value:toPush});
        }
        else{
            helper.args.push(toPush);
        }
        start = i + 1;
     }

    }
    if(start<str.length){
        helper.args.push("'"+str.substr(start,str.length-start)+"'");
    }
    return helper;
}

function getHelperArgValue(argValue) {
    switch(argValue) {
        case "undefined" : 
            return undefined
        case "true" : 
            return true;
        case "false" : 
            return false;
        case "null" : 
            return null;
        case "" : 
            return undefined;
        default :
            if(argValue && argValue.startsWith("'") && argValue.endsWith("'")){
                //escaping
                 argValue = argValue.replace(argValue.match(/\\\'/g),"'");
                 argValue = argValue.replace(argValue.match(/\\\"/g),'"');
                return argValue;
            }
            else if(/\([\w\s,')(]*/.test(argValue)) {
                return {"type" : "helper" , "value" : getHelper(argValue)}
            } else if(!isNaN(argValue)) {
                return parseInt(argValue);
            } else {
                return argValue;
            }
    }
}

function getArgString(name, array) {
    let retString;
    for(let i=0;i<array.length;i++) {
        if(array[i] && typeof array[i] === "object") {
            array[i] = getArgString(array[i].value.name, array[i].value.args);
        }
    }
    if(name) {
        retString = name +  "(" + array.toString() + ")";
    } else {
        retString = array.toString();
    }
    return retString;
}

_LC[registerHelperStr]("unbound",function(value){
     return value;
});

_LC[registerHelperStr]("action",function(parentNode,attrName,isCustom,actObj){
    if(isCustom){
        parentNode._actions = parentNode._actions? parentNode._actions : {};
        if(!parentNode._actions[attrName]){
            this.createCustomEvent(attrName, parentNode, actObj); 
            parentNode.removeAttribute(attrName);
        }
    }
    else{
        
        this.createEventListeners(parentNode,attrName,actObj);    
    }
});

_LC[registerHelperStr]("lbind",function(name){
	return this.getData(name);
});

_LC[registerHelperStr]("method", function(parentComponent, attributeNode, functionName) {
    var parentComponent = arguments[0];
    var attributeNode = arguments[1];
    var functionName = arguments[2];
    var self = arguments[0].component;
    var childComponent = attributeNode? attributeNode.ownerElement : null;
    var attributeName = arguments[1].nodeName;
    attributeNode = null;
    var args = Array.prototype.slice.call(arguments, 2);
    var newFunc = function() {
        let node = this.$node;
        let contextSwitchArray = [];
        _LC.adCx(node, contextSwitchArray);
        let processedArgs = this.$node.processArgs(this.$node._callee, args, [], undefined, this.$node);
        let functionName1 = processedArgs.splice(0,1)[0];
        _LC.rmCx(node, contextSwitchArray);
        let customArgs = Array.from(arguments);
        let mainArgs = processedArgs.concat(customArgs);
        if(self.methods[functionName1]) {
            return self.methods[functionName1].apply(self, mainArgs);
        }
        _Lyte.error("LC009", functionName, self.$node.tagName);
    }
    if(childComponent) {
        if(!childComponent.set) {
            childComponent.setMethods(_LC.String.toCamelCase(attributeName), newFunc);
        } else {
            childComponent.component.methods[_LC.String.toCamelCase(attributeName)] = newFunc;
        }
    } else {
        return newFunc;
    }
});

_LC[registerHelperStr]("unescape",function(value,additionalObject,userInstance){
    var divEle = document.createElement("div");
    if(userInstance && Object.keys(userInstance).length){
        if(additionalObject && Object.keys(additionalObject).length){
            Lyte.Security.addGlobalObject(userInstance,additionalObject);
            var clean = userInstance.sanitize(value);
            Lyte.Security.removeGlobalObject(userInstance,additionalObject);
        }
        else{
            var clean = userInstance.sanitize(value);
        }
    }
    else{
        if(additionalObject && Object.keys(additionalObject).length){
            Lyte.Security.addGlobalObject(Lyte.Security._ourSanitizerInstance_,additionalObject);
            var clean = Lyte.Security._ourSanitizerInstance_.sanitize(value);
            Lyte.Security.removeGlobalObject(Lyte.Security._ourSanitizerInstance_,additionalObject);
        }else{
            var clean = Lyte.Security._ourSanitizerInstance_.sanitize(value);
        }
    }
    divEle.innerHTML = clean;
    return divEle;
});

_LC[registerHelperStr]("escape",function(value,type){
    if(type == 'url'){
        return ZSEC.Encoder.encodeForHTMLAttribute(value);	
    }
    else if(type == 'js'){
        return ZSEC.Encoder.encodeForJavaScript(value);
    }
    else if(type == 'css'){
        return ZSEC.Encoder.encodeForCSS(value);	
    }
    else{
        return value;
    }
});

_LC[registerHelperStr]("debugger", function() {
    debugger;
});

_LC[registerHelperStr]("log", function() {
    console.log.apply(window, Array.from(arguments));
});

_LC[registerHelperStr]("ifEquals", function(arg1, arg2) {
    if(arg1 === arg2) {
        return true;
    } else {
        return false;
    }
});

_LC[registerHelperStr]("if", function(value, trueValue, falseValue) {
    if(value) {
        return trueValue;
    } else {
        return falseValue;
    }
});

_LC[registerHelperStr]("negate", function(arg1) {
    return !arg1;
});


_LC[registerHelperStr]("ifNotEquals", function(arg1, arg2) {
    if(arg1 === arg2) {
        return false;
    } else {
        return true;
    }
});

_LC[registerHelperStr]('concat',function(){
	var resp = '';
	var argLength = arguments.length;
	for(var i=0;i<argLength;i++){
		if(arguments[i] != undefined){
			resp += arguments[i];
		}
	}
	return resp;
});


defProp(HTMLElement.prototype, 'setData', {
    enumerable: false, 
    value : function(arg0, arg1) {
        this._initProperties = this._initProperties || {};
        if(typeof arg0 === "string") {
            this._initProperties[arg0] = arg1
        } else if(arg0 instanceof Object) {
            for(let key in arg0) {
                this._initProperties[key] = arg0[key];
            }
        }
    }
});

defProp(HTMLElement.prototype, 'setMethods', {
    enumerable: false, 
    value : function(arg0, arg1) {
        this._initMethods = this._initMethods || {};
        if(typeof arg0 === "string") {
            this._initMethods[arg0] = arg1
        } else if(arg0 instanceof Object) {
            for(let key in arg0) {
                this._initMethods[key] = arg0[key];
            }
        }
    }
});

_LC[registerHelperStr]('expHandlers',function(leftOperand,operator,rightOperand){
    if(operator == '++' ){
    	if(rightOperand == "postfix"){
    	   return (leftOperand++)
    	} else if(rightOperand == "prefix"){
    		return (++leftOperand)
    	}
    } else if(operator == "--"){
    	if(rightOperand == "postfix"){
    	   return (leftOperand--)
    	} else if(rightOperand == "prefix"){
    		return (--leftOperand)
    	}
    } else if((operator == "==")|| (operator == "===")){
    	return leftOperand == rightOperand;
    } else if((operator == "!=") || (operator =="!==")) {
        return leftOperand != rightOperand;
    } else if( operator == "&&") {
    	return leftOperand && rightOperand;
    } else if(operator == "||") {
    	return leftOperand || rightOperand;
    } else if(operator == "+" && rightOperand){
    	return leftOperand+rightOperand;
    } else if(operator == '-' && rightOperand){
    	return leftOperand-rightOperand;
    } else if(operator == '*'){
    	return leftOperand * rightOperand;
    } else if(operator == "/"){
    	return leftOperand / rightOperand;
    } else if(operator == "%"){
    	return leftOperand % rightOperand;
    } else if(operator == "<"){
    	return leftOperand < rightOperand;
    } else if(operator == ">") {
    	return leftOperand > rightOperand;
    } else if(operator == "<=") {
    	return leftOperand <= rightOperand;
    } else if(operator == ">=") {
    	return leftOperand >= rightOperand;
    } else if(operator == '|') {
        return leftOperand | rightOperand;
    } else if(operator == '&') {
        return leftOperand & rightOperand;
    }
    else if(operator == "!" ){
        return (!leftOperand)
    } else if(operator == "-" && !rightOperand){
        return (-leftOperand)
    } else if(operator == '=') {
        leftOperand = rightOperand;
        return leftOperand;
    } else if(operator == "+=") {
        return leftOperand += rightOperand;
    } else if(operator == '-=') {
        return leftOperand -= rightOperand;
    } else if(operator == "*=") {
        return leftOperand *= rightOperand;
    } else if(operator == '/=') {
        return leftOperand /= rightOperand;
    }
});


_LyteComponent.register("lyte-event-listener",{
            _template : "<template tag-name=\"lyte-event-listener\"></template>",
            _dynamicNodes : [],
            _observedAttributes : ['eventName'],
            init: function() {
                let self = this;
                let regId = _Lyte.addEventListener(this.get('eventName'), function() {
                    let args = Array.prototype.slice.call(arguments);
                    args.splice(0,0,'on-fire')
                    self.throwEvent.apply(self, args );
                });
                //this.set('regId', regId);
                this.regId = regId;
            },
            data: function(){
                return {
                    "eventName" : _Lyte.attr("string")
                }
            }, 
            didDestroy : function() {
                _Lyte.removeEventListener(this.regId);
            }
        });

_LyteComponent.registerCustomPropHandler("ltProp");

_LyteComponent.shouldIgnoreDisconnect = function() {
    return _LC.ignoreDisconnect;
}

_LyteComponent.addLyteEventListener = function(element, eventName, func, context) {
  element._lyteEvents = element._lyteEvents || {};
  element._lyteEvents[eventName] = element._lyteEvents[eventName] || []; 
  var ind = element._lyteEvents[eventName].push({"func" : func, "fromEventListener" : true, "context" : context});
  return eventName + "-" + ind; 
}

_LyteComponent.removeLyteEventListener = function(element, listenerId) {
    if(!listenerId) {
        _Lyte.error("No listenerId provided");
        return;
    }
    var split = listenerId.split('-');
    var eventName = split[0];
    var index = parseInt(split[1]);
    if(!element._lyteEvents || !element._lyteEvents[split[0]] || isNaN(index)) {
        _Lyte.error("Invalid listenerId / listener is not available");
        return;
    }
    element._lyteEvents[split[0]][split[1] - 1] = {};
}

_LyteComponent.throwEvent = _LC.throwEvent;

_LC.hasLyteEvents = function(element, eventName) {
    if(element._lyteEvents && element._lyteEvents[eventName]) {
        return true;
    } else {
        return false;
    }
}

_LC.handleLyteEvents = function(element, event) {
    var funcs = element._lyteEvents[event.type];
    var ret;
    var eventStopped;
    for(var i=0;i<funcs.length;i++) {
        if(funcs[i].func) {
            ret = funcs[i].func.call(funcs[i].context ? funcs[i].context : window, event);
            if(ret === false || event.cancelBubble) {
                eventStopped = true;
                break;
            } 
        }
    }
    if(eventStopped) {
        event.stopPropagation();
    }
    return eventStopped;
}

Object.defineProperty(window, "LyteComponent", {
	get : function() {
		_Lyte.warn("Usage of LyteComponent is deprecated. Use Lyte.Component instead");
		return LyteComponent;
	}
})
_LyteComponent.chromeBugFix();
}(window))

Lyte.$.requiredMixins.component = function (mix, compDetails){
var mixinsToBeUsed=[];
var actionsFromMixin = {}; 
var methodsFromMixin = {};
var newDefinition = {};
  mixinsToBeUsed.push(mix);
  compDetails.forEach(ele => {
  var componentName = ele;
  var customCrmComponent = LyteComponent._registeredComponents[componentName];
        if(mixinsToBeUsed.length){
            LyteComponent.dataFromMixin(mixinsToBeUsed,actionsFromMixin,methodsFromMixin,newDefinition);
        }
        customCrmComponent._actions = Object.assign(customCrmComponent._actions, actionsFromMixin);
        var methods = Object.assign(customCrmComponent._methods, methodsFromMixin);
        delete newDefinition.methods;
        LyteComponent.updateCustomCrmComponent(newDefinition,customCrmComponent);
        customCrmComponent._methods = methods;
        LyteComponent._registeredComponents[componentName] = customCrmComponent; 
    });
  }
//security
Lyte.Security.addGlobalObject = function(instanceObj,additionalObj){
    for (var property in additionalObj) {
            if(Array.isArray(additionalObj[property])){
                additionalObj[property].forEach(function(item){
                    if(instanceObj["_"+property].indexOf(item) == -1){
                        instanceObj["_"+property].push(item);
                    }
                });
        }
    }
}
Lyte.Security.removeGlobalObject = function(instanceObj,additionalObj){
    for (var property in additionalObj) {
        if(Array.isArray(additionalObj[property])){
            additionalObj[property].forEach(function(item){
                var index = instanceObj["_"+property].indexOf(item);
                if(index != -1){
                    instanceObj["_"+property].splice(index,1);
                }
            });
    }
    };
}