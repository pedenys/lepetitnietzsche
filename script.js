var paragraphe = $(".paragraphe");
var quote = $("blockquote");


$(document).ready(function(){
	$(paragraphe).hide();
    $(quote).click(function(){
        $(this).next().slideToggle("slow");
        if ($(this).next().is(":visible")){
        	$('html, body').animate({
        scrollTop: $(this).position().top
    }, 500);
        } 
    });

});