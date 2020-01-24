var worker = new Worker('lyte-idb-worker.js');
worker.onmessage = function(event){
  var obj = event.data;
  if(obj){
    if(obj.type == "open"){
      if(store.adapter.application == undefined || !store.adapter.application.differIDBAction){
        setTimeout(function(){
          LyteIDB.triggerIDBInsertion();
        },0);
      }
    }
    else if(obj.qProcess =="completed4"){
      var key = Object.keys(store.$.idbQ2)[0]
      var arr = obj.data || [];
      arr.forEach(function(item,index){
        var rec = store.peekRecord(key,item);
        if(Lyte.isRecord(rec)){
          rec.$.inIDB = true;
        }
      });
      delete store.$.idbQ2[key];
      LyteIDB.isProcessing = false;        
    }
    else if(obj.hasOwnProperty("code")){
      var req = obj.req;
      var q = LyteIDB[obj.model][obj.type];
      var reqObj = (req == "findRecord") ? q[obj.key].splice(0,1)[0] : q.splice(0,1)[0];
      if(obj.code == 200){
        if(reqObj && reqObj.resolve){
          reqObj.resolve(obj.data);
        }
      }else if(obj.code == 400){
        if(reqObj && reqObj.reject){
          reqObj.reject();
        }
      }
      if(q.length == 0){
        delete LyteIDB[obj.model][obj.type];
      }
    }
    else if(obj.pause){
      var reqObj = LyteIDB[obj.model][obj.type];
      var pause = localStorage.getItem("pause");
      localStorage.setItem("pause",!pause);
      if(reqObj && reqObj.reject){
        reqObj.reject();
      }
    }
  }
  if(Object.keys(store.$.idbQ2).length == 0){
    LyteIDB.isProcessing = false;
  }
};
window.addEventListener("load",function(){
  var models = [];
  for(var key in store.model){
    var pK = store.model[key]._pK;
    models.push({modelName:key,pK:pK});
  }
  var scope = store.$.cbScp("app", "idbBeforeOpen"), args;
  if(scope){
    args = store.$.consArg(models);
    models = store.$.cB(scope, args);
  }
  var host = window.location.host;
  var idb = localStorage.getItem("idb"+host); 
  if(idb == undefined){
    localStorage.setItem("idb"+host,1);
  }
  else{
    idb = parseInt(idb);
    localStorage.setItem("idb"+host,idb+1);
  }
  localStorage.setItem("pause",false);
  document.addEventListener("storage",function(){
    worker.postMessage({type:"close"});
  });
  worker.postMessage({type:'open',models:models});
  models = [];  
});
window.addEventListener("unload",function(){
  LyteIDB.removeIDBDatabase();
});
var LyteIDB = {
    isProcessing:false,
    removeIDBDatabase : function(){
      var host = window.location.host;
      var idb = localStorage.getItem("idb"+host);
      if(idb == undefined || parseInt(idb) - 1 == 0){
        indexedDB.deleteDatabase("lyte");
        localStorage.removeItem("idb"+host);    
      }
      else{
        localStorage.setItem("idb"+host,parseInt(idb) - 1);
      }
    },
    postMessage:function(obj){
        if(obj.resolve && obj.reject){
            LyteIDB[obj.model] = LyteIDB[obj.model] || {};
            var qObj = {key:obj.key, resolve : obj.resolve, reject: obj.reject, queryParams: obj.queryParams, req: obj.req};
            if(obj.req == "findRecord"){
              var typeQ = LyteIDB[obj.model][obj.type] = LyteIDB[obj.model][obj.type] || {};
              var q = typeQ[obj.key] = typeQ[obj.key] || []
              q.push(qObj); 
            }
            else{
              var q = LyteIDB[obj.model][obj.type] = LyteIDB[obj.model][obj.type] || [];
              q.push(qObj); 
            }
            delete obj.resolve;
            delete obj.reject;
        }
        worker.postMessage(obj);
    },
    IDBInsert:function(){
      var isProcessing = LyteIDB.isProcessing;
      if(!isProcessing && Object.keys(store.$.idbQ2).length){
        LyteIDB.isProcessing = true;
        var module;
        var module = Object.keys(store.$.idbQ2)[0];
        while(module && store.$.idbQ2[module] && store.$.idbQ2[module].length == 0){
          delete store.$.idbQ2[module];
          module = Object.keys(store.$.idbQ2)[0];
        }
        if(module){
            var q = store.$.idbQ2[module];
            var pK = store.modelFor(module)._pK;
            if(q.length){
              worker.postMessage({type:"push",module:module,data:q,pK:pK});        
            }
            else{
              delete store.$.idbQ2[module];
            }
        }
      }
      if(Object.keys(store.$.idbQ2).length == 0){
        LyteIDB.isProcessing = false;
      }    
    },
    triggerIDBInsertion:function(){
      setInterval(function(){
        setTimeout(LyteIDB.IDBInsert,0);    
      },10);
    }
}

