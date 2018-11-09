webpackJsonp([70363724322532],{916:function(n,e){n.exports="<h2 id=overview>Overview</h2> <p>The Login layout will place the login page elements in the correct position.</p> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-l-login</code></td> <td><code>&lt;div&gt;</code></td> <td>Initializes the login layout.</td> </tr> <tr> <td><code>.pf-l-login__container</code></td> <td><code>&lt;div&gt;</code></td> <td>Correctly positions the login structure.</td> </tr> <tr> <td><code>.pf-l-login__header</code></td> <td><code>&lt;header&gt;</code></td> <td>Positions the login header.</td> </tr> <tr> <td><code>.pf-l-login__header-brand</code></td> <td><code>&lt;div&gt;</code></td> <td>Positions the logo within the header.</td> </tr> <tr> <td><code>.pf-l-login__main</code></td> <td><code>&lt;main&gt;</code></td> <td>Positions the login main area.</td> </tr> <tr> <td><code>.pf-l-login__footer</code></td> <td><code>&lt;footer&gt;</code></td> <td>Positions the login footer.</td> </tr> </tbody> </table> "},332:function(n,e,a){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.Docs=void 0;var l=a(3),o=t(l),r=a(11),i=t(r),d=a(12),u=t(d),s=a(1242),f=t(s),c=a(800),p=t(c),h=a(916),g=t(h);a(1096);var m=e.Docs=g.default;e.default=function(){var n=(0,p.default)(),e="Login";return o.default.createElement(i.default,{docs:m,heading:e,className:"is-layout-page"},o.default.createElement(u.default,{heading:"Login Simple",fullPageOnly:"true",handlebars:f.default,minHeight:"20em"},n))}},800:function(n,e,a){var t=a(1);n.exports=(t.default||t).template({1:function(n,e,t,l,o){var r;return(null!=(r=n.invokePartial(a(221),e,{name:"login-header",fn:n.program(2,o,0),inverse:n.noop,data:o,helpers:t,partials:l,decorators:n.decorators}))?r:"")+(null!=(r=n.invokePartial(a(222),e,{name:"login-main",fn:n.program(5,o,0),inverse:n.noop,data:o,helpers:t,partials:l,decorators:n.decorators}))?r:"")+(null!=(r=n.invokePartial(a(219),e,{name:"login-footer",fn:n.program(7,o,0),inverse:n.noop,data:o,helpers:t,partials:l,decorators:n.decorators}))?r:"")},2:function(n,e,t,l,o){var r;return(null!=(r=n.invokePartial(a(220),e,{name:"login-header-brand",fn:n.program(3,o,0),inverse:n.noop,data:o,helpers:t,partials:l,decorators:n.decorators}))?r:"")+"    Header Text\n"},3:function(n,e,a,t,l){return"      Header Brand\n"},5:function(n,e,a,t,l){return"    Main\n"},7:function(n,e,a,t,l){return"    Footer\n"},compiler:[7,">= 4.0.0"],main:function(n,e,t,l,o){var r;return null!=(r=n.invokePartial(a(223),e,{name:"login",fn:n.program(1,o,0),inverse:n.noop,data:o,helpers:t,partials:l,decorators:n.decorators}))?r:""},usePartial:!0,useData:!0})},1242:function(n,e){n.exports="{{#> login}}\n  {{#> login-header}}\n    {{#> login-header-brand}}\n      Header Brand\n    {{/login-header-brand}}\n    Header Text\n  {{/login-header}}\n  {{#> login-main}}\n    Main\n  {{/login-main}}\n  {{#> login-footer}}\n    Footer\n  {{/login-footer}}\n{{/login}}\n"},219:function(n,e,a){var t=a(1);n.exports=(t.default||t).template({1:function(n,e,a,t,l){var o;return" "+n.escapeExpression((o=null!=(o=a["login-footer--modifier"]||(null!=e?e["login-footer--modifier"]:e))?o:a.helperMissing,"function"==typeof o?o.call(null!=e?e:n.nullContext||{},{name:"login-footer--modifier",hash:{},data:l}):o))},3:function(n,e,a,t,l){var o,r;return"    "+(null!=(r=null!=(r=a["login-footer--attribute"]||(null!=e?e["login-footer--attribute"]:e))?r:a.helperMissing,o="function"==typeof r?r.call(null!=e?e:n.nullContext||{},{name:"login-footer--attribute",hash:{},data:l}):r)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(n,e,a,t,l){var o,r=null!=e?e:n.nullContext||{};return'<footer class="pf-l-login__footer'+(null!=(o=a.if.call(r,null!=e?e["login-footer--modifier"]:e,{name:"if",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l}))?o:"")+'"\n'+(null!=(o=a.if.call(r,null!=e?e["login-footer--attribute"]:e,{name:"if",hash:{},fn:n.program(3,l,0),inverse:n.noop,data:l}))?o:"")+">\n"+(null!=(o=n.invokePartial(t["@partial-block"],e,{name:"@partial-block",data:l,indent:"  ",helpers:a,partials:t,decorators:n.decorators}))?o:"")+"</footer>\n"},usePartial:!0,useData:!0})},220:function(n,e,a){var t=a(1);n.exports=(t.default||t).template({1:function(n,e,a,t,l){var o;return" "+n.escapeExpression((o=null!=(o=a["login-header-brand--modifier"]||(null!=e?e["login-header-brand--modifier"]:e))?o:a.helperMissing,"function"==typeof o?o.call(null!=e?e:n.nullContext||{},{name:"login-header-brand--modifier",hash:{},data:l}):o))},3:function(n,e,a,t,l){var o,r;return"    "+(null!=(r=null!=(r=a["login-header-brand--attribute"]||(null!=e?e["login-header-brand--attribute"]:e))?r:a.helperMissing,o="function"==typeof r?r.call(null!=e?e:n.nullContext||{},{name:"login-header-brand--attribute",hash:{},data:l}):r)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(n,e,a,t,l){var o,r=null!=e?e:n.nullContext||{};return'<div class="pf-l-login__header-brand'+(null!=(o=a.if.call(r,null!=e?e["login-header-brand--modifier"]:e,{name:"if",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l}))?o:"")+'"\n'+(null!=(o=a.if.call(r,null!=e?e["login-header-brand--attribute"]:e,{name:"if",hash:{},fn:n.program(3,l,0),inverse:n.noop,data:l}))?o:"")+">\n"+(null!=(o=n.invokePartial(t["@partial-block"],e,{name:"@partial-block",data:l,indent:"  ",helpers:a,partials:t,decorators:n.decorators}))?o:"")+"</div>\n"},usePartial:!0,useData:!0})},221:function(n,e,a){var t=a(1);n.exports=(t.default||t).template({1:function(n,e,a,t,l){var o;return" "+n.escapeExpression((o=null!=(o=a["login-header--modifier"]||(null!=e?e["login-header--modifier"]:e))?o:a.helperMissing,"function"==typeof o?o.call(null!=e?e:n.nullContext||{},{name:"login-header--modifier",hash:{},data:l}):o))},3:function(n,e,a,t,l){var o,r;return"    "+(null!=(r=null!=(r=a["login-header--attribute"]||(null!=e?e["login-header--attribute"]:e))?r:a.helperMissing,o="function"==typeof r?r.call(null!=e?e:n.nullContext||{},{name:"login-header--attribute",hash:{},data:l}):r)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(n,e,a,t,l){var o,r=null!=e?e:n.nullContext||{};return'<header class="pf-l-login__header'+(null!=(o=a.if.call(r,null!=e?e["login-header--modifier"]:e,{name:"if",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l}))?o:"")+'"\n'+(null!=(o=a.if.call(r,null!=e?e["login-header--attribute"]:e,{name:"if",hash:{},fn:n.program(3,l,0),inverse:n.noop,data:l}))?o:"")+">\n"+(null!=(o=n.invokePartial(t["@partial-block"],e,{name:"@partial-block",data:l,indent:"  ",helpers:a,partials:t,decorators:n.decorators}))?o:"")+"</header>"},usePartial:!0,useData:!0})},222:function(n,e,a){var t=a(1);n.exports=(t.default||t).template({1:function(n,e,a,t,l){var o;return" "+n.escapeExpression((o=null!=(o=a["login-main--modifier"]||(null!=e?e["login-main--modifier"]:e))?o:a.helperMissing,"function"==typeof o?o.call(null!=e?e:n.nullContext||{},{name:"login-main--modifier",hash:{},data:l}):o))},3:function(n,e,a,t,l){var o,r;return"    "+(null!=(r=null!=(r=a["login-main--attribute"]||(null!=e?e["login-main--attribute"]:e))?r:a.helperMissing,o="function"==typeof r?r.call(null!=e?e:n.nullContext||{},{name:"login-main--attribute",hash:{},data:l}):r)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(n,e,a,t,l){var o,r=null!=e?e:n.nullContext||{};return'<main class="pf-l-login__main'+(null!=(o=a.if.call(r,null!=e?e["login-main--modifier"]:e,{name:"if",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l}))?o:"")+'"\n'+(null!=(o=a.if.call(r,null!=e?e["login-main--attribute"]:e,{name:"if",hash:{},fn:n.program(3,l,0),inverse:n.noop,data:l}))?o:"")+">\n"+(null!=(o=n.invokePartial(t["@partial-block"],e,{name:"@partial-block",data:l,indent:"  ",helpers:a,partials:t,decorators:n.decorators}))?o:"")+"</main>"},usePartial:!0,useData:!0})},223:function(n,e,a){var t=a(1);n.exports=(t.default||t).template({1:function(n,e,a,t,l){var o;return" "+n.escapeExpression((o=null!=(o=a["login--modifier"]||(null!=e?e["login--modifier"]:e))?o:a.helperMissing,"function"==typeof o?o.call(null!=e?e:n.nullContext||{},{name:"login--modifier",hash:{},data:l}):o))},3:function(n,e,a,t,l){var o,r;return"    "+(null!=(r=null!=(r=a["login--attribute"]||(null!=e?e["login--attribute"]:e))?r:a.helperMissing,o="function"==typeof r?r.call(null!=e?e:n.nullContext||{},{name:"login--attribute",hash:{},data:l}):r)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(n,e,a,t,l){var o,r=null!=e?e:n.nullContext||{};return'<div class="pf-l-login'+(null!=(o=a.if.call(r,null!=e?e["login--modifier"]:e,{name:"if",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l}))?o:"")+'"\n'+(null!=(o=a.if.call(r,null!=e?e["login--attribute"]:e,{name:"if",hash:{},fn:n.program(3,l,0),inverse:n.noop,data:l}))?o:"")+'>\n  <div class="pf-l-login__container">\n'+(null!=(o=n.invokePartial(t["@partial-block"],e,{name:"@partial-block",data:l,indent:"    ",helpers:a,partials:t,decorators:n.decorators}))?o:"")+"  </div>\n</div>"},usePartial:!0,useData:!0})},1096:function(n,e){}});
//# sourceMappingURL=component---src-patternfly-layouts-login-examples-index-js-b9550362187443a9eda0.js.map