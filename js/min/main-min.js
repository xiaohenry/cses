$(document).on("ready",function(){var o=$(".wrapper");o.animate({opacity:1,marginTop:0},700);var t,e=$(".nav-right-collapse, .nav-right"),s=60,n=e.find("a"),r=n.map(function(){var o=$($(this).attr("href"));return o.length?o:void 0});n.on("click",function(o){var t=$(this).attr("href"),e="#"===t?0:$(t).offset().top-s+10;$("html, body").stop().animate({scrollTop:e},300),o.preventDefault()}),$(document).on("scroll",function(){var o=$(document).scrollTop();o>60?$("nav").addClass("fixed"):$("nav").removeClass("fixed")}),$(document).on("scroll",function(){var o=$(this).scrollTop()+s+25,e=r.map(function(){return $(this).offset().top<o?this:void 0});e=e[e.length-1];var i=e&&e.length?e[0].id:"";t!==i&&(t=i,n.removeClass("active"),n.filter("[href=#"+i+"]").addClass("active"))}),$(".contact-submit-btn").on("click",function(){$(this).submit()}),$(document).keyup(function(o){27===o.keyCode&&("block"===$(".subscribe-form").css("display")?$(".subscribe-close").click():$(".nav-right-hamburger, .nav-right-collapse").removeClass("on"))}),$(".subscribe-btn").on("click",function(){$(".subscribe-overlay").show(),$(".subscribe-form").show().animate({top:"30%"},200)}),$(".subscribe-overlay, .subscribe-close").on("click",function(){$(".subscribe-overlay").hide(),$(".subscribe-form").css("top","28%"),$(".subscribe-form").hide()}),$(".nav-right-hamburger, .nav-right-collapse a").on("click",function(){$(".nav-right-hamburger").toggleClass("on"),$(".nav-right-collapse").toggleClass("on")})});