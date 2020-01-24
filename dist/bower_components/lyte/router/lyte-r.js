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
  })(window);