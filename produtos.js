function cadastrarProduto() {
    const nomeInput = document.getElementById('nome-produto');
    const precoInput = document.getElementById('preco-produto');
    const fotoInput = document.getElementById('foto-produto');

    // Verifica se os campos foram preenchidos
    if (nomeInput.value === "" || precoInput.value === "") {
        alert("Por favor, preencha o nome e o preço!");
        return;
    }

   
    const novoItem = {
        nome: nomeInput.value,
        preco: precoInput.value,
        imagem: fotoInput.files.length > 0 ? fotoInput.files[0].name : "placeholder.jpg"
    };

   
    let listaProdutos = JSON.parse(localStorage.getItem('meusProdutos')) || [];

    
    listaProdutos.push(novoItem);

   
    localStorage.setItem('meusProdutos', JSON.stringify(listaProdutos));

    alert("Produto cadastrado com sucesso!");
   
    
    nomeInput.value = "";
    precoInput.value = "";
}

window.onload = function() {

    const container = document.getElementById('lista-produtos-container');

    if (container) {
       
        const listaProdutos = JSON.parse(localStorage.getItem('meusProdutos')) || [];
    
        if (listaProdutos.length === 0) {
            container.innerHTML = "<h3>Nenhum produto disponível.</h3>";
        } else {
            container.innerHTML = "";
    
            listaProdutos.forEach(produto => {
                container.innerHTML += `
                <article class="produto-card">
                    <div class="produto-imagem-box">
                        <img src="imagens/${produto.imagem}" alt="${produto.nome}">
                    </div>
                   
                    <div class="produto-info">
                        <h3>${produto.nome}</h3>
                       
                        <div class="tags">
                            <span>Novo</span>
                            <span>Original</span>
                        </div>

                        <p>Qualidade garantida e entrega rápida. Aproveite nossas ofertas exclusivas.</p>
                       
                        <div class="card-footer">
                            <div class="preco-container">
                                <span>PREÇO</span>
                                <div class="preco">${produto.preco} MT</div>
                            </div>
                            <button class="btn-comprar">Add to cart</button>
                        </div>
                    </div>
                </article>
                `;
            });
        }
    }
}