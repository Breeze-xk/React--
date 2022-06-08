"use strict";(self.webpackChunkt_zero_user_operation_frontend=self.webpackChunkt_zero_user_operation_frontend||[]).push([[5976],{35976:(e,n,t)=>{t.r(n),t.d(n,{default:()=>z}),t(95352);var r=t(37614),a=(t(54337),t(4914)),l=(t(4456),t(49531)),o=(t(11125),t(92e3)),s=(t(45654),t(39144)),i=t(87462),c=(t(24713),t(82482)),u=(t(58645),t(71577)),d=(t(27793),t(60331)),m=(t(47610),t(55026)),f=t(15671),p=t(43144),h=t(97326),b=t(79340),g=t(82963),Z=t(61120),_=t(4942),y=(t(10534),t(20924)),k=(t(21384),t(16317)),v=t(67294),I=t(55609),x=t(93379),E=t.n(x),C=t(55006);E()(C.Z,{insert:"head",singleton:!1});const F=C.Z.locals||{};var w,S=t(47166),U=t.n(S),R=t(30944),M=t(5582),P=t.n(M);function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,_.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var N=U().bind(F),V=(k.Z.Option,y.Z.TextArea),z=(0,I.connect)((function(e){return{global:e.global,userCenter:e.userCenter}}))(w=function(e){(0,b.Z)(I,e);var n,t,k=(n=I,t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,Z.Z)(n);if(t){var a=(0,Z.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,g.Z)(this,e)});function I(e){var n,t;return(0,f.Z)(this,I),t=k.call(this,e),(0,_.Z)((0,h.Z)(t),"searchFormRef",v.createRef()),(0,_.Z)((0,h.Z)(t),"userFormRef",v.createRef()),(0,_.Z)((0,h.Z)(t),"onReset",(function(){t.searchFormRef.current.resetFields(),t.searchUserists()})),(0,_.Z)((0,h.Z)(t),"searchUserists",(function(e){var n=t.props,r=n.dispatch,a=(n.location,t.state),l=a.dataSource,o=a.tenantId;r({type:"userCenter/getUserLists",opt:D({currentPage:l.currentPage||1,pageSize:l.pageSize||10,tenantId:o},t.searchFormRef.current.getFieldValue()),callback:function(e){var n;console.log(e);var r=null==e||null===(n=e.data)||void 0===n?void 0:n.data;t.setState({dataSource:{dataList:r.list,total:r.totalCount,currentPage:r.currentPage,pageSize:r.pageSize}})}})})),(0,_.Z)((0,h.Z)(t),"changePage",(function(e,n){var r=t.state.dataSource;r.currentPage=e||1,r.pageSize=n,t.setState({dataSource:r}),t.searchUserists(t.searchFormRef.current.getFieldsValue())})),(0,_.Z)((0,h.Z)(t),"timeShow",(function(e){return P()(e).utcOffset(8).format("YYYY-MM-DD HH:mm:ss")})),(0,_.Z)((0,h.Z)(t),"timeShow2",(function(e){return P()(e)})),(0,_.Z)((0,h.Z)(t),"getUserInfo",(function(e,n){(0,t.props.dispatch)({type:"userCenter/getUserInfo",opt:{userId:e.id,getUserId:e.id},callback:function(e){var r,a=null==e||null===(r=e.data)||void 0===r?void 0:r.data;a.remark=a.userDesc.remark,t.setState({userInfo:a,isModalVisible:!0}),"edit"==n&&t.userFormRef.current.setFieldsValue(D(D({},t.state.userInfo),{},{userDesc:{remark:a.remark}},a))}})})),(0,_.Z)((0,h.Z)(t),"handleUserInfo",(function(){var e=t.props.dispatch,n=t.userFormRef.current.getFieldValue();t.userFormRef.current.validateFields().then((function(r){e({type:"userCenter/modifyUserInfo",opt:D(D({},n),{},{userDesc:{remark:n.remark}}),callback:function(e){var n,r;console.log(null==e||null===(n=e.data)||void 0===n?void 0:n.data),200==e.data.status?(m.ZP.success("修改成功!"),t.searchUserists()):m.ZP.error((null==e||null===(r=e.data)||void 0===r?void 0:r.message)||"修改失败，请重新尝试!")}}),t.handleCancel()})).catch((function(e){console.log("校验失败:",e)}))})),(0,_.Z)((0,h.Z)(t),"handleDelUserInfo",(function(){var e=t.state.userInfo;(0,t.props.dispatch)({type:"userCenter/deleteUserInfo",opt:{userId:e.id},callback:function(e){var n;console.log(e),200==e.data.status?(m.ZP.success("删除成功!"),t.searchUserists(t.searchFormRef.current.getFieldsValue()),t.handleCancel()):m.ZP.error((null==e||null===(n=e.data)||void 0===n?void 0:n.message)||"删除失败，请重新尝试!")}})})),(0,_.Z)((0,h.Z)(t),"handleCancel",(function(){t.setState({isModalVisible:!1,delUserVisible:!1,isDeatil:!1})})),t.state={tenantId:Number((0,R.qs)(null===(n=e.location)||void 0===n?void 0:n.search).tenantId),isModalVisible:!1,isDeatil:!1,dataSource:{dataList:[],total:0,currentPage:1,pageSize:10},modalTitle:"",delUserVisible:!1,userInfo:{}},t}return(0,p.Z)(I,[{key:"componentDidMount",value:function(){var e=this;this.searchFormRef.current.setFieldsValue({member:"all"}),this.setState({tenantId:sessionStorage.getItem("tenantId")},(function(){e.searchUserists(e.searchFormRef.current.getFieldsValue())}))}},{key:"showFormModal",value:function(e,n){"edit"==n?(this.getUserInfo(e,n),this.setState({modalTitle:"编辑用户"})):"detail"==n?(this.setState({isDeatil:!0,modalTitle:"查看详情"}),this.getUserInfo(e,n)):"del"==n&&this.setState({delUserVisible:!0,userInfo:e,modalTitle:"删除用户"})}},{key:"render",value:function(){var e=this,n=this.state,t=n.isModalVisible,m=n.delUserVisible,f=n.isDeatil,p=n.dataSource,h=n.modalTitle,b=n.userInfo,g={labelCol:{xs:{span:24},sm:{span:5},md:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}}},Z=[{title:"序号",key:"id",textWrap:"word-break",ellipsis:!0,render:function(e,n,t){return v.createElement(v.Fragment,null,v.createElement("span",null,t+1))}},{title:"账号",dataIndex:"username",key:"username",textWrap:"word-break",ellipsis:!0},{title:"姓名",dataIndex:"nickName",key:"nickName",textWrap:"word-break",ellipsis:!0},{title:"手机号",dataIndex:"phoneNumber",key:"phoneNumber",textWrap:"word-break",ellipsis:!0},{title:"邮箱",dataIndex:"emailAddress",key:"emailAddress",textWrap:"word-break",ellipsis:!0},{title:"角色",dataIndex:"roles",key:"roles",textWrap:"word-break",ellipsis:!0,render:function(e,n){return v.createElement(v.Fragment,null,(e||[]).map((function(e){return v.createElement(d.Z,{color:"magenta",key:e.id},e.roleName)})))}},{title:"操作",key:"updatedTime",textWrap:"word-break",ellipsis:!0,render:function(n,t){return v.createElement(v.Fragment,null,v.createElement(u.Z,{size:"small",type:"primary",onClick:function(){return e.showFormModal(t,"detail")}},"查看"),v.createElement(u.Z,{style:{marginLeft:"10px"},size:"small",type:"primary",onClick:function(){return e.showFormModal(t,"edit")}},"编辑"),v.createElement(u.Z,{style:{marginLeft:"10px"},size:"small",danger:!0,type:"primary",onClick:function(){return e.showFormModal(t,"del")}},"删除"))}}];return v.createElement("div",{className:N("userCenter")},v.createElement(s.Z,{className:N("searchForm"),title:"用户管理"},v.createElement(c.Z,(0,i.Z)({},g,{ref:this.searchFormRef,layout:"inline",name:"control-ref",onFinish:this.searchUserists}),v.createElement(c.Z.Item,{name:"nickName",label:"姓名"},v.createElement(y.Z,null)),v.createElement(c.Z.Item,{name:"phoneNumber",label:"手机号"},v.createElement(y.Z,null)),v.createElement(u.Z,{type:"primary",htmlType:"submit"},"搜索"),v.createElement(u.Z,{htmlType:"button",style:{margin:"0 8px"},onClick:this.onReset},"清空"))),v.createElement(s.Z,{className:N("userLists")},v.createElement(o.Z,{scroll:{x:!0},rowKey:function(e){return e.id},dataSource:p.dataList,columns:Z,pagination:!1}),v.createElement(l.Z,{showSizeChanger:!0,onChange:this.changePage,defaultCurrent:p.currentPage,total:p.total})),v.createElement(r.Z,{className:N("userInfoModal"),title:h,visible:t,footer:f?null:[v.createElement(u.Z,{onClick:this.handleCancel},"取消"),v.createElement(u.Z,{key:"submit",type:"primary",onClick:this.handleUserInfo},"确认")],onCancel:this.handleCancel},f?v.createElement(a.Z,{column:2},v.createElement(a.Z.Item,{label:"账号"},b.username),v.createElement(a.Z.Item,{label:"姓名"},b.nickName),v.createElement(a.Z.Item,{label:"手机号"},b.phoneNumber),v.createElement(a.Z.Item,{label:"邮箱"},b.emailAddress),v.createElement(a.Z.Item,{label:"备注"},b.remark)):v.createElement(c.Z,(0,i.Z)({},g,{initialValues:b,ref:this.userFormRef,layout:"inline",onFinish:this.onFinish}),v.createElement(c.Z.Item,{name:"username",label:"账号"},v.createElement(y.Z,{disabled:!0})),v.createElement(c.Z.Item,{name:"nickName",rules:[{pattern:/^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/,message:"请输入正确姓名!"}],label:"姓名"},v.createElement(y.Z,null)),v.createElement(c.Z.Item,{name:"sourceCode",label:"邀请码"},v.createElement(y.Z,null)),v.createElement(c.Z.Item,{name:"phoneNumber",label:"手机号",rules:[{required:!1,message:"请输入手机号"},{pattern:/^1[3|4|5|6|7|8][0-9]{9}$/,message:"请输入正确手机号!"}]},v.createElement(y.Z,{placeholder:"请输入手机号"})),v.createElement(c.Z.Item,{name:"emailAddress",label:"邮箱",rules:[{type:"email",message:"这不是个正确的邮箱"},{required:!1,message:"请确认邮箱"}]},v.createElement(y.Z,{placeholder:"请输入邮箱"})),v.createElement(c.Z.Item,{name:"remark",label:"备注"},v.createElement(V,{rows:4,placeholder:"请输入备注"})))),v.createElement(r.Z,{title:"删除用户",visible:m,footer:[v.createElement(u.Z,{key:"submit",type:"primary",onClick:this.handleDelUserInfo},"确认"),v.createElement(u.Z,{onClick:this.handleCancel},"取消")],onOk:this.handleDelUserInfo,onCancel:this.handleCancel},v.createElement("div",null,"即将删除",b.username,"!")))}}]),I}(v.Component))||w},55006:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(23645),a=t.n(r)()((function(e){return e[1]}));a.push([e.id,'html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  font-family: "微软雅黑", "Arial", "华文细黑", "STHeiti", "MingLiu";\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \'\';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\na {\n  color: #000;\n  text-decoration: none;\n}\na:hover {\n  color: #000;\n  text-decoration: none;\n}\n::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n::-webkit-scrollbar-thumb {\n  background-color: #aaa;\n  border-radius: 10px;\n}\n#index-module__root___3UF2_ {\n  height: 100%;\n}\n.index-module__box___2Stbc {\n  width: 100%;\n  display: flex;\n  height: 100%;\n  min-height: 92vh;\n  background-color: #f0f2f5;\n}\n.index-module__userCenter___mlsM- .ant-card {\n  margin: 20px;\n  border-radius: 7px;\n}\n.index-module__userCenter___mlsM- .searchForm .ant-form-inline .ant-form-item {\n  width: 260px;\n}\n.index-module__userCenter___mlsM- .index-module__userInfoModal___2J7Ar {\n  width: 100%;\n}\n.index-module__userLists___3eYRT .addUserBtn {\n  float: right;\n}\n.index-module__userInfoModal___2J7Ar .ant-form-item {\n  width: 100%;\n  margin-bottom: 10px;\n}\n.index-module__userInfoModal___2J7Ar .ant-form-item .ant-form-item-label {\n  width: 100px;\n}\n',""]),a.locals={root:"index-module__root___3UF2_",box:"index-module__box___2Stbc",userCenter:"index-module__userCenter___mlsM-",userInfoModal:"index-module__userInfoModal___2J7Ar",userLists:"index-module__userLists___3eYRT"};const l=a}}]);