(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{147:function(e,i,n){"use strict";n.r(i),n.d(i,"Docs",function(){return p});var t=n(0),l=n.n(t),a=n(205),u=n(204),s=n(513),r=n.n(s),o=n(514),c=n.n(o),m=n(515),d=n.n(m),p=(n(516),d.a);i.default=function(){var e=c()();return l.a.createElement(a.a,{docs:p,heading:"Content"},l.a.createElement(u.a,{heading:"Content Example",handlebars:r.a},e))}},298:function(e,i,n){var t=n(196);e.exports=(t.default||t).template({1:function(e,i,n,t,l){var a;return" "+e.escapeExpression("function"==typeof(a=null!=(a=n["content--modifier"]||(null!=i?i["content--modifier"]:i))?a:n.helperMissing)?a.call(null!=i?i:e.nullContext||{},{name:"content--modifier",hash:{},data:l}):a)},3:function(e,i,n,t,l){var a,u;return"    "+(null!=(a="function"==typeof(u=null!=(u=n["content--attribute"]||(null!=i?i["content--attribute"]:i))?u:n.helperMissing)?u.call(null!=i?i:e.nullContext||{},{name:"content--attribute",hash:{},data:l}):u)?a:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,i,n,t,l){var a,u=null!=i?i:e.nullContext||{};return'<div class="pf-c-content'+(null!=(a=n.if.call(u,null!=i?i["content--modifier"]:i,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l}))?a:"")+'"\n'+(null!=(a=n.if.call(u,null!=i?i["content--attribute"]:i,{name:"if",hash:{},fn:e.program(3,l,0),inverse:e.noop,data:l}))?a:"")+">\n"+(null!=(a=e.invokePartial(t["@partial-block"],i,{name:"@partial-block",data:l,indent:"  ",helpers:n,partials:t,decorators:e.decorators}))?a:"")+"</div>"},usePartial:!0,useData:!0})},513:function(e,i){e.exports='{{#> content}}\n<h1>Hello World</h1>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius\n  lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum\n  mattis neque. Sub works as well!</p>\n<h2>Second level</h2>\n<p>Curabitur accumsan turpis pharetra\n  <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel\n  cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et\n  neque nisl.</p>\n<ul>\n  <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>\n  <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>\n  <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.\n    <ul>\n      <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>\n      <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>\n      <li>Ut venenatis, nisl scelerisque.\n        <ol>\n          <li>Donec blandit a lorem id convallis.</li>\n          <li>Cras gravida arcu at diam gravida gravida.</li>\n          <li>Integer in volutpat libero.</li>\n        </ol>\n      </li>\n    </ul>\n  </li>\n  <li>Ut non enim metus.</li>\n</ul>\n<h3>Third level</h3>\n<p>Quisque ante lacus, malesuada ac auctor vitae, congue\n  <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>\n<ol>\n  <li>Donec blandit a lorem id convallis.</li>\n  <li>Cras gravida arcu at diam gravida gravida.</li>\n  <li>Integer in volutpat libero.</li>\n  <li>Donec a diam tellus.</li>\n  <li>Etiam auctor nisl et.\n    <ul>\n      <li>Donec blandit a lorem id convallis.</li>\n      <li>Cras gravida arcu at diam gravida gravida.</li>\n      <li>Integer in volutpat libero.\n        <ol>\n          <li>Donec blandit a lorem id convallis.</li>\n          <li>Cras gravida arcu at diam gravida gravida.</li>\n        </ol>\n      </li>\n    </ul>\n  </li>\n  <li>Aenean nec tortor orci.</li>\n  <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>\n  <li>Vivamus maximus ultricies pulvinar.</li>\n</ol>\n<blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>\n<p>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et\n  <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.</p>\n<p>Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum\n  commodo.\n</p>\n<dl>\n  <dt>Web</dt>\n  <dd>The part of the Internet that contains websites and web pages</dd>\n  <dt>HTML</dt>\n  <dd>A markup language for creating web pages</dd>\n  <dt>CSS</dt>\n  <dd>A technology to make HTML look better</dd>\n</dl>\n<p>Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla.\n  Nulla facilisi. Nullam ac erat ante.</p>\n<h4>Fourth level</h4>\n<p>Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum\n  ex efficitur.</p>\n<p>Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris\n  eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.</p>\n<small>Sometimes you need small text to display things like date created</small>\n<p>Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis\n  lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus,\n  mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex\n  sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum.\n  Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.</p>\n<h5>Fifth level</h5>\n<p>Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet\n  ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend\n  justo. Nam et sollicitudin odio.</p>\n<h6>Sixth level</h6>\n<p>Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan.\n  Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis.\n  Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui,\n  sed varius sapien odio vitae est. Etiam at cursus metus.</p>\n{{/content}}'},514:function(e,i,n){var t=n(196);e.exports=(t.default||t).template({1:function(e,i,n,t,l){return'<h1>Hello World</h1>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius\n  lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum\n  mattis neque. Sub works as well!</p>\n<h2>Second level</h2>\n<p>Curabitur accumsan turpis pharetra\n  <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel\n  cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et\n  neque nisl.</p>\n<ul>\n  <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>\n  <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>\n  <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.\n    <ul>\n      <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>\n      <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>\n      <li>Ut venenatis, nisl scelerisque.\n        <ol>\n          <li>Donec blandit a lorem id convallis.</li>\n          <li>Cras gravida arcu at diam gravida gravida.</li>\n          <li>Integer in volutpat libero.</li>\n        </ol>\n      </li>\n    </ul>\n  </li>\n  <li>Ut non enim metus.</li>\n</ul>\n<h3>Third level</h3>\n<p>Quisque ante lacus, malesuada ac auctor vitae, congue\n  <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>\n<ol>\n  <li>Donec blandit a lorem id convallis.</li>\n  <li>Cras gravida arcu at diam gravida gravida.</li>\n  <li>Integer in volutpat libero.</li>\n  <li>Donec a diam tellus.</li>\n  <li>Etiam auctor nisl et.\n    <ul>\n      <li>Donec blandit a lorem id convallis.</li>\n      <li>Cras gravida arcu at diam gravida gravida.</li>\n      <li>Integer in volutpat libero.\n        <ol>\n          <li>Donec blandit a lorem id convallis.</li>\n          <li>Cras gravida arcu at diam gravida gravida.</li>\n        </ol>\n      </li>\n    </ul>\n  </li>\n  <li>Aenean nec tortor orci.</li>\n  <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>\n  <li>Vivamus maximus ultricies pulvinar.</li>\n</ol>\n<blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>\n<p>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et\n  <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.</p>\n<p>Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum\n  commodo.\n</p>\n<dl>\n  <dt>Web</dt>\n  <dd>The part of the Internet that contains websites and web pages</dd>\n  <dt>HTML</dt>\n  <dd>A markup language for creating web pages</dd>\n  <dt>CSS</dt>\n  <dd>A technology to make HTML look better</dd>\n</dl>\n<p>Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla.\n  Nulla facilisi. Nullam ac erat ante.</p>\n<h4>Fourth level</h4>\n<p>Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum\n  ex efficitur.</p>\n<p>Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris\n  eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.</p>\n<small>Sometimes you need small text to display things like date created</small>\n<p>Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis\n  lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus,\n  mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex\n  sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum.\n  Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.</p>\n<h5>Fifth level</h5>\n<p>Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet\n  ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend\n  justo. Nam et sollicitudin odio.</p>\n<h6>Sixth level</h6>\n<p>Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan.\n  Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis.\n  Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui,\n  sed varius sapien odio vitae est. Etiam at cursus metus.</p>\n'},compiler:[7,">= 4.0.0"],main:function(e,i,t,l,a){var u;return null!=(u=e.invokePartial(n(298),i,{name:"content",fn:e.program(1,a,0),inverse:e.noop,data:a,helpers:t,partials:l,decorators:e.decorators}))?u:""},usePartial:!0,useData:!0})},515:function(e,i){e.exports='<h2 id="overview">Overview</h2>\n<p>When you can&#39;t use the CSS classes you want, or when you just want to directly use HTML tags, use <code>pf-c-content</code> as container. It can handle almost any HTML tag:</p>\n<ul>\n<li><code>&lt;p&gt;</code> paragraphs</li>\n<li><code>&lt;ul&gt;</code> <code>&lt;ol&gt;</code> <code>&lt;dl&gt;</code> lists</li>\n<li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> headings</li>\n<li><code>&lt;blockquote&gt;</code> quotes</li>\n<li><code>&lt;em&gt;</code> and <code>&lt;strong&gt;</code></li>\n</ul>\n<p>This <code>pf-c-content</code> class can be used in any context where you just want to (or can only) write some text.</p>\n<p>This component is an exception to the variable system since we style type selectors.</p>\n<h2 id="usage">Usage</h2>\n<table>\n<thead>\n<tr>\n<th>Class</th>\n<th>Applied To</th>\n<th>Outcome</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>.pf-c-content</code></td>\n<td><code>&lt;div&gt;</code>, <code>&lt;section&gt;</code>, or <code>&lt;article&gt;</code></td>\n<td>Generates vertical rythm and typographic treatment to html elements</td>\n</tr>\n</tbody>\n</table>\n'},516:function(e,i,n){}}]);
//# sourceMappingURL=component---src-patternfly-components-content-examples-index-js-a67b2ab898e661382f97.js.map