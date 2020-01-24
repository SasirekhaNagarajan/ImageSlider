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

//$Id$
Lyte.registerErrorCodes({
	LD01: "Primary key value might be missing in the response data that is received, {0}",
	LD02: "{0} - {1} not registered",
	LD03: "Cannot set the error {0} for {1}",
	LD04: "No such record to merge, {0}",
	LD05: "Model( {0} ) of related property - {1} not found in model - {2}",
	LD06: "Backward relation not present in model( {0} ), for the property {1} of model( {2} )",
	LD07: "{0} type not handled in handleArrayOperations",
	LD08: "{0} {1} will be deprecated from next version {2}",
	LD09: "deserializeKey cannot be processed for payload with more than two keys. Please use payloadKey callback instead or try modifying the same in normalizeResponse callback",
	LD10: "Response data not in a format lyte data store expects",
	LD11: "Deprecation Warning! findRecord response payload will not accept an array. It will be deprecated from the next version",
	LD12: "Response ( {0} ) is not in a format, lyte data store expects",
	LD13: "Response doesn't contain payload data in {0} (modelName) key of the response object",
	LD14: "Cannot register {0} - {1}, as it already exists.",
	LD15: "Primary key value might be missing in the response data that is received, {0}",
	LD16: "Primary key value expected for the record, {0}",
	LD17: "Record with the primary key value already exists"
});
var $Record = function $Record(){
	Object.assign(this, {inIDB : false, isModified : false, isNew : false, isDeleted : false, isError : false, events : [], validatedOnCreate : true, error : {}});
}
/* Record Constructor
Steps Done: 
* Assign data
* Assign $Record -> Maintaining Record state
* Assign ref of model,record to act independently
***
*/
var Record = function Record(modelName,data){
	Object.assign(this, data);
	Object.defineProperties(this, {
		$ :{
			writable : true,
			value : new $Record()
		}
	});
	var model = store.modelFor(modelName);
	var pK = model._pK;
	Object.defineProperties(this.$, {
		pK:{
			value: store.$.getpKVal(this, model),
			writable: true
		},
		model : {
			value : model
		},
		record : {
			value : this
		},
		_attributes : {
			value : {},
			writable : true
		},
		_relationships : {
			value : {},
			writable : true
		},
		isDirty: {
			value: function value(){
				var result = [];
				var record = this.record;
				if(record.$.isModified){
					return true;
				}
				result = store.$.isDirty(record, this.model.relations);
                if(result.length){
					return result;
				}
				return false;
			}
		},
		undoStack : {
			value : [],
			writable : true
		},
		redoStack : {
			value : [],
			writable : true
		}
	});
	var parent = store.$.saveParent;
	if(parent && this !== parent){
		store.$.defProp(this.$, "parent", parent);
	}
    var fields = model.fieldList, record = {}, errorObj = new error1();
    for(var field in fields){
        var fieldKeys = fields[field];
        if(fieldKeys.type != "relation"){
            var val = data[field];
            if(val === undefined || val === ""){
                if(fieldKeys.hasOwnProperty("default")){
                    this[field] = fieldKeys.default;
                }
            }            
        }
    }
	var props = model._properties;
	if(Object.keys(props).length){
		if(!this._bindings){
			store.$.defProp(this, '_bindings', new Set(), false, true);
		}
		this._bindings.add(props);
		store.$.establishObserverBindings(this,props);
	}
//	console.log(this.$.model._properties);
}
/* Assigning the following in $record.prototype 
So it will be available to all record.$
*/

Object.defineProperties($Record.prototype,{
	get: {
		value:function value(attr){
			return this.record[attr];
		}
	},
	set: {
		value : function value1(attr, value){
			if(this.isDeleted){
				store.$.setRecErr(this, this.model._pK, "ERR17");
			}
			else{
				store.$.setData(this, attr, value);
			}
			return this.record;
		}
	},
	getDirtyAttributes : {
		value : function value(){
			var attributes = this._attributes, ret = [];
			if(Object.keys(attributes).length){
				for(var key in attributes){
					ret.push(key);
				}
			}
			return ret;
		}
	},
	rollBackAttributes : {
		value : function value(attr){
			if(!Array.isArray(attr)){
				attr = [attr];
			}
			var record = this.record, changed = [], model = this.model;
			for(var i=0; i<attr.length; i++){
				var key = attr[i];
				if(this._attributes.hasOwnProperty(key)){
					var field = model.fieldList[key], oldVal = this._attributes[key];
					if(field.type == "relation"){
						store.$.rllBckRecArr(oldVal, record, model, field);
						var obj = record.$.dN && record.$.dN.hasOwnProperty(key) ? record.$.dN[key] : new Map();
						obj.forEach(function(item, mKey){
							store.$.deleteDeepNest(record, key, mKey);
						});
					}
					else{
						store.$.cmpSet( record, key, oldVal, true );
					}
					changed.push(key);
					delete this._attributes[key];
					store.$.clrRecErr(this, key);
				}
			}
			if(!Object.keys(this._attributes).length){
				if( !this.hasOwnProperty("deepNest") || ( this.deepNest && !Object.keys(this.deepNest).length )){
					store.$.removeParentNesting(record);
				}
				this.isModified = false;
				if(!this.isNew){
					store.$.deleteFromArray(model.dirty, this.get(model._pK));
				}
			}
			if(changed.length > 0){
                var arr = [record,changed];
				this.emit("change", arr);
				model.emit("change", arr);
			}
		}
	},
	rollBack : {
		value : function value(){
			var model = this.model, pK = model._pK;
			if(this.isModified){
				this.rollBackAttributes(this.getDirtyAttributes());
			}
			if(this.isDeleted){
				var index = store.$.getIndex(model._deleted, pK, this.get(pK));
				store.$.rollBackDelete(model, index);
			}
			else if(this.isNew){
				store.$.rollBackNew(model, this.record, pK);
			}			
            else if(this.isError){
                store.$.clrRecErr(this);
			}
			store.$.removeOnSave(this.model._name, this.record.$.pK);
		}
	},
	deleteRecord : {
		value : function value(){
			var model = this.model, record = this.record, pK = model._pK;
			store.$.removeFromStore(model, record.$.pK, undefined, true);
		}		
	},
	destroyRecord : {
		value:function value(customData,qP){
			this.deleteRecord();
			return this.save(customData,qP,"destroyRecord");
		}				
	},
    addEventListener : {
		value : function value(type, func){
            return store.$.eventListeners.add(this, type, func);
        }
 	},
	removeEventListener : {
		value : function value(id){
            store.$.eventListeners.remove(this,id);
		}
	},
	emit : {
		value : function value(type, args){
            store.$.eventListeners.emit(this,type,args);
        }
	},
	triggerAction: {
		value : function value(actionName,customData,qP){
			var model = this.model, actions = model.actions, action = (actions) ? actions[actionName] : undefined;
			if(action){
				return store.adapter.$.handleAction(actionName, model, this.record,customData,qP);
			}
			return Promise.reject({code : "ERR18", message : Lyte.errorCodes.ERR18, data : actionName});
 		}
	},
	save: {
		value : function value(customData,qP,options,destroy){
			var model = this.model, record = this.record, dirty = this.isDirty(), validateOnSave = options && options.validateOnSave, skipValidation = options && options.skipValidation, clear, fields = model.fieldList, ret;
            if(this.isDeleted){
				if(!this.isNew){
					return store.adapter.$.del(model._name, record, true,destroy,customData,qP);
				}
				// store.adapter.$.handleResponse(record, record, undefined, undefined, model);
			}
			else if(this.isNew){
				var err = this;
				if(!skipValidation && (!record.$.validatedOnCreate || validateOnSave)){
					ret = store.$.validateRecord(this.record, fields);
				}
				if(!skipValidation && (ret == false || (err && err.error && Object.keys(err.error).length > 0))){
					return Promise.reject(err.error);
				}
				return store.adapter.$.create(model._name, record, true ,customData,qP);
			}
			else if(this.isModified || (dirty && dirty.length) ){
				var data = {};
				if(!skipValidation && (options && validateOnSave)){
					ret = store.$.validateRecord(this.record, fields);
				}
				if(!skipValidation){
					if(ret == false || (record && record.$ && record.$.isError)){
						return Promise.reject(record.$.error);
					}
				}
				var data = store.$.updateJSON(this.record, model, dirty);
				return store.adapter.$.put(model._name, data, record, true, customData,qP);
			}
			return Promise.resolve();
		}
	},
	getInitialValues : {
		value : function(attr){
			var isAttrPassed = false;
			if(attr){
				if(!Array.isArray(attr)){
					attr = [attr];
				}
				isAttrPassed = true;
			}
			else{
				attr = this.getDirtyAttributes();
			}
			var ret = {}, rec = this.record;
			for(var i=0; i<attr.length; i++){
				if(rec[attr] == undefined || !rec[attr[i]].add){
					ret[attr[i]] = this._attributes[attr[i]];					
				}
				else{
					ret[attr[i]] = rec[attr[i]].slice(0);
					var arr = this._attributes[attr[i]], pK = rec[attr[i]].model._pK;
					for(var j=arr.length-1; j>=0; j--){
						if(arr[j]._type == "added"){
							for(var k=0; k<arr[j].records.length; k++){
								var index = store.$.getIndex(ret[attr[i]], pK, arr[j].records[k].$.pK);
								if(index == -1){
									continue;
								}
								ret[attr[i]].splice(index, 1);
							}
						}
						else if(arr[j]._type == "removed"){
							for(var k=arr[j].records.length-1; k>=0; k--){
								ret[attr[i]].splice(arr[j]._indices[k], 1, arr[j].records[k]);
							}
						}
						else if(arr[j]._type == "changed"){
							ret[attr[i]] = Array.isArray(arr[j].records) ? Array.from(arr[j].records) : arr[j].records;
						}
					}
				}
			}
			if(isAttrPassed){
				return ret[attr[0]];
			}
			return ret;
		}
	},
    toJSON:{
        value: function(idb){
            return Object.assign({}, store.$.toJSON(this.model._name, this.record, idb ? "idb" : true));
        }
	},
	undo:{
		value: function(state){
			state = state || 0;
			var currentState = this.undoStack.length;
			while(currentState-- > state){
				store.$.undo(this);
			}
		}
	},
	getCurrentState:{
		value: function(){
			return this.undoStack.length;
		}
	},
	redo:{
		value:function(){
			var obj = this.redoStack.pop(),redo, undoObj = {};
			if(obj){
				for(var key in obj){
					var redo = obj[key];
					if(redo._type == "update"){
						if(redo.val){
							store.$.setData(this,key,redo.val,undoObj)
						}else if(redo.records){
							store.$.setData(this,key,redo.records,undoObj)	
						}
					}
					else if(redo._type == "propDelete"){
						undoObj[key] = {type:"propAdd"}
						store.$.setData(this,key,redo.val,undoObj);
					}
					else if(redo._type == "added"){
						this.record.$.get(key).remove(redo.records,undefined,undoObj);
					}
					else if(redo._type == "removed"){
						store.$.rllBckRecArr([redo], this.record, this.model, this.model.fieldList[key])
						redo._type = "added";
						undoObj[key] = redo;
					}
	
				}
				this.undoStack.push(undoObj);
			}
		}	
	},
	validate : {
		value : function(arr){
			var fields = {};
			var model = this.model;
			var fieldList = model.fieldList;
			if(Array.isArray(arr)){
				arr.forEach(function(item, index){
					if(fieldList[item]){
						fields[item] = fieldList[item];
					}
				});
			}
			if(Object.keys(fields).length == 0){
				fields = fieldList;
			}
			var record = this.record, clear;
			store.$.validateRecord(record, fields);				
		}
	}
});

/* Model Object Constructor 
*/
var Model = function Model(name,fields){
	Object.assign(this, {_name : name, fieldList : {id : {type : "string", primaryKey : true, defined : false}}, relations : {}, _properties : {}, data : [], dirty : [], _deleted : [],
		events : {}});
	var obs = [];
	for(var key in fields){
		store.$.registerField(this,key,fields[key],obs);
	}
	if(!this._pK){
		this._pK = 'id';
	}
	this.isComp = false;
	if(this._pK.split(',').length > 1){
		this.isComp = true;
	}
	if(typeof Lyte != "undefined"){
		Lyte.establishObserverBindings(obs,true,this._properties);
	}
	store.$.defArrUtls(this.data);
	store.$.defUtls(this.data,this);
	store.$.defProp(this, "extends", store.$.extendModel);
}
Model.prototype.addEventListener = function(type, func){
    return store.$.eventListeners.add(this,type,func);
}
Model.prototype.removeEventListener = function(id){
    store.$.eventListeners.remove(this,id);
}
Model.prototype.emit = function(type, args){
    store.$.eventListeners.emit(this,type,args);
}
Model.prototype.on = function(type,func){
    return this.addEventListener(type,func);
}

