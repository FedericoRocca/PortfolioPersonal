function validarDataDeContacto() {
    var nombre = document.forms["contacto"]["nombre"].value;
    if( nombre == null || nombre == "" )
    {
        alert("¡No ingresaste tu nombre! ¿Como voy a saber cómo te llamas?");
        return;
    }

    var mail = document.forms["contacto"]["mail"].value;
    if( mail == null || mail == "" )
    {
        alert("¡No ingresaste tu E-Mail! ¿Como voy a saber donde contestarte?");
        return;
    }

    var texto = document.forms["contacto"]["textoAmplio"].value;
    if( texto == null || texto == "" )
    {
        alert("¡No ingresaste tus comentarios! ¿Como voy a saber que me queres decir?");
        return;
    }
}