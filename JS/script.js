const form = document.getElementById('form');
const listaMetas = document.getElementById('lista-metas');
const erro = document.querySelector('.erro');

function criarMeta(nome, descricao, prioridade, data) {
    const li = document.createElement('li');

    li.classList.add(prioridade); // prioridade é 1, 2 ou 3

    li.innerHTML = `
        <div class= "lista-resultado">
        <h4>META:</h4>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Descrição:</strong> ${descricao}</p>
        <p><strong>Prioridade:</strong> ${prioridade}</p>
        <p><strong>Data:</strong> ${data}</p>
        </div>
        <button class="meta-btn btn-concluir">Concluir</button>
        <button class="meta-btn btn-remover">Remover</button>
    `;

    // Botão concluir
    li.querySelector('.btn-concluir').addEventListener('click', (e) => {

        li.classList.toggle('concluida');

        e.currentTarget.remove();

        const btnRemover = li.querySelector('.btn-remover');
        if (btnRemover) {
            btnRemover.remove();
        }
    });

    // Botão remover
    li.querySelector('.btn-remover').addEventListener('click', () => {
        li.remove();

    });

    listaMetas.appendChild(li);
}

// Ao enviar o formulário
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = form.querySelector('input[type="text"]').value;
    const descricao = document.getElementById('descricao').value;
    const prioridade = form.querySelector('select').value;
    const data = form.querySelector('input[type="date"]').value;

    if (!nome || !descricao || !prioridade || !data) {
        erro.textContent = "Preencha todos os campos!";
        return;
    }

    erro.textContent = "";

    criarMeta(nome, descricao, prioridade, data);

    form.reset();
});