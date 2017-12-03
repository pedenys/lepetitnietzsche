var paragraphe = $(".paragraphe");
var h2 = $(".titre");

$(document).ready(function(){
	$(paragraphe).hide();
    $(h2).click(function(){
        $(this).next().slideToggle();
        
    });
});