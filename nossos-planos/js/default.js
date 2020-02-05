function valor_planoRadio() {
    $(function () {
        function add_new_event() {
            var myValue = $('[name="sel_plano"]').filter(':checked').val();
            switch (myValue) {
                case '':
                    valor_total = "";
                    break;
                case '25 MEGA':
                    valor_total = "R$ 69,90";
                    break;
                case '35 MEGA':
                    valor_total = "R$ 79,90";
                    break;
                case '50 MEGA':
                    valor_total = "R$ 89,90";
                    break;
                case '100 MEGA':
                    valor_total = "R$ 99,90";
                    break;
            }

            document.getElementById('valor_totRadio').value = valor_total;
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

function valor_planoRadioEmp() {
    $(function () {
        function add_new_event() {
            var myValue = $('[name="sel_planoEmp"]').filter(':checked').val();
            switch (myValue) {
                case '':
                    valor_total = "";
                    break;
                case '25 MEGA':
                    valor_total = "R$ 69,90";
                    break;
                case '35 MEGA':
                    valor_total = "R$ 79,90";
                    break;
                case '50 MEGA':
                    valor_total = "R$ 89,90";
                    break;
                case '100 MEGA':
                    valor_total = "R$ 99,90";
                    break;
            }

            document.getElementById('valor_totRadioEmp').value = valor_total;
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

function confirmacaoRadio() {
    var resposta = confirm("Deseja assinar esse plano?");

    if (resposta == true) {
        if (document.form.nome.value == "") {
            alert("Preencha o campo NOME!");
            document.form.nome.focus();
            return false;
        }

        if (document.form.email.value == "" || document.form.email.value.indexOf('@') == -1 || document.form.email.value.indexOf('.') == -1) {
            alert("Preencha campo E-MAIL corretamente!");
            document.form.email.focus();
            return false;
        }

        if (document.form.celular.value == "" || document.form.celular.value.length < 10) {
            alert("Preencha o campo CELULAR corretamente!");
            document.form.celular.focus();
            return false;
        }

        if (document.form.endereco.value == "") {
            alert("Preencha o campo ENDEREÇO!");
            document.form.endereco.focus();
            return false;
        }

        document.form.submit();
    }

    if (resposta === false) {
        document.getElementById("form").addEventListener("click", function (event) {
            event.preventDefault();
        });
    }
}
