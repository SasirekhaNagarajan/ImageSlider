Lyte.Component.register("lyte-text",{_template:"<template tag-name=\"lyte-text\" lt-prop-title=\"{{if(expHandlers(tooltip, '&amp;&amp;', ltPropShow), ltPropValue, '' )}}\" onmouseenter=\"{{action('mouse')}}\">{{ltPropValue}}</template>",_dynamicNodes:[{type:"text",position:[0]}],_templateAttributes:{type:"attr",position:[]},_observedAttributes:["ltPropValue","ltPropShow","tooltip"],data:function(){return{ltPropValue:Lyte.attr("string",{default:""}),ltPropShow:Lyte.attr("boolean",{default:!0}),tooltip:Lyte.attr("boolean",{default:!1})}},reset:function(){var t=this.$node.scrollWidth,e=this.$node.offsetWidth;this.setData("tooltip",t>e)},actions:{mouse:function(){this.reset()}}});