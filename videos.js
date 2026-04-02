
function salvarTutorial() {
    const titulo = document.getElementById('titulo-video').value;
    const arquivo = document.getElementById('arquivo-video').files[0];

    if (!titulo || !arquivo) {
        alert("Preencha o título e escolha um vídeo!");
        return;
    }

    const novoVideo = {
        titulo: titulo,
        nomeArquivo: arquivo.name
    };

    let listaVideos = JSON.parse(localStorage.getItem('meusTutoriais')) || [];
    listaVideos.push(novoVideo);
    localStorage.setItem('meusTutoriais', JSON.stringify(listaVideos));

    alert("Tutorial publicado! Mova o arquivo para a pasta 'videos/'.");
    window.location.href = "admin-upload-video.html"; // Redireciona após salvar
}


function carregarTutoriais() {
    const container = document.getElementById('lista-tutoriais');
   
   
    if (container) {
        let listaVideos = JSON.parse(localStorage.getItem('meusTutoriais')) || [];
       
        if (listaVideos.length === 0) {
            container.innerHTML = "<p>Nenhum tutorial disponível ainda.</p>";
            return;
        }

        container.innerHTML = "";

        listaVideos.forEach((video) => {
           
            container.innerHTML += `
                <div class="video-card">
                    <div class="video-thumbnail" onclick="this.querySelector('video').play(); this.querySelector('.play-button-overlay').style.display='none'">
                        <video controls style="width:100%; height:100%; object-fit:cover;">
                            <source src="videos/${video.nomeArquivo}" type="video/mp4">
                        </video>
                        <div class="play-button-overlay">
                            <span class="play-icon">▶</span>
                            <span class="duration">ASSISTIR</span>
                        </div>
                    </div>
                    <div class="video-details">
                        <h3>${video.titulo}</h3>
                        <p class="description">Tutorial exclusivo de walter xt para você sair do low para o hight.</p>
                        <span class="views">Walter xt • 2026</span>
                    </div>
                </div>
            `;
        });
    }
}

// Chamar a função de carregar sempre que a página abrir
window.addEventListener('load', carregarTutoriais);