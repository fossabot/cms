!function(){var e={},t=function(t){for(var n=e[t],r=n.deps,i=n.defn,o=r.length,l=new Array(o),c=0;c<o;++c)l[c]=a(r[c]);var u=i.apply(null,l);if(void 0===u)throw"module ["+t+"] returned undefined";n.instance=u},n=function(t,n,a){if("string"!=typeof t)throw"module id must be a string";if(void 0===n)throw"no dependencies for "+t;if(void 0===a)throw"no definition function for "+t;e[t]={deps:n,defn:a,instance:void 0}},a=function(n){var a=e[n];if(void 0===a)throw"module ["+n+"] was undefined";return void 0===a.instance&&t(n),a.instance},r=function(e,t){for(var n=e.length,r=new Array(n),i=0;i<n;++i)r[i]=a(e[i]);t.apply(null,r)};({}).bolt={module:{api:{define:n,require:r,demand:a}}};var i=n,o=function(e,t){i(e,[],function(){return t})};o("5",tinymce.util.Tools.resolve),i("1",["5"],function(e){return e("tinymce.PluginManager")}),o("c",Array),o("d",Error),i("6",["c","d"],function(e,t){var n=function(e){return function(){return e}};return{noop:function(){},noarg:function(e){return function(){return e()}},compose:function(e,t){return function(){return e(t.apply(null,arguments))}},constant:n,identity:function(e){return e},tripleEquals:function(e,t){return e===t},curry:function(t){for(var n=new e(arguments.length-1),a=1;a<arguments.length;a++)n[a-1]=arguments[a];return function(){for(var a=new e(arguments.length),r=0;r<a.length;r++)a[r]=arguments[r];var i=n.concat(a);return t.apply(null,i)}},not:function(e){return function(){return!e.apply(null,arguments)}},die:function(e){return function(){throw new t(e)}},apply:function(e){return e()},call:function(e){e()},never:n(!1),always:n(!0)}}),i("8",["5"],function(e){return e("tinymce.util.Tools")}),i("e",["5"],function(e){return e("tinymce.util.XHR")}),i("f",["5"],function(e){return e("tinymce.dom.DOMUtils")}),i("9",["f"],function(e){return{getCreationDateClasses:function(e){return e.getParam("template_cdate_classes","cdate")},getModificationDateClasses:function(e){return e.getParam("template_mdate_classes","mdate")},getSelectedContentClasses:function(e){return e.getParam("template_selected_content_classes","selcontent")},getPreviewReplaceValues:function(e){return e.getParam("template_preview_replace_values")},getTemplateReplaceValues:function(e){return e.getParam("template_replace_values")},getTemplates:function(e){return e.templates},getCdateFormat:function(e){return e.getParam("template_cdate_format",e.getLang("template.cdate_format"))},getMdateFormat:function(e){return e.getParam("template_mdate_format",e.getLang("template.mdate_format"))},getDialogWidth:function(e){return e.getParam("template_popup_width",600)},getDialogHeight:function(t){return Math.min(e.DOM.getViewPort().h,t.getParam("template_popup_height",500))}}}),i("a",[],function(){var e=function(e,t){if((e=""+e).length<t)for(var n=0;n<t-e.length;n++)e="0"+e;return e};return{getDateTime:function(t,n,a){var r="Sun Mon Tue Wed Thu Fri Sat Sun".split(" "),i="Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "),o="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),l="January February March April May June July August September October November December".split(" ");return a=a||new Date,n=n.replace("%D","%m/%d/%Y"),n=n.replace("%r","%I:%M:%S %p"),n=n.replace("%Y",""+a.getFullYear()),n=n.replace("%y",""+a.getYear()),n=n.replace("%m",e(a.getMonth()+1,2)),n=n.replace("%d",e(a.getDate(),2)),n=n.replace("%H",""+e(a.getHours(),2)),n=n.replace("%M",""+e(a.getMinutes(),2)),n=n.replace("%S",""+e(a.getSeconds(),2)),n=n.replace("%I",""+((a.getHours()+11)%12+1)),n=n.replace("%p",a.getHours()<12?"AM":"PM"),n=n.replace("%B",""+t.translate(l[a.getMonth()])),n=n.replace("%b",""+t.translate(o[a.getMonth()])),n=n.replace("%A",""+t.translate(i[a.getDay()])),n=n.replace("%a",""+t.translate(r[a.getDay()])),n=n.replace("%%","%")}}}),i("7",["8","e","9","a"],function(e,t,n,a){var r=function(t,n,a){return e.each(a,function(e,t){"function"==typeof e&&(e=e(t)),n=n.replace(new RegExp("\\{\\$"+t+"\\}","g"),e)}),n},i=function(t,a){var r=t.dom,i=n.getTemplateReplaceValues(t);e.each(r.select("*",a),function(t){e.each(i,function(e,n){r.hasClass(t,n)&&"function"==typeof i[n]&&i[n](t)})})},o=function(e,t){return new RegExp("\\b"+t+"\\b","g").test(e.className)};return{createTemplateList:function(e,a){return function(){var r=n.getTemplates(e);return"function"==typeof r?void r(a):void("string"==typeof r?t.send({url:r,success:function(e){a(JSON.parse(e))}}):a(r))}},replaceTemplateValues:r,replaceVals:i,insertTemplate:function(t,l,c){var u,s,p=t.dom,f=t.selection.getContent();c=r(t,c,n.getTemplateReplaceValues(t)),u=p.create("div",null,c),(s=p.select(".mceTmpl",u))&&s.length>0&&(u=p.create("div",null)).appendChild(s[0].cloneNode(!0)),e.each(p.select("*",u),function(e){o(e,n.getCreationDateClasses(t).replace(/\s+/g,"|"))&&(e.innerHTML=a.getDateTime(t,n.getCdateFormat(t))),o(e,n.getModificationDateClasses(t).replace(/\s+/g,"|"))&&(e.innerHTML=a.getDateTime(t,n.getMdateFormat(t))),o(e,n.getSelectedContentClasses(t).replace(/\s+/g,"|"))&&(e.innerHTML=f)}),i(t,u),t.execCommand("mceInsertContent",!1,u.innerHTML),t.addVisual()}}}),i("2",["6","7"],function(e,t){return{register:function(n){n.addCommand("mceInsertTemplate",e.curry(t.insertTemplate,n))}}}),i("3",["8","9","a","7"],function(e,t,n,a){return{setup:function(r){r.on("PreProcess",function(i){var o=r.dom,l=t.getMdateFormat(r);e.each(o.select("div",i.node),function(t){o.hasClass(t,"mceTmpl")&&(e.each(o.select("*",t),function(e){o.hasClass(e,r.getParam("template_mdate_classes","mdate").replace(/\s+/g,"|"))&&(e.innerHTML=n.getDateTime(r,l))}),a.replaceVals(r,t))})})}}}),i("b",["f","8","e","9","7"],function(e,t,n,a,r){var i=function(e,n,i){if(-1===i.indexOf("<html>")){var o="";t.each(e.contentCSS,function(t){o+='<link type="text/css" rel="stylesheet" href="'+e.documentBaseURI.toAbsolute(t)+'">'});var l=e.settings.body_class||"";-1!==l.indexOf("=")&&(l=e.getParam("body_class","","hash"),l=l[e.id]||""),i="<!DOCTYPE html><html><head>"+o+'</head><body class="'+l+'">'+i+"</body></html>"}i=r.replaceTemplateValues(e,i,a.getPreviewReplaceValues(e));var c=n.find("iframe")[0].getEl().contentWindow.document;c.open(),c.write(i),c.close()};return{open:function(e,o){var l,c,u=[];if(o&&0!==o.length){t.each(o,function(e){u.push({selected:!u.length,text:e.title,value:{url:e.url,content:e.content,description:e.description}})});var s=function(t){var a=t.control.value();a.url?n.send({url:a.url,success:function(t){i(e,l,c=t)}}):(c=a.content,i(e,l,c)),l.find("#description")[0].text(t.control.value().description)};(l=e.windowManager.open({title:"Insert template",layout:"flex",direction:"column",align:"stretch",padding:15,spacing:10,items:[{type:"form",flex:0,padding:0,items:[{type:"container",label:"Templates",items:{type:"listbox",label:"Templates",name:"template",values:u,onselect:s}}]},{type:"label",name:"description",label:"Description",text:"\xa0"},{type:"iframe",flex:1,border:1}],onsubmit:function(){r.insertTemplate(e,!1,c)},minWidth:a.getDialogWidth(e),minHeight:a.getDialogHeight(e)})).find("listbox")[0].fire("select")}else{var p=e.translate("No templates defined.");e.notificationManager.open({text:p,type:"info"})}}}}),i("4",["7","b"],function(e,t){var n=function(e){return function(n){t.open(e,n)}};return{register:function(t){t.addButton("template",{title:"Insert template",onclick:e.createTemplateList(t.settings,n(t))}),t.addMenuItem("template",{text:"Template",onclick:e.createTemplateList(t.settings,n(t)),icon:"template",context:"insert"})}}}),i("0",["1","2","3","4"],function(e,t,n,a){return e.add("template",function(e){a.register(e),t.register(e),n.setup(e)}),function(){}}),a("0")()}();