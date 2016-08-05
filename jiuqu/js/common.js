//scroll(function(direction,afterScrollTop) {
//		
//			if ($(document).scrollTop() == afterScrollTop) {
//				if (direction == "down") {
//					$(".header").slideUp();
//				} else if (direction == "up") {
//					$(".header").slideDown();
//				}
//			}
//		
//			
//		});
//
//		function scroll(fn) {
//			var beforeScrollTop = document.body.scrollTop, fn = fn || function() {};
//			window.addEventListener("scroll",function() {
//				var afterScrollTop = document.body.scrollTop, delta = afterScrollTop - beforeScrollTop;
//				if (delta === 0)
//					return false;
//				fn(delta > 0 ? "down" : "up",afterScrollTop);
//				beforeScrollTop = afterScrollTop;
//			}, false);
//		}
		$("#login").click(function(event){
			$(".login-mask").show();
			$("#login-frame").show();
			$("#choice-frame").hide();
			$("#frame").addClass('rotate').css("margin-top","-119px");
			setTimeout(function(){
				$("#frame").removeClass("rotate");
			},400);
		});
		$("#register,#ruzhu").click(function(event){
			$(".login-mask").show();
			$("#choice-frame").show();
			$("#login-frame").hide();
			$("#frame").addClass('rotate').css("margin-top","-119px");
			setTimeout(function(){
				$("#frame").removeClass("rotate");
			},400);
		});
		$(".masktransform").click(function(){
			$("#frame").addClass("switching");
			setTimeout(function(){
				($("#login-frame").is(':hidden'))?($("#login-frame").show()):($("#login-frame").hide());
				$("#choice-frame").is(':hidden')?$("#choice-frame").show():$("#choice-frame").hide();
				if($("#login-frame").is(':hidden')){
					$("#frame").css("margin-top","-119px");
				}
				if($("#choice-frame").is(':hidden')){
					$("#frame").css("margin-top","-119px");
				}
				
			},400);
			setTimeout(function(){
				$("#frame").removeClass("switching");
			},800);
		});
		$(".close").click(function(){
			$(".login-mask").hide();
		})
		