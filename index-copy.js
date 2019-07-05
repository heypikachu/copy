$(document).ready(function(){
	var texto = "";
	var elemento = null;
	var action = null;
		
	$('.copy').mousedown(function(event){
		action = $(this); 
		
		texto = action.text();		
		elemento = document.createElement('textarea');
		
		if(event.button == 2) {
			$("div.main").show();
			$("ul.lista").css({left:event.pageX, top:event.pageY});
		}
	});
	
	$("li.copiar").click(function(){
		elemento.value = texto;
		document.body.appendChild(elemento);
		//elemento.style = {position: 'absolute', left: '-9999px'};			
		
		elemento.select();
		document.execCommand('copy');
		document.body.removeChild(elemento);
	
		//MENSAGEM EFEITO
		$('.msg').fadeIn('slow', function () {$(this).delay(750).fadeOut('slow')});		
	});
	
	$("div.main").click(function(){$(this).hide()});	
	
	$(".copy").hover(function() {
		$( this ).css({"background": "#3399ff", "color":"#FFF"});
	}, function() {
		$( this ).css({"background": "transparent", "color":"#000"});		
	});
	
});
