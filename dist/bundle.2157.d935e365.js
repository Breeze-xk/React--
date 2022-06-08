"use strict";(self.webpackChunkt_zero_user_operation_frontend=self.webpackChunkt_zero_user_operation_frontend||[]).push([[2157],{62157:(e,n,t)=>{t.r(n),t.d(n,{default:()=>K}),t(11125);var l=t(92e3),o=(t(58645),t(71577)),a=(t(10534),t(20924)),r=(t(24713),t(82482)),i=(t(21384),t(16317)),s=t(15861),c=(t(95352),t(37614)),d=t(15671),u=t(43144),m=t(97326),p=t(79340),f=t(82963),v=t(61120),h=t(4942),b=(t(56931),t(91665)),Z=t(87757),k=t.n(Z),g=t(67294),E=t(55609),_=t(93379),y=t.n(_),w=t(80730);y()(w.Z,{insert:"head",singleton:!1});const x=w.Z.locals||{};var F=t(47166),C=t.n(F),L=(t(30944),t(49101)),I=t(8212),D=t(73171),M=t(29439);t(5582),a.Z.TextArea;const S=function(e){var n=e.visible,t=e.submitMap,l=e.onCancel,o=e.processList,s=e.userLists,d=e.groupLists,u=r.Z.useForm(),m=(0,M.Z)(u,1)[0];return g.createElement(c.Z,{visible:n,title:"新增流程表单",onCancel:function(){m.resetFields(),l()},destroyOnClose:!0,onOk:function(){console.log("form",m.getFieldsValue()),m.validateFields().then((function(e){m.setFieldsValue(e),t(e),m.resetFields()})).catch((function(e){console.log("校验失败:",e)}))}},g.createElement(r.Z,{form:m,name:"createLessee",initialValues:{gender:0}},g.createElement(r.Z.Item,{label:"表单名称",name:"formName",rules:[{required:!0,message:"请输入表单名称",whitespace:!0}],hasFeedback:!0},g.createElement(a.Z,{placeholder:"请输入表单名称"})),g.createElement(r.Z.Item,{label:"关联流程",name:"process",rules:[{required:!0,message:"请输入租户code",whitespace:!0}],hasFeedback:!0},g.createElement(i.Z,{placeholder:"请选择服务状态",allowClear:!0},null==o?void 0:o.map((function(e){return g.createElement(i.Z.Option,{value:null==e?void 0:e.actProcdefId},null==e?void 0:e.defName)})))),g.createElement(r.Z.Item,{label:"管理员",name:"administrators"},g.createElement(i.Z,{placeholder:"请选择管理员",allowClear:!0,mode:"multiple"},null==s?void 0:s.map((function(e){return g.createElement(i.Z.Option,{value:null==e?void 0:e.id},null==e?void 0:e.username)})))),g.createElement(r.Z.Item,{label:"授权组",name:"authGroups"},g.createElement(i.Z,{placeholder:"请选择授权组",allowClear:!0,mode:"multiple"},null==d?void 0:d.map((function(e){return g.createElement(i.Z.Option,{value:null==e?void 0:e.id},null==e?void 0:e.groupName)}))))))};a.Z.TextArea;const N=function(e){var n=e.visible,t=e.submitMap,l=e.onCancel,o=e.initValues,s=e.processList,d=e.userLists,u=e.groupLists,m=r.Z.useForm(),p=(0,M.Z)(m,1)[0];return p.setFieldsValue(o),g.createElement(c.Z,{visible:n,title:"编辑流程表单",onCancel:function(){p.resetFields(),l()},destroyOnClose:!0,onOk:function(){p.validateFields().then((function(e){console.log("values",e),p.resetFields(),p.setFieldsValue(e),t(e)})).catch((function(e){console.log("校验失败:",e)}))}},g.createElement(r.Z,{form:p,name:"EditLessee"},g.createElement(r.Z.Item,{label:"子表单名称",name:"childFormName"},g.createElement(a.Z,{placeholder:"请输入子表单名称"})),g.createElement(r.Z.Item,{label:"关联流程",name:"process",rules:[{required:!0,message:"请输入租户code",whitespace:!0}],hasFeedback:!0},g.createElement(i.Z,{placeholder:"请选择服务状态",allowClear:!0},null==s?void 0:s.map((function(e){return g.createElement(i.Z.Option,{value:null==e?void 0:e.actProcdefId},null==e?void 0:e.defName)})))),g.createElement(r.Z.Item,{label:"管理员",name:"administrators"},g.createElement(i.Z,{placeholder:"请选择管理员",allowClear:!0,mode:"multiple"},null==d?void 0:d.map((function(e){return g.createElement(i.Z.Option,{value:null==e?void 0:e.id},null==e?void 0:e.username)})))),g.createElement(r.Z.Item,{label:"授权组",name:"authGroups"},g.createElement(i.Z,{placeholder:"请选择授权组",allowClear:!0,mode:"multiple"},null==u?void 0:u.map((function(e){return g.createElement(i.Z.Option,{value:null==e?void 0:e.id},null==e?void 0:e.groupName)}))))))};var T,O=t(55877);var P=C().bind(x),R=b.Z.TreeNode,K=(0,E.connect)((function(e){return{global:e.global,formEngine:e.formEngine}}))(T=function(e){(0,p.Z)(E,e);var n,t,Z=(n=E,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,l=(0,v.Z)(n);if(t){var o=(0,v.Z)(this).constructor;e=Reflect.construct(l,arguments,o)}else e=l.apply(this,arguments);return(0,f.Z)(this,e)});function E(e){var n;return(0,d.Z)(this,E),n=Z.call(this,e),(0,h.Z)((0,m.Z)(n),"formRef",g.createRef()),(0,h.Z)((0,m.Z)(n),"formRefChildren",g.createRef()),(0,h.Z)((0,m.Z)(n),"workflowList",(function(){(0,n.props.dispatch)({type:"formEngine/workflowList",opt:{},callback:function(e){var t,l=(null==e||null===(t=e.data)||void 0===t?void 0:t.data)||[];n.setState({dataSource:null==l?void 0:l.list})}})})),(0,h.Z)((0,m.Z)(n),"workflowDetail",(function(e){(0,n.props.dispatch)({type:"formEngine/getWorkflow",opt:{procDefId:e},callback:function(e){var t,l,o=(null==e||null===(t=e.data)||void 0===t?void 0:t.data)||[],a=(null==o||null===(l=o.procFormDesc)||void 0===l?void 0:l.taskForms)||[],r=[];null==a||a.map((function(e,n){var t,l;r.push({title:null==e||null===(t=e.formContent)||void 0===t?void 0:t.name,key:null==e||null===(l=e.formContent)||void 0===l?void 0:l.key})})),n.setState({treeData:[{title:null==o?void 0:o.instanceLabel,key:null==o?void 0:o.procDefKey,isParent:!0,children:r}]},(function(){n.setState({isDetail:!0,workflowData:o},(function(){var e,t,l,a,r;n.formRef.current.setFieldsValue({process:(null==o?void 0:o.procDefKey)||"",administrators:(null==o||null===(e=o.authInfo)||void 0===e||null===(t=e.managers)||void 0===t?void 0:t[0].id)||"",visibleGroups:(null==o||null===(l=o.authInfo)||void 0===l||null===(a=l.authGroups)||void 0===a||null===(r=a[0])||void 0===r?void 0:r.id)||""})}))}))}})})),(0,h.Z)((0,m.Z)(n),"getProcess",(function(){(0,n.props.dispatch)({type:"formEngine/getProcess",opt:{},callback:function(e){var t,l=(null==e||null===(t=e.data)||void 0===t?void 0:t.data)||[];n.setState({processList:l})}})})),(0,h.Z)((0,m.Z)(n),"getNodes",(function(){(0,n.props.dispatch)({type:"formEngine/getNodes",opt:{procDefId:n.state.procDefId},callback:function(e){var t,l=(null==e||null===(t=e.data)||void 0===t?void 0:t.data)||[];n.setState({taskList:l})}})})),(0,h.Z)((0,m.Z)(n),"getUserLists",(function(){(0,n.props.dispatch)({type:"formEngine/getUserLists",opt:{},callback:function(e){var t,l=(null==e||null===(t=e.data)||void 0===t?void 0:t.data)||[];n.setState({userLists:null==l?void 0:l.list})}})})),(0,h.Z)((0,m.Z)(n),"getGroupLists",(function(){(0,n.props.dispatch)({type:"formEngine/getGroupLists",opt:{},callback:function(e){var t,l=(null==e||null===(t=e.data)||void 0===t?void 0:t.data)||[];n.setState({groupLists:null==l?void 0:l.list})}})})),(0,h.Z)((0,m.Z)(n),"onExpand",(function(e){n.setState({expandedKeys:e,autoExpandParent:!1})})),(0,h.Z)((0,m.Z)(n),"onCheck",(function(e){n.setState({checkedKeys:e})})),(0,h.Z)((0,m.Z)(n),"onSelect",(function(e,t){n.setState({selectedKeys:e,isParent:t.node.isParent||!1})})),(0,h.Z)((0,m.Z)(n),"submitMap",(function(e){var t,l,o=[],a=[];null==e||null===(t=e.administrators)||void 0===t||t.forEach((function(t){var l,a=(null===(l=n.state.userLists.filter((function(n){return n.id==(null==e?void 0:e.administrators)})))||void 0===l?void 0:l[0])||{};o.push(a)})),null==e||null===(l=e.authGroups)||void 0===l||l.forEach((function(t){var l,o=(null===(l=n.state.groupLists.filter((function(n){return n.id==(null==e?void 0:e.authGroups)})))||void 0===l?void 0:l[0])||{};a.push(o)})),(0,n.props.dispatch)({type:"formEngine/saveWorkflow",opt:{procFormName:null==e?void 0:e.formName,procDefKey:null==e?void 0:e.process,procDefId:null==e?void 0:e.process,instanceLabel:null==e?void 0:e.formName,authInfo:{managers:o,authGroups:a},procFormDesc:{taskForms:[]}},callback:function(e){n.onCancel(),n.workflowList()}})})),(0,h.Z)((0,m.Z)(n),"onCancel",(function(){n.setState({visibleModal:!1})})),(0,h.Z)((0,m.Z)(n),"renderTreeNodes",(function(e){return e.map((function(e){return e.iconnode=g.createElement(g.Fragment,null,g.createElement("span",null,e.title),null!=e&&e.isParent?g.createElement("span",null,g.createElement(L.Z,{style:{marginLeft:10},onClick:function(){return n.showAddModa(e)}})):g.createElement("span",null,g.createElement(I.Z,{style:{marginLeft:10},onClick:function(){return n.showAddModa(e,"edit")}}),g.createElement(D.Z,{style:{marginLeft:10},onClick:function(){return n.showAddModa(e,"del")}}))),e.children?g.createElement(R,{title:e.iconnode,key:e.key,dataRef:e},n.renderTreeNodes(e.children)):g.createElement(R,{title:e.iconnode,key:e.key,dataRef:e})}))})),(0,h.Z)((0,m.Z)(n),"showAddModa",(function(e,t){var l,o,a;switch(console.log("333",e,t),t){case"edit":n.setState({visibleChildFormModal:!0,initValues:{childFormName:e.title}});break;case"del":var r=n.state.workflowData,i=null==r||null===(l=r.procFormDesc)||void 0===l?void 0:l.taskForms.findIndex((function(n,t){return console.log("temp",n),n.formContent.key==e.key}));null==r||null===(o=r.procFormDesc)||void 0===o||o.taskForms.splice(i,1),console.log("444",r,i),c.Z.confirm({title:"确认删除？",okText:"继续",cancelText:"返回静态利润测算",onOk:(a=(0,s.Z)(k().mark((function e(){return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,n.props.dispatch)({type:"formEngine/saveWorkflow",opt:r,callback:function(e){n.setState({workflowData:r}),n.workflowList()}});case 2:case"end":return e.stop()}}),e)}))),function(){return a.apply(this,arguments)}),onCancel:function(){}});break;default:n.setState({visibleChildFormModal:!0})}})),(0,h.Z)((0,m.Z)(n),"addChildForm",(function(e){var t,l=n.props.dispatch,o=n.state.workflowData;null==o||null===(t=o.procFormDesc)||void 0===t||t.taskForms.push({formContent:{name:null==e?void 0:e.childFormName,key:(0,O.v4)()},taskDefKey:"",taskConfig:{candidate:[{type:"",relId:""}],assigeeSource:{type:"CREATER",option:{groupIds:[]}}},formSource:"CUSTOM",formConfig:{}}),l({type:"formEngine/saveWorkflow",opt:o,callback:function(e){n.closeChildFormModal(),n.workflowList()}})})),(0,h.Z)((0,m.Z)(n),"closeChildFormModal",(function(){n.setState({visibleChildFormModal:!1})})),n.state={dataSource:[],isDetail:!1,expandedKeys:[],autoExpandParent:!0,checkedKeys:[],treeData:{},procDefId:"",processList:[],taskList:[],userLists:[],groupLists:[],isParent:!0,visibleChildFormModal:!1},n.columns=[{title:"序号",key:"id",textWrap:"word-break",ellipsis:!0,render:function(e,n,t){return g.createElement(g.Fragment,null,g.createElement("span",null,t+1))}},{title:"instanceLabel",key:"instanceLabel",dataIndex:"instanceLabel"},{title:"procDefId",key:"procDefId",dataIndex:"procDefId",textWrap:"word-break",ellipsis:!0},{title:"procFormName",key:"procFormName",dataIndex:"procFormName",textWrap:"word-break",ellipsis:!0},{title:"procFormType",key:"procFormType",dataIndex:"procFormType",textWrap:"word-break",ellipsis:!0},{title:"操作",key:"ee",textWrap:"word-break",ellipsis:!0,render:function(e,t){return g.createElement("span",{onClick:function(){n.workflowDetail(null==e?void 0:e.procDefId)}},"详情")}}],n}return(0,u.Z)(E,[{key:"componentDidMount",value:function(){this.workflowList(),this.getProcess(),this.getUserLists(),this.getGroupLists()}},{key:"render",value:function(){var e,n,t,s,c,d=this,u=this.state,m=u.processList,p=u.groupLists,f=u.taskList,v=u.userLists,h=u.expandedKeys,Z=u.autoExpandParent,k=u.selectedKeys,E=u.isDetail,_=u.treeData,y=u.isParent,w=u.dataSource,x=u.visibleModal,F=u.visibleChildFormModal,C=u.initValues;return g.createElement(g.Fragment,null,E?g.createElement("div",{className:P("detailFormBox")},g.createElement(b.Z,{onExpand:this.onExpand,expandedKeys:h,autoExpandParent:Z,onSelect:this.onSelect,selectedKeys:k,className:P("formTree")},this.renderTreeNodes(_)),y?g.createElement(r.Z,{ref:this.formRef,className:P("searchForm"),layout:"inline"},g.createElement(r.Z.Item,{label:"关联流程",name:"process"},g.createElement(i.Z,{placeholder:"请选择服务状态",allowClear:!0,onChange:function(e){d.setState({procDefId:e},(function(){d.getNodes()}))}},null==m?void 0:m.map((function(e){return g.createElement(i.Z.Option,{value:null==e?void 0:e.actProcdefId},null==e?void 0:e.defName)})))),g.createElement(r.Z.Item,{label:"流程实例前缀",name:"instancePrefix"},g.createElement(a.Z,{placeholder:"请输入流程实例前缀"})),g.createElement(r.Z.Item,{label:"管理员",name:"administrators"},g.createElement(i.Z,{placeholder:"请选择管理员",allowClear:!0,showSearch:!0},null===(e=v||[])||void 0===e?void 0:e.map((function(e){return g.createElement(i.Z.Option,{value:null==e?void 0:e.id,key:null==e?void 0:e.id},null==e?void 0:e.username)})))),g.createElement(r.Z.Item,{label:"授权可见组",name:"visibleGroups"},g.createElement(i.Z,{placeholder:"请选择授权可见组",allowClear:!0,showSearch:!0},null===(n=p||[])||void 0===n?void 0:n.map((function(e){return g.createElement(i.Z.Option,{value:null==e?void 0:e.id},null==e?void 0:e.groupName)}))))):g.createElement(r.Z,{ref:this.formRefChildren,className:P("searchForm"),layout:"inline"},g.createElement(r.Z.Item,{label:"处理人",name:"handler"},g.createElement(i.Z,{placeholder:"请选择处理人",allowClear:!0},null===(t=v||[])||void 0===t?void 0:t.map((function(e){return g.createElement(i.Z.Option,{value:null==e?void 0:e.id},null==e?void 0:e.username)})))),g.createElement(r.Z.Item,{label:"候选组",name:"candidateGroup"},g.createElement(i.Z,{placeholder:"请选择候选组",allowClear:!0,showSearch:!0},null===(s=p||[])||void 0===s?void 0:s.map((function(e){return g.createElement(i.Z.Option,{value:null==e?void 0:e.id},null==e?void 0:e.groupName)})))),g.createElement(r.Z.Item,{label:"关联任务",name:"associatedTask"},g.createElement(i.Z,{placeholder:"请选择关联任务",allowClear:!0,showSearch:!0},null===(c=f||[])||void 0===c?void 0:c.map((function(e){return g.createElement(i.Z.Option,{value:null==e?void 0:e.taskDefKey},null==e?void 0:e.taskDefName)})))),g.createElement(r.Z.Item,{label:"表单选择",name:"tenantCode"},g.createElement(a.Z,{type:"text",placeholder:""})))):g.createElement(g.Fragment,null,g.createElement(o.Z,{type:"primary",onClick:function(){d.setState({visibleModal:!0})}},"新增"),g.createElement(l.Z,{scroll:{x:!0},style:{marginTop:"20px"},dataSource:w,columns:this.columns,pagination:!1,rowKey:function(e){return e.id}})),g.createElement(S,{visible:x,processList:m,userLists:v,groupLists:p,onCancel:this.onCancel,submitMap:this.submitMap}),g.createElement(N,{visible:F,initValues:C,onCancel:this.closeChildFormModal,processList:m,userLists:v,groupLists:p,submitMap:this.addChildForm}))}}]),E}(g.Component))||T},80730:(e,n,t)=>{t.d(n,{Z:()=>a});var l=t(23645),o=t.n(l)()((function(e){return e[1]}));o.push([e.id,'html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  font-family: "微软雅黑", "Arial", "华文细黑", "STHeiti", "MingLiu";\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \'\';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\na {\n  color: #000;\n  text-decoration: none;\n}\na:hover {\n  color: #000;\n  text-decoration: none;\n}\n::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n::-webkit-scrollbar-thumb {\n  background-color: #aaa;\n  border-radius: 10px;\n}\n#index-module__root___bZ_4R {\n  height: 100%;\n}\n.index-module__box___1dIJl {\n  width: 100%;\n  display: flex;\n  height: 100%;\n  min-height: 92vh;\n  background-color: #f0f2f5;\n}\n.index-module__detailFormBox___1jHMC {\n  display: flex;\n  height: 100%;\n  padding: 20px 0;\n}\n.index-module__detailFormBox___1jHMC .index-module__formTree___2JMKk {\n  width: 200px;\n}\n.index-module__detailFormBox___1jHMC .index-module__searchForm___2z1Tm {\n  width: calc(100% - 200px);\n  height: 60px;\n}\n.index-module__detailFormBox___1jHMC .index-module__searchForm___2z1Tm .ant-form-item-label {\n  width: 90px;\n}\n.index-module__detailFormBox___1jHMC .index-module__searchForm___2z1Tm .ant-form-item-control {\n  width: 135px;\n}\n',""]),o.locals={root:"index-module__root___bZ_4R",box:"index-module__box___1dIJl",detailFormBox:"index-module__detailFormBox___1jHMC",formTree:"index-module__formTree___2JMKk",searchForm:"index-module__searchForm___2z1Tm"};const a=o}}]);