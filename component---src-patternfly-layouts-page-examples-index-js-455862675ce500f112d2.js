webpackJsonp([0xf716b734a9a5],{33:function(e,a,n){var t=n(1);e.exports=(t.default||t).template({1:function(e,a,n,t,r){var l;return" "+e.escapeExpression((l=null!=(l=n["nav--modifier"]||(null!=a?a["nav--modifier"]:a))?l:n.helperMissing,"function"==typeof l?l.call(null!=a?a:e.nullContext||{},{name:"nav--modifier",hash:{},data:r}):l))},3:function(e,a,n,t,r){return"    onClick=\"(function(){\n      const target = event.target;\n      const parent = target.parentNode;\n      const child = parent.children[1];\n\n      if (target.classList.contains('pf-c-nav__link')) {\n        if (parent.classList.contains('pf-m-expanded')) {\n          parent.classList.remove('pf-m-expanded');\n          setTimeout(() => {\n            child.setAttribute('aria-expanded', 'false');\n            child.setAttribute('hidden', '');\n          }, 600);\n        } else {\n          child.removeAttribute('hidden');\n          setTimeout(() => {\n            parent.classList.add('pf-m-expanded');\n            child.setAttribute('aria-expanded', 'true');\n          }, 50);\n        }\n      }\n      return false;\n    })();return false;\"\n"},5:function(e,a,n,t,r){var l,o;return"    "+(null!=(o=null!=(o=n["nav--attribute"]||(null!=a?a["nav--attribute"]:a))?o:n.helperMissing,l="function"==typeof o?o.call(null!=a?a:e.nullContext||{},{name:"nav--attribute",hash:{},data:r}):o)?l:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,a,n,t,r){var l,o=null!=a?a:e.nullContext||{};return'<nav class="pf-c-nav'+(null!=(l=n.if.call(o,null!=a?a["nav--modifier"]:a,{name:"if",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?l:"")+'"\n'+(null!=(l=n.if.call(o,null!=a?a["nav--interactive"]:a,{name:"if",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r}))?l:"")+(null!=(l=n.if.call(o,null!=a?a["nav--attribute"]:a,{name:"if",hash:{},fn:e.program(5,r,0),inverse:e.noop,data:r}))?l:"")+">\n"+(null!=(l=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:e.decorators}))?l:"")+"</nav>\n"},usePartial:!0,useData:!0})},869:function(e,a){e.exports="<h2 id=overview>Overview</h2> <p>This layout provides the basic chrome for a page, including sidebar, header and main areas.</p> <h2 id=accessibility>Accessibility</h2> <table> <thead> <tr> <th>Attribute</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>role=&quot;banner&quot;</code></td> <td><code>.pf-l-page__header</code></td> <td>Identifies the element that serves as the banner region. <strong>Required</strong></td> </tr> <tr> <td><code>role=&quot;main&quot;</code></td> <td><code>.pf-l-page__main</code></td> <td>Identifies the element that serves as the main region. <strong>Required</strong></td> </tr> </tbody> </table> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-l-page</code></td> <td><code>&lt;div&gt;</code></td> <td>Declares the page layout.</td> </tr> <tr> <td><code>.pf-l-page__header</code></td> <td><code>&lt;header&gt;</code></td> <td>Declares the page header.</td> </tr> <tr> <td><code>.pf-l-page__header-brand</code></td> <td><code>&lt;div&gt;</code></td> <td>Creates a header container to nest the brand component.</td> </tr> <tr> <td><code>.pf-l-page__header-brand-toggle</code></td> <td><code>&lt;div&gt;</code></td> <td>Creates a container to nest the sidebar toggle.</td> </tr> <tr> <td><code>.pf-l-page__header-brand-link</code></td> <td><code>&lt;a&gt;</code></td> <td>Creates a link for the brand logo.</td> </tr> <tr> <td><code>.pf-l-page__header-selector</code></td> <td><code>&lt;div&gt;</code></td> <td>Creates a header container to nest the context selector component.</td> </tr> <tr> <td><code>.pf-l-page__header-nav</code></td> <td><code>&lt;div&gt;</code></td> <td>Creates a container to nest the navigation component in the header.</td> </tr> <tr> <td><code>.pf-l-page__header-tools</code></td> <td><code>&lt;div&gt;</code></td> <td>Creates a header container to nest the toolbar layout.</td> </tr> <tr> <td><code>.pf-l-page__sidebar</code></td> <td><code>&lt;aside&gt;</code></td> <td>Declares the page sidebar.</td> </tr> <tr> <td><code>.pf-l-page__main</code></td> <td><code>&lt;main&gt;</code></td> <td>Declares the main page area.</td> </tr> <tr> <td><code>.pf-l-page__main-nav</code></td> <td><code>&lt;section&gt;</code></td> <td>Creates a container to nest the navigation component in the main page area.</td> </tr> <tr> <td><code>.pf-l-page__main-section</code></td> <td><code>&lt;section&gt;</code></td> <td>Creates a section container in the main page area.</td> </tr> <tr> <td><code>.pf-m-expanded</code></td> <td><code>.pf-l-page__sidebar</code></td> <td>Modifies the sidebar for the expanded state.</td> </tr> <tr> <td><code>.pf-m-collapsed</code></td> <td><code>.pf-l-page__sidebar</code></td> <td>Modifies the sidebar for the collapsed state.</td> </tr> <tr> <td><code>.pf-m-light</code></td> <td><code>.pf-l-page__main-section</code></td> <td>Modifies a main page section to have a light theme.</td> </tr> <tr> <td><code>.pf-m-dark-200</code></td> <td><code>.pf-l-page__main-section</code></td> <td>Modifies a main page section to have a dark theme and a dark transparent background.</td> </tr> <tr> <td><code>.pf-m-dark-100</code></td> <td><code>.pf-l-page__main-section</code></td> <td>Modifies a main page section to have a dark theme and a darker transparent background.</td> </tr> </tbody> </table> "},318:function(e,a,n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}a.__esModule=!0,a.Docs=void 0;var r=n(3),l=t(r),o=n(11),i=t(o),d=n(12),p=t(d),s=n(1172),u=t(s),c=n(1171),f=t(c),g=n(765),m=t(g),h=n(764),v=t(h),b=n(869),k=t(b);n(1035);var x=a.Docs=k.default;a.default=function(){var e=(0,m.default)(),a=(0,v.default)(),n="Page";return l.default.createElement(i.default,{docs:x,heading:n,className:"is-layout-page"},l.default.createElement(p.default,{heading:"Page Layout, Nav Vertical Example",handlebars:u.default},e),l.default.createElement(p.default,{heading:"Page Layout, Nav Horizontal Example",handlebars:f.default},a))}},1171:function(e,a){e.exports='{{#> page page--nav-direction="vertical"}}\n  {{#> page-header}}\n\n    {{!-- Brand --}}\n    {{#> page-header-brand}}\n      Logo\n    {{/page-header-brand}}\n\n    {{!-- Context Selector --}}\n    {{#> page-header-selector}}\n      pf-c-context-selector\n    {{/page-header-selector}}\n\n    {{!-- Horizontal Nav --}}\n    {{#> page-header-nav}}\n      pf-c-nav\n    {{/page-header-nav}}\n\n    {{!-- Toolbar --}}\n    {{#> page-header-tools}}\n      pf-l-toolbar\n    {{/page-header-tools}}\n  {{/page-header}}\n\n  {{#> page-main}}\n    {{#> page-main-section page-main-section--modifier="pf-m-dark-100"}}\n      Page Layout Content test 2\n    {{/page-main-section}}\n\n    {{#> page-main-section page-main-section--modifier="pf-m-dark-200"}}\n      Page Layout Content test 2\n    {{/page-main-section}}\n\n    {{#> page-main-section page-main-section--modifier="pf-m-light"}}\n      Page Layout Content test 2\n    {{/page-main-section}}\n\n    {{#> page-main-section}}\n      Page Layout Content test 2\n    {{/page-main-section}}\n  {{/page-main}}\n{{/page}}\n'},764:function(e,a,n){var t=n(1);e.exports=(t.default||t).template({1:function(e,a,t,r,l){var o;return(null!=(o=e.invokePartial(n(62),a,{name:"page-header",fn:e.program(2,l,0),inverse:e.noop,data:l,helpers:t,partials:r,decorators:e.decorators}))?o:"")+"\n"+(null!=(o=e.invokePartial(n(63),a,{name:"page-main",fn:e.program(11,l,0),inverse:e.noop,data:l,helpers:t,partials:r,decorators:e.decorators}))?o:"")},2:function(e,a,t,r,l){var o;return"\n"+(null!=(o=e.invokePartial(n(61),a,{name:"page-header-brand",fn:e.program(3,l,0),inverse:e.noop,data:l,helpers:t,partials:r,decorators:e.decorators}))?o:"")+"\n"+(null!=(o=e.invokePartial(n(119),a,{name:"page-header-selector",fn:e.program(5,l,0),inverse:e.noop,data:l,helpers:t,partials:r,decorators:e.decorators}))?o:"")+"\n"+(null!=(o=e.invokePartial(n(215),a,{name:"page-header-nav",fn:e.program(7,l,0),inverse:e.noop,data:l,helpers:t,partials:r,decorators:e.decorators}))?o:"")+"\n"+(null!=(o=e.invokePartial(n(150),a,{name:"page-header-tools",fn:e.program(9,l,0),inverse:e.noop,data:l,helpers:t,partials:r,decorators:e.decorators}))?o:"")},3:function(e,a,n,t,r){return"      Logo\n"},5:function(e,a,n,t,r){return"      pf-c-context-selector\n"},7:function(e,a,n,t,r){return"      pf-c-nav\n"},9:function(e,a,n,t,r){return"      pf-l-toolbar\n"},11:function(e,a,t,r,l){var o;return(null!=(o=e.invokePartial(n(38),a,{name:"page-main-section",hash:{"page-main-section--modifier":"pf-m-dark-100"},fn:e.program(12,l,0),inverse:e.noop,data:l,helpers:t,partials:r,decorators:e.decorators}))?o:"")+"\n"+(null!=(o=e.invokePartial(n(38),a,{name:"page-main-section",hash:{"page-main-section--modifier":"pf-m-dark-200"},fn:e.program(12,l,0),inverse:e.noop,data:l,helpers:t,partials:r,decorators:e.decorators}))?o:"")+"\n"+(null!=(o=e.invokePartial(n(38),a,{name:"page-main-section",hash:{"page-main-section--modifier":"pf-m-light"},fn:e.program(12,l,0),inverse:e.noop,data:l,helpers:t,partials:r,decorators:e.decorators}))?o:"")+"\n"+(null!=(o=e.invokePartial(n(38),a,{name:"page-main-section",fn:e.program(12,l,0),inverse:e.noop,data:l,helpers:t,partials:r,decorators:e.decorators}))?o:"")},12:function(e,a,n,t,r){return"      Page Layout Content test 2\n"},compiler:[7,">= 4.0.0"],main:function(e,a,t,r,l){var o;return null!=(o=e.invokePartial(n(64),a,{name:"page",hash:{"page--nav-direction":"vertical"},fn:e.program(1,l,0),inverse:e.noop,data:l,helpers:t,partials:r,decorators:e.decorators}))?o:""},usePartial:!0,useData:!0})},1172:function(e,a){e.exports='{{#> page}}\n  {{#> page-header}}\n    {{#> page-header-brand}}\n      {{#> page-header-brand-toggle}}\n        {{#> button button--modifier="pf-m-plain" button--HasBarsIcon="true" button--attribute=\'id="nav-toggle" aria-label="Toggle primary navigation"\'}}\n        {{/button}}\n      {{/page-header-brand-toggle}}\n      {{#> page-header-brand-link}}\n        Logo\n      {{/page-header-brand-link}}\n    {{/page-header-brand}}\n    {{#> page-header-selector}}\n      pf-c-context-selector\n    {{/page-header-selector}}\n    {{#> page-header-tools}}\n      pf-l-toolbar\n    {{/page-header-tools}}\n  {{/page-header}}\n  {{#> page-sidebar}} \n    {{#> nav nav--attribute=\'aria-label="Primary Nav Default Example"\'}}\n      pf-c-nav\n    {{/nav}}\n  {{/page-sidebar}}\n  {{#> page-main}}\n    {{#> page-main-section page-main-section--modifier="pf-m-dark-100"}}\n      Page Layout Content test 2\n    {{/page-main-section}}\n\n    {{#> page-main-section page-main-section--modifier="pf-m-dark-200"}}\n      Page Layout Content test 2\n    {{/page-main-section}}\n    {{#> page-main-section page-main-section--modifier="pf-m-light"}}\n      Page Layout Content test 2\n    {{/page-main-section}}\n    {{#> page-main-section}}\n      Page Layout Content test 2\n    {{/page-main-section}}\n  {{/page-main}}\n{{/page}}\n'},765:function(e,a,n){var t=n(1);e.exports=(t.default||t).template({1:function(e,a,t,r,l){var o;return(null!=(o=e.invokePartial(n(62),a,{name:"page-header",fn:e.program(2,l,0),inverse:e.noop,data:l,helpers:t,partials:r,decorators:e.decorators}))?o:"")+(null!=(o=e.invokePartial(n(94),a,{name:"page-sidebar",fn:e.program(13,l,0),inverse:e.noop,data:l,helpers:t,partials:r,decorators:e.decorators}))?o:"")+(null!=(o=e.invokePartial(n(63),a,{name:"page-main",fn:e.program(16,l,0),inverse:e.noop,data:l,helpers:t,partials:r,decorators:e.decorators}))?o:"")},2:function(e,a,t,r,l){var o;return(null!=(o=e.invokePartial(n(61),a,{name:"page-header-brand",fn:e.program(3,l,0),inverse:e.noop,data:l,helpers:t,partials:r,decorators:e.decorators}))?o:"")+(null!=(o=e.invokePartial(n(119),a,{name:"page-header-selector",fn:e.program(9,l,0),inverse:e.noop,data:l,helpers:t,partials:r,decorators:e.decorators}))?o:"")+(null!=(o=e.invokePartial(n(150),a,{name:"page-header-tools",fn:e.program(11,l,0),inverse:e.noop,data:l,helpers:t,partials:r,decorators:e.decorators}))?o:"")},3:function(e,a,t,r,l){var o;return(null!=(o=e.invokePartial(n(214),a,{name:"page-header-brand-toggle",fn:e.program(4,l,0),inverse:e.noop,data:l,helpers:t,partials:r,decorators:e.decorators}))?o:"")+(null!=(o=e.invokePartial(n(213),a,{name:"page-header-brand-link",fn:e.program(7,l,0),inverse:e.noop,data:l,helpers:t,partials:r,decorators:e.decorators}))?o:"")},4:function(e,a,t,r,l){var o;return null!=(o=e.invokePartial(n(5),a,{name:"button",hash:{"button--attribute":'id="nav-toggle" aria-label="Toggle primary navigation"',"button--HasBarsIcon":"true","button--modifier":"pf-m-plain"},fn:e.program(5,l,0),inverse:e.noop,data:l,helpers:t,partials:r,decorators:e.decorators}))?o:""},5:function(e,a,n,t,r){return""},7:function(e,a,n,t,r){return"        Logo\n"},9:function(e,a,n,t,r){return"      pf-c-context-selector\n"},11:function(e,a,n,t,r){return"      pf-l-toolbar\n"},13:function(e,a,t,r,l){var o;return null!=(o=e.invokePartial(n(33),a,{name:"nav",hash:{"nav--attribute":'aria-label="Primary Nav Default Example"'},fn:e.program(14,l,0),inverse:e.noop,data:l,helpers:t,partials:r,decorators:e.decorators}))?o:""},14:function(e,a,n,t,r){return"      pf-c-nav\n"},16:function(e,a,t,r,l){var o;return(null!=(o=e.invokePartial(n(38),a,{name:"page-main-section",hash:{"page-main-section--modifier":"pf-m-dark-100"},fn:e.program(17,l,0),inverse:e.noop,data:l,helpers:t,partials:r,decorators:e.decorators}))?o:"")+"\n"+(null!=(o=e.invokePartial(n(38),a,{name:"page-main-section",hash:{"page-main-section--modifier":"pf-m-dark-200"},fn:e.program(17,l,0),inverse:e.noop,data:l,helpers:t,partials:r,decorators:e.decorators}))?o:"")+(null!=(o=e.invokePartial(n(38),a,{name:"page-main-section",hash:{"page-main-section--modifier":"pf-m-light"},fn:e.program(17,l,0),inverse:e.noop,data:l,helpers:t,partials:r,decorators:e.decorators}))?o:"")+(null!=(o=e.invokePartial(n(38),a,{name:"page-main-section",fn:e.program(17,l,0),inverse:e.noop,data:l,helpers:t,partials:r,decorators:e.decorators}))?o:"")},17:function(e,a,n,t,r){return"      Page Layout Content test 2\n"},compiler:[7,">= 4.0.0"],main:function(e,a,t,r,l){var o;return null!=(o=e.invokePartial(n(64),a,{name:"page",fn:e.program(1,l,0),inverse:e.noop,data:l,helpers:t,partials:r,decorators:e.decorators}))?o:""},usePartial:!0,useData:!0})},213:function(e,a,n){var t=n(1);e.exports=(t.default||t).template({1:function(e,a,n,t,r){var l;return" "+e.escapeExpression((l=null!=(l=n["page-header-brand-link--modifier"]||(null!=a?a["page-header-brand-link--modifier"]:a))?l:n.helperMissing,"function"==typeof l?l.call(null!=a?a:e.nullContext||{},{name:"page-header-brand-link--modifier",hash:{},data:r}):l))},3:function(e,a,n,t,r){var l,o;return"    "+(null!=(o=null!=(o=n["page-header-brand-link--attribute"]||(null!=a?a["page-header-brand-link--attribute"]:a))?o:n.helperMissing,l="function"==typeof o?o.call(null!=a?a:e.nullContext||{},{name:"page-header-brand-link--attribute",hash:{},data:r}):o)?l:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,a,n,t,r){var l,o=null!=a?a:e.nullContext||{};return'<a class="pf-l-page__header-brand-link'+(null!=(l=n.if.call(o,null!=a?a["page-header-brand-link--modifier"]:a,{name:"if",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?l:"")+'"\n'+(null!=(l=n.if.call(o,null!=a?a["page-header-brand-link--attribute"]:a,{name:"if",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r}))?l:"")+">\n"+(null!=(l=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:e.decorators}))?l:"")+"</a>\n"},usePartial:!0,useData:!0})},214:function(e,a,n){var t=n(1);e.exports=(t.default||t).template({1:function(e,a,n,t,r){var l;return" "+e.escapeExpression((l=null!=(l=n["page-header-brand-toggle--modifier"]||(null!=a?a["page-header-brand-toggle--modifier"]:a))?l:n.helperMissing,"function"==typeof l?l.call(null!=a?a:e.nullContext||{},{name:"page-header-brand-toggle--modifier",hash:{},data:r}):l))},3:function(e,a,n,t,r){var l,o;return"    "+(null!=(o=null!=(o=n["page-header-brand-toggle--attribute"]||(null!=a?a["page-header-brand-toggle--attribute"]:a))?o:n.helperMissing,l="function"==typeof o?o.call(null!=a?a:e.nullContext||{},{name:"page-header-brand-toggle--attribute",hash:{},data:r}):o)?l:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,a,n,t,r){var l,o=null!=a?a:e.nullContext||{};return'<div class="pf-l-page__header-brand-toggle'+(null!=(l=n.if.call(o,null!=a?a["page-header-brand-toggle--modifier"]:a,{name:"if",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?l:"")+'"\n'+(null!=(l=n.if.call(o,null!=a?a["page-header-brand-toggle--attribute"]:a,{name:"if",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r}))?l:"")+">\n"+(null!=(l=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:e.decorators}))?l:"")+"</div>\n"},usePartial:!0,useData:!0})},61:function(e,a,n){var t=n(1);e.exports=(t.default||t).template({1:function(e,a,n,t,r){var l;return" "+e.escapeExpression((l=null!=(l=n["page-header-brand--modifier"]||(null!=a?a["page-header-brand--modifier"]:a))?l:n.helperMissing,"function"==typeof l?l.call(null!=a?a:e.nullContext||{},{name:"page-header-brand--modifier",hash:{},data:r}):l))},3:function(e,a,n,t,r){var l,o;return"    "+(null!=(o=null!=(o=n["page-header-brand--attribute"]||(null!=a?a["page-header-brand--attribute"]:a))?o:n.helperMissing,l="function"==typeof o?o.call(null!=a?a:e.nullContext||{},{name:"page-header-brand--attribute",hash:{},data:r}):o)?l:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,a,n,t,r){var l,o=null!=a?a:e.nullContext||{};return'<div class="pf-l-page__header-brand'+(null!=(l=n.if.call(o,null!=a?a["page-header-brand--modifier"]:a,{name:"if",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?l:"")+'"\n'+(null!=(l=n.if.call(o,null!=a?a["page-header-brand--attribute"]:a,{name:"if",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r}))?l:"")+">\n"+(null!=(l=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:e.decorators}))?l:"")+"</div>\n"},usePartial:!0,useData:!0})},215:function(e,a,n){var t=n(1);e.exports=(t.default||t).template({1:function(e,a,n,t,r){var l;return" "+e.escapeExpression((l=null!=(l=n["page-header-nav--modifier"]||(null!=a?a["page-header-nav--modifier"]:a))?l:n.helperMissing,"function"==typeof l?l.call(null!=a?a:e.nullContext||{},{name:"page-header-nav--modifier",hash:{},data:r}):l))},3:function(e,a,n,t,r){var l,o;return"    "+(null!=(o=null!=(o=n["page-header-nav--attribute"]||(null!=a?a["page-header-nav--attribute"]:a))?o:n.helperMissing,l="function"==typeof o?o.call(null!=a?a:e.nullContext||{},{name:"page-header-nav--attribute",hash:{},data:r}):o)?l:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,a,n,t,r){var l,o=null!=a?a:e.nullContext||{};return'<div class="pf-l-page__header-nav'+(null!=(l=n.if.call(o,null!=a?a["page-header-nav--modifier"]:a,{name:"if",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?l:"")+'"\n'+(null!=(l=n.if.call(o,null!=a?a["page-header-nav--attribute"]:a,{name:"if",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r}))?l:"")+">\n"+(null!=(l=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:e.decorators}))?l:"")+"</div>\n"},usePartial:!0,useData:!0})},119:function(e,a,n){var t=n(1);e.exports=(t.default||t).template({1:function(e,a,n,t,r){var l;return" "+e.escapeExpression((l=null!=(l=n["page-header-selector--modifier"]||(null!=a?a["page-header-selector--modifier"]:a))?l:n.helperMissing,"function"==typeof l?l.call(null!=a?a:e.nullContext||{},{name:"page-header-selector--modifier",hash:{},data:r}):l))},3:function(e,a,n,t,r){var l,o;return"    "+(null!=(o=null!=(o=n["page-header-selector--attribute"]||(null!=a?a["page-header-selector--attribute"]:a))?o:n.helperMissing,l="function"==typeof o?o.call(null!=a?a:e.nullContext||{},{name:"page-header-selector--attribute",hash:{},data:r}):o)?l:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,a,n,t,r){var l,o=null!=a?a:e.nullContext||{};return'<div class="pf-l-page__header-selector'+(null!=(l=n.if.call(o,null!=a?a["page-header-selector--modifier"]:a,{name:"if",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?l:"")+'"\n'+(null!=(l=n.if.call(o,null!=a?a["page-header-selector--attribute"]:a,{name:"if",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r}))?l:"")+">\n"+(null!=(l=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:e.decorators}))?l:"")+"</div>\n"},usePartial:!0,useData:!0})},150:function(e,a,n){var t=n(1);e.exports=(t.default||t).template({1:function(e,a,n,t,r){var l;return" "+e.escapeExpression((l=null!=(l=n["page-header-tools--modifier"]||(null!=a?a["page-header-tools--modifier"]:a))?l:n.helperMissing,"function"==typeof l?l.call(null!=a?a:e.nullContext||{},{name:"page-header-tools--modifier",hash:{},data:r}):l))},3:function(e,a,n,t,r){var l,o;return"    "+(null!=(o=null!=(o=n["page-header-tools--attribute"]||(null!=a?a["page-header-tools--attribute"]:a))?o:n.helperMissing,l="function"==typeof o?o.call(null!=a?a:e.nullContext||{},{name:"page-header-tools--attribute",hash:{},data:r}):o)?l:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,a,n,t,r){var l,o=null!=a?a:e.nullContext||{};return'<div class="pf-l-page__header-tools'+(null!=(l=n.if.call(o,null!=a?a["page-header-tools--modifier"]:a,{name:"if",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?l:"")+'"\n'+(null!=(l=n.if.call(o,null!=a?a["page-header-tools--attribute"]:a,{name:"if",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r}))?l:"")+">\n"+(null!=(l=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:e.decorators}))?l:"")+"</div>\n"},usePartial:!0,useData:!0})},62:function(e,a,n){var t=n(1);e.exports=(t.default||t).template({1:function(e,a,n,t,r){var l;return" "+e.escapeExpression((l=null!=(l=n["page-header--modifier"]||(null!=a?a["page-header--modifier"]:a))?l:n.helperMissing,"function"==typeof l?l.call(null!=a?a:e.nullContext||{},{name:"page-header--modifier",hash:{},data:r}):l))},3:function(e,a,n,t,r){var l,o;return"    "+(null!=(o=null!=(o=n["page-header--attribute"]||(null!=a?a["page-header--attribute"]:a))?o:n.helperMissing,l="function"==typeof o?o.call(null!=a?a:e.nullContext||{},{name:"page-header--attribute",hash:{},data:r}):o)?l:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,a,n,t,r){var l,o=null!=a?a:e.nullContext||{};return'<header role="banner" class="pf-l-page__header'+(null!=(l=n.if.call(o,null!=a?a["page-header--modifier"]:a,{name:"if",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?l:"")+'"\n'+(null!=(l=n.if.call(o,null!=a?a["page-header--attribute"]:a,{name:"if",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r}))?l:"")+">\n"+(null!=(l=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:e.decorators}))?l:"")+"</header>\n"},usePartial:!0,useData:!0})},38:function(e,a,n){var t=n(1);e.exports=(t.default||t).template({1:function(e,a,n,t,r){var l;return" "+e.escapeExpression((l=null!=(l=n["page-main-section--modifier"]||(null!=a?a["page-main-section--modifier"]:a))?l:n.helperMissing,"function"==typeof l?l.call(null!=a?a:e.nullContext||{},{name:"page-main-section--modifier",hash:{},data:r}):l))},3:function(e,a,n,t,r){var l,o;return"    "+(null!=(o=null!=(o=n["page-main-section--attribute"]||(null!=a?a["page-main-section--attribute"]:a))?o:n.helperMissing,l="function"==typeof o?o.call(null!=a?a:e.nullContext||{},{name:"page-main-section--attribute",hash:{},data:r}):o)?l:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,a,n,t,r){var l,o=null!=a?a:e.nullContext||{};return'<section class="pf-l-page__main-section'+(null!=(l=n.if.call(o,null!=a?a["page-main-section--modifier"]:a,{name:"if",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?l:"")+'"\n'+(null!=(l=n.if.call(o,null!=a?a["page-main-section--attribute"]:a,{name:"if",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r}))?l:"")+">\n"+(null!=(l=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:e.decorators}))?l:"")+"</section>\n"},usePartial:!0,useData:!0})},63:function(e,a,n){var t=n(1);e.exports=(t.default||t).template({1:function(e,a,n,t,r){var l;return" "+e.escapeExpression((l=null!=(l=n["page-main--modifier"]||(null!=a?a["page-main--modifier"]:a))?l:n.helperMissing,"function"==typeof l?l.call(null!=a?a:e.nullContext||{},{name:"page-main--modifier",hash:{},data:r}):l))},3:function(e,a,n,t,r){var l,o;return"    "+(null!=(o=null!=(o=n["page-main--attribute"]||(null!=a?a["page-main--attribute"]:a))?o:n.helperMissing,l="function"==typeof o?o.call(null!=a?a:e.nullContext||{},{name:"page-main--attribute",hash:{},data:r}):o)?l:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,a,n,t,r){var l,o=null!=a?a:e.nullContext||{};return'<main role="main" class="pf-l-page__main'+(null!=(l=n.if.call(o,null!=a?a["page-main--modifier"]:a,{name:"if",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?l:"")+'"\n'+(null!=(l=n.if.call(o,null!=a?a["page-main--attribute"]:a,{name:"if",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r}))?l:"")+">\n"+(null!=(l=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:e.decorators}))?l:"")+"</main>\n"},usePartial:!0,useData:!0})},94:function(e,a,n){var t=n(1);e.exports=(t.default||t).template({1:function(e,a,n,t,r){var l;return" "+e.escapeExpression((l=null!=(l=n["page-sidebar--modifier"]||(null!=a?a["page-sidebar--modifier"]:a))?l:n.helperMissing,"function"==typeof l?l.call(null!=a?a:e.nullContext||{},{name:"page-sidebar--modifier",hash:{},data:r}):l))},3:function(e,a,n,t,r){var l,o;return"    "+(null!=(o=null!=(o=n["page-sidebar--attribute"]||(null!=a?a["page-sidebar--attribute"]:a))?o:n.helperMissing,l="function"==typeof o?o.call(null!=a?a:e.nullContext||{},{name:"page-sidebar--attribute",hash:{},data:r}):o)?l:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,a,n,t,r){var l,o=null!=a?a:e.nullContext||{};return'<aside class="pf-l-page__sidebar'+(null!=(l=n.if.call(o,null!=a?a["page-sidebar--modifier"]:a,{name:"if",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?l:"")+'" \n'+(null!=(l=n.if.call(o,null!=a?a["page-sidebar--attribute"]:a,{name:"if",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r}))?l:"")+">\n"+(null!=(l=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:e.decorators}))?l:"")+"</aside>\n"},usePartial:!0,useData:!0})},64:function(e,a,n){var t=n(1);e.exports=(t.default||t).template({1:function(e,a,n,t,r){return" pf-m-expanded"},3:function(e,a,n,t,r){var l;return" "+e.escapeExpression((l=null!=(l=n["page--modifier"]||(null!=a?a["page--modifier"]:a))?l:n.helperMissing,"function"==typeof l?l.call(null!=a?a:e.nullContext||{},{name:"page--modifier",hash:{},data:r}):l))},5:function(e,a,n,t,r){var l,o;return"    "+(null!=(o=null!=(o=n["page--attribute"]||(null!=a?a["page--attribute"]:a))?o:n.helperMissing,l="function"==typeof o?o.call(null!=a?a:e.nullContext||{},{name:"page--attribute",hash:{},data:r}):o)?l:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,a,n,t,r){var l,o=null!=a?a:e.nullContext||{};return'<div class="pf-l-page'+(null!=(l=n.if.call(o,null!=a?a["page--expanded"]:a,{name:"if",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r}))?l:"")+(null!=(l=n.if.call(o,null!=a?a["page--modifier"]:a,{name:"if",hash:{},fn:e.program(3,r,0),inverse:e.noop,data:r}))?l:"")+'"\n'+(null!=(l=n.if.call(o,null!=a?a["page--attribute"]:a,{name:"if",hash:{},fn:e.program(5,r,0),inverse:e.noop,data:r}))?l:"")+">\n"+(null!=(l=e.invokePartial(t["@partial-block"],a,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:t,decorators:e.decorators}))?l:"")+"</div>"},usePartial:!0,useData:!0})},1035:function(e,a){}});
//# sourceMappingURL=component---src-patternfly-layouts-page-examples-index-js-455862675ce500f112d2.js.map