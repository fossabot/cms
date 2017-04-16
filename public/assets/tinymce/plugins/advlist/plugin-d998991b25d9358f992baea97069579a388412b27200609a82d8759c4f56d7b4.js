tinymce.PluginManager.add("advlist",function(t){function e(e){return t.$.contains(t.getBody(),e)}function n(t){return t&&/^(OL|UL|DL)$/.test(t.nodeName)&&e(t)}function o(t,e){var n=[];return e&&tinymce.each(e.split(/[ ,]/),function(t){n.push({text:t.replace(/\-/g," ").replace(/\b\w/g,function(t){return t.toUpperCase()}),data:"default"==t?"":t})}),n}function l(e,n){t.undoManager.transact(function(){var o,l=t.dom,i=t.selection;if(!(o=l.getParent(i.getNode(),"ol,ul"))||o.nodeName!=e||!1===n){var a={"list-style-type":n||""};t.execCommand("UL"==e?"InsertUnorderedList":"InsertOrderedList",!1,a)}o=l.getParent(i.getNode(),"ol,ul"),o&&tinymce.util.Tools.each(l.select("ol,ul",o).concat([o]),function(t){t.nodeName!==e&&!1!==n&&(t=l.rename(t,e)),l.setStyle(t,"listStyleType",n||null),t.removeAttribute("data-mce-style")}),t.focus()})}function i(e){var n=t.dom.getStyle(t.dom.getParent(t.selection.getNode(),"ol,ul"),"listStyleType")||"";e.control.items().each(function(t){t.active(t.settings.data===n)})}var a,s,r=function(t,e){var n=t.settings.plugins?t.settings.plugins:"";return-1!==tinymce.util.Tools.inArray(n.split(/[ ,]/),e)};a=o("OL",t.getParam("advlist_number_styles","default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman")),s=o("UL",t.getParam("advlist_bullet_styles","default,circle,disc,square"));var u=function(e){return function(){var o=this;t.on("NodeChange",function(t){var l=tinymce.util.Tools.grep(t.parents,n);o.active(l.length>0&&l[0].nodeName===e)})}};r(t,"lists")&&(t.addCommand("ApplyUnorderedListStyle",function(t,e){l("UL",e["list-style-type"])}),t.addCommand("ApplyOrderedListStyle",function(t,e){l("OL",e["list-style-type"])}),t.addButton("numlist",{type:a.length>0?"splitbutton":"button",tooltip:"Numbered list",menu:a,onPostRender:u("OL"),onshow:i,onselect:function(t){l("OL",t.control.settings.data)},onclick:function(){l("OL",!1)}}),t.addButton("bullist",{type:s.length>0?"splitbutton":"button",tooltip:"Bullet list",onPostRender:u("UL"),menu:s,onshow:i,onselect:function(t){l("UL",t.control.settings.data)},onclick:function(){l("UL",!1)}}))});