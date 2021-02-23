$(function(){
	$('button').bind('click',function(){
		var altura=$('#altura').val();
		var peso=$('#peso').val();
		
		altura= altura.replace(',','.');
		peso= peso.replace(',','.');

		//IMC=peso+altura²
		var imc= peso/(altura*altura);
		if(imc<16){
			var traducao =' baixo peso muito grave';
		}else if(imc>=16 && imc<16.99){
			var traducao = 'Baixo peso grave';
		}else if(imc>=17 && imc>18){

		}

		$('resultado').html("Seu IMC é: "+imc+" kg/m²");

	});
});