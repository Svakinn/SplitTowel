;/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);
;(function(definition){if(typeof bootstrap==="function"){bootstrap("promise",definition)}else if(typeof exports==="object"){module.exports=definition()}else if(typeof define==="function"&&define.amd){define(definition)}else if(typeof ses!=="undefined"){if(!ses.ok()){return}else{ses.makeQ=definition}}else{Q=definition()}})(function(){"use strict";var hasStacks=false;try{throw new Error}catch(e){hasStacks=!!e.stack}var qStartingLine=captureLine();var qFileName;var noop=function(){};var nextTick=function(){var head={task:void 0,next:null};var tail=head;var flushing=false;var requestTick=void 0;var isNodeJS=false;function flush(){while(head.next){head=head.next;var task=head.task;head.task=void 0;var domain=head.domain;if(domain){head.domain=void 0;domain.enter()}try{task()}catch(e){if(isNodeJS){if(domain){domain.exit()}setTimeout(flush,0);if(domain){domain.enter()}throw e}else{setTimeout(function(){throw e},0)}}if(domain){domain.exit()}}flushing=false}nextTick=function(task){tail=tail.next={task:task,domain:isNodeJS&&process.domain,next:null};if(!flushing){flushing=true;requestTick()}};if(typeof process!=="undefined"&&process.nextTick){isNodeJS=true;requestTick=function(){process.nextTick(flush)}}else if(typeof setImmediate==="function"){if(typeof window!=="undefined"){requestTick=setImmediate.bind(window,flush)}else{requestTick=function(){setImmediate(flush)}}}else if(typeof MessageChannel!=="undefined"){var channel=new MessageChannel;channel.port1.onmessage=function(){requestTick=requestPortTick;channel.port1.onmessage=flush;flush()};var requestPortTick=function(){channel.port2.postMessage(0)};requestTick=function(){setTimeout(flush,0);requestPortTick()}}else{requestTick=function(){setTimeout(flush,0)}}return nextTick}();var call=Function.call;function uncurryThis(f){return function(){return call.apply(f,arguments)}}var array_slice=uncurryThis(Array.prototype.slice);var array_reduce=uncurryThis(Array.prototype.reduce||function(callback,basis){var index=0,length=this.length;if(arguments.length===1){do{if(index in this){basis=this[index++];break}if(++index>=length){throw new TypeError}}while(1)}for(;index<length;index++){if(index in this){basis=callback(basis,this[index],index)}}return basis});var array_indexOf=uncurryThis(Array.prototype.indexOf||function(value){for(var i=0;i<this.length;i++){if(this[i]===value){return i}}return-1});var array_map=uncurryThis(Array.prototype.map||function(callback,thisp){var self=this;var collect=[];array_reduce(self,function(undefined,value,index){collect.push(callback.call(thisp,value,index,self))},void 0);return collect});var object_create=Object.create||function(prototype){function Type(){}Type.prototype=prototype;return new Type};var object_hasOwnProperty=uncurryThis(Object.prototype.hasOwnProperty);var object_keys=Object.keys||function(object){var keys=[];for(var key in object){if(object_hasOwnProperty(object,key)){keys.push(key)}}return keys};var object_toString=uncurryThis(Object.prototype.toString);function isObject(value){return value===Object(value)}function isStopIteration(exception){return object_toString(exception)==="[object StopIteration]"||exception instanceof QReturnValue}var QReturnValue;if(typeof ReturnValue!=="undefined"){QReturnValue=ReturnValue}else{QReturnValue=function(value){this.value=value}}var hasES6Generators;try{new Function("(function* (){ yield 1; })");hasES6Generators=true}catch(e){hasES6Generators=false}var STACK_JUMP_SEPARATOR="From previous event:";function makeStackTraceLong(error,promise){if(hasStacks&&promise.stack&&typeof error==="object"&&error!==null&&error.stack&&error.stack.indexOf(STACK_JUMP_SEPARATOR)===-1){var stacks=[];for(var p=promise;!!p;p=p.source){if(p.stack){stacks.unshift(p.stack)}}stacks.unshift(error.stack);var concatedStacks=stacks.join("\n"+STACK_JUMP_SEPARATOR+"\n");error.stack=filterStackString(concatedStacks)}}function filterStackString(stackString){var lines=stackString.split("\n");var desiredLines=[];for(var i=0;i<lines.length;++i){var line=lines[i];if(!isInternalFrame(line)&&!isNodeFrame(line)&&line){desiredLines.push(line)}}return desiredLines.join("\n")}function isNodeFrame(stackLine){return stackLine.indexOf("(module.js:")!==-1||stackLine.indexOf("(node.js:")!==-1}function getFileNameAndLineNumber(stackLine){var attempt1=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);if(attempt1){return[attempt1[1],Number(attempt1[2])]}var attempt2=/at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);if(attempt2){return[attempt2[1],Number(attempt2[2])]}var attempt3=/.*@(.+):(\d+)$/.exec(stackLine);if(attempt3){return[attempt3[1],Number(attempt3[2])]}}function isInternalFrame(stackLine){var fileNameAndLineNumber=getFileNameAndLineNumber(stackLine);if(!fileNameAndLineNumber){return false}var fileName=fileNameAndLineNumber[0];var lineNumber=fileNameAndLineNumber[1];return fileName===qFileName&&lineNumber>=qStartingLine&&lineNumber<=qEndingLine}function captureLine(){if(!hasStacks){return}try{throw new Error}catch(e){var lines=e.stack.split("\n");var firstLine=lines[0].indexOf("@")>0?lines[1]:lines[2];var fileNameAndLineNumber=getFileNameAndLineNumber(firstLine);if(!fileNameAndLineNumber){return}qFileName=fileNameAndLineNumber[0];return fileNameAndLineNumber[1]}}function deprecate(callback,name,alternative){return function(){if(typeof console!=="undefined"&&typeof console.warn==="function"){console.warn(name+" is deprecated, use "+alternative+" instead.",new Error("").stack)}return callback.apply(callback,arguments)}}function Q(value){if(isPromise(value)){return value}if(isPromiseAlike(value)){return coerce(value)}else{return fulfill(value)}}Q.resolve=Q;Q.nextTick=nextTick;Q.longStackSupport=false;Q.defer=defer;function defer(){var messages=[],progressListeners=[],resolvedPromise;var deferred=object_create(defer.prototype);var promise=object_create(Promise.prototype);promise.promiseDispatch=function(resolve,op,operands){var args=array_slice(arguments);if(messages){messages.push(args);if(op==="when"&&operands[1]){progressListeners.push(operands[1])}}else{nextTick(function(){resolvedPromise.promiseDispatch.apply(resolvedPromise,args)})}};promise.valueOf=deprecate(function(){if(messages){return promise}var nearerValue=nearer(resolvedPromise);if(isPromise(nearerValue)){resolvedPromise=nearerValue}return nearerValue},"valueOf","inspect");promise.inspect=function(){if(!resolvedPromise){return{state:"pending"}}return resolvedPromise.inspect()};if(Q.longStackSupport&&hasStacks){try{throw new Error}catch(e){promise.stack=e.stack.substring(e.stack.indexOf("\n")+1)}}function become(newPromise){resolvedPromise=newPromise;promise.source=newPromise;array_reduce(messages,function(undefined,message){nextTick(function(){newPromise.promiseDispatch.apply(newPromise,message)})},void 0);messages=void 0;progressListeners=void 0}deferred.promise=promise;deferred.resolve=function(value){if(resolvedPromise){return}become(Q(value))};deferred.fulfill=function(value){if(resolvedPromise){return}become(fulfill(value))};deferred.reject=function(reason){if(resolvedPromise){return}become(reject(reason))};deferred.notify=function(progress){if(resolvedPromise){return}array_reduce(progressListeners,function(undefined,progressListener){nextTick(function(){progressListener(progress)})},void 0)};return deferred}defer.prototype.makeNodeResolver=function(){var self=this;return function(error,value){if(error){self.reject(error)}else if(arguments.length>2){self.resolve(array_slice(arguments,1))}else{self.resolve(value)}}};Q.promise=promise;function promise(resolver){if(typeof resolver!=="function"){throw new TypeError("resolver must be a function.")}var deferred=defer();try{resolver(deferred.resolve,deferred.reject,deferred.notify)}catch(reason){deferred.reject(reason)}return deferred.promise}Q.passByCopy=function(object){return object};Promise.prototype.passByCopy=function(){return this};Q.join=function(x,y){return Q(x).join(y)};Promise.prototype.join=function(that){return Q([this,that]).spread(function(x,y){if(x===y){return x}else{throw new Error("Can't join: not the same: "+x+" "+y)}})};Q.race=race;function race(answerPs){return promise(function(resolve,reject){for(var i=0,len=answerPs.length;i<len;i++){Q(answerPs[i]).then(resolve,reject)}})}Promise.prototype.race=function(){return this.then(Q.race)};Q.makePromise=Promise;function Promise(descriptor,fallback,inspect){if(fallback===void 0){fallback=function(op){return reject(new Error("Promise does not support operation: "+op))}}if(inspect===void 0){inspect=function(){return{state:"unknown"}}}var promise=object_create(Promise.prototype);promise.promiseDispatch=function(resolve,op,args){var result;try{if(descriptor[op]){result=descriptor[op].apply(promise,args)}else{result=fallback.call(promise,op,args)}}catch(exception){result=reject(exception)}if(resolve){resolve(result)}};promise.inspect=inspect;if(inspect){var inspected=inspect();if(inspected.state==="rejected"){promise.exception=inspected.reason}promise.valueOf=deprecate(function(){var inspected=inspect();if(inspected.state==="pending"||inspected.state==="rejected"){return promise}return inspected.value})}return promise}Promise.prototype.toString=function(){return"[object Promise]"};Promise.prototype.then=function(fulfilled,rejected,progressed){var self=this;var deferred=defer();var done=false;function _fulfilled(value){try{return typeof fulfilled==="function"?fulfilled(value):value}catch(exception){return reject(exception)}}function _rejected(exception){if(typeof rejected==="function"){makeStackTraceLong(exception,self);try{return rejected(exception)}catch(newException){return reject(newException)}}return reject(exception)}function _progressed(value){return typeof progressed==="function"?progressed(value):value}nextTick(function(){self.promiseDispatch(function(value){if(done){return}done=true;deferred.resolve(_fulfilled(value))},"when",[function(exception){if(done){return}done=true;deferred.resolve(_rejected(exception))}])});self.promiseDispatch(void 0,"when",[void 0,function(value){var newValue;var threw=false;try{newValue=_progressed(value)}catch(e){threw=true;if(Q.onerror){Q.onerror(e)}else{throw e}}if(!threw){deferred.notify(newValue)}}]);return deferred.promise};Q.when=when;function when(value,fulfilled,rejected,progressed){return Q(value).then(fulfilled,rejected,progressed)}Promise.prototype.thenResolve=function(value){return this.then(function(){return value})};Q.thenResolve=function(promise,value){return Q(promise).thenResolve(value)};Promise.prototype.thenReject=function(reason){return this.then(function(){throw reason})};Q.thenReject=function(promise,reason){return Q(promise).thenReject(reason)};Q.nearer=nearer;function nearer(value){if(isPromise(value)){var inspected=value.inspect();if(inspected.state==="fulfilled"){return inspected.value}}return value}Q.isPromise=isPromise;function isPromise(object){return isObject(object)&&typeof object.promiseDispatch==="function"&&typeof object.inspect==="function"}Q.isPromiseAlike=isPromiseAlike;function isPromiseAlike(object){return isObject(object)&&typeof object.then==="function"}Q.isPending=isPending;function isPending(object){return isPromise(object)&&object.inspect().state==="pending"}Promise.prototype.isPending=function(){return this.inspect().state==="pending"};Q.isFulfilled=isFulfilled;function isFulfilled(object){return!isPromise(object)||object.inspect().state==="fulfilled"}Promise.prototype.isFulfilled=function(){return this.inspect().state==="fulfilled"};Q.isRejected=isRejected;function isRejected(object){return isPromise(object)&&object.inspect().state==="rejected"}Promise.prototype.isRejected=function(){return this.inspect().state==="rejected"};var unhandledReasons=[];var unhandledRejections=[];var unhandledReasonsDisplayed=false;var trackUnhandledRejections=true;function displayUnhandledReasons(){if(!unhandledReasonsDisplayed&&typeof window!=="undefined"&&!window.Touch&&window.console){console.warn("[Q] Unhandled rejection reasons (should be empty):",unhandledReasons)}unhandledReasonsDisplayed=true}function logUnhandledReasons(){for(var i=0;i<unhandledReasons.length;i++){var reason=unhandledReasons[i];console.warn("Unhandled rejection reason:",reason)}}function resetUnhandledRejections(){unhandledReasons.length=0;unhandledRejections.length=0;unhandledReasonsDisplayed=false;if(!trackUnhandledRejections){trackUnhandledRejections=true;if(typeof process!=="undefined"&&process.on){process.on("exit",logUnhandledReasons)}}}function trackRejection(promise,reason){if(!trackUnhandledRejections){return}unhandledRejections.push(promise);if(reason&&typeof reason.stack!=="undefined"){unhandledReasons.push(reason.stack)}else{unhandledReasons.push("(no stack) "+reason)}displayUnhandledReasons()}function untrackRejection(promise){if(!trackUnhandledRejections){return}var at=array_indexOf(unhandledRejections,promise);if(at!==-1){unhandledRejections.splice(at,1);unhandledReasons.splice(at,1)}}Q.resetUnhandledRejections=resetUnhandledRejections;Q.getUnhandledReasons=function(){return unhandledReasons.slice()};Q.stopUnhandledRejectionTracking=function(){resetUnhandledRejections();if(typeof process!=="undefined"&&process.on){process.removeListener("exit",logUnhandledReasons)}trackUnhandledRejections=false};resetUnhandledRejections();Q.reject=reject;function reject(reason){var rejection=Promise({when:function(rejected){if(rejected){untrackRejection(this)}return rejected?rejected(reason):this}},function fallback(){return this},function inspect(){return{state:"rejected",reason:reason}});trackRejection(rejection,reason);return rejection}Q.fulfill=fulfill;function fulfill(value){return Promise({when:function(){return value},get:function(name){return value[name]},set:function(name,rhs){value[name]=rhs},"delete":function(name){delete value[name]},post:function(name,args){if(name===null||name===void 0){return value.apply(void 0,args)}else{return value[name].apply(value,args)}},apply:function(thisp,args){return value.apply(thisp,args)},keys:function(){return object_keys(value)}},void 0,function inspect(){return{state:"fulfilled",value:value}})}function coerce(promise){var deferred=defer();nextTick(function(){try{promise.then(deferred.resolve,deferred.reject,deferred.notify)}catch(exception){deferred.reject(exception)}});return deferred.promise}Q.master=master;function master(object){return Promise({isDef:function(){}},function fallback(op,args){return dispatch(object,op,args)},function(){return Q(object).inspect()})}Q.spread=spread;function spread(value,fulfilled,rejected){return Q(value).spread(fulfilled,rejected)}Promise.prototype.spread=function(fulfilled,rejected){return this.all().then(function(array){return fulfilled.apply(void 0,array)},rejected)};Q.async=async;function async(makeGenerator){return function(){function continuer(verb,arg){var result;if(hasES6Generators){try{result=generator[verb](arg)}catch(exception){return reject(exception)}if(result.done){return result.value}else{return when(result.value,callback,errback)}}else{try{result=generator[verb](arg)}catch(exception){if(isStopIteration(exception)){return exception.value}else{return reject(exception)}}return when(result,callback,errback)}}var generator=makeGenerator.apply(this,arguments);var callback=continuer.bind(continuer,"next");var errback=continuer.bind(continuer,"throw");return callback()}}Q.spawn=spawn;function spawn(makeGenerator){Q.done(Q.async(makeGenerator)())}Q["return"]=_return;function _return(value){throw new QReturnValue(value)}Q.promised=promised;function promised(callback){return function(){return spread([this,all(arguments)],function(self,args){return callback.apply(self,args)})}}Q.dispatch=dispatch;function dispatch(object,op,args){return Q(object).dispatch(op,args)}Promise.prototype.dispatch=function(op,args){var self=this;var deferred=defer();nextTick(function(){self.promiseDispatch(deferred.resolve,op,args)});return deferred.promise};Q.get=function(object,key){return Q(object).dispatch("get",[key])};Promise.prototype.get=function(key){return this.dispatch("get",[key])};Q.set=function(object,key,value){return Q(object).dispatch("set",[key,value])};Promise.prototype.set=function(key,value){return this.dispatch("set",[key,value])};Q.del=Q["delete"]=function(object,key){return Q(object).dispatch("delete",[key])};Promise.prototype.del=Promise.prototype["delete"]=function(key){return this.dispatch("delete",[key])};Q.mapply=Q.post=function(object,name,args){return Q(object).dispatch("post",[name,args])};Promise.prototype.mapply=Promise.prototype.post=function(name,args){return this.dispatch("post",[name,args])};Q.send=Q.mcall=Q.invoke=function(object,name){return Q(object).dispatch("post",[name,array_slice(arguments,2)])};Promise.prototype.send=Promise.prototype.mcall=Promise.prototype.invoke=function(name){return this.dispatch("post",[name,array_slice(arguments,1)])};Q.fapply=function(object,args){return Q(object).dispatch("apply",[void 0,args])};Promise.prototype.fapply=function(args){return this.dispatch("apply",[void 0,args])};Q["try"]=Q.fcall=function(object){return Q(object).dispatch("apply",[void 0,array_slice(arguments,1)])};Promise.prototype.fcall=function(){return this.dispatch("apply",[void 0,array_slice(arguments)])};Q.fbind=function(object){var promise=Q(object);var args=array_slice(arguments,1);return function fbound(){return promise.dispatch("apply",[this,args.concat(array_slice(arguments))])}};Promise.prototype.fbind=function(){var promise=this;var args=array_slice(arguments);return function fbound(){return promise.dispatch("apply",[this,args.concat(array_slice(arguments))])}};Q.keys=function(object){return Q(object).dispatch("keys",[])};Promise.prototype.keys=function(){return this.dispatch("keys",[])};Q.all=all;function all(promises){return when(promises,function(promises){var countDown=0;var deferred=defer();array_reduce(promises,function(undefined,promise,index){var snapshot;if(isPromise(promise)&&(snapshot=promise.inspect()).state==="fulfilled"){promises[index]=snapshot.value}else{++countDown;when(promise,function(value){promises[index]=value;if(--countDown===0){deferred.resolve(promises)}},deferred.reject,function(progress){deferred.notify({index:index,value:progress})})}},void 0);if(countDown===0){deferred.resolve(promises)}return deferred.promise})}Promise.prototype.all=function(){return all(this)};Q.allResolved=deprecate(allResolved,"allResolved","allSettled");function allResolved(promises){return when(promises,function(promises){promises=array_map(promises,Q);return when(all(array_map(promises,function(promise){return when(promise,noop,noop)})),function(){return promises})})}Promise.prototype.allResolved=function(){return allResolved(this)};Q.allSettled=allSettled;function allSettled(promises){return Q(promises).allSettled()}Promise.prototype.allSettled=function(){return this.then(function(promises){return all(array_map(promises,function(promise){promise=Q(promise);function regardless(){return promise.inspect()}return promise.then(regardless,regardless)}))})};Q.fail=Q["catch"]=function(object,rejected){return Q(object).then(void 0,rejected)};Promise.prototype.fail=Promise.prototype["catch"]=function(rejected){return this.then(void 0,rejected)};Q.progress=progress;function progress(object,progressed){return Q(object).then(void 0,void 0,progressed)}Promise.prototype.progress=function(progressed){return this.then(void 0,void 0,progressed)};Q.fin=Q["finally"]=function(object,callback){return Q(object)["finally"](callback)};Promise.prototype.fin=Promise.prototype["finally"]=function(callback){callback=Q(callback);return this.then(function(value){return callback.fcall().then(function(){return value})},function(reason){return callback.fcall().then(function(){throw reason})})};Q.done=function(object,fulfilled,rejected,progress){return Q(object).done(fulfilled,rejected,progress)};Promise.prototype.done=function(fulfilled,rejected,progress){var onUnhandledError=function(error){nextTick(function(){makeStackTraceLong(error,promise);if(Q.onerror){Q.onerror(error)}else{throw error}})};var promise=fulfilled||rejected||progress?this.then(fulfilled,rejected,progress):this;if(typeof process==="object"&&process&&process.domain){onUnhandledError=process.domain.bind(onUnhandledError)}promise.then(void 0,onUnhandledError)};Q.timeout=function(object,ms,message){return Q(object).timeout(ms,message)};Promise.prototype.timeout=function(ms,message){var deferred=defer();var timeoutId=setTimeout(function(){deferred.reject(new Error(message||"Timed out after "+ms+" ms"))},ms);this.then(function(value){clearTimeout(timeoutId);deferred.resolve(value)},function(exception){clearTimeout(timeoutId);deferred.reject(exception)},deferred.notify);return deferred.promise};Q.delay=function(object,timeout){if(timeout===void 0){timeout=object;object=void 0}return Q(object).delay(timeout)};Promise.prototype.delay=function(timeout){return this.then(function(value){var deferred=defer();setTimeout(function(){deferred.resolve(value)},timeout);return deferred.promise})};Q.nfapply=function(callback,args){return Q(callback).nfapply(args)};Promise.prototype.nfapply=function(args){var deferred=defer();var nodeArgs=array_slice(args);nodeArgs.push(deferred.makeNodeResolver());this.fapply(nodeArgs).fail(deferred.reject);return deferred.promise};Q.nfcall=function(callback){var args=array_slice(arguments,1);return Q(callback).nfapply(args)};Promise.prototype.nfcall=function(){var nodeArgs=array_slice(arguments);var deferred=defer();nodeArgs.push(deferred.makeNodeResolver());this.fapply(nodeArgs).fail(deferred.reject);return deferred.promise};Q.nfbind=Q.denodeify=function(callback){var baseArgs=array_slice(arguments,1);return function(){var nodeArgs=baseArgs.concat(array_slice(arguments));var deferred=defer();nodeArgs.push(deferred.makeNodeResolver());Q(callback).fapply(nodeArgs).fail(deferred.reject);return deferred.promise}};Promise.prototype.nfbind=Promise.prototype.denodeify=function(){var args=array_slice(arguments);args.unshift(this);return Q.denodeify.apply(void 0,args)};Q.nbind=function(callback,thisp){var baseArgs=array_slice(arguments,2);return function(){var nodeArgs=baseArgs.concat(array_slice(arguments));var deferred=defer();nodeArgs.push(deferred.makeNodeResolver());function bound(){return callback.apply(thisp,arguments)}Q(bound).fapply(nodeArgs).fail(deferred.reject);return deferred.promise}};Promise.prototype.nbind=function(){var args=array_slice(arguments,0);args.unshift(this);return Q.nbind.apply(void 0,args)};Q.nmapply=Q.npost=function(object,name,args){return Q(object).npost(name,args)};Promise.prototype.nmapply=Promise.prototype.npost=function(name,args){var nodeArgs=array_slice(args||[]);var deferred=defer();nodeArgs.push(deferred.makeNodeResolver());this.dispatch("post",[name,nodeArgs]).fail(deferred.reject);return deferred.promise};Q.nsend=Q.nmcall=Q.ninvoke=function(object,name){var nodeArgs=array_slice(arguments,2);var deferred=defer();nodeArgs.push(deferred.makeNodeResolver());Q(object).dispatch("post",[name,nodeArgs]).fail(deferred.reject);return deferred.promise};Promise.prototype.nsend=Promise.prototype.nmcall=Promise.prototype.ninvoke=function(name){var nodeArgs=array_slice(arguments,1);var deferred=defer();nodeArgs.push(deferred.makeNodeResolver());this.dispatch("post",[name,nodeArgs]).fail(deferred.reject);return deferred.promise};Q.nodeify=nodeify;function nodeify(object,nodeback){return Q(object).nodeify(nodeback)}Promise.prototype.nodeify=function(nodeback){if(nodeback){this.then(function(value){nextTick(function(){nodeback(null,value)})},function(error){nextTick(function(){nodeback(error)})})}else{return this}};var qEndingLine=captureLine();return Q});
;// Knockout JavaScript library v2.3.0
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)
//Same as .debug.js except debug var has been set to false

(function(){
var DEBUG=false;
(function(undefined){
    // (0, eval)('this') is a robust way of getting a reference to the global object
    // For details, see http://stackoverflow.com/questions/14119988/return-this-0-evalthis/14120023#14120023
    var window = this || (0, eval)('this'),
        document = window['document'],
        navigator = window['navigator'],
        jQuery = window["jQuery"],
        JSON = window["JSON"];
(function(factory) {
    // Support three module loading scenarios
    if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
        // [1] CommonJS/Node.js
        var target = module['exports'] || exports; // module.exports is for Node.js
        factory(target);
    } else if (typeof define === 'function' && define['amd']) {
        // [2] AMD anonymous module
        define(['exports'], factory);
    } else {
        // [3] No module loader (plain <script> tag) - put directly in global namespace
        factory(window['ko'] = {});
    }
}(function(koExports){
// Internally, all KO objects are attached to koExports (even the non-exported ones whose names will be minified by the closure compiler).
// In the future, the following "ko" variable may be made distinct from "koExports" so that private objects are not externally reachable.
var ko = typeof koExports !== 'undefined' ? koExports : {};
// Google Closure Compiler helpers (used only to make the minified file smaller)
ko.exportSymbol = function(koPath, object) {
	var tokens = koPath.split(".");

	// In the future, "ko" may become distinct from "koExports" (so that non-exported objects are not reachable)
	// At that point, "target" would be set to: (typeof koExports !== "undefined" ? koExports : ko)
	var target = ko;

	for (var i = 0; i < tokens.length - 1; i++)
		target = target[tokens[i]];
	target[tokens[tokens.length - 1]] = object;
};
ko.exportProperty = function(owner, publicName, object) {
  owner[publicName] = object;
};
ko.version = "2.3.0";

ko.exportSymbol('version', ko.version);
ko.utils = (function () {
    var objectForEach = function(obj, action) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                action(prop, obj[prop]);
            }
        }
    };

    // Represent the known event types in a compact way, then at runtime transform it into a hash with event name as key (for fast lookup)
    var knownEvents = {}, knownEventTypesByEventName = {};
    var keyEventTypeName = (navigator && /Firefox\/2/i.test(navigator.userAgent)) ? 'KeyboardEvent' : 'UIEvents';
    knownEvents[keyEventTypeName] = ['keyup', 'keydown', 'keypress'];
    knownEvents['MouseEvents'] = ['click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave'];
    objectForEach(knownEvents, function(eventType, knownEventsForType) {
        if (knownEventsForType.length) {
            for (var i = 0, j = knownEventsForType.length; i < j; i++)
                knownEventTypesByEventName[knownEventsForType[i]] = eventType;
        }
    });
    var eventsThatMustBeRegisteredUsingAttachEvent = { 'propertychange': true }; // Workaround for an IE9 issue - https://github.com/SteveSanderson/knockout/issues/406

    // Detect IE versions for bug workarounds (uses IE conditionals, not UA string, for robustness)
    // Note that, since IE 10 does not support conditional comments, the following logic only detects IE < 10.
    // Currently this is by design, since IE 10+ behaves correctly when treated as a standard browser.
    // If there is a future need to detect specific versions of IE10+, we will amend this.
    var ieVersion = document && (function() {
        var version = 3, div = document.createElement('div'), iElems = div.getElementsByTagName('i');

        // Keep constructing conditional HTML blocks until we hit one that resolves to an empty fragment
        while (
            div.innerHTML = '<!--[if gt IE ' + (++version) + ']><i></i><![endif]-->',
            iElems[0]
        ) {}
        return version > 4 ? version : undefined;
    }());
    var isIe6 = ieVersion === 6,
        isIe7 = ieVersion === 7;

    function isClickOnCheckableElement(element, eventType) {
        if ((ko.utils.tagNameLower(element) !== "input") || !element.type) return false;
        if (eventType.toLowerCase() != "click") return false;
        var inputType = element.type;
        return (inputType == "checkbox") || (inputType == "radio");
    }

    return {
        fieldsIncludedWithJsonPost: ['authenticity_token', /^__RequestVerificationToken(_.*)?$/],

        arrayForEach: function (array, action) {
            for (var i = 0, j = array.length; i < j; i++)
                action(array[i]);
        },

        arrayIndexOf: function (array, item) {
            if (typeof Array.prototype.indexOf == "function")
                return Array.prototype.indexOf.call(array, item);
            for (var i = 0, j = array.length; i < j; i++)
                if (array[i] === item)
                    return i;
            return -1;
        },

        arrayFirst: function (array, predicate, predicateOwner) {
            for (var i = 0, j = array.length; i < j; i++)
                if (predicate.call(predicateOwner, array[i]))
                    return array[i];
            return null;
        },

        arrayRemoveItem: function (array, itemToRemove) {
            var index = ko.utils.arrayIndexOf(array, itemToRemove);
            if (index >= 0)
                array.splice(index, 1);
        },

        arrayGetDistinctValues: function (array) {
            array = array || [];
            var result = [];
            for (var i = 0, j = array.length; i < j; i++) {
                if (ko.utils.arrayIndexOf(result, array[i]) < 0)
                    result.push(array[i]);
            }
            return result;
        },

        arrayMap: function (array, mapping) {
            array = array || [];
            var result = [];
            for (var i = 0, j = array.length; i < j; i++)
                result.push(mapping(array[i]));
            return result;
        },

        arrayFilter: function (array, predicate) {
            array = array || [];
            var result = [];
            for (var i = 0, j = array.length; i < j; i++)
                if (predicate(array[i]))
                    result.push(array[i]);
            return result;
        },

        arrayPushAll: function (array, valuesToPush) {
            if (valuesToPush instanceof Array)
                array.push.apply(array, valuesToPush);
            else
                for (var i = 0, j = valuesToPush.length; i < j; i++)
                    array.push(valuesToPush[i]);
            return array;
        },

        addOrRemoveItem: function(array, value, included) {
            var existingEntryIndex = array.indexOf ? array.indexOf(value) : ko.utils.arrayIndexOf(array, value);
            if (existingEntryIndex < 0) {
                if (included)
                    array.push(value);
            } else {
                if (!included)
                    array.splice(existingEntryIndex, 1);
            }
        },

        extend: function (target, source) {
            if (source) {
                for(var prop in source) {
                    if(source.hasOwnProperty(prop)) {
                        target[prop] = source[prop];
                    }
                }
            }
            return target;
        },

        objectForEach: objectForEach,

        emptyDomNode: function (domNode) {
            while (domNode.firstChild) {
                ko.removeNode(domNode.firstChild);
            }
        },

        moveCleanedNodesToContainerElement: function(nodes) {
            // Ensure it's a real array, as we're about to reparent the nodes and
            // we don't want the underlying collection to change while we're doing that.
            var nodesArray = ko.utils.makeArray(nodes);

            var container = document.createElement('div');
            for (var i = 0, j = nodesArray.length; i < j; i++) {
                container.appendChild(ko.cleanNode(nodesArray[i]));
            }
            return container;
        },

        cloneNodes: function (nodesArray, shouldCleanNodes) {
            for (var i = 0, j = nodesArray.length, newNodesArray = []; i < j; i++) {
                var clonedNode = nodesArray[i].cloneNode(true);
                newNodesArray.push(shouldCleanNodes ? ko.cleanNode(clonedNode) : clonedNode);
            }
            return newNodesArray;
        },

        setDomNodeChildren: function (domNode, childNodes) {
            ko.utils.emptyDomNode(domNode);
            if (childNodes) {
                for (var i = 0, j = childNodes.length; i < j; i++)
                    domNode.appendChild(childNodes[i]);
            }
        },

        replaceDomNodes: function (nodeToReplaceOrNodeArray, newNodesArray) {
            var nodesToReplaceArray = nodeToReplaceOrNodeArray.nodeType ? [nodeToReplaceOrNodeArray] : nodeToReplaceOrNodeArray;
            if (nodesToReplaceArray.length > 0) {
                var insertionPoint = nodesToReplaceArray[0];
                var parent = insertionPoint.parentNode;
                for (var i = 0, j = newNodesArray.length; i < j; i++)
                    parent.insertBefore(newNodesArray[i], insertionPoint);
                for (var i = 0, j = nodesToReplaceArray.length; i < j; i++) {
                    ko.removeNode(nodesToReplaceArray[i]);
                }
            }
        },

        setOptionNodeSelectionState: function (optionNode, isSelected) {
            // IE6 sometimes throws "unknown error" if you try to write to .selected directly, whereas Firefox struggles with setAttribute. Pick one based on browser.
            if (ieVersion < 7)
                optionNode.setAttribute("selected", isSelected);
            else
                optionNode.selected = isSelected;
        },

        stringTrim: function (string) {
            return string === null || string === undefined ? '' :
                string.trim ?
                    string.trim() :
                    string.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, '');
        },

        stringTokenize: function (string, delimiter) {
            var result = [];
            var tokens = (string || "").split(delimiter);
            for (var i = 0, j = tokens.length; i < j; i++) {
                var trimmed = ko.utils.stringTrim(tokens[i]);
                if (trimmed !== "")
                    result.push(trimmed);
            }
            return result;
        },

        stringStartsWith: function (string, startsWith) {
            string = string || "";
            if (startsWith.length > string.length)
                return false;
            return string.substring(0, startsWith.length) === startsWith;
        },

        domNodeIsContainedBy: function (node, containedByNode) {
            if (containedByNode.compareDocumentPosition)
                return (containedByNode.compareDocumentPosition(node) & 16) == 16;
            while (node != null) {
                if (node == containedByNode)
                    return true;
                node = node.parentNode;
            }
            return false;
        },

        domNodeIsAttachedToDocument: function (node) {
            return ko.utils.domNodeIsContainedBy(node, node.ownerDocument);
        },

        anyDomNodeIsAttachedToDocument: function(nodes) {
            return !!ko.utils.arrayFirst(nodes, ko.utils.domNodeIsAttachedToDocument);
        },

        tagNameLower: function(element) {
            // For HTML elements, tagName will always be upper case; for XHTML elements, it'll be lower case.
            // Possible future optimization: If we know it's an element from an XHTML document (not HTML),
            // we don't need to do the .toLowerCase() as it will always be lower case anyway.
            return element && element.tagName && element.tagName.toLowerCase();
        },

        registerEventHandler: function (element, eventType, handler) {
            var mustUseAttachEvent = ieVersion && eventsThatMustBeRegisteredUsingAttachEvent[eventType];
            if (!mustUseAttachEvent && typeof jQuery != "undefined") {
                if (isClickOnCheckableElement(element, eventType)) {
                    // For click events on checkboxes, jQuery interferes with the event handling in an awkward way:
                    // it toggles the element checked state *after* the click event handlers run, whereas native
                    // click events toggle the checked state *before* the event handler.
                    // Fix this by intecepting the handler and applying the correct checkedness before it runs.
                    var originalHandler = handler;
                    handler = function(event, eventData) {
                        var jQuerySuppliedCheckedState = this.checked;
                        if (eventData)
                            this.checked = eventData.checkedStateBeforeEvent !== true;
                        originalHandler.call(this, event);
                        this.checked = jQuerySuppliedCheckedState; // Restore the state jQuery applied
                    };
                }
                jQuery(element)['bind'](eventType, handler);
            } else if (!mustUseAttachEvent && typeof element.addEventListener == "function")
                element.addEventListener(eventType, handler, false);
            else if (typeof element.attachEvent != "undefined") {
                var attachEventHandler = function (event) { handler.call(element, event); },
                    attachEventName = "on" + eventType;
                element.attachEvent(attachEventName, attachEventHandler);

                // IE does not dispose attachEvent handlers automatically (unlike with addEventListener)
                // so to avoid leaks, we have to remove them manually. See bug #856
                ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
                    element.detachEvent(attachEventName, attachEventHandler);
                });
            } else
                throw new Error("Browser doesn't support addEventListener or attachEvent");
        },

        triggerEvent: function (element, eventType) {
            if (!(element && element.nodeType))
                throw new Error("element must be a DOM node when calling triggerEvent");

            if (typeof jQuery != "undefined") {
                var eventData = [];
                if (isClickOnCheckableElement(element, eventType)) {
                    // Work around the jQuery "click events on checkboxes" issue described above by storing the original checked state before triggering the handler
                    eventData.push({ checkedStateBeforeEvent: element.checked });
                }
                jQuery(element)['trigger'](eventType, eventData);
            } else if (typeof document.createEvent == "function") {
                if (typeof element.dispatchEvent == "function") {
                    var eventCategory = knownEventTypesByEventName[eventType] || "HTMLEvents";
                    var event = document.createEvent(eventCategory);
                    event.initEvent(eventType, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, element);
                    element.dispatchEvent(event);
                }
                else
                    throw new Error("The supplied element doesn't support dispatchEvent");
            } else if (typeof element.fireEvent != "undefined") {
                // Unlike other browsers, IE doesn't change the checked state of checkboxes/radiobuttons when you trigger their "click" event
                // so to make it consistent, we'll do it manually here
                if (isClickOnCheckableElement(element, eventType))
                    element.checked = element.checked !== true;
                element.fireEvent("on" + eventType);
            }
            else
                throw new Error("Browser doesn't support triggering events");
        },

        unwrapObservable: function (value) {
            return ko.isObservable(value) ? value() : value;
        },

        peekObservable: function (value) {
            return ko.isObservable(value) ? value.peek() : value;
        },

        toggleDomNodeCssClass: function (node, classNames, shouldHaveClass) {
            if (classNames) {
                var cssClassNameRegex = /\S+/g,
                    currentClassNames = node.className.match(cssClassNameRegex) || [];
                ko.utils.arrayForEach(classNames.match(cssClassNameRegex), function(className) {
                    ko.utils.addOrRemoveItem(currentClassNames, className, shouldHaveClass);
                });
                node.className = currentClassNames.join(" ");
            }
        },

        setTextContent: function(element, textContent) {
            var value = ko.utils.unwrapObservable(textContent);
            if ((value === null) || (value === undefined))
                value = "";

            // We need there to be exactly one child: a text node.
            // If there are no children, more than one, or if it's not a text node,
            // we'll clear everything and create a single text node.
            var innerTextNode = ko.virtualElements.firstChild(element);
            if (!innerTextNode || innerTextNode.nodeType != 3 || ko.virtualElements.nextSibling(innerTextNode)) {
                ko.virtualElements.setDomNodeChildren(element, [document.createTextNode(value)]);
            } else {
                innerTextNode.data = value;
            }

            ko.utils.forceRefresh(element);
        },

        setElementName: function(element, name) {
            element.name = name;

            // Workaround IE 6/7 issue
            // - https://github.com/SteveSanderson/knockout/issues/197
            // - http://www.matts411.com/post/setting_the_name_attribute_in_ie_dom/
            if (ieVersion <= 7) {
                try {
                    element.mergeAttributes(document.createElement("<input name='" + element.name + "'/>"), false);
                }
                catch(e) {} // For IE9 with doc mode "IE9 Standards" and browser mode "IE9 Compatibility View"
            }
        },

        forceRefresh: function(node) {
            // Workaround for an IE9 rendering bug - https://github.com/SteveSanderson/knockout/issues/209
            if (ieVersion >= 9) {
                // For text nodes and comment nodes (most likely virtual elements), we will have to refresh the container
                var elem = node.nodeType == 1 ? node : node.parentNode;
                if (elem.style)
                    elem.style.zoom = elem.style.zoom;
            }
        },

        ensureSelectElementIsRenderedCorrectly: function(selectElement) {
            // Workaround for IE9 rendering bug - it doesn't reliably display all the text in dynamically-added select boxes unless you force it to re-render by updating the width.
            // (See https://github.com/SteveSanderson/knockout/issues/312, http://stackoverflow.com/questions/5908494/select-only-shows-first-char-of-selected-option)
            // Also fixes IE7 and IE8 bug that causes selects to be zero width if enclosed by 'if' or 'with'. (See issue #839)
            if (ieVersion) {
                var originalWidth = selectElement.style.width;
                selectElement.style.width = 0;
                selectElement.style.width = originalWidth;
            }
        },

        range: function (min, max) {
            min = ko.utils.unwrapObservable(min);
            max = ko.utils.unwrapObservable(max);
            var result = [];
            for (var i = min; i <= max; i++)
                result.push(i);
            return result;
        },

        makeArray: function(arrayLikeObject) {
            var result = [];
            for (var i = 0, j = arrayLikeObject.length; i < j; i++) {
                result.push(arrayLikeObject[i]);
            };
            return result;
        },

        isIe6 : isIe6,
        isIe7 : isIe7,
        ieVersion : ieVersion,

        getFormFields: function(form, fieldName) {
            var fields = ko.utils.makeArray(form.getElementsByTagName("input")).concat(ko.utils.makeArray(form.getElementsByTagName("textarea")));
            var isMatchingField = (typeof fieldName == 'string')
                ? function(field) { return field.name === fieldName }
                : function(field) { return fieldName.test(field.name) }; // Treat fieldName as regex or object containing predicate
            var matches = [];
            for (var i = fields.length - 1; i >= 0; i--) {
                if (isMatchingField(fields[i]))
                    matches.push(fields[i]);
            };
            return matches;
        },

        parseJson: function (jsonString) {
            if (typeof jsonString == "string") {
                jsonString = ko.utils.stringTrim(jsonString);
                if (jsonString) {
                    if (JSON && JSON.parse) // Use native parsing where available
                        return JSON.parse(jsonString);
                    return (new Function("return " + jsonString))(); // Fallback on less safe parsing for older browsers
                }
            }
            return null;
        },

        stringifyJson: function (data, replacer, space) {   // replacer and space are optional
            if (!JSON || !JSON.stringify)
                throw new Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
            return JSON.stringify(ko.utils.unwrapObservable(data), replacer, space);
        },

        postJson: function (urlOrForm, data, options) {
            options = options || {};
            var params = options['params'] || {};
            var includeFields = options['includeFields'] || this.fieldsIncludedWithJsonPost;
            var url = urlOrForm;

            // If we were given a form, use its 'action' URL and pick out any requested field values
            if((typeof urlOrForm == 'object') && (ko.utils.tagNameLower(urlOrForm) === "form")) {
                var originalForm = urlOrForm;
                url = originalForm.action;
                for (var i = includeFields.length - 1; i >= 0; i--) {
                    var fields = ko.utils.getFormFields(originalForm, includeFields[i]);
                    for (var j = fields.length - 1; j >= 0; j--)
                        params[fields[j].name] = fields[j].value;
                }
            }

            data = ko.utils.unwrapObservable(data);
            var form = document.createElement("form");
            form.style.display = "none";
            form.action = url;
            form.method = "post";
            for (var key in data) {
                // Since 'data' this is a model object, we include all properties including those inherited from its prototype
                var input = document.createElement("input");
                input.name = key;
                input.value = ko.utils.stringifyJson(ko.utils.unwrapObservable(data[key]));
                form.appendChild(input);
            }
            objectForEach(params, function(key, value) {
                var input = document.createElement("input");
                input.name = key;
                input.value = value;
                form.appendChild(input);
            });
            document.body.appendChild(form);
            options['submitter'] ? options['submitter'](form) : form.submit();
            setTimeout(function () { form.parentNode.removeChild(form); }, 0);
        }
    }
}());

ko.exportSymbol('utils', ko.utils);
ko.exportSymbol('utils.arrayForEach', ko.utils.arrayForEach);
ko.exportSymbol('utils.arrayFirst', ko.utils.arrayFirst);
ko.exportSymbol('utils.arrayFilter', ko.utils.arrayFilter);
ko.exportSymbol('utils.arrayGetDistinctValues', ko.utils.arrayGetDistinctValues);
ko.exportSymbol('utils.arrayIndexOf', ko.utils.arrayIndexOf);
ko.exportSymbol('utils.arrayMap', ko.utils.arrayMap);
ko.exportSymbol('utils.arrayPushAll', ko.utils.arrayPushAll);
ko.exportSymbol('utils.arrayRemoveItem', ko.utils.arrayRemoveItem);
ko.exportSymbol('utils.extend', ko.utils.extend);
ko.exportSymbol('utils.fieldsIncludedWithJsonPost', ko.utils.fieldsIncludedWithJsonPost);
ko.exportSymbol('utils.getFormFields', ko.utils.getFormFields);
ko.exportSymbol('utils.peekObservable', ko.utils.peekObservable);
ko.exportSymbol('utils.postJson', ko.utils.postJson);
ko.exportSymbol('utils.parseJson', ko.utils.parseJson);
ko.exportSymbol('utils.registerEventHandler', ko.utils.registerEventHandler);
ko.exportSymbol('utils.stringifyJson', ko.utils.stringifyJson);
ko.exportSymbol('utils.range', ko.utils.range);
ko.exportSymbol('utils.toggleDomNodeCssClass', ko.utils.toggleDomNodeCssClass);
ko.exportSymbol('utils.triggerEvent', ko.utils.triggerEvent);
ko.exportSymbol('utils.unwrapObservable', ko.utils.unwrapObservable);
ko.exportSymbol('utils.objectForEach', ko.utils.objectForEach);
ko.exportSymbol('utils.addOrRemoveItem', ko.utils.addOrRemoveItem);
ko.exportSymbol('unwrap', ko.utils.unwrapObservable); // Convenient shorthand, because this is used so commonly

if (!Function.prototype['bind']) {
    // Function.prototype.bind is a standard part of ECMAScript 5th Edition (December 2009, http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf)
    // In case the browser doesn't implement it natively, provide a JavaScript implementation. This implementation is based on the one in prototype.js
    Function.prototype['bind'] = function (object) {
        var originalFunction = this, args = Array.prototype.slice.call(arguments), object = args.shift();
        return function () {
            return originalFunction.apply(object, args.concat(Array.prototype.slice.call(arguments)));
        };
    };
}

ko.utils.domData = new (function () {
    var uniqueId = 0;
    var dataStoreKeyExpandoPropertyName = "__ko__" + (new Date).getTime();
    var dataStore = {};
    return {
        get: function (node, key) {
            var allDataForNode = ko.utils.domData.getAll(node, false);
            return allDataForNode === undefined ? undefined : allDataForNode[key];
        },
        set: function (node, key, value) {
            if (value === undefined) {
                // Make sure we don't actually create a new domData key if we are actually deleting a value
                if (ko.utils.domData.getAll(node, false) === undefined)
                    return;
            }
            var allDataForNode = ko.utils.domData.getAll(node, true);
            allDataForNode[key] = value;
        },
        getAll: function (node, createIfNotFound) {
            var dataStoreKey = node[dataStoreKeyExpandoPropertyName];
            var hasExistingDataStore = dataStoreKey && (dataStoreKey !== "null") && dataStore[dataStoreKey];
            if (!hasExistingDataStore) {
                if (!createIfNotFound)
                    return undefined;
                dataStoreKey = node[dataStoreKeyExpandoPropertyName] = "ko" + uniqueId++;
                dataStore[dataStoreKey] = {};
            }
            return dataStore[dataStoreKey];
        },
        clear: function (node) {
            var dataStoreKey = node[dataStoreKeyExpandoPropertyName];
            if (dataStoreKey) {
                delete dataStore[dataStoreKey];
                node[dataStoreKeyExpandoPropertyName] = null;
                return true; // Exposing "did clean" flag purely so specs can infer whether things have been cleaned up as intended
            }
            return false;
        }
    }
})();

ko.exportSymbol('utils.domData', ko.utils.domData);
ko.exportSymbol('utils.domData.clear', ko.utils.domData.clear); // Exporting only so specs can clear up after themselves fully

ko.utils.domNodeDisposal = new (function () {
    var domDataKey = "__ko_domNodeDisposal__" + (new Date).getTime();
    var cleanableNodeTypes = { 1: true, 8: true, 9: true };       // Element, Comment, Document
    var cleanableNodeTypesWithDescendants = { 1: true, 9: true }; // Element, Document

    function getDisposeCallbacksCollection(node, createIfNotFound) {
        var allDisposeCallbacks = ko.utils.domData.get(node, domDataKey);
        if ((allDisposeCallbacks === undefined) && createIfNotFound) {
            allDisposeCallbacks = [];
            ko.utils.domData.set(node, domDataKey, allDisposeCallbacks);
        }
        return allDisposeCallbacks;
    }
    function destroyCallbacksCollection(node) {
        ko.utils.domData.set(node, domDataKey, undefined);
    }

    function cleanSingleNode(node) {
        // Run all the dispose callbacks
        var callbacks = getDisposeCallbacksCollection(node, false);
        if (callbacks) {
            callbacks = callbacks.slice(0); // Clone, as the array may be modified during iteration (typically, callbacks will remove themselves)
            for (var i = 0; i < callbacks.length; i++)
                callbacks[i](node);
        }

        // Also erase the DOM data
        ko.utils.domData.clear(node);

        // Special support for jQuery here because it's so commonly used.
        // Many jQuery plugins (including jquery.tmpl) store data using jQuery's equivalent of domData
        // so notify it to tear down any resources associated with the node & descendants here.
        if ((typeof jQuery == "function") && (typeof jQuery['cleanData'] == "function"))
            jQuery['cleanData']([node]);

        // Also clear any immediate-child comment nodes, as these wouldn't have been found by
        // node.getElementsByTagName("*") in cleanNode() (comment nodes aren't elements)
        if (cleanableNodeTypesWithDescendants[node.nodeType])
            cleanImmediateCommentTypeChildren(node);
    }

    function cleanImmediateCommentTypeChildren(nodeWithChildren) {
        var child, nextChild = nodeWithChildren.firstChild;
        while (child = nextChild) {
            nextChild = child.nextSibling;
            if (child.nodeType === 8)
                cleanSingleNode(child);
        }
    }

    return {
        addDisposeCallback : function(node, callback) {
            if (typeof callback != "function")
                throw new Error("Callback must be a function");
            getDisposeCallbacksCollection(node, true).push(callback);
        },

        removeDisposeCallback : function(node, callback) {
            var callbacksCollection = getDisposeCallbacksCollection(node, false);
            if (callbacksCollection) {
                ko.utils.arrayRemoveItem(callbacksCollection, callback);
                if (callbacksCollection.length == 0)
                    destroyCallbacksCollection(node);
            }
        },

        cleanNode : function(node) {
            // First clean this node, where applicable
            if (cleanableNodeTypes[node.nodeType]) {
                cleanSingleNode(node);

                // ... then its descendants, where applicable
                if (cleanableNodeTypesWithDescendants[node.nodeType]) {
                    // Clone the descendants list in case it changes during iteration
                    var descendants = [];
                    ko.utils.arrayPushAll(descendants, node.getElementsByTagName("*"));
                    for (var i = 0, j = descendants.length; i < j; i++)
                        cleanSingleNode(descendants[i]);
                }
            }
            return node;
        },

        removeNode : function(node) {
            ko.cleanNode(node);
            if (node.parentNode)
                node.parentNode.removeChild(node);
        }
    }
})();
ko.cleanNode = ko.utils.domNodeDisposal.cleanNode; // Shorthand name for convenience
ko.removeNode = ko.utils.domNodeDisposal.removeNode; // Shorthand name for convenience
ko.exportSymbol('cleanNode', ko.cleanNode);
ko.exportSymbol('removeNode', ko.removeNode);
ko.exportSymbol('utils.domNodeDisposal', ko.utils.domNodeDisposal);
ko.exportSymbol('utils.domNodeDisposal.addDisposeCallback', ko.utils.domNodeDisposal.addDisposeCallback);
ko.exportSymbol('utils.domNodeDisposal.removeDisposeCallback', ko.utils.domNodeDisposal.removeDisposeCallback);
(function () {
    var leadingCommentRegex = /^(\s*)<!--(.*?)-->/;

    function simpleHtmlParse(html) {
        // Based on jQuery's "clean" function, but only accounting for table-related elements.
        // If you have referenced jQuery, this won't be used anyway - KO will use jQuery's "clean" function directly

        // Note that there's still an issue in IE < 9 whereby it will discard comment nodes that are the first child of
        // a descendant node. For example: "<div><!-- mycomment -->abc</div>" will get parsed as "<div>abc</div>"
        // This won't affect anyone who has referenced jQuery, and there's always the workaround of inserting a dummy node
        // (possibly a text node) in front of the comment. So, KO does not attempt to workaround this IE issue automatically at present.

        // Trim whitespace, otherwise indexOf won't work as expected
        var tags = ko.utils.stringTrim(html).toLowerCase(), div = document.createElement("div");

        // Finds the first match from the left column, and returns the corresponding "wrap" data from the right column
        var wrap = tags.match(/^<(thead|tbody|tfoot)/)              && [1, "<table>", "</table>"] ||
                   !tags.indexOf("<tr")                             && [2, "<table><tbody>", "</tbody></table>"] ||
                   (!tags.indexOf("<td") || !tags.indexOf("<th"))   && [3, "<table><tbody><tr>", "</tr></tbody></table>"] ||
                   /* anything else */                                 [0, "", ""];

        // Go to html and back, then peel off extra wrappers
        // Note that we always prefix with some dummy text, because otherwise, IE<9 will strip out leading comment nodes in descendants. Total madness.
        var markup = "ignored<div>" + wrap[1] + html + wrap[2] + "</div>";
        if (typeof window['innerShiv'] == "function") {
            div.appendChild(window['innerShiv'](markup));
        } else {
            div.innerHTML = markup;
        }

        // Move to the right depth
        while (wrap[0]--)
            div = div.lastChild;

        return ko.utils.makeArray(div.lastChild.childNodes);
    }

    function jQueryHtmlParse(html) {
        // jQuery's "parseHTML" function was introduced in jQuery 1.8.0 and is a documented public API.
        if (jQuery['parseHTML']) {
            return jQuery['parseHTML'](html) || []; // Ensure we always return an array and never null
        } else {
            // For jQuery < 1.8.0, we fall back on the undocumented internal "clean" function.
            var elems = jQuery['clean']([html]);

            // As of jQuery 1.7.1, jQuery parses the HTML by appending it to some dummy parent nodes held in an in-memory document fragment.
            // Unfortunately, it never clears the dummy parent nodes from the document fragment, so it leaks memory over time.
            // Fix this by finding the top-most dummy parent element, and detaching it from its owner fragment.
            if (elems && elems[0]) {
                // Find the top-most parent element that's a direct child of a document fragment
                var elem = elems[0];
                while (elem.parentNode && elem.parentNode.nodeType !== 11 /* i.e., DocumentFragment */)
                    elem = elem.parentNode;
                // ... then detach it
                if (elem.parentNode)
                    elem.parentNode.removeChild(elem);
            }

            return elems;
        }
    }

    ko.utils.parseHtmlFragment = function(html) {
        return typeof jQuery != 'undefined' ? jQueryHtmlParse(html)   // As below, benefit from jQuery's optimisations where possible
                                            : simpleHtmlParse(html);  // ... otherwise, this simple logic will do in most common cases.
    };

    ko.utils.setHtml = function(node, html) {
        ko.utils.emptyDomNode(node);

        // There's no legitimate reason to display a stringified observable without unwrapping it, so we'll unwrap it
        html = ko.utils.unwrapObservable(html);

        if ((html !== null) && (html !== undefined)) {
            if (typeof html != 'string')
                html = html.toString();

            // jQuery contains a lot of sophisticated code to parse arbitrary HTML fragments,
            // for example <tr> elements which are not normally allowed to exist on their own.
            // If you've referenced jQuery we'll use that rather than duplicating its code.
            if (typeof jQuery != 'undefined') {
                jQuery(node)['html'](html);
            } else {
                // ... otherwise, use KO's own parsing logic.
                var parsedNodes = ko.utils.parseHtmlFragment(html);
                for (var i = 0; i < parsedNodes.length; i++)
                    node.appendChild(parsedNodes[i]);
            }
        }
    };
})();

ko.exportSymbol('utils.parseHtmlFragment', ko.utils.parseHtmlFragment);
ko.exportSymbol('utils.setHtml', ko.utils.setHtml);

ko.memoization = (function () {
    var memos = {};

    function randomMax8HexChars() {
        return (((1 + Math.random()) * 0x100000000) | 0).toString(16).substring(1);
    }
    function generateRandomId() {
        return randomMax8HexChars() + randomMax8HexChars();
    }
    function findMemoNodes(rootNode, appendToArray) {
        if (!rootNode)
            return;
        if (rootNode.nodeType == 8) {
            var memoId = ko.memoization.parseMemoText(rootNode.nodeValue);
            if (memoId != null)
                appendToArray.push({ domNode: rootNode, memoId: memoId });
        } else if (rootNode.nodeType == 1) {
            for (var i = 0, childNodes = rootNode.childNodes, j = childNodes.length; i < j; i++)
                findMemoNodes(childNodes[i], appendToArray);
        }
    }

    return {
        memoize: function (callback) {
            if (typeof callback != "function")
                throw new Error("You can only pass a function to ko.memoization.memoize()");
            var memoId = generateRandomId();
            memos[memoId] = callback;
            return "<!--[ko_memo:" + memoId + "]-->";
        },

        unmemoize: function (memoId, callbackParams) {
            var callback = memos[memoId];
            if (callback === undefined)
                throw new Error("Couldn't find any memo with ID " + memoId + ". Perhaps it's already been unmemoized.");
            try {
                callback.apply(null, callbackParams || []);
                return true;
            }
            finally { delete memos[memoId]; }
        },

        unmemoizeDomNodeAndDescendants: function (domNode, extraCallbackParamsArray) {
            var memos = [];
            findMemoNodes(domNode, memos);
            for (var i = 0, j = memos.length; i < j; i++) {
                var node = memos[i].domNode;
                var combinedParams = [node];
                if (extraCallbackParamsArray)
                    ko.utils.arrayPushAll(combinedParams, extraCallbackParamsArray);
                ko.memoization.unmemoize(memos[i].memoId, combinedParams);
                node.nodeValue = ""; // Neuter this node so we don't try to unmemoize it again
                if (node.parentNode)
                    node.parentNode.removeChild(node); // If possible, erase it totally (not always possible - someone else might just hold a reference to it then call unmemoizeDomNodeAndDescendants again)
            }
        },

        parseMemoText: function (memoText) {
            var match = memoText.match(/^\[ko_memo\:(.*?)\]$/);
            return match ? match[1] : null;
        }
    };
})();

ko.exportSymbol('memoization', ko.memoization);
ko.exportSymbol('memoization.memoize', ko.memoization.memoize);
ko.exportSymbol('memoization.unmemoize', ko.memoization.unmemoize);
ko.exportSymbol('memoization.parseMemoText', ko.memoization.parseMemoText);
ko.exportSymbol('memoization.unmemoizeDomNodeAndDescendants', ko.memoization.unmemoizeDomNodeAndDescendants);
ko.extenders = {
    'throttle': function(target, timeout) {
        // Throttling means two things:

        // (1) For dependent observables, we throttle *evaluations* so that, no matter how fast its dependencies
        //     notify updates, the target doesn't re-evaluate (and hence doesn't notify) faster than a certain rate
        target['throttleEvaluation'] = timeout;

        // (2) For writable targets (observables, or writable dependent observables), we throttle *writes*
        //     so the target cannot change value synchronously or faster than a certain rate
        var writeTimeoutInstance = null;
        return ko.dependentObservable({
            'read': target,
            'write': function(value) {
                clearTimeout(writeTimeoutInstance);
                writeTimeoutInstance = setTimeout(function() {
                    target(value);
                }, timeout);
            }
        });
    },

    'notify': function(target, notifyWhen) {
        target["equalityComparer"] = notifyWhen == "always"
            ? function() { return false } // Treat all values as not equal
            : ko.observable["fn"]["equalityComparer"];
        return target;
    }
};

function applyExtenders(requestedExtenders) {
    var target = this;
    if (requestedExtenders) {
        ko.utils.objectForEach(requestedExtenders, function(key, value) {
            var extenderHandler = ko.extenders[key];
            if (typeof extenderHandler == 'function') {
                target = extenderHandler(target, value);
            }
        });
    }
    return target;
}

ko.exportSymbol('extenders', ko.extenders);

ko.subscription = function (target, callback, disposeCallback) {
    this.target = target;
    this.callback = callback;
    this.disposeCallback = disposeCallback;
    ko.exportProperty(this, 'dispose', this.dispose);
};
ko.subscription.prototype.dispose = function () {
    this.isDisposed = true;
    this.disposeCallback();
};

ko.subscribable = function () {
    this._subscriptions = {};

    ko.utils.extend(this, ko.subscribable['fn']);
    ko.exportProperty(this, 'subscribe', this.subscribe);
    ko.exportProperty(this, 'extend', this.extend);
    ko.exportProperty(this, 'getSubscriptionsCount', this.getSubscriptionsCount);
}

var defaultEvent = "change";

ko.subscribable['fn'] = {
    subscribe: function (callback, callbackTarget, event) {
        event = event || defaultEvent;
        var boundCallback = callbackTarget ? callback.bind(callbackTarget) : callback;

        var subscription = new ko.subscription(this, boundCallback, function () {
            ko.utils.arrayRemoveItem(this._subscriptions[event], subscription);
        }.bind(this));

        if (!this._subscriptions[event])
            this._subscriptions[event] = [];
        this._subscriptions[event].push(subscription);
        return subscription;
    },

    "notifySubscribers": function (valueToNotify, event) {
        event = event || defaultEvent;
        if (this._subscriptions[event]) {
            ko.dependencyDetection.ignore(function() {
                ko.utils.arrayForEach(this._subscriptions[event].slice(0), function (subscription) {
                    // In case a subscription was disposed during the arrayForEach cycle, check
                    // for isDisposed on each subscription before invoking its callback
                    if (subscription && (subscription.isDisposed !== true))
                        subscription.callback(valueToNotify);
                });
            }, this);
        }
    },

    getSubscriptionsCount: function () {
        var total = 0;
        ko.utils.objectForEach(this._subscriptions, function(eventName, subscriptions) {
            total += subscriptions.length;
        });
        return total;
    },

    extend: applyExtenders
};


ko.isSubscribable = function (instance) {
    return instance != null && typeof instance.subscribe == "function" && typeof instance["notifySubscribers"] == "function";
};

ko.exportSymbol('subscribable', ko.subscribable);
ko.exportSymbol('isSubscribable', ko.isSubscribable);

ko.dependencyDetection = (function () {
    var _frames = [];

    return {
        begin: function (callback) {
            _frames.push({ callback: callback, distinctDependencies:[] });
        },

        end: function () {
            _frames.pop();
        },

        registerDependency: function (subscribable) {
            if (!ko.isSubscribable(subscribable))
                throw new Error("Only subscribable things can act as dependencies");
            if (_frames.length > 0) {
                var topFrame = _frames[_frames.length - 1];
                if (!topFrame || ko.utils.arrayIndexOf(topFrame.distinctDependencies, subscribable) >= 0)
                    return;
                topFrame.distinctDependencies.push(subscribable);
                topFrame.callback(subscribable);
            }
        },

        ignore: function(callback, callbackTarget, callbackArgs) {
            try {
                _frames.push(null);
                return callback.apply(callbackTarget, callbackArgs || []);
            } finally {
                _frames.pop();
            }
        }
    };
})();
var primitiveTypes = { 'undefined':true, 'boolean':true, 'number':true, 'string':true };

ko.observable = function (initialValue) {
    var _latestValue = initialValue;

    function observable() {
        if (arguments.length > 0) {
            // Write

            // Ignore writes if the value hasn't changed
            if ((!observable['equalityComparer']) || !observable['equalityComparer'](_latestValue, arguments[0])) {
                observable.valueWillMutate();
                _latestValue = arguments[0];
                if (DEBUG) observable._latestValue = _latestValue;
                observable.valueHasMutated();
            }
            return this; // Permits chained assignments
        }
        else {
            // Read
            ko.dependencyDetection.registerDependency(observable); // The caller only needs to be notified of changes if they did a "read" operation
            return _latestValue;
        }
    }
    if (DEBUG) observable._latestValue = _latestValue;
    ko.subscribable.call(observable);
    observable.peek = function() { return _latestValue };
    observable.valueHasMutated = function () { observable["notifySubscribers"](_latestValue); }
    observable.valueWillMutate = function () { observable["notifySubscribers"](_latestValue, "beforeChange"); }
    ko.utils.extend(observable, ko.observable['fn']);

    ko.exportProperty(observable, 'peek', observable.peek);
    ko.exportProperty(observable, "valueHasMutated", observable.valueHasMutated);
    ko.exportProperty(observable, "valueWillMutate", observable.valueWillMutate);

    return observable;
}

ko.observable['fn'] = {
    "equalityComparer": function valuesArePrimitiveAndEqual(a, b) {
        var oldValueIsPrimitive = (a === null) || (typeof(a) in primitiveTypes);
        return oldValueIsPrimitive ? (a === b) : false;
    }
};

var protoProperty = ko.observable.protoProperty = "__ko_proto__";
ko.observable['fn'][protoProperty] = ko.observable;

ko.hasPrototype = function(instance, prototype) {
    if ((instance === null) || (instance === undefined) || (instance[protoProperty] === undefined)) return false;
    if (instance[protoProperty] === prototype) return true;
    return ko.hasPrototype(instance[protoProperty], prototype); // Walk the prototype chain
};

ko.isObservable = function (instance) {
    return ko.hasPrototype(instance, ko.observable);
}
ko.isWriteableObservable = function (instance) {
    // Observable
    if ((typeof instance == "function") && instance[protoProperty] === ko.observable)
        return true;
    // Writeable dependent observable
    if ((typeof instance == "function") && (instance[protoProperty] === ko.dependentObservable) && (instance.hasWriteFunction))
        return true;
    // Anything else
    return false;
}


ko.exportSymbol('observable', ko.observable);
ko.exportSymbol('isObservable', ko.isObservable);
ko.exportSymbol('isWriteableObservable', ko.isWriteableObservable);
ko.observableArray = function (initialValues) {
    initialValues = initialValues || [];

    if (typeof initialValues != 'object' || !('length' in initialValues))
        throw new Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");

    var result = ko.observable(initialValues);
    ko.utils.extend(result, ko.observableArray['fn']);
    return result;
};

ko.observableArray['fn'] = {
    'remove': function (valueOrPredicate) {
        var underlyingArray = this.peek();
        var removedValues = [];
        var predicate = typeof valueOrPredicate == "function" ? valueOrPredicate : function (value) { return value === valueOrPredicate; };
        for (var i = 0; i < underlyingArray.length; i++) {
            var value = underlyingArray[i];
            if (predicate(value)) {
                if (removedValues.length === 0) {
                    this.valueWillMutate();
                }
                removedValues.push(value);
                underlyingArray.splice(i, 1);
                i--;
            }
        }
        if (removedValues.length) {
            this.valueHasMutated();
        }
        return removedValues;
    },

    'removeAll': function (arrayOfValues) {
        // If you passed zero args, we remove everything
        if (arrayOfValues === undefined) {
            var underlyingArray = this.peek();
            var allValues = underlyingArray.slice(0);
            this.valueWillMutate();
            underlyingArray.splice(0, underlyingArray.length);
            this.valueHasMutated();
            return allValues;
        }
        // If you passed an arg, we interpret it as an array of entries to remove
        if (!arrayOfValues)
            return [];
        return this['remove'](function (value) {
            return ko.utils.arrayIndexOf(arrayOfValues, value) >= 0;
        });
    },

    'destroy': function (valueOrPredicate) {
        var underlyingArray = this.peek();
        var predicate = typeof valueOrPredicate == "function" ? valueOrPredicate : function (value) { return value === valueOrPredicate; };
        this.valueWillMutate();
        for (var i = underlyingArray.length - 1; i >= 0; i--) {
            var value = underlyingArray[i];
            if (predicate(value))
                underlyingArray[i]["_destroy"] = true;
        }
        this.valueHasMutated();
    },

    'destroyAll': function (arrayOfValues) {
        // If you passed zero args, we destroy everything
        if (arrayOfValues === undefined)
            return this['destroy'](function() { return true });

        // If you passed an arg, we interpret it as an array of entries to destroy
        if (!arrayOfValues)
            return [];
        return this['destroy'](function (value) {
            return ko.utils.arrayIndexOf(arrayOfValues, value) >= 0;
        });
    },

    'indexOf': function (item) {
        var underlyingArray = this();
        return ko.utils.arrayIndexOf(underlyingArray, item);
    },

    'replace': function(oldItem, newItem) {
        var index = this['indexOf'](oldItem);
        if (index >= 0) {
            this.valueWillMutate();
            this.peek()[index] = newItem;
            this.valueHasMutated();
        }
    }
};

// Populate ko.observableArray.fn with read/write functions from native arrays
// Important: Do not add any additional functions here that may reasonably be used to *read* data from the array
// because we'll eval them without causing subscriptions, so ko.computed output could end up getting stale
ko.utils.arrayForEach(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (methodName) {
    ko.observableArray['fn'][methodName] = function () {
        // Use "peek" to avoid creating a subscription in any computed that we're executing in the context of
        // (for consistency with mutating regular observables)
        var underlyingArray = this.peek();
        this.valueWillMutate();
        var methodCallResult = underlyingArray[methodName].apply(underlyingArray, arguments);
        this.valueHasMutated();
        return methodCallResult;
    };
});

// Populate ko.observableArray.fn with read-only functions from native arrays
ko.utils.arrayForEach(["slice"], function (methodName) {
    ko.observableArray['fn'][methodName] = function () {
        var underlyingArray = this();
        return underlyingArray[methodName].apply(underlyingArray, arguments);
    };
});

ko.exportSymbol('observableArray', ko.observableArray);
ko.dependentObservable = function (evaluatorFunctionOrOptions, evaluatorFunctionTarget, options) {
    var _latestValue,
        _hasBeenEvaluated = false,
        _isBeingEvaluated = false,
        readFunction = evaluatorFunctionOrOptions;

    if (readFunction && typeof readFunction == "object") {
        // Single-parameter syntax - everything is on this "options" param
        options = readFunction;
        readFunction = options["read"];
    } else {
        // Multi-parameter syntax - construct the options according to the params passed
        options = options || {};
        if (!readFunction)
            readFunction = options["read"];
    }
    if (typeof readFunction != "function")
        throw new Error("Pass a function that returns the value of the ko.computed");

    function addSubscriptionToDependency(subscribable) {
        _subscriptionsToDependencies.push(subscribable.subscribe(evaluatePossiblyAsync));
    }

    function disposeAllSubscriptionsToDependencies() {
        ko.utils.arrayForEach(_subscriptionsToDependencies, function (subscription) {
            subscription.dispose();
        });
        _subscriptionsToDependencies = [];
    }

    function evaluatePossiblyAsync() {
        var throttleEvaluationTimeout = dependentObservable['throttleEvaluation'];
        if (throttleEvaluationTimeout && throttleEvaluationTimeout >= 0) {
            clearTimeout(evaluationTimeoutInstance);
            evaluationTimeoutInstance = setTimeout(evaluateImmediate, throttleEvaluationTimeout);
        } else
            evaluateImmediate();
    }

    function evaluateImmediate() {
        if (_isBeingEvaluated) {
            // If the evaluation of a ko.computed causes side effects, it's possible that it will trigger its own re-evaluation.
            // This is not desirable (it's hard for a developer to realise a chain of dependencies might cause this, and they almost
            // certainly didn't intend infinite re-evaluations). So, for predictability, we simply prevent ko.computeds from causing
            // their own re-evaluation. Further discussion at https://github.com/SteveSanderson/knockout/pull/387
            return;
        }

        // Don't dispose on first evaluation, because the "disposeWhen" callback might
        // e.g., dispose when the associated DOM element isn't in the doc, and it's not
        // going to be in the doc until *after* the first evaluation
        if (_hasBeenEvaluated && disposeWhen()) {
            dispose();
            return;
        }

        _isBeingEvaluated = true;
        try {
            // Initially, we assume that none of the subscriptions are still being used (i.e., all are candidates for disposal).
            // Then, during evaluation, we cross off any that are in fact still being used.
            var disposalCandidates = ko.utils.arrayMap(_subscriptionsToDependencies, function(item) {return item.target;});

            ko.dependencyDetection.begin(function(subscribable) {
                var inOld;
                if ((inOld = ko.utils.arrayIndexOf(disposalCandidates, subscribable)) >= 0)
                    disposalCandidates[inOld] = undefined; // Don't want to dispose this subscription, as it's still being used
                else
                    addSubscriptionToDependency(subscribable); // Brand new subscription - add it
            });

            var newValue = readFunction.call(evaluatorFunctionTarget);

            // For each subscription no longer being used, remove it from the active subscriptions list and dispose it
            for (var i = disposalCandidates.length - 1; i >= 0; i--) {
                if (disposalCandidates[i])
                    _subscriptionsToDependencies.splice(i, 1)[0].dispose();
            }
            _hasBeenEvaluated = true;

            dependentObservable["notifySubscribers"](_latestValue, "beforeChange");

            _latestValue = newValue;
            if (DEBUG) dependentObservable._latestValue = _latestValue;
            dependentObservable["notifySubscribers"](_latestValue);

        } finally {
            ko.dependencyDetection.end();
            _isBeingEvaluated = false;
        }

        if (!_subscriptionsToDependencies.length)
            dispose();
    }

    function dependentObservable() {
        if (arguments.length > 0) {
            if (typeof writeFunction === "function") {
                // Writing a value
                writeFunction.apply(evaluatorFunctionTarget, arguments);
            } else {
                throw new Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
            }
            return this; // Permits chained assignments
        } else {
            // Reading the value
            if (!_hasBeenEvaluated)
                evaluateImmediate();
            ko.dependencyDetection.registerDependency(dependentObservable);
            return _latestValue;
        }
    }

    function peek() {
        if (!_hasBeenEvaluated)
            evaluateImmediate();
        return _latestValue;
    }

    function isActive() {
        return !_hasBeenEvaluated || _subscriptionsToDependencies.length > 0;
    }

    // By here, "options" is always non-null
    var writeFunction = options["write"],
        disposeWhenNodeIsRemoved = options["disposeWhenNodeIsRemoved"] || options.disposeWhenNodeIsRemoved || null,
        disposeWhen = options["disposeWhen"] || options.disposeWhen || function() { return false; },
        dispose = disposeAllSubscriptionsToDependencies,
        _subscriptionsToDependencies = [],
        evaluationTimeoutInstance = null;

    if (!evaluatorFunctionTarget)
        evaluatorFunctionTarget = options["owner"];

    dependentObservable.peek = peek;
    dependentObservable.getDependenciesCount = function () { return _subscriptionsToDependencies.length; };
    dependentObservable.hasWriteFunction = typeof options["write"] === "function";
    dependentObservable.dispose = function () { dispose(); };
    dependentObservable.isActive = isActive;

    ko.subscribable.call(dependentObservable);
    ko.utils.extend(dependentObservable, ko.dependentObservable['fn']);

    ko.exportProperty(dependentObservable, 'peek', dependentObservable.peek);
    ko.exportProperty(dependentObservable, 'dispose', dependentObservable.dispose);
    ko.exportProperty(dependentObservable, 'isActive', dependentObservable.isActive);
    ko.exportProperty(dependentObservable, 'getDependenciesCount', dependentObservable.getDependenciesCount);

    // Evaluate, unless deferEvaluation is true
    if (options['deferEvaluation'] !== true)
        evaluateImmediate();

    // Build "disposeWhenNodeIsRemoved" and "disposeWhenNodeIsRemovedCallback" option values.
    // But skip if isActive is false (there will never be any dependencies to dispose).
    // (Note: "disposeWhenNodeIsRemoved" option both proactively disposes as soon as the node is removed using ko.removeNode(),
    // plus adds a "disposeWhen" callback that, on each evaluation, disposes if the node was removed by some other means.)
    if (disposeWhenNodeIsRemoved && isActive()) {
        dispose = function() {
            ko.utils.domNodeDisposal.removeDisposeCallback(disposeWhenNodeIsRemoved, dispose);
            disposeAllSubscriptionsToDependencies();
        };
        ko.utils.domNodeDisposal.addDisposeCallback(disposeWhenNodeIsRemoved, dispose);
        var existingDisposeWhenFunction = disposeWhen;
        disposeWhen = function () {
            return !ko.utils.domNodeIsAttachedToDocument(disposeWhenNodeIsRemoved) || existingDisposeWhenFunction();
        }
    }

    return dependentObservable;
};

ko.isComputed = function(instance) {
    return ko.hasPrototype(instance, ko.dependentObservable);
};

var protoProp = ko.observable.protoProperty; // == "__ko_proto__"
ko.dependentObservable[protoProp] = ko.observable;

ko.dependentObservable['fn'] = {};
ko.dependentObservable['fn'][protoProp] = ko.dependentObservable;

ko.exportSymbol('dependentObservable', ko.dependentObservable);
ko.exportSymbol('computed', ko.dependentObservable); // Make "ko.computed" an alias for "ko.dependentObservable"
ko.exportSymbol('isComputed', ko.isComputed);

(function() {
    var maxNestedObservableDepth = 10; // Escape the (unlikely) pathalogical case where an observable's current value is itself (or similar reference cycle)

    ko.toJS = function(rootObject) {
        if (arguments.length == 0)
            throw new Error("When calling ko.toJS, pass the object you want to convert.");

        // We just unwrap everything at every level in the object graph
        return mapJsObjectGraph(rootObject, function(valueToMap) {
            // Loop because an observable's value might in turn be another observable wrapper
            for (var i = 0; ko.isObservable(valueToMap) && (i < maxNestedObservableDepth); i++)
                valueToMap = valueToMap();
            return valueToMap;
        });
    };

    ko.toJSON = function(rootObject, replacer, space) {     // replacer and space are optional
        var plainJavaScriptObject = ko.toJS(rootObject);
        return ko.utils.stringifyJson(plainJavaScriptObject, replacer, space);
    };

    function mapJsObjectGraph(rootObject, mapInputCallback, visitedObjects) {
        visitedObjects = visitedObjects || new objectLookup();

        rootObject = mapInputCallback(rootObject);
        var canHaveProperties = (typeof rootObject == "object") && (rootObject !== null) && (rootObject !== undefined) && (!(rootObject instanceof Date)) && (!(rootObject instanceof String)) && (!(rootObject instanceof Number)) && (!(rootObject instanceof Boolean));
        if (!canHaveProperties)
            return rootObject;

        var outputProperties = rootObject instanceof Array ? [] : {};
        visitedObjects.save(rootObject, outputProperties);

        visitPropertiesOrArrayEntries(rootObject, function(indexer) {
            var propertyValue = mapInputCallback(rootObject[indexer]);

            switch (typeof propertyValue) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                    outputProperties[indexer] = propertyValue;
                    break;
                case "object":
                case "undefined":
                    var previouslyMappedValue = visitedObjects.get(propertyValue);
                    outputProperties[indexer] = (previouslyMappedValue !== undefined)
                        ? previouslyMappedValue
                        : mapJsObjectGraph(propertyValue, mapInputCallback, visitedObjects);
                    break;
            }
        });

        return outputProperties;
    }

    function visitPropertiesOrArrayEntries(rootObject, visitorCallback) {
        if (rootObject instanceof Array) {
            for (var i = 0; i < rootObject.length; i++)
                visitorCallback(i);

            // For arrays, also respect toJSON property for custom mappings (fixes #278)
            if (typeof rootObject['toJSON'] == 'function')
                visitorCallback('toJSON');
        } else {
            for (var propertyName in rootObject) {
                visitorCallback(propertyName);
            }
        }
    };

    function objectLookup() {
        this.keys = [];
        this.values = [];
    };

    objectLookup.prototype = {
        constructor: objectLookup,
        save: function(key, value) {
            var existingIndex = ko.utils.arrayIndexOf(this.keys, key);
            if (existingIndex >= 0)
                this.values[existingIndex] = value;
            else {
                this.keys.push(key);
                this.values.push(value);
            }
        },
        get: function(key) {
            var existingIndex = ko.utils.arrayIndexOf(this.keys, key);
            return (existingIndex >= 0) ? this.values[existingIndex] : undefined;
        }
    };
})();

ko.exportSymbol('toJS', ko.toJS);
ko.exportSymbol('toJSON', ko.toJSON);
(function () {
    var hasDomDataExpandoProperty = '__ko__hasDomDataOptionValue__';

    // Normally, SELECT elements and their OPTIONs can only take value of type 'string' (because the values
    // are stored on DOM attributes). ko.selectExtensions provides a way for SELECTs/OPTIONs to have values
    // that are arbitrary objects. This is very convenient when implementing things like cascading dropdowns.
    ko.selectExtensions = {
        readValue : function(element) {
            switch (ko.utils.tagNameLower(element)) {
                case 'option':
                    if (element[hasDomDataExpandoProperty] === true)
                        return ko.utils.domData.get(element, ko.bindingHandlers.options.optionValueDomDataKey);
                    return ko.utils.ieVersion <= 7
                        ? (element.getAttributeNode('value') && element.getAttributeNode('value').specified ? element.value : element.text)
                        : element.value;
                case 'select':
                    return element.selectedIndex >= 0 ? ko.selectExtensions.readValue(element.options[element.selectedIndex]) : undefined;
                default:
                    return element.value;
            }
        },

        writeValue: function(element, value) {
            switch (ko.utils.tagNameLower(element)) {
                case 'option':
                    switch(typeof value) {
                        case "string":
                            ko.utils.domData.set(element, ko.bindingHandlers.options.optionValueDomDataKey, undefined);
                            if (hasDomDataExpandoProperty in element) { // IE <= 8 throws errors if you delete non-existent properties from a DOM node
                                delete element[hasDomDataExpandoProperty];
                            }
                            element.value = value;
                            break;
                        default:
                            // Store arbitrary object using DomData
                            ko.utils.domData.set(element, ko.bindingHandlers.options.optionValueDomDataKey, value);
                            element[hasDomDataExpandoProperty] = true;

                            // Special treatment of numbers is just for backward compatibility. KO 1.2.1 wrote numerical values to element.value.
                            element.value = typeof value === "number" ? value : "";
                            break;
                    }
                    break;
                case 'select':
                    if (value === "")
                        value = undefined;
                    if (value === null || value === undefined)
                        element.selectedIndex = -1;
                    for (var i = element.options.length - 1; i >= 0; i--) {
                        if (ko.selectExtensions.readValue(element.options[i]) == value) {
                            element.selectedIndex = i;
                            break;
                        }
                    }
                    // for drop-down select, ensure first is selected
                    if (!(element.size > 1) && element.selectedIndex === -1) {
                        element.selectedIndex = 0;
                    }
                    break;
                default:
                    if ((value === null) || (value === undefined))
                        value = "";
                    element.value = value;
                    break;
            }
        }
    };
})();

ko.exportSymbol('selectExtensions', ko.selectExtensions);
ko.exportSymbol('selectExtensions.readValue', ko.selectExtensions.readValue);
ko.exportSymbol('selectExtensions.writeValue', ko.selectExtensions.writeValue);
ko.expressionRewriting = (function () {
    var restoreCapturedTokensRegex = /\@ko_token_(\d+)\@/g;
    var javaScriptReservedWords = ["true", "false", "null", "undefined"];

    // Matches something that can be assigned to--either an isolated identifier or something ending with a property accessor
    // This is designed to be simple and avoid false negatives, but could produce false positives (e.g., a+b.c).
    var javaScriptAssignmentTarget = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i;

    function restoreTokens(string, tokens) {
        var prevValue = null;
        while (string != prevValue) { // Keep restoring tokens until it no longer makes a difference (they may be nested)
            prevValue = string;
            string = string.replace(restoreCapturedTokensRegex, function (match, tokenIndex) {
                return tokens[tokenIndex];
            });
        }
        return string;
    }

    function getWriteableValue(expression) {
        if (ko.utils.arrayIndexOf(javaScriptReservedWords, ko.utils.stringTrim(expression).toLowerCase()) >= 0)
            return false;
        var match = expression.match(javaScriptAssignmentTarget);
        return match === null ? false : match[1] ? ('Object(' + match[1] + ')' + match[2]) : expression;
    }

    function ensureQuoted(key) {
        var trimmedKey = ko.utils.stringTrim(key);
        switch (trimmedKey.length && trimmedKey.charAt(0)) {
            case "'":
            case '"':
                return key;
            default:
                return "'" + trimmedKey + "'";
        }
    }

    return {
        bindingRewriteValidators: [],

        parseObjectLiteral: function(objectLiteralString) {
            // A full tokeniser+lexer would add too much weight to this library, so here's a simple parser
            // that is sufficient just to split an object literal string into a set of top-level key-value pairs

            var str = ko.utils.stringTrim(objectLiteralString);
            if (str.length < 3)
                return [];
            if (str.charAt(0) === "{")// Ignore any braces surrounding the whole object literal
                str = str.substring(1, str.length - 1);

            // Pull out any string literals and regex literals
            var tokens = [];
            var tokenStart = null, tokenEndChar;
            for (var position = 0; position < str.length; position++) {
                var c = str.charAt(position);
                if (tokenStart === null) {
                    switch (c) {
                        case '"':
                        case "'":
                        case "/":
                            tokenStart = position;
                            tokenEndChar = c;
                            break;
                    }
                } else if ((c == tokenEndChar) && (str.charAt(position - 1) !== "\\")) {
                    var token = str.substring(tokenStart, position + 1);
                    tokens.push(token);
                    var replacement = "@ko_token_" + (tokens.length - 1) + "@";
                    str = str.substring(0, tokenStart) + replacement + str.substring(position + 1);
                    position -= (token.length - replacement.length);
                    tokenStart = null;
                }
            }

            // Next pull out balanced paren, brace, and bracket blocks
            tokenStart = null;
            tokenEndChar = null;
            var tokenDepth = 0, tokenStartChar = null;
            for (var position = 0; position < str.length; position++) {
                var c = str.charAt(position);
                if (tokenStart === null) {
                    switch (c) {
                        case "{": tokenStart = position; tokenStartChar = c;
                                  tokenEndChar = "}";
                                  break;
                        case "(": tokenStart = position; tokenStartChar = c;
                                  tokenEndChar = ")";
                                  break;
                        case "[": tokenStart = position; tokenStartChar = c;
                                  tokenEndChar = "]";
                                  break;
                    }
                }

                if (c === tokenStartChar)
                    tokenDepth++;
                else if (c === tokenEndChar) {
                    tokenDepth--;
                    if (tokenDepth === 0) {
                        var token = str.substring(tokenStart, position + 1);
                        tokens.push(token);
                        var replacement = "@ko_token_" + (tokens.length - 1) + "@";
                        str = str.substring(0, tokenStart) + replacement + str.substring(position + 1);
                        position -= (token.length - replacement.length);
                        tokenStart = null;
                    }
                }
            }

            // Now we can safely split on commas to get the key/value pairs
            var result = [];
            var keyValuePairs = str.split(",");
            for (var i = 0, j = keyValuePairs.length; i < j; i++) {
                var pair = keyValuePairs[i];
                var colonPos = pair.indexOf(":");
                if ((colonPos > 0) && (colonPos < pair.length - 1)) {
                    var key = pair.substring(0, colonPos);
                    var value = pair.substring(colonPos + 1);
                    result.push({ 'key': restoreTokens(key, tokens), 'value': restoreTokens(value, tokens) });
                } else {
                    result.push({ 'unknown': restoreTokens(pair, tokens) });
                }
            }
            return result;
        },

        preProcessBindings: function (objectLiteralStringOrKeyValueArray) {
            var keyValueArray = typeof objectLiteralStringOrKeyValueArray === "string"
                ? ko.expressionRewriting.parseObjectLiteral(objectLiteralStringOrKeyValueArray)
                : objectLiteralStringOrKeyValueArray;
            var resultStrings = [], propertyAccessorResultStrings = [];

            var keyValueEntry;
            for (var i = 0; keyValueEntry = keyValueArray[i]; i++) {
                if (resultStrings.length > 0)
                    resultStrings.push(",");

                if (keyValueEntry['key']) {
                    var quotedKey = ensureQuoted(keyValueEntry['key']), val = keyValueEntry['value'];
                    resultStrings.push(quotedKey);
                    resultStrings.push(":");
                    resultStrings.push(val);

                    if (val = getWriteableValue(ko.utils.stringTrim(val))) {
                        if (propertyAccessorResultStrings.length > 0)
                            propertyAccessorResultStrings.push(", ");
                        propertyAccessorResultStrings.push(quotedKey + " : function(__ko_value) { " + val + " = __ko_value; }");
                    }
                } else if (keyValueEntry['unknown']) {
                    resultStrings.push(keyValueEntry['unknown']);
                }
            }

            var combinedResult = resultStrings.join("");
            if (propertyAccessorResultStrings.length > 0) {
                var allPropertyAccessors = propertyAccessorResultStrings.join("");
                combinedResult = combinedResult + ", '_ko_property_writers' : { " + allPropertyAccessors + " } ";
            }

            return combinedResult;
        },

        keyValueArrayContainsKey: function(keyValueArray, key) {
            for (var i = 0; i < keyValueArray.length; i++)
                if (ko.utils.stringTrim(keyValueArray[i]['key']) == key)
                    return true;
            return false;
        },

        // Internal, private KO utility for updating model properties from within bindings
        // property:            If the property being updated is (or might be) an observable, pass it here
        //                      If it turns out to be a writable observable, it will be written to directly
        // allBindingsAccessor: All bindings in the current execution context.
        //                      This will be searched for a '_ko_property_writers' property in case you're writing to a non-observable
        // key:                 The key identifying the property to be written. Example: for { hasFocus: myValue }, write to 'myValue' by specifying the key 'hasFocus'
        // value:               The value to be written
        // checkIfDifferent:    If true, and if the property being written is a writable observable, the value will only be written if
        //                      it is !== existing value on that writable observable
        writeValueToProperty: function(property, allBindingsAccessor, key, value, checkIfDifferent) {
            if (!property || !ko.isObservable(property)) {
                var propWriters = allBindingsAccessor()['_ko_property_writers'];
                if (propWriters && propWriters[key])
                    propWriters[key](value);
            } else if (ko.isWriteableObservable(property) && (!checkIfDifferent || property.peek() !== value)) {
                property(value);
            }
        }
    };
})();

ko.exportSymbol('expressionRewriting', ko.expressionRewriting);
ko.exportSymbol('expressionRewriting.bindingRewriteValidators', ko.expressionRewriting.bindingRewriteValidators);
ko.exportSymbol('expressionRewriting.parseObjectLiteral', ko.expressionRewriting.parseObjectLiteral);
ko.exportSymbol('expressionRewriting.preProcessBindings', ko.expressionRewriting.preProcessBindings);

// For backward compatibility, define the following aliases. (Previously, these function names were misleading because
// they referred to JSON specifically, even though they actually work with arbitrary JavaScript object literal expressions.)
ko.exportSymbol('jsonExpressionRewriting', ko.expressionRewriting);
ko.exportSymbol('jsonExpressionRewriting.insertPropertyAccessorsIntoJson', ko.expressionRewriting.preProcessBindings);(function() {
    // "Virtual elements" is an abstraction on top of the usual DOM API which understands the notion that comment nodes
    // may be used to represent hierarchy (in addition to the DOM's natural hierarchy).
    // If you call the DOM-manipulating functions on ko.virtualElements, you will be able to read and write the state
    // of that virtual hierarchy
    //
    // The point of all this is to support containerless templates (e.g., <!-- ko foreach:someCollection -->blah<!-- /ko -->)
    // without having to scatter special cases all over the binding and templating code.

    // IE 9 cannot reliably read the "nodeValue" property of a comment node (see https://github.com/SteveSanderson/knockout/issues/186)
    // but it does give them a nonstandard alternative property called "text" that it can read reliably. Other browsers don't have that property.
    // So, use node.text where available, and node.nodeValue elsewhere
    var commentNodesHaveTextProperty = document && document.createComment("test").text === "<!--test-->";

    var startCommentRegex = commentNodesHaveTextProperty ? /^<!--\s*ko(?:\s+(.+\s*\:[\s\S]*))?\s*-->$/ : /^\s*ko(?:\s+(.+\s*\:[\s\S]*))?\s*$/;
    var endCommentRegex =   commentNodesHaveTextProperty ? /^<!--\s*\/ko\s*-->$/ : /^\s*\/ko\s*$/;
    var htmlTagsWithOptionallyClosingChildren = { 'ul': true, 'ol': true };

    function isStartComment(node) {
        return (node.nodeType == 8) && (commentNodesHaveTextProperty ? node.text : node.nodeValue).match(startCommentRegex);
    }

    function isEndComment(node) {
        return (node.nodeType == 8) && (commentNodesHaveTextProperty ? node.text : node.nodeValue).match(endCommentRegex);
    }

    function getVirtualChildren(startComment, allowUnbalanced) {
        var currentNode = startComment;
        var depth = 1;
        var children = [];
        while (currentNode = currentNode.nextSibling) {
            if (isEndComment(currentNode)) {
                depth--;
                if (depth === 0)
                    return children;
            }

            children.push(currentNode);

            if (isStartComment(currentNode))
                depth++;
        }
        if (!allowUnbalanced)
            throw new Error("Cannot find closing comment tag to match: " + startComment.nodeValue);
        return null;
    }

    function getMatchingEndComment(startComment, allowUnbalanced) {
        var allVirtualChildren = getVirtualChildren(startComment, allowUnbalanced);
        if (allVirtualChildren) {
            if (allVirtualChildren.length > 0)
                return allVirtualChildren[allVirtualChildren.length - 1].nextSibling;
            return startComment.nextSibling;
        } else
            return null; // Must have no matching end comment, and allowUnbalanced is true
    }

    function getUnbalancedChildTags(node) {
        // e.g., from <div>OK</div><!-- ko blah --><span>Another</span>, returns: <!-- ko blah --><span>Another</span>
        //       from <div>OK</div><!-- /ko --><!-- /ko -->,             returns: <!-- /ko --><!-- /ko -->
        var childNode = node.firstChild, captureRemaining = null;
        if (childNode) {
            do {
                if (captureRemaining)                   // We already hit an unbalanced node and are now just scooping up all subsequent nodes
                    captureRemaining.push(childNode);
                else if (isStartComment(childNode)) {
                    var matchingEndComment = getMatchingEndComment(childNode, /* allowUnbalanced: */ true);
                    if (matchingEndComment)             // It's a balanced tag, so skip immediately to the end of this virtual set
                        childNode = matchingEndComment;
                    else
                        captureRemaining = [childNode]; // It's unbalanced, so start capturing from this point
                } else if (isEndComment(childNode)) {
                    captureRemaining = [childNode];     // It's unbalanced (if it wasn't, we'd have skipped over it already), so start capturing
                }
            } while (childNode = childNode.nextSibling);
        }
        return captureRemaining;
    }

    ko.virtualElements = {
        allowedBindings: {},

        childNodes: function(node) {
            return isStartComment(node) ? getVirtualChildren(node) : node.childNodes;
        },

        emptyNode: function(node) {
            if (!isStartComment(node))
                ko.utils.emptyDomNode(node);
            else {
                var virtualChildren = ko.virtualElements.childNodes(node);
                for (var i = 0, j = virtualChildren.length; i < j; i++)
                    ko.removeNode(virtualChildren[i]);
            }
        },

        setDomNodeChildren: function(node, childNodes) {
            if (!isStartComment(node))
                ko.utils.setDomNodeChildren(node, childNodes);
            else {
                ko.virtualElements.emptyNode(node);
                var endCommentNode = node.nextSibling; // Must be the next sibling, as we just emptied the children
                for (var i = 0, j = childNodes.length; i < j; i++)
                    endCommentNode.parentNode.insertBefore(childNodes[i], endCommentNode);
            }
        },

        prepend: function(containerNode, nodeToPrepend) {
            if (!isStartComment(containerNode)) {
                if (containerNode.firstChild)
                    containerNode.insertBefore(nodeToPrepend, containerNode.firstChild);
                else
                    containerNode.appendChild(nodeToPrepend);
            } else {
                // Start comments must always have a parent and at least one following sibling (the end comment)
                containerNode.parentNode.insertBefore(nodeToPrepend, containerNode.nextSibling);
            }
        },

        insertAfter: function(containerNode, nodeToInsert, insertAfterNode) {
            if (!insertAfterNode) {
                ko.virtualElements.prepend(containerNode, nodeToInsert);
            } else if (!isStartComment(containerNode)) {
                // Insert after insertion point
                if (insertAfterNode.nextSibling)
                    containerNode.insertBefore(nodeToInsert, insertAfterNode.nextSibling);
                else
                    containerNode.appendChild(nodeToInsert);
            } else {
                // Children of start comments must always have a parent and at least one following sibling (the end comment)
                containerNode.parentNode.insertBefore(nodeToInsert, insertAfterNode.nextSibling);
            }
        },

        firstChild: function(node) {
            if (!isStartComment(node))
                return node.firstChild;
            if (!node.nextSibling || isEndComment(node.nextSibling))
                return null;
            return node.nextSibling;
        },

        nextSibling: function(node) {
            if (isStartComment(node))
                node = getMatchingEndComment(node);
            if (node.nextSibling && isEndComment(node.nextSibling))
                return null;
            return node.nextSibling;
        },

        virtualNodeBindingValue: function(node) {
            var regexMatch = isStartComment(node);
            return regexMatch ? regexMatch[1] : null;
        },

        normaliseVirtualElementDomStructure: function(elementVerified) {
            // Workaround for https://github.com/SteveSanderson/knockout/issues/155
            // (IE <= 8 or IE 9 quirks mode parses your HTML weirdly, treating closing </li> tags as if they don't exist, thereby moving comment nodes
            // that are direct descendants of <ul> into the preceding <li>)
            if (!htmlTagsWithOptionallyClosingChildren[ko.utils.tagNameLower(elementVerified)])
                return;

            // Scan immediate children to see if they contain unbalanced comment tags. If they do, those comment tags
            // must be intended to appear *after* that child, so move them there.
            var childNode = elementVerified.firstChild;
            if (childNode) {
                do {
                    if (childNode.nodeType === 1) {
                        var unbalancedTags = getUnbalancedChildTags(childNode);
                        if (unbalancedTags) {
                            // Fix up the DOM by moving the unbalanced tags to where they most likely were intended to be placed - *after* the child
                            var nodeToInsertBefore = childNode.nextSibling;
                            for (var i = 0; i < unbalancedTags.length; i++) {
                                if (nodeToInsertBefore)
                                    elementVerified.insertBefore(unbalancedTags[i], nodeToInsertBefore);
                                else
                                    elementVerified.appendChild(unbalancedTags[i]);
                            }
                        }
                    }
                } while (childNode = childNode.nextSibling);
            }
        }
    };
})();
ko.exportSymbol('virtualElements', ko.virtualElements);
ko.exportSymbol('virtualElements.allowedBindings', ko.virtualElements.allowedBindings);
ko.exportSymbol('virtualElements.emptyNode', ko.virtualElements.emptyNode);
//ko.exportSymbol('virtualElements.firstChild', ko.virtualElements.firstChild);     // firstChild is not minified
ko.exportSymbol('virtualElements.insertAfter', ko.virtualElements.insertAfter);
//ko.exportSymbol('virtualElements.nextSibling', ko.virtualElements.nextSibling);   // nextSibling is not minified
ko.exportSymbol('virtualElements.prepend', ko.virtualElements.prepend);
ko.exportSymbol('virtualElements.setDomNodeChildren', ko.virtualElements.setDomNodeChildren);
(function() {
    var defaultBindingAttributeName = "data-bind";

    ko.bindingProvider = function() {
        this.bindingCache = {};
    };

    ko.utils.extend(ko.bindingProvider.prototype, {
        'nodeHasBindings': function(node) {
            switch (node.nodeType) {
                case 1: return node.getAttribute(defaultBindingAttributeName) != null;   // Element
                case 8: return ko.virtualElements.virtualNodeBindingValue(node) != null; // Comment node
                default: return false;
            }
        },

        'getBindings': function(node, bindingContext) {
            var bindingsString = this['getBindingsString'](node, bindingContext);
            return bindingsString ? this['parseBindingsString'](bindingsString, bindingContext, node) : null;
        },

        // The following function is only used internally by this default provider.
        // It's not part of the interface definition for a general binding provider.
        'getBindingsString': function(node, bindingContext) {
            switch (node.nodeType) {
                case 1: return node.getAttribute(defaultBindingAttributeName);   // Element
                case 8: return ko.virtualElements.virtualNodeBindingValue(node); // Comment node
                default: return null;
            }
        },

        // The following function is only used internally by this default provider.
        // It's not part of the interface definition for a general binding provider.
        'parseBindingsString': function(bindingsString, bindingContext, node) {
            try {
                var bindingFunction = createBindingsStringEvaluatorViaCache(bindingsString, this.bindingCache);
                return bindingFunction(bindingContext, node);
            } catch (ex) {
                ex.message = "Unable to parse bindings.\nBindings value: " + bindingsString + "\nMessage: " + ex.message;
                throw ex;
            }
        }
    });

    ko.bindingProvider['instance'] = new ko.bindingProvider();

    function createBindingsStringEvaluatorViaCache(bindingsString, cache) {
        var cacheKey = bindingsString;
        return cache[cacheKey]
            || (cache[cacheKey] = createBindingsStringEvaluator(bindingsString));
    }

    function createBindingsStringEvaluator(bindingsString) {
        // Build the source for a function that evaluates "expression"
        // For each scope variable, add an extra level of "with" nesting
        // Example result: with(sc1) { with(sc0) { return (expression) } }
        var rewrittenBindings = ko.expressionRewriting.preProcessBindings(bindingsString),
            functionBody = "with($context){with($data||{}){return{" + rewrittenBindings + "}}}";
        return new Function("$context", "$element", functionBody);
    }
})();

ko.exportSymbol('bindingProvider', ko.bindingProvider);
(function () {
    ko.bindingHandlers = {};

    ko.bindingContext = function(dataItem, parentBindingContext, dataItemAlias) {
        if (parentBindingContext) {
            ko.utils.extend(this, parentBindingContext); // Inherit $root and any custom properties
            this['$parentContext'] = parentBindingContext;
            this['$parent'] = parentBindingContext['$data'];
            this['$parents'] = (parentBindingContext['$parents'] || []).slice(0);
            this['$parents'].unshift(this['$parent']);
        } else {
            this['$parents'] = [];
            this['$root'] = dataItem;
            // Export 'ko' in the binding context so it will be available in bindings and templates
            // even if 'ko' isn't exported as a global, such as when using an AMD loader.
            // See https://github.com/SteveSanderson/knockout/issues/490
            this['ko'] = ko;
        }
        this['$data'] = dataItem;
        if (dataItemAlias)
            this[dataItemAlias] = dataItem;
    }
    ko.bindingContext.prototype['createChildContext'] = function (dataItem, dataItemAlias) {
        return new ko.bindingContext(dataItem, this, dataItemAlias);
    };
    ko.bindingContext.prototype['extend'] = function(properties) {
        var clone = ko.utils.extend(new ko.bindingContext(), this);
        return ko.utils.extend(clone, properties);
    };

    function validateThatBindingIsAllowedForVirtualElements(bindingName) {
        var validator = ko.virtualElements.allowedBindings[bindingName];
        if (!validator)
            throw new Error("The binding '" + bindingName + "' cannot be used with virtual elements")
    }

    function applyBindingsToDescendantsInternal (viewModel, elementOrVirtualElement, bindingContextsMayDifferFromDomParentElement) {
        var currentChild, nextInQueue = ko.virtualElements.firstChild(elementOrVirtualElement);
        while (currentChild = nextInQueue) {
            // Keep a record of the next child *before* applying bindings, in case the binding removes the current child from its position
            nextInQueue = ko.virtualElements.nextSibling(currentChild);
            applyBindingsToNodeAndDescendantsInternal(viewModel, currentChild, bindingContextsMayDifferFromDomParentElement);
        }
    }

    function applyBindingsToNodeAndDescendantsInternal (viewModel, nodeVerified, bindingContextMayDifferFromDomParentElement) {
        var shouldBindDescendants = true;

        // Perf optimisation: Apply bindings only if...
        // (1) We need to store the binding context on this node (because it may differ from the DOM parent node's binding context)
        //     Note that we can't store binding contexts on non-elements (e.g., text nodes), as IE doesn't allow expando properties for those
        // (2) It might have bindings (e.g., it has a data-bind attribute, or it's a marker for a containerless template)
        var isElement = (nodeVerified.nodeType === 1);
        if (isElement) // Workaround IE <= 8 HTML parsing weirdness
            ko.virtualElements.normaliseVirtualElementDomStructure(nodeVerified);

        var shouldApplyBindings = (isElement && bindingContextMayDifferFromDomParentElement)             // Case (1)
                               || ko.bindingProvider['instance']['nodeHasBindings'](nodeVerified);       // Case (2)
        if (shouldApplyBindings)
            shouldBindDescendants = applyBindingsToNodeInternal(nodeVerified, null, viewModel, bindingContextMayDifferFromDomParentElement).shouldBindDescendants;

        if (shouldBindDescendants) {
            // We're recursing automatically into (real or virtual) child nodes without changing binding contexts. So,
            //  * For children of a *real* element, the binding context is certainly the same as on their DOM .parentNode,
            //    hence bindingContextsMayDifferFromDomParentElement is false
            //  * For children of a *virtual* element, we can't be sure. Evaluating .parentNode on those children may
            //    skip over any number of intermediate virtual elements, any of which might define a custom binding context,
            //    hence bindingContextsMayDifferFromDomParentElement is true
            applyBindingsToDescendantsInternal(viewModel, nodeVerified, /* bindingContextsMayDifferFromDomParentElement: */ !isElement);
        }
    }

    var boundElementDomDataKey = '__ko_boundElement';
    function applyBindingsToNodeInternal (node, bindings, viewModelOrBindingContext, bindingContextMayDifferFromDomParentElement) {
        // Need to be sure that inits are only run once, and updates never run until all the inits have been run
        var initPhase = 0; // 0 = before all inits, 1 = during inits, 2 = after all inits

        // Each time the dependentObservable is evaluated (after data changes),
        // the binding attribute is reparsed so that it can pick out the correct
        // model properties in the context of the changed data.
        // DOM event callbacks need to be able to access this changed data,
        // so we need a single parsedBindings variable (shared by all callbacks
        // associated with this node's bindings) that all the closures can access.
        var parsedBindings;
        function makeValueAccessor(bindingKey) {
            return function () { return parsedBindings[bindingKey] }
        }
        function parsedBindingsAccessor() {
            return parsedBindings;
        }

        var bindingHandlerThatControlsDescendantBindings;

        // Prevent multiple applyBindings calls for the same node, except when a binding value is specified
        var alreadyBound = ko.utils.domData.get(node, boundElementDomDataKey);
        if (!bindings) {
            if (alreadyBound) {
                throw Error("You cannot apply bindings multiple times to the same element.");
            }
            ko.utils.domData.set(node, boundElementDomDataKey, true);
        }

        ko.dependentObservable(
            function () {
                // Ensure we have a nonnull binding context to work with
                var bindingContextInstance = viewModelOrBindingContext && (viewModelOrBindingContext instanceof ko.bindingContext)
                    ? viewModelOrBindingContext
                    : new ko.bindingContext(ko.utils.unwrapObservable(viewModelOrBindingContext));
                var viewModel = bindingContextInstance['$data'];

                // Optimization: Don't store the binding context on this node if it's definitely the same as on node.parentNode, because
                // we can easily recover it just by scanning up the node's ancestors in the DOM
                // (note: here, parent node means "real DOM parent" not "virtual parent", as there's no O(1) way to find the virtual parent)
                if (!alreadyBound && bindingContextMayDifferFromDomParentElement)
                    ko.storedBindingContextForNode(node, bindingContextInstance);

                // Use evaluatedBindings if given, otherwise fall back on asking the bindings provider to give us some bindings
                var evaluatedBindings = (typeof bindings == "function") ? bindings(bindingContextInstance, node) : bindings;
                parsedBindings = evaluatedBindings || ko.bindingProvider['instance']['getBindings'](node, bindingContextInstance);

                if (parsedBindings) {
                    // First run all the inits, so bindings can register for notification on changes
                    if (initPhase === 0) {
                        initPhase = 1;
                        ko.utils.objectForEach(parsedBindings, function(bindingKey) {
                            var binding = ko.bindingHandlers[bindingKey];
                            if (binding && node.nodeType === 8)
                                validateThatBindingIsAllowedForVirtualElements(bindingKey);

                            if (binding && typeof binding["init"] == "function") {
                                var handlerInitFn = binding["init"];
                                var initResult = handlerInitFn(node, makeValueAccessor(bindingKey), parsedBindingsAccessor, viewModel, bindingContextInstance);

                                // If this binding handler claims to control descendant bindings, make a note of this
                                if (initResult && initResult['controlsDescendantBindings']) {
                                    if (bindingHandlerThatControlsDescendantBindings !== undefined)
                                        throw new Error("Multiple bindings (" + bindingHandlerThatControlsDescendantBindings + " and " + bindingKey + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                    bindingHandlerThatControlsDescendantBindings = bindingKey;
                                }
                            }
                        });
                        initPhase = 2;
                    }

                    // ... then run all the updates, which might trigger changes even on the first evaluation
                    if (initPhase === 2) {
                        ko.utils.objectForEach(parsedBindings, function(bindingKey) {
                            var binding = ko.bindingHandlers[bindingKey];
                            if (binding && typeof binding["update"] == "function") {
                                var handlerUpdateFn = binding["update"];
                                handlerUpdateFn(node, makeValueAccessor(bindingKey), parsedBindingsAccessor, viewModel, bindingContextInstance);
                            }
                        });
                    }
                }
            },
            null,
            { disposeWhenNodeIsRemoved : node }
        );

        return {
            shouldBindDescendants: bindingHandlerThatControlsDescendantBindings === undefined
        };
    };

    var storedBindingContextDomDataKey = "__ko_bindingContext__";
    ko.storedBindingContextForNode = function (node, bindingContext) {
        if (arguments.length == 2)
            ko.utils.domData.set(node, storedBindingContextDomDataKey, bindingContext);
        else
            return ko.utils.domData.get(node, storedBindingContextDomDataKey);
    }

    ko.applyBindingsToNode = function (node, bindings, viewModel) {
        if (node.nodeType === 1) // If it's an element, workaround IE <= 8 HTML parsing weirdness
            ko.virtualElements.normaliseVirtualElementDomStructure(node);
        return applyBindingsToNodeInternal(node, bindings, viewModel, true);
    };

    ko.applyBindingsToDescendants = function(viewModel, rootNode) {
        if (rootNode.nodeType === 1 || rootNode.nodeType === 8)
            applyBindingsToDescendantsInternal(viewModel, rootNode, true);
    };

    ko.applyBindings = function (viewModel, rootNode) {
        if (rootNode && (rootNode.nodeType !== 1) && (rootNode.nodeType !== 8))
            throw new Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
        rootNode = rootNode || window.document.body; // Make "rootNode" parameter optional

        applyBindingsToNodeAndDescendantsInternal(viewModel, rootNode, true);
    };

    // Retrieving binding context from arbitrary nodes
    ko.contextFor = function(node) {
        // We can only do something meaningful for elements and comment nodes (in particular, not text nodes, as IE can't store domdata for them)
        switch (node.nodeType) {
            case 1:
            case 8:
                var context = ko.storedBindingContextForNode(node);
                if (context) return context;
                if (node.parentNode) return ko.contextFor(node.parentNode);
                break;
        }
        return undefined;
    };
    ko.dataFor = function(node) {
        var context = ko.contextFor(node);
        return context ? context['$data'] : undefined;
    };

    ko.exportSymbol('bindingHandlers', ko.bindingHandlers);
    ko.exportSymbol('applyBindings', ko.applyBindings);
    ko.exportSymbol('applyBindingsToDescendants', ko.applyBindingsToDescendants);
    ko.exportSymbol('applyBindingsToNode', ko.applyBindingsToNode);
    ko.exportSymbol('contextFor', ko.contextFor);
    ko.exportSymbol('dataFor', ko.dataFor);
})();
var attrHtmlToJavascriptMap = { 'class': 'className', 'for': 'htmlFor' };
ko.bindingHandlers['attr'] = {
    'update': function(element, valueAccessor, allBindingsAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor()) || {};
        ko.utils.objectForEach(value, function(attrName, attrValue) {
            attrValue = ko.utils.unwrapObservable(attrValue);

            // To cover cases like "attr: { checked:someProp }", we want to remove the attribute entirely
            // when someProp is a "no value"-like value (strictly null, false, or undefined)
            // (because the absence of the "checked" attr is how to mark an element as not checked, etc.)
            var toRemove = (attrValue === false) || (attrValue === null) || (attrValue === undefined);
            if (toRemove)
                element.removeAttribute(attrName);

            // In IE <= 7 and IE8 Quirks Mode, you have to use the Javascript property name instead of the
            // HTML attribute name for certain attributes. IE8 Standards Mode supports the correct behavior,
            // but instead of figuring out the mode, we'll just set the attribute through the Javascript
            // property for IE <= 8.
            if (ko.utils.ieVersion <= 8 && attrName in attrHtmlToJavascriptMap) {
                attrName = attrHtmlToJavascriptMap[attrName];
                if (toRemove)
                    element.removeAttribute(attrName);
                else
                    element[attrName] = attrValue;
            } else if (!toRemove) {
                element.setAttribute(attrName, attrValue.toString());
            }

            // Treat "name" specially - although you can think of it as an attribute, it also needs
            // special handling on older versions of IE (https://github.com/SteveSanderson/knockout/pull/333)
            // Deliberately being case-sensitive here because XHTML would regard "Name" as a different thing
            // entirely, and there's no strong reason to allow for such casing in HTML.
            if (attrName === "name") {
                ko.utils.setElementName(element, toRemove ? "" : attrValue.toString());
            }
        });
    }
};
ko.bindingHandlers['checked'] = {
    'init': function (element, valueAccessor, allBindingsAccessor) {
        var updateHandler = function() {
            var valueToWrite;
            if (element.type == "checkbox") {
                valueToWrite = element.checked;
            } else if ((element.type == "radio") && (element.checked)) {
                valueToWrite = element.value;
            } else {
                return; // "checked" binding only responds to checkboxes and selected radio buttons
            }

            var modelValue = valueAccessor(), unwrappedValue = ko.utils.unwrapObservable(modelValue);
            if ((element.type == "checkbox") && (unwrappedValue instanceof Array)) {
                // For checkboxes bound to an array, we add/remove the checkbox value to that array
                // This works for both observable and non-observable arrays
                ko.utils.addOrRemoveItem(modelValue, element.value, element.checked);
            } else {
                ko.expressionRewriting.writeValueToProperty(modelValue, allBindingsAccessor, 'checked', valueToWrite, true);
            }
        };
        ko.utils.registerEventHandler(element, "click", updateHandler);

        // IE 6 won't allow radio buttons to be selected unless they have a name
        if ((element.type == "radio") && !element.name)
            ko.bindingHandlers['uniqueName']['init'](element, function() { return true });
    },
    'update': function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());

        if (element.type == "checkbox") {
            if (value instanceof Array) {
                // When bound to an array, the checkbox being checked represents its value being present in that array
                element.checked = ko.utils.arrayIndexOf(value, element.value) >= 0;
            } else {
                // When bound to any other value (not an array), the checkbox being checked represents the value being trueish
                element.checked = value;
            }
        } else if (element.type == "radio") {
            element.checked = (element.value == value);
        }
    }
};
var classesWrittenByBindingKey = '__ko__cssValue';
ko.bindingHandlers['css'] = {
    'update': function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        if (typeof value == "object") {
            ko.utils.objectForEach(value, function(className, shouldHaveClass) {
                shouldHaveClass = ko.utils.unwrapObservable(shouldHaveClass);
                ko.utils.toggleDomNodeCssClass(element, className, shouldHaveClass);
            });
        } else {
            value = String(value || ''); // Make sure we don't try to store or set a non-string value
            ko.utils.toggleDomNodeCssClass(element, element[classesWrittenByBindingKey], false);
            element[classesWrittenByBindingKey] = value;
            ko.utils.toggleDomNodeCssClass(element, value, true);
        }
    }
};
ko.bindingHandlers['enable'] = {
    'update': function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        if (value && element.disabled)
            element.removeAttribute("disabled");
        else if ((!value) && (!element.disabled))
            element.disabled = true;
    }
};

ko.bindingHandlers['disable'] = {
    'update': function (element, valueAccessor) {
        ko.bindingHandlers['enable']['update'](element, function() { return !ko.utils.unwrapObservable(valueAccessor()) });
    }
};
// For certain common events (currently just 'click'), allow a simplified data-binding syntax
// e.g. click:handler instead of the usual full-length event:{click:handler}
function makeEventHandlerShortcut(eventName) {
    ko.bindingHandlers[eventName] = {
        'init': function(element, valueAccessor, allBindingsAccessor, viewModel) {
            var newValueAccessor = function () {
                var result = {};
                result[eventName] = valueAccessor();
                return result;
            };
            return ko.bindingHandlers['event']['init'].call(this, element, newValueAccessor, allBindingsAccessor, viewModel);
        }
    }
}

ko.bindingHandlers['event'] = {
    'init' : function (element, valueAccessor, allBindingsAccessor, viewModel) {
        var eventsToHandle = valueAccessor() || {};
        ko.utils.objectForEach(eventsToHandle, function(eventName) {
            if (typeof eventName == "string") {
                ko.utils.registerEventHandler(element, eventName, function (event) {
                    var handlerReturnValue;
                    var handlerFunction = valueAccessor()[eventName];
                    if (!handlerFunction)
                        return;
                    var allBindings = allBindingsAccessor();

                    try {
                        // Take all the event args, and prefix with the viewmodel
                        var argsForHandler = ko.utils.makeArray(arguments);
                        argsForHandler.unshift(viewModel);
                        handlerReturnValue = handlerFunction.apply(viewModel, argsForHandler);
                    } finally {
                        if (handlerReturnValue !== true) { // Normally we want to prevent default action. Developer can override this be explicitly returning true.
                            if (event.preventDefault)
                                event.preventDefault();
                            else
                                event.returnValue = false;
                        }
                    }

                    var bubble = allBindings[eventName + 'Bubble'] !== false;
                    if (!bubble) {
                        event.cancelBubble = true;
                        if (event.stopPropagation)
                            event.stopPropagation();
                    }
                });
            }
        });
    }
};
// "foreach: someExpression" is equivalent to "template: { foreach: someExpression }"
// "foreach: { data: someExpression, afterAdd: myfn }" is equivalent to "template: { foreach: someExpression, afterAdd: myfn }"
ko.bindingHandlers['foreach'] = {
    makeTemplateValueAccessor: function(valueAccessor) {
        return function() {
            var modelValue = valueAccessor(),
                unwrappedValue = ko.utils.peekObservable(modelValue);    // Unwrap without setting a dependency here

            // If unwrappedValue is the array, pass in the wrapped value on its own
            // The value will be unwrapped and tracked within the template binding
            // (See https://github.com/SteveSanderson/knockout/issues/523)
            if ((!unwrappedValue) || typeof unwrappedValue.length == "number")
                return { 'foreach': modelValue, 'templateEngine': ko.nativeTemplateEngine.instance };

            // If unwrappedValue.data is the array, preserve all relevant options and unwrap again value so we get updates
            ko.utils.unwrapObservable(modelValue);
            return {
                'foreach': unwrappedValue['data'],
                'as': unwrappedValue['as'],
                'includeDestroyed': unwrappedValue['includeDestroyed'],
                'afterAdd': unwrappedValue['afterAdd'],
                'beforeRemove': unwrappedValue['beforeRemove'],
                'afterRender': unwrappedValue['afterRender'],
                'beforeMove': unwrappedValue['beforeMove'],
                'afterMove': unwrappedValue['afterMove'],
                'templateEngine': ko.nativeTemplateEngine.instance
            };
        };
    },
    'init': function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        return ko.bindingHandlers['template']['init'](element, ko.bindingHandlers['foreach'].makeTemplateValueAccessor(valueAccessor));
    },
    'update': function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        return ko.bindingHandlers['template']['update'](element, ko.bindingHandlers['foreach'].makeTemplateValueAccessor(valueAccessor), allBindingsAccessor, viewModel, bindingContext);
    }
};
ko.expressionRewriting.bindingRewriteValidators['foreach'] = false; // Can't rewrite control flow bindings
ko.virtualElements.allowedBindings['foreach'] = true;
var hasfocusUpdatingProperty = '__ko_hasfocusUpdating';
var hasfocusLastValue = '__ko_hasfocusLastValue';
ko.bindingHandlers['hasfocus'] = {
    'init': function(element, valueAccessor, allBindingsAccessor) {
        var handleElementFocusChange = function(isFocused) {
            // Where possible, ignore which event was raised and determine focus state using activeElement,
            // as this avoids phantom focus/blur events raised when changing tabs in modern browsers.
            // However, not all KO-targeted browsers (Firefox 2) support activeElement. For those browsers,
            // prevent a loss of focus when changing tabs/windows by setting a flag that prevents hasfocus
            // from calling 'blur()' on the element when it loses focus.
            // Discussion at https://github.com/SteveSanderson/knockout/pull/352
            element[hasfocusUpdatingProperty] = true;
            var ownerDoc = element.ownerDocument;
            if ("activeElement" in ownerDoc) {
                var active;
                try {
                    active = ownerDoc.activeElement;
                } catch(e) {
                    // IE9 throws if you access activeElement during page load (see issue #703)
                    active = ownerDoc.body;
                }
                isFocused = (active === element);
            }
            var modelValue = valueAccessor();
            ko.expressionRewriting.writeValueToProperty(modelValue, allBindingsAccessor, 'hasfocus', isFocused, true);

            //cache the latest value, so we can avoid unnecessarily calling focus/blur in the update function
            element[hasfocusLastValue] = isFocused;
            element[hasfocusUpdatingProperty] = false;
        };
        var handleElementFocusIn = handleElementFocusChange.bind(null, true);
        var handleElementFocusOut = handleElementFocusChange.bind(null, false);

        ko.utils.registerEventHandler(element, "focus", handleElementFocusIn);
        ko.utils.registerEventHandler(element, "focusin", handleElementFocusIn); // For IE
        ko.utils.registerEventHandler(element, "blur",  handleElementFocusOut);
        ko.utils.registerEventHandler(element, "focusout",  handleElementFocusOut); // For IE
    },
    'update': function(element, valueAccessor) {
        var value = !!ko.utils.unwrapObservable(valueAccessor()); //force boolean to compare with last value
        if (!element[hasfocusUpdatingProperty] && element[hasfocusLastValue] !== value) {
            value ? element.focus() : element.blur();
            ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, value ? "focusin" : "focusout"]); // For IE, which doesn't reliably fire "focus" or "blur" events synchronously
        }
    }
};

ko.bindingHandlers['hasFocus'] = ko.bindingHandlers['hasfocus']; // Make "hasFocus" an alias
ko.bindingHandlers['html'] = {
    'init': function() {
        // Prevent binding on the dynamically-injected HTML (as developers are unlikely to expect that, and it has security implications)
        return { 'controlsDescendantBindings': true };
    },
    'update': function (element, valueAccessor) {
        // setHtml will unwrap the value if needed
        ko.utils.setHtml(element, valueAccessor());
    }
};
var withIfDomDataKey = '__ko_withIfBindingData';
// Makes a binding like with or if
function makeWithIfBinding(bindingKey, isWith, isNot, makeContextCallback) {
    ko.bindingHandlers[bindingKey] = {
        'init': function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            ko.utils.domData.set(element, withIfDomDataKey, {});
            return { 'controlsDescendantBindings': true };
        },
        'update': function(element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var withIfData = ko.utils.domData.get(element, withIfDomDataKey),
                dataValue = ko.utils.unwrapObservable(valueAccessor()),
                shouldDisplay = !isNot !== !dataValue, // equivalent to isNot ? !dataValue : !!dataValue
                isFirstRender = !withIfData.savedNodes,
                needsRefresh = isFirstRender || isWith || (shouldDisplay !== withIfData.didDisplayOnLastUpdate);

            if (needsRefresh) {
                if (isFirstRender) {
                    withIfData.savedNodes = ko.utils.cloneNodes(ko.virtualElements.childNodes(element), true /* shouldCleanNodes */);
                }

                if (shouldDisplay) {
                    if (!isFirstRender) {
                        ko.virtualElements.setDomNodeChildren(element, ko.utils.cloneNodes(withIfData.savedNodes));
                    }
                    ko.applyBindingsToDescendants(makeContextCallback ? makeContextCallback(bindingContext, dataValue) : bindingContext, element);
                } else {
                    ko.virtualElements.emptyNode(element);
                }

                withIfData.didDisplayOnLastUpdate = shouldDisplay;
            }
        }
    };
    ko.expressionRewriting.bindingRewriteValidators[bindingKey] = false; // Can't rewrite control flow bindings
    ko.virtualElements.allowedBindings[bindingKey] = true;
}

// Construct the actual binding handlers
makeWithIfBinding('if');
makeWithIfBinding('ifnot', false /* isWith */, true /* isNot */);
makeWithIfBinding('with', true /* isWith */, false /* isNot */,
    function(bindingContext, dataValue) {
        return bindingContext['createChildContext'](dataValue);
    }
);
function ensureDropdownSelectionIsConsistentWithModelValue(element, modelValue, preferModelValue) {
    if (preferModelValue) {
        if (modelValue !== ko.selectExtensions.readValue(element))
            ko.selectExtensions.writeValue(element, modelValue);
    }

    // No matter which direction we're syncing in, we want the end result to be equality between dropdown value and model value.
    // If they aren't equal, either we prefer the dropdown value, or the model value couldn't be represented, so either way,
    // change the model value to match the dropdown.
    if (modelValue !== ko.selectExtensions.readValue(element))
        ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, "change"]);
};

ko.bindingHandlers['options'] = {
    'init': function(element) {
        if (ko.utils.tagNameLower(element) !== "select")
            throw new Error("options binding applies only to SELECT elements");

        // Remove all existing <option>s.
        while (element.length > 0) {
            element.remove(0);
        }

        // Ensures that the binding processor doesn't try to bind the options
        return { 'controlsDescendantBindings': true };
    },
    'update': function (element, valueAccessor, allBindingsAccessor) {
        var selectWasPreviouslyEmpty = element.length == 0;
        var previousScrollTop = (!selectWasPreviouslyEmpty && element.multiple) ? element.scrollTop : null;

        var unwrappedArray = ko.utils.unwrapObservable(valueAccessor());
        var allBindings = allBindingsAccessor();
        var includeDestroyed = allBindings['optionsIncludeDestroyed'];
        var captionPlaceholder = {};
        var captionValue;
        var previousSelectedValues;
        if (element.multiple) {
            previousSelectedValues = ko.utils.arrayMap(element.selectedOptions || ko.utils.arrayFilter(element.childNodes, function (node) {
                    return node.tagName && (ko.utils.tagNameLower(node) === "option") && node.selected;
                }), function (node) {
                    return ko.selectExtensions.readValue(node);
                });
        } else if (element.selectedIndex >= 0) {
            previousSelectedValues = [ ko.selectExtensions.readValue(element.options[element.selectedIndex]) ];
        }

        if (unwrappedArray) {
            if (typeof unwrappedArray.length == "undefined") // Coerce single value into array
                unwrappedArray = [unwrappedArray];

            // Filter out any entries marked as destroyed
            var filteredArray = ko.utils.arrayFilter(unwrappedArray, function(item) {
                return includeDestroyed || item === undefined || item === null || !ko.utils.unwrapObservable(item['_destroy']);
            });

            // If caption is included, add it to the array
            if ('optionsCaption' in allBindings) {
                captionValue = ko.utils.unwrapObservable(allBindings['optionsCaption']);
                // If caption value is null or undefined, don't show a caption
                if (captionValue !== null && captionValue !== undefined) {
                    filteredArray.unshift(captionPlaceholder);
                }
            }
        } else {
            // If a falsy value is provided (e.g. null), we'll simply empty the select element
            unwrappedArray = [];
        }

        function applyToObject(object, predicate, defaultValue) {
            var predicateType = typeof predicate;
            if (predicateType == "function")    // Given a function; run it against the data value
                return predicate(object);
            else if (predicateType == "string") // Given a string; treat it as a property name on the data value
                return object[predicate];
            else                                // Given no optionsText arg; use the data value itself
                return defaultValue;
        }

        // The following functions can run at two different times:
        // The first is when the whole array is being updated directly from this binding handler.
        // The second is when an observable value for a specific array entry is updated.
        // oldOptions will be empty in the first case, but will be filled with the previously generated option in the second.
        function optionForArrayItem(arrayEntry, index, oldOptions) {
            if (oldOptions.length) {
                previousSelectedValues = oldOptions[0].selected && [ ko.selectExtensions.readValue(oldOptions[0]) ];
            }
            var option = document.createElement("option");
            if (arrayEntry === captionPlaceholder) {
                ko.utils.setHtml(option, captionValue);
                ko.selectExtensions.writeValue(option, undefined);
            } else {
                // Apply a value to the option element
                var optionValue = applyToObject(arrayEntry, allBindings['optionsValue'], arrayEntry);
                ko.selectExtensions.writeValue(option, ko.utils.unwrapObservable(optionValue));

                // Apply some text to the option element
                var optionText = applyToObject(arrayEntry, allBindings['optionsText'], optionValue);
                ko.utils.setTextContent(option, optionText);
            }
            return [option];
        }

        function setSelectionCallback(arrayEntry, newOptions) {
            // IE6 doesn't like us to assign selection to OPTION nodes before they're added to the document.
            // That's why we first added them without selection. Now it's time to set the selection.
            if (previousSelectedValues) {
                var isSelected = ko.utils.arrayIndexOf(previousSelectedValues, ko.selectExtensions.readValue(newOptions[0])) >= 0;
                ko.utils.setOptionNodeSelectionState(newOptions[0], isSelected);
            }
        }

        var callback = setSelectionCallback;
        if (allBindings['optionsAfterRender']) {
            callback = function(arrayEntry, newOptions) {
                setSelectionCallback(arrayEntry, newOptions);
                ko.dependencyDetection.ignore(allBindings['optionsAfterRender'], null, [newOptions[0], arrayEntry !== captionPlaceholder ? arrayEntry : undefined]);
            }
        }

        ko.utils.setDomNodeChildrenFromArrayMapping(element, filteredArray, optionForArrayItem, null, callback);

        // Clear previousSelectedValues so that future updates to individual objects don't get stale data
        previousSelectedValues = null;

        if (selectWasPreviouslyEmpty && ('value' in allBindings)) {
            // Ensure consistency between model value and selected option.
            // If the dropdown is being populated for the first time here (or was otherwise previously empty),
            // the dropdown selection state is meaningless, so we preserve the model value.
            ensureDropdownSelectionIsConsistentWithModelValue(element, ko.utils.peekObservable(allBindings['value']), /* preferModelValue */ true);
        }

        // Workaround for IE bug
        ko.utils.ensureSelectElementIsRenderedCorrectly(element);

        if (previousScrollTop && Math.abs(previousScrollTop - element.scrollTop) > 20)
            element.scrollTop = previousScrollTop;
    }
};
ko.bindingHandlers['options'].optionValueDomDataKey = '__ko.optionValueDomData__';
ko.bindingHandlers['selectedOptions'] = {
    'init': function (element, valueAccessor, allBindingsAccessor) {
        ko.utils.registerEventHandler(element, "change", function () {
            var value = valueAccessor(), valueToWrite = [];
            ko.utils.arrayForEach(element.getElementsByTagName("option"), function(node) {
                if (node.selected)
                    valueToWrite.push(ko.selectExtensions.readValue(node));
            });
            ko.expressionRewriting.writeValueToProperty(value, allBindingsAccessor, 'selectedOptions', valueToWrite);
        });
    },
    'update': function (element, valueAccessor) {
        if (ko.utils.tagNameLower(element) != "select")
            throw new Error("values binding applies only to SELECT elements");

        var newValue = ko.utils.unwrapObservable(valueAccessor());
        if (newValue && typeof newValue.length == "number") {
            ko.utils.arrayForEach(element.getElementsByTagName("option"), function(node) {
                var isSelected = ko.utils.arrayIndexOf(newValue, ko.selectExtensions.readValue(node)) >= 0;
                ko.utils.setOptionNodeSelectionState(node, isSelected);
            });
        }
    }
};
ko.bindingHandlers['style'] = {
    'update': function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor() || {});
        ko.utils.objectForEach(value, function(styleName, styleValue) {
            styleValue = ko.utils.unwrapObservable(styleValue);
            element.style[styleName] = styleValue || ""; // Empty string removes the value, whereas null/undefined have no effect
        });
    }
};
ko.bindingHandlers['submit'] = {
    'init': function (element, valueAccessor, allBindingsAccessor, viewModel) {
        if (typeof valueAccessor() != "function")
            throw new Error("The value for a submit binding must be a function");
        ko.utils.registerEventHandler(element, "submit", function (event) {
            var handlerReturnValue;
            var value = valueAccessor();
            try { handlerReturnValue = value.call(viewModel, element); }
            finally {
                if (handlerReturnValue !== true) { // Normally we want to prevent default action. Developer can override this be explicitly returning true.
                    if (event.preventDefault)
                        event.preventDefault();
                    else
                        event.returnValue = false;
                }
            }
        });
    }
};
ko.bindingHandlers['text'] = {
    'update': function (element, valueAccessor) {
        ko.utils.setTextContent(element, valueAccessor());
    }
};
ko.virtualElements.allowedBindings['text'] = true;
ko.bindingHandlers['uniqueName'] = {
    'init': function (element, valueAccessor) {
        if (valueAccessor()) {
            var name = "ko_unique_" + (++ko.bindingHandlers['uniqueName'].currentIndex);
            ko.utils.setElementName(element, name);
        }
    }
};
ko.bindingHandlers['uniqueName'].currentIndex = 0;
ko.bindingHandlers['value'] = {
    'init': function (element, valueAccessor, allBindingsAccessor) {
        // Always catch "change" event; possibly other events too if asked
        var eventsToCatch = ["change"];
        var requestedEventsToCatch = allBindingsAccessor()["valueUpdate"];
        var propertyChangedFired = false;
        if (requestedEventsToCatch) {
            if (typeof requestedEventsToCatch == "string") // Allow both individual event names, and arrays of event names
                requestedEventsToCatch = [requestedEventsToCatch];
            ko.utils.arrayPushAll(eventsToCatch, requestedEventsToCatch);
            eventsToCatch = ko.utils.arrayGetDistinctValues(eventsToCatch);
        }

        var valueUpdateHandler = function() {
            propertyChangedFired = false;
            var modelValue = valueAccessor();
            var elementValue = ko.selectExtensions.readValue(element);
            ko.expressionRewriting.writeValueToProperty(modelValue, allBindingsAccessor, 'value', elementValue);
        }

        // Workaround for https://github.com/SteveSanderson/knockout/issues/122
        // IE doesn't fire "change" events on textboxes if the user selects a value from its autocomplete list
        var ieAutoCompleteHackNeeded = ko.utils.ieVersion && element.tagName.toLowerCase() == "input" && element.type == "text"
                                       && element.autocomplete != "off" && (!element.form || element.form.autocomplete != "off");
        if (ieAutoCompleteHackNeeded && ko.utils.arrayIndexOf(eventsToCatch, "propertychange") == -1) {
            ko.utils.registerEventHandler(element, "propertychange", function () { propertyChangedFired = true });
            ko.utils.registerEventHandler(element, "blur", function() {
                if (propertyChangedFired) {
                    valueUpdateHandler();
                }
            });
        }

        ko.utils.arrayForEach(eventsToCatch, function(eventName) {
            // The syntax "after<eventname>" means "run the handler asynchronously after the event"
            // This is useful, for example, to catch "keydown" events after the browser has updated the control
            // (otherwise, ko.selectExtensions.readValue(this) will receive the control's value *before* the key event)
            var handler = valueUpdateHandler;
            if (ko.utils.stringStartsWith(eventName, "after")) {
                handler = function() { setTimeout(valueUpdateHandler, 0) };
                eventName = eventName.substring("after".length);
            }
            ko.utils.registerEventHandler(element, eventName, handler);
        });
    },
    'update': function (element, valueAccessor) {
        var valueIsSelectOption = ko.utils.tagNameLower(element) === "select";
        var newValue = ko.utils.unwrapObservable(valueAccessor());
        var elementValue = ko.selectExtensions.readValue(element);
        var valueHasChanged = (newValue !== elementValue);

        if (valueHasChanged) {
            var applyValueAction = function () { ko.selectExtensions.writeValue(element, newValue); };
            applyValueAction();

            // Workaround for IE6 bug: It won't reliably apply values to SELECT nodes during the same execution thread
            // right after you've changed the set of OPTION nodes on it. So for that node type, we'll schedule a second thread
            // to apply the value as well.
            var alsoApplyAsynchronously = valueIsSelectOption;
            if (alsoApplyAsynchronously)
                setTimeout(applyValueAction, 0);
        }

        // If you try to set a model value that can't be represented in an already-populated dropdown, reject that change,
        // because you're not allowed to have a model value that disagrees with a visible UI selection.
        if (valueIsSelectOption && (element.length > 0))
            ensureDropdownSelectionIsConsistentWithModelValue(element, newValue, /* preferModelValue */ false);
    }
};
ko.bindingHandlers['visible'] = {
    'update': function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        var isCurrentlyVisible = !(element.style.display == "none");
        if (value && !isCurrentlyVisible)
            element.style.display = "";
        else if ((!value) && isCurrentlyVisible)
            element.style.display = "none";
    }
};
// 'click' is just a shorthand for the usual full-length event:{click:handler}
makeEventHandlerShortcut('click');
// If you want to make a custom template engine,
//
// [1] Inherit from this class (like ko.nativeTemplateEngine does)
// [2] Override 'renderTemplateSource', supplying a function with this signature:
//
//        function (templateSource, bindingContext, options) {
//            // - templateSource.text() is the text of the template you should render
//            // - bindingContext.$data is the data you should pass into the template
//            //   - you might also want to make bindingContext.$parent, bindingContext.$parents,
//            //     and bindingContext.$root available in the template too
//            // - options gives you access to any other properties set on "data-bind: { template: options }"
//            //
//            // Return value: an array of DOM nodes
//        }
//
// [3] Override 'createJavaScriptEvaluatorBlock', supplying a function with this signature:
//
//        function (script) {
//            // Return value: Whatever syntax means "Evaluate the JavaScript statement 'script' and output the result"
//            //               For example, the jquery.tmpl template engine converts 'someScript' to '${ someScript }'
//        }
//
//     This is only necessary if you want to allow data-bind attributes to reference arbitrary template variables.
//     If you don't want to allow that, you can set the property 'allowTemplateRewriting' to false (like ko.nativeTemplateEngine does)
//     and then you don't need to override 'createJavaScriptEvaluatorBlock'.

ko.templateEngine = function () { };

ko.templateEngine.prototype['renderTemplateSource'] = function (templateSource, bindingContext, options) {
    throw new Error("Override renderTemplateSource");
};

ko.templateEngine.prototype['createJavaScriptEvaluatorBlock'] = function (script) {
    throw new Error("Override createJavaScriptEvaluatorBlock");
};

ko.templateEngine.prototype['makeTemplateSource'] = function(template, templateDocument) {
    // Named template
    if (typeof template == "string") {
        templateDocument = templateDocument || document;
        var elem = templateDocument.getElementById(template);
        if (!elem)
            throw new Error("Cannot find template with ID " + template);
        return new ko.templateSources.domElement(elem);
    } else if ((template.nodeType == 1) || (template.nodeType == 8)) {
        // Anonymous template
        return new ko.templateSources.anonymousTemplate(template);
    } else
        throw new Error("Unknown template type: " + template);
};

ko.templateEngine.prototype['renderTemplate'] = function (template, bindingContext, options, templateDocument) {
    var templateSource = this['makeTemplateSource'](template, templateDocument);
    return this['renderTemplateSource'](templateSource, bindingContext, options);
};

ko.templateEngine.prototype['isTemplateRewritten'] = function (template, templateDocument) {
    // Skip rewriting if requested
    if (this['allowTemplateRewriting'] === false)
        return true;
    return this['makeTemplateSource'](template, templateDocument)['data']("isRewritten");
};

ko.templateEngine.prototype['rewriteTemplate'] = function (template, rewriterCallback, templateDocument) {
    var templateSource = this['makeTemplateSource'](template, templateDocument);
    var rewritten = rewriterCallback(templateSource['text']());
    templateSource['text'](rewritten);
    templateSource['data']("isRewritten", true);
};

ko.exportSymbol('templateEngine', ko.templateEngine);

ko.templateRewriting = (function () {
    var memoizeDataBindingAttributeSyntaxRegex = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi;
    var memoizeVirtualContainerBindingSyntaxRegex = /<!--\s*ko\b\s*([\s\S]*?)\s*-->/g;

    function validateDataBindValuesForRewriting(keyValueArray) {
        var allValidators = ko.expressionRewriting.bindingRewriteValidators;
        for (var i = 0; i < keyValueArray.length; i++) {
            var key = keyValueArray[i]['key'];
            if (allValidators.hasOwnProperty(key)) {
                var validator = allValidators[key];

                if (typeof validator === "function") {
                    var possibleErrorMessage = validator(keyValueArray[i]['value']);
                    if (possibleErrorMessage)
                        throw new Error(possibleErrorMessage);
                } else if (!validator) {
                    throw new Error("This template engine does not support the '" + key + "' binding within its templates");
                }
            }
        }
    }

    function constructMemoizedTagReplacement(dataBindAttributeValue, tagToRetain, nodeName, templateEngine) {
        var dataBindKeyValueArray = ko.expressionRewriting.parseObjectLiteral(dataBindAttributeValue);
        validateDataBindValuesForRewriting(dataBindKeyValueArray);
        var rewrittenDataBindAttributeValue = ko.expressionRewriting.preProcessBindings(dataBindKeyValueArray);

        // For no obvious reason, Opera fails to evaluate rewrittenDataBindAttributeValue unless it's wrapped in an additional
        // anonymous function, even though Opera's built-in debugger can evaluate it anyway. No other browser requires this
        // extra indirection.
        var applyBindingsToNextSiblingScript =
            "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + rewrittenDataBindAttributeValue + " } })()},'" + nodeName.toLowerCase() + "')";
        return templateEngine['createJavaScriptEvaluatorBlock'](applyBindingsToNextSiblingScript) + tagToRetain;
    }

    return {
        ensureTemplateIsRewritten: function (template, templateEngine, templateDocument) {
            if (!templateEngine['isTemplateRewritten'](template, templateDocument))
                templateEngine['rewriteTemplate'](template, function (htmlString) {
                    return ko.templateRewriting.memoizeBindingAttributeSyntax(htmlString, templateEngine);
                }, templateDocument);
        },

        memoizeBindingAttributeSyntax: function (htmlString, templateEngine) {
            return htmlString.replace(memoizeDataBindingAttributeSyntaxRegex, function () {
                return constructMemoizedTagReplacement(/* dataBindAttributeValue: */ arguments[4], /* tagToRetain: */ arguments[1], /* nodeName: */ arguments[2], templateEngine);
            }).replace(memoizeVirtualContainerBindingSyntaxRegex, function() {
                return constructMemoizedTagReplacement(/* dataBindAttributeValue: */ arguments[1], /* tagToRetain: */ "<!-- ko -->", /* nodeName: */ "#comment", templateEngine);
            });
        },

        applyMemoizedBindingsToNextSibling: function (bindings, nodeName) {
            return ko.memoization.memoize(function (domNode, bindingContext) {
                var nodeToBind = domNode.nextSibling;
                if (nodeToBind && nodeToBind.nodeName.toLowerCase() === nodeName) {
                    ko.applyBindingsToNode(nodeToBind, bindings, bindingContext);
                }
            });
        }
    }
})();


// Exported only because it has to be referenced by string lookup from within rewritten template
ko.exportSymbol('__tr_ambtns', ko.templateRewriting.applyMemoizedBindingsToNextSibling);
(function() {
    // A template source represents a read/write way of accessing a template. This is to eliminate the need for template loading/saving
    // logic to be duplicated in every template engine (and means they can all work with anonymous templates, etc.)
    //
    // Two are provided by default:
    //  1. ko.templateSources.domElement       - reads/writes the text content of an arbitrary DOM element
    //  2. ko.templateSources.anonymousElement - uses ko.utils.domData to read/write text *associated* with the DOM element, but
    //                                           without reading/writing the actual element text content, since it will be overwritten
    //                                           with the rendered template output.
    // You can implement your own template source if you want to fetch/store templates somewhere other than in DOM elements.
    // Template sources need to have the following functions:
    //   text() 			- returns the template text from your storage location
    //   text(value)		- writes the supplied template text to your storage location
    //   data(key)			- reads values stored using data(key, value) - see below
    //   data(key, value)	- associates "value" with this template and the key "key". Is used to store information like "isRewritten".
    //
    // Optionally, template sources can also have the following functions:
    //   nodes()            - returns a DOM element containing the nodes of this template, where available
    //   nodes(value)       - writes the given DOM element to your storage location
    // If a DOM element is available for a given template source, template engines are encouraged to use it in preference over text()
    // for improved speed. However, all templateSources must supply text() even if they don't supply nodes().
    //
    // Once you've implemented a templateSource, make your template engine use it by subclassing whatever template engine you were
    // using and overriding "makeTemplateSource" to return an instance of your custom template source.

    ko.templateSources = {};

    // ---- ko.templateSources.domElement -----

    ko.templateSources.domElement = function(element) {
        this.domElement = element;
    }

    ko.templateSources.domElement.prototype['text'] = function(/* valueToWrite */) {
        var tagNameLower = ko.utils.tagNameLower(this.domElement),
            elemContentsProperty = tagNameLower === "script" ? "text"
                                 : tagNameLower === "textarea" ? "value"
                                 : "innerHTML";

        if (arguments.length == 0) {
            return this.domElement[elemContentsProperty];
        } else {
            var valueToWrite = arguments[0];
            if (elemContentsProperty === "innerHTML")
                ko.utils.setHtml(this.domElement, valueToWrite);
            else
                this.domElement[elemContentsProperty] = valueToWrite;
        }
    };

    ko.templateSources.domElement.prototype['data'] = function(key /*, valueToWrite */) {
        if (arguments.length === 1) {
            return ko.utils.domData.get(this.domElement, "templateSourceData_" + key);
        } else {
            ko.utils.domData.set(this.domElement, "templateSourceData_" + key, arguments[1]);
        }
    };

    // ---- ko.templateSources.anonymousTemplate -----
    // Anonymous templates are normally saved/retrieved as DOM nodes through "nodes".
    // For compatibility, you can also read "text"; it will be serialized from the nodes on demand.
    // Writing to "text" is still supported, but then the template data will not be available as DOM nodes.

    var anonymousTemplatesDomDataKey = "__ko_anon_template__";
    ko.templateSources.anonymousTemplate = function(element) {
        this.domElement = element;
    }
    ko.templateSources.anonymousTemplate.prototype = new ko.templateSources.domElement();
    ko.templateSources.anonymousTemplate.prototype.constructor = ko.templateSources.anonymousTemplate;
    ko.templateSources.anonymousTemplate.prototype['text'] = function(/* valueToWrite */) {
        if (arguments.length == 0) {
            var templateData = ko.utils.domData.get(this.domElement, anonymousTemplatesDomDataKey) || {};
            if (templateData.textData === undefined && templateData.containerData)
                templateData.textData = templateData.containerData.innerHTML;
            return templateData.textData;
        } else {
            var valueToWrite = arguments[0];
            ko.utils.domData.set(this.domElement, anonymousTemplatesDomDataKey, {textData: valueToWrite});
        }
    };
    ko.templateSources.domElement.prototype['nodes'] = function(/* valueToWrite */) {
        if (arguments.length == 0) {
            var templateData = ko.utils.domData.get(this.domElement, anonymousTemplatesDomDataKey) || {};
            return templateData.containerData;
        } else {
            var valueToWrite = arguments[0];
            ko.utils.domData.set(this.domElement, anonymousTemplatesDomDataKey, {containerData: valueToWrite});
        }
    };

    ko.exportSymbol('templateSources', ko.templateSources);
    ko.exportSymbol('templateSources.domElement', ko.templateSources.domElement);
    ko.exportSymbol('templateSources.anonymousTemplate', ko.templateSources.anonymousTemplate);
})();
(function () {
    var _templateEngine;
    ko.setTemplateEngine = function (templateEngine) {
        if ((templateEngine != undefined) && !(templateEngine instanceof ko.templateEngine))
            throw new Error("templateEngine must inherit from ko.templateEngine");
        _templateEngine = templateEngine;
    }

    function invokeForEachNodeOrCommentInContinuousRange(firstNode, lastNode, action) {
        var node, nextInQueue = firstNode, firstOutOfRangeNode = ko.virtualElements.nextSibling(lastNode);
        while (nextInQueue && ((node = nextInQueue) !== firstOutOfRangeNode)) {
            nextInQueue = ko.virtualElements.nextSibling(node);
            if (node.nodeType === 1 || node.nodeType === 8)
                action(node);
        }
    }

    function activateBindingsOnContinuousNodeArray(continuousNodeArray, bindingContext) {
        // To be used on any nodes that have been rendered by a template and have been inserted into some parent element
        // Walks through continuousNodeArray (which *must* be continuous, i.e., an uninterrupted sequence of sibling nodes, because
        // the algorithm for walking them relies on this), and for each top-level item in the virtual-element sense,
        // (1) Does a regular "applyBindings" to associate bindingContext with this node and to activate any non-memoized bindings
        // (2) Unmemoizes any memos in the DOM subtree (e.g., to activate bindings that had been memoized during template rewriting)

        if (continuousNodeArray.length) {
            var firstNode = continuousNodeArray[0], lastNode = continuousNodeArray[continuousNodeArray.length - 1];

            // Need to applyBindings *before* unmemoziation, because unmemoization might introduce extra nodes (that we don't want to re-bind)
            // whereas a regular applyBindings won't introduce new memoized nodes
            invokeForEachNodeOrCommentInContinuousRange(firstNode, lastNode, function(node) {
                ko.applyBindings(bindingContext, node);
            });
            invokeForEachNodeOrCommentInContinuousRange(firstNode, lastNode, function(node) {
                ko.memoization.unmemoizeDomNodeAndDescendants(node, [bindingContext]);
            });
        }
    }

    function getFirstNodeFromPossibleArray(nodeOrNodeArray) {
        return nodeOrNodeArray.nodeType ? nodeOrNodeArray
                                        : nodeOrNodeArray.length > 0 ? nodeOrNodeArray[0]
                                        : null;
    }

    function executeTemplate(targetNodeOrNodeArray, renderMode, template, bindingContext, options) {
        options = options || {};
        var firstTargetNode = targetNodeOrNodeArray && getFirstNodeFromPossibleArray(targetNodeOrNodeArray);
        var templateDocument = firstTargetNode && firstTargetNode.ownerDocument;
        var templateEngineToUse = (options['templateEngine'] || _templateEngine);
        ko.templateRewriting.ensureTemplateIsRewritten(template, templateEngineToUse, templateDocument);
        var renderedNodesArray = templateEngineToUse['renderTemplate'](template, bindingContext, options, templateDocument);

        // Loosely check result is an array of DOM nodes
        if ((typeof renderedNodesArray.length != "number") || (renderedNodesArray.length > 0 && typeof renderedNodesArray[0].nodeType != "number"))
            throw new Error("Template engine must return an array of DOM nodes");

        var haveAddedNodesToParent = false;
        switch (renderMode) {
            case "replaceChildren":
                ko.virtualElements.setDomNodeChildren(targetNodeOrNodeArray, renderedNodesArray);
                haveAddedNodesToParent = true;
                break;
            case "replaceNode":
                ko.utils.replaceDomNodes(targetNodeOrNodeArray, renderedNodesArray);
                haveAddedNodesToParent = true;
                break;
            case "ignoreTargetNode": break;
            default:
                throw new Error("Unknown renderMode: " + renderMode);
        }

        if (haveAddedNodesToParent) {
            activateBindingsOnContinuousNodeArray(renderedNodesArray, bindingContext);
            if (options['afterRender'])
                ko.dependencyDetection.ignore(options['afterRender'], null, [renderedNodesArray, bindingContext['$data']]);
        }

        return renderedNodesArray;
    }

    ko.renderTemplate = function (template, dataOrBindingContext, options, targetNodeOrNodeArray, renderMode) {
        options = options || {};
        if ((options['templateEngine'] || _templateEngine) == undefined)
            throw new Error("Set a template engine before calling renderTemplate");
        renderMode = renderMode || "replaceChildren";

        if (targetNodeOrNodeArray) {
            var firstTargetNode = getFirstNodeFromPossibleArray(targetNodeOrNodeArray);

            var whenToDispose = function () { return (!firstTargetNode) || !ko.utils.domNodeIsAttachedToDocument(firstTargetNode); }; // Passive disposal (on next evaluation)
            var activelyDisposeWhenNodeIsRemoved = (firstTargetNode && renderMode == "replaceNode") ? firstTargetNode.parentNode : firstTargetNode;

            return ko.dependentObservable( // So the DOM is automatically updated when any dependency changes
                function () {
                    // Ensure we've got a proper binding context to work with
                    var bindingContext = (dataOrBindingContext && (dataOrBindingContext instanceof ko.bindingContext))
                        ? dataOrBindingContext
                        : new ko.bindingContext(ko.utils.unwrapObservable(dataOrBindingContext));

                    // Support selecting template as a function of the data being rendered
                    var templateName = typeof(template) == 'function' ? template(bindingContext['$data'], bindingContext) : template;

                    var renderedNodesArray = executeTemplate(targetNodeOrNodeArray, renderMode, templateName, bindingContext, options);
                    if (renderMode == "replaceNode") {
                        targetNodeOrNodeArray = renderedNodesArray;
                        firstTargetNode = getFirstNodeFromPossibleArray(targetNodeOrNodeArray);
                    }
                },
                null,
                { disposeWhen: whenToDispose, disposeWhenNodeIsRemoved: activelyDisposeWhenNodeIsRemoved }
            );
        } else {
            // We don't yet have a DOM node to evaluate, so use a memo and render the template later when there is a DOM node
            return ko.memoization.memoize(function (domNode) {
                ko.renderTemplate(template, dataOrBindingContext, options, domNode, "replaceNode");
            });
        }
    };

    ko.renderTemplateForEach = function (template, arrayOrObservableArray, options, targetNode, parentBindingContext) {
        // Since setDomNodeChildrenFromArrayMapping always calls executeTemplateForArrayItem and then
        // activateBindingsCallback for added items, we can store the binding context in the former to use in the latter.
        var arrayItemContext;

        // This will be called by setDomNodeChildrenFromArrayMapping to get the nodes to add to targetNode
        var executeTemplateForArrayItem = function (arrayValue, index) {
            // Support selecting template as a function of the data being rendered
            arrayItemContext = parentBindingContext['createChildContext'](ko.utils.unwrapObservable(arrayValue), options['as']);
            arrayItemContext['$index'] = index;
            var templateName = typeof(template) == 'function' ? template(arrayValue, arrayItemContext) : template;
            return executeTemplate(null, "ignoreTargetNode", templateName, arrayItemContext, options);
        }

        // This will be called whenever setDomNodeChildrenFromArrayMapping has added nodes to targetNode
        var activateBindingsCallback = function(arrayValue, addedNodesArray, index) {
            activateBindingsOnContinuousNodeArray(addedNodesArray, arrayItemContext);
            if (options['afterRender'])
                options['afterRender'](addedNodesArray, arrayValue);
        };

        return ko.dependentObservable(function () {
            var unwrappedArray = ko.utils.unwrapObservable(arrayOrObservableArray) || [];
            if (typeof unwrappedArray.length == "undefined") // Coerce single value into array
                unwrappedArray = [unwrappedArray];

            // Filter out any entries marked as destroyed
            var filteredArray = ko.utils.arrayFilter(unwrappedArray, function(item) {
                return options['includeDestroyed'] || item === undefined || item === null || !ko.utils.unwrapObservable(item['_destroy']);
            });

            // Call setDomNodeChildrenFromArrayMapping, ignoring any observables unwrapped within (most likely from a callback function).
            // If the array items are observables, though, they will be unwrapped in executeTemplateForArrayItem and managed within setDomNodeChildrenFromArrayMapping.
            ko.dependencyDetection.ignore(ko.utils.setDomNodeChildrenFromArrayMapping, null, [targetNode, filteredArray, executeTemplateForArrayItem, options, activateBindingsCallback]);

        }, null, { disposeWhenNodeIsRemoved: targetNode });
    };

    var templateComputedDomDataKey = '__ko__templateComputedDomDataKey__';
    function disposeOldComputedAndStoreNewOne(element, newComputed) {
        var oldComputed = ko.utils.domData.get(element, templateComputedDomDataKey);
        if (oldComputed && (typeof(oldComputed.dispose) == 'function'))
            oldComputed.dispose();
        ko.utils.domData.set(element, templateComputedDomDataKey, (newComputed && newComputed.isActive()) ? newComputed : undefined);
    }

    ko.bindingHandlers['template'] = {
        'init': function(element, valueAccessor) {
            // Support anonymous templates
            var bindingValue = ko.utils.unwrapObservable(valueAccessor());
            if ((typeof bindingValue != "string") && (!bindingValue['name']) && (element.nodeType == 1 || element.nodeType == 8)) {
                // It's an anonymous template - store the element contents, then clear the element
                var templateNodes = element.nodeType == 1 ? element.childNodes : ko.virtualElements.childNodes(element),
                    container = ko.utils.moveCleanedNodesToContainerElement(templateNodes); // This also removes the nodes from their current parent
                new ko.templateSources.anonymousTemplate(element)['nodes'](container);
            }
            return { 'controlsDescendantBindings': true };
        },
        'update': function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var templateName = ko.utils.unwrapObservable(valueAccessor()),
                options = {},
                shouldDisplay = true,
                dataValue,
                templateComputed = null;

            if (typeof templateName != "string") {
                options = templateName;
                templateName = ko.utils.unwrapObservable(options['name']);

                // Support "if"/"ifnot" conditions
                if ('if' in options)
                    shouldDisplay = ko.utils.unwrapObservable(options['if']);
                if (shouldDisplay && 'ifnot' in options)
                    shouldDisplay = !ko.utils.unwrapObservable(options['ifnot']);

                dataValue = ko.utils.unwrapObservable(options['data']);
            }

            if ('foreach' in options) {
                // Render once for each data point (treating data set as empty if shouldDisplay==false)
                var dataArray = (shouldDisplay && options['foreach']) || [];
                templateComputed = ko.renderTemplateForEach(templateName || element, dataArray, options, element, bindingContext);
            } else if (!shouldDisplay) {
                ko.virtualElements.emptyNode(element);
            } else {
                // Render once for this single data point (or use the viewModel if no data was provided)
                var innerBindingContext = ('data' in options) ?
                    bindingContext['createChildContext'](dataValue, options['as']) :  // Given an explitit 'data' value, we create a child binding context for it
                    bindingContext;                                                        // Given no explicit 'data' value, we retain the same binding context
                templateComputed = ko.renderTemplate(templateName || element, innerBindingContext, options, element);
            }

            // It only makes sense to have a single template computed per element (otherwise which one should have its output displayed?)
            disposeOldComputedAndStoreNewOne(element, templateComputed);
        }
    };

    // Anonymous templates can't be rewritten. Give a nice error message if you try to do it.
    ko.expressionRewriting.bindingRewriteValidators['template'] = function(bindingValue) {
        var parsedBindingValue = ko.expressionRewriting.parseObjectLiteral(bindingValue);

        if ((parsedBindingValue.length == 1) && parsedBindingValue[0]['unknown'])
            return null; // It looks like a string literal, not an object literal, so treat it as a named template (which is allowed for rewriting)

        if (ko.expressionRewriting.keyValueArrayContainsKey(parsedBindingValue, "name"))
            return null; // Named templates can be rewritten, so return "no error"
        return "This template engine does not support anonymous templates nested within its templates";
    };

    ko.virtualElements.allowedBindings['template'] = true;
})();

ko.exportSymbol('setTemplateEngine', ko.setTemplateEngine);
ko.exportSymbol('renderTemplate', ko.renderTemplate);

ko.utils.compareArrays = (function () {
    var statusNotInOld = 'added', statusNotInNew = 'deleted';

    // Simple calculation based on Levenshtein distance.
    function compareArrays(oldArray, newArray, dontLimitMoves) {
        oldArray = oldArray || [];
        newArray = newArray || [];

        if (oldArray.length <= newArray.length)
            return compareSmallArrayToBigArray(oldArray, newArray, statusNotInOld, statusNotInNew, dontLimitMoves);
        else
            return compareSmallArrayToBigArray(newArray, oldArray, statusNotInNew, statusNotInOld, dontLimitMoves);
    }

    function compareSmallArrayToBigArray(smlArray, bigArray, statusNotInSml, statusNotInBig, dontLimitMoves) {
        var myMin = Math.min,
            myMax = Math.max,
            editDistanceMatrix = [],
            smlIndex, smlIndexMax = smlArray.length,
            bigIndex, bigIndexMax = bigArray.length,
            compareRange = (bigIndexMax - smlIndexMax) || 1,
            maxDistance = smlIndexMax + bigIndexMax + 1,
            thisRow, lastRow,
            bigIndexMaxForRow, bigIndexMinForRow;

        for (smlIndex = 0; smlIndex <= smlIndexMax; smlIndex++) {
            lastRow = thisRow;
            editDistanceMatrix.push(thisRow = []);
            bigIndexMaxForRow = myMin(bigIndexMax, smlIndex + compareRange);
            bigIndexMinForRow = myMax(0, smlIndex - 1);
            for (bigIndex = bigIndexMinForRow; bigIndex <= bigIndexMaxForRow; bigIndex++) {
                if (!bigIndex)
                    thisRow[bigIndex] = smlIndex + 1;
                else if (!smlIndex)  // Top row - transform empty array into new array via additions
                    thisRow[bigIndex] = bigIndex + 1;
                else if (smlArray[smlIndex - 1] === bigArray[bigIndex - 1])
                    thisRow[bigIndex] = lastRow[bigIndex - 1];                  // copy value (no edit)
                else {
                    var northDistance = lastRow[bigIndex] || maxDistance;       // not in big (deletion)
                    var westDistance = thisRow[bigIndex - 1] || maxDistance;    // not in small (addition)
                    thisRow[bigIndex] = myMin(northDistance, westDistance) + 1;
                }
            }
        }

        var editScript = [], meMinusOne, notInSml = [], notInBig = [];
        for (smlIndex = smlIndexMax, bigIndex = bigIndexMax; smlIndex || bigIndex;) {
            meMinusOne = editDistanceMatrix[smlIndex][bigIndex] - 1;
            if (bigIndex && meMinusOne === editDistanceMatrix[smlIndex][bigIndex-1]) {
                notInSml.push(editScript[editScript.length] = {     // added
                    'status': statusNotInSml,
                    'value': bigArray[--bigIndex],
                    'index': bigIndex });
            } else if (smlIndex && meMinusOne === editDistanceMatrix[smlIndex - 1][bigIndex]) {
                notInBig.push(editScript[editScript.length] = {     // deleted
                    'status': statusNotInBig,
                    'value': smlArray[--smlIndex],
                    'index': smlIndex });
            } else {
                editScript.push({
                    'status': "retained",
                    'value': bigArray[--bigIndex] });
                --smlIndex;
            }
        }

        if (notInSml.length && notInBig.length) {
            // Set a limit on the number of consecutive non-matching comparisons; having it a multiple of
            // smlIndexMax keeps the time complexity of this algorithm linear.
            var limitFailedCompares = smlIndexMax * 10, failedCompares,
                a, d, notInSmlItem, notInBigItem;
            // Go through the items that have been added and deleted and try to find matches between them.
            for (failedCompares = a = 0; (dontLimitMoves || failedCompares < limitFailedCompares) && (notInSmlItem = notInSml[a]); a++) {
                for (d = 0; notInBigItem = notInBig[d]; d++) {
                    if (notInSmlItem['value'] === notInBigItem['value']) {
                        notInSmlItem['moved'] = notInBigItem['index'];
                        notInBigItem['moved'] = notInSmlItem['index'];
                        notInBig.splice(d,1);       // This item is marked as moved; so remove it from notInBig list
                        failedCompares = d = 0;     // Reset failed compares count because we're checking for consecutive failures
                        break;
                    }
                }
                failedCompares += d;
            }
        }
        return editScript.reverse();
    }

    return compareArrays;
})();

ko.exportSymbol('utils.compareArrays', ko.utils.compareArrays);

(function () {
    // Objective:
    // * Given an input array, a container DOM node, and a function from array elements to arrays of DOM nodes,
    //   map the array elements to arrays of DOM nodes, concatenate together all these arrays, and use them to populate the container DOM node
    // * Next time we're given the same combination of things (with the array possibly having mutated), update the container DOM node
    //   so that its children is again the concatenation of the mappings of the array elements, but don't re-map any array elements that we
    //   previously mapped - retain those nodes, and just insert/delete other ones

    // "callbackAfterAddingNodes" will be invoked after any "mapping"-generated nodes are inserted into the container node
    // You can use this, for example, to activate bindings on those nodes.

    function fixUpNodesToBeMovedOrRemoved(contiguousNodeArray) {
        // Before moving, deleting, or replacing a set of nodes that were previously outputted by the "map" function, we have to reconcile
        // them against what is in the DOM right now. It may be that some of the nodes have already been removed from the document,
        // or that new nodes might have been inserted in the middle, for example by a binding. Also, there may previously have been
        // leading comment nodes (created by rewritten string-based templates) that have since been removed during binding.
        // So, this function translates the old "map" output array into its best guess of what set of current DOM nodes should be removed.
        //
        // Rules:
        //   [A] Any leading nodes that aren't in the document any more should be ignored
        //       These most likely correspond to memoization nodes that were already removed during binding
        //       See https://github.com/SteveSanderson/knockout/pull/440
        //   [B] We want to output a contiguous series of nodes that are still in the document. So, ignore any nodes that
        //       have already been removed, and include any nodes that have been inserted among the previous collection

        // Rule [A]
        while (contiguousNodeArray.length && !ko.utils.domNodeIsAttachedToDocument(contiguousNodeArray[0]))
            contiguousNodeArray.splice(0, 1);

        // Rule [B]
        if (contiguousNodeArray.length > 1) {
            // Build up the actual new contiguous node set
            var current = contiguousNodeArray[0], last = contiguousNodeArray[contiguousNodeArray.length - 1], newContiguousSet = [current];
            while (current !== last) {
                current = current.nextSibling;
                if (!current) // Won't happen, except if the developer has manually removed some DOM elements (then we're in an undefined scenario)
                    return;
                newContiguousSet.push(current);
            }

            // ... then mutate the input array to match this.
            // (The following line replaces the contents of contiguousNodeArray with newContiguousSet)
            Array.prototype.splice.apply(contiguousNodeArray, [0, contiguousNodeArray.length].concat(newContiguousSet));
        }
        return contiguousNodeArray;
    }

    function mapNodeAndRefreshWhenChanged(containerNode, mapping, valueToMap, callbackAfterAddingNodes, index) {
        // Map this array value inside a dependentObservable so we re-map when any dependency changes
        var mappedNodes = [];
        var dependentObservable = ko.dependentObservable(function() {
            var newMappedNodes = mapping(valueToMap, index, fixUpNodesToBeMovedOrRemoved(mappedNodes)) || [];

            // On subsequent evaluations, just replace the previously-inserted DOM nodes
            if (mappedNodes.length > 0) {
                ko.utils.replaceDomNodes(mappedNodes, newMappedNodes);
                if (callbackAfterAddingNodes)
                    ko.dependencyDetection.ignore(callbackAfterAddingNodes, null, [valueToMap, newMappedNodes, index]);
            }

            // Replace the contents of the mappedNodes array, thereby updating the record
            // of which nodes would be deleted if valueToMap was itself later removed
            mappedNodes.splice(0, mappedNodes.length);
            ko.utils.arrayPushAll(mappedNodes, newMappedNodes);
        }, null, { disposeWhenNodeIsRemoved: containerNode, disposeWhen: function() { return !ko.utils.anyDomNodeIsAttachedToDocument(mappedNodes); } });
        return { mappedNodes : mappedNodes, dependentObservable : (dependentObservable.isActive() ? dependentObservable : undefined) };
    }

    var lastMappingResultDomDataKey = "setDomNodeChildrenFromArrayMapping_lastMappingResult";

    ko.utils.setDomNodeChildrenFromArrayMapping = function (domNode, array, mapping, options, callbackAfterAddingNodes) {
        // Compare the provided array against the previous one
        array = array || [];
        options = options || {};
        var isFirstExecution = ko.utils.domData.get(domNode, lastMappingResultDomDataKey) === undefined;
        var lastMappingResult = ko.utils.domData.get(domNode, lastMappingResultDomDataKey) || [];
        var lastArray = ko.utils.arrayMap(lastMappingResult, function (x) { return x.arrayEntry; });
        var editScript = ko.utils.compareArrays(lastArray, array, options['dontLimitMoves']);

        // Build the new mapping result
        var newMappingResult = [];
        var lastMappingResultIndex = 0;
        var newMappingResultIndex = 0;

        var nodesToDelete = [];
        var itemsToProcess = [];
        var itemsForBeforeRemoveCallbacks = [];
        var itemsForMoveCallbacks = [];
        var itemsForAfterAddCallbacks = [];
        var mapData;

        function itemMovedOrRetained(editScriptIndex, oldPosition) {
            mapData = lastMappingResult[oldPosition];
            if (newMappingResultIndex !== oldPosition)
                itemsForMoveCallbacks[editScriptIndex] = mapData;
            // Since updating the index might change the nodes, do so before calling fixUpNodesToBeMovedOrRemoved
            mapData.indexObservable(newMappingResultIndex++);
            fixUpNodesToBeMovedOrRemoved(mapData.mappedNodes);
            newMappingResult.push(mapData);
            itemsToProcess.push(mapData);
        }

        function callCallback(callback, items) {
            if (callback) {
                for (var i = 0, n = items.length; i < n; i++) {
                    if (items[i]) {
                        ko.utils.arrayForEach(items[i].mappedNodes, function(node) {
                            callback(node, i, items[i].arrayEntry);
                        });
                    }
                }
            }
        }

        for (var i = 0, editScriptItem, movedIndex; editScriptItem = editScript[i]; i++) {
            movedIndex = editScriptItem['moved'];
            switch (editScriptItem['status']) {
                case "deleted":
                    if (movedIndex === undefined) {
                        mapData = lastMappingResult[lastMappingResultIndex];

                        // Stop tracking changes to the mapping for these nodes
                        if (mapData.dependentObservable)
                            mapData.dependentObservable.dispose();

                        // Queue these nodes for later removal
                        nodesToDelete.push.apply(nodesToDelete, fixUpNodesToBeMovedOrRemoved(mapData.mappedNodes));
                        if (options['beforeRemove']) {
                            itemsForBeforeRemoveCallbacks[i] = mapData;
                            itemsToProcess.push(mapData);
                        }
                    }
                    lastMappingResultIndex++;
                    break;

                case "retained":
                    itemMovedOrRetained(i, lastMappingResultIndex++);
                    break;

                case "added":
                    if (movedIndex !== undefined) {
                        itemMovedOrRetained(i, movedIndex);
                    } else {
                        mapData = { arrayEntry: editScriptItem['value'], indexObservable: ko.observable(newMappingResultIndex++) };
                        newMappingResult.push(mapData);
                        itemsToProcess.push(mapData);
                        if (!isFirstExecution)
                            itemsForAfterAddCallbacks[i] = mapData;
                    }
                    break;
            }
        }

        // Call beforeMove first before any changes have been made to the DOM
        callCallback(options['beforeMove'], itemsForMoveCallbacks);

        // Next remove nodes for deleted items (or just clean if there's a beforeRemove callback)
        ko.utils.arrayForEach(nodesToDelete, options['beforeRemove'] ? ko.cleanNode : ko.removeNode);

        // Next add/reorder the remaining items (will include deleted items if there's a beforeRemove callback)
        for (var i = 0, nextNode = ko.virtualElements.firstChild(domNode), lastNode, node; mapData = itemsToProcess[i]; i++) {
            // Get nodes for newly added items
            if (!mapData.mappedNodes)
                ko.utils.extend(mapData, mapNodeAndRefreshWhenChanged(domNode, mapping, mapData.arrayEntry, callbackAfterAddingNodes, mapData.indexObservable));

            // Put nodes in the right place if they aren't there already
            for (var j = 0; node = mapData.mappedNodes[j]; nextNode = node.nextSibling, lastNode = node, j++) {
                if (node !== nextNode)
                    ko.virtualElements.insertAfter(domNode, node, lastNode);
            }

            // Run the callbacks for newly added nodes (for example, to apply bindings, etc.)
            if (!mapData.initialized && callbackAfterAddingNodes) {
                callbackAfterAddingNodes(mapData.arrayEntry, mapData.mappedNodes, mapData.indexObservable);
                mapData.initialized = true;
            }
        }

        // If there's a beforeRemove callback, call it after reordering.
        // Note that we assume that the beforeRemove callback will usually be used to remove the nodes using
        // some sort of animation, which is why we first reorder the nodes that will be removed. If the
        // callback instead removes the nodes right away, it would be more efficient to skip reordering them.
        // Perhaps we'll make that change in the future if this scenario becomes more common.
        callCallback(options['beforeRemove'], itemsForBeforeRemoveCallbacks);

        // Finally call afterMove and afterAdd callbacks
        callCallback(options['afterMove'], itemsForMoveCallbacks);
        callCallback(options['afterAdd'], itemsForAfterAddCallbacks);

        // Store a copy of the array items we just considered so we can difference it next time
        ko.utils.domData.set(domNode, lastMappingResultDomDataKey, newMappingResult);
    }
})();

ko.exportSymbol('utils.setDomNodeChildrenFromArrayMapping', ko.utils.setDomNodeChildrenFromArrayMapping);
ko.nativeTemplateEngine = function () {
    this['allowTemplateRewriting'] = false;
}

ko.nativeTemplateEngine.prototype = new ko.templateEngine();
ko.nativeTemplateEngine.prototype.constructor = ko.nativeTemplateEngine;
ko.nativeTemplateEngine.prototype['renderTemplateSource'] = function (templateSource, bindingContext, options) {
    var useNodesIfAvailable = !(ko.utils.ieVersion < 9), // IE<9 cloneNode doesn't work properly
        templateNodesFunc = useNodesIfAvailable ? templateSource['nodes'] : null,
        templateNodes = templateNodesFunc ? templateSource['nodes']() : null;

    if (templateNodes) {
        return ko.utils.makeArray(templateNodes.cloneNode(true).childNodes);
    } else {
        var templateText = templateSource['text']();
        return ko.utils.parseHtmlFragment(templateText);
    }
};

ko.nativeTemplateEngine.instance = new ko.nativeTemplateEngine();
ko.setTemplateEngine(ko.nativeTemplateEngine.instance);

ko.exportSymbol('nativeTemplateEngine', ko.nativeTemplateEngine);
(function() {
    ko.jqueryTmplTemplateEngine = function () {
        // Detect which version of jquery-tmpl you're using. Unfortunately jquery-tmpl
        // doesn't expose a version number, so we have to infer it.
        // Note that as of Knockout 1.3, we only support jQuery.tmpl 1.0.0pre and later,
        // which KO internally refers to as version "2", so older versions are no longer detected.
        var jQueryTmplVersion = this.jQueryTmplVersion = (function() {
            if ((typeof(jQuery) == "undefined") || !(jQuery['tmpl']))
                return 0;
            // Since it exposes no official version number, we use our own numbering system. To be updated as jquery-tmpl evolves.
            try {
                if (jQuery['tmpl']['tag']['tmpl']['open'].toString().indexOf('__') >= 0) {
                    // Since 1.0.0pre, custom tags should append markup to an array called "__"
                    return 2; // Final version of jquery.tmpl
                }
            } catch(ex) { /* Apparently not the version we were looking for */ }

            return 1; // Any older version that we don't support
        })();

        function ensureHasReferencedJQueryTemplates() {
            if (jQueryTmplVersion < 2)
                throw new Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
        }

        function executeTemplate(compiledTemplate, data, jQueryTemplateOptions) {
            return jQuery['tmpl'](compiledTemplate, data, jQueryTemplateOptions);
        }

        this['renderTemplateSource'] = function(templateSource, bindingContext, options) {
            options = options || {};
            ensureHasReferencedJQueryTemplates();

            // Ensure we have stored a precompiled version of this template (don't want to reparse on every render)
            var precompiled = templateSource['data']('precompiled');
            if (!precompiled) {
                var templateText = templateSource['text']() || "";
                // Wrap in "with($whatever.koBindingContext) { ... }"
                templateText = "{{ko_with $item.koBindingContext}}" + templateText + "{{/ko_with}}";

                precompiled = jQuery['template'](null, templateText);
                templateSource['data']('precompiled', precompiled);
            }

            var data = [bindingContext['$data']]; // Prewrap the data in an array to stop jquery.tmpl from trying to unwrap any arrays
            var jQueryTemplateOptions = jQuery['extend']({ 'koBindingContext': bindingContext }, options['templateOptions']);

            var resultNodes = executeTemplate(precompiled, data, jQueryTemplateOptions);
            resultNodes['appendTo'](document.createElement("div")); // Using "appendTo" forces jQuery/jQuery.tmpl to perform necessary cleanup work

            jQuery['fragments'] = {}; // Clear jQuery's fragment cache to avoid a memory leak after a large number of template renders
            return resultNodes;
        };

        this['createJavaScriptEvaluatorBlock'] = function(script) {
            return "{{ko_code ((function() { return " + script + " })()) }}";
        };

        this['addTemplate'] = function(templateName, templateMarkup) {
            document.write("<script type='text/html' id='" + templateName + "'>" + templateMarkup + "<" + "/script>");
        };

        if (jQueryTmplVersion > 0) {
            jQuery['tmpl']['tag']['ko_code'] = {
                open: "__.push($1 || '');"
            };
            jQuery['tmpl']['tag']['ko_with'] = {
                open: "with($1) {",
                close: "} "
            };
        }
    };

    ko.jqueryTmplTemplateEngine.prototype = new ko.templateEngine();
    ko.jqueryTmplTemplateEngine.prototype.constructor = ko.jqueryTmplTemplateEngine;

    // Use this one by default *only if jquery.tmpl is referenced*
    var jqueryTmplTemplateEngineInstance = new ko.jqueryTmplTemplateEngine();
    if (jqueryTmplTemplateEngineInstance.jQueryTmplVersion > 0)
        ko.setTemplateEngine(jqueryTmplTemplateEngineInstance);

    ko.exportSymbol('jqueryTmplTemplateEngine', ko.jqueryTmplTemplateEngine);
})();
}));
}());
})();

;(function(a){a(["jquery"],function(a){return function(){function h(a,b,c){return p({type:f.error,iconClass:r().iconClasses.error,message:a,optionsOverride:c,title:b})}function i(a,b,c){return p({type:f.info,iconClass:r().iconClasses.info,message:a,optionsOverride:c,title:b})}function j(a){d=a}function k(a,b,c){return p({type:f.success,iconClass:r().iconClasses.success,message:a,optionsOverride:c,title:b})}function l(a,b,c){return p({type:f.warning,iconClass:r().iconClasses.warning,message:a,optionsOverride:c,title:b})}function m(b){var d=r();c||q(d);if(b&&a(":focus",b).length===0){b[d.hideMethod]({duration:d.hideDuration,easing:d.hideEasing,complete:function(){s(b)}});return}c.children().length&&c[d.hideMethod]({duration:d.hideDuration,easing:d.hideEasing,complete:function(){c.remove()}})}function n(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:undefined,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:undefined,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",target:"body",closeHtml:"<button>&times;</button>",newestOnTop:!0}}function o(a){if(!d)return;d(a)}function p(b){function m(b){if(a(":focus",h).length&&!b)return;return h[d.hideMethod]({duration:d.hideDuration,easing:d.hideEasing,complete:function(){s(h),d.onHidden&&d.onHidden(),l.state="hidden",l.endTime=new Date,o(l)}})}function n(){if(d.timeOut>0||d.extendedTimeOut>0)g=setTimeout(m,d.extendedTimeOut)}function p(){clearTimeout(g),h.stop(!0,!0)[d.showMethod]({duration:d.showDuration,easing:d.showEasing})}var d=r(),f=b.iconClass||d.iconClass;typeof b.optionsOverride!="undefined"&&(d=a.extend(d,b.optionsOverride),f=b.optionsOverride.iconClass||f),e++,c=q(d);var g=null,h=a("<div/>"),i=a("<div/>"),j=a("<div/>"),k=a(d.closeHtml),l={toastId:e,state:"visible",startTime:new Date,options:d,map:b};return b.iconClass&&h.addClass(d.toastClass).addClass(f),b.title&&(i.append(b.title).addClass(d.titleClass),h.append(i)),b.message&&(j.append(b.message).addClass(d.messageClass),h.append(j)),d.closeButton&&(k.addClass("toast-close-button"),h.prepend(k)),h.hide(),d.newestOnTop?c.prepend(h):c.append(h),h[d.showMethod]({duration:d.showDuration,easing:d.showEasing,complete:d.onShown}),d.timeOut>0&&(g=setTimeout(m,d.timeOut)),h.hover(p,n),!d.onclick&&d.tapToDismiss&&h.click(m),d.closeButton&&k&&k.click(function(a){a.stopPropagation(),m(!0)}),d.onclick&&h.click(function(){d.onclick(),m()}),o(l),d.debug&&console&&console.log(l),h}function q(b){return b||(b=r()),c=a("#"+b.containerId),c.length?c:(c=a("<div/>").attr("id",b.containerId).addClass(b.positionClass),c.appendTo(a(b.target)),c)}function r(){return a.extend({},n(),g.options)}function s(a){c||(c=q());if(a.is(":visible"))return;a.remove(),a=null,c.children().length===0&&c.remove()}var b="2.0.1",c,d,e=0,f={error:"error",info:"info",success:"success",warning:"warning"},g={clear:m,error:h,getContainer:q,info:i,options:{},subscribe:j,success:k,version:b,warning:l};return g}()})})(typeof define=="function"&&define.amd?define:function(a,b){typeof module!="undefined"&&module.exports?module.exports=b(require(a[0])):window.toastr=b(window.jQuery)})
;!function(e){"object"==typeof exports?module.exports=e():"function"==typeof define?define(e):breeze=e()}(function(){function e(e,t){for(var r in e)U(e,r)&&t(r,e[r])}function t(e,t){for(var r in e)if(U(e,r)){var n=e[r];if(t(r,n))return{key:r,value:n}}return null}function r(e,t){var r=[];for(var n in e)if(U(e,n)){var a=t?t(n,e[n]):e[n];void 0!==a&&r.push(a)}return r}function n(e,t){return function(r){return r[e]===t}}function a(e){return function(t){return t[e]}}function i(e){var t=[];for(var r in e)U(e,r)&&t.push(e[r]);return t}function o(e,t){if(!t)return e;for(var r in t)U(t,r)&&(e[r]=t[r]);return e}function s(e,t){for(var r in t)void 0===e[r]&&(e[r]=t[r]);return e}function u(e,t){return t.defaultInstance=s(new t(e),t.defaultInstance),e}function p(e,t){var r={};for(var n in t)if(n in e){var a=e[n],i=t[n];a!=i&&(Array.isArray(a)&&0===a.length||("function"==typeof i?a=i(a):"object"==typeof a&&a&&a.parentEnum&&(a=a.name),void 0!==a&&(r[n]=a)))}return r}function c(e,t){var r={},n=e.length;return t.forEach(function(t){for(var a=0;n>a;a++){var i=e[a];if(i){var o=i[t];if(void 0!==o){r[t]=o;break}}}}),r}function l(e){return e?Array.isArray(e)?e:[e]:[]}function y(e,t){for(var r=0,n=e.length;n>r;r++)if(t(e[r]))return e[r];return null}function f(e,t){for(var r=0,n=e.length;n>r;r++)if(t(e[r]))return r;return-1}function h(e,t,r){for(var n=O(t)?t:void 0,a=e.length-1,i=!1,o=a;o>=0;o--)if((n?n(e[o]):e[o]===t)&&(e.splice(o,1),i=!0,!r))return i;return i}function d(e,t,r){for(var n=[],a=Math.min(e.length,t.length),i=0;a>i;++i)n.push(r(e[i],t[i]));return n}function m(e,t,r){if(!e||!t)return!1;if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(Array.isArray(e[n])){if(!m(e[n],t[n]))return!1}else if(r){if(!r(e[n],t[n]))return!1}else if(e[n]!==t[n])return!1;return!0}function v(e,t){var r=e[t];return r||(r=[],e[t]=r),r}function g(e,t){for(var r=e.split(";"),n=0,a=r.length;a>n;n++){var i=E(r[n]);if(i)return i}if(t)throw new Error("Unable to initialize "+e+".  "+t||"")}function E(e){var t;try{if(this.window){var r=this.window;if(t=r[e])return t;if(r.require&&(t=r.require(e)),t)return t}require&&(t=require(e))}catch(n){}return t}function w(e,t,r,n){var a=e[t];if(r===a)return n();e[t]=r;try{return n()}finally{void 0===a?delete e[t]:e[t]=a}}function S(e,t,r){var n;try{return n=e(),r()}catch(a){throw"object"==typeof n&&(n.error=a),a}finally{t(n)}}function P(e){return function(){for(var t=B(arguments),r="",n=t.length,a=null;n--;)a=t[n],r+=a===Object(a)?JSON.stringify(a):a,e.memoize||(e.memoize={});return r in e.memoize?e.memoize[r]:e.memoize[r]=e.apply(this,t)}}function T(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=0|16*Math.random(),r="x"==e?t:8|3&t;return r.toString(16)})}function _(e){if("string"!=typeof e)throw new Error("Invalid ISO8601 duration '"+e+"'");var t=/^P((\d+Y)?(\d+M)?(\d+D)?)?(T(\d+H)?(\d+M)?(\d+S)?)?$/.exec(e);if(!t)throw new Error("Invalid ISO8601 duration '"+e+"'");for(var r=[2,3,4,6,7,8],n=[31104e3,2592e3,86400,3600,60,1],a=0,i=0;6>i;i++){var o=t[r[i]];o=o?+o.replace(/[A-Za-z]+/g,""):0,a+=o*n[i]}return a}function b(e){return null===e?"null":void 0===e?"undefined":Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function N(e){return"date"===b(e)&&!isNaN(e.getTime())}function O(e){return"function"===b(e)}function C(e){return"string"==typeof e&&/[a-fA-F\d]{8}-(?:[a-fA-F\d]{4}-){3}[a-fA-F\d]{12}/.test(e)}function A(e){return"string"==typeof e&&/^(-|)?P[T]?[\d\.,\-]+[YMDTHS]/.test(e)}function x(e){if(null===e||void 0===e)return!0;for(var t in e)if(U(e,t))return!1;return!0}function F(e){return!isNaN(parseFloat(e))&&isFinite(e)}function M(e,t){return e&&t?0===e.indexOf(t,0):!1}function D(e,t){return e&&t?-1!==e.indexOf(t,e.length-t.length):!1}function k(e){var t=arguments,r=RegExp("%([1-"+(arguments.length-1)+"])","g");return e.replace(r,function(e,r){return t[r]})}function I(e){var t=Function.call;return function(){return t.apply(e,arguments)}}function j(e,t,r){void 0===t&&(t=null);var n=r(),a=e.dataType;if(a&&a.parse&&(t=Array.isArray(t)&&!e.isScalar?t.map(function(e){return a.parse(e,typeof e)}):a.parse(t,typeof t)),!(t===n||a&&a.isDate&&t&&n&&t.valueOf()===n.valueOf())){var i,o,s,u=this,p=e.name,c=this.entityAspect;c?i=c:(i=this.complexAspect,c=i.getEntityAspect());var l=i.getPropertyPath(p),y=c._inProcess;if(y){if(y.indexOf(e)>=0)return;y.push(e)}else y=[e],c._inProcess=y;var f=c.entity;try{var h=c.entityManager;if(c.entityState.isUnchangedOrModified()&&void 0===i.originalValues[p]&&e.isDataProperty&&!e.isComplexProperty&&(i.originalValues[p]=void 0!==n?n:e.defaultValue),e.isComplexProperty){if(!e.isScalar)throw new Error(k("You cannot set the non-scalar complex property: '%1' on the type: '%2'.Instead get the property and use array functions like 'push' or 'splice' to change its contents.",e.name,e.parentType.name));if(!t)throw new Error(k("You cannot set the '%1' property to null because it's datatype is the ComplexType: '%2'",e.name,e.dataType.name));if(!n){var d=a.getCtor();n=new d,r(n)}a.dataProperties.forEach(function(e){var r=e.name,a=t.getProperty(r);n.setProperty(r,a)})}else if(e.isDataProperty){if(!e.isScalar)throw new Error("Nonscalar data properties are readonly - items may be added or removed but the collection may not be changed.");if(e.isPartOfKey&&!this.complexAspect&&h&&!h.isLoading){var m=this.entityType.keyProperties,v=m.map(function(r){return r===e?t:this.getProperty(r.name)},this),g=new st(this.entityType,v);if(h.findEntityByKey(g))throw new Error("An entity with this key is already in the cache: "+g.toString());var E=this.entityAspect.getKey(),w=h._findEntityGroup(this.entityType);w._replaceKey(E,g)}var S=e.relatedNavigationProperty;if(S&&h)null!=t?(o=new st(S.entityType,[t]),s=h.findEntityByKey(o),s?this.setProperty(S.name,s):h._unattachedChildrenMap.addChild(o,S,this)):this.setProperty(S.name,null);else if(e.inverseNavigationProperty&&h&&!h._inKeyFixup){var P=e.inverseNavigationProperty;if(null!=n&&(o=new st(P.parentType,[n]),s=h.findEntityByKey(o)))if(P.isScalar)s.setProperty(P.name,null);else{var T=s.getProperty(P.name);T.splice(T.indexOf(this),1)}null!=t&&(o=new st(P.parentType,[t]),s=h.findEntityByKey(o),s?P.isScalar?s.setProperty(P.name,this):s.getProperty(P.name).push(this):h._unattachedChildrenMap.addChild(o,P,this))}if(r(t),h&&!h.isLoading&&(c.entityState.isUnchanged()&&!e.isUnmapped&&c.setModified(),h.validationOptions.validateOnPropertyChange&&c._validateProperty(t,{entity:f,property:e,propertyName:l,oldValue:n})),e.isPartOfKey&&!this.complexAspect){var _=this.entityType.keyProperties.indexOf(e);this.entityType.navigationProperties.forEach(function(e){var r=e.inverse,n=r?r.foreignKeyNames:e.invForeignKeyNames;if(0!==n.length){var a=u.getProperty(e.name),i=n[_];if(e.isScalar){if(!a)return;a.setProperty(i,t)}else a.forEach(function(e){e.setProperty(i,t)})}}),c.getKey(!0)}}else{if(!e.isScalar)throw new Error("Nonscalar navigation properties are readonly - entities can be added or removed but the collection may not be changed.");var b=e.inverse;if(null!=t){var N=t.entityAspect;if(h){if(N.entityState.isDetached())h.isLoading||h.attachEntity(t,ut.Added);else if(N.entityManager!==h)throw new Error("An Entity cannot be attached to an entity in another EntityManager. One of the two entities must be detached first.")}else N&&N.entityManager&&(h=N.entityManager,h.isLoading||h.attachEntity(c.entity,ut.Added))}if(b)if(b.isScalar)null!=n&&n.setProperty(b.name,null),null!=t&&t.setProperty(b.name,this);else{if(null!=n){var O=n.getProperty(b.name),C=O.indexOf(this);-1!==C&&O.splice(C,1)}if(null!=t){var A=t.getProperty(b.name);A.push(this)}}else if(e.invForeignKeyNames&&h&&!h._inKeyFixup){var x=e.invForeignKeyNames;if(null!=t){var F=this.entityAspect.getKey().values;x.forEach(function(e,r){t.setProperty(e,F[r])})}else null!=n&&x.forEach(function(e){var t=n.entityType.getProperty(e);t.isPartOfKey||n.setProperty(e,null)})}if(r(t),h&&!h.isLoading&&(c.entityState.isUnchanged()&&!e.isUnmapped&&c.setModified(),h.validationOptions.validateOnPropertyChange&&c._validateProperty(t,{entity:this,property:e,propertyName:l,oldValue:n})),e.relatedDataProperties&&!c.entityState.isDeleted()){var M=e.entityType.keyProperties;M.forEach(function(r,n){var a=e.relatedDataProperties[n];if(t||!a.isPartOfKey){var i=t?t.getProperty(r.name):a.defaultValue;u.setProperty(a.name,i)}})}}var D={entity:f,parent:this,property:e,propertyName:l,oldValue:n,newValue:t};h?h.isLoading||h.isRejectingChanges||(c.propertyChanged.publish(D),h.entityChanged.publish({entityAction:at.PropertyChange,entity:f,args:D})):c.propertyChanged.publish(D)}finally{y.pop()}}}function V(e){return e.indexOf(":#")>=0}function K(e,t){return e+":#"+t}function R(e,t,r){if(t)if(Array.isArray(t))t.forEach(e.addProperty.bind(e));else{if("object"!=typeof t)throw new Error("The 'dataProperties' or 'navigationProperties' values must be either an array of data/nav properties or an object where each property defines a data/nav property");for(var n in t)if(U(t,n)){var a=t[n];a.name=n;var i=new r(a);e.addProperty(i)}}}function q(e,t){var r;if(r=Array.isArray(t)?t:t.split("."),1===r.length)return e.getProperty(t);for(var n=e,a=0;a<r.length&&(n=n.getProperty(r[a]),null!=n);a++);return n}function z(e){return e&&e.isDate?function(e){return e&&e.getTime()}:e===lt.Time?function(e){return e&&_(e)}:function(e){return e}}var L={version:"1.4.5",metadataVersion:"1.0.5"},U=I(Object.prototype.hasOwnProperty),B=I(Array.prototype.slice);Object.create||(Object.create=function(e){var t=function(){};return t.prototype=e,new t});var $={};$.objectForEach=e,$.extend=o,$.propEq=n,$.pluck=a,$.arrayEquals=m,$.arrayFirst=y,$.arrayIndexOf=f,$.arrayRemoveItem=h,$.arrayZip=d,$.requireLib=g,$.using=w,$.memoize=P,$.getUuid=T,$.durationToSeconds=_,$.isDate=N,$.isGuid=C,$.isDuration=A,$.isFunction=O,$.isEmpty=x,$.isNumeric=F,$.stringStartsWith=M,$.stringEndsWith=D,$.formatString=k,$.parent=L,L.core=$;var G=function(){function e(e,t){return null==t?!1:"string"==typeof t&&t.length>0}function t(e,t){return null==t?!1:typeof t===e.typeName?!0:!1}function r(e,t){return null==t?!1:t instanceof e.type}function n(e,t){return null==t?!1:void 0!==t[e.propertyName]}function a(e,t){return null==t?!1:e.enumType.contains(t)}function i(e,t){return e.allowNull?void 0!==t:null!=t}function s(e,t){if(null==t)return!0;var r=e.prevContext;return r?r.fn(r,t):!0}function u(e,t){var r=e.prevContext,n=r?" or it "+l(r,t):"";return"is optional"+n}function p(e,t){if(!Array.isArray(t))return!1;if(e.mustNotBeEmpty&&0===t.length)return!1;var r=e.prevContext;return r?t.every(function(e){return r.fn(r,e)}):!0}function c(e,t){var r=e.mustNotBeEmpty?"a nonEmpty array":"an array",n=e.prevContext,a=n?" where each element "+l(n,t):"";return" must be "+r+a}function l(e,t){var r=e.msg;return"function"==typeof r&&(r=r(e,t)),r}function y(e,t){if(e._context){for(var r=e._context;null!=r.prevContext;)r=r.prevContext;if(null===r.prevContext)return r.prevContext=t,e;if(null!==t.prevContext)throw new Error("Illegal construction - use 'or' to combine checks");t.prevContext=e._context}return f(e,t)}function f(e,t){return e._contexts[e._contexts.length-1]=t,e._context=t,e}function h(e){var t=e._contexts;return null==t[t.length-1]&&t.pop(),0===t.length?void 0:t.some(function(t){return t.fn(t,e.v)})}function d(e,t){throw new Error(k("Error configuring an instance of '%1'. %2",e&&e._$typeName||"object",t))}var m=function(e,t){this.v=e,this.name=t,this._contexts=[null]},v=m.prototype;return v.isObject=function(){return this.isTypeOf("object")},v.isBoolean=function(){return this.isTypeOf("boolean")},v.isString=function(){return this.isTypeOf("string")},v.isNonEmptyString=function(){return y(this,{fn:e,msg:"must be a nonEmpty string"})},v.isNumber=function(){return this.isTypeOf("number")},v.isFunction=function(){return this.isTypeOf("function")},v.isTypeOf=function(e){return y(this,{fn:t,typeName:e,msg:k("must be a '%1'",e)})},v.isInstanceOf=function(e,t){return t=t||e.prototype._$typeName,y(this,{fn:r,type:e,typeName:t,msg:k("must be an instance of '%1'",t)})},v.hasProperty=function(e){return y(this,{fn:n,propertyName:e,msg:k("must have a '%1' property ",e)})},v.isEnumOf=function(e){return y(this,{fn:a,enumType:e,msg:k("must be an instance of the '%1' enumeration",e.name)})},v.isRequired=function(e){return y(this,{fn:i,allowNull:e,msg:"is required"})},v.isOptional=function(){var e={fn:s,prevContext:null,msg:u};return y(this,e)},v.isNonEmptyArray=function(){return this.isArray(!0)},v.isArray=function(e){var t={fn:p,mustNotBeEmpty:e,prevContext:null,msg:c};return y(this,t)},v.or=function(){return this._contexts.push(null),this._context=null,this},v.check=function(e){var t=h(this);if(void 0!==t){if(!t)throw new Error(this.getMessage());return void 0!==this.v?this.v:e}},v._addContext=function(e){return y(this,e)},v.getMessage=function(){var e=this,t=this._contexts.map(function(t){return l(t,e.v)}).join(", or it ");return k(this.MESSAGE_PREFIX,this.name)+" "+t},v.withDefault=function(e){return this.defaultValue=e,this},v.whereParam=function(e){return this.parent.whereParam(e)},v.applyAll=function(e,t,r){var n=e._$typeName;r=r||n&&this.parent.config._$typeName===n;var a=o({},this.parent.config);if(this.parent.params.forEach(function(n){r||delete a[n.name];try{n.check()}catch(i){d(e,i.message)}!t&&n._applyOne(e)}),!r)for(var i in a)void 0!==a[i]&&d(e,k("Unknown property: '%1'.",i))},v._applyOne=function(e){void 0!==this.v?e[this.name]=this.v:void 0!==this.defaultValue&&(e[this.name]=this.defaultValue)},v.MESSAGE_PREFIX="The '%1' parameter ",m}(),Q=function(e,t){return new G(e,t)},J=function(){var e=function(e){if("object"!=typeof e)throw new Error("Configuration parameter should be an object, instead it is a: "+typeof e);this.config=e,this.params=[]},t=e.prototype;return t.whereParam=function(e){var t=new G(this.config[e],e);return t.parent=this,this.params.push(t),t},e}(),Z=function(e){return new J(e)};$.Param=G,$.assertParam=Q,$.assertConfig=Z;var H=function(){function e(){}var t=function(t,r){this.name=t;var n=new e(r);n.parentEnum=this,this._symbolPrototype=n,r&&Object.keys(r).forEach(function(e){n[e]=r[e]})},r=t.prototype;return t.isSymbol=function(t){return t instanceof e},r.fromName=function(e){return this[e]},r.addSymbol=function(e){var t=Object.create(this._symbolPrototype);return e&&Object.keys(e).forEach(function(r){t[r]=e[r]}),setTimeout(function(){t.getName()},0),t},r.seal=function(){this.getSymbols().forEach(function(e){return e.getName()})},r.getSymbols=function(){return this.getNames().map(function(e){return this[e]},this)},r.getNames=function(){var e=[];for(var t in this)this.hasOwnProperty(t)&&("name"===t||"_"===t.substr(0,1)||O(this[t])||e.push(t));return e},r.contains=function(t){return t instanceof e?this[t.getName()]===t:!1},e.prototype.getName=function(){if(!this.name){var e=this;this.name=y(this.parentEnum.getNames(),function(t){return e.parentEnum[t]===e})}return this.name},e.prototype.toString=function(){return this.getName()},e.prototype.toJSON=function(){return{_$typeName:this.parentEnum.name,name:this.name}},t}();$.Enum=H;var W=function(){function e(e,r,n){var a=e._subscribers;return a?(a.forEach(function(a){try{a.callback(r)}catch(i){i.context="unable to publish on topic: "+e.name,n?n(i):e._defaultErrorCallback?e._defaultErrorCallback(i):t(i)}}),void 0):!0}function t(){}var r={},n=1,a=function(e,t,n){Q(e,"eventName").isNonEmptyString().check(),Q(t,"publisher").isObject().check(),this.name=e,r[e]=!0,this.publisher=t,n&&(this._defaultErrorCallback=n)},i=a.prototype;return i.publish=function(t,r,n){return a._isEnabled(this.name,this.publisher)?(r===!0?setTimeout(e,0,this,t,n):e(this,t,n),!0):!1},i.publishAsync=function(e,t){this.publish(e,!0,t)},i.subscribe=function(e){this._subscribers||(this._subscribers=[]);var t=n;return this._subscribers.push({unsubKey:t,callback:e}),++n,t},i.unsubscribe=function(e){if(!this._subscribers)return!1;var t=this._subscribers,r=f(t,function(t){return t.unsubKey===e});return-1!==r?(t.splice(r,1),0===t.length&&(this._subscribers=null),!0):!1},i.clear=function(){this._subscribers=null},a.bubbleEvent=function(e,t){e._getEventParent=t},a.enable=function(e,t,r){Q(e,"eventName").isNonEmptyString().check(),Q(t,"obj").isObject().check(),Q(r,"isEnabled").isBoolean().isOptional().or().isFunction().check(),t._$eventMap||(t._$eventMap={}),t._$eventMap[e]=r},a.isEnabled=function(e,t){if(Q(e,"eventName").isNonEmptyString().check(),Q(t,"obj").isObject().check(),!t._getEventParent)throw new Error("This object does not support event enabling/disabling");return a._isEnabled(t,e)},a._isEnabled=function(e,t){var r=null,n=t._$eventMap;if(n&&(r=n[e]),null!=r)return"function"==typeof r?r(t):!!r;var i=t._getEventParent&&t._getEventParent();return i?a._isEnabled(e,i):!0},a}();$.Event=W;var Y=function(){function e(e,t,r){var n=t.defaultInstance;return n||(n=new t.ctor,t.defaultInstance=n,n._$impl=t),n.initialize(),r&&(e.defaultInstance=n),a.interfaceInitialized.publish({interfaceName:e.name,instance:n,isDefault:!0}),n.checkForRecomposition&&a.interfaceInitialized.subscribe(function(e){n.checkForRecomposition(e)}),n}function n(e){var r=e.toLowerCase(),n=t(a.interfaceRegistry||{},function(e){return e.toLowerCase()===r});if(!n)throw new Error("Unknown interface name: "+e);return n.value}var a={};a.functionRegistry={},a.typeRegistry={},a.objectRegistry={},a.interfaceInitialized=new W("interfaceInitialized",a);var i=function(e){this.name=e,this.defaultInstance=null,this._implMap={}};return i.prototype.registerCtor=function(e,t){this._implMap[e.toLowerCase()]={ctor:t,defaultInstance:null}},i.prototype.getImpl=function(e){return this._implMap[e.toLowerCase()]},i.prototype.getFirstImpl=function(){var e=t(this._implMap,function(){return!0});return e?e.value:null},a.interfaceRegistry={ajax:new i("ajax"),modelLibrary:new i("modelLibrary"),dataService:new i("dataService")},a.interfaceRegistry.modelLibrary.getDefaultInstance=function(){if(!this.defaultInstance)throw new Error("Unable to locate the default implementation of the '"+this.name+"' interface.  Possible options are 'ko', 'backingStore' or 'backbone'. See the breeze.config.initializeAdapterInstances method.");return this.defaultInstance},a.setProperties=function(e){Z(e).whereParam("remoteAccessImplementation").isOptional().whereParam("trackingImplementation").isOptional().whereParam("ajaxImplementation").isOptional().applyAll(e),e.remoteAccessImplementation&&a.initializeAdapterInstance("dataService",e.remoteAccessImplementation),e.trackingImplementation&&a.initializeAdapterInstance("modelLibrary",e.trackingImplementation),e.ajaxImplementation&&a.initializeAdapterInstance("ajax",e.ajaxImplementation)},a.registerAdapter=function(e,t){Q(e,"interfaceName").isNonEmptyString().check(),Q(t,"adapterCtor").isFunction().check();var r=new t,a=r.name;if(!a)throw new Error("Unable to locate a 'name' property on the constructor passed into the 'registerAdapter' call.");var i=n(e);i.registerCtor(a,t)},a.getAdapter=function(e,t){var r=n(e);if(t){var a=r.getImpl(t);return a?a.ctor:null}return r.defaultInstance?r.defaultInstance._$impl.ctor:null},a.initializeAdapterInstances=function(e){return Z(e).whereParam("dataService").isOptional().whereParam("modelLibrary").isOptional().whereParam("ajax").isOptional().applyAll(this,!1),r(e,a.initializeAdapterInstance)},a.initializeAdapterInstance=function(t,r,a){a=void 0===a?!0:a,Q(t,"interfaceName").isNonEmptyString().check(),Q(r,"adapterName").isNonEmptyString().check(),Q(a,"isDefault").isBoolean().check();var i=n(t),o=i.getImpl(r);if(!o)throw new Error("Unregistered adapter.  Interface: "+t+" AdapterName: "+r);return e(i,o,a)},a.getAdapterInstance=function(t,r){var a,i=n(t);return r&&""!==r?(a=i.getImpl(r),a?a.defaultInstance:null):i.defaultInstance?i.defaultInstance:(a=i.getFirstImpl(),a.defaultInstance?a.defaultInstance:e(i,a,!0))},a.registerFunction=function(e,t){Q(e,"fn").isFunction().check(),Q(t,"fnName").isString().check(),e.prototype._$fnName=t,a.functionRegistry[t]=e},a._storeObject=function(e,t,r){var n=("string"==typeof t?t:t.prototype._$typeName)+"."+r;a.objectRegistry[n]=e},a._fetchObject=function(e,t){if(!t)return void 0;var r=("string"==typeof e?e:e.prototype._$typeName)+"."+t,n=a.objectRegistry[r];if(!n)throw new Error("Unable to locate a registered object by the name: "+r);return n},a.registerType=function(e,t){Q(e,"ctor").isFunction().check(),Q(t,"typeName").isString().check(),e.prototype._$typeName=t,a.typeRegistry[t]=e},a.stringifyPad="  ",a}(),X=Y.interfaceRegistry.modelLibrary;$.config=Y,L.config=Y;var et=function(){function e(e){var t=e.getEntityAspect();t.entityState.isUnchanged()&&t.setModified(),t.entityState.isModified()&&!e._origValues&&(e._origValues=e.slice(0))}function t(e,t){e._processAdds(t),n(e,"arrayChanged",{array:e,added:t})}function r(e,t){e._processRemoves(t),n(e,"arrayChanged",{array:e,removed:t})}function n(e,t,r){var n=e._getPendingPubs();n?e._pendingArgs?a(e._pendingArgs,r):(e._pendingArgs=r,n.push(function(){e[t].publish(e._pendingArgs),e._pendingArgs=null})):e[t].publish(r)}function a(e,t){for(var r in t)if("array"!==r&&e.hasOwnProperty(r)){var n=t[r],a=e[r];if(a){if(!Array.isArray(a))throw new Error("Cannot combine non array args");Array.prototype.push.apply(a,n)}else e[r]=n}}function i(e,t,r){e.parent=t,e.parentProperty=r}var o={};return o.push=function(){if(this._inProgress)return-1;var e=this._getGoodAdds(B(arguments));if(!e.length)return this.length;this._beforeChange();var r=Array.prototype.push.apply(this,e);return t(this,e),r},o._push=function(){if(this._inProgress)return-1;var e=B(arguments);this._beforeChange();var r=Array.prototype.push.apply(this,e);return t(this,e),r},o.unshift=function(){var e=this._getGoodAdds(B(arguments));if(!e.length)return this.length;this._beforeChange();var r=Array.prototype.unshift.apply(this,e);return t(this,B(e)),r},o.pop=function(){this._beforeChange();var e=Array.prototype.pop.apply(this);return r(this,[e]),e},o.shift=function(){this._beforeChange();var e=Array.prototype.shift.apply(this);return r(this,[e]),e},o.splice=function(){var e=this._getGoodAdds(B(arguments,2)),n=B(arguments,0,2).concat(e);this._beforeChange();var a=Array.prototype.splice.apply(this,n);return r(this,a),e.length&&t(this,e),a},o.getEntityAspect=function(){return this.parent.entityAspect||this.parent.complexAspect.getEntityAspect()},o._getEventParent=function(){return this.getEntityAspect()},o._getPendingPubs=function(){var e=this.getEntityAspect().entityManager;return e&&e._pendingPubs},o._beforeChange=function(){},{mixin:o,publish:n,updateEntityState:e,initializeParent:i}}(),tt=function(){function t(e,t,r,n,a){for(n=+e[t=e.length-1],a=0;t--;)r=+e[t],n+=++a%2?2*r%10+(r>4):r;return!(n%10)}function r(e,t,r,n){r&&(f.messageTemplates[e]=r);var a="string"==typeof t?new RegExp(t):t,i=function(e){return null==e||""===e?!0:"string"!=typeof e?!1:a.test(e)};return new f(e,i,n)}function n(e,t,r){return t?e.replace(/%([^%]+)%/g,function(e,n){var a;return a=r?t.hasOwnProperty(n)?t[n]:"":t[n],a?O(a)?a(t):a:""}):e}function a(e,t,r,n){return f.messageTemplates[e]=k("'%displayName%' must be an integer between the values of %1 and %2",t,r),function(){var a=function(e,n){return null==e?!0:("string"==typeof e&&n&&n.allowString&&(e=parseInt(e,0)),"number"!=typeof e||isNaN(e)||Math.floor(e)!==e?!1:null!=t&&t>e?!1:null!=r&&e>r?!1:!0)};return new f(e,a,n)}}var i=-32768,s=32767,u=-2147483648,p=2147483647,c=0,l=255,y={displayName:function(e){return e.property?e.property.displayName||e.propertyName||e.property.name:"Value"}},f=function(e,t,r){this._baseContext=r||{},this._baseContext.name=e,r=o(Object.create(y),this._baseContext),r.messageTemplate=r.messageTemplate||f.messageTemplates[e],this.name=e,this.valFn=t,this.context=r},h=f.prototype;return h._$typeName="Validator",h.validate=function(e,t){var r;r=t?o(Object.create(this.context),t):this.context,this.currentContext=r;try{return this.valFn(e,r)?null:(r.value=e,new rt(this,r,this.getMessage()))}catch(n){return new rt(this,r,"Exception occured while executing this validator: "+this.name)}},h.getMessage=function(){try{var e=this.currentContext,t=e.message;return t?"function"==typeof t?t(e):t:e.messageTemplate?n(e.messageTemplate,e):"invalid value: "+this.name||"{unnamed validator}"}catch(r){return"Unable to format error message"+r.toString()}},h.toJSON=function(){return this._baseContext},f.fromJSON=function(e){var t="Validator."+e.name,r=Y.functionRegistry[t];if(!r)throw new Error("Unable to locate a validator named:"+e.name);return r(e)},f.register=function(e){Y.registerFunction(function(){return e},"Validator."+e.name)},f.registerFactory=function(e,t){Y.registerFunction(e,"Validator."+t)},f.messageTemplates={bool:"'%displayName%' must be a 'true' or 'false' value",creditCard:"The %displayName% is not a valid credit card number",date:"'%displayName%' must be a date",duration:"'%displayName%' must be a ISO8601 duration string, such as 'P3H24M60S'",emailAddress:"The %displayName% '%value%' is not a valid email address",guid:"'%displayName%' must be a GUID",integer:"'%displayName%' must be an integer",integerRange:"'%displayName%' must be an integer between the values of %minValue% and %maxValue%",maxLength:"'%displayName%' must be a string with %maxLength% characters or less",number:"'%displayName%' must be a number",phone:"The %displayName% '%value%' is not a valid phone number",regularExpression:"The %displayName% '%value%' does not match '%expression%'",required:"'%displayName%' is required",string:"'%displayName%' must be a string",stringLength:"'%displayName%' must be a string with between %minLength% and %maxLength% characters",url:"The %displayName% '%value%' is not a valid url"},f.required=function(){var e=function(e,t){return"string"==typeof e?t&&t.allowEmptyStrings?!0:e.length>0:null!=e};return new f("required",e)},f.maxLength=function(e){var t=function(e,t){return null==e?!0:"string"!=typeof e?!1:e.length<=t.maxLength};return new f("maxLength",t,e)},f.stringLength=function(e){var t=function(e,t){return null==e?!0:"string"!=typeof e?!1:null!=t.minLength&&e.length<t.minLength?!1:null!=t.maxLength&&e.length>t.maxLength?!1:!0};return new f("stringLength",t,e)},f.string=function(){var e=function(e){return null==e?!0:"string"==typeof e};return new f("string",e)},f.guid=function(){var e=function(e){return null==e?!0:C(e)};return new f("guid",e)},f.duration=function(){var e=function(e){return null==e?!0:A(e)};return new f("duration",e)},f.number=f.double=f.single=function(e){var t=function(e,t){return null==e?!0:("string"==typeof e&&t&&t.allowString&&(e=parseInt(e,10)),"number"==typeof e&&!isNaN(e))};return new f("number",t,e)},f.integer=f.int64=function(e){var t=function(e,t){return null==e?!0:("string"==typeof e&&t&&t.allowString&&(e=parseInt(e,10)),"number"==typeof e&&!isNaN(e)&&Math.floor(e)===e)};return new f("integer",t,e)},f.int32=function(e){return a("int32",u,p,e)()},f.int16=function(e){return a("int16",i,s,e)()},f.byte=function(e){return a("byte",c,l,e)()},f.bool=function(){var e=function(e){return null==e?!0:e===!0||e===!1};return new f("bool",e)},f.none=function(){var e=function(){return!0};return new f("none",e)},f.date=function(){var e=function(e){if(null==e)return!0;if("string"!=typeof e)return N(e);try{return!isNaN(Date.parse(e))}catch(t){return!1}};return new f("date",e)},f.creditCard=function(e){function r(e){return null==e||""===e?!0:"string"!=typeof e?!1:(e=e.replace(/(\-|\s)/g,""),!e||/\D/.test(e)?!1:t(e))}return new f("creditCard",r,e)},f.regularExpression=function(e){function t(e,t){if(null==e||""===e)return!0;if("string"!=typeof e)return!1;try{var r=new RegExp(t.expression)}catch(n){throw new Error("Missing or invalid expression parameter to regExp validator")}return r.test(e)}return new f("regularExpression",t,e)},f.emailAddress=function(e){var t=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/;return r("emailAddress",t,null,e)},f.phone=function(e){var t=/^((\+|(0(\d+)?[-/.\s]?))[1-9]\d{0,2}[-/.\s]?)?((\(\d{1,6}\)|\d{1,6})[-/.\s]?)?(\d+[-/.\s]?)+\d+$/;return r("phone",t,null,e)},f.url=function(e){var t=/^(https?|ftp):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-fA-F]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|([a-zA-Z][\-a-zA-Z0-9]*)|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-fA-F]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-fA-F]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-fA-F]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-fA-F]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/;return r("url",t,null,e)},f.makeRegExpValidator=r,e(f,function(e,t){"function"==typeof t&&"fromJSON"!==e&&"register"!==e&&"registerFactory"!==e&&"makeRegExpValidator"!==e&&Y.registerFunction(t,"Validator."+e)}),f}(),rt=function(){var e=function(e,t,r,n){Q(e,"validator").isOptional().isInstanceOf(tt).check(),Q(r,"errorMessage").isNonEmptyString().check(),Q(n,"key").isOptional().isNonEmptyString().check(),this.validator=e;var t=t||{};this.context=t,this.errorMessage=r,this.property=t.property,this.propertyName=t.propertyName||t.property&&t.property.name,this.key=n?n:rt.getKey(e||r,this.propertyName),this.isServerError=!1};return e.getKey=function(e,t){return(e.name||e)+(t?":"+t:"")},e}();L.Validator=tt,L.ValidationError=rt;var nt=function(){function e(e,t){return t&&Z(t).whereParam("validateOnAttach").isBoolean().isOptional().whereParam("validateOnSave").isBoolean().isOptional().whereParam("validateOnQuery").isBoolean().isOptional().whereParam("validateOnPropertyChange").isBoolean().isOptional().applyAll(e),e}var t=function(t){e(this,t)},r=t.prototype;return r._$typeName="ValidationOptions",r.using=function(t){if(!t)return this;var r=new nt(this);return e(r,t),r},r.setAsDefault=function(){return u(this,t)},t.defaultInstance=new t({validateOnAttach:!0,validateOnSave:!0,validateOnQuery:!1,validateOnPropertyChange:!0}),t}();L.ValidationOptions=nt,L.makeComplexArray=function(){function e(e,t){return t.filter(function(t){return t.parent!==e.parent})}function t(e,t){t.forEach(function(t){if(null!=t.parent)throw new Error("The complexObject is already attached. Either clone it or remove it from its current owner");a(t,e)})}function r(e,t){t.forEach(function(t){n(t,e)})}function n(e,t){var r=e.complexAspect;
return r.parent!==t.parent?null:(r.parent=null,r.parentProperty=null,r)}function a(e,t){var r=e.complexAspect;return r.parent===t.parent?null:(r.parent=t.parent,r.parentProperty=t.parentProperty,r)}function i(e,t,r){return et.initializeParent(e,t,r),e.arrayChanged=new W("arrayChanged",e),o(e,et.mixin),o(e,s)}var s={};return s._getGoodAdds=function(t){return e(this,t)},s._beforeChange=function(){et.updateEntityState(this)},s._processAdds=function(e){t(this,e)},s._processRemoves=function(e){r(this,e)},s._rejectChanges=function(){if(this._origValues){var e=this;this.forEach(function(t){n(t,e)}),this.length=0,this._origValues.forEach(function(t){e.push(t)}),Array.prototype.push.apply(this,this._origValues)}},s._acceptChanges=function(){this._origValues=null},i}();var at=function(){var e={isAttach:function(){return!!this.isAttach},isDetach:function(){return!!this.isDetach},isModification:function(){return!!this.isModification}},t=new H("EntityAction",e);return t.Attach=t.addSymbol({isAttach:!0}),t.AttachOnQuery=t.addSymbol({isAttach:!0}),t.AttachOnImport=t.addSymbol({isAttach:!0}),t.Detach=t.addSymbol({isDetach:!0}),t.MergeOnQuery=t.addSymbol({isModification:!0}),t.MergeOnImport=t.addSymbol({isModification:!0}),t.MergeOnSave=t.addSymbol({isModification:!0}),t.PropertyChange=t.addSymbol({isModification:!0}),t.EntityStateChange=t.addSymbol(),t.AcceptChanges=t.addSymbol(),t.RejectChanges=t.addSymbol({isModification:!0}),t.Clear=t.addSymbol({isDetach:!0}),t.seal(),t}();L.EntityAction=at;var it=function(){function t(e){var r=e.entityAspect||e.complexAspect,n=e.entityType||e.complexType,a=r.originalValues;for(var i in a)e.setProperty(i,a[i]);n.complexProperties.forEach(function(r){var n=e.getProperty(r.name);r.isScalar?t(n):(n._rejectChanges(),n.forEach(function(e){t(e)}))})}function r(e){var t=e.entityAspect||e.complexAspect;t.originalValues={};var n=e.entityType||e.complexType;n.complexProperties.forEach(function(t){var n=e.getProperty(t.name);t.isScalar?r(n):(n._acceptChanges(),n.forEach(function(e){r(e)}))})}function n(e){var t=!0,r=e.entityType||e.complexType,a=e.entityAspect||e.complexAspect,i=e.entityAspect||e.complexAspect.getEntityAspect();return r.getProperties().forEach(function(r){var o=e.getProperty(r.name),s=a.getPropertyPath(r.name);if(r.validators.length>0){var u={entity:i.entity,property:r,propertyName:s};t=i._validateProperty(o,u)&&t}r.isComplexProperty&&r.isScalar&&(t=n(o)&&t)}),r.validators.forEach(function(e){t=u(i,e,a.entity)&&t}),t}function a(e,t){var r=t.isDeleted();r?o(e,!0):w(e.entityAspect.entityManager,"isLoading",!0,function(){o(e,!1)})}function o(e,t){e.entityType.navigationProperties.forEach(function(r){var n=r.inverse;if(n){var a=e.getProperty(r.name);if(r.isScalar){if(a){if(n.isScalar)s(a,n,t);else{var i=a.getProperty(n.name);i.length&&h(i,e)}e.setProperty(r.name,null)}}else a.slice(0).forEach(function(e){n.isScalar&&s(e,n,t)}),a.length=0}})}function s(e,t,r){if(r)e.setProperty(t.name,null);else{e.entityAspect.entityManager;var n=t.foreignKeyNames;if(n)var a=n.map(function(t){return e.getProperty(t)});e.setProperty(t.name,null),n&&n.forEach(function(t,r){e.setProperty(t,a[r])})}}function u(e,t,r,n){var a=t.validate(r,n);if(a)return e._addValidationError(a),!1;var i=rt.getKey(t,n?n.propertyName:null);return e._removeValidationError(i),!0}var p=function(e){if(null===e){var t=it._nullInstance;if(t)return t;it._nullInstance=this}else{if(void 0===e)throw new Error("The EntityAspect ctor requires an entity as its only argument.");if(e.entityAspect)return e.entityAspect}if(!(this instanceof it))return new it(e);if(this.entity=e,this.entityGroup=null,this.entityManager=null,this.entityState=ut.Detached,this.isBeingSaved=!1,this.originalValues={},this.hasValidationErrors=!1,this._validationErrors={},this.validationErrorsChanged=new W("validationErrorsChanged",this),this.propertyChanged=new W("propertyChanged",this),null!=e){e.entityAspect=this;var r=e.entityType;if(!r){var n=e.prototype._$typeName;throw n?new Error("Metadata for this entityType has not yet been resolved: "+n):new Error("This entity is not registered as a valid EntityType")}var a=r.getEntityCtor();X.getDefaultInstance().startTracking(e,a.prototype)}},c=p.prototype;return W.bubbleEvent(c,function(){return this.entityManager}),c.getKey=function(e){if(e=Q(e,"forceRefresh").isBoolean().isOptional().check(!1),e||!this._entityKey){var t=this.entity.entityType,r=t.keyProperties,n=r.map(function(e){return this.entity.getProperty(e.name)},this);this._entityKey=new st(t,n)}return this._entityKey},c.acceptChanges=function(){var e=this.entityManager;this.entityState.isDeleted()?e.detachEntity(this.entity):this.setUnchanged(),e.entityChanged.publish({entityAction:at.AcceptChanges,entity:this.entity})},c.rejectChanges=function(){var e=this.entity,r=this.entityManager;w(r,"isRejectingChanges",!0,function(){t(e)}),this.entityState.isAdded()?(r.detachEntity(e),r._notifyStateChange(e,!1)):(this.entityState.isDeleted()&&this.entityManager._linkRelatedEntities(e),this.setUnchanged(),this.propertyChanged.publish({entity:e,propertyName:null}),this.entityManager.entityChanged.publish({entityAction:at.RejectChanges,entity:e}))},c.getPropertyPath=function(e){return e},c.setUnchanged=function(){r(this.entity),delete this.hasTempKey,this.entityState=ut.Unchanged,this.entityManager._notifyStateChange(this.entity,!1)},c.setModified=function(){this.entityState=ut.Modified,this.entityManager._notifyStateChange(this.entity,!0)},c.setDeleted=function(){var e=this.entityManager,t=this.entity;this.entityState.isAdded()?(e.detachEntity(t),e._notifyStateChange(t,!1)):(this.entityState=ut.Deleted,a(t,ut.Deleted),e._notifyStateChange(t,!0))},c.setDetached=function(){var e=this.entityGroup;if(!e)return!1;var t=this.entity;return e.detachEntity(t),a(t,ut.Detached),this.entityManager.entityChanged.publish({entityAction:at.Detach,entity:t}),this._detach(),!0},c.loadNavigationProperty=function(e,t,r){var n=this.entity,a=n.entityType._checkNavProperty(e),i=Tt.fromEntityNavigation(n,a,t,r);return n.entityAspect.entityManager.executeQuery(i,t,r)},c.validateEntity=function(){var e=!0;return this._processValidationOpAndPublish(function(t){e=n(t.entity)}),e},c.validateProperty=function(e,t){var r=this.getPropertyValue(e);return r&&r.complexAspect?n(r):(t=t||{},t.entity=this.entity,"string"==typeof e?(t.property=this.entity.entityType.getProperty(e,!0),t.propertyName=e):(t.property=e,t.propertyName=e.name),this._validateProperty(r,t))},c.getValidationErrors=function(e){Q(e,"property").isOptional().isEntityProperty().or().isString().check();var t=i(this._validationErrors);if(e){var r="string"==typeof e?e:e.name;t=t.filter(function(e){return e.property.name===r})}return t},c.addValidationError=function(e){Q(e,"validationError").isInstanceOf(rt).check(),this._processValidationOpAndPublish(function(t){t._addValidationError(e)})},c.removeValidationError=function(e){Q(e,"validationErrorOrKey").isString().or().isInstanceOf(rt).or().isInstanceOf(tt).check();var t="string"==typeof e?e:e.key;this._processValidationOpAndPublish(function(e){e._removeValidationError(t)})},c.clearValidationErrors=function(){this._processValidationOpAndPublish(function(t){e(t._validationErrors,function(e,r){r&&(delete t._validationErrors[e],t._pendingValidationResult.removed.push(r))}),t.hasValidationErrors=!x(this._validationErrors)})},c.getParentKey=function(e){var t=e.foreignKeyNames;if(0===t.length)return null;var r=this,n=t.map(function(e){return r.entity.getProperty(e)});return new st(e.entityType,n)},c.getPropertyValue=function(e){Q(e,"property").isString().or().isEntityProperty().check();var t;if("string"==typeof e){var r=e.trim().split("."),n=r.shift();for(t=this.entity,t=t.getProperty(n);r.length>0;)n=r.shift(),t=t.getProperty(n)}else{if(!(e.parentType instanceof dt))throw new Error("The validateProperty method does not accept a 'property' parameter whose parentType is a ComplexType; Pass a 'property path' string as the 'property' parameter instead ");t=this.entity.getProperty(e.name)}return t},c._detach=function(){this.entityGroup=null,this.entityManager=null,this.entityState=ut.Detached,this.originalValues={},this._validationErrors={},this.hasValidationErrors=!1,this.validationErrorsChanged.clear(),this.propertyChanged.clear()},c._validateProperty=function(e,t){var r=!0;return this._processValidationOpAndPublish(function(n){t.property.validators.forEach(function(a){r=u(n,a,e,t)&&r})}),r},c._processValidationOpAndPublish=function(e){if(this._pendingValidationResult)e(this);else try{this._pendingValidationResult={entity:this.entity,added:[],removed:[]},e(this),(this._pendingValidationResult.added.length>0||this._pendingValidationResult.removed.length>0)&&(this.validationErrorsChanged.publish(this._pendingValidationResult),this.entityManager&&this.entityManager.validationErrorsChanged.publish(this._pendingValidationResult))}finally{this._pendingValidationResult=void 0}},c._addValidationError=function(e){this._validationErrors[e.key]=e,this.hasValidationErrors=!0,this._pendingValidationResult.added.push(e)},c._removeValidationError=function(e){var t=this._validationErrors[e];t&&(delete this._validationErrors[e],this.hasValidationErrors=!x(this._validationErrors),this._pendingValidationResult.removed.push(t))},p}(),ot=function(){var e=function(e,t,r){if(!e)throw new Error("The  ComplexAspect ctor requires an entity as its only argument.");if(e.complexAspect)return e.complexAspect;if(!(this instanceof ot))return new ot(e,t,r);this.complexObject=e,e.complexAspect=this,this.originalValues={},null!=t&&(this.parent=t,this.parentProperty=r);var n=e.complexType;if(!n){var a=e.prototype._$typeName;throw a?new Error("Metadata for this complexType has not yet been resolved: "+a):new Error("This entity is not registered as a valid ComplexType")}var i=n.getCtor();X.getDefaultInstance().startTracking(e,i.prototype)},t=e.prototype;return t.getEntityAspect=function(){var e=this.parent;if(!e)return new it(null);for(var t=e.entityAspect;e&&!t;)e=e.complexAspect&&e.complexAspect.parent,t=e&&e.entityAspect;return t||new it(null)},t.getPropertyPath=function(e){var t=this.parent;if(!t)return null;var r=t.complexAspect||t.entityAspect;return r.getPropertyPath(this.parentProperty.name+"."+e)},e}();L.EntityAspect=it,L.ComplexAspect=ot;var st=function(){function e(e){return e.join(t)}var t=":::",r=function(t,r){Q(t,"entityType").isInstanceOf(dt).check();var n=t.getSelfAndSubtypes();n.length>1&&(this._subtypes=n.filter(function(e){return e.isAbstract===!1})),Array.isArray(r)||(r=B(arguments,1)),this.entityType=t,t.keyProperties.forEach(function(e,t){e.dataType===lt.Guid&&(r[t]=r[t]&&r[t].toLowerCase())}),this.values=r,this._keyInGroup=e(r)};r._$typeName="EntityKey";var n=r.prototype;return n.toJSON=function(){return{entityType:this.entityType.name,values:this.values}},r.fromJSON=function(e,t){var r=t._getEntityType(e.entityType,!0);return new st(r,e.values)},n.equals=function(e){return e instanceof st?this.entityType===e.entityType&&m(this.values,e.values):!1},n.toString=function(){return this.entityType.name+"-"+this._keyInGroup},r.equals=function(e,t){return e instanceof st?e.equals(t):!1},n._isEmpty=function(){return 0===this.values.join("").length},r.createKeyString=e,r}();L.EntityKey=st;var ut=function(){var e={isUnchanged:function(){return this===t.Unchanged},isAdded:function(){return this===t.Added},isModified:function(){return this===t.Modified},isDeleted:function(){return this===t.Deleted},isDetached:function(){return this===t.Detached},isUnchangedOrModified:function(){return this===t.Unchanged||this===t.Modified},isAddedModifiedOrDeleted:function(){return this===t.Added||this===t.Modified||this===t.Deleted}},t=new H("EntityState",e);return t.Unchanged=t.addSymbol(),t.Added=t.addSymbol(),t.Modified=t.addSymbol(),t.Deleted=t.addSymbol(),t.Detached=t.addSymbol(),t.seal(),t}();L.EntityState=ut,L.makePrimitiveArray=function(){function e(e,r,n){return et.initializeParent(e,r,n),e.arrayChanged=new W("arrayChanged",e),o(e,et.mixin),o(e,t)}var t={};return t._getGoodAdds=function(e){return e},t._beforeChange=function(){var e=this.getEntityAspect();e.entityState.isUnchanged()&&e.setModified(),e.entityState.isModified()&&!this._origValues&&(this._origValues=this.slice(0))},t._processAdds=function(){},t._processRemoves=function(){},t._rejectChanges=function(){this._origValues&&(this.length=0,Array.prototype.push.apply(this,this._origValues))},t._acceptChanges=function(){this._origValues=null},e}(),L.makeRelationArray=function(){function e(e,t){var r=n(e,t);if(!r.length)return r;var a=e.parentEntity,i=a.entityAspect.entityManager;return i&&!i.isLoading&&r.forEach(function(t){if(t.entityAspect.entityState.isDetached()){e._inProgress=!0;try{i.attachEntity(t,ut.Added)}finally{e._inProgress=!1}}}),r}function t(e,t){var r=e.parentEntity,n=e.navigationProperty,a=e._addsInProcess,i=n.inverse,o=a.length;try{t.forEach(function(e){if(a.push(e),i)e.setProperty(i.name,r);else{var t=r.entityType.keyProperties;n.invForeignKeyNames.forEach(function(n,a){e.setProperty(n,r.getProperty(t[a].name))})}})}finally{a.splice(o,t.length)}}function r(e,t){var r=e.navigationProperty.inverse;r&&t.forEach(function(e){e.setProperty(r.name,null)})}function n(e,t){var r,n=e.parentEntity,a=e.navigationProperty,i=a.inverse;if(i)r=t.filter(function(t){if(e._addsInProcess.indexOf(t)>=0)return!1;var r=t.getProperty(i.name);return r!==n});else{var o=a.invForeignKeyNames,s=n.entityType.keyProperties;r=t.filter(function(t){return e._addsInProcess.indexOf(t)>=0?!1:o.some(function(e,r){var a=s[r].name,i=n.getProperty(a),o=t.getProperty(e);return i!==o})})}return r}function a(e,t,r){return e.parentEntity=t,e.navigationProperty=r,e.arrayChanged=new W("arrayChanged",e),e._addsInProcess=[],o(e,et.mixin),o(e,i)}var i={};return i.load=function(e,t){var r=this.parentEntity,n=Tt.fromEntityNavigation(this.parentEntity,this.navigationProperty),a=r.entityAspect.entityManager;return a.executeQuery(n,e,t)},i._getEventParent=function(){return this.parentEntity.entityAspect},i._getPendingPubs=function(){var e=this.parentEntity.entityAspect.entityManager;return e&&e._pendingPubs},i._getGoodAdds=function(t){return e(this,t)},i._processAdds=function(e){t(this,e)},i._processRemoves=function(e){r(this,e)},a}();var pt=function(){function e(e,t){return t&&(Z(t).whereParam("serviceName").isOptional().whereParam("adapterName").isString().isOptional().whereParam("hasServerMetadata").isBoolean().isOptional().whereParam("jsonResultsAdapter").isInstanceOf(ct).isOptional().whereParam("useJsonp").isBoolean().isOptional().applyAll(e),e.serviceName=e.serviceName&&pt._normalizeServiceName(e.serviceName),e.adapterInstance=e.adapterName&&Y.getAdapterInstance("dataService",e.adapterName)),e}var t=function(t){e(this,t)},r=t.prototype;return r._$typeName="DataService",r.using=function(t){if(!t)return this;var r=new pt(this);return e(r,t)},t.resolve=function(e){e.push({hasServerMetadata:!0,useJsonp:!1});var t=new pt(c(e,["serviceName","adapterName","hasServerMetadata","jsonResultsAdapter","useJsonp"]));if(!t.serviceName)throw new Error("Unable to resolve a 'serviceName' for this dataService");return t.adapterInstance=t.adapterInstance||Y.getAdapterInstance("dataService",t.adapterName),t.jsonResultsAdapter=t.jsonResultsAdapter||t.adapterInstance.jsonResultsAdapter,t},t._normalizeServiceName=function(e){return e=e.trim(),"/"!==e.substr(-1)?e+"/":e},r.toJSON=function(){return p(this,{serviceName:null,adapterName:null,hasServerMetadata:null,jsonResultsAdapter:function(e){return e&&e.name},useJsonp:null})},t.fromJSON=function(e){return e.jsonResultsAdapter=Y._fetchObject(ct,e.jsonResultsAdapter),new pt(e)},r.makeUrl=function(e){var t=this.serviceName;return $.stringEndsWith(t,"/")&&(t=t.substr(0,t.length-1)),e="/"+e,$.stringEndsWith(t,e)||(t+=e),t},t}(),ct=function(){function e(e){return e.results}var t=function(t){if(1!==arguments.length)throw new Error("The JsonResultsAdapter ctor should be called with a single argument that is a configuration object.");Z(t).whereParam("name").isNonEmptyString().whereParam("extractResults").isFunction().isOptional().withDefault(e).whereParam("visitNode").isFunction().applyAll(this),Y._storeObject(this,r._$typeName,this.name)},r=t.prototype;return r._$typeName="JsonResultsAdapter",t}();L.DataService=pt,L.JsonResultsAdapter=ct;var lt=function(){function e(e,t){throw e=k(e,t),new Error(e)}function t(e){switch(e){case _.String:return tt.string;case _.Int64:return tt.int64;case _.Int32:return tt.int32;case _.Int16:return tt.int16;case _.Decimal:return tt.number;case _.Double:return tt.number;case _.Single:return tt.number;case _.DateTime:return tt.date;case _.DateTimeOffset:return tt.date;case _.Boolean:return tt.bool;case _.Guid:return tt.guid;case _.Byte:return tt.byte;case _.Binary:return tt.none;case _.Time:return tt.duration;case _.Undefined:return tt.none}}var r={},n={stringPrefix:"K_",nextNumber:-1,nextNumberIncrement:-1},a=function(){return n.stringPrefix+i().toString()},i=function(){var e=n.nextNumber;return n.nextNumber+=n.nextNumberIncrement,e},o=function(){return T()},s=function(){return new Date},u=function(e){return null==e?e:e.toString()},p=function(e,t){if("string"===t){var r=e.trim();if(""===r)return null;var n=parseInt(r,10);return isNaN(n)?e:n}return"number"===t?Math.round(e):e},c=function(e,t){if("string"===t){var r=e.trim();if(""===r)return null;var n=parseFloat(r);return isNaN(n)?e:n}return e},l=function(e,t){var r;if("string"===t){var n=e.trim();return""===n?null:(r=new Date(Date.parse(n)),N(r)?r:e)}return"number"===t?(r=new Date(e),N(r)?r:e):e},y=function(e,t){if("string"===t){var r=e.trim().toLowerCase();return"false"===r||""===r?!1:"true"===r?!0:e}return e},f=function(e){return null==e?null:"'"+e+"'"},h=function(e){return null==e?null:"string"==typeof e?parseInt(e,10):e},d=function(e){return function(t){return null==t?null:("string"==typeof t&&(t=parseFloat(t)),t+e)}},m=function(t){if(null==t)return null;try{return"datetime'"+t.toISOString()+"'"}catch(r){e("'%1' is not a valid dateTime",t)}},v=function(t){if(null==t)return null;try{return"datetimeoffset'"+t.toISOString()+"'"}catch(r){e("'%1' is not a valid dateTime",t)}},g=function(t){return null==t?null:(A(t)||e("'%1' is not a valid ISO 8601 duration",t),"time'"+t+"'")},E=function(t){return null==t?null:(C(t)||e("'%1' is not a valid guid",t),"guid'"+t+"'")},w=function(e){return null==e?null:"string"==typeof e?"true"===e.trim().toLowerCase():!!e},S=function(e){return null==e?e:"binary'"+e+"'"},P=function(e){return e},_=new H("DataType",r);_.String=_.addSymbol({defaultValue:"",parse:u,fmtOData:f,getNext:a}),_.Int64=_.addSymbol({defaultValue:0,isNumeric:!0,isInteger:!0,quoteJsonOData:!0,parse:p,fmtOData:h,getNext:i}),_.Int32=_.addSymbol({defaultValue:0,isNumeric:!0,isInteger:!0,parse:p,fmtOData:h,getNext:i}),_.Int16=_.addSymbol({defaultValue:0,isNumeric:!0,isInteger:!0,parse:p,fmtOData:h,getNext:i}),_.Byte=_.addSymbol({defaultValue:0,isNumeric:!0,isInteger:!0,parse:p,fmtOData:h}),_.Decimal=_.addSymbol({defaultValue:0,isNumeric:!0,quoteJsonOData:!0,parse:c,fmtOData:d("m"),getNext:i}),_.Double=_.addSymbol({defaultValue:0,isNumeric:!0,parse:c,fmtOData:d("d"),getNext:i}),_.Single=_.addSymbol({defaultValue:0,isNumeric:!0,parse:c,fmtOData:d("f"),getNext:i}),_.DateTime=_.addSymbol({defaultValue:new Date(1900,0,1),isDate:!0,parse:l,fmtOData:m,getNext:s}),_.DateTimeOffset=_.addSymbol({defaultValue:new Date(1900,0,1),isDate:!0,parse:l,fmtOData:v,getNext:s}),_.Time=_.addSymbol({defaultValue:"PT0S",fmtOData:g}),_.Boolean=_.addSymbol({defaultValue:!1,parse:y,fmtOData:w}),_.Guid=_.addSymbol({defaultValue:"00000000-0000-0000-0000-000000000000",fmtOData:E,getNext:o}),_.Binary=_.addSymbol({defaultValue:null,fmtOData:S}),_.Undefined=_.addSymbol({defaultValue:void 0,fmtOData:P}),_.seal(),_.fromEdmDataType=function(e){var t=null,r=e.split(".");if(r.length>1){var n=r[1];t="image"===n?_.Byte:2===r.length?_.fromName(n)||_.Undefined:_.String}return t},_.fromValue=function(e){if(N(e))return _.DateTime;switch(typeof e){case"string":return C(e)?_.Guid:A(e)&&e.length>3?_.Time:_.String;case"boolean":return _.Boolean;case"number":return _.Int32}return _.Undefined};var b=/.\d{3}$/;return _.parseTimeFromServer=function(e){if("string"==typeof e)return e;if(e&&"Edm.Time"===e.__edmType){var t=Math.floor(e.ms/1e3);return"PT"+t+"S"}return e},_.parseDateAsUTC=function(e){if("string"==typeof e){var t=b.test(e);e=t?e+"Z":e}return e=new Date(Date.parse(e))},_.parseDateFromServer=_.parseDateAsUTC,_.constants=n,_.getSymbols().forEach(function(e){e.validatorCtor=t(e)}),_}();L.DataType=lt;var yt=g("Q","See https://github.com/kriskowal/q "),ft=function(){function e(e){var t=[];for(var r in e){var n=e[r];r===n.name&&t.push(e[r])}return t}function t(e,t,r){var a=K(t.shortName,t.namespace),o=e._getEntityType(a,!0);if(o)return r?n(o,t):o;var s={shortName:t.shortName,namespace:t.namespace,isAbstract:t.isAbstract,autoGeneratedKeyType:Et.fromName(t.autoGeneratedKeyType),defaultResourceName:t.defaultResourceName,custom:t.custom};if(o=t.isComplexType?new mt(s):new dt(s),t.baseTypeName){o.baseTypeName=t.baseTypeName;var u=e._getEntityType(t.baseTypeName,!0);u?i(e,t,o,u):v(e._deferredTypes,t.baseTypeName).push({json:t,stype:o})}else i(e,t,o,null);return o}function n(e,t){return t.custom&&(e.custom=t.custom),a(e,t.dataProperties),a(e,t.navigationProperties),e}function a(e,t){t&&t.forEach(function(t){var r=t.name;if(!r){if(!t.nameOnServer)throw new Error("Unable to complete 'importMetadata' - cannot locate a 'name' or 'nameOnServer' for one of the imported property nodes");r=e.metadataStore.namingConvention.serverPropertyNameToClient(t.nameOnServer,{})}if(t.custom){var n=e.getProperty(r,!0);n.custom=t.custom}})}function i(e,t,r,n){t.validators&&(r.validators=t.validators.map(tt.fromJSON)),n&&(r.baseEntityType=n,n.dataProperties.forEach(function(e){var t=new vt(e);t.isInherited=!0,r.addProperty(t)}),n.navigationProperties.forEach(function(e){var t=new gt(e);t.isInherited=!0,r.addProperty(t)})),t.dataProperties.forEach(function(e){r.addProperty(vt.fromJSON(e))});var a=!t.isComplexType;a&&t.navigationProperties&&t.navigationProperties.forEach(function(e){r.addProperty(gt.fromJSON(e))}),e.addEntityType(r);var o=e._deferredTypes,s=o[r.name];s&&(s.forEach(function(t){i(e,t.json,t.stype,r)}),delete o[r.name])}function s(e,t,r){if(V(t))return t;var n=e._shortNameMap[t];if(!n&&r)throw new Error("Unable to locate 'entityTypeName' of: "+t);return n}var u=0,p=function(e){e=e||{},Z(e).whereParam("namingConvention").isOptional().isInstanceOf(Pt).withDefault(Pt.defaultInstance).whereParam("localQueryComparisonOptions").isOptional().isInstanceOf(St).withDefault(St.defaultInstance).applyAll(this),this.dataServices=[],this._resourceEntityTypeMap={},this._structuralTypeMap={},this._shortNameMap={},this._ctorRegistry={},this._incompleteTypeMap={},this._incompleteComplexTypeMap={},this._id=u++},c=p.prototype;return c._$typeName="MetadataStore",p.ANONTYPE_PREFIX="_IB_",c.addDataService=function(e,t){Q(e,"dataService").isInstanceOf(pt).check(),Q(t,"shouldOverwrite").isBoolean().isOptional().check();var r=this._getDataServiceIndex(e.serviceName);if(r>=0){if(!t)throw new Error("A dataService with this name '"+e.serviceName+"' already exists in this MetadataStore");this.dataServices[r]=e}else this.dataServices.push(e)},c._getDataServiceIndex=function(e){return f(this.dataServices,function(t){return t.serviceName===e})},c.addEntityType=function(e){if(e instanceof dt||e instanceof mt||(e=e.isComplexType?new mt(e):new dt(e)),!e.isComplexType&&0===e.keyProperties.length&&!e.isAbstract)throw new Error("Unable to add "+e.name+" to this MetadataStore.  An EntityType must have at least one property designated as a key property - See the 'DataProperty.isPartOfKey' property.");if(e.metadataStore=this,!e.isAnonymous){if(this._structuralTypeMap[e.name])throw new Error("Type "+e.name+" already exists in this MetadataStore.");this._structuralTypeMap[e.name]=e,this._shortNameMap[e.shortName]=e.name}if(e.getProperties().forEach(function(t){e._updateNames(t),t.isUnmapped||e._mappedPropertiesCount++}),e._updateCps(),!e.isComplexType){e._updateNps();var t=e.defaultResourceName||e.baseEntityType&&e.baseEntityType.defaultResourceName;t&&!this.getEntityTypeNameForResourceName(t)&&this.setEntityTypeForResourceName(t,e.name),e.defaultResourceName=t,e.getEntityCtor()}e.baseEntityType&&e.baseEntityType.subtypes.push(e)},c.exportMetadata=function(){var e=JSON.stringify({metadataVersion:L.metadataVersion,namingConvention:this.namingConvention.name,localQueryComparisonOptions:this.localQueryComparisonOptions.name,dataServices:this.dataServices,structuralTypes:r(this._structuralTypeMap),resourceEntityTypeMap:this._resourceEntityTypeMap},null,Y.stringifyPad);return e},c.importMetadata=function(e,r){Q(r,"allowMerge").isOptional().isBoolean().check(),this._deferredTypes={};var n="string"==typeof e?JSON.parse(e):e;if(n.schema)return ht.parse(this,n.schema,n.altMetadata);if(n.metadataVersion&&n.metadataVersion!==L.metadataVersion){var a=k("Cannot import metadata with a different 'metadataVersion' (%1) than the current 'breeze.metadataVersion' (%2) ",n.metadataVersion,L.metadataVersion);throw new Error(a)}var i=n.namingConvention,s=n.localQueryComparisonOptions;if(this.isEmpty())this.namingConvention=Y._fetchObject(Pt,i)||this.namingConvention,this.localQueryComparisonOptions=Y._fetchObject(St,s)||this.localQueryComparisonOptions;else{if(i&&this.namingConvention.name!==i)throw new Error("Cannot import metadata with a different 'namingConvention' from the current MetadataStore");if(s&&this.localQueryComparisonOptions.name!==s)throw new Error("Cannot import metadata with different 'localQueryComparisonOptions' from the current MetadataStore")}var u=this;return n.dataServices&&n.dataServices.forEach(function(e){e=pt.fromJSON(e),u.addDataService(e,!0)}),this._structuralTypeMap,n.structuralTypes&&n.structuralTypes.forEach(function(e){t(u,e,r)}),o(this._resourceEntityTypeMap,n.resourceEntityTypeMap),o(this._incompleteTypeMap,n.incompleteTypeMap),this},p.importMetadata=function(e){var t=new ft;return t.importMetadata(e),t},c.hasMetadataFor=function(e){return!!this.getDataService(e)},c.getDataService=function(e){return Q(e,"serviceName").isString().check(),e=pt._normalizeServiceName(e),y(this.dataServices,function(t){return t.serviceName===e})},c.fetchMetadata=function(e,t,r){if(Q(e,"dataService").isString().or().isInstanceOf(pt).check(),Q(t,"callback").isFunction().isOptional().check(),Q(r,"errorCallback").isFunction().isOptional().check(),"string"==typeof e&&(e=this.getDataService(e)||new pt({serviceName:e})),e=pt.resolve([e]),this.hasMetadataFor(e.serviceName))throw new Error("Metadata for a specific serviceName may only be fetched once per MetadataStore. ServiceName: "+e.serviceName);return e.adapterInstance.fetchMetadata(this,e).then(function(e){return t&&t(e),yt.resolve(e)}).fail(function(e){return r&&r(e),yt.reject(e)})},c.trackUnmappedType=function(e,t){Q(e,"entityCtor").isFunction().check(),Q(t,"interceptor").isFunction().isOptional().check();var r=new dt(this);r._setCtor(e,t)},c.registerEntityTypeCtor=function(e,t,r){Q(e,"structuralTypeName").isString().check(),Q(t,"aCtor").isFunction().isOptional().check(),Q(r,"initializationFn").isOptional().isFunction().or().isString().check();var n=s(this,e,!1),a=n||e;if(this._ctorRegistry[a]={ctor:t,initFn:r},n){var i=this._structuralTypeMap[n];i&&i.getCtor(!0)}},c.toQueryString=function(e){if(!e)throw new Error("query cannot be empty");if("string"==typeof e)return e;if(e instanceof Tt)return e._toUri(this);throw new Error("unable to recognize query parameter as either a string or an EntityQuery")},c.isEmpty=function(){return x(this._structuralTypeMap)},c.getEntityType=function(e,t){return Q(e,"structuralTypeName").isString().check(),Q(t,"okIfNotFound").isBoolean().isOptional().check(!1),this._getEntityType(e,t)},c._getEntityType=function(e,t){var r=s(this,e,!1),n=this._structuralTypeMap[r];if(!n){if(t)return null;var a=k("Unable to locate a 'Type' by the name: '%1'. Be sure to execute a query or call fetchMetadata first.",e);throw new Error(a)}if(n.length){var i=n.join(",");throw new Error("There are multiple types with this 'shortName': "+i)}return n},c.getEntityTypes=function(){return e(this._structuralTypeMap)},c.getIncompleteNavigationProperties=function(){return r(this._incompleteTypeMap,function(e,t){return t})},c.getEntityTypeNameForResourceName=function(e){return Q(e,"resourceName").isString().check(),this._resourceEntityTypeMap[e]},c.setEntityTypeForResourceName=function(e,t){Q(e,"resourceName").isString().check(),Q(t,"entityTypeOrName").isInstanceOf(dt).or().isString().check();var r;r=t instanceof dt?t.name:s(this,t,!0),this._resourceEntityTypeMap[e]=r;var n=this._getEntityType(r,!0);n&&!n.defaultResourceName&&(n.defaultResourceName=e)},c._checkEntityType=function(e){if(!e.entityType){var t=e.prototype._$typeName;if(!t)throw new Error("This entity has not been registered. See the MetadataStore.registerEntityTypeCtor method");var r=this._getEntityType(t);r&&(e.entityType=r)}},p}(),ht=function(){function e(e,r,a){e._entityTypeResourceMap={},l(r).forEach(function(r){if(r.cSpaceOSpaceMapping){var a=JSON.parse(r.cSpaceOSpaceMapping),i={};a.forEach(function(e){i[e[0]]=e[1]}),r.cSpaceOSpaceMapping=i}r.entityContainer&&l(r.entityContainer).forEach(function(t){l(t.entitySet).forEach(function(t){var n=d(t.entityType,r).typeName;e.setEntityTypeForResourceName(t.name,n),e._entityTypeResourceMap[n]=t.name})}),r.complexType&&l(r.complexType).forEach(function(t){n(t,r,e)}),r.entityType&&l(r.entityType).forEach(function(n){t(n,r,e)})});var i=e.getIncompleteNavigationProperties();if(i.length>0)throw new Error("Bad nav properties");return a&&e.importMetadata(a,!0),e}function t(e,t,n){var a=e.name,i=m(a,t),o=new dt({shortName:a,namespace:i,isAbstract:e.abstract&&"true"===e.abstract});if(e.baseType){var s=d(e.baseType,t).typeName;o.baseTypeName=s;var u=n._getEntityType(s,!0);if(u)r(o,e,t,n,u);else{var p=n._deferredTypes[s];p||(p=[],n._deferredTypes[s]=p),p.push({entityType:o,csdlEntityType:e})}}else r(o,e,t,n,null);return o}function r(e,t,n,o,s){var p=[];s&&(e.baseEntityType=s,e.autoGeneratedKeyType=s.autoGeneratedKeyType,p=s.keyProperties.map(a("name")),s.dataProperties.forEach(function(t){var r=new vt(t);r.isInherited=!0,e.addProperty(r)}),s.navigationProperties.forEach(function(t){var r=new gt(t);r.isInherited=!0,e.addProperty(r)}));var c=t.key?l(t.key.propertyRef).map(a("name")):[];c=p.concat(c),l(t.property).forEach(function(t){i(e,t,n,c)}),l(t.navigationProperty).forEach(function(t){u(e,t,n)}),o.addEntityType(e),e.defaultResourceName=o._entityTypeResourceMap[e.name];var y=o._deferredTypes,f=y[e.name];f&&(f.forEach(function(t){r(t.entityType,t.csdlEntityType,n,o,e)}),delete y[e.name])}function n(e,t,r){var n=e.name,a=m(n,t),o=new mt({shortName:n,namespace:a});return l(e.property).forEach(function(e){i(o,e,t)}),r.addEntityType(o),o}function i(e,t,r,n){var a,i=t.type.split(".");return 2===i.length?a=o(e,t,n):p(t,r)?(a=o(e,t,n),a&&(a.enumType=t.type)):a=s(e,t,r),a&&(e.addProperty(a),c(a)),a}function o(e,t,r){var n=lt.fromEdmDataType(t.type);if(null==n)return e.warnings.push("Unable to recognize DataType for property: "+t.name+" DateType: "+t.type),null;var a="true"===t.nullable||null==t.nullable,i=null!=r&&r.indexOf(t.name)>=0;i&&e.autoGeneratedKeyType===Et.None&&f(t)&&(e.autoGeneratedKeyType=Et.Identity);var o=t.maxLength;o=null==o||"Max"===o?null:parseInt(o,10);var s=new vt({nameOnServer:t.name,dataType:n,isNullable:a,isPartOfKey:i,maxLength:o,concurrencyMode:t.concurrencyMode});return n===lt.Undefined&&(s.rawTypeName=t.type),s}function s(e,t,r){var n=d(t.type,r).typeName,a=new vt({nameOnServer:t.name,complexTypeName:n,isNullable:!1});return a}function u(e,t,r){var n=h(t,r),i=y(n.end,function(e){return e.role===t.toRole}),o="*"!==i.multiplicity,s=d(i.type,r).typeName,u=n.referentialConstraint;
if(u){var p,c={nameOnServer:t.name,entityTypeName:s,isScalar:o,associationName:n.name},f=u.principal,m=u.dependent;t.fromRole===f.role?(p=l(f.propertyRef),c.invForeignKeyNamesOnServer=p.map(a("name"))):(p=l(m.propertyRef),c.foreignKeyNamesOnServer=p.map(a("name")));var v=new gt(c);return e.addProperty(v),v}}function p(e,t){if(!t.enumType)return!1;var r=l(t.enumType),n=e.type.split("."),a=n[n.length-1];return r.some(function(e){return e.name===a})}function c(e){var t;if(e.isNullable||e.validators.push(tt.required()),!e.isComplexProperty){if(e.dataType===lt.String)if(e.maxLength){var r={maxLength:e.maxLength};t=tt.maxLength(r)}else t=tt.string();else t=e.dataType.validatorCtor();e.validators.push(t)}}function f(e){var t=y(Object.keys(e),function(e){return e.indexOf("StoreGeneratedPattern")>=0});if(t)return"Identity"===e[t];var r=e.extensions;if(!r)return!1;var n=y(r,function(e){return"StoreGeneratedPattern"===e.name&&"Identity"===e.value});return!!n}function h(e,t){var r=d(e.relationship,t).shortTypeName,n=t.association;if(!n)return null;Array.isArray(n)||(n=[n]);var a=y(n,function(e){return e.name===r});return a}function d(e,t){if(!e)return null;if(M(e,ft.ANONTYPE_PREFIX))return{shortTypeName:e,namespace:"",typeName:e,isAnonymous:!0};var r=e.split(",")[0],n=r.split(".");if(n.length>1){var a,i=n[n.length-1];if(t)a=m(i,t);else{var o=n.slice(0,n.length-1);a=o.join(".")}return{shortTypeName:i,namespace:a,typeName:K(i,a)}}return{shortTypeName:e,namespace:"",typeName:e}}function m(e,t){var r,n=t.cSpaceOSpaceMapping;if(n){var a=n[t.namespace+"."+e];r=a&&a.substr(0,a.length-(e.length+1))}return r||t.namespace}var v=P(function(e){return e&&d(e).typeName});return{parse:e,normalizeTypeName:v}}(),dt=function(){function t(){return function(){}}function r(e){return e.filter(function(e){return!e.isInherited})}function i(e,t,r){var n=r+"OnServer",a=t[r];if(a&&a.length){if(t.isUnmapped)return;var i=l(a).map(function(r){var n=e.clientPropertyNameToServer(r,t),a=e.serverPropertyNameToClient(n,t);if(r!==a)throw new Error("NamingConvention for this client property name does not roundtrip properly:"+r+"-->"+a);return n});t[n]=Array.isArray(a)?i:i[0]}else{var o=t[n];if(!o||0===o.length)return;var s=l(o).map(function(r){var n=e.serverPropertyNameToClient(r,t),a=e.clientPropertyNameToServer(n,t);if(r!==a)throw new Error("NamingConvention for this server property name does not roundtrip properly:"+r+"-->"+a);return n});t[r]=Array.isArray(o)?s:s[0]}}function o(e,t){var r=t._getEntityType(e.complexTypeName,!0);if(!r)return!1;if(!(r instanceof mt))throw new Error("Unable to resolve ComplexType with the name: "+e.complexTypeName+" for the property: "+property.name);return e.dataType=r,e.defaultValue=null,!0}function s(e,t){var r=t._getEntityType(e.entityTypeName,!0);if(!r)return!1;e.entityType=r;var n=y(r.navigationProperties,function(t){return t.associationName===e.associationName&&(t.name!==e.name||t.entityTypeName!==e.entityTypeName)});return e.inverse=n,n||e.invForeignKeyNames.forEach(function(t){var n=r.getDataProperty(t),a=e.parentType;n.inverseNavigationProperty=y(a.navigationProperties,function(e){return e.invForeignKeyNames&&e.invForeignKeyNames.indexOf(n.name)>=0}),u(r.foreignKeyProperties,n)}),c(e),!0}function u(e,t){var r=e.indexOf(t);-1===r&&e.push(t)}function c(e){var t=e.foreignKeyNames;if(0!==t.length){var r=e.parentType,n=t.map(function(e){return r.getDataProperty(e)}),a=r.foreignKeyProperties;n.forEach(function(t){u(a,t),t.relatedNavigationProperty=e,e.relatedDataProperties?e.relatedDataProperties.push(t):e.relatedDataProperties=[t]})}}function f(e,t){var r=e.getPropertyNames(),n=X.getDefaultInstance().getTrackablePropertyNames(t);n.forEach(function(t){if(-1===r.indexOf(t)){var n=new vt({name:t,dataType:lt.Undefined,isNullable:!0,isUnmapped:!0});e.subtypes?e.getSelfAndSubtypes().forEach(function(e){e.addProperty(new vt(n))}):e.addProperty(n)}})}var h=0,d=function(e){if(arguments.length>1)throw new Error("The EntityType ctor has a single argument that is either a 'MetadataStore' or a configuration object.");"MetadataStore"===e._$typeName?(this.metadataStore=e,this.shortName="Anon_"+ ++h,this.namespace="",this.isAnonymous=!0):Z(e).whereParam("shortName").isNonEmptyString().whereParam("namespace").isString().isOptional().withDefault("").whereParam("baseTypeName").isString().isOptional().whereParam("isAbstract").isBoolean().isOptional().withDefault(!1).whereParam("autoGeneratedKeyType").isEnumOf(Et).isOptional().withDefault(Et.None).whereParam("defaultResourceName").isNonEmptyString().isOptional().withDefault(null).whereParam("dataProperties").isOptional().whereParam("navigationProperties").isOptional().whereParam("custom").isOptional().applyAll(this),this.name=K(this.shortName,this.namespace),this.dataProperties=[],this.navigationProperties=[],this.complexProperties=[],this.keyProperties=[],this.foreignKeyProperties=[],this.concurrencyProperties=[],this.unmappedProperties=[],this.validators=[],this.warnings=[],this._mappedPropertiesCount=0,this.subtypes=[],R(this,e.dataProperties,vt),R(this,e.navigationProperties,gt)},m=d.prototype;return m._$typeName="EntityType",m.setProperties=function(e){Z(e).whereParam("autoGeneratedKeyType").isEnumOf(Et).isOptional().whereParam("defaultResourceName").isString().isOptional().whereParam("custom").isOptional().applyAll(this),e.defaultResourceName&&(this.defaultResourceName=e.defaultResourceName)},m.isSubtypeOf=function(e){Q(e,"entityType").isInstanceOf(dt).check();var t=this;do{if(t===e)return!0;t=t.baseEntityType}while(t);return!1},m.getSelfAndSubtypes=function(){var e=[this];return this.subtypes.forEach(function(t){var r=t.getSelfAndSubtypes();e.push.apply(e,r)}),e},m.addProperty=function(e){if(Q(e,"dataProperty").isInstanceOf(vt).or().isInstanceOf(gt).check(),this.metadataStore&&!e.isUnmapped)throw new Error("The '"+this.name+"' EntityType has already been added to a MetadataStore and therefore no additional properties may be added to it.");if(e.parentType){if(e.parentType!==this)throw new Error("This dataProperty has already been added to "+e.parentType.name);return this}return e.parentType=this,e.isDataProperty?this._addDataProperty(e):this._addNavigationProperty(e),this},m.createEntity=function(t){var r=this._createInstanceCore();return t&&e(t,function(e,t){r.setProperty(e,t)}),this._initializeInstance(r),r},m._createInstanceCore=function(){var e=this.getEntityCtor(),t=new e;return new it(t),t},m._initializeInstance=function(e){this.baseEntityType&&this.baseEntityType._initializeInstance(e);var t=this.initializationFn;t&&("string"==typeof t&&(t=e[t]),t(e)),this.complexProperties&&this.complexProperties.forEach(function(t){var r=e.getProperty(t.name);Array.isArray(r)?r.forEach(function(e){t.dataType._initializeInstance(e)}):t.dataType._initializeInstance(r)}),e.entityAspect&&(e.entityAspect._initialized=!0)},m.getCtor=m.getEntityCtor=function(e){if(this._ctor&&!e)return this._ctor;var r=this.metadataStore._ctorRegistry,n=r[this.name]||r[this.shortName]||{},a=n.ctor||this._ctor;if(a&&a.prototype.entityType&&a.prototype.entityType.metadataStore!==this.metadataStore)throw new Error("Cannot register the same constructor for "+this.name+" in different metadata stores.  Please define a separate constructor for each metadata store.");if(n.ctor&&e&&(this._extra=void 0),!a){var i=X.getDefaultInstance().createCtor;a=i?i(this):t()}return this.initializationFn=n.initFn,a.prototype._$typeName=this.name,this._setCtor(a),a},m._setCtor=function(e,t){var r=e.prototype;extra=this._extra||{},this._extra=extra;var n=new e;f(this,n),"EntityType"===this._$typeName?r.entityType=this:r.complexType=this,r._$interceptor=t||j,X.getDefaultInstance().initializeEntityPrototype(r),this._ctor=e},m.addValidator=function(e,t){Q(e,"validator").isInstanceOf(tt).check(),Q(t,"property").isOptional().isString().or().isEntityProperty().check(),t?("string"==typeof t&&(t=this.getProperty(t,!0)),t.validators.push(e)):this.validators.push(e)},m.getProperties=function(){return this.dataProperties.concat(this.navigationProperties)},m.getPropertyNames=function(){return this.getProperties().map(a("name"))},m.getDataProperty=function(e,t){var r=t?"nameOnServer":"name";return y(this.dataProperties,n(r,e))},m.getNavigationProperty=function(e,t){var r=t?"nameOnServer":"name";return y(this.navigationProperties,n(r,e))},m.getProperty=function(e,t){t=t||!1;var r=Array.isArray(e)?e:e.trim().split("."),a=r[0],i=y(this.getProperties(),n("name",a));if(1===r.length){if(i)return i;if(t)throw new Error("unable to locate property: "+a+" on entityType: "+this.name);return null}if(i){r.shift();var o=i.isNavigationProperty?i.entityType:i.dataType;if(o)return o.getProperty(r,t);throw new Error("should not get here - unknown property type for: "+i.name)}if(t)throw new Error("unable to locate property: "+a+" on type: "+this.name);return null},m.toString=function(){return this.name},m.toJSON=function(){return p(this,{shortName:null,namespace:null,baseTypeName:null,isAbstract:!1,autoGeneratedKeyType:null,defaultResourceName:null,dataProperties:r,navigationProperties:r,validators:null,custom:null})},m._clientPropertyPathToServer=function(e){var t=this.metadataStore.namingConvention.clientPropertyNameToServer,r=this,n=e.split(".").map(function(e){var n=r.getProperty(e);return t(e,n)}).join("/");return n},m._updateNames=function(e){var t=this.metadataStore.namingConvention;i(t,e,"name"),e.isNavigationProperty&&(i(t,e,"foreignKeyNames"),i(t,e,"invForeignKeyNames"))},m._checkNavProperty=function(e){if(e.isNavigationProperty){if(e.parentType!==this)throw new Error(k("The navigationProperty '%1' is not a property of entity type '%2'",e.name,this.name));return e}if("string"==typeof e){var t=this.getProperty(e);if(t&&t.isNavigationProperty)return t}throw new Error("The 'navigationProperty' parameter must either be a NavigationProperty or the name of a NavigationProperty")},m._addDataProperty=function(e){this.dataProperties.push(e),e.isPartOfKey&&this.keyProperties.push(e),e.isComplexProperty&&this.complexProperties.push(e),e.concurrencyMode&&"None"!==e.concurrencyMode&&this.concurrencyProperties.push(e),e.isUnmapped&&this.unmappedProperties.push(e)},m._addNavigationProperty=function(e){this.navigationProperties.push(e),V(e.entityTypeName)||(e.entityTypeName=K(e.entityTypeName,this.namespace))},m._updateCps=function(){var e=this.metadataStore,t=e._incompleteComplexTypeMap;this.complexProperties.forEach(function(r){r.complexType||o(r,e)||v(t,r.complexTypeName).push(r)}),this.isComplexType&&((t[this.name]||[]).forEach(function(t){o(t,e)}),delete t[this.name])},m._updateNps=function(){var e=this.metadataStore,t=e._incompleteTypeMap;this.navigationProperties.forEach(function(r){r.entityType||s(r,e)||v(t,r.entityTypeName).push(r)}),(t[this.name]||[]).forEach(function(t){s(t,e)}),delete t[this.name]},d}(),mt=function(){var e=function(e){if(arguments.length>1)throw new Error("The ComplexType ctor has a single argument that is a configuration object.");Z(e).whereParam("shortName").isNonEmptyString().whereParam("namespace").isString().isOptional().withDefault("").whereParam("dataProperties").isOptional().whereParam("isComplexType").isOptional().isBoolean().whereParam("custom").isOptional().isBoolean().applyAll(this),this.name=K(this.shortName,this.namespace),this.isComplexType=!0,this.dataProperties=[],this.complexProperties=[],this.validators=[],this.concurrencyProperties=[],this.unmappedProperties=[],this.navigationProperties=[],this.keyProperties=[],R(this,e.dataProperties,vt)},t=e.prototype;return t.setProperties=function(e){Z(e).whereParam("custom").isOptional().applyAll(this)},t._createInstanceCore=function(e,t){var r=this.getCtor(),n=new r;return new ot(n,e,t),n},t.addProperty=function(e){if(Q(e,"dataProperty").isInstanceOf(vt).check(),this.metadataStore&&!e.isUnmapped)throw new Error("The '"+this.name+"' ComplexType has already been added to a MetadataStore and therefore no additional properties may be added to it.");if(e.parentType){if(e.parentType!==this)throw new Error("This dataProperty has already been added to "+property.parentType.name);return this}return this._addDataProperty(e),this},t.getProperties=function(){return this.dataProperties},t.addValidator=dt.prototype.addValidator,t.getProperty=dt.prototype.getProperty,t.getPropertyNames=dt.prototype.getPropertyNames,t.createInstance=dt.prototype.createEntity,t._addDataProperty=dt.prototype._addDataProperty,t._updateNames=dt.prototype._updateNames,t._updateCps=dt.prototype._updateCps,t._initializeInstance=dt.prototype._initializeInstance,t.getCtor=dt.prototype.getEntityCtor,t._setCtor=dt.prototype._setCtor,t.toJSON=function(){return p(this,{shortName:null,namespace:null,isComplexType:null,dataProperties:null,validators:null,custom:null})},t._$typeName="ComplexType",e}(),vt=function(){var e=function(e){Z(e).whereParam("name").isString().isOptional().whereParam("nameOnServer").isString().isOptional().whereParam("dataType").isEnumOf(lt).isOptional().or().isString().or().isInstanceOf(mt).whereParam("complexTypeName").isOptional().whereParam("isNullable").isBoolean().isOptional().withDefault(!0).whereParam("isScalar").isOptional().withDefault(!0).whereParam("defaultValue").isOptional().whereParam("isPartOfKey").isBoolean().isOptional().whereParam("isUnmapped").isBoolean().isOptional().whereParam("concurrencyMode").isString().isOptional().whereParam("maxLength").isNumber().isOptional().whereParam("validators").isInstanceOf(tt).isArray().isOptional().withDefault([]).whereParam("enumType").isOptional().whereParam("rawTypeName").isOptional().whereParam("custom").isOptional().applyAll(this);var t=!(!this.name&&!this.nameOnServer);if(!t)throw new Error("A DataProperty must be instantiated with either a 'name' or a 'nameOnServer' property");if(this.complexTypeName)this.isComplexProperty=!0,this.dataType=null;else if("string"==typeof this.dataType){var r=lt.fromName(this.dataType);if(!r)throw new Error("Unable to find a DataType enumeration by the name of: "+this.dataType);this.dataType=r}else this.dataType||(this.dataType=lt.String);if(null==this.defaultValue)if(this.isNullable)this.defaultValue=null;else if(this.isComplexProperty);else if(this.dataType===lt.Binary)this.defaultValue="AAAAAAAAJ3U=";else if(this.defaultValue=this.dataType.defaultValue,null==this.defaultValue)throw new Error("A nonnullable DataProperty cannot have a null defaultValue. Name: "+this.name);this.isComplexProperty&&(this.isScalar=null==this.isScalar||this.isScalar===!0)},t=e.prototype;return t._$typeName="DataProperty",t.isDataProperty=!0,t.isNavigationProperty=!1,t.setProperties=function(e){Z(e).whereParam("custom").isOptional().applyAll(this)},t.toJSON=function(){return p(this,{name:null,dataType:function(e){return e&&e.parentEnum?e.name:void 0},complexTypeName:null,isNullable:!0,defaultValue:null,isPartOfKey:!1,isUnmapped:!1,concurrencyMode:null,maxLength:null,validators:null,enumType:null,rawTypeName:null,isScalar:!0,custom:null})},e.fromJSON=function(e){return e.dataType=lt.fromName(e.dataType),e.defaultValue&&e.dataType&&e.dataType.isDate&&(e.defaultValue=new Date(Date.parse(e.defaultValue))),e.validators&&(e.validators=e.validators.map(tt.fromJSON)),new vt(e)},e}(),gt=function(){var e=function(e){Z(e).whereParam("name").isString().isOptional().whereParam("nameOnServer").isString().isOptional().whereParam("entityTypeName").isString().whereParam("isScalar").isBoolean().whereParam("associationName").isString().isOptional().whereParam("foreignKeyNames").isArray().isString().isOptional().withDefault([]).whereParam("foreignKeyNamesOnServer").isArray().isString().isOptional().withDefault([]).whereParam("invForeignKeyNames").isArray().isString().isOptional().withDefault([]).whereParam("invForeignKeyNamesOnServer").isArray().isString().isOptional().withDefault([]).whereParam("validators").isInstanceOf(tt).isArray().isOptional().withDefault([]).whereParam("custom").isOptional().applyAll(this);var t=!(!this.name&&!this.nameOnServer);if(!t)throw new Error("A Navigation property must be instantiated with either a 'name' or a 'nameOnServer' property")},t=e.prototype;return t._$typeName="NavigationProperty",t.isDataProperty=!1,t.isNavigationProperty=!0,t.setProperties=function(e){Z(e).whereParam("custom").isOptional().applyAll(this)},t.toJSON=function(){return p(this,{name:null,entityTypeName:null,isScalar:null,associationName:null,validators:null,foreignKeyNames:null,invForeignKeyNames:null,custom:null})},e.fromJSON=function(e){return e.validators&&(e.validators=e.validators.map(tt.fromJSON)),new gt(e)},e}(),Et=function(){var e=new H("AutoGeneratedKeyType");return e.None=e.addSymbol(),e.Identity=e.addSymbol(),e.KeyGenerator=e.addSymbol(),e.seal(),e}();!function(){function e(e,t){return null==t?!1:void 0!==t.entityType}function t(e,t){return null==t?!1:t.isDataProperty||t.isNavigationProperty}var r=G.prototype;r.isEntity=function(){return this._addContext({fn:e,msg:" must be an entity"})},r.isEntityProperty=function(){return this._addContext({fn:t,msg:" must be either a DataProperty or a NavigationProperty"})}}(),L.MetadataStore=ft,L.EntityType=dt,L.ComplexType=mt,L.DataProperty=vt,L.NavigationProperty=gt,L.AutoGeneratedKeyType=Et,ft.normalizeTypeName=ht.normalizeTypeName;var wt=function(){function e(e,t,r){var n=t.name+".."+t.parentType.name,a=e._tempIdMap[n];return a||r&&(a={entityType:t.parentType,propertyName:t.name,keyMap:{}},e._tempIdMap[n]=a),a}var t=function(){this._tempIdMap={}},r=t.prototype;return r.generateTempKeyValue=function(t,r){var n=t.keyProperties;if(n.length>1)throw new Error("Ids can not be autogenerated for entities with multipart keys");var a,i=n[0],o=e(this,i,!0);if(null!=r&&(o.keyMap[r.toString()]||(a=r)),void 0===a){var s=i.dataType;if(!s.getNext)throw new Error("Cannot use a property with a dataType of: "+s.toString()+" for id generation");for(a=s.getNext(this);null!=o.keyMap[a.toString()];)a=s.getNext(this)}return o.keyMap[a.toString()]=!0,a},r.getTempKeys=function(){var e=[];for(var t in this._tempIdMap){var r=this._tempIdMap[t],n=r.entityType;for(var a in r.keyMap)e.push(new st(n,[a]))}return e},r.isTempKey=function(t){var r=t.entityType.keyProperties;if(r.length>1)return!1;var n=r[0],a=e(this,n);return a?void 0!==a.keyMap[t.values[0].toString()]:!1},Y.registerType(t,"KeyGenerator"),t}();L.KeyGenerator=wt;var St=function(){var e=function(e){Z(e||{}).whereParam("name").isOptional().isString().whereParam("isCaseSensitive").isOptional().isBoolean().whereParam("usesSql92CompliantStringComparison").isBoolean().applyAll(this),this.name||(this.name=T()),Y._storeObject(this,t._$typeName,this.name)},t=e.prototype;return t._$typeName="LocalQueryComparisonOptions",e.caseInsensitiveSQL=new e({name:"caseInsensitiveSQL",isCaseSensitive:!1,usesSql92CompliantStringComparison:!0}),e.defaultInstance=new e(e.caseInsensitiveSQL),t.setAsDefault=function(){return u(this,e)},e}();L.LocalQueryComparisonOptions=St;var Pt=function(){var e=function(e){Z(e||{}).whereParam("name").isOptional().isString().whereParam("serverPropertyNameToClient").isFunction().whereParam("clientPropertyNameToServer").isFunction().applyAll(this),this.name||(this.name=T()),Y._storeObject(this,t._$typeName,this.name)},t=e.prototype;return t._$typeName="NamingConvention",e.none=new e({name:"noChange",serverPropertyNameToClient:function(e){return e},clientPropertyNameToServer:function(e){return e}}),e.camelCase=new e({name:"camelCase",serverPropertyNameToClient:function(e){return e.substr(0,1).toLowerCase()+e.substr(1)},clientPropertyNameToServer:function(e){return e.substr(0,1).toUpperCase()+e.substr(1)}}),e.defaultInstance=new e(e.none),t.setAsDefault=function(){return u(this,e)},e}();L.NamingConvention=Pt;var Tt=function(){function t(r,n,a,i){var o=a._$typeName||a.parentEnum&&a.parentEnum.name,s=o&&o.substr(0,1).toLowerCase()+o.substr(1);if(i&&s!=i)throw new Error("Invalid value for property: "+i);if(s){var u=n[s];if(void 0===u)throw new Error("Invalid config property: "+s);null===u?r[s]=a:u(r,a)}else e(a,function(e,a){t(r,n,a,e)})}function r(e){return Q(e,"propertyPaths").isOptional().isString().or().isArray().isString().check(),"string"==typeof e&&(e=e.split(",")),e=e.map(function(e){return e.trim()})}function n(e){var t=e.entityType,r=t.keyProperties.map(function(t){return Ct.create(t.name,Nt.Equals,e.getProperty(t.name))}),n=Ct.and(r);return n}function a(e,t,n){var a,i=e._clone();return null==t?(i.orderByClause=null,i):(t=r(t),a=Ft.create(t,n),i.orderByClause?i.orderByClause.addClause(a):i.orderByClause=a,i)}function i(e,t){var n=e._clone();return null==t?(n.selectClause=null,n):(t=r(t),n.selectClause=new kt(t),n)}function s(e,t){var n=e._clone();return null==t?(n.expandClause=null,n):(t=r(t),n.expandClause=new It(t),n)}function u(e,t){var r=e._clone();return r.parameters=t,r}function p(e){var t=e.entityType.keyProperties,r=d(t,e.values,function(e,t){return Ct.create(e.name,Nt.Equals,t)}),n=Ct.and(r);return n}function c(e,t){if(t.isScalar){if(0===t.foreignKeyNames.length)return null;var r=t.foreignKeyNames.map(function(t){return e.getProperty(t)}),n=new st(t.entityType,r);return p(n)}var a=t.inverse,i=a?a.foreignKeyNames:t.invForeignKeyNames;if(0===i.length)return null;var o=e.entityAspect.getKey().values,s=d(i,o,function(e,t){return Ct.create(e,Nt.Equals,t)});return Ct.and(s)}var l=function(e){Q(e,"resourceName").isOptional().isString().check(),this.resourceName=e,this.entityType=null,this.wherePredicate=null,this.orderByClause=null,this.selectClause=null,this.skipCount=null,this.takeCount=null,this.expandClause=null,this.parameters={},this.inlineCountEnabled=!1,this.entityManager=null},y=l.prototype;return y._$typeName="EntityQuery",y.from=function(e){Q(e,"resourceName").isString().check();var t=this.resourceName;if(t&&t!==e)throw new Error("This query already has an resourceName - the resourceName may only be set once per query");var r=this._clone();return r.resourceName=e,r},l.from=function(e){return Q(e,"resourceName").isString().check(),new Tt(e)},y.toType=function(e){Q(e,"entityType").isString().or().isInstanceOf(dt).check();var t=this._clone();return t.resultEntityType=e,t},y.where=function(e){var t=this._clone();if(null==e)return t.wherePredicate=null,t;var r;return r=Ct.isPredicate(e)?e:Ct.create(B(arguments)),t.entityType&&r.validate(t.entityType),t.wherePredicate=t.wherePredicate?new xt("and",[t.wherePredicate,r]):r,t},y.orderBy=function(e){return a(this,e)},y.orderByDesc=function(e){return a(this,e,!0)},y.select=function(e){return i(this,e)},y.skip=function(e){Q(e,"count").isOptional().isNumber().check();var t=this._clone();return t.skipCount=null==e?null:e,t},y.top=function(e){return this.take(e)},y.take=function(e){Q(e,"count").isOptional().isNumber().check();var t=this._clone();return t.takeCount=null==e?null:e,t},y.expand=function(e){return s(this,e)},y.withParameters=function(e){return Q(e,"parameters").isObject().check(),u(this,e)},y.inlineCount=function(e){void 0===e&&(e=!0);var t=this._clone();return t.inlineCountEnabled=e,t},y.using=function(e){if(!e)return this;var r=this._clone();return t(r,{entityManager:null,dataService:null,queryOptions:null,fetchStrategy:function(e,t){e.queryOptions=(e.queryOptions||new Kt).using(t)},mergeStrategy:function(e,t){e.queryOptions=(e.queryOptions||new Kt).using(t)},jsonResultsAdapter:function(e,t){e.dataService=(e.dataService||new pt).using({jsonResultsAdapter:t})}},e),r},y.execute=function(e,t){if(!this.entityManager)throw new Error("An EntityQuery must have its EntityManager property set before calling 'execute'");return this.entityManager.executeQuery(this,e,t)},y.executeLocally=function(){if(!this.entityManager)throw new Error("An EntityQuery must have its EntityManager property set before calling 'executeLocally'");return this.entityManager.executeQueryLocally(this)},l.fromEntities=function(e){Q(e,"entities").isEntity().or().isNonEmptyArray().isEntity().check(),Array.isArray(e)||(e=B(arguments));var t=e[0],r=new Tt(t.entityType.defaultResourceName),a=e.map(function(e){return n(e)}),i=Ct.or(a);r=r.where(i);var o=t.entityAspect.entityManager;return o&&(r=r.using(o)),r},l.fromEntityKey=function(e){Q(e,"entityKey").isInstanceOf(st).check();var t=new Tt(e.entityType.defaultResourceName),r=p(e);return t=t.where(r)},l.fromEntityNavigation=function(e,t){Q(e,"entity").isEntity().check(),Q(t,"navigationProperty").isInstanceOf(gt).check();var r=e.entityType._checkNavProperty(t),n=new Tt(r.entityType.defaultResourceName),a=c(e,r);n=n.where(a);var i=e.entityAspect.entityManager;return i&&(n=n.using(i)),n},y._getFromEntityType=function(e,t){var r=this.entityType;if(r)return r;var n=this.resourceName;if(!n)throw new Error("There is no resourceName for this query");if(e.isEmpty()){if(t)throw new Error("There is no metadata available for this query. Are you querying the local cache before you've fetched metadata?");return null}var a=e.getEntityTypeNameForResourceName(n);if(r=a?e._getEntityType(a):this._getToEntityType(e,!0),!r){if(t)throw new Error(k("Cannot find an entityType for resourceName: '%1'.  Consider adding an 'EntityQuery.toType' call to your query or calling the MetadataStore.setEntityTypeForResourceName method to register an entityType for this resourceName.",n));return null}return this.entityType=r,r},y._getToEntityType=function(e,t){return this.resultEntityType instanceof dt?this.resultEntityType:this.resultEntityType?(this.resultEntityType=e._getEntityType(this.resultEntityType,!1),this.resultEntityType):t?null:!this.selectClause&&this._getFromEntityType(e,!1)},y._clone=function(){var e=new Tt;return e.resourceName=this.resourceName,e.entityType=this.entityType,e.wherePredicate=this.wherePredicate,e.orderByClause=this.orderByClause,e.selectClause=this.selectClause,e.skipCount=this.skipCount,e.takeCount=this.takeCount,e.expandClause=this.expandClause,e.inlineCountEnabled=this.inlineCountEnabled,e.parameters=o({},this.parameters),e.queryOptions=this.queryOptions,e.entityManager=this.entityManager,e.dataService=this.dataService,e.resultEntityType=this.resultEntityType,e},y._toUri=function(e){function t(){var e=c.wherePredicate;if(e)return c.entityType&&e.validate(c.entityType),e.toOdataFragment(p)}function r(){return c.inlineCountEnabled?c.inlineCountEnabled?"allpages":"none":void 0}function n(){var e=c.orderByClause;if(e)return c.entityType&&e.validate(c.entityType),e.toOdataFragment(p)}function a(){var e=c.selectClause;if(e)return c.entityType&&e.validate(c.entityType),e.toOdataFragment(p)}function i(){var e=c.expandClause;if(e)return e.toOdataFragment(p)}function o(){var e=c.skipCount;if(e)return e.toString()}function s(){var e=c.takeCount;if(null!=e)return e.toString()}function u(e){var t=[];for(var r in e){var n=e[r];void 0!==n&&(n instanceof Array?n.forEach(function(e){t.push(r+"="+encodeURIComponent(e))}):t.push(r+"="+encodeURIComponent(n)))}return t.length>0?"?"+t.join("&"):""}var p=this._getFromEntityType(e,!1);p||(p=new dt(e));var c=this,l={};l.$filter=t(),l.$orderby=n(),l.$skip=o(),l.$top=s(),l.$expand=i(),l.$select=a(),l.$inlinecount=r();var y=u(l);return this.resourceName+y},y._toFilterFunction=function(e){var t=this.wherePredicate;return t?(t.validate(e),t.toFunction(e)):null},y._toOrderByComparer=function(e){var t=this.orderByClause;return t?t.getComparer(e):null},l}(),_t=function(){var e={toupper:{fn:function(e){return e.toUpperCase()},dataType:lt.String},tolower:{fn:function(e){return e.toLowerCase()},dataType:lt.String},substring:{fn:function(e,t,r){return e.substring(t,r)},dataType:lt.String},substringof:{fn:function(e,t){return t.indexOf(e)>=0},dataType:lt.Boolean},length:{fn:function(e){return e.length},dataType:lt.Int32},trim:{fn:function(e){return e.trim()},dataType:lt.String},concat:{fn:function(e,t){return e.concat(t)},dataType:lt.String},replace:{fn:function(e,t,r){return e.replace(t,r)},dataType:lt.String},startswith:{fn:function(e,t){return M(e,t)},dataType:lt.Boolean},endswith:{fn:function(e,t){return D(e,t)},dataType:lt.Boolean},indexof:{fn:function(e,t){return e.indexOf(t)},dataType:lt.Int32},round:{fn:function(e){return Math.round(e)},dataType:lt.Int32},ceiling:{fn:function(e){return Math.ceil(e)},dataType:lt.Int32},floor:{fn:function(e){return Math.floor(e)},dataType:lt.Int32},second:{fn:function(e){return e.second},dataType:lt.Int32},minute:{fn:function(e){return e.minute},dataType:lt.Int32},day:{fn:function(e){return e.day},dataType:lt.Int32},month:{fn:function(e){return e.month},dataType:lt.Int32},year:{fn:function(e){return e.year},dataType:lt.Int32}};return e}(),bt=function(){function e(e){var t=e.split(".");return 1===t.length?function(t){return t.getProperty(e)}:function(e){return q(e,t)}}var t=/^[a-z_][\w.$]*$/i,r=/('[^']*'|[^,]+)/g,n=/("[^"]*"|[^,]+)/g,a=function(a,i,o){var s=a.split(":");if(this.isRealNode=!0,1===s.length){var u=s[0].trim();this.value=u;var p=u.substr(0,1),c="'"===p||'"'===p;if(c){var l=u.substr(1,u.length-2);this.fn=function(){return l},this.dataType=lt.String}else{var y=t.test(u);if(y){if(o&&null==o.getProperty(u,!1))return this.isRealNode=!1,void 0;this.propertyPath=u,this.fn=e(u)}else{if(o)return this.isRealNode=!1,void 0;this.fn=function(){return u},this.dataType=lt.fromValue(u)}}}else try{this.fnName=s[0].trim().toLowerCase();var f=_t[this.fnName];this.localFn=f.fn,this.dataType=f.dataType;var h=this;this.fn=function(e){var t=h.fnNodes.map(function(t){var r=t.fn(e);return r}),r=h.localFn.apply(null,t);return r};var d=i[s[1]].trim();"("===d.substr(0,1)&&(d=d.substr(1,d.length-2));var m=a.indexOf("'")>=0?r:n,v=d.match(m);this.fnNodes=v.map(function(e){return new bt(e,i)})}catch(g){this.isRealNode=!1}},i=a.prototype;return a.create=function(e,t,r){if("string"!=typeof e)return null;for(var n,a=/\([^()]*\)/,i=[],o=0;n=a.exec(e);){var s=n[0];i.push(s);var u=":"+o++;e=e.replace(s,u)}var p=new bt(e,i,r?null:t);return p.isRealNode?(!p.dataType&&r&&r.isStringFn&&(p.dataType=lt.String),p._validate(t),p):null},i.toString=function(){if(this.fnName){var e=this.fnNodes.map(function(e){return e.toString()}),t=this.fnName+"("+e.join(",")+")";return t}return this.value},i.toOdataFragment=function(e){if(this._validate(e),this.fnName){var t=this.fnNodes.map(function(t){return t.toOdataFragment(e)}),r=this.fnName+"("+t.join(",")+")";return r}var n=this.value.substr(0,1);return"'"===n||'"'===n?this.value:this.value==this.propertyPath?e._clientPropertyPathToServer(this.propertyPath):this.value},i._validate=function(e){if(!this.isValidated)if(this.isValidated=!0,this.propertyPath){if(e.isAnonymous)return;var t=e.getProperty(this.propertyPath,!0);if(!t){var r=k("Unable to resolve propertyPath.  EntityType: '%1'   PropertyPath: '%2'",e.name,this.propertyPath);throw new Error(r)}this.dataType=t.isDataProperty?t.dataType:t.entityType}else this.fnNodes&&this.fnNodes.forEach(function(t){t._validate(e)})},a}(),Nt=function(){var e=new H("FilterQueryOp");return e.Equals=e.addSymbol({operator:"eq",aliases:["=="]}),e.NotEquals=e.addSymbol({operator:"ne",aliases:["!="]}),e.GreaterThan=e.addSymbol({operator:"gt",aliases:[">"]}),e.LessThan=e.addSymbol({operator:"lt",aliases:["<"]}),e.GreaterThanOrEqual=e.addSymbol({operator:"ge",aliases:[">="]}),e.LessThanOrEqual=e.addSymbol({operator:"le",aliases:["<="]}),e.Contains=e.addSymbol({operator:"substringof",isFunction:!0,isStringFn:!0}),e.StartsWith=e.addSymbol({operator:"startswith",isFunction:!0,isStringFn:!0}),e.EndsWith=e.addSymbol({operator:"endswith",isFunction:!0,isStringFn:!0}),e.IsTypeOf=e.addSymbol({operator:"isof",isFunction:!0,aliases:["isTypeOf"]}),e.seal(),e._map=function(){var t={};return e.getSymbols().forEach(function(e){t[e.name.toLowerCase()]=e,t[e.operator.toLowerCase()]=e,e.aliases&&e.aliases.forEach(function(r){t[r.toLowerCase()]=e})}),t}(),e.from=function(t){return e.contains(t)?t:e._map[t.toLowerCase()]},e}(),Ot=function(){var e=new H("BooleanQueryOp");return e.And=e.addSymbol({operator:"and",aliases:["&&"]}),e.Or=e.addSymbol({operator:"or",aliases:["||"]}),e.Not=e.addSymbol({operator:"not",aliases:["~","!"]}),e.seal(),e._map=function(){var t={};
return e.getSymbols().forEach(function(e){t[e.name.toLowerCase()]=e,t[e.operator.toLowerCase()]=e,e.aliases&&e.aliases.forEach(function(r){t[r.toLowerCase()]=e})}),t}(),e.from=function(t){return e.contains(t)?t:e._map[t.toLowerCase()]},e}(),Ct=function(){function e(e){var t;if(1===e.length&&Array.isArray(e[0]))t=e[0];else{var t=B(e);Ct.isPredicate(t[0])||(t=[Ct.create(t)])}return t.filter(function(e){return null!=e})}var t=function(e,t,r){return arguments[0].prototype===!0?this:new At(e,t,r)},r=t.prototype;return t.isPredicate=function(e){return e instanceof Ct},t.create=function(e,t,r){return Array.isArray(e)?new At(e[0],e[1],e[2]):new At(e,t,r)},t.and=function(t){return t=e(arguments),0===t.length?null:1===t.length?t[0]:new xt("and",t)},t.or=function(t){return t=e(arguments),0===t.length?null:1===t.length?t[0]:new xt("or",t)},t.not=function(e){return new xt("not",[e])},r.and=function(r){return r=e(arguments),r.unshift(this),t.and(r)},r.or=function(r){return r=e(arguments),r.unshift(this),t.or(r)},r.not=function(){return new xt("not",[this])},t}(),At=function(){function e(e,i,o){var s,u=e.metadataStore.localQueryComparisonOptions,p=z(o);switch(i){case Nt.Equals:s=function(e,r){return e&&"string"==typeof e?t(e,r,u):p(e)==p(r)};break;case Nt.NotEquals:s=function(e,r){return e&&"string"==typeof e?!t(e,r,u):p(e)!=p(r)};break;case Nt.GreaterThan:s=function(e,t){return p(e)>p(t)};break;case Nt.GreaterThanOrEqual:s=function(e,t){return p(e)>=p(t)};break;case Nt.LessThan:s=function(e,t){return p(e)<p(t)};break;case Nt.LessThanOrEqual:s=function(e,t){return p(e)<=p(t)};break;case Nt.StartsWith:s=function(e,t){return r(e,t,u)};break;case Nt.EndsWith:s=function(e,t){return n(e,t,u)};break;case Nt.Contains:s=function(e,t){return a(e,t,u)};break;default:throw new Error("Unknown FilterQueryOp: "+i)}return s}function t(e,t,r){return null==t?!1:("string"!=typeof t&&(t=t.toString()),r.usesSql92CompliantStringComparison&&(e=(e||"").trim(),t=(t||"").trim()),r.isCaseSensitive||(e=(e||"").toLowerCase(),t=(t||"").toLowerCase()),e===t)}function r(e,t,r){return r.isCaseSensitive||(e=(e||"").toLowerCase(),t=(t||"").toLowerCase()),M(e,t)}function n(e,t,r){return r.isCaseSensitive||(e=(e||"").toLowerCase(),t=(t||"").toLowerCase()),D(e,t)}function a(e,t,r){return r.isCaseSensitive||(e=(e||"").toLowerCase(),t=(t||"").toLowerCase()),e.indexOf(t)>=0}var i=function(e,t,r){if(Q(e,"propertyOrExpr").isString().isOptional().check(),3!=arguments.length||null==t)return this._odataExpr=e,void 0;if(Q(t,"operator").isEnumOf(Nt).or().isString().check(),Q(r,"value").isRequired(!0).check(),this._filterQueryOp=Nt.from(t),!this._filterQueryOp)throw new Error("Unknown query operation: "+t);if(e)this._propertyOrExpr=e;else if(this._filterQueryOp!==Nt.IsTypeOf)throw new Error("propertyOrExpr cannot be null except when using the 'IsTypeOf' operator");null!=r&&"object"==typeof r&&void 0!==r.value?(this._dataType=r.dataType||lt.fromValue(r.value),this._value=r.value,this._isLiteral=r.isLiteral):(this._dataType=lt.fromValue(r),this._value=r,this._isLiteral=void 0)},o=new Ct({prototype:!0});return i.prototype=o,o.toOdataFragment=function(e){if(this._odataExpr)return this._odataExpr;if(this._filterQueryOp==Nt.IsTypeOf){var t=e.metadataStore.getEntityType(this._value),r=t.namespace+"."+t.shortName;return this._filterQueryOp.operator+"("+lt.String.fmtOData(r)+")"}this.validate(e);var n,a=this._fnNode1&&this._fnNode1.toOdataFragment(e);if(this._fnNode2)n=this._fnNode2.toOdataFragment(e);else{var i=this._fnNode1.dataType||this._dataType;n=i.fmtOData(this._value)}return this._filterQueryOp.isFunction?this._filterQueryOp==Nt.Contains?this._filterQueryOp.operator+"("+n+","+a+") eq true":this._filterQueryOp.operator+"("+a+","+n+") eq true":a+" "+this._filterQueryOp.operator+" "+n},o.toFunction=function(t){if(this._odataExpr)throw new Exception("OData predicateexpressions cannot be interpreted locally");this.validate(t);var r=this._fnNode1.dataType||this._dataType,n=e(t,this._filterQueryOp,r),a=this._fnNode1.fn;if(this._fnNode2){var i=this._fnNode2.fn;return function(e){return n(a(e),i(e))}}var o=this._value;return function(e){return n(a(e),o)}},o.toString=function(){return k("{%1} %2 {%3}",this._propertyOrExpr,this._filterQueryOp.operator,this._value)},o.validate=function(e){void 0===this._fnNode1&&this._propertyOrExpr&&(this._fnNode1=bt.create(this._propertyOrExpr,e,this._filterQueryOp),this.dataType=this._fnNode1.dataType),void 0!==this._fnNode2||this._isLiteral||(this._fnNode2=bt.create(this._value,e))},i}(),xt=function(){function e(e,t,r){var n,a;switch(t){case Ot.Not:return n=r[0].toFunction(e),function(e){return!n(e)};case Ot.And:return a=r.map(function(t){return t.toFunction(e)}),function(e){var t=a.reduce(function(t,r){return t&&r(e)},!0);return t};case Ot.Or:return a=r.map(function(t){return t.toFunction(e)}),function(e){var t=a.reduce(function(t,r){return t||r(e)},!1);return t};default:throw new Error("Invalid boolean operator:"+t)}}var t=function(e,t){if(!Array.isArray(t))throw new Error("predicates parameter must be an array");if(this._booleanQueryOp=Ot.from(e),!this._booleanQueryOp)throw new Error("Unknown query operation: "+e);if(this._booleanQueryOp===Ot.Not&&1!==t.length)throw new Error("Only a single predicate can be passed in with the 'Not' operator");this._predicates=t},r=new Ct({prototype:!0});return t.prototype=r,r.toOdataFragment=function(e){if(1==this._predicates.length)return this._booleanQueryOp.operator+" "+"("+this._predicates[0].toOdataFragment(e)+")";var t=this._predicates.map(function(t){return"("+t.toOdataFragment(e)+")"}).join(" "+this._booleanQueryOp.operator+" ");return t},r.toFunction=function(t){return e(t,this._booleanQueryOp,this._predicates)},r.toString=function(){if(1==this._predicates.length)return this._booleanQueryOp.operator+" "+"("+this._predicates[0]+")";var e=this._predicates.map(function(e){return"("+e.toString()+")"}).join(" "+this._booleanQueryOp.operator+" ");return e},r.validate=function(e){this._isValidated||(this._predicates.every(function(t){t.validate(e)}),this._isValidated=!0)},t}(),Ft=function(){var e=function(t,r){return t.prototype===!0?this:e.create(t,r)},t=e.prototype;return e.create=function(e,t){if(e.length>1){var r=e.map(function(e){return new Mt(e,t)});return new Dt(r)}return new Mt(e[0],t)},e.combine=function(e){return new Dt(e)},e.isOrderByClause=function(e){return e instanceof Ft},t.addClause=function(e){return new Dt([this,e])},e}(),Mt=function(){var e=function(e,t){if("string"!=typeof e)throw new Error("propertyPath is not a string");e=e.trim();var r=e.split(" ");if(r.length>1&&t!==!0&&t!==!1&&(t=M(r[1].toLowerCase(),"desc"),!t)){var n=M(r[1].toLowerCase(),"asc");if(!n)throw new Error("the second word in the propertyPath must begin with 'desc' or 'asc'")}this.propertyPath=r[0],this.isDesc=t},t=new Ft({prototype:!0});return e.prototype=t,t.validate=function(e){e&&(this.lastProperty=e.getProperty(this.propertyPath,!0))},t.toOdataFragment=function(e){return e._clientPropertyPathToServer(this.propertyPath)+(this.isDesc?" desc":"")},t.getComparer=function(e){if(this.lastProperty||this.validate(e),this.lastProperty)var t=this.lastProperty.dataType,r=this.lastProperty.parentType.metadataStore.localQueryComparisonOptions.isCaseSensitive;var n=this.propertyPath,a=this.isDesc;return function(e,i){var o=q(e,n),s=q(i,n),u=t||o&&lt.fromValue(o)||lt.fromValue(s);if(u===lt.String)r?(o=o||"",s=s||""):(o=(o||"").toLowerCase(),s=(s||"").toLowerCase());else{var p=z(u);o=p(o),s=p(s)}return o===s?0:o>s||void 0===s?a?-1:1:a?1:-1}},e}(),Dt=function(){var e=function(e){var t=[];e.forEach(function(e){if(e instanceof Dt)t=t.concat(e.orderByClauses);else{if(!(e instanceof Mt))throw new Error("Invalid argument to CompositeOrderByClause ctor.");t.push(e)}}),this._orderByClauses=t},t=new Ft({prototype:!0});return e.prototype=t,t.validate=function(e){this._orderByClauses.forEach(function(t){t.validate(e)})},t.toOdataFragment=function(e){var t=this._orderByClauses.map(function(t){return t.toOdataFragment(e)});return t.join(",")},t.getComparer=function(e){var t=this._orderByClauses.map(function(t){return t.getComparer(e)});return function(e,r){for(var n=0;n<t.length;n++){var a=t[n](e,r);if(0!==a)return a}return 0}},e}(),kt=function(){var e=function(e){this.propertyPaths=e,this._pathNames=e.map(function(e){return e.replace(".","_")})},t=e.prototype;return t.validate=function(e){e&&this.propertyPaths.forEach(function(t){e.getProperty(t,!0)})},t.toOdataFragment=function(e){var t=this.propertyPaths.map(function(t){return e._clientPropertyPathToServer(t)}).join(",");return t},t.toFunction=function(){var e=this;return function(t){var r={};return e.propertyPaths.forEach(function(n,a){r[e._pathNames[a]]=q(t,n)}),r}},e}(),It=function(){var e=function(e){this.propertyPaths=e},t=e.prototype;return t.toOdataFragment=function(e){var t=this.propertyPaths.map(function(t){return e._clientPropertyPathToServer(t)}).join(",");return t},e}();L.FilterQueryOp=Nt,L.Predicate=Ct,L.EntityQuery=Tt,L.FnNode=bt,L.OrderByClause=Ft;var jt=function(){var e=new H("MergeStrategy");return e.PreserveChanges=e.addSymbol(),e.OverwriteChanges=e.addSymbol(),e.seal(),e}(),Vt=function(){var e=new H("FetchStrategy");return e.FromServer=e.addSymbol(),e.FromLocalCache=e.addSymbol(),e.seal(),e}(),Kt=function(){function e(e,t){return t&&Z(t).whereParam("fetchStrategy").isEnumOf(Vt).isOptional().whereParam("mergeStrategy").isEnumOf(jt).isOptional().applyAll(e),e}var t=function(t){e(this,t)},r=t.prototype;return r._$typeName="QueryOptions",t.resolve=function(e){return new Kt(c(e,["fetchStrategy","mergeStrategy"]))},t.defaultInstance=new t({fetchStrategy:Vt.FromServer,mergeStrategy:jt.PreserveChanges}),r.using=function(t){if(!t)return this;var r=new Kt(this);return jt.contains(t)?t={mergeStrategy:t}:Vt.contains(t)&&(t={fetchStrategy:t}),e(r,t)},r.setAsDefault=function(){return u(this,t)},r.toJSON=function(){return p(this,{fetchStrategy:null,mergeStrategy:null})},t.fromJSON=function(e){return new Kt({fetchStrategy:Vt.fromName(e.fetchStrategy),mergeStrategy:jt.fromName(e.mergeStrategy)})},t}();L.QueryOptions=Kt,L.FetchStrategy=Vt,L.MergeStrategy=jt;var Rt=function(){function e(e){if(e){if(1===e.length){var t=e[0];return function(e){return e?e.entityAspect.entityState===t:!1}}return function(t){return t?e.some(function(e){return t.entityAspect.entityState===e}):!1}}return function(e){return!!e}}var t=e([ut.Added,ut.Modified,ut.Deleted]),r=function(e,t){this.entityManager=e,this.entityType=t,this._indexMap={},this._entities=[],this._emptyIndexes=[]},n=r.prototype;return n.attachEntity=function(e,t){var r,n=e.entityAspect;n._initialized||this.entityType._initializeInstance(e),delete n._initialized;var a=n.getKey()._keyInGroup;if(r=this._indexMap[a],r>=0){if(this._entities[r]===e)return n.entityState=t,e;throw new Error("This key is already attached: "+n.getKey())}return 0===this._emptyIndexes.length?r=this._entities.push(e)-1:(r=this._emptyIndexes.pop(),this._entities[r]=e),this._indexMap[a]=r,n.entityState=t,n.entityGroup=this,n.entityManager=this.entityManager,e},n.detachEntity=function(e){var t=e.entityAspect,r=t.getKey()._keyInGroup,n=this._indexMap[r];if(void 0===n)throw new Error("internal error - entity cannot be found in group");return delete this._indexMap[r],this._emptyIndexes.push(n),this._entities[n]=null,e},n.findEntityByKey=function(e){var t;t=e instanceof st?e._keyInGroup:st.createKeyString(e);var r=this._indexMap[t];return void 0!==r?this._entities[r]:null},n.hasChanges=function(){return this._entities.some(t)},n.getEntities=function(t){var r=e(t);return this._entities.filter(r)},n._clear=function(){this._entities.forEach(function(e){null!=e&&e.entityAspect._detach()}),this._entities=null,this._indexMap=null,this._emptyIndexes=null},n._fixupKey=function(e,t){var r=this._indexMap[e];if(void 0===r)throw new Error("Internal Error in key fixup - unable to locate entity");var n=this._entities[r],a=n.entityType.keyProperties[0].name;n.setProperty(a,t),delete n.entityAspect.hasTempKey,delete this._indexMap[e],this._indexMap[t]=r},n._replaceKey=function(e,t){var r=this._indexMap[e._keyInGroup];delete this._indexMap[e._keyInGroup],this._indexMap[t._keyInGroup]=r},r}(),qt=function(){function t(e,t,r){var n=r?Kt.defaultInstance:e.queryOptions,a=r?zt.defaultInstance:e.saveOptions,i=r?nt.defaultInstance:e.validationOptions,o=Z(t).whereParam("serviceName").isOptional().isString().whereParam("dataService").isOptional().isInstanceOf(pt).whereParam("queryOptions").isInstanceOf(Kt).isOptional().withDefault(n).whereParam("saveOptions").isInstanceOf(zt).isOptional().withDefault(a).whereParam("validationOptions").isInstanceOf(nt).isOptional().withDefault(i).whereParam("keyGeneratorCtor").isFunction().isOptional();r&&(o=o.whereParam("metadataStore").isInstanceOf(ft).isOptional().withDefault(new ft)),o.applyAll(e),s(e.queryOptions,n),s(e.saveOptions,a),s(e.validationOptions,i),t.serviceName&&(e.dataService=new pt({serviceName:e.serviceName})),e.serviceName=e.dataService&&e.dataService.serviceName,e.keyGeneratorCtor=e.keyGeneratorCtor||wt,(r||t.keyGeneratorCtor)&&(e.keyGenerator=new e.keyGeneratorCtor)}function r(t){t.forEach(function(t){var r=[],n=t.entityAspect._validationErrors;e(n,function(e,t){t.isServerError&&r.push(e)}),0!==r.length&&(r.forEach(function(e){delete n[e]}),t.hasValidationErrors=!x(n))})}function n(t){var r=[];return t.forEach(function(t){e(t.entityAspect._validationErrors,function(e,n){r.push({entity:t,errorName:n.validator.name,errorMessage:n.errorMessage,propertyName:n.propertyName,isServerError:n.isServerError})})}),r}function a(e,t){var r=t.entityErrors;if(r){var n=e.entityManager,a=n.metadataStore;t.entityErrors=r.map(function(e){var t=null;if(e.keyValues){var r=a._getEntityType(e.entityTypeName),i=new st(r,e.keyValues);t=n.findEntityByKey(i)}if(t){var o=e.propertyName?{propertyName:e.propertyName,property:r.getProperty(e.propertyName)}:{},s=rt.getKey(e.errorName||e.errorMessage,e.propertyName),u=new rt(null,o,e.errorMessage,s);u.isServerError=!0,t.entityAspect.addValidationError(u)}var p={entity:t,errorName:e.errorName,errorMessage:e.errorMessage,propertyName:e.propertyName,isServerError:!0};return p})}}function o(e,t){if(e.length!==t.length)return!1;for(var r=0,n=e.length;n>r;r++)if(e[r]!==t[r])return!1;return!0}function u(e,t){return Q(t,"entityTypes").isString().isOptional().or().isNonEmptyArray().isString().or().isInstanceOf(dt).or().isNonEmptyArray().isInstanceOf(dt).check(),"string"==typeof t?t=e.metadataStore._getEntityType(t,!1):Array.isArray(t)&&"string"==typeof t[0]&&(t=t.map(function(t){return e.metadataStore._getEntityType(t,!1)})),t}function p(e,t,r){var n,a=C(e,t);return a.forEach(function(e){if(e){var t=e.getEntities(r);n?n.push.apply(n,t):n=t}}),n||[]}function c(e,t){if(t[0]instanceof st)return{entityKey:t[0],remainingArgs:B(t,1)};if("string"==typeof t[0]&&t.length>=2){var r=e.metadataStore._getEntityType(t[0],!1);return{entityKey:new st(r,t[1]),remainingArgs:B(t,2)}}throw new Error("This method requires as its initial parameters either an EntityKey or an entityType name followed by a value or an array of values.")}function l(e,t){e.forEach(function(e){e.entityAspect.isBeingSaved=t})}function f(t,r){var n;r?(n={},r.forEach(function(e){var t=n[e.entityType.name];t||(t={},t.entityType=e.entityType,t._entities=[],n[e.entityType.name]=t),t._entities.push(e)})):n=t._entityGroupMap;var a=[],i={};return e(n,function(e,t){i[e]=m(t,a)}),{entityGroupMap:i,tempKeys:a}}function m(e,t){var r={},n=e.entityType,a=n.dataProperties,i=[];return e._entities.forEach(function(e){if(e){var r=g(e,a,t);i.push(r)}}),r.entities=i,r}function g(e,t,r){var n={};t.forEach(function(t){var r=t.name,a=e.getProperty(r);if(null!=a||null!=t.defaultValue)if(a&&a.complexType){var i=t.dataType.dataProperties;n[r]=Array.isArray(a)?0==a.length?[]:a.map(function(e){return g(e,i)}):g(a,i)}else n[r]=a});var a,i;if(e.entityAspect){a=e.entityAspect;var o=a.entityState;i={tempNavPropNames:E(a,r),entityState:o.name},(o.isModified()||o.isDeleted())&&(i.originalValuesMap=a.originalValues),n.entityAspect=i}else a=e.complexAspect,i={},a.originalValues&&!x(a.originalValues)&&(i.originalValuesMap=a.originalValues),n.complexAspect=i;return n}function E(e,t){var r=e.entity;e.hasTempKey&&t.push(e.getKey().toJSON());var n;return r.entityType.navigationProperties.forEach(function(e){if(e.relatedDataProperties){var t=r.getProperty(e.name);t&&t.entityAspect.hasTempKey&&(n=n||[],n.push(e.name))}}),n}function P(e,t,r){var n=r.tempKeyMap,a=e.entityType,i=r.mergeStrategy===jt.OverwriteChanges,o=null,s=a.dataProperties;a.keyProperties;var u=e.entityManager,p=u.entityChanged,c=[];return t.entities.forEach(function(t){var r,l=t.entityAspect,y=U(t,a,!0),f=ut.fromName(l.entityState);if(f.isAdded()?(r=n[y.toString()],o=void 0===r?e.findEntityByKey(y):null):o=e.findEntityByKey(y),o){var h=o.entityAspect.entityState.isUnchanged();i||h?(z(o,t,s,!0),p.publish({entityAction:at.MergeOnImport,entity:o}),h?f.isUnchanged()||u._notifyStateChange(o,!0):f.isUnchanged()&&u._notifyStateChange(o,!1)):(c.push(o),o=null)}else o=a._createInstanceCore(),z(o,t,s,!0),void 0!==r&&(o.setProperty(a.keyProperties[0].name,r.values[0]),l.tempNavPropNames&&l.tempNavPropNames.forEach(function(e){var t=a.getNavigationProperty(e),r=t.relatedDataProperties[0].name,i=o.getProperty(r),s=new st(t.entityType,[i]),u=n[s.toString()];o.setProperty(r,u.values[0])})),o=e.attachEntity(o,f),p&&(p.publish({entityAction:at.AttachOnImport,entity:o}),f.isUnchanged()||u._notifyStateChange(o,!0));o&&(o.entityAspect.entityState=f,f.isModified()&&(o.entityAspect.originalValuesMap=l.originalValues),c.push(o))}),c}function _(e,t,r){return e=e.then(function(e){return t&&t(e),yt.resolve(e)}).fail(function(e){return r&&r(e),yt.reject(e)})}function b(e,t){var r;return r=t?t.filter(function(t){if(t.entityAspect.entityManager!==e)throw new Error("Only entities in this entityManager may be saved");return!t.entityAspect.entityState.isDetached()}):e.getChanges()}function O(e,t){e._inKeyFixup=!0,t.forEach(function(t){var r=e._entityGroupMap[t.entityTypeName];if(!r)throw new Error("Unable to locate the following fully qualified EntityType name: "+t.entityTypeName);r._fixupKey(t.tempValue,t.realValue)}),e._inKeyFixup=!1}function C(e,t){function r(){return new Error("The EntityManager.getChanges() 'entityTypes' parameter must be either an entityType or an array of entityTypes or null")}var n=e._entityGroupMap;if(t){if(t instanceof dt)return[n[t.name]];if(Array.isArray(t))return t.map(function(e){if(e instanceof dt)return n[e.name];throw r()});throw r()}return i(n)}function A(e,t){var r=t.entityAspect.getKey(),n=d(t.entityType.keyProperties,r.values,function(e,t){return e.defaultValue===t?e:null}).filter(function(e){return null!==e});if(n.length)if(t.entityType.autoGeneratedKeyType!==Et.None)e.generateTempKeyValue(t);else if(n.length===r.values.length)throw new Error("Cannot attach an object to an EntityManager without first setting its key or setting its entityType 'AutoGeneratedKeyType' property to something other than 'None'")}function F(e,t){function r(){return new Error("The EntityManager.getChanges() 'entityStates' parameter must either be null, an entityState or an array of entityStates")}if(!t)return null;if(ut.contains(t))t=[t];else{if(!Array.isArray(t))throw r();t.forEach(function(e){if(!ut.contains(e))throw r()})}return t}function M(e,t,r){var n=gt(e,t.entityType);n.attachEntity(t,r),e._linkRelatedEntities(t)}function D(e,t,r){var n=t.entityType.navigationProperties;n.forEach(function(n){var a=t.getProperty(n.name);if(n.isScalar){if(!a)return;e.attachEntity(a,r)}else a.forEach(function(t){e.attachEntity(t,r)})})}function k(e,t,r,n){try{var a=e.metadataStore;if(a.isEmpty()&&n.hasServerMetadata)throw new Error("cannot execute _executeQueryCore until metadataStore is populated.");if(r.fetchStrategy===Vt.FromLocalCache)return yt.fcall(function(){var r=e.executeQueryLocally(t);return{results:r,query:t}});var i=n.makeUrl(a.toQueryString(t)),o={url:i,query:t,entityManager:e,dataService:n,queryOptions:r,refMap:{},deferredFns:[]},s=e.validationOptions.validateOnQuery;return n.adapterInstance.executeQuery(o).then(function(r){var a=S(function(){var t={isLoading:e.isLoading};return e.isLoading=!0,e._pendingPubs=[],t},function(r){e.isLoading=r.isLoading,e._pendingPubs.forEach(function(e){e()}),e._pendingPubs=null,t=null,o=null,r.error&&yt.reject(r.error)},function(){var a=n.jsonResultsAdapter.extractResults(r);Array.isArray(a)||(a=null==a?[]:[a]);var i=a.map(function(e){var t=I(e,o,{nodeType:"root"});return s&&t.entityAspect&&t.entityAspect.validateEntity(),t});return o.deferredFns.length>0&&o.deferredFns.forEach(function(e){e()}),{results:i,query:t,entityManager:e,httpResponse:r.httpResponse,inlineCount:r.inlineCount}});return yt.resolve(a)}).fail(function(r){return r&&(r.query=t,r.entityManager=e),yt.reject(r)})}catch(u){return u&&(u.query=t),yt.reject(u)}}function I(e,t,r){if(null==t.query&&e.entityAspect)return e.entityAspect.entityState.isDeleted()?t.entityManager.detachEntity(e):e.entityAspect.acceptChanges(),e;r=r||{};var n=t.dataService.jsonResultsAdapter.visitNode(e,t,r)||{};return e=n.node||e,t.query&&"root"===r.nodeType&&!n.entityType&&(n.entityType=t.query._getToEntityType&&t.query._getToEntityType(t.entityManager.metadataStore)),j(e,t,n)}function j(e,t,r,n){if(r.ignore||null==e)return null;if(r.nodeRefId){var a=V(r.nodeRefId,t);return"function"==typeof a&&null!=n?(t.deferredFns.push(function(){n(a)}),void 0):a}return r.entityType?r.entityType.isComplexType?e:K(e,t,r):(r.nodeId&&(t.refMap[r.nodeId]=e),"object"!=typeof e||N(e)?e:R(e,t))}function V(e,t){var r=t.refMap[e];return void 0===r?function(){return t.refMap[e]}:r}function K(e,t,r){e._$meta=r;var n=t.entityManager,a=r.entityType;"string"==typeof a&&(a=n.metadataStore._getEntityType(a,!1)),e.entityType=a;var i=t.queryOptions.mergeStrategy,o=null==t.query,s=U(e,a,!1),u=n.findEntityByKey(s);if(u){if(o&&u.entityAspect.entityState.isDeleted())return n.detachEntity(u),u;var p=u.entityAspect.entityState;if(i===jt.OverwriteChanges||p.isUnchanged()){q(u,e,t),u.entityAspect.wasLoaded=!0,r.extra&&(u.entityAspect.extraMetadata=r.extra),u.entityAspect.entityState=ut.Unchanged,u.entityAspect.originalValues={},u.entityAspect.propertyChanged.publish({entity:u,propertyName:null});var c=o?at.MergeOnSave:at.MergeOnQuery;n.entityChanged.publish({entityAction:c,entity:u}),p.isUnchanged||n._notifyStateChange(u,!1)}else H(t,u,e),a.navigationProperties.forEach(function(r){r.isScalar?et(e,r,t):ct(e,r,t)})}else u=a._createInstanceCore(),u.initializeFrom&&u.initializeFrom(e),q(u,e,t),r.extra&&(u.entityAspect.extraMetadata=r.extra),M(n,u,ut.Unchanged),u.entityAspect.wasLoaded=!0,n.entityChanged.publish({entityAction:at.AttachOnQuery,entity:u});return u}function R(t,r){var n=r.entityManager,a=r.dataService.jsonResultsAdapter,i=n.metadataStore.namingConvention.serverPropertyNameToClient,o={};return e(t,function(e,t){var n=a.visitNode(t,r,{nodeType:"anonProp",propertyName:e})||{};if(t=n.node||t,!n.ignore){var s=i(e);o[s]=Array.isArray(t)?t.map(function(t,i){return n=a.visitNode(t,r,{nodeType:"anonPropItem",propertyName:e})||{},j(t,r,n,function(e){o[s][i]=e()})}):j(t,r,n,function(e){o[s]=e()})}}),o}function q(e,t,r){H(r,e,t);var n=e.entityType;z(e,t,n.dataProperties,!1),n.navigationProperties.forEach(function(n){n.isScalar?X(n,e,t,r):ot(n,e,t,r)})}function z(e,t,r,n){if(r.forEach(function(r){L(e,t,r,n)}),n){var a=e.entityAspect?"entityAspect":"complexAspect",i=t[a].originalValuesMap;i&&(e[a].originalValues=i)}}function L(e,t,r,n){var a=n?$:G,i=a(t,r);if(void 0!==i){var o;if(r.isComplexProperty){if(null===i)return;o=e.getProperty(r.name);var s=r.dataType,u=s.dataProperties;r.isScalar?z(o,i,u,n):(o.length=0,Array.isArray(i)&&i.forEach(function(t){var a=s._createInstanceCore(e,r);z(a,t,u,n),s._initializeInstance(a),o.push(a)}))}else{var p;r.isScalar?(p=J(r,i),e.setProperty(r.name,p)):(o=e.getProperty(r.name),o.length=0,Array.isArray(i)&&i.forEach(function(e){p=J(r,e),o.push(p)}))}}}function U(e,t,r){var n=r?$:G,a=t.keyProperties.map(function(t){return J(t,n(e,t))});return new st(t,a)}function $(e,t){var r=e[t.name];return void 0!==r?r:t.defaultValue}function G(e,t){if(t.isUnmapped)return e[t.nameOnServer||t.name];var r=e[t.nameOnServer];return void 0!==r?r:t.defaultValue}function J(e,t){return void 0===t?void 0:(e.dataType.isDate&&t?N(t)||(t=lt.parseDateFromServer(t)):e.dataType===lt.Binary?t&&void 0!==t.$value&&(t=t.$value):e.dataType===lt.Time&&(t=lt.parseTimeFromServer(t)),t)}function H(e,t,r){var n=r._$meta.nodeId;null!=n&&(e.refMap[n]=t)}function X(e,t,r,n){var a=et(r,e,n);null!=a&&("function"==typeof a?n.deferredFns.push(function(){a=a(),tt(a,t,e)}):tt(a,t,e))}function et(e,t,r){var n=e[t.nameOnServer];if(!n)return null;var a=I(n,r,{nodeType:"navProp",navigationProperty:t});return a}function tt(e,t,r){if(e){var n=r.name,a=t.getProperty(n);if(a!==e){t.setProperty(n,e);var i=r.inverse;if(!i)return;if(i.isScalar)e.setProperty(i.name,t);else{var o=e.getProperty(i.name);o.push(t)}}}}function ot(e,t,r,n){var a=ct(r,e,n);if(null!=a){var i=e.inverse;if(i){var o=t.getProperty(e.name);o.wasLoaded=!0,a.forEach(function(e){"function"==typeof e?n.deferredFns.push(function(){e=e(),ht(e,o,t,i)}):ht(e,o,t,i)})}}}function ct(e,t,r){var n=e[t.nameOnServer];if(!n)return null;if(!Array.isArray(n)&&(n=n.results,!n))return null;var a=n.map(function(e){return I(e,r,{nodeType:"navPropItem",navigationProperty:t})});return a}function ht(e,t,r,n){if(e){var a=e.getProperty(n.name);a!==r&&(t.push(e),e.setProperty(n.name,r))}}function mt(e){var t=e.filter(function(e){return e.entityAspect.isBeingSaved=!0,e.entityAspect.entityState.isModified()&&e.entityType.concurrencyProperties.length>0});0!==t.length&&t.forEach(function(e){e.entityType.concurrencyProperties.forEach(function(t){vt(e,t)})})}function vt(e,t){if(!e.entityAspect.originalValues[t.name]){var r=e.getProperty(t.name);if(r||(r=t.dataType.defaultValue),t.dataType.isNumeric)e.setProperty(t.name,r+1);else if(t.dataType.isDate){for(var n=new Date,a=new Date;n.getTime()===a.getTime();)a=new Date;e.setProperty(t.name,a)}else{if(t.dataType!==lt.Guid){if(t.dataType===lt.Binary)return;throw new Error("Unable to update the value of concurrency property before saving: "+t.name)}e.setProperty(t.name,T())}}}function gt(e,t){var r=e._entityGroupMap[t.name];return r||(r=new Rt(e,t),e._entityGroupMap[t.name]=r),r}function St(e,t){var r=t.getSelfAndSubtypes();return r.map(function(t){return gt(e,t)})}function Pt(e,t){var r={},n=e.entityType||e.complexType;return n.dataProperties.forEach(function(n){if(n.isUnmapped){if(t)return;var a=e.getProperty(n.name);a=Nt(a,n,!1),void 0!==a&&(r.__unmapped=r.__unmapped||{},r.__unmapped[n.name]=a)}else if(n.isComplexProperty)if(n.isScalar)r[n.nameOnServer]=Pt(e.getProperty(n.name),t);else{var i=e.getProperty(n.name);r[n.nameOnServer]=i.map(function(e){return Pt(e,t)})}else{var a=e.getProperty(n.name);a=Nt(a,n,t),void 0!==a&&(r[n.nameOnServer]=a)}}),r}function _t(t,r,n){var a=t.entityType||t.complexType,i=t.entityAspect||t.complexAspect,o=r.namingConvention.clientPropertyNameToServer,s={};return e(i.originalValues,function(e,t){var r=a.getProperty(e);t=Nt(t,r,n),void 0!==t&&(s[o(e,r)]=t)}),a.complexProperties.forEach(function(e){var a=t.getProperty(e.name);if(e.isScalar){var i=_t(a,r,n);x(i)||(s[o(e.name,e)]=i)}else{var u=a.map(function(e){return _t(e,r,n)});s[o(e.name,e)]=u}}),s}function bt(t,r,n){var a=t.entityType||t.complexType,i=t.entityAspect||t.complexAspect,o=r.namingConvention.clientPropertyNameToServer,s={};return e(i.originalValues,function(e){var r=a.getProperty(e),i=t.getProperty(e);i=Nt(i,r,n),void 0!==i&&(s[o(e,r)]=i)}),a.complexProperties.forEach(function(e){var n=t.getProperty(e.name);if(e.isScalar){var a=bt(n,r);x(a)||(s[o(e.name,e)]=a)}else{var i=n.map(function(e){return bt(e,r)});s[o(e.name,e)]=i}}),s}function Nt(e,t,r){if(r){if(t.isUnmapped)return;t.dataType===lt.DateTimeOffset?e=e&&new Date(e.getTime()-6e4*e.getTimezoneOffset()):t.dataType.quoteJsonOData&&(e=null!=e?e.toString():e)}return e}function Ot(){this.map={}}var Ct=function(e){if(arguments.length>1)throw new Error("The EntityManager ctor has a single optional argument that is either a 'serviceName' or a configuration object.");0===arguments.length?e={serviceName:""}:"string"==typeof e&&(e={serviceName:e}),t(this,e,!0),this.entityChanged=new W("entityChanged",this),this.validationErrorsChanged=new W("validationErrorsChanged",this),this.hasChangesChanged=new W("hasChangesChanged",this),this.clear()},At=Ct.prototype;return At._$typeName="EntityManager",W.bubbleEvent(At,null),At.setProperties=function(e){t(this,e,!1)},At.createEntity=function(e,t,r){Q(e,"entityType").isString().or().isInstanceOf(dt).check(),"string"==typeof e&&(e=this.metadataStore._getEntityType(e)),r=r||ut.Added;var n;return w(this,"isLoading",!0,function(){n=e.createEntity(t)}),r!==ut.Detached&&this.attachEntity(n,r),n},Ct.importEntities=function(e,t){var r=new qt;return r.importEntities(e,t),r},At.acceptChanges=function(){this.getChanges().forEach(function(e){e.entityAspect.acceptChanges()})},At.rejectChanges=function(){this.getChanges().forEach(function(e){e.entityAspect.rejectChanges()})},At.exportEntities=function(e){var t=f(this,e),r={metadataStore:this.metadataStore.exportMetadata(),dataService:this.dataService,saveOptions:this.saveOptions,queryOptions:this.queryOptions,validationOptions:this.validationOptions,tempKeys:t.tempKeys,entityGroupMap:t.entityGroupMap},n=JSON.stringify(r,null,Y.stringifyPad);return n},At.importEntities=function(t,r){r=r||{},Z(r).whereParam("mergeStrategy").isEnumOf(jt).isOptional().withDefault(this.queryOptions.mergeStrategy).applyAll(r);var n=this,a="string"==typeof t?JSON.parse(t):t;this.metadataStore.importMetadata(a.metadataStore),this.dataService=a.dataService&&pt.fromJSON(a.dataService)||new pt({serviceName:a.serviceName}),this.saveOptions=new zt(a.saveOptions),this.queryOptions=Kt.fromJSON(a.queryOptions),this.validationOptions=new nt(a.validationOptions);var i={};a.tempKeys.forEach(function(e){var t=st.fromJSON(e,n.metadataStore);i[t.toString()]=new st(t.entityType,n.keyGenerator.generateTempKeyValue(t.entityType,t.values[0]))});var o=[];return r.tempKeyMap=i,S(function(){n._pendingPubs=[]},function(){n._pendingPubs.forEach(function(e){e()}),n._pendingPubs=null},function(){e(a.entityGroupMap,function(e,t){var a=n.metadataStore._getEntityType(e,!0),i=gt(n,a),s=P(i,t,r);Array.prototype.push.apply(o,s)}),o.forEach(function(e){n._linkRelatedEntities(e)})}),{entities:o,tempKeyMapping:i}},At.clear=function(){e(this._entityGroupMap,function(e,t){t._clear()}),this._entityGroupMap={},this._unattachedChildrenMap=new Ot,this.keyGenerator=new this.keyGeneratorCtor,this.entityChanged.publish({entityAction:at.Clear}),this._hasChanges&&(this._hasChanges=!1,this.hasChangesChanged.publish({entityManager:this,hasChanges:!1}))},At.createEmptyCopy=function(){var e=new Ct({dataService:this.dataService,metadataStore:this.metadataStore,queryOptions:this.queryOptions,saveOptions:this.saveOptions,validationOptions:this.validationOptions,keyGeneratorCtor:this.keyGeneratorCtor});return e},At.addEntity=function(e){return this.attachEntity(e,ut.Added)},At.attachEntity=function(e,t){if(Q(e,"entity").isRequired().check(),this.metadataStore._checkEntityType(e),t=Q(t,"entityState").isEnumOf(ut).isOptional().check(ut.Unchanged),e.entityType.metadataStore!==this.metadataStore)throw new Error("Cannot attach this entity because the EntityType and MetadataStore associated with this entity does not match this EntityManager's MetadataStore.");var r=e.entityAspect;r||(r=new it(e));var n=r.entityManager;if(n){if(n===this)return e;throw new Error("This entity already belongs to another EntityManager")}var a=this;return w(this,"isLoading",!0,function(){t.isAdded()&&A(a,e),M(a,e,t),D(a,e,t)}),this.validationOptions.validateOnAttach&&e.entityAspect.validateEntity(),t.isUnchanged()||this._notifyStateChange(e,!0),this.entityChanged.publish({entityAction:at.Attach,entity:e}),e
},At.detachEntity=function(e){Q(e,"entity").isEntity().check();var t=e.entityAspect;if(!t)return!1;if(t.entityManager!==this)throw new Error("This entity does not belong to this EntityManager.");return t.setDetached()},At.fetchMetadata=function(e,t,r){"function"==typeof e?(r=t,t=e,e=null):(Q(e,"dataService").isInstanceOf(pt).isOptional().check(),Q(t,"callback").isFunction().isOptional().check(),Q(r,"errorCallback").isFunction().isOptional().check());var n=this.metadataStore.fetchMetadata(e||this.dataService);return _(n,t,r)},At.executeQuery=function(e,t,r){Q(e,"query").isInstanceOf(Tt).or().isString().check(),Q(t,"callback").isFunction().isOptional().check(),Q(r,"errorCallback").isFunction().isOptional().check();var n,a=Kt.resolve([e.queryOptions,this.queryOptions,Kt.defaultInstance]),i=pt.resolve([e.dataService,this.dataService]);if(!i.hasServerMetadata||this.metadataStore.hasMetadataFor(i.serviceName))n=k(this,e,a,i);else{var o=this;n=this.fetchMetadata(i).then(function(){return k(o,e,a,i)})}return _(n,t,r)},At.executeQueryLocally=function(e){Q(e,"query").isInstanceOf(Tt).check();var t=this.metadataStore,r=e._getFromEntityType(t,!0),n=St(this,r),a=e._toFilterFunction(r);if(a)var i=function(e){return e&&!e.entityAspect.entityState.isDeleted()&&a(e)};else var i=function(e){return e&&!e.entityAspect.entityState.isDeleted()};var o=[];n.forEach(function(e){o.push.apply(o,e._entities.filter(i))});var s=e._toOrderByComparer(r);s&&o.sort(s);var u=e.skipCount;u&&(o=o.slice(u));var p=e.takeCount;p&&(o=o.slice(0,p));var c=e.selectClause;if(c){var l=c.toFunction();o=o.map(function(e){return l(e)})}return o},At.saveChanges=function(e,t,i,s){Q(e,"entities").isOptional().isArray().isEntity().check(),Q(t,"saveOptions").isInstanceOf(zt).isOptional().check(),Q(i,"callback").isFunction().isOptional().check(),Q(s,"errorCallback").isFunction().isOptional().check(),t=t||this.saveOptions||zt.defaultInstance;var u=null==e,p=b(this,e);if(0===p.length){var c={entities:[],keyMappings:[]};return i&&i(c),yt.resolve(c)}if(!t.allowConcurrentSaves){var y=p.some(function(e){return e.entityAspect.isBeingSaved});if(y){var f=new Error("Concurrent saves not allowed - SaveOptions.allowConcurrentSaves is false");return s&&s(f),yt.reject(f)}}if(r(p),this.validationOptions.validateOnSave){var h=p.filter(function(e){var t=e.entityAspect,r=t.entityState.isDeleted()||t.validateEntity();return!r});if(h.length>0){var d=new Error("Client side validation errors encountered - see the entityErrors collection on this object for more detail");return d.entityErrors=n(h),s&&s(d),yt.reject(d)}}mt(p);var m=pt.resolve([t.dataService,this.dataService]),v={entityManager:this,dataService:m,resourceName:t.resourceName||this.saveOptions.resourceName||"SaveChanges"},g={mergeStrategy:jt.OverwriteChanges},E={entities:p,saveOptions:t},w=this;return m.adapterInstance.saveChanges(v,E).then(function(e){O(w,e.keyMappings);var t={query:null,entityManager:w,queryOptions:g,dataService:m,refMap:{},deferredFns:[]},r=e.entities.map(function(e){return I(e,t,{nodeType:"root"})});return l(p,!1),w._hasChanges=u&&o(p,r)?!1:w._hasChangesCore(),w._hasChanges||w.hasChangesChanged.publish({entityManager:w,hasChanges:!1}),e.entities=r,i&&i(e),yt.resolve(e)},function(e){return a(v,e),l(p,!1),s&&s(e),yt.reject(e)})},At._findEntityGroup=function(e){return this._entityGroupMap[e.name]},At.getEntityByKey=function(){var e,t=c(this,arguments).entityKey,r=t._subtypes;if(!r)return e=this._findEntityGroup(t.entityType),e&&e.findEntityByKey(t);for(var n=0,a=r.length;a>n;n++){e=this._findEntityGroup(r[n]);var i=e&&e.findEntityByKey(t);if(i)return i}},At.fetchEntityByKey=function(){var e,t=c(this,arguments),r=t.entityKey,n=0===t.remainingArgs.length?!1:!!t.remainingArgs[0],a=!1;return n&&(e=this.getEntityByKey(r),a=e&&e.entityAspect.entityState.isDeleted(),a&&(e=null,this.queryOptions.mergeStrategy===jt.OverwriteChanges&&(a=!1))),e||a?yt.resolve({entity:e,entityKey:r,fromCache:!0}):Tt.fromEntityKey(r).using(this).execute().then(function(t){return e=0===t.results.length?null:t.results[0],yt.resolve({entity:e,entityKey:r,fromCache:!1})})},At.findEntityByKey=function(e){return this.getEntityByKey(e)},At.generateTempKeyValue=function(e){Q(e,"entity").isEntity().check();var t=e.entityType,r=this.keyGenerator.generateTempKeyValue(t),n=t.keyProperties[0];return e.setProperty(n.name,r),e.entityAspect.hasTempKey=!0,r},At.hasChanges=function(e){return this._hasChanges?void 0===e?this._hasChanges:this._hasChangesCore(e):!1},At._hasChangesCore=function(e){e=u(this,e);var t=C(this,e);return t.some(function(e){return e.hasChanges()})},At.getChanges=function(e){e=u(this,e);var t=[ut.Added,ut.Modified,ut.Deleted];return p(this,e,t)},At.rejectChanges=function(){if(!this._hasChanges)return[];var e=[ut.Added,ut.Modified,ut.Deleted],t=p(this,null,e);return this._hasChanges=!1,t.forEach(function(e){e.entityAspect.rejectChanges()}),this.hasChangesChanged.publish({entityManager:this,hasChanges:!1}),t},At.getEntities=function(e,t){return e=u(this,e),Q(t,"entityStates").isOptional().isEnumOf(ut).or().isNonEmptyArray().isEnumOf(ut).check(),t&&(t=F(this,t)),p(this,e,t)},At._notifyStateChange=function(e,t){this.entityChanged.publish({entityAction:at.EntityStateChange,entity:e}),t?this._hasChanges||(this._hasChanges=!0,this.hasChangesChanged.publish({entityManager:this,hasChanges:!0})):this._hasChanges&&(this._hasChanges=this._hasChangesCore(),this._hasChanges||this.hasChangesChanged.publish({entityManager:this,hasChanges:!1}))},At._linkRelatedEntities=function(e){var t=this,r=e.entityAspect;w(t,"isLoading",!0,function(){var n=t._unattachedChildrenMap,a=r.getKey(),i=n.getTuples(a);i&&i.forEach(function(t){var r,i,o=t.children.filter(function(e){return e.entityAspect.entityState!==ut.Detached}),s=t.navigationProperty;if(s.inverse)if(r=s,i=s.inverse,i.isScalar){var u=o[0];e.setProperty(i.name,u),u.setProperty(r.name,e)}else{var p=e.getProperty(i.name);o.forEach(function(t){p.push(t),t.setProperty(r.name,e)})}else if(s.parentType===e.entityType)if(i=s,i.isScalar)e.setProperty(i.name,o[0]);else{var p=e.getProperty(i.name);o.forEach(function(e){p._push(e)})}else r=s,o.forEach(function(t){t.setProperty(r.name,e)});n.removeChildren(a,r)}),e.entityType.navigationProperties.forEach(function(a){if(a.isScalar){var i=e.getProperty(a.name);if(i)return}var o=r.getParentKey(a);if(o){if(o._isEmpty())return;var s=t.findEntityByKey(o);s?e.setProperty(a.name,s):n.addChild(o,a,e)}}),e.entityType.foreignKeyProperties.forEach(function(r){var a=r.inverseNavigationProperty;if(a){var i=e.getProperty(r.name),o=new st(a.parentType,[i]),s=t.findEntityByKey(o);s?a.isScalar?s.setProperty(a.name,e):t.isLoading?s.getProperty(a.name)._push(e):s.getProperty(a.name).push(e):n.addChild(o,a,e)}})})},At.helper={unwrapInstance:Pt,unwrapOriginalValues:_t,unwrapChangedValues:bt,getEntityKeyFromRawEntity:U},Ot.prototype.addChild=function(e,t,r){var n=this.getTuple(e,t);n||(n={navigationProperty:t,children:[]},v(this.map,e.toString()).push(n)),n.children.push(r)},Ot.prototype.removeChildren=function(e,t){var r=this.map[e.toString()];r&&(h(r,function(e){return e.navigationProperty===t}),r.length||delete this.map[e.toString()])},Ot.prototype.getChildren=function(e,t){var r=this.getTuple(e,t);return r?r.children.filter(function(e){return!e.entityAspect.entityState.isDetached()}):null},Ot.prototype.getTuple=function(e,t){var r=this.map[e.toString()];if(!r)return null;var n=y(r,function(e){return e.navigationProperty===t});return n},Ot.prototype.getTuples=function(e){return this.map[e.toString()]},Ct}();L.EntityManager=qt;var zt=function(){function e(e,t){return t&&Z(t).whereParam("resourceName").isOptional().isString().whereParam("dataService").isOptional().isInstanceOf(pt).whereParam("allowConcurrentSaves").isBoolean().isOptional().whereParam("tag").isOptional().applyAll(e),e}var t=function(t){e(this,t)},r=t.prototype;return r._$typeName="SaveOptions",r.setAsDefault=function(){return u(this,t)},r.using=function(t){return e(this,t)},t.defaultInstance=new t({allowConcurrentSaves:!1}),t}();L.SaveOptions=zt,L.AbstractDataServiceAdapter=function(){function e(e,r,n){var a=t(r);return n&&(a.message=n+"; "+a.message),e.reject(a)}function t(e){var t=new Error;t.httpResponse=e,t.status=e.status;var n=e.data;if("string"==typeof n)try{n=JSON.parse(n)}catch(a){}if(n){var i=n.EntityErrors||n.entityErrors||n.Errors||n.errors;i&&e.saveContext?r(t,i,e.saveContext):(n=n.InnerException||n,t.message=n.ExceptionMessage||n.Message||n.toString())}else t.message=e.error&&e.error.toString();return t}function r(e,t,r){e.message="Server side errors encountered - see the entityErrors collection on this object for more detail";var n=r.entityManager.metadataStore.namingConvention.serverPropertyNameToClient;e.entityErrors=t.map(function(e){return{errorName:e.ErrorName,entityTypeName:ft.normalizeTypeName(e.EntityTypeName),keyValues:e.KeyValues,propertyName:e.PropertyName&&n(e.PropertyName),errorMessage:e.ErrorMessage}})}var n,a=function(){};return a.prototype.checkForRecomposition=function(e){"ajax"===e.interfaceName&&e.isDefault&&this.initialize()},a.prototype.initialize=function(){if(n=L.config.getAdapterInstance("ajax"),!n)throw new Error("Unable to initialize ajax for WebApi.");var e=n.ajax;if(!e)throw new Error("Breeze was unable to find an 'ajax' adapter")},a.prototype.fetchMetadata=function(t,r){var a=r.serviceName,i=r.makeUrl("Metadata"),o=yt.defer();return n.ajax({type:"GET",url:i,dataType:"json",success:function(n){if(t.hasMetadataFor(a))return o.resolve("already fetched");var s=n.data;try{var u="string"==typeof s?JSON.parse(s):s;t.importMetadata(u)}catch(p){var c="Unable to either parse or import metadata: "+p.message;return e(o,n,"Metadata query failed for: "+i+". "+c)}t.hasMetadataFor(a)||t.addDataService(r),o.resolve(u)},error:function(t){e(o,t,"Metadata query failed for: "+i)}}),o.promise},a.prototype.executeQuery=function(t){var r=yt.defer(),a={type:"GET",url:t.url,params:t.query.parameters,dataType:"json",success:function(t){var n=t.data;try{var a;a=n&&n.Results?{results:n.Results,inlineCount:n.InlineCount,httpResponse:t}:{results:n,httpResponse:t},r.resolve(a)}catch(i){i instanceof Error?r.reject(i):e(t)}},error:function(t){e(r,t)}};return t.dataService.useJsonp&&(a.dataType="jsonp",a.crossDomain=!0),n.ajax(a),r.promise},a.prototype.saveChanges=function(t,r){var a=yt.defer();r=this._prepareSaveBundle(r,t);var i=JSON.stringify(r),o=t.dataService.makeUrl(t.resourceName),s=this;return n.ajax({type:"POST",url:o,dataType:"json",contentType:"application/json",data:i,success:function(r){var n=r.data;r.saveContext=t;var i=n.Errors||n.errors;if(i)e(a,r);else{var o=s._prepareSaveResult(t,n);a.resolve(o)}},error:function(r){r.saveContext=t,e(a,r)}}),a.promise},a.prototype._prepareSaveBundle=function(){throw new Error("Need a concrete implementation of _prepareSaveBundle")},a.prototype._prepareSaveResult=function(){throw new Error("Need a concrete implementation of _prepareSaveResult")},a.prototype.jsonResultsAdapter=new ct({name:"noop",visitNode:function(){return{}}}),a}(),function(e){L?e(L):"function"==typeof require&&"object"==typeof exports&&"object"==typeof module?e(require("breeze")):"function"==typeof define&&define.amd&&define(["breeze"],e)}(function(e){function t(e){var r,n,a="";for(var i in e){var o=e[i];if(o instanceof Array)for(var s=0;s<o.length;++s)r=o[s],fullSubName=i+"["+s+"]",n={},n[fullSubName]=r,a+=t(n)+"&";else if(o instanceof Object)for(var u in o)r=o[u],fullSubName=i+"["+u+"]",n={},n[fullSubName]=r,a+=t(n)+"&";else void 0!==o&&(a+=encodeURIComponent(i)+"="+encodeURIComponent(o)+"&")}return a.length?a.substr(0,a.length-1):a}var r,n,a=e.core,i=function(){this.name="angular",this.defaultSettings={}};i.prototype.initialize=function(){var e=a.requireLib("angular");if(e){var t=e.injector(["ng"]);t.invoke(["$http","$rootScope",function(e,t){r=e,n=t}])}},i.prototype.setHttp=function(e){r=e,n=null},i.prototype.ajax=function(e){if(!r)throw new Error("Unable to locate angular for ajax adapter");var i={method:e.type,url:e.url,dataType:e.dataType,contentType:e.contentType,crossDomain:e.crossDomain};if(e.params){var o=i.url.indexOf("?")>=0?"&":"?";i.url=i.url+o+t(e.params)}if(e.data&&(i.data=e.data),!a.isEmpty(this.defaultSettings)){var s=a.extend({},this.defaultSettings);i=a.extend(s,i)}r(i).success(function(t,r,n){"null"===t&&(t=null);var a={data:t,status:r,getHeaders:n,config:e};e.success(a)}).error(function(t,r,n){var a={data:t,status:r,getHeaders:n,config:e};e.error(a)}),n&&n.$digest()},e.config.registerAdapter("ajax",i)}),function(e){L?e(L):"function"==typeof require&&"object"==typeof exports&&"object"==typeof module?e(require("breeze")):"function"==typeof define&&define.amd&&define(["breeze"],e)}(function(e){function t(e){return function(t){return t&&t.length>0?e.getResponseHeader(t):e.getAllResponseHeaders()}}var r,n=e.core,a=function(){this.name="jQuery",this.defaultSettings={}};a.prototype.initialize=function(){r=n.requireLib("jQuery")},a.prototype.ajax=function(e){if(!r)throw new Error("Unable to locate jQuery");var a={type:e.type,url:e.url,data:e.params||e.data,dataType:e.dataType,contentType:e.contentType,crossDomain:e.crossDomain};if(!n.isEmpty(this.defaultSettings)){var i=n.extend({},this.defaultSettings);a=n.extend(i,a)}a.success=function(r,n,a){var i={data:r,status:a.status,getHeaders:t(a),config:e};e.success(i),a.onreadystatechange=null,a.abort=null},a.error=function(r,n,a){var i={data:r.responseText,status:r.status,getHeaders:t(r),error:a,config:e};e.error(i),r.onreadystatechange=null,r.abort=null},r.ajax(a)},e.config.registerAdapter("ajax",a)}),function(e){L?e(L):"function"==typeof require&&"object"==typeof exports&&"object"==typeof module?e(require("breeze")):"function"==typeof define&&define.amd&&!L&&define(["breeze"],e)}(function(e){function t(e,t){var n=[],a=[],i=[],o=e.dataService.serviceName,s=e.entityManager,u=s.helper,p=0;return t.entities.forEach(function(e){var t=e.entityAspect;p+=1;var c={headers:{"Content-ID":p,DataServiceVersion:"2.0"}};if(i[p]=e,t.entityState.isAdded())c.requestUri=e.entityType.defaultResourceName,c.method="POST",c.data=u.unwrapInstance(e,!0),a[p]=t.getKey();else if(t.entityState.isModified())r(c,t,o),c.method="MERGE",c.data=u.unwrapChangedValues(e,s.metadataStore,!0);else{if(!t.entityState.isDeleted())return;r(c,t,o),c.method="DELETE"}n.push(c)}),e.contentKeys=i,e.tempKeys=a,{__batchRequests:[{__changeRequests:n}]}}function r(e,t,r){var n=t.extraMetadata,a=n.uri||n.id;M(a,r)&&(a=a.substring(r.length)),e.requestUri=a,n.etag&&(e.headers["If-Match"]=n.etag)}function n(e,t){var r=new Error,n=e.response;if(r.message=n.statusText,r.statusText=n.statusText,r.status=n.statusCode,t&&(r.url=t),r.body=n.body,n.body){var i;try{var o=JSON.parse(n.body);r.body=o,o["odata.error"]&&(o=o["odata.error"]);var s="";do i=o.error||o.innererror,i||(s+=a(o)),i=i||o.internalexception,o=i||o;while(i);s.length>0&&(r.message=s)}catch(u){}}return r}function a(e){var t=e.message||"";return("string"==typeof t?t:t.value)+"; "}var i,o=e.core,s=e.MetadataStore,u=e.JsonResultsAdapter,p=function(){this.name="OData"};p.prototype.initialize=function(){i=o.requireLib("OData","Needed to support remote OData services"),i.jsonHandler.recognizeDates=!0},p.prototype.executeQuery=function(e){var t=yt.defer();return i.read({requestUri:e.url,headers:{DataServiceVersion:"2.0"}},function(e){var r;return e.__count&&(r=parseInt(e.__count,10)),t.resolve({results:e.results,inlineCount:r})},function(r){return t.reject(n(r,e.url))}),t.promise},p.prototype.fetchMetadata=function(e,t){var r=yt.defer(),a=t.serviceName,o=t.makeUrl("$metadata");return i.read(o,function(n){if(!n||!n.dataServices){var i=new Error("Metadata query failed for: "+o);return r.reject(i)}var s=n.dataServices;if(!e.hasMetadataFor(a)){try{e.importMetadata(s)}catch(u){return r.reject(new Error("Metadata query failed for "+o+"; Unable to process returned metadata: "+u.message))}e.addDataService(t)}return r.resolve(s)},function(e){var t=n(e,o);return t.message="Metadata query failed for: "+o+"; "+(t.message||""),r.reject(t)},i.metadataHandler),r.promise},p.prototype.saveChanges=function(e,r){var a=yt.defer(),o=e.entityManager.helper,s=e.dataService.makeUrl("$batch"),u=t(e,r),p=e.tempKeys,c=e.contentKeys;return i.request({headers:{DataServiceVersion:"2.0"},requestUri:s,method:"POST",data:u},function(e){var t=[],r=[],i={entities:t,keyMappings:r};return e.__batchResponses.forEach(function(e){e.__changeResponses.forEach(function(e){var i=e.response||e,u=i.statusCode;if(!u||u>=400)return a.reject(n(e,s));var l=e.headers["Content-ID"],y=e.data;if(y){var f=p[l];if(f){var h=f.entityType;if(h.autoGeneratedKeyType!==Et.None){var d=f.values[0],m=o.getEntityKeyFromRawEntity(y,h,!1),v={entityTypeName:h.name,tempValue:d,realValue:m.values[0]};r.push(v)}}t.push(y)}else{var g=c[l];t.push(g)}})}),a.resolve(i)},function(e){return a.reject(n(e,s))},i.batchHandler),a.promise},p.prototype.jsonResultsAdapter=new u({name:"OData_default",visitNode:function(e,t,r){var n={};if(null==e)return n;if(null!=e.__metadata){var a=s.normalizeTypeName(e.__metadata.type),i=a&&t.entityManager.metadataStore.getEntityType(a,!0);i&&i._mappedPropertiesCount<=Object.keys(e).length-1&&(n.entityType=i,n.extra=e.__metadata)}e.results&&(n.node=e.results);var u=r.propertyName;return n.ignore=null!=e.__deferred||"__metadata"===u||"EntityKey"===u&&e.$type&&o.stringStartsWith(e.$type,"System.Data"),n}}),e.config.registerAdapter("dataService",p)}),function(e){L?e(L):"function"==typeof require&&"object"==typeof exports&&"object"==typeof module?e(require("breeze")):"function"==typeof define&&define.amd&&!L&&define(["breeze"],e)}(function(e){e.core;var t=e.MetadataStore,r=e.JsonResultsAdapter,n=e.AbstractDataServiceAdapter,a=function(){this.name="webApi"};a.prototype=new n,a.prototype._prepareSaveBundle=function(e,t){var r=t.entityManager,n=r.metadataStore,a=r.helper;return e.entities=e.entities.map(function(e){var t=a.unwrapInstance(e),r=null;e.entityType.autoGeneratedKeyType!==Et.None&&(r={propertyName:e.entityType.keyProperties[0].nameOnServer,autoGeneratedKeyType:e.entityType.autoGeneratedKeyType.name});var i=a.unwrapOriginalValues(e,n);return t.entityAspect={entityTypeName:e.entityType.name,defaultResourceName:e.entityType.defaultResourceName,entityState:e.entityAspect.entityState.name,originalValuesMap:i,autoGeneratedKey:r},t}),e.saveOptions={tag:e.saveOptions.tag},e},a.prototype._prepareSaveResult=function(e,r){var n=r.KeyMappings.map(function(e){var r=t.normalizeTypeName(e.EntityTypeName);return{entityTypeName:r,tempValue:e.TempValue,realValue:e.RealValue}});return{entities:r.Entities,keyMappings:n,httpResponse:r.httpResponse}},a.prototype.jsonResultsAdapter=new r({name:"webApi_default",visitNode:function(e,r,n){if(null==e)return{};var a=t.normalizeTypeName(e.$type),i=a&&r.entityManager.metadataStore._getEntityType(a,!0),o=n.propertyName,s=o&&"$"===o.substr(0,1);return{entityType:i,nodeId:e.$id,nodeRefId:e.$ref,ignore:s}}}),e.config.registerAdapter("dataService",a)}),function(e){L?e(L):"function"==typeof require&&"object"==typeof exports&&"object"==typeof module?e(require("breeze")):"function"==typeof define&&define.amd&&!L&&define(["breeze"],e)}(function(e){var t=e.core;e.ComplexAspect;var r,n,a,i,o=Object.prototype.hasOwnProperty,s=function(){this.name="backbone"};s.prototype.initialize=function(){r=t.requireLib("Backbone"),n=t.requireLib("_;underscore"),a=r.Model.prototype.set,i=r.Model.prototype.get},s.prototype.createCtor=function(t){var n={};t.dataProperties.forEach(function(e){n[e.name]=e.defaultValue});var a=r.Model.extend({defaults:n,initialize:function(){if(t.navigationProperties){var n=this;t.navigationProperties.forEach(function(t){if(!t.isScalar){var a=e.makeRelationArray([],n,t);r.Model.prototype.set.call(n,t.name,a)}})}}});return a},s.prototype.getTrackablePropertyNames=function(e){var t=[];for(var r in e.attributes)t.push(r);return t},s.prototype.initializeEntityPrototype=function(e){e.getProperty=function(e){return this.get(e)},e.setProperty=function(e,t){return this.set(e,t),this},e.set=function(e,t,r){var s=this.entityAspect||this.complexAspect;if(!s)return a.call(this,e,t,r);var u,p,c,l=this,y=this.entityType||this.complexType;if(n.isObject(e)||null==e){if(u=e,r=t,!this._validate(u,r))return!1;for(c in u)if(o.call(u,c)){if(p=y.getProperty(c),null==p)throw new Error("Unknown property: "+e);var f=function(e){return function(t){return 0===arguments.length?i.call(l,e):a.call(l,e,t,r)}}(c);this._$interceptor(p,u[c],f)}}else{if(u={},u[e]=t,r||(r={}),!this._validate(u,r))return!1;if(p=y.getProperty(e),null==p)throw new Error("Unknown property: "+e);c=e,this._$interceptor(p,t,function(e){return 0===arguments.length?i.call(l,c):a.call(l,c,e,r)})}return this}},s.prototype.startTracking=function(n){if(!(n instanceof r.Model))throw new Error("This entity is not an Backbone.Model instance");var o=n.entityType||n.complexType,s=n.attributes;o.dataProperties.forEach(function(t){var r=t.name,i=s[r];t.isComplexProperty?i=t.isScalar?t.dataType._createInstanceCore(n,t):e.makeComplexArray([],n,t):t.isScalar?void 0===i&&(i=t.defaultValue):i=e.makePrimitiveArray([],n,t),a.call(n,r,i)}),o.navigationProperties&&o.navigationProperties.forEach(function(r){var o;if(r.name in s){var u=i.call(n,r.name);if(r.isScalar){if(u&&!u.entityType)throw o=t.formatString("The value of the '%1' property for entityType: '%2' must be either null or another entity",r.name,n.entityType.name),new Error(o)}else if(u){if(!u.parentEntity)throw o=t.formatString("The value of the '%1' property for entityType: '%2' must be either null or a Breeze relation array",r.name,n.entityType.name),new Error(o)}else u=e.makeRelationArray([],n,r),a.call(n,r.name,u)}else r.isScalar?a.call(n,r.name,null):(u=e.makeRelationArray([],n,r),a.call(n,r.name,u))})},e.config.registerAdapter("modelLibrary",s)}),function(e){L?e(L):"function"==typeof require&&"object"==typeof exports&&"object"==typeof module?e(require("breeze")):"function"==typeof define&&define.amd&&!L&&define(["breeze"],e)}(function(e){function t(e){var t=e.entityType||e.complexType,r=t._extra,i=r.alreadyWrappedProps||{};t.getProperties().forEach(function(t){var r=t.name;i[r]||(r in e?a(e,t):n(e,t),i[r]=!0)}),r.alreadyWrappedProps=i}function r(e){var t=Object.getPrototypeOf(e);e._backingStore||(e._backingStore={});var r=t.entityType||t.complexType;return r.getProperties().forEach(function(t){var r=t.name;if(e.hasOwnProperty(r)){var n=e[r];delete e[r],e[r]=n}}),e._backingStore}function n(e,t){var r=t.name,n=function(e){return function(){return 0==arguments.length?e[r]:(e[r]=arguments[0],void 0)}},a={get:function(){var e=this._backingStore;if(e||(this._pendingSets.process(),e=this._backingStore))return e[r]},set:function(e){var a=this._backingStore;if(!a)return this._pendingSets.schedule(this,r,e),void 0;var i=n(a);this._$interceptor(t,e,i)},enumerable:!0,configurable:!0};Object.defineProperty(e,r,a)}function a(e,t){if(!e.hasOwnProperty(t.name)){var r=Object.getPrototypeOf(e);return a(r,t),void 0}var n=Object.getOwnPropertyDescriptor(e,t.name);if(n.configurable&&!n.value&&n.set){var i=function(e){return function(){return 0==arguments.length?n.get.bind(e)():(n.set.bind(e)(arguments[0]),void 0)}},o={get:function(){return n.get.bind(this)()},set:function(e){this._$interceptor(t,e,i(this))},enumerable:n.enumerable,configurable:!0};Object.defineProperty(e,t.name,o)}}var i=e.core,o=function(){this.name="backingStore"};o.prototype.initialize=function(){},o.prototype.getTrackablePropertyNames=function(e){var t=[];for(var r in e)if("entityType"!==r&&"_$typeName"!==r&&"_pendingSets"!==r&&"_backingStore"!==r){var n=e[r];i.isFunction(n)||t.push(r)}return t},o.prototype.initializeEntityPrototype=function(e){e.getProperty=function(e){return this[e]},e.setProperty=function(e,t){if(!this._backingStore.hasOwnProperty(e))throw new Error("Unknown property name:"+e);return this[e]=t,this},e.initializeFrom=function(e){var t=this;this.entityType.unmappedProperties.forEach(function(r){var n=r.name;e[n]=t[n]}),this._backingStore||(this._backingStore={})},e._pendingSets=[],e._pendingSets.schedule=function(e,t,r){if(this.push({entity:e,propName:t,value:r}),!this.isPending){this.isPending=!0;var n=this;setTimeout(function(){n.process()})}},e._pendingSets.process=function(){0!==this.length&&(this.forEach(function(e){e.entity._backingStore||(e.entity._backingStore={}),e.entity._backingStore[e.propName]=e.value}),this.length=0,this.isPending=!1)},t(e)},o.prototype.startTracking=function(t,n){n._pendingSets.process();var a=r(t),i=t.entityType||t.complexType;i.getProperties().forEach(function(r){var n=r.name,i=t[n];if(r.isDataProperty)r.isComplexProperty?i=r.isScalar?r.dataType._createInstanceCore(t,r):e.makeComplexArray([],t,r):r.isScalar?void 0===i&&(i=r.defaultValue):i=e.makePrimitiveArray([],t,r);else{if(!r.isNavigationProperty)throw new Error("unknown property: "+n);if(void 0!==i)throw new Error("Cannot assign a navigation property in an entity ctor.: "+r.Name);i=r.isScalar?null:e.makeRelationArray([],t,r)}a[n]=i})},e.config.registerAdapter("modelLibrary",o)}),function(e){L?e(L):"function"==typeof require&&"object"==typeof exports&&"object"==typeof module?e(require("breeze")):"function"==typeof define&&define.amd&&!L&&define(["breeze"],e)}(function(e){function t(){try{return Object.getPrototypeOf&&Object.defineProperty({},"x",{})}catch(e){return!1}}function r(e){var t=e.entityType||e.complexType;if(es5Descriptors={},t.getProperties().forEach(function(t){propDescr=n(e,t.name),propDescr&&(es5Descriptors[t.name]=propDescr)}),!x(es5Descriptors)){var r=t._extra;r.es5Descriptors=es5Descriptors,t._koDummy=s.observable(null)}}function n(e,t){if(e.hasOwnProperty(t))return Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(e,t);var r=Object.getPrototypeOf(e);return r?n(r,t):null}function a(t,r,n){if(r.isDataProperty)r.isComplexProperty?n=r.isScalar?r.dataType._createInstanceCore(t,r):e.makeComplexArray([],t,r):r.isScalar?void 0===n&&(n=r.defaultValue):n=e.makePrimitiveArray([],t,r);else{if(!r.isNavigationProperty)throw new Error("unknown property: "+r.name);if(void 0!==n)throw new Error("Cannot assign a navigation property in an entity ctor.: "+r.name);n=r.isScalar?null:e.makeRelationArray([],t,r)}return n}function i(e){e._koObj._suppressBreeze=!0}function o(e){var t=e.array._koObj;t._suppressBreeze?t._suppressBreeze=!1:t.valueHasMutated()}var s,u=e.core,p=function(){this.name="ko"};p.prototype.initialize=function(){s=u.requireLib("ko","The Knockout library"),s.extenders.intercept=function(e,t){var r,n=t.instance,a=t.property;return r=e.splice?s.computed({read:e}):s.computed({read:e,write:function(t){return n._$interceptor(a,t,e),n}})}},p.prototype.getTrackablePropertyNames=function(e){var t=[];for(var r in e)if("entityType"!==r&&"_$typeName"!==r){var a=n(e,r);if(a&&a.get)t.push(r);else{var i=e[r];s.isObservable(i)?t.push(r):u.isFunction(i)||t.push(r)}}return t},p.prototype.initializeEntityPrototype=function(e){e.getProperty=function(e){return this[e]()},e.setProperty=function(e,t){return this[e](t),this},t()&&r(e)},p.prototype.startTracking=function(e){var t=e.entityType||e.complexType,r=t._extra.es5Descriptors||{};t.getProperties().sort(function(e,t){var r=e.isUnmapped?1:0,n=t.isUnmapped?1:0;return r-n}).forEach(function(n){var u,p=n.name,c=e[p],l=r[p];if(l){var y=l.get.bind(e);if(l.set){var f=l.set.bind(e),h=function(e){return 0===arguments.length?y():(f(e),void 0)};u=s.computed({read:function(){return t._koDummy(),y()},write:function(r){return e._$interceptor(n,r,h),t._koDummy.valueHasMutated(),e}})}else u=s.computed({read:y,write:function(){}})}else if(s.isObservable(c)){if(n.isNavigationProperty)throw new Error("Cannot assign a navigation property in an entity ctor.: "+p);u=c}else{var c=a(e,n,c);u=n.isScalar?s.observable(c):s.observableArray(c)}if(n.isScalar)if(l)Object.defineProperty(e,p,{enumerable:!0,configurable:!0,writable:!0,value:u});else{var d=u.extend({intercept:{instance:e,property:n}});e[p]=d}else c._koObj=u,u.subscribe(i,null,"beforeChange"),c.arrayChanged.subscribe(o),u.equalityComparer=function(){throw new Error("Collection navigation properties may NOT be set.")},e[p]=u})},e.config.registerAdapter("modelLibrary",p)}),L.config.initializeAdapterInstances({dataService:"webApi",ajax:"jQuery"});var Lt=E("ko");return Lt?L.config.initializeAdapterInstance("modelLibrary","ko"):L.config.initializeAdapterInstance("modelLibrary","backingStore"),this.window&&(this.window.breeze=L),L});
;/*!
* Bootstrap.js by @fat & @mdo
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(e){"use strict";e(function(){e.support.transition=function(){var e=function(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},n;for(n in t)if(e.style[n]!==undefined)return t[n]}();return e&&{end:e}}()})}(window.jQuery),!function(e){"use strict";var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.prototype.close=function(t){function s(){i.trigger("closed").remove()}var n=e(this),r=n.attr("data-target"),i;r||(r=n.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),i=e(r),t&&t.preventDefault(),i.length||(i=n.hasClass("alert")?n:n.parent()),i.trigger(t=e.Event("close"));if(t.isDefaultPrevented())return;i.removeClass("in"),e.support.transition&&i.hasClass("fade")?i.on(e.support.transition.end,s):s()};var r=e.fn.alert;e.fn.alert=function(t){return this.each(function(){var r=e(this),i=r.data("alert");i||r.data("alert",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.alert.Constructor=n,e.fn.alert.noConflict=function(){return e.fn.alert=r,this},e(document).on("click.alert.data-api",t,n.prototype.close)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.button.defaults,n)};t.prototype.setState=function(e){var t="disabled",n=this.$element,r=n.data(),i=n.is("input")?"val":"html";e+="Text",r.resetText||n.data("resetText",n[i]()),n[i](r[e]||this.options[e]),setTimeout(function(){e=="loadingText"?n.addClass(t).attr(t,t):n.removeClass(t).removeAttr(t)},0)},t.prototype.toggle=function(){var e=this.$element.closest('[data-toggle="buttons-radio"]');e&&e.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=e.fn.button;e.fn.button=function(n){return this.each(function(){var r=e(this),i=r.data("button"),s=typeof n=="object"&&n;i||r.data("button",i=new t(this,s)),n=="toggle"?i.toggle():n&&i.setState(n)})},e.fn.button.defaults={loadingText:"loading..."},e.fn.button.Constructor=t,e.fn.button.noConflict=function(){return e.fn.button=n,this},e(document).on("click.button.data-api","[data-toggle^=button]",function(t){var n=e(t.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.options.pause=="hover"&&this.$element.on("mouseenter",e.proxy(this.pause,this)).on("mouseleave",e.proxy(this.cycle,this))};t.prototype={cycle:function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(t){var n=this.getActiveIndex(),r=this;if(t>this.$items.length-1||t<0)return;return this.sliding?this.$element.one("slid",function(){r.to(t)}):n==t?this.pause().cycle():this.slide(t>n?"next":"prev",e(this.$items[t]))},pause:function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition.end&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(t,n){var r=this.$element.find(".item.active"),i=n||r[t](),s=this.interval,o=t=="next"?"left":"right",u=t=="next"?"first":"last",a=this,f;this.sliding=!0,s&&this.pause(),i=i.length?i:this.$element.find(".item")[u](),f=e.Event("slide",{relatedTarget:i[0],direction:o});if(i.hasClass("active"))return;this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var t=e(a.$indicators.children()[a.getActiveIndex()]);t&&t.addClass("active")}));if(e.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(f);if(f.isDefaultPrevented())return;i.addClass(t),i[0].offsetWidth,r.addClass(o),i.addClass(o),this.$element.one(e.support.transition.end,function(){i.removeClass([t,o].join(" ")).addClass("active"),r.removeClass(["active",o].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger("slid")},0)})}else{this.$element.trigger(f);if(f.isDefaultPrevented())return;r.removeClass("active"),i.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}};var n=e.fn.carousel;e.fn.carousel=function(n){return this.each(function(){var r=e(this),i=r.data("carousel"),s=e.extend({},e.fn.carousel.defaults,typeof n=="object"&&n),o=typeof n=="string"?n:s.slide;i||r.data("carousel",i=new t(this,s)),typeof n=="number"?i.to(n):o?i[o]():s.interval&&i.pause().cycle()})},e.fn.carousel.defaults={interval:5e3,pause:"hover"},e.fn.carousel.Constructor=t,e.fn.carousel.noConflict=function(){return e.fn.carousel=n,this},e(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(t){var n=e(this),r,i=e(n.attr("data-target")||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,"")),s=e.extend({},i.data(),n.data()),o;i.carousel(s),(o=n.attr("data-slide-to"))&&i.data("carousel").pause().to(o).cycle(),t.preventDefault()})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.collapse.defaults,n),this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};t.prototype={constructor:t,dimension:function(){var e=this.$element.hasClass("width");return e?"width":"height"},show:function(){var t,n,r,i;if(this.transitioning||this.$element.hasClass("in"))return;t=this.dimension(),n=e.camelCase(["scroll",t].join("-")),r=this.$parent&&this.$parent.find("> .accordion-group > .in");if(r&&r.length){i=r.data("collapse");if(i&&i.transitioning)return;r.collapse("hide"),i||r.data("collapse",null)}this.$element[t](0),this.transition("addClass",e.Event("show"),"shown"),e.support.transition&&this.$element[t](this.$element[0][n])},hide:function(){var t;if(this.transitioning||!this.$element.hasClass("in"))return;t=this.dimension(),this.reset(this.$element[t]()),this.transition("removeClass",e.Event("hide"),"hidden"),this.$element[t](0)},reset:function(e){var t=this.dimension();return this.$element.removeClass("collapse")[t](e||"auto")[0].offsetWidth,this.$element[e!==null?"addClass":"removeClass"]("collapse"),this},transition:function(t,n,r){var i=this,s=function(){n.type=="show"&&i.reset(),i.transitioning=0,i.$element.trigger(r)};this.$element.trigger(n);if(n.isDefaultPrevented())return;this.transitioning=1,this.$element[t]("in"),e.support.transition&&this.$element.hasClass("collapse")?this.$element.one(e.support.transition.end,s):s()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var n=e.fn.collapse;e.fn.collapse=function(n){return this.each(function(){var r=e(this),i=r.data("collapse"),s=e.extend({},e.fn.collapse.defaults,r.data(),typeof n=="object"&&n);i||r.data("collapse",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.collapse.defaults={toggle:!0},e.fn.collapse.Constructor=t,e.fn.collapse.noConflict=function(){return e.fn.collapse=n,this},e(document).on("click.collapse.data-api","[data-toggle=collapse]",function(t){var n=e(this),r,i=n.attr("data-target")||t.preventDefault()||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,""),s=e(i).data("collapse")?"toggle":n.data();n[e(i).hasClass("in")?"addClass":"removeClass"]("collapsed"),e(i).collapse(s)})}(window.jQuery),!function(e){"use strict";function r(){e(".dropdown-backdrop").remove(),e(t).each(function(){i(e(this)).removeClass("open")})}function i(t){var n=t.attr("data-target"),r;n||(n=t.attr("href"),n=n&&/#/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,"")),r=n&&e(n);if(!r||!r.length)r=t.parent();return r}var t="[data-toggle=dropdown]",n=function(t){var n=e(t).on("click.dropdown.data-api",this.toggle);e("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};n.prototype={constructor:n,toggle:function(t){var n=e(this),s,o;if(n.is(".disabled, :disabled"))return;return s=i(n),o=s.hasClass("open"),r(),o||("ontouchstart"in document.documentElement&&e('<div class="dropdown-backdrop"/>').insertBefore(e(this)).on("click",r),s.toggleClass("open")),n.focus(),!1},keydown:function(n){var r,s,o,u,a,f;if(!/(38|40|27)/.test(n.keyCode))return;r=e(this),n.preventDefault(),n.stopPropagation();if(r.is(".disabled, :disabled"))return;u=i(r),a=u.hasClass("open");if(!a||a&&n.keyCode==27)return n.which==27&&u.find(t).focus(),r.click();s=e("[role=menu] li:not(.divider):visible a",u);if(!s.length)return;f=s.index(s.filter(":focus")),n.keyCode==38&&f>0&&f--,n.keyCode==40&&f<s.length-1&&f++,~f||(f=0),s.eq(f).focus()}};var s=e.fn.dropdown;e.fn.dropdown=function(t){return this.each(function(){var r=e(this),i=r.data("dropdown");i||r.data("dropdown",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.dropdown.Constructor=n,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=s,this},e(document).on("click.dropdown.data-api",r).on("click.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.dropdown.data-api",t,n.prototype.toggle).on("keydown.dropdown.data-api",t+", [role=menu]",n.prototype.keydown)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=n,this.$element=e(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",e.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};t.prototype={constructor:t,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var t=this,n=e.Event("show");this.$element.trigger(n);if(this.isShown||n.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var n=e.support.transition&&t.$element.hasClass("fade");t.$element.parent().length||t.$element.appendTo(document.body),t.$element.show(),n&&t.$element[0].offsetWidth,t.$element.addClass("in").attr("aria-hidden",!1),t.enforceFocus(),n?t.$element.one(e.support.transition.end,function(){t.$element.focus().trigger("shown")}):t.$element.focus().trigger("shown")})},hide:function(t){t&&t.preventDefault();var n=this;t=e.Event("hide"),this.$element.trigger(t);if(!this.isShown||t.isDefaultPrevented())return;this.isShown=!1,this.escape(),e(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),e.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var t=this;e(document).on("focusin.modal",function(e){t.$element[0]!==e.target&&!t.$element.has(e.target).length&&t.$element.focus()})},escape:function(){var e=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(t){t.which==27&&e.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var t=this,n=setTimeout(function(){t.$element.off(e.support.transition.end),t.hideModal()},500);this.$element.one(e.support.transition.end,function(){clearTimeout(n),t.hideModal()})},hideModal:function(){var e=this;this.$element.hide(),this.backdrop(function(){e.removeBackdrop(),e.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(t){var n=this,r=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=e.support.transition&&r;this.$backdrop=e('<div class="modal-backdrop '+r+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?e.proxy(this.$element[0].focus,this.$element[0]):e.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!t)return;i?this.$backdrop.one(e.support.transition.end,t):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,t):t()):t&&t()}};var n=e.fn.modal;e.fn.modal=function(n){return this.each(function(){var r=e(this),i=r.data("modal"),s=e.extend({},e.fn.modal.defaults,r.data(),typeof n=="object"&&n);i||r.data("modal",i=new t(this,s)),typeof n=="string"?i[n]():s.show&&i.show()})},e.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},e.fn.modal.Constructor=t,e.fn.modal.noConflict=function(){return e.fn.modal=n,this},e(document).on("click.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this),r=n.attr("href"),i=e(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),s=i.data("modal")?"toggle":e.extend({remote:!/#/.test(r)&&r},i.data(),n.data());t.preventDefault(),i.modal(s).one("hide",function(){n.focus()})})}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,n,r){var i,s,o,u,a;this.type=t,this.$element=e(n),this.options=this.getOptions(r),this.enabled=!0,o=this.options.trigger.split(" ");for(a=o.length;a--;)u=o[a],u=="click"?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):u!="manual"&&(i=u=="hover"?"mouseenter":"focus",s=u=="hover"?"mouseleave":"blur",this.$element.on(i+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,e.proxy(this.leave,this)));this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return t=e.extend({},e.fn[this.type].defaults,this.$element.data(),t),t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var n=e.fn[this.type].defaults,r={},i;this._options&&e.each(this._options,function(e,t){n[e]!=t&&(r[e]=t)},this),i=e(t.currentTarget)[this.type](r).data(this.type);if(!i.options.delay||!i.options.delay.show)return i.show();clearTimeout(this.timeout),i.hoverState="in",this.timeout=setTimeout(function(){i.hoverState=="in"&&i.show()},i.options.delay.show)},leave:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!n.options.delay||!n.options.delay.hide)return n.hide();n.hoverState="out",this.timeout=setTimeout(function(){n.hoverState=="out"&&n.hide()},n.options.delay.hide)},show:function(){var t,n,r,i,s,o,u=e.Event("show");if(this.hasContent()&&this.enabled){this.$element.trigger(u);if(u.isDefaultPrevented())return;t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),s=typeof this.options.placement=="function"?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,t.detach().css({top:0,left:0,display:"block"}),this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element),n=this.getPosition(),r=t[0].offsetWidth,i=t[0].offsetHeight;switch(s){case"bottom":o={top:n.top+n.height,left:n.left+n.width/2-r/2};break;case"top":o={top:n.top-i,left:n.left+n.width/2-r/2};break;case"left":o={top:n.top+n.height/2-i/2,left:n.left-r};break;case"right":o={top:n.top+n.height/2-i/2,left:n.left+n.width}}this.applyPlacement(o,s),this.$element.trigger("shown")}},applyPlacement:function(e,t){var n=this.tip(),r=n[0].offsetWidth,i=n[0].offsetHeight,s,o,u,a;n.offset(e).addClass(t).addClass("in"),s=n[0].offsetWidth,o=n[0].offsetHeight,t=="top"&&o!=i&&(e.top=e.top+i-o,a=!0),t=="bottom"||t=="top"?(u=0,e.left<0&&(u=e.left*-2,e.left=0,n.offset(e),s=n[0].offsetWidth,o=n[0].offsetHeight),this.replaceArrow(u-r+s,s,"left")):this.replaceArrow(o-i,o,"top"),a&&n.offset(e)},replaceArrow:function(e,t,n){this.arrow().css(n,e?50*(1-e/t)+"%":"")},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},hide:function(){function i(){var t=setTimeout(function(){n.off(e.support.transition.end).detach()},500);n.one(e.support.transition.end,function(){clearTimeout(t),n.detach()})}var t=this,n=this.tip(),r=e.Event("hide");this.$element.trigger(r);if(r.isDefaultPrevented())return;return n.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?i():n.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var e=this.$element;(e.attr("title")||typeof e.attr("data-original-title")!="string")&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var t=this.$element[0];return e.extend({},typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},getTitle:function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title),e},tip:function(){return this.$tip=this.$tip||e(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var n=t?e(t.currentTarget)[this.type](this._options).data(this.type):this;n.tip().hasClass("in")?n.hide():n.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var n=e.fn.tooltip;e.fn.tooltip=function(n){return this.each(function(){var r=e(this),i=r.data("tooltip"),s=typeof n=="object"&&n;i||r.data("tooltip",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.fn.tooltip.noConflict=function(){return e.fn.tooltip=n,this}}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("popover",e,t)};t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype,{constructor:t,setContent:function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content")[this.options.html?"html":"text"](n),e.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var e,t=this.$element,n=this.options;return e=(typeof n.content=="function"?n.content.call(t[0]):n.content)||t.attr("data-content"),e},tip:function(){return this.$tip||(this.$tip=e(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var n=e.fn.popover;e.fn.popover=function(n){return this.each(function(){var r=e(this),i=r.data("popover"),s=typeof n=="object"&&n;i||r.data("popover",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.popover.Constructor=t,e.fn.popover.defaults=e.extend({},e.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.fn.popover.noConflict=function(){return e.fn.popover=n,this}}(window.jQuery),!function(e){"use strict";function t(t,n){var r=e.proxy(this.process,this),i=e(t).is("body")?e(window):e(t),s;this.options=e.extend({},e.fn.scrollspy.defaults,n),this.$scrollElement=i.on("scroll.scroll-spy.data-api",r),this.selector=(this.options.target||(s=e(t).attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=e("body"),this.refresh(),this.process()}t.prototype={constructor:t,refresh:function(){var t=this,n;this.offsets=e([]),this.targets=e([]),n=this.$body.find(this.selector).map(function(){var n=e(this),r=n.data("target")||n.attr("href"),i=/^#\w/.test(r)&&e(r);return i&&i.length&&[[i.position().top+(!e.isWindow(t.$scrollElement.get(0))&&t.$scrollElement.scrollTop()),r]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},process:function(){var e=this.$scrollElement.scrollTop()+this.options.offset,t=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,n=t-this.$scrollElement.height(),r=this.offsets,i=this.targets,s=this.activeTarget,o;if(e>=n)return s!=(o=i.last()[0])&&this.activate(o);for(o=r.length;o--;)s!=i[o]&&e>=r[o]&&(!r[o+1]||e<=r[o+1])&&this.activate(i[o])},activate:function(t){var n,r;this.activeTarget=t,e(this.selector).parent(".active").removeClass("active"),r=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',n=e(r).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")}};var n=e.fn.scrollspy;e.fn.scrollspy=function(n){return this.each(function(){var r=e(this),i=r.data("scrollspy"),s=typeof n=="object"&&n;i||r.data("scrollspy",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.defaults={offset:10},e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=n,this},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(window.jQuery),!function(e){"use strict";var t=function(t){this.element=e(t)};t.prototype={constructor:t,show:function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),r=t.attr("data-target"),i,s,o;r||(r=t.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));if(t.parent("li").hasClass("active"))return;i=n.find(".active:last a")[0],o=e.Event("show",{relatedTarget:i}),t.trigger(o);if(o.isDefaultPrevented())return;s=e(r),this.activate(t.parent("li"),n),this.activate(s,s.parent(),function(){t.trigger({type:"shown",relatedTarget:i})})},activate:function(t,n,r){function o(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),r&&r()}var i=n.find("> .active"),s=r&&e.support.transition&&i.hasClass("fade");s?i.one(e.support.transition.end,o):o(),i.removeClass("in")}};var n=e.fn.tab;e.fn.tab=function(n){return this.each(function(){var r=e(this),i=r.data("tab");i||r.data("tab",i=new t(this)),typeof n=="string"&&i[n]()})},e.fn.tab.Constructor=t,e.fn.tab.noConflict=function(){return e.fn.tab=n,this},e(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e(this).tab("show")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=e(this.options.menu),this.shown=!1,this.listen()};t.prototype={constructor:t,select:function(){var e=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(e)).change(),this.hide()},updater:function(e){return e},show:function(){var t=e.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:t.top+t.height,left:t.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(t){var n;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(n=e.isFunction(this.source)?this.source(this.query,e.proxy(this.process,this)):this.source,n?this.process(n):this)},process:function(t){var n=this;return t=e.grep(t,function(e){return n.matcher(e)}),t=this.sorter(t),t.length?this.render(t.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(e){return~e.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(e){var t=[],n=[],r=[],i;while(i=e.shift())i.toLowerCase().indexOf(this.query.toLowerCase())?~i.indexOf(this.query)?n.push(i):r.push(i):t.push(i);return t.concat(n,r)},highlighter:function(e){var t=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return e.replace(new RegExp("("+t+")","ig"),function(e,t){return"<strong>"+t+"</strong>"})},render:function(t){var n=this;return t=e(t).map(function(t,r){return t=e(n.options.item).attr("data-value",r),t.find("a").html(n.highlighter(r)),t[0]}),t.first().addClass("active"),this.$menu.html(t),this},next:function(t){var n=this.$menu.find(".active").removeClass("active"),r=n.next();r.length||(r=e(this.$menu.find("li")[0])),r.addClass("active")},prev:function(e){var t=this.$menu.find(".active").removeClass("active"),n=t.prev();n.length||(n=this.$menu.find("li").last()),n.addClass("active")},listen:function(){this.$element.on("focus",e.proxy(this.focus,this)).on("blur",e.proxy(this.blur,this)).on("keypress",e.proxy(this.keypress,this)).on("keyup",e.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",e.proxy(this.keydown,this)),this.$menu.on("click",e.proxy(this.click,this)).on("mouseenter","li",e.proxy(this.mouseenter,this)).on("mouseleave","li",e.proxy(this.mouseleave,this))},eventSupported:function(e){var t=e in this.$element;return t||(this.$element.setAttribute(e,"return;"),t=typeof this.$element[e]=="function"),t},move:function(e){if(!this.shown)return;switch(e.keyCode){case 9:case 13:case 27:e.preventDefault();break;case 38:e.preventDefault(),this.prev();break;case 40:e.preventDefault(),this.next()}e.stopPropagation()},keydown:function(t){this.suppressKeyPressRepeat=~e.inArray(t.keyCode,[40,38,9,13,27]),this.move(t)},keypress:function(e){if(this.suppressKeyPressRepeat)return;this.move(e)},keyup:function(e){switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}e.stopPropagation(),e.preventDefault()},focus:function(e){this.focused=!0},blur:function(e){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(e){e.stopPropagation(),e.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(t){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),e(t.currentTarget).addClass("active")},mouseleave:function(e){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var n=e.fn.typeahead;e.fn.typeahead=function(n){return this.each(function(){var r=e(this),i=r.data("typeahead"),s=typeof n=="object"&&n;i||r.data("typeahead",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},e.fn.typeahead.Constructor=t,e.fn.typeahead.noConflict=function(){return e.fn.typeahead=n,this},e(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(t){var n=e(this);if(n.data("typeahead"))return;n.typeahead(n.data())})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=e.extend({},e.fn.affix.defaults,n),this.$window=e(window).on("scroll.affix.data-api",e.proxy(this.checkPosition,this)).on("click.affix.data-api",e.proxy(function(){setTimeout(e.proxy(this.checkPosition,this),1)},this)),this.$element=e(t),this.checkPosition()};t.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var t=e(document).height(),n=this.$window.scrollTop(),r=this.$element.offset(),i=this.options.offset,s=i.bottom,o=i.top,u="affix affix-top affix-bottom",a;typeof i!="object"&&(s=o=i),typeof o=="function"&&(o=i.top()),typeof s=="function"&&(s=i.bottom()),a=this.unpin!=null&&n+this.unpin<=r.top?!1:s!=null&&r.top+this.$element.height()>=t-s?"bottom":o!=null&&n<=o?"top":!1;if(this.affixed===a)return;this.affixed=a,this.unpin=a=="bottom"?r.top-n:null,this.$element.removeClass(u).addClass("affix"+(a?"-"+a:""))};var n=e.fn.affix;e.fn.affix=function(n){return this.each(function(){var r=e(this),i=r.data("affix"),s=typeof n=="object"&&n;i||r.data("affix",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.affix.Constructor=t,e.fn.affix.defaults={offset:0},e.fn.affix.noConflict=function(){return e.fn.affix=n,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),n=t.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),t.affix(n)})})}(window.jQuery);
;//! moment.js
//! version : 2.4.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(a,b){return function(c){return i(a.call(this,c),b)}}function c(a,b){return function(c){return this.lang().ordinal(a.call(this,c),b)}}function d(){}function e(a){u(a),g(this,a)}function f(a){var b=o(a),c=b.year||0,d=b.month||0,e=b.week||0,f=b.day||0,g=b.hour||0,h=b.minute||0,i=b.second||0,j=b.millisecond||0;this._input=a,this._milliseconds=+j+1e3*i+6e4*h+36e5*g,this._days=+f+7*e,this._months=+d+12*c,this._data={},this._bubble()}function g(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return b.hasOwnProperty("toString")&&(a.toString=b.toString),b.hasOwnProperty("valueOf")&&(a.valueOf=b.valueOf),a}function h(a){return 0>a?Math.ceil(a):Math.floor(a)}function i(a,b){for(var c=a+"";c.length<b;)c="0"+c;return c}function j(a,b,c,d){var e,f,g=b._milliseconds,h=b._days,i=b._months;g&&a._d.setTime(+a._d+g*c),(h||i)&&(e=a.minute(),f=a.hour()),h&&a.date(a.date()+h*c),i&&a.month(a.month()+i*c),g&&!d&&bb.updateOffset(a),(h||i)&&(a.minute(e),a.hour(f))}function k(a){return"[object Array]"===Object.prototype.toString.call(a)}function l(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function m(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&q(a[d])!==q(b[d]))&&g++;return g+f}function n(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=Kb[a]||Lb[b]||b}return a}function o(a){var b,c,d={};for(c in a)a.hasOwnProperty(c)&&(b=n(c),b&&(d[b]=a[c]));return d}function p(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}bb[b]=function(e,f){var g,h,i=bb.fn._lang[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=bb().utc().set(d,a);return i.call(bb.fn._lang,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function q(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function r(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function s(a){return t(a)?366:365}function t(a){return 0===a%4&&0!==a%100||0===a%400}function u(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[gb]<0||a._a[gb]>11?gb:a._a[hb]<1||a._a[hb]>r(a._a[fb],a._a[gb])?hb:a._a[ib]<0||a._a[ib]>23?ib:a._a[jb]<0||a._a[jb]>59?jb:a._a[kb]<0||a._a[kb]>59?kb:a._a[lb]<0||a._a[lb]>999?lb:-1,a._pf._overflowDayOfYear&&(fb>b||b>hb)&&(b=hb),a._pf.overflow=b)}function v(a){a._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function w(a){return null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&a._pf.overflow<0&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length)),a._isValid}function x(a){return a?a.toLowerCase().replace("_","-"):a}function y(a,b){return b.abbr=a,mb[a]||(mb[a]=new d),mb[a].set(b),mb[a]}function z(a){delete mb[a]}function A(a){var b,c,d,e,f=0,g=function(a){if(!mb[a]&&nb)try{require("./lang/"+a)}catch(b){}return mb[a]};if(!a)return bb.fn._lang;if(!k(a)){if(c=g(a))return c;a=[a]}for(;f<a.length;){for(e=x(a[f]).split("-"),b=e.length,d=x(a[f+1]),d=d?d.split("-"):null;b>0;){if(c=g(e.slice(0,b).join("-")))return c;if(d&&d.length>=b&&m(e,d,!0)>=b-1)break;b--}f++}return bb.fn._lang}function B(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function C(a){var b,c,d=a.match(rb);for(b=0,c=d.length;c>b;b++)d[b]=Pb[d[b]]?Pb[d[b]]:B(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function D(a,b){return a.isValid()?(b=E(b,a.lang()),Mb[b]||(Mb[b]=C(b)),Mb[b](a)):a.lang().invalidDate()}function E(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(sb.lastIndex=0;d>=0&&sb.test(a);)a=a.replace(sb,c),sb.lastIndex=0,d-=1;return a}function F(a,b){var c;switch(a){case"DDDD":return vb;case"YYYY":case"GGGG":case"gggg":return wb;case"YYYYY":case"GGGGG":case"ggggg":return xb;case"S":case"SS":case"SSS":case"DDD":return ub;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return zb;case"a":case"A":return A(b._l)._meridiemParse;case"X":return Cb;case"Z":case"ZZ":return Ab;case"T":return Bb;case"SSSS":return yb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"ww":case"W":case"WW":case"e":case"E":return tb;default:return c=new RegExp(N(M(a.replace("\\","")),"i"))}}function G(a){var b=(Ab.exec(a)||[])[0],c=(b+"").match(Hb)||["-",0,0],d=+(60*c[1])+q(c[2]);return"+"===c[0]?-d:d}function H(a,b,c){var d,e=c._a;switch(a){case"M":case"MM":null!=b&&(e[gb]=q(b)-1);break;case"MMM":case"MMMM":d=A(c._l).monthsParse(b),null!=d?e[gb]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[hb]=q(b));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=q(b));break;case"YY":e[fb]=q(b)+(q(b)>68?1900:2e3);break;case"YYYY":case"YYYYY":e[fb]=q(b);break;case"a":case"A":c._isPm=A(c._l).isPM(b);break;case"H":case"HH":case"h":case"hh":e[ib]=q(b);break;case"m":case"mm":e[jb]=q(b);break;case"s":case"ss":e[kb]=q(b);break;case"S":case"SS":case"SSS":case"SSSS":e[lb]=q(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=G(b);break;case"w":case"ww":case"W":case"WW":case"d":case"dd":case"ddd":case"dddd":case"e":case"E":a=a.substr(0,1);case"gg":case"gggg":case"GG":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=b)}}function I(a){var b,c,d,e,f,g,h,i,j,k,l=[];if(!a._d){for(d=K(a),a._w&&null==a._a[hb]&&null==a._a[gb]&&(f=function(b){return b?b.length<3?parseInt(b,10)>68?"19"+b:"20"+b:b:null==a._a[fb]?bb().weekYear():a._a[fb]},g=a._w,null!=g.GG||null!=g.W||null!=g.E?h=X(f(g.GG),g.W||1,g.E,4,1):(i=A(a._l),j=null!=g.d?T(g.d,i):null!=g.e?parseInt(g.e,10)+i._week.dow:0,k=parseInt(g.w,10)||1,null!=g.d&&j<i._week.dow&&k++,h=X(f(g.gg),k,j,i._week.doy,i._week.dow)),a._a[fb]=h.year,a._dayOfYear=h.dayOfYear),a._dayOfYear&&(e=null==a._a[fb]?d[fb]:a._a[fb],a._dayOfYear>s(e)&&(a._pf._overflowDayOfYear=!0),c=S(e,0,a._dayOfYear),a._a[gb]=c.getUTCMonth(),a._a[hb]=c.getUTCDate()),b=0;3>b&&null==a._a[b];++b)a._a[b]=l[b]=d[b];for(;7>b;b++)a._a[b]=l[b]=null==a._a[b]?2===b?1:0:a._a[b];l[ib]+=q((a._tzm||0)/60),l[jb]+=q((a._tzm||0)%60),a._d=(a._useUTC?S:R).apply(null,l)}}function J(a){var b;a._d||(b=o(a._i),a._a=[b.year,b.month,b.day,b.hour,b.minute,b.second,b.millisecond],I(a))}function K(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function L(a){a._a=[],a._pf.empty=!0;var b,c,d,e,f,g=A(a._l),h=""+a._i,i=h.length,j=0;for(d=E(a._f,g).match(rb)||[],b=0;b<d.length;b++)e=d[b],c=(F(e,a).exec(h)||[])[0],c&&(f=h.substr(0,h.indexOf(c)),f.length>0&&a._pf.unusedInput.push(f),h=h.slice(h.indexOf(c)+c.length),j+=c.length),Pb[e]?(c?a._pf.empty=!1:a._pf.unusedTokens.push(e),H(e,c,a)):a._strict&&!c&&a._pf.unusedTokens.push(e);a._pf.charsLeftOver=i-j,h.length>0&&a._pf.unusedInput.push(h),a._isPm&&a._a[ib]<12&&(a._a[ib]+=12),a._isPm===!1&&12===a._a[ib]&&(a._a[ib]=0),I(a),u(a)}function M(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function N(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function O(a){var b,c,d,e,f;if(0===a._f.length)return a._pf.invalidFormat=!0,a._d=new Date(0/0),void 0;for(e=0;e<a._f.length;e++)f=0,b=g({},a),v(b),b._f=a._f[e],L(b),w(b)&&(f+=b._pf.charsLeftOver,f+=10*b._pf.unusedTokens.length,b._pf.score=f,(null==d||d>f)&&(d=f,c=b));g(a,c||b)}function P(a){var b,c=a._i,d=Db.exec(c);if(d){for(a._pf.iso=!0,b=4;b>0;b--)if(d[b]){a._f=Fb[b-1]+(d[6]||" ");break}for(b=0;4>b;b++)if(Gb[b][1].exec(c)){a._f+=Gb[b][0];break}Ab.exec(c)&&(a._f+="Z"),L(a)}else a._d=new Date(c)}function Q(b){var c=b._i,d=ob.exec(c);c===a?b._d=new Date:d?b._d=new Date(+d[1]):"string"==typeof c?P(b):k(c)?(b._a=c.slice(0),I(b)):l(c)?b._d=new Date(+c):"object"==typeof c?J(b):b._d=new Date(c)}function R(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function S(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function T(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function U(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function V(a,b,c){var d=eb(Math.abs(a)/1e3),e=eb(d/60),f=eb(e/60),g=eb(f/24),h=eb(g/365),i=45>d&&["s",d]||1===e&&["m"]||45>e&&["mm",e]||1===f&&["h"]||22>f&&["hh",f]||1===g&&["d"]||25>=g&&["dd",g]||45>=g&&["M"]||345>g&&["MM",eb(g/30)]||1===h&&["y"]||["yy",h];return i[2]=b,i[3]=a>0,i[4]=c,U.apply({},i)}function W(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=bb(a).add("d",f),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function X(a,b,c,d,e){var f,g,h=new Date(Date.UTC(a,0)).getUTCDay();return c=null!=c?c:e,f=e-h+(h>d?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:s(a-1)+g}}function Y(a){var b=a._i,c=a._f;return"undefined"==typeof a._pf&&v(a),null===b?bb.invalid({nullInput:!0}):("string"==typeof b&&(a._i=b=A().preparse(b)),bb.isMoment(b)?(a=g({},b),a._d=new Date(+b._d)):c?k(c)?O(a):L(a):Q(a),new e(a))}function Z(a,b){bb.fn[a]=bb.fn[a+"s"]=function(a){var c=this._isUTC?"UTC":"";return null!=a?(this._d["set"+c+b](a),bb.updateOffset(this),this):this._d["get"+c+b]()}}function $(a){bb.duration.fn[a]=function(){return this._data[a]}}function _(a,b){bb.duration.fn["as"+a]=function(){return+this/b}}function ab(a){var b=!1,c=bb;"undefined"==typeof ender&&(this.moment=a?function(){return!b&&console&&console.warn&&(b=!0,console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")),c.apply(null,arguments)}:bb)}for(var bb,cb,db="2.4.0",eb=Math.round,fb=0,gb=1,hb=2,ib=3,jb=4,kb=5,lb=6,mb={},nb="undefined"!=typeof module&&module.exports,ob=/^\/?Date\((\-?\d+)/i,pb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,qb=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,rb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,sb=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,tb=/\d\d?/,ub=/\d{1,3}/,vb=/\d{3}/,wb=/\d{1,4}/,xb=/[+\-]?\d{1,6}/,yb=/\d+/,zb=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Ab=/Z|[\+\-]\d\d:?\d\d/i,Bb=/T/i,Cb=/[\+\-]?\d+(\.\d{1,3})?/,Db=/^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d:?\d\d|Z)?)?$/,Eb="YYYY-MM-DDTHH:mm:ssZ",Fb=["YYYY-MM-DD","GGGG-[W]WW","GGGG-[W]WW-E","YYYY-DDD"],Gb=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],Hb=/([\+\-]|\d\d)/gi,Ib="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),Jb={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},Kb={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},Lb={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},Mb={},Nb="DDD w W M D d".split(" "),Ob="M D H h m s w W".split(" "),Pb={M:function(){return this.month()+1},MMM:function(a){return this.lang().monthsShort(this,a)},MMMM:function(a){return this.lang().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.lang().weekdaysMin(this,a)},ddd:function(a){return this.lang().weekdaysShort(this,a)},dddd:function(a){return this.lang().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return i(this.year()%100,2)},YYYY:function(){return i(this.year(),4)},YYYYY:function(){return i(this.year(),5)},gg:function(){return i(this.weekYear()%100,2)},gggg:function(){return this.weekYear()},ggggg:function(){return i(this.weekYear(),5)},GG:function(){return i(this.isoWeekYear()%100,2)},GGGG:function(){return this.isoWeekYear()},GGGGG:function(){return i(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return q(this.milliseconds()/100)},SS:function(){return i(q(this.milliseconds()/10),2)},SSS:function(){return i(this.milliseconds(),3)},SSSS:function(){return i(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+i(q(a/60),2)+":"+i(q(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+i(q(10*a/6),4)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()}},Qb=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];Nb.length;)cb=Nb.pop(),Pb[cb+"o"]=c(Pb[cb],cb);for(;Ob.length;)cb=Ob.pop(),Pb[cb+cb]=b(Pb[cb],2);for(Pb.DDDD=b(Pb.DDD,3),g(d.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=bb.utc([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=bb([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return W(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),bb=function(b,c,d,e){return"boolean"==typeof d&&(e=d,d=a),Y({_i:b,_f:c,_l:d,_strict:e,_isUTC:!1})},bb.utc=function(b,c,d,e){var f;return"boolean"==typeof d&&(e=d,d=a),f=Y({_useUTC:!0,_isUTC:!0,_l:d,_i:b,_f:c,_strict:e}).utc()},bb.unix=function(a){return bb(1e3*a)},bb.duration=function(a,b){var c,d,e,g=bb.isDuration(a),h="number"==typeof a,i=g?a._input:h?{}:a,j=null;return h?b?i[b]=a:i.milliseconds=a:(j=pb.exec(a))?(c="-"===j[1]?-1:1,i={y:0,d:q(j[hb])*c,h:q(j[ib])*c,m:q(j[jb])*c,s:q(j[kb])*c,ms:q(j[lb])*c}):(j=qb.exec(a))&&(c="-"===j[1]?-1:1,e=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*c},i={y:e(j[2]),M:e(j[3]),d:e(j[4]),h:e(j[5]),m:e(j[6]),s:e(j[7]),w:e(j[8])}),d=new f(i),g&&a.hasOwnProperty("_lang")&&(d._lang=a._lang),d},bb.version=db,bb.defaultFormat=Eb,bb.updateOffset=function(){},bb.lang=function(a,b){var c;return a?(b?y(x(a),b):null===b?(z(a),a="en"):mb[a]||A(a),c=bb.duration.fn._lang=bb.fn._lang=A(a),c._abbr):bb.fn._lang._abbr},bb.langData=function(a){return a&&a._lang&&a._lang._abbr&&(a=a._lang._abbr),A(a)},bb.isMoment=function(a){return a instanceof e},bb.isDuration=function(a){return a instanceof f},cb=Qb.length-1;cb>=0;--cb)p(Qb[cb]);for(bb.normalizeUnits=function(a){return n(a)},bb.invalid=function(a){var b=bb.utc(0/0);return null!=a?g(b._pf,a):b._pf.userInvalidated=!0,b},bb.parseZone=function(a){return bb(a).parseZone()},g(bb.fn=e.prototype,{clone:function(){return bb(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){return D(bb(this).utc(),"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return w(this)},isDSTShifted:function(){return this._a?this.isValid()&&m(this._a,(this._isUTC?bb.utc(this._a):bb(this._a)).toArray())>0:!1},parsingFlags:function(){return g({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(a){var b=D(this,a||bb.defaultFormat);return this.lang().postformat(b)},add:function(a,b){var c;return c="string"==typeof a?bb.duration(+b,a):bb.duration(a,b),j(this,c,1),this},subtract:function(a,b){var c;return c="string"==typeof a?bb.duration(+b,a):bb.duration(a,b),j(this,c,-1),this},diff:function(a,b,c){var d,e,f=this._isUTC?bb(a).zone(this._offset||0):bb(a).local(),g=6e4*(this.zone()-f.zone());return b=n(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+f.daysInMonth()),e=12*(this.year()-f.year())+(this.month()-f.month()),e+=(this-bb(this).startOf("month")-(f-bb(f).startOf("month")))/d,e-=6e4*(this.zone()-bb(this).startOf("month").zone()-(f.zone()-bb(f).startOf("month").zone()))/d,"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:h(e)},from:function(a,b){return bb.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)},fromNow:function(a){return this.from(bb(),a)},calendar:function(){var a=this.diff(bb().zone(this.zone()).startOf("day"),"days",!0),b=-6>a?"sameElse":-1>a?"lastWeek":0>a?"lastDay":1>a?"sameDay":2>a?"nextDay":7>a?"nextWeek":"sameElse";return this.format(this.lang().calendar(b,this))},isLeapYear:function(){return t(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=T(a,this.lang()),this.add({d:a-b})):b},month:function(a){var b,c=this._isUTC?"UTC":"";return null!=a?"string"==typeof a&&(a=this.lang().monthsParse(a),"number"!=typeof a)?this:(b=this.date(),this.date(1),this._d["set"+c+"Month"](a),this.date(Math.min(b,this.daysInMonth())),bb.updateOffset(this),this):this._d["get"+c+"Month"]()},startOf:function(a){switch(a=n(a)){case"year":this.month(0);case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),this},endOf:function(a){return a=n(a),this.startOf(a).add("isoWeek"===a?"week":a,1).subtract("ms",1)},isAfter:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)>+bb(a).startOf(b)},isBefore:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)<+bb(a).startOf(b)},isSame:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)===+bb(a).startOf(b)},min:function(a){return a=bb.apply(null,arguments),this>a?this:a},max:function(a){return a=bb.apply(null,arguments),a>this?this:a},zone:function(a){var b=this._offset||0;return null==a?this._isUTC?b:this._d.getTimezoneOffset():("string"==typeof a&&(a=G(a)),Math.abs(a)<16&&(a=60*a),this._offset=a,this._isUTC=!0,b!==a&&j(this,bb.duration(b-a,"m"),1,!0),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?bb(a).zone():0,0===(this.zone()-a)%60},daysInMonth:function(){return r(this.year(),this.month())},dayOfYear:function(a){var b=eb((bb(this).startOf("day")-bb(this).startOf("year"))/864e5)+1;return null==a?b:this.add("d",a-b)},weekYear:function(a){var b=W(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==a?b:this.add("y",a-b)},isoWeekYear:function(a){var b=W(this,1,4).year;return null==a?b:this.add("y",a-b)},week:function(a){var b=this.lang().week(this);return null==a?b:this.add("d",7*(a-b))},isoWeek:function(a){var b=W(this,1,4).week;return null==a?b:this.add("d",7*(a-b))},weekday:function(a){var b=(this.day()+7-this.lang()._week.dow)%7;return null==a?b:this.add("d",a-b)},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},get:function(a){return a=n(a),this[a]()},set:function(a,b){return a=n(a),"function"==typeof this[a]&&this[a](b),this},lang:function(b){return b===a?this._lang:(this._lang=A(b),this)}}),cb=0;cb<Ib.length;cb++)Z(Ib[cb].toLowerCase().replace(/s$/,""),Ib[cb]);Z("year","FullYear"),bb.fn.days=bb.fn.day,bb.fn.months=bb.fn.month,bb.fn.weeks=bb.fn.week,bb.fn.isoWeeks=bb.fn.isoWeek,bb.fn.toJSON=bb.fn.toISOString,g(bb.duration.fn=f.prototype,{_bubble:function(){var a,b,c,d,e=this._milliseconds,f=this._days,g=this._months,i=this._data;i.milliseconds=e%1e3,a=h(e/1e3),i.seconds=a%60,b=h(a/60),i.minutes=b%60,c=h(b/60),i.hours=c%24,f+=h(c/24),i.days=f%30,g+=h(f/30),i.months=g%12,d=h(g/12),i.years=d},weeks:function(){return h(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+2592e6*(this._months%12)+31536e6*q(this._months/12)},humanize:function(a){var b=+this,c=V(b,!a,this.lang());return a&&(c=this.lang().pastFuture(b,c)),this.lang().postformat(c)},add:function(a,b){var c=bb.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=bb.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=n(a),this[a.toLowerCase()+"s"]()},as:function(a){return a=n(a),this["as"+a.charAt(0).toUpperCase()+a.slice(1)+"s"]()},lang:bb.fn.lang,toIsoString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"}});for(cb in Jb)Jb.hasOwnProperty(cb)&&(_(cb,Jb[cb]),$(cb.toLowerCase()));_("Weeks",6048e5),bb.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},bb.lang("en",{ordinal:function(a){var b=a%10,c=1===q(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),nb?(module.exports=bb,ab(!0)):"function"==typeof define&&define.amd?define("moment",function(b,c,d){return d.config().noGlobal!==!0&&ab(d.config().noGlobal===a),bb}):ab()}).call(this);
