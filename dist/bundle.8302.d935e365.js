"use strict";(self.webpackChunkt_zero_user_operation_frontend=self.webpackChunkt_zero_user_operation_frontend||[]).push([[8302],{8302:(e,n,t)=>{t.r(n),t.d(n,{default:()=>N}),t(95352);var r=t(37614),a=(t(45654),t(39144)),i=(t(11125),t(92e3)),l=(t(58645),t(71577)),s=(t(47610),t(55026)),o=t(15861),c=t(15671),d=t(43144),u=t(97326),p=t(79340),m=t(82963),b=t(61120),v=t(4942),f=(t(10534),t(20924)),h=(t(21384),t(16317)),g=t(87757),Z=t.n(g),E=t(67294),_=t(55609),x=t(93379),y=t.n(x),k=t(91631);y()(k.Z,{insert:"head",singleton:!1});const C=k.Z.locals||{};var w=t(47166),S=t.n(w),I=(t(5582),t(87462)),F=(t(24713),t(82482)),q=t(29439),V=(f.Z.TextArea,h.Z.Option);const D=function(e){var n=e.visible,t=e.submitMap,a=e.onCancel,i=F.Z.useForm(),s=(0,q.Z)(i,1)[0],o=function(){s.resetFields(),s.setFieldsValue({}),a()},c=[E.createElement(l.Z,{onClick:o},"取消"),E.createElement(l.Z,{key:"submit",type:"primary",onClick:function(){s.validateFields().then((function(e){s.resetFields(),t(e)})).catch((function(e){console.log("校验失败:",e)}))}},"确认")];return E.createElement(r.Z,{visible:n,title:"新建服务",onCancel:o,destroyOnClose:!0,footer:c},E.createElement(F.Z,(0,I.Z)({form:s},{labelCol:{span:5},wrapperCol:{span:18}},{name:"createLessee",initialValues:{gender:0}}),E.createElement(F.Z.Item,{label:"服务名称",name:"serviceName",rules:[{required:!0,message:"请输入服务名称",whitespace:!0}],hasFeedback:!0},E.createElement(f.Z,{placeholder:"请输入服务名称"})),E.createElement(F.Z.Item,{label:"业务名称",name:"descibe",rules:[{required:!0,message:"请输入业务名称",whitespace:!0}],hasFeedback:!0},E.createElement(f.Z,{placeholder:"请输入业务名称"})),E.createElement(F.Z.Item,{label:"服务描述",name:"description",rules:[{required:!0,message:"请输入服务描述",whitespace:!0}],hasFeedback:!0},E.createElement(f.Z,{placeholder:"请输入服务描述"})),E.createElement(F.Z.Item,{label:"服务状态",rules:[{required:!0,message:"请选择服务状态"}],name:"serviceStatus",hasFeedback:!0},E.createElement(h.Z,{placeholder:"请选择服务状态",allowClear:!0},E.createElement(V,{value:"0"},"已上线"),E.createElement(V,{value:"1"},"未上线"))),E.createElement(F.Z.Item,{label:"服务配置",rules:[{required:!0,message:"请选择服务配置"}],name:"baseEquip",hasFeedback:!0},E.createElement(h.Z,{mode:"multiple",placeholder:"请选择服务配置",allowClear:!0},E.createElement(V,{value:"基础配置"},"基础配置"),E.createElement(V,{value:"设备用房"},"设备用房")))))};function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function L(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,v.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}f.Z.TextArea;var M=h.Z.Option;const P=function(e){var n,t,a,i,s=e.visible,o=e.submitMap,c=e.onCancel,d=e.currentDetailData,u=F.Z.useForm(),p=(0,q.Z)(u,1)[0],m=null==d||0==d.length?{}:L(L({},d),{},{descibe:null==d||null===(n=d.serviceDesc)||void 0===n?void 0:n.descibe,description:null==d||null===(t=d.serviceDesc)||void 0===t?void 0:t.description,baseEquip:null==d||null===(a=d.serviceDesc)||void 0===a?void 0:a.baseEquip,serviceStatus:(null==d||null===(i=d.serviceDesc)||void 0===i?void 0:i.serviceStatus)||"1"});p.setFieldsValue(m);var b=[E.createElement(l.Z,{onClick:c},"取消"),E.createElement(l.Z,{key:"submit",type:"primary",onClick:function(){p.validateFields().then((function(e){p.resetFields(),p.setFieldsValue(e),o(e)})).catch((function(e){console.log("校验失败:",e)}))}},"确认")];return E.createElement(r.Z,{visible:s,title:"编辑租户",onCancel:c,destroyOnClose:!0,footer:b},E.createElement(F.Z,(0,I.Z)({form:p},{labelCol:{span:5},wrapperCol:{span:18}},{name:"createLessee",initialValues:{gender:0}}),E.createElement(F.Z.Item,{label:"服务名称",name:"serviceName",rules:[{required:!0,message:"请输入服务名称",whitespace:!0}],hasFeedback:!0},E.createElement(f.Z,{placeholder:"请输入服务名称"})),E.createElement(F.Z.Item,{label:"业务名称",name:"descibe",rules:[{required:!0,message:"请输入业务名称",whitespace:!0}],hasFeedback:!0},E.createElement(f.Z,{placeholder:"请输入业务名称"})),E.createElement(F.Z.Item,{label:"服务描述",name:"description",rules:[{required:!0,message:"请输入服务描述",whitespace:!0}],hasFeedback:!0},E.createElement(f.Z,{placeholder:"请输入服务描述"})),E.createElement(F.Z.Item,{label:"服务状态",rules:[{required:!0,message:"请选择服务状态"}],name:"serviceStatus",hasFeedback:!0},E.createElement(h.Z,{allowClear:!0,placeholder:"请选择服务状态"},E.createElement(M,{value:"0"},"已上线"),E.createElement(M,{value:"1"},"未上线"))),E.createElement(F.Z.Item,{label:"服务配置",rules:[{required:!0,message:"请选择服务配置"}],name:"baseEquip",hasFeedback:!0},E.createElement(h.Z,{mode:"multiple",placeholder:"请选择服务配置",allowClear:!0},E.createElement(M,{value:"基础配置"},"基础配置"),E.createElement(M,{value:"设备用房"},"设备用房")))))};var W;var j=S().bind(C),N=(h.Z.Option,f.Z.TextArea,(0,_.connect)((function(e){return{global:e.global,productConfig:e.productConfig}}))(W=function(e){(0,p.Z)(h,e);var n,t,f=(n=h,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,b.Z)(n);if(t){var a=(0,b.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,m.Z)(this,e)});function h(e){var n;return(0,c.Z)(this,h),n=f.call(this,e),(0,v.Z)((0,u.Z)(n),"getServiceLists",(function(e){var t=n.props.dispatch,r=n.state.dataSource;t({type:"productConfig/getServiceLists",opt:{currentPage:r.currentPage||1,pageSize:r.pageSize},callback:function(e){var t,r,a,i,l=null==e||null===(t=e.data)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.list;n.setState({serviceLists:l,serviceListTotal:(null==e||null===(a=e.data)||void 0===a||null===(i=a.data)||void 0===i?void 0:i.totalCount)||0})}})})),(0,v.Z)((0,u.Z)(n),"changePage",(function(e,t){n.setState({dataSource:{currentPage:e,pageSize:t}},(function(){n.getServiceLists()}))})),(0,v.Z)((0,u.Z)(n),"handleAddSubmit",function(){var e=(0,o.Z)(Z().mark((function e(t){var r,a,i,l,o,c;return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.props.dispatch,a=t.serviceName,i=t.descibe,l=t.description,o=t.serviceStatus,c=t.baseEquip,E.Fragment,e.next=5,r({type:"productConfig/saveServiceInfo",opt:{serviceName:a,serviceDesc:{descibe:i,description:l,serviceStatus:o,baseEquip:c}},callback:function(e){var t;200==e.data.status?(s.ZP.success("创建业务成功"),n.handleCancel(),n.getServiceLists()):s.ZP.error((null==e||null===(t=e.data)||void 0===t?void 0:t.message)||"添加失败，请重新尝试!")}});case 5:e.sent;case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),(0,v.Z)((0,u.Z)(n),"handleAddVisible",(function(){n.setState({createVisible:!0})})),(0,v.Z)((0,u.Z)(n),"handleDelService",(function(){var e=n.state.serviceInfo;(0,n.props.dispatch)({type:"productConfig/deleteServiceInfo",opt:{serviceId:e.id},callback:function(e){var t;200==e.data.status?(s.ZP.success("删除服务成功"),n.handleCancel(),n.getServiceLists()):s.ZP.error((null==e||null===(t=e.data)||void 0===t?void 0:t.message)||"删除失败，请重新尝试!")}}),n.handleCancel()})),(0,v.Z)((0,u.Z)(n),"handleCancel",(function(){n.setState({delVisible:!1,createVisible:!1,editVisible:!1,editInfo:{},serviceInfo:{}})})),(0,v.Z)((0,u.Z)(n),"handleEdit",function(){var e=(0,o.Z)(Z().mark((function e(t){var r,a,i,l,o,c,d;return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.props.dispatch,a=t.serviceName,i=t.descibe,l=t.description,o=t.serviceStatus,c=t.baseEquip,E.Fragment,e.next=5,r({type:"productConfig/modifyServiceInfo",opt:{id:n.state.editInfo.id,serviceCode:n.state.editInfo.serviceCode,serviceName:a,serviceDesc:{descibe:i,serviceStatus:o,baseEquip:c,description:l}},callback:function(e){var t;200==e.data.status?(s.ZP.success("修改服务成功"),n.handleCancel(),n.getServiceLists()):s.ZP.error((null==e||null===(t=e.data)||void 0===t?void 0:t.message)||"修改失败，请重新尝试!")}});case 5:d=e.sent,console.log("res:::",d);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),n.state={editVisible:!1,dataSource:{currentPage:1,pageSize:10},serviceListTotal:0,delVisible:!1,serviceInfo:"",createVisible:!1,editInfo:{},serviceLists:[]},n}return(0,d.Z)(h,[{key:"componentDidMount",value:function(){this.getServiceLists()}},{key:"showFormModal",value:function(e,n){console.log("data",n),"edit"==e?this.setState({editVisible:!0,editInfo:n}):"del"==e&&this.setState({delVisible:!0,serviceInfo:n})}},{key:"render",value:function(){var e=this,n=this.state,t=n.delVisible,s=n.createVisible,o=n.serviceLists,c=n.serviceInfo,d=n.editVisible,u=n.editInfo,p=n.serviceListTotal,m=[{title:"序号",key:"id",textWrap:"word-break",ellipsis:!0,render:function(e,n,t){return E.createElement(E.Fragment,null,E.createElement("span",null,t+1))}},{title:"服务名",dataIndex:"serviceName",width:200,textWrap:"word-break",ellipsis:!0,key:"serviceName"},{title:"业务名称",dataIndex:"serviceDesc",key:"serviceDesc",width:200,textWrap:"word-break",ellipsis:!0,render:function(e,n){var t;return E.createElement(E.Fragment,null,E.createElement("span",null,null==n||null===(t=n.serviceDesc)||void 0===t?void 0:t.descibe))}},{title:"服务描述",dataIndex:"description",key:"description",width:200,textWrap:"word-break",ellipsis:!0,render:function(e,n){var t;return E.createElement(E.Fragment,null,E.createElement("span",null,null==n||null===(t=n.serviceDesc)||void 0===t?void 0:t.description))}},{title:"服务状态",dataIndex:"serviceStatus",key:"serviceStatus",width:200,textWrap:"word-break",ellipsis:!0,render:function(e,n){var t;return E.createElement(E.Fragment,null,E.createElement("span",null,"0"==(null==n||null===(t=n.serviceDesc)||void 0===t?void 0:t.serviceStatus)?"已上线":"未上线"))}},{title:"服务配置",dataIndex:"baseEquip",key:"baseEquip",width:200,textWrap:"word-break",ellipsis:!0,render:function(e,n){var t,r;return E.createElement(E.Fragment,null,E.createElement("span",null,null==n||null===(t=n.serviceDesc)||void 0===t||null===(r=t.baseEquip)||void 0===r?void 0:r.join(",")))}},{title:"操作",dataIndex:"id",width:160,key:"id",render:function(n,t){return E.createElement(E.Fragment,null,E.createElement(l.Z,{style:{marginLeft:"10px"},size:"small",onClick:function(){return e.showFormModal("edit",t)},type:"primary"},"编辑"),E.createElement(l.Z,{style:{marginLeft:"10px"},size:"small",onClick:function(){return e.showFormModal("del",t)},type:"danger"},"删除"))}}];return E.createElement("div",{className:j("productConfig")},E.createElement(a.Z,{title:"服务管理",extra:E.createElement(E.Fragment,null,E.createElement(l.Z,{style:{marginLeft:"10px"},size:"small",className:j("addLesseeBtn"),onClick:this.handleAddVisible,type:"primary"},"新增"))},E.createElement("div",{className:j("table-box")},E.createElement(i.Z,{scroll:{x:!0},dataSource:o,columns:m,rowKey:function(e){return e.id},pagination:{total:p,onChange:this.changePage}}))),E.createElement(r.Z,{title:"删除租户",visible:t,footer:[E.createElement(l.Z,{key:"submit",type:"primary",onClick:this.handleDelService},"确认"),E.createElement(l.Z,{onClick:this.handleCancel},"取消")],onOk:this.handleDelService,onCancel:this.handleCancel},E.createElement("div",null,"即将删除",c.serviceName,"!")),E.createElement(D,{visible:s,submitMap:this.handleAddSubmit,onCancel:this.handleCancel}),E.createElement(P,{visible:d,submitMap:this.handleEdit,onCancel:this.handleCancel,currentDetailData:u}))}}]),h}(E.Component))||W)},91631:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(23645),a=t.n(r)()((function(e){return e[1]}));a.push([e.id,'html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  font-family: "微软雅黑", "Arial", "华文细黑", "STHeiti", "MingLiu";\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \'\';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\na {\n  color: #000;\n  text-decoration: none;\n}\na:hover {\n  color: #000;\n  text-decoration: none;\n}\n::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n::-webkit-scrollbar-thumb {\n  background-color: #aaa;\n  border-radius: 10px;\n}\n#index-module__root___3Bl3d {\n  height: 100%;\n}\n.index-module__box___2ryWl {\n  width: 100%;\n  display: flex;\n  height: 100%;\n  min-height: 92vh;\n  background-color: #f0f2f5;\n}\n.index-module__productConfig___WJMVX .ant-card {\n  margin: 20px;\n  border-radius: 7px;\n  border-color: transparent;\n  box-shadow: 0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017;\n}\n.index-module__productConfig___WJMVX .ant-form {\n  margin: 20px 0;\n}\n.index-module__productConfig___WJMVX .lesseeLists .addLesseeBtn {\n  float: right;\n  margin-bottom: 20px;\n}\n.index-module__productConfig___WJMVX .lesseeInfoModal {\n  width: 100%;\n}\n.index-module__productConfig___WJMVX .lesseeInfoModal .ant-form-item {\n  width: 100%;\n  margin-bottom: 10px;\n}\n.index-module__productConfig___WJMVX .lesseeInfoModal .ant-form-item .ant-form-item-label {\n  width: 100px;\n}\n.index-module__productConfig___WJMVX .index-module__table-box___2AdEl {\n  padding: 20px;\n}\n',""]),a.locals={root:"index-module__root___3Bl3d",box:"index-module__box___2ryWl",productConfig:"index-module__productConfig___WJMVX","table-box":"index-module__table-box___2AdEl"};const i=a}}]);