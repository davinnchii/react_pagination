(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,a,t){},13:function(e,a,t){"use strict";t.r(a);var c=t(5),n=t.n(c),l=t(6),r=t(4),i=t(1),s=(t(11),t(2)),o=t.n(s);function j(e,a){for(var t=[],c=e;c<=a;c+=1)t.push(c);return t}var u,g=t(0),d=function(e){var a=e.total,t=e.perPage,c=e.currentPage,n=e.onPageChange,l=j(1,Math.ceil(a/t)),r=1===c,i=c===l.length;return Object(g.jsxs)("ul",{className:"pagination",children:[Object(g.jsx)("li",{className:o()("page-item",{disabled:r}),children:Object(g.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":r,onClick:function(){r||n(c-1)},children:"\xab"})}),l.map((function(e){return Object(g.jsx)("li",{className:o()("page-item",{active:c===e}),children:Object(g.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return n(e)},children:e})},e)})),Object(g.jsx)("li",{className:o()("page-item",{disabled:i}),children:Object(g.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":i,onClick:function(){i||n(c+1)},children:"\xbb"})})]})},b=function(e){var a=e.total,t=e.perPage,c=e.currentPage,n=j(1,a),l=(c-1)*t,r=Math.min(l+t,n.length),s=Object(i.useMemo)((function(){return n.slice(l,r)}),[c,t]);return Object(g.jsx)("ul",{children:s.map((function(e){return Object(g.jsx)("li",{"data-cy":"item",children:"Item ".concat(e)},e)}))})};!function(e){e[e.StartPage=1]="StartPage",e[e.DefaultPageSize=5]="DefaultPageSize",e[e.TotalPages=42]="TotalPages"}(u||(u={}));var h=function(){var e=Object(i.useState)(u.StartPage),a=Object(r.a)(e,2),t=a[0],c=a[1],n=Object(i.useState)(u.DefaultPageSize),s=Object(r.a)(n,2),o=s[0],j=s[1],h=t*o-o+1,p=t*o>u.TotalPages?u.TotalPages:t*o;return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("h1",{children:"Items with Pagination"}),Object(g.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(t," (items ").concat(h," - ").concat(p," of ").concat(u.TotalPages,")")}),Object(g.jsxs)("div",{className:"form-group row",children:[Object(g.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(g.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",defaultValue:u.DefaultPageSize,onChange:function(e){j(Number(null===e||void 0===e?void 0:e.currentTarget.value)),c(u.StartPage)},children:[Object(g.jsx)("option",{value:"3",children:"3"}),Object(g.jsx)("option",{value:"5",children:"5"}),Object(g.jsx)("option",{value:"10",children:"10"}),Object(g.jsx)("option",{value:"20",children:"20"})]})}),Object(g.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(g.jsx)(d,Object(l.a)({},{total:u.TotalPages,perPage:o,currentPage:t,onPageChange:function(e){return c(e)}})),Object(g.jsx)(b,{total:u.TotalPages,perPage:o,currentPage:t})]})};n.a.render(Object(g.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.1d7fc4ec.chunk.js.map