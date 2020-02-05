function confirmacao() {
     var resposta = confirm("Deseja enviar a mensagem?");

     if (resposta == true) {
        if(document.form.nome.value==""){
            alert( "Preencha o campo NOME!" );
            document.form.nome.focus();
            return false;
        }
         
        if(document.form.celular.value=="" || document.form.celular.value.length < 15){
            alert( "Preencha o campo CELULAR corretamente!" );
            document.form.celular.focus();
            return false;
        }
          document.form.submit();
     }

     if(resposta === false) {
        document.getElementById("ligar").addEventListener("click", function(event){
            event.preventDefault();
        });
     }
}