"use strict";(self.webpackChunkt_zero_user_operation_frontend=self.webpackChunkt_zero_user_operation_frontend||[]).push([[7114],{63142:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var n=r(4942),a=r(87757),c=r.n(a),o=r(92456);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=function(e){return(0,o.ZP)("post","/message/scene/list?pageSize=".concat(e.pageSize,"&currentPage=").concat(e.currentPage),u({},e))},p=function(e){return(0,o.ZP)("post","/message/scene/modify",u({},e))},i=function(e){return(0,o.ZP)("get","/message/scene/delete",u({},e))},f=function(e){return(0,o.ZP)("post","/message/scene/save",u({},e))};function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const v={namespace:"sceneManage",state:{registerInfo:{}},reducers:{save2state:function(e,t){var r=t.payload;return b(b({},e),r)}},effects:{getSceneLists:c().mark((function e(t,r){var n,a,o,s,u,p;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.opt,o=t.callback,s=r.put,u=r.call,e.next=4,u(l,b({},a));case 4:return p=e.sent,e.next=7,s({type:"save2state",payload:{registerInfo:(null==p||null===(n=p.data)||void 0===n?void 0:n.data)||[],params:a}});case 7:null==o||o.call(null,p);case 8:case"end":return e.stop()}}),e)})),modifySceneInfo:c().mark((function e(t,r){var n,a,o,s,u,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.opt,o=t.callback,s=r.put,u=r.call,e.next=4,u(p,b({},a));case 4:return l=e.sent,e.next=7,s({type:"save2state",payload:{registerInfo:(null==l||null===(n=l.data)||void 0===n?void 0:n.data)||[],params:a}});case 7:null==o||o.call(null,l);case 8:case"end":return e.stop()}}),e)})),deleteSceneInfo:c().mark((function e(t,r){var n,a,o,s,u,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.opt,o=t.callback,s=r.put,u=r.call,e.next=4,u(i,b({},a));case 4:return l=e.sent,e.next=7,s({type:"save2state",payload:{registerInfo:(null==l||null===(n=l.data)||void 0===n?void 0:n.data)||[],params:a}});case 7:null==o||o.call(null,l);case 8:case"end":return e.stop()}}),e)})),saveSceneInfo:c().mark((function e(t,r){var n,a,o,s,u,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.opt,o=t.callback,s=r.put,u=r.call,e.next=4,u(f,b({},a));case 4:return l=e.sent,e.next=7,s({type:"save2state",payload:{registerInfo:(null==l||null===(n=l.data)||void 0===n?void 0:n.data)||[],params:a}});case 7:null==o||o.call(null,l);case 8:case"end":return e.stop()}}),e)}))}}}}]);