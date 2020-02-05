$(function(){	
	
	// links para as seções
	
	var linkModal   = (".desce-modal");
	var linkModalEmp   = (".desce-modalEmp");
	var linkFechar = (".fechar");

	// Seções das Abas
	var abaModal = $("#modal");
	var abaRes = $(".residencial-Plan")
	var abaEmp = $(".empresarial-Plan")
    
	$(abaModal).hide();
	$(abaRes).hide();
	$(abaEmp).hide();
    


	$(linkModal).click(function(){

		$(abaModal).show(50);
		$(abaRes).show(50);

	});

	$(linkModalEmp).click(function(){

		$(abaModal).show(50);
		$(abaEmp).show(50);

	});

	$(linkFechar).click(function(){
        $('body,html').animate({
            scrollTop: 250
        }, 700);
        
		$(abaForm).slideUp(500, function(){

			$(abaForm).hide();

        });
    });
	
});