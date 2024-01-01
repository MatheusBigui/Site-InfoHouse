const formulario = document.getElementById('formulario');
const listaUsuarios = document.getElementById('listaUsuarios');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const usuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    adicionarUsuario(usuario);
    formulario.reset();
});