var store = {
	model : {},
	$:{ 
		request: {},
		toRelate: {},
		idbQueue:[],
		idbQ:{},
		idbQ2:{},
		scExtd: function(type, name, opts, parent){
			var scope = type == "adapter" ? store.adapter : store.serializer;
			if(!name){
				return;
			}
			if(scope.hasOwnProperty(name)){
				Lyte.warn("LD14",type,name);
			}
			if(type == "adapter"){
				scope[name] = new Adapter(opts,parent,name);
			}
			else{
				scope[name] = new Serializer(opts,parent,name);
			}
			if(scope.application && name != "application")
			{
				scope[name].$super = scope.application;
				scope.application.__extendedBy.push(name);
			}
			if(!scope.application && name != "application")
            {
                scope.__toAddSuper = scope.__toAddSuper || {};
                     if(!scope.__toAddSuper.hasOwnProperty("application")){
                        scope.__toAddSuper.application = [];   
                     }
                     scope.__toAddSuper.application.push(name);
            }
			return scope[name];
		},
		cB:function(callback,args){
			return callback.func.apply(callback.scope, args.concat(callback.name));
 		},
 		consArg:function(){
 			var arg = arguments, arr = [];
 			for(var i=0; i<arg.length; i++){
 				arr.push(arg[i]);
 			}
 			return arr;
 		},
		cbScp:function(key, type, scope){
			var scope = scope ? store.serializer : store.adapter; 
			var layer = scope[key], callback, application = scope.application;
			while(callback == undefined){
				if(layer && layer[type] && typeof layer[type] == "function"){
					return {scope : layer, func : layer[type], name: type};
				}
				else if(layer && layer.$super){
					layer = layer.$super;
				}
				else if(application && application[type] && typeof application[type] == "function"){
					return {scope : application, func : application[type] , name : type};
				}
				else{
					return undefined;
				}
			}
		},
		comparePk : function(rec, pkVal){
			var pK = rec.$.pK;
			var pkType = typeof pK;
			if(pkType == "string" || pkType == "number"){
				return pK === pkVal;
			}
			else if(typeof pK == "object"){
				var len = Object.keys(pK).length, i=0;
				for(var key in pK){
					if(pK[key] === pkVal[key]){
						i++;
					}
				}
				return len === i;
			}
		},
		getpKVal : function(record, model){
			var model = model ? model : record.$.model;
			var pK = model._pK;
			var arr = pK.split(',');
			if(arr.length == 1){
				return record[arr[0]];
			}
			else{
				var obj = {};
				arr.forEach(function(item, index){
					obj[item] = record[item];
				});
			}
			return obj;
		},
		undo: function(rec){
			var obj = rec.undoStack.pop(),undo, redoObj = {};
			if(obj){
				for(var key in obj){
					var undo = obj[key];
					if(undo._type == "update"){
						if(undo.hasOwnProperty("val")){
							store.$.setData(rec,key,undo.val,redoObj)
						}else if(undo.hasOwnProperty("records")){
							store.$.setData(rec,key,undo.records,redoObj)	
						}
					}
					else if(undo._type == "propAdd"){
						if(typeof Lyte != "undefined"){
							redoObj[key] = {type:"propDelete", val:rec.record[key]};
							Lyte.objectUtils(rec.record, "delete", key);
						}
						else{
							delete rec.record[key];
						}
					}
					else if(undo._type == "added"){
						rec.record.$.get(key).remove(undo.records,undefined,redoObj);
					}
					else if(undo._type == "removed"){
						store.$.rllBckRecArr([undo], rec.record, rec.model, rec.model.fieldList[key])
						undo._type = "added";
						redoObj[key] = undo;
					}
				}
				rec.redoStack.push(redoObj);				
			}
		},
		unregisterModel : function(name){
			var model = store.modelFor(name);
			if(!model){
				Lyte.warn("LD02","Model ",name);
				return;
			}
			if(model.data.length){
				store.unloadAll(name);
			}
			var extendedBy = model.extendedBy;
			if(extendedBy && Object.keys(extendedBy).length){
				for(var ext in extendedBy){
					store.unregisterModel(ext);
				}
			}
			var extend = model.extend;
			if(extend){
				var extMod = store.modelFor(extend);
				delete extMod.extendedBy[name];
			}
			delete store.model[name];  
		},
		updateFieldValidation:function(model, key){
			var records = model.data;
			var fields = model.fieldList;
			records.forEach(function(item){
				var isOldVal = item.$.error && item.$.error.hasOwnProperty(key) && item.$.error[key].hasOwnProperty("value") ? true : false;
				var oldVal = isOldVal ? item.$.error[key].value : undefined;
				store.$.clrRecErr(item.$, key);
				isOldVal ? store.$.validateField(item, key, fields[key], undefined, {old:true, value:oldVal}) : store.$.validateField(item, key, fields[key], undefined)
				if(isOldVal && item.$.error && Object.keys(item.$.error) === 0){
					item.$.set(key, oldVal);
				}
			});
		},
		validateRelatedRecord:function(record, key, field){
			var fields = store.model[field.relatedTo].fieldList;
			if(field && field.opts && record && record.hasOwnProperty(key)){
				if(field.opts && field.opts.serialize == "record"){
					if(field.relType == "belongsTo" && Lyte.isRecord(record[key])){
						return this.validateRecord( record[key], fields);
					}
					else if(field.relType == "hasMany"){
						if(Array.isArray(record[key])){
							var ret = true, result, self = this;
							record[key].forEach(function(item, index){
								if(Lyte.isRecord(item)){
									result = self.validateRecord(item, fields);
									if(result === false){
										ret = false;
									}
								}
							});
							return ret;
						}
					}
				}
			}
		},
		validateRecord:function(record, fields){
			var result, ret = true, returnVal;
			for(var field in fields){
				returnVal = this.validateField(record, field, fields[field], result);
				if(ret === true && returnVal === false){
					ret = false;
				}
			}
			if(ret === false || (record.$.isError === true && record.$.error && Object.keys(record.$.error).length)){
				return false;
			}
			return true;
		},
		validateField : function(record, key, field, result, obj){
			var val = obj && obj.old ? obj.value : record[key], ret, err = record.$, clear;
			if(field.type == "relation"){
				ret = this.validateRelatedRecord(record, key, field);
				if(ret === false){
					result = false;
					return result;
				}
			}
			else if(field.mandatory && !record.$.error.hasOwnProperty(key) && (val === undefined || val === "" || (Array.isArray(val) && val.length === 0) )){
				store.$.setRecErr(err, key, {code : "ERR02", message : Lyte.errorCodes.ERR02, value : val});
			}
			else{
				clear = true;
				if( obj || (record.hasOwnProperty(key) && !record.$.error.hasOwnProperty(key))){
					for(var property in field){
						var resp = Lyte.checkProperty(property, val, key, field[property], record);
						if(resp !== true){
							if(typeof resp == "object"){
								resp.value = val; 
							}
							store.$.setRecErr(err,key,resp);
							clear = false;
							//err[field] = resp;
							break;
						}
					}
					if(clear){
						store.$.clrRecErr(err, key);
					}		
				}
			}
		},
		partialData:function(rec, key, pK, type){
			var arr = rec[key];
			if(!arr || !Array.isArray(arr)){
				return true;
			}
			if(!arr.partial){
				store.$.defPar(arr);
			}
			var partial = arr.partial = arr.partial || new Map();
			if(!partial.get(pK)){
				partial.set(pK, {});
			}
			var revert = false;
			var obj = partial.get(pK);
			var objType = obj.type;
			switch(objType){
				case "added":{
					if(type == "removed"){
						partial.delete(pK);
						revert = true;
					}
					break;
				}
				case "removed":{
					if(type == "added"){
						partial.delete(pK);
						revert = true;
					}
					break;
				}
				case "modified":
				case "updated":{
					if(type == "added"){
						//this case mostly won't come. if at all it comes, break
						break;
					}
				}
				default:{
					partial.set(pK, { type : type });
				}
			}
			if(revert && !partial.size){
				store.$.deleteDeepNest(rec, key, pK);
				return true;
			}
		},
		removeParentNesting:function(rec){
			var model = rec.$.model;
			var pkVal = rec.$.pK;
			var rels = model.relations;
			for(var key in rels){
				var relations = rels[key];
				relations.forEach(function(item){
					var inv, deep, part, invRecs;
					//store.$.getRelations(model, item.relKey, store.model[item.relatedTo], rel);
					inv = store.$.getBackwardRel(model,item,store.model[item.relatedTo]);
					//inv = rel.backward;
					if(inv && inv.opts){
						deep = inv.opts.deepNest;
						part = inv.opts.serialize == "partial" ? true : false;
						if(!item.relKey){
							invRecs = store.$.getRelatedRecord(rec,item.relatedTo,item.dummy);
						}
						else{
							invRecs = rec[item.relKey];
						}
					}
					if(deep){
						if(Array.isArray(invRecs)){
							invRecs.forEach(function(item){
								if(Lyte.isRecord(item)){
									store.$.deleteDeepNest(item, inv.relKey, pkVal);
								}
							});
						}
						else if(Lyte.isRecord(invRecs)){
							store.$.deleteDeepNest(invRecs, inv.relKey, pkVal);
						}
					}
					if(part){
						if(invRecs && !Array.isArray(invRecs)){
							invRecs=[invRecs];
						}
						if(Array.isArray(invRecs)){
							invRecs.forEach(function(item){
								var partData = inv.relKey ? item[inv.relKey] : undefined; 
								if(partData && partData.partial && partData.partial.get(pkVal)){
									partData.partial.delete(pkVal);
								}
							});
						}	
					}
				});
			}
		},
		deleteDeepNest:function(rec, key, pkVal){
			var deepNest = rec.$.dN;
			if(deepNest){
				if(deepNest[key] && pkVal === undefined){
					delete deepNest[key];
				}
				else if(deepNest[key] && deepNest[key].get(pkVal)){
					deepNest[key].delete(pkVal);
					if(!Object.keys(deepNest[key]).length){
						delete deepNest[key];
					}
				}
				if(!Object.keys(deepNest).length){
					delete rec.$.dN;
					store.$.removeParentNesting(rec);
				}
			}
		},
		// createJSON:function(record, fields, err, validateOnSave){
		// 	for(var field in fields){
		// 		var val = record[field], fieldKeys = fields[field];
		// 		if(fieldKeys.type == "relation"){
		// 			continue;
		// 		}
		// 		if(!record.$.validatedOnCreate || validateOnSave){
		// 			if(fieldKeys.mandatory && !record.$.error.hasOwnProperty(field) && (val == null || val == undefined || val === "" || (Array.isArray(val) && val.length == 0) )){
		// 					store.$.setRecErr(err,field,{code : "ERR02", message : Lyte.errorCodes.ERR02});
		// 					//err[field] = {code : "ERR02", message : Lyte.errorCodes.ERR02};
		// 			}
		// 			else{
		// 				clear = true;
		// 				if(record.hasOwnProperty(field) && !record.$.error.hasOwnProperty(field)){
		// 					for(var property in fieldKeys){
		// 						var resp = Lyte.checkProperty(property, record[field], field, fieldKeys[property]);
		// 						if(resp != true){
		// 							store.$.setRecErr(err,field,resp);
		// 							clear = false;
		// 							//err[field] = resp;
		// 							break;
		// 						}
		// 					}
		// 					if(clear){
		// 						store.$.clrRecErr(err, field);
		// 					}		
		// 				}
		// 			}							
		// 		}
		// 	}
		// },
		updateJSON:function(record, model, dirty){
			var data = {};
			var fields = model.fieldList;
			var pK = model._pK;
			var dirtyAttr = record.$._attributes;
			for(var field in dirtyAttr){
				if(Lyte.Transform[fields[field].type] && Lyte.Transform[fields[field].type].serialize){
					data[field] = Lyte.Transform[fields[field].type].serialize(record[field]);
				}
				else{
					data[field] = record[field];
				}
			}
			var attrs = dirty;
			if(dirty == true){
				attrs = store.$.isDirty(record, model.relations) || [];
			}
			for(var i=0;i<attrs.length;i++){
				data[attrs[i]] = record[attrs[i]];
			}
			pK.split(',').forEach(function(item){
				data[item] = record[item];
			});
			return data;
		},
		removeDeepNest:function(record){
			if(!Lyte.isRecord(record)){
				return;
			}
			var bool1 = record.$.dN && Object.keys(record.$.dN).length;
			if(bool1){
				record.$.dN = {};
				var model = record.$.model;
				var relations = model.relations;
				for(var key in relations){
					var rels = relations[key];
					rels.forEach(function(item){
						var opts = item.opts;
						if(opts && (opts.deepNest || opts.serialize == "partial")){
							var data = record[item.relKey];
							if(Array.isArray(data)){
								data.forEach(function(itm){
									if(Lyte.isRecord(itm)){
										store.$.removeDeepNest(itm);
										if(!itm.$.dN || ( itm.$.dN && Object.keys(itm.$.dN))){
											store.$.removeParentNesting(itm);
										}
									}
								});
							}
							else if(Lyte.isRecord(data)){	
								store.$.removeDeepNest(data);
								if(!data.$.dN || ( data.$.dN && Object.keys(data.$.dN))){
									store.$.removeParentNesting(data);
								}										
							}
						}
					});
				}			
			}
		},
		addDeepNest:function(record, extended){
			var relatedRecord;
			var model = extended ? store.model[record.$.model.extend] : record.$.model;
			var pK = record.$.pK,
			type = "updated",
			relations = model.relations;
			for(var key in relations){
				var rels = relations[key];
				rels.forEach(function(item){
					var inv , deep, part;
					inv = store.$.getBackwardRel(model,item,store.model[item.relatedTo]);
					if(inv && inv.opts){
						deep = inv.opts.deepNest;
						part = inv.opts.serialize == "partial" ? true : false; 
						if(!item.relKey){
							relatedRecord = store.$.getRelatedRecord(record,item.relatedTo,item.dummy);
						}
						else{
							relatedRecord = record[item.relKey];
						}
					}
					if(deep){
	//					if(deep || part){
						store.$.makeDirty("dirty",relatedRecord, type, inv, pK);
					}
					if(part && record && relatedRecord){
						var data = relatedRecord;
						if(Array.isArray(data)){
							data.forEach(function(item){
								store.$.partialData(item, inv.relKey, pK , "modified");								
							});
						}
						else if(Lyte.isRecord(data)){
							store.$.partialData(data, inv.relKey, pK, "modified");	
						}
						//store.$.partialData(record[item.relKey], inv.relKey, pK , "modified");
					} 
				});
			}
			if(model.extend){
				this.addDeepNest(record, true);
			}
		},
		getRelatedRecord:function(record,modelName,key){
			if(record){
				var relationship = record.$._relationships;
				if(relationship[modelName] && relationship[modelName][key]){
					return relationship[modelName][key];
				}
			}
		},
		makeDirty:function(name, records, type, rel, pK){
			var relKey = rel.relKey;
			if(Array.isArray(records)){
				records.forEach(function(item){
					store.$.setDeepNest(item, relKey, pK, type);
				});
			}
			else if(Lyte.isRecord(records)){
				store.$.setDeepNest(records, relKey, pK, type);
			}
		},
		setDeepNest:function(item, relKey, pK, type){
			var deepN = item.$.dN = item.$.dN || {};
			var deepRel = deepN[relKey] = deepN[relKey] || new Map();
			if(!deepRel.has(pK)){
				deepRel.set(pK, {});
			}
			var obj = deepRel.get(pK);
			obj.type = type;
			store.$.addDeepNest(item);
		},
		isDirty:function(record, relations){
			var result = [];
			for(var rel in relations){
				var rel_model = relations[rel];
				for(var j=0;j<rel_model.length;j++){
					var rel = rel_model[j];
					if(rel.opts && rel.opts.serialize){
						var key = rel.relKey;
						var type = rel.relType, records = record[key];
						if(rel.opts.serialize == "record" || rel.opts.serialize == "id"){
							var res = store.$.isRelDirty(rel, records);
							if(res){
								result.push(key);
								continue;
							}							
						}
						else if(rel.opts.serialize == "partial"){
							if(type == "hasMany"){
								if(records && records.partial && records.partial.size){
									result.push(key);
									continue;
								}
							}
							else{
								if((Lyte.isRecord(records) && records.$.isModified) || (record && record.$ && record.$.partial && record.$.partial.hasOwnProperty(key))){
									result.push(key);
									continue;
								}
							}
						}
						if(rel.opts.deepNest){	
							if(record.$.dN && record.$.dN[key]){
								result.push(key);
							}
						}
					} 
				}
			}
			return result;
		},
		isRelDirty:function(rel, records){
			var type = rel.relType;
			var relations = store.model[rel.relatedTo].relations; 
			if(!store.$.isEmpty(records)){
				if(type == "hasMany" && Array.isArray(records) && records.length){
					var len = records.length;
					for(var i=0; i<len; i++){
						if(records[i].$.isModified == true){
							return true;
						}
					}
					for(var j=0; j<len; j++){
						var rec = records[j];
						var arr = this.isDirty(rec, relations);
						if(arr.length){
							return true;
						}
					}
				}
				else if(type == "belongsTo" && Lyte.isRecord(records)){
					if(records.$.isModified == true){
						return true;
					}
					var arr = this.isDirty(records, relations);
					if(arr.length){
						return true;
					}
				}
			}
			return false;
		},
		handleCachedResponse:function(batch,resp){
			var cached = store.$.cachedBatch = store.$.cachedBatch || {}
			var arr = cached[batch] || [], count = 0;
			arr.forEach(function(item,index){
				resp.splice((item.ind+count++),0,item.data);
			});
			delete cached[batch];
			return resp;
		},
		addToCachedBatch:function(data){
			var curr = store.$.currentBatch;
			var cached = store.$.cachedBatch = store.$.cachedBatch || {};
			var cachedB = cached[curr] = cached[curr] || [];
			var arr = store.$.batch[curr] || [];
			var ind = arr.length;
			cachedB.push({ind:ind, data:data});
		},
		establishToRelated:function(record, relArr){
			var bModel = record.$.model, rel = {};
			relArr.forEach(function(item){
				var rec = store.peekRecord(item.model, item.pkVal);
				if(rec){
					var fModel = rec.$.model;
					store.$.getRelations(fModel, item.key, bModel, rel);
					store.$.establishLink(rel.forward, rel.backward, rec, record, undefined, true);
				}
			});
		},
		checkObjAndAddToArr:function(arr, obj, keys){
			var len = keys.length, res = -1;
			arr.forEach(function(item, index){
				var i=0;
				for(var key in keys){
					if(item[key] == obj[key]){
						i++;
					}	
				}
				if(i == len){
					res = index;
					return;
				}
			});
			if(res == -1){
				arr.push(obj);
			}
			return res;
		},
		addToRelate:function(modelName, data, rel, key){
			var relMod = rel.forward.relatedTo;
			var toRelMod = store.$.toRelate[relMod] = store.$.toRelate[relMod] || new Map();
			if(!toRelMod.has(key)){
				toRelMod.set(key, []);
			}
			var toRel = toRelMod.get(key);
			var pkVal = data.$.pK;
			var obj = {model : modelName, pkVal : pkVal, key : rel.forward.relKey};
			this.checkObjAndAddToArr(toRel, obj, ["record","key"]);
		},
		addOnSave:function(modelName,record,attr,field,pK,relPk){
			store.$.onSave = store.$.onSave || {};
			var saveMod = store.$.onSave[modelName] = store.$.onSave[modelName] || {};
			var saveQ = saveMod[record[pK]] = saveMod[record[pK]] || {} 
			var recs = record[attr] || [];
			if(field.relType == "belongsTo"){
				recs = !Array.isArray(record[attr]) ? [record[attr]] : record[attr]; 
			}
			recs.forEach(function(item){
				var q = saveQ[field.relKey] = saveQ[field.relKey] || [];
				store.$.checkAndAddToArray(q, item[relPk]);
			});
		},
		addToIDBonSave:function(modelName, rec){
			var model = store.model[modelName];
			var fields = model.fieldList;
			var saveMod = store.$.onSave ? store.$.onSave[modelName] : undefined;
			if(saveMod){
				var pK = store.model[modelName]._pK;
				var saveQ = rec && pK ? saveMod[rec[pK]] : undefined;
				if(saveQ){
					for(var key in saveQ){
						var ids = saveQ[key];
						var relMod = fields[key].relatedTo;
						ids.forEach(function(item){
							var rec = store.peekRecord(relMod,item);
							if(rec){
								var parent = rec.$.parent;
								if(Lyte.isRecord(parent)){
									var mod = parent.$.model;
									var modName = mod._name;
									var modPk = mod._pK;
									store.$.checkAndAddToIDBQ(modName, "updateRecord", store.peekRecord(modName,parent[modPk]).$.toJSON(true));
								}
								else{
									store.$.checkAndAddToIDBQ(relMod, "updateRecord", store.peekRecord(relMod,item).$.toJSON(true));
								}
							}
						});
					}
					store.$.removeOnSave(modelName, rec[pK]);
				}
			}
		},
		removeOnSave:function(modelName, pkVal){
			var saveMod = store.$.onSave ? store.$.onSave[modelName] : undefined;
			if(saveMod && saveMod[pkVal]){
				delete saveMod[pkVal];
			}
		},
		checkAndAddToIDBQ:function(modelName, type, data){
			var obj = {model: modelName, type:type, data:data};
			var q = store.$.idbQ2[modelName] = store.$.idbQ2[modelName] || [];
			q.push(obj);
		},
		checkAndRemoveKey:function(rawData, fields, deserializeKeys){
			for(var key in rawData){
				var field = fields[key];
				if(field && field.type == "relation"){
					if(deserializeKeys && !this.checkPresenceInArray(deserializeKeys,key)){
						delete rawData[key];
					}
					else{
						this.removeNotNeededKeys(field.relatedTo, rawData[key]);
					}
				} 
			}
		},
		removeNotNeededKeys:function(modelName, rawData){
			var model = store.model[modelName];
			var fields = model.fieldList;
			var deserializeKeys = model.idb ? model.idb.deserializeKeys : undefined;
			if(model){
				var self = this;
				if(Array.isArray(rawData)){
					rawData.forEach(function(item){
						self.checkAndRemoveKey(item, fields, deserializeKeys);
					});
				}
				else{
					this.checkAndRemoveKey(rawData, fields, deserializeKeys)
				}
			}
			return rawData;
		},
		idbQ2Push:function(modelName,rawData,queryParams,type,key){
			try{
				var model = store.model[modelName];
				if(model.hasOwnProperty("idb")){
					rawData = Lyte.deepCopyObject(rawData);
					var qObj = {model:modelName,type:type};
					var pK = model._pK;
					var q =	store.$.idbQ2[modelName] = store.$.idbQ2[modelName] || [];
					switch(type){
						case "action":{
							delete q[type];
							return;
						}
						case "update":
						case "create":{
							qObj.data = []
							rawData.forEach(function(item){
								qObj.data.push(Lyte.isRecord(item)?item.$.toJSON():item);
							});
							break;
						}
						case "updateRecord":
						case "createRecord":{
							qObj.data = rawData;
							break;
						}
						case "delete":{
							qObj.data = rawData;
							break;
						}
						case "destroyRecord":
						case "deleteRecord":{
							qObj.id = rawData;
							break;
						}
						case "findRecord":
							qObj.key = key;		
						case "findAll": {
							rawData[modelName] = this.removeNotNeededKeys(modelName, rawData[modelName]);
							qObj.queryParams = queryParams;
							qObj.data = rawData;
							break;
						}
						case "pushPayload": {
							rawData = this.removeNotNeededKeys(modelName, rawData);
							qObj.data = rawData;
							break;
						}
					}
					q.push(qObj);
				}	
			}
			catch(err){
				console.log("Error while adding to IDBQueue ",err);
			}
		},
		isEmpty:function(val){
			if(val != undefined && val !== "" && val != null){
				return false;
			}
			return true;
		},
		isEmptyObj: function(obj){
			if(obj !== null && typeof obj == "object" && Object.keys(obj).length == 0){
				return true;
			}
			return false;
		},
		isEmptyArray: function(arr){
			if(Array.isArray(arr) && arr.length == 0){
				return true;
			}
			return false;
		},
		registerField:function(model,key,field,obs){
			// var field = fields[key];
			if(field.type == "observer"){
				obs.push(field);
			}
			else if(field.type == "callBack"){
				if(field.observes){
					obs.push(field.observes);
				}
				var props = field.properties;
				for(var i=0;i<props.length;i++){
					if(props[i] === "didLoad" || props[i] === "init"){
						if(!model.didLoad){
							model.didLoad = [];
						}
						model.didLoad.push(field.value);	
					}
					else if(props[i] === "add" || props[i] === "change"){
						model.on(props[i],field.value);
					}
				}
				if(key == "didLoad"){
					if(!model.didLoad){
						model.didLoad = [];
					}
					model.didLoad.push(field.value);
				}
			}
			else if(key == "didLoad"){
				if(!model.didLoad){
					model.didLoad = [];
				}
				model.didLoad.push(field);
			}
			else if(Object.keys(field).length){
				if(field.primaryKey){
					if(model.fieldList.id && model.fieldList.id.defined == false){
						delete model.fieldList.id;
					}
					if(model._pK != undefined){
						model._pK = model._pK + "," + key;
						model.isComposite = true; 
					}
					else{
						model._pK = key;
					}
				}
				if(field.baseKey){
					if(model.bK){
						Lyte.warn("Only one baseKey is allowed for a model");
						return;
					}
					model.bK = key
				}
				model.fieldList[key] = field;				
			}
			if(field.type === "relation"){
				field.relKey = key;
				var relTo = field.relatedTo;
				var relObj = model.fieldList[key];
				if(!model.relations[relTo]){
					model.relations[relTo] = [];
				}
				model.relations[field.relatedTo].push(relObj);
			}	
		},
        setError:function(err,attr,codeObj){
            if(err.$.hasOwnProperty("error")){
				store.$.cmpSet(err.$.error,attr,codeObj);
            }
            else{
                Lyte.error("LD03",err,attr);
            }
		},  
		unRegCb:function(type,name){
			var callback = store[type][name];
			if(!callback){
				Lyte.error(type," not present - ",name);
				return;
			}
			if(!callback){
				Lyte.error(type," not present - ",name);
				return;
			}	
			var extendedBy = callback.__extendedBy;
			if(extendedBy.length)
			{
				store[type].__toAddSuper = store[type].__toAddSuper || {};
				if(!store[type].__toAddSuper[name])
				{
					store[type].__toAddSuper[name] = extendedBy.slice();
				}
				else
				{
					extendedBy.forEach(function(item){
						store[type].__toAddSuper[name].push(item);
					});
				}
				extendedBy.forEach(function(item){
					store[type][item].$super = undefined;
				});
				if(store[type].application && name != "application")
				{	
					var application = store[type].application;
					extendedBy.forEach(function(item){
						store[type][item].$super = application;
						store[type].application.__extendedBy.push(item);
					});
				}
				if(!store[type].application)
				{
					if(!store[type].__toAddSuper.application)
					{
						store[type].__toAddSuper.application = extendedBy.slice();
					}
					else
					{
						extendedBy.forEach(function(item){
							store[type].__toAddSuper.application.push(item);
						});
					}
				}
			}
			if(callback.$super){
				callback.$super.__extendedBy.splice(callback.$super.__extendedBy.indexOf(name),1);
			}
			delete store[type][name];
		},
        eventListeners : {
          add: function(scope,type,func){
            scope.events = scope.events || {};
            scope.events[type] = scope.events[type] || [];
            scope.events[type].push({f : func});
            return  type+"-"+(scope.events[type].length-1);              
          },
          remove: function(scope,id){
            var type;
            if(id){
                if(/^(add|remove|change)$/.test(id)){
                    type = id;
                    (scope.events && scope.events[type]) ? delete scope.events[type] : undefined;   
                }
                else{
                    var arr = id ? id.split("-") : undefined;
                    if(arr){
                        var listeners = scope.events[arr[0]];
                        if(listeners && arr[1]){
                            listeners[arr[1]] = null;
                        }   
                    }            
                }
            }else{
                var ev = scope.events;
                for(var evType in ev){
                    (ev && ev[evType]) ? delete ev[evType] : undefined;
                }
            }
          },
          emit:function(scope,type,args){
            var listeners = (scope.events && scope.events[type]) ? scope.events[type] : [];
            for(var i=0; i<listeners.length; i++){
                (listeners[i]) ? listeners[i].f.apply(null, args) : undefined;
            }            
          }
        },
        extendCallback:function(scope,type,parent){
            var callback = scope[type],addsuper;
            var res;
            if(parent && typeof parent === "string"){
                res = callback[parent];
                if(!res){
					callback.__toAddSuper = callback.__toAddSuper || {};
                     if(!callback.__toAddSuper.hasOwnProperty(parent)){
                        callback.__toAddSuper[parent] = [];   
                     }
                     callback.__toAddSuper[parent].push(this.__name);
                }
            }	
            if(res && res.is == type && (!this.$super || this.$super.__name == "application")) {
				this.$super = res;
				res.__extendedBy.push(this.__name);
				if(callback.application)
				{
					var application_extarr = callback.application.__extendedBy;
					var index = application_extarr.indexOf(this.__name);
					if(index > -1)
					{
						callback.application.__extendedBy.splice(index,1);
					}
				}
				addsuper = callback.__toAddSuper;
				if(addsuper)
				{	
					if(addsuper.application)
					{	
						var addsuper_arr =  addsuper.application;
						var index1 = addsuper_arr.indexOf(this.__name);
						if(index1 > -1)
						{
							callback.__toAddSuper.application.splice(index1,1);
						}
					}
				}
            }
            return this;            
        },
        super:function(){
        	// console.log(arguments);
        	var scope = this, parent= this.$super, name = arguments[0][0][arguments[0][0].length-1], arr=[],arg=arguments[0][0];
    		var parent_type = parent[name];
    		if(typeof parent_type == "function")
    		{	
    			delete arg[arg.length-1];
    			for (var key in arg) {
				    if (arg.hasOwnProperty(key)) {
				        arr.push(arg[key]);
				    }
				}
    			return parent_type.apply(parent,arr);
    		}
    		if(parent_type)
    		{
    			return parent_type;
    		}
        },
		extendModel:function(extend){
			if(!extend || !store.model[extend]){
				return;
			}
			var parentFields = Object.assign({},store.model[extend].fieldList);
			for(var key in parentFields){
				if(parentFields[key].type == "relation"){
					delete parentFields[key];
				}
			}
			this.fieldList = Object.assign(this.fieldList, parentFields);
			var name = this._name;
			store.model[name].extend = extend;
			store.model[extend].extendedBy = store.model[extend].extendedBy || {};
			store.model[extend].extendedBy[name] = true;
			if(!store.adapter[name] && store.adapter[extend]){
				store.adapter[name] = store.adapter[extend];
			}
			if(!store.serializer[name] && store.serializer[extend]){
				store.serializer[name] = store.serializer[extend];
			}
		},
		establishObserverBindings:function(obj,prop,record){
			if(!record){
				record = obj;
			}
			for(key in prop){
				if(obj[key] instanceof Object && !(obj[key]._bindings && obj[key]._setterScope)){
					if(!obj[key]._bindings){
						store.$.defProp(obj[key], '_bindings', new Set(), false, true);
                    }
					if(record && !obj[key]._setterScope){
						store.$.defProp(obj[key],'_setterScope',record);
					}
					obj[key]._bindings.add(prop[key]);
					if(Object.keys(prop[key]).length){
						this.establishObserverBindings(obj[key],prop[key],obj);
					}
				}
				if(!obj._setterScope){
					store.$.defProp(obj, '_setterScope', obj);
				}
			}
		},
		setData:function(self, attr, value, redoObj){
			var toEmit = {emit : false, attr : [], oldRec : {}};
			if(attr instanceof Object){
				for(var key in attr){
					this.setValue(self, key, attr[key], toEmit);
				}
			}
			else{
				this.setValue(self, attr, value, toEmit);
			}
			if(toEmit.emit){
				var arr = [self.record, toEmit.attr];
				self.emit("change", arr);
				self.model.emit("change", arr);
				store.emit("change", [self.model._name,self.record, toEmit.attr]);
				if(redoObj){
					for(var key in toEmit.oldRec){
						redoObj[key] = toEmit.oldRec[key];
					}
				}
				else{
					self.undoStack.push(toEmit.oldRec);
				}
			}
			return self.record;
		},
		setValue:function(self,attr,value, toEmit){
			var model = self.model, oldAttrVal, hasAttr, pK = model._pK;
			if(attr != model._pK){
				var field = model.fieldList[attr], record = self.record;
				if(!field){
					hasAttr = record.hasOwnProperty(attr),oldAttrVal = record[attr];
					store.$.cmpSet( record, attr, value, true );
				}
				else if(field.mandatory && (value == undefined || value == null || value === "")){
					store.$.setRecErr(self, attr, {code : "ERR02", message : Lyte.errorCodes.ERR02, value : value});
				}
				else if(field.relType){
					var relType = field.relType;
					var rel ={}, oldVal, relMod = store.modelFor(field.relatedTo), relPk = relMod._pK;
					this.getRelations(model, field.relKey, relMod, rel), oldRecVal = record[attr];
					if(record[attr] && relType == "hasMany"){
						oldVal = [];
						record[attr].forEach(function(item){
							oldVal.push(item[relPk]);
						});
						// oldVal = record[attr].slice(0);
						// oldVal1 = record[attr].mapBy(relMod._pK);
						store.$.addOnSave(model._name,record,attr,field,pK,relPk);
						this.toDemolishLink(model, record, rel.forward);
						// record[attr].splice(0, record[attr].length);
						this.handleArrOp(record[attr], "removeAt", undefined, 0, record[attr].length);
					}
					else if(record[attr] && relType == "belongsTo"){
						oldVal = record[attr][relPk];
						// oldVal = this.createCopy(record[attr]);
						store.$.addOnSave(model._name,record,attr,field,pK,relPk);
						// oldVal1 = record[attr][relMod._pK];
						this.toDemolishLink(model, record, rel.forward, true);
						record[attr] = undefined;
						store.$.cmpSet(record, attr, {}, true);
					}
					if(!Array.isArray(value)){
						value = [value];
					}
					else if(relType == "belongsTo"){
						this.revertToOldVal(record, attr, oldVal, rel);
						store.$.setRecErr(self, attr, "ERR21", value);
						return;
					}
					if(relType == "hasMany" && store.$.isEmptyArray(value)){
						store.$.cmpSet(record, attr, [], true);
						store.$.establishObserverBindings(record, record.$.model._properties);
						store.$.defArrUtls(record[attr]);
						store.$.defPolyUtls(record[attr]);
						store.$.defUtls(record[attr], relMod, record, attr);						
					}
					var bModel = relMod, bPk = bModel._pK, isComp = bModel.isComp, bPkType = isComp ? "object" : bModel.fieldList[bPk].type, err = [];
					for(var i=0; i<value.length; i++){
						if(this.isEmpty(value[i]) || (relType == "belongsTo" && this.isEmptyObj(value[i])) || (relType == "hasMany" && this.isEmptyArray(value[i]))){
							continue;
						}
						var relRecord = value[i], relMod1 = (value[i] && value[i]._type) ? value[i]._type : field.relatedTo;
						if(!isComp && value[i] && typeof value[i] == bPkType){
							relRecord = store.peekRecord((value[i]._type) ? value[i]._type : field.relatedTo, value[i]);
							if(relRecord == undefined){
								this.addToRelate(model._name, record, rel, value[i]);
							}
							else if(relRecord.$ && relRecord.$.isError){
								err.push({code : "ERR15", message : Lyte.errorCodes.ERR15, error : Object.assign({}, relRecord)});
								continue;
							}
						}
						else if(value[i] && typeof value[i] == "object"){
							if(relRecord.$ && relRecord.$.isError){
								err.push({code : "ERR15", message : Lyte.errorCodes.ERR15, error : Object.assign({}, relRecord)});
								continue;
							}
							else if(!Lyte.isRecord(relRecord)){
								if(isComp){
									relRecord = store.peekRecord((value[i]._type) ? value[i]._type : field.relatedTo, value[i]);
									if(!relRecord){
										relRecord = this.newRecord(relMod1, value[i]);
									}
								}
								else{
									relRecord = this.newRecord(relMod1, value[i]);
								}
								if(relRecord.$.isError){
									err.push({code : "ERR15", data : value[i], message : Lyte.errorCodes.ERR15, error : Object.assign({}, relRecord)});
									continue;
								}
							}
						}
						var changed = this.establishLink(rel.forward, rel.backward, record, relRecord);
						if(changed != true){
							err.push({code : changed, data : value[i], message : Lyte.errorCodes[changed]});
						}
						else{
							store.$.addOnSave(model._name,record,attr,field,pK,relPk);
						}
					}
					if(err.length && (err.length == value.length)){
						this.revertToOldVal(record, attr, oldVal, rel);
						if(field.relType == "belongsTo"){
							store.$.setRecErr(self, attr, err[0]);
						}
						else{
							store.$.setRecErr(self, attr, err);
						}
						return;
					}
					else{
						if(err.length > 1){
							store.$.setRecErr(self, attr, err);
						}
						else{
							store.$.clrRecErr(self, attr);
						}
						if(!record.$._attributes.hasOwnProperty(attr)){
							record.$._attributes[attr] = [];
						}
						record.$._attributes[attr].push({_type : "changed", records : oldVal});
						toEmit.emit = true;
						toEmit.attr.push(attr);
						var obj = {}; obj.records = oldVal; obj._type = "update";
						toEmit.oldRec[attr] = obj;
						var arr = record.$.getInitialValues(attr), changed = true;
						if(arr && Array.isArray(record[attr]) && arr.length == record[attr].length){
							changed = false;
							for(var i=0; i<arr.length; i++){
								if(!store.$.compareRecords(arr[i], record[attr][i], bPk)){
									changed = true;
									break;
								}
							}
						}
						if(!changed){
							delete record.$._attributes[attr];
						}
					}
				}
				else{
					if(value !== record[attr]){
						for(var property in field){
							var resp = Lyte.checkProperty(property, value, attr, field[property], record);
							if(resp != true){
								if(typeof resp == "object"){
									resp.value = value;
								} 
								store.$.setRecErr(self, attr, resp);
								return;
							}
						}
						var attribute = record.$._attributes[attr];
						if( !record.$._attributes.hasOwnProperty(attr)){
							record.$._attributes[attr] = this.createCopy(record[attr]);
						}
						else if((value && typeof value == "object" && store.adapter.$.compareObjects(attribute, value)) || (attribute == value)){
							delete record.$._attributes[attr];
						}
						hasAttr = record.hasOwnProperty(attr);
						oldAttrVal = record[attr];
						store.$.cmpSet(record,attr,value,true);
						toEmit.emit = true;
						toEmit.attr.push(attr);
						store.$.clrRecErr(self, attr);
						var obj = {};
						obj._type = "update";
						obj.val = oldAttrVal;
						if(!hasAttr){
							obj.type = "propAdd";
						}
						toEmit.oldRec[attr] = obj;	
					}
					else if(value === record[attr] && record.$.isError && record.$.error[attr]){
						var valid = true;
						for(var property in field){
							var resp = Lyte.checkProperty(property, value, attr, field[property], record);
							if(resp != true){
								valid = false;
							}
						}
						if(valid){
							store.$.clrRecErr(self,attr);
						}
					}
				}
				if(Object.keys(record.$._attributes).length){
					self.isModified = true;
					store.$.addDeepNest(record);
					this.checkAndAddToArray(model.dirty, record[model._pK]);
				}
				else{
					self.isModified = false;
					if(!self.hasOwnProperty("deepNest") || (self.deepNest && !Object.keys(self.deepNest).length)){
						store.$.removeParentNesting(record);                    
					}
					if(!self.isNew){
						this.deleteFromArray(model.dirty, record[model._pK]);
					}
				}
			}
			else{
				store.$.setRecErr(self, attr, "ERR01", value);
			}
		},
		checkForCorrectRelation:function(rel,record){
			var relatedTo = rel.relatedTo;
            if(!Lyte.isRecord(record)){
                return false;
            }
			if(rel.opts && rel.opts.polymorphic){
				return (record.$.model.extend ? rel.relatedTo === record.$.model.extend : false);
			}
			return (rel && record ? relatedTo === record.$.model._name : false);
		},
        removeKeys:function(fieldList,record){
            for(var key in record){
                if(!fieldList.hasOwnProperty(key)){
                    delete record[key];
                }
                else{
                    var field = fieldList[key];
                    if(field.type === "belongsTo" || field.type === "hasMany" && record[key]){
                        this.removeNotDefinedKeys(field.relatedTo,record[key], (field.opts && field.opts.polymorphic) ? true: undefined);
                    }
                }
            }
        },
		removeNotDefinedKeys:function(model,records,polymorphic){
			var fieldList = model.fieldList;
			if(Array.isArray(records)){
				for(var i=0; i<records.length; i++){
					var record = records[i];
					this.removeKeys((polymorphic)?(Lyte.isRecord(record)?record.$.model.fieldList:fieldList):fieldList,record);
				}				
			}
			else{
                this.removeKeys((polymorphic)?(Lyte.isRecord(records)?records.$.model.fieldList:fieldList):fieldList,records);
			}
		},
		add:function(value,type,redoObj){
			var record= this.record, model = record.$.model, attr = this.key, field = model.fieldList[attr], rel = {};
			store.$.getRelations(model, field.relKey, store.modelFor(field.relatedTo), rel);
			if(!Array.isArray(value)){
				value = [value];
			}
			var relMod = store.modelFor(rel.forward.relatedTo);
			var pK = relMod._pK, err = [], arr = [], isComp = relMod.isComp;
			for(var i=0; i<value.length; i++){
				var rec = value[i];
				if(isComp){
					if(typeof rec == "object" && Object.keys(rec).length === pK.split(',').length){
						if(this.polymorphic && !type){
							err.push({code : "ERR22", data : value[i], message : Lyte.errorCodes.ERR22});
							continue;
						}
						rec = store.peekRecord((type) ? type : rel.forward.relatedTo, rec);	
					}
				}
				if((!isComp && relMod.fieldList[pK].type.toLowerCase() == typeof rec) || (isComp && typeof rec == "object" && Object.keys(rec).length === pK.split(',').length) ){
					if(this.polymorphic && !type){
						err.push({code : "ERR22", data : value[i], message : Lyte.errorCodes.ERR22});
						continue;
					}
					rec = store.peekRecord((type) ? type : rel.forward.relatedTo, rec);
				}
				else if(typeof rec == "object" && !Lyte.isRecord(rec)){
					rec = store.$.newRecord((rec._type) ? rec._type : type ? type : field.relatedTo, rec);
				}
				var polyType = (rec && rec._type)?rec._type: type ? type: undefined ;
				if(rec == undefined){
					err.push({code : "ERR13", data : value[i], message : Lyte.errorCodes.ERR13});
				}
				else if(rec.$ && rec.$.isError){
					err.push({code : "ERR15", data : value[i], message : Lyte.errorCodes.ERR15, error : rec});
				}
				else if(Lyte.isRecord(rec) && !store.$.hasDuplicateRelation(rec, record[attr], pK, polyType)){
					var resp = store.$.establishLink(rel.forward, rel.backward, record, rec);
					if(resp != true){
						err.push({code : resp, data : value[i], message : Lyte.errorCodes[resp]});
					}
					else{
						arr.push(rec);
					}
				}
			}
			if(arr.length){
				if(!record.$._attributes[attr]){
					record.$._attributes[attr] = [];
				}
				record.$._attributes[attr].push({_type : "added", records : arr});
				store.$.emit("change", record, [attr]);
				if(store.$.hasRecordsArrayChanged(record, attr)){
					store.$.cmpSet(record.$, "isModified", true);
					// record.$.isModified = true;
					store.$.checkAndAddToArray(model.dirty, record[model._pK]);
				}
				else{
					store.$.cmpSet(record.$, "isModified", false);
					// record.$.isModified = false;
					delete record.$._attributes[attr];
					if(!record.$.isNew){
						store.$.deleteFromArray(model.dirty, record[model._pK]);
					}
				}
				var obj = {_type:"added", records: arr};
				if(redoObj){
					redoObj[attr] = obj; 
				}
				else{
					var stackObj = {};
					stackObj[attr] = obj;
					record.$.undoStack.push(stackObj);
				}
			}
			if(err.length > 0){
				store.$.setRecErr(record.$, attr, err);
			}
			else{
				store.$.clrRecErr(record.$, attr);
			}
			return record;
		},
		remove:function(key,type,redoObj){
			var record = this.record, model = record.$.model, attr =  this.key, field = model.fieldList[attr], rel = {};
			store.$.getRelations(model, field.relKey, store.modelFor(field.relatedTo), rel);
			if(!Array.isArray(key)){
				key = [key];
			}
			var relMod = store.modelFor(rel.forward.relatedTo);
			var pK = relMod._pK, isComp = relMod.isComp, err = [], relatedRecord, arr = [], indices = [];
			for(var i=0; i<key.length; i++){
				var rec = key[i];
				if((!isComp && relMod.fieldList[pK].type.toLowerCase() == typeof key[i]) || (isComp && typeof rec == "object" && Object.keys(rec).length === pK.split(',').length)){
					if(this.polymorphic == true && !type){
						err.push({code : "ERR22", data : key[i], message : Lyte.errorCodes.ERR22});
						continue;
					}
					relatedRecord = store.peekRecord((type)?type:rel.forward.relatedTo,key[i]);
				}
				else if(Lyte.isRecord(key[i])){
					relatedRecord = key[i];
				}
                var polyType = (relatedRecord && relatedRecord._type) ? relatedRecord._type : type ? type : undefined;
				if(relatedRecord){
					var index = store.$.getIndex(record[attr], pK, relatedRecord.$.get(pK),polyType);
					store.$.demolishLink(relatedRecord, pK, store.peekRecord(model._name, record.$.pK), rel.forward.relKey);
					if(rel.backward != null){
						store.$.demolishLink(record, model._pK, store.peekRecord((polyType)?polyType:rel.forward.relatedTo, relatedRecord.$.pK), rel.backward.relKey, rel.forward);
					}
					arr.push(relatedRecord);
					indices.push(index);
				}
			}
			if(arr.length){
				if(!record.$._attributes[attr]){
					record.$._attributes[attr] = [{_type : "removed", records : arr, _indices : indices}];
					store.$.cmpSet(record.$, "isModified", true);
					// record.$.isModified = true;
					store.$.checkAndAddToArray(model.dirty, record[model._pK]);
				}
				else if(store.$.hasRecordsArrayChanged(record, attr)){
					record.$._attributes[attr].push({_type : "removed", records : arr, _indices : indices});
				}
				else{
					store.$.cmpSet(record.$, "isModified", false);
					// record.$.isModified = false;
					delete record.$._attributes[attr];
					if(!record.$.isNew){
						store.$.deleteFromArray(model.dirty, record[model._pK]);															
					}
				}
				store.$.emit("change", record, [attr]);
				var obj = {_type:"removed", records: arr, _indices : indices};
				if(redoObj){
					redoObj[attr] = obj; 
				}
				else{
					var stackObj = {};
					stackObj[attr] = obj;
					record.$.undoStack.push(stackObj);
				}
			}
			if(err.length > 0){
				store.$.setRecErr(record.$, attr, err);
			}
			else{
				store.$.clrRecErr(record.$, attr);
			}
		},
		filter:function(record,filObj,len){
			var j=0;
			for(var key in filObj){
				if(record[key] === filObj[key]){
					j++;
				}
			}
			if(j === len){
				return true;
			}
		},
		filterBy : function(obj){
			var len = Object.keys(obj).length, j = 0, arr = [];
			for(var i=0; i<this.length; i++){
				if(store.$.filter(this[i],obj,len)){
					arr.push(this[i]);
				}
			}
			if(!arr.filterBy){
				store.$.defArrUtls(arr);
				store.$.defUtls(arr,this.model);
			}
			return arr;
		},
		idbSerialize: function(data, rel, model, bModel, pkVal){
			var relTo = rel.forward.relatedTo, pK = model._pK, bPk = bModel._pK;
			if(Array.isArray(data)){
				data.forEach(function(item, index){
					if(Lyte.isRecord(item) && item.$.inIDB){
						data[index] = item[bPk];										
					}
					else if(!store.$.checkPresenceInArray(store.$.recStack[relTo],item[bPk])){
						store.$.removeBackwardRel(item, rel, pK, pkVal, true);
						store.$.removeSelfCircularReference(bModel._name, item, expose);
					}
					else{
						data[index] = item[bPk];										
					}
				});
			}
			else if(data && Lyte.isRecord(data)){
				if(Lyte.isRecord(data) && data.$.inIDB){
					obj[relKey] = data[bPk];
				}
				else if(!this.checkPresenceInArray(store.$.recStack[relTo],data[bPk])){
					this.removeBackwardRel(data, rel, pK, pkVal, true);
					this.removeSelfCircularReference(bModel._name, data,expose);
				}else{
					obj[relKey] = data[bPk];
				}
			}
		},
		idSerialize: function(obj, data, rel, model, bModel, pkVal, expose, partialObj){
			var polymorphic = rel.forward.opts ? rel.forward.opts.polymorphic : undefined, relKey = rel.forward.relKey; 
			if(Array.isArray(data)){
				if(polymorphic){
					obj[relKey] = this.polymorphicToJSON(rel.forward,data);
				}
				else{
					var arr = [];
					if(partialObj){
						var partial = partialObj[relKey] || [], anyNew = false;
					}
					data.forEach(function(item){
						if(item.$.isNew){
							anyNew = true;
							store.$.rSerialize(item, rel, model, bModel, pkVal, expose, partial);
							arr.push(item);													
						}
						else{
							if(partial){
								partial.push({});
							}
							arr.push(item.$.pK);
						}
					});
					if(!anyNew && partialObj && partialObj.hasOwnProperty(relKey)){
						delete partialObj[relKey];
					}
					obj[relKey] = arr;
				}
			}
			else if(data && Lyte.isRecord(data)){
				if(data.$.isNew){
					if(partialObj){
						var partial = partialObj[relKey] || {};
					}
					store.$.rSerialize(data, rel, model, bModel, pkVal, expose, partial);
				}
				else{
					if(polymorphic){
						obj[relKey] = this.polymorphicToJSON(rel.forward,data);								
					}
					else{
						obj[relKey] = data[bModel._pK];
					}
				}
			}
		},
		recordSerialize: function(obj, key, val, rel, model, bModel, pkVal, expose, partialObj){
			var pK = model._pK;
			if(Array.isArray(val)){
				if(val.length == 0){
					delete obj[key];
					return 0;
				}
				val = Array.from(val);
				var partial = partialObj[key] = partialObj[key] || [];
				for(var j=0; j<val.length; j++){
					if(val[j] && Lyte.isRecord(val[j])){
						this.rSerialize(val[j], rel, bModel, pK, pkVal, expose, partial);
					}
				}
			}
			else if(val && Lyte.isRecord(val)){
				var partial = partialObj[key] = partialObj[key] || {};
				partial = this.rSerialize(val, rel, bModel, pK, pkVal, expose, partial);
				partialObj[key] = partial;
			}
		},
		rSerialize : function(data, rel, bModel, pK, pkVal, expose, partialObj){
			var relTo = rel.forward.relatedTo, partial;
			this.removeBackwardRel(data, rel, pK, pkVal);
			if(partialObj){
				var partial = {};
				var pType = data.$.isNew ? "added" : data.$.isModified ? "modified" : "related";
				Object.defineProperties(partial, {
					pkVal : {
						value : data.$.pK
					},
					type : {
						value : pType
					},
					model : {
						value : relTo
					}
				});
				if(Array.isArray(partialObj)){
					partialObj.push(partial);
				}
			}
			this.removeSelfCircularReference(bModel._name, data, expose, undefined, partial);
			return partial;
		},
		partialSerialize : function(obj, key, val, rel, model, bModel, pkVal, expose, partialObj){
			var field = rel.forward, pK = model._pK, relTo = rel.forward.relatedTo;
			var polymorphic = rel.forward.opts ? rel.forward.opts.polymorphic : undefined;
			if(field.relType == "hasMany"){
				if(val && val.partial){
					var part = val.partial;
					var bpK = bModel._pK;
					if(partialObj){
						partial = partialObj[key] = partialObj[key] || [];
						store.$.defProp(partial, "partial", true);
					}
					if(part){
						var pObj, pKey, newPartial,result = [], self = this;
						part.forEach(function(value , key){
							pObj = value, pKey = key , newPartial;
							if(/^(added|modified)$/.test(pObj.type)){
								var pType = "related";
								var ind = store.$.getIndex(val, bpK, pKey, undefined, store.model[relTo]);
								if(ind != -1){
									var rec = val[ind], updVal = rec;
									if(polymorphic && rec){
										bModel = store.model[rec._type];
									}
									self.removeBackwardRel(rec, rel, pK, pKey);
									if(rec.$.isNew){
										pType = "added";
									}
									else if(rec.$.isModified){
										pType = "modified";												
										var valDir = store.$.isDirty(rec, bModel.relations);
										updVal = store.$.updateJSON(rec, bModel, valDir);				
									}
									else{
										var valDir = store.$.isDirty(rec, bModel.relations);
										updVal = store.$.updateJSON(rec, bModel, valDir);											
									}
									if(partial){
										var newPart = {}; 
										Object.defineProperties(newPart, {
											pkVal : {
												value : pKey
											},
											type : {
												value : pType
											},
											model : {
												value : polymorphic && rec ? rec._type : relTo
											}																										
										});
										partial.push(newPart);
									}
									self.removeSelfCircularReference(bModel._name, updVal, expose, undefined, newPart);			
									// var resObj = {type: pObj.type, data: updVal};
									if(Lyte.isRecord(updVal)){
										updVal.$.partialType = pObj.type;
									}
									else{
										store.$.defProp(updVal, "$", {});
										store.$.defProp(updVal.$, "partialType", pObj.type);
										if(!updVal.$.hasOwnProperty("pK")){
											store.$.defProp(updVal.$, "pK", pKey);
										}
									}
									if(polymorphic){
										updVal.$.polymorphicType = rec._type;
									}
									result.push(updVal);
								}
							}
							else if(pObj.type == "removed"){
								var dObj = {};
								dObj[bpK] = pKey;
								if(partial){
									var newPart = {}; 
									Object.defineProperties(newPart, {
										pkVal : {
											value : pKey
										},
										type : {
											value : "removed"
										},
										model : {
											value : relTo
										}																										
									});
									partial.push(newPart);
								}
								store.$.defProp(dObj, "$", {});
								store.$.defProp(dObj.$, "partialType","removed");
								if(!dObj.$.hasOwnProperty('pK')){
									store.$.defProp(dObj.$, "pK", pKey);
								}
								// result.push({type:"removed", data: dObj})
								result.push(dObj);
							}
						});
						if(result.length){
							val = obj[key] = result;
						}
						else{
							delete obj[key];
						}
					}
				}
				else{
					delete obj[key];
				}
			}
			else if(field.relType == "belongsTo" && val && Lyte.isRecord(val)){
				this.removeBackwardRel(val, rel, pK, pKey);
				var updVal = val, valDir;
				if(val.$.isNew){
					this.removeBackwardRel(val, rel, pK, pkVal);
				}
				else{
					valDir = store.$.isDirty(val, bModel.relations);
					updVal = store.$.updateJSON(val, bModel, valDir);
				}
				if(partialObj){
					var partial = partialObj[key] = partialObj[key] || {};
					var pType = val.$.isNew ? "added" : val.$.isModified ? "modified" : "related";
					Object.defineProperties(partial, {
						pkVal : {
							value : val.$.pK
						},
						type : {
							value : pType
						},
						model : {
							value : relTo
						}
					});
				}
				this.removeSelfCircularReference(bModel._name, updVal, expose, undefined, partial);
				val = obj[key] = updVal;
			}
		},
		removeSelfCircularReference : function(modelName, obj, expose, type, partialObj){
			var model = store.model[modelName], fieldList = model.fieldList;
			var extended = model.extend ? true : false, pkVal = store.$.getpKVal(obj,model);
			store.$.recStack[modelName] = store.$.recStack[modelName] || []; 
			var ret = store.$.checkAndAddToArray(store.$.recStack[modelName], pkVal);
			var record = store.peekRecord(modelName, pkVal), partObj = Lyte.isRecord(record) ? record.$.partial : undefined;
			for(var key in obj){
				var field = fieldList[key], extMod, swap = false, relTo , bModel, relType;
				var removePk = ((type == "create"|| (Lyte.isRecord(obj) && obj.$.isNew)) && model._pK == key) ? true: false;
				if(removePk){
					delete obj[key];
					continue;
				}
				if(!field){
					if(extended){
						extMod = store.modelFor(model.extend);
						field = extMod.fieldList[key];
						swap = true;
					}
					delete obj[key];
					continue;
				}
				if(field && field.type != "relation" && !expose  && Lyte.Transform[field.type] && Lyte.Transform[field.type].serialize && obj.hasOwnProperty(key)){			
					obj[key] = Lyte.Transform[field.type].serialize(obj[key]);
					continue;
				}
				if(partObj && partObj.hasOwnProperty(key)){
					var partPload = {};
					var bPk = store.model[field.relatedTo]._pK;
					partObj[key].forEach(function(item, partPk){
						partPload[bPk] = partPk;
						store.$.defProp(partPload, "$", {});
						store.$.defProp(partPload.$, "partialType", "removed");
						store.$.defProp(partPload.$, "pK", partPk);
						if(partialObj){
							var partial = partialObj[key] = partialObj[key] || {};
							Object.defineProperties(partial, {
								pkVal : {
									value : partPk
								},
								type : {
									value : "removed"
								},
								model : {
									value : field.relatedTo
								},
								parent : {
									value : record
								}
							});
						}
						obj[key] = partPload;
					});
					continue;
				}
				if(obj[key] && field && field.type == "relation"){
					relTo = field.relatedTo;
					relType = field.relType;
					bModel = store.modelFor(relTo);
					if(bModel == undefined){
						continue;
					}
					var relKey = field.relKey, rel = {};
					if(swap){
						this.getRelations(extMod, field.relKey, bModel, rel);						
					}
					else{
						this.getRelations(model, relKey, bModel, rel);
					}
					var opts = field.opts;
					var serialize = opts ? opts.serialize : undefined, val = obj[relKey];
					if(expose == "idb"){
						store.$.idbSerialize(val, rel, model, bModel, pkVal);
					}
					else if(expose || serialize == "id"){
						store.$.idSerialize(obj, val, rel, model, bModel, pkVal, expose, partialObj);
					}
					else if(serialize === "record"){
						var ret = store.$.recordSerialize( obj, key, val, rel, model, bModel, pkVal, expose, partialObj);
						if(ret == 0){
							continue;
						}
					}
					else if(serialize === "partial"){
						store.$.partialSerialize( obj, key, val, rel, model, bModel, pkVal, expose, partialObj)
					}
					else{
						delete obj[relKey];
						continue;
					}
					if( val && (relType == "hasMany" && Array.isArray(val) && val.length == 0) || (relType == "belongsTo" && typeof val == "object" && Object.keys(val).length == 0)) {
						delete obj[relKey];
					}
				}
			}
		},
		removeBackwardRel:function(val,rel,pK,pkVal,wholeRelKey){
			if(wholeRelKey){
				delete val[rel.backward.relKey];
				return; 
			}
			if(rel.backward != null){
				var rec = val[rel.backward.relKey];
				if(Array.isArray(rec)){
					for(var i=0; i<rec.length; i++){
						if(this.comparePk(rec[i],pkVal)){
							rec.splice(i,1);
							if(rec.length == 0){
								delete val[rel.backward.relKey];
							}
							return;
						}								
					}
				}
				else if(rec && Lyte.isRecord(rec) && this.comparePk(rec, pkVal)){
					delete val[rel.backward.relKey];
				}
			}
		},
		polymorphicToJSON : function(rel,data){
			var opts = rel.opts;
			if(opts && opts.polymorphic){
				if(Array.isArray(data)){
					var res = [];
					data.forEach(function(item){
						res.push(store.$.polyToJSON(item));
					});
					return res;
				}
				else{
					return store.$.polyToJSON(data);
				}
			}
		},
		polyToJSON : function(data){
			var type = data ? data._type : undefined;
			var polyMod = store.modelFor(type);
			var pK = polyMod ? polyMod._pK : undefined;
			var poly = {};
			var pkVal = data.$.pK;
			if(typeof pkVal == "object"){
				poly = Object.assign({}, pkVal);
			}
			else{
				poly[pK] = pkVal;
			}
			poly._type = data._type;
			return poly;
		},
		toJSONObj : function(model, data, expose, type, partialObj){
			var copyObj = Lyte.deepCopyObject(data), pkVal, partial, modelName = model._name;
			if(Lyte.isRecord(copyObj)){
				pkVal = copyObj.$.pK;
			}
			else{
				pkVal = store.peekRecord(modelName, store.$.getpKVal(copyObj, model)).$.pK;
			}
			pkVal = copyObj[pK];
			if(partialObj && !partialObj.has(pkVal)){
				partialObj.set(pkVal,{});
				partial = partialObj.get(pkVal); 
			}
			this.removeSelfCircularReference(modelName, copyObj,expose,type, partial);
			if(expose == "idb"){
				this.removeNotNeededKeys(modelName, copyObj);
			}
			return copyObj;
		},
		toJSON : function(modelName,obj,expose,type,partialObj){
			var copyObj, model = store.model[modelName];
			store.$.recStack = {}, pK = model._pK;
			if(Array.isArray(obj)){
				var arr = [];
				for(var i=0; i<obj.length; i++){
					copyObj = this.toJSONObj(model, obj[i], expose, type, partialObj);
					arr.push(copyObj);
				}
				return arr;
			}
			else if(obj && (typeof obj === "object" || Lyte.isRecord(obj))){
				copyObj = this.toJSONObj(model, obj, expose, type, partialObj);
			}
			store.$.recStack = {};
			return copyObj;
		},
		createCopy : function(data){
			if(Array.isArray(data)){
				if(data.save){
					var arr = [];
					for(var i=0; i<data.length; i++){
						var rec = Lyte.deepCopyObject(data[i]);
						arr.push(rec);
					}
					return arr;
				}
			}
			else if(data && ( Lyte.isRecord(data) || typeof data == "object")){
				return Lyte.deepCopyObject(data);
			}
			return data;
		},
		compareRecords  : function(a,b,pK,type){
			var pK = pK.split(',');
			if(Lyte.isRecord(a) && Lyte.isRecord(b) && pK.length){
				if(type && a._type && type !== a._type){
					return false;
				}
				var ret = true;
				pK.forEach(function(itm){
					if(a[itm] && b[itm] && a[itm] !== b[itm]){
						ret = false;
					}
				});
				return ret;
			}
			return false;
		},
		hasRecordInArray : function(array,record,pK,type){
			if(Lyte.isRecord(record) && pK){
				for(var i=0; i<array.length; i++){
					if(type && array[i]._type !== type){
						continue;
					}
					if(this.compareRecords(array[i], record, pK)){
						return true;
					}
				}
			}
			return false;
		},
		hasDuplicateRelation : function(toRelate,relation,pK,type){
			if(Array.isArray(relation)){
				return this.hasRecordInArray(relation, toRelate, pK, type);
			}
			else if(relation && Lyte.isRecord(relation)){
				return this.compareRecords(toRelate, relation, pK,type);
			}
			return false;
		},
		checkPresenceInArray : function(arr,value){
			return arr && arr.some(function(val){
				return val === value;
			});
		},
		checkAndAddToArray : function(arr,value){
			if(!this.checkPresenceInArray(arr,value)){
				arr.push(value);
			}else{
				return -1;
			}
		},
		deleteFromArray : function(arr,value){
			var ind = arr.indexOf(value);
			if(ind != -1){
				arr.splice(ind,1);
			}
		},
		genPk : function(pK, opts, fields){
			var pkType;
			pK.forEach(function(item){
				pkType = fields[item].type;
				var random = opts[item] = Math.floor(Math.random()*100000 + 1);
				if(pkType == "string"){
					opts[item] = random.toString();                    
				}
			});
		},
		generateRandomPk:function(model, opts, pK, fields){
			this.genPk(pK, opts, fields);
			while(this.isDuplicateRecord(model, opts, pK.toString())){
				this.genPk(pK, opts, fields);
			}            
		},      
		pkPresence:function(opts, pK){
			var result = true;
			pK.forEach(function(item){
				if(!opts.hasOwnProperty(item) || !opts[item] ){
					result = false;
					return;
				}
			});
			return result;
		},
		newRecord:function(name, opts, withoutValidation){
			var model = store.modelFor(name);
			if(model == undefined){
				return new error1("id", {code : "ERR19", data : name, message : Lyte.errorCodes.ERR19, data:name});
			}
			if(opts == undefined){
				opts = {};
			}
			var fields = model.fieldList, record = {}, errorObj = new error1();
			var pK = model._pK.split(',');
			if(!this.pkPresence(opts, pK)){
                this.generateRandomPk(model, opts, pK, fields)
			}
			else if(this.isDuplicateRecord(model, opts, pK)){
                store.$.setError(errorObj, pK, {code : "ERR17", message : Lyte.errorCodes.ERR17})
			}
			for(var field in fields){
				var fieldKeys = fields[field];
				if(fieldKeys.relType == "hasMany"){
					record[field] = [];
				}
				var val = opts[field];     
				if(fieldKeys.type != "relation"){
					if(val === undefined || val === ""){
						if(fieldKeys.hasOwnProperty("default")){
							val = record[field] = fieldKeys.default;
						}
					}
					if(!withoutValidation){
						for(var property in fieldKeys){
							var resp = Lyte.checkProperty(property, val, field, fieldKeys[property], opts, record);
							if(resp != true){
								store.$.setError(errorObj,field,resp);
								break;
							}
						}
					}	
				}    
			}
			for(var opt_key in opts){
				record[opt_key] = opts[opt_key];
			}
			record = new Record(name, record);
			store.$.cmpSet(record.$, "isNew", true);
			// record.$.isNew = true;
			var relations = model.relations;
			for(var key in relations){
				var relation = relations[key];
				for(var i=0; i<relation.length; i++){
					var relObj = relation[i];
					var relKey = relObj.relKey;
					var polymorphic = relObj.opts ? relObj.opts.polymorphic : undefined; 
					if(record && record[relKey]){
						var optsRelVal = opts[relKey];
						record[relKey] = undefined;
						var fieldKeys = relation[i], rel = {}, resp = this.getRelations(model, fieldKeys.relKey, store.modelFor(fieldKeys.relatedTo), rel),ingore=false;
						if(resp != true){
							store.$.setError(errorObj,fieldKeys.relKey,{code : resp, data : relation, message : Lyte.errorCodes[resp]});
							continue;
						}
						var bModel = store.modelFor(fieldKeys.relatedTo), bPk = bModel._pK , isComp = bPk.split(',').length > 1 ? true : false, bPkType = !isComp ? bModel.fieldList[bModel._pK].type : undefined;
						if(!Array.isArray(optsRelVal)){
							optsRelVal = [optsRelVal];
						}
						else if(relation[i].relType == "belongsTo"){
							store.$.setError(errorObj,fieldKeys.relKey,{code : "ERR21", data : optsRelVal, message : Lyte.errorCodes.ERR21});
							continue;
						}
						errorObj[fieldKeys.relKey] = [];
						for(var j=0; j<optsRelVal.length; j++){
							var relRecord = undefined, relMod = fieldKeys.relatedTo, ind;
							if(optsRelVal[j] && Lyte.isRecord(optsRelVal[j])){
								relRecord = optsRelVal[j];
							}
							else if(isComp && typeof optsRelVal[j] == "object"){
								var ind = store.$.getIndex(bModel.data, bPk, store.$.getpKVal(optsRelVal[j], bModel));
								if(ind != -1){
									relRecord = bModel.data[ind];
								}
								else{
									if(polymorphic){
										if(optsRelVal[j] && optsRelVal[j].hasOwnProperty("_type")){
											relMod =  optsRelVal[j]._type;
										}
										else{
											store.$.setError(errorObj, fieldKeys.relKey, {code : "ERR22", data : optsRelVal[j], message : Lyte.errorCodes.ERR22});
											continue;		
										}
									}
									relRecord = this.newRecord(relMod, optsRelVal[j]);									
								}
							}
							else if(optsRelVal[j] && typeof optsRelVal[j] == bPkType.toLowerCase()){
								relRecord = store.peekRecord(relMod, optsRelVal[j]);
							}
							else if(optsRelVal[j] && typeof optsRelVal[j] == "object"){
								if(polymorphic){
									if(optsRelVal[j] && optsRelVal[j].hasOwnProperty("_type")){
										relMod =  optsRelVal[j]._type;
									}
									else{
										store.$.setError(errorObj, fieldKeys.relKey, {code : "ERR22", data : optsRelVal[j], message : Lyte.errorCodes.ERR22});
										continue;		
									}
								}
								relRecord = this.newRecord(relMod, optsRelVal[j]);
								// ingore = true;
							}
							if(relRecord && relRecord.$ && relRecord.$.isError){
								store.$.setError(errorObj, fieldKeys.relKey,{code : "ERR15", data : optsRelVal[j], message : Lyte.errorCodes.ERR15, error : Object.assign({}, relRecord)});
								continue;
							}
							if(relRecord && relRecord.$ && !relRecord.$.isError){
								resp = this.establishLink(rel.forward, rel.backward, record, relRecord, undefined, ingore);
								if(resp != true){
									store.$.setError(errorObj,fieldKeys.relKey,{code : resp, data : optsRelVal[j], message : Lyte.errorCodes[resp]});
								}							
							}
						}
						if(errorObj[fieldKeys.relKey].length == 0){
							delete errorObj[fieldKeys.relKey];
						}
						if(relation[i].relType == "hasMany"){
							var fieldkey = relKey;
							if(record[fieldkey] == undefined){
								record[fieldkey] = [];
							}
							if(!record[fieldkey].add){
								if(polymorphic){
									store.$.defProp(record[fieldkey], "polymorphic", true);
								}
								store.$.defArrUtls(record[fieldkey]);
								store.$.defUtls(record[fieldkey], store.modelFor(relation[i].relatedTo),record,fieldkey);
								store.$.defPolyUtls(record[fieldkey]);
							}
						}
					}
				}
			}
			if(errorObj && errorObj.$ && Object.keys(errorObj.$.error).length > 0){
				return errorObj;
			}
			var toRel = store.$.toRelate[model._name], pkVal = record.$.pK;
			if(toRel && toRel.has(pkVal)){
				store.$.establishToRelated(record, toRel.get(pkVal));
				toRel.delete(pkVal);
			}
			if(model.didLoad){
				var callBack = model.didLoad;
				for(var i=0;i<callBack.length;i++){
					callBack[i].apply(record);				
				}
			}
			this.handleArrOp(model.data,"push",record);
			this.checkAndAddToArray(model.dirty, record.$.pK);
			model.emit("add",[record]);
            store.emit("add",[model._name,record]);
			if(withoutValidation){
				record.$.validatedOnCreate = false;
			}
			return record;
		},
		toInsertData: function(modelName, payLoad, saveParent){
			var model = store.modelFor(modelName);
			var data = this.insertIntoStore(model, payLoad[modelName],saveParent,true);
			delete model.rel;
			return data;
		},
		insertIntoStore:function(model,data,saveParent,stack,partialObj){
			var ret;
			if(Array.isArray(data)){
				ret = [];
				for(var i=0; i<data.length; i++){
					ret[i] = this.insertIntoStore(model, data[i], saveParent, stack, partialObj);
                    if(ret[i] && ret[i].$ && ret[i].$.isError){
						ret.$ = ret.$ || store.$.defProp(ret, "$", {});
						// ret.$.isError = true;
						store.$.cmpSet(ret.$, "isError", true);
                    }
				}
			}
			else if(data && Object.keys(data).length){
				var currentModel = model;
				if(data._type && model.extendedBy){
					currentModel = (model.extendedBy[data._type]) ? store.modelFor(data._type) : undefined;
				}
				if(Lyte.isRecord(data))
				{
					return undefined;
				}
				if(!this.isDuplicateRecord(currentModel, data, currentModel._pK)){
					var rec = new Record(currentModel._name, data);
					currentModel.data.push(rec);
					var toRel = store.$.toRelate[currentModel._name], pkVal = rec.$.pK;
					if(saveParent){
						store.$.saveParent = rec;
					}
					ret = this.validateAndPush(currentModel,rec,partialObj);
					if(toRel && toRel.has(pkVal)){
						store.$.establishToRelated(rec, toRel.get(pkVal));
						toRel.delete(pkVal);
					}
				}
				else{
					ret = this.validateAndMerge(currentModel,data,partialObj);
				}
				if(saveParent){
					store.$.saveParent = undefined;
				}
				if(stack){
					store.$.recStack = {};
				}
			}
			return ret;
		},
		removeFromStore:function(model,keys,fromStore,backUp){
			var data = model.data;
			if(data.length == 0){
				return;
			}
			if(!Array.isArray(keys)){
				keys = [keys];
			}
			var pKey = model._pK;
			for(var i=0; i<keys.length; i++){
				var index = this.getIndex(data, pKey, keys[i]);
				if(index == -1){
					continue;
				}
				var rec = data[index];
				var pK = rec.$.pK;
				var relations = model.relations;
				if(Object.keys(relations).length){
					this.toDemolishRelation(model, index);	
				}

				// if(backUp){
				// 	for(var key in relations){
				// 		var relArr = relations[key];
				// 		relArr.forEach(function(rel, ind){
				// 			var relKey = rel.relKey;
				// 			if(rec.hasOwnProperty(relKey)){
				// 				var data = rec[relKey];
				// 				if(!Array.isArray(data)){
				// 					data = [data];
				// 				}
				// 				var arr = [];
				// 				data.forEach(function(item, index){
				// 					arr.push(item.$.pK);
				// 				});
				// 				rec[relKey] = arr;
				// 			}
				// 		});
				// 	}
				// }
				var deleted;
				deleted = this.handleArrOp(data,"removeAt",undefined,index,1)
				if(deleted && !fromStore){
					store.$.cmpSet( deleted[0].$, "isDeleted", true);
					// deleted[0].$.isDeleted = true;
					if(deleted[0].$.isNew || deleted[0].$.isModified){
						store.$.deleteFromArray(model.dirty, deleted[0].$.pK);
					}
					if(!deleted[0].$.isNew){
						model._deleted.push(deleted[0]);
					}
					model.emit("remove", [deleted[0]]);
                    store.emit("remove", [model._name,deleted[0]])
				}
				var ind;
				if(Array.isArray(model.dirty) && (ind = model.dirty.indexOf(pK)) != -1){
					model.dirty.splice(ind, 1);
				}
			}
		},
		getIndex:function(data,pKey,pkVal,type, model){
			var isComp = pKey.split(',').length > 1 ? true : false; 
			if(!isComp){
				return this.getInd(data, pKey, pkVal, type)
			}
			else{
				return this.getCompInd(data, pkVal, type, model)
			}
		},
		getCompInd:function(data,pkVal,type,model){
			for(var i=0;data && i<data.length;i++){
				var rec = data[i];
				if(type && data[i]._type !== type){
					continue;
				}
				if(store.adapter.$.compareObjects(store.$.getpKVal(rec,model), pkVal)) {
					return i;
				}
			}
			return -1;
		},
		getInd : function(data,pKey,pkVal,type){
			for(var i=0;data && i<data.length;i++){
				var rec = data[i];
				if(type && rec._type !== type){
					continue;
				}
				if(rec[pKey] == pkVal){
					return i;
				}
			}
			return -1;
		},
		isDuplicateRecord:function(model,obj){
			var data = model.data, pK = model._pK, isComp = model.isComposite;
			if(data.length){
				return data.some(function(record){
					if(!isComp){
						if(obj[pK] == record[pK]){
							return true;
						}
					}
					else{
						if(store.adapter.$.compareObjects( store.$.getpKVal(obj, model), store.$.getpKVal(record) )){
							return true;
						}
					}
				});
			}
			return false;
		},
		validateAndPush:function(model,data,partialObj){
			if(!model.rel){
				model.rel = {};
			}
			var pkVals = model._pK.split(','), errObj = {};
			pkVals.forEach(function(item){
				if(!data.hasOwnProperty(item)){
					errObj.item = item;
					return new error1(item, {code : "ERR23", data : data, message : Lyte.errorCodes.ERR23});
				}
			});
			if(errObj.item){
				var index = model.data.indexOf(data);
				model.data.splice(index,1);
				return new error1(errObj.item, {code : "ERR23", data : data, message : Lyte.errorCodes.ERR23});
			}
			data = this.validateJSON(model, data, undefined, undefined, partialObj);
			if(model.didLoad){
				var callBack = model.didLoad;
				for(var i=0;i<callBack.length;i++){
					callBack[i].apply(data);	
				}
			}
			var index = model.data.indexOf(data);
			model.data.splice(index,1);
			this.handleArrOp(model.data,"push",data);

			model.emit("add",[data]);
			store.emit("add",[model._name,data])
			return data;
		},
		validateAndMerge:function(model,data,partialObj){
            if(!model.rel){
                model.rel  = {};
            }
            var record = store.peekRecord(model._name, store.$.getpKVal(data, model));
            if(!record || !Lyte.isRecord(record)){
                Lyte.error("LD04",data);
                return false;
            }
            this.mergeData(record, data, partialObj);
            // record = this.validateJSON(model, record, Object.keys(data), toValidate, partialObj);
			if(model.didLoad){
                var callBack = model.didLoad;
                for(var i=0;i<callBack.length;i++){
                    callBack[i].apply(record);				
                }
                //model.didLoad.apply(record);
            }
            return record;
		},
		mergeData:function(record,data,partialObj){
            if(!record || !data){
                return;
            }
            var model = record.$.model, field;
            for(var key in data){
                field = model.fieldList[key];
                if(field){
                    if(field.type != "relation"){
						if(data[key] && Lyte.Transform.hasOwnProperty(field.type) && Lyte.Transform[field.type].hasOwnProperty("deserialize")){
							data[key] = Lyte.Transform[field.type].deserialize(data[key]);
						}
						store.$.cmpSet(record,key,data[key],true);
                    }
                    else if(field && field.type == "relation"){
						var todo = {};
						var rel = {};
						store.$.getRelations(record.$.model, key, store.modelFor(field.relatedTo), rel);
						var bMod = store.model[rel.forward.relatedTo];
						var result = this.compareRelations(record,data,key,field,partialObj ? partialObj[key] : undefined ,todo);
						this.mergeRecords(todo, result, model, bMod, record, key, data, rel, partialObj);
                    }
                }
                else{
					store.$.cmpSet( record,key,data[key],true );
                }
            }
		},
		mergeRecords:function(todo, result, model, bMod, record, key, data, rel, partialObj){
			if(!rel){
				var rel = {};
				store.$.getRelations(model, key, bMod, rel);	
			}
			var pK = model._pK;
			if(rel.forward.relType == "hasMany" && store.$.isEmptyArray(data[key])){
				store.$.cmpSet(record, key, [], true);
				store.$.establishObserverBindings(record,record.$.model._properties);
				store.$.defArrUtls(record[key]);
				store.$.defPolyUtls(record[key]);
				store.$.defUtls(record[key],bMod,record,key);
			}
			if(Array.isArray(todo.add)){
				todo.add.forEach(function(item){
					store.$.createAndRelate(model, bMod, record, key, item, rel, partialObj);
				});
			}
			if(Array.isArray(todo.remove)){
				todo.remove.forEach(function(item){
					store.$.demolishLink(record, pK, store.peekRecord(bMod._name, item), rel.backward.relKey,  rel.forward, rel.backward, true); 
					store.$.demolishLink(store.peekRecord(bMod._name, item), bMod._pK, record, rel.forward.relKey, rel.backward, rel.forward, true); 
				});
			}
			if(record && record.hasOwnProperty(key)){
				store.$.deleteDeepNest(record, key);
				if(Array.isArray(record[key]) && record[key].hasOwnProperty("partial")){
					var partObj = record[key].partial, partKeys = [];
					partObj.forEach(function(value, partKey){
						partKeys.push(partKey);
						record[key].partial.delete(partKey);
					});
				}
			}
			switch(result){
				case 0:{
					if(Lyte.isRecord(record[key])){
						store.$.demolishLink(record, pK, record[key], rel.backward.relKey, rel.forward, rel.backward, true); 
						store.$.demolishLink(record[key], bMod._pK, record, rel.forward.relKey, rel.backward, rel.forward, true); 								
					}
					store.$.createAndRelate(model, bMod, record, key, data[key], rel, partialObj);
					break;
				}
				case 1:{
					break;
				}
				case 2:{
					this.mergeData(record[key],data[key]);
					break;
				}
				default : break;    
			}
		},
        compareRelations:function(record,data,key,field,partialObj,todo){
            //return 0 - not same, 1 -same, 2 - merge, 3 - partial add, 4 - delete and partial add
			var model = store.modelFor(field.relatedTo);
			var pK = model._pK, result = [];
            if(field.relType == "belongsTo"){
                return this.compareRecordWithObj(record[key],data[key],pK, partialObj);   
            }else{
				if(!record.hasOwnProperty(key) || (record && record.hasOwnProperty(key) && (store.$.isEmpty(record[key]) || store.$.isEmptyArray(record[key])))){
					if(todo){
						var arr = data[key] || [];
						arr.forEach(function(item){
							var add = todo.add = todo.add || [];
							add.push(item);
						});
						return;
					}
					return 0;
				}
				var isPartial = false;
				if((partialObj && partialObj.partial)){
					isPartial = true;
				}
                var len = data[key].length,old=0,status=1,oldPks = [];
                for(var i=0;i<len;i++){
					var obj = data[key][i];
					if(partialObj && partialObj[i] && partialObj[i].type == "removed"){
						continue;
					}
                    var ind = this.getIndex(record[key],pK,(typeof obj == "object") ? store.$.getpKVal(obj,model) : obj);
                    if(ind == -1){
						if(todo){
							var add = todo.add = todo.add || [];
							add.push(obj);
						}
                        status = 0;
                        continue;
					}
					oldPks.push(record[key][ind].$.pK);
                    var res = this.compareRecordWithObj(record[key][ind],obj,pK,partialObj ? partialObj[i] : undefined);
					if(res == 1){
						old++;
					}
                    if(res == 2){
                        this.mergeData(record[key][ind],obj, partialObj ? partialObj[i] : undefined);
                    }
                    else if(res == 0){
                    	status = 0;
                    }
				}
				if(todo && !isPartial){
					var arr = record[key] || [];
					arr.forEach(function(item){
						var pkVal = item.$.pK;
						if(oldPks.indexOf(pkVal) == -1){
							var remove = todo.remove = todo.remove || [];
							remove.push(pkVal);
						}
					});
				}
            }
        },
        compareRecordWithObj:function(rec,obj,pK,partialObj){
            if( !rec || !Lyte.isRecord(rec) ){
                return 0;
            }
			var recModel = rec.$.model;
			var recPk = recModel._pK;
			var isComp = recPk.split(',').length > 1 ? true : false;
            var recFields = recModel.fieldList;
			if(!isComp) {
				var field = recModel.fieldList[pK];
				if(typeof obj == field.type ){
					if(rec[pK] == obj){
						return 1;
					}
					else{
						return 0;
					}
				}
			}
			if(obj && typeof obj == "object"){
				if(!store.$.comparePk(rec, store.$.getpKVal(obj, recModel))){
					return 0;
				}
				for(var data_key in obj){
					var field = recFields[data_key];
					if(field){
						if(field.type == "relation"){
							var todo = {};
							var res = this.compareRelations(rec, obj, data_key, field, partialObj ? partialObj[data_key] : undefined, todo);
							this.mergeRecords(todo, res, recModel, store.modelFor(field.relatedTo), rec, data_key, obj, undefined, partialObj);
						}
						else if(rec[data_key] != obj[data_key]){
							return 2;
						}                    
					}
					else{
						if(rec[data_key] != obj[data_key]){
							return 2;
						}
					}	
				}
				return 1;
			}
			return 0;
        },
		validateJSON:function(model,data,keys,toValidate,partialObj){
            var validate = (toValidate) ? toValidate.toValidate : undefined;
            var fields = (validate && Object.keys(validate).length) ? validate : model.fieldList;
			var extended = model.extend ? true : false;
			for(var key in data){
				if(keys && keys.indexOf(key) == -1){
					continue;
				}
				var fld = fields[key];
				if(fld){
					if(fld.type == "relation" && data[key]){
						var partialAdd = (toValidate && toValidate.toPartialAdd) ? toValidate.toPartialAdd[key] : undefined;
						var resp = this.handleRelation(key, model, fld, data, partialAdd, partialObj);
						if(resp != true){
							return new error1(key, {code : resp, data : data, message : Lyte.errorCodes[resp]});
						}
						if(fld.relType == "hasMany" && !data[key].add){
							store.$.defArrUtls(data[key]);
							store.$.defPolyUtls(data[key]);
							store.$.defUtls(data[key],store.model[fld.relatedTo],data,key);
						}
					}
					else if(fld.type){
						var fieldKeys = fld;
						if(data[key] === undefined && fieldKeys.default){
							data[key] = fieldKeys.default;
						}
						if(data[key] && Lyte.Transform.hasOwnProperty(fieldKeys.type) && Lyte.Transform[fieldKeys.type].hasOwnProperty("deserialize")){
							data[key] = Lyte.Transform[fieldKeys.type].deserialize(data[key]);
						}
					}
				}
				else{
					if(extended){
						var extMod = store.modelFor(model.extend);
						var extKey = extMod.fieldList[key];
						if(extKey && extKey.type == "relation"){
							var partialAdd = (toValidate && toValidate.toPartialAdd) ? toValidate.toPartialAdd[key] : undefined;
							var resp = this.handleRelation(key, extMod, extKey, data, partialAdd);
							if(resp != true){
								return new error1(key, {code : resp, data : data, message : Lyte.errorCodes[resp]});
							}
							if(extKey.relType == "hasMany" && !data[key].add){
								store.$.defArrUtls(data[key]);
								store.$.defPolyUtls(data[key]);
								store.$.defUtls(data[key],extMod,data,key);
							}
						}
					}
				}
			}
			return data;
		},
		handleRelation:function(key,model,field,data,partialAdd, partialObj){
			var rel = {};
			if (!model.rel.hasOwnProperty(key)){
				var relResp = this.getRelations(model,key,store.modelFor(field.relatedTo),rel);	
				if(relResp !== true){
					return relResp;
				}
				model.rel[key] = rel;
			}
			else{
				rel = model.rel[key];
			}
			return this.solveRelation(rel, model, store.modelFor(field.relatedTo), key, data, partialAdd, partialObj);
		},
		getRelations:function(fModel,key,bModel,rel){
			if(bModel == undefined){
				Lyte.error("LD05",fModel.fieldList[key].relatedTo,key,fModel._name)
				return "ERR11";
			}
			rel.forward = fModel.fieldList[key];
			rel.backward = this.getBackwardRel(fModel,rel.forward,bModel);
			if(rel.backward === undefined){
				// Lyte.warn("LD06",fModel._name,key,bModel._name);
				// return "ERR25";
				var temp_backward = {type: "relation",relatedTo:fModel._name, dummy:rel.forward.relKey, relKey:undefined};
				bModel.relations[fModel._name] = bModel.relations[fModel._name] || [];
				bModel.relations[fModel._name].push(temp_backward);
				rel.backward = temp_backward;
			}
			return true;
		},
		getBackwardRel:function(fModel,rel,bModel){
			var inverse, polymorphic;
			if(rel.opts){
				inverse = rel.opts.inverse;
				polymorphic = rel.opts.polymorphic;
				if(inverse === null){
					return null;
				}
				if(polymorphic){
					var extendedModels = bModel.extendedBy;
					if(extendedModels){
						for(var key in extendedModels){
                            var extModel = store.modelFor(key);
							if(extModel.relations[fModel._name]){
								bModel = extModel;
								break;
							}
						}
					}
				}
			}
			var relatedTo;
			if(inverse && inverse != ""){
				relatedTo = inverse;
			}
			else{
				var bRel = bModel.relations[fModel._name];
                var extFmodel = store.modelFor(fModel.extend);
				if(!bRel && extFmodel && bModel.relations[extFmodel._name] && bModel.relations[extFmodel._name].opts && bModel.relations[extFmodel._name].opts.polymorphic){
					bRel = bModel.relations[extFmodel._name];
				}
				relatedTo = (bRel && bRel.length == 1 )?bRel[0].relKey:undefined;
			}
			if(!relatedTo){
				var bRels = bModel.relations[fModel._name];
                var extFmodel_1 = store.modelFor(fModel.extend);
				if(!bRels && extFmodel_1 && bModel.relations[extFmodel_1._name] && bModel.relations[extFmodel_1._name].opts && bModel.relations[extFmodel_1._name].opts.polymorphic){
					bRels = bModel.relations[extFmodel_1._name];
				}
				if(rel.dummy && bRels){
					for(var i=0;i<bRels.length;i++){
						if(bRels[i] && bRels[i].relKey && bRels[i].relKey == rel.dummy)
						{
							 relatedTo = bRels[i].relKey;
							 break;
						}
					}
				}
				else if(bRels){
					for(var i=0;i<bRels.length;i++){
						if(bRels[i] && bRels[i].opts && bRels[i].opts.inverse && bRels[i].opts.inverse === rel.relKey){
							relatedTo = bRels[i].relKey;
							break;
						}
						else if(bRels[i] && bRels[i].dummy && bRels[i].dummy == rel.relKey)
						{
							 relatedTo = bRels[i];
							 break;
						}
					}
				}
			}
			if(relatedTo && relatedTo.dummy){
				return relatedTo;
			}
			return relatedTo?bModel.fieldList[relatedTo]:undefined;			
		},
		solveRelation:function(rel,fModel,bModel,key,data,partialAdd,partialObj){
			var backward = rel.backward, forward = rel.forward, partial = partialObj ? partialObj[key] : undefined, partialRel = partial && partial.partial;
			var fPk = fModel._pK, val = [];
            if(partialAdd){
                val = partialAdd;
            }
			else if(!partialRel){
                if(data[key] && (data[key].add || Lyte.isRecord(data[key]) ) ){
                    return true;
                }
                if(!Array.isArray(data[key])){
                    data[key] = [data[key]];
                }
                else if(forward.relType == "belongsTo"){
                    return "ERR21";
				} 
				val = data[key].splice(0, data[key].length);
				if(forward.relType == "belongsTo"){
					data[key] = undefined;				
				}                
			}
			else if(Array.isArray(data[key])){
				var val = data[key].splice(0, data[key].length);
			}
			for(var i=0; i<val.length; i++){
				var ret;
				ret = this.createAndRelate(fModel, bModel, data, key, val[i], rel, partial);
				if(ret != true){
					return ret;
				}
			}
			return true;
		},
		createAndRelate: function(fModel, bModel, data, key, val, rel, partial){
			if(!rel.backward){
				if(rel.forward.relatedTo === fModel._name){
					rel.backward = rel.forward;
				}
				if(rel.backward === undefined){
					return "ERR12";
				}
			}
			var pK = fModel._pK, isComp = pK.split(',').length > 1 ? true : false;
			var relatedRecord, newPartial = partial && partial.hasOwnProperty(val[pK]) ? partial[val[pK]] : partial;
			if(!isComp && typeof val == bModel.fieldList[bModel._pK].type){
				relatedRecord = store.peekRecord(bModel._name, val);
			}
			else if(typeof val == "object" && !Lyte.isRecord(val)){
				relatedRecord = this.insertIntoStore(bModel, val, undefined, undefined, newPartial);					
			}
			if(relatedRecord && relatedRecord.$ && relatedRecord.$.isError){
				store.$.cmpSet(data.$, "isError", true);
				// data.$.isError = true;
				var errObj = {code:"ERR24", message: Lyte.errorCodes.ERR24, data: data, error: relatedRecord.$.error};
				store.$.cmpSet( data.$.error, key, errObj );
			}
			else if(relatedRecord){
				if(!this.hasDuplicateRelation(relatedRecord, data[key], bModel._pK, val._type)){
					this.establishLink(rel.forward, rel.backward, data, relatedRecord, undefined, true);							
				}
			}
			else{
				this.addToRelate(fModel._name, data, rel, val);
			}
			return true;
		},
		singleEstablishLink:function(forward,data,relatedRecord){
			var relation = relatedRecord.$._relationships , fModelName = data.$.model._name , fRelKey = forward.relKey ;
			relation[fModelName] = relation[fModelName] || {};
			relation[fModelName][fRelKey] = relation[fModelName][fRelKey] || [];
			if(!this.hasDuplicateRelation(data,relation[fModelName][fRelKey],data.$.model._pK)){
				relation[fModelName][fRelKey].push(data);
			}
		},		
		establishLink:function(forward,backward,data,relatedRecord,index,ignorePartial){
			if(!relatedRecord){
				return "ERR13";
			}
			if( !this.checkForCorrectRelation(forward, relatedRecord) ){
				return "ERR14";
			}
			var fRelKey = forward.relKey, type = relatedRecord._type;
			if(forward.relType == "belongsTo"){
                if(data[fRelKey] !== relatedRecord){
					store.$.cmpSet( data, fRelKey, relatedRecord, true );
				}
				if(data.$.partial && Object.keys(data.$.partial).length && data.$.partial[fRelKey]){
					delete data.$.partial[fRelKey];
				}
			}
			else if(forward.relType === "hasMany"){
				if(!data[fRelKey]){
					store.$.cmpSet(data,fRelKey,[],true);
				}
				if(!data[fRelKey].model){
					var relModel = relatedRecord.$.model;
					if(type){
						store.$.defProp(data[fRelKey], "polymorphic", true);
						relModel = store.modelFor(relModel.extend);
					}
                    store.$.establishObserverBindings(data,data.$.model._properties);
					store.$.defArrUtls(data[fRelKey]);
					store.$.defPolyUtls(data[fRelKey]);
					store.$.defUtls(data[fRelKey],relModel,data,fRelKey);
				}
				if( !this.hasDuplicateRelation(relatedRecord, data[fRelKey], (forward?store.modelFor(forward.relatedTo)._pK : undefined),type) ){
					if(index != undefined){
						if(typeof Lyte.arrayUtils != "undefined"){
							Lyte.arrayUtils(data[fRelKey],"insertAt",index,relatedRecord);						
						}
						else{
							data[fRelKey].splice(index, 0, relatedRecord);
						}	
					}
					else{
						this.handleArrOp(data[fRelKey],"push",relatedRecord);
					}
				}
				var ret;
				if(!ignorePartial && forward.opts && forward.opts.serialize == "partial"){
					ret = store.$.partialData(data, fRelKey, relatedRecord.$.pK, "added");
				}
			}
			var nest = false;
			if(!ignorePartial){
				nest = ret ? false : true;
			}
			if(forward == backward){
				return true;
			}
			if(backward === null){
				if(relatedRecord.hasOwnProperty(bRelKey)){
					delete relatedRecord[bRelKey];
				}
				return true;
			}
			if(backward.dummy){
				this.singleEstablishLink(forward,data,relatedRecord);
			}
			else{
				var bRelKey = backward.relKey, relRecMod = relatedRecord.$.model;
				if( !this.checkForCorrectRelation(backward, data) ){
					return "ERR14";
				}
				if(backward.relType == "belongsTo"){
					if(relatedRecord[bRelKey] != undefined  && relatedRecord[backward.relKey] !== data){
						this.toDemolishLink(relRecMod, relatedRecord, backward, ignorePartial);
					}
					if(relatedRecord[bRelKey] !== data){
						store.$.cmpSet(relatedRecord, bRelKey, data, true);
					}
					if(relatedRecord.$.partial && Object.keys(relatedRecord.$.partial).length && relatedRecord.$.partial[bRelKey]){
						delete relatedRecord.$.partial[bRelKey];
					}
				}
				else if(backward.relType === "hasMany"){
					if(!relatedRecord[bRelKey]){
						store.$.cmpSet(relatedRecord, bRelKey, [], true);
					}
					if(!relatedRecord[bRelKey].model){
						store.$.defArrUtls(relatedRecord[bRelKey]);
						store.$.defPolyUtls(relatedRecord[bRelKey]);
						store.$.defUtls(relatedRecord[bRelKey],data.$.model,relatedRecord,bRelKey);
					}
					if( !this.hasDuplicateRelation(data, relatedRecord[bRelKey], (backward ? store.modelFor(backward.relatedTo)._pK : undefined), type) ){
						this.handleArrOp(relatedRecord[bRelKey],"push",data);
					}
					if(!ignorePartial && backward.opts && backward.opts.serialize == "partial"){
						store.$.partialData(relatedRecord, bRelKey, data.$.pK, "added");
					}
				} 
			}
			if(nest){
				store.$.addDeepNest(relatedRecord);
			}
			return true;
		},
		toDemolishRelation:function(model,index){
			var record = model.data[index], relations = model.relations, storeUtils = this;
			for(var key in relations){
				var rel = relations[key];
				for(var i=0; i<rel.length; i++){
					var relation = rel[i],
					relatedModel = store.modelFor(relation.relatedTo);
					if(relatedModel){
						var relPriKey = relatedModel._pK, 
						relkey = relation.relKey;
						if(model._name == relatedModel._name){
							var data = relatedModel.data,index1,index2;
							for(index1=0 ; index1<data.length; index1++){
								var item=data[index1];
								if(Array.isArray(item[relkey])){
									for(var index2=0;index2<item[relkey].length;index2++){
										var value = item[relkey][index2];
										if(value[relPriKey] == record[relPriKey])
										{
											storeUtils.handleArrOp(item[relkey],"removeAt",undefined,index2,1);
										}
									}
								}
								else if (Lyte.isRecord(item[relkey])){
									if(item[relkey][relPriKey] == record[relPriKey])
										{
											item[relkey] = undefined ;
										}
								}
							}
						}
						if(!record[relation.relKey] && !relation.dummy){
							continue;
						}
						this.toDemolishLink(model, record, relation);
					}
				}
			}
		},
		toDemolishLink:function(model,record,relation,ignorePartial){
			var records = record[relation.relKey], 
			priKey = model._pK, 
			relatedModel = store.modelFor(relation.relatedTo);
			if(!relatedModel){
				return;
			}
			relPriKey = relatedModel._pK, 
			relatedModelName = relation.relatedTo, 
			bRelation = this.getBackwardRel(model, relation, relatedModel),
			serialize = relation.opts ? relation.opts.serialize : undefined;
			if(relation.dummy){
				records = this.getRelatedRecord(record,relation.relatedTo,relation.dummy);
			}
			// if(bRelation.dummy){
			// 	bRelation.relKey = undefined;
			// }
			var pKs = [], rec;
			if(bRelation){
				if(Array.isArray(records)){
					for(var i=0; i<records.length; i++){
						this.demolishLink(record, priKey, records[i], bRelation.relKey, relation, bRelation, ignorePartial);
					} 
				}
				else if(Lyte.isRecord(records)){
					this.demolishLink(record, priKey, records, bRelation.relKey, relation, bRelation, ignorePartial);
				}
			}
		},
		demolishSingleRelation : function(record,fModelName,key,relatedRecord,priKey){
			var arr,index;
			if(Lyte.isRecord(record)){
				arr = record.$._relationships;
				if(arr && arr[fModelName] && arr[fModelName][key]){
					arr = arr[fModelName][key];
					index = this.getIndex(arr,priKey,relatedRecord[priKey]);
					if(index > -1){
						arr.splice(index,1);
					}
				}
			}
		},
		demolishLink : function(record, priKey, relatedRecord, bRelKey, relation, bRelation, ignorePartial){
			var links = relatedRecord[bRelKey], relMod = relatedRecord.$.model, pKs = [];
			var pK = record.$.pK;
			if(Array.isArray(links)){
				var ind = this.getIndex(links, priKey, pK,record._type);
				if(ind != -1){
					this.handleArrOp(relatedRecord[bRelKey],"removeAt",undefined,ind,1);
				}
			}
			else if( links && (typeof links == "object" || Lyte.isRecord(links)) ){
				if(Lyte != undefined && Lyte.objectUtils != undefined){
					Lyte.objectUtils(relatedRecord, "delete", bRelKey, undefined, undefined, true);
				}
				else {
					delete relatedRecord[bRelKey];
				}
			}
			else{
				this.demolishSingleRelation(relatedRecord,record.$.model._name,relation.relKey,record,priKey);
			}
			if(!bRelation){
				bRelation = relMod.fieldList[bRelKey];
			}
			if(!ignorePartial){
				var relType, isPartial, ret, nest;
				if(bRelation){
					if(bRelation.opts){
						isPartial = bRelation.opts.serialize == "partial";
						nest = bRelation.opts.deepNest;
					}
					var relType = bRelation ? bRelation.relType : undefined;
				}
				if(relType == "belongsTo" && isPartial){
					var partObj = relatedRecord.$.partial = relatedRecord.$.partial || {};
					partObj = partObj[bRelKey] = partObj[bRelKey] || new Map();
					if(!partObj.has(pK)){
						partObj.set(pK, {});
					}
					partObj = partObj.get(pK);
					partObj.type = "removed";
				}
				if(bRelation && isPartial){
					ret = store.$.partialData(relatedRecord, bRelKey, pK, "removed");
					nest = ret ? false : nest;
				}
				if(nest){
					store.$.makeDirty("dirty", relatedRecord, "removed", bRelation, pK);
					store.$.addDeepNest(relatedRecord);
				}
			}
		},
		rllBckRecArr : function(oldVal, record, model, field){
			var rel = {}, pK = model._pK, relPK = store.modelFor(field.relatedTo)._pK;
			store.$.getRelations(model, field.relKey, store.modelFor(field.relatedTo), rel);
			for(var i=oldVal.length-1; i>=0; i--){
				var records = oldVal[i].records;
				if(oldVal[i]._type == "added"){
					for(var j=0; j<records.length; j++){
						var relatedRecord = records[j];
						this.demolishLink(relatedRecord, relPK, record, rel.forward.relKey);
						if(rel.backward != null){
							this.demolishLink(record, pK, relatedRecord, rel.backward.relKey, rel.forward);
						}
					}
				}
				else if(oldVal[i]._type == "removed"){
					for(var j=records.length-1; j>=0; j--){
						var relatedRecord = records[j];
						this.establishLink(rel.forward, rel.backward, record, relatedRecord, oldVal[i]._indices[j]);
					}
				}
				else if(oldVal[i]._type == "changed"){
					var currentRecords = record[field.relKey];
					if(!Array.isArray(currentRecords)){
						currentRecords = [currentRecords]; 
					}
					var self = this;
					var kLen = currentRecords.length;
					for(var k=0; k<kLen; k++){
						var relatedRecord = currentRecords[0];
						if(relatedRecord != undefined){
							self.demolishLink(relatedRecord, relPK, record, rel.forward.relKey);
							if(rel.backward != null){
								self.demolishLink(record, pK, relatedRecord, rel.backward.relKey,rel.forward);
							}
						}
					}
					if(!Array.isArray(records)){
						records = [records];
					}
					for(var j=0; j<records.length; j++){
						var relatedRecord = records[j];
						if(typeof relatedRecord == "string"){
							relatedRecord = store.peekRecord(rel.forward.relatedTo,relatedRecord);
						}
						if(relatedRecord != undefined){
							this.establishLink(rel.forward, rel.backward, record, relatedRecord, undefined);
						}
					}						
				}
			}
		},
		sortBy : function(field, order){
			var fieldArr = store.$.mapBy.call(this, field);
            var model = this.model;
            var fie = model.fieldList[field];
            if(fie && fie.type == "string"){
                fieldArr.sort();
                if(order == "desc"){
                    fieldArr.reverse();
                }                
            }
            else{
                fieldArr.sort(function(a,b){return a-b;});
                if(order == "desc"){
                    fieldArr.sort(function(a,b){return b-a;});
                }
            }
			var oldArr = this.slice(0), newArr = [];
			for(var i=0; i<fieldArr.length; i++){
				if(fieldArr[i] == undefined){
					continue;
				}
				var index = store.$.getIndex(oldArr, field, fieldArr[i]);
				newArr.push(oldArr[index]);
				oldArr.splice(index, 1);
			}
			if(oldArr.length > 0){
				if(order == "desc"){
					newArr = newArr.concat(oldArr);
				}
				else{
					newArr = oldArr.concat(newArr);
				}				
			}
			store.$.defArrUtls(newArr);
			store.$.defUtls(newArr,this.model);
			return newArr;
		},
		mapBy : function(field){
			return this.map(function(value){
				return value.$.get(field);
			});
		},
		revertToOldVal : function(record, attr, oldVal, rel){
			if(oldVal == undefined || oldVal.length == 0){
				return;
			}
			else{
				if(!Array.isArray(oldVal)){
					oldVal = [oldVal];
				}
				for(var i =0; i<oldVal.length; i++){
					this.establishLink(rel.forward, rel.backward, record, oldVal[i], undefined);
				}
			}
		},
		removePartial : function(record, key){
			var parObj = record.$.partial;
			if(parObj && parObj[key] ){
				delete parObj[key];
			}
		},
		rollBackDelete : function(model, index){
			var deleted = model._deleted, rec = deleted.splice(index, 1)[0], pK = model._pK;
			// rec.$.isDeleted = false;
			store.$.cmpSet(rec.$, "isDeleted", false);
			this.handleArrOp(model.data,"push",rec);
			var self = this;
			var relArr = model.relations;
			if(relArr){
				for(var key in relArr){
					var rel = relArr[key] || [];
					var self = this;
					rel.forEach(function(item)
					{
						var key = item.relKey, bRel, bMod;
						if(rec.hasOwnProperty(key)){
							bMod = store.modelFor(item.relatedTo);
							bRel = self.getBackwardRel(model,item,bMod);
							var data = rec[key];
							if(Array.isArray(data)){
								data.forEach(function(itm, ind){
									self.establishLink(item,bRel,rec,itm,undefined);
								});
							}
							else{
								self.establishLink(item,bRel,rec,rec[key],undefined);
							}
						}
						// if(rec.hasOwnProperty(key)){
						// 	bMod = store.modelFor(item.relatedTo);
						// 	bRel = self.getBackwardRel(model,item,bMod);
						// 	data = Array.from(rec[key]);
						// 	delete rec[key];
						// 	data.forEach(function(itm){
						// 		var record = store.peekRecord(item.relatedTo, itm);
						// 		if(record){
						// 			self.establishLink(item,bRel,rec,record,undefined);
						// 		}
						// 		self.removePartial(record, bRel.relKey);
						// 	});
						// }
					});
				}
			}
			if(rec.$.isNew || rec.$.isModified){
				this.checkAndAddToArray(model.dirty, rec[model._pK]);
			}
			store.$.clrRecErr(rec.$, pK, "ERR17");
			model.emit("add", [rec]);
			store.emit("add", [model._name,rec]);
		},
		rollBackNew : function(model, record, pK){
			var pkVal = record.$.pK;
			var index = this.getIndex(model.data, pK, pkVal);
			store.$.toDemolishRelation(model, index);
			this.handleArrOp(model.data,"removeAt",undefined,index,1);
			// record.$.isNew = false;
			store.$.cmpSet(record.$, "isNew", false);
			record.$ = {};
			model.emit("remove", [record]);
			store.emit("remove", [model._name,record]);
			this.deleteFromArray(model.dirty, pkVal);
		},
		emit : function(type, record, attr, err){
			record.$.emit(type, [record,attr,err]);
			record.$.model.emit(type, [record, attr, err]);
			store.emit(type, [record.$.model._name, record, attr, err]);
		},
		hasRecordsArrayChanged : function(record, attr){
			var arr = record.$.getInitialValues(attr), changed = true, pK = record.$.model._pK;
			if(arr && arr.length == record[attr].length){
				changed = false;
				for(var i=0; i<arr.length; i++){
					if(!this.compareRecords(arr[i], record[attr][i], pK)){
						return true;
					}
				}
			}
			return changed;
		},
		setRecErr : function($record, field, code, value){
			$record.isError = true;
            var errObj = code;
			if(typeof errObj == "object"){
				store.$.cmpSet($record.error,field,errObj);
			}
			else{
				errObj = {code : code, message : Lyte.errorCodes[code]};
				store.$.cmpSet($record.error, field, errObj);
				if(value){
					store.$.cmpSet($record.error[field],"value",value);
				}				
			}
            store.$.emit("error",$record.record,field,errObj);
		},
		clrRecErr : function($record, field, code){
			var objUtl = Lyte.objectUtils;
			var $err = $record.error;
			if(code){
				if($record.error.code == code){
					if(typeof objUtl != "undefined"){
						objUtl($err,"delete",field);
					}
					else{
						delete $err[field];                        
					}
				}
			}
			else if(field){
				if(typeof objUtl != "undefined"){
					objUtl($err,"delete",field);
                }
                else{
                    delete $err[field];                       
                }
			}
			else{
                if(typeof objUtl != "undefined"){
					for(var err in $err){
						objUtl($err,"delete",err);
					}
				}	
                else{
                    $record.error = {};
                }   
			}
			if(Object.keys($record.error).length == 0){
				$record.isError = false;
			}
		},
        cacheQuery: function(modelName, queryParams, data){
			var cq = store.model.cachedQueries;
			cq = store.model.cachedQueries = cq || {};
			cq = cq[modelName] = cq[modelName] || [];
			cq.push({queryParams : queryParams, data : data});
		},
		cacheRecordQuery: function(modelName, key, queryParams, data){
			var crq = store.model.cachedRecordQueries;
			crq = store.model.cachedRecordQueries = crq || {};
			crq = crq[modelName] = crq[modelName] || {};
			crq = crq[key] = crq[key] || [];
			crq.push({queryParams : queryParams, data : data});
		},
		handleArrOp:function(data,type,obj,pos,len){
			if(typeof Lyte.arrayUtils != "undefined"){
                switch(type){
                    case "push":
                        Lyte.arrayUtils(data, type, obj);
                        break;
                    case "removeAt":
                        return Lyte.arrayUtils(data,type,pos,len);
                        break;
                    default:
                        Lyte.error("LD07", type);
                        break;
                }
			}
			else{
				switch(type){
					case "push":
						data.push(obj);
						break;
					case "removeAt":
						return data.splice(pos,len);
						break;
                    default:
                        Lyte.error("LD07", type);
                        break;
				}
			}
		},
		defArrUtls:function(obj){
			Object.defineProperties(obj, {
				filterBy : {
					value : store.$.filterBy
				},
				sortBy : {
					value : store.$.sortBy
				},
				mapBy : {
					value : store.$.mapBy
				}
			});
		},
		defPolyUtls:function(obj){
			Object.defineProperties(obj,{
				add : {
					value : store.$.add
				},
				remove : {
					value : store.$.remove
				}
			})
		},
		defUtls:function(obj,model,record,key){
			if(model){
				store.$.defProp(obj, "model", model);
			}
			if(record){
				store.$.defProp(obj, "record", record, false, true);
			}
			if(key){
				store.$.defProp(obj, "key", key);
			}
		},
		defPar:function(arr){
			store.$.defProp(arr, "partial", new Map());
		},
		cmpSet:function(obj, key, value, fromStore){
			if(typeof Lyte.Component != "undefined"){
				Lyte.Component.set(obj, key, value, fromStore);
			}
			else{
				obj[key] = value;
			}
		},
		defProp:function(scp, key, val, enume, write){
			enume = !enume ? false : true;
			write = !write ? false : true; 
			Object.defineProperty(scp, key, {
				value : val,
				enumerable : enume,
				writable : write
			})
		}
	}
}
function Adapter(opts,parent,name){
	var self = this;
	if(parent && parent.mixins && parent.mixins.length){
		parent.mixins.forEach(function(item){
			var mixin = Lyte.registeredMixins[item];
			for(var key in mixin){
				self[key] = mixin[key];
			}
		});
	}
	for(var key in opts){
		this[key] = opts[key];
	}
	this.__extendedBy = [];
    if(store.adapter.__toAddSuper && store.adapter.__toAddSuper.hasOwnProperty(name)){
        var addSuper = store.adapter.__toAddSuper[name];
        for(var i=0; i<addSuper.length; i++){
            var child = store.adapter[addSuper[i]];
            if(child && child.is == "adapter"){
				child.$super = this;
				this.__extendedBy.push(addSuper[i]);
				var index;
				if(name != "application")
				{	
					if(store.adapter.__toAddSuper.application)
					{
						index = store.adapter.__toAddSuper.application.indexOf(child.__name);
						if(index > -1)
						{
							store.adapter.__toAddSuper.application.splice(index,1);
						}
					}
					if(store.adapter.application)
					{
						index = store.adapter.application.__extendedBy.indexOf(child.__name);
						if(index > -1)
						{
							store.adapter.application.__extendedBy.splice(index,1);
						}
					}
				}
            }
        }
        delete store.adapter.__toAddSuper[name];
	}
	store.$.defProp(this, "is", "adapter");
	store.$.defProp(this, "__name", name);
}
Object.defineProperties(Adapter.prototype, {
	"super" : {
		value: function value(){
			return store.$.super.call(this,arguments);
		}
	},
	"extends" : {
		value: function value(name){
			store.$.extendCallback.call(this,store,"adapter",name);
		}
	}
});
store.adapter = {
	$: {
        getFromAdapter:function(adapter,key){
			var result = adapter ? adapter[key] : undefined;
			while(result === undefined){
				if(adapter && adapter.$super){
					adapter = adapter.$super;
					result = adapter ? adapter[key] : undefined;
				}
				else{
					adapter = store.adapter.application;
					if(adapter && adapter.hasOwnProperty(key)){
						result = adapter[key];
						if(result === undefined){
							break;	
						}
					}
					else{
						switch(key){
							case "host":{
								result = window.location.origin ? window.location.origin : window.location.protocol+"//"+window.location.host;
								break;
							}
							case "namespace": {
								result = "";
								break;
							}
							case "actionNamespace":{
								result = "action";
								break;
							}
							case "batchNamespace":{
								result = "batch";
								break;
							}
							default:
								result = undefined;	
						}
						break;
					}
				}
			}
			return result;
		},
		buildURL : function(type,method,modelName,key, snapshot, queryParams,actionName,customData){
			var adapter = store.adapter[modelName], host = this.getFromAdapter(adapter,"host"), url = "";
			if(!store.$.makeBatch){
				if(host !== undefined){
					url += host;
					if(host[host.length-1] != "/"){
						url+="/";					
					}
				}
			}
			var namespace = this.getFromAdapter(adapter,"namespace");
			if(namespace !== "" && namespace[namespace.length-1] != "/"){
				url+=namespace+"/";
			}
			else{
				url+=namespace;
			}
			if(type != "batch"){
				url+=modelName;
				if(key && typeof key != "object"){
					url+="/"+key;
				}	
			}
			if(type == "action"){
				url+="/"+this.getFromAdapter(adapter,"actionNamespace");
				var actions = store.modelFor(modelName).actions, action = actions[actionName].endPoint?actions[actionName].endPoint:actionName;
				url+="/"+action;
			} else if(type == "batch"){
				url+=this.getFromAdapter(store.adapter.application,"batchNamespace");
			}
            if(!queryParams){
				queryParams = {};
			}
			var scope =  store.$.cbScp(modelName, "headersForRequest"), args, ret = {method : (method)? method : ""};
			if(scope){
				args = store.$.consArg(type, queryParams, customData, actionName, key);
				ret.headers = store.$.cB(scope, args);
			}
			scope = store.$.cbScp(modelName, "buildURL");
			if(scope){
				args = store.$.consArg(modelName, type, queryParams, snapshot, url,actionName,customData, key);
				url = store.$.cB(scope, args);
			}
			scope = store.$.cbScp(modelName, "methodForRequest");
			if(scope){
				args = store.$.consArg(method, type, queryParams, customData, actionName, key);
				ret.method = store.$.cB(scope, args);
			}
            if(!store.$.makeBatch && Object.keys(queryParams).length){
				url+="?";
				var index = 0;
				for(var qKey in queryParams){
					if(index !== 0){
						url+="&";
					}
					var res = queryParams[qKey];
					if(res && typeof res == "object"){
						res = JSON.stringify(res);
					}
					url+=qKey+"="+encodeURIComponent(res);
					index++;
				}
			}
            if(adapter && adapter.withCredentials == true){
                ret.withCredentials = true;
            }
			ret.url = url;
			ret.qP = queryParams;
			return ret;
		},
		get : function(type, modelName, key, queryParams, cacheQuery, customData, cacheData){
			var mdl = store.modelFor(modelName), makeBatch = store.$.makeBatch;
			if(mdl){
				var urlObj = this.buildURL(type, "GET", modelName, key, undefined, queryParams,undefined,customData), self = this, xhr, res, rej;
				if(type == "findAll" && queryParams && store.model.cachedQueries && store.model.cachedQueries[modelName]){
					var cachedQueries = store.model.cachedQueries[modelName], sendData;
					for(var i=0; i<cachedQueries.length; i++){
						var params = cachedQueries[i].queryParams;
						if(this.compareObjects(params, queryParams, true)){
							sendData = [cachedQueries[i].data, "cache"];
							break;
						}
					}
					if(sendData){
						return new Promise(function(resolve, reject){
							if(makeBatch){
								store.$.addToCachedBatch(Array.isArray(sendData) ? sendData[0][modelName] : sendData);
							}
							resolve(sendData);
						});
					}
				}
				else if(type == "findRecord" && queryParams && store.model.cachedRecordQueries && store.model.cachedRecordQueries[modelName] && store.model.cachedRecordQueries[modelName][key]){
					var cachedQueries = store.model.cachedRecordQueries[modelName][key], sendData;
					for(var i=0; i<cachedQueries.length; i++){
						var params = cachedQueries[i].queryParams;
						if(this.compareObjects(params, queryParams,true)){
							sendData = [cachedQueries[i].data, "cache"];
							break;
						}
					}
					if(sendData){
						return new Promise(function(resolve, reject){
							if(makeBatch){
								store.$.addToCachedBatch(Array.isArray(sendData) ? sendData[0][modelName] : sendData);
							}
							resolve(sendData);
						});
					}
				}
				else{
					var scope = store.$.cbScp(modelName, (type == "findRecord" ? "reloadRecord" : "reloadAll"));
					if(scope){
						var records;
						if(type == "findRecord"){
							records = store.peekRecord(modelName,key);							
						}
						else if(type == "findAll"){
							records = store.peekAll(modelName);
						}
						if(!store.$.cB(scope, [records, queryParams, customData])){
							var toRet = {};
							toRet[modelName] = records;
							return new Promise(function(resolve, reject){
								if(makeBatch){
									store.$.addToCachedBatch(toRet[modelName]);
								}
								resolve([toRet, "cache"], "success", undefined, true);
							});
						}
					}
				}
				return new Promise(function(resolve, reject){
					res = resolve, rej = reject;
					var model = store.modelFor(modelName);
					var idbObj = model.idb;
					var processRequest = self.getFromAdapter(store.adapter[modelName],"processRequest"),payLoad, sendXHR = true;
					if(processRequest){
						sendXHR = false;
						var returnPromise = self.callGeneric(type,modelName,undefined,undefined,customData, queryParams,key,urlObj.url);
						if(returnPromise instanceof Promise){
							returnPromise.then(function(resp){
                                resp = (resp == "" ? JSON.parse("{}") : JSON.parse(resp));
								payLoad = self.getResponse(resp,modelName,type,key,urlObj);
								resolve([payLoad]);
							},function(message){
                                reject(message);
							});
						}
						else{
							sendXHR = true;
						}
					}
					var argsXHR = [modelName,type,key,urlObj,resolve,reject,"get",undefined,customData];
					var opts = { cQ : cacheQuery, cD : cacheData, customD : customData};
					if(makeBatch){
						store.adapter.$.constructBatch.apply(store.adapter.$, argsXHR).then(function(resObj){
							var payLoad = resObj.content;
							store.adapter.$.getSuccess(modelName,type,key,urlObj,undefined,resolve,reject,payLoad,resObj,undefined,opts);
							//resolve(payLoad);							
						},function(){
							store.adapter.$.getFailure(modelName,type,key,urlObj,undefined,resolve,reject,opts);
						});
					}
					else if(idbObj){
						store.adapter.$.getFromIDB(idbObj, modelName, type, queryParams, key, urlObj).then(function(payLoad){
							var scope =  store.$.cbScp(modelName, "idbResponse",1), args;
							if(scope){
								args = store.$.consArg(modelName, type, queryParams, key, payLoad);
								payLoad = store.$.cB(scope, args);
							}
							if(payLoad == false){
								store.adapter.$.sendXHR.apply(store.adapter.$, argsXHR).then(function(xhrReq){
									store.adapter.$.getSuccess(modelName,type,key,urlObj,xhrReq,resolve,reject,undefined,undefined,undefined,opts);
								}, function(xhrReq){
									store.adapter.$.getFailure(modelName,type,key,urlObj,xhrReq,resolve,reject,opts);
								});							
							}
							else{
								store.adapter.$.getSuccess(modelName,type,key,urlObj,undefined,resolve,reject,payLoad,undefined,"idb",opts);
							}
						},function(message){
							store.adapter.$.sendXHR.apply(store.adapter.$, argsXHR).then(function(xhrReq){
								store.adapter.$.getSuccess(modelName,type,key,urlObj,xhrReq,resolve,reject,undefined,undefined,undefined,opts);
							}, function(xhrReq){
								store.adapter.$.getFailure(modelName,type,key,urlObj,xhrReq,resolve,reject,opts);
							});							
						});
					}
					else if(sendXHR){
						store.adapter.$.sendXHR.apply(store.adapter.$, argsXHR).then(function(xhrReq){
							store.adapter.$.getSuccess(modelName,type,key,urlObj,xhrReq,resolve,reject,undefined,undefined,undefined,opts);
						},function(xhrReq){
							store.adapter.$.getFailure(modelName,type,key,urlObj,xhrReq,resolve,reject,opts);
						});
					}
				});
				
			}
			else {
				return Promise.reject({code : "ERR19", message : Lyte.errorCodes.ERR19, data:modelName});
			}
		},
		constructBatch:function(modelName,type,key,urlObj){
			return new Promise(function(resolve, reject){
				var batch = store.$.currentBatch;
				var q = store.$.batch[batch] = store.$.batch[batch] || [];
				var pro = store.$.batchPromise[batch] = store.$.batchPromise[batch] || []; 
				var batchObj = {};
				batchObj.method = urlObj.method;
				batchObj.uri = "/" + urlObj.url;
				batchObj.parameters = urlObj.qP;
				batchObj.content = typeof urlObj.data == "string" ? JSON.parse(urlObj.data) : undefined;
				q.push(batchObj);
				pro.push({resolve:resolve,reject:reject});	
			});
		},
		getFromIDB : function(idbObj ,modelName, type, queryParams,key, urlObj, xhr){
			return new Promise(function(resolve, reject){
				if(worker){
					var reqType = idbObj.queryCache ? "getCachedData" : type == "findAll" ? "getAll" : "get";
					var obj = {resolve : resolve, reject: reject, type:reqType, model:modelName, req:type, key:key};
					if(reqType == "getCachedData"){
						obj.queryParams = queryParams;
					}
					LyteIDB.postMessage(obj);
				}else{
					reject();
				}
			});
		},
		sendXHR:function(modelName,type,key,urlObj,resolve,reject,xhrType,data,customData){
			var self = this;
			return new Promise(function(res, rej){
				var results;	
				if(type != "create" && type != "createRecord"){
					results = store.adapter.$.requestHandle(modelName,type,key,urlObj,"add");
				}
				if(results instanceof Promise){
					return rej();
				}
				var xhr = new XMLHttpRequest();
				xhr.open(urlObj.method, urlObj.url, true);
				var scope =  store.$.cbScp(modelName, "parseRequest"), args, resp;
				if(scope){
					args = store.$.consArg(type, modelName, xhr ,urlObj ? urlObj.qP : undefined, key, customData);
					resp = store.$.cB(scope, args);
				}
				for(var header in urlObj.headers){
					xhr.setRequestHeader(header, urlObj.headers[header]);
				}
				xhr.withCredentials = (urlObj.withCredentials)?true:false;
				store.emit("beforeRequest", [xhr, modelName, type, key, urlObj.qP]);
				xhr.send(urlObj.data);
				xhr.onreadystatechange = function(){
					if(xhr.readyState == 4){
						if(type != "create" && type != "createRecord"){
							store.adapter.$.requestHandle(modelName,type,key,urlObj);
						}
						store.emit("afterRequest",[xhr, modelName, type, key, urlObj.qP]);
						if(xhr.status.toString()[0] == "2" || xhr.status.toString()[0] == "3"){
							return res(xhr);
						}
						else{
							return rej(xhr);
						}
					}
				}
			});
		},
		getSuccess:function(modelName,type,key,urlObj,xhr,resolve,reject,response,resObj,from,opts){
			var resp = response, req = xhr, batchIndex, batch, customD = opts.customD;
			if(from != "idb"){
				if(req){
					resp = req.responseText;
					resp = (resp == "" ? JSON.parse("{}") : JSON.parse(resp));
				}
				if(resObj){
					batchIndex = resObj.index;
					batch = resObj.batch;
					req = resObj.resp;
				}
				if(req){
					var scope =  store.$.cbScp(modelName, "parseResponse"), args;
					if(scope){
						args = store.$.consArg(type, modelName, req, resp, urlObj ? urlObj.qP : undefined, key, customD, opts);
						resp = store.$.cB(scope, args);
						if(resp instanceof Promise)
						{
							return this.handleParseResponsePromise(resp,modelName,type,key,urlObj,xhr,undefined,batchIndex,batch,resolve,reject,opts);
						}
					}
				}
				return this.findParseRequestPromise(resp,modelName,type,key,urlObj,xhr,batchIndex,batch,resolve);
				//resp = this.getResponse(resp,modelName,type,key,urlObj,xhr);
			}
			var resArr = xhr ? [resp, xhr.statusText, xhr] : (batchIndex != undefined) ? [resp,"batch",{index:batchIndex,batch:batch}] : [resp];
			resolve(resArr);
		},
		getFailure:function(modelName,type,key,urlObj,xhr,resolve,reject,opts){
			var customD = opts.customD;
			if(xhr){
				var scope =  store.$.cbScp(modelName, "parseResponse"), args, resp,response = xhr.responseText;
				if(response){
					response = (response == "" ? JSON.parse("{}") : JSON.parse(response));
				}
				if(scope){
					args = store.$.consArg(type, modelName, xhr, response ,urlObj ? urlObj.qP : undefined, key, customD, opts);
					resp = store.$.cB(scope, args);
					if(resp instanceof Promise)
					{
						return this.handleParseResponsePromise(resp,modelName,type,key,urlObj,xhr,undefined,undefined,undefined,resolve,reject,opts);
					}
				}
			}
			reject(xhr);
		},
        getResponse:function(resp,modelName,type,key,urlObj,xhr,customData,opts){
            resp = store.serializer.$.normalizeResponse(modelName, type, resp, key, xhr ? xhr.status : xhr, urlObj,customData,opts);
            var scope = store.$.cbScp(modelName, "extractMeta",1);
            var payLoad = resp,args,qP = urlObj ? urlObj.qP : undefined;
            if(typeof payLoad != "object"){
                payLoad = JSON.parse(payLoad);
            }
            if(scope){
				args = store.$.consArg(payLoad,modelName,type,qP,customData,opts);
				var metaRes = store.$.cB(scope, args);
				if(!store.$.isEmpty(metaRes)){
					payLoad.meta = metaRes;
				}
			}
			var keys = Object.keys(payLoad);
			var len = keys.length; 
            if(len){				
				scope = store.$.cbScp(modelName, "payloadKey", 1);
				if(scope){
					args = store.$.consArg(modelName,type,key,qP,customData,opts);
					var plKey = store.$.cB(scope, args);
					if(plKey && plKey != modelName){
						var temp = payLoad[plKey];
						payLoad[modelName] = temp;
						delete payLoad[plKey];
					}
				}
                scope = store.$.cbScp(modelName, "deserializeKey",1);
                if(scope){
					Lyte.warn("LD08", "deserializeKey", "callback", "Please use payloadKey callback instead");
					if(len > 2){
						Lyte.error("LD09");
					}
						var index = 0;
						if(len == 2 && keys[0] == "meta"){
							index = 1;
						}
						args = store.$.consArg(modelName,type);
						var deserializeKey = store.$.cB(scope, args), rec = payLoad[keys[index]];
						delete payLoad[keys[index]];
						payLoad[deserializeKey] = rec;
					// }
					// else if(len > 2){
					// 	console.error("Couldn't resolve using deserializekey, since there are more than 2 keys in the payLoad",modelName,type,Object.assign({},payLoad));
					// }
				}
//					store.serializer.$.buildJSON(modelName, type, payLoad, key, xhr.status, urlObj.headers);
                store.serializer.$.normalize(modelName, type, payLoad, key, xhr ? xhr.status : xhr, urlObj.headers, customData, opts);
            }
            return payLoad;
		},
		create : function(modelName, data, isSingleRecord, customData, qP){
			var type= isSingleRecord ? "createRecord": "create", partialObj = new Map();
			var urlObj = this.buildURL(type, "POST", modelName, undefined, data,qP,undefined,customData);
			var changedData = store.$.toJSON(modelName, data, undefined, "create", partialObj);
			// store.$.removeNotDefinedKeys(store.modelFor(modelName), changedData);
			this.sendingData(modelName, changedData, urlObj, type, customData, data);
			return this.handleRequest(urlObj, modelName, data, type, changedData, customData, partialObj);
		},
		put : function(modelName, data, record, isSingleRecord,customData, qP){
			var model = store.model[modelName], bK = model.bK , isComp = model.isComp;
			var type = (isSingleRecord) ? "updateRecord" : "update", partialObj = new Map(), key = isSingleRecord ? (isComp && bK ? record[bK] : record.$.pK) : undefined;
			var urlObj = this.buildURL(type, "PATCH", modelName, key, data,qP,undefined,customData);
			var updatedData = store.$.toJSON(modelName, data, undefined, undefined, partialObj);
            // store.$.removeNotDefinedKeys(store.modelFor(modelName), updatedData);
			this.sendingData(modelName, updatedData, urlObj, type, customData, record);
			return this.handleRequest(urlObj, modelName, record, type, updatedData, customData, partialObj, key);
		},
		del : function(modelName, data, isSingleRecord, destroy, customData, qP){
			var model = store.model[modelName], bK = model.bK , isComp = model.isComp;
			var type = destroy || "deleteRecord";
			var key = isSingleRecord ? (isComp && bK ? data[bK] : data.$.pK) : undefined;
			var urlObj = this.buildURL(type, "DELETE", modelName, key, data,qP,undefined,customData);
			var ids = [];
			if(!isSingleRecord){
				ids = data.map(function(val){
					return val.$.pK;
				});				
			}
			var pkVal = (isSingleRecord) ?  (data ? data.$.pK : undefined) : ids;
			this.sendingData(modelName, pkVal, urlObj, type, customData, data);
			return this.handleRequest(urlObj, modelName, data, type, pkVal, customData, undefined, key);
		},
		sendingData:function(modelName,data,urlObj,type,customData,snapshot){
			var scope = store.$.cbScp(modelName, "serializeKey",1);
			var serializeKey = modelName;
			var payload = {}, qP = urlObj ? urlObj.qP : undefined,tempObj={};
			for (var key in urlObj){
				tempObj[key] = urlObj[key];
			}
			tempObj.type = type;
			if(scope){
				var args = store.$.consArg(modelName,type,customData,qP);
				serializeKey = store.$.cB(scope, args);
			}
			data = this.serializeRecords(modelName,data,snapshot,tempObj);
			if(!serializeKey){
				payload = data;
			}
			else if(Array.isArray(data) || typeof data == "object" || Lyte.isRecord(data)){
				payload[serializeKey] = data;
			}
			var scope = store.$.cbScp(modelName, "serialize",1);
			if(scope){
				var args = store.$.consArg(type,payload,snapshot,customData,modelName,qP);
				payload = store.$.cB(scope, args);
			}
            if(type !== "deleteRecord" && type !== "destroyRecord" ){
				urlObj.data = payload;				
			}
			else if(scope){
				if(payload && payload !== undefined && payload !== null && payload !== ''){
					urlObj.data = payload;
				}
			}
		},
		serializeRecords:function(modelName,data,records,urlObj){
			var model = store.modelFor(modelName),
			fields = model.fieldList;
			if(!records){
				records = store.peekRecord(model._name,data.$.pK);
			}
			if(Array.isArray(data)){
				for(var index1=0;index1<data.length;index1++){
					var record = data[index1];
					if(typeof record === "object")
					{
						this.serializeSingleRecord(model._name,record,records[index1],urlObj,fields);
					}
				}
			}
			else if(typeof data === "object"){
				this.serializeSingleRecord(model._name,data,records,urlObj,fields);
			}
			return data;
		},
		serializeSingleRecord:function(model_name,data,record,urlObj,fields){
			var scope = store.$.cbScp(model_name,"serializeRecord",1);
			if(scope){
				var args = store.$.consArg(urlObj,data,record);
				data = store.$.cB(scope,args);
			}
			for(var key in fields){
				var field = fields[key];
				if(field.type == "relation" && data[field.relKey]){
					if(field.relType === "hasMany" && field.opts && field.opts.serialize && field.opts.serialize == "partial"){
						for(var index1=0;index1<data[field.relKey].length;index1++){
							data[field.relKey][index1] = this.serializeRecords(field.relatedTo,data[field.relKey][index1],undefined,urlObj);
						}
					}
					else {
						data[field.relKey] = this.serializeRecords(field.relatedTo,data[field.relKey],record[field.relKey],urlObj);
					}
				}
			}
		},
		handleAction:function(actionName,model,record,customData,qP){
			var pkVal;
			if(record && Lyte.isRecord(record)){
				pkVal = record.$.get(model._pK);				
			}
			var modelName = model._name;
			var method = "action";
			var urlObj = this.buildURL(method, "POST", model._name, pkVal, record, qP, actionName,customData);
			var scope = store.$.cbScp(model._name, "serialize", 1);
			if(scope){
				var args = store.$.consArg(actionName,undefined,record,customData,modelName,qP);
				urlObj.data = store.$.cB(scope, args);
			}
			return this.handleRequest(urlObj, model._name, undefined, method,undefined,customData);
		},
		handleRequest:function(urlObj,modelName,data,type,changedData,customData,partialObj,key){
			if(urlObj.data && (typeof urlObj.data == "object" || Lyte.isRecord(urlObj.data) || Array.isArray(urlObj.data)) && !(urlObj.data instanceof FormData)){
				urlObj.reqData = Lyte.deepCopyObject(urlObj.data);
				urlObj.data = JSON.stringify(urlObj.data);
			}
			var self = this, xhr, key;
			return new Promise(function(resolve, reject){
				var processRequest = self.getFromAdapter(store.adapter[modelName],"processRequest"),sendXHR = true;
				var makeBatch = store.$.makeBatch;
				if(processRequest){
					sendXHR = false;
					var returnPromise = self.callGeneric(type,modelName,urlObj.data,data,customData,urlObj?urlObj.qP:undefined,key,urlObj.url),response;
					if(returnPromise instanceof Promise){						
						returnPromise.then(function(resp){
                            resp = (resp == "" ? JSON.parse("{}") : JSON.parse(resp));
							response = self.genericResponse(resp,modelName,type,data,urlObj);
							if(response == false){
								reject("Data is not in the format as store expects in "+modelName+" for type- "+type);								
							}
							resolve(response);
						},function(message){
							reject(message);
						});
					}
					else{
						sendXHR = true;
					}
				}
				if(makeBatch){
					store.adapter.$.constructBatch(modelName,type,key,urlObj).then(function(respObj){
						var resp = respObj.content; 
						store.adapter.$.handleSuccess(modelName, type, xhr, data, urlObj, resolve, resp, respObj,undefined,reject,key,customData);
						// resolve(resp);
					},function(){
						store.adapter.$.handleFailure(modelName, type, xhr, data, urlObj, resolve,undefined,undefined,undefined,reject,key,customData);
					});
				}
				else if(sendXHR){
					var argsXHR = [modelName,type,key,urlObj,resolve,reject,"other",data,customData];
					store.adapter.$.sendXHR.apply(store.adapter.$, argsXHR).then(function(xhrReq){
						store.adapter.$.handleSuccess(modelName, type, xhrReq, data, urlObj, resolve, undefined, undefined, partialObj,reject,key,customData);					
					},function(xhrReq){
						store.adapter.$.handleFailure(modelName, type, xhrReq, data, urlObj, resolve, undefined, undefined,partialObj,reject,key,customData);
					});
				}
			});
			
		},
		handleSuccess:function(modelName, type, xhr, data, urlObj, resolve, resp, respObj, partialObj, reject, key, customData){
			var resp = resp ? resp : xhr.responseText, response, req, batchIndex, batch;
			resp = (resp == "" ? JSON.parse("{}") : typeof resp == "string" ? JSON.parse(resp) : resp);
			if(xhr){
				req = xhr;
			}
			if(respObj){
				batchIndex = respObj.index;
				batch = respObj.batch;
				req = respObj.resp;
			}
			if(req){
				var scope =  store.$.cbScp(modelName, "parseResponse"), args;
				if(scope){
					args = store.$.consArg(type, modelName, req, resp, urlObj ? urlObj.qP : undefined, key,customData);
					resp = store.$.cB(scope, args);
					if(resp instanceof Promise)
					{
						return this.handleParseResponsePromise(resp,modelName,type,data,urlObj,xhr,partialObj,batchIndex,batch,resolve,reject);
					}
				}
			}
			return this.otherParseRequestPromise(resp,modelName,type,data,urlObj,xhr,partialObj,batchIndex,batch,resolve,reject);
			// response = this.genericResponse(resp,modelName,type,data,urlObj,xhr,partialObj);
			// if(response == false){
			// 	reject("Response is not in the format as store expects in model, "+modelName+" for type "+type);
			// }
			// else{
			// 	if(batchIndex != undefined){
			// 		store.$.batchResponse[batch][batchIndex] = response;
			// 	}
			// 	if(type != "action"){
			// 		this.updateIDB(modelName,type,data);
			// 	}
			// 	resolve(response);
			// }
		},
		handleFailure:function(modelName, type, xhr, data, urlObj, resolve, resp, respObj, partialObj,reject,key,customData){
			if(xhr){
				var scope =  store.$.cbScp(modelName, "parseResponse"), args,response = xhr.responseText;
				if(response){
					response = (response == "" ? JSON.parse("{}") : JSON.parse(response));
				}
				if(scope){
					args = store.$.consArg(type, modelName, xhr, response, urlObj ? urlObj.qP : undefined, key, customData);
					resp = store.$.cB(scope, args);
					if(resp instanceof Promise)
					{
						return this.handleParseResponsePromise(resp,modelName,type,data,urlObj,xhr,partialObj,undefined,undefined,resolve,reject,customData);
					}
				}	
			}
			reject(xhr);
		},
		updateIDB:function(modelName,type, data){
			if(data && !Array.isArray(data)){
				data = [data];
			}
			var model = store.model[modelName];
			if(!model.hasOwnProperty("idb") || (model.idb && !model.idb.hasOwnProperty("queryCache"))){
				return;
			}
			var q =	store.$.idbQ2[modelName] = store.$.idbQ2[modelName] || [];
			if(data){
				switch(type){
					case "update":
					case "updateRecord":
					{
						data.forEach(function(item, index){
							if(item && Lyte.isRecord(item)){
								var model = store.model[modelName];
								var relations = model.relations;
								var parent = item.$.parent;
								if(parent){
									var pModel = parent.$.model._name;
									var parentQ = store.$.idbQ2[pModel] = store.$.idbQ2[pModel] || [];
									parentQ.push({type:"updateRecord",model:pModel,data:parent.$.toJSON(true)});
								}
								else{
									q.push({type:"updateRecord",model:modelName,data:item.$.toJSON(true)});
								}
								store.adapter.$.updateRelationsIDB(item, relations);
								store.$.addToIDBonSave(modelName,item);
							}
						});
						break;
					}
					case "delete":
					case "deleteRecord":
					case "destroyRecord":
					{
						var parent, pModel, parentQ;
						var pK = store.modelFor(modelName)._pK;
						data.forEach(function(item, index){
							if(item && Lyte.isRecord(item)){
								var model = store.model[modelName];
								var relations = model.relations;
								parent = item.$.parent;
								if(parent){
									pModel = parent.$.model._name;
									parentQ = store.$.idbQ2[pModel] = store.$.idbQ2[pModel] || [];
									parentQ.push({type:"updateRecord",model:parent.$.model._name,data:parent.$.toJSON(true)});
								}
								else{
									q.push({type:"deleteRecord",model:modelName,key:item.$.pK});
								}
								store.adapter.$.updateRelationsIDB(item, relations);
								store.$.removeOnSave(modelName,item.$.pK);
							}
						});
						break;
					}
					case "create":
					case "createRecord":{
						data.forEach(function(item, index){
							if(item && Lyte.isRecord(item)){
								var model = store.model[modelName];
								var relations = model.relations;
								q.push({type:"createRecord",model:modelName,data:item.$.toJSON(true)});
								store.adapter.$.updateRelationsIDB(item, relations);
								store.$.addToIDBonSave(modelName,item);
							}
						});
						break;
					}
				}
			}
		},	
		updateRelationsIDB : function(item, relations){
			for(var key in relations){
				var rel = relations[key];
				rel.forEach(function(obj){
					var relKey = obj.relKey;
					var relModel = obj.relatedTo;
					var relQ = store.$.idbQ2[relModel] = store.$.idbQ2[relModel] || [];										
					var data = item[relKey];
					if(data){
						if(Array.isArray(data)){
							data.forEach(function(rec){
								if(Lyte.isRecord(rec) && !rec.$.parent && rec.$.inIDB){
									relQ.push({type:"updateRecord",model:relModel,data:rec.$.toJSON(true)});
								}
							});
						}
						else if(Lyte.isRecord(data) && !data.$.parent && data.$.inIDB){
							relQ.push({type:"updateRecord",model:relModel,data:data.$.toJSON(true)});
						}
					}
				});
			}
		},
        callGeneric : function(type, modelName,data,record,customData,queryParams,key,url){
			var scope = store.$.cbScp(modelName, "processRequest"),result;
			if(scope){
				var args = store.$.consArg(type,modelName,data,record,customData,queryParams,key,url);
				result = store.$.cB(scope, args);
			}
			return result;
		},
		genericResponse:function(resp,modelName,type,data,urlObj,xhr,partialObj,customData){
            var response = resp;
            var scope,args,qP = urlObj ? urlObj.qP : undefined;
			scope = store.$.cbScp(modelName, "extractMeta",1);
			if(scope){
				args = store.$.consArg(response,modelName,type,qP,customData);
				var metaRes = store.$.cB(scope, args);
				if(!store.$.isEmpty(metaRes)){
					response.meta = metaRes;
				}
			}
			if(response && type != "action"){
				response = store.serializer.$.buildJSON(modelName, type, response, Lyte.isRecord(data) ? data[store.modelFor(modelName)._pK] :undefined ,xhr ? xhr.status : undefined, urlObj, customData);
				scope = store.$.cbScp(modelName, "payloadKey",1);
				if(scope){
					args = store.$.consArg(modelName,type,undefined,qP,customData);
					var plKey = store.$.cB(scope, args);
					if(plKey && plKey != modelName){
						var temp = response[plKey];
						response[modelName] = temp;		
						delete response[plKey];
					}			
				}					
				var keys = Object.keys(response);
				var len = keys.length;
				scope = store.$.cbScp(modelName, "deserializeKey",1);
				if(scope){
					Lyte.warn("LD08", "deserializeKey", "callback", "Please use payloadKey callback instead");
					if(len > 2){
						Lyte.error("LD09");
					}
						var index = 0;
						if(keys[0] == "meta"){
							index = 1;
						}
						var args = store.$.consArg(modelName,type), deserializeKey = store.$.cB(scope, args), rec = response[keys[index]];
						delete response[keys[index]];
						response[deserializeKey] = rec;	
				}	
				if(type != "action"){
					this.handleResponse(data, response[modelName], store.modelFor(modelName), type, partialObj);
				}
			}
			return response;
		},
		removePartialKeys:function(data,model,pK){
			var rels = model.relations;
			var pkVal = data.$.pK;
			for(var key in rels){
				var relArr = rels[key];
				relArr.forEach(function(rel){
					var relObj = {}, inv;
					//self.$scope.$.getRelations(model, rel.relKey, self.$scope.model[rel.relatedTo], relObj);
					inv = store.$.getBackwardRel(model,rel,store.model[rel.relatedTo]);
					// if(relObj){
					// 	inv = relObj;
					// }
					if(inv&&inv.relType=="hasMany"&&inv.opts&&inv.opts.serialize=="partial"){
						var relKey = rel.relKey;
						var invRelKey = inv.relKey;
						var invObj = data[relKey];
						if(invObj){
							if(Array.isArray(invObj)){
								invObj.forEach(function(invRelRec){
									var invRelObj = invRelRec[invRelKey];
									if(invRelObj && invRelObj.partial && invRelObj.partial.get(pkVal)){
										invRelObj.partial.delete(pkVal);
									}		
								});
							}
							else if(invObj[invRelKey]){
								var invRelObj = invObj[invRelKey];
								if(invRelObj && invRelObj.partial && invRelObj.partial.get(pkVal)){
									invRelObj.partial.delete(pkVal);
								}
							}
						}
					}
				});
			}
		},
        checkResponse:function(data , model , response , pK , partialObj){
			//var rawData = Lyte.isRecord(data) ? data.$.toJSON() : undefined;
			this.removePartialKeys(data, model, pK);
			if(partialObj && Object.keys(partialObj).length){
				//this.handleRelResponse( model, partialObj, data); 
				this.mergeNewDataKeys( partialObj, data, response );
			}
			var dirtyId, mergeDone = false;
			if(data.$.isNew){
				var result;
				var pKeys = model._pK.split(',');
				dirtyId = data.$.pK;
				pKeys.forEach(function(item){
					if(data.hasOwnProperty(item) && response.hasOwnProperty(item)){
						// dirtyId = data[item];
						store.$.cmpSet( data, item, response[item], true );
					}
				});
				data.$.pK = store.$.getpKVal(data);
				result = store.$.validateAndMerge(model, response, partialObj);
				mergeDone = true;	
				store.$.cmpSet(data.$, "isNew", false);					
				// data.$.isNew = false;
				if(result == false){
					Lyte.error("LD01", response);
				}
            }
            if(data.$.isModified){
				dirtyId = !dirtyId ? data.$.pK : dirtyId;
				if(!data.$.isDeleted && response && !mergeDone){
					var result =  store.$.validateAndMerge(model, response, partialObj);
					mergeDone = true;
					if(result == false){
						Lyte.error("LD15", response);
					}						
				}
				store.$.cmpSet(data.$, "isModified", false);
				data.$._attributes = {};
            }
            if(model.dirty.length){
                store.$.deleteFromArray(model.dirty, dirtyId);
            }
            if(data.$.isDeleted){
				store.$.cmpSet(data.$, "isDeleted", false);
                // data.$.isDeleted = false;
                var deleted = model._deleted, index = store.$.getIndex(deleted, pK, data.$.pK);
                model._deleted.splice(index,1);
			}
			if(partialObj && Object.keys(partialObj).length && response && !mergeDone){
				var result =  store.$.validateAndMerge(model, response, partialObj);
				if(result == false){
					Lyte.error("LD15", response);
				 }						
			}
            var dirty = data.$.isDirty();
            for(var j=0; j < dirty.length ;j++){
                var records = data[dirty[j]];
                if(Array.isArray(records)){
                    for(var k=0;k<records.length;k++){
						if(Lyte.isRecord(records[k])){
							store.$.cmpSet(records[k].$, "isModified", false);
						}
						// records[k].$.isModified = false;
                    }
                }
                else if(Lyte.isRecord(records)){
					store.$.cmpSet(records.$, "isModified", false);
                    // records.$.isModified = false;
                }
			}
			data.$.undoStack = [];
			data.$.redoStack = [];
			store.$.clrRecErr(data.$);  
			store.$.removeDeepNest(data);
		},
		mergeNewDataKeys:function(partialObj, data, response){
			if(partialObj.partial == true){ //true checked since partial key can come in this 
				var self = this;
				if(Array.isArray(partialObj)){				
					partialObj.forEach(function(item, index){
						var pK = store.model[item.model]._pK;
						var ind = store.$.getIndex(data, pK, item.pkVal);
						self.mergeNewDataKeys(item, data ? data[ind] : undefined, response ? response[index] : undefined);
						data.partial.delete(item.pkVal);
					});
				}
			}
			else if(partialObj && partialObj.type){
				if(partialObj.type == "added"){
					var pK = store.model[partialObj.model]._pK;
					var pKeys = pK.split(',');
					var oldPk = data.$.pK;
					pKeys.forEach(function(item, ind){
						if(!response || !response.hasOwnProperty(item)){
							Lyte.error("LD16", data);
							return;
						}	
						store.$.cmpSet(data, item, response[item], true)
					});
					data.$.pK = store.$.getpKVal(data);
					// data.$.isNew = false;
					store.$.cmpSet(data.$, "isNew", false);
					store.$.deleteFromArray(store.model[partialObj.model].dirty, oldPk);
				}
				else if(partialObj.type == "modified" || partialObj.type == "related"){
					store.$.cmpSet(data.$, "isModified", false);
					// data.$.isModified = false;
					data.$._attributes = {};
					store.$.deleteFromArray(store.model[partialObj.model].dirty, data.$.pK);
				}
				else if(partialObj.type == "removed"){
					var model = store.model[partialObj.model];
					var deleted = model._deleted;
					var pK = model._pK;
					var pkVal = partialObj.pkVal;
					var index = store.$.getIndex(deleted, pK, pkVal);
					if(index != -1 && Array.isArray(deleted)){
						var rec = deleted[index];
						store.$.cmpSet(rec.$, "isDeleted", false);
						model._deleted.splice(index,1);
					}
					if(partialObj.parent){
						partialObj.parent.$.partial = {};
					}
					return;
				}
				store.$.clrRecErr(data.$); 
				if(partialObj.type != "removed"){
					for(var key in partialObj){
						var part = partialObj[key];
						this.mergeNewDataKeys(partialObj[key], data[key], response ? response[key] : undefined);
					}
				}
				if(data.$.partial && Object.keys(data.$.partial)){
					data.$.partial = new Map();
				}
				data.$.undoStack = [];
				data.$.redoStack = [];
			}
			else{
				if(Array.isArray(partialObj)){
					var self = this;
					partialObj.forEach(function(item, index){
						self.mergeNewDataKeys(item, data[index], response ? response[index] : undefined);
					});
				}
				else if(typeof partialObj == "object"){
					for(var key in partialObj){
						var part = partialObj[key];
						this.mergeNewDataKeys(partialObj[key], data[key], response ? response[key] : undefined);
					}
				}
			}
		},
		handleResponse:function(data, response, model, type, partialObj){
			var pK = model._pK, partial, obj, pkVal;
			if(Array.isArray(data)){
				for(var i=0; i<data.length; i++){
					obj = data[i], pkVal = obj.$.pK;
					partial = partialObj && obj && pkVal ?  partialObj.get(pkVal) : undefined;
					this.checkResponse(data[i], model, Array.isArray(response) ? response[i] : response, pK, partial);	
				}
			}
			else{
				pkVal = data.$.pK;
				partial = partialObj && data && pkVal ?  partialObj.get(pkVal) : undefined;
				this.checkResponse(data, model, response, pK, partial);	
			}
		},
        /*Compares two objects
        params - obj1, obj2
        return true/false
        */
		compareObjects : function(obj1, obj2, qP){
            if(!(obj1 instanceof Object) || !(obj2 instanceof Object)){
                return false;
            }
			if(Object.keys(obj1).length != Object.keys(obj2).length){
				return false;
			}
			for(var key in obj1){
				var val1 = obj1[key], val2 = obj2[key];
				if(qP && Array.isArray(val1) && Array.isArray(val2)){
					if(val1.length != val2.length){
						return false;
					}
					var len = val1.length;
					for(var i=0; i<len; i++){
						if(val1[i] != val2[i]){
							return false;
						}
					}
				}
				else if(val2 == undefined || val1 != val2){
					return false;
				}
			}
			return true;
		},
		handleBatchPromise:function(obj){
			var response = obj.response;
			var batch = obj.batch;
			//callback
			scope = store.$.cbScp("application", "normalizeResponse",1);
			if(scope){
				args = store.$.consArg(undefined,"batch",obj.response);
				response = store.$.cB(scope, args);
			}
			var resp = response.batch_requests;
			resp.forEach(function(item, index){
				var pro = store.$.batchPromise[batch][index];
				var code = item.status.toString()[0];
				if(code == "2"){
					pro.resolve({content:item.content,index:index,batch:batch,resp:item});
				}
				else if(code == "4" || code == "5"){
					store.$.batchResponse[batch][index] = undefined;
					pro.reject({content:item.content,index:index,batch:batch,resp:item});
				}
			});
			// obj.resolve(response);
			delete store.$.batch[batch];
			delete store.$.batchPromise[batch];
		},
		handleParseResponsePromise:function(response,modelName,type,key,urlObj,xhr,partialObj,batchIndex,batch,resolve,reject,opts)
		{
			response.then(function(payload){
				if(type == "findRecord"	|| type == "findAll")
				{
					store.adapter.$.findParseRequestPromise(payload,modelName,type,key,urlObj,xhr,batchIndex,batch,resolve,opts);
				}
				else
				{
					store.adapter.$.otherParseRequestPromise(payload,modelName,type,key,urlObj,xhr,partialObj,batchIndex,batch,resolve,reject,opts ? opts.customD : undefined);
				}
			},function(payload){	
				reject(xhr);
			});
		},
		findParseRequestPromise:function(payload,modelName,type,key,urlObj,xhr,batchIndex,batch,resolve,opts){
			var options = Object.assign({},opts);
			delete options.customD;
			var resp = this.getResponse(payload,modelName,type,key,urlObj,xhr, opts ? opts.customD : undefined, options);
			var resArr = xhr ? [resp, xhr.statusText, xhr] : (batchIndex != undefined) ? [resp,"batch",{index:batchIndex,batch:batch}] : [resp];
			resolve(resArr);
		},
		otherParseRequestPromise:function(resp,modelName,type,data,urlObj,xhr,partialObj,batchIndex,batch,resolve,reject,customData){
			var response = this.genericResponse(resp,modelName,type,data,urlObj,xhr,partialObj,customData);
			if(response == false){
				reject("Response is not in the format as store expects in model, "+modelName+" for type "+type);
			}
			else{
				if(batchIndex != undefined){
					store.$.batchResponse[batch][batchIndex] = response;
				}
				if(type != "action"){
					this.updateIDB(modelName,type,data);
				}
				resolve(response);
			}
		},
		requestHandle:function(modelName,type,key,urlObj,operation,record){
			var temp_obj={"method":urlObj.method,"url":urlObj.url,"qP":urlObj.qP},req_data;
			if(key){
				temp_obj.key = key;  
			}
			if(urlObj.data){
				temp_obj.data = urlObj.reqData;
			}
			if(store.$.request && store.$.request[type]&&store.$.request[type][modelName])
			{
				req_data = store.$.request[type][modelName];
				var res = false;
				for(var i=0;i<req_data.length;i++){		
					var object = req_data[i];
					if(this.compareReqObjects(object,temp_obj))
					{	
						if(operation){
							res= true;
						}
						else{
							store.$.request[type][modelName].splice(i,1);
							return;
						}
					}
				}
				if(!res)
				{
					store.$.request[type][modelName].push(temp_obj);
				}
				else
				{
					return Promise.resolve();
				}
			}
			else if(operation){
				store.$.request[type] = store.$.request[type] || {} ;
				store.$.request[type][modelName] = store.$.request[type][modelName] || [] ;
				store.$.request[type][modelName].push(temp_obj);
			}
		},
		compareReqObjects:function(obj1,obj2)
		{
			if(Object.keys(obj1).length != Object.keys(obj2).length){
				return false;
			}
			var keys = Object.keys(obj1),i;
			for(i=0;i<keys.length;i++){
				var key=keys[i]; val1 = obj1[key], val2 = obj2[key];
				if(key == "qP"){
					var result = store.adapter.$.compareObjects(val1,val2,true);
					if(!result)
					{
						return false;
					}
				}
				else if(val1 instanceof Object && val2 instanceof Object){
					var check = store.adapter.$.compareReqObjects(val1,val2);
					if(!check)
					{
						return false;
					}
				}
				else if( val1 != val2){
					return false;
				}
			}
			return true;
		}
	}
}
store.$.defProp(store.adapter, "extends", function value(adapterName,opts,parent){
	return store.$.scExtd("adapter",adapterName,opts,parent);
}, false);

