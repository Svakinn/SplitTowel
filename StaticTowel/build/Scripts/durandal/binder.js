define(["durandal/system","knockout"],function(e,t){function n(t){return void 0===t?{applyBindings:!0}:e.isBoolean(t)?{applyBindings:t}:(void 0===t.applyBindings&&(t.applyBindings=!0),t)}function i(i,u,l,f){if(!u||!l)return r.throwOnErrors?e.error(o):e.log(o,u,f),void 0;if(!u.getAttribute)return r.throwOnErrors?e.error(a):e.log(a,u,f),void 0;var v=u.getAttribute("data-view");try{var d;return i&&i.binding&&(d=i.binding(u)),d=n(d),r.binding(f,u,d),d.applyBindings?(e.log("Binding",v,f),t.applyBindings(l,u)):i&&t.utils.domData.set(u,c,{$data:i}),r.bindingComplete(f,u,d),i&&i.bindingComplete&&i.bindingComplete(u),t.utils.domData.set(u,s,d),d}catch(p){p.message=p.message+";\nView: "+v+";\nModuleId: "+e.getModuleId(f),r.throwOnErrors?e.error(p):e.log(p.message)}}var r,o="Insufficient Information to Bind",a="Unexpected View Type",s="durandal-binding-instruction",c="__ko_bindingContext__";return r={binding:e.noop,bindingComplete:e.noop,throwOnErrors:!1,getBindingInstruction:function(e){return t.utils.domData.get(e,s)},bindContext:function(e,t,n){return n&&e&&(e=e.createChildContext(n)),i(n,t,e,n||(e?e.$data:null))},bind:function(e,t){return i(e,t,e,e)}}});