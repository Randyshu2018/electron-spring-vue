(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3310a124"],{"0153":function(e,s,t){"use strict";t.r(s);var n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("Table",{attrs:{columns:e.historyColumns,data:e.historyData}}),t("Page",{staticClass:"paging",attrs:{total:e.dataCount,"page-size":e.pageSize,"show-total":""},on:{"on-change":e.changepage}})],1)},i=[],a={histories:[{username:"智能审批",shenpistatus:"审批已通过",shenpicomments:"自动审批通过",time:"2017-07-24 18:11"},{username:"智能审批",shenpistatus:"审批已通过",shenpicomments:"自动审批通过",time:"2017-07-24 18:11"},{username:"智能审批",shenpistatus:"审批已通过",shenpicomments:"自动审批通过",time:"2017-07-24 10:04"},{username:"智能审批",shenpistatus:"审批被拒绝",shenpicomments:"  收入 > 999 && 支出 < 201",time:"2017-07-24 10:03"},{username:"智能审批",shenpistatus:"审批被拒绝",shenpicomments:"  收入 > 999 && 支出 < 201",time:"2017-07-24 10:02"},{username:"智能审批",shenpistatus:"审批已通过",shenpicomments:"自动审批通过",time:"2017-07-24 10:02"},{username:"智能审批",shenpistatus:"审批被拒绝",shenpicomments:"自动审批通过",time:"2017-07-24 10:01"},{username:"智能审批",shenpistatus:"审批被拒绝",shenpicomments:"自动审批通过",time:"2017-07-24 09:56"},{username:"智能审批",shenpistatus:"审批被拒绝",shenpicomments:"自动审批通过",time:"2017-07-21 14:23"},{username:"智能审批",shenpistatus:"审批被拒绝",shenpicomments:"  收入 > 999 && 支出 < 201 && 所有项目的总净收入 > 5000",time:"2017-07-21 14:23"},{username:"智能审批",shenpistatus:"审批被拒绝",shenpicomments:"自动审批通过",time:"2017-07-21 14:23"},{username:"智能审批",shenpistatus:"审批被拒绝",shenpicomments:"  收入 > 999 && 支出 < 201 && 所有项目的总净收入 > 5000",time:"2017-07-21 14:23"},{username:"智能审批",shenpistatus:"审批被拒绝",shenpicomments:"  收入 > 999 && 支出 < 201 && 所有项目的总净收入 > 5000",time:"2017-07-21 14:23"},{username:"智能审批",shenpistatus:"审批被拒绝",shenpicomments:"  收入 > 999 && 支出 < 201 && 所有项目的总净收入 > 5000",time:"2017-07-21 14:21"},{username:"智能审批",shenpistatus:"审批被拒绝",shenpicomments:"自动审批通过",time:"2017-07-21 14:21"},{username:"智能审批",shenpistatus:"审批被拒绝",shenpicomments:"自动审批通过",time:"2017-07-21 14:20"},{username:"智能审批",shenpistatus:"审批被拒绝",shenpicomments:"  收入 > 999 && 支出 < 201 && 所有项目的总净收入 > 5000",time:"2017-07-21 14:20"},{username:"智能审批",shenpistatus:"审批被拒绝",shenpicomments:"自动审批通过",time:"2017-07-21 14:14"},{username:"智能审批",shenpistatus:"审批被拒绝",shenpicomments:"自动审批通过",time:"2017-07-21 14:13"},{username:"智能审批",shenpistatus:"审批被拒绝",shenpicomments:"自动审批通过",time:"2017-07-21 14:11"},{username:"智能审批",shenpistatus:"审批被拒绝",shenpicomments:"自动审批通过",time:"2017-07-21 14:10"},{username:"智能审批",shenpistatus:"审批被拒绝",shenpicomments:"  收入 > 999 && 支出 < 201 && 所有项目的总净收入 > 5000",time:"2017-07-20 18:09"},{username:"智能审批",shenpistatus:"审批被拒绝",shenpicomments:"  收入 > 999 && 支出 < 201 && 所有项目的总净收入 > 5000",time:"2017-07-20 18:08"},{username:"智能审批",shenpistatus:"审批被拒绝",shenpicomments:"  收入 > 999 && 支出 < 201 && 所有项目的总净收入 > 5000",time:"2017-07-20 18:08"},{username:"智能审批",shenpistatus:"审批被拒绝",shenpicomments:"自动审批通过",time:"2017-07-20 18:07"},{username:"智能审批",shenpistatus:"审批被拒绝",shenpicomments:"自动审批通过",time:"2017-07-20 18:05"},{username:"智能审批",shenpistatus:"审批已通过",shenpicomments:"wedfqw",time:"2017-07-20 15:50"},{username:"智能审批",shenpistatus:"审批已通过",shenpicomments:"wedfqw",time:"2017-07-20 15:20"},{username:"智能审批",shenpistatus:"审批被拒绝",shenpicomments:"自动审批通过",time:"2017-07-19 18:27"}]},m={data:function(){return{formItem:{input:"",select:"",radio:"male",checkbox:[],switch:!0,date:"",time:"",slider:[20,50],textarea:""},ajaxHistoryData:[],dataCount:0,pageSize:10,historyColumns:[{title:"人员",key:"username"},{title:"操作",key:"shenpistatus"},{title:"意见",key:"shenpicomments"},{title:"时间",key:"time"}],historyData:[]}},methods:{handleListApproveHistory:function(){this.ajaxHistoryData=a.histories,this.dataCount=a.histories.length,a.histories.length<this.pageSize?this.historyData=this.ajaxHistoryData:this.historyData=this.ajaxHistoryData.slice(0,this.pageSize)},changepage:function(e){var s=(e-1)*this.pageSize,t=e*this.pageSize;this.historyData=this.ajaxHistoryData.slice(s,t)}},created:function(){this.handleListApproveHistory()}},h=m,u=(t("50df"),t("2877")),p=Object(u["a"])(h,n,i,!1,null,"03761a18",null);s["default"]=p.exports},"50df":function(e,s,t){"use strict";var n=t("f7b2"),i=t.n(n);i.a},f7b2:function(e,s,t){}}]);
//# sourceMappingURL=chunk-3310a124.72844fa6.js.map