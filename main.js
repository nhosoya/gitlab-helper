(function(){var t,n,e,i,o,s,a,r,l=function(t,n){return function(){return t.apply(n,arguments)}};"GitLab Community Edition"===$('meta[name="description"]').attr("content")&&(t=function(){function t(){this.bindEvents()}return t.prototype.bindEvents=function(){return key.filter=function(t){var n;return n=(t.target||t.srcElement).tagName,!("INPUT"===n||"SELECT"===n)},key("⌘+enter",function(){var t,n,e,i;return e=$(event.target||event.srcElement),i=e[0].tagName,"TEXTAREA"===i&&e.is(":focus")&&(n=e.parents("form"),t=n.find(".js-comment-button"),!t.hasClass("disabled"))?t.click():void 0})},t}(),o=new t,n=function(){function t(){this.successLoadEmojis=l(this.successLoadEmojis,this),location.pathname.split("/").length>=5&&(this.loadEmojiSource(),this.insertSmileIcon(),this.bindEvents())}return t.prototype.bindEvents=function(){var t;return t=null,$("body").on("click",".js-open-icon-pallet",function(){var n,e,i;return i=$(this),n=$(".js-pallet-backdrop"),n.show(),e=$(".js-pallet"),e.show(),e.css("top",i.offset().top+32),e.css("left",i.offset().left+18),t=$(this).parents("form")}),$("body").on("click",".js-pallet-backdrop",function(){var t;return $(this).hide(),t=$(".js-pallet"),t.hide()}),$("body").on("click",".js-pallet-icon",function(){var n,e,i;return i=t.find(".js-note-text"),i.val(i.val()+" "+$(this).data("emoji")),t.find(".js-comment-button").removeClass("disabled").removeAttr("disabled"),n=$(".js-pallet-backdrop"),n.hide(),e=$(".js-pallet"),e.hide(),i.focus()})},t.prototype.insertSmileIcon=function(){var t;return t=$("<li/>").append($("<i/>").addClass("icon-smile").attr({style:"font-size: 28px; line-height: 28px; padding: 6px; display: block; cursor: pointer;"})),t.addClass("js-open-icon-pallet"),$(".js-main-target-form").find(".nav-tabs").append(t.clone()),$(".js-new-note-form").find(".nav-tabs").append(t.clone())},t.prototype.loadEmojiSource=function(){var t,n;return t=["",location.pathname.split("/")[1],location.pathname.split("/")[2],"autocomplete_sources"].join("/"),n=[],$.ajax(t).done(this.successLoadEmojis)},t.prototype.successLoadEmojis=function(t){var n;return n=t.emojis,n.sort(function(t,n){return t.name>n.name?1:t.name<n.name?-1:0}),this.buildAndInsertPallet(n)},t.prototype.buildAndInsertPallet=function(t){var n,e;return n=$("<div/>").attr({"class":"js-pallet-backdrop",style:"z-index: 100; display:none; position:fixed; top:0; left:0; width:100%; height:120%;"}),e=$("<div/>").attr({"class":"js-pallet",style:"z-index: 200; display: none; position: absolute; width: 552px; background: #efefef; padding: 5px; border: 1px solid #ddd;"}),$.each(t,function(){var t;return t=$("<span/>").attr({"class":"js-pallet-icon",style:"cursor: pointer;"}),t.data("emoji",":"+this.name+":"),t.append($("<img/>").attr({src:this.path,"class":"emoji"})),e.append(t)}),n.appendTo("body"),e.appendTo("body")},t}(),s=new n,e=function(){function t(){this.bindEvents()}return t.prototype.bindEvents=function(){return $("#notes-list").find(".note").filter("li").each(function(){var t;return t=$(this).find(".note-text").children("p"),1!==t.length?!0:t.is(":contains(new commit)")?$(this).css({display:"none"}):!0})},t}(),a=new e,i=function(){function t(){this.bindEvents()}return t.prototype.bindEvents=function(){return $(".discussion-body").removeClass("hide")},t}(),r=new i)}).call(this);