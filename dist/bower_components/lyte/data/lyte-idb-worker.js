var idb, qLen, qTemp, pK, module;
self.onmessage = function(event){
    var q = event.data;
    if(q.type != "open" && !idb){
        self.postMessage({pause:true,model:q.model,type:q.type});
    }
    else if(q.type == "push"){
        qLen = qTemp = 0;
        module = q.module;
        pK = undefined;
        var data = q.data;
        if(!Array.isArray(data)){
            data = [data];                    
        }
        pK = q.pK;
        qLen = data.length;
        data.forEach(function(item, index){
            qProcess(item,item.type);
        });
    }
    else{
        qProcess(q, q.type);
    }
};
function processed(){
    if(++qTemp == qLen){
        getAll({model:module}).then(function(res){
            var pks = [];
            var data = res.data || [];
            data.forEach(function(item,index){
                pks.push(item[pK]);
            })
            self.postMessage({qProcess:"completed4",data:pks});
        });
    }
}
function qProcess(obj, type){
    switch(obj.type){
        case "getCachedData":
        {
            getCachedData(obj).then(function(res){
                self.postMessage({model:obj.model,type:obj.type,queryParams:obj.queryParams,code:200,data:res, req:obj.req, key:obj.key});
            },function(){
                self.postMessage({model:obj.model,type:obj.type,queryParams:obj.queryParams,code:400, req:obj.req, key:obj.key});                
            });
            break;
        }
        case "pushPayload":{
            if(!obj.data[obj.model]){
                var data = obj.data;
                obj.data = {};
                obj.data[obj.model] = data;
            }
        }
        case "findAll":
        case "findRecord":
        case "push": {
            push(obj,obj.type).then(processed,processed);
            break;
        }
        case "open": {
            openIDB(obj);
            break;
        }   
        case "create": {
            addMultiple(obj).then(processed,processed);
            break;
        }
        case "createRecord": {
            addData(obj).then(processed,processed);
            break;
        }   
        case "delete": {
            deleteMultiple(obj).then(processed,processed);
            break;
        }
        case "destroyRecord":
        case "deleteRecord": {
            deleteData(obj).then(processed,processed);
            break;
        }   
        case "update":{
            updateMultiple(obj).then(processed,processed);
            break;
        }
        case "updateRecord":{
            updateData(obj).then(processed,processed);
            break;
        }
        case "get":{
            getData(obj).then(function(res){
                if(res.data == undefined){
                    self.postMessage({model:obj.model,type:obj.type,queryParams:obj.queryParams,code:400,req:obj.req, key:obj.key});                                    
                }
                else{
                    var resp = {};
                    resp[obj.model] = res.data;
                    self.postMessage({model:obj.model,type:obj.type,queryParams:obj.queryParams,code:200,data:resp,req:obj.req,  key:obj.key});
                }
            },function(){
                self.postMessage({model:obj.model,type:obj.type,queryParams:obj.queryParams,code:400,req:obj.req,  key:obj.key});                
            });
            break;
        }
        case "getAll":{
            getAll(obj).then(function(res){
                if(Array.isArray(res.data) && !res.data.length){
                    self.postMessage({model:obj.model,type:obj.type,queryParams:obj.queryParams,code:400,req:obj.req});                                    
                } else{
                    var resp = {};
                    resp[obj.model] = res.data;
                    self.postMessage({model:obj.model,type:obj.type,queryParams:obj.queryParams,code:200,data:resp, req:obj.req});
                }
            },function(){
                self.postMessage({model:obj.model,type:obj.type,queryParams:obj.queryParams,code:400, req:obj.req});                
            });
            break;
        }
        case "close":{
            idb.close();
            break;
        }
        default:{
            self.postMessage({msg:"No such actions defined "+obj.type, data:obj.data})
            break;
        }
    }
}
function getCachedData(obj){
    return new Promise(function(resolve, reject){
        var module = obj.model;
        var qP = obj.queryParams;
        var type = obj.req;
        var key = obj.key;
        getData({model:"__meta",key:module}).then(function(res){
            if(res.data == undefined){
                return reject();
            }
            var cachedQ = res.data.cache;
            cachedQ = cachedQ[type];
            var index = checkWithQp(cachedQ,obj);
            if(index != -1){
                var q = cachedQ[index], vals;
                if(type == "findRecord"){
                    if(q.key && key && q.key == key){
                        vals = [key];
                    }
                    else{
                        return reject();
                    }
                }
                else{
                    vals = q.data[module];
                }
                var len = vals.length, i=0, result = [];
                // if(type == "findRecord" && !Array.isArray(vals)){
                //     vals = [vals];
                // }
                vals.forEach(function(itm,idx){
                    getData({model:module,key:itm}).then(function(msg){
                        result[idx] = msg.data;
                        if(++i == len){
                            var retObj = {};
                            retObj[obj.model] = result;
                            return resolve(retObj);
                        }
                    });
                });
            }
            else{
                return reject();
            }
        });    
    });
}
function postMsg(msg){
    self.postMessage(msg);
}
function push(obj,type){
    return new Promise(function(resolve, reject){
        var data = obj.data, len = data.length, i = 0;
        var module = obj.model;
        checkAndInsert(module,obj.data).then(function(res){
            if(type == "pushPayload"){
                return resolve();
            }
            else{
                getData({model:"__meta",key:module}).then(function(msg){
                    var rObj = {};
                    rObj.queryParams = obj.queryParams;
                    var rData = rObj.data = obj.data;
                    if(type == "findRecord"){
                        rObj.key = obj.key;
                    }
                    var kLen = rData[module].length;
                    for(var k=0;k<kLen;k++){
                        rData[module][k] = res[k][pK];
                    }
                    if(msg.data == undefined){
                        var result = {};
                        result.module = module;  
                        result.cache = {};  
                        result.cache[type] = result.data || [];
                        result.cache[type].push(rObj);        
                        addData({model:"__meta",data:result}).then(function(){
                            return resolve();                
                        },function(){
                            self.console.error("error adding ",result);
                        });          
                    }
                    else{
                        msg.data.cache[type] = msg.data.cache[type] || [];
                        msg.data.cache[type].push(rObj);     
                        updateData({model:"__meta",data:msg.data}).then(function(){
                            return resolve();                
                        },function(){
                            self.console.error("error adding ",msg.data);
                        });                        
                    }
                });
            }
        },function(){
            reject();
        });
    });
}
function checkQpAndPush(arr, data){
    if(data && !Array.isArray(data)){
        data = [data];
    }
    data.forEach(function(item, index){
        var res = checkWithQp(arr, data)
        if(res == -1){
            arr.push(item);
        }
        else{
            arr[res].data = item;
        }
    });
}
function checkWithQp(arr, data){
    var ind = -1;
    arr = arr || [];
    arr.forEach(function(item, index){
        var qp1 = item.queryParams || {};
        var qp2 = data.queryParams || {};
        if(qp1 == qp2){
            ind =  index;
            return;
        }
        var qp1L = Object.keys(qp1).length;
        var qp2L = Object.keys(qp2).length, i=0;
        if(qp1L != qp2L){
            return;
        }        
        for(var key in qp1){
            if(qp1[key] == qp2[key]){
                i++;
            }
        }
        if(i == qp1L){
            ind = index;
            return;
        }
    });
    return ind;
}
function checkAndInsert(module, arr){
    var res = [], failed = false;
    return new Promise(function(resolve, reject){
        arr = arr[module];
        arr = arr || [];
        if(!Array.isArray(arr)){
            arr = [arr];
        }
        var arrLen = arr.length, i=0;
        arr.forEach(function(item, index){
            addData({model:module,data:item}).then(function(){
                i++;
                if(i == arrLen){
                    if(failed){
                        return reject();
                    }else{
                        return resolve(arr);
                    }
                }
            },function(){
                failed = true;
                i++;
                if(i == arrLen){
                    if(failed){
                        return reject();
                    }
                    else{
                        return resolve(arr);
                    }
                }
            });
        });
    });
}
function openIDB(obj){
    var dbName = obj.name || 'lyte';
    var version = obj.version || 1;
    var models = obj.models;
    var req = indexedDB.open(dbName, version);
    req.onupgradeneeded = function (e) {
        idb = e.target.result;
        if(models){
            models.forEach(function(item, index){
                idb.createObjectStore(item.modelName,{keyPath:item.pK});
            })
        }
        idb.createObjectStore("__meta",{keyPath:"module"})
        self.postMessage({msg:'successfully upgraded db', type:"open"});
    };
    req.onblocked = function(e){
    }
    req.onsuccess = function (e) {
        idb = e.target.result;
        self.postMessage({msg:'successfully opened db', type:"open"});    
    };
    req.onerror = function(e) {
      self.postMessage({msg:'error'});    
    }
}
function addMultiple(obj){
    return new Promise(function(resolve,reject){
        var len = obj.data.length,i=0;
        obj.data.forEach(function(item, index){
            addData({model:obj.model,data:item}).then(function(){
                if(++i == len){
                    return resolve();
                }
            },function(){
                if(++i == len){
                    return resolve();
                }
            });
        });
    });
}
function addData(obj){
    return new Promise(function(resolve,reject){
        var data = obj.data;
        var model = obj.model;

        var obs = idb.transaction([model],"readwrite").objectStore(model);
        var req = obs.add(data);
        req.onsuccess = function (e){
            return resolve({msg:"Successfully added data"});
            //self.postMessage({msg:"Successfully added data"});
        }
        req.onerror = function (e){
            return reject({msg:"Error while adding data"});
//            self.postMessage({msg:"Error while adding data"});
        }
        req.oncomplete = function (e){
            return resolve({msg:"Successfully added data"});
//          self.postMessage({msg:"Successfully added data"});
        }    
    });
}
function deleteMultiple(obj){
    return new Promise(function(resolve, reject){
        var len = obj.data.length, i=0;
        obj.data.forEach(function(item,index){
            deleteData({model:obj.model,key:item}).then(function(){
                if(++i == len){
                    return resolve();
                }
            },function(){
                if(++i == len){
                    return resolve();
                }
            });
        });
    });
}
function deleteData(obj){
    return new Promise(function(resolve, reject){
        var model = obj.model;
        var key = obj.key;
        var obs = idb.transaction([model],"readwrite").objectStore(model);
        var req = obs.delete(key);
        req.onsuccess = function (e){
            return resolve({msg:"Successfully deleted data"});
            // self.postMessage({msg:"Successfully deleted data"});
        }
        req.onerror = function (e){
            return resolve({msg:"Error while deleting data"});
            // self.postMessage({msg:"Error while deleting data"});
        }
        req.oncomplete = function (e){
            return resolve({msg:"Successfully deleted data"});
            // self.postMessage({msg:"Successfully deleted data"});
        }    
    });
}
function updateMultiple(obj){
    return new Promise(function(resolve, reject){
        var len = obj.data.length, i=0;
        obj.data.forEach(function(item, index){
            updateData({model:obj.model,data:obj.data}).then(function(){
                if(++i == len){
                    return resolve();
                }
            },function(){
                if(++i == len){
                    return resolve();
                }
            });
        });
    });
}
function updateData(obj){
    return new Promise(function(resolve,reject){
        var model = obj.model;
        var data = obj.data;
        var key = obj.key;
        getData(obj).then(function(res){
            var resData = res.data;
            if(res.data == undefined){
                addData(obj).then(function(){
                    return resolve({msg: "Successfully added data"});
                },function(){
                    return reject({msg:"Error while adding data"});
                });
            }
            else{
                for(var key in data){
                    resData[key] = data[key];
                }
                var obs = idb.transaction([model],"readwrite").objectStore(model);
                var req = obs.put(resData);
                req.onsuccess = function (e){
                    return resolve({msg:"Successfully updated data"});
                    // self.postMessage({msg:"Successfully updated data"});
                }
                req.onerror = function (e){
                    return resolve({msg:"Error while updating data"});
                    // self.postMessage({msg:"Error while updating data"});
                }
                req.oncomplete = function (e){
                    return resolve({msg:"Successfully updated data"});            
                    // self.postMessage({msg:"Successfully updated data"});
                }        
            }
        },function(){
            reject();
        });
    });
}
function getData(obj){
    return new Promise(function(resolve,reject){
        var model = obj.model;
        var key = obj.key;
        if(idb && idb.objectStoreNames.contains(model)){
            var obs = idb.transaction([model],"readwrite").objectStore(model);
            if(!key){
                key = obj.data ? obj.data[obs.keyPath] : undefined;
            }
            var req = obs.get(key);
            req.onsuccess = function (e){
                return resolve({msg:"Successfully got data success", data:e.target.result});
                // self.postMessage({msg:"Successfully got data", data:e.target.result});
            }
            req.onerror = function (e){
                return reject({msg:"Error while getting data"});
                // self.postMessage({msg:"Error while getting data"});
            }
            req.oncomplete = function (e){
                return resolve({msg:"Successfully got data complete", data:e.target.result});
                // self.postMessage({msg:"Successfully got data", data:e.target.result});
            }
        }
        else{
            self.postMessage({pause:true, model:obj.model, type: obj.type});
            // return reject({msg:"No such model defined in IDB"});
        }
    });
}
function getAll(obj){
    return new Promise(function(resolve, reject){
        var model = obj.model;
        if(idb && idb.objectStoreNames.contains(model)){
            var obs = idb.transaction([model],"readwrite").objectStore(model);
            var req = obs.getAll();
            req.onsuccess = function (e){
                return resolve({msg:"Successfully got data", data:e.target.result});
                // self.postMessage({msg:"Successfully got data", data:e.target.result});
            }
            req.onerror = function (e){
                return reject({msg:"Error while getting data"});
                // self.postMessage({msg:"Error while getting data"});
            }
            req.oncomplete = function (e){
                return resolve({msg:"Successfully got data", data:e.target.result});
                // self.postMessage({msg:"Successfully got data", data:e.target.result});
            }
        }
        else{
            self.postMessage({pause:true, model:obj.model, type: obj.type});
            // return reject({msg:"No such model defined in IDB"});
        }
    });
}
