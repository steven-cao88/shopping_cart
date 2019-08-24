!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}n.r(e);var r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.items=[],this.taxRate=0}var e,n,r;return e=t,(n=[{key:"add",value:function(t,e){this.contains(t)?this.addQuantity(t,e):this.addItem(t,e)}},{key:"getItem",value:function(t){return this.items.find(function(e){return e.product.type===t.type&&e.product.unit_price===t.unit_price})}},{key:"contains",value:function(t){return!!this.getItem(t)}},{key:"addItem",value:function(t,e){var n={product:t,quantity:e};this.items.push(n)}},{key:"addQuantity",value:function(t,e){this.getItem(t).quantity+=e}},{key:"getTotalPriceBeforeTax",value:function(){return this.items.reduce(function(t,e){return t+e.quantity*e.product.unitPrice},0)}},{key:"getTaxAmount",value:function(){return this.getTotalPriceBeforeTax()*this.taxRate/100}},{key:"getFormattedTaxAmount",value:function(){return this.formatNumber(this.getTaxAmount())}},{key:"getTotalPrice",value:function(){return this.getTotalPriceBeforeTax()+this.getTaxAmount()}},{key:"getFormattedTotalPrice",value:function(){return this.formatNumber(this.getTotalPrice())}},{key:"formatNumber",value:function(t){return parseFloat(Math.ceil(100*t)/100).toFixed(2)}},{key:"addTaxRate",value:function(t){this.taxRate=t}}])&&o(e.prototype,n),r&&o(e,r),t}();var u=function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.type=e,this.unitPrice=n};function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,a(e).call(this,"football",39.99))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,u),e}();function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var d=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),y(this,p(e).call(this,"robotics",99.99))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(e,u),e}(),h=new r,m=new l,v=new d;h.add(m,2),h.add(v,2),h.addTaxRate(12.5),console.log(h.getFormattedTaxAmount()),console.log(h.getFormattedTotalPrice())}]);