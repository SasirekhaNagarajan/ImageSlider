Lyte.Component.register("lyte-progressbar",{_template:'<template tag-name="lyte-progressbar">\n\t<template is="if" value="{{lyteUiIfEquals(ltPropType,\'circle\')}}">\n\t\t<template case="true"><div class="lyteProgressBar lyteCircle">\n\t\t\t<div class="lyteCircleType">\n\t\t\t\t<svg class="svgValueEle" width="{{lyteUiSetWH(ltPropRadius)}}" height="{{lyteUiSetWH(ltPropRadius)}}">\n\t\t\t\t    <circle style="{{lyteUiConcat(\'transition:\',\'stroke-dashoffset \',duration,\' \',timingfn,\';\')}}" cx="{{ltPropRadius}}" cy="{{ltPropRadius}}" r="{{lyteUiSetRadius(ltPropRadius,ltPropStroke)}}" fill="none" stroke="#DCE0E3" stroke-width="{{ltPropStroke}}"></circle>\n\t\t\t\t    <circle style="{{lyteUiConcat(\'transition:\',\'stroke-dashoffset \',duration,\' \',timingfn,\';\')}}" cx="{{ltPropRadius}}" cy="{{ltPropRadius}}" r="{{lyteUiSetRadius(ltPropRadius,ltPropStroke)}}" fill="none" stroke="{{ltPropBackground}}" stroke-width="{{ltPropStroke}}" stroke-dasharray="{{lyteUiSetDashArray(ltPropRadius,ltPropStroke)}}" stroke-dashoffset="{{lyteUiSetOffset(ltPropRadius,ltPropStroke,percentage)}}"></circle>\n\t\t\t\t</svg>\n\t\t\t\t<svg width="{{lyteUiSetWH(ltPropRadius)}}" height="{{lyteUiSetWH(ltPropRadius)}}" style="transform:{{lyteUiTextTransform(ltPropRadius)}}" viewBox="{{lyteUiConcat(\'0 \',\'0 \',lyteUiSetWH(ltPropRadius),\' \',lyteUiSetWH(ltPropRadius))}}">\n\t\t\t\t\t<text font-size="1.5rem" text-anchor="middle" dy=".2em" x="50%" y="50%">{{lyteUiConcat(percentageDisplay,"%")}}</text>\n\t\t\t\t</svg>\n\t\t\t</div>\n\t\t</div></template>\n\t\t<template case="false"><div class="lyteProgressBar lyteHorizontal" style="{{lyteUiConcat(\'width:\',ltPropWidth,\';height:\',ltPropHeight)}}">\n\t\t\t<span class="lyteProgressStatus" style="{{lyteUiConcat(\'width: \',percentage,\'% ;\',\'transition:\',\'width \',duration,\' \',timingfn,\';\',\'background:\',ltPropBackground)}}">\n\t\t\t\t<template is="if" value="{{ltPropAnimated}}">\n\t\t\t\t\t<template case="true"><span class="ltPropProgressAnimated progressMovingObj"></span></template>\n\t\t\t\t</template>\n\t\t\t\t<template is="if" value="{{ltPropShowPercentage}}">\n\t\t\t\t\t<template case="true"><span class="lyteProgressPercentage">{{lyteUiConcat(percentageDisplay,"%")}}</span></template>\n\t\t\t\t</template>\n\t\t\t</span>\n\t\t</div></template>\n\t</template>\n</template>',_dynamicNodes:[{type:"attr",position:[1]},{type:"if",position:[1],cases:{true:{dynamicNodes:[{type:"attr",position:[0,1,1]},{type:"attr",position:[0,1,1,1],attr:{style:{name:"style",helperInfo:{name:"lyteUiConcat",args:["'transition:'","'stroke-dashoffset '","duration","' '","timingfn","';'"]}}}},{type:"attr",position:[0,1,1,3],attr:{style:{name:"style",helperInfo:{name:"lyteUiConcat",args:["'transition:'","'stroke-dashoffset '","duration","' '","timingfn","';'"]}}}},{type:"attr",position:[0,1,3],attr:{style:{name:"style",helperInfo:{name:"concat",args:["'transform:'",{type:"helper",value:{name:"lyteUiTextTransform",args:["ltPropRadius"]}}]}}}},{type:"text",position:[0,1,3,1,0]}]},false:{dynamicNodes:[{type:"attr",position:[0],attr:{style:{name:"style",helperInfo:{name:"lyteUiConcat",args:["'width:'","ltPropWidth","';height:'","ltPropHeight"]}}}},{type:"attr",position:[0,1],attr:{style:{name:"style",helperInfo:{name:"lyteUiConcat",args:["'width: '","percentage","'% ;'","'transition:'","'width '","duration","' '","timingfn","';'","'background:'","ltPropBackground"]}}}},{type:"attr",position:[0,1,1]},{type:"if",position:[0,1,1],cases:{true:{dynamicNodes:[]}},default:{}},{type:"attr",position:[0,1,3]},{type:"if",position:[0,1,3],cases:{true:{dynamicNodes:[{type:"text",position:[0,0]}]}},default:{}}]}},default:{}}],_observedAttributes:["ltPropType","ltPropProgressFillColor","ltPropCompletedFillColor","ltPropWidth","ltPropHeight","ltPropRadius","ltPropStroke","ltPropValueCopy","ltPropAnimated","ltPropShowPercentage","ltPropProgressProperty","percentage","duration","timingfn","percentageDisplay"],didConnect:function(){$L.fastdom.mutate(this.setBackground.bind(this))},data:function(){return{ltPropType:Lyte.attr("string",{default:"bar"}),ltPropProgressFillColor:Lyte.attr("string",{default:"#42a2eb"}),ltPropCompletedFillColor:Lyte.attr("string",{default:"#3fbd5f"}),ltPropWidth:Lyte.attr("string",{default:"100%"}),ltPropHeight:Lyte.attr("string",{default:"12px"}),ltPropRadius:Lyte.attr("string",{default:"50"}),ltPropStroke:Lyte.attr("string",{default:"5"}),ltPropValueCopy:Lyte.attr("string",{default:"0"}),ltPropAnimated:Lyte.attr("boolean",{default:!0}),ltPropShowPercentage:Lyte.attr("boolean",{default:!0}),ltPropProgressProperty:Lyte.attr("object",{default:{value:"0",duration:"0s"}}),percentage:Lyte.attr("string",{default:"0"}),duration:Lyte.attr("string",{default:"2s"}),timingfn:Lyte.attr("string",{default:"linear"}),percentageDisplay:Lyte.attr("string",{default:"0"})}},didDestroy:function(){this.sid&&window.clearTimeout(this.sid),this.iId&&window.clearInterval(this.iId)},percentageChange:function(t){this.setBackground()}.observes("ltPropProgressProperty"),setBackground:function(){var t=parseFloat(this.getData("ltPropProgressProperty").value),e=this.getData("ltPropProgressProperty").duration?this.getData("ltPropProgressProperty").duration:this.getData("duration");if(this.getData("ltPropProgressProperty").timingfn&&this.setData("timingfn",this.getData("ltPropProgressProperty").timingfn),"circle"===this.getData("ltPropType"))if(parseInt(t)>=100){this.setData("duration",e),this.setData("ltPropBackground",this.getData("ltPropProgressFillColor")),this.setData("percentage","100"),e=1e3*parseFloat(e);var r=this;this.sid=setTimeout(function(){r.sid=!1,r.$node.querySelector(".lyteProgressBar").classList.add("lyteProgressCompleted"),r.setData("ltPropBackground",r.getData("ltPropCompletedFillColor"))},e)}else this.sid&&(clearTimeout(this.sid),this.sid=!1),this.$node.querySelector(".lyteProgressBar").classList.remove("lyteProgressCompleted"),this.setData("ltPropBackground",this.getData("ltPropProgressFillColor")),this.setData("duration",e),this.setData("percentage",t+"");else if(parseInt(t)>=100){this.setData("duration",e),this.setData("ltPropBackground",this.getData("ltPropProgressFillColor")),this.setData("percentage","100"),e=1e3*parseFloat(e);r=this;this.sid=setTimeout(function(){this.sid=!1,r.$node.querySelector(".lyteProgressBar").classList.add("lyteProgressCompleted"),r.setData("ltPropBackground",r.getData("ltPropCompletedFillColor")),r.getData("ltPropAnimated")&&r.$node.querySelector(".lyteProgressBar .ltPropProgressAnimated").classList.remove("progressMovingObj")},e)}else this.sid&&(clearTimeout(this.sid),this.sid=!1),this.$node.querySelector(".lyteProgressBar").classList.remove("lyteProgressCompleted"),this.setData("ltPropBackground",this.getData("ltPropProgressFillColor")),this.getData("ltPropAnimated")&&this.$node.querySelector(".lyteProgressBar .ltPropProgressAnimated").classList.add("progressMovingObj"),this.setData("duration",e),this.setData("percentage",t+"");this.iId&&(clearInterval(this.iId),this.iId=!1);var a=parseFloat(this.getData("percentageDisplay"));r=this;if(0==parseInt(this.getData("duration")))this.setData("percentageDisplay",t+"");else if(a>t){var s=(a-t)/(1e3*parseInt(this.getData("duration")))*100;this.iId=setInterval(function(){a-=s,r.setData("percentageDisplay",Math.max(parseFloat(a.toFixed(2)),t)+""),parseFloat(a)==t&&(clearInterval(r.iId),r.iId=!1)},100)}else if(a<t){s=(t-a)/(1e3*parseInt(this.getData("duration")))*100;this.iId=setInterval(function(){a+=s,r.$node||clearInterval(r.iId),r.setData("percentageDisplay",Math.min(parseFloat(a.toFixed(2)),t)+""),parseFloat(a)>=t&&(clearInterval(r.iId),r.iId=!1)},100)}},setCircleStroke:function(t,e){var r=t.getAttribute("stroke-dasharray")*(1-parseInt(e)/100);t.setAttribute("stroke-dashoffset",r)},actions:{}});