$(".x-notif").click(function(e){
	e.preventDefault()
	$((".x-notif-menu")).toggle()
})

var xwidth = $(window).width()
if(xwidth <= 768){
	$("#sidebar").addClass("offcanvas offcanvas-start")
	$("#sidebar").removeClass("x-toggle-content")
}else{
	$("#sidebar").removeClass("offcanvas offcanvas-start")
	$("#sidebar").addClass("x-toggle-content")
}

$(window).resize(function(){
	var xwidth = $(window).width()
	if(xwidth <= 768){
		$("#sidebar").addClass("offcanvas offcanvas-start")
		$("#sidebar").attr("tabindex='-1'")
		$("#sidebar-toggle, #sidebar-toggle-icon").attr("data-bs-toggle", "offcanvas")
		$("#sidebar-toggle, #sidebar-toggle-icon").attr("data-bs-target", "#sidebar")
		$("#sidebar").css("visibility", "hidden")
		$("#sidebar").removeClass("x-toggle-content")
		$("#sidebar").show()
	}else{
		$("#sidebar").removeClass("offcanvas offcanvas-start")
		$("#sidebar").removeAttr("tabindex")
		$("#sidebar").removeAttr("aria-hidden")
		$("#sidebar").css("visibility", "visible")
		$("#sidebar-toggle, #sidebar-toggle-icon").removeAttr("data-bs-toggle")
		$("#sidebar-toggle, #sidebar-toggle-icon").removeAttr("data-bs-target")
		$("#sidebar").addClass("x-toggle-content")
	}
})

$("#sidebar-toggle").click(function(){
	$(".x-toggle-content").toggle()
})