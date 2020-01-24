if(window.ZSEC||Object.defineProperty(window,"ZSEC",{value:{},writable:!1,configurable:!1,enumerable:!1}),Object.defineProperty(ZSEC,"util",{value:{},writable:!1,configurable:!1,enumerable:!1}),function(){if(!Object.defineProperty||!function(){try{return Object.defineProperty({},"x",{}),!0}catch(e){return!1}}()){var e=Object.defineProperty;Object.defineProperty=function(t,r,o){if(e)try{return e(t,r,o)}catch(e){}if(t!==Object(t))throw TypeError("Object.defineProperty called on non-object");return Object.prototype.__defineGetter__&&"get"in o&&Object.prototype.__defineGetter__.call(t,r,o.get),Object.prototype.__defineSetter__&&"set"in o&&Object.prototype.__defineSetter__.call(t,r,o.set),"value"in o&&(t[r]=o.value),t}}}(),ZSEC.util.defineProperty=function(e,t,r,o,n,i,a){if(o||!(t in e))return n=1==n,i=1==i,a=1==a,Object.defineProperty(e,t,{value:r,writable:n,configurable:i,enumerable:a})},ZSEC.util.defineProperty(ZSEC,"version","4.0",!0),ZSEC.util.defineProperty(ZSEC,"constants",ZSEC.constants||{},!0),ZSEC.util.ArrayIndexOf=Array.prototype.indexOf,ZSEC.util.ArrayIndexOf||(ZSEC.util.ArrayIndexOf=function(e){if(void 0===this||null===this)throw TypeError();var t=Object(this),r=t.length>>>0;if(0===r)return-1;var o=0;if(arguments.length>0&&(o=Number(arguments[1]),isNaN(o)?o=0:0!==o&&o!==1/0&&o!==-1/0&&(o=(o>0||-1)*Math.floor(Math.abs(o)))),o>=r)return-1;for(var n=o>=0?o:Math.max(r-Math.abs(o),0);n<r;n++)if(n in t&&t.charAt(n)===e)return n;return-1}),String.prototype.codePointAt)ZSEC.util.defineProperty(String.prototype,"codePointAt",String.prototype.codePointAt,!0);else{var codePointAt=function(e){if(null==this)throw TypeError();var t=String(this),r=t.length,o=e?Number(e):0;if(o!=o&&(o=0),!(o<0||o>=r)){var n,i=t.charCodeAt(o);return i>=55296&&i<=56319&&r>o+1&&(n=t.charCodeAt(o+1))>=56320&&n<=57343?1024*(i-55296)+n-56320+65536:i}};ZSEC.util.defineProperty(String.prototype,"codePointAt",codePointAt,!1)}if(String.fromCodePoint)ZSEC.util.defineProperty(String,"fromCodePoint",String.fromCodePoint,!0);else{var stringFromCharCode=String.fromCharCode,floor=Math.floor,fromCodePoint=function(){var e,t,r=[],o=-1,n=arguments.length;if(!n)return"";for(var i="";++o<n;){var a=Number(arguments[o]);if(!isFinite(a)||a<0||a>1114111||floor(a)!=a)throw RangeError("Invalid code point: "+a);a<=65535?r.push(a):(e=55296+((a-=65536)>>10),t=a%1024+56320,r.push(e,t)),(o+1==n||r.length>16384)&&(i+=stringFromCharCode.apply(null,r),r.length=0)}return i};ZSEC.util.defineProperty(String,"fromCodePoint",fromCodePoint,!1)}!function(){var e={log:function(e){if(navigator&&navigator.userAgent){var t=navigator.userAgent.match(/opera|chrome|safari|firefox|msie|trident(?=\/)/i);if(t&&t[0].search(/trident|msie/i)<0)return window.console.log("%cSTOP!","color:red;font-size:xx-large;font-weight:bold;"),void window.console.log("%cThis is a browser feature intended for developers. Do not enter or paste code which you don't understand. It may allow attackers to steal your information or impersonate you.\nSee https://en.wikipedia.org/wiki/Self-XSS for more details","font-size:large;")}window.console.log("STOP!\nThis is a browser feature intended for developers. Do not enter or paste code which you don't understand. It may allow attackers to steal your information or impersonate you.\nSee https://en.wikipedia.org/wiki/Self-XSS for more details")}};ZSEC.util.defineProperty(ZSEC,"Console",e,!0,!1,!1,!0)}(),ZSEC.Console.log();function addToSet(e,t){for(var r=t.length;r--;)e[t[r]]=!0;return e}function addObjsToSet(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=!0);return e}function removeFromSet(e,t){var r={};for(var o in e)e.hasOwnProperty(o)&&o!=t&&(r[o]=e[o]);return r}!function(e){window.DOMPurify=e(window)}(function e(t){var r=function(t){return e(t)};if(r.version="0.8.5",r.removed=[],!t||!t.document||9!==t.document.nodeType)return r.isSupported=!1,r;var o=t.document,n=o,T=t.DocumentFragment,i=t.HTMLTemplateElement,a=t.Node,A=t.NodeFilter,_=t.NamedNodeMap||t.MozNamedAttrMap,E=t.Text,O=t.Comment,L=t.DOMParser;if("function"==typeof i){var s=o.createElement("template");s.content&&s.content.ownerDocument&&(o=s.content.ownerDocument)}var l=o.implementation,d=o.createNodeIterator,u=o.getElementsByTagName,c=o.createDocumentFragment,R=n.importNode,S={};r.isSupported=void 0!==l.createHTMLDocument&&9!==o.documentMode;var f=function(e,t){for(var r=t.length;r--;)"string"==typeof t[r]&&(t[r]=t[r].toLowerCase()),e[t[r]]=!0;return e},p=null,B=f({},[]),m=null,N=f({},[]),D=null,I=null,h=!0,U=!0,v=!1,b=!1,y=!1,g=/\{\{[\s\S]*|[\s\S]*\}\}/gm,G=/<%[\s\S]*|[\s\S]*%>/gm,F=!1,w=!0,M=!1,C=!1,P=!1,W=!0,J=!0,x=f({},["audio","head","math","script","svg","video","style"]),H=f({},["audio","video","img","source","image"]),k=f({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Y=null,z=o.createElement("form"),V=function(e){"object"!=typeof e&&(e={}),p="ALLOWED_TAGS"in e?f({},e.ALLOWED_TAGS):B,m="ALLOWED_ATTR"in e?f({},e.ALLOWED_ATTR):N,D="FORBID_TAGS"in e?f({},e.FORBID_TAGS):{},I="FORBID_ATTR"in e?f({},e.FORBID_ATTR):{},h=!1!==e.ALLOW_ARIA_ATTR,U=!1!==e.ALLOW_DATA_ATTR,v=e.ALLOW_UNKNOWN_PROTOCOLS||!1,b=e.SAFE_FOR_JQUERY||!1,y=e.SAFE_FOR_TEMPLATES||!1,F=e.WHOLE_DOCUMENT||!1,M=e.RETURN_DOM||!1,C=e.RETURN_DOM_FRAGMENT||!1,P=e.RETURN_DOM_IMPORT||!1,w=!1!==e.FORCE_BODY,W=!1!==e.SANITIZE_DOM,J=!1!==e.KEEP_CONTENT,y&&(U=!1),C&&(M=!0),e.ADD_URI_SAFE_ATTR&&f(k,e.ADD_URI_SAFE_ATTR),J&&(p["#text"]=!0),Object&&"freeze"in Object&&Object.freeze(e),Y=e},j=function(e){r.removed.push({element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=""}},Q=function(e,t){r.removed.push({attribute:t.getAttributeNode(e),from:t}),t.removeAttribute(e)},X=function(e){var t,r;w&&(e="<remove></remove>"+e);try{t=(new L).parseFromString(e,"text/html")}catch(e){}return t&&t.documentElement||((r=(t=l.createHTMLDocument("")).body).parentNode.removeChild(r.parentNode.firstElementChild),r.outerHTML=e),"function"==typeof t.getElementsByTagName?t.getElementsByTagName(F?"html":"body")[0]:u.call(t,F?"html":"body")[0]},Z=function(e){return d.call(e.ownerDocument||e,e,A.SHOW_ELEMENT|A.SHOW_COMMENT|A.SHOW_TEXT,function(){return A.FILTER_ACCEPT},!1)},K=function(e){return!(e instanceof E||e instanceof O)&&!("string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof _&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute)},q=function(e){return"object"==typeof a?e instanceof a:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},$=function(e){var t,o;if(ae("beforeSanitizeElements",e,null),K(e))return j(e),!0;if(t=e.nodeName.toLowerCase(),ae("uponSanitizeElement",e,{tagName:t,allowedTags:p}),!p[t]||D[t]){if(J&&!x[t]&&"function"==typeof e.insertAdjacentHTML)try{e.insertAdjacentHTML("AfterEnd",e.innerHTML)}catch(e){}return j(e),!0}return"style"!=t?(!b||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(r.removed.push({element:e.cloneNode()}),e.innerHTML=e.textContent.replace(/</g,"&lt;")),y&&3===e.nodeType&&(o=(o=(o=e.textContent).replace(g," ")).replace(G," "),e.textContent!==o&&(r.removed.push({element:e.cloneNode()}),e.textContent=o))):!b||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(r.removed.push({element:e.cloneNode()}),e.innerHTML=e.textContent.replace(/</g,"\\3c ")),ae("afterSanitizeElements",e,null),!1},ee=/^data-[-\w.\u00B7-\uFFFF]/,te=/^aria-[-\w]+$/,re=/^(?:(?:https?|mailto|tel):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i,oe=/^(?:\w+script|data):/i,ne=/[\x00-\x20\xA0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,Te=function(e){var t,n,T,i,a,A,_,E;if(ae("beforeSanitizeAttributes",e,null),A=e.attributes){for(_={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:m},E=A.length;E--;)if(t=A[E],n=t.name,T=t.value.trim(),i=n.toLowerCase(),_.attrName=i,_.attrValue=T,_.keepAttr=!0,ae("uponSanitizeAttribute",e,_),T=_.attrValue,"name"===i&&"IMG"===e.nodeName&&A.id?(a=A.id,A=Array.prototype.slice.apply(A),Q("id",e),Q(n,e),A.indexOf(a)>E&&e.setAttribute("id",a.value)):("id"===n&&e.setAttribute(n,""),Q(n,e)),_.keepAttr&&(!W||"id"!==i&&"name"!==i||!(T in o||T in z))){y&&(T=(T=T.replace(g," ")).replace(G," "));if(U&&ee.test(i))!0;else if(h&&te.test(i))!0;else{if(!m[i]||I[i])continue;if(k[i])!0;else if(re.test(T.replace(ne,"")))!0;else if("src"!==i&&"xlink:href"!==i||0!==T.indexOf("data:")||!H[e.nodeName.toLowerCase()])if(v&&!oe.test(T.replace(ne,"")))!0;else{if(T)continue;!0}else!0}try{e.setAttribute(n,T),r.removed.pop()}catch(e){}}ae("afterSanitizeAttributes",e,null)}},ie=function(e){var t,r=Z(e);for(ae("beforeSanitizeShadowDOM",e,null);t=r.nextNode();)ae("uponSanitizeShadowNode",t,null),$(t)||(t.content instanceof T&&ie(t.content),Te(t));ae("afterSanitizeShadowDOM",e,null)},ae=function(e,t,o){S[e]&&S[e].forEach(function(e){e.call(r,t,o,Y)})};return r.sanitize=function(e,o){var i,A,_,E,O,L;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!q(e)){if("function"!=typeof e.toString)throw new TypeError("toString is not a function");e=e.toString()}if(!r.isSupported){if("object"==typeof t.toStaticHTML||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(q(e))return t.toStaticHTML(e.outerHTML)}return e}if(V(o),r.removed=[],e instanceof a)1===(A=(i=X("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===A.nodeName?i=A:i.appendChild(A);else{if(!M&&!F&&-1===e.indexOf("<"))return e;if(!(i=X(e)))return M?null:""}for(w&&j(i.firstChild),O=Z(i);_=O.nextNode();)3===_.nodeType&&_===E||$(_)||(_.content instanceof T&&ie(_.content),Te(_),E=_);if(M){if(C)for(L=c.call(i.ownerDocument);i.firstChild;)L.appendChild(i.firstChild);else L=i;return P&&(L=R.call(n,L,!0)),L}return F?i.outerHTML:i.innerHTML},r.addHook=function(e,t){"function"==typeof t&&(S[e]=S[e]||[],S[e].push(t))},r.removeHook=function(e){S[e]&&S[e].pop()},r.removeHooks=function(e){S[e]&&(S[e]=[])},r.removeAllHooks=function(){S={}},r}),function(e){var t={};t.ALLOW_ARIA_ATTR=!0,t.ALLOW_DATA_ATTR=!0,t.ALLOW_UNKNOWN_PROTOCOLS=!1,t.SAFE_FOR_JQUERY=!1,t.SAFE_FOR_TEMPLATES=!1,t.WHOLE_DOCUMENT=!1,t.RETURN_DOM=!1,t.RETURN_DOM_FRAGMENT=!1,t.RETURN_DOM_IMPORT=!1,t.FORCE_BODY=!0,t.SANITIZE_DOM=!0,t.KEEP_CONTENT=!0,t.STYLE_VALIDATION=!0,t.REMOVE_ONEVENTS=!0,t.ALLOWED_STYLE="NONE",t.ALLOWED_TAGS="a|abbr|acronym|address|area|article|aside|audio|b|bdi|bdo|big|blink|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|content|data|datalist|dd|decorator|del|details|dfn|dir|div|dl|dt|element|em|fieldset|figcaption|figure|font|footer|form|h1|h2|h3|h4|h5|h6|head|header|hgroup|hr|html|i|img|input|ins|kbd|label|legend|li|main|map|mark|marquee|menu|menuitem|meter|nav|nobr|ol|optgroup|option|output|p|pre|progress|q|rp|rt|ruby|s|samp|section|select|shadow|small|source|spacer|span|strike|strong|sub|summary|sup|table|tbody|td|template|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video|wbr|#text".split("|"),t.ALLOWED_ATTR="accept|action|align|alt|autocomplete|background|bgcolor|border|cellpadding|cellspacing|checked|cite|class|clear|color|cols|colspan|coords|datetime|default|dir|disabled|download|enctype|face|for|headers|height|hidden|high|href|hreflang|id|ismap|label|lang|list|loop|low|max|maxlength|media|method|min|multiple|name|noshade|novalidate|nowrap|open|optimum|pattern|placeholder|poster|preload|pubdate|radiogroup|readonly|rel|required|rev|reversed|role|rows|rowspan|spellcheck|scope|selected|shape|size|span|srclang|start|src|step|summary|tabindex|title|target|type|usemap|valign|value|width|xmlns|sandbox".split("|"),t.ALLOWED_STYLE_PROPS="azimuth|background|background-attachment|background-color|background-image|background-position|content|background-repeat|border-collapse|border-color|border-top-color|border-right-color|border-bottom-color|border-left-color|bottom|caption-side|clear|color|cue-after|cue-before|direction|display|elevation|empty-cells|float|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|height|left|letter-spacing|line-height|list-style-image|list-style-position|list-style-type|marker-offset|max-height|max-width|min-height|min-width|orphans|outline-color|overflow|page-break-after|page-break-before|page-break-inside|pause-after|pause-before|pitch|pitch-range|position|richness|right|size|speak|speak-header|speak-numeral|speak-punctuation|speech-rate|stress|table-layout|text-indent|text-transform|top|unicode-bidi|vertical-align|visibility|volume|white-space|widows|width|word-spacing|border-style|border-top-style|border-right-style|border-bottom-style|border-left-style|border-top-width|border-right-width|border-bottom-width|border-left-width|border-width|margin|margin-top|margin-right|margin-bottom|margin-left|outline-style|outline-width|padding|padding-top|padding-right|padding-bottom|padding-left|border|border-top|border-right|border-bottom|border-left|cue|list-style|marks|outline|pause|text-decoration|border-spacing|clip|counter-increment|clip|cursor|text-shadow|font|font-family|page|play-during|text-align|voice-family".split("|"),t.FORBID_TAGS=[],t.FORBID_ATTR=[],t.ALLOWED_TAGS_OBJ={},t.ALLOWED_ATTR_OBJ={},t.FORBID_TAGS_OBJ={},t.FORBID_ATTR_OBJ={},t.ADD_URI_SAFE_ATTR=[],t.EXTENDS=["GLOBAL_ATTRIBUTES","GLOBAL_TAGS","FORBID_TAGS","FORBID_ATTR","GLOBAL_APPEND_ATTRIBUTES","GLOBAL_ATTRIBUTE_RULES","ADD_URI_SAFE_ATTR","TAG_RULES"],t.TAG_RULES={a:{APPEND_ATTRIBUTES:[{NAME:"rel",VALUE:"noopener noreferrer",CRITERIA:[{NAME:"target",CONTAINS:"_blank"}]}]}},t.GLOBAL_APPEND_ATTRIBUTES=[],t.GLOBAL_ATTRIBUTE_RULES={},ZSEC.util.defineProperty(ZSEC,"HTMLPurifier",e(t,DOMPurify(window)),!0,!1,!1,!0),delete window.DOMPurify}(function e(t,r){function o(e){if(!e||e.constructor!==Object)return t;var r={};for(var o in t)t.hasOwnProperty(o)&&(o in e?o in m&&(1==e[o]||0==e[o]?r[o]=e[o]:r[o]=t[o]):r[o]=t[o]);return r.SAFE_FOR_TEMPLATES&&(r.ALLOW_DATA_ATTR=!1),r.RETURN_DOM_FRAGMENT&&(r.RETURN_DOM=!0),r.KEEP_CONTENT&&(r.ALLOWED_TAGS_OBJ["#text"]=!0),r}function n(e){for(var t in e)e.hasOwnProperty(t)&&e[t].constructor==String&&(e[t]&&b[t]?v=!0:e[t]&&("cssText"==t||/^\d.*/.test(t)||(e[t]="",I=!0)))}function T(e){for(var t=e.length-1;t>=0;t--){var r=e[t];1==r.type&&r.selectorText||8==r.type&&r.keyText?r.style&&n(r.style):4!=r.type&&7!=r.type||!r.cssRules||T(r.cssRules)}}function i(e,t){for(var r=t.length-1;r>=0;r--)1!=t[r].type&&4!=t[r].type&&7!=t[r].type||e.push(t[r].cssText)}function a(e,t,r){var r=void 0==r?e.IS_MANDATORY:r;if(e.NAME&&!t.hasAttribute(e.NAME.toLowerCase()))return e.IS_FORBIDDEN||!r;if(e.IS_FORBIDDEN)return!1;var o=t.getAttribute(e.NAME.toLowerCase());if(void 0!==o&&null!==o||(o=""),o.constructor==String){if(e.DONT_TRIM||(o=o.trim()),e.CASE_SENSITIVE||!1||(o=o.toLowerCase()),e.MAX_LENGTH&&o.length>e.MAX_LENGTH)return!1;if(e.MIN_LENGTH&&o.length<e.MIN_LENGTH)return!1;if(void 0!=e.REGEX){if(e.REGEX.constructor==RegExp&&-1==o.search(e.REGEX))return!1;if(e.REGEX.constructor==Array)for(T=0;T<e.REGEX.length;T++)if(-1==o.search(e.REGEX[T]))return!1}}if(e.LIST&&-1==e.LIST.indexOf(o))return!1;if("INTEGER"==e.TYPE||"FLOAT"==e.TYPE){var n;try{n="INTEGER"==e.TYPE?window.parseInt(o,10):window.parseFloat(o)}catch(e){return!1}if(window.isNaN(n))return!1;if(void 0!=e.GREATER_THAN&&n<=e.GREATER_THAN)return!1;if(void 0!=e.GREATER_THAN_OR_EQUAL&&n<e.GREATER_THAN_OR_EQUAL)return!1;if(void 0!=e.LESSER_THAN&&n>=e.LESSER_THAN)return!1;if(void 0!=e.LESSER_THAN_OR_EQUAL&&n>e.LESSER_THAN_OR_EQUAL)return!1;if(void 0!=e.EQUAL&&n!=e.EQUAL)return!1;if(void 0!=e.NOT_EQUAL&&n==e.NOT_EQUAL)return!1}else if(o.constructor==String){if(void 0!=e.STARTS_WITH&&0!=o.indexOf(e.STARTS_WITH))return!1;if(void 0!=e.ENDS_WITH&&o.lastIndexOf(e.ENDS_WITH)!=o.length-e.ENDS_WITH.length)return!1;if(void 0!=e.CONTAINS){if(e.CONTAINS.constructor==String&&-1==o.indexOf(e.CONTAINS))return!1;if(e.CONTAINS.constructor==Array)for(T=0;T<e.CONTAINS.length;T++)if(-1==o.indexOf(e.CONTAINS[T]))return!1}if(void 0!=e.NOT_CONTAINS){if(e.NOT_CONTAINS.constructor==String&&o.indexOf(e.NOT_CONTAINS)>-1)return!1;if(e.NOT_CONTAINS.constructor==Array)for(var T=0;T<e.NOT_CONTAINS.length;T++)if(o.indexOf(e.NOT_CONTAINS[T])>-1)return!1}if(void 0!=e.EQUAL&&o!==e.EQUAL)return!1;if(void 0!=e.NOT_EQUAL&&o===e.NOT_EQUAL)return!1}return!0}function A(e){if(!e)return e;if(e.constructor==Object)for(var t in e)e.hasOwnProperty(t)&&(e[t]=E(e[t]));return e}function _(e){if(!e)return e;if(e.constructor==Array)for(var t=0;t<e.length;t++)if(e[t].CRITERIA)for(var r=0;r<e[t].CRITERIA.length;r++)e[t].CRITERIA[r]=E(e[t].CRITERIA[r]);return e}function E(e){if(e){var t=["STARTS_WITH","ENDS_WITH","CONTAINS","EQUAL","NOT_EQUAL","LIST"];if(!(e.CASE_SENSITIVE||!1))for(var r=0;r<t.length;r++){var o=t[r];e[o]&&(e[o]=O(e[o]))}}return e}function O(e){if(e&&e.constructor==String)return e.toLowerCase();if(e.constructor==Array)for(var t=0;t<e.length;t++)e[t]=O(e[t]);return e}function L(e,t){if(!e||e.constructor==Object)return e;for(var r={},o=0;o<e.length;o++){var n=e[o];r[n[t]]=n}return r}function s(e,t){if(e)for(var r=0;r<e.length;r++){var o=e[r];if(!t.hasAttribute(o.NAME.toLowerCase())){var n=!0;if(o.CRITERIA)for(var T=0;T<o.CRITERIA.length;T++)if(!a(o.CRITERIA[T],t,!0)){n=!1;break}n?t.setAttribute(o.NAME,o.VALUE):void 0!=o.DEFAULT_VALUE&&t.setAttribute(o.NAME,o.DEFAULT_VALUE)}}}function l(e,t){if(!t||t.constructor!==Object)return e;if(!e||e.constructor!==Object)return t;for(var r in t)t.hasOwnProperty(r)&&r in e?(void 0==e[r].APPEND_ATTRIBUTES&&(e[r].APPEND_ATTRIBUTES=t[r].APPEND_ATTRIBUTES),void 0==e[r].ATTRIBUTE_RULES&&(e[r].ATTRIBUTE_RULES=t[r].ATTRIBUTE_RULES)):e[r]=t[r];return e}function d(e,t,r){return!(t&&!a(t,e))||(void 0!==t.DEFAULT_VALUE?e.setAttribute(r,t.DEFAULT_VALUE):e.removeAttribute(r),!1)}function u(e){if("object"==typeof e){e.ALLOWED_TAGS=e.GLOBAL_TAGS,e.ALLOWED_ATTR=e.GLOBAL_ATTRIBUTES;for(var r in h)!h.hasOwnProperty(r)||void 0!=e[r]||r in D||(e[r]=t[r]);if(e.TAG_RULES=L(e.TAG_RULES,"NAME"),e.TAG_RULES&&e.TAG_RULES.constructor==Object)for(var o in e.TAG_RULES)if(e.TAG_RULES.hasOwnProperty(o)){var n=e.TAG_RULES[o];n.ATTRIBUTE_RULES=A(L(n.ATTRIBUTE_RULES,"NAME")),n.APPEND_ATTRIBUTES=_(n.APPEND_ATTRIBUTES)}if(e.GLOBAL_ATTRIBUTE_RULES=A(L(e.GLOBAL_ATTRIBUTE_RULES,"NAME")),e.GLOBAL_APPEND_ATTRIBUTES=_(e.GLOBAL_APPEND_ATTRIBUTES),e.EXTENDS)for(var T=0;T<e.EXTENDS.length;T++){var i=e.EXTENDS[T];switch("GLOBAL_TAGS"==i&&(i="ALLOWED_TAGS"),"GLOBAL_ATTRIBUTES"==i&&(i="ALLOWED_ATTR"),i){case"ALLOWED_TAGS":case"ALLOWED_ATTR":case"FORBID_TAGS":case"FORBID_ATTR":e[i+="_OBJ"]={},t[i]&&(e[i]=addObjsToSet(e[i],t[i]));break;case"ADD_URI_SAFE_ATTR":case"GLOBAL_APPEND_ATTRIBUTES":if(e[i]||(e[i]=[]),!t[i]||t[i].constructor!==Array)break;e[i]=e[i].concat(t[i]);break;case"GLOBAL_ATTRIBUTE_RULES":if(e.GLOBAL_ATTRIBUTE_RULES||(e.GLOBAL_ATTRIBUTE_RULES={}),t.GLOBAL_ATTRIBUTE_RULES&&t.GLOBAL_ATTRIBUTE_RULES.constructor==Object)for(var a in t.GLOBAL_ATTRIBUTE_RULES)t.GLOBAL_ATTRIBUTE_RULES.hasOwnProperty(a)&&!e.GLOBAL_ATTRIBUTE_RULES[a]&&(e.GLOBAL_ATTRIBUTE_RULES[a]=t.GLOBAL_ATTRIBUTE_RULES[a]);break;case"TAG_RULES":e.TAG_RULES||(e.TAG_RULES={}),e.TAG_RULES=l(e.TAG_RULES,t.TAG_RULES)}}for(var E in N)N.hasOwnProperty(E)&&(e[E+"_OBJ"]||(e[E+"_OBJ"]={}),void 0!=e[E]?e[E].constructor===Array&&(e[E+"_OBJ"]=addToSet(e[E+"_OBJ"],e[E])):e[E]=[]);for(var O=0;O<B.length;O++){var s=B[O];e[s]||(e[s]=[])}"ALL"==e.ALLOWED_STYLE?(e.FORBID_TAGS_OBJ=removeFromSet(e.FORBID_TAGS_OBJ,"style"),e.FORBID_ATTR_OBJ=removeFromSet(e.FORBID_ATTR_OBJ,"style"),e.ALLOWED_TAGS_OBJ=addToSet(e.ALLOWED_TAGS_OBJ,["style"]),e.ALLOWED_ATTR_OBJ=addToSet(e.ALLOWED_ATTR_OBJ,["style"])):"INLINE"==e.ALLOWED_STYLE?(e.FORBID_ATTR_OBJ=removeFromSet(e.FORBID_ATTR_OBJ,"style"),e.ALLOWED_ATTR_OBJ=addToSet(e.ALLOWED_ATTR_OBJ,["style"]),e.FORBID_TAGS_OBJ=addToSet(e.FORBID_TAGS_OBJ,["style"]),e.ALLOWED_TAGS_OBJ=removeFromSet(e.ALLOWED_TAGS_OBJ,"style")):"INTERNAL"==e.ALLOWED_STYLE?(e.FORBID_TAGS_OBJ=removeFromSet(e.FORBID_TAGS_OBJ,"style"),e.ALLOWED_TAGS_OBJ=addToSet(e.ALLOWED_TAGS_OBJ,["style"]),e.FORBID_ATTR_OBJ=addToSet(e.FORBID_ATTR_OBJ,["style"]),e.ALLOWED_ATTR_OBJ=removeFromSet(e.ALLOWED_ATTR_OBJ,"style")):"NONE"==e.ALLOWED_STYLE&&(e.FORBID_TAGS_OBJ=addToSet(e.FORBID_TAGS_OBJ,["style"]),e.FORBID_ATTR_OBJ=addToSet(e.FORBID_ATTR_OBJ,["style"]),e.ALLOWED_TAGS_OBJ=removeFromSet(e.ALLOWED_TAGS_OBJ,"style"),e.ALLOWED_ATTR_OBJ=removeFromSet(e.ALLOWED_ATTR_OBJ,"style"));for(var d in N)if(N.hasOwnProperty(d)){for(var u in e[d+"_OBJ"])e[d+"_OBJ"].hasOwnProperty(u)&&e[d].push(u);e[d+"_OBJ"]=addToSet(e[d+"_OBJ"],e[d])}ZSEC.configValidator&&ZSEC.configValidator.HTMLPurifierValidation(e,h,N,c,R)}else{e={};for(var S in t)t.hasOwnProperty(S)&&(e[S]=t[S].valueOf())}return e}var c=addToSet({},["script"]),R=addToSet({},[]),S=["ALLOW_ARIA_ATTR","ALLOW_DATA_ATTR","ALLOW_UNKNOWN_PROTOCOLS","SAFE_FOR_JQUERY","SAFE_FOR_TEMPLATES","WHOLE_DOCUMENT","RETURN_DOM","RETURN_DOM_FRAGMENT","RETURN_DOM_IMPORT","FORCE_BODY","SANITIZE_DOM","KEEP_CONTENT","ALLOWED_STYLE_PROPS"],f=["ALLOWED_TAGS","ALLOWED_ATTR","FORBID_TAGS","FORBID_ATTR"],p=["ALLOWED_TAGS_OBJ","ALLOWED_ATTR_OBJ","FORBID_TAGS_OBJ","FORBID_ATTR_OBJ"],B=["ADD_URI_SAFE_ATTR","GLOBAL_APPEND_ATTRIBUTES","GLOBAL_ATTRIBUTE_RULES","TAG_RULES"],m=addToSet({},S),N=addToSet({},f),D=(addToSet({},p),addToSet({},B));D=addToSet(D,f),D=addToSet(D,p);var I,h=addToSet({},S.concat(["STYLE_VALIDATION","ALLOWED_STYLE","EXTENDS","REMOVE_ONEVENTS","GLOBAL_ATTRIBUTES","GLOBAL_TAGS"],f,p,B)),U={iframe:{NAME:"iframe",ATTRIBUTE_RULES:{sandbox:{NAME:"sandbox",NOT_CONTAINS:["allow-top-navigation","allow-popups-to-escape-sandbox"],DEFAULT_VALUE:"allow-popups allow-forms allow-scripts allow-same-origin"}},APPEND_ATTRIBUTES:[{NAME:"sandbox",VALUE:"allow-popups allow-forms allow-scripts allow-same-origin"}]}},v=!1,b=addToSet({},t.ALLOWED_STYLE_PROPS);!function(){t.FORBID_TAGS_OBJ=addObjsToSet(t.FORBID_TAGS_OBJ,c),t.FORBID_ATTR_OBJ=addObjsToSet(t.FORBID_ATTR_OBJ,R);for(var e in N)N.hasOwnProperty(e)&&(t[e+"_OBJ"]=addToSet(t[e+"_OBJ"],t[e]));r.removeAllHooks(),I=!1,"NONE"==t.ALLOWED_STYLE&&(t.FORBID_TAGS_OBJ=addToSet(t.FORBID_TAGS_OBJ,["style"]),t.FORBID_ATTR_OBJ=addToSet(t.FORBID_ATTR_OBJ,["style"])),"INLINE"!=t.ALLOWED_STYLE&&"ALL"!=t.ALLOWED_STYLE||(t.STYLE_VALIDATION&&r.addHook("afterSanitizeAttributes",function(e){if(!e.ownerDocument.baseURI){var t=document.createElement("base");t.href=document.baseURI,e.ownerDocument.head.appendChild(t)}if(e.hasAttribute("style")){var r="";I=!1,n(e.style),(r=I?e.style.cssText:e.getAttribute("style")).length?e.setAttribute("style",r):e.removeAttribute("style")}}),"INLINE"==t.ALLOWED_STYLE&&(t.FORBID_TAGS_OBJ=addToSet(t.FORBID_TAGS_OBJ,["style"]),t.FORBID_ATTR_OBJ=removeFromSet(t.FORBID_ATTR_OBJ,"style"))),"INTERNAL"!=t.ALLOWED_STYLE&&"ALL"!=t.ALLOWED_STYLE||(t.STYLE_VALIDATION&&r.addHook("uponSanitizeElement",function(e,t){if("style"===t.tagName&&null!=e.sheet){var r=e.sheet.cssRules;if(I=!1,T(r),I){var o=[];i(o,r),e.textContent=o.join("\n")}}}),"INTERNAL"==t.ALLOWED_STYLE&&(t.FORBID_ATTR_OBJ=addToSet(t.FORBID_ATTR_OBJ,["style"]),t.FORBID_TAGS_OBJ=removeFromSet(t.FORBID_TAGS_OBJ,"style"))),"ALL"==t.ALLOWED_STYLE&&(t.FORBID_TAGS_OBJ=removeFromSet(t.FORBID_TAGS_OBJ,"style"),t.FORBID_ATTR_OBJ=removeFromSet(t.FORBID_ATTR_OBJ,"style")),(t.GLOBAL_ATTRIBUTE_RULES||t.TAG_RULES)&&r.addHook("afterSanitizeAttributes",function(e){for(var r=e.nodeName.toLowerCase(),o=t.GLOBAL_ATTRIBUTE_RULES,n=t.TAG_RULES&&t.TAG_RULES[r]&&t.TAG_RULES[r].ATTRIBUTE_RULES,T=U&&U[r]&&U[r].ATTRIBUTE_RULES,i=e.attributes.length;i--;){var a=e.attributes[i].name;d(e,n&&n[a]||o&&o[a],a)&&d(e,T&&T[a],a)}}),(t.GLOBAL_APPEND_ATTRIBUTES||t.TAG_RULES)&&r.addHook("afterSanitizeAttributes",function(e){var r=e.nodeName.toLowerCase();s(t.TAG_RULES&&t.TAG_RULES[r]&&t.TAG_RULES[r].APPEND_ATTRIBUTES,e),s(t.GLOBAL_APPEND_ATTRIBUTES,e),s(U&&U[r]&&U[r].APPEND_ATTRIBUTES,e)}),t.REMOVE_ONEVENTS&&r.addHook("uponSanitizeAttribute",function(e,t){0==t.attrName.indexOf("on")&&(t.keepAttr=!1)})}();var y=function(t){return t=u(t),e(t,r(window))};return y.isSupported=r.isSupported,y.removed="",ZSEC.util.defineProperty(y,"sanitize",function(e,t){var n=o(t),T=r.sanitize(e,n);return y.removed=r.removed,T},!1,!1,!0),y});!function(r){function e(r){for(var e=[],a=0;a<r.length;a++)e.push(r[a].charCodeAt(0));return e}var a={},t="34=&quot|38=&amp|60=&lt|62=&gt|160=&nbsp|161=&iexcl|162=&cent|163=&pound|164=&curren|165=&yen|166=&brvbar|167=&sect|168=&uml|169=&copy|170=&ordf|171=&laquo|172=&not|173=&shy|174=&reg|175=&macr|176=&deg|177=&plusmn|178=&sup2|179=&sup3|180=&acute|181=&micro|182=&para|183=&middot|184=&cedil|185=&sup1|186=&ordm|187=&raquo|188=&frac14|189=&frac12|190=&frac34|191=&iquest|192=&Agrave|193=&Aacute|194=&Acirc|195=&Atilde|196=&Auml|197=&Aring|198=&AElig|199=&Ccedil|200=&Egrave|201=&Eacute|202=&Ecirc|203=&Euml|204=&Igrave|205=&Iacute|206=&Icirc|207=&Iuml|208=&ETH|209=&Ntilde|210=&Ograve|211=&Oacute|212=&Ocirc|213=&Otilde|214=&Ouml|215=&times|216=&Oslash|217=&Ugrave|218=&Uacute|219=&Ucirc|220=&Uuml|221=&Yacute|222=&THORN|223=&szlig|224=&agrave|225=&aacute|226=&acirc|227=&atilde|228=&auml|229=&aring|230=&aelig|231=&ccedil|232=&egrave|233=&eacute|234=&ecirc|235=&euml|236=&igrave|237=&iacute|238=&icirc|239=&iuml|240=&eth|241=&ntilde|242=&ograve|243=&oacute|244=&ocirc|245=&otilde|246=&ouml|247=&divide|248=&oslash|249=&ugrave|250=&uacute|251=&ucirc|252=&uuml|253=&yacute|254=&thorn|255=&yuml|338=&OElig|339=&oelig|352=&Scaron|353=&scaron|376=&Yuml|402=&fnof|710=&circ|732=&tilde|913=&Alpha|914=&Beta|915=&Gamma|916=&Delta|917=&Epsilon|918=&Zeta|919=&Eta|920=&Theta|921=&Iota|922=&Kappa|923=&Lambda|924=&Mu|925=&Nu|926=&Xi|927=&Omicron|928=&Pi|929=&Rho|931=&Sigma|932=&Tau|933=&Upsilon|934=&Phi|935=&Chi|936=&Psi|937=&Omega|945=&alpha|946=&beta|947=&gamma|948=&delta|949=&epsilon|950=&zeta|951=&eta|952=&theta|953=&iota|954=&kappa|955=&lambda|956=&mu|957=&nu|958=&xi|959=&omicron|960=&pi|961=&rho|962=&sigmaf|963=&sigma|964=&tau|965=&upsilon|966=&phi|967=&chi|968=&psi|969=&omega|977=&thetasym|978=&upsih|982=&piv|8194=&ensp|8195=&emsp|8201=&thinsp|8204=&zwnj|8205=&zwj|8206=&lrm|8207=&rlm|8211=&ndash|8212=&mdash|8216=&lsquo|8217=&rsquo|8218=&sbquo|8220=&ldquo|8221=&rdquo|8222=&bdquo|8224=&dagger|8225=&Dagger|8226=&bull|8230=&hellip|8240=&permil|8242=&prime|8243=&Prime|8249=&lsaquo|8250=&rsaquo|8254=&oline|8260=&frasl|8364=&euro|8465=&image|8472=&weierp|8476=&real|8482=&trade|8501=&alefsym|8592=&larr|8593=&uarr|8594=&rarr|8595=&darr|8596=&harr|8629=&crarr|8656=&lArr|8657=&uArr|8658=&rArr|8659=&dArr|8660=&hArr|8704=&forall|8706=&part|8707=&exist|8709=&empty|8711=&nabla|8712=&isin|8713=&notin|8715=&ni|8719=&prod|8721=&sum|8722=&minus|8727=&lowast|8730=&radic|8733=&prop|8734=&infin|8736=&ang|8743=&and|8744=&or|8745=&cap|8746=&cup|8747=&int|8756=&there4|8764=&sim|8773=&cong|8776=&asymp|8800=&ne|8801=&equiv|8804=&le|8805=&ge|8834=&sub|8835=&sup|8836=&nsub|8838=&sube|8839=&supe|8853=&oplus|8855=&otimes|8869=&perp|8901=&sdot|8968=&lceil|8969=&rceil|8970=&lfloor|8971=&rfloor|10216=&lang|10217=&rang|9674=&loz|9824=&spades|9827=&clubs|9829=&hearts|9830=&diams";t=t.split("|");for(var i=0;i<t.length;i++){var n=t[i].split("=");a[n[0]]=n[1]}var u={characterToEntityMap:a,IMMUNE_HTML:e(new Array(",",".","-","_"," ")),IMMUNE_HTMLATTR:e(new Array(",",".","-","_")),IMMUNE_CSS:e(new Array),IMMUNE_JAVASCRIPT:e(new Array(",",".","_"))};ZSEC.util.defineProperty(ZSEC,"Encoder",r(u),!0,!1,!1,!0)}(function(r){function e(r,e,a,t){if(null==e||void 0==e||"string"!=typeof e)return e;for(var i="",n=0;n<e.length;n++)if(t){var u=e.codePointAt(n);i+=a(r,u,t),u>65535&&n++}else i+=a(r,e.charCodeAt(n));return i}for(var a={},t=r.characterToEntityMap,i=[],n=0;n<255;n++)i[n]=n>=48&&n<=57||n>=65&&n<=90||n>=97&&n<=122?null:n.toString(16);var u=function(r){return r<256?i[r]:r.toString(16)},o=function(r,e){if(-1!=ZSEC.util.ArrayIndexOf.call(r,e))return String.fromCodePoint(e);var a=u(e);if(null==a)return String.fromCodePoint(e);if(e<=31&&"\t"!=e&&"\n"!=e&&"\r"!=e||e>=127&&e<=159||" "==e)return" ";var i=t[e];return null!=i?i+";":"&#x"+a+";"},l=function(r,e){if(-1!=ZSEC.util.ArrayIndexOf.call(r,e))return String.fromCharCode(e);if(null==u(e))return String.fromCharCode(e);var a=e.toString(16);if(e<256){var t="00".substr(a.length);return"\\x"+t+a.toUpperCase()}return"\\u"+(t="0000".substr(a.length))+a.toUpperCase()},c=function(r,e){if(-1!=ZSEC.util.ArrayIndexOf.call(r,e))return String.fromCodePoint(e);var a=u(e);return null==a?String.fromCodePoint(e):"\\"+a+" "};return a.encodeForHTML=function(a){return e(r.IMMUNE_HTML,a,o,!0)},a.encodeForHTMLAttribute=function(a){return e(r.IMMUNE_HTMLATTR,a,o,!0)},a.encodeForJavaScript=function(a){return e(r.IMMUNE_JAVASCRIPT,a,l,!1)},a.encodeForCSS=function(a){return e(r.IMMUNE_CSS,a,c,!0)},Object.freeze&&Object.freeze(a),a});var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*Polyfills for functions not available in other browsers. */

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
        firstIsNode = +(parent && (typeof Ele === 'undefined' ? 'undefined' : _typeof(Ele)) === 'object');
    if (!parent) {
        return;
    }

    while (i-- > firstIsNode) {
        if (parent && _typeof(arguments[i]) !== 'object') {
            arguments[i] = document.createTextNode(arguments[i]);
        }if (!parent && arguments[i].parentNode) {
            arguments[i].parentNode.removeChild(arguments[i]);
            continue;
        }
        parent.insertBefore(this.previousSibling, arguments[i]);
    }
    if (firstIsNode) {
        parent.replaceChild(this, Ele);
    }
}
if (!Element.prototype.replaceWith) {
    Element.prototype.replaceWith = ReplaceWith;
}
if (!CharacterData.prototype.replaceWith) {
    CharacterData.prototype.replaceWith = ReplaceWith;
}
if (!DocumentType.prototype.replaceWith) {
    DocumentType.prototype.replaceWith = ReplaceWith;
}

/*Polyfill for startsWith
//Not supported out of the box for  IE */
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
    };
}

/*Polyfill for endsWith
//Not supported out of the box for  IE */
if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (search, this_len) {
        if (this_len === undefined || this_len > this.length) {
            this_len = this.length;
        }
        return this.substring(this_len - search.length, this_len) === search;
    };
}

