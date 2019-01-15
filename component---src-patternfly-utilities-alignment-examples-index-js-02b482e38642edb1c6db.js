(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{186:function(n,t,e){"use strict";e.r(t),e.d(t,"Docs",function(){return c});var a=e(0),i=e.n(a),l=e(205),r=e(204),o=e(877),s=e.n(o),u=e(878),d=e.n(u),m=e(879),p=e.n(m),c=(e(880),p.a);t.default=function(){var n=d()();return i.a.createElement(l.a,{docs:c,className:"is-utility-page"},i.a.createElement(r.a,{heading:"Alignment Simple",handlebars:s.a},n))}},329:function(n,t,e){var a=e(196);n.exports=(a.default||a).template({1:function(n,t,e,a,i){var l;return n.escapeExpression("function"==typeof(l=null!=(l=e["alignment--element"]||(null!=t?t["alignment--element"]:t))?l:e.helperMissing)?l.call(null!=t?t:n.nullContext||{},{name:"alignment--element",hash:{},data:i}):l)},3:function(n,t,e,a,i){return"div"},5:function(n,t,e,a,i){var l;return" "+n.escapeExpression("function"==typeof(l=null!=(l=e["alignment--modifier"]||(null!=t?t["alignment--modifier"]:t))?l:e.helperMissing)?l.call(null!=t?t:n.nullContext||{},{name:"alignment--modifier",hash:{},data:i}):l)},7:function(n,t,e,a,i){var l,r;return"    "+(null!=(l="function"==typeof(r=null!=(r=e["alignment--attribute"]||(null!=t?t["alignment--attribute"]:t))?r:e.helperMissing)?r.call(null!=t?t:n.nullContext||{},{name:"alignment--attribute",hash:{},data:i}):r)?l:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(n,t,e,a,i){var l,r,o=null!=t?t:n.nullContext||{};return"<"+(null!=(l=e.if.call(o,null!=t?t["alignment--element"]:t,{name:"if",hash:{},fn:n.program(1,i,0),inverse:n.program(3,i,0),data:i}))?l:"")+' class="pf-u-text-align-'+n.escapeExpression("function"==typeof(r=null!=(r=e["alignment--type"]||(null!=t?t["alignment--type"]:t))?r:e.helperMissing)?r.call(o,{name:"alignment--type",hash:{},data:i}):r)+(null!=(l=e.if.call(o,null!=t?t["alignment--modifier"]:t,{name:"if",hash:{},fn:n.program(5,i,0),inverse:n.noop,data:i}))?l:"")+'"\n'+(null!=(l=e.if.call(o,null!=t?t["alignment--attribute"]:t,{name:"if",hash:{},fn:n.program(7,i,0),inverse:n.noop,data:i}))?l:"")+">\n"+(null!=(l=n.invokePartial(a["@partial-block"],t,{name:"@partial-block",data:i,indent:"  ",helpers:e,partials:a,decorators:n.decorators}))?l:"")+"</"+(null!=(l=e.if.call(o,null!=t?t["alignment--element"]:t,{name:"if",hash:{},fn:n.program(1,i,0),inverse:n.program(3,i,0),data:i}))?l:"")+">"},usePartial:!0,useData:!0})},877:function(n,t){n.exports='{{#> alignment alignment--type="left"}}\n  Text Left\n{{/alignment}}\n{{#> alignment alignment--type="center"}}\n  Text Center\n{{/alignment}}\n{{#> alignment alignment--type="right"}}\n  Text Right\n{{/alignment}}\n{{#> alignment alignment--type="justify"}}\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n  quis nostrud exercitation ullamco laboris.\n{{/alignment}}'},878:function(n,t,e){var a=e(196);n.exports=(a.default||a).template({1:function(n,t,e,a,i){return"  Text Left\n"},3:function(n,t,e,a,i){return"  Text Center\n"},5:function(n,t,e,a,i){return"  Text Right\n"},7:function(n,t,e,a,i){return"  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n  quis nostrud exercitation ullamco laboris.\n"},compiler:[7,">= 4.0.0"],main:function(n,t,a,i,l){var r;return(null!=(r=n.invokePartial(e(329),t,{name:"alignment",hash:{"alignment--type":"left"},fn:n.program(1,l,0),inverse:n.noop,data:l,helpers:a,partials:i,decorators:n.decorators}))?r:"")+(null!=(r=n.invokePartial(e(329),t,{name:"alignment",hash:{"alignment--type":"center"},fn:n.program(3,l,0),inverse:n.noop,data:l,helpers:a,partials:i,decorators:n.decorators}))?r:"")+(null!=(r=n.invokePartial(e(329),t,{name:"alignment",hash:{"alignment--type":"right"},fn:n.program(5,l,0),inverse:n.noop,data:l,helpers:a,partials:i,decorators:n.decorators}))?r:"")+(null!=(r=n.invokePartial(e(329),t,{name:"alignment",hash:{"alignment--type":"justify"},fn:n.program(7,l,0),inverse:n.noop,data:l,helpers:a,partials:i,decorators:n.decorators}))?r:"")},usePartial:!0,useData:!0})},879:function(n,t){n.exports='<h2 id="overview">Overview</h2>\n<p>Breakpoint is optional. Breakpoints: base (no breakpoint value), -on-sm, -on-md, -on-lg, -on-xl. <strong>Example .pf-u-text-left-on-lg</strong></p>\n\x3c!-- ## Accessibility\n\n| Attribute | Applied To | Outcome |\n| -- | -- | -- |\n| `role` or `aria` | `pf-u-alignment` |  accessibility notes. |\n --\x3e\n<h2 id="usage">Usage</h2>\n<table>\n<thead>\n<tr>\n<th>Class</th>\n<th>Applied To</th>\n<th>Outcome</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>.pf-u-text-align-left{-on-[breakpoint]}</code></td>\n<td><code>*</code></td>\n<td>Aligns text left</td>\n</tr>\n<tr>\n<td><code>.pf-u-text-align-center{-on-[breakpoint]}</code></td>\n<td><code>*</code></td>\n<td>Aligns text center</td>\n</tr>\n<tr>\n<td><code>.pf-u-text-align-right{-on-[breakpoint]}</code></td>\n<td><code>*</code></td>\n<td>Aligns text right</td>\n</tr>\n<tr>\n<td><code>.pf-u-text-align-justify{-on-[breakpoint]}</code></td>\n<td><code>*</code></td>\n<td>Aligns text justify</td>\n</tr>\n</tbody>\n</table>\n'},880:function(n,t,e){}}]);
//# sourceMappingURL=component---src-patternfly-utilities-alignment-examples-index-js-02b482e38642edb1c6db.js.map