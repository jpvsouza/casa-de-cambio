import './style.css';

// Importa a biblioteca sweet alert para mostrar erro mais bonito
import Swal from 'sweetalert2';

const input = document.querySelector('input');
const btnPesquisar = document.querySelector('button');
const grid = document.getElementById('card-holder');

let moeda = 'USD';
let endpoint = 'https://api.exchangerate.host/latest?base=';

// Função para limpar as cotações atuais antes de fazer o fetch de uma nova moeda
const clearGrid = () => (grid.innerHTML = '');

// Adiciona um listener para mudar a moeda nova para o valor digitado
input.addEventListener('change', () => {
  moeda = input.value;
});

// Faz o fetch da moeda nova e imprime na tela
const getExchange = () => {
  clearGrid();

  fetch(endpoint + moeda).then((response) =>
    response
      .json()
      .then((data) => {
        Object.keys(data.rates).forEach((cotacao) => {
          const card = document.createElement('h6');
          card.innerText = `${cotacao} = ${data.rates[cotacao]}`;
          grid.appendChild(card);
        });
      })
  ).catch((error) => {
    Swal.fire({
      title: 'Houve o seguinte erro:',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Continue',
    });
  });
};

// Adiciona o listener ao botão de pesquisar
btnPesquisar.addEventListener('click', getExchange);
