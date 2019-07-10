(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d207e87"],{a310:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Form",{ref:"formInline",attrs:{model:e.formInline,rules:e.ruleInline,"label-width":150}},[n("FormItem",{attrs:{label:"OrgName",prop:"orgName"}},[n("Select",{attrs:{placeholder:"please choose organization"},model:{value:e.formInline.orgName,callback:function(t){e.$set(e.formInline,"orgName",t)},expression:"formInline.orgName"}},[n("Option",{attrs:{value:"Org1"}},[e._v("Org1")]),n("Option",{attrs:{value:"Org2"}},[e._v("Org2")]),n("Option",{attrs:{value:"Org3"}},[e._v("Org3")])],1)],1),n("FormItem",{attrs:{label:"EnrollmentID",prop:"enrollmentID"}},[n("Input",{attrs:{type:"text",placeholder:"please input enrollmentID"},model:{value:e.formInline.enrollmentID,callback:function(t){e.$set(e.formInline,"enrollmentID",t)},expression:"formInline.enrollmentID"}}),n("Icon",{attrs:{slot:"prepend",type:"ios-lock-outline"},slot:"prepend"})],1),n("FormItem",{attrs:{label:"EnrollmentSecret",prop:"enrollmentSecret"}},[n("Input",{attrs:{type:"password",placeholder:"please input enrollmentSecret"},model:{value:e.formInline.enrollmentSecret,callback:function(t){e.$set(e.formInline,"enrollmentSecret",t)},expression:"formInline.enrollmentSecret"}}),n("Icon",{attrs:{slot:"prepend",type:"ios-lock-outline"},slot:"prepend"})],1),n("FormItem",[n("Button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("Register")]),n("Button",{on:{click:e.toLoginPage}},[e._v("Signin")])],1)],1)},l=[],o=n("cebc"),a=n("2f62"),i={data:function(){return{formInline:{orgName:"",enrollmentID:"",enrollmentSecret:""},ruleInline:{orgName:[{required:!0,message:"Please fill in the orgName",trigger:"blur"}],enrollmentID:[{required:!0,message:"Please fill in the enrollmentID.",trigger:"blur"},{type:"string",min:6,message:"The enrollmentID length cannot be less than 6 bits",trigger:"blur"}],enrollmentSecret:[{required:!0,message:"Please fill in the enrollmentSecret.",trigger:"blur"},{type:"string",min:6,message:"The enrollmentSecret length cannot be less than 6 bits",trigger:"blur"}]}}},created:function(){},computed:Object(o["a"])({},Object(a["mapState"])(["userData"])),mounted:function(){console.log(this.userData)},methods:Object(o["a"])({},Object(a["mapActions"])(["setUserData"]),Object(a["mapGetters"])(["getUser"]),{handleSubmit:function(){var e=this;this.$refs["formInline"].validate(function(t){t&&e.register()})},register:function(){var e=this;this.$http.post("/api/enroll",this.formInline).then(function(t){e.$log.info("Received items from server."+JSON.stringify(t)),t&&200===t.data.code?(alert(t.data.msg),e.$router.push("/login")):alert(t.data.msg)})},toLoginPage:function(){this.$router.push("/login")}})},s=i,m=n("2877"),c=Object(m["a"])(s,r,l,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d207e87.55e306e2.js.map