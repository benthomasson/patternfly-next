(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1006:function(t,e){t.exports='<h2 id="overview">Overview</h2>\n<p>When converting PatternFly 3 components to PatternFly 4 components, you must also take into consideration the layouts and sizings that PatternFly 3 utilized from Bootstrap 3.</p>\n<h2 id="usage">Usage</h2>\n<table>\n<thead>\n<tr>\n<th>PF3 Class</th>\n<th>Applied To</th>\n<th>PF4 Class</th>\n<th>Applied To</th>\n<th>Outcome</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>.popovers-pf</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td><code>pf-c-popover</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td>Creates parent container that holds the popover.</td>\n</tr>\n<tr>\n<td><code>.popover</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td><code>.pf-c-popover__content</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td>Creates the container for the popover itself.</td>\n</tr>\n<tr>\n<td><code>.container-popovers-pf</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td>--</td>\n<td>--</td>\n<td>Creates the container for the popover.</td>\n</tr>\n<tr>\n<td><code>.top</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td><code>.pf-m-top</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td>Directs the direction of the popover arrow. Required.</td>\n</tr>\n<tr>\n<td><code>.right</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td><code>.pf-m-right</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td>Directs the direction of the popover arrow. Required.</td>\n</tr>\n<tr>\n<td><code>.bottom</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td><code>.pf-m-bottom</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td>Directs the direction of the popover arrow. Required.</td>\n</tr>\n<tr>\n<td><code>.left</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td><code>.pf-m-left</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td>Directs the direction of the popover arrow. Required.</td>\n</tr>\n<tr>\n<td><code>.arrow</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td><code>.pf-c-popover__arrow</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td>Creates an arrow pointing towards the element the popover describes. Required.</td>\n</tr>\n<tr>\n<td><code>.close</code></td>\n<td><code>&lt;span&gt;</code></td>\n<td><code>.pf-c-popover__close</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td>Creates the closing button for the popover.</td>\n</tr>\n<tr>\n<td>--</td>\n<td>--</td>\n<td><code>.pf-c-popover__header</code></td>\n<td><code>&lt;header&gt;</code></td>\n<td>Creates popover header.</td>\n</tr>\n<tr>\n<td><code>.popover-title</code></td>\n<td><code>&lt;h3&gt;</code></td>\n<td><code>.pf-c-popover__header-title</code></td>\n<td><code>&lt;h1&gt;</code></td>\n<td>Creates popover title.</td>\n</tr>\n<tr>\n<td><code>.popover-content</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td><code>.pf-c-popover__body</code></td>\n<td><code>&lt;div&gt;</code></td>\n<td>Creates the body of a popover. Required.</td>\n</tr>\n</tbody>\n</table>\n'},1007:function(t,e,n){var o=n(203);t.exports=(o.default||o).template({1:function(t,e,n,o,r){return'<div class="popovers-pf">\n  <div class="container-fluid container-popovers-pf">\n   <div class="popover fade right in" role="tooltip" style="display: block; position:relative;">\n      <div class="arrow" style="top: 50%;"></div>\n        <h3 class="popover-title closable">Popover Header\n          <button type="button" class="close" aria-hidden="true"><span class="pficon pficon-close"></span></button>\n        </h3>\n      <div class="popover-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>\n    </div>\n  </div>\n</div>\n'},compiler:[7,">= 4.0.0"],main:function(t,e,o,r,a){var l;return(null!=(l=t.invokePartial(n(419),e,{name:"popover-upgrade-examples",fn:t.program(1,a,0),inverse:t.noop,data:a,helpers:o,partials:r,decorators:t.decorators}))?l:"")+"\n\n\n"},usePartial:!0,useData:!0})},1008:function(t,e,n){var o=n(203);t.exports=(o.default||o).template({1:function(t,e,o,r,a){var l;return null!=(l=t.invokePartial(n(296),e,{name:"popover",hash:{"popover--attribute":'aria-labelledby="popover-right-header" aria-describedby="popover-right-body"',"popover--modifier":"pf-m-right"},fn:t.program(2,a,0),inverse:t.noop,data:a,helpers:o,partials:r,decorators:t.decorators}))?l:""},2:function(t,e,o,r,a){var l;return null!=(l=t.invokePartial(n(294),e,{name:"popover-content",fn:t.program(3,a,0),inverse:t.noop,data:a,helpers:o,partials:r,decorators:t.decorators}))?l:""},3:function(t,e,o,r,a){var l;return(null!=(l=t.invokePartial(n(204),e,{name:"button",hash:{"button--attribute":'aria-label="Close"',"button--modifier":"pf-m-plain"},fn:t.program(4,a,0),inverse:t.noop,data:a,helpers:o,partials:r,decorators:t.decorators}))?l:"")+(null!=(l=t.invokePartial(n(215),e,{name:"title",hash:{"title--attribute":'id="popover-right-header"',"title--modifier":"pf-m-xl",titleType:"h1"},fn:t.program(6,a,0),inverse:t.noop,data:a,helpers:o,partials:r,decorators:t.decorators}))?l:"")+(null!=(l=t.invokePartial(n(295),e,{name:"popover-body",hash:{"popover-body--attribute":'id="popover-right-body"'},fn:t.program(8,a,0),inverse:t.noop,data:a,helpers:o,partials:r,decorators:t.decorators}))?l:"")+(null!=(l=t.invokePartial(n(313),e,{name:"popover-footer",fn:t.program(10,a,0),inverse:t.noop,data:a,helpers:o,partials:r,decorators:t.decorators}))?l:"")},4:function(t,e,o,r,a){var l;return null!=(l=t.invokePartial(n(207),e,{name:"button-icon",hash:{"button-icon--type":"times"},data:a,indent:"        ",helpers:o,partials:r,decorators:t.decorators}))?l:""},6:function(t,e,n,o,r){return"        Popover Header\n"},8:function(t,e,n,o,r){return"        Popovers are triggered by click rather than hover. Click again to close.\n"},10:function(t,e,n,o,r){return"        Popover Footer\n"},compiler:[7,">= 4.0.0"],main:function(t,e,o,r,a){var l;return null!=(l=t.invokePartial(n(419),e,{name:"popover-upgrade-examples",fn:t.program(1,a,0),inverse:t.noop,data:a,helpers:o,partials:r,decorators:t.decorators}))?l:""},usePartial:!0,useData:!0})},191:function(t,e,n){"use strict";n.r(e),n.d(e,"Docs",function(){return v});var o=n(0),r=n.n(o),a=n(321),l=n(217),i=n(216),d=n(1006),p=n.n(d),c=n(1007),u=n.n(c),s=n(1008),f=n.n(s),v=p.a;e.default=function(){var t=u()(),e=f()();return r.a.createElement(l.a,{docs:v,heading:"Popover Migration"},r.a.createElement(a.Helmet,null,r.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/patternfly/3.54.1/css/patternfly.css"}),r.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/patternfly/3.54.1/css/patternfly-additions.css"})),r.a.createElement(i.a,{heading:"PatternFly 3 Popover"},t),r.a.createElement(i.a,{heading:"PatternFly 4 Popover"},e))}},204:function(t,e,n){var o=n(203);t.exports=(o.default||o).template({1:function(t,e,n,o,r){var a;return" "+t.escapeExpression("function"==typeof(a=null!=(a=n["button--modifier"]||(null!=e?e["button--modifier"]:e))?a:n.helperMissing)?a.call(null!=e?e:t.nullContext||{},{name:"button--modifier",hash:{},data:r}):a)},3:function(t,e,n,o,r){var a,l;return"    "+(null!=(a="function"==typeof(l=null!=(l=n["button--attribute"]||(null!=e?e["button--attribute"]:e))?l:n.helperMissing)?l.call(null!=e?e:t.nullContext||{},{name:"button--attribute",hash:{},data:r}):l)?a:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(t,e,n,o,r){var a,l=null!=e?e:t.nullContext||{};return'<button class="pf-c-button'+(null!=(a=n.if.call(l,null!=e?e["button--modifier"]:e,{name:"if",hash:{},fn:t.program(1,r,0),inverse:t.noop,data:r}))?a:"")+'"\n'+(null!=(a=n.if.call(l,null!=e?e["button--attribute"]:e,{name:"if",hash:{},fn:t.program(3,r,0),inverse:t.noop,data:r}))?a:"")+">\n"+(null!=(a=t.invokePartial(o["@partial-block"],e,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:o,decorators:t.decorators}))?a:"")+"</button>\n"},usePartial:!0,useData:!0})},207:function(t,e,n){var o=n(203);t.exports=(o.default||o).template({1:function(t,e,n,o,r){var a;return" fa-"+t.escapeExpression("function"==typeof(a=null!=(a=n["button-icon--type"]||(null!=e?e["button-icon--type"]:e))?a:n.helperMissing)?a.call(null!=e?e:t.nullContext||{},{name:"button-icon--type",hash:{},data:r}):a)},3:function(t,e,n,o,r){var a;return" "+t.escapeExpression("function"==typeof(a=null!=(a=n["button-icon--modifier"]||(null!=e?e["button-icon--modifier"]:e))?a:n.helperMissing)?a.call(null!=e?e:t.nullContext||{},{name:"button-icon--modifier",hash:{},data:r}):a)},5:function(t,e,n,o,r){var a,l;return"    "+(null!=(a="function"==typeof(l=null!=(l=n["button-icon--attribute"]||(null!=e?e["button-icon--attribute"]:e))?l:n.helperMissing)?l.call(null!=e?e:t.nullContext||{},{name:"button-icon--attribute",hash:{},data:r}):l)?a:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(t,e,n,o,r){var a,l=null!=e?e:t.nullContext||{};return'<i class="fas'+(null!=(a=n.if.call(l,null!=e?e["button-icon--type"]:e,{name:"if",hash:{},fn:t.program(1,r,0),inverse:t.noop,data:r}))?a:"")+(null!=(a=n.if.call(l,null!=e?e["button-icon--modifier"]:e,{name:"if",hash:{},fn:t.program(3,r,0),inverse:t.noop,data:r}))?a:"")+'"\n  aria-hidden="true"\n'+(null!=(a=n.if.call(l,null!=e?e["button-icon--attribute"]:e,{name:"if",hash:{},fn:t.program(5,r,0),inverse:t.noop,data:r}))?a:"")+"></i>"},useData:!0})},215:function(t,e,n){var o=n(203);t.exports=(o.default||o).template({1:function(t,e,n,o,r){var a;return" "+t.escapeExpression("function"==typeof(a=null!=(a=n["title--modifier"]||(null!=e?e["title--modifier"]:e))?a:n.helperMissing)?a.call(null!=e?e:t.nullContext||{},{name:"title--modifier",hash:{},data:r}):a)},3:function(t,e,n,o,r){var a,l;return"   "+(null!=(a="function"==typeof(l=null!=(l=n["title--attribute"]||(null!=e?e["title--attribute"]:e))?l:n.helperMissing)?l.call(null!=e?e:t.nullContext||{},{name:"title--attribute",hash:{},data:r}):l)?a:"")+"\n \t"},compiler:[7,">= 4.0.0"],main:function(t,e,n,o,r){var a,l,i=null!=e?e:t.nullContext||{},d=n.helperMissing,p=t.escapeExpression;return"<"+p("function"==typeof(l=null!=(l=n.titleType||(null!=e?e.titleType:e))?l:d)?l.call(i,{name:"titleType",hash:{},data:r}):l)+' class="pf-c-title'+(null!=(a=n.if.call(i,null!=e?e["title--modifier"]:e,{name:"if",hash:{},fn:t.program(1,r,0),inverse:t.noop,data:r}))?a:"")+'"\n'+(null!=(a=n.if.call(i,null!=e?e["title--attribute"]:e,{name:"if",hash:{},fn:t.program(3,r,0),inverse:t.noop,data:r}))?a:"")+">\n"+(null!=(a=t.invokePartial(o["@partial-block"],e,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:o,decorators:t.decorators}))?a:"")+"</"+p("function"==typeof(l=null!=(l=n.titleType||(null!=e?e.titleType:e))?l:d)?l.call(i,{name:"titleType",hash:{},data:r}):l)+"> "},usePartial:!0,useData:!0})},294:function(t,e,n){var o=n(203);t.exports=(o.default||o).template({1:function(t,e,n,o,r){var a;return" "+t.escapeExpression("function"==typeof(a=null!=(a=n["popover-content--modifier"]||(null!=e?e["popover-content--modifier"]:e))?a:n.helperMissing)?a.call(null!=e?e:t.nullContext||{},{name:"popover-content--modifier",hash:{},data:r}):a)},3:function(t,e,n,o,r){var a,l;return"    "+(null!=(a="function"==typeof(l=null!=(l=n["popover-content--attribute"]||(null!=e?e["popover-content--attribute"]:e))?l:n.helperMissing)?l.call(null!=e?e:t.nullContext||{},{name:"popover-content--attribute",hash:{},data:r}):l)?a:"")+" \n  "},compiler:[7,">= 4.0.0"],main:function(t,e,n,o,r){var a,l=null!=e?e:t.nullContext||{};return'<div class="pf-c-popover__content'+(null!=(a=n.if.call(l,null!=e?e["popover-content--modifier"]:e,{name:"if",hash:{},fn:t.program(1,r,0),inverse:t.noop,data:r}))?a:"")+'"\n'+(null!=(a=n.if.call(l,null!=e?e["popover-content--attribute"]:e,{name:"if",hash:{},fn:t.program(3,r,0),inverse:t.noop,data:r}))?a:"")+">\n"+(null!=(a=t.invokePartial(o["@partial-block"],e,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:o,decorators:t.decorators}))?a:"")+"</div>\n"},usePartial:!0,useData:!0})},295:function(t,e,n){var o=n(203);t.exports=(o.default||o).template({1:function(t,e,n,o,r){var a;return" "+t.escapeExpression("function"==typeof(a=null!=(a=n["popover-body--modifier"]||(null!=e?e["popover-body--modifier"]:e))?a:n.helperMissing)?a.call(null!=e?e:t.nullContext||{},{name:"popover-body--modifier",hash:{},data:r}):a)},3:function(t,e,n,o,r){var a,l;return"    "+(null!=(a="function"==typeof(l=null!=(l=n["popover-body--attribute"]||(null!=e?e["popover-body--attribute"]:e))?l:n.helperMissing)?l.call(null!=e?e:t.nullContext||{},{name:"popover-body--attribute",hash:{},data:r}):l)?a:"")+" \n  "},compiler:[7,">= 4.0.0"],main:function(t,e,n,o,r){var a,l=null!=e?e:t.nullContext||{};return'<div class="pf-c-popover__body'+(null!=(a=n.if.call(l,null!=e?e["popover-body--modifier"]:e,{name:"if",hash:{},fn:t.program(1,r,0),inverse:t.noop,data:r}))?a:"")+'"\n'+(null!=(a=n.if.call(l,null!=e?e["popover-body--attribute"]:e,{name:"if",hash:{},fn:t.program(3,r,0),inverse:t.noop,data:r}))?a:"")+">\n"+(null!=(a=t.invokePartial(o["@partial-block"],e,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:o,decorators:t.decorators}))?a:"")+"</div>\n"},usePartial:!0,useData:!0})},296:function(t,e,n){var o=n(203);t.exports=(o.default||o).template({1:function(t,e,n,o,r){return" "+t.escapeExpression(t.lambda(null!=e?e["popover--modifier"]:e,e))},3:function(t,e,n,o,r){var a;return"    "+(null!=(a=t.lambda(null!=e?e["popover--attribute"]:e,e))?a:"")+" \n  "},5:function(t,e,n,o,r){return""},compiler:[7,">= 4.0.0"],main:function(t,e,o,r,a){var l,i=null!=e?e:t.nullContext||{};return'<div class="pf-c-popover'+(null!=(l=o.if.call(i,null!=e?e["popover--modifier"]:e,{name:"if",hash:{},fn:t.program(1,a,0),inverse:t.noop,data:a}))?l:"")+'"\n  role="dialog"\n  aria-modal="true"\n'+(null!=(l=o.if.call(i,null!=e?e["popover--attribute"]:e,{name:"if",hash:{},fn:t.program(3,a,0),inverse:t.noop,data:a}))?l:"")+">\n"+(null!=(l=t.invokePartial(n(379),e,{name:"popover-arrow",fn:t.program(5,a,0),inverse:t.noop,data:a,helpers:o,partials:r,decorators:t.decorators}))?l:"")+(null!=(l=t.invokePartial(r["@partial-block"],e,{name:"@partial-block",data:a,indent:"  ",helpers:o,partials:r,decorators:t.decorators}))?l:"")+"</div>\n"},usePartial:!0,useData:!0})},313:function(t,e,n){var o=n(203);t.exports=(o.default||o).template({1:function(t,e,n,o,r){var a;return" "+t.escapeExpression("function"==typeof(a=null!=(a=n["popover-footer--modifier"]||(null!=e?e["popover-footer--modifier"]:e))?a:n.helperMissing)?a.call(null!=e?e:t.nullContext||{},{name:"popover-footer--modifier",hash:{},data:r}):a)},3:function(t,e,n,o,r){var a,l;return"    "+(null!=(a="function"==typeof(l=null!=(l=n["popover-footer--attribute"]||(null!=e?e["popover-footer--attribute"]:e))?l:n.helperMissing)?l.call(null!=e?e:t.nullContext||{},{name:"popover-footer--attribute",hash:{},data:r}):l)?a:"")+" \n  "},compiler:[7,">= 4.0.0"],main:function(t,e,n,o,r){var a,l=null!=e?e:t.nullContext||{};return'<footer class="pf-c-popover__footer'+(null!=(a=n.if.call(l,null!=e?e["popover-footer--modifier"]:e,{name:"if",hash:{},fn:t.program(1,r,0),inverse:t.noop,data:r}))?a:"")+'"\n'+(null!=(a=n.if.call(l,null!=e?e["popover-footer--attribute"]:e,{name:"if",hash:{},fn:t.program(3,r,0),inverse:t.noop,data:r}))?a:"")+">\n"+(null!=(a=t.invokePartial(o["@partial-block"],e,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:o,decorators:t.decorators}))?a:"")+"</footer>"},usePartial:!0,useData:!0})},379:function(t,e,n){var o=n(203);t.exports=(o.default||o).template({1:function(t,e,n,o,r){var a;return" "+t.escapeExpression("function"==typeof(a=null!=(a=n["popover-arrow--modifier"]||(null!=e?e["popover-arrow--modifier"]:e))?a:n.helperMissing)?a.call(null!=e?e:t.nullContext||{},{name:"popover-arrow--modifier",hash:{},data:r}):a)},3:function(t,e,n,o,r){var a,l;return"    "+(null!=(a="function"==typeof(l=null!=(l=n["popover-arrow--attribute"]||(null!=e?e["popover-arrow--attribute"]:e))?l:n.helperMissing)?l.call(null!=e?e:t.nullContext||{},{name:"popover-arrow--attribute",hash:{},data:r}):l)?a:"")+" \n  "},compiler:[7,">= 4.0.0"],main:function(t,e,n,o,r){var a,l=null!=e?e:t.nullContext||{};return'<div class="pf-c-popover__arrow'+(null!=(a=n.if.call(l,null!=e?e["popover-arrow--modifier"]:e,{name:"if",hash:{},fn:t.program(1,r,0),inverse:t.noop,data:r}))?a:"")+'"\n'+(null!=(a=n.if.call(l,null!=e?e["popover-arrow--attribute"]:e,{name:"if",hash:{},fn:t.program(3,r,0),inverse:t.noop,data:r}))?a:"")+">\n"+(null!=(a=t.invokePartial(o["@partial-block"],e,{name:"@partial-block",data:r,indent:"  ",helpers:n,partials:o,decorators:t.decorators}))?a:"")+"</div>\n"},usePartial:!0,useData:!0})},419:function(t,e,n){var o=n(203);t.exports=(o.default||o).template({compiler:[7,">= 4.0.0"],main:function(t,e,n,o,r){var a;return null!=(a=t.invokePartial(o["@partial-block"],e,{name:"@partial-block",data:r,helpers:n,partials:o,decorators:t.decorators}))?a:""},usePartial:!0,useData:!0})}}]);
//# sourceMappingURL=component---src-patternfly-upgrade-examples-popover-upgrade-examples-examples-index-js-d100855b902b470e39aa.js.map