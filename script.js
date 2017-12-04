var paragraphe = $(".paragraphe");
var quote = $("blockquote");


$(document).ready(function(){
	$(paragraphe).hide();
    $(quote).click(function(){
        $(this).next().slideToggle("slow");
    });
});