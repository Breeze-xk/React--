"use strict";(self.webpackChunkt_zero_user_operation_frontend=self.webpackChunkt_zero_user_operation_frontend||[]).push([[3375],{15746:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t(21584).Z},62194:(e,n,t)=>{t(7816),t(69449)},71230:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t(92820).Z},90562:(e,n,t)=>{t(7816),t(69449)},43375:(e,n,t)=>{t.r(n),t.d(n,{default:()=>q}),t(95352);var i=t(37614),o=(t(55290),t(82530)),r=(t(90562),t(71230)),l=(t(62194),t(15746)),a=(t(24713),t(82482)),s=(t(10534),t(20924)),d=(t(58645),t(71577)),_=(t(47610),t(55026)),u=t(15861),c=t(15671),m=t(43144),f=t(97326),x=t(79340),g=t(82963),p=t(61120),b=t(4942),y=(t(11658),t(89588)),h=t(87757),v=t.n(h),w=t(67294),Z=t(55609),k=t(93379),E=t.n(k),V=t(28726);E()(V.Z,{insert:"head",singleton:!1});const I=V.Z.locals||{};var C,L=t(47166),S=t.n(L),R=t(30944),P=t(3510),H=t(43864),F=t.n(H),N=t(28626);E()(N.Z,{insert:"head",singleton:!1}),N.Z.locals;var z=S().bind(I),B=y.Z.Countdown,q=(0,Z.connect)((function(e){return{global:e.global,login:e.login}}))(C=function(e){(0,x.Z)(Z,e);var n,t,y,h=(t=Z,y=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,p.Z)(t);if(y){var i=(0,p.Z)(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return(0,g.Z)(this,e)});function Z(e){var n;return(0,c.Z)(this,Z),n=h.call(this,e),(0,b.Z)((0,f.Z)(n),"formRef",w.createRef()),(0,b.Z)((0,f.Z)(n),"verify",w.createRef()),(0,b.Z)((0,f.Z)(n),"getLessee",(0,u.Z)(v().mark((function e(){var t,i,o;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.ID,i=n.props,o=i.dispatch,i.history,e.next=4,o({type:"login/getLessee",opt:{identifyId:t},callback:function(e){var t,i,o,r,l,a,s;sessionStorage.removeItem("tenantId"),(null==e||null===(t=e.data)||void 0===t?void 0:t.data).length>1?n.setState({lesseeList:null==e||null===(i=e.data)||void 0===i?void 0:i.data,visible:(null==e||null===(o=e.data)||void 0===o?void 0:o.data.length)>1}):(sessionStorage.setItem("tenantId",null==e||null===(r=e.data)||void 0===r||null===(l=r.data[0])||void 0===l?void 0:l.id),n.getUserId(null==e||null===(a=e.data)||void 0===a||null===(s=a.data[0])||void 0===s?void 0:s.id))}});case 4:case"end":return e.stop()}}),e)})))),(0,b.Z)((0,f.Z)(n),"getUserId",function(){var e=(0,u.Z)(v().mark((function e(t){var i,o,r,l,a,s,d,u,c,m,f,x,g,p,b,y,h,w,Z;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return sessionStorage.setItem("tenantId",t),o=n.state.ID,r=n.props,l=r.dispatch,a=r.history,s=r.location,e.next=5,l({type:"login/getuserId",opt:{identifyId:o,tenantId:t}});case 5:if(200!=(null==(d=e.sent)||null===(i=d.data)||void 0===i?void 0:i.status)){e.next=20;break}return p=null==d||null===(u=d.data)||void 0===u||null===(c=u.data)||void 0===c?void 0:c.id,sessionStorage.removeItem("userId"),sessionStorage.setItem("userId",p),e.next=12,l({type:"login/getPermission"});case 12:b=e.sent,_.ZP.success("登录成功!"),sessionStorage.setItem("permission",null==b||null===(m=b.data)||void 0===m||null===(f=m.data)||void 0===f?void 0:f.permissions),sessionStorage.setItem("inOrganizationFlag",null==b||null===(x=b.data)||void 0===x||null===(g=x.data)||void 0===g?void 0:g.inOrganizationFlag),"home"==(null==(y=(0,R.qs)(null==s?void 0:s.search))?void 0:y.form)?((null==b||null===(h=b.data)||void 0===h||null===(w=h.data)||void 0===w?void 0:w.permissions)||[]).indexOf("permisionBusinessMember-operateProfit-3")>-1?window.open("".concat(P.Z.baseIP,"/cloud-design/#/create"),"_self"):window.open("".concat(P.Z.baseIP,"/cloud-design/#/customerHome"),"_self"):a.push("/personalCenter"),e.next=21;break;case 20:_.ZP.error((null==d||null===(Z=d.data)||void 0===Z?void 0:Z.message)||"登录失败!");case 21:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),(0,b.Z)((0,f.Z)(n),"onFinish",function(){var e=(0,u.Z)(v().mark((function e(t){var i,o,r,l;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),i=n.props,o=i.dispatch,i.history,r=n.state,l=r.isVerification,!r.isForgetPwd){e.next=8;break}return e.next=6,o({type:"login/checkCode",opt:{username:t.username,authValue:t.smsCode},callback:function(e){var i,r,l;200==(null==e||null===(i=e.data)||void 0===i?void 0:i.status)?o({type:"login/updatPeassword",opt:{username:t.username,authValue:(0,R.WS)(null==t?void 0:t.password)},callback:function(e){var t;null!=e&&null!==(t=e.data)&&void 0!==t&&t.data&&(n.setState({isForgetPwd:!1}),n.formRef.current.setFieldsValue({username:n.formRef.current.getFieldsValue().username,password:""}),_.ZP.success("密码修改成功"))}}):_.ZP.error((null==e||null===(r=e.data)||void 0===r||null===(l=r.data)||void 0===l?void 0:l.message)||"验证码错误!")}});case 6:e.next=10;break;case 8:return e.next=10,o({type:"login/goLogin",opt:{authType:l?"USERNAME":"PHONE",username:t.username,authValue:l?(0,R.WS)(null==t?void 0:t.password):t.smsCode,codeType:"login"},callback:function(e){var t,i,o,r,l,a;console.log("sdasdasda",e),200==(null==e||null===(t=e.data)||void 0===t?void 0:t.status)?n.setState({ID:null==e||null===(i=e.data)||void 0===i||null===(o=i.data)||void 0===o?void 0:o.id,identifyCode:null==e||null===(r=e.data)||void 0===r||null===(l=r.data)||void 0===l?void 0:l.identifyCode},(function(){n.getLessee()})):_.ZP.error((null==e||null===(a=e.data)||void 0===a?void 0:a.message)||"登录失败!")}});case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),(0,b.Z)((0,f.Z)(n),"onFinishFailed",(function(e){console.log("Failed:",e)})),(0,b.Z)((0,f.Z)(n),"handleRadio",(function(e){n.setState({tenantId:e.target.value})})),(0,b.Z)((0,f.Z)(n),"handleOk",(0,u.Z)(v().mark((function e(){var t,i;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.state,i=t.tenantId,t.identifyCode,!i){e.next=6;break}return e.next=4,n.getUserId(i);case 4:e.next=7;break;case 6:_.ZP.warn("请选择一个租户方可进入系统！");case 7:case"end":return e.stop()}}),e)})))),(0,b.Z)((0,f.Z)(n),"handleCancel",(function(){n.setState({visible:!1})})),(0,b.Z)((0,f.Z)(n),"getVerification",(function(){(0,n.props.dispatch)({type:"login/getVerification",opt:{username:n.formRef.current.getFieldsValue().username,codeType:"login",checkKey:(0,R.WS)((0,R.bX)(n.state.userKey).substring(0,(0,R.bX)(n.state.userKey).length-4)+n.state.flagVerify)},callback:function(e){var t,i;if(200==(null==e||null===(t=e.data)||void 0===t?void 0:t.status))n.setState({getVerificationCode:!0}),setTimeout((function(){n.setState({getVerificationCode:!1})}),6e4);else if(500==(null==e||null===(i=e.data)||void 0===i?void 0:i.status)){var o,r,l;_.ZP.error(null==e||null===(o=e.data)||void 0===o?void 0:o.message),n.setState({flagVerify:"false",isVerifyDisable:!1,getVerificationCode:!1}),null===(r=n.verify)||void 0===r||null===(l=r.current)||void 0===l||l.reset(),n.getVerifyKey()}else{var a;_.ZP.error(null==e||null===(a=e.data)||void 0===a?void 0:a.message)}}}),n.setState({isVerifyDisable:!0})})),(0,b.Z)((0,f.Z)(n),"forgetPwd",(function(){n.setState({isForgetPwd:!0}),n.formRef.current.setFieldsValue({username:n.formRef.current.getFieldsValue().username,password:""})})),(0,b.Z)((0,f.Z)(n),"handleOut",(function(){window.open("".concat(P.Z.baseIP,"/#/home"),"_self"),sessionStorage.removeItem("userId"),sessionStorage.removeItem("tenantId"),sessionStorage.removeItem("permission"),sessionStorage.removeItem("inOrganizationFlag"),setTimeout((function(){window.location.reload()}),100)})),(0,b.Z)((0,f.Z)(n),"getVerifyKey",(function(){var e,t,i,o,r=n.formRef.current.getFieldsValue().username;/^1[3|4|5|6|7|8][0-9]{9}$/.test(r)?(""!=n.state.oldUserName&&r!=n.state.oldUserName?(n.setState({flagVerify:"false",isVerifyDisable:!1,getVerificationCode:!1}),null===(e=n.verify)||void 0===e||null===(t=e.current)||void 0===t||t.reset()):n.setState({isVerifyDisable:!1,oldUserName:r}),(0,n.props.dispatch)({type:"login/checkKey",opt:{username:n.formRef.current.getFieldsValue().username},callback:function(e){var t;if(200==(null==e||null===(t=e.data)||void 0===t?void 0:t.status)){var i,o,r=(null==e||null===(i=e.data)||void 0===i||null===(o=i.data)||void 0===o?void 0:o.username)||"";n.setState({userKey:r}),n.setState({isVerify:!1})}else{var l;_.ZP.error(null==e||null===(l=e.data)||void 0===l?void 0:l.message)}}})):(n.setState({isVerify:!0,flagVerify:"false",isVerifyDisable:!0,getVerificationCode:!1}),null===(i=n.verify)||void 0===i||null===(o=i.current)||void 0===o||o.reset())})),(0,b.Z)((0,f.Z)(n),"handleChangeNum",(function(){})),n.state={ID:"",userID:"",identifyCode:"",lesseeList:[],visible:!1,tenantId:"",isVerification:!0,isForgetPwd:!1,getVerificationCode:!1,smsCode:"",isVerify:!0,flagVerify:"false",isVerifyDisable:!0,userKey:"",username:"",oldUserName:""},n}return(0,m.Z)(Z,[{key:"componentDidMount",value:function(){console.log("this:::",this)}},{key:"getType",value:(n=(0,u.Z)(v().mark((function e(){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,this.props.dispatch)({type:"login/getLoginType",opt:{configCode:"LOGIN_AUTH",configKey:"authedDesc"},callback:function(e){console.log(e)}});case 2:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"reset",value:function(){var e,n;null===(e=this.verify)||void 0===e||null===(n=e.current)||void 0===n||n.reset(),this.formRef.current.resetFields(),this.setState({isVerify:!0,flagVerify:"false",isVerifyDisable:!0,getVerificationCode:!1,oldUserName:""})}},{key:"render",value:function(){var e=this,n=this.props,t=n.history,_=(n.location,this.state),u=_.visible,c=_.lesseeList,m=_.isVerification,f=_.isForgetPwd,x=_.getVerificationCode,g=_.isVerify,p=_.flagVerify,b=_.isVerifyDisable;return w.createElement("div",{className:z("login")},w.createElement(r.Z,{className:z("center-box")},w.createElement(l.Z,{span:"14",className:z("mod-new-reg")},w.createElement("div",{className:z("mod-new-reg-logo")},w.createElement("div",{className:z("mod-new-reg-logo-box"),onClick:function(){e.handleOut()}},w.createElement("h3",null,"WELCOME."),w.createElement("h3",null,"<欢迎来到>"),w.createElement("h3",{style:{fontSize:54}},"图零科技",w.createElement("span",{className:z("twinkle")},"_"))))),w.createElement(l.Z,{span:"10",className:z("registerBox")},w.createElement("div",{className:z("register_box"),style:m?{height:f?"480px":"380px"}:{height:"400px"}},w.createElement("h3",{style:{marginLeft:25}},f?"GET BACK.":"LOG IN."),w.createElement("div",{className:z("login-box")},w.createElement(a.Z,{ref:this.formRef,name:"login",labelAlign:"left",onFinish:this.onFinish,onFinishFailed:this.onFinishFailed},f?null:w.createElement("div",{style:{margin:"0 0 20px 25px"}},w.createElement(d.Z,{type:m?"link":"text",className:z("verification-btn"),onClick:function(){e.setState({isVerification:!0},(function(){e.reset()}))}},"账号登录"),w.createElement("span",{style:{fontSize:30,marginRight:20}},"/"),w.createElement(d.Z,{type:m?"text":"link",className:z("verification-btn"),onClick:function(){e.setState({isVerification:!1},(function(){e.reset()}))}},"验证码登录")),m?f?w.createElement("div",null,w.createElement(a.Z.Item,{name:"username",label:"手机号",rules:[{required:!0,message:"请输入手机号"},{pattern:/^1[3|4|5|6|7|8][0-9]{9}$/,message:"请输入正确手机号!"}],hasFeedback:!0},w.createElement(s.Z,{placeholder:"请输入手机号",onchange:e.handleChangeNum,onBlur:e.getVerifyKey})),w.createElement(a.Z.Item,{name:"verify",label:w.createElement("span",{className:z("verifyLabel")},"校验")},w.createElement("div",{style:b?{pointerEvents:"none"}:{}},w.createElement(F(),{ref:e.verify,width:250,success:function(){e.setState({flagVerify:"true"})}}))),w.createElement(a.Z.Item,{name:"smsCode",label:"验证码",rules:[{required:!0,message:"请输入验证码"}],className:z("verification")},w.createElement(s.Z,{placeholder:"请输入验证码"})),w.createElement(d.Z,{onClick:e.getVerification,style:{width:"122px"},disabled:x||g||"false"==p},x&&w.createElement(w.Fragment,null,w.createElement(B,{format:"s",value:Date.now()+6e4}),"秒"),!x&&"获取验证码"),w.createElement(a.Z.Item,{label:"密码",name:"password",rules:[{required:!0,message:"请输入新密码!"},{max:20,message:"最长20位!"},{min:4,message:"至少4位!!"},{pattern:/^[A-Za-z\d_]+$/,message:"只能包含字母数字下划线字符!"}]},w.createElement(s.Z.Password,{placeholder:"请输入新密码"})),w.createElement(a.Z.Item,{label:"确认密码",name:"confirm",rules:[{required:!0,message:"再次请输入新密码!"},{max:20,message:"最长20位!"},{min:4,message:"至少4位!!"},{pattern:/^[A-Za-z\d_]+$/,message:"只能包含字母数字下划线字符!"},function(e){var n=e.getFieldValue;return{validator:function(e,t){return t&&n("password")!==t?Promise.reject(new Error("两次密码输入不一致!")):Promise.resolve()}}}]},w.createElement(s.Z.Password,{placeholder:"再次请输入新密码"}))):w.createElement("div",null,w.createElement(a.Z.Item,{label:"账号",name:"username",rules:[{required:!0,message:"请输入账号!"}]},w.createElement(s.Z,{placeholder:"请输入账号"})),w.createElement(a.Z.Item,{label:"密码",name:"password",rules:[{required:!0,message:"请输入密码!"},{max:20,message:"最长20位!"},{min:4,message:"至少4位!!"},{pattern:/^[A-Za-z\d_]+$/,message:"只能包含字母数字下划线字符!"}]},w.createElement(s.Z.Password,{placeholder:"请输入密码"}))):w.createElement("div",null,w.createElement(a.Z.Item,{name:"username",label:"手机号",rules:[{required:!0,message:"请输入手机号"},{pattern:/^1[3|4|5|6|7|8][0-9]{9}$/,message:"请输入正确手机号!"}],hasFeedback:!0},w.createElement(s.Z,{placeholder:"请输入手机号",onBlur:e.getVerifyKey})),w.createElement(a.Z.Item,{name:"verify",label:w.createElement("span",{className:z("verifyLabel")},"校验")},w.createElement("div",{style:b?{pointerEvents:"none"}:{}},w.createElement(F(),{ref:e.verify,width:250,success:function(){e.setState({flagVerify:"true"})}}))),w.createElement(a.Z.Item,{name:"smsCode",label:"验证码",rules:[{required:!0,message:"请输入验证码"}],className:z("verification")},w.createElement(s.Z,{placeholder:"请输入验证码"})),w.createElement(d.Z,{onClick:e.getVerification,style:{width:"122px"},disabled:x||g||"false"==p},x&&w.createElement(w.Fragment,null,w.createElement(B,{format:"s",value:Date.now()+6e4}),"秒"),!x&&"获取验证码")),m&&!f&&w.createElement("div",{className:z("register-btn")},w.createElement(d.Z,{onClick:this.forgetPwd,type:"text"},"忘记密码")),w.createElement("div",{className:z("login-btn")},f?w.createElement("div",{className:z("login-btn-box")},w.createElement(d.Z,{onClick:function(){e.setState({isForgetPwd:!1})}},"返回"),w.createElement(d.Z,{style:{marginLeft:"20px"},type:"primary",htmlType:"submit"},"修改密码")):w.createElement("div",{className:z("login-btn-box")},w.createElement(d.Z,{onClick:function(){t.push("/register")}},"注册"),w.createElement(d.Z,{style:{marginLeft:"20px"},type:"primary",htmlType:"submit"},"登录")))))))),w.createElement(i.Z,{title:"请选择您已拥有的其中一个租户，方可进入系统",visible:u,onOk:this.handleOk,onCancel:this.handleCancel,okText:"确定",cancelText:"取消"},w.createElement(o.ZP.Group,{onChange:this.handleRadio,buttonStyle:"solid"},c.map((function(e){return w.createElement(o.ZP,{value:e.id},e.tenantName)})))))}}]),Z}(w.PureComponent))||C},28626:(e,n,t)=>{t.d(n,{Z:()=>r});var i=t(23645),o=t.n(i)()((function(e){return e[1]}));o.push([e.id,".simple-verify {\n  box-sizing: border-box;\n  line-height: 1;\n  position: relative;\n  -webkit-user-select: none;\n}\n.simple-verify .verify-tips {\n  widows: 100%;\n  height: 100%;\n  color: #9CA0A7;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n  margin-left: 35px;\n  pointer-events: none;\n}\n.simple-verify .verify-box {\n  position: absolute;\n  left: -1px;\n  top: -1px;\n  width: calc(100% + 2px);\n  height: calc(100% + 2px);\n  overflow: hidden;\n}\n.simple-verify .veriry-slide {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: opacity 0.1s linear, transform 0.3s ease;\n}\n.simple-verify .verify-bar {\n  position: absolute;\n  left: -1px;\n  top: -1px;\n  width: 50px;\n  height: 100%;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  transition: transform 0.3s ease;\n  touch-action: none;\n}\n.simple-verify .verify-bar .icon {\n  width: 44px;\n  height: 29px;\n  box-shadow: rgba(113, 114, 119, 0.3) 0 3px 10px;\n  border-radius: 4px;\n}\n.simple-verify .verify-success-tips {\n  position: absolute;\n  left: -1px;\n  top: -1px;\n  width: calc(100% + 2px);\n  height: calc(100% + 2px);\n  color: #fff;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  font-size: 14px;\n  font-weight: bold;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n  pointer-events: none;\n}\n.simple-verify .verify-success-tips span {\n  width: 20px;\n  height: 20px;\n  margin-right: 8px;\n}\n",""]);const r=o},28726:(e,n,t)=>{t.d(n,{Z:()=>r});var i=t(23645),o=t.n(i)()((function(e){return e[1]}));o.push([e.id,"html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  font-family: \"微软雅黑\", \"Arial\", \"华文细黑\", \"STHeiti\", \"MingLiu\";\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\na {\n  color: #000;\n  text-decoration: none;\n}\na:hover {\n  color: #000;\n  text-decoration: none;\n}\n::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n::-webkit-scrollbar-thumb {\n  background-color: #aaa;\n  border-radius: 10px;\n}\n#index-module__root___ZnO5z {\n  height: 100%;\n}\n.index-module__box___1Lub1 {\n  width: 100%;\n  display: flex;\n  height: 100%;\n  min-height: 92vh;\n  background-color: #f0f2f5;\n}\n.index-module__login___3qKfM {\n  width: 100%;\n  height: 100vh;\n  background: linear-gradient(#2193b0, #6dd5ed);\n  background: -webkit-linear-gradient(#2193b0, #6dd5ed);\n  background: -o-linear-gradient(#2193b0, #6dd5ed);\n  background: -moz-linear-gradient(#2193b0, #6dd5ed);\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.index-module__divDisable___qmMnC {\n  pointer-events: 'none';\n}\n.index-module__center-box___2_tyH {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 400px;\n}\n.index-module__center-box___2_tyH .index-module__mod-new-reg___2_hwd {\n  font-family: PingFang-SC-Regular, Helvetica, 'Microsoft Yahei', '微软雅黑';\n  color: #fff;\n}\n.index-module__center-box___2_tyH .index-module__mod-new-reg-logo___dCKub {\n  position: fixed;\n  height: 200px;\n  left: 250px;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  color: #fff;\n  font-size: 40px;\n  line-height: 1.15;\n  cursor: pointer;\n}\n.index-module__center-box___2_tyH .index-module__mod-new-reg-logo___dCKub .index-module__mod-new-reg-logo-box___3qVa8 {\n  width: 300px;\n}\n.index-module__center-box___2_tyH .index-module__mod-new-reg-logo___dCKub .index-module__twinkle___1TnTa {\n  margin-left: 20px;\n  animation: index-module__cursorImg___1KdX8 1s infinite steps(1, start);\n}\n@keyframes index-module__cursorImg___1KdX8 {\n  0%,\n  100% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n.index-module__center-box___2_tyH .index-module__left___fG7LA {\n  width: 50%;\n  height: 100%;\n  background-size: cover;\n}\n.index-module__center-box___2_tyH .index-module__registerBox___JlMa7 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.index-module__center-box___2_tyH .index-module__register_box___RLy0h {\n  height: 400px;\n  width: 380px;\n  border-radius: 20px;\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n}\n.index-module__center-box___2_tyH .index-module__register_box___RLy0h .index-module__verification-btn___2rMmg {\n  padding: 0;\n  border: 0;\n  margin-right: 20px;\n  font-size: 24px;\n}\n.index-module__center-box___2_tyH .index-module__register_box___RLy0h h3 {\n  font-size: 30px;\n}\n.index-module__center-box___2_tyH .index-module__register_box___RLy0h p {\n  font-size: 18px;\n  margin: 20px 0 0 0;\n}\n.index-module__center-box___2_tyH .index-module__register_box___RLy0h .index-module__login-box___2BbWd {\n  width: 100%;\n  margin-top: 20px;\n}\n.index-module__center-box___2_tyH .index-module__register_box___RLy0h .index-module__login-box___2BbWd .ant-form-item-label {\n  width: 100px;\n  padding-left: 25px;\n}\n.index-module__center-box___2_tyH .index-module__register_box___RLy0h .index-module__login-box___2BbWd .ant-form-item-control-input {\n  width: 250px;\n}\n.index-module__center-box___2_tyH .index-module__register_box___RLy0h .index-module__login-box___2BbWd .index-module__verifyLabel___1qfSx::before {\n  display: inline-block;\n  margin-right: 4px;\n  color: #ff4d4f;\n  font-size: 14px;\n  font-family: SimSun, sans-serif;\n  line-height: 1;\n  content: '*';\n}\n.index-module__center-box___2_tyH .index-module__register_box___RLy0h .index-module__login-box___2BbWd .index-module__verification___yXcBr {\n  width: 228px;\n  display: inline-block;\n}\n.index-module__center-box___2_tyH .index-module__register_box___RLy0h .index-module__login-box___2BbWd .index-module__verification___yXcBr .ant-form-item-label {\n  vertical-align: inherit;\n}\n.index-module__center-box___2_tyH .index-module__register_box___RLy0h .index-module__login-box___2BbWd .index-module__verification___yXcBr .ant-form-item-control {\n  width: 120px;\n  display: inline-block;\n}\n.index-module__center-box___2_tyH .index-module__register_box___RLy0h .index-module__login-box___2BbWd .index-module__verification___yXcBr .ant-form-item-control-input {\n  width: 120px;\n}\n.index-module__center-box___2_tyH .index-module__register_box___RLy0h .index-module__login-box___2BbWd .index-module__forgetPwd___2XsVD {\n  width: 242px;\n  display: inline-block;\n}\n.index-module__center-box___2_tyH .index-module__register_box___RLy0h .index-module__login-box___2BbWd .index-module__forgetPwd___2XsVD .ant-form-item-label {\n  vertical-align: inherit;\n}\n.index-module__center-box___2_tyH .index-module__register_box___RLy0h .index-module__login-box___2BbWd .index-module__forgetPwd___2XsVD .ant-form-item-control {\n  width: 120px;\n  display: inline-block;\n}\n.index-module__center-box___2_tyH .index-module__register_box___RLy0h .index-module__login-box___2BbWd .index-module__forgetPwd___2XsVD .ant-form-item-control-input {\n  width: 120px;\n}\n.index-module__center-box___2_tyH .index-module__register_box___RLy0h .index-module__login-box___2BbWd .index-module__login-btn___wzows {\n  width: 100%;\n  text-align: center;\n}\n.index-module__center-box___2_tyH .index-module__register_box___RLy0h .index-module__login-box___2BbWd .index-module__login-btn___wzows .index-module__login-btn-box___2luci {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.index-module__center-box___2_tyH .index-module__register_box___RLy0h .index-module__login-box___2BbWd .index-module__login-btn___wzows button {\n  width: 150px;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n.index-module__center-box___2_tyH .index-module__register_box___RLy0h .index-module__login-box___2BbWd .index-module__register-btn___1NrJK {\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 34px;\n}\n.index-module__center-box___2_tyH .index-module__register_box___RLy0h .ant-btn .ant-statistic {\n  display: inline-block;\n}\n.index-module__center-box___2_tyH .index-module__register_box___RLy0h .ant-btn .ant-statistic-content {\n  font-size: 14px;\n}\n.index-module__center-box___2_tyH .index-module__simple-verify___QwK4r .index-module__verify-tips___zG-Sw {\n  margin-left: 12px;\n}\n",""]),o.locals={root:"index-module__root___ZnO5z",box:"index-module__box___1Lub1",login:"index-module__login___3qKfM",divDisable:"index-module__divDisable___qmMnC","center-box":"index-module__center-box___2_tyH","mod-new-reg":"index-module__mod-new-reg___2_hwd","mod-new-reg-logo":"index-module__mod-new-reg-logo___dCKub","mod-new-reg-logo-box":"index-module__mod-new-reg-logo-box___3qVa8",twinkle:"index-module__twinkle___1TnTa",cursorImg:"index-module__cursorImg___1KdX8",left:"index-module__left___fG7LA",registerBox:"index-module__registerBox___JlMa7",register_box:"index-module__register_box___RLy0h","verification-btn":"index-module__verification-btn___2rMmg","login-box":"index-module__login-box___2BbWd",verifyLabel:"index-module__verifyLabel___1qfSx",verification:"index-module__verification___yXcBr",forgetPwd:"index-module__forgetPwd___2XsVD","login-btn":"index-module__login-btn___wzows","login-btn-box":"index-module__login-btn-box___2luci","register-btn":"index-module__register-btn___1NrJK","simple-verify":"index-module__simple-verify___QwK4r","verify-tips":"index-module__verify-tips___zG-Sw"};const r=o}}]);