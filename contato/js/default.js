function valor_planoRadio() {
    $(function () {
        function add_new_event() {
            var myValueP2 = $('[name="perg-2"]').filter(':checked').val();
            var myValueP3 = $('[name="perg-3"]').filter(':checked').val();
            var myValue = $('[name="toggle"]').filter(':checked').val();
            
            if(myValueP2 == 'nao' && myValueP3 == 'nao'){
                plano_recomendado = '50 MEGA';
                // $('.valor').html('<p id="valor_tot_recomendado">R$<strong>79</strong>,90/mês</p>')
                $('.valor').html('<p id="valor_tot_recomendado">Sob-consulta</p>')
            }
            else if(myValueP2 == 'sim' && myValueP3 == 'nao'){
                plano_recomendado = '100 MEGA';
                // $('.valor').html('<p id="valor_tot_recomendado">R$<strong>79</strong>,90/mês</p>')
                $('.valor').html('<p id="valor_tot_recomendado">Sob-consulta</p>')
            }
            else if(myValueP2 == 'nao' && myValueP3 == 'sim'){
                plano_recomendado = '100 MEGA';
                // $('.valor').html('<p id="valor_tot_recomendado">R$<strong>79</strong>,90/mês</p>')
                $('.valor').html('<p id="valor_tot_recomendado">Sob-consulta</p>')
            }
            else if(myValueP2 == 'sim' && myValueP3 == 'sim'){
                plano_recomendado = '200 MEGA';
                // $('.valor').html('<p id="valor_tot_recomendado">R$<strong>79</strong>,90/mês</p>')
                $('.valor').html('<p id="valor_tot_recomendado">Sob-consulta</p>')
            }

            switch (myValue) {
                case '':
                    valor_total = "";
                    break;
                case '20 MEGA':
                    plano_recomendado = '20 MEGA';
                    // $('.valor').html('<p id="valor_tot_recomendado">R$<strong>19</strong>,90/mês</p>')
                    $('.valor').html('<p id="valor_tot_recomendado">Sob-consulta</p>')
                    $('.change').html('Plano escolhido por você:')
                    break;
                case '30 MEGA':
                    plano_recomendado = '30 MEGA';
                    // $('.valor').html('<p id="valor_tot_recomendado">R$<strong>19</strong>,90/mês</p>')
                    $('.valor').html('<p id="valor_tot_recomendado">Sob-consulta</p>')
                    $('.change').html('Plano escolhido por você:')
                    break;
                case '50 MEGA':
                    plano_recomendado = '50 MEGA';
                    // $('.valor').html('<p id="valor_tot_recomendado">R$<strong>19</strong>,90/mês</p>')
                    $('.valor').html('<p id="valor_tot_recomendado">Sob-consulta</p>')
                    $('.change').html('Plano escolhido por você:')
                    break;
            }

            document.getElementById('plano_ideal').value = plano_recomendado;
        }

        $('input').on('change', function () {
            add_new_event();
            $('label').removeClass('opt');
        });
        $('label').on('click', function(){
            $('label').removeClass('active');
            $(this).addClass('active');
        });
    });
}

function confirmacao() {
    var resposta = confirm("Deseja assinar esse plano?");

    if (resposta == true) {
        if (document.formPlanos.nome.value == "") {
            alert("Preencha o campo NOME!");
            document.formPlanos.nome.focus();
            return false;
        }

        if (document.formPlanos.celular.value == "" || document.formPlanos.celular.value.length < 10) {
            alert("Preencha o campo CELULAR corretamente!");
            document.formSuporte.celular.focus();
            return false;
        }

        if (document.formPlanos.endereco.value == "") {
            alert("Preencha o campo ENDEREÇO!");
            document.formPlanos.endereco.focus();
            return false;
        }

        document.formPlanos.submit();
    }

    if (resposta === false) {
        document.getElementById("formulario").addEventListener("click", function (event) {
            event.preventDefault();
        });
    }
}

function confirmacaoSuporte() {
    var resposta = confirm("Deseja assinar esse plano?");

    if (resposta == true) {
        if (document.formSuporte.nome.value == "") {
            alert("Preencha o campo NOME!");
            document.formSuporte.nome.focus();
            return false;
        }

        if (document.formSuporte.celular.value == "" || document.formSuporte.celular.value.length < 10) {
            alert("Preencha o campo CELULAR corretamente!");
            document.formSuporte.celular.focus();
            return false;
        }

        if (document.formSuporte.endereco.value == "") {
            alert("Preencha o campo ENDEREÇO!");
            document.form.endereco.focus();
            return false;
        }

        document.formSuporte.submit();
    }

    if (resposta === false) {
        document.getElementById("formulario").addEventListener("click", function (event) {
            event.preventDefault();
        });
    }
}
