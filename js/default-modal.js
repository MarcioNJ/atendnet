$(function(){	
	
	// links para as seções
	
	var linkModal   = (".desce-modal");
	var linkFechar = (".fechar");

	// Seções das Abas
	var abaModal = $("#modal");
    
	$(abaModal).hide();
    


	$(linkModal).click(function(){

		$(abaModal).show(50);

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