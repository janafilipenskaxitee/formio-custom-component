!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.JanaTextField=e():t.JanaTextField=e()}(self,(()=>(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,o(r.key),r)}}function o(e){var o=function(e){if("object"!=t(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,"string");if("object"!=t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(o)?o:o+""}function n(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(n=function(){return!!t})()}function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}if(window.Formio){var c=window.Formio.Components.components.textfield,a=window.Formio.Components.components.textfield.editForm,u=function(o){function u(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),function(e,o,i){return o=r(o),function(e,o){if(o&&("object"==t(o)||"function"==typeof o))return o;if(void 0!==o)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(e,n()?Reflect.construct(o,i||[],r(e).constructor):o.apply(e,i))}(this,u,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(u,o),p=u,l=[{key:"schema",value:function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return c.schema.apply(c,[{type:"janaTextField",label:"Jana Text Field",key:"janaTextField",input:!0}].concat(e))}},{key:"builderInfo",get:function(){return{title:"Jana Text Field",group:"basic",icon:"terminal",weight:0,documentation:"",schema:u.schema()}}},{key:"editForm",value:function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return a.apply(void 0,[[{key:"display",components:a.components.display},{key:"data",components:a.components.data},{key:"validation",components:a.components.validation},{key:"api",components:a.components.api},{key:"conditional",components:a.components.conditional},{key:"logic",components:a.components.logic},{key:"layout",components:a.components.layout}]].concat(e))}}],null&&e(p.prototype,null),l&&e(p,l),Object.defineProperty(p,"prototype",{writable:!1}),p;var p,l}(c);window.Formio.Components.addComponent("janaTextField",u)}return{}})()));