function Serializer(opts,parent,name){
	for(key in opts){
		this[key] = opts[key];
	}
	var self = this;
	if(parent && parent.mixins && parent.mixins.length){
		parent.mixins.forEach(function(item,index){
			var mixin = Lyte.registeredMixins[item];
			for(var key in mixin){
				self[key] = mixin[key];
			}
		});
    }
    this.__extendedBy = [];
    var srz = store.serializer;
    if(srz.__toAddSuper && srz.__toAddSuper.hasOwnProperty(name)){
        var addSuper = srz.__toAddSuper[name];
        for(var i=0; i<addSuper.length; i++){
            var child = srz[addSuper[i]];
            if( child  && child.is == "serializer"){
                child.$super = this;
                this.__extendedBy.push(addSuper[i]);
                if(name != "application")
                {   
                    if(srz.__toAddSuper.application)
                    {
                        var index = srz.__toAddSuper.application.indexOf(child.__name);
                        if(index > -1)
                        {
                            srz.__toAddSuper.application.splice(index,1);
                        }
                    }
                    if(srz.application)
                    {
                        var index = srz.application.__extendedBy.indexOf(child.__name);
                        if(index > -1)
                        {
                            srz.application.__extendedBy.splice(index,1);
                        }
                    }
                }
            }
        }
        delete srz.__toAddSuper[name];
    }
    store.$.defProp(this, "is", "serializer");
    store.$.defProp(this, "__name", name);
}
Object.defineProperties(Serializer.prototype, {
    "super" : {
        value: function value(){
            return store.$.super.call(this,arguments);
        }
    },
    "extends" : {
        value: function value(name){
            store.$.extendCallback.call(this,store,"serializer",name);
        }
    }
});
store.serializer = {
    $:{
        buildJSON:function(modelName, type, payLoad, id, status, urlObj, customData){
            var headers = urlObj ?  urlObj.headers : undefined;
            var scope = store.$.cbScp(modelName, "normalizeResponse",1);
            var realData = payLoad;
            if(scope){
                var args = store.$.consArg(modelName, type, realData, id, status, headers, urlObj ? urlObj.qP : undefined,customData);
                realData = store.$.cB(scope, args);
            }
            var changed = false, recs;
            if(/^(findRecord|findAll)$/.test(type) || realData[modelName]){
                recs = realData[modelName];
                changed = true;
                scope = store.$.cbScp(modelName, "normalize",1);
                if(scope){
                    if(Array.isArray(recs)){
                        for(var i=0; i<recs.length; i++){
                            var args = store.$.consArg(modelName, type, recs[i], customData);
                            recs[i] = store.$.cB(scope, args);
                        }
                    }					
                    else{
                        var args = store.$.consArg(modelName, type, recs, customData);
                        recs = store.$.cB(scope, args);
                    }
                }
                realData[modelName] = recs;
            }
            return realData;
        },
        normalizeResponse : function(modelName,type,payLoad,id, status, urlObj,customData){
            var headers = urlObj ? urlObj.headers : undefined;
            var scope = store.$.cbScp(modelName, "normalizeResponse",1);
            var realData = payLoad;
            if(scope){
                var args = store.$.consArg(modelName, type, realData, id, status, headers, urlObj ? urlObj.qP : undefined,customData);
                realData = store.$.cB(scope, args);
            }
            return realData;
        },
        normalize : function(modelName,type,payLoad,id, status, headers, customData, opts){
            var realData = payLoad, changed = false;
            if(/^(findRecord|findAll)$/.test(type) || realData[modelName]){
                realData = realData[modelName];
                changed = true;
            }
            var scope = store.$.cbScp(modelName, "normalize",1);
            if(scope){
                if(Array.isArray(realData)){
                    for(var i=0; i<realData.length; i++){
                        var args = store.$.consArg(modelName, type, realData[i], customData, opts);
                        realData[i] = store.$.cB(scope, args);
                    }
                }					
                else{
                    var args = store.$.consArg(modelName, type, realData, customData, opts);
                    realData = store.$.cB(scope, args);
                }
            }
            if(changed){
                payLoad = {};
                payLoad[modelName] = realData;
            }
        } 
    }
}
store.$.defProp(store.serializer, "extends", function value(serializerName, opts, parent){
    return store.$.scExtd("serializer",serializerName,opts,parent);
});
Object.defineProperties(store,{
	triggerUpdate:{
		value: function value(modelName, pkVal, keys, qP, customData){
			var obj = {};
			var record = store.peekRecord(modelName, pkVal);
			if(record){
				var model = record.$.model;
				var pK = model._pK.split(',');
				var fields = keys || Object.keys(model.fieldList);	
				fields.forEach(function(item){
					obj[item] = record[item];
				});
				pK.forEach(function(item){
					obj[item] = record[item];
				});
				return store.adapter.$.put(modelName, obj, record, true, customData, qP);	
			}
			return Promise.reject("No such record found");
		}
	},
	batch:{
		value:function value(func){
			return new Promise(function(resolve, reject){
				store.$.makeBatch = true;
				store.$.batch = store.$.batch || {};
				store.$.batchPromise = store.$.batchPromise || {};
				var bLen = (store.$.currentBatch === undefined) ? Object.keys(store.$.batch).length : (store.$.currentBatch + 1);
				var batch = store.$.currentBatch = bLen;
				try{
					func();
				}
				catch(e){
					store.$.makeBatch = false;
					throw e;
				}
				store.$.makeBatch = false;
				var payLoad = {batch:store.$.batch[batch]};
				var urlObj = store.adapter.$.buildURL("batch", "POST", "application");
				var batchPl = payLoad.batch;
				if(store.$.isEmpty(batchPl) || batchPl == {}){
					if(store.$.cachedBatch && store.$.cachedBatch[batch] && store.$.cachedBatch[batch].length){
						var finalRes = store.$.handleCachedResponse(batch, []);
						return resolve(finalRes);
					}
					return resolve();					
				}
				var scope = store.$.cbScp("application", "serialize",1);
				if(scope){
					var args = store.$.consArg("batch",payLoad);
					payLoad = store.$.cB(scope, args);
				}
				var xhr = new XMLHttpRequest();
				xhr.open("POST", urlObj.url, true);
				for(var header in urlObj.headers){
					xhr.setRequestHeader(header, urlObj.headers[header]);
				}
				xhr.withCredentials = (urlObj.withCredentials)?true:false;
				xhr.send(JSON.stringify(payLoad));
				xhr.onreadystatechange = function(){
					if(xhr.readyState == 4){
						if(xhr.status.toString()[0] == "2" || xhr.status.toString()[0] == "3"){
							var resp = JSON.parse(xhr.responseText);
							store.$.batchResponse = store.$.batchResponse || {};
							store.$.batchResponse[batch] = [];
							store.adapter.$.handleBatchPromise({response:resp,batch:batch,resolve:resolve});
							setTimeout(function(){
								var finalRes = store.$.handleCachedResponse(batch, store.$.batchResponse[batch]);
								resolve(finalRes);
								store.$.batchResponse[batch] = [];
							},0);
						}
						else{
							setTimeout(function(){
								reject();
							},0);
						}
					}
				}					
			});
		}
	},
	pushPayload:{
		value:function value(modelName,data,deserialize){
			var model = store.modelFor(modelName);
			if(!model){
				Lyte.warn("LD02", "Model", modelName);
				return;
			}
			var result = data, len;
			if(deserialize){
                data = store.serializer.$.buildJSON(modelName,"pushPayload",data);
                var scope = store.$.cbScp(modelName, "deserializeKey",1);
				len = data ? Object.keys(data).length : undefined;
                if(scope){
					Lyte.warn("LD08", "deserializeKey", "callback", "Please use payloadKey callback instead");
					if(len > 2){
						Lyte.error("LD09");
					}
					var keys = Object.keys(data), index = 0;
					if(keys.length == 2 && keys[0] == "meta"){
						index = 1;
					}
					var args = store.$.consArg(modelName,"pushPayload"), deserializeKey = store.$.cB(scope, args), rec = data[keys[index]];
					delete data[keys[index]];
					data[deserializeKey] = rec;
					
                }
                result = data[modelName];
			}
			store.$.idbQ2Push(modelName,data,undefined,"pushPayload");
  			data = store.$.insertIntoStore(model, result, true);
			delete model.rel;
			return data;
		}
	},
	registerModel:{
		value:function value(name,fields,options){
			if(store.model.hasOwnProperty(name)){
				Lyte.warn("LD14", "Model", name);
				return;
			}
			var extend,actions,idb;
			if(options && typeof options == "object"){
				extend = options.extends || undefined;
				actions = options.actions || undefined;
				idb = options.idb || undefined;
			}
			if(extend){
				var parentFields = Object.assign({},store.model[extend].fieldList);
				for(var key in parentFields){
					if(parentFields[key].type == "relation"){
						delete parentFields[key];
					}
				}
				fields = Object.assign(fields, parentFields);
			}
			var model = store.model[name] = new Model(name, fields);
			if(extend){
				model.extend = extend;
				if(!model.extendedBy){
					model.extendedBy = {};
				}
				model.extendedBy[name] = true;
				var adp = store.adapter, srz = store.serializer; 
				if(!adp[name] && adp[extend]){
					adp[name] = adp[extend];
				}
				if(!srz[name] && srz[extend]){
					srz[name] = srz[extend];
				}
				if(store.model[extend].actions){
					if(actions == undefined){
						actions = {};
					}
					for(var key in store.model[extend].actions){
						if(!actions.hasOwnProperty(key)){
							actions[key] = store.model[extend].actions[key]; 							
						}
					}					
				}
			}
			if(actions){
				model.actions = actions;
			}
			if(idb){
				model.idb = idb;
			}
			return model;
		}
	},
    unregisterModel:{
      value:function(data){		  
		if(Array.isArray(data)){
			data.forEach(function(item){
				store.$.unregisterModel(item);
			});
		}
		else{
			store.$.unregisterModel(data);
		}
      }
	},
	unregisterAdapter:{
		value:function value(data){
			if(Array.isArray(data)){
				data.forEach(function(item){
					store.$.unRegCb("adapter", item);
				});
			}	
			else{
				store.$.unRegCb("adapter", data);
			}		
		}
	},
	unregisterSerializer:{	
		value:function value(data){
			if(Array.isArray(data)){
				data.forEach(function(item){
					store.$.unRegCb("serializer",item);
				});
			}
			else{
				store.$.unRegCb("serializer",data);
			}
		}
	},
	addField:{
		value:function value(modelName, key, type, options, ignoreValidation){
			var model = store.modelFor(modelName), fieldType;
			var obs = [];
			if(type && typeof type == "object"){
				store.$.registerField(model,key,type,obs);
				if(type.type == "relation"){
					fieldType = "relation"
				}
				else{
					fieldType = "attr"; 
				}
			}
			else{
				var field = Lyte.attr(type,options);
				store.$.registerField(model,key,field,obs);
			}
			if(fieldType != "relation" && !ignoreValidation){
					store.$.updateFieldValidation(model, key);
			}
			// else if(fieldType == "relation" ){
			// 	todo related data in records
			// }
		}
	},
	modelFor:{		
		value:function value(name){
			return store.model[name];
		}
	},
	createRecord:{
		value : function value(modelName, opts, withoutValidation){
			return this.$.newRecord(modelName, opts, withoutValidation);
		}
	},
	deleteRecord:{
		value : function value(modelName, key){
			this.$.removeFromStore(store.modelFor(modelName), key, undefined, true);
		}
	},
    /*
	 args - modelName, queryParams, cacheQuery, cacheData, customData
	 	cacheQuery - true/false (default false) -> whether to cache the request with queryparams or not
	 	cacheData - true/false (default true) -> whether to store the data in the store or not
	 	customData - some custom data that can be sent, which will be received as the last param in all adapter functions
	 */
	findAll:{
		value : function value(modelName, queryParams, cacheQuery,cacheData,customData){
			return store.adapter.$.get("findAll", modelName, undefined, queryParams, cacheQuery,customData, cacheData).then(function(){
				var args = arguments;
				var data = args[0][0];
				var fromCache = args[0][1] == "cache" ? true : false; 
				var batchObj = args[0][1] == "batch" ? args[0][2] : undefined; 
				var fromIDB = args[0][1] == "idb" ? true : false;
				if(cacheData === false){
                    if(cacheQuery && Object.keys(queryParams).length > 0){
						store.$.cacheQuery(modelName, queryParams, data);
					}
					if(batchObj != undefined){
						store.$.batchResponse[batchObj.batch][batchObj.index] = data;
					}
					return data;
				}
				if(data && !data.save){
					if(!fromCache){
//						var rawData = Lyte.deepCopyObject(data);
						if(!data || !data.hasOwnProperty(modelName)){
							Lyte.error("LD13", modelName);
							return;
						}
						if(!fromIDB){
							store.$.idbQ2Push(modelName,data,queryParams,"findAll");
						}
						var payLoad = data[modelName];
						if(payLoad === undefined || payLoad === null || store.$.isEmptyArray(payLoad)){
							data[modelName] = [];
						}
						else{
							var records = store.$.toInsertData(modelName, data,true);
							data[modelName] = records;
						}
						if(data.meta){
							store.$.defProp(data[modelName], "$", {meta : data.meta});
						}
						if(cacheQuery && Object.keys(queryParams).length > 0){
							store.$.cacheQuery(modelName, queryParams, data);								
						}						
					}
					if(batchObj != undefined){
						store.$.batchResponse[batchObj.batch][batchObj.index] = data[modelName];
					}
					return data[modelName];	
				}
				return arguments;
			}, function(e){
				return Promise.reject(e);
			});
		}		
	},
    /*
	 args - modelName , key, queryParams, cacheQuery, cacheData, customData
	 	cacheQuery - true/false (default - false) -> to cache the query with queryParams and key
	 	cacheData - true/false (default - true) -> to store the data in store / not
	 	customData - custom data that will be available as last param in all adapter callbacks 
	 */
	findRecord:{	
		value : function value(modelName, key, queryParams, cacheQuery,cacheData,customData){
			if(key == undefined){
				return Promise.reject({code : "ERR20", message : Lyte.errorCodes.ERR20});
			}
			return store.adapter.$.get("findRecord", modelName, key, queryParams, cacheQuery,customData,cacheData).then(function(){
				var data = arguments[0][0], fromCache = arguments[0][1] == "cache" ? true : false;
				var batchObj = arguments[0][1] == "batch" ? arguments[0][2] : undefined; 
				var fromIDB = arguments[0][1] == "idb" ? true : false;
				if(cacheData === false){
                    if(arguments[0][1] != "cache" && cacheQuery && Object.keys(queryParams).length > 0){
						store.$.cacheRecordQuery(modelName, key, queryParams, data);
					}
					if(batchObj != undefined){
						store.$.batchResponse[batchObj.batch][batchObj.index] = data;
					}
					return data;
				}
				if(data){
					if(!fromCache){
						//var rawData = Lyte.deepCopyObject(data);
						var isEmpty;
						if(!data || !data.hasOwnProperty(modelName)){
							Lyte.error("LD13", modelName);
							return;
						}						
						if(!fromIDB){
							store.$.idbQ2Push(modelName,data,queryParams,"findRecord",key);
						}
						if(!Lyte.isRecord(data)){
							var payLoad = data[modelName];
							if(store.$.isEmpty(payLoad) || store.$.isEmptyObj(payLoad)){
								data[modelName] = {};
								isEmpty = true;
							}
							if(typeof payLoad != "object" || Array.isArray(payLoad)){
								Lyte.warn("LD11");
							}
							if(!isEmpty){
								var record = store.$.insertIntoStore(store.model[modelName], payLoad, true, true);
								data[modelName] = record;
							}
							if(data.meta){
								if(Lyte.isRecord(record)){
									record.$.meta = data.meta;
								}
								else{
									payLoad = data[modelName];
									store.$.defProp(payLoad, "$", {meta : data.meta});
								}
							}
						}
						if(arguments[0][1] != "cache" && cacheQuery && Object.keys(queryParams).length > 0){
							store.$.cacheRecordQuery(modelName, key, queryParams, data);
						}						
					}
					if(batchObj != undefined){
						store.$.batchResponse[batchObj.batch][batchObj.index] = data[modelName];
					}
					return data[modelName];	
				}
				return arguments;
			}, function(e){
				return Promise.reject(e);
			});
		}
	},
	peekRecord:{	
		value : function value(modelName, pKey){
			var model = this.modelFor(modelName);
			if( !model ){
				Lyte.warn("LD02","Model ",modelName);
				return;
			}
			var data = model.data, pK = this.model[modelName]._pK, isComp = pK.split(',').length > 1 ? true : false;
			var record = data.filter(function(record){
				if(!isComp){
					if(record[pK] == pKey){
						return record;
					}
				}
				else{
					if(store.$.comparePk(record, pKey)){
						return record;
					}
				}
			});
			if(record[0]){
				return record[0];
			}
			return undefined;
		}
	},
	peekAll:{
		value : function value(modelName){
			var model = this.modelFor(modelName), arr;
			if( !model ){
				Lyte.warn("LD02","Model ",modelName);
				return;
			}
			arr= model.data;
//			if(arr.length){
				return arr;
//			}
//			return undefined;
		}	
	},
	deleteMany:{
		value : function value(modelName, keys){
			this.$.removeFromStore(store.modelFor(modelName), keys, undefined, true);
		}
	},
	unloadRecord:{
		value : function value(modelName, key){
			var data = store.peekRecord(modelName, key);
			var model = store.modelFor(modelName);
			var pkVal;
			if(data){
				pkVal = data.$.pK;
				this.$.removeFromStore(model, pkVal, true);
				for(var i=0; i<model._deleted.length; i++){
					if(model._deleted[i].$.get(model._pK) == key){
						model._deleted.splice(i, 1);
						break;
					}
				}
				var crq = this.model.cachedRecordQueries;
				if(crq && crq[modelName] && crq[modelName][key]){
					crq[modelName][key] = [];
				}
			}
		}
	},
	unloadAll:{	
		value : function value(modelName){
			var keys = [];
			var data = store.peekAll(modelName);
			var model = this.modelFor(modelName);
			if(data){
				for(var i=0; i<data.length; i++){
					keys.push(data[i].$.pK);
				}				
			}
			this.$.removeFromStore(model, keys, true);
			this.model[modelName].dirty = [];
			this.model[modelName]._deleted = [];
			var cq = this.model.cachedQueries;
			if(cq && cq[modelName]){
				cq[modelName] = [];
			}
			var crq = this.model.cachedRecordQueries; 
			if(crq){
				var cache = crq;
				for(var key in cache){
					delete cache[key];
				}
			}
		}
	},
	triggerAction:{
		value:function value(modelName,actionName,customData,qP){
			var model = store.modelFor(modelName);
			var actions = model.actions, action = (actions)?model.actions[actionName]:undefined;
			if(action){
				return store.adapter.$.handleAction(actionName,model,store.peekAll(modelName),customData,qP).then(function(data){
					return data;
				},function(err){
					return Promise.reject(err);
				});
			}
			else{
				return Promise.reject({code : "ERR18", message : Lyte.errorCodes.ERR18});
			}
		}
	},
	rollBack :{
		value:function value(modelName){
			var model = this.modelFor(modelName);
			if(model == undefined){
				return;
			}
			var pK = model._pK,self = this;
            while(model.dirty.length){
				var rec = self.peekRecord(modelName, model.dirty[0]);
				if(rec && rec.$.isModified){
					rec.$.rollBackAttributes(rec.$.getDirtyAttributes());
				}
				else if(rec && rec.$.isNew){
					self.$.rollBackNew(model, rec, pK);
				}                                
			}
			while(model._deleted.length > 0){
				this.$.rollBackDelete(model, 0);
			}
		}
	},
	create : {
		value : function value(modelName, data, customData, qP){
			var model = store.modelFor(modelName);
			if(model == undefined){
				return Promise.reject({code : "ERR19", message : Lyte.errorCodes.ERR19, data:modelName});
			}
			if(Array.isArray(data)){
				var self = this;
				data.forEach(function(item){
					var resp = self.$.newRecord(modelName, item);
					if(resp.$.isError){
						return Promise.reject(resp);
					}
				});
			}
			else if(data && typeof data == "object"){
				var resp = this.$.newRecord(modelName, data);
				if(resp.$.isError){
					return Promise.reject(resp);
				}				
			}
			var dirty = model.dirty, created = [], err;
			for(var i=0; i<dirty.length; i++){
				var rec = store.peekRecord(modelName, dirty[i]);
				if(rec && rec.$.isNew){
					err = new error1();
					store.$.validateRecord(rec, model.fieldList);
					if(rec.$.isError && Object.keys(rec.$.error).length > 0){
						return Promise.reject(err);
					}
					created.push(rec);
				}
			}
			if(created.length){
				return store.adapter.$.create(modelName, created, false, customData, qP);
			}
			return Promise.resolve();
		}
	},
	update : {
		value : function value(modelName, customData, qP){
			var model = this.modelFor(modelName);
			if(model == undefined){
				return Promise.reject({code : "ERR19", message : Lyte.errorCodes.ERR19, data : modelName});
			}
			var changed = [], recordsChanged = [];
			var records = store.peekAll(modelName);
			var model = store.model[modelName];
			var rels = model.relations;
			records.forEach(function(item){
				var rec = item;
				var dirty = store.$.isDirty(rec, rels);
				if((rec && rec.$.isModified && !rec.$.isNew) || (dirty && dirty.length)){
					var obj = store.$.updateJSON(rec, model, dirty);
					changed.push(obj);
					recordsChanged.push(rec);
				}
			});
			if(changed.length){
				return store.adapter.$.put(modelName, changed, recordsChanged,false, customData, qP);
			}
			return Promise.resolve();
		}
	},
	delete : {
		value : function value(modelName, key, customData, qP){
			var model = store.modelFor(modelName);
			if(model == undefined){
				return Promise.reject({code : "ERR19", message : Lyte.errorCodes.ERR19,data:modelName});
			}
			if(key){
				this.deleteRecord(modelName, key);				
			}
			var deleted = [];
			for(var i=0; i<model._deleted.length; i++){
				if(!model._deleted[i].$.isNew){
					deleted.push(model._deleted[i]);					
				}
				else{
					// store.adapter.$.handleResponse(model._deleted[i], model._deleted[i], undefined, undefined, model);
				}
			}
			if(deleted.length){
				var prm = store.adapter.$.del(modelName, deleted,undefined,"delete",customData,qP);
				return prm.then(function(resp){
					return resp;
				}, function(e){
					return Promise.reject(e);
				});
				// return prm;
			}
			return Promise.resolve();
		}
	},
	registerAdapter : {
		value : store.adapter.extends
	},
	registerSerializer : {
		value : store.serializer.extends
	},
	clearCachedQuery : {
		value : function(modelName, key, queryParams){
			var cachedQueries = [];
			if(key && typeof key == "object"){
				queryParams = key;
				var cq = this.model.cachedQueries;
				if(cq && cq[modelName]){
					cachedQueries = cq[modelName];
				}
			}
			else{
				var crq = this.model.cachedRecordQueries;
				if(crq && crq[modelName] && crq[modelName][key]){
					cachedQueries = crq[modelName][key];
				}
			}
			for(var i=0; i<cachedQueries.length; i++){
				if(this.adapter.$.compareObjects(cachedQueries[i].queryParams, queryParams, true)){
					cachedQueries.splice(i, 1);
					break;
				}
			}
		}
	},
	setErrorMessages : {
		value : function(obj){
			Object.assign(Lyte.errorCodes, obj);
		}
	},
    addEventListener : {
        value:function(type,func){
            return store.$.eventListeners.add(store,type,func);
        }
    },
    removeEventListener : {
        value:function(id){
            store.$.eventListeners.remove(store,id);
        }
    },
    emit : {
        value:function(type,args){
            store.$.eventListeners.emit(store,type,args);
        }
	},
	getPrimaryKey : {
		value:function(modelName){
			var model = store.model[modelName];
			if(!model){
				Lyte.warn("LD02","Model ",modelName);
				return;
			}
			return model._pK;
		}
	}
});

var error1 = function error1(attr, obj){
	Object.defineProperties(this, {
		$ : {
			value : {isError : true , error: {}}
		}
	});
    if(attr){
		store.$.setError(this,attr,obj);
	}
};