"use strict";(self.webpackChunkt_zero_user_operation_frontend=self.webpackChunkt_zero_user_operation_frontend||[]).push([[5402],{4258:(e,n,t)=>{t.d(n,{Z:()=>E});var o=t(87462),r=t(4942),a=t(44925),c=t(1413),i=t(15671),d=t(43144),s=t(97326),l=t(79340),p=t(54062),u=t(67294),f=t(94184),h=t.n(f),v=t(27822),g=t(10225);const k=function(e){for(var n=e.prefixCls,t=e.level,o=e.isStart,a=e.isEnd,c="".concat(n,"-indent-unit"),i=[],d=0;d<t;d+=1){var s;i.push(u.createElement("span",{key:d,className:h()(c,(s={},(0,r.Z)(s,"".concat(c,"-start"),o[d]),(0,r.Z)(s,"".concat(c,"-end"),a[d]),s))}))}return u.createElement("span",{"aria-hidden":"true",className:"".concat(n,"-indent")},i)};var y=t(1089),x=["eventKey","className","style","dragOver","dragOverGapTop","dragOverGapBottom","isLeaf","isStart","isEnd","expanded","selected","checked","halfChecked","loading","domRef","active","data","onMouseMove"],b="open",m="close",C=function(e){(0,l.Z)(t,e);var n=(0,p.Z)(t);function t(){var e;(0,i.Z)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=n.call.apply(n,[this].concat(r))).state={dragNodeHighlight:!1},e.selectHandle=void 0,e.onSelectorClick=function(n){(0,e.props.context.onNodeClick)(n,(0,y.F)(e.props)),e.isSelectable()?e.onSelect(n):e.onCheck(n)},e.onSelectorDoubleClick=function(n){(0,e.props.context.onNodeDoubleClick)(n,(0,y.F)(e.props))},e.onSelect=function(n){if(!e.isDisabled()){var t=e.props.context.onNodeSelect;n.preventDefault(),t(n,(0,y.F)(e.props))}},e.onCheck=function(n){if(!e.isDisabled()){var t=e.props,o=t.disableCheckbox,r=t.checked,a=e.props.context.onNodeCheck;if(e.isCheckable()&&!o){n.preventDefault();var c=!r;a(n,(0,y.F)(e.props),c)}}},e.onMouseEnter=function(n){(0,e.props.context.onNodeMouseEnter)(n,(0,y.F)(e.props))},e.onMouseLeave=function(n){(0,e.props.context.onNodeMouseLeave)(n,(0,y.F)(e.props))},e.onContextMenu=function(n){(0,e.props.context.onNodeContextMenu)(n,(0,y.F)(e.props))},e.onDragStart=function(n){var t=e.props.context.onNodeDragStart;n.stopPropagation(),e.setState({dragNodeHighlight:!0}),t(n,(0,s.Z)(e));try{n.dataTransfer.setData("text/plain","")}catch(e){}},e.onDragEnter=function(n){var t=e.props.context.onNodeDragEnter;n.preventDefault(),n.stopPropagation(),t(n,(0,s.Z)(e))},e.onDragOver=function(n){var t=e.props.context.onNodeDragOver;n.preventDefault(),n.stopPropagation(),t(n,(0,s.Z)(e))},e.onDragLeave=function(n){var t=e.props.context.onNodeDragLeave;n.stopPropagation(),t(n,(0,s.Z)(e))},e.onDragEnd=function(n){var t=e.props.context.onNodeDragEnd;n.stopPropagation(),e.setState({dragNodeHighlight:!1}),t(n,(0,s.Z)(e))},e.onDrop=function(n){var t=e.props.context.onNodeDrop;n.preventDefault(),n.stopPropagation(),e.setState({dragNodeHighlight:!1}),t(n,(0,s.Z)(e))},e.onExpand=function(n){var t=e.props,o=t.loading,r=t.context.onNodeExpand;o||r(n,(0,y.F)(e.props))},e.setSelectHandle=function(n){e.selectHandle=n},e.getNodeState=function(){var n=e.props.expanded;return e.isLeaf()?null:n?b:m},e.hasChildren=function(){var n=e.props.eventKey;return!!((e.props.context.keyEntities[n]||{}).children||[]).length},e.isLeaf=function(){var n=e.props,t=n.isLeaf,o=n.loaded,r=e.props.context.loadData,a=e.hasChildren();return!1!==t&&(t||!r&&!a||r&&o&&!a)},e.isDisabled=function(){var n=e.props.disabled;return!(!e.props.context.disabled&&!n)},e.isCheckable=function(){var n=e.props.checkable,t=e.props.context.checkable;return!(!t||!1===n)&&t},e.syncLoadData=function(n){var t=n.expanded,o=n.loading,r=n.loaded,a=e.props.context,c=a.loadData,i=a.onNodeLoad;o||c&&t&&!e.isLeaf()&&(e.hasChildren()||r||i((0,y.F)(e.props)))},e.renderSwitcherIconDom=function(n){var t=e.props.switcherIcon,o=e.props.context.switcherIcon,r=t||o;return"function"==typeof r?r((0,c.Z)((0,c.Z)({},e.props),{},{isLeaf:n})):r},e.renderSwitcher=function(){var n=e.props.expanded,t=e.props.context.prefixCls;if(e.isLeaf()){var o=e.renderSwitcherIconDom(!0);return!1!==o?u.createElement("span",{className:h()("".concat(t,"-switcher"),"".concat(t,"-switcher-noop"))},o):null}var r=h()("".concat(t,"-switcher"),"".concat(t,"-switcher_").concat(n?b:m)),a=e.renderSwitcherIconDom(!1);return!1!==a?u.createElement("span",{onClick:e.onExpand,className:r},a):null},e.renderCheckbox=function(){var n=e.props,t=n.checked,o=n.halfChecked,r=n.disableCheckbox,a=e.props.context.prefixCls,c=e.isDisabled(),i=e.isCheckable();if(!i)return null;var d="boolean"!=typeof i?i:null;return u.createElement("span",{className:h()("".concat(a,"-checkbox"),t&&"".concat(a,"-checkbox-checked"),!t&&o&&"".concat(a,"-checkbox-indeterminate"),(c||r)&&"".concat(a,"-checkbox-disabled")),onClick:e.onCheck},d)},e.renderIcon=function(){var n=e.props.loading,t=e.props.context.prefixCls;return u.createElement("span",{className:h()("".concat(t,"-iconEle"),"".concat(t,"-icon__").concat(e.getNodeState()||"docu"),n&&"".concat(t,"-icon_loading"))})},e.renderSelector=function(){var n,t,o=e.state.dragNodeHighlight,r=e.props,a=r.title,c=r.selected,i=r.icon,d=r.loading,s=r.data,l=e.props.context,p=l.prefixCls,f=l.showIcon,v=l.icon,g=l.draggable,k=l.loadData,y=l.titleRender,x=e.isDisabled(),b="function"==typeof g?g(s):g,m="".concat(p,"-node-content-wrapper");if(f){var C=i||v;n=C?u.createElement("span",{className:h()("".concat(p,"-iconEle"),"".concat(p,"-icon__customize"))},"function"==typeof C?C(e.props):C):e.renderIcon()}else k&&d&&(n=e.renderIcon());t="function"==typeof a?a(s):y?y(s):a;var N=u.createElement("span",{className:"".concat(p,"-title")},t);return u.createElement("span",{ref:e.setSelectHandle,title:"string"==typeof a?a:"",className:h()("".concat(m),"".concat(m,"-").concat(e.getNodeState()||"normal"),!x&&(c||o)&&"".concat(p,"-node-selected"),!x&&b&&"draggable"),draggable:!x&&b||void 0,"aria-grabbed":!x&&b||void 0,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onContextMenu:e.onContextMenu,onClick:e.onSelectorClick,onDoubleClick:e.onSelectorDoubleClick,onDragStart:b?e.onDragStart:void 0},n,N,e.renderDropIndicator())},e.renderDropIndicator=function(){var n=e.props,t=n.disabled,o=n.eventKey,r=e.props.context,a=r.draggable,c=r.dropLevelOffset,i=r.dropPosition,d=r.prefixCls,s=r.indent,l=r.dropIndicatorRender,p=r.dragOverNodeKey,u=r.direction;return t||!1===a||p!==o?null:l({dropPosition:i,dropLevelOffset:c,indent:s,prefixCls:d,direction:u})},e}return(0,d.Z)(t,[{key:"componentDidMount",value:function(){this.syncLoadData(this.props)}},{key:"componentDidUpdate",value:function(){this.syncLoadData(this.props)}},{key:"isSelectable",value:function(){var e=this.props.selectable,n=this.props.context.selectable;return"boolean"==typeof e?e:n}},{key:"render",value:function(){var e,n=this.props,t=n.eventKey,c=n.className,i=n.style,d=n.dragOver,s=n.dragOverGapTop,l=n.dragOverGapBottom,p=n.isLeaf,f=n.isStart,v=n.isEnd,b=n.expanded,m=n.selected,C=n.checked,N=n.halfChecked,E=n.loading,D=n.domRef,S=n.active,Z=n.data,w=n.onMouseMove,O=(0,a.Z)(n,x),K=this.props.context,P=K.prefixCls,L=K.filterTreeNode,M=K.draggable,T=K.keyEntities,_=K.dropContainerKey,I=K.dropTargetKey,G=this.isDisabled(),F=(0,g.NL)(O),H=(T[t]||{}).level,A=v[v.length-1],j="function"==typeof M?M(Z):M;return u.createElement("div",(0,o.Z)({ref:D,className:h()(c,"".concat(P,"-treenode"),(e={},(0,r.Z)(e,"".concat(P,"-treenode-disabled"),G),(0,r.Z)(e,"".concat(P,"-treenode-switcher-").concat(b?"open":"close"),!p),(0,r.Z)(e,"".concat(P,"-treenode-checkbox-checked"),C),(0,r.Z)(e,"".concat(P,"-treenode-checkbox-indeterminate"),N),(0,r.Z)(e,"".concat(P,"-treenode-selected"),m),(0,r.Z)(e,"".concat(P,"-treenode-loading"),E),(0,r.Z)(e,"".concat(P,"-treenode-active"),S),(0,r.Z)(e,"".concat(P,"-treenode-leaf-last"),A),(0,r.Z)(e,"drop-target",I===t),(0,r.Z)(e,"drop-container",_===t),(0,r.Z)(e,"drag-over",!G&&d),(0,r.Z)(e,"drag-over-gap-top",!G&&s),(0,r.Z)(e,"drag-over-gap-bottom",!G&&l),(0,r.Z)(e,"filter-node",L&&L((0,y.F)(this.props))),e)),style:i,onDragEnter:j?this.onDragEnter:void 0,onDragOver:j?this.onDragOver:void 0,onDragLeave:j?this.onDragLeave:void 0,onDrop:j?this.onDrop:void 0,onDragEnd:j?this.onDragEnd:void 0,onMouseMove:w},F),u.createElement(k,{prefixCls:P,level:H,isStart:f,isEnd:v}),this.renderSwitcher(),this.renderCheckbox(),this.renderSelector())}}]),t}(u.Component),N=function(e){return u.createElement(v.k.Consumer,null,(function(n){return u.createElement(C,(0,o.Z)({},e,{context:n}))}))};N.displayName="TreeNode",N.defaultProps={title:"---"},N.isTreeNode=1;const E=N},27822:(e,n,t)=>{t.d(n,{k:()=>o});var o=t(67294).createContext(null)},10225:(e,n,t)=>{t.d(n,{_5:()=>c,L0:()=>i,yx:()=>d,bt:()=>s,Ds:()=>l,wA:()=>p,OM:()=>f,BT:()=>h,E6:()=>v,r7:()=>g,NL:()=>k});var o=t(93433),r=t(71002),a=(t(67294),t(80334));function c(e,n){var t=e.slice(),o=t.indexOf(n);return o>=0&&t.splice(o,1),t}function i(e,n){var t=e.slice();return-1===t.indexOf(n)&&t.push(n),t}function d(e){return e.split("-")}function s(e,n){return"".concat(e,"-").concat(n)}function l(e){return e&&e.type&&e.type.isTreeNode}function p(e,n){var t=[];return function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];n.forEach((function(n){var o=n.key,r=n.children;t.push(o),e(r)}))}(n[e].children),t}function u(e){if(e.parent){var n=d(e.pos);return Number(n[n.length-1])===e.parent.children.length-1}return!1}function f(e,n,t,o,r,a,c,i,s,l){var p,f=e.clientX,h=e.clientY,v=e.target.getBoundingClientRect(),g=v.top,k=v.height,y=(("rtl"===l?-1:1)*(((null==r?void 0:r.x)||0)-f)-12)/o,x=i[t.props.eventKey];if(h<g+k/2){var b=c.findIndex((function(e){return e.data.key===x.key})),m=c[b<=0?0:b-1].data.key;x=i[m]}var C=x.key,N=x,E=x.key,D=0,S=0;if(!s.includes(C))for(var Z=0;Z<y&&u(x);Z+=1)x=x.parent,S+=1;var w,O=x.node,K=!0;return w=d(x.pos),0===Number(w[w.length-1])&&0===x.level&&h<g+k/2&&a({dropNode:O,dropPosition:-1})&&x.key===t.props.eventKey?D=-1:(N.children||[]).length&&s.includes(E)?a({dropNode:O,dropPosition:0})?D=0:K=!1:0===S?y>-1.5?a({dropNode:O,dropPosition:1})?D=1:K=!1:a({dropNode:O,dropPosition:0})?D=0:a({dropNode:O,dropPosition:1})?D=1:K=!1:a({dropNode:O,dropPosition:1})?D=1:K=!1,{dropPosition:D,dropLevelOffset:S,dropTargetKey:x.key,dropTargetPos:x.pos,dragOverNodeKey:E,dropContainerKey:0===D?null:(null===(p=x.parent)||void 0===p?void 0:p.key)||null,dropAllowed:K}}function h(e,n){if(e)return n.multiple?e.slice():e.length?[e[0]]:e}function v(e){if(!e)return null;var n;if(Array.isArray(e))n={checkedKeys:e,halfCheckedKeys:void 0};else{if("object"!==(0,r.Z)(e))return(0,a.ZP)(!1,"`checkedKeys` is not an array or an object"),null;n={checkedKeys:e.checked||void 0,halfCheckedKeys:e.halfChecked||void 0}}return n}function g(e,n){var t=new Set;function r(e){if(!t.has(e)){var o=n[e];if(o){t.add(e);var a=o.parent;o.node.disabled||a&&r(a.key)}}}return(e||[]).forEach((function(e){r(e)})),(0,o.Z)(t)}function k(e){var n={};return Object.keys(e).forEach((function(t){(t.startsWith("data-")||t.startsWith("aria-"))&&(n[t]=e[t])})),n}t(4258)},17341:(e,n,t)=>{t.d(n,{S:()=>c});var o=t(80334);function r(e,n){var t=new Set;return e.forEach((function(e){n.has(e)||t.add(e)})),t}function a(e){var n=e||{},t=n.disabled,o=n.disableCheckbox,r=n.checkable;return!(!t&&!o)||!1===r}function c(e,n,t,c){var i,d=[];i=c||a;var s,l=new Set(e.filter((function(e){var n=!!t[e];return n||d.push(e),n}))),p=new Map,u=0;return Object.keys(t).forEach((function(e){var n=t[e],o=n.level,r=p.get(o);r||(r=new Set,p.set(o,r)),r.add(n),u=Math.max(u,o)})),(0,o.ZP)(!d.length,"Tree missing follow keys: ".concat(d.slice(0,100).map((function(e){return"'".concat(e,"'")})).join(", "))),s=!0===n?function(e,n,t,o){for(var a=new Set(e),c=new Set,i=0;i<=t;i+=1)(n.get(i)||new Set).forEach((function(e){var n=e.key,t=e.node,r=e.children,c=void 0===r?[]:r;a.has(n)&&!o(t)&&c.filter((function(e){return!o(e.node)})).forEach((function(e){a.add(e.key)}))}));for(var d=new Set,s=t;s>=0;s-=1)(n.get(s)||new Set).forEach((function(e){var n=e.parent,t=e.node;if(!o(t)&&e.parent&&!d.has(e.parent.key))if(o(e.parent.node))d.add(n.key);else{var r=!0,i=!1;(n.children||[]).filter((function(e){return!o(e.node)})).forEach((function(e){var n=e.key,t=a.has(n);r&&!t&&(r=!1),i||!t&&!c.has(n)||(i=!0)})),r&&a.add(n.key),i&&c.add(n.key),d.add(n.key)}}));return{checkedKeys:Array.from(a),halfCheckedKeys:Array.from(r(c,a))}}(l,p,u,i):function(e,n,t,o,a){for(var c=new Set(e),i=new Set(n),d=0;d<=o;d+=1)(t.get(d)||new Set).forEach((function(e){var n=e.key,t=e.node,o=e.children,r=void 0===o?[]:o;c.has(n)||i.has(n)||a(t)||r.filter((function(e){return!a(e.node)})).forEach((function(e){c.delete(e.key)}))}));i=new Set;for(var s=new Set,l=o;l>=0;l-=1)(t.get(l)||new Set).forEach((function(e){var n=e.parent,t=e.node;if(!a(t)&&e.parent&&!s.has(e.parent.key))if(a(e.parent.node))s.add(n.key);else{var o=!0,r=!1;(n.children||[]).filter((function(e){return!a(e.node)})).forEach((function(e){var n=e.key,t=c.has(n);o&&!t&&(o=!1),r||!t&&!i.has(n)||(r=!0)})),o||c.delete(n.key),r&&i.add(n.key),s.add(n.key)}}));return{checkedKeys:Array.from(c),halfCheckedKeys:Array.from(r(i,c))}}(l,n.halfCheckedKeys,p,u,i),s}},1089:(e,n,t)=>{t.d(n,{km:()=>p,zn:()=>u,oH:()=>f,I8:()=>v,H8:()=>g,F:()=>k});var o=t(71002),r=t(93433),a=t(1413),c=t(44925),i=t(50344),d=t(80334),s=t(10225),l=["children"];function p(e,n){return null!=e?e:n}function u(e){return function e(n){return(0,i.Z)(n).map((function(n){if(!(0,s.Ds)(n))return(0,d.ZP)(!n,"Tree/TreeNode can only accept TreeNode as children."),null;var t=n.key,o=n.props,r=o.children,i=(0,c.Z)(o,l),p=(0,a.Z)({key:t},i),u=e(r);return u.length&&(p.children=u),p})).filter((function(e){return e}))}(e)}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=new Set(!0===n?[]:n),o=[];function c(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e.map((function(d,l){var u=(0,s.bt)(i?i.pos:"0",l),f=p(d.key,u),h=(0,a.Z)((0,a.Z)({},d),{},{parent:i,pos:u,children:null,data:d,isStart:[].concat((0,r.Z)(i?i.isStart:[]),[0===l]),isEnd:[].concat((0,r.Z)(i?i.isEnd:[]),[l===e.length-1])});return o.push(h),!0===n||t.has(f)?h.children=c(d.children||[],h):h.children=[],h}))}return c(e),o}function h(e,n,t){var r,a,c=null,i=(0,o.Z)(t);"function"===i||"string"===i?c=t:t&&"object"===i&&(r=t.childrenPropName,c=t.externalGetKey),r=r||"children",c?"string"==typeof c?a=function(e){return e[c]}:"function"==typeof c&&(a=function(e){return c(e)}):a=function(e,n){return p(e.key,n)},function t(o,c,i){var d=o?o[r]:e,l=o?(0,s.bt)(i.pos,c):"0";if(o){var p=a(o,l),u={node:o,index:c,pos:l,key:p,parentPos:i.node?i.pos:null,level:i.level+1};n(u)}d&&d.forEach((function(e,n){t(e,n,{node:o,pos:l,level:i?i.level+1:-1})}))}(null)}function v(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.initWrapper,o=n.processEntity,r=n.onProcessFinished,a=n.externalGetKey,c=n.childrenPropName,i=arguments.length>2?arguments[2]:void 0,d=a||i,s={},l={},u={posEntities:s,keyEntities:l};return t&&(u=t(u)||u),h(e,(function(e){var n=e.node,t=e.index,r=e.pos,a=e.key,c=e.parentPos,i={node:n,index:t,key:a,pos:r,level:e.level},d=p(a,r);s[r]=i,l[d]=i,i.parent=s[c],i.parent&&(i.parent.children=i.parent.children||[],i.parent.children.push(i)),o&&o(i,u)}),{externalGetKey:d,childrenPropName:c}),r&&r(u),u}function g(e,n){var t=n.expandedKeys,o=n.selectedKeys,r=n.loadedKeys,a=n.loadingKeys,c=n.checkedKeys,i=n.halfCheckedKeys,d=n.dragOverNodeKey,s=n.dropPosition,l=n.keyEntities[e];return{eventKey:e,expanded:-1!==t.indexOf(e),selected:-1!==o.indexOf(e),loaded:-1!==r.indexOf(e),loading:-1!==a.indexOf(e),checked:-1!==c.indexOf(e),halfChecked:-1!==i.indexOf(e),pos:String(l?l.pos:""),dragOver:d===e&&0===s,dragOverGapTop:d===e&&-1===s,dragOverGapBottom:d===e&&1===s}}function k(e){var n=e.data,t=e.expanded,o=e.selected,r=e.checked,c=e.loaded,i=e.loading,s=e.halfChecked,l=e.dragOver,p=e.dragOverGapTop,u=e.dragOverGapBottom,f=e.pos,h=e.active,v=(0,a.Z)((0,a.Z)({},n),{},{expanded:t,selected:o,checked:r,loaded:c,loading:i,halfChecked:s,dragOver:l,dragOverGapTop:p,dragOverGapBottom:u,pos:f,active:h});return"props"in v||Object.defineProperty(v,"props",{get:function(){return(0,d.ZP)(!1,"Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."),e}}),v}}}]);