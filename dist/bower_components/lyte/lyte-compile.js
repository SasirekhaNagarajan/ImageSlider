    LyteComponent.needDummyComponentsDiv = true;
    Lyte.Compile = {};
    Lyte.Compile.debug = true;
    Lyte.Compile.getArgString = function(name, array) {
        var retString;
        for(var i=0;i<array.length;i++) {
            if(typeof array[i] === "object") {
                array[i] = this.getArgString(array[i].value.name, array[i].value.args);
            }
        }
        if(name) {
            retString = name +  "(" + array.toString() + ")";
        } else {
            retString = array.toString();
        }
        return retString;
    }

    Lyte.Compile.getDynamicNodes = function(fileName,resolve, templateToRender) {
        var returnValue;
        var success = true,
            missingComp,
            timmer = new Date().getTime();
            var s, comp ,errors = [], warnings = [];
            if(templateToRender) {
                Lyte.Compile.debug = true;
                comp = templateToRender;
            } else if(Lyte.Compile.debug){
                comp = document.querySelector("template[tag-name='"+fileName+"']")
            }else{
                comp = window.opener.document.querySelector("template[tag-name='"+fileName+"']")
            }
            if(!comp) {
                missingComp = fileName;
                errors.push({message :"Cannot find template "+fileName});
                returnValue = {componentName : fileName ,errors : errors,warning : warnings};
                if(Lyte.Compile.debug){
                    setResponse(returnValue);
                }else{
                    window.opener.setResponse(returnValue);
                }
                // return success;
            } else {
                s = Lyte._ie? comp : comp.content;
            }
            if(s) {
                Lyte.Compile.splitTextNodes(s);  
                var dynamicNodes = [];
                var strict = comp.getAttribute("use-strict");
                if(strict != null){
                    if(s.querySelector("script")){
                        errors.push({message:"Security: Script tags should not be included",strict:true})
                    }
                    if(s.querySelector("style")){
                        errors.push({message:"Security: Style tags should not be included",strict:true})
                    }                 
                }
                var d = [];
                Lyte.Compile.newGetDeepNodes(fileName, comp, d, [], undefined, true );
                Lyte.Compile.processTemplate(s,dynamicNodes,fileName,comp.getAttribute("use-strict") !== null,errors,warnings);
                if(errors.length){
                    returnValue = {componentName: fileName, errors:errors, warnings:warnings};
                    if(Lyte.Compile.debug){
                        setResponse(returnValue);
                    }else{
                        window.opener.setResponse(returnValue);
                    }
                    // return success;
                }else{
                    returnValue = {componentName : fileName, dynamicNodes : dynamicNodes, _templateAttributes : d[0], template:JSON.stringify(comp.outerHTML)};
                    if(Lyte.Compile.debug){
                        setResponse(returnValue);
                    }else{
                        window.opener.setResponse(returnValue);
                    }
                    
                    // return success;                
                }
            }
            // if(new Date().getTime()-timmer>10000){
            //     if(debug){
            //         postBuildTimeWarning(fileName);
            //     }else{
            //         window.opener.postBuildTimeWarning(fileName);
            //     }
            // }
            if(resolve){
                resolve();
            }
            return returnValue;
    }
    Lyte.Compile.splitTextNodes = function(node) {
        if(node && node.childNodes && node.childNodes.length) {
            for(var i=node.childNodes.length-1;i>=0;i--) {
                Lyte.Compile.splitTextNodes(node.childNodes[i]);
            }
        }
        if(node.tagName === "TEMPLATE" && !Lyte._ie) {
            Lyte.Compile.splitTextNodes((node.content)?node.content:Lyte.Compile.createDocFragment(node));
        }
        if(node.nodeType === node.TEXT_NODE) {
            var nodeValue = node.nodeValue;
            if(nodeValue){
        var mustacheValues = nodeValue.match(/{{[^}]*?(?:(?:('|")[^\1]*?\1)[^}]*?)*}}/g); //'
        if(!mustacheValues) {
                    return;
                }
                var newNodeArray = [];
                for(var i=0;i<mustacheValues.length;i++) {
                    var mustacheStartIndex = nodeValue.indexOf(mustacheValues[i]);
                    var mustacheEndIndex = mustacheStartIndex + mustacheValues[i].length;
                    if(mustacheStartIndex) {
                            newNodeArray.push(document.createTextNode(nodeValue.substring(0, mustacheStartIndex)));
                    }
                    newNodeArray.push(document.createTextNode(nodeValue.substring(mustacheStartIndex, mustacheEndIndex)));
                    nodeValue = nodeValue.substring(mustacheEndIndex);
                }
                newNodeArray.push(document.createTextNode(nodeValue));
                node.replaceWith.apply(node, newNodeArray);
            }
        }
    }

    //This method will run through all the nodes of the template and put the dynamicNode positions 
    //in deepNodes and helper node positions in helperNodes
    //By helper nodes, we mean all the for and if helpers which are present in the component template. 
    //The template will contain the dynamicNodes. 
    //For template contains - _forTemplate, which will contain the content and _dynamicNodes
    //If template contains - _trueCase, _falseCase, which will contain the content and _dynamicNodes.
    Lyte.Compile.processTemplate = function(node, deepNodes, componentName,strict,errors,warnings){
        var isBreak = node.querySelector('template[is=break]');
        if(isBreak) {
            this.getTrimmedContent(node, undefined, isBreak);
        }
        var isContinue = node.querySelector('template[is=continue]');
        if(isContinue) {
            this.getTrimmedContent(node,undefined, isContinue);
        }
        this.helperNodes = [];
        if(node.hasChildNodes()) {
            var runningIndex = 0;
            for(var i=0;i<node.childNodes.length;i++) {
                var deepN = [];
                deepN.push(i);
                var index = 0;
                if(node.childNodes[i].tagName) {
                    var tagName = node.childNodes[i].tagName;
                    var is = node.childNodes[i].getAttribute("is");
                    if(tagName === "TEMPLATE" && is) {
//                        index = helperNodes.push(node.childNodes[i]);
                        //We will be adding an attribute index1 in the helper templates, 
                        //This is done because we will be storing all the helper nodes as such in an array _helperNodes in the component template. 
                        //In order to lookup to the dynamicNodes of the for template or if template, we need to have a reference of which 
                        //helper we are calling. 
                        //By this way, we will be adding an index1 Attribute which will contain index startign from 0. 
                        //This index refreshes for each component registration. 
//                        node.childNodes[i].setAttribute("index1", index-1);
                        this.newGetDeepNodes(componentName,node.childNodes[i], deepNodes, deepN, is,strict,errors,warnings);
                    }
                    else {
                        this.newGetDeepNodes(componentName,node.childNodes[i], deepNodes, deepN,undefined,strict,errors,warnings);
                    }
                } else {
                    this.newGetDeepNodes(componentName,node.childNodes[i], deepNodes, deepN,undefined,strict,errors,warnings);
                }
            }
        }
    
    }
    //This method is the place where the deepNodes and helperNodes gets updated with the 
    //Values of the positions of dynamicNodes and helperNodes. 
    Lyte.Compile.newGetDeepNodes = function(componentName,node, deepNodes, deepN, is,strict,errors,warnings) {
        var toBePushed;
        if(node.nodeType == 8){
            deepN.pop();
            return;
        }
        if(node.tagName && node.tagName.indexOf("-") !== -1 && node.tagName !== "LYTE-YIELD") {
            toBePushed = {"type" : "componentDynamic", position: deepN.slice()};
        }
        if(node.tagName === "LYTE-YIELD") {
            toBePushed = {"type" : "insertYield", position : deepN.slice()};
        } else 
        if(is === "registerYield" || is === "yield") {
            var dynamicNodes = [];
            this.processTemplate(Lyte._ie ? node : node.content, dynamicNodes, componentName);
            toBePushed = {"type" : "registerYield", position: deepN.slice(), "dynamicNodes" : dynamicNodes};
        } else if(is === "insertYield") {
            deepNodes.push({"type" : "insertYield", position : deepN.slice()});
        } else 
        if(is === "for") {
            node._forTemplate = {};
            var template = node;
            if(template) {
                node._forTemplate.content = template.content;
                var dynamicNodes = [];
                this.processTemplate(Lyte._ie ? node._forTemplate : node._forTemplate.content, dynamicNodes, componentName,strict,errors,warnings);
                toBePushed = {"type": "for" ,position: deepN.slice(), "dynamicNodes":dynamicNodes};
            }
        } else if(is === "forIn"){
            node._forInTemplate = {};
            var template = node;
            if(template) {
                node._forInTemplate.content = template.content;
                var dynamicNodes = [];
                this.processTemplate(Lyte._ie ? node._forInTemplate : node._forInTemplate.content, dynamicNodes ,componentName,strict,errors,warnings);
                toBePushed = {"type": "forIn" ,position: deepN.slice(), "dynamicNodes":dynamicNodes};
            }
        }
        else if(is === "switch" || is === "if"){
            var casesArr = {},defaultArr = {};
            var defaultCase = node.content.querySelector("[default]");
            var cases = node.content.querySelectorAll("[case]");
            for(var i=0;i<cases.length;i++){
                var currentCase = cases[i];
                var caseName = currentCase.getAttribute("case");
                if(currentCase.tagName === "TEMPLATE" && !currentCase.getAttribute("is")){
                    currentCase.setAttribute("case", caseName );
                    currentCase = currentCase.content;
                } 
                else {
                    var temp = document.createElement('template');
                    var clone = currentCase.cloneNode(true);
                    temp.content.appendChild(clone);
                    temp.setAttribute("case", caseName );
                    clone.removeAttribute('case');
                    currentCase = temp.content;
                    cases[i].replaceWith(temp);
                }
                var dynamicNodes = [];
                this.processTemplate(currentCase, dynamicNodes, componentName,strict,errors,warnings);
                if(caseName === "") {
                    caseName = '""';
                }
                casesArr[caseName] = {dynamicNodes: dynamicNodes};
                if(is==="if") {
                    continue;
                }
                var isBreak = currentCase.querySelector("template[is=break]");
                if(!isBreak) {
                    if(cases[i+1]) {
                        casesArr[caseName].additional = {"next" : cases[i+1].getAttribute("case")};
                    } else if(defaultCase){
                        casesArr[caseName].additional = {"default" : true};
                    }
                }
                else {
                    isBreak.remove();
                }
            }
            if(defaultCase){               
                var dCase;                
                if(defaultCase.tagName === "TEMPLATE" && !defaultCase.getAttribute("is")){               
                    dCase = defaultCase.content;                  
                    }           
                else {        
                    var temp = document.createElement('template');             
                    var clone = defaultCase.cloneNode(true);            
                    temp.content.appendChild(clone);     
                    temp.setAttribute("default", '');     
                    clone.removeAttribute('default');             
                    dCase = temp.content;               
                    defaultCase.replaceWith(temp);      
                }      
                var dynamicNodes = [];           
                this.processTemplate(dCase, dynamicNodes, componentName,strict,errors,warnings);     
                defaultArr = {dynamicNodes: dynamicNodes};                  
            }
            toBePushed = {"type": is, position: deepN.slice(),"cases":casesArr,"default":defaultArr};
        } else if(is==="component") {
            node._componentTemplate = {};
            node._componentTemplate.content = node.content;
            var dynamicNodes = [];
            this.processTemplate(node._componentTemplate.content, dynamicNodes, componentName,strict,errors,warnings);
            toBePushed = {"type" : "component", position: deepN.slice(), "dynamicNodes" : dynamicNodes};
        }
        else if(node.nodeType == 3) {
            if(node.nodeValue.indexOf("{{") !== -1) {
                var mustache = this.getMustacheNew(node.nodeValue),dynamicValue,helperFunc;
                if(mustache){
                        helperFunc = this.getHelper(mustache);
                        if(helperFunc === false){
                            errors.push({message:"Syntax Error in node "+node.nodeName+"for :"+node.nodeValue});
                            return;
                        }
                }   
                var dynamic = this.getMustacheNew(node.nodeValue);
                if(helperFunc){
                    if(window.newBuild) {
                        deepNodes.push({type: "text", position:deepN.slice()/*, helperInfo: helperFunc*/}); 
                    } else {
                        deepNodes.push({type: "text", position:deepN.slice(), helperInfo: helperFunc}); 
                    }
                    
                }
                else if(dynamic){
                    if(window.newBuild) {
                    deepNodes.push({type: "text", position:deepN.slice()/*, dynamicValue: dynamic*/});
                    } else {
                        deepNodes.push({type: "text", position:deepN.slice(), dynamicValue: dynamic});
                    }
//                  LN to do
//                  deepNodes.push({type: "text", position:deepN.slice(), dynamicValue: getDynamicValue(dynamic)});                    
                }
            }
            deepN.pop();
            return;
        }
        if(node.hasAttributes && node.hasAttributes()) { //template has no attributes
            var add = false, toBeRemoved = [],attr = {},toBeAdded = [];
            for(var i=0;i<node.attributes.length;i++) {
                if(node.attributes[i].nodeValue.indexOf("{{") !== -1) {
                    var val = node.attributes[i].nodeValue;
                    var actValue = this.getMustacheNew(val), actObj ;
                    if(actValue === false){
                        errors.push({message:"Syntax error in node "+node.nodeName+" for the attribute:"+node.attributes[i].nodeName+"- "+node.attributes[i].nodeValue});
                        continue;
                    }
                    if(actValue){
                        actObj = this.getHelper(actValue);  
                        if(actObj === false){
                            errors.push({message:"Syntax error in node "+node.nodeName+" for the attribute:"+node.attributes[i].nodeName+"- "+node.attributes[i].nodeValue});
                            continue;
                        }
                    }
                    else if(/{{.*}}/.test(val) && !(/\\{{.*}}/.test(val))){
                        actObj = this.splitMixedText(val);
                    }
                    if( actObj && (actObj.name === "action" || actObj.name === "method") && /^(onfocus|onfocusin|onfocusout|onresize|onscroll|onclick|ondblclick|onmousedown|onmouseup|onmousemove|onmouseover|onmouseout|onmouseenter|onmouseleave|onchange|onselect|onsubmit|onkeydown|onkeypress|onkeyup|oncontextmenu)$/.test(node.attributes[i].name)){
                            add = true;
                            attr[node.attributes[i].name.substr(2)] = {name:node.attributes[i].name.substr(2),helperInfo: actObj, globalEvent: true};
                            var actArgs = Lyte.Compile.deepCopyObject(actObj.args);
                            var actName = actArgs.splice(0,1)[0];
                            actName = actName.startsWith("'")? actName.replace(/'/g,''):  actName;
                            var actString = this.getArgString(actName, actArgs);
                            if(!window.newBuild) {
                                node.setAttribute(node.attributes[i].name.substr(2),componentName+" => "+ actString);
                            } 
                            //node.setAttribute(node.attributes[i].name.substr(2),componentName+" => "+ actString);
                            toBeRemoved.push(node.attributes[i].name);                            
                    }
                    else{
                        if(actObj || actValue) {
                            add = true;
                            var attrToPush = {};
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
                else{
                    if(/^(onfocus|onfocusin|onfocusout|onresize|onscroll|onclick|ondblclick|onmousedown|onmouseup|onmousemove|onmouseover|onmouseout|onmouseenter|onmouseleave|onchange|onselect|onsubmit|onkeydown|onkeypress|onkeyup|oncontextmenu|ondragstart|ondrag|ondragenter|ondragleave|ondragover|ondrop|ondragend|onload|onunload|onabort|onerror|onscroll|onreset|onblur)$/.test(node.attributes[i].nodeName) && strict){
                                errors.push({message:"Strict-Mode: Please specify action in "+node.nodeName+" for attribute-"+node.attributes[i].nodeName,strict:true});
                    }
                }
            }
            if(!window.newBuild) {
                if(toBeRemoved.length){
                    for(var i=0; i<toBeRemoved.length;i++){
                        node.removeAttribute(toBeRemoved[i]);
                    }
                }
                if(toBeAdded.length) {
                    for(var i=0;i<toBeAdded.length;i++) {
                        node.setAttribute(toBeAdded[i].name, toBeAdded[i].value);
                    }
                }
            }
            
            if(attr && add){
                if(window.newBuild) {
                    if(Object.keys(attr).indexOf("style") !== -1) {
                        deepNodes.push({"type": "attr", position: deepN.slice(), "attr" : {"style" : attr.style}});    
                    } else {
                        deepNodes.push({"type": "attr", position: deepN.slice()});        
                    }    
                } else {
                    deepNodes.push({"type": "attr", position: deepN.slice(), "attr": attr});                
                }
            }
        }

        if( node.hasChildNodes() && node.tagName !== "TEMPLATE"){
            for(var i=0;i<node.childNodes.length;i++) {
                deepN.push(i);
                if(node.childNodes[i].tagName) {
                    var tagName = node.childNodes[i].tagName;
                    var is = node.childNodes[i].getAttribute("is");
                    if(tagName && is) {
                        this.newGetDeepNodes(componentName, node.childNodes[i], deepNodes, deepN, is ,strict,errors,warnings);
                    }
                    else {
                        this.newGetDeepNodes(componentName, node.childNodes[i], deepNodes, deepN,undefined,strict,errors,warnings);
                    }
                } 
                else {
                    this.newGetDeepNodes(componentName, node.childNodes[i], deepNodes, deepN,undefined,strict,errors,warnings);
                }
            }
        } 
        
        if(toBePushed) {
            deepNodes.push(toBePushed);
        }
        deepN.pop();
    }

    Lyte.Compile.getArrayIndex = function(array,value) {
        for(var i=0;i<array.length;i++) {
            if(array[i] === value) {
                return i
            };
        }
    }

    Lyte.Compile.getTrimmedContent = function(content, position, node) {
        var dummyContent = content;
        if(node) {
            position = [];
            var parentNode = node.parentNode;
            while(true) {
                position.unshift(this.getArrayIndex(parentNode.childNodes,node));
                parentNode = parentNode.parentNode;
                node = node.parentNode;
                if(!parentNode) {
                    break;
                }
            }
        }
        for(var i=0;i<position.length;i++) {
            for(var j=content.childNodes.length-1;j>position[i];j--) {
                content.childNodes[j].remove();
            }
            content = content.childNodes[position[i]];
        }
        return dummyContent;
    }

    Lyte.Compile.createDocFragment = function(template){
        var childNodes = template.cloneNode(true).childNodes;
        var frag = document.createDocumentFragment();
        var len = childNodes.length;
        for(var i=0; i<len; i++){
            frag.appendChild(childNodes[0]);
        }
        return frag;
    }

    Lyte.Compile.splitMixedText = function(str){
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
            var actObj = this.getHelper(toPush);  
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

    Lyte.Compile.syntaxCheck = function(value){
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

    Lyte.Compile.getMustacheNew = function(value){
        value=(value && typeof value === "string") ? value.trim() : value;
        if(/^{{(?=[\s]*[\w-_]+)/.test(value)){
            var arr = value.match(/{{[a-zA-Z0-9_.\[\]\(\)]*(?![\\])}}/g);
            if(arr && arr.length > 1){
                return undefined;
            }
            if(!this.syntaxCheck(value)){
                return false;
            }
            if(!(/{{[^}]*?(?:(?:('|")[^\1]*?\1)[^}]*?)*}}$/.test(value))){ //'
                return undefined;
            }
            var dynamic = value.match(/[\w!@#\$%\^\&*\)\(+=.,_-]+[\s]*[(]{0,1}(?:"([^"]|\\")*?"|'([^']|\\')*?'|[\w\s!@#\$%\^\&*\)\(\[\]+=.,_-]*?)*?[)]{0,1}[\s]*(?=}})/g);
            if(dynamic && dynamic.length > 1){
                return undefined;
            }
            else{
                dynamic = (dynamic) ? dynamic[0].trim(): dynamic;                
            }
//            var dynamic = /[\w!@#\$%\^\&*\)\(+=.,_-]+(?:"([^"]|\\")*?"|'([^']|\\')*?'|[\w\s!@#\$%\^\&*\)\(\[\]+=.,_-]*?)*?(?=}}$)/.exec(value);
            return dynamic;
        }
        return undefined;
    }
 
    Lyte.Compile.getHelperArgs = function(str){
        var stack = [], args = [] , from=0;
        var lastPushed; 
        for(var i=0; i<str.length; i++){
            if(!stack.length && str.charAt(i) === ","){
                var toPush = str.substr(from,i-from);
                toPush = toPush.trim();
                if(toPush && toPush.startsWith("\"") && toPush.endsWith("\"")){
                    toPush = toPush.slice(1,-1);
                    toPush = "'" + toPush + "'";
                }
                toPush = Lyte.Compile.getHelperArgValue(toPush);
                args.push(toPush);
                from = i + 1;
            }
            else if(str.charAt(i) === "("){
                if(lastPushed != "'" || lastPushed != "\""){
                    stack.push(str.charAt(i));
                    lastPushed = str.charAt(i);
                }
            }
            else if(str.charAt(i) === ")"){
                if(stack[stack.length-1] === "("){
                    stack.pop();
                }
            }
            else if(str.charAt(i) === "'" && str.charAt(i-1) !== "\\"){
                if(stack[stack.length-1] === "'"){
                    stack.pop();
                }
                else if(stack[stack.length-1] !== "\""){
                    stack.push(str.charAt(i));
                    lastPushed = str.charAt(i);
                }
            }
            else if(str.charAt(i) === "\"" && str.charAt(i-1) !== "\\"){
                if(stack[stack.length-1] === "\""){
                    stack.pop();
//                  str.replaceAt(i, "'");
                }
                else if(stack[stack.length-1] !== "'"){
                    stack.push(str.charAt(i));
                    lastPushed = str.charAt(i);
//                  str.replaceAt(i, "'");
                }
            }
        }
        if(stack.length){
            return false;
        }
        var toPush = str.substr(from,str.length-from);
        toPush = toPush.trim();
        if(toPush && toPush.startsWith("\"") && toPush.endsWith("\"")){
            toPush = toPush.slice(1,-1);
            toPush = "'" + toPush + "'";
        }
        try{
            toPush = Lyte.Compile.getHelperArgValue(toPush);
        }
        catch(err){
            return false;
        }
        args.push(toPush);
        return args;
    }
 
    Lyte.Compile.getHelperArgValue = function(argValue) {
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
                    return argValue;
                }
                else if(/\([\w\s,')(]*/.test(argValue)) {
                    var arg = Lyte.Compile.getHelper(argValue);
                    if(arg === false){
                        throw new Error(argValue);
                    }
                    return {"type" : "helper" , "value" : arg}
                } else if(!isNaN(argValue)) {
                    return parseInt(argValue);
                } else {
                    return argValue;
                }
        }
    }
 
    Lyte.Compile.getHelperInfo = function(dynamicValue, helperValue){
        var helperFunc = {};
        helperFunc.name = dynamicValue.substr(0,helperValue.index).replace(/\s/g,'');
        helperValue = (helperValue) ? helperValue[0].trim() : helperValue;
        var args = Lyte.Compile.getHelperArgs(helperValue.substr(1,helperValue.length-2));
        if(args === false){
            return false;
        }
        helperFunc.args = args;
        return helperFunc;
    }
    
    Lyte.Compile.getHelper = function(dynamicValue){
        var helperValue = /\((?:[^\)]*|(?:(?:"(?:[^"\\]|\\.)*?")|(?:'([^'\\]|\\.)*?')|[\w\s!@#$%^&*)([\]+=.,_-]*?)*?)\)$/.exec(dynamicValue);
        if(helperValue){
            return Lyte.Compile.getHelperInfo(dynamicValue,helperValue);
        }
        return undefined;
    }
    Lyte.Compile.getDynamicValue = function(value){    
        var result = [],ref = result,arr = [],data = "",strStack = [],arrayStack = [],refStack = [],strLast,str;
        for(var i=0;i<value.length;i++){
            if(value[i] === "."){
                if(data.length){
                    ref.push(data);
                }
                data = "";
                continue;
            }
            else if(value[i] === "["){
                arrayStack.push(i)
                if(data.length){
                    ref.push(data);
                }
                while(value[i+1] === "\s"){
                    i++;
                }
                if(value[i+1] === "\"" || value[i+1] === "'"){
                    strStack.push(value[i+1]);
                    strLast = value[i+1];
                    i++;
                }
                else if(arr.length){
                    ref.push([]);
                    refStack.push(ref);
                    ref = ref[ref.length-1];
                }else{
                    arr.push([]);
                    refStack.push(ref);
                    ref = arr[arr.length-1];
                }
                data = "";
                continue;
            }
            else if((value[i] === "\"" || value[i] === "'" ) && value[i++] === strLast){
                while(value[i] === "\s" && value[i] != "]"){
                    i++;
                }
                strStack.pop();
                str = true;
            }
            if(value[i] === "]"){
                arrayStack.pop();
                if(data.length){
                    if(str === true){
                        ref.push(data);    
                    }
                    else if(!isNaN(parseInt(data))){
                        if(refStack.length){
                            ref = refStack.pop();
                            if(arr.length && Array.isArray(ref[ref.length-1]) && !ref[ref.length-1].length){
                                ref.pop();
                            }
                            ref.push(data);
                            if(!arrayStack.length && arr.length){
                                arr.shift();
                            }
                        }
                    }
                    else{
                        ref.push(data);
                    }
                }
                if(!arrayStack.length && arr.length){
                    result.push(arr.shift());
                    ref = result;
                }
                else if(refStack.length && !arr.length){ 
                    ref = refStack.pop();
                }
                data = "";
                str = "";
                continue;
            }
            data = data.concat(value[i]);
        }
        if(data.length){
            result.push(data);
        }
        if(strStack.length || arrayStack.length){
        }
        return result;
    }
    Lyte.Compile.deepCopyObject = function( obj )  {
        var current, copies = [{source : obj, target : Object.create(Object.getPrototypeOf(obj))}], keys, propertyIndex, descriptor, nextSource, indexOf, sourceReferences = [obj];
        var cloneObject = copies[0].target, targetReferences = [cloneObject];
        while(current = copies.shift()){
            keys = Object.getOwnPropertyNames(current.source);
            for(propertyIndex = 0; propertyIndex < keys.length; propertyIndex++){
                descriptor = Object.getOwnPropertyDescriptor(current.source, keys[propertyIndex]);
                if(!descriptor.value || typeof descriptor.value != "object"){
                    Object.defineProperty(current.target, keys[propertyIndex], descriptor);
                    continue;
                }
                  nextSource = descriptor.value;
                  descriptor.value = Array.isArray(nextSource) ? [] : Object.create(Object.getPrototypeOf(nextSource));
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
          }
        return cloneObject;
    }
    function setResponse() {

    }

/**
 *  @param1 actualComponent - Actual component where we are gonna render the dynamicTemplate.
 *  @param2 templateToRender - clonedNode / String (Which will be converted to DOM) - that needs to be rendered. 
 *  @returnVal rendered dom
 */
Lyte.Component.compileDynamicTemplate = function(actualComponent, templateToRender) {
    if(!actualComponent || !actualComponent.hasAttribute("lyte-rendered")) {
        console.error("Provided element is not a component / not rendered yet")
        return;
    }
    if(!templateToRender) {
        console.error("No template is provided for appending")
        return;
    }
    if(typeof templateToRender === "string") {
        var temp = document.createElement("div");
        temp.innerHTML = templateToRender;
        templateToRender = temp.childNodes[0]; 
    }
    var templateToRenderAct = document.createElement("template");
    //templateToRenderAct.content.appendChild(templateToRender);
    if(Lyte._ie) {
        templateToRenderAct.appendChild(templateToRender);
    } else {
        templateToRenderAct.content.appendChild(templateToRender);    
    }
    var dynamicNodes = Lyte.Compile.getDynamicNodes(actualComponent.tagName, undefined, templateToRenderAct);
    var returnVal = actualComponent.renderNodes(templateToRenderAct, dynamicNodes.dynamicNodes, undefined, {}, true, {}, templateToRenderAct.outerHTML)
    return returnVal;
    
}
/**
 * @param1 func - function to execute without losing bindings
 * @param2 scope - scope with which the function must be executed 
 */
Lyte.Component.doDomProcessing = function(func, scope) {
    LyteComponent.ignoreDisconnect = true;
    if(scope) {
        func.call(scope);
    } else {
        func();    
    }
    LyteComponent.ignoreDisconnect = false;
}

Lyte.Component.getComponentTemplate = function(componentName) {
    var temp = LyteComponent.dummyLyteComponentsDiv.querySelector("template[tag-name='" + componentName + "']");
    if(temp) {
        if(temp.content) {
            return temp.content;    
        } else {
            var div = document.createElement("div")
            div.innerHTML = temp.outerHTML;
            return div.querySelector("template");
        }
    } else {
        console.error("No such component is registered");
        return;
    }
}

Lyte.Compile.getTemplateFromString = function(str, outlet) {
    var div = document.createElement("div");
    div.innerHTML = str;
    div.remove();
    return div.firstChild;
}