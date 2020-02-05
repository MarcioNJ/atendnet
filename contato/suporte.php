<?php

require'../phpmailer/PHPMailerAutoload.php';
require'../phpmailer/class.phpmailer.php';

$mailer = new PHPMailer;

//$mailer->SMTPDebug = 2;                               // Enable verbose debug output

$mailer->isSMTP();                                      // Set mailer to use SMTP

$mailer->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);

$nome = $_POST['nomeSuporte'];
$email = $_POST['emailSuporte'];
$telefone = $_POST['telefoneSuporte'];
$celular = $_POST['celularSuporte'];
$assunto = $_POST['assuntoSuporte'];
$cidade= $_POST['cidadeSuporte'];
$mensagem= $_POST['mensagemSuporte'];

$mailer->Host = 'pleskl0048.hospedagemdesites.ws';
$mailer->SMTPAuth = true;                               // Enable SMTP authentication
$mailer->IsSMTP();
$mailer->isHTML(true);                                  // Set email format to HTML
$mailer->Port = 587;

// Ativar condição utf-8, para acentuação
$mailer->CharSet = 'UTF-8';

$mailer->Username = 'noreply@clickslim.com.br';                 // SMTP username
$mailer->Password = 'click1521';                   // SMTP password
// email do destinatario 
$address = "atendimento@atendnet.net.br";  

//$mailer->SMTPDebug = 1;
$corpoMSG = "<P>FALE CONOSCO > ATENDNET FIBRA</P>
<p><b>Nome:</b> $nome
<p><b>E-mail:</b> $email
<p><b>Telefone:</b> $telefone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Celular:</b> $celular
<p><b>Assunto:</b> $assunto &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Cidade:</b> $cidade
<p><b>Mensagem:</b> $mensagem
</p>
<hr>";

$mailer->AddAddress($address, "Fale Conosco - AtendNet Fibra");
//$mailer->AddAddress("conta@gmail.com", "destinatario 2"); // 2º destinatário se querer enviar, se não, comente com //
$mailer->From = 'noreply@clickslim.com.br';
$mailer->Sender = 'noreply@clickslim.com.br';
$mailer->FromName ='Fale Conosco - AtendNet Fibra'; // Seu nome
// assunto da mensagem
$mailer->Subject = "Fale Conosco - AtendNet Fibra";
// corpo da mensagem
$mailer->MsgHTML($corpoMSG);
// anexar arquivo
//$mailer->AddAttachment($arquivo['tmp_name'], $arquivo['name']  );

if(!$mailer->Send()) {
   echo "Erro: " . $mailer->ErrorInfo;
  } else {
    echo "<script>alert('E-MAIL ENVIADO COM SUCESSO!!');</script>";
    echo "<script>location.href='index.html'</script>";
  }

?>
