"use strict";(self.webpackChunkt_zero_user_operation_frontend=self.webpackChunkt_zero_user_operation_frontend||[]).push([[2824],{42824:(e,t,r)=>{r.r(t),r.d(t,{default:()=>P});var n=r(4942),a=r(87757),o=r.n(a),s=r(44925),c=r(92456),l=["pageSize","currentPage"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e){e.pageSize,e.currentPage;var t=(0,s.Z)(e,l);return(0,c.ZP)("post","/permission/list?pageSize=1000&currentPage=1",i({},t))},f=function(e){return(0,c.ZP)("get","/permission/get",i({},e))},d=function(e){return(0,c.ZP)("post","/permission/modify",i({},e))},v=function(e){return(0,c.ZP)("get","/permission/delete",i({},e))},g=function(e){return(0,c.ZP)("post","/permission/save",i({},e))},b=function(e){return console.log("servers--getProduct::",e),(0,c.ZP)("get","/product/list",i({},e))};function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const P={namespace:"permissionManage",state:{registerInfo:{}},reducers:{save2state:function(e,t){var r=t.payload;return O(O({},e),r)}},effects:{getPermissionLists:o().mark((function e(t,r){var n,a,s,c,l,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.opt,s=t.callback,c=r.put,l=r.call,e.next=4,l(p,O({},a));case 4:return u=e.sent,e.next=7,c({type:"save2state",payload:{registerInfo:(null==u||null===(n=u.data)||void 0===n?void 0:n.data)||[],params:a}});case 7:null==s||s.call(null,u);case 8:case"end":return e.stop()}}),e)})),getPermissionInfo:o().mark((function e(t,r){var n,a,s,c,l,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.opt,s=t.callback,c=r.put,l=r.call,e.next=4,l(f,O({},a));case 4:return u=e.sent,e.next=7,c({type:"save2state",payload:{registerInfo:(null==u||null===(n=u.data)||void 0===n?void 0:n.data)||[],params:a}});case 7:null==s||s.call(null,u);case 8:case"end":return e.stop()}}),e)})),modifyPermissionInfo:o().mark((function e(t,r){var n,a,s,c,l,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.opt,s=t.callback,c=r.put,l=r.call,e.next=4,l(d,O({},a));case 4:return u=e.sent,e.next=7,c({type:"save2state",payload:{registerInfo:(null==u||null===(n=u.data)||void 0===n?void 0:n.data)||[],params:a}});case 7:null==s||s.call(null,u);case 8:case"end":return e.stop()}}),e)})),deletePermissionInfo:o().mark((function e(t,r){var n,a,s,c,l,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.opt,s=t.callback,c=r.put,l=r.call,e.next=4,l(v,O({},a));case 4:return u=e.sent,e.next=7,c({type:"save2state",payload:{registerInfo:(null==u||null===(n=u.data)||void 0===n?void 0:n.data)||[],params:a}});case 7:null==s||s.call(null,u);case 8:case"end":return e.stop()}}),e)})),savePermissionInfo:o().mark((function e(t,r){var n,a,s,c,l,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.opt,s=t.callback,c=r.put,l=r.call,e.next=4,l(g,O({},a));case 4:return u=e.sent,e.next=7,c({type:"save2state",payload:{registerInfo:(null==u||null===(n=u.data)||void 0===n?void 0:n.data)||[],params:a}});case 7:null==s||s.call(null,u);case 8:case"end":return e.stop()}}),e)})),getProduct:o().mark((function e(t,r){var n,a,s,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.opt,a=t.callback,r.put,s=r.call,console.log("opt::",n),e.next=5,s(b,O({},n));case 5:c=e.sent,console.log("res::",c),null==a||a.call(null,c);case 8:case"end":return e.stop()}}),e)}))}}}}]);