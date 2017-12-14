!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.vueFlex=n()}(this,function(){"use strict";function e(){for(var e,t,r=arguments,a={},i=arguments.length;i--;)for(var s=0,o=Object.keys(arguments[i]);s<o.length;s++)switch(e=o[s]){case"class":case"style":case"directives":Array.isArray(a[e])||(a[e]=[]),a[e]=a[e].concat(r[i][e]);break;case"staticClass":if(!r[i][e])break;void 0===a[e]&&(a[e]=""),a[e]&&(a[e]+=" "),a[e]+=r[i][e].trim();break;case"on":case"nativeOn":a[e]||(a[e]={});for(var l=0,c=Object.keys(arguments[i][e]);l<c.length;l++)t=c[l],a[e][t]?a[e][t]=[].concat(a[e][t],r[i][e][t]):a[e][t]=r[i][e][t];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":a[e]||(a[e]={}),a[e]=n({},r[i][e],a[e]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:a[e]||(a[e]=r[i][e])}return a}var n=Object.assign||function(e){for(var n,t=arguments,r=1,a=arguments.length;r<a;r++){n=t[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},t=["start","end","center"],r=t.concat(["between","around"]),a=t.concat(["baseline","stretch"]),i=t.concat(["between","baseline","stretch"]),s={functional:!0,props:Object.assign(function(){for(var e=arguments,n={},t=0,r=arguments.length;t<r;t++)n[e[t]]={type:Boolean,default:!1};return n}("inline","column","reverse","noWrap","wrapReverse","grow"),{tag:{type:String,default:"div"},justify:{type:String,default:null,validator:function(e){return-1!==r.indexOf(e)}},align:{type:String,default:null,validator:function(e){return-1!==a.indexOf(e)}},alignH:{type:String,default:null,validator:function(e){return-1!==i.indexOf(e)}},alignV:{type:String,default:null,validator:function(e){return-1!==i.indexOf(e)}}}),render:function(n,t){var r=t.props,a=t.data,i=t.children,s={class:[]},o={},l="justify-content",c="justify",f="align-items",u="align";return r.column&&(l="align-items",c="align",f="justify-content",u="justify"),s.class.push("vf__flex"+(r.inline?"--inline":"")),s.class.push("vf__flex-dir--"+(r.column?"column":"row")+(r.reverse?"-reverse":"")),s.class.push(o),o["vf__flex-wrap"+(r.wrapReverse?"-reverse":"")]=!r.noWrap,o["vf__flex-nowrap"]=r.noWrap,o["vf__grow-children"]=r.noWrap,o["vf__justify-content-"+r.justify]=r.justify,o["vf__align-items-"+r.align]=r.align,o["vf__"+l+"-"+r.alignH]=r.alignH&&!r[c],o["vf__"+f+"-"+r.alignV]=r.alignV&&!r[u],n(r.tag,e(a,s),i)}},o={functional:!0,inheritAttrs:!1,render:function(n,t){t.props;var r=t.data,a=t.children;return n(s,e(r,{props:{column:!1}}),a)}},l={functional:!0,inheritAttrs:!1,render:function(n,t){t.props;var r=t.data,a=t.children;return n(s,e(r,{props:{column:!0}}),a)}},c=Object.freeze({Flex:s,FlexRow:o,FlexCol:l});return{install:function(e){for(var n in c)Object.hasOwnProperty.call(c,n)&&e.component(n,c[n])},name:"vue-flex"}});
//# sourceMappingURL=vue-flex.js.map
