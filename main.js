(function(){var n,t,e;key.filter=function(n){var t;return t=(n.target||n.srcElement).tagName,!("INPUT"===t||"SELECT"===t)},key("⌘+enter",function(){var n,t,e,a;return e=$(event.target||event.srcElement),a=e[0].tagName,"TEXTAREA"===a&&e.is(":focus")&&(t=e.parents(".common-note-form"),n=t.find(".js-comment-button"),!n.hasClass("disabled"))?n.click():void 0}),e=function(){var n,t,e,a;return t=["",location.pathname.split("/")[1],location.pathname.split("/")[2],"autocomplete_sources"].join("/"),e=[],n=function(n){var t;return t=$("<div/>").attr({"class":"js-pallet",style:"display: none; position: absolute; width: 552px; background: #efefef; padding: 5px; border: 1px solid #ddd;"}),$.each(n,function(){var n;return n=$("<span/>").attr({"class":"js-pallet-icon",style:"cursor: pointer;"}),n.data("emoji",":"+this.name+":"),n.append($("<img/>").attr({src:this.path,"class":"emoji"})),t.append(n)}),t.appendTo("body")},a=function(t){return e=t.emojis,e.sort(function(n,t){return n.name>t.name?1:n.name<t.name?-1:0}),n(e)},$.ajax(t).done(a)},t=function(){var n;return n=$("<li/>").append($("<i/>").addClass("icon-smile").attr({style:"font-size: 28px; line-height: 28px; padding: 6px; display: block; cursor: pointer;"})),n.addClass("js-open-icon-pallet"),$(".js-main-target-form").find(".nav-tabs").append(n.clone()),$(".js-new-note-form").find(".nav-tabs").append(n.clone())},n=function(){var n;return n=null,$("body").on("click",".js-open-icon-pallet",function(t){var e;return e=$(".js-pallet"),e.show(),e.css("top",t.pageY+30),e.css("left",t.pageX),n=$(this).parents("form")}),$("body").on("click",".js-pallet-icon",function(){var t,e;return e=n.find(".js-note-text"),e.val(e.val()+$(this).data("emoji")),t=$(".js-pallet"),t.hide()})},location.pathname.split("/").length>=5&&(e(),t(),n()),$("#notes-list").find(".note").filter("li").each(function(){var n;return n=$(this).find(".note-text").children("p"),1!==n.length?!0:n.is(":contains(new commit)")?$(this).css({display:"none"}):!0}),$(".discussion-body").removeClass("hide")}).call(this);