var Lyte = {
    version: "2.1.0",
    $: {},
    registeredMixins: {},
    Mixin: {},
    debug: false,
    performance: false,
    toBeRegistered: [],
    Security: {
        "_ourSanitizerInstance_": {},
        "_userSanitizerInstance_": {}
    }
};

var sec = { "GLOBAL_TAGS": [], "GLOBAL_ATTRIBUTES": [], "FORBID_TAGS": [], "FORBID_ATTR": [] };
Lyte.Security._ourSanitizerInstance_ = ZSEC.HTMLPurifier(sec);
Lyte.Security._ourSanitizerInstance_._GLOBAL_TAGS = sec.GLOBAL_TAGS;
Lyte.Security._ourSanitizerInstance_._GLOBAL_ATTRIBUTES = sec.GLOBAL_ATTRIBUTES;
Lyte.Security._ourSanitizerInstance_._FORBID_TAGS = sec.FORBID_TAGS;
Lyte.Security._ourSanitizerInstance_._FORBID_ATTR = sec.FORBID_ATTR;
Lyte.Security.createSanitizer = function (obb) {
    if (!obb.GLOBAL_TAGS) {
        obb.GLOBAL_TAGS = [];
    }
    if (!obb.GLOBAL_ATTRIBUTES) {
        obb.GLOBAL_ATTRIBUTES = [];
    }
    if (!obb.FORBID_TAGS) {
        obb.FORBID_TAGS = [];
    }
    if (!obb.GLOBAL_ATTR) {
        obb.GLOBAL_ATTR = [];
    }
    Lyte.Security._userSanitizerInstance_ = ZSEC.HTMLPurifier(obb);
    Lyte.Security._userSanitizerInstance_._GLOBAL_TAGS = obb.GLOBAL_TAGS;
    Lyte.Security._userSanitizerInstance_._GLOBAL_ATTRIBUTES = obb.GLOBAL_ATTRIBUTES;
    Lyte.Security._userSanitizerInstance_._FORBID_TAGS = obb.FORBID_TAGS;
    Lyte.Security._userSanitizerInstance_._FORBID_ATTR = obb.FORBID_ATTR;
    return Lyte.Security._userSanitizerInstance_;
};
var consoleTime = [];

Lyte.$.assetsDiv = document.createElement("div");
Lyte.$.assetsDiv.setAttribute("id", "lyteAssetsDiv");

Lyte.registerErrorCodes = function (obj) {
    Object.assign(Lyte.errorCodes, obj);
};

Lyte.establishObserverBindings = function (observers, fromStore, properties) {
    var scope = this;
    if (fromStore) {
        scope = fromStore;
    }
    for (var i = 0; i < observers.length; i++) {
        var props = observers[i].properties;
        for (var j = 0; j < props.length; j++) {
            var actProp;
            var isArrayObserver = false;
            if (props[j].indexOf('.[]') !== -1) {
                isArrayObserver = true;
                actProp = Lyte.getProperty.call(this, props[j].substring(0, props[j].indexOf('.[]')), fromStore, properties);
            } else {
                actProp = Lyte.getProperty.call(this, props[j], fromStore, properties);
            }
            if (!actProp._observers) {
                Object.defineProperty(actProp, '_observers', {
                    value: new Set(),
                    enumerable: false,
                    writable: true,
                    configurable: true
                });
            }
            actProp._observers.add({ callee: scope, observer: observers[i], isArrayObserver: isArrayObserver });
        }
    }
};

Lyte.getProperty = function (key, fromStore, properties) {
    var arr = key.split('.');
    var property = this;
    if (fromStore) {
        property = properties;
        if (!properties[arr[0]]) {
            properties[arr[0]] = {};
        }
        property = properties[arr[0]];
    } else {
        if (!property._properties[arr[0]]) {
            property._properties[arr[0]] = {};
        }
        property = property._properties[arr[0]];
    }

    Object.defineProperty(property, '_path', { enumerable: false, value: arr[0] });
    for (var _i = 1; _i < arr.length; _i++) {
        if (!property[arr[_i]]) {
            property[arr[_i]] = {};
            Object.defineProperty(property[arr[_i]], '_path', { enumerable: false, value: property._path + "." + arr[_i] });
        }
        property = property[arr[_i]];
    }
    return property;
};

Lyte.getErrorMessage = function (code) {
    var args = Array.from(arguments).slice(1);
    if (Lyte.errorCodes[code]) {
        return Lyte.errorCodes[code].replace(/{(\d+)}/g, function (t, i) {
            return args[i];
        });
    } else {
        return code;
    }
};

Lyte.error = function () {
    var errorObj = arguments[0],
        parse = errorObj.stack;
    errorObj = parse ? errorObj : Error(Lyte.getErrorMessage.apply(Lyte, arguments));
    if (Lyte.onerror) {
        Lyte.onerror.call(this, errorObj);
    }
    Lyte.triggerEvent("error", errorObj);
    if (parse) {
        errorObj = JSON.parse(JSON.stringify(errorObj, Object.getOwnPropertyNames(errorObj)));
    }
    console.error(errorObj.stack);
};

Lyte.warn = function () {
    var errorObj = arguments[0];
    errorObj = errorObj.stack ? JSON.parse(JSON.stringify(errorObj, Object.getOwnPropertyNames(errorObj))) : Error(Lyte.getErrorMessage.apply(Lyte, arguments));
    console.warn(errorObj.stack.replace("Error: ", ""));
};

var requiredMixins = {};
Lyte.Mixin.register = function (name, mixin) {
    Lyte.registeredMixins[name] = mixin;
    var req;
    if (req = requiredMixins[name]) {
        for (var key in req) {
            Lyte.$.requiredMixins[key](mixin, req[key], key);
        }
    }
};

Lyte.$.requiredMixins = function (mixin, dir, type) {
    var req = requiredMixins[mixin] ? requiredMixins[mixin] : requiredMixins[mixin] = {};
    if (!req[type]) {
        req[type] = [dir];
    } else {
        req[type].push(dir);
    }
};

Lyte.Mixin.exists = function (name) {
    if (!Lyte.registeredMixins[name]) {
        // Lyte.error('Mixin used before being registered.');
        return false;
    }
    return true;
};

Lyte.log = function (text, src, color) {
    if (Lyte.debug) {
        if (color) {
            console.log("%c" + text, 'color:' + color);
        } else {
            console.log(text);
        }
    }
};

Lyte.time = function (fn) {
    if (Lyte.performance) {
        var index;
        if ((index = consoleTime.indexOf(fn)) != -1) {
            consoleTime.splice(index, 1);
            console.timeEnd(fn);
        } else {
            consoleTime.push(fn);
            console.time(fn);
        }
    }
};

Lyte.isRecord = function (object) {
    if (object && object.$ && object.$.hasOwnProperty("isModified")) {
        return true;
    }
    return false;
};

Lyte.isComponent = function (object) {
    if (object && object.$node && object.__data) {
        return true;
    }
    return false;
};

/* --------- lyte router v2 changes starts---- */
var reqFiles = {};

Lyte.injectResources = function (files, every, completed) {
    var successFiles = [],
        errorFiles = [];
    every = every || function () {};
    completed = completed || function () {};
    return new Promise(function (resolve) {
        processRequirements(files, resolve);
    }).then(function () {
        completed(successFiles, errorFiles);
    });

    function processRequirements(files, resolve) {
        if (!files) {
            resolve();
        } else {
            if (!Array.isArray(files)) {
                files = [files];
            }
            if (!files.length) {
                resolve();
            }
            var len = -files.length;
            files.forEach(function (file) {
                if (typeof file == "string") {
                    requestFile(file, Lyte.injectResources.availableTags[file], function () {
                        loaded();
                    });
                } else if (Array.isArray(file)) {
                    new Promise(function (r) {
                        processRequirements(file, r);
                    }).then(function () {
                        loaded();
                    });
                } else {
                    new Promise(function (r) {
                        processRequirements(file.parent, r);
                    }).then(function () {
                        new Promise(function (r1) {
                            processRequirements(file.child, r1);
                        }).then(function () {
                            loaded();
                        });
                    });
                }
            });
        }

        function loaded() {
            len++;
            if (len == 0) {
                resolve();
            }
        }

        function requestFile(file, cached, resolve) {
            if (reqFiles[file]) {
                reqFiles[file].push(resolve);
            } else {
                reqFiles[file] = [resolve];
                if (cached && cached.event.type != "error") {
                    if (Lyte.removeFromCache.arr.indexOf(file) != -1) {
                        Lyte.removeFromCache.arr.splice(Lyte.removeFromCache.arr.indexOf(file), 1);
                    }
                    fileLoaded.call(cached.tag, cached.event, true);
                    resolve();
                } else {
                    makeRequest(file, function (event) {
                        reqFiles[file].forEach(function (resolve) {
                            resolve();
                        });
                        fileLoaded.call(this, event);
                        every.call(this, event);
                    });
                }
            }
        }

        function fileLoaded(event, cached) {
            var file = this.getAttribute('src') || this.getAttribute('href');
            delete reqFiles[file];
            if (!cached) {
                if (Lyte.injectResources.availableTags[file]) {
                    Lyte.injectResources.availableTags[file].tag.remove();
                }
                this.onerror = this.onload = undefined;
                Lyte.injectResources.availableTags[file] = { tag: this, event: { type: event.type } };
            }
        }
    }

    function makeRequest(file, callBack) {
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
            if (event.type == "error") {
                errorFiles.push(event);
            } else {
                successFiles.push(event);
            }
            if (callBack) {
                callBack.call(this, event);
            }
        };
        var ev = every.internal || {};
        ev.tag = tag;
        Lyte.triggerEvent("onBeforeInject", ev);
        Lyte.$.assetsDiv.appendChild(tag);
    };
};

Lyte.injectResources.availableTags = [];

Lyte.removeFromCache = function (arr) {
    Lyte.removeFromCache.assign(arr);
    if (Lyte.removeFromCache.arr.length) {
        Lyte.removeFromCache.arr.forEach(function (file) {
            if (Lyte.injectResources.availableTags[file]) {
                Lyte.injectResources.availableTags[file].tag.remove();
                delete Lyte.injectResources.availableTags[file];
            }
        });
        Lyte.removeFromCache.arr = [];
    }
};

Lyte.removeFromCache.arr = [];

Lyte.removeFromCache.assign = function (arr) {
    arr = arr == "*" ? Object.keys(Lyte.injectResources.availableTags) : Array.isArray(arr) ? arr : [arr];
    Lyte.removeFromCache.arr = Lyte.removeFromCache.arr.concat(arr);
    return;
};

/* --------- lyte router v2 changes ends ---- */

Lyte.checkProperty = function (property, dataVal, key, fieldVal, record, type) {
    var exts = "extends";
    switch (property) {
        case "type":
            if (Lyte.Transform.hasOwnProperty(fieldVal) && dataVal !== undefined && dataVal !== null) {
                if (Array.isArray(dataVal)) {
                    if (Lyte.Transform[fieldVal][exts] != "array") {
                        return { code: "ERR03", message: Lyte.errorCodes.ERR03, expected: fieldVal };
                    }
                } else if (Lyte.Transform[fieldVal][exts] != (typeof dataVal === 'undefined' ? 'undefined' : _typeof(dataVal))) {
                    return { code: "ERR03", message: Lyte.errorCodes.ERR03, expected: fieldVal };
                }
            } else if (dataVal !== undefined && dataVal !== null) {
                if (Array.isArray(dataVal)) {
                    if (fieldVal != "array") {
                        return { code: "ERR03", message: Lyte.errorCodes.ERR03, expected: fieldVal };
                    }
                } else if (fieldVal != (typeof dataVal === 'undefined' ? 'undefined' : _typeof(dataVal))) {
                    return { code: "ERR03", message: Lyte.errorCodes.ERR03, expected: fieldVal };
                }
            }
            break;
        case "mandatory":
            if (fieldVal && (dataVal == undefined || dataVal == null || dataVal === "")) {
                return { code: "ERR02", message: Lyte.errorCodes.ERR02 };
            }
            break;
        case "maximum":
            if (typeof dataVal == "number" && dataVal > fieldVal) {
                return { code: "ERR04", message: Lyte.errorCodes.ERR04, expected: fieldVal };
            }
            break;
        case "minimum":
            if (typeof dataVal == "number" && dataVal < fieldVal) {
                return { code: "ERR05", message: Lyte.errorCodes.ERR05, expected: fieldVal };
            }
            break;
        case "maxLength":
        case "maxItems":
            if (dataVal && dataVal.length > fieldVal) {
                return { code: "ERR06", message: Lyte.errorCodes.ERR06, expected: fieldVal };
            }
            break;
        case "minLength":
        case "minItems":
            if (dataVal && dataVal.length < fieldVal) {
                return { code: "ERR07", message: Lyte.errorCodes.ERR07, expected: fieldVal };
            }
            break;
        case "pattern":
            if (typeof dataVal == "string" && !new RegExp(fieldVal).test(dataVal)) {
                return { code: "ERR08", message: Lyte.errorCodes.ERR08, expected: fieldVal };
            }
            break;
        case "uniqueItems":
            {
                if (Array.isArray(dataVal) && fieldVal) {
                    var newArr = [];
                    for (var i = 0; i < dataVal.length; i++) {
                        var val = dataVal[i];
                        if (newArr.indexOf(val) != -1) {
                            return { code: "ERR09", message: Lyte.errorCodes.ERR09 };
                        }
                        newArr.push(val);
                    }
                }
                break;
            }
        case "constant":
            if (Array.isArray(dataVal)) {
                var resp = dataVal.length == fieldVal.length && dataVal.every(function (v, i) {
                    return v === fieldVal[i];
                });
                if (!resp) {
                    return { code: "ERR10", message: Lyte.errorCodes.ERR10, expected: fieldVal };
                }
            } else if ((typeof dataVal === 'undefined' ? 'undefined' : _typeof(dataVal)) == "object") {
                var resp = store.adapter.$.compareObjects(dataVal, fieldVal);
                if (!resp) {
                    return { code: "ERR10", message: Lyte.errorCodes.ERR10, expected: fieldVal };
                }
            } else if (dataVal && dataVal != fieldVal) {
                return { code: "ERR10", message: Lyte.errorCodes.ERR10, expected: fieldVal };
            }
            break;
        case "items":
            {
                if (Array.isArray(dataVal)) {
                    for (var i = 0; i < dataVal.length; i++) {
                        for (var property in fieldVal) {
                            var resp = Lyte.checkProperty(property, dataVal[i], i, fieldVal[property]);
                            if (resp != true) {
                                return resp;
                            }
                        }
                    }
                }
                break;
            }
        case "properties":
            if ((typeof dataVal === 'undefined' ? 'undefined' : _typeof(dataVal)) == "object" && !Array.isArray(dataVal)) {
                for (var key in dataVal) {
                    for (var property in fieldVal) {
                        var resp = Lyte.checkProperty(property, dataVal[key], key, fieldVal[property]);
                        if (resp != true) {
                            return resp;
                        }
                    }
                }
            }
            break;
        case "validation":
            {
                var resp = Lyte.customValidator[fieldVal].apply(record, [key, dataVal]);
                if (resp != true) {
                    return resp;
                }
            }
    }
    return true;
};

Lyte.types = ["string", "object", "number", "boolean", "array"];

Lyte.attr = function (type, opts) {
    var obj = {};
    obj.type = type;
    if (opts == undefined) {
        opts = {};
    }
    if (this.types.indexOf(type) == -1 && !Lyte.Transform.hasOwnProperty(type)) {
        throw new Error("Not a valid field type - " + type);
    }
    Object.assign(obj, opts);
    return obj;
};

Lyte.defineRelation = function (name, type, opts) {
    var relation = { type: "relation", relType: type, relatedTo: name };
    if (opts) {
        relation.opts = opts;
    }
    return relation;
};

Lyte.belongsTo = function (name, opts) {
    return this.defineRelation(name, "belongsTo", opts);
};

Lyte.hasMany = function (name, opts) {
    return this.defineRelation(name, "hasMany", opts);
};

Lyte.Transform = {};

Lyte.customValidator = {};

Lyte.registerDataType = function (fieldTypeName, properties) {
    var exts = "extends";
    if (this.Transform.hasOwnProperty(fieldTypeName)) {
        throw new Error("Custom Field Type - " + fieldTypeName + " -  already exists.");
    }
    if (properties[exts] == undefined || Lyte.types.indexOf(properties[exts]) == -1) {
        throw new Error("Not a valid field type - " + properties[exts]);
    }
    this.Transform[fieldTypeName] = properties;
};

Lyte.registerValidator = function (customValidatorName, func) {
    if (this.customValidator.hasOwnProperty(customValidatorName)) {
        throw new Error("Custom Validator with name - " + customValidatorName + " - already exists");
    }
    this.customValidator[customValidatorName] = func;
};

Lyte.patterns = {
    email: /^([A-Za-z0-9._%\-'+/]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,22})$/,
    url: /(^(ht|f)tp(s?):\/\/[0-9a-zA-Z][-.\w]*(:[0-9])*(\/?)([a-zA-Z0-9\-.?,:'/\\+=&amp;%$#_[\]@!()*;~]*)?$)/,
    ampm: /^(AM|PM|am|pm)$/,
    hour: /^(0?[0-9]|1[0-9]|2[0-4])$/,
    minute: /^(0?[0-9]|[1-5][0-9]|60)$/,
    boolean: /^(true|false|TRUE|FALSE)$/,
    alphaNumeric: /([a-zA-Z0-9])+/,
    alphabetsOnly: /([a-zA-Z])+/,
    numeric: /([0-9])+/,
    phoneNo: /^[0-9a-zA-Z+.()\-;\s]+$/
};

Lyte.validate = function (object, key, value, component) {
    var definition = component.__data[key];
    var isError = false;
    var type = definition ? definition.type : undefined;
    for (var defKey in definition) {
        isError = Lyte.checkProperty(defKey, value, key, definition[defKey], object, type);
        if (isError !== true) {
            return isError;
        }
    }
    return false;
};

Lyte.registerPattern = function (patternName, pattern) {
    this.patterns[patternName] = pattern;
};

Lyte.errorCodes = {
    ERR01: "Primary key cannot be modified", ERR02: "Mandatory field cannot be empty", ERR03: "Type of value does not match the specified data type", ERR04: "Value is greater than the maximum value allowed",
    ERR05: "Value is less than the minimum value allowed", ERR06: "Length of string/array is greater than the maximum limit allowed", ERR07: "Length of string/array is less than the minimum limit allowed",
    ERR08: "String does not match the specified pattern", ERR09: "Values in array are not unique", ERR10: "Value is not equal to the specified constant", ERR11: "Model of related field is not defined",
    ERR12: "Model of backward relation is not defined", ERR13: "Record not found", ERR14: "Model does not match the related field model", ERR15: "Error in creating a record as a relation",
    ERR16: "Record with primary key already exists", ERR17: "Value cannot be changed because record has been deleted", ERR18: "Action not defined", ERR19: "Model not defined",
    ERR20: "Key not specified", ERR21: "'belongsTo' relationship expects a single object/id", ERR22: "Type not specified for polymorphic relation", ERR23: "Primary Key value not present", ERR24: "Error while relating record", ERR25: "Backward relation not present"
};

Lyte.registeredGlobalEvents = {};
Lyte.triggerEvent = function () {
    var args = Array.prototype.slice.call(arguments, 1);
    var eventName = arguments[0];
    var stopEvent = false;
    var s = this.registeredGlobalEvents[eventName];
    if (!s) {
        s = this.registeredGlobalEvents[eventName] = { "listeners": [] };
    } else {
        for (var i = 0; i < s.listeners.length; i++) {
            var func = s.listeners[i];
            if (func) {
                var ret = func.apply(this, args);
                if (ret === false) {
                    stopEvent = true;
                    break;
                }
            }
        }
    }
    var customEvent = new CustomEvent(eventName, { "detail": args });
    if (!stopEvent) {
        document.dispatchEvent(customEvent);
    }
};

Lyte.addEventListener = function (eventName, func) {
    if (typeof func !== "function") {
        Lyte.error("Second parameter to Lyte.Component.addGlobalEventListener() must be a function");
        return;
    }
    var s = this.registeredGlobalEvents[eventName];
    if (!s) {
        s = this.registeredGlobalEvents[eventName] = { "listeners": [] };
    }
    var d = s.listeners.push(func);
    return eventName + "-" + (d - 1);
};

Lyte.removeEventListener = function (id) {
    if (!id) {
        Lyte.error("listener unique id not specified");
        return;
    }
    var globalId = id.split("-");
    var s = this.registeredGlobalEvents[globalId[0]];
    if (!s || !s.listeners[globalId[1]]) {
        Lyte.error("No such listener registered");
        return;
    }
    s.listeners[globalId[1]] = null;
};

Lyte.deepCopyObject = function (obj) {
    var targetVal = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
    var current,
        copies = [{ source: obj, target: targetVal }],
        keys,
        propertyIndex,
        descriptor,
        nextSource,
        indexOf,
        sourceReferences = [obj];
    var cloneObject = copies[0].target,
        targetReferences = [cloneObject];
    while (current = copies.shift()) {
        keys = Object.keys(current.source);
        for (propertyIndex = 0; propertyIndex < keys.length; propertyIndex++) {
            descriptor = Object.getOwnPropertyDescriptor(current.source, keys[propertyIndex]);
            if (!descriptor.value || _typeof(descriptor.value) != "object") {
                Object.defineProperty(current.target, keys[propertyIndex], descriptor);
                continue;
            }
            nextSource = descriptor.value;
            descriptor.value = Array.isArray(nextSource) ? [] : nextSource instanceof Set ? new Set() : Object.create(Object.getPrototypeOf(nextSource));
            indexOf = sourceReferences.indexOf(nextSource);
            if (indexOf != -1) {
                descriptor.value = targetReferences[indexOf];
                Object.defineProperty(current.target, keys[propertyIndex], descriptor);
                continue;
            }
            sourceReferences.push(nextSource);
            targetReferences.push(descriptor.value);
            Object.defineProperty(current.target, keys[propertyIndex], descriptor);
            copies.push({ source: nextSource, target: descriptor.value });
        }
        if (Lyte.isRecord(current.source)) {
            Object.defineProperty(current.target, "$", {
                value: {}
            });
            current.target.$.isNew = current.source.$.isNew;
            current.target.$.isModified = current.source.$.isModified;
            current.target.$.isDeleted = current.source.$.isDeleted;
            current.target.$.pK = current.source.$.pK;
            current.target.$._attributes = current.source.$._attributes;
            if (current.source.$.hasOwnProperty("deepNest")) {
                current.target.$.deepNest = current.source.$.deepNest;
            }
            if (current.source.$.hasOwnProperty("partialType")) {
                current.target.$.partialType = current.source.$.partialType;
            }
        }
        if (Array.isArray(current.source)) {
            if (current.source.partial) {
                Object.defineProperty(current.target, "partial", {
                    value: current.source.partial
                });
            }
        }
    }
    return cloneObject;
};

Lyte.resolvePromises = function (promises) {
    if (typeof promises == "string" || promises instanceof Promise) {
        return promises;
    } else {
        if (Array.isArray(promises)) {
            return promiseArray(promises);
        } else if ((typeof promises === 'undefined' ? 'undefined' : _typeof(promises)) == "object") {
            return promiseHash(promises);
        }
    }

    function promiseHash(promiseObj) {
        var actPromKeys = [],
            promises = [],
            promiseKeys = Object.keys(promiseObj);
        promiseKeys.forEach(function (key) {
            var value = promiseObj[key];
            if (value instanceof Promise) {
                actPromKeys.push(key);
                promises.push(value);
            }
        });
        if (!promises.length) {
            return Promise.resolve(promiseObj);
        } else {
            var obj = {},
                promise = new Promise(function (resolve, reject) {
                Promise.all(promises).then(function (data) {
                    promiseKeys.forEach(function (promiseKey) {
                        if (actPromKeys.indexOf(promiseKey) != -1) {
                            obj[promiseKey] = data[actPromKeys.indexOf(promiseKey)];
                        } else {
                            obj[promiseKey] = promiseObj[promiseKey];
                        }
                    });
                    resolve(obj);
                }, function (err) {
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
        promiseArray.every(function (item, i) {
            if (item instanceof Promise) {
                hasPromise = true;
                return false;
            }
            return true;
        });
        if (!hasPromise) {
            return Promise.resolve(promiseArray);
        }
        var promise = new Promise(function (resolve, reject) {
            Promise.all(promiseArray).then(function (data) {
                promiseArray.forEach(function (key, index) {
                    array[index] = data[index];
                });
                resolve(array);
            }, function (err) {
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
    this.defProperty = function (obj, key, val) {
        var obj1 = {};
        if (val.get) {
            obj1.get = val.get;
        }
        if (val.set) {
            obj1.set = val.set;
        }
        Object.defineProperty(obj, key, obj1);
    };

    var classDef = function (_HTMLElement) {
        _inherits(classDef, _HTMLElement);

        function classDef() {
            _classCallCheck(this, classDef);

            var _this = _possibleConstructorReturn(this, (classDef.__proto__ || Object.getPrototypeOf(classDef)).call(this));

            if (constructor) {
                constructor.apply(_this, Array.from(arguments));
            }
            return _this;
        }

        return classDef;
    }(HTMLElement);

    var staticDef = definition.static;
    if (staticDef) {
        for (var key in staticDef) {
            if (_typeof(staticDef[key]) === "object") {
                this.defProperty(classDef, key, staticDef[key]);
            } else {
                Object.defineProperty(classDef, key, {
                    value: staticDef[key]
                });
            }
        }
        delete definition.static;
    }
    for (var key in definition) {
        if (_typeof(definition[key]) === "object") {
            this.defProperty(classDef.prototype, key, definition[key]);
        } else {
            Object.defineProperty(classDef.prototype, key, { value: definition[key] });
        }
    }
    definition.static = staticDef[key];
    definition.constructor = constructor;
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // document is already ready to go
        customElements.define(customElementName, classDef);
    } else {
        Lyte.toBeRegistered.push({ name: customElementName, def: classDef });
    }
};

function domContentLoaded1() {
    document.head.appendChild(Lyte.$.assetsDiv);
    var comp = Lyte.toBeRegistered;
    if (comp.length) {
        for (var j = 0; j < comp.length; j++) {
            customElements.define(comp[j].name, comp[j].def);
        }
        Lyte.toBeRegistered = [];
    }
}

if (document.readyState === "complete" || document.readyState === "interactive") {
    domContentLoaded1();
} else {
    document.addEventListener("DOMContentLoaded", function (e) {
        domContentLoaded1();
    }, true);
};

(function (window) {
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
    var globalDOMEvents = ["focus", "focusin", "focusout", "resize", "scroll", "click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "change", "select", "submit", "keydown", "keypress", "keyup", "contextmenu"];
    var registerHelperStr = "registerHelper";
    var delStr = "delete";

    function defProp() {
        Object.defineProperty.apply(Object, arguments);
    }

    function makeSet(obj, key) {
        if (!obj[key]) {
            defProp(obj, key, {
                value: new Set(),
                enumerable: false,
                writable: true,
                configurable: true
            });
        }
    }

    function makeArray(obj, key) {
        if (!obj[key]) {
            defProp(obj, key, {
                value: [],
                enumerable: false,
                writable: true,
                configurable: true
            });
        }
    }

    function createDocFragment() {
        return document.createDocumentFragment();
    }

    function createElement(elm) {
        return document.createElement(elm);
    }

    function _insertBefore(parent, newNode, refNode) {
        parent.insertBefore(newNode, refNode);
    }

    function deleteBindingCheckSize(obj, key, valToDelete) {
        obj[key][delStr](valToDelete);
        if (!obj[key].size) {
            delete obj[key];
        }
    }
    _Lyte.registerErrorCodes({
        "LC001": "Error while parsing custom prop handler attribute {0}. Check if the value provided is a valid JSON",
        "LC002": "{0} Component is not compiled. Please compile using Lyte CLI",
        "LC003": "Helper named {0} is not defined",
        "LC004": "Action named {0} doesn't exists",
        "LC005": "Lyte.objectUtils doesn't support {0} function",
        "LC006": "Lyte.arrayUtils doesn't support {0} function",
        "LC007": "Component name not specified in Lyte.Component.render",
        "LC008": "Specified outlet {0} doesn't exists - Lyte.Component.render",
        "LC009": "Method named {0} doesn't exists in {1} component",
        "LC010": "Parent Node / reference Node not provided for insertBefore method"
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
    if (navigator.userAgent.match(/rv:11/)) {
        _Lyte._ie = true;
        window.action = function () {
            return;
        };
    }
    if (navigator.userAgent.match('Edge')) {
        var s = createElement("div");
        s.innerHTML = "<template><div>c</div></template>";
        if (s.querySelector("template").childNodes.length) {
            _Lyte._ie = true;
        } else {
            _Lyte._ed = true;
        }
        s.remove();
    }

    if (_Lyte._ie || _Lyte._ed) {
        var doc = createDocFragment();
        doc.appendChild(document.createTextNode("  dummy "));
        doc.childNodes[0].replaceWith(document.createTextNode("changed"));
        if (doc.childNodes[0].textContent !== "changed") {
            _Lyte._rwpf = true;
        }
        _Lyte._ms = true;
    }

    _Lyte.Component = {};

    var _LyteComponent = _Lyte.Component;

    _Lyte.arrayUtils = function () {
        //arrayFunctions
        return _LC.aF.apply(_LC, arguments);
    };
    _Lyte.objectUtils = function () {
        //objectFunctions
        return _LC.oF.apply(_LC, arguments);
    };

    _LyteComponent.register = function () {
        _LC.registerComponent.apply(_LC, arguments);
    };

    _LyteComponent.registerHelper = function () {
        _LC.registerHelper.apply(_LC, arguments);
    };
    _LyteComponent.set = function () {
        _LC.set.apply(_LC, arguments);
    };
    _LyteComponent.registeredHelpers = {};
    _LyteComponent.registeredComponents = {};
    function noop() {}
    _LyteComponent.registerCustomPropHandler = function (propName) {
        var dasherized = _LC.String.dasherize(propName);
        propName = _LC.String.toCamelCase(propName);
        if (_LC.customPropHandlers.indexOf(propName) === -1) {
            _LC.customPropHandlers.push(propName);
            customElementPrototype.prototype[propName] = function () {
                var argsLength = arguments.length;
                var arg0 = arguments[0];
                if (!arg0) {
                    //Read all the values
                    var obj = {};
                    for (var key in this.component.data) {
                        if (key.startsWith(propName)) {
                            var objKey = key.substring(propName.length);
                            objKey = _LC.String.lowerCaseFirstLetter(objKey);
                            obj[objKey] = this.component.data[key];
                        }
                    }
                    return obj;
                } else if (typeof arg0 === "string") {
                    if (argsLength > 1) {
                        //Set a value
                        this.set(propName + _LC.String.upperCaseFirstLetter(arg0), arguments[1]);
                    } else {
                        //Read a value
                        var actKey = propName + _LC.String.upperCaseFirstLetter(arg0);
                        return this.component.data[actKey];
                    }
                } else if ((typeof arg0 === 'undefined' ? 'undefined' : _typeof(arg0)) === "object") {
                    //Write a set of values
                    for (var _key in arg0) {
                        var _objKey = propName + _LC.String.upperCaseFirstLetter(_key);
                        this.set(_objKey, arg0[_key]);
                    }
                }
            };
            _LC.customPropRegex = new RegExp("^(" + _LC.customPropHandlers.join("|") + ")");
        }
    };
    _LyteComponent.unregisterComponent = function (componentName) {
        if (_LyteComponent.registeredComponents[componentName]) {
            var comp = _LC._registeredComponents[componentName];
            if (comp.activeInstances > 0) {
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
                var template = document.querySelector("template[tag-name=" + componentName + "]");
                if (template) {
                    template.remove();
                }
                if (comp._depthTemp) {
                    comp._depthTemp.remove();
                }
            }
        } else {
            _Lyte.warn("Component " + componentName + " not yet registered");
        }
    };

    var elementPrototype = typeof HTMLElement !== "undefined" ? HTMLElement : Element;

    function onDomContentForLyte() {
        if (!_Lyte._ie) {
            document.body.appendChild(_LC.lyteComponentsDiv);
            document.body.appendChild(_LC.tDiv);
            if (_LC.needDummyComponentsDiv) {
                document.body.appendChild(_LC.dummyLyteComponentsDiv);
            } else {
                _LC.dummyLyteComponentsDiv.remove();
                _LC.dummyLyteComponentsDiv = undefined;
            }
        }
        document.body.appendChild(_LC.hDiv);
        var bodyEvents = globalDOMEvents;
        for (var _i2 = 0; _i2 < bodyEvents.length; _i2++) {
            var evnt = bodyEvents[_i2];
            document.body.addEventListener(evnt, globalEventHandler, true);
        }
        var comp = _LC.toBeRegistered;
        if (comp.length) {
            for (var j = 0; j < comp.length; j++) {
                customElements.define(comp[j].name, comp[j].def);
            }
            _LC.toBeRegistered = [];
        }
        if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
            var style = createElement("style");
            style.innerHTML = "* { cursor : pointer}";
            document.head.appendChild(style);
        }
    }

    document.addEventListener("change", function (event) {
        var target = event.target || event.srcElement;
        if (!target._attributeDetails) {
            return;
        }
        var attributeName = "value";
        if (target.type === "checkbox" || target.type === "radio") {
            attributeName = "checked";
        }
        var contextSwitchArray = [];
        var attrNode;
        var attrDetail = target._attributeDetails[attributeName];
        if (!attrDetail || !attrDetail.isLbind) {
            return;
        }
        //attrNode = (attributeName === "checked") ? target._attributeDetails[attributeName].bindedNode : target.getAttributeNode(attributeName);
        var callee = target;
        if (!target._callee) {
            while (callee && !_LC.isCustomElement(callee) && callee.tagName !== "LYTE-YIELD") {
                if (callee.tagName === "BODY") {
                    callee = null;
                    break;
                }
                callee = callee.parentNode;
            }
            if (callee && callee.tagName === "LYTE-YIELD") {
                target._callee = callee._registerYield._callee;
            } else {
                target._callee = callee;
            }
        }
        var self = target._callee;
        if (target) {
            _LC.adCx(target, contextSwitchArray);
        }
        var obj = _LC.getNew(self.component.data, attrDetail.dynamicValue);
        _LC.set(obj.context, obj.lastKey, target[attributeName]);
        if (target) {
            _LC.rmCx(target, contextSwitchArray);
        }
    });
    var globalEventHandler = function globalEventHandler(ev) {
        var evnt = ev.type;
        var target = ev.target,
            toRemove;
        if (!window.event) {
            toRemove = true;
            window.event = ev;
        }
        var eventStopped = false;
        while (target && target.getAttribute && !target.getAttribute(evnt) && target.tagName != "BODY") {
            if (_LC.hasLyteEvents(target, evnt)) {
                eventStopped = _LC.handleLyteEvents(target, ev);
                if (eventStopped) {
                    break;
                }
            }
            target = target.parentNode;
        }
        if (eventStopped || !target) {
            return;
        }
        var callee = target;
        if (!target._callee) {
            while (callee && !_LC.isCustomElement(callee) && callee.tagName !== "LYTE-YIELD") {
                if (callee.tagName === "BODY") {
                    callee = null;
                    break;
                }
                callee = callee.parentNode;
            }
            if (callee && callee.tagName === "LYTE-YIELD") {
                target._callee = callee._registerYield._callee;
            } else {
                target._callee = callee === target ? undefined : callee;
            }
        }
        if (target._evBoundEvents && target._evBoundEvents[evnt]) {
            //Not needed - but check and remove
            var actions = target._callee ? target._callee.constructor._actions : target.constructor._actions;
            //let actions = target.constructor._actions;
            var actObj = target._evBoundEvents[evnt];
            var cloneActObj = _Lyte.deepCopyObject(actObj);
            cloneActObj.args.shift();
            _LC.throwAction.call(target, target, evnt, cloneActObj, undefined, undefined, target, ev);
        } else if (target.getAttribute && target.getAttribute(evnt)) {
            var _actions = target._callee.constructor._actions;
            var func = target.getAttribute(evnt).split(" => ")[1];
            var evntType = evnt;
            if (ev.currentTarget != document.body) {
                evntType = "on" + evnt;
            }
            var _actObj = target._boundEvents[evntType];
            var _cloneActObj = _Lyte.deepCopyObject(_actObj);
            _cloneActObj.args.shift();
            _LC.throwAction.call(target._callee, target._callee, evnt, _cloneActObj, undefined, undefined, target, ev);
        }
        if (target.tagName === "LABEL") {
            var input = target.querySelector("input");
            if (input && input.getAttribute(evnt)) {
                var _actions2 = target._callee.constructor._actions;
                var _func = input.getAttribute(evnt).split(" => ")[1];
                //	let actObj = target._callee.constructor.getHelper(func);
                var _actObj2 = target._boundEvents[evnt];
                var args = Array.from(_actObj2.args);
                var _cloneActObj2 = Object.assign({}, _actObj2);
                args.shift();
                _cloneActObj2.args = args;
                _LC.throwAction.call(target._callee, target._callee, evnt, _cloneActObj2, undefined, undefined, input, ev);
            }
        }
        if (toRemove) {
            window.event = undefined;
        }
    };

    var LyteYield = function (_HTMLElement2) {
        _inherits(LyteYield, _HTMLElement2);

        function LyteYield() {
            _classCallCheck(this, LyteYield);

            return _possibleConstructorReturn(this, (LyteYield.__proto__ || Object.getPrototypeOf(LyteYield)).apply(this, arguments));
        }

        _createClass(LyteYield, [{
            key: 'disconnectedCallback',
            value: function disconnectedCallback() {
                if (_LC.ignoreDisconnect || this._deleted) {
                    return;
                }
                this._deleted = true;
                var nodeContextSwitchArray = [];
                _LC.adCx(this, nodeContextSwitchArray);
                _LC.removeSelectedBindingDeep(this._properties, this.component.data);
                var node = this._registerYield;
                if (!node) {
                    return;
                }
                var toAppendContextSwitchArray = [];
                //newContext not needed
                var del = "delete"; //for ie 11.0
                _LC.adCx(node, toAppendContextSwitchArray);
                for (var key in this._dynamicProperty) {
                    if (this._dynamicProperty[key].isActualNode) {
                        this._dynamicProperty[key].isActualNode._helperNodes[del](this);
                    } else {
                        var helperNodes = node._callee.getProperty(key)._helperNodes;
                        if (helperNodes) {
                            helperNodes[del](this);
                        }
                    }
                }
                this._dynamicProperty = {};
                for (var _i3 = 0; _i3 < this._helpers.length; _i3++) {
                    node._callee.removeHelpers(this._helpers[_i3]);
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
        }, {
            key: 'getProperty',
            value: function getProperty(key) {
                var arr = key.split('.');
                var property = this;
                if (!property._properties[arr[0]]) {
                    property._properties[arr[0]] = {};
                }
                property = property._properties[arr[0]];

                defProp(property, '_path', { enumerable: false, value: arr[0] });
                for (var _i4 = 1; _i4 < arr.length; _i4++) {
                    if (!property[arr[_i4]]) {
                        property[arr[_i4]] = {};
                        defProp(property[arr[_i4]], '_path', { enumerable: false, value: property._path + "." + arr[_i4] });
                    }
                    property = property[arr[_i4]];
                }
                return property;
            }
        }]);

        return LyteYield;
    }(HTMLElement);

    customElements.define("lyte-yield", LyteYield);

    var customElementPrototype = function (_elementPrototype) {
        _inherits(customElementPrototype, _elementPrototype);

        function customElementPrototype() {
            _classCallCheck(this, customElementPrototype);

            var _this3 = _possibleConstructorReturn(this, (customElementPrototype.__proto__ || Object.getPrototypeOf(customElementPrototype)).call(this));

            if (!_LyteComponent.registeredComponents[_this3.localName]) {
                return _possibleConstructorReturn(_this3);
            }
            _this3.constructor.activeInstances++;
            _this3.component = new _this3.constructor.component();
            _this3.data = {};
            _this3._properties = {};
            _this3.component.methods = {};
            //        this.component.data = this.constructor._data ? this.constructor._data() : {};
            //comment the following two when return cli update is done.
            _this3.component.data = {};
            var data = _this3.constructor._data ? _this3.constructor._data() : {};
            var def = "default";
            for (var _key2 in data) {
                _this3.component.data[_key2] = data[_key2][def];
            }
            _this3.component.data.errors = {};
            _this3.component.__data = data;
            for (var _key3 in _this3.constructor._methods) {
                _this3.component.methods[_key3] = _this3.constructor._methods[_key3];
            }
            defProp(_this3.component.data, '__component__', {
                value: _this3,
                configurable: true,
                writable: true,
                enumerable: false
            });
            _this3.component.$node = _this3;
            _this3.callback("constructor");
            _this3._actions = _this3._actions ? _this3._actions : {};
            _this3._callee = _this3._callee || _this3.getCallee(_this3.parentNode);
            //checking lyte.attr ytpe and given default value type
            for (var key in _this3.component.data) {
                var error = _LC.handleValidation(_this3.component.data, key, _this3.component.data[key], _this3.component);
                if (error) {
                    _this3.component.data[key] = undefined;
                }
            }
            return _this3;
        }

        _createClass(customElementPrototype, [{
            key: 'getMethods',
            value: function getMethods(arg0) {
                return this.component.getMethods(arg0);
            }
        }, {
            key: 'setMethods',
            value: function setMethods(arg0, arg1) {
                return this.component.setMethods(arg0, arg1);
            }
        }, {
            key: 'getData',
            value: function getData(arg0) {
                return this.component.getData(arg0);
            }
        }, {
            key: 'setData',
            value: function setData(arg0, arg1) {
                return this.component.setData(arg0, arg1);
            }
        }, {
            key: 'getCallee',
            value: function getCallee(callee) {
                while (callee && !_LC.isCustomElement(callee) && callee.tagName !== "LYTE-YIELD") {
                    if (callee.tagName === "BODY") {
                        callee = null;
                        break;
                    }
                    callee = callee.parentNode;
                }
                if (callee && callee.tagName === "LYTE-YIELD") {
                    return callee._registerYield._callee;
                }
                return this === callee ? undefined : callee;
            }
        }, {
            key: 'afterConnected',
            value: function afterConnected() {
                //initProperties is used because, we may have cases where the component wouldn't have been registered but 
                //it would be in dom already with some attributes. In those cases we can store the data in _initProperties as key, value.
                //These properties would then be applied to the component, once it gets instantiated. 

                //This is done, in order to solve when on a string value update of an if helper, the binding in the true or false case must be established. 
                //Without this, we won't establish the _properties in the component to the actual Data. 

                var obsattr = this.constructor._observedAttributes;
                for (var _i5 = 0; _i5 < obsattr.length; _i5++) {
                    var key = obsattr[_i5];
                    var prop = this.getProperty(key);
                    defProp(prop, '__fromComponent', {
                        value: true,
                        enumerable: false
                    });
                }
                this.getProperty("errors");
                if (this._initProperties) {
                    var initProperties = this._initProperties;
                    for (var _key4 in initProperties) {
                        var actVal = void 0;
                        if (this.component.__data[_key4] && this.component.__data[_key4].type !== _LC.getDataType(initProperties[_key4]) && (initProperties[_key4] !== undefined || this.component.__data[_key4].type === "boolean")) {
                            actVal = _LC.typeCast(initProperties[_key4], this.component.__data[_key4].type);
                        } else {
                            actVal = initProperties[_key4];
                        }
                        var error = _LC.handleValidation(this.component.data, _key4, actVal, this.component);
                        if (!error) {
                            this.component.data[_key4] = actVal;
                        }
                    }
                    this._initProperties = undefined;
                }
                if (this._initMethods) {
                    var initMethods = this._initMethods;
                    for (var _key5 in initMethods) {
                        this.component.methods[_key5] = initMethods[_key5];
                    }
                    this._initMethods = undefined;
                }
                this.callback('init');
                this.onCallBack('init');
                this.registerYields();
                if (this.component.data.lyteUnbound) {
                    _LC.unbound = true;
                }
                var content = this.renderNodes(this.constructor._template, this.constructor._dynamicNodes, undefined, undefined, undefined, undefined, this.constructor._templateContent);
                return content;
            }
            //This is the function where the actual rendering takes place. 
            //It takes the template, finds the actual dynamic nodes uwing dynamicNodes argument and then binds each node with the associated
            //property by calling bindNode. 

        }, {
            key: 'getDynamicNode',
            value: function getDynamicNode(content, positions) {
                var dynamicN = content;
                for (var i = 0; i < positions.length; i++) {
                    dynamicN = dynamicN.tagName != "TEMPLATE" || _Lyte._ie ? dynamicN.childNodes[positions[i]] : dynamicN.content.childNodes[positions[i]];
                }
                return dynamicN;
            }
            //RN

        }, {
            key: 'renderNodes',
            value: function renderNodes(toAppend, dynamicNodes, helperNode, options, establishBindings, returnVal, templateContent) {
                options = options || {};
                var content = void 0;
                /*if(_Lyte._ie){
                    let newFrag = toAppend.cloneNode(true, "lyte");
                    this.constructor.splitTextNodes(newFrag);
                    content = newFrag;
                }
                else{
                    content = toAppend.cloneNode(true, "lyte");
                }*/
                var templateDepthHandlingNeeded = false;
                if (_Lyte._ms || !toAppend) {
                    templateDepthHandlingNeeded = true;
                    content = _LC.getContentForIE(templateContent, this.constructor);
                } else if (toAppend.hasAttribute("depth")) {
                    templateDepthHandlingNeeded = true;
                    content = _LC.getContentForIE(toAppend, this.constructor);
                } else {
                    content = toAppend.content.cloneNode(true, "lyte");
                }
                var updateHelpers = [],
                    processLast = [],
                    helperFunc = void 0,
                    stoppedNode = void 0;
                for (var _i6 = 0; _i6 < dynamicNodes.length; _i6++) {
                    var info = dynamicNodes[_i6],
                        type = info.type,
                        pos = info.position,
                        dynamicN = content,
                        helperInfo = void 0;
                    dynamicN = this.getDynamicNode(dynamicN, pos);
                    if (type === "componentDynamic") {
                        if (options.node) {
                            dynamicN._cx = options;
                        } else if (helperNode) {
                            dynamicN._cx = helperNode._cx;
                        }
                    } else if (type === "text") {
                        this.bindNode(dynamicN, undefined, helperNode, options, dynamicNodes[_i6], processLast, establishBindings);
                    } else if (type === "attr") {
                        dynamicN._attributeDetails = info.attr;
                        if (dynamicN.nodeName === "LYTE-YIELD") {
                            dynamicN._callee = this;
                            dynamicN.component = {};
                            dynamicN.component.data = {};
                            defProp(dynamicN.component.data, "__component__", {
                                value: dynamicN,
                                configurable: true,
                                writable: true,
                                enumerable: false
                            });
                            dynamicN._properties = {};
                            for (var j = 0; j < dynamicN.attributes.length; j++) {
                                var attr = dynamicN.attributes[j];
                                if (attr.nodeName !== "is" && attr.nodeName !== "yield-name") {
                                    dynamicN._properties[_LC.String.toCamelCase(attr.nodeName)] = {};
                                }
                            }
                        }
                        var toBeRemoved = [];
                        for (var key in info.attr) {
                            var _attr = info.attr[key];
                            _attr._depthTemp = info._depthTemp;
                            var attrName = key;
                            if (_attr && (_attr.dynamicValue || _attr.helperInfo)) {
                                if (options.node) {
                                    dynamicN._cx = options;
                                } else if (helperNode) {
                                    dynamicN._cx = helperNode._cx;
                                }
                                var actionName = void 0,
                                    boundName = void 0;
                                if (_attr.helperInfo && _attr.helperInfo.name === "action") {
                                    dynamicN._boundEvents = dynamicN._boundEvents || {};
                                    actionName = _attr.helperInfo.args[0];
                                    if (actionName.startsWith('"') || actionName.startsWith("'")) {
                                        boundName = actionName.substring(1, actionName.length - 1);
                                    } else {
                                        // _Lyte.warn("Deprecation warning. Action name " + actionName + " must be in quotes");
                                        boundName = actionName;
                                    }
                                    dynamicN._boundEvents[attrName] = { "name": boundName, "args": _attr.helperInfo.args };
                                }
                                if (!_attr.globalEvent) {
                                    /*this.bindNode(dynamicN.getAttributeNode(attrName), toBeRemoved, helperNode, options, attr, undefined, establishBindings);
                                     */
                                    if (!dynamicN.hasAttribute(attrName)) {
                                        dynamicN.setAttribute(attrName, "{{dummy}}");
                                    }
                                    var node = this.bindNode(dynamicN.attributes.getNamedItem(attrName), toBeRemoved, helperNode, options, _attr, undefined, establishBindings);
                                    if (node !== dynamicN.attributes.getNamedItem(attrName)) {
                                        dynamicN._removedAttributes = dynamicN._removedAttributes || {};
                                        dynamicN._removedAttributes[attrName] = node;
                                    }
                                }
                            }
                        }
                        //Added now
                        if (info.attr && Object.keys(info.attr).length) {
                            dynamicN._callee = this;
                        }
                        for (var d = 0; d < toBeRemoved.length; d++) {
                            dynamicN.removeAttribute(toBeRemoved[d]);
                        }
                    } else if (/^(for|forIn|component)$/.test(type)) {
                        if (options.node) {
                            dynamicN._cx = options;
                        } else if (helperNode) {
                            dynamicN._cx = helperNode._cx;
                        }
                        dynamicN._dynamicNodes = info.dynamicNodes;
                        if (_Lyte._ms) {
                            dynamicN._templateContent = info.templateContent;
                        }
                        if (info.actualTemplate) {
                            dynamicN._templateContent = info.actualTemplate;
                        }
                        var _returnVal = void 0;
                        switch (type) {
                            case "for":
                                _returnVal = this.updateForHelper(dynamicN, { "type": "default" }, options.node ? options : undefined, establishBindings);
                                break;
                            case "forIn":
                                _returnVal = this.updateForInHelper(dynamicN, { "type": "default" }, options.node ? options : undefined, establishBindings);
                                break;
                            case "component":
                                _returnVal = this.updateDynamicComponent(dynamicN, false, options.node ? options : undefined, establishBindings);
                        }
                        if (_returnVal) {
                            updateHelpers.push(_returnVal);
                        }
                    } else if (/^(if|switch)$/.test(type)) {
                        var def = "default";
                        dynamicN._cases = info.cases;
                        dynamicN._default = info[def];
                        if (options.node) {
                            dynamicN._cx = options;
                        } else if (helperNode) {
                            dynamicN._cx = helperNode._cx;
                        }
                        if (info.actualTemplate) {
                            dynamicN._templateContent = info.actualTemplate;
                            if (!dynamicN._origTemplate) {
                                if (_Lyte._ie) {
                                    dynamicN._origTemplate = createElement("template");
                                } else {
                                    dynamicN._origTemplate = info._depthTemp.cloneNode(true);
                                }
                                if (dynamicN.hasAttribute("value")) {
                                    dynamicN._origTemplate.setAttribute("value", dynamicN.getAttribute("value"));
                                }
                            }
                        }
                        var _returnVal2 = this.updateSwitchHelper(type, dynamicN, options.node ? options : undefined, undefined, establishBindings);
                        if (_returnVal2) {
                            updateHelpers.push(_returnVal2);
                            var isBreak = _returnVal2.toAppendMain.querySelector("template[is=break]");
                            if (isBreak) {
                                dynamicN._isStopped = "break";
                                content = this.constructor.getTrimmedContent(content, info.position, undefined);
                                stoppedNode = info.position;
                                break;
                            }
                            var isContinue = _returnVal2.toAppendMain.querySelector("template[is=continue]");
                            if (isContinue) {
                                dynamicN._isStopped = "continue";
                                content = this.constructor.getTrimmedContent(content, info.position, undefined);
                                //                		stoppedNode = info.position;
                                break;
                            }
                        }
                    } else if (type === "registerYield") {
                        dynamicN._dynamicNodes = info.dynamicNodes;
                        if (_Lyte._ms) {
                            dynamicN._templateContent = info.templateContent;
                        }
                        //                updateHelpers.push(dynamicN);
                        if (options.node) {
                            dynamicN._cx = options;
                        } else if (helperNode) {
                            dynamicN._cx = helperNode._cx;
                        }
                        //Added now                
                        dynamicN._callee = this;
                    } else if (type === "insertYield") {
                        if (options.node) {
                            dynamicN._cx = options;
                        } else if (helperNode) {
                            dynamicN._cx = helperNode._cx;
                        }
                        dynamicN.component = dynamicN.component || { "data": {} };
                        dynamicN._properties = dynamicN._properties || {};
                        this.updateYield(dynamicN, false, options.node ? options : undefined);
                    }
                }
                for (var _i7 = 0; _i7 < processLast.length; _i7++) {
                    var dynamicPosition = processLast[_i7].dynamicPositions;
                    var processNode = dynamicPosition.initialNode;
                    var nodeValue = dynamicPosition.dynamicNodeValue;
                    var childLen = nodeValue.childNodes.length;
                    if (!childLen) {
                        nodeValue.appendChild(document.createTextNode(""));
                        childLen = 1;
                    }
                    var startingNode = nodeValue.childNodes[0];
                    if (_Lyte._rwpf && processNode.parentNode.nodeName === "#document-fragment") {
                        while (nodeValue.childNodes.length) {
                            _insertBefore(processNode.parentNode, nodeValue.childNodes[0], processNode);
                        }
                        processNode.remove();
                    } else {
                        processNode.replaceWith.apply(processNode, nodeValue.childNodes);
                    }
                    processLast[_i7].dynamicPositions = { startingNode: startingNode, length: childLen };
                }
                if (stoppedNode) {
                    returnVal = returnVal || {};
                    returnVal.stop = true;
                }
                if (helperNode) {
                    if (options.type) {
                        helperNode._helpers[options.itemIndex] = updateHelpers;
                        if (templateDepthHandlingNeeded) {
                            content = this.constructor.createDocFragment1(content);
                        }
                        return content;
                    } else {
                        helperNode._helpers = helperNode._helpers || [];
                        helperNode._helpers.push.apply(helperNode._helpers, updateHelpers);
                        if (templateDepthHandlingNeeded) {
                            content = this.constructor.createDocFragment1(content);
                        }
                        return content;
                    }
                }
                this.executeBlockHelpers(updateHelpers);
                if (templateDepthHandlingNeeded) {
                    content = this.constructor.createDocFragment1(content);
                }
                return content;
            }
        }, {
            key: 'executeBlockHelpers',
            value: function executeBlockHelpers(updateHelpers, node) {
                for (var _i8 = 0; _i8 < updateHelpers.length; _i8++) {
                    var lastNode = updateHelpers[_i8].lastNode;
                    var parentNode = lastNode.parentNode;

                    if (lastNode._placeHolder) {
                        lastNode = lastNode._placeHolder;
                        parentNode = lastNode.parentNode;
                    }
                    //parentNode = updateHelpers[i].lastNode.parentNode || updateHelpers[i].lastNode._placeHolder.parentNode;
                    _insertBefore(parentNode, updateHelpers[_i8].toAppendMain, lastNode);
                    updateHelpers[_i8] = updateHelpers[_i8].lastNode;
                    // updateHelpers[i].lastNode.parentNode.insertBefore(updateHelpers[i].toAppendMain, updateHelpers[i].lastNode);
                    // updateHelpers[i] = updateHelpers[i].lastNode;
                    //updateHelpers[i]._parentIf = node;
                    //	    		if(!updateHelpers[i]._cx && node) {
                    //	    			updateHelpers[i]._cx = node._cx;
                    //	    		}
                }
            }
        }, {
            key: 'updateBlockHelpers',
            value: function updateBlockHelpers(updateHelpers, contextSwitchInfo) {
                for (var _i9 = 0; _i9 < updateHelpers.length; _i9++) {
                    switch (updateHelpers[_i9].getAttribute('is')) {
                        case "for":
                            this.updateForHelper(updateHelpers[_i9], { "type": "default" }, contextSwitchInfo);
                            break;
                        case "if":
                            this.updateSwitchHelper("if", updateHelpers[_i9], contextSwitchInfo);
                            break;
                        case "forIn":
                            this.updateForInHelper(updateHelpers[_i9], { "type": "default" }, contextSwitchInfo);
                            break;
                        case "switch":
                            this.updateSwitchHelper("switch", updateHelpers[_i9], contextSwitchInfo);
                            break;
                        case "component":
                            this.updateDynamicComponent(updateHelpers[_i9], false, contextSwitchInfo);
                            break;
                        case "insertYield":
                            //              this.updateYield(updateHelpers[i], false, contextSwitchInfo);
                            break;
                        case "yield":
                        case "registerYield":
                            if (contextSwitchInfo) {
                                updateHelpers[_i9]._cx = contextSwitchInfo;
                            }
                            break;
                        default:
                            if (updateHelpers[_i9].tagName === "LYTE-YIELD") {
                                this.updateYield(updateHelpers[_i9], false, contextSwitchInfo);
                            }

                    }
                }
            }
            //AttributeChangedCallback will be called for the attributes mentioned in the this._observedAttributes array. 

        }, {
            key: 'attributeChangedCallback',


            //Callback from browser, whenever any of the observed attribute changes. 
            //We call the component set, in order to affect the related changes. 
            value: function attributeChangedCallback(attr, oldValue, newValue) {
                if (this.constructor._observedMethodAttributes && this.constructor._observedMethodAttributes[attr]) {
                    return;
                }
                var actualAttr = _LC.String.toCamelCase(attr);
                var isCustomProp = _LC.customPropHandlers.indexOf(actualAttr);
                if (isCustomProp !== -1) {
                    var propValue = _LC.customPropHandlers[isCustomProp];
                    var lyteProps = newValue;
                    if (lyteProps) {
                        try {
                            lyteProps = JSON.parse(lyteProps);
                            for (var key in lyteProps) {
                                var actKey = propValue + _LC.String.upperCaseFirstLetter(key);
                                this.set(actKey, lyteProps[key]);
                            }
                        } catch (e) {
                            _Lyte.error("LC001", attr);
                        }
                    }
                    return;
                }
                if (oldValue === newValue) {
                    return;
                }
                var attrNode = this.attributes.getNamedItem(attr);
                if (attrNode) {
                    if (attrNode.__lyteIgnore) {
                        this.attributes.getNamedItem(attr).__lyteIgnore = false;
                        return;
                    }
                } else if (this["__" + attr]) {
                    this["__" + attr] = false;
                    return;
                }
                var dataType = this.component.__data[actualAttr].type;
                if (dataType !== "string") {
                    var obj = { "attr": attr, "tagName": this.tagName };
                    newValue = _LC.typeCast(newValue, dataType, obj);
                    if (obj.isError) {
                        _Lyte.warn("data type of the value provided for attribute " + attr + " of " + this.tagName + " is not valid");
                        return;
                    }
                }
                if (this.component.data[actualAttr] !== newValue) {
                    // Null check is done because when we do a removeAttribute directly on a component, the corresponding value expected is that of undefined and not null.
                    this.set(actualAttr, newValue === null ? undefined : newValue);
                } else {
                    _LC.clearError(this.component.data, actualAttr);
                }
            }

            //Used to remove helpers of specific index in a for helper. 

        }, {
            key: 'removeHelpersSpecificIndex',
            value: function removeHelpersSpecificIndex(node, index) {
                if (node._helpers[index]) {
                    for (var j = 0; j < node._helpers[index].length; j++) {
                        this.removeHelpers(node._helpers[index][j]);
                    }
                }
                if (node._forContent[index]) {
                    for (var _i10 = 0; _i10 < node._forContent[index].length; _i10++) {
                        node._forContent[index][_i10].remove();
                    }
                    var self = this;
                    Object.keys(node._items[index]._dynamicProperty).forEach(function (key) {
                        node._dynProps[key]--;
                        if (!node._dynProps[key]) {
                            var prop = self.getProperty(key);
                            if (prop._helperNodes) {
                                prop._helperNodes[delStr](node);
                            }
                        }
                    });
                    node._items[index] = { "_dynamicProperty": {}, "itemProperty": {}, "indexProperty": {} };
                }
            }
            //Used to remove all the helpers within an helper. 

        }, {
            key: 'removeHelpers',
            value: function removeHelpers(node, update, direct) {
                if (!direct) {
                    node.remove();
                    var helpersArr = node.getAttribute("is") === "component" ? this.__dc : this.__h;
                    var indexOf = helpersArr.indexOf(node);
                    if (indexOf != -1) {
                        helpersArr.splice(indexOf, 1);
                    }
                }

                var del = "delete";
                var parent = void 0;
                var contextSwitchArray = [];
                _LC.adCx(node, contextSwitchArray);
                if (node._forContent) {
                    if (node.getAttribute("is") === "for") {
                        if (node._helpers) {
                            for (var _i11 = 0; _i11 < node._helpers.length; _i11++) {
                                for (var j = 0; j < node._helpers[_i11].length; j++) {
                                    this.removeHelpers(node._helpers[_i11][j]);
                                }
                                node._helpers[_i11] = [];
                            }
                        }
                        for (var _s = 0; _s < node._forContent.length; _s++) {
                            for (var _i12 = 0; _i12 < node._forContent[_s].length; _i12++) {
                                node._forContent[_s][_i12].remove();
                            }
                        }
                        var key = node.getAttribute("item");
                        if (node._items.length) {
                            var prop = node._items[0].itemProperty;
                            for (var _i13 = 0; _i13 < node._items.length; _i13++) {
                                var dynProp = node._items[_i13]._dynamicProperty;
                                for (var dP in dynProp) {
                                    var property = this.getProperty(dP);
                                    if (property._helperNodes) {
                                        property._helperNodes[del](node);
                                    }
                                }
                            }
                            if (prop) {
                                for (var _i14 = 0; _i14 < node._items.length; _i14++) {
                                    this.removeBindings(_defineProperty({}, key, node._items[_i14].itemProperty), _defineProperty({}, key, node._attributes.items[_i14]));
                                }
                            }
                        }
                        if (!update) {
                            if (node._actualBinding) {
                                if (node._attributes.items && node._attributes.items._bindings && node._actualBinding._createdBinding) {
                                    node._attributes.items._bindings[del](node._actualBinding);
                                }
                                if (node._actualBinding._forHelpers) {
                                    node._actualBinding._forHelpers[del](node);
                                }
                                if (node._removedAttributes && node._removedAttributes.items && !node._removedAttributes.items.helperValue && node._removedAttributes.items._multipleProperty) {
                                    node._removedAttributes.items._multipleProperty[0].actProp._forHelpers[del](node);
                                }
                            }
                        }
                        node._items = [];
                    } else {
                        if (node._helpers) {
                            var keys = Object.keys(node._helpers);
                            for (var _i15 = 0; _i15 < keys.length; _i15++) {
                                for (var _j = 0; _j < node._helpers[keys[_i15]].length; _j++) {
                                    this.removeHelpers(node._helpers[keys[_i15]][_j]);
                                }
                                node._helpers[keys[_i15]] = [];
                            }
                        }
                        for (var ind in node._forContent) {
                            for (var _i16 = 0; _i16 < node._forContent[ind].length; _i16++) {
                                node._forContent[ind][_i16].remove();
                            }
                        }
                        var items = node._items;
                        var _key6 = node.getAttribute("key");
                        for (var index in items) {
                            var item = items[index];
                            var _prop = item.itemProperty;
                            var dynamicProp = item._dynamicProperty;
                            for (var _dP in dynamicProp) {
                                var _property = this.getProperty(_dP);
                                if (_property._helperNodes) {
                                    _property._helperNodes[del](node);
                                }
                            }
                            if (_prop) {
                                this.removeBindings(_defineProperty({}, _key6, node._items[index].itemProperty), _defineProperty({}, _key6, node._attributes.object[index]));
                            }
                        }
                        if (!update) {
                            if (node._actualBinding) {
                                if (node._attributes.object && node._attributes.object._bindings && node._actualBinding._createdBinding) {
                                    node._attributes.object._bindings[del](node._actualBinding);
                                }
                                if (node._actualBinding._forHelpers) {
                                    node._actualBinding._forHelpers[del](node);
                                }
                            }
                            if (node._removedAttributes.items && !node._removedAttributes.items.helperValue && node._removedAttributes.items._multipleProperty) {
                                node._removedAttributes.items._multipleProperty[0].actProp._forHelpers[del](node);
                            }
                            if (node._propBindingObject && node._attributes.object && node._attributes.object._bindings) {
                                node._attributes.object._bindings[del](node._propBindingObject);
                            }
                        }
                        node._items = {};
                    }
                } else if (node._caseContent || node._yieldContent) {
                    if (node._helpers) {
                        for (var _j2 = 0; _j2 < node._helpers.length; _j2++) {
                            this.removeHelpers(node._helpers[_j2]);
                        }
                        node._helpers = [];
                    }
                    if (node._caseContent) {
                        for (var _i17 = 0; _i17 < node._caseContent.length; _i17++) {
                            node._caseContent[_i17].remove();
                        }
                        for (var _key7 in node._dynamicProperty) {
                            if (node._dynamicProperty[_key7].isActualNode) {
                                node._dynamicProperty[_key7].isActualNode._helperNodes[del](node);
                            } else {
                                var helperNodes = this.getProperty(_key7)._helperNodes;
                                if (helperNodes) {
                                    helperNodes[del](node);
                                }
                            }
                        }
                        node._dynamicProperty = {};
                        //node._parentIf = null;
                    } else {
                        for (var _i18 = 0; _i18 < node._yieldContent.length; _i18++) {
                            node._yieldContent[_i18].remove();
                        }
                        node._dynamicProperty = {};
                    }
                } else if (node._renderedComponent) {
                    if (node._renderedComponent[node._currentComponent]) {
                        node._renderedComponent[node._currentComponent].remove();
                    }
                    for (var _key8 in node._renderedComponent) {
                        node._renderedComponent[_key8] = null;
                    }
                }
                _LC.rmCx(node, contextSwitchArray);
            }
        }, {
            key: 'updateYield',
            value: function updateYield(node, update, contextSwitchInfo) {
                if (!node._callee) {
                    node._callee = this;
                }
                var toAppend = node._callee._yields[node.getAttribute("yield-name")];
                if (!toAppend) {
                    return;
                }
                node._registerYield = toAppend;
                //ADded now
                var parentScope = toAppend._callee || node._callee._callee;
                if (!parentScope) {
                    if (_Lyte._ms) {
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
                if (!toAppend._callee) {
                    toAppend._callee = parentScope;
                }
                node._dynamicProperty = node._dynamicProperty || {};
                //set values from child component. 
                var obj = {},
                    contextSwitchingArray = {},
                    self = this,
                    contextSwitchArray = [];
                _LC.adCx(toAppend, contextSwitchArray);
                Object.keys(node._properties).forEach(function (key) {
                    contextSwitchingArray[key] = {};
                    contextSwitchingArray[key].value = parentScope.component.data[key];
                    contextSwitchingArray[key].property = parentScope._properties[key];
                    parentScope._properties[key] = node._properties[key];
                    parentScope.component.data[key] = node.component.data[key];
                });
                var content = parentScope.renderNodes(toAppend, toAppend._dynamicNodes || [], node, { "node": node }, true, undefined, toAppend._templateContent);
                if (!node.component.data.lyteUnbound) {
                    _LC.establishBindings(node._properties, node.component.data);
                }
                parentScope.executeBlockHelpers(node._helpers);
                Object.keys(node._properties).forEach(function (key) {
                    parentScope.component.data[key] = contextSwitchingArray[key].value;
                    parentScope._properties[key] = contextSwitchingArray[key].property;
                });
                _LC.rmCx(toAppend, contextSwitchArray);
                node.appendChild(content);
            }

            // It constructs/updates the dynamicComponent creation
            //upddc

        }, {
            key: 'updateDynamicComponent',
            value: function updateDynamicComponent(node, update, contextSwitchInfo, establishBindings) {
                var returnVal = void 0;
                node._callee = this;
                var keepAlive = node.hasAttribute("lyte-keep-alive");
                node._renderedComponent = node._renderedComponent || {};
                node._cx = contextSwitchInfo || node._cx;
                node._dynamicProperty = node._dynamicProperty || {};
                var componentName = node.getAttribute("component-name") || (node._attributes ? node._attributes["component-name"] : undefined);
                if (!componentName) {
                    return;
                }
                var component = void 0,
                    newComponent = false;
                if (update) {
                    if (keepAlive) {
                        _LC.ignoreDisconnect = true;
                    }
                    if (node._renderedComponent[node._currentComponent]) {
                        node._renderedComponent[node._currentComponent].remove();
                    }
                    _LC.ignoreDisconnect = false;
                    if (!keepAlive) {
                        node._dynamicProperty = {};
                    }
                    if (node._renderedComponent[componentName] && keepAlive) {
                        component = node._renderedComponent[componentName];
                    } else {
                        component = createElement(componentName);
                        newComponent = true;
                    }
                } else {
                    component = createElement(componentName);
                    newComponent = true;
                }
                if (!keepAlive && node._currentComponent) {
                    node._renderedComponent[node._currentComponent] = null;
                }
                if (newComponent) {
                    //          let componentData = {};
                    for (var _i19 = 0; _i19 < node.attributes.length; _i19++) {
                        if (node.attributes[_i19].name !== "is" && node.attributes[_i19].name !== "component-name" && node.attributes[_i19].name !== "lyte-keep-alive") {
                            component.setAttribute(node.attributes[_i19].name, node.attributes[_i19].value);
                        }
                    }
                    //          componentData = component._attributes;
                    if (node._attributes) {
                        for (var key in node._attributes) {
                            if (key !== "component-name") {
                                component.setData(_LC.String.toCamelCase(key), node._attributes[key]);
                            }
                        }
                    }
                    var toAppend = this.renderNodes(node, node._dynamicNodes, node, undefined, establishBindings, undefined, node._templateContent);
                    component.appendChild(toAppend);
                }
                if (newComponent) {
                    component._toRegEvnts = node._toRegEvnts;
                }
                if (!update) {
                    this.__dc.push(node);
                    returnVal = { "toAppendMain": component, "lastNode": node };
                } else {
                    _insertBefore(node.parentNode, component, node);
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

        }, {
            key: 'updateForHelper',
            value: function updateForHelper(node, options, contextSwitchInfo, establishBindings) {
                if (node.tagName !== "TEMPLATE") {
                    Object.keys(node).forEach(function (item) {
                        if (item !== "innerHTML" && item !== "innerText") {
                            node._origTemplate[item] = node[item];
                        }
                    });
                    if (_Lyte._ie) {
                        var div = createElement("div");
                        div.innerHTML = node._templateContent;
                        node._origTemplate.innerHTML = div.children[0].innerHTML;
                        this.constructor.splitTextNodes(node._origTemplate);
                        if (node.hasAttribute("depth")) {
                            node._origTemplate.setAttribute("depth", node.getAttribute("depth"));
                        }
                    }
                    node._origTemplate._placeHolder = document.createTextNode("");
                    node._origTemplate.setAttribute("item", node.getAttribute("item"));
                    node._origTemplate.setAttribute("index", node.getAttribute("index"));

                    if (node.hasAttribute("unbound")) {
                        //What if unbound is dynamic attribute ? 
                        node._origTemplate.setAttribute("unbound", "true");
                    }
                    //node.replaceWith(node._origTemplate._placeHolder);
                    _LC.replaceWithPf(node, node._origTemplate._placeHolder);
                    node = node._origTemplate;
                    node.setAttribute("is", "for");
                } else if (!node._placeHolder) {
                    var emptyTextNode = document.createTextNode("");
                    //node.replaceWith(emptyTextNode);
                    _LC.replaceWithPf(node, emptyTextNode);
                    node._placeHolder = emptyTextNode;
                    _LC.apdNode(node, this);
                }
                var callee = this;
                node._callee = this;
                node._attributes = node._attributes || {};
                if (options.type === "update" && node._currentItems === node._attributes.items) {
                    return {};
                }
                node._cx = contextSwitchInfo || node._cx;
                var indexValue = node.getAttribute("index");
                if (!indexValue) {
                    node.setAttribute("index", "index");
                    indexValue = "index";
                }
                var itemValue = node.getAttribute("item");
                if (!itemValue) {
                    node.setAttribute("item", "item");
                    itemValue = "item";
                }
                var initialItemValue = callee.component.data[itemValue],
                    initialIndexValue = callee.component.data[indexValue];
                var initialItemProp = callee._properties[itemValue],
                    initialIndexProp = callee._properties[indexValue];
                callee._properties[itemValue] = callee._properties[indexValue] = {};
                var items = node._attributes.items,
                    content = node.content,
                    dynamicNodes = node._dynamicNodes,
                    lastNode = node;
                if (!node._items) {
                    node._items = [];
                }
                node._dynProps = node._dynProps || {};
                var lastIndexForIteration = void 0;
                var firstIndexForIteration = void 0;
                var firstIndex = options.firstIndex;
                var secondIndex = options.secondIndex;
                var thirdIndex = options.thirdIndex;
                if (options) {
                    switch (options.type) {
                        case "remove":
                            {
                                lastIndexForIteration = firstIndex;
                                for (var _i20 = firstIndex, v = secondIndex; v > 0; v--, _i20++) {
                                    this.removeHelpersSpecificIndex(node, _i20);
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
                                for (var _i21 = firstIndex + secondIndex; _i21 < node._items.length; _i21++) {
                                    node._items[_i21]._cx.itemIndex = node._items[_i21]._cx.itemIndex - secondIndex;
                                }
                                node._items.splice(firstIndex, secondIndex);
                                node._helpers.splice(firstIndex, secondIndex);
                                node._forContent.splice(firstIndex, secondIndex);
                                break;
                            }
                        case "insert":
                            {
                                firstIndexForIteration = firstIndex;
                                lastIndexForIteration = secondIndex;
                                if (node._forContent[firstIndex]) {
                                    lastNode = node._forContent[firstIndex][0];
                                }
                                var newArr = [],
                                    newObj = [],
                                    newArr1 = [];
                                for (var _v = secondIndex, k = firstIndex; _v > 0; _v--, k++) {
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
                                for (var _i22 = firstIndex + secondIndex; _i22 < node._items.length; _i22++) {
                                    node._items[_i22]._cx.itemIndex = node._items[_i22]._cx.itemIndex + secondIndex;
                                }
                                node._forContent.splice.apply(node._forContent, [firstIndex, 0].concat(newArr1));
                            }
                            break;
                        case "replace":
                            {
                                firstIndexForIteration = firstIndex;
                                lastIndexForIteration = secondIndex;
                                this.removeHelpersSpecificIndex(node, firstIndex);
                                var _toAppendMain = createDocFragment();
                                if (node._forContent[firstIndex + 1]) {
                                    lastNode = node._forContent[firstIndex + 1][0];
                                }
                                var _newArr = [],
                                    _newObj = [],
                                    _newArr2 = [];
                                for (var _v2 = secondIndex, _k = firstIndex; _v2 > 0; _v2--, _k++) {
                                    _newArr.push([]);
                                    _newArr2.push([]);
                                    _newObj.push({});
                                }
                                node._helpers.splice.apply(node._helpers, [firstIndex, 1].concat(_newArr));
                                node._items.splice.apply(node._items, [firstIndex, 1].concat(_newObj));
                                //                  for(let i=firstIndex + secondIndex;i<node._items.length;i++) {
                                //                      let forItem = node._items[i].itemProperty._forItem;
                                //                      forItem.itemIndex = forItem.itemIndex + secondIndex - 1 ;
                                //                  }
                                for (var _i23 = firstIndex + secondIndex; _i23 < node._items.length; _i23++) {
                                    node._items[_i23]._cx.itemIndex = node._items[_i23]._cx.itemIndex + secondIndex - 1;
                                }
                                node._forContent.splice.apply(node._forContent, [firstIndex, 1].concat(_newArr2));
                                break;
                            }
                        case "splice":
                            {
                                firstIndexForIteration = firstIndex;
                                lastIndexForIteration = secondIndex;
                                for (var _i24 = thirdIndex, j = 0; _i24 > 0; _i24--, j++) {
                                    this.removeHelpersSpecificIndex(node, firstIndex + j);
                                }
                                var _toAppendMain2 = createDocFragment();
                                if (node._forContent[firstIndex + thirdIndex]) {
                                    lastNode = node._forContent[firstIndex + thirdIndex][0];
                                }
                                var _newArr3 = [],
                                    _newObj2 = [],
                                    _newArr4 = [];
                                for (var _v3 = secondIndex, _k2 = firstIndex; _v3 > 0; _v3--, _k2++) {
                                    _newArr3.push([]);
                                    _newArr4.push([]);
                                    _newObj2.push({});
                                }
                                node._helpers.splice.apply(node._helpers, [firstIndex, thirdIndex].concat(_newArr3));
                                node._items.splice.apply(node._items, [firstIndex, thirdIndex].concat(_newObj2));
                                //                  for(let i=firstIndex + secondIndex;i<node._items.length;i++) {
                                //                      let forItem = node._items[i].itemProperty._forItem;
                                //                      forItem.itemIndex = forItem.itemIndex + secondIndex - 1 ;
                                //                  }
                                for (var _i25 = firstIndex + secondIndex; _i25 < node._items.length; _i25++) {
                                    node._items[_i25]._cx.itemIndex = node._items[_i25]._cx.itemIndex + secondIndex - thirdIndex;
                                }
                                node._forContent.splice.apply(node._forContent, [firstIndex, thirdIndex].concat(_newArr4));
                                break;
                            }
                            break;
                        case "update":
                            {
                                var key = node.getAttribute("item");
                                //                  this.removeHelpers(node, true);
                                for (var _i26 = 0; _i26 < node._items.length; _i26++) {
                                    this.removeHelpersSpecificIndex(node, _i26);
                                }
                                //                  if(node._attributes.items) {
                                //                      for(let i=0;i<node._attributes.items.length && node._items[i];i++) {
                                //                          _LC.removeSelectedBindingDeep(node._items[i].itemProperty[key], node._attributes.items[i]);
                                //                      }
                                //                  }
                                node._items = [];
                            }
                        case "default":
                            {
                                node._forContent = [];
                                node._helpers = [];
                                firstIndexForIteration = 0;
                                lastIndexForIteration = items ? items.length : 0;
                            }
                            break;
                        default:
                            _Lyte.error("Error in updateForHelper");
                    }
                }
                if (!lastNode) {
                    lastNode = node;
                }
                while (lastNode !== node && lastNode.tagName === "TEMPLATE") {
                    var lastNodeType = lastNode.getAttribute("is");
                    switch (lastNodeType) {
                        case "for":
                        case "forIn":
                            lastNode = lastNode._forContent[0][0] || lastNode;
                            break;
                        case "if":
                        case "switch":
                            lastNode = lastNode._caseContent[0] || lastNode;
                            break;
                        case "component":
                            lastNode = lastNode._renderedComponent[lastNode._currentComponent] || lastNode;
                            break;
                    }
                }
                var returnVal = void 0;
                var localUnbound = false;
                var initialUnbound = _LC.unbound;
                if (node.hasAttribute("unbound")) {
                    localUnbound = true;
                    _LC.unbound = true;
                }
                node._currentItems = items;
                if (options.type !== "remove") {
                    var toAppendMain = createDocFragment();
                    for (var _k3 = firstIndexForIteration, _v4 = lastIndexForIteration; _v4 > 0; _k3++, _v4--) {
                        node._helpers[_k3] = [];
                        node._items[_k3] = { "_dynamicProperty": {}, "itemProperty": {}, "indexProperty": {} };
                        callee.component.data[itemValue] = items[_k3];
                        callee.component.data[indexValue] = _k3;
                        callee._properties[itemValue] = {};
                        callee._properties[indexValue] = {};
                        var optns = { "itemValue": itemValue, "itemIndex": _k3, "type": "for", "node": node, "indexValue": indexValue };
                        //                  defProp(callee._properties[itemValue], '_forItem', {
                        //                      enumerable: false, 
                        //                      writable: true, 
                        //                      configurable: true, 
                        //                      value : optns
                        //                  });
                        node._items[_k3]._cx = optns;
                        var breakCheck = {};
                        var toAppend = this.renderNodes(node.hasAttribute("depth") ? node._depthTemp : node, dynamicNodes, node, optns, establishBindings, breakCheck, node._templateContent);
                        var dynProps = Object.keys(node._items[_k3]._dynamicProperty);
                        for (var d = 0; d < dynProps.length; d++) {
                            var _key9 = dynProps[d];
                            node._dynProps[_key9] ? node._dynProps[_key9]++ : node._dynProps[_key9] = 1;
                        }
                        node._items[_k3].itemProperty = this.getProperty(itemValue);
                        node._items[_k3].indexProperty = this.getProperty(indexValue);
                        //                  if(options.type !== "default") {
                        if (!_LC.unbound) {
                            _LC.establishBindings(_defineProperty({}, itemValue, node._items[_k3].itemProperty), _defineProperty({}, itemValue, node._attributes.items[_k3]));
                        }
                        //                  }
                        node._forContent[_k3] = Array.from(toAppend.childNodes);
                        //Needs to revisit this and make sure it happen within renderNodes function itself;
                        //                  if(options.type !== "update") {
                        this.executeBlockHelpers(node._helpers[_k3]);
                        toAppendMain.appendChild(toAppend);
                        if (breakCheck.stop) {
                            break;
                        }
                    }
                    //Provided so that before appending the component to DOM it is reset to previous value
                    _LC.unbound = initialUnbound;
                    if (options.type === "default") {
                        returnVal = { "toAppendMain": toAppendMain, "lastNode": lastNode };
                    } else {
                        //lastNode.parentNode.insertBefore(toAppendMain, lastNode);
                        if (lastNode._placeHolder) {
                            _insertBefore(lastNode._placeHolder.parentNode, toAppendMain, lastNode._placeHolder);
                        } else {
                            _insertBefore(lastNode.parentNode, toAppendMain, lastNode);
                        }
                    }
                    if (!localUnbound && node._removedAttributes && node._removedAttributes.items && !node._removedAttributes.items.helperValue && node._removedAttributes.items._multipleProperty) {
                        _LC.establishBindings({ "items": node._removedAttributes.items._multipleProperty[0].actProp }, { "items": items });
                    }
                }
                _LC.unbound = initialUnbound;
                for (var _i27 = lastIndexForIteration; _i27 < node._items.length; _i27++) {
                    //              for(let j=0;j<node._helpers[i].length;j++) {
                    //                  node._helpers[j]._cx.itemIndex = i;
                    //              }
                    if (node._items[_i27].indexProperty) {
                        _LC.affectChanges(node._items[_i27].indexProperty);
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

        }, {
            key: 'updateForInHelper',
            value: function updateForInHelper(node, options, contextSwitchInfo, establishBindings) {
                if (node.tagName !== "TEMPLATE") {
                    Object.keys(node).forEach(function (item) {
                        if (item !== "innerHTML" && item !== "innerText") {
                            node._origTemplate[item] = node[item];
                        }
                    });
                    if (_Lyte._ie) {
                        var div = createElement("div");
                        div.innerHTML = node._templateContent;
                        node._origTemplate.innerHTML = div.children[0].innerHTML;
                        this.constructor.splitTextNodes(node._origTemplate);
                        if (node.hasAttribute("depth")) {
                            node._origTemplate.setAttribute("depth", node.getAttribute("depth"));
                        }
                    }
                    node._origTemplate._placeHolder = document.createTextNode("");
                    node._origTemplate.setAttribute("key", node.getAttribute("key"));
                    node._origTemplate.setAttribute("value", node.getAttribute("value"));
                    if (node.hasAttribute("unbound")) {
                        //What if unbound is dynamic attribute ? 
                        node._origTemplate.setAttribute("unbound", "true");
                    }

                    //node.replaceWith(node._origTemplate._placeHolder);
                    _LC.replaceWithPf(node, node._origTemplate._placeHolder);
                    node = node._origTemplate;
                    node.setAttribute("is", "forIn");
                } else if (!node._placeHolder) {
                    var emptyTextNode = document.createTextNode("");
                    //node.replaceWith(emptyTextNode);
                    _LC.replaceWithPf(node, emptyTextNode);
                    node._placeHolder = emptyTextNode;
                    _LC.apdNode(node, this);
                }
                var callee = this;
                node._callee = this;
                node._attributes = node._attributes || {};
                if (options.type === "update" && node._currentObject === node._attributes.object) {
                    return {};
                }
                contextSwitchInfo = contextSwitchInfo ? contextSwitchInfo : node._cx;
                node._cx = contextSwitchInfo;
                var key = node.getAttribute("key");
                if (!key) {
                    key = "key";
                    node.setAttribute("key", "key");
                }
                var value = node.getAttribute("value");
                if (!value) {
                    value = "value";
                    node.setAttribute("value", "value");
                }
                var initialKeyValue = callee.component.data[key];
                var initialValueValue = callee.component.data[value];
                var initialKeyProp = callee._properties[key];
                var initialValueProp = callee._properties[value];
                callee._properties[key] = callee._properties[value] = {};
                var object = node._attributes.object;
                var content = node.content;
                var dynamicNodes = node._dynamicNodes;
                var lastNode = node;
                var keysArray = [];
                if (!node._items) {
                    node._items = {};
                }
                node._dynProps = node._dynProps || {};
                if (options) {
                    switch (options.type) {
                        case "delete":
                            {
                                this.removeHelpersSpecificIndex(node, options.property);
                                var delIndex = node._keysArray.indexOf(options.property);
                                if (delIndex > -1) {
                                    node._keysArray.splice(delIndex, 1);
                                }
                                delete node._propBindingObject[options.property];
                            }
                            break;
                        case "add":
                            {
                                keysArray = [options.property];
                                node._keysArray.push(options.property);
                            }
                            break;
                        case "update":
                            {
                                node._keysArray.forEach(function (itemKey, index, array) {
                                    this.removeHelpersSpecificIndex(node, itemKey);
                                }, this);
                                node._keysArray = keysArray = object ? Object.keys(object) : [];
                                node._items = {};
                                node._propBindingObject = {};
                            }
                            break;
                        case "default":
                            {
                                node._forContent = {};
                                node._helpers = {};
                                node._keysArray = keysArray = object ? Object.keys(object) : [];
                                //                  keysArray = Object.keys(object);
                            }
                            break;
                        default:
                            _Lyte.error("Error in updateForHelper");

                    }
                }
                var returnVal = void 0;
                if (!object) {
                    var _toAppendMain3 = createDocFragment();
                    if (options.type !== "default") {
                        _insertBefore(lastNode.parentNode, _toAppendMain3, lastNode);
                    } else {
                        returnVal = { "toAppendMain": _toAppendMain3, "lastNode": lastNode };
                    }
                }
                var localUnbound = false;
                var initialUnbound = _LC.unbound;
                if (node.hasAttribute("unbound")) {
                    localUnbound = true;
                    _LC.unbound = true;
                }
                node._currentObject = object;
                if (object && options.type !== "remove") {
                    var toAppendMain = createDocFragment();
                    node._propBindingObject = node._propBindingObject || {};
                    keysArray.forEach(function (itemKey, index, array) {
                        node._helpers[itemKey] = [];
                        node._items[itemKey] = { "_dynamicProperty": {}, "itemProperty": {} };
                        callee.component.data[key] = itemKey;
                        callee.component.data[value] = object[itemKey];
                        callee._properties[key] = {};
                        callee._properties[value] = {};
                        var optns = { "itemIndex": itemKey, "itemValue": value, "keyValue": key, "type": "forIn", "node": node };
                        node._items[itemKey]._cx = optns;
                        var toAppend = this.renderNodes(node.hasAttribute("depth") ? node._depthTemp : node, dynamicNodes, node, optns, establishBindings, undefined, node._templateContent);
                        Object.keys(node._items[itemKey]._dynamicProperty).forEach(function (key) {
                            node._dynProps[key] ? node._dynProps[key]++ : node._dynProps[key] = 1;
                        });
                        node._items[itemKey].itemProperty = this.getProperty(value);
                        node._propBindingObject[itemKey] = node._items[itemKey].itemProperty;
                        node._forContent[itemKey] = Array.from(toAppend.childNodes);
                        //                    this.updateBlockHelpers(node._helpers[itemKey], optns);
                        this.executeBlockHelpers(node._helpers[itemKey]);
                        toAppendMain.appendChild(toAppend);
                    }, this);
                    //              if(options.type !== "update") {
                    if (!_LC.unbound) {
                        makeSet(node._attributes.object, "_bindings");
                        node._attributes.object._bindings.add(node._propBindingObject);
                        _LC.establishBindings(node._propBindingObject, node._attributes.object);
                    }
                    //              }
                    _LC.unbound = initialUnbound;
                    if (options.type !== "default") {
                        //lastNode.parentNode.insertBefore(toAppendMain, lastNode);
                        if (lastNode._placeHolder) {
                            _insertBefore(lastNode._placeHolder.parentNode, toAppendMain, lastNode._placeHolder);
                        } else {
                            _insertBefore(lastNode.parentNode, toAppendMain, lastNode);
                        }
                    } else {
                        returnVal = { "toAppendMain": toAppendMain, "lastNode": lastNode };
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
        }, {
            key: 'updateSwitchHelper',

            //updSH
            value: function updateSwitchHelper(type, node, contextSwitchInfo, update, establishBindings) {
                if (node.tagName !== "TEMPLATE") {
                    Object.keys(node).forEach(function (item) {
                        if (item !== "innerHTML" && item !== "innerText") {
                            node._origTemplate[item] = node[item];
                        }
                    });
                    if (_Lyte._ie) {
                        var div = createElement("div");
                        div.innerHTML = node._templateContent;
                        node._origTemplate.innerHTML = div.children[0].innerHTML;
                        this.constructor.splitTextNodes(node._origTemplate);
                        if (node.hasAttribute("depth")) {
                            node._origTemplate.setAttribute("depth", node.getAttribute("depth"));
                        }
                    }
                    node._origTemplate._placeHolder = document.createTextNode("");
                    //node.replaceWith(node._origTemplate._placeHolder);
                    _LC.replaceWithPf(node, node._origTemplate._placeHolder);
                    node = node._origTemplate;
                    node.setAttribute("is", type);
                } else if (!node._placeHolder) {
                    var emptyTextNode = document.createTextNode("");
                    //node.replaceWith(emptyTextNode);
                    _LC.replaceWithPf(node, emptyTextNode);
                    node._placeHolder = emptyTextNode;
                    _LC.apdNode(node, this);
                }
                var isNew = false;
                var lastNode = node;
                if (!node._callee) {
                    node._callee = this;
                    isNew = true;
                }
                contextSwitchInfo = contextSwitchInfo ? contextSwitchInfo : node._cx;
                node._cx = contextSwitchInfo;
                node._dynamicProperty = node._dynamicProperty ? node._dynamicProperty : {};
                var currentCaseName = void 0;
                var value = void 0;
                if (node.getAttribute("value") === "" || node.getAttribute("value")) {
                    value = node.getAttribute("value");
                } else if (node._attributes) {
                    value = node._attributes.value;
                }
                if (node._currentCase && value === node._currentCase) {
                    return;
                }
                if (value) {
                    currentCaseName = type === "if" ? "true" : value.toString();
                } else {
                    if (type === "if") {
                        currentCaseName = "false";
                    } else {
                        switch (value) {
                            case undefined:
                                currentCaseName = "undefined";
                                break;
                            case null:
                                currentCaseName = "null";
                                break;
                            case false:
                                currentCaseName = "false";
                                break;
                            case "":
                                currentCaseName = '""';
                                break;
                            case 0:
                                currentCaseName = '0';
                        }
                    }
                }
                if (currentCaseName === node._currentCase) {
                    return;
                }
                node._currentCase = currentCaseName;
                var nodeTemp = node._depthTemp || node;
                //        let currentCase = node.content.querySelector('[case=\''+currentCaseName+'\']'),scope;
                var scope = node._cases[currentCaseName];
                var defaultContent = void 0;
                if (!scope) {
                    scope = node._default;
                    defaultContent = _Lyte._ms ? scope.templateContent : nodeTemp.content.querySelector('[default]');
                    node._isDefault = true;
                    if (!defaultContent) {
                        if (node._caseContent && node._caseContent.length) {
                            this.removeHelpers(node, undefined, true);
                        }
                        node._caseContent = [];
                        var _emptyTextNode = document.createTextNode("");
                        node._caseContent.push(_emptyTextNode);
                        node._currentCaseName = currentCaseName;
                        if (update) {
                            //lastNode.parentNode.insertBefore(emptyTextNode, node);
                            if (lastNode._placeHolder) {
                                _insertBefore(lastNode._placeHolder.parentNode, _emptyTextNode, lastNode._placeHolder);
                            } else {
                                _insertBefore(lastNode.parentNode, _emptyTextNode, node);
                            }
                            return;
                        } else {
                            var _toAppendMain4 = createDocFragment();
                            _toAppendMain4.append(_emptyTextNode);
                            return { lastNode: lastNode, toAppendMain: _toAppendMain4 };
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

                if (node._caseContent && node._caseContent.length) {
                    this.removeHelpers(node, undefined, true);
                }
                var dummyScope = scope;
                var additionalContentArr = [];
                var cnt = 0;
                var dummyCaseName = currentCaseName;
                var template = void 0;
                if (defaultContent) {
                    template = defaultContent;
                } else {
                    template = _Lyte._ms ? {} : nodeTemp.content.querySelector('[case=\'' + _LC.cssEscape(dummyCaseName) + '\']');
                }
                var contentArr = [];
                while (dummyScope) {
                    var dynamicNodes = dummyScope.dynamicNodes;
                    var processedContent = this.renderNodes(template, dynamicNodes, node, undefined, establishBindings, undefined, dummyScope.templateContent);
                    contentArr.push(processedContent);
                    if (dummyScope.additional) {
                        if (dummyScope.additional.next) {
                            template = _Lyte._ms ? {} : node.content.querySelector('[case=\'' + _LC.cssEscape(dummyScope.additional.next) + '\']');
                            dummyScope = node._cases[dummyScope.additional.next];
                        } else {
                            template = _Lyte._ms ? {} : node.content.querySelector('[default]');
                            dummyScope = node._default;
                        }
                    } else {
                        break;
                    }
                }
                node._caseContent = [];
                var toAppendMain = createDocFragment();;
                for (var _i28 = 0; _i28 < contentArr.length; _i28++) {
                    if (contentArr[_i28].nodeType == 11) {
                        //                for(let j=0;j<contentArr[i].childNodes.length;j++) {
                        //                    node._caseContent.push(contentArr[i].childNodes[j]);
                        //                }
                        node._caseContent = node._caseContent.concat(Array.from(contentArr[_i28].childNodes));
                    } else {
                        node._caseContent.push(contentArr[_i28]);
                    }
                    toAppendMain.append(contentArr[_i28]);
                    //            node.parentNode.insertBefore(contentArr[i], node);
                }
                this.executeBlockHelpers(node._helpers, node);
                if (update) {
                    var returnVal = void 0;
                    if (toAppendMain.querySelector("template[is=break]")) {
                        returnVal = "break";
                    } else if (toAppendMain.querySelector("template[is=continue]")) {
                        returnVal = "continue";
                    }
                    //node.parentNode.insertBefore(toAppendMain, node);
                    if (node._placeHolder) {
                        _insertBefore(node._placeHolder.parentNode, toAppendMain, node._placeHolder);
                    } else {
                        _insertBefore(node.parentNode, toAppendMain, node);
                    }
                    return returnVal;
                } else {
                    return { "toAppendMain": toAppendMain, "lastNode": node };
                }
            }
        }, {
            key: 'dummy',
            value: function dummy(a, b) {
                var dummy = this.constructor._properties[boundValue].observer;
            }
        }, {
            key: 'callObservers',
            value: function callObservers(boundValue, key) {
                var property = this.constructor._properties[boundValue];
                var observers = property ? property.observer : undefined;
                if (observers) {
                    for (var _i29 = 0; _i29 < observers.length; _i29++) {
                        if (key.indexOf('.') === -1 || observers[_i29].path === key) {
                            this["_" + observers[_i29].functionName].apply(this);
                        }
                    }
                }
            }
        }, {
            key: 'bindNode',

            //It registers the binding of the node with the properties with which the dynamicNode depends. 
            value: function bindNode(node, toBeRemoved, helperNode, options, nodeInfo, processLast, establishBindings, isTemplate) {
                var itemValue = options.itemValue;
                var forIndex = options.itemIndex;
                var forType = options.type;
                var indexValue = options.indexValue;
                var dynamicValue = nodeInfo.dynamicValue;
                var helperFunc = nodeInfo.helperInfo;
                var nodeValue = void 0,
                    ownerElement = node.ownerElement;
                var dynamicValuesArray = [];
                //        if(node.nodeType === 2 && _LC.isCustomElement(node.ownerElement,true) ) {
                //          node = {nodeName : node.nodeName, ownerElement: ownerElement, nodeType : 2, nodeValue : node.nodeValue};
                //        }
                node._callee = this;
                var isHelper = false;
                if (helperFunc && Object.keys(helperFunc).length) {
                    isHelper = true;
                    var attrName = node.nodeName;
                    nodeValue = node.helperValue = helperFunc;
                    var helperArgs = [];
                    if (helperFunc.name === "action") {
                        var actName = helperFunc.args[0];
                        helperFunc.args[0] = actName.startsWith("'") ? actName.replace(/'/g, '') : actName;
                        if (forType) {
                            ownerElement._cx = options;
                        } else if (helperNode) {
                            ownerElement._cx = helperNode._cx;
                        }
                        actName = helperFunc.args.slice(0, 1)[0];
                        var args = helperFunc.args.slice(1, helperFunc.args.length),
                            isCustom = false;
                        var _attrName = node.nodeName;
                        if (_attrName.indexOf("-") != -1) {
                            isCustom = true;
                        }
                        helperArgs = [ownerElement, _attrName, isCustom, { name: actName, args: args }];
                        this.processHelper({ "name": helperFunc.name, "args": helperArgs }, node);
                        return;
                    } else {
                        if (helperFunc.name === "method") {
                            helperArgs = helperFunc.args;
                        } else {
                            helperArgs = this.processArgs(this, helperFunc.args, dynamicValuesArray, undefined, node);
                        }
                    }
                    nodeValue = this.processHelper({ "name": helperFunc.name, "args": helperArgs }, node);
                    if (helperFunc.name === "unescape") {
                        //              let test = node.replaceWith.apply(node,nodeValue.childNodes);
                        var obj = { initialNode: node, dynamicNodeValue: nodeValue };
                        node = { dynamicPositions: obj, "_callee": node._callee, helperValue: node.helperValue };
                        nodeValue = undefined;
                        processLast.push(node);
                    }
                } else {
                    helperFunc = {};
                    node.syntaxValue = dynamicValue;
                    var dynamicValues = [];
                    nodeValue = _LC.get(this.component.data, dynamicValue, dynamicValues);
                    dynamicValuesArray.push(dynamicValues);
                }
                if (node.nodeType === 2 && (typeof nodeValue !== "string" && (_LC.isCustomElement(node.ownerElement, true) || typeof nodeValue === "boolean") || _LC.isControlHelper(node.ownerElement))) {
                    //	let bindedNode = node;
                    node = { nodeName: node.nodeName, ownerElement: ownerElement, nodeType: 2, nodeValue: node.nodeValue, _callee: this, syntaxValue: node.syntaxValue, helperValue: node.helperValue, _attributeDetails: node._attributeDetails };
                    var tagName = node.ownerElement.tagName;
                    if (tagName == "INPUT" || tagName == "TEXTAREA" || tagName == "DIV" && node.ownerElement.hasAttribute("contenteditable")) {
                        var rA = node.ownerElement._rA = node.ownerElement._rA || [];
                        node.ownerElement._rA.push(node);
                    }
                    if (!ownerElement._origTemplate && (ownerElement.hasAttribute("lyte-for") || ownerElement.hasAttribute("lyte-if") || ownerElement.hasAttribute("lyte-switch") || ownerElement.hasAttribute("lyte-forIn")) && ownerElement.tagName !== "TEMPLATE") {
                        if (_Lyte._ie) {
                            node.ownerElement = createElement("template");
                            node.ownerElement.setAttribute("is", nodeInfo._depthTemp);
                        } else {
                            node.ownerElement = nodeInfo._depthTemp.cloneNode(true);
                        }
                        ownerElement._origTemplate = node.ownerElement;
                    }
                    //	node.ownerElement._attributeDetails[node.nodeName].bindedNode = node;
                }
                var actMultiProp = void 0;
                if (helperFunc.name !== "unbound" && !_LC.unbound) {
                    var dynamicProp = void 0;
                    if (helperNode) {
                        dynamicProp = forType ? helperNode._items[forIndex]._dynamicProperty : helperNode._dynamicProperty;
                    }
                    for (var d = 0; d < dynamicValuesArray.length; d++) {
                        var _dynamicValues = dynamicValuesArray[d];
                        for (var v = 0; v < _dynamicValues.length; v++) {
                            var actProperty = this.getProperty(_dynamicValues[v]);
                            if (helperNode) {
                                var ind = _dynamicValues[v].search(/\W/);
                                var _boundValue = void 0;
                                if (ind !== -1) {
                                    _boundValue = _dynamicValues[v].substring(0, ind);
                                } else {
                                    _boundValue = _dynamicValues[v];
                                }
                                if (_boundValue !== itemValue && _boundValue !== indexValue && (!options.node || !options.node._properties || !options.node._properties[_boundValue])) {
                                    makeSet(actProperty, "_helperNodes");
                                    actProperty._helperNodes.add(helperNode);
                                    dynamicProp[_dynamicValues[v]] ? dynamicProp[_dynamicValues[v]].push(node) : (dynamicProp[_dynamicValues[v]] = []).push(node);
                                } else {
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
                                    if (_boundValue !== indexValue) {
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
                            if (ownerElement && (ownerElement.hasAttribute("lyte-for") || ownerElement.hasAttribute("lyte-if") || ownerElement.hasAttribute("lyte-switch") || ownerElement.hasAttribute("lyte-forIn")) || ownerElement && ownerElement.tagName === "TEMPLATE" && /^(for|forIn)$/.test(ownerElement.getAttribute("is")) && !isHelper) {
                                var type = ownerElement.getAttribute("is");
                                if (type === "for" && node.nodeName === "items" || type === "forIn" && node.nodeName === "object") {
                                    if (!actProperty._forHelpers) {
                                        makeSet(actProperty, "_forHelpers");
                                    }
                                    node.ownerElement._actualBinding = actProperty;
                                    actProperty._forHelpers.add(node.ownerElement);
                                }
                            }
                            if (establishBindings) {
                                _LC.establishSelectedBinding(actProperty, this.component.data, this);
                            }
                        }
                        if (_dynamicValues.length > 1) {
                            node._multipleProperty = node._multipleProperty || [];
                            node._multipleProperty.push({ "dynamicProp": actMultiProp ? undefined : dynamicProp, "actProp": this.getProperty(_dynamicValues[0]), "helperNode": helperNode, "dynamicValues": _dynamicValues });
                        }
                    }
                }
                nodeValue = !(typeof nodeValue === 'undefined' ? 'undefined' : _typeof(nodeValue)) === "boolean" && !(typeof nodeValue === 'undefined' ? 'undefined' : _typeof(nodeValue)) === "number" ? nodeValue ? nodeValue : "" : nodeValue;
                if (node.nodeType === 2) {
                    var parentNode = node._parentNode ? node._parentNode : node.ownerElement;
                    if (parentNode.tagName) {
                        var is = parentNode.getAttribute("is");
                    }
                    var isCustomElement = _LC.isCustomElement(parentNode, true);
                    if (isCustomElement) {
                        if (parentNode.set) {
                            parentNode.set(_LC.String.toCamelCase(node.nodeName), nodeValue);
                        } else {
                            parentNode._initProperties = parentNode._initProperties || {};
                            parentNode._initProperties[_LC.String.toCamelCase(node.nodeName)] = nodeValue;
                        }
                    }
                    var origNodeValue = nodeValue;
                    //!== "string"
                    if (isCustomElement && typeof nodeValue !== "string" && !isTemplate) {
                        parentNode._attributes = parentNode._attributes || {};
                        parentNode._attributes[node.nodeName] = nodeValue;
                        if (parentNode.nodeName === "TEMPLATE" && isHelper) {
                            if (parentNode.getAttribute("is") === "for" && node.nodeName === "items" || parentNode.getAttribute("is") === "forIn" && node.nodeName === "object" && !_LC.unbound) {
                                //node._actualBinding = {"_forHelpers" : new Set().add(parentNode)};
                                node.ownerElement._actualBinding = { "_forHelpers": new Set().add(parentNode), "_createdBinding": true };
                                if (nodeValue) {
                                    makeSet(nodeValue, "_bindings");
                                    nodeValue._bindings.add(node.ownerElement._actualBinding);
                                }
                            }
                        }
                        toBeRemoved.push(node.nodeName);
                    } else {
                        if (typeof nodeValue === "boolean") {
                            parentNode._attributes = node.ownerElement._attributes || {};
                            parentNode._attributes[node.nodeName] = nodeValue;
                            if (!nodeValue) {
                                //                      node.ownerElement.removeAttribute(node.nodeName);
                                toBeRemoved.push(node.nodeName);
                            } else {
                                parentNode.setAttribute(node.nodeName, "");
                            }
                        } else {
                            nodeValue = nodeValue && (typeof nodeValue === 'undefined' ? 'undefined' : _typeof(nodeValue)) === "object" ? typeof Record != "undefined" && nodeValue instanceof Record ? JSON.stringify(nodeValue.$.toJSON()) : JSON.stringify(nodeValue) : nodeValue === undefined || nodeValue === null ? '' : nodeValue;
                            if (_LC.isControlHelper(node.ownerElement)) {
                                parentNode._attributes = node.ownerElement._attributes || {};
                                parentNode._attributes[node.nodeName] = nodeValue;
                                toBeRemoved.push(node.nodeName);
                            } else {
                                var locNodeVal = nodeValue === undefined ? "" : nodeValue;
                                //if(node.nodeName === "style") {
                                //   node.ownerElement.setAttribute("style",locNodeVal);
                                //} else {
                                //   node.nodeValue = locNodeVal;
                                //}
                                node.ownerElement.setAttribute(node.nodeName, locNodeVal);
                            }
                        }
                    }
                    if (parentNode.tagName === "LYTE-YIELD" /*parentNode.getAttribute("is") === "insertYield"*/) {
                            parentNode.component.data[_LC.String.toCamelCase(node.nodeName)] = origNodeValue;
                        }
                    if (/^(INPUT|TEXTAREA|SELECT)$/.test(parentNode.nodeName)) {
                        if (node.nodeName === "value") {
                            parentNode.value = nodeValue === undefined ? "" : nodeValue;
                        } else if (node.nodeName === "checked") {
                            parentNode.checked = nodeValue;
                        }
                    }
                } else {
                    node.nodeValue = nodeValue === undefined ? '' : nodeValue;
                }
                return node;
            }
        }, {
            key: 'debounce',
            value: function debounce(func, threshold) {
                var timeout;
                return function debounced() {
                    var obj = this,
                        args = arguments;
                    function delayed() {
                        func.apply(obj, args);
                        timeout = null;
                    };
                    if (timeout) {
                        clearTimeout(timeout);
                    }
                    timeout = setTimeout(delayed, threshold || 100);
                    //console.log(timeout,threshold);
                };
            }
        }, {
            key: 'getProperty',
            value: function getProperty(key) {
                var arr = key.split('.');
                var property = this;
                if (!property._properties[arr[0]]) {
                    property._properties[arr[0]] = {};
                }
                property = property._properties[arr[0]];

                defProp(property, '_path', { enumerable: false, value: arr[0] });
                for (var _i30 = 1; _i30 < arr.length; _i30++) {
                    if (!property[arr[_i30]]) {
                        property[arr[_i30]] = {};
                        defProp(property[arr[_i30]], '_path', { enumerable: false, value: property._path + "." + arr[_i30] });
                    }
                    property = property[arr[_i30]];
                }
                return property;
            }
            //updN

        }, {
            key: 'updateNode',
            value: function updateNode(node, updatePath) {
                var del = "delete";
                var multiplePropNode = [];
                var multipleProp = void 0;
                if (node._multipleProperty) {
                    for (var i = 0; i < node._multipleProperty.length; i++) {
                        if (node._multipleProperty[i] && node._multipleProperty[i].dynamicValues.lastIndexOf(updatePath) > 0) {
                            multiplePropNode[i] = false;
                            multipleProp = node._multipleProperty[i];
                            var nodes = void 0;
                            if (multipleProp.dynamicProp) {
                                multiplePropNode[i] = multipleProp;
                                nodes = multipleProp.dynamicProp[multipleProp.actProp._path];
                                if (nodes) {
                                    var index = nodes.indexOf(node);
                                    nodes.splice(index, 1);
                                }
                                var helperNode = multipleProp.helperNode;
                                if (nodes.length === 0) {
                                    if (helperNode.getAttribute("is") === "if") {
                                        multipleProp.actProp._helperNodes[del](helperNode);
                                        delete multipleProp.dynamicProp[multipleProp.actProp._path];
                                    } else {
                                        delete multipleProp.dynamicProp[multipleProp.actProp._path];
                                        if (helperNode._items) {
                                            var removeHelper = true;
                                            for (var _i31 = 0; _i31 < helperNode._items.length; _i31++) {
                                                if (helperNode._items[_i31]._dynamicProperty && helperNode._items[_i31]._dynamicProperty[multipleProp.actProp._path]) {
                                                    removeHelper = false;
                                                    break;
                                                }
                                            }
                                            if (removeHelper) {
                                                multipleProp.actProp._helperNodes[del](helperNode);
                                                //console.log('for helper is removed');
                                            }
                                        }
                                    }
                                }
                            }
                            if (!multiplePropNode[i]) {
                                multiplePropNode[i] = "dynamicNodes";
                                nodes = multipleProp.actProp._dynamicNodes;
                                if (nodes) {
                                    var _index = nodes.indexOf(node);
                                    nodes.splice(_index, 1);
                                    if (!nodes.length) {
                                        delete multipleProp.actProp._dynamicNodes;
                                    }
                                }
                            }
                        }
                    }
                }
                if (!node.syntaxValue && !node.helperValue) {
                    return;
                }
                var contextSwitchInfo = void 0;
                var isYieldContext = void 0;
                if (node._cx || node.nodeType === 2 && node.ownerElement._cx) {
                    contextSwitchInfo = node._cx || node.ownerElement._cx;
                    var contextSwitchArray = [];
                    _LC.changeContext(contextSwitchInfo.node, contextSwitchArray, contextSwitchInfo);
                } else if (node.tagName === "LYTE-YIELD" && node._callee._cx) {
                    isYieldContext = true;
                    contextSwitchInfo = node._callee._cx;
                    var contextSwitchArray = [];
                    _LC.changeContext(contextSwitchInfo.node, contextSwitchArray, contextSwitchInfo, true);
                }
                var nodeValue = void 0;
                var dynamicValues = [];
                if (node.helperValue) {
                    nodeValue = node.helperValue;
                    var helperFunc = nodeValue;
                    var helperRetVal = this.processHelper({ name: helperFunc.name, args: this.processArgs(this, helperFunc.args, dynamicValues, undefined, node) }, node);
                    nodeValue = helperRetVal;
                    if (helperFunc.name === "unescape") {
                        var oldDynamicPosition = node.dynamicPositions;
                        var oldStartingNode = oldDynamicPosition.startingNode;
                        var oldChldLen = oldDynamicPosition.length;
                        while (oldChldLen > 1) {
                            var next = oldStartingNode.nextSibling;
                            oldStartingNode.remove();
                            oldStartingNode = next;
                            oldChldLen--;
                        }
                        var childLen = nodeValue.childNodes.length;
                        if (!childLen) {
                            nodeValue.appendChild(document.createTextNode(""));
                            childLen = 1;
                        }
                        var startingNode = nodeValue.childNodes[0];
                        oldStartingNode.replaceWith.apply(oldStartingNode, nodeValue.childNodes);
                        var obj = { startingNode: startingNode, length: childLen };
                        node.dynamicPositions = obj;
                        nodeValue = undefined;
                    }
                } else {
                    var _boundValue2 = node.syntaxValue;
                    var path = void 0;
                    if (_boundValue2.indexOf('.') !== -1 || _boundValue2.indexOf('[') !== -1) {
                        path = _boundValue2;
                        _boundValue2 = _boundValue2.substring(0, _boundValue2.indexOf('.'));
                    }
                    var value = path ? _LC.get(this.component.data, path, dynamicValues) : this.component.data[_boundValue2];
                    nodeValue = !(typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "boolean" && !(typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "number" ? value ? value : "" : value;
                }
                if (!(dynamicValues[0] instanceof Array)) {
                    dynamicValues = [dynamicValues];
                }

                if (multiplePropNode) {
                    for (var i = 0; i < multiplePropNode.length; i++) {
                        if (multiplePropNode[i]) {
                            var _multipleProp = node._multipleProperty[i];
                            var prop = this.getProperty(dynamicValues[i][0]);
                            var totalProp = this.getProperty(dynamicValues[i][0].substring(0, dynamicValues[i][0].indexOf('.')));
                            var _value = this.getData(dynamicValues[i][0].substring(0, dynamicValues[i][0].indexOf('.')));
                            if (multiplePropNode[i] === "dynamicNodes") {
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
                                prop._helperNodes.add(_multipleProp.helperNode);
                                var dynamicProp = _multipleProp.dynamicProp;
                                dynamicProp[prop._path] ? dynamicProp[prop._path].push(node) : (dynamicProp[prop._path] = []).push(node);
                            }
                            _LC.establishBindings(totalProp, _value);
                            node._multipleProperty[i].actProp = prop;
                            node._multipleProperty[i].dynamicValues = dynamicValues[i];
                        }
                    }
                }

                if (node.nodeType === 2) {
                    var parentNodes = [];
                    var pN = node._parentNode ? node._parentNode : node.ownerElement;
                    if (pN.tagName === "TEMPLATE" && pN.getAttribute("is") === "component" && node.nodeName !== "component-name") {
                        var isKeepAlive = pN.hasAttribute("lyte-keep-alive");
                        if (isKeepAlive) {
                            for (var key in pN._renderedComponent) {
                                parentNodes.push(pN._renderedComponent[key]);
                            }
                        } else {
                            parentNodes.push(pN._renderedComponent[pN.getAttribute("component-name")]);
                        }
                    }
                    parentNodes.push(pN);
                    for (var _i32 = 0; _i32 < parentNodes.length; _i32++) {
                        var parentNode = parentNodes[_i32];
                        if (parentNode.set) {
                            parentNode.set(_LC.String.toCamelCase(node.nodeName), nodeValue, true);
                        } else {
                            parentNode._initProperties = parentNode._initProperties || {};
                            parentNode._initProperties[_LC.String.toCamelCase(node.nodeName)] = nodeValue;
                        }
                        if (parentNode.tagName === "LYTE-YIELD" && parentNode.component.data && node.nodeName && parentNode.component.data[node.nodeName] !== nodeValue /*parentNode.getAttribute("is") === "insertYield"*/) {
                                _LC.set(parentNode.component.data, _LC.String.toCamelCase(node.nodeName), nodeValue, undefined, parentNode);
                            }
                        parentNode._attributes = parentNode._attributes || {};
                        //!== "string"
                        if (_LC.isCustomElement(parentNode, true) && typeof nodeValue !== "string") {
                            if (node.ownerElement.nodeName === "TEMPLATE") {
                                if (node.helperValue) {
                                    if (node.ownerElement.getAttribute("is") === "for" && node.nodeName === "items" || node.ownerElement.getAttribute("is") === "forIn" && node.nodeName === "object") {
                                        var oldValue = node.ownerElement._attributes[node.nodeName];
                                        var newValue = nodeValue;
                                        _LC.removeSelectedBindingDeep(node.ownerElement._actualBinding, oldValue);
                                        if (newValue) {
                                            makeSet(newValue, "_bindings");
                                            newValue._bindings.add(node.ownerElement._actualBinding);
                                            _LC.establishBindings(node.ownerElement._actualBinding, newValue);
                                        }
                                        if (node.nodeName === "object") {
                                            _LC.removeSelectedBindingDeep(node.ownerElement._propBindingObject, oldValue);
                                        }
                                        //console.log("old Value ", oldValue, " new Value ", newValue);
                                    }
                                }
                                parentNode["__" + node.nodeName] = true;
                                parentNode.removeAttribute(node.nodeName);
                            } else {
                                //Needs revisiting
                                //parentNode.removeAttribute(node.nodeName);
                            }
                        } else {
                            if (typeof nodeValue === "boolean") {
                                parentNode._attributes = parentNode._attributes || {};
                                parentNode._attributes[node.nodeName] = nodeValue;
                                if (!nodeValue) {
                                    parentNode.removeAttribute(node.nodeName);
                                } else {
                                    parentNode.setAttribute(node.nodeName, "");
                                }
                            } else {
                                nodeValue = nodeValue && (typeof nodeValue === 'undefined' ? 'undefined' : _typeof(nodeValue)) === "object" ? typeof Record != "undefined" && nodeValue instanceof Record ? JSON.stringify(nodeValue.$.toJSON()) : JSON.stringify(nodeValue) : nodeValue == null || nodeValue == undefined ? "" : nodeValue;
                                var locNodeVal = nodeValue === undefined ? "" : nodeValue;
                                // if(node.nodeName === "style") {
                                //     node.ownerElement.setAttribute("style",locNodeVal);
                                // } else {
                                //     node.nodeValue = locNodeVal;
                                // }
                                if (node instanceof Node) {
                                    node.ownerElement.setAttribute(node.nodeName, locNodeVal);
                                } else {
                                    node.nodeValue = locNodeVal;
                                }
                            }
                        }
                        parentNode._attributes[node.nodeName] = nodeValue;
                        if (/^(INPUT|TEXTAREA|SELECT)$/.test(parentNode.nodeName)) {
                            if (node.nodeName === "value") {
                                var val = nodeValue === undefined ? "" : nodeValue;
                                if (parentNode.value !== val) {
                                    parentNode.value = val;
                                }
                            } else if (node.nodeName === "checked") {
                                parentNode.checked = nodeValue;
                            }
                        }
                        var isStopped = parentNode._isStopped;
                        var result = void 0;
                        switch (parentNode.getAttribute("is")) {
                            case "for":
                                this.updateForHelper(parentNode, { "type": "update" });
                                break;
                            case "if":
                                result = this.updateSwitchHelper("if", parentNode, undefined, true, true);
                                break;
                            case "forIn":
                                this.updateForInHelper(parentNode, { "type": "update" });
                                break;
                            case "switch":
                                this.updateSwitchHelper("switch", parentNode, undefined, true, true);
                                break;
                            case "component":
                                if (node.nodeName === "component-name") {
                                    this.updateDynamicComponent(parentNode, "update");
                                }
                                break;
                            default:
                        }
                        var handleBreakOptions = void 0;
                        if (isStopped && isStopped !== result) {
                            //console.log("new value is stopped");
                            if (!result) {
                                //console.log("new value is not stopped");
                                if (isStopped === "break") {
                                    handleBreakOptions = "SM";
                                } else {
                                    handleBreakOptions = "SS";
                                }
                            } else if (result === "break") {
                                handleBreakOptions = "MS";
                                //console.log("old value is continue and new value is break");
                            } else {
                                handleBreakOptions = "SM";
                                //console.log("old value is break and new value is continue");
                            }
                        } else if (result === "break") {
                            handleBreakOptions = "MS";
                            //console.log("old value not stopped and new value is break");
                            //                		this.handleBreak(parentNode._cx, "break");
                        } else if (result === "continue") {
                            handleBreakOptions = "SS";
                            //console.log("old value not stopped and new value is continue");
                            //                		this.handleBreak1(parentNode._cx , "continue");
                        }
                        if (handleBreakOptions) {
                            this.handleBreak(parentNode._cx, handleBreakOptions);
                        }
                    }
                } else {
                    node.nodeValue = nodeValue === undefined ? '' : nodeValue;
                }
                if (contextSwitchInfo) {
                    _LC.removeContext(contextSwitchInfo.node, contextSwitchArray, contextSwitchInfo, isYieldContext);
                }
            }
        }, {
            key: 'handleBreak',
            value: function handleBreak(contextSwitchInfo, options) {
                if (contextSwitchInfo) {
                    var forTemplate = contextSwitchInfo.node;
                    var breakIndex = contextSwitchInfo.itemIndex;
                    var itemValue = forTemplate.getAttribute("item");
                    var forContent = contextSwitchInfo.node._forContent;
                    var endIndex = options[0] === "M" ? forContent.length : breakIndex + 1;
                    for (var j = breakIndex; j < endIndex; j++) {
                        var currentForContent = forContent[j];
                        for (var _i33 = 0; _i33 < currentForContent.length; _i33++) {
                            currentForContent[_i33].remove();
                            if (currentForContent[_i33]._forContent || currentForContent[_i33]._caseContent) {
                                this.removeHelpers(currentForContent[_i33]);
                            }
                        }
                        forContent[j] = [];
                        _LC.removeSelectedBindingDeep(forTemplate._items[j].itemProperty, forTemplate._attributes.items[j]);
                        forTemplate._helpers[j] = [];
                        forTemplate._items[j] = { "_dynamicProperty": {}, "itemProperty": {}, "indexProperty": {} };
                    }
                    var length = forTemplate._attributes.items.length;
                    if (options[1] === "M") {
                        this.updateForHelper(forTemplate, { firstIndex: breakIndex, secondIndex: length - breakIndex, "type": "replace" }, undefined, {});
                    } else {
                        this.updateForHelper(forTemplate, { firstIndex: breakIndex, secondIndex: 1, "type": "replace" }, undefined, {});
                    }
                }
            }
        }, {
            key: 'createCustomEvent',
            value: function createCustomEvent(eventName, parentNode, actObj) {
                var customEvent = new CustomEvent(eventName);
                parentNode._actions[eventName] = customEvent;
                parentNode._actions[eventName].processAction = actObj;
            }
        }, {
            key: 'isEmptyString',
            value: function isEmptyString(str) {
                return !(typeof str === "string") || str === "";
            }
        }, {
            key: 'processArgs',
            value: function processArgs(scope, args, dynamicValues, event, node) {
                var helpers = void 0,
                    j = void 0;
                dynamicValues = dynamicValues || [];
                args = Array.isArray(args) ? Array.from(args) : args;
                for (var _i34 = 0; _i34 < args.length; _i34++) {
                    if (!this.isEmptyString(args[_i34])) {
                        if (args[_i34].startsWith("'") && args[_i34].endsWith("'")) {
                            args[_i34] = args[_i34].substr(1, args[_i34].length - 2);
                        } else {
                            args[_i34] = args[_i34].trim();
                            var dynamicVals = [];
                            if (args[_i34] === "event" && event) {
                                args[_i34] = event;
                            } else if (args[_i34] === "this" && node) {
                                args[_i34] = node.nodeType === 2 ? node.ownerElement : node;
                            } else {
                                args[_i34] = _LC.get(scope.component.data, args[_i34], dynamicVals);
                            }
                            dynamicValues.push(dynamicVals);
                        }
                    } else if (args[_i34] && args[_i34].type) {
                        this.internalHelpers(scope, args, _i34, dynamicValues, event, node);
                    }
                }
                return args;
            }
        }, {
            key: 'internalHelpers',
            value: function internalHelpers(scope, args, i, dynamicValues, event, node) {
                //helperFunc = this.constructor.getHelper(args[i]);
                var helperFunc = args[i].value;
                var helperVal = this.processHelper({ "name": helperFunc.name, "args": this.processArgs(scope, helperFunc.args, dynamicValues, event, node) });
                args[i] = helperVal;
            }
        }, {
            key: 'processHelper',
            value: function processHelper(helperFunc, node) {
                var args = [];
                if (helperFunc.name === "method") {
                    args.push(this, node);
                }
                if (helperFunc.name === "lbind") {
                    args.push(node.ownerElement);
                }
                if (!_LyteComponent.registeredHelpers[helperFunc.name]) {
                    _Lyte.error("LC003", helperFunc.name);
                    return;
                }
                return _LyteComponent.registeredHelpers[helperFunc.name].apply(this, args.concat(helperFunc.args));
            }
        }, {
            key: 'getActionProperty',
            value: function getActionProperty(prop) {
                var hostProp = this._properties;
                var value = hostProp ? hostProp[prop].value : undefined;
                return value;
            }
        }, {
            key: 'hasInternalBindings',
            value: function hasInternalBindings(content) {
                return content.match(/[(]{1}[^)]+[)]{1}/);
            }
        }, {
            key: 'getArgValues',
            value: function getArgValues(argNames, properties) {
                var argValueArray = [];
                for (var _i35 = 0; _i35 < argNames.length; _i35++) {
                    argValueArray.push(properties[argNames[_i35]].value);
                }
                return argValueArray;
            }
        }, {
            key: 'createEventListeners',
            value: function createEventListeners(node, actionType, actObj) {
                var self = this;
                node._callee = this;
                if (globalDOMEvents.indexOf(actionType) == -1) {
                    var infoAttr = actionType.substr(2);
                    var infoAttrVal = node.getAttribute(infoAttr);
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
                    if (_LyteComponent.registeredComponents[node.localName] && !node.component || node.tagName === "TEMPLATE" && node.getAttribute("is") === "component") {
                        node._toRegEvnts = node._toRegEvnts || {};
                        node._toRegEvnts[actionType.substr(2)] = { "listener": globalEventHandler, "attrVal": this.tagName.toLowerCase() + " => " + actObj.name };
                    } else {
                        node.setAttribute(infoAttr, this.tagName.toLowerCase() + " => " + actObj.name);
                        //Event is not in capture phase because, in capture phase, multiple event listeners in hierarchy are called from parent to child (since registration is done in that order)
                        node.addEventListener(actionType.substr(2), globalEventHandler);
                    }
                    if (node.hasAttribute(actionType)) {
                        node[actionType] = undefined;
                    }
                    node.removeAttribute(actionType);
                }
            }
        }, {
            key: 'registerYields',
            value: function registerYields() {
                this._yields = {};
                var yields = this.querySelectorAll('template[is=registerYield],template[is=yield]');
                for (var _i36 = 0; _i36 < yields.length; _i36++) {
                    var parentYield = void 0;
                    if (yields[_i36].hasAttribute("from-parent") && this._callee && (parentYield = this._callee._yields[yields[_i36].getAttribute("yield-name")])) {
                        this._yields[yields[_i36].getAttribute("yield-name")] = parentYield;
                    } else {
                        this._yields[yields[_i36].getAttribute("yield-name")] = yields[_i36];
                    }
                }
            }
        }, {
            key: 'connectedCallback',
            value: function connectedCallback() {
                if (this.hasAttribute("lyte-rendered") || !_LyteComponent.registeredComponents[this.localName]) {
                    return;
                }
                this.__h = [];
                this.__dc = [];
                var templateAttributes = this.constructor._templateAttributes;
                if (templateAttributes && templateAttributes.attr) {
                    for (var key in templateAttributes.attr) {
                        //        		let attr = templateAttributes.attr[i];
                        var attr = templateAttributes.attr[key];
                        if (!this.hasAttribute(attr.name) && !this.component.data.hasOwnProperty(attr.name) || attr.globalEvent) {
                            if (attr.globalEvent) {
                                this._evBoundEvents = this._evBoundEvents || {};
                                var actionName = attr.helperInfo.args[0];
                                var boundName = void 0;
                                if (actionName.startsWith('"') || actionName.startsWith("'")) {
                                    boundName = actionName.substring(1, actionName.length - 1);
                                } else {
                                    //_Lyte.warn("Deprecation warning. Action name should be in quotes");
                                    boundName = actionName;
                                }
                                this._evBoundEvents[attr.name] = { "name": boundName, "args": attr.helperInfo.args, "from": "component" };
                                var prevAttribute = this.getAttribute(attr.name);
                                var currentAttribute = this.constructor._template.getAttribute(attr.name);
                                //this.setAttribute("ev:"+attr.name, this.constructor._template.getAttribute(attr.name));
                                this.setAttribute(attr.name, currentAttribute + (prevAttribute ? " ; " + prevAttribute : ""));
                            } else {
                                attr.from = "component";
                                if (attr.staticValue) {
                                    this.setAttribute(templateAttributes.attr[key].name, attr.staticValue);
                                } else {
                                    this.setAttribute(templateAttributes.attr[key].name, "{{dummy}}");
                                    this.bindNode(this.attributes.getNamedItem(templateAttributes.attr[key].name), [], undefined, {}, templateAttributes.attr[key], undefined, undefined, true);
                                }
                            }
                        }
                    }
                }
                for (var _key10 in this._toRegEvnts) {
                    this.addEventListener(_key10, this._toRegEvnts[_key10].listener);
                    if (this.hasAttribute(_key10)) {
                        this.setAttribute(_key10, this.getAttribute(_key10) + " ; " + this._toRegEvnts[_key10].attrVal);
                    } else {
                        this.setAttribute(_key10, this._toRegEvnts[_key10].attrVal);
                    }
                }
                this._toRegEvnts = {};
                var initialUnbound = _LC.unbound;
                var content = this.afterConnected();
                if (!_LC.unbound) {
                    Lyte.establishObserverBindings.call(this, this.constructor._observers);
                    //this.establishObserverBindings();
                    makeSet(this.component.data, "_bindings");
                    this.component.data._bindings.add(this._properties);
                    _LC.establishBindings(this._properties, this.component.data);
                }

                _LC.unbound = initialUnbound;
                this.appendChild(content);
                this.setAttribute("lyte-rendered", "");
                var customEvent = new CustomEvent("onReady");
                this.dispatchEvent(customEvent);
                this.callback("didConnect");
                this.onCallBack("didConnect");
            }
        }, {
            key: 'onCallBack',
            value: function onCallBack(name) {
                var callbacks = this.constructor._callBacks[name];
                if (callbacks) {
                    for (var _i37 = 0; _i37 < callbacks.length; _i37++) {
                        try {
                            callbacks[_i37].value.call(this.component);
                        } catch (e) {
                            _Lyte.error(e);
                        }
                    }
                }
            }
        }, {
            key: 'callback',
            value: function callback(name) {
                var func = this.component[name];
                var args;
                if (func) {
                    if (arguments.length > 1) {
                        args = Array.from(arguments);
                        args.splice(0, 1);
                    }
                    try {
                        func.apply(this.component, args || []);
                    } catch (e) {
                        _Lyte.error(e);
                    }
                }
            }
        }, {
            key: 'establishObserverBindings',
            value: function establishObserverBindings() {
                var observers = this.constructor._observers;
                for (var _i38 = 0; _i38 < observers.length; _i38++) {
                    var props = observers[_i38].properties;
                    for (var j = 0; j < props.length; j++) {
                        var actProp = void 0;
                        var isArrayObserver = false;
                        if (props[j].indexOf('.[]') !== -1) {
                            isArrayObserver = true;
                            actProp = this.getProperty(props[j].substring(0, props[j].indexOf('.[]')));
                        } else {
                            actProp = this.getProperty(props[j]);
                        }
                        makeSet(actProp, "_observers");
                        actProp._observers.add({ callee: this, observer: observers[_i38], isArrayObserver: isArrayObserver });
                    }
                }
            }
        }, {
            key: 'removeBindings',
            value: function removeBindings(properties, actualData) {
                var del = "delete";
                for (var _i39 in properties) {
                    var actData = actualData[_i39];
                    if (actData && actData._bindings) {
                        actData._bindings[del](properties[_i39]);
                        //Error while trying to delete _bindings from actData when actData is of type Array
                        /*  if(!actData._bindings.size) {
                            delete actData._bindings;
                        } */
                    }
                    if (_typeof(properties[_i39]) === "object" && actData) {
                        this.removeBindings(properties[_i39], actData);
                    }
                }
            }
        }, {
            key: 'disconnectedCallback',
            value: function disconnectedCallback() {
                if (_LC.ignoreDisconnect || !this.component) {
                    return;
                }
                this.component._bindings = null;
                _LC.removeSelectedBindingDeep(this._properties, this.component.data);
                //      _LC.removeBindings(this._properties, this.component);
                for (var key in this._properties) {
                    this._properties[key] = {};
                }
                this.callback('didDestroy');
                this.onCallBack('didDestroy');
                var self = this;
                //setTimeout added to delay setting component to null until the LyteYield’s disconnectedCallbacks have been called. 
                setTimeout(function () {
                    if (!self.component) {
                        return;
                    }
                    self._cx = null;
                    self._callee = null;
                    self.component.$node = null;
                    self.component.__data = null;
                    self.component.data.__component__ = null;
                    self.component.data = null;
                    self.component = null;
                    for (var i = 0; i < self.__dc.length; i++) {
                        var helper = self.__dc[i];
                        //helper.remove();
                        if (helper.hasAttribute("lyte-keep-alive")) {
                            var objKeys = Object.keys(helper._renderedComponent);
                            for (var j = 0; j < objKeys.length; j++) {
                                var _key11 = objKeys[j];
                                if (_key11 !== helper._currentComponent) {
                                    _LC.hDiv.appendChild(helper._renderedComponent[_key11]);
                                    helper._renderedComponent[_key11].remove();
                                    // helper._renderedComponent[key];
                                }
                            }
                        }
                    }
                    for (var i = 0; i < self.__h.length; i++) {
                        self.__h[i].remove();
                    }
                    self.__h = [];
                    self.__dc = [];
                    var yields = self._yields;
                    for (var key in yields) {
                        yields[key]._callee = null;
                    }
                    self = null;
                }, 0);
                this.constructor.activeInstances--;
            }
        }], [{
            key: 'getArrayIndex',
            value: function getArrayIndex(array, value) {
                for (var _i40 = 0; _i40 < array.length; _i40++) {
                    if (array[_i40] === value) {
                        return _i40;
                    };
                }
            }
        }, {
            key: 'getTrimmedContent',
            value: function getTrimmedContent(content, position, node) {
                var dummyContent = content;
                if (node) {
                    position = [];
                    var parentNode = node.parentNode;
                    while (true) {
                        position.unshift(this.getArrayIndex(parentNode.childNodes, node));
                        parentNode = parentNode.parentNode;
                        node = node.parentNode;
                        if (!parentNode) {
                            break;
                        }
                    }
                }
                for (var _i41 = 0; _i41 < position.length; _i41++) {
                    for (var j = content.childNodes.length - 1; j > position[_i41]; j--) {
                        content.childNodes[j].remove();
                    }
                    content = content.childNodes[position[_i41]];
                }
                return dummyContent;
            }
        }, {
            key: 'updateValue',
            value: function updateValue(property, path, value) {
                var pathVals = path.split('.');
                var context = property;
                for (var _i42 = 0; _i42 < pathVals.length - 1; _i42++) {
                    context = context[pathVals[_i42]];
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

        }, {
            key: 'createDocFragment1',
            value: function createDocFragment1(template) {
                if (template.content) {
                    return template.content;
                }
                var childNodes = template.childNodes;
                var frag = createDocFragment();
                var len = childNodes.length;
                for (var _i43 = 0; _i43 < len; _i43++) {
                    frag.appendChild(childNodes[0]);
                }
                return frag;
            }
        }, {
            key: '_registerComponent',
            value: function _registerComponent(a, b) {
                var componentsDiv = _LC.lyteComponentsDiv;
                var styleDiv = _Lyte.$.assetsDiv;
                var origTemplateValue = this._template;
                if (this._template && typeof this._template === "string") {
                    this._template.replace(/\\'/g, "'");
                    var div = createElement("div");
                    div.innerHTML = this._template;
                    while (div.firstChild) {
                        if (div.firstChild.nodeName === "STYLE") {
                            styleDiv.appendChild(div.firstChild);
                        } else {
                            componentsDiv.appendChild(div.firstChild);
                        }
                    }
                    /*        } else if(document.querySelector("#" + a)) { */
                } else if (document.querySelector("template[tag-name='" + a + "']")) {
                    componentsDiv.appendChild(document.querySelector("template[tag-name='" + a + "']"));
                }
                this._template = componentsDiv.querySelector("template[tag-name='" + a + "']");
                if (!this._template) {
                    return;
                }
                if (_LC.needDummyComponentsDiv) {
                    if (_Lyte._ie) {
                        var temp = _Lyte.Compile.getTemplateFromString(origTemplateValue);
                        _LC.dummyLyteComponentsDiv.appendChild(temp);
                    } else {
                        _LC.dummyLyteComponentsDiv.appendChild(this._template.cloneNode(true));
                    }
                }
                if (this._template && !this._template.content) {
                    //            var frag = document.createDocumentFragment();
                    //            let childNodes = this._template.cloneNode(true,"lyte").childNodes;
                    //            //let childNodes = this._template.childNodes;
                    //            let len = childNodes.length;
                    //            for(let i=0; i<len; i++){
                    //                frag.appendChild(childNodes[0]);
                    //            }
                    //            this._template.content = frag;
                }
                var s = _Lyte._ie ? this._template : this._template.content; //)?this._template.content:document.createDocumentFragment(this._template);
                //This is used to split text nodes which contain multiple dynamic values 
                //Eg." Name is {{name}} and age is {{age}} "
                this.splitTextNodes(s);
                //This is used to find the dynamicNodes and helper nodes for the given component. 
                if (!this._dynamicNodes) {
                    if (_Lyte.Compile.getDynamicNodes) {
                        this._dynamicNodes = _Lyte.Compile.getDynamicNodes(a, undefined, _Lyte._ie ? s : undefined).dynamicNodes;
                    } else {
                        _Lyte.error("LC002", a);
                    }
                }
                if (this._dynamicNodes) {
                    doCompile(s, this._dynamicNodes, a, this);
                    if (_Lyte._ed) {
                        this._templateContent = this._template.outerHTML;
                    } else if (_Lyte._ie) {
                        this._templateContent = s.outerHTML;
                    }
                    this._templateAttributes = this._templateAttributes || { type: "attr", "attr": {}, position: [] };
                    var ta = [this._templateAttributes];
                    doCompile(this._template, ta, a, this);
                    this._templateAttributes = ta[0];
                    if (this._templateAttributes && this._templateAttributes.attr) {
                        var attributesT = this._template.attributes;
                        try {
                            for (var _i44 = 0; _i44 < attributesT.length; _i44++) {
                                if (!this._templateAttributes.attr[attributesT[_i44].name] && attributesT[_i44].name !== "tag-name" && attributesT[_i44].name !== "use-strict") {
                                    this._templateAttributes.attr[attributesT[_i44].name] = { "name": attributesT[_i44].name, "staticValue": attributesT[_i44].value };
                                }
                            }
                        } catch (e) {
                            _Lyte.error("Error with templateAttributes. ");
                        }
                    }
                }
            }
            //This is used to split text nodes which contain multiple dynamicNodes. 

        }, {
            key: 'splitTextNodes',
            value: function splitTextNodes(node) {
                if (node && node.childNodes && node.childNodes.length) {
                    for (var _i45 = node.childNodes.length - 1; _i45 >= 0; _i45--) {
                        this.splitTextNodes(node.childNodes[_i45]);
                    }
                }
                if (node.tagName === "TEMPLATE" && !_Lyte._ie) {
                    this.splitTextNodes(node.content);
                }
                if (node.nodeType === node.TEXT_NODE) {
                    var nodeValue = node.nodeValue;
                    if (nodeValue) {
                        var mustacheValues = nodeValue.match(/{{[^}]*?(?:(?:('|")[^\1]*?\1)[^}]*?)*}}/g); //'
                        if (!mustacheValues) {
                            return;
                        }
                        var newNodeArray = [];
                        for (var _i46 = 0; _i46 < mustacheValues.length; _i46++) {
                            var mustacheStartIndex = nodeValue.indexOf(mustacheValues[_i46]);
                            var mustacheEndIndex = mustacheStartIndex + mustacheValues[_i46].length;
                            if (mustacheStartIndex) {
                                newNodeArray.push(document.createTextNode(nodeValue.substring(0, mustacheStartIndex)));
                            }
                            newNodeArray.push(document.createTextNode(nodeValue.substring(mustacheStartIndex, mustacheEndIndex)));
                            nodeValue = nodeValue.substring(mustacheEndIndex);
                        }
                        if (!(!nodeValue.trim() && node.nextSibling && node.nextSibling.nodeType === 3 && !node.nextSibling.nodeValue.trim())) {
                            newNodeArray.push(document.createTextNode(nodeValue));
                        }
                        //Fix for IE Edge issue with higher versions where node.replaceWith is not working when the parent is a doc fragment.
                        if (_Lyte._rwpf && node.parentNode.nodeName === "#document-fragment") {
                            for (var _i47 = 0; _i47 < newNodeArray.length; _i47++) {
                                _insertBefore(node.parentNode, newNodeArray[_i47], node);
                            }
                            node.remove();
                        } else {
                            node.replaceWith.apply(node, newNodeArray);
                        }
                    }
                }
            }
        }, {
            key: 'observedAttributes',
            get: function get() {
                var newArr = [];
                for (var _i48 = 0; _i48 < this._observedAttributes.length; _i48++) {
                    newArr[_i48] = _LC.String.dasherize(this._observedAttributes[_i48]);
                }

                _LC.customPropHandlers.forEach(function (item, index) {
                    newArr.push(_LC.String.dasherize(item));
                });
                return newArr;
            }
        }]);

        return customElementPrototype;
    }(elementPrototype);

    Function.prototype.on = function () {
        return { "type": "callBack", "value": this.type === "observer" ? this.value : this, "properties": arguments, "observes": this.type === "observer" ? this : undefined };
    };
    Function.prototype.observes = function () {
        return { "type": "observer", "value": this, "properties": arguments, "on": Function.prototype.on };
    };
    Function.prototype.computed = function () {
        return { "type": "computed", "value": this, "properties": arguments };
    };

    var LyteComponent = {
        "customPropRegex": "",
        "customPropHandlers": [],
        "_registeredComponents": {},
        "toBeRegistered": [],
        "updateCustomCrmComponent": function updateCustomCrmComponent(def, customCrmComponent) {
            for (var key in def) {
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
        "dataFromMixin": function dataFromMixin(mixinsToBeUsed, actionsFromMixin, methodsFromMixin, newDefinition) {
            var mixinslen = mixinsToBeUsed.length;
            for (var _i49 = 0; _i49 < mixinslen; _i49++) {
                for (var item in mixinsToBeUsed[_i49]) {
                    if (item === "actions") {
                        Object.assign(actionsFromMixin, mixinsToBeUsed[_i49][item]);
                    } else if (item === "methods") {
                        Object.assign(methodsFromMixin, mixinsToBeUsed[_i49][item]);
                    } else {
                        newDefinition[item] = mixinsToBeUsed[_i49][item];
                    }
                }
            }
            return { "actionsFromMixin": actionsFromMixin, "methodsFromMixin": methodsFromMixin, "newDefinition": newDefinition };
        },
        "throwEvent": function throwEvent(eventName) {
            var self = this.$node ? this.$node : this;
            var evt = self._actions ? self._actions[eventName] : undefined;
            var customArgs = [];
            if (arguments.length > 1) {
                for (var _i50 = 1; _i50 < arguments.length; _i50++) {
                    customArgs.push(arguments[_i50]);
                }
            }
            //wait for release
            //eventName = _LC.String.toCamelCase(eventName);
            _LC.throwAction.call(self, self._callee, eventName, undefined, true, customArgs, self);
            if (this.$node) {
                self.dispatchEvent(evt ? evt : new CustomEvent(eventName, { "detail": customArgs }));
            }
        },
        //this and scope reference should be either a node or a route.
        "throwAction": function throwAction(scope, eventName, actObj, isCustom, customArgs, node, event, hasHandled) {
            var actionsObj = void 0;
            if (this._route && isCustom) {
                scope = _Lyte.Router.getRouteInstance(this._route);
                actionsObj = scope.actions || (scope.actions = {});
            } else if (this.routeName) {
                //process for the parent route and get the current component and proceed;
                var parentRoute = this.parent;
                if (parentRoute) {
                    if (parentRoute.component) {
                        scope = parentRoute.component;
                        actionsObj = scope.constructor._actions;
                    } else {
                        scope = parentRoute;
                        actionsObj = scope.actions || (scope.actions = {});
                    }
                }
            } else if (scope) {
                actionsObj = scope.constructor._actions;
            }
            if (!scope) {
                //Only warning is thrown because, we can have a eventListener for the dom directly. 
                if (!hasHandled) {
                    _Lyte.warn("Nothing handled the action " + eventName + ".");
                }
                return;
            }
            actObj = actObj ? actObj : this._actions && this._actions[eventName] ? this._actions[eventName].processAction : void 0;
            //wait for release
            /* 
            var dasherizedEventName = _LC.String.dasherize(eventName);
            actObj = (actObj) ? actObj : this._actions && this._actions[dasherizedEventName]? this._actions[dasherizedEventName].processAction : void 0;     
            */
            var args = customArgs ? customArgs : [];
            if (actObj) {
                var contextSwitchArray = [];
                if (node) {
                    _LC.adCx(node, contextSwitchArray);
                }
                args.splice.apply(args, [0, 0].concat(this.processArgs(scope, actObj.args, undefined, event, node)));
                if (node) {
                    _LC.rmCx(node, contextSwitchArray);
                }
                if (actionsObj[actObj.name]) {
                    if (!isCustom) {
                        //args.unshift(window.event);
                        var parent = node.parentNode;
                        var val = actionsObj[actObj.name].apply(this.component, args);
                        hasHandled = true;
                        if (val !== false && !event.cancelBubble) {
                            if (actObj.from && node.getAttribute(event.type) && node._boundEvents && node._boundEvents[event.type]) {
                                var actions = node._callee.constructor._actions;
                                var _actObj3 = node._boundEvents[event.type];
                                var cloneActObj = _Lyte.deepCopyObject(_actObj3);
                                cloneActObj.args.shift();
                                _LC.throwAction.call(node._callee, node._callee, event.type, cloneActObj, undefined, undefined, node, event, hasHandled);
                            } else {
                                if (_LC.hasLyteEvents(node, eventName)) {
                                    var eventStopped = _LC.handleLyteEvents(node, event);
                                    val = eventStopped ? false : true;
                                }
                                if (val === false) {
                                    return;
                                }
                                if (_LC.isCustomElement(node)) {
                                    scope = parent;
                                }
                                if (parent) {
                                    var _eventStopped = void 0;
                                    while (parent && (!parent.getAttribute(eventName) || parent.hasAttribute("disabled")) && parent.tagName != "BODY") {
                                        if (_LC.hasLyteEvents(parent, eventName)) {
                                            _eventStopped = _LC.handleLyteEvents(parent, event);
                                            if (_eventStopped) {
                                                break;
                                            }
                                        }
                                        parent = parent.parentNode;
                                    }
                                    if (_eventStopped || !parent || parent.tagName === "BODY") {
                                        return;
                                    }
                                    if (!parent._callee) {
                                        parent._callee = parent.getCallee ? parent.getCallee(parent) : this.getCallee(parent);
                                    }
                                    if (parent && event.type === eventName && !event.cancelBubble) {
                                        if (parent._evBoundEvents && parent._evBoundEvents[eventName]) {
                                            var _actObj4 = parent._evBoundEvents[eventName];
                                            var _cloneActObj3 = _Lyte.deepCopyObject(_actObj4);
                                            _cloneActObj3.args.shift();
                                            _LC.throwAction.call(parent, parent, eventName, _cloneActObj3, undefined, undefined, parent, event, hasHandled);
                                        } else if (parent && parent._boundEvents && parent._boundEvents[eventName]) {
                                            var _actObj5 = parent._boundEvents[eventName];
                                            var _cloneActObj4 = _Lyte.deepCopyObject(_actObj5);
                                            _cloneActObj4.args.shift();
                                            _LC.throwAction.call(parent._callee, parent._callee, eventName, _cloneActObj4, undefined, undefined, parent, event, hasHandled);
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        actionsObj[actObj.name].apply(this._callee.component, args);
                        hasHandled = true;
                    }
                } else {
                    _Lyte.error("LC004", actObj.name);
                }
            } else if (isCustom) {
                var eventsObj = actionsObj[eventName] || actionsObj[_LC.String.toCamelCase(eventName)] || actionsObj[_LC.String.dasherize(eventName)];
                if (eventsObj) {
                    var scopeS = _LC.isCustomElement(scope) ? scope.component : scope;
                    var _val = eventsObj.apply(scopeS, args);
                    //let val = eventsObj.apply(_LC.isCustomElement(scope)? scope.component : scope, args);
                    hasHandled = true;
                    if (_val !== false) {
                        _LC.throwAction.call(scope, scope._callee, eventName, actObj, isCustom, customArgs, undefined, undefined, hasHandled);
                    }
                } else {
                    _LC.throwAction.call(scope, scope._callee, eventName, actObj, isCustom, customArgs, undefined, undefined, hasHandled);
                }
            }
        },
        "isControlHelper": function isControlHelper(ownerElement) {
            return ownerElement.tagName === "TEMPLATE" && ownerElement.getAttribute("is") && ownerElement.getAttribute("is") !== "component" || ownerElement.hasAttribute("lyte-for") || ownerElement.hasAttribute("lyte-if") || ownerElement.hasAttribute("lyte-switch") || ownerElement.hasAttribute("lyte-forIn");
        },
        "isCustomElement": function isCustomElement(node, isTemplate) {
            return node.hasAttribute && ((node.tagName === "TEMPLATE" || node.hasAttribute("lyte-for") || node.hasAttribute("lyte-if") || node.hasAttribute("lyte-switch") || node.hasAttribute("lyte-forIn")) && isTemplate || node.nodeName && node.nodeName.indexOf('-') !== -1 && (_LyteComponent.registeredComponents[node.localName] || node.tagName === "LYTE-YIELD"));
        },
        "componentSet": function componentSet(key, value, forceExecute, fromParent) {
            if (!forceExecute && this.get(key) === value) {
                _LC.clearError(this.data, key);
                return;
            }
            //temporary fix
            _LC.set(this.data, key, value, undefined, fromParent);
        },
        "componentGet": function componentGet(key) {
            return key ? _LC.get(this.data, key) : this.data;
        },
        "nodeGet": function nodeGet(key) {
            return key ? this.component.get(key) : this.component.data;
        },
        "nodeSet": function nodeSet(key, value, fromParent) {
            this.component.set(key, value, undefined, fromParent);
        },
        "registerComponent": function registerComponent(componentName, definition, options) {
            if (_LyteComponent.registeredComponents[componentName]) {
                _Lyte.warn("Component " + componentName + " already registered");
                return;
            }
            var customCrmComponent = void 0;
            if (_LC._registeredComponents[componentName]) {
                customCrmComponent = _LC._registeredComponents[componentName];
            } else {
                customCrmComponent = function (_customElementPrototy) {
                    _inherits(customCrmComponent, _customElementPrototy);

                    function customCrmComponent() {
                        _classCallCheck(this, customCrmComponent);

                        return _possibleConstructorReturn(this, (customCrmComponent.__proto__ || Object.getPrototypeOf(customCrmComponent)).apply(this, arguments));
                    }

                    return customCrmComponent;
                }(customElementPrototype);
                customCrmComponent._properties = {};
                customCrmComponent.activeInstances = 0;
                customCrmComponent._depthTemp = document.createElement("template");
                customCrmComponent.prototype.throwAction = this.throwAction;
            }
            customCrmComponent.prototype.get = this.nodeGet;
            customCrmComponent.prototype.set = this.nodeSet;
            options = options ? options : {};
            var mixinsToBeUsed = [];
            if (options.mixins) {
                options.mixins.forEach(function (element) {
                    if (Lyte.Mixin.exists(element)) {
                        mixinsToBeUsed.push(Lyte.registeredMixins[element]);
                    } else {
                        Lyte.$.requiredMixins(element, componentName, "component");
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
            var mixinslen = mixinsToBeUsed.length;

            var actionsFromMixin = {};
            var methodsFromMixin = {};
            var newDefinition = {};
            if (mixinsToBeUsed.length) {
                _LC.dataFromMixin(mixinsToBeUsed, actionsFromMixin, methodsFromMixin, newDefinition);
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
            var properties = definition.data ? definition.data : undefined;
            var methods = Object.assign({}, methodsFromMixin, definition.methods);
            //            customCrmComponent._observedAttributes = Object.keys(properties);
            customCrmComponent._observedAttributes = definition._observedAttributes || [];
            customCrmComponent._observedMethodAttributes = definition._observedMethodAttributes || {};
            delete definition._observedAttributes;
            delete definition._observedMethodAttributes;
            delete definition.data;
            delete definition.methods;
            definition = _LC.updateCustomCrmComponent(definition, customCrmComponent);
            customCrmComponent._data = properties;
            customCrmComponent._methods = methods;
            customCrmComponent._registerComponent(componentName, customCrmComponent);
            _LyteComponent.registeredComponents[componentName] = true;
            if (!_LC._registeredComponents[componentName]) {
                if (document.readyState === "complete" || document.readyState === "interactive") {
                    // document is already ready to go
                    customElements.define(componentName, customCrmComponent);
                } else {
                    _LC.toBeRegistered.push({ name: componentName, def: customCrmComponent });
                }
            }
            if (!_LC._ie && customCrmComponent._depthTemp.content.childNodes.length) {
                customCrmComponent._depthTemp.setAttribute("data-id", "depthTemp_" + componentName);
                _LC.lyteComponentsDiv.appendChild(customCrmComponent._depthTemp);
            } else {
                delete customCrmComponent._depthTemp;
            }
            _LC._registeredComponents[componentName] = customCrmComponent;
        },
        "registerHelper": function registerHelper(name, helper) {
            _LyteComponent.registeredHelpers[name] = helper;
        },
        "registerMixin": function registerMixin(name, mixin) {
            _Lyte.Mixin.register.call(_Lyte, name, mixin);
        },
        "typeCast": function typeCast(value, dataType, obj) {
            if (value === null) {
                return value;
            }
            try {
                switch (dataType) {
                    case "string":
                        return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "object" ? JSON.stringify(value) : value.toString();
                        break;
                    case "number":
                        {
                            if (value == "") {
                                return undefined;
                            }
                            var val = +value;
                            if (isNaN(val)) {
                                throw "TypeCast exception";
                            }
                            return val;
                        }
                        break;
                    case "array":
                    case "object":
                        return JSON.parse(value);
                        break;
                    case "boolean":
                        return !value && value !== "" || value === "false" ? false : true;
                        break;
                    default:
                        return value;
                }
            } catch (e) {
                if (obj) {
                    obj.isError = true;
                }
                return value;
            }
        },
        "getDataType": function getDataType(value) {
            var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
            if (type === "object") {
                if (value instanceof Array) {
                    return "array";
                }
            }
            return type;
        },
        "handleValidation": function handleValidation(object, property, value, component) {
            var error = _Lyte.validate(object, property, value, component);
            if (error) {
                _LC.set(component.data.errors, property, error);
                component.$node.callback("onError", property, error);
            } else {
                _LC.clearError(object, property);
            }
            return error;
        },
        "clearError": function clearError(data, property) {
            if (data.errors && data.errors[property]) {
                _Lyte.objectUtils(data.errors, "delete", property);
            }
        },
        "apdNode": function apdNode(node, comp) {
            _LC.tDiv.appendChild(node);
            comp.__h.push(node);
        },
        "update": function update(object, property, value, fromStore, oldValue, setterScope, actualProperty, fromParent) {
            var fromComponent = object.__component__;
            var updateAttr = true;
            if (!oldValue) {
                oldValue = object[property];
                if (fromComponent && fromComponent.tagName !== "LYTE-YIELD") {
                    var dataType = void 0,
                        dataDef = fromComponent.component.__data[property];
                    if (dataDef && (dataType = dataDef.type)) {
                        updateAttr = !dataDef.hideAttr;
                        if (dataType !== _LC.getDataType(value) && (value !== undefined || dataType === "boolean")) {
                            value = _LC.typeCast(value, dataType);
                        }
                    }
                    if (value === oldValue) {
                        _LC.clearError(object, property);
                        return;
                    }
                    var error = _LC.handleValidation(object, property, value, fromComponent.component);
                    if (error) {
                        return;
                    }
                }
                //object[property] = value;
                if (!object.hasOwnProperty(property) && !(object instanceof Array)) {
                    _LC.oF(object, "add", property, value, true);
                } else {
                    object[property] = value;
                }
            }
            var toBeExecuted = fromComponent ? true : false;
            var dasherizedAttr = _LC.String.dasherize(property);
            if (fromComponent && actualProperty && (typeof value === "string" && fromComponent.getAttribute(dasherizedAttr) !== value || fromComponent.hasAttribute(dasherizedAttr))) {
                if ((!_LC.customPropRegex.exec(property) || fromComponent.hasAttribute(dasherizedAttr)) && updateAttr) {
                    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "object") {
                        var jsonString = void 0;
                        try {
                            jsonString = JSON.stringify(value);
                            fromComponent.attributes.getNamedItem(dasherizedAttr).__lyteIgnore = true;
                            fromComponent.setAttribute(dasherizedAttr, jsonString);
                        } catch (e) {}
                    } else {
                        var attributeString = _LC.typeCast(value, "string");
                        if (fromComponent.getAttribute(dasherizedAttr) !== attributeString) {
                            var detAttr = fromComponent.attributes.getNamedItem(dasherizedAttr);
                            if (detAttr) {
                                detAttr.__lyteIgnore = true;
                            }
                            attributeString = attributeString || "";
                            fromComponent.setAttribute(dasherizedAttr, attributeString);
                        }
                    }
                }
            }
            if (value && typeof value !== "string" && typeof value !== "boolean" && typeof value !== "number") {
                //newValue is of type object 

                if (oldValue && (typeof oldValue === 'undefined' ? 'undefined' : _typeof(oldValue)) === "object" && oldValue._bindings) {
                    //Both oldValue and newValue are objects. 
                    if (!value._bindings) {
                        defProp(value, "_bindings", {
                            enumerable: false,
                            writable: true,
                            value: new Set(),
                            configurable: true
                        });
                    }
                    //for changing only child component
                    if (fromComponent && fromComponent.component.data === object && property.indexOf('.') === -1) {
                        var bindings = fromComponent.getProperty(property);
                        this.removeSelectedBindingDeep(bindings, oldValue);
                        value._bindings.add(bindings);
                        this.establishBindings(bindings, value);
                        //For removing binding in the object due to forIn Helper ( actual object binding and not the _dynamicNodes binding).
                        if (bindings._forHelpers) {
                            var bindfor = bindings._forHelpers.toArrayLyte();
                            for (var i = 0; i < bindfor.length; i++) {
                                var item = bindfor[i];
                                if (item._propBindingObject) {
                                    this.removeSelectedBindingDeep(item._propBindingObject, oldValue);
                                    //                                  value._bindings.add(item._propBindingObject);
                                    //                                  this.establishBindings(item._propBindingObject, value);
                                }
                            }
                        }
                        this.affectChanges(bindings, undefined, oldValue, setterScope, object[property]);
                    } else {
                        //To change only the bindings present in the object and not all the bindings present in the oldValue.
                        if (object._bindings) {
                            var oldbind = object._bindings.toArrayLyte();
                            for (var _i51 = 0; _i51 < oldbind.length; _i51++) {
                                var _item = oldbind[_i51][property];
                                if (_item) {
                                    this.removeSelectedBindingDeep(_item, oldValue);
                                    value._bindings.add(_item);
                                    this.establishBindings(_item, value);
                                    //For removing binding in the object due to forIn Helper ( actual object binding and not the _dynamicNodes binding).
                                    if (_item._forHelpers) {
                                        var forbind = _item._forHelpers.toArrayLyte();
                                        for (var j = 0; j < forbind.length; j++) {
                                            var itemBinding = forbind[j];
                                            if (itemBinding._propBindingObject) {
                                                this.removeSelectedBindingDeep(itemBinding._propBindingObject, oldValue);
                                            }
                                        }
                                    }
                                    this.affectChanges(_item, undefined, oldValue, setterScope, object[property]);
                                }
                            }
                        }
                    }
                } else {
                    //newValue is object and oldValue is string. Hence establish bindings from oldValue's object and place it in the newValue. 
                    if (object._bindings) {
                        makeSet(value, "_bindings");
                        var objbind = object._bindings.toArrayLyte();
                        for (var _i52 = 0; _i52 < objbind.length; _i52++) {
                            var _item2 = objbind[_i52];
                            if (_item2[property]) {
                                value._bindings.add(_item2[property]);
                                this.establishBindings(_item2[property], value);
                                this.affectChanges(_item2[property], undefined, oldValue, setterScope, object[property]);
                            }
                        }
                    }
                }
            } else {
                //newValue is string

                if (oldValue && (typeof oldValue === 'undefined' ? 'undefined' : _typeof(oldValue)) === "object" && oldValue._bindings && object._bindings) {
                    //newValue is string and oldValue is object 
                    var _objbind = object._bindings.toArrayLyte();
                    for (var _i53 = 0; _i53 < _objbind.length; _i53++) {
                        var _item3 = _objbind[_i53];
                        if (_item3[property]) {
                            //oldValue._bindings.delete(item[property]);
                            //if(oldValue._bindings.size === 0) {
                            //  delete oldValue._bindings;
                            //  break;
                            //}
                            this.removeSelectedBindingDeep(_item3[property], oldValue);
                            if (_item3[property]._forHelpers) {
                                var _forbind = _item3[property]._forHelpers.toArrayLyte();
                                for (var _j3 = 0; _j3 < _forbind.length; _j3++) {
                                    var _itemBinding = _forbind[_j3];
                                    if (_itemBinding._propBindingObject) {
                                        this.removeSelectedBindingDeep(_itemBinding._propBindingObject, oldValue);
                                    }
                                }
                            }
                        }
                    }
                }

                //when newValue and oldValue , both are string, no need to change bindings. 
                if (object._bindings) {
                    var _objbind2 = object._bindings.toArrayLyte();
                    for (var _i54 = 0; _i54 < _objbind2.length; _i54++) {
                        var _item4 = _objbind2[_i54];
                        if (_item4[property]) {
                            this.affectChanges(_item4[property], undefined, oldValue, setterScope, object[property]);
                        }
                    }
                }
            }
            if (toBeExecuted && !fromParent && fromComponent._attributeDetails && fromComponent._callee) {
                //let syntaxValue = fromComponent.getAttributeNode(property).syntaxValue;
                var attrDetail = fromComponent._attributeDetails[_LC.String.dasherize(property)];
                var syntaxValue = void 0;
                if (attrDetail && attrDetail.isLbind) {
                    syntaxValue = attrDetail.dynamicValue;
                }
                if (syntaxValue) {
                    var contextSwitchArray = void 0;
                    if (fromComponent._cx) {
                        contextSwitchArray = [];
                        _LC.changeContext(fromComponent._cx.node, contextSwitchArray, fromComponent._cx);
                    }
                    var obj = _LC.getNew(fromComponent._callee.component.data, syntaxValue);
                    var exec = false;
                    if (obj.context === fromComponent._callee.component.data) {
                        if (fromComponent._callee._properties[obj.lastKey] && fromComponent._callee._properties[obj.lastKey].__fromComponent) {
                            exec = true;
                        }
                    } else {
                        exec = true;
                    }
                    //self.setData(this._lbind,this.value);
                    if (exec) {
                        _LC.set(obj.context, obj.lastKey, value);
                    }
                    if (contextSwitchArray) {
                        _LC.removeContext(fromComponent._cx.node, contextSwitchArray, fromComponent._cx);
                    }
                }
            }
        },
        "getContentForIE": function getContentForIE(content, constr) {
            var newlyCreated = false;
            if (typeof content === "string") {
                newlyCreated = true;
                var div = createElement("div");
                div.innerHTML = content;
                content = div.childNodes[0];
                constr.splitTextNodes(content);
            }
            if (content.getAttribute && content.getAttribute("depth")) {
                var itr = parseInt(content.getAttribute("depth"));
                content = _Lyte._ie ? content : newlyCreated ? content.content : content.content.cloneNode(true);
                for (var i = 0; i < itr; i++) {
                    content = content.childNodes[0];
                }
            }
            return content;
        },
        "replaceWithPf": function replaceWithPf(node1, node2) {
            if (_Lyte._rwpf) {
                _insertBefore(node1.parentNode, node2, node1);
                node1.remove();
            } else {
                node1.replaceWith(node2);
            }
        },
        "set": function set(object, property, value, fromStore, fromParent) {
            var lastIndex = -1;
            if (!(property instanceof Object) || !property) {
                property = property + "";
                lastIndex = property.lastIndexOf('.');
            }
            var actualProperty = property;
            if (lastIndex !== -1) {
                var outerPropertyPath = property.substring(0, lastIndex);
                property = property.substring(lastIndex + 1);
                object = _LC.get(object, outerPropertyPath);
            }
            if (typeof property === "string" && object[property] === value) {
                if (object.__component__) {
                    _LC.clearError(object, property);
                } else if (_Lyte.isRecord(object)) {
                    store.$.clrRecErr(object.$, property);
                }
                return;
            }
            var oldValues = [];
            if (object._setterScope) {
                var setterScope = object._setterScope;
            }
            actualProperty = actualProperty === property ? actualProperty : undefined;
            if (property instanceof Object) {
                if (_Lyte.isRecord(object) && !fromStore) {
                    // for(let key in property){
                    //     if(Array.isArray(object[key])){
                    //         oldValues.push({key:key,oldValue:object[key].slice(0)});    
                    //     }
                    //     else{
                    //         oldValues.push({key:key,oldValue:object[key]});
                    //     }
                    // }
                    for (var key in property) {
                        var locValue = property[key];
                        var dataType = object.$.model.fieldList[key];
                        dataType = dataType ? dataType.type : undefined;
                        if (dataType && (locValue !== undefined || dataType === "boolean") && dataType !== _LC.getDataType(locValue)) {
                            property[key] = _LC.typeCast(locValue, dataType);
                        }
                    }
                    var record = store.$.setData(object.$, property);
                    if (record.$.isError) {
                        return record;
                    }
                    // for(let i=0; i<oldValues.length; i++){
                    //     _LC.update(object,oldValues[i].key,object[oldValues[i].key],fromStore,(oldValues[i].oldValue === undefined)?null:oldValues[i].oldValue ,setterScope, actualProperty, fromParent);
                    // }
                } else {
                    //object[property] =  value;
                    for (var _key12 in property) {
                        //_LC.update(object,key,property[key],fromStore,undefined,setterScope, actualProperty, fromParent);
                        _LC.set(object, _key12, property[_key12], fromStore, fromParent);
                    }
                }
            } else {
                if (_Lyte.isRecord(object) && !fromStore) {
                    var old = object[property];
                    var _dataType = object.$.model.fieldList[property];
                    _dataType = _dataType ? _dataType.type : undefined;
                    if (_dataType && (value !== undefined || _dataType === "boolean") && _dataType !== _LC.getDataType(value)) {
                        value = _LC.typeCast(value, _dataType);
                    }
                    var _record = store.$.setData(object.$, property, value);
                    if (_record.$.isError) {
                        return _record;
                    }
                    //Commented because update will happend when "set" is called from setData of store. 
                    //_LC.update(object,property,value,fromStore,(old === undefined) ? null : old,setterScope , actualProperty);    
                } else {
                    _LC.update(object, property, value, fromStore, undefined, setterScope, actualProperty, fromParent);
                }
            }
        },
        "adCx": function adCx(node, contextSwitchArray) {
            var isYield = node.tagName === "LYTE-YIELD";
            if (node._cx && (!isYield || node._cx.node.tagName !== "LYTE-YIELD")) {
                _LC.changeContext(node._cx.node, contextSwitchArray, node._cx, isYield);
            } else if (isYield && node._callee._cx) {
                _LC.changeContext(node._callee._cx.node, contextSwitchArray, node._callee._cx, true);
            }
        },
        "rmCx": function rmCx(node, contextSwitchArray) {
            var isYield = node.tagName === "LYTE-YIELD";
            if (node._cx && (!isYield || node._cx.node.tagName !== "LYTE-YIELD")) {
                _LC.removeContext(node._cx.node, contextSwitchArray, node._cx, isYield);
            } else if (isYield && node._callee._cx) {
                _LC.removeContext(node._callee._cx.node, contextSwitchArray, node._callee._cx, true);
            }
        },
        "changeContext": function changeContext(node, contextSwitchArray, contextSwitchInfo, proceedFurther) {
            if (!contextSwitchInfo) {
                return;
            }
            var isYield = node.tagName === "LYTE-YIELD";
            if (node._cx && (!isYield || node._cx.node.tagName !== "LYTE-YIELD")) {
                _LC.changeContext(node._cx.node, contextSwitchArray, node._cx, node.tagName === "LYTE-YIELD" || proceedFurther);
            } else if ((node.tagName === "LYTE-YIELD" || proceedFurther) && node._callee && node._callee._cx) {
                _LC.changeContext(node._callee._cx.node, contextSwitchArray, node._callee._cx);
            }
            if (isYield) {
                var insertYield = node._registerYield;
                var callee = insertYield._callee;
                if (callee && callee._cx) {
                    _LC.changeContext(callee._cx.node, contextSwitchArray, callee._cx);
                }
            }
            var indexValue = void 0,
                itemValue = void 0;
            if (contextSwitchInfo.type) {
                if (contextSwitchInfo.type === "for") {
                    indexValue = node.getAttribute("index");
                    itemValue = node.getAttribute("item");
                    if (node._items.length === 0) {
                        return;
                    }
                } else {
                    indexValue = node.getAttribute("key");
                    itemValue = node.getAttribute("value");
                    if (Object.keys(node._items).length === 0) {
                        return;
                    }
                }
                var _callee = node._callee;
                var initialItemValue = _callee.component.data[itemValue];
                var initialIndexValue = _callee.component.data[indexValue];
                var initialItemProp = _callee._properties[itemValue];
                var initialIndexProp = _callee._properties[indexValue];
                var items = contextSwitchInfo.type === "for" ? node._currentItems : node._currentObject;
                // let items = contextSwitchInfo.type === "for" ? node._attributes.items : node._attributes.object;
                _callee.component.data[itemValue] = items[contextSwitchInfo.itemIndex];
                _callee.component.data[indexValue] = contextSwitchInfo.itemIndex;
                _callee._properties[itemValue] = node._items[contextSwitchInfo.itemIndex].itemProperty;
                _callee._properties[indexValue] = {};
                var dummyObject = { "initialItemValue": initialItemValue, "initialIndexValue": initialIndexValue, "initialItemProp": initialItemProp, "initialIndexProp": initialIndexProp };
                contextSwitchArray.push(dummyObject);
            } else {
                //handling for yield
                var _dummyObject = {};
                var _callee2 = node._registerYield._callee;
                Object.keys(contextSwitchInfo.node._properties).forEach(function (key) {
                    _dummyObject[key] = {};
                    _dummyObject[key].value = _callee2.component.data[key];
                    _dummyObject[key].property = _callee2._properties[key];
                    _callee2._properties[key] = contextSwitchInfo.node._properties[key];
                    _callee2.component.data[key] = contextSwitchInfo.node.component.data[key];
                });
                contextSwitchArray.push(_dummyObject);
            }
        },
        "removeContext": function removeContext(node, contextSwitchArray, contextSwitchInfo, proceedFurther) {
            if (!contextSwitchInfo) {
                return;
            }
            var isYield = node.tagName === "LYTE-YIELD";
            if (node._cx && (!isYield || node._cx.node.tagName !== "LYTE-YIELD")) {
                _LC.removeContext(node._cx.node, contextSwitchArray, node._cx, node.tagName === "LYTE-YIELD" || proceedFurther);
            } else if ((node.tagName === "LYTE-YIELD" || proceedFurther) && node._callee && node._callee._cx) {
                _LC.removeContext(node._callee._cx.node, contextSwitchArray, node._callee._cx);
            }
            if (isYield) {
                var insertYield = node._registerYield;
                var callee = insertYield._callee;
                if (callee && callee._cx) {
                    _LC.removeContext(callee._cx.node, contextSwitchArray, callee._cx);
                }
            }
            var indexValue = void 0,
                itemValue = void 0;
            if (contextSwitchInfo.type) {
                if (contextSwitchInfo.type === "for") {
                    indexValue = node.getAttribute("index");
                    itemValue = node.getAttribute("item");
                    if (node._items.length === 0) {
                        return;
                    }
                } else {
                    indexValue = node.getAttribute("key");
                    itemValue = node.getAttribute("value");
                    if (Object.keys(node._items).length === 0) {
                        return;
                    }
                }
                var _callee3 = node._callee;
                var items = node._attributes.items;
                var removedObject = contextSwitchArray.shift();
                _callee3.component.data[itemValue] = removedObject.initialItemValue;
                _callee3.component.data[indexValue] = removedObject.initialIndexValue;
                _callee3._properties[itemValue] = removedObject.initialItemProp;
                _callee3._properties[indexValue] = removedObject.initialIndexProp;
            } else {
                var _callee4 = node._registerYield._callee;
                var _removedObject = contextSwitchArray.shift();
                Object.keys(contextSwitchInfo.node._properties).forEach(function (key) {
                    _callee4.component.data[key] = _removedObject[key].value;
                    _callee4._properties[key] = _removedObject[key].property;
                });
            }
        },
        "oF": function oF() {
            var object = arguments[0];
            var functionName = arguments[1];
            var property = arguments[2];
            var newValue = arguments[3];
            var fromComponent = arguments[4];
            var fromStore = arguments[5];
            if (functionName === "add" && !fromComponent) {
                _LC.set(object, property, newValue, fromStore);
                return;
            }
            var options = {};
            options.type = functionName;
            options.property = property;
            if (!/^(add|delete)$/.test(functionName)) {
                _Lyte.error("LC005", functionName);
                return;
            }
            var bindings = object._bindings;
            if (functionName === "delete") {
                _LC.set(object, property, undefined, fromStore);
            } else {
                object[property] = newValue;
            }
            if (bindings) {
                var bind = bindings.toArrayLyte();
                for (var _i55 = 0; _i55 < bind.length; _i55++) {
                    var binding = bind[_i55];
                    var forHelpers = binding._forHelpers;
                    if (forHelpers) {
                        var helperBind = forHelpers.toArrayLyte();
                        for (var j = 0; j < helperBind.length; j++) {
                            var forHelper = helperBind[j];
                            var itemValue = forHelper.getAttribute("key");
                            //Need to check
                            //                            _LC.removeSelectedBindingDeep({[itemValue] :                        forHelper._items[property].itemProperty}, {[itemValue] : object[property]});
                            var contextSwitchArray = [];
                            if (functionName === "add") {
                                _LC.adCx(forHelper, contextSwitchArray);
                            }
                            forHelper._callee.updateForInHelper(forHelper, options);
                            if (functionName === "add") {
                                _LC.rmCx(forHelper, contextSwitchArray);
                            }
                        }
                    }
                }
            }
            if (functionName === "delete") {
                delete object[property];
            }
        },
        "aF": function aF() {
            var array = arguments[0];
            var functionName = arguments[1];
            if (/^(replaceAt|removeAt|shift)$/.test(functionName) && !array.length) {
                _Lyte.warn(functionName + " operation cannot be performed on empty array");
                return;
            }
            var commArgs = arguments[2];
            switch (functionName) {
                case "replaceAt":
                    {
                        var index = parseInt(arguments[2]);
                        if (index > array.length) {
                            _Lyte.warn("index provided for replaceAt is greater than array length");
                            return [];
                        }
                        //let args = Array.prototype.slice.call(arguments, 3);
                        var args = arguments[3];
                        if (!(args instanceof Array)) {
                            args = [args];
                        }
                        var deletedItems = array.splice.apply(array, [index, 1].concat(args));
                        var options = { "firstIndex": index, "secondIndex": args.length, "type": "replace" };
                        //All references updated by now

                        //remove binding from previous object
                        if (array._bindings) {
                            var objbind = array._bindings.toArrayLyte();
                            for (var _i56 = 0; _i56 < objbind.length; _i56++) {
                                var item = objbind[_i56];
                                if (item._forHelpers) {
                                    var helperbind = item._forHelpers.toArrayLyte();
                                    for (var _j4 = 0; _j4 < helperbind.length; _j4++) {
                                        var helper = helperbind[_j4];
                                        /*if(helper.hasAttribute("unbound")) {
                                        continue;
                                        }*/
                                        var finalIndex = index + deletedItems.length;
                                        var itemValue = helper.getAttribute("item");
                                        for (var _i57 = index, _j5 = 0; _i57 < finalIndex; _i57++, _j5++) {
                                            _LC.removeSelectedBindingDeep(_defineProperty({}, itemValue, helper._items[_i57].itemProperty), _defineProperty({}, itemValue, deletedItems[_j5]));
                                        }
                                        var contextSwitchArray = [];
                                        _LC.adCx(helper, contextSwitchArray);
                                        helper._callee.updateForHelper(helper, options);
                                        _LC.rmCx(helper, contextSwitchArray);
                                    }
                                }
                                for (var key in item) {
                                    var parsedKey = parseInt(key);
                                    if (!isNaN(parsedKey) && parsedKey >= options.firstIndex) {
                                        var diff = parsedKey - options.firstIndex;
                                        var _oldObject = void 0;
                                        if (diff <= options.thirdIndex) {
                                            _oldObject = deletedItems[diff];
                                        } else {
                                            _oldObject = array[options.firstIndex - 1 + options.secondIndex + diff];
                                        }
                                        this.removeSelectedBindingDeep(item[key], _oldObject);
                                        if (item[key]._forHelpers) {
                                            var bindfor = item[key]._forHelpers.toArrayLyte();
                                            for (var j = 0; j < bindfor.length; j++) {
                                                var item1 = bindfor[j];
                                                if (item1._propBindingObject) {
                                                    this.removeSelectedBindingDeep(item1._propBindingObject, _oldObject);
                                                    //                                          value._bindings.add(item._propBindingObject);
                                                    //                                          this.establishBindings(item._propBindingObject, value);
                                                }
                                            }
                                        }
                                        if (array[parsedKey] && _typeof(array[parsedKey]) === "object") {
                                            makeSet(array[parsedKey], "_bindings");
                                            this.establishBindings({ "dummy": item[key] }, { "dummy": array[parsedKey] });
                                        }
                                        this.affectChanges(item[key]);
                                    }
                                }
                            }
                        }
                        _LC.callArrayObservers(array, { type: "array", insertedItems: args, index: index });
                        return deletedItems[0];
                    }
                    break;
                case "splice":
                    {
                        var _index2 = parseInt(arguments[2]);
                        if (_index2 > array.length) {
                            _Lyte.warn("index provided for replaceAt is greater than array length");
                            return [];
                        }
                        //let args = Array.prototype.slice.call(arguments, 3);
                        var toBeDeleted = arguments[3];
                        var _args = arguments.length > 4 ? arguments[4] : [];
                        if (!(_args instanceof Array)) {
                            _args = [_args];
                        }
                        var _deletedItems = array.splice.apply(array, [_index2, toBeDeleted].concat(_args));
                        var _options = { "firstIndex": _index2, "secondIndex": _args.length, "thirdIndex": toBeDeleted, "type": "splice" };
                        //All references updated by now

                        //remove binding from previous object
                        if (array._bindings) {
                            var _objbind3 = array._bindings.toArrayLyte();
                            for (var _i58 = 0; _i58 < _objbind3.length; _i58++) {
                                var _item5 = _objbind3[_i58];
                                if (_item5._forHelpers) {
                                    var _helperbind = _item5._forHelpers.toArrayLyte();
                                    for (var _j6 = 0; _j6 < _helperbind.length; _j6++) {
                                        var _helper = _helperbind[_j6];
                                        /*if(helper.hasAttribute("unbound")) {
                                        continue;
                                        }*/
                                        var _finalIndex = _index2 + _deletedItems.length;
                                        var _itemValue = _helper.getAttribute("item");
                                        for (var _i59 = _index2, _j7 = 0; _i59 < _finalIndex; _i59++, _j7++) {
                                            _LC.removeSelectedBindingDeep(_defineProperty({}, _itemValue, _helper._items[_i59].itemProperty), _defineProperty({}, _itemValue, _deletedItems[_j7]));
                                        }
                                        var _contextSwitchArray = [];
                                        _LC.adCx(_helper, _contextSwitchArray);
                                        _helper._callee.updateForHelper(_helper, _options);
                                        _LC.rmCx(_helper, _contextSwitchArray);
                                    }
                                }
                                for (var _key13 in _item5) {
                                    var _parsedKey = parseInt(_key13);
                                    if (!isNaN(_parsedKey) && _parsedKey >= _options.firstIndex) {
                                        var _diff = _parsedKey - _options.firstIndex;
                                        var _oldObject2 = void 0;
                                        if (_diff <= _options.thirdIndex) {
                                            _oldObject2 = _deletedItems[_diff];
                                        } else {
                                            _oldObject2 = array[_options.firstIndex - _options.thirdIndex + _options.secondIndex + _diff];
                                        }
                                        this.removeSelectedBindingDeep(_item5[_key13], _oldObject2);
                                        if (_item5[_key13]._forHelpers) {
                                            var _bindfor = _item5[_key13]._forHelpers.toArrayLyte();
                                            for (var j = 0; j < _bindfor.length; j++) {
                                                var _item6 = _bindfor[j];
                                                if (_item6._propBindingObject) {
                                                    this.removeSelectedBindingDeep(_item6._propBindingObject, _oldObject2);
                                                    //                                          value._bindings.add(item._propBindingObject);
                                                    //                                          this.establishBindings(item._propBindingObject, value);
                                                }
                                            }
                                        }
                                        if (array[_parsedKey] && _typeof(array[_parsedKey]) === "object") {
                                            makeSet(array[_parsedKey], "_bindings");
                                            this.establishBindings({ "dummy": _item5[_key13] }, { "dummy": array[_parsedKey] });
                                        }
                                        this.affectChanges(_item5[_key13]);
                                    }
                                }
                            }
                        }
                        _LC.callArrayObservers(array, { type: 'array', index: _index2, insertedItems: _args, removedItems: _deletedItems });
                        return _deletedItems;
                    }
                    break;
                case "push":
                    {
                        var toPush = arguments[2];
                        if (!(toPush instanceof Array)) {
                            toPush = [toPush];
                        }
                        _LC.aF(array, 'insertAt', array.length, toPush);
                    }
                    break;
                case "pop":
                    return _LC.aF(array, 'remove', array.length - 1)[0];
                    break;
                case "shift":
                case "shiftObject":
                    return _LC.aF(array, 'remove', 0)[0];
                    break;
                case "removeAt":
                case "remove":
                    {
                        var _index3 = parseInt(arguments[2]);
                        if (_index3 > array.length) {
                            _Lyte.warn("index provided for removeAt is greater than array length");
                            return [];
                        }
                        var length = arguments[3] ? parseInt(arguments[3]) : 1;
                        var _options2 = { "firstIndex": _index3, "secondIndex": length, "type": "remove" };
                        var _deletedItems2 = array.splice(_index3, length);
                        if (array._bindings) {
                            var _objbind4 = array._bindings.toArrayLyte();
                            for (var _i60 = 0; _i60 < _objbind4.length; _i60++) {
                                var _item7 = _objbind4[_i60];
                                if (_item7._forHelpers) {
                                    var _helperbind2 = _item7._forHelpers.toArrayLyte();
                                    for (var _j8 = 0; _j8 < _helperbind2.length; _j8++) {
                                        var _helper2 = _helperbind2[_j8];
                                        /*if(helper.hasAttribute("unbound")) {
                                        continue;
                                        }*/
                                        var _finalIndex2 = _index3 + _deletedItems2.length;
                                        var _itemValue2 = _helper2.getAttribute("item");
                                        for (var _i61 = _index3, _j9 = 0; _i61 < _finalIndex2; _i61++, _j9++) {
                                            _LC.removeSelectedBindingDeep(_defineProperty({}, _itemValue2, _helper2._items[_i61].itemProperty), _defineProperty({}, _itemValue2, _deletedItems2[_j9]));
                                        }
                                        var _contextSwitchArray2 = [];
                                        _LC.adCx(_helper2, _contextSwitchArray2);
                                        _helper2._callee.updateForHelper(_helper2, _options2);
                                        _LC.rmCx(_helper2, _contextSwitchArray2);
                                    }
                                }
                                for (var _key14 in _item7) {
                                    var _parsedKey2 = parseInt(_key14);
                                    if (!isNaN(_parsedKey2) && _parsedKey2 >= _options2.firstIndex) {
                                        var _diff2 = _parsedKey2 - _options2.firstIndex;
                                        var _oldObject3 = void 0;
                                        if (_diff2 < _options2.secondIndex) {
                                            _oldObject3 = _deletedItems2[_diff2];
                                        } else {
                                            _oldObject3 = array[_options2.firstIndex - _options2.secondIndex + _diff2];
                                        }
                                        this.removeSelectedBindingDeep(_item7[_key14], _oldObject3);
                                        if (_item7[_key14]._forHelpers) {
                                            var _bindfor2 = _item7[_key14]._forHelpers.toArrayLyte();
                                            for (var j = 0; j < _bindfor2.length; j++) {
                                                var _item8 = _bindfor2[j];
                                                if (_item8._propBindingObject) {
                                                    this.removeSelectedBindingDeep(_item8._propBindingObject, _oldObject3);
                                                    //                                          value._bindings.add(item._propBindingObject);
                                                    //                                          this.establishBindings(item._propBindingObject, value);
                                                }
                                            }
                                        }
                                        if (array[_parsedKey2] && _typeof(array[_parsedKey2]) === "object") {
                                            makeSet(array[_parsedKey2]._bindings);
                                            this.establishBindings({ "dummy": _item7[_key14] }, { "dummy": array[_parsedKey2] });
                                        }
                                        this.affectChanges(_item7[_key14]);
                                    }
                                }
                            }
                        }
                        _LC.callArrayObservers(array, { type: "array", removedItems: _deletedItems2, index: _index3 });
                        return _deletedItems2;
                    }
                    break;
                case "removeObject":
                    commArgs = [commArgs];
                case "removeObjects":
                    if (!(commArgs instanceof Array)) {
                        commArgs = [commArgs];
                    }
                    for (var i = 0; i < commArgs.length; i++) {
                        var inde = array.indexOf(commArgs[i]);
                        if (inde !== -1) {
                            _LC.aF(array, 'removeAt', inde);
                        }
                    }
                    //_Lyte.arrayUtils(array, 'removeObject', actObj);
                    //_Lyte.arrayUtils(array, 'removeObjects', []);
                    break;
                case "unshift":
                case "unshiftObject":
                case "unshiftObjects":
                    //_LC.aF.apply(_LC, [array, 'insertAt', 0].concat(Array.prototype.slice.call(arguments, 2)));
                    {
                        var _toPush = arguments[2];
                        if (!(_toPush instanceof Array)) {
                            _toPush = [_toPush];
                        }
                        _LC.aF(array, 'insertAt', 0, _toPush);
                    }
                    break;
                case "insertAt":
                    {
                        var _index4 = parseInt(arguments[2]);
                        //let args = Array.prototype.slice.call(arguments, 3);
                        var _args2 = arguments[3];
                        var len = _args2.length;
                        if (!(_args2 instanceof Array)) {
                            _args2 = [_args2];
                        }
                        for (var _i62 = _index4; _i62 > array.length; _i62--) {
                            _args2.unshift(undefined);
                            _index4--;
                        }
                        var _options3 = { "firstIndex": _index4, "secondIndex": _args2.length, "type": "insert" };
                        array.splice.apply(array, [_index4, 0].concat(_args2));
                        if (array._bindings) {
                            var arrbind = array._bindings.toArrayLyte();
                            for (var _i63 = 0; _i63 < arrbind.length; _i63++) {
                                var _item9 = arrbind[_i63];
                                if (_item9._forHelpers) {
                                    var forbind = _item9._forHelpers.toArrayLyte();
                                    for (var _j10 = 0; _j10 < forbind.length; _j10++) {
                                        /*if(forbind[j].hasAttribute("unbound")) {
                                        	continue;
                                        }*/
                                        var _helper3 = forbind[_j10];
                                        var _contextSwitchArray3 = [];
                                        _LC.adCx(_helper3, _contextSwitchArray3);
                                        _helper3._callee.updateForHelper(_helper3, _options3);
                                        _LC.rmCx(_helper3, _contextSwitchArray3);
                                    }
                                }
                                for (var _key15 in _item9) {
                                    var _parsedKey3 = parseInt(_key15);
                                    if (!isNaN(_parsedKey3) && _parsedKey3 >= _options3.firstIndex) {
                                        this.removeSelectedBindingDeep(_item9[_key15], array[_parsedKey3 + _options3.secondIndex]);
                                        if (_item9[_key15]._forHelpers) {
                                            var _bindfor3 = _item9[_key15]._forHelpers.toArrayLyte();
                                            for (var j = 0; j < _bindfor3.length; j++) {
                                                var _item10 = _bindfor3[j];
                                                if (_item10._propBindingObject) {
                                                    this.removeSelectedBindingDeep(_item10._propBindingObject, oldObject);
                                                    //                                          value._bindings.add(item._propBindingObject);
                                                    //                                          this.establishBindings(item._propBindingObject, value);
                                                }
                                            }
                                        }
                                        if (array[_parsedKey3] && _typeof(array[_parsedKey3]) === "object") {
                                            makeSet(array[_parsedKey3], "_bindings");
                                            this.establishBindings({ "dummy": _item9[_key15] }, { "dummy": array[_parsedKey3] });
                                        }
                                        this.affectChanges(_item9[_key15]);
                                    }
                                }
                            }
                        }
                        var position = parseInt(arguments[2]);
                        _LC.callArrayObservers(array, { type: "array", insertedItems: !(arguments[3] instanceof Array) ? [arguments[3]] : arguments[0].slice(position, position + len), index: position });
                    }
                    break;
                case "concat":
                    //_LC.aF.apply(_LC, [array, 'insertAt',array.length].concat(arguments[2]));
                    _LC.aF(array, 'insertAt', array.length, arguments[2]);
                    break;
                default:
                    _Lyte.error("LC006", functionName);
                    return;
            }
        },
        "callArrayObservers": function callArrayObservers(array, args) {
            if (array._bindings) {
                var objbind = array._bindings.toArrayLyte();
                for (var _i64 = 0; _i64 < objbind.length; _i64++) {
                    var binding = objbind[_i64];
                    var path = objbind[_i64]._path;
                    if (binding._observers) {
                        var obsbind = binding._observers.toArrayLyte();
                        for (var j = 0; j < obsbind.length; j++) {
                            var observer = obsbind[j];
                            if (observer.isArrayObserver) {
                                if (args) {
                                    args.item = path;
                                }
                                observer.observer.value.call(observer.callee && observer.callee.component ? observer.callee.component : array._setterScope ? array._setterScope : window, args);
                            }
                        }
                    }
                    if (binding.length) {
                        this.affectChanges(binding.length);
                    }
                }
            }
        },
        "establishUpdateBindings": function establishUpdateBindings(bindings, property, actualData) {
            var objbind = bindings.toArrayLyte();
            for (var _i65 = 0; _i65 < objbind.length; _i65++) {
                var item = objbind[_i65];
                if (item[property]) {
                    makeSet(actualData, "_bindings");
                    actualData._bindings.add(item[property]);
                    this.establishBindings(item[property], actualData);
                }
            }
        },
        "establishSelectedBinding": function establishSelectedBinding(property, actualData, node) {
            if (!property) {
                return;
            }
            var propName = property._path;
            var props = propName.split('.');
            var currentProp = node.getProperty(props[0]);
            var currentValue = actualData[props[0]];
            for (var _i66 = 0; _i66 < props.length; _i66++) {
                if (!currentValue || (typeof currentValue === 'undefined' ? 'undefined' : _typeof(currentValue)) !== "object") {
                    break;
                }
                makeSet(currentValue, "_bindings");
                currentValue._bindings.add(currentProp);
                currentProp = currentProp[props[_i66 + 1]];
                currentValue = currentValue[props[_i66 + 1]];
            }
        },
        "establishBindings": function establishBindings(properties, actualData) {
            if (properties._helperNodes) {
                var path = properties._path;
                var arr = properties._helperNodes.toArrayLyte();
                for (var _s2 = 0; _s2 < arr.length; _s2++) {
                    var nodes = arr[_s2]._dynamicProperty ? arr[_s2]._dynamicProperty[path] : undefined;
                    if (nodes) {
                        for (var j = 0; j < nodes.length; j++) {
                            var node = nodes[j];
                            var helper = node.ownerElement;
                            if (helper && helper.tagName === "TEMPLATE" && helper.getAttribute("is") === "for") {
                                if (helper._items) {
                                    var item = helper.getAttribute("item");
                                    for (var _i67 = 0; _i67 < helper._items.length; _i67++) {
                                        var _data = actualData[_i67];
                                        var _item11 = helper.getAttribute("item");
                                        if (_data) {
                                            if (_typeof(helper._items[_i67]) === "object") {
                                                this.establishBindings(helper._items[_i67].itemProperty, _defineProperty({}, _item11, _data));
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            for (var _i68 in properties) {
                var actData = actualData[_i68];
                if (!actData || typeof actData === "string" || typeof actData === "number" || typeof actData === "boolean") {
                    if (!actualData._bindings) {
                        makeSet(actualData, "_bindings");
                    }
                    actualData._bindings.add(properties);
                } else {
                    if (!actData._bindings) {
                        makeSet(actData, "_bindings");
                    }
                    actData._bindings.add(properties[_i68]);
                    if (_typeof(properties[_i68]) === "object") {
                        this.establishBindings(properties[_i68], actData);
                    }
                }
            }
        },
        "removeSelectedBindingDeep": function removeSelectedBindingDeep(binding, actualData) {
            var del = "delete";
            if (!actualData) {
                return;
            }
            if (actualData._bindings) {
                //                actualData._bindings[del](binding);
                //                if(!actualData._bindings.size) {
                //                    delete actualData._bindings;
                //                }
                deleteBindingCheckSize(actualData, "_bindings", binding);
            }
            for (var _i69 in binding) {
                var actData = actualData[_i69];
                if (actData && actData._bindings) {
                    //                    actData._bindings[del](binding[i]);
                    //                    if(!actData._bindings.size) {
                    //                        delete actData._bindings;
                    //                    }
                    deleteBindingCheckSize(actData, "_bindings", binding[_i69]);
                }
                if (_typeof(binding[_i69]) === "object" && actData) {
                    this.removeSelectedBindingDeep(binding[_i69], actData);
                }
            }
            if (binding._forHelpers) {
                var objbind = binding._forHelpers.toArrayLyte();
                for (var _i70 = 0; _i70 < objbind.length; _i70++) {
                    var fH = objbind[_i70];
                    if (fH.getAttribute("is") === "for") {
                        var item = fH.getAttribute("item");
                        var items = fH._attributes.items;
                        var itemCases = fH._items;
                        for (var _i71 = 0; _i71 < itemCases.length; _i71++) {
                            this.removeSelectedBindingDeep(itemCases[_i71].itemProperty, items[_i71]);
                        }
                    } else {
                        if (fH._propBindingObject) {
                            if (actualData._bindings) {
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
        "removeAllBindings": function removeAllBindings(properties, data) {
            var del = "delete";
            for (var key in properties) {
                if (data[key] && data[key]._bindings) {
                    //                    data[key]._bindings[del](properties[key]);
                    //                    if(!data[key]._bindings.size) {
                    //                        delete data[key]._bindings;
                    //                    }
                    deleteBindingCheckSize(data[key], "_bindings", properties[key]);
                }
                if (data[key] && typeof data[key] !== "string") {
                    _LC.removeAllBindings(properties[key], data[key]);
                }
            }
        },
        "affectChanges": function affectChanges(item, contextAlreadySwitched, oldValue, setterScope, newValue) {
            if (item._dynamicNodes) {
                for (var _i72 = 0; _i72 < item._dynamicNodes.length; _i72++) {
                    item._dynamicNodes[_i72]._callee.updateNode(item._dynamicNodes[_i72], item._path);
                }
            }
            var propPath = item._path;
            if (item._helperNodes) {
                var nodes = [],
                    itemHelperNodes = item._helperNodes.toArrayLyte();
                for (var _s3 = 0; _s3 < itemHelperNodes.length; _s3++) {
                    if (!item._helperNodes.has(itemHelperNodes[_s3])) {
                        continue;
                    }
                    if (itemHelperNodes[_s3].getAttribute("is") === "for" && itemHelperNodes[_s3]._items) {
                        var innerContextSwitchArray = [];
                        _LC.adCx(itemHelperNodes[_s3], innerContextSwitchArray);
                        var indexValue = itemHelperNodes[_s3].getAttribute("index");
                        var itemValue = itemHelperNodes[_s3].getAttribute("item");
                        var callee = itemHelperNodes[_s3]._callee;
                        var initialItemValue = callee.component.data[itemValue];
                        var initialIndexValue = callee.component.data[indexValue];
                        var initialItemProp = callee._properties[itemValue];
                        var initialIndexProp = callee._properties[indexValue];
                        var items = itemHelperNodes[_s3]._attributes.items;
                        for (var _i73 = 0; _i73 < itemHelperNodes[_s3]._items.length; _i73++) {
                            callee.component.data[itemValue] = items[_i73];
                            callee.component.data[indexValue] = _i73;
                            callee._properties[itemValue] = itemHelperNodes[_s3]._items[_i73].itemProperty;
                            if (itemHelperNodes[_s3]._items[_i73]._dynamicProperty[propPath]) {
                                nodes = itemHelperNodes[_s3]._items[_i73]._dynamicProperty[propPath];
                                for (var _i74 = 0; _i74 < nodes.length; _i74++) {
                                    nodes[_i74]._callee.updateNode(nodes[_i74], propPath);
                                }
                            }
                        }
                        callee.component.data[itemValue] = initialItemValue;
                        callee.component.data[indexValue] = initialIndexValue;
                        callee._properties[itemValue] = initialItemProp;
                        callee._properties[indexValue] = initialIndexProp;
                        _LC.rmCx(itemHelperNodes[_s3], innerContextSwitchArray);
                    } else if (itemHelperNodes[_s3].getAttribute("is") === "forIn" && itemHelperNodes[_s3]._items) {
                        var _innerContextSwitchArray = [];
                        _LC.adCx(itemHelperNodes[_s3], _innerContextSwitchArray);
                        var _indexValue = itemHelperNodes[_s3].getAttribute("key");
                        var _itemValue3 = itemHelperNodes[_s3].getAttribute("value");
                        var _callee5 = itemHelperNodes[_s3]._callee;
                        var _initialItemValue = _callee5.component.data[_itemValue3];
                        var _initialIndexValue = _callee5.component.data[_indexValue];
                        var _initialItemProp = _callee5._properties[_itemValue3];
                        var _initialIndexProp = _callee5._properties[_indexValue];
                        var object = itemHelperNodes[_s3]._attributes.object;
                        for (var key in itemHelperNodes[_s3]._items) {
                            _callee5.component.data[_itemValue3] = object[key];
                            _callee5.component.data[_indexValue] = key;
                            _callee5._properties[_itemValue3] = itemHelperNodes[_s3]._items[key].itemProperty;
                            if (itemHelperNodes[_s3]._items[key]._dynamicProperty[propPath]) {
                                nodes = itemHelperNodes[_s3]._items[key]._dynamicProperty[propPath];
                                for (var _i75 = 0; _i75 < nodes.length; _i75++) {
                                    nodes[_i75]._callee.updateNode(nodes[_i75], propPath);
                                }
                            }
                        }
                        _callee5.component.data[_itemValue3] = _initialItemValue;
                        _callee5.component.data[_indexValue] = _initialIndexValue;
                        _callee5._properties[_itemValue3] = _initialItemProp;
                        _callee5._properties[_indexValue] = _initialIndexProp;
                        _LC.rmCx(itemHelperNodes[_s3], _innerContextSwitchArray);
                    } else {
                        nodes = itemHelperNodes[_s3]._dynamicProperty[item._path] || [];
                        var contextSwitchArray = [];
                        if (nodes.length) {
                            _LC.adCx(itemHelperNodes[_s3], contextSwitchArray);
                            for (var _i76 = 0; _i76 < nodes.length; _i76++) {
                                nodes[_i76]._callee.updateNode(nodes[_i76], item._path);
                            }
                            _LC.rmCx(itemHelperNodes[_s3], contextSwitchArray);
                        }
                    }
                }
            }
            if (item._observers) {
                var objbind = item._observers.toArrayLyte();
                for (var _i77 = 0; _i77 < objbind.length; _i77++) {
                    var observer = objbind[_i77];
                    observer.observer.value.call(observer.callee && observer.callee.component ? observer.callee.component : setterScope ? setterScope : window, { type: "change", oldValue: oldValue, newValue: newValue, item: item._path });
                }
            }
            if (Array.isArray(item)) {
                for (var i = 0; i < item.length; i++) {
                    for (var _key16 in item[i]) {
                        this.affectChanges(item[i][_key16], true, oldValue ? oldValue[i] ? oldValue[i][_key16] : oldValue[i] : oldValue, setterScope, newValue ? newValue[i] ? newValue[i][_key16] : newValue[i] : newValue);
                    }
                }
            } else {
                for (var _key17 in item) {
                    this.affectChanges(item[_key17], true, oldValue ? oldValue[_key17] : oldValue, setterScope, newValue ? newValue[_key17] : newValue);
                }
            }
        },
        "getDynamicData": function getDynamicData(context, dataArr) {
            var self = this;
            dataArr.forEach(function (item, index) {
                if (Array.isArray(item)) {
                    if (context === undefined) {
                        return undefined;
                    }
                    var inner = _LC.getDynamicData.call(self, self.component.data, item);
                    if (inner === undefined) {
                        return undefined;
                    }
                    context = context[inner];
                } else {
                    if (context === undefined) {
                        return undefined;
                    }
                    context = context[item];
                }
            });
            return context;
        },
        "get": function get(context, path, ac) {
            if (!ac) {
                ac = [];
            }
            try {
                var arr = path.match(/([^[\]]+|\[\])/g);
                var initialContext = context;
                ac.push(arr[0]);
                var locArr = arr[0].split('.');
                for (var k = 0; k < locArr.length; k++) {
                    context = context[locArr[k]];
                }
                for (var _i78 = 1; _i78 < arr.length; _i78++) {
                    var locVal = arr[_i78];
                    //this is context switching
                    if (locVal.startsWith(".")) {
                        //direct context switching
                        var _locArr = locVal.substring(1).split('.');
                        for (var _k4 = 0; _k4 < _locArr.length; _k4++) {
                            context = context[_locArr[_k4]];
                        }
                        ac[ac.length - 1] = ac[ac.length - 1] + locVal;
                    } else if (locVal.startsWith("'") || locVal.startsWith('"') || !isNaN(locVal)) {
                        if (!isNaN(locVal)) {
                            ac[ac.length - 1] = ac[0] + "." + locVal;
                        } else {
                            ac[ac.length - 1] = ac[0] + "." + locVal.substring(1, locVal.length - 1);
                        }
                        context = context[locVal.substring(1, locVal.length - 1)];
                    } else {
                        var length = ac.length;
                        var val = this.get(initialContext, locVal, ac);
                        ac[0] = ac[0] + "." + val;
                        context = context[val];
                    }
                }
                return context;
            } catch (e) {
                return undefined;
            }
        },
        "getNew": function getNew(context, path) {
            try {
                var arr = path.match(/([^[\]]+|\[\])/g);
                var initialContext = context;
                var locArr = arr[0].split('.');
                if (arr.length < 2) {
                    if (locArr.length < 2) {
                        return { "context": initialContext, "lastKey": locArr[0] };
                    } else {
                        for (var k = 0; k < locArr.length - 1; k++) {
                            context = context[locArr[k]];
                        }
                        return { "context": context, "lastKey": locArr[k] };
                    }
                }
                for (var _k5 = 0; _k5 < locArr.length; _k5++) {
                    context = context[locArr[_k5]];
                }
                for (var i = 1; i < arr.length - 1; i++) {
                    var locVal = arr[i];
                    //this is context switching
                    if (locVal.startsWith(".")) {
                        //direct context switching
                        var _locArr2 = locVal.substring(1).split('.');
                        for (var _k6 = 0; _k6 < _locArr2.length; _k6++) {
                            context = context[_locArr2[_k6]];
                        }
                    } else if (locVal.startsWith("'") || locVal.startsWith('"') || !isNaN(locVal)) {
                        context = context[locVal.substring(1, locVal.length - 1)];
                    } else {
                        var val = this.get(initialContext, locVal);
                        context = context[val];
                    }
                }
                var lastKey = arr[i];
                if (lastKey.startsWith(".")) {
                    //direct context switching
                    var _locArr3 = lastKey.substring(1).split('.');
                    var _k7 = 0;
                    for (; _k7 < _locArr3.length - 1; _k7++) {
                        context = context[_locArr3[_k7]];
                    }
                    lastKey = _locArr3[_k7];
                } else if (lastKey.startsWith("'") || lastKey.startsWith('"') || !isNaN(lastKey)) {
                    lastKey = lastKey.substring(1, lastKey.length - 1);
                } else {
                    lastKey = this.get(initialContext, lastKey);
                }
                return { "context": context, "lastKey": lastKey };
            } catch (e) {
                return undefined;
            }
        },
        "componentGetData": function componentGetData(key) {
            if (key) {
                return this.get(key);
            } else {
                return this.data;
            }
        },
        "componentSetData": function componentSetData(arg0, arg1) {
            if (typeof arg0 === "string") {
                this.set(arg0, arg1);
            } else if (arg0 instanceof Object) {
                for (var key in arg0) {
                    this.set(key, arg0[key]);
                }
            }
        },
        "componentGetMethods": function componentGetMethods(key) {
            if (key) {
                return this.methods[key];
            } else {
                return this.methods;
            }
        },
        "componentSetMethods": function componentSetMethods(arg0, arg1) {
            if (typeof arg0 === "string") {
                this.methods[arg0] = arg1;
            } else if (arg0 instanceof Object) {
                for (var key in arg0) {
                    this.methods[key] = arg0[key];
                }
            }
        },
        "render": function render(componentName, data, outlet) {
            if (componentName) {
                var component = createElement(componentName);
            } else {
                _Lyte.error("LC007");
                return;
            }
            if (data) {
                component.setData(data);
            }
            if (outlet) {
                var actOutlet = document.querySelector(outlet);
                if (actOutlet) {
                    actOutlet.appendChild(component);
                    component._callee = component.getCallee ? component.getCallee(actOutlet) : undefined;
                } else {
                    _Lyte.error("LC008", outlet);
                }
            }
            return component;
        },
        "String": {
            "upperCaseFirstLetter": function upperCaseFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            },
            "lowerCaseFirstLetter": function lowerCaseFirstLetter(string) {
                return string.charAt(0).toLowerCase() + string.slice(1);
            },
            "toCamelCase": function toCamelCase(string) {
                return string.replace(/(-\w)/g, function (m) {
                    return m[1].toUpperCase();
                });
            },
            "dasherize": function dasherize(string) {
                return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
            }
        },
        "appendChild": function appendChild(outlet, component) {
            _LC.ignoreDisconnect = true;
            outlet.appendChild(component);
            _LC.ignoreDisconnect = false;
        },
        "replaceWith": function replaceWith() {
            var argumentsArr = Array.from(arguments);
            var oldNode = argumentsArr.shift();
            _LC.ignoreDisconnect = true;
            var parentNode = oldNode.parentNode;
            for (var i = 0, node; node = argumentsArr[i]; i++) {
                parentNode.insertBefore(node, oldNode);
            }
            oldNode.remove();
            _LC.ignoreDisconnect = false;
        },
        "insertBefore": function insertBefore(referenceNode, newNode, parentNode) {
            _LC.ignoreDisconnect = true;
            if (!parentNode) {
                if (!referenceNode) {
                    _Lyte.error("LC010");
                    _LC.ignoreDisconnect = false;
                    return;
                } else {
                    parentNode = referenceNode.parentNode;
                }
            }
            _insertBefore(parentNode, newNode, referenceNode ? referenceNode : null);
            _LC.ignoreDisconnect = false;
        },
        "insertAfter": function insertAfter() {
            var argumentsArr = Array.from(arguments);
            var referenceNode = argumentsArr.shift();
            _LC.ignoreDisconnect = true;
            referenceNode.after.apply(referenceNode, argumentsArr);
            _LC.ignoreDisconnect = false;
        },
        "executeMethod": function executeMethod() {
            var args = Array.prototype.slice.call(arguments, 1);
            var methodName = _LC.String.toCamelCase(arguments[0]);
            if (!this.methods[methodName]) {
                _Lyte.error("LC009", methodName, this.$node.tagName);
                return;
            }
            return this.methods[methodName].apply(this, args);
        },
        "getProperData": function getProperData(obj) {
            var dataType = obj.dataType;
            var attr = obj.attr;
            var newValue = obj.newValue;
            var tagName = obj.tagName;
            switch (dataType) {
                case "boolean":
                    {
                        if (!newValue || newValue === "false") {
                            newValue = false;
                        } else {
                            newValue = true;
                        }
                    }
                    break;
                case "object":
                    try {
                        newValue = JSON.parse(newValue);
                        if (!(newValue instanceof Object)) {
                            _Lyte.warn("data type of the value provided for attribute " + attr + " of " + tagName + " is not valid");
                        }
                    } catch (e) {
                        _Lyte.warn("attribute " + attr + " is not a valid JSON string.");
                        return;
                    }
                    break;
                case "array":
                    try {
                        newValue = JSON.parse(newValue);
                        if (!(newValue instanceof Array)) {
                            _Lyte.warn("data type of the value provided for attribute " + attr + " of " + tagName + " is not valid");
                        }
                    } catch (e) {
                        _Lyte.warn("attribute " + attr + " is not a valid JSON string.");
                        return;
                    }
                    break;
                case "number":
                    {
                        var numValue = +newValue;
                        if (newValue === numValue + "") {
                            newValue = numValue;
                        } else {
                            _Lyte.warn("data type of the value provided for attribute " + attr + " of " + tagName + " is not valid");
                            return;
                        }
                    }
                    break;
            }
            obj.newValue = newValue;
            return true;
        },
        "cssEscape": function cssEscape(string) {
            if (string) {
                return string.replace(/['"]/g, "\\$&");
            } else {
                return string;
            }
        }

    };
    _LyteComponent.chromeBugFix = function () {
        var version = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);;
        version = version ? parseInt(version[2], 10) : 0;
        if (version > 62) {
            this.chI = [];
            document.addEventListener("focus", function (event) {
                var target = event.target;
                if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.tagName === "DIV") {
                    if (Lyte.Component.chI.indexOf(target) == -1) {
                        Lyte.Component.chI.push(target);
                    }
                }
            }, true);
            this.chromeBugFix = function () {
                var tags = Lyte.Component.chI;
                var tagsL = tags.length;
                var toRemove = ["_callee", "_attributeDetails", "_attributes", "_removedAttributes", "_yields", "_rA", "_cx"]; //no i18n
                var toBeRemoved = [];
                var keepAliveInputs = [];
                document.querySelectorAll("[lyte-keep-alive]").forEach(function (item, index) {
                    for (var key in item._renderedComponent) {
                        keepAliveInputs.push.apply(keepAliveInputs, Array.from(item._renderedComponent[key].querySelectorAll("input")));
                    }
                });
                for (var i = tagsL - 1, item; item = tags[i]; i--) {
                    if (document.compareDocumentPosition(item) % 2 && keepAliveInputs.indexOf(item) == -1) {
                        tags.splice(i, 1);
                        item.remove();
                        toBeRemoved.push(item);
                        item._rA = item._rA || [];
                        item._rA.forEach(function (remAttr) {
                            //eslint-disable-line no-loop-func
                            remAttr.ownerElement = undefined;
                        });
                        toRemove.forEach(function (key) {
                            //eslint-disable-line no-loop-func
                            item[key] = undefined;
                        });
                        Array.from(item.attributes).forEach(function (itemVal) {
                            //eslint-disable-line no-loop-func
                            item.removeAttribute(itemVal.nodeName);
                        });
                    }
                }
            };
            Lyte.addEventListener("afterRouteTransition", function () {
                Lyte.Component.chromeBugFix();
            });
            if (!Lyte.Router) {
                setInterval(function () {
                    Lyte.Component.chromeBugFix();
                }, 300000);
            }
        }
    };

    var _LC = LyteComponent;
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

    Set.prototype.toArrayLyte = function () {
        if (this.constructor.name === "Set") {
            return Array.from(this);
        } else {
            return Array.from(this._values);
        }
    };
    //_LC.registerListener(function() {
    //  
    //});

    if (document.readyState === "complete" || document.readyState === "interactive") {
        onDomContentForLyte();
    } else {
        document.addEventListener("DOMContentLoaded", function (e) {
            onDomContentForLyte();
        }, true);
    }

    // Compilation functions 

    function getMustache(value) {
        value = value && typeof value === "string" ? value.trim() : value;
        if (/^{{(?=[\s]*[\w-_]+)/.test(value)) {
            var arr = value.match(/{{[a-zA-Z0-9_.[\]()]*(?![\\])}}/g);
            if (arr && arr.length > 1) {
                //console.log("length>1",value)
                return undefined;
            }
            if (!syntaxCheck(value) || !/{{[^}]*?(?:(?:('|")[^\1]*?\1)[^}]*?)*}}$/.test(value)) {
                //'
                return undefined;
            }
            var dynamic = value.match(/[\w!@#$%^&*)(+=.,_-]+[\s]*[(]{0,1}(?:"([^"]|\\")*?"|'([^']|\\')*?'|[\w\s!@#$%^&*)([\]+=.,_-]*?)*?[)]{0,1}[\s]*(?=}})/g); //'
            if (dynamic && dynamic.length > 1) {
                return undefined;
            } else {
                dynamic = dynamic ? dynamic[0].trim() : dynamic;
            }
            //        let dynamic = /[\w!@#\$%\^\&*\)\(+=.,_-]+(?:"([^"]|\\")*?"|'([^']|\\')*?'|[\w\s!@#\$%\^\&*\)\(\[\]+=.,_-]*?)*?(?=}}$)/.exec(value);
            return dynamic;
        }
        return undefined;
    }

    function getHelper(dynamicValue) {
        var helperValue = /\((?:[^)]*|(?:(?:"(?:[^"\\]|\\.)*?")|(?:'([^'\\]|\\.)*?')|[\w\s!@#$%^&*)([\]+=.,_-]*?)*?)\)$/.exec(dynamicValue);
        if (helperValue) {
            return getHelperInfo(dynamicValue, helperValue);
        }
        return undefined;
    }

    function getHelperInfo(dynamicValue, helperValue) {
        var helperFunc = {};
        helperFunc.name = dynamicValue.substr(0, helperValue.index).replace(/\s/g, '');
        helperValue = helperValue ? helperValue[0].trim() : helperValue;
        var args = getHelperArgs(helperValue.substr(1, helperValue.length - 2));
        if (args === false) {
            return false;
        }
        helperFunc.args = args;
        return helperFunc;
    }

    function getHelperArgs(str) {
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
                if (stack[stack.length - 1] != "'" && stack[stack.length - 1] != "\"") {
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

    function syntaxCheck(value) {
        var stack = [],
            lastAdded;
        for (var i = 0; i < value.length; i++) {
            if (value[i] === "'") {
                if (lastAdded === "'" && value[i - 1] !== "\\") {
                    stack.pop();
                    lastAdded = undefined;
                } else if (!stack.length) {
                    lastAdded = value[i];
                    stack.push(lastAdded);
                }
            } else if (value[i] === "\"") {
                if (lastAdded === "\"" && value[i - 1] !== "\\") {
                    stack.pop();
                    lastAdded = undefined;
                } else if (!stack.length) {
                    lastAdded = value[i];
                    stack.push(lastAdded);
                }
            }
        }
        if (stack.length) {
            return false;
        }
        return true;
    }

    function doCompile(dynamicN, dynamicNodes, componentName, constr) {
        for (var j = 0; j < dynamicNodes.length; j++) {
            var info = dynamicNodes[j],
                type = info.type,
                pos = info.position,
                helperInfo = void 0;
            var dynN = getDynamicNode(dynamicN, pos);
            switch (type) {
                case "text":
                    {
                        var mustache = getMustache(dynN.nodeValue),
                            dynamicValue = void 0,
                            helperFunc = void 0;
                        if (mustache) {
                            helperFunc = getHelper(mustache);
                        }
                        var dynamic = getMustache(dynN.nodeValue);
                        if (helperFunc) {
                            info.helperInfo = helperFunc;
                        } else if (dynamic) {
                            //deepNodes.push({type: "text", position:deepN.slice(), dynamicValue: dynamic});
                            info.dynamicValue = dynamic;
                            //              LN to do
                            //              deepNodes.push({type: "text", position:deepN.slice(), dynamicValue: getDynamicValue(dynamic)});                    
                        }
                    }
                    break;
                case "attr":
                    {
                        var add = false,
                            toBeRemoved = [],
                            toBeAdded = [];
                        var node = dynN;
                        var attr = info.attr = info.attr || {};
                        for (var _i79 = 0; _i79 < node.attributes.length; _i79++) {
                            if (node.attributes[_i79].nodeValue.indexOf("{{") !== -1) {
                                var val = node.attributes[_i79].nodeValue;
                                var actValue = getMustache(val),
                                    actObj = void 0;
                                if (actValue) {
                                    actObj = getHelper(actValue);
                                } else if (/{{.*}}/.test(val) && !/\\{{.*}}/.test(val)) {
                                    actObj = splitMixedText(val);
                                }
                                if (actObj && (actObj.name === "action" || actObj.name === "method") && /^(onfocus|onfocusin|onfocusout|onresize|onscroll|onclick|ondblclick|onmousedown|onmouseup|onmousemove|onmouseover|onmouseout|onchange|onselect|onsubmit|onkeydown|onkeypress|onkeyup|oncontextmenu)$/.test(node.attributes[_i79].name)) {
                                    attr[node.attributes[_i79].name.substr(2)] = { name: node.attributes[_i79].name.substr(2), helperInfo: actObj, globalEvent: true };
                                    var actArgs = _Lyte.deepCopyObject(actObj.args);
                                    var actName = actArgs.splice(0, 1)[0];
                                    actName = actName.startsWith("'") ? actName.replace(/'/g, '') : actName;
                                    var actString = getArgString(actName, actArgs);
                                    node.setAttribute(node.attributes[_i79].name.substr(2), componentName + " => " + actString);
                                    toBeRemoved.push(node.attributes[_i79].name);
                                } else {
                                    if (actObj || actValue) {
                                        var attrToPush = {};
                                        if (node.attributes[_i79].name.startsWith("lbind:")) {
                                            toBeRemoved.push(node.attributes[_i79].name);
                                            toBeAdded.push({ "name": node.attributes[_i79].name.substring(6), "value": node.attributes[_i79].nodeValue });
                                            attrToPush.isLbind = true;
                                            attrToPush.name = node.attributes[_i79].name.substring(6);
                                        } else {
                                            attrToPush.name = node.attributes[_i79].name;
                                        }
                                        if (actObj) {
                                            if (actObj.name === "lbind") {
                                                attrToPush.dynamicValue = actObj.args[0];
                                                attrToPush.isLbind = true;
                                            } else {
                                                attrToPush.helperInfo = actObj;
                                            }
                                        } else {
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
                        if (toBeRemoved.length) {
                            for (var _i80 = 0; _i80 < toBeRemoved.length; _i80++) {
                                node.removeAttribute(toBeRemoved[_i80]);
                            }
                        }
                        if (toBeAdded.length) {
                            for (var _i81 = 0; _i81 < toBeAdded.length; _i81++) {
                                node.setAttribute(toBeAdded[_i81].name, toBeAdded[_i81].value);
                            }
                        }
                    }
                    break;
                case "for":
                case "forIn":
                case "component":
                case "registerYield":
                    {
                        var actualTemplate = _Lyte._ie ? dynN : dynN.content;
                        if (info.actualTemplate) {
                            actualTemplate = _LC.getContentForIE(info.actualTemplate, constr);
                            var depthTemp = type;
                            if (!_Lyte._ie) {
                                depthTemp = document.createElement("template");
                                depthTemp.setAttribute("is", type);
                                depthTemp.innerHTML = actualTemplate.innerHTML;
                                constr.splitTextNodes(depthTemp);
                                constr._depthTemp.content.appendChild(depthTemp);
                            }
                            if (dynamicNodes[j - 1] && dynamicNodes[j - 1].position.toString() === dynamicNodes[j].position.toString()) {
                                dynamicNodes[j - 1]._depthTemp = depthTemp;
                            } else {
                                dynamicNodes[j]._depthTemp = depthTemp;
                            }
                        }
                        doCompile(actualTemplate, info.dynamicNodes, componentName, constr);
                        if (_Lyte._ms) {
                            if (info.actualTemplate) {
                                info.templateContent = actualTemplate.outerHTML;
                            } else {
                                info.templateContent = dynN.outerHTML;
                            }
                            dynN.innerHTML = "";
                        }
                    }
                    break;
                case "if":
                case "switch":
                    {
                        var oldDyn = dynN;
                        if (info.actualTemplate) {
                            dynN = _LC.getContentForIE(info.actualTemplate, constr);
                            var depthTemp = type;
                            if (!_Lyte._ie) {
                                depthTemp = document.createElement("template");
                                depthTemp.setAttribute("is", type);
                                depthTemp.innerHTML = dynN.innerHTML;
                                constr.splitTextNodes(depthTemp);
                                constr._depthTemp.content.appendChild(depthTemp);
                            }
                            if (dynamicNodes[j - 1] && dynamicNodes[j - 1].position.toString() === dynamicNodes[j].position.toString()) {
                                dynamicNodes[j - 1]._depthTemp = depthTemp;
                            } else {
                                dynamicNodes[j]._depthTemp = depthTemp;
                            }
                        }
                        var def = "default";
                        if (_Lyte._ms) {
                            var cases = {};
                            var defCase;
                            var dynNchildNodes = _Lyte._ed ? dynN.content.childNodes : dynN.childNodes;
                            for (var i = 0; i < dynNchildNodes.length; i++) {
                                if (dynNchildNodes[i].tagName === "TEMPLATE") {
                                    if (dynNchildNodes[i].getAttribute("case")) {
                                        cases[dynNchildNodes[i].getAttribute("case")] = dynNchildNodes[i];
                                    } else if (dynNchildNodes[i].hasAttribute("default")) {
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
                            for (var _key18 in info.cases) {
                                var content = _LC.getContentForIE(dynNContent.querySelector("[case='" + _LC.cssEscape(_key18) + "']"));
                                doCompile(content.tagName === "TEMPLATE" ? content.content : content, info.cases[_key18].dynamicNodes, componentName, constr);
                            }
                            if (info[def].dynamicNodes) {
                                var content = _LC.getContentForIE(dynNContent.querySelector("[default]"));
                                doCompile(content.tagName === "TEMPLATE" ? content.content : content, info[def].dynamicNodes, componentName, constr);
                            }
                        }
                    }
                    break;
            }
        }
    }

    function getDynamicNode(content, positions) {
        var dynamicN = content;
        for (var i = 0; i < positions.length; i++) {
            dynamicN = dynamicN.tagName != "TEMPLATE" || _Lyte._ie ? dynamicN.childNodes[positions[i]] : dynamicN.content.childNodes[positions[i]];
        }
        return dynamicN;
    }

    function splitMixedText(str) {
        var stack = [],
            start = 0,
            helper = { name: "concat", args: [] };
        for (var i = 0; i < str.length; i++) {
            var j = i;
            if (str[i - 1] !== "\\" && str[i] === "{" && str[++i] === "{") {
                stack.push('{{');
                helper.args.push("'" + str.substr(start, j - start) + "'");
                start = i + 1;
            } else if (str[i] === "}" && str[++i] === "}" && stack.length) {
                stack.pop(start);
                var toPush = str.substr(start, j - start);
                var actObj = getHelper(toPush);
                if (actObj) {
                    toPush = actObj;
                    helper.args.push({ type: "helper", value: toPush });
                } else {
                    helper.args.push(toPush);
                }
                start = i + 1;
            }
        }
        if (start < str.length) {
            helper.args.push("'" + str.substr(start, str.length - start) + "'");
        }
        return helper;
    }

    function getHelperArgValue(argValue) {
        switch (argValue) {
            case "undefined":
                return undefined;
            case "true":
                return true;
            case "false":
                return false;
            case "null":
                return null;
            case "":
                return undefined;
            default:
                if (argValue && argValue.startsWith("'") && argValue.endsWith("'")) {
                    //escaping
                    argValue = argValue.replace(argValue.match(/\\\'/g), "'");
                    argValue = argValue.replace(argValue.match(/\\\"/g), '"');
                    return argValue;
                } else if (/\([\w\s,')(]*/.test(argValue)) {
                    return { "type": "helper", "value": getHelper(argValue) };
                } else if (!isNaN(argValue)) {
                    return parseInt(argValue);
                } else {
                    return argValue;
                }
        }
    }

    function getArgString(name, array) {
        var retString = void 0;
        for (var _i82 = 0; _i82 < array.length; _i82++) {
            if (array[_i82] && _typeof(array[_i82]) === "object") {
                array[_i82] = getArgString(array[_i82].value.name, array[_i82].value.args);
            }
        }
        if (name) {
            retString = name + "(" + array.toString() + ")";
        } else {
            retString = array.toString();
        }
        return retString;
    }

    _LC[registerHelperStr]("unbound", function (value) {
        return value;
    });

    _LC[registerHelperStr]("action", function (parentNode, attrName, isCustom, actObj) {
        if (isCustom) {
            parentNode._actions = parentNode._actions ? parentNode._actions : {};
            if (!parentNode._actions[attrName]) {
                this.createCustomEvent(attrName, parentNode, actObj);
                parentNode.removeAttribute(attrName);
            }
        } else {

            this.createEventListeners(parentNode, attrName, actObj);
        }
    });

    _LC[registerHelperStr]("lbind", function (name) {
        return this.getData(name);
    });

    _LC[registerHelperStr]("method", function (parentComponent, attributeNode, functionName) {
        var parentComponent = arguments[0];
        var attributeNode = arguments[1];
        var functionName = arguments[2];
        var self = arguments[0].component;
        var childComponent = attributeNode ? attributeNode.ownerElement : null;
        var attributeName = arguments[1].nodeName;
        attributeNode = null;
        var args = Array.prototype.slice.call(arguments, 2);
        var newFunc = function newFunc() {
            var node = this.$node;
            var contextSwitchArray = [];
            _LC.adCx(node, contextSwitchArray);
            var processedArgs = this.$node.processArgs(this.$node._callee, args, [], undefined, this.$node);
            var functionName1 = processedArgs.splice(0, 1)[0];
            _LC.rmCx(node, contextSwitchArray);
            var customArgs = Array.from(arguments);
            var mainArgs = processedArgs.concat(customArgs);
            if (self.methods[functionName1]) {
                return self.methods[functionName1].apply(self, mainArgs);
            }
            _Lyte.error("LC009", functionName, self.$node.tagName);
        };
        if (childComponent) {
            if (!childComponent.set) {
                childComponent.setMethods(_LC.String.toCamelCase(attributeName), newFunc);
            } else {
                childComponent.component.methods[_LC.String.toCamelCase(attributeName)] = newFunc;
            }
        } else {
            return newFunc;
        }
    });

    _LC[registerHelperStr]("unescape", function (value, additionalObject, userInstance) {
        var divEle = document.createElement("div");
        if (userInstance && Object.keys(userInstance).length) {
            if (additionalObject && Object.keys(additionalObject).length) {
                Lyte.Security.addGlobalObject(userInstance, additionalObject);
                var clean = userInstance.sanitize(value);
                Lyte.Security.removeGlobalObject(userInstance, additionalObject);
            } else {
                var clean = userInstance.sanitize(value);
            }
        } else {
            if (additionalObject && Object.keys(additionalObject).length) {
                Lyte.Security.addGlobalObject(Lyte.Security._ourSanitizerInstance_, additionalObject);
                var clean = Lyte.Security._ourSanitizerInstance_.sanitize(value);
                Lyte.Security.removeGlobalObject(Lyte.Security._ourSanitizerInstance_, additionalObject);
            } else {
                var clean = Lyte.Security._ourSanitizerInstance_.sanitize(value);
            }
        }
        divEle.innerHTML = clean;
        return divEle;
    });

    _LC[registerHelperStr]("escape", function (value, type) {
        if (type == 'url') {
            return ZSEC.Encoder.encodeForHTMLAttribute(value);
        } else if (type == 'js') {
            return ZSEC.Encoder.encodeForJavaScript(value);
        } else if (type == 'css') {
            return ZSEC.Encoder.encodeForCSS(value);
        } else {
            return value;
        }
    });

    _LC[registerHelperStr]("debugger", function () {
        debugger;
    });

    _LC[registerHelperStr]("log", function () {
        console.log.apply(window, Array.from(arguments));
    });

    _LC[registerHelperStr]("ifEquals", function (arg1, arg2) {
        if (arg1 === arg2) {
            return true;
        } else {
            return false;
        }
    });

    _LC[registerHelperStr]("if", function (value, trueValue, falseValue) {
        if (value) {
            return trueValue;
        } else {
            return falseValue;
        }
    });

    _LC[registerHelperStr]("negate", function (arg1) {
        return !arg1;
    });

    _LC[registerHelperStr]("ifNotEquals", function (arg1, arg2) {
        if (arg1 === arg2) {
            return false;
        } else {
            return true;
        }
    });

    _LC[registerHelperStr]('concat', function () {
        var resp = '';
        var argLength = arguments.length;
        for (var i = 0; i < argLength; i++) {
            if (arguments[i] != undefined) {
                resp += arguments[i];
            }
        }
        return resp;
    });

    defProp(HTMLElement.prototype, 'setData', {
        enumerable: false,
        value: function value(arg0, arg1) {
            this._initProperties = this._initProperties || {};
            if (typeof arg0 === "string") {
                this._initProperties[arg0] = arg1;
            } else if (arg0 instanceof Object) {
                for (var key in arg0) {
                    this._initProperties[key] = arg0[key];
                }
            }
        }
    });

    defProp(HTMLElement.prototype, 'setMethods', {
        enumerable: false,
        value: function value(arg0, arg1) {
            this._initMethods = this._initMethods || {};
            if (typeof arg0 === "string") {
                this._initMethods[arg0] = arg1;
            } else if (arg0 instanceof Object) {
                for (var key in arg0) {
                    this._initMethods[key] = arg0[key];
                }
            }
        }
    });

    _LC[registerHelperStr]('expHandlers', function (leftOperand, operator, rightOperand) {
        if (operator == '++') {
            if (rightOperand == "postfix") {
                return leftOperand++;
            } else if (rightOperand == "prefix") {
                return ++leftOperand;
            }
        } else if (operator == "--") {
            if (rightOperand == "postfix") {
                return leftOperand--;
            } else if (rightOperand == "prefix") {
                return --leftOperand;
            }
        } else if (operator == "==" || operator == "===") {
            return leftOperand == rightOperand;
        } else if (operator == "!=" || operator == "!==") {
            return leftOperand != rightOperand;
        } else if (operator == "&&") {
            return leftOperand && rightOperand;
        } else if (operator == "||") {
            return leftOperand || rightOperand;
        } else if (operator == "+" && rightOperand) {
            return leftOperand + rightOperand;
        } else if (operator == '-' && rightOperand) {
            return leftOperand - rightOperand;
        } else if (operator == '*') {
            return leftOperand * rightOperand;
        } else if (operator == "/") {
            return leftOperand / rightOperand;
        } else if (operator == "%") {
            return leftOperand % rightOperand;
        } else if (operator == "<") {
            return leftOperand < rightOperand;
        } else if (operator == ">") {
            return leftOperand > rightOperand;
        } else if (operator == "<=") {
            return leftOperand <= rightOperand;
        } else if (operator == ">=") {
            return leftOperand >= rightOperand;
        } else if (operator == '|') {
            return leftOperand | rightOperand;
        } else if (operator == '&') {
            return leftOperand & rightOperand;
        } else if (operator == "!") {
            return !leftOperand;
        } else if (operator == "-" && !rightOperand) {
            return -leftOperand;
        } else if (operator == '=') {
            leftOperand = rightOperand;
            return leftOperand;
        } else if (operator == "+=") {
            return leftOperand += rightOperand;
        } else if (operator == '-=') {
            return leftOperand -= rightOperand;
        } else if (operator == "*=") {
            return leftOperand *= rightOperand;
        } else if (operator == '/=') {
            return leftOperand /= rightOperand;
        }
    });

    _LyteComponent.register("lyte-event-listener", {
        _template: "<template tag-name=\"lyte-event-listener\"></template>",
        _dynamicNodes: [],
        _observedAttributes: ['eventName'],
        init: function init() {
            var self = this;
            var regId = _Lyte.addEventListener(this.get('eventName'), function () {
                var args = Array.prototype.slice.call(arguments);
                args.splice(0, 0, 'on-fire');
                self.throwEvent.apply(self, args);
            });
            //this.set('regId', regId);
            this.regId = regId;
        },
        data: function data() {
            return {
                "eventName": _Lyte.attr("string")
            };
        },
        didDestroy: function didDestroy() {
            _Lyte.removeEventListener(this.regId);
        }
    });

    _LyteComponent.registerCustomPropHandler("ltProp");

    _LyteComponent.shouldIgnoreDisconnect = function () {
        return _LC.ignoreDisconnect;
    };

    _LyteComponent.addLyteEventListener = function (element, eventName, func, context) {
        element._lyteEvents = element._lyteEvents || {};
        element._lyteEvents[eventName] = element._lyteEvents[eventName] || [];
        var ind = element._lyteEvents[eventName].push({ "func": func, "fromEventListener": true, "context": context });
        return eventName + "-" + ind;
    };

    _LyteComponent.removeLyteEventListener = function (element, listenerId) {
        if (!listenerId) {
            _Lyte.error("No listenerId provided");
            return;
        }
        var split = listenerId.split('-');
        var eventName = split[0];
        var index = parseInt(split[1]);
        if (!element._lyteEvents || !element._lyteEvents[split[0]] || isNaN(index)) {
            _Lyte.error("Invalid listenerId / listener is not available");
            return;
        }
        element._lyteEvents[split[0]][split[1] - 1] = {};
    };

    _LyteComponent.throwEvent = _LC.throwEvent;

    _LC.hasLyteEvents = function (element, eventName) {
        if (element._lyteEvents && element._lyteEvents[eventName]) {
            return true;
        } else {
            return false;
        }
    };

    _LC.handleLyteEvents = function (element, event) {
        var funcs = element._lyteEvents[event.type];
        var ret;
        var eventStopped;
        for (var i = 0; i < funcs.length; i++) {
            if (funcs[i].func) {
                ret = funcs[i].func.call(funcs[i].context ? funcs[i].context : window, event);
                if (ret === false || event.cancelBubble) {
                    eventStopped = true;
                    break;
                }
            }
        }
        if (eventStopped) {
            event.stopPropagation();
        }
        return eventStopped;
    };

    Object.defineProperty(window, "LyteComponent", {
        get: function get() {
            _Lyte.warn("Usage of LyteComponent is deprecated. Use Lyte.Component instead");
            return LyteComponent;
        }
    });
    _LyteComponent.chromeBugFix();
})(window);

Lyte.$.requiredMixins.component = function (mix, compDetails) {
    var mixinsToBeUsed = [];
    var actionsFromMixin = {};
    var methodsFromMixin = {};
    var newDefinition = {};
    mixinsToBeUsed.push(mix);
    compDetails.forEach(function (ele) {
        var componentName = ele;
        var customCrmComponent = LyteComponent._registeredComponents[componentName];
        if (mixinsToBeUsed.length) {
            LyteComponent.dataFromMixin(mixinsToBeUsed, actionsFromMixin, methodsFromMixin, newDefinition);
        }
        customCrmComponent._actions = Object.assign(customCrmComponent._actions, actionsFromMixin);
        var methods = Object.assign(customCrmComponent._methods, methodsFromMixin);
        delete newDefinition.methods;
        LyteComponent.updateCustomCrmComponent(newDefinition, customCrmComponent);
        customCrmComponent._methods = methods;
        LyteComponent._registeredComponents[componentName] = customCrmComponent;
    });
};
//security
Lyte.Security.addGlobalObject = function (instanceObj, additionalObj) {
    for (var property in additionalObj) {
        if (Array.isArray(additionalObj[property])) {
            additionalObj[property].forEach(function (item) {
                if (instanceObj["_" + property].indexOf(item) == -1) {
                    instanceObj["_" + property].push(item);
                }
            });
        }
    }
};
Lyte.Security.removeGlobalObject = function (instanceObj, additionalObj) {
    for (var property in additionalObj) {
        if (Array.isArray(additionalObj[property])) {
            additionalObj[property].forEach(function (item) {
                var index = instanceObj["_" + property].indexOf(item);
                if (index != -1) {
                    instanceObj["_" + property].splice(index, 1);
                }
            });
        }
    };
};