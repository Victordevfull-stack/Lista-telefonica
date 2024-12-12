const form = document.getElementById('form-contatos');
const contatos = [];
const numeros = [];
const emails = [];
const check = [];
const id = [];
const total = `<span>Total de Contatos</span>`;
let contador = 0; // Inicializando o contador para gerar IDs únicos
let linhas = ''; // Variável para armazenar as linhas da tabela

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionalinha();   
    atualizaTabela();
});

function adicionalinha() {
    const inputCheckbox = document.getElementById('check-contato');
    const inputIdContato = [];
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');
    const inputEmailContato = document.getElementById('email-contato');
    const inputTotalContatos = document.getElementById('media-final-resultado').innerHTML =`${contador+1}`;

    // Verifica se o nome do contato já foi inserido
    if (contatos.includes(inputNomeContato.value)) {
        alert(`Este Contato: ${inputNomeContato.value} já foi inserido`);
    } else {
        // Adicionando as informações nas respectivas arrays
        check.push(inputCheckbox.checked); // Armazena se o checkbox está marcado ou não
        id.push(inputIdContato.value); // Gera um ID único ou usa o ID fornecido
        contatos.push(inputNomeContato.value); // Armazena o nome do contato
        numeros.push(inputNumeroContato.value); // Armazena o número
        emails.push(inputEmailContato.value); // Armazena o email

        // Criando a linha da tabela
        let linha = '<tr>';
        linha += `<td><input class="Checkbox" type="checkbox" ${inputCheckbox.checked ? 'checked' : ''}/></td>`;
        linha += `<td>${inputIdContato.value || gerarId()}</td>`;
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `<td>${inputEmailContato.value}</td>`;
        linha += '</tr>';

        // Adicionando a nova linha à variável `linhas`
        linhas += linha;
    }

    // Limpar os campos de entrada
    inputNomeContato.value = '';
    inputNumeroContato.value = '';
    inputEmailContato.value = '';
    inputCheckbox.checked = false; // Desmarcar o checkbox após o envio
}

function gerarId() {
    contador++; // Incrementa o contador
    return contador; // Retorna o ID baseado no índice
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas; // Atualizando o conteúdo da tabela
}

