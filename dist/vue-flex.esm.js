function concat(){return Array.prototype.concat.apply([],arguments)}function mergeData(){for(var e=arguments,n=__assign({},arguments[0]),t=1;t<arguments.length;t++)for(var a=0,r=keys(arguments[t]);a<r.length;a++){var i=r[a];if(void 0!==n[i])switch(i){case"class":case"style":case"directives":n[i]=concat(n[i],e[t][i]);break;case"staticClass":n[i]&&(n[i]=n[i].trim()+" "),n[i]+=e[t][i].trim();break;case"on":case"nativeOn":for(var o=0,s=keys(arguments[t][i]);o<s.length;o++){var l=s[o];n[i][l]?n[i][l]=concat(e[t][i][l],n[i][l]):n[i][l]=e[t][i][l]}break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":n[i]=__assign({},n[i],e[t][i]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:n[i]=e[t][i]}else n[i]=e[t][i]}return n}function boolPropFactory(){for(var e=arguments,n={},t=0;t<arguments.length;t++)n[e[t]]={type:Boolean,default:!1};return n}var __assign=Object.assign||function(e){for(var n,t=arguments,a=1,r=arguments.length;a<r;a++){n=t[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},keys=Object.keys,SHARED=["start","end","center"],JUSTIFY_CONTENT=SHARED.concat(["between","around"]),ALIGN_ITEMS=SHARED.concat(["baseline","stretch"]),ALIGN_AXES=SHARED.concat(["between","baseline","stretch"]),props=Object.assign(boolPropFactory("inline","column","reverse","noWrap","wrapReverse","grow"),{tag:{type:String,default:"div"},justify:{type:String,default:null,validator:function(e){return-1!==JUSTIFY_CONTENT.indexOf(e)}},align:{type:String,default:null,validator:function(e){return-1!==ALIGN_ITEMS.indexOf(e)}},hAlign:{type:String,default:null,validator:function(e){return-1!==ALIGN_AXES.indexOf(e)}},vAlign:{type:String,default:null,validator:function(e){return-1!==ALIGN_AXES.indexOf(e)}}}),Flex={functional:!0,props:props,render:function(e,n){var t=n.props,a=n.data,r=n.children,i=t.column?"align-items":"justify-content",o=t.column?"justify-content":"align-items";return e(t.tag,mergeData(a,{class:["vf__flex"+(t.inline?"--inline":""),"vf__flex-dir--"+(t.column?"column":"row")+(t.reverse?"-reverse":""),(s={"vf__flex-nowrap":t.noWrap,"vf__grow-children":t.grow},s["vf__flex-wrap"+(t.wrapReverse?"-reverse":"")]=!t.noWrap,s["vf__justify-content-"+t.justify]=t.justify,s["vf__align-items-"+t.align]=t.align,s["vf__"+i+"-"+t.hAlign]=t.hAlign,s["vf__"+o+"-"+t.vAlign]=t.vAlign,s)]}),r);var s}},index={install:function(e){e.component("Flex",Flex)}};export default index;
//# sourceMappingURL=vue-flex.esm.js.map
