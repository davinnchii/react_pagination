(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,t){},12:function(e,a,t){"use strict";t.r(a);var c=t(5),n=t.n(c),l=t(4),r=t(1),i=(t(10),t(2)),s=t.n(i);function o(e,a){for(var t=[],c=e;c<=a;c+=1)t.push(c);return t}var u,j=t(0),d=function(e){var a=e.total,t=e.perPage,c=e.currentPage,n=e.onPageChange,l=o(1,Math.ceil(a/t)),r=1===c,i=c===l.length;return Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:s()("page-item",{disabled:r}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":r,onClick:function(){r||n(c-1)},children:"\xab"})}),l.map((function(e){return Object(j.jsx)("li",{className:s()("page-item",{active:c===e}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return n(e)},children:e})},e)})),Object(j.jsx)("li",{className:s()("page-item",{disabled:i}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":i,onClick:function(){i||n(c+1)},children:"\xbb"})})]})},g=function(e){var a=e.total,t=e.perPage,c=e.currentPage,n=o(1,a),l=(c-1)*t,i=Math.min(l+t,n.length),s=Object(r.useMemo)((function(){return n.slice(l,i)}),[c,t]);return Object(j.jsx)("ul",{children:s.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:"Item ".concat(e)},e)}))})};!function(e){e[e.startPage=1]="startPage",e[e.defaultPageSize=5]="defaultPageSize",e[e.totalPages=42]="totalPages"}(u||(u={}));var b=function(){var e=Object(r.useState)(u.startPage),a=Object(l.a)(e,2),t=a[0],c=a[1],n=Object(r.useState)(u.defaultPageSize),i=Object(l.a)(n,2),s=i[0],o=i[1],b=t*s-s+1,h=t*s>u.totalPages?u.totalPages:t*s;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(t," (items ").concat(b," - ").concat(h," of ").concat(u.totalPages,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",defaultValue:u.defaultPageSize,onChange:function(e){o(Number(null===e||void 0===e?void 0:e.currentTarget.value)),c(u.startPage)},children:[Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"20",children:"20"})]})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{total:u.totalPages,perPage:s,currentPage:t,onPageChange:function(e){return c(e)}}),Object(j.jsx)(g,{total:u.totalPages,perPage:s,currentPage:t})]})};n.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.7eda8645.chunk.js.map