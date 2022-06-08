"use strict";(self.webpackChunkt_zero_user_operation_frontend=self.webpackChunkt_zero_user_operation_frontend||[]).push([[316],{4914:(e,n,t)=>{t.d(n,{K:()=>y,Z:()=>E});var r=t(4942),i=t(29439),a=t(71002),o=t(67294),s=t(94184),l=t.n(s),c=t(50344),d=t(24308),m=t(21687),p=t(65632),u=t(87462);function f(e){return null!=e}const b=function(e){var n,t=e.itemPrefixCls,i=e.component,a=e.span,s=e.className,c=e.style,d=e.labelStyle,m=e.contentStyle,p=e.bordered,u=e.label,b=e.content,h=e.colon,g=i;return p?o.createElement(g,{className:l()((n={},(0,r.Z)(n,"".concat(t,"-item-label"),f(u)),(0,r.Z)(n,"".concat(t,"-item-content"),f(b)),n),s),style:c,colSpan:a},f(u)&&o.createElement("span",{style:d},u),f(b)&&o.createElement("span",{style:m},b)):o.createElement(g,{className:l()("".concat(t,"-item"),s),style:c,colSpan:a},o.createElement("div",{className:"".concat(t,"-item-container")},u&&o.createElement("span",{className:l()("".concat(t,"-item-label"),(0,r.Z)({},"".concat(t,"-item-no-colon"),!h)),style:d},u),b&&o.createElement("span",{className:l()("".concat(t,"-item-content")),style:m},b)))};function h(e,n,t){var r=n.colon,i=n.prefixCls,a=n.bordered,s=t.component,l=t.type,c=t.showLabel,d=t.showContent,m=t.labelStyle,p=t.contentStyle;return e.map((function(e,n){var t=e.props,f=t.label,h=t.children,g=t.prefixCls,v=void 0===g?i:g,y=t.className,Z=t.style,x=t.labelStyle,_=t.contentStyle,E=t.span,w=void 0===E?1:E,P=e.key;return"string"==typeof s?o.createElement(b,{key:"".concat(l,"-").concat(P||n),className:y,style:Z,labelStyle:(0,u.Z)((0,u.Z)({},m),x),contentStyle:(0,u.Z)((0,u.Z)({},p),_),span:w,colon:r,component:s,itemPrefixCls:v,bordered:a,label:c?f:null,content:d?h:null}):[o.createElement(b,{key:"label-".concat(P||n),className:y,style:(0,u.Z)((0,u.Z)((0,u.Z)({},m),Z),x),span:1,colon:r,component:s[0],itemPrefixCls:v,bordered:a,label:f}),o.createElement(b,{key:"content-".concat(P||n),className:y,style:(0,u.Z)((0,u.Z)((0,u.Z)({},p),Z),_),span:2*w-1,component:s[1],itemPrefixCls:v,bordered:a,content:h})]}))}const g=function(e){var n=o.useContext(y),t=e.prefixCls,r=e.vertical,i=e.row,a=e.index,s=e.bordered;return r?o.createElement(o.Fragment,null,o.createElement("tr",{key:"label-".concat(a),className:"".concat(t,"-row")},h(i,e,(0,u.Z)({component:"th",type:"label",showLabel:!0},n))),o.createElement("tr",{key:"content-".concat(a),className:"".concat(t,"-row")},h(i,e,(0,u.Z)({component:"td",type:"content",showContent:!0},n)))):o.createElement("tr",{key:a,className:"".concat(t,"-row")},h(i,e,(0,u.Z)({component:s?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},n)))};var v=t(96159),y=o.createContext({}),Z={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function x(e,n,t){var r=e;return(void 0===n||n>t)&&(r=(0,v.Tm)(e,{span:t}),(0,m.Z)(void 0===n,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),r}function _(e){var n,t=e.prefixCls,s=e.title,m=e.extra,u=e.column,f=void 0===u?Z:u,b=e.colon,h=void 0===b||b,v=e.bordered,_=e.layout,E=e.children,w=e.className,P=e.style,k=e.size,I=e.labelStyle,C=e.contentStyle,S=o.useContext(p.E_),N=S.getPrefixCls,F=S.direction,O=N("descriptions",t),D=o.useState({}),M=(0,i.Z)(D,2),L=M[0],V=M[1],j=function(e,n){if("number"==typeof e)return e;if("object"===(0,a.Z)(e))for(var t=0;t<d.c4.length;t++){var r=d.c4[t];if(n[r]&&void 0!==e[r])return e[r]||Z[r]}return 3}(f,L);o.useEffect((function(){var e=d.ZP.subscribe((function(e){"object"===(0,a.Z)(f)&&V(e)}));return function(){d.ZP.unsubscribe(e)}}),[]);var z=function(e,n){var t=(0,c.Z)(e).filter((function(e){return e})),r=[],i=[],a=n;return t.forEach((function(e,o){var s,l=null===(s=e.props)||void 0===s?void 0:s.span,c=l||1;if(o===t.length-1)return i.push(x(e,l,a)),void r.push(i);c<a?(a-=c,i.push(e)):(i.push(x(e,c,a)),r.push(i),a=n,i=[])})),r}(E,j);return o.createElement(y.Provider,{value:{labelStyle:I,contentStyle:C}},o.createElement("div",{className:l()(O,(n={},(0,r.Z)(n,"".concat(O,"-").concat(k),k&&"default"!==k),(0,r.Z)(n,"".concat(O,"-bordered"),!!v),(0,r.Z)(n,"".concat(O,"-rtl"),"rtl"===F),n),w),style:P},(s||m)&&o.createElement("div",{className:"".concat(O,"-header")},s&&o.createElement("div",{className:"".concat(O,"-title")},s),m&&o.createElement("div",{className:"".concat(O,"-extra")},m)),o.createElement("div",{className:"".concat(O,"-view")},o.createElement("table",null,o.createElement("tbody",null,z.map((function(e,n){return o.createElement(g,{key:n,index:n,colon:h,prefixCls:O,vertical:"vertical"===_,bordered:v,row:e})})))))))}_.Item=function(e){return e.children};const E=_},54337:(e,n,t)=>{t(7816);var r=t(93379),i=t.n(r),a=t(54619);i()(a.Z,{insert:"head",singleton:!1}),a.Z.locals},316:(e,n,t)=>{t.r(n),t.d(n,{default:()=>G}),t(95352);var r=t(37614),i=(t(54337),t(4914)),a=(t(4456),t(49531)),o=(t(11125),t(92e3)),s=(t(45654),t(39144)),l=t(87462),c=(t(24713),t(82482)),d=(t(47610),t(55026)),m=(t(58645),t(71577)),p=t(15671),u=t(43144),f=t(97326),b=t(79340),h=t(82963),g=t(61120),v=t(4942),y=(t(10534),t(20924)),Z=(t(21384),t(16317)),x=t(67294),_=t(55609),E=t(93379),w=t.n(E),P=t(39275);w()(P.Z,{insert:"head",singleton:!1});const k=P.Z.locals||{};var I=t(47166),C=t.n(I),S=t(30944),N=(t(5582),t(16458),t(12010)),F=t(15861),O=t(29439),D=t(87757),M=t.n(D);function L(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function V(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?L(Object(t),!0).forEach((function(n){(0,v.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}const j=function(e){var n,t=e.visible,i=e.submitMap,a=e.currentDetailData,o=e.onCancel,s=e.isEdit,p=(e._this,e.dataList),u=c.Z.useForm(),f=(0,O.Z)(u,1)[0],b=null==a||0==a.length?{}:V(V({},a),{},{parentID:null==a?void 0:a.parentPermissonId,remark:null==a||null===(n=a.permissionDesc)||void 0===n?void 0:n.remark}),h=x.useState(""),g=(0,O.Z)(h,2),v=g[0],Z=(g[1],function(){var e=(0,F.Z)(M().mark((function e(n,t){return M().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("!isEmpty(nodes?.parentPermissonId)",!(0,S.xb)(null==t?void 0:t.parentPermissonId)),(0,S.xb)(null==t?void 0:t.parentPermissonId)||(d.ZP.error("请选择一级权限!"),f.setFieldsValue({parentID:""}));case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}());return f.setFieldsValue(b),x.createElement(r.Z,{visible:t,title:s?"编辑权限":"新增权限",onCancel:function(){f.setFieldsValue({}),o()},destroyOnClose:!0,footer:[x.createElement(m.Z,{onClick:o},"取消"),x.createElement(m.Z,{key:"submit",type:"primary",onClick:function(){f.validateFields().then((function(e){f.resetFields(),f.setFieldsValue(V({permissionDesc:{remark:e.remark},permissonId:v},e)),i(V({permissionDesc:{remark:e.remark},permissonId:v},e))})).catch((function(e){console.log("校验失败:",e)}))}},"确认")]},x.createElement(c.Z,(0,l.Z)({form:f},{labelCol:{span:5},wrapperCol:{span:18}},{name:"createOrgan",initialValues:b}),x.createElement(c.Z.Item,{help:s?"选择权限":"不选就是一级权限",label:s?"选择权限":"选择父级权限",name:"parentID"},x.createElement(N.Z,{style:{width:"100%"},dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:(0,S.wf)(p,"permissionName","parentPermissonId"),showSearch:!0,placeholder:"Please select",allowClear:!0,onSelect:Z})),x.createElement(c.Z.Item,{label:"权限名称",name:"permissionName",rules:[{required:!0,message:"请输入权限名称"}]},x.createElement(y.Z,{placeholder:"请输入权限名称"})),x.createElement(c.Z.Item,{label:"权限code",name:"permissionCode",rules:[{required:!0,message:"请输入权限code"}]},x.createElement(y.Z,{placeholder:"请输入权限code"})),x.createElement(c.Z.Item,{label:"备注",name:"remark"},x.createElement(y.Z,{placeholder:"请输入权限备注"}))))};var z;function R(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function T(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?R(Object(t),!0).forEach((function(n){(0,v.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var q=C().bind(k),B=Z.Z.Option,A=(y.Z.TextArea,{labelCol:{xs:{span:24},sm:{span:5},md:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}}}),K={wrapperCol:{offset:4,span:20}},G=(0,_.connect)((function(e){return{global:e.global,permissionManage:e.permissionManage}}))(z=function(e){(0,b.Z)(E,e);var n,t,_=(n=E,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,g.Z)(n);if(t){var i=(0,g.Z)(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return(0,h.Z)(this,e)});function E(e){var n;return(0,p.Z)(this,E),n=_.call(this,e),(0,v.Z)((0,f.Z)(n),"searchFormRef",x.createRef()),(0,v.Z)((0,f.Z)(n),"permissionFormRef",x.createRef()),(0,v.Z)((0,f.Z)(n),"columns",[{title:"序号",key:"id",render:function(e,n,t){return x.createElement(x.Fragment,null,x.createElement("span",null,t+1))}},{title:"权限名称",dataIndex:"permissionName",key:"permissionName"},{title:"权限Code",dataIndex:"permissionCode",key:"permissionCode"},{title:"操作",key:"updatedTime",render:function(e,t){return x.createElement(x.Fragment,null,x.createElement(m.Z,{size:"small",type:"primary",onClick:function(){return n.showFormModal(t,"detail")}},"查看"),x.createElement(m.Z,{style:{marginLeft:"10px"},size:"small",type:"primary",onClick:function(){return n.showFormModal(t,"edit")}},"编辑"),x.createElement(m.Z,{style:{marginLeft:"10px"},size:"small",danger:!0,type:"primary",onClick:function(){return n.showFormModal(t,"del")}},"删除"))}}]),(0,v.Z)((0,f.Z)(n),"onReset",(function(){n.searchFormRef.current.resetFields()})),(0,v.Z)((0,f.Z)(n),"getProduct",(function(){(0,n.props.dispatch)({type:"permissionManage/getProduct",opt:{currentPage:1,pageSize:10},callback:function(e){var t,r,i,a,o,s,l,c,d;console.log("res-------",e),200==(null==e||null===(t=e.data)||void 0===t?void 0:t.status)&&n.setState({productList:(null==e||null===(r=e.data)||void 0===r||null===(i=r.data)||void 0===i?void 0:i.list)||[],productId:(null==e||null===(a=e.data)||void 0===a||null===(o=a.data)||void 0===o||null===(s=o.list[0])||void 0===s?void 0:s.id)||"",productName:(null==e||null===(l=e.data)||void 0===l||null===(c=l.data)||void 0===c||null===(d=c.list[0])||void 0===d?void 0:d.productName)||""},(function(){n.searchPermissionList(n.searchFormRef.current.getFieldsValue())}))}})})),(0,v.Z)((0,f.Z)(n),"handleSelect",(function(e){console.log(e),n.setState({productId:Number(e.split("-")[0]),productName:e.split("-")[1]},(function(){n.searchPermissionList()}))})),(0,v.Z)((0,f.Z)(n),"searchPermissionList",(function(e){var t=n.props.dispatch,r=n.state,i=r.dataSource,a=r.tenantId,o=r.productId;t({type:"permissionManage/getPermissionLists",opt:T({currentPage:i.currentPage||1,tenantId:a,pageSize:i.pageSize||10,productId:o},n.searchFormRef.current.getFieldsValue()),callback:function(e){var t,r=null==e||null===(t=e.data)||void 0===t?void 0:t.data;n.setState({dataSource:{dataList:r.list,total:r.totalCount,currentPage:r.currentPage,pageSize:r.pageSize}})}})})),(0,v.Z)((0,f.Z)(n),"changePage",(function(e,t){var r=n.state.dataSource;r.currentPage=e||1,r.pageSize=t,n.setState({dataSource:r}),n.searchPermissionList(n.searchFormRef.current.getFieldsValue())})),(0,v.Z)((0,f.Z)(n),"getPermissionInfo",(function(e){(0,n.props.dispatch)({type:"permissionManage/getPermissionInfo",opt:{permissionId:e.id},callback:function(e){var t,r,i,a,o,s,l,c,d,m;n.setState({permissionInfo:T(T({},null==e||null===(t=e.data)||void 0===t?void 0:t.data),{},{createdTime:(0,S.TC)(null==e||null===(r=e.data)||void 0===r||null===(i=r.data)||void 0===i?void 0:i.createdTime),remark:null==e||null===(a=e.data)||void 0===a||null===(o=a.data)||void 0===o||null===(s=o.permissionDesc)||void 0===s?void 0:s.remark})}),n.state.isEdit&&n.permissionFormRef.current.setFieldsValue(T(T({},null==e||null===(l=e.data)||void 0===l?void 0:l.data),{},{remark:null==e||null===(c=e.data)||void 0===c||null===(d=c.data)||void 0===d||null===(m=d.permissionDesc)||void 0===m?void 0:m.remark}))}})})),(0,v.Z)((0,f.Z)(n),"handlepermissionInfo",(function(){(0,n.props.dispatch)({type:"permissionManage/modifyPermissionInfo",opt:T({},n.permissionFormRef.current.getFieldValue()),callback:function(e){var t;200==e.data.status?(d.ZP.success("修改成功!"),n.searchPermissionList(n.searchFormRef.current.getFieldsValue())):d.ZP.error((null==e||null===(t=e.data)||void 0===t?void 0:t.message)||"修改失败，请重新尝试!")}}),n.handleCancel()})),(0,v.Z)((0,f.Z)(n),"handleAddSubmit",(function(e){var t=n.props.dispatch,r=n.state,i=r.tenantId,a=r.productId;t({type:"permissionManage/savePermissionInfo",opt:{tenantId:i,parentPermissonId:e.parentID||"",permissionName:e.permissionName,permissionDesc:{remark:e.remark},productId:a},callback:function(e){var t;200==e.data.status?(d.ZP.success("添加成功!"),n.searchPermissionList()):d.ZP.error((null==e||null===(t=e.data)||void 0===t?void 0:t.message)||"添加失败，请重新尝试!")}}),n.handleCancel()})),(0,v.Z)((0,f.Z)(n),"handleAddVisible",(function(){n.setState({createVisible:!0,isEdit:!1})})),(0,v.Z)((0,f.Z)(n),"handleDelPermissionInfo",(function(){var e=n.state.permissionInfo;(0,n.props.dispatch)({type:"permissionManage/deletePermissionInfo",opt:{permissionId:e.id},callback:function(e){var t;200==e.data.status?(d.ZP.success("删除成功!"),n.searchPermissionList()):d.ZP.error((null==e||null===(t=e.data)||void 0===t?void 0:t.message)||"删除失败，请重新尝试!")}}),n.handleCancel()})),(0,v.Z)((0,f.Z)(n),"handleCancel",(function(){n.setState({isModalVisible:!1,delPermissionVisible:!1,isDeatil:!1,isEdit:!1,createVisible:!1})})),n.state={tenantId:"",isModalVisible:!1,isDeatil:!1,isEdit:!1,dataSource:{dataList:[],total:20,currentPage:1,pageSize:10},modalTitle:"",delPermissionVisible:!1,permissionInfo:"",createVisible:!1,currentDetailData:{},productList:[],productId:"",productName:""},n}return(0,u.Z)(E,[{key:"componentDidMount",value:function(){var e=this;this.searchFormRef.current.setFieldsValue({member:"all"}),this.setState({tenantId:sessionStorage.getItem("tenantId")},(function(){e.getProduct(),e.searchPermissionList()}))}},{key:"showFormModal",value:function(e,n){var t=this;"edit"==n?this.setState({modalTitle:"编辑权限",isEdit:!0,isModalVisible:!0},(function(){t.getPermissionInfo(e)})):"detail"==n?this.setState({isDeatil:!0,modalTitle:"查看详情",isModalVisible:!0},(function(){t.getPermissionInfo(e)})):"del"==n&&this.setState({delPermissionVisible:!0,permissionInfo:e,modalTitle:"删除权限"})}},{key:"render",value:function(){var e,n=this.state,t=n.isModalVisible,d=n.delPermissionVisible,p=n.createVisible,u=n.permissionInfo,f=n.isEdit,b=n.isDeatil,h=n.dataSource,g=n.currentDetailData,v=n.modalTitle,_=n.productList,E=n.productName;return x.createElement("div",{className:q("permissionManage")},x.createElement(s.Z,{className:q("searchForm"),title:"权限管理"},x.createElement(c.Z,(0,l.Z)({},A,{ref:this.searchFormRef,layout:"inline",name:"control-ref",onFinish:this.searchPermissionList}),x.createElement(c.Z.Item,{name:"permissionName",label:"权限名称"},x.createElement(y.Z,null)),x.createElement(c.Z.Item,{name:"permissionCode",label:"权限Code"},x.createElement(y.Z,null)),x.createElement(c.Z.Item,K,x.createElement("div",{style:{display:"flex"}},x.createElement(m.Z,{type:"primary",htmlType:"submit"},"查询"),x.createElement(m.Z,{htmlType:"button",style:{margin:"0 8px"},onClick:this.onReset},"清空"))))),x.createElement(s.Z,{className:q("permissionLists")},x.createElement("span",null,"产品名称 : "),x.createElement(Z.Z,{style:{width:200,margin:"0 50px 0 10px"},value:E,showSearch:!0,onChange:this.handleSelect},(_||[]).map((function(e){return x.createElement(B,{value:"".concat(e.id,"-").concat(e.productName)},e.productName)}))),x.createElement(m.Z,{className:q("addPerssionrBtn"),onClick:this.handleAddVisible,type:"primary"},"新增"),x.createElement(o.Z,{scroll:{x:!0},dataSource:(0,S.wf)(h.dataList,"permissionName","parentPermissonId"),rowKey:function(e){return e.id},columns:this.columns,pagination:!1}),x.createElement(a.Z,{showSizeChanger:!0,scroll:{x:!0},total:h.total,onChange:this.changePage,defaultPageSize:h.pageSize,defaultCurrent:h.currentPage})),x.createElement(r.Z,{className:q("perssionInfoModal"),title:v,visible:t,footer:b?null:[x.createElement(m.Z,{key:"submit",type:"primary",onClick:this.handlepermissionInfo},"确认"),x.createElement(m.Z,{onClick:this.handleCancel},"取消")],onCancel:this.handleCancel},b?x.createElement(i.Z,{column:2},x.createElement(i.Z.Item,{label:"权限名"},u.permissionName),x.createElement(i.Z.Item,{label:"创建时间"},u.createdTime),x.createElement(i.Z.Item,{label:"备注"},null==u||null===(e=u.permissionDesc)||void 0===e?void 0:e.remark)):x.createElement(c.Z,(0,l.Z)({ref:this.permissionFormRef},A,{name:"editPermission"}),x.createElement(c.Z.Item,{label:"权限名称",name:"permissionName",rules:[{required:!0,message:"请输入权限名称"}]},x.createElement(y.Z,{placeholder:"请输入权限名称"})),x.createElement(c.Z.Item,{label:"权限code",name:"permissionCode",rules:[{required:!0,message:"请输入权限code"}]},x.createElement(y.Z,{placeholder:"请输入权限code"})),x.createElement(c.Z.Item,{label:"备注",name:"remark"},x.createElement(y.Z,{placeholder:"请输入权限备注"})))),x.createElement(r.Z,{title:"删除权限",visible:d,footer:[x.createElement(m.Z,{key:"submit",type:"primary",onClick:this.handleDelPermissionInfo},"确认"),x.createElement(m.Z,{onClick:this.handleCancel},"取消")],onOk:this.handleDelPermissionInfo,onCancel:this.handleCancel},x.createElement("div",null,"即将删除",u.permissionName,"!")),x.createElement(j,{visible:p,isEdit:f,submitMap:this.handleAddSubmit,onCancel:this.handleCancel,dataList:h.dataList,currentDetailData:g}))}}]),E}(x.Component))||z},54619:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(23645),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,"/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-descriptions-header {\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.ant-descriptions-title {\n  flex: auto;\n  overflow: hidden;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 1.5715;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.ant-descriptions-extra {\n  margin-left: auto;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 14px;\n}\n.ant-descriptions-view {\n  width: 100%;\n  overflow: hidden;\n  border-radius: 2px;\n}\n.ant-descriptions-view table {\n  width: 100%;\n  table-layout: fixed;\n}\n.ant-descriptions-row > th,\n.ant-descriptions-row > td {\n  padding-bottom: 16px;\n}\n.ant-descriptions-row:last-child {\n  border-bottom: none;\n}\n.ant-descriptions-item-label {\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 1.5715;\n  text-align: start;\n}\n.ant-descriptions-item-label::after {\n  content: ':';\n  position: relative;\n  top: -0.5px;\n  margin: 0 8px 0 2px;\n}\n.ant-descriptions-item-label.ant-descriptions-item-no-colon::after {\n  content: ' ';\n}\n.ant-descriptions-item-no-label::after {\n  margin: 0;\n  content: '';\n}\n.ant-descriptions-item-content {\n  display: table-cell;\n  flex: 1;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 14px;\n  line-height: 1.5715;\n  word-break: break-word;\n  overflow-wrap: break-word;\n}\n.ant-descriptions-item {\n  padding-bottom: 0;\n  vertical-align: top;\n}\n.ant-descriptions-item-container {\n  display: flex;\n}\n.ant-descriptions-item-container .ant-descriptions-item-label,\n.ant-descriptions-item-container .ant-descriptions-item-content {\n  display: inline-flex;\n  align-items: baseline;\n}\n.ant-descriptions-middle .ant-descriptions-row > th,\n.ant-descriptions-middle .ant-descriptions-row > td {\n  padding-bottom: 12px;\n}\n.ant-descriptions-small .ant-descriptions-row > th,\n.ant-descriptions-small .ant-descriptions-row > td {\n  padding-bottom: 8px;\n}\n.ant-descriptions-bordered .ant-descriptions-view {\n  border: 1px solid #f0f0f0;\n}\n.ant-descriptions-bordered .ant-descriptions-view > table {\n  table-layout: auto;\n  border-collapse: collapse;\n}\n.ant-descriptions-bordered .ant-descriptions-item-label,\n.ant-descriptions-bordered .ant-descriptions-item-content {\n  padding: 16px 24px;\n  border-right: 1px solid #f0f0f0;\n}\n.ant-descriptions-bordered .ant-descriptions-item-label:last-child,\n.ant-descriptions-bordered .ant-descriptions-item-content:last-child {\n  border-right: none;\n}\n.ant-descriptions-bordered .ant-descriptions-item-label {\n  background-color: #fafafa;\n}\n.ant-descriptions-bordered .ant-descriptions-item-label::after {\n  display: none;\n}\n.ant-descriptions-bordered .ant-descriptions-row {\n  border-bottom: 1px solid #f0f0f0;\n}\n.ant-descriptions-bordered .ant-descriptions-row:last-child {\n  border-bottom: none;\n}\n.ant-descriptions-bordered.ant-descriptions-middle .ant-descriptions-item-label,\n.ant-descriptions-bordered.ant-descriptions-middle .ant-descriptions-item-content {\n  padding: 12px 24px;\n}\n.ant-descriptions-bordered.ant-descriptions-small .ant-descriptions-item-label,\n.ant-descriptions-bordered.ant-descriptions-small .ant-descriptions-item-content {\n  padding: 8px 16px;\n}\n.ant-descriptions-rtl {\n  direction: rtl;\n}\n.ant-descriptions-rtl .ant-descriptions-item-label::after {\n  margin: 0 2px 0 8px;\n}\n.ant-descriptions-rtl.ant-descriptions-bordered .ant-descriptions-item-label,\n.ant-descriptions-rtl.ant-descriptions-bordered .ant-descriptions-item-content {\n  border-right: none;\n  border-left: 1px solid #f0f0f0;\n}\n.ant-descriptions-rtl.ant-descriptions-bordered .ant-descriptions-item-label:last-child,\n.ant-descriptions-rtl.ant-descriptions-bordered .ant-descriptions-item-content:last-child {\n  border-left: none;\n}\n",""]);const a=i},39275:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(23645),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,'html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  font-family: "微软雅黑", "Arial", "华文细黑", "STHeiti", "MingLiu";\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \'\';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\na {\n  color: #000;\n  text-decoration: none;\n}\na:hover {\n  color: #000;\n  text-decoration: none;\n}\n::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n::-webkit-scrollbar-thumb {\n  background-color: #aaa;\n  border-radius: 10px;\n}\n#index-module__root___-Q1XQ {\n  height: 100%;\n}\n.index-module__box___nao1y {\n  width: 100%;\n  display: flex;\n  height: 100%;\n  min-height: 92vh;\n  background-color: #f0f2f5;\n}\n.index-module__permissionManage___1Ih7g .ant-card {\n  margin: 20px;\n  border-radius: 7px;\n  border-color: transparent;\n  box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;\n}\n.index-module__permissionLists___1NTKN .index-module__addPerssionrBtn___3kBTe {\n  float: right;\n  margin-bottom: 20px;\n}\n.index-module__searchForm___2KS0d .index-module__ant-form-inline___34FCJ .index-module__ant-form-item___31eGu {\n  width: 260px;\n}\n.index-module__perssionInfoModal___2nlGb {\n  width: 100%;\n}\n.index-module__permissionManage___1Ih7g .ant-form-item {\n  margin-bottom: 10px;\n}\n.index-module__permissionManage___1Ih7g .ant-form-item .ant-form-item-label {\n  width: 184px;\n}\n',""]),i.locals={root:"index-module__root___-Q1XQ",box:"index-module__box___nao1y",permissionManage:"index-module__permissionManage___1Ih7g",permissionLists:"index-module__permissionLists___1NTKN",addPerssionrBtn:"index-module__addPerssionrBtn___3kBTe",searchForm:"index-module__searchForm___2KS0d","ant-form-inline":"index-module__ant-form-inline___34FCJ","ant-form-item":"index-module__ant-form-item___31eGu",perssionInfoModal:"index-module__perssionInfoModal___2nlGb"};const a=i}}]);