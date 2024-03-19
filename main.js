const form = document.getElementById('form-agenda');
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e){
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
  atualizaQuantContatos();
});

function adicionaLinha(){
  const inputNomeContato = document.getElementById('nome-contato');
  const inputNumeroContato = document.getElementById('numero-contato');  

  if(nomes.includes(inputNomeContato.value)){
    alert(`O contato: ${inputNomeContato.value} já foi adicionado!`);
  } else {
  nomes.push(inputNomeContato.value);
  numeros.push(inputNumeroContato.value);

  let linha = '<tr>';
  linha += `<td>${inputNomeContato.value}</td>`;
  linha += `<td>${inputNumeroContato.value}</td>`;
  linha += '</tr>';

  linhas += linha;
  }
  
  inputNomeContato.value = '';
  inputNumeroContato.value = '';
}

function atualizaTabela() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}

function atualizaQuantContatos() {
  const quantContatos = calculaQuantContatos();

  document.getElementById('quantidade-contatos').innerHTML = quantContatos;

}

function calculaQuantContatos() {
  let somaDosContatos = 0;

  for(let i = 0; i < nomes.length; i++){
    somaDosContatos = nomes.length;
  }

  return somaDosContatos;
}