Lyte.Component.register("lyte-step",{_template:'<template tag-name="lyte-step">\n\t<div onclick="{{action(\'divClick\', event, this)}}">\n\t\t<template is="if" value="{{expHandlers(ltPropYield,\'==\',false)}}"><template case="true">\n\t\t\t\t\t<lyte-step-structure class="{{ltPropClass}}" onclick="{{action(\'divClick\', event, this)}}">\n\t\t\t\t\t\t<template is="for" items="{{ltPropData}}" item="array" index="indexVal"><template is="if" value="{{expHandlers(lyteUiIsObject(array),\'==\',false)}}"><template case="true"><template is="if" value="{{expHandlers(ltPropClass,\'==\',\'lyteStepBullet\')}}"><template case="true">\n\t\t\t\t \t\t\t\t\t\t\t  <lyte-step-item sporder="{{indexVal}}" onclick="{{action(\'onclick\', event, this, array)}}"> \t  <lyte-step-body> {{array}} </lyte-step-body> \n\t\t\t\t \t\t\t\t\t\t\t\t\t<lyte-step-head>{{indexVal}}</lyte-step-head>\n\t\t\t\t \t\t\t\t\t\t\t\t</lyte-step-item>\n\t\t\t\t \t\t\t\t\t\t\t</template><template case="false"> \n\t\t\t\t\t\t\t\t\t\t\t  <lyte-step-item sporder="{{indexVal}}" onclick="{{action(\'onclick\', event, this, array)}}"> \t <lyte-step-body> {{array}} </lyte-step-body>\n\t\t\t\t\t\t\t\t\t\t\t\t</lyte-step-item>\n\t\t\t\t\t\t\t\t\t\t </template></template></template><template case="false"><template is="if" value="{{expHandlers(ltPropClass,\'==\',\'lyteStepBullet\')}}"><template case="true">\n\t\t\t\t\t\t\t\t\t\t\t\t<lyte-step-item sporder="{{indexVal}}" onclick="{{action(\'onclick\', event, this, array)}}"> \t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<lyte-step-body> {{array[ltPropLabel]}} </lyte-step-body> \n\t\t\t\t\t\t\t\t\t\t\t\t\t<lyte-step-head>{{array[ltPropOption]}}</lyte-step-head>\n\t\t\t\t\t\t\t\t\t\t\t\t</lyte-step-item>\n\t\t\t\t\t\t\t\t\t\t\t</template><template case="false"> \n\t\t\t\t\t\t\t\t\t\t\t   <lyte-step-item sporder="{{indexVal}}" onclick="{{action(\'onclick\', event, this, array)}}"> \t\n\t\t\t\t\t\t\t\t\t\t\t   \t    <lyte-step-body> {{array[ltPropLabel]}} </lyte-step-body>\n\t\t\t\t\t\t\t\t\t\t\t   </lyte-step-item>\n\t\t\t\t\t\t\t\t\t\t  </template></template></template></template></template>\n\t\t\t\t\t</lyte-step-structure>\t\n\t\t\t\t</template><template case="false">\n\t\t\t\t\t<lyte-yield yield-name="yield"></lyte-yield>\n\t\t\t </template></template>\n\t\t</div>\t\t\n</template>',_dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1]},{type:"if",position:[1,1],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"attr",position:[1,1]},{type:"for",position:[1,1],dynamicNodes:[{type:"attr",position:[0]},{type:"if",position:[0],cases:{true:{dynamicNodes:[{type:"attr",position:[0]},{type:"if",position:[0],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"text",position:[1,1,1]},{type:"componentDynamic",position:[1,1]},{type:"text",position:[1,3,0]},{type:"componentDynamic",position:[1,3]},{type:"componentDynamic",position:[1]}]},false:{dynamicNodes:[{type:"attr",position:[1]},{type:"text",position:[1,1,1]},{type:"componentDynamic",position:[1,1]},{type:"componentDynamic",position:[1]}]}},default:{}}]},false:{dynamicNodes:[{type:"attr",position:[0]},{type:"if",position:[0],cases:{true:{dynamicNodes:[{type:"attr",position:[1]},{type:"text",position:[1,1,1]},{type:"componentDynamic",position:[1,1]},{type:"text",position:[1,3,0]},{type:"componentDynamic",position:[1,3]},{type:"componentDynamic",position:[1]}]},false:{dynamicNodes:[{type:"attr",position:[1]},{type:"text",position:[1,1,1]},{type:"componentDynamic",position:[1,1]},{type:"componentDynamic",position:[1]}]}},default:{}}]}},default:{}}]},{type:"componentDynamic",position:[1]}]},false:{dynamicNodes:[{type:"insertYield",position:[1]}]}},default:{}}],_observedAttributes:["ltPropClass","ltPropData","ltPropSelected","ltPropSkip","ltPropActiveClass","ltPropCompletedClass","ltPropWarningClass","ltPropKeepMarked","ltPropYield","ltPropLabel","ltPropOption"],init:function(){this.getMethods("beforeRender")&&this.executeMethod("beforeRender",this.$node)},didDestroy:function(){delete this.$node.next,delete this.$node.previous,delete this.$node.goto},didConnect:function(){this.$node.next=function(t){this.$node.goto(this.data.ltPropSelected+1,t,!0)}.bind(this),this.$node.previous=function(t){this.$node.goto(this.data.ltPropSelected-1,t,!0)}.bind(this),this.$node.goto=function(t,e,a){if(this.component.getData("ltPropSkip")||a){var i=this.querySelectorAll("lyte-step-item"),s=this.component.getData("ltPropSelected"),o=this.component.getData("ltPropWarningClass"),l=i[s],n=this.component.getData("ltPropCompletedClass"),r=this.component.getData("ltPropActiveClass");t>=-1&&i.length&&("incomplete"==e?l.classList.add(o):l.classList.add(n),l.classList.remove(r),t==i.length?t--:-1==t&&t++,i[t].classList.add(r),t==s?(l.classList.remove(o),l.classList.remove(n)):this.component.setData("ltPropSelected",t))}},$L.fastdom.measure(function(){var t=_lyteUiUtils.getRTL();$L.fastdom.mutate(function(){t&&this.$node.classList.add("lyteRTL"),this.breadcrumbClass.call(this)}.bind(this))}.bind(this)),this.getMethods("afterRender")&&this.executeMethod("afterRender",this.$node)},selectedElementFindObs:function(){$L.fastdom.measure(function(){this.selectedElementFind.call(this)}.bind(this))}.observes("ltPropSelected").on("didConnect"),selectedElementFind:function(){var t=parseInt(this.getData("ltPropSelected")),e=this.getData("ltPropActiveClass"),a=this.$node.querySelectorAll("lyte-step-item"),i=this.getData("ltPropCompletedClass"),s=this.getData("ltPropWarningClass");if(a.length){for(var o=this.getData("ltPropKeepMarked")?t:a.length-1,l=0;l<a.length;l++)a[l].classList.remove(e);a[t].classList.add(e),a[t].classList.remove(s),a[t].classList.remove(i);for(var n=0;n<=o;n++)n<t?a[n].classList.contains(s)||a[n].classList.add(i):n>t&&(a[n].classList.remove(s),a[n].classList.remove(i))}},ArrayContentChangeObs:function(){this.ArrayContentChange.call(this)}.observes("ltPropData.[]"),ArrayContentChange:function(){void 0==this.getData("ltPropSelected")?this.setData("ltPropSelected",0):this.selectedElementFind.call(this)},breadcrumbClassObs:function(){this.breadcrumbClass.call(this)}.observes("ltPropClass"),breadcrumbClass:function(){this.data.ltPropYield&&this.data.ltPropClass&&this.$node.querySelector("lyte-step-structure").classList.add(this.data.ltPropClass)},data:function(){return{ltPropClass:Lyte.attr("string",{default:"lyteStepSlash"}),ltPropData:Lyte.attr("array",{default:[]}),ltPropSelected:Lyte.attr("number",{default:0}),ltPropSkip:Lyte.attr("boolean",{default:!0}),ltPropActiveClass:Lyte.attr("string",{default:"lyteActive"}),ltPropCompletedClass:Lyte.attr("string",{default:"lyteCompleted"}),ltPropWarningClass:Lyte.attr("string",{default:"lyteWarning"}),ltPropKeepMarked:Lyte.attr("boolean",{default:!1}),ltPropYield:Lyte.attr("boolean",{default:!1}),ltPropLabel:Lyte.attr("string",{default:""}),ltPropOption:Lyte.attr("string",{default:""})}},actions:{onclick:function(t,e,a){if((1==t.ctrlKey||1==t.metaKey||2==t.which)&&void 0!=t.target.href&&-1!=t.target.href.indexOf("javascript:")&&"_blank"==t.target.target)return!1;this.getMethods("onClick")&&(this.executeMethod("onClick",e,this.$node,t,a),t.stopPropagation())},divClick:function(t,e){if((1==t.ctrlKey||1==t.metaKey||2==t.which)&&void 0!=t.target.href&&-1!=t.target.href.indexOf("javascript:")&&"_blank"==t.target.target)return!1;if(this.getMethods("onClick")&&this.getData("ltPropYield"))for(var a=t.target.correspondingElement||t.target;a&&a!=e;){if("LYTE-STEP-ITEM"==a.tagName){this.executeMethod("onClick",a,this.$node,t,a.getAttribute("data-value"));break}a=a.parentNode}}}});