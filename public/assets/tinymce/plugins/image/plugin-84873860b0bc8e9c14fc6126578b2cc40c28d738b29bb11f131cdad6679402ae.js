!function(){var e={},t=function(t){for(var n=e[t],a=n.deps,r=n.defn,o=a.length,l=new Array(o),s=0;s<o;++s)l[s]=i(a[s]);var c=r.apply(null,l);if(void 0===c)throw"module ["+t+"] returned undefined";n.instance=c},n=function(t,n,i){if("string"!=typeof t)throw"module id must be a string";if(void 0===n)throw"no dependencies for "+t;if(void 0===i)throw"no definition function for "+t;e[t]={deps:n,defn:i,instance:void 0}},i=function(n){var i=e[n];if(void 0===i)throw"module ["+n+"] was undefined";return void 0===i.instance&&t(n),i.instance},a=function(e,t){for(var n=e.length,a=new Array(n),r=0;r<n;++r)a.push(i(e[r]));t.apply(null,t)};({}).bolt={module:{api:{define:n,require:a,demand:i}}};var r=n,o=function(e,t){r(e,[],function(){return t})};o("4",tinymce.util.Tools.resolve),r("1",["4"],function(e){return e("tinymce.PluginManager")}),r("2",["4"],function(e){return e("tinymce.util.Tools")}),o("5",document),o("6",Math),o("7",RegExp),r("8",["4"],function(e){return e("tinymce.Env")}),r("9",["4"],function(e){return e("tinymce.ui.Factory")}),r("a",["4"],function(e){return e("tinymce.util.JSON")}),r("b",["4"],function(e){return e("tinymce.util.XHR")}),r("e",["4"],function(e){return e("tinymce.util.Promise")}),r("c",["e","2","5"],function(e,t){return function(n){function i(e,t){return e?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):t}function a(e,t,a,r){var o,l;o=new XMLHttpRequest,o.open("POST",n.url),o.withCredentials=n.credentials,o.upload.onprogress=function(e){r(e.loaded/e.total*100)},o.onerror=function(){a("Image upload failed due to a XHR Transport error. Code: "+o.status)},o.onload=function(){var e;return o.status<200||o.status>=300?void a("HTTP Error: "+o.status):(e=JSON.parse(o.responseText),e&&"string"==typeof e.location?void t(i(n.basePath,e.location)):void a("Invalid JSON: "+o.responseText))},l=new FormData,l.append("file",e.blob(),e.filename()),o.send(l)}function r(t,n){return new e(function(e,i){try{n(t,e,i,s)}catch(e){i(e.message)}})}function o(e){return e===a}function l(t){return!n.url&&o(n.handler)?e.reject("Upload url missng from the settings."):r(t,n.handler)}var s=function(){};return n=t.extend({credentials:!1,handler:a},n),{upload:l}}}),r("d",["2","6","5"],function(e,t,n){var i=function(e,i){function a(e,t){r.parentNode&&r.parentNode.removeChild(r),i({width:e,height:t})}var r=n.createElement("img");r.onload=function(){a(t.max(r.width,r.clientWidth),t.max(r.height,r.clientHeight))},r.onerror=function(){a()};var o=r.style;o.visibility="hidden",o.position="fixed",o.bottom=o.left=0,o.width=o.height="auto",n.body.appendChild(r),r.src=e},a=function(t,n,i){function a(t,i){return i=i||[],e.each(t,function(e){var t={text:e.text||e.title};e.menu?t.menu=a(e.menu):(t.value=e.value,n(t)),i.push(t)}),i}return a(t,i||[])};return{getImageSize:i,buildListItems:a,removePixelSuffix:function(e){return e&&(e=e.replace(/px$/,"")),e},addPixelSuffix:function(e){return e.length>0&&/^[0-9]+$/.test(e)&&(e+="px"),e},mergeMargins:function(e){if(e.margin){var t=e.margin.split(" ");switch(t.length){case 1:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[0],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[0];break;case 2:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[1];break;case 3:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[1];break;case 4:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[3]}delete e.margin}return e}}}),r("3",["5","6","7","8","9","a","2","b","c","d"],function(e,t,n,i,a,r,o,l,s,c){return function(e){function u(t){var n=e.settings.image_list;"string"==typeof n?l.send({url:n,success:function(e){t(r.parse(e))}}):"function"==typeof n?n(t):t(n)}function g(r){function l(){var t=a.get("Throbber"),n=new t(v.getEl()),i=this.value(),r=new s({url:I.images_upload_url,basePath:I.images_upload_base_path,credentials:I.images_upload_credentials,handler:I.images_upload_handler}),o=e.editorUpload.blobCache.create({blob:i,name:i.name?i.name.replace(/\.[^\.]+$/,""):null,base64:"data:image/fake;base64,="}),l=function(){n.hide(),URL.revokeObjectURL(o.blobUri())};return n.show(),r.upload(o).then(function(e){var t=v.find("#src");return t.value(e),v.find("tabpanel")[0].activateTab(0),t.fire("change"),l(),e},function(t){e.windowManager.alert(t),l()})}function u(t){return e.schema.getTextBlockElements()[t.nodeName]}function g(){var e,n,i,a;e=v.find("#width")[0],n=v.find("#height")[0],e&&n&&(i=e.value(),a=n.value(),v.find("#constrain")[0].checked()&&w&&S&&i&&a&&(w!=i?(a=t.round(i/w*a),isNaN(a)||n.value(a)):(i=t.round(a/S*i),isNaN(i)||e.value(i))),w=i,S=a)}function d(){if(e.settings.image_advtab){var t=v.toJSON(),n=A.parseStyle(t.style);n=c.mergeMargins(n),t.vspace&&(n["margin-top"]=n["margin-bottom"]=c.addPixelSuffix(t.vspace)),t.hspace&&(n["margin-left"]=n["margin-right"]=c.addPixelSuffix(t.hspace)),t.border&&(n["border-width"]=c.addPixelSuffix(t.border)),v.find("#style").value(A.serializeStyle(A.parseStyle(A.serializeStyle(n))))}}function m(){if(e.settings.image_advtab){var t=v.toJSON(),n=A.parseStyle(t.style);v.find("#vspace").value(""),v.find("#hspace").value(""),n=c.mergeMargins(n),(n["margin-top"]&&n["margin-bottom"]||n["margin-right"]&&n["margin-left"])&&(n["margin-top"]===n["margin-bottom"]?v.find("#vspace").value(c.removePixelSuffix(n["margin-top"])):v.find("#vspace").value(""),n["margin-right"]===n["margin-left"]?v.find("#hspace").value(c.removePixelSuffix(n["margin-right"])):v.find("#hspace").value("")),n["border-width"]&&v.find("#border").value(c.removePixelSuffix(n["border-width"])),v.find("#style").value(A.serializeStyle(A.parseStyle(A.serializeStyle(n))))}}function f(t){function n(){t.onload=t.onerror=null,e.selection&&(e.selection.select(t),e.nodeChanged())}t.onload=function(){C.width||C.height||!P||A.setAttribs(t,{width:t.clientWidth,height:t.clientHeight}),n()},t.onerror=n}function p(){var t,n;d(),g(),C=o.extend(C,v.toJSON()),C.alt||(C.alt=""),C.title||(C.title=""),""===C.width&&(C.width=null),""===C.height&&(C.height=null),C.style||(C.style=null),C={src:C.src,alt:C.alt,title:C.title,width:C.width,height:C.height,style:C.style,caption:C.caption,"class":C["class"]},e.undoManager.transact(function(){if(C.src){if(""===C.title&&(C.title=null),y?A.setAttribs(y,C):(C.id="__mcenew",e.focus(),e.selection.setContent(A.createHTML("img",C)),y=A.get("__mcenew"),A.setAttrib(y,"id",null)),e.editorUpload.uploadImagesAuto(),!1===C.caption&&A.is(y.parentNode,"figure.image")&&(t=y.parentNode,A.setAttrib(y,"contenteditable",null),A.insertAfter(y,t),A.remove(t),e.selection.select(y),e.nodeChanged()),!0!==C.caption)f(y);else if(!A.is(y.parentNode,"figure.image")){n=y,y=y.cloneNode(!0),y.contentEditable=!0,t=A.create("figure",{"class":"image"}),t.appendChild(y),t.appendChild(A.create("figcaption",{contentEditable:!0},"Caption")),t.contentEditable=!1;var i=A.getParent(n,u);i?A.split(i,n,t):A.replace(t,n),e.selection.select(t)}}else if(y){var a=A.is(y.parentNode,"figure.image")?y.parentNode:y;A.remove(a),e.focus(),e.nodeChanged(),A.isEmpty(e.getBody())&&(e.setContent(""),e.selection.setCursorLocation())}})}function h(t){var i,a,r,l=t.meta||{};_&&_.value(e.convertURL(this.value(),"src")),o.each(l,function(e,t){v.find("#"+t).value(e)}),l.width||l.height||(i=e.convertURL(this.value(),"src"),a=e.settings.image_prepend_url,r=new n("^(?:[a-z]+:)?//","i"),a&&!r.test(i)&&i.substring(0,a.length)!==a&&(i=a+i),this.value(i),c.getImageSize(e.documentBaseURI.toAbsolute(this.value()),function(e){e.width&&e.height&&P&&(w=e.width,S=e.height,v.find("#width").value(w),v.find("#height").value(S))}))}function b(e){e.meta=v.toJSON()}var v,y,x,w,S,_,N,C={},A=e.dom,I=e.settings,P=!1!==I.image_dimensions;y=e.selection.getNode(),x=A.getParent(y,"figure.image"),x&&(y=A.select("img",x)[0]),y&&("IMG"!=y.nodeName||y.getAttribute("data-mce-object")||y.getAttribute("data-mce-placeholder"))&&(y=null),y&&(w=A.getAttrib(y,"width"),S=A.getAttrib(y,"height"),C={src:A.getAttrib(y,"src"),alt:A.getAttrib(y,"alt"),title:A.getAttrib(y,"title"),"class":A.getAttrib(y,"class"),width:w,height:S,caption:!!x}),r&&(_={type:"listbox",label:"Image list",values:c.buildListItems(r,function(t){t.value=e.convertURL(t.value||t.url,"src")},[{text:"None",value:""}]),value:C.src&&e.convertURL(C.src,"src"),onselect:function(e){var t=v.find("#alt");(!t.value()||e.lastControl&&t.value()==e.lastControl.text())&&t.value(e.control.text()),v.find("#src").value(e.control.value()).fire("change")},onPostRender:function(){_=this}}),e.settings.image_class_list&&(N={name:"class",type:"listbox",label:"Class",values:c.buildListItems(e.settings.image_class_list,function(t){t.value&&(t.textStyle=function(){return e.formatter.getCssText({inline:"img",classes:[t.value]})})})});var L=[{name:"src",type:"filepicker",filetype:"image",label:"Source",autofocus:!0,onchange:h,onbeforecall:b},_];if(!1!==e.settings.image_description&&L.push({name:"alt",type:"textbox",label:"Image description"}),e.settings.image_title&&L.push({name:"title",type:"textbox",label:"Image Title"}),P&&L.push({type:"container",label:"Dimensions",layout:"flex",direction:"row",align:"center",spacing:5,items:[{name:"width",type:"textbox",maxLength:5,size:3,onchange:g,ariaLabel:"Width"},{type:"label",text:"x"},{name:"height",type:"textbox",maxLength:5,size:3,onchange:g,ariaLabel:"Height"},{name:"constrain",type:"checkbox",checked:!0,text:"Constrain proportions"}]}),L.push(N),e.settings.image_caption&&i.ceFalse&&L.push({name:"caption",type:"checkbox",label:"Caption"}),e.settings.image_advtab||e.settings.images_upload_url){var T=[{title:"General",type:"form",items:L}];if(e.settings.image_advtab&&(y&&(y.style.marginLeft&&y.style.marginRight&&y.style.marginLeft===y.style.marginRight&&(C.hspace=c.removePixelSuffix(y.style.marginLeft)),y.style.marginTop&&y.style.marginBottom&&y.style.marginTop===y.style.marginBottom&&(C.vspace=c.removePixelSuffix(y.style.marginTop)),y.style.borderWidth&&(C.border=c.removePixelSuffix(y.style.borderWidth)),C.style=e.dom.serializeStyle(e.dom.parseStyle(e.dom.getAttrib(y,"style")))),T.push({title:"Advanced",type:"form",pack:"start",items:[{label:"Style",name:"style",type:"textbox",onchange:m},{type:"form",layout:"grid",packV:"start",columns:2,padding:0,alignH:["left","right"],defaults:{type:"textbox",maxWidth:50,onchange:d},items:[{label:"Vertical space",name:"vspace"},{label:"Horizontal space",name:"hspace"},{label:"Border",name:"border"}]}]})),e.settings.images_upload_url){var k=".jpg,.jpeg,.png,.gif",R={title:"Upload",type:"form",layout:"flex",direction:"column",align:"stretch",padding:"20 20 20 20",items:[{type:"container",layout:"flex",direction:"column",align:"center",spacing:10,items:[{text:"Browse for an image",type:"browsebutton",accept:k,onchange:l},{text:"OR",type:"label"}]},{text:"Drop an image here",type:"dropzone",accept:k,height:100,onchange:l}]};T.push(R)}v=e.windowManager.open({title:"Insert/edit image",data:C,bodyType:"tabpanel",body:T,onSubmit:p})}else v=e.windowManager.open({title:"Insert/edit image",data:C,body:L,onSubmit:p})}function d(){u(g)}return{open:d}}}),r("0",["1","2","3"],function(e,t,n){return e.add("image",function(e){e.on("preInit",function(){function n(e){var t=e.attr("class");return t&&/\bimage\b/.test(t)}function i(e){return function(i){function a(t){t.attr("contenteditable",e?"true":null)}for(var r,o=i.length;o--;)r=i[o],n(r)&&(r.attr("contenteditable",e?"false":null),t.each(r.getAll("figcaption"),a),t.each(r.getAll("img"),a))}}e.parser.addNodeFilter("figure",i(!0)),e.serializer.addNodeFilter("figure",i(!1))}),e.addButton("image",{icon:"image",tooltip:"Insert/edit image",onclick:n(e).open,stateSelector:"img:not([data-mce-object],[data-mce-placeholder]),figure.image"}),e.addMenuItem("image",{icon:"image",text:"Image",onclick:n(e).open,context:"insert",prependToContext:!0}),e.addCommand("mceImage",n(e).open)}),function(){}}),i("0")()}();