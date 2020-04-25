$(function(){
	
	$(document).off("click.bs.dropdown.data-api")
	
	
		var $dropdownOpen = $("li.dropdown")
		
		$dropdownOpen.hover(function(){
			$(this).find("ul").toggle()
		},function(){
			$(this).find("ul").toggle()
			
		})
		






		//这里要给document添加这个事件
	$(document).scroll(function(){
      var scrollTop = $("html").scrollTop()+$("body").scrollTop()
    if(scrollTop>50){
          $(".navbar").addClass("animated bounceInDown ")
	}else{
		$(".navbar").removeClass("animated bounceInDown ")

	}
   
	
	} 
	
	)
	
	$('.nav').collapse('show');
	
})