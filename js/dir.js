angular.module("app").directive("menu", function(){
	function linkFunc(scope, elem, attrs){
		$("#options").click(function(){
			$(".optionDisp").slideDown('fast');
			$(".contact").slideUp('fast');
			$(".info").slideUp('fast');
		});
		$("#contact").click(function(){
			$(".contact").slideDown('fast');
			$(".optionDisp").slideUp('fast');
			$(".info").slideUp('fast');
		});
		$("#info").click(function(){
			$(".info").slideDown('fast');
			$(".optionDisp").slideUp('fast');
			$(".contact").slideUp('fast');
		});
		$("#mainNav").mouseleave(function(){
			$(".optionDisp").slideUp('fast');
			$(".contact").slideUp('fast');
			$(".info").slideUp('fast');
		});
		$("#rainBtn").click(function(){
			$(this).addClass('active');
			$("#whiteBtn").removeClass('active');
			$("#pinkBtn").removeClass('active');
			$("#white").slideUp(10);
			$("#pink").slideUp(10);
			$("#rain").slideDown(200);
		});
		$("#whiteBtn").click(function(){
			$(this).addClass('active');
			$("#rainBtn").removeClass('active');
			$("#pinkBtn").removeClass('active');
			$("#rain").slideUp(10);
			$("#pink").slideUp(10);
			$("#white").slideDown(300);
		});
		$("#pinkBtn").click(function(){
			$(this).addClass('active');
			$("#rainBtn").removeClass('active');
			$("#whiteBtn").removeClass('active');
			$("#rain").slideUp(10);
			$("#white").slideUp(10);
			$("#pink").slideDown(300);
		});
		$("#nCage").click(function(){
			var doCage = prompt("Are you ready?","Yes or No");
			if(doCage === "yes"){
				console.log("running cageify");
				
			}
			else if(doCage === "no"){
				console.log("not running cageify");
			}
		});
	}
	return{
		templateUrl: "../views/menu.html",
		link: linkFunc
	};
});
