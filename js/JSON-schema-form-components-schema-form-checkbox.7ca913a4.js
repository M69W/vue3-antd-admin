(window.webpackJsonp=window.webpackJsonp||[]).push([["JSON-schema-form-components-schema-form-checkbox"],{a631:function(e,t,n){"use strict";n.r(t);var o,c=n("7a23"),a=n("ade3"),r=(n("0032"),n("e32c")),u=(n("de6a"),n("9a63")),l=(n("ee00"),n("bb76")),b=(n("b0c0"),Object(c.defineComponent)({name:"SchemaFormCheckbox",components:(o={},Object(a.a)(o,l.a.name,l.a),Object(a.a)(o,u.a.name,u.a),Object(a.a)(o,r.a.name,r.a),Object(a.a)(o,l.a.Group.name,l.a.Group),o),emits:["update:value"],props:{formItem:{type:Object,default:function(){return{}}},value:void 0},setup:function(e,t){t.attrs;var n=t.emit;return{modelValue:Object(c.computed)({get:function(){return e.value},set:function(e){return n("update:value",e)}})}}}));b.render=function(e,t,n,o,a,r){var u=Object(c.resolveComponent)("a-checkbox"),l=Object(c.resolveComponent)("a-col"),b=Object(c.resolveComponent)("a-row"),m=Object(c.resolveComponent)("a-checkbox-group");return Object(c.openBlock)(),Object(c.createBlock)(m,Object(c.mergeProps)({value:e.modelValue,"onUpdate:value":t[1]||(t[1]=function(t){return e.modelValue=t}),style:{width:"100%"}},Object(c.toHandlers)(e.formItem.eventObject)),{default:Object(c.withCtx)((function(){return[Object(c.createVNode)(b,null,{default:Object(c.withCtx)((function(){return[(Object(c.openBlock)(!0),Object(c.createBlock)(c.Fragment,null,Object(c.renderList)(e.formItem.options,(function(e){return Object(c.openBlock)(),Object(c.createBlock)(l,{key:e.value,span:8},{default:Object(c.withCtx)((function(){return[Object(c.createVNode)(u,{value:e.value},{default:Object(c.withCtx)((function(){return[Object(c.createTextVNode)(Object(c.toDisplayString)(e.label),1)]})),_:2},1032,["value"])]})),_:2},1024)})),128))]})),_:1})]})),_:1},16,["value"])},t.default=b}}]);