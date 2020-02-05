$(function(){	
	
	// links para as seções
	
    var linkRes    = ("#link-residencial");
    var linkEmp    = ("#link-empresarial");

	// Seções das Abas
	var abaRes	   = $("#residencial");
	var abaEmp	   = $("#empresarial");
    
	$(abaEmp).hide();
	
    $(linkEmp).click(function(){

		$(linkRes).removeClass("ativo");
		$(linkEmp).addClass("ativo");

		$(abaRes).slideUp(500, function(){

			$(abaRes).hide();

		});

		$(abaEmp).slideDown(500);
	});
    
    $(linkRes).click(function(){

		$(linkEmp).removeClass("ativo");
		$(linkRes).addClass("ativo");

		$(abaEmp).slideUp(500, function(){

			$(abaEmp).hide();

		});

		$(abaRes).slideDown(500);

			
	});
});