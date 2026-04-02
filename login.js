// ==========================================
// 3. LÓGICA DE LOGIN DO ADMINISTRADOR
// ==========================================
function fazerLoginAdmin() {
    const emailDigitado = document.getElementById('email-admin').value;
    const senhaDigitada = document.getElementById('senha-admin').value;

    // Dados fixos que tu definiste
    const emailCorreto = "chefunguev@gmail.com";
    const senhaCorreta = "787899@gmail.com";

    if (emailDigitado === emailCorreto && senhaDigitada === senhaCorreta) {
        alert("Acesso Concedido, Chefe!");
        // Redireciona para a página de gestão de produtos
        window.location.href = "admin-produtos.html";
    } else {
        alert("Email ou Senha incorretos! Acesso negado.");
    }
}

// ==========================================
// 4. LÓGICA DE LOGIN DO USUÁRIO (GUARDAR DADOS)
// ==========================================
function cadastrarUsuario() {
    const emailUser = document.getElementById('email-user').value;
    const senhaUser = document.getElementById('senha-user').value;

    if (emailUser === "" || senhaUser === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // Guarda os dados do usuário no LocalStorage
    localStorage.setItem('usuarioEmail', emailUser);
    localStorage.setItem('usuarioSenha', senhaUser);

    alert("Conta de usuário criada com sucesso!");
    // Redireciona para a página de produtos (index)
    window.location.href = "home.html";
}