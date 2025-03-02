const card = document.getElementById('card');
const btnGo = document.getElementById('btn-go');
const container = document.getElementById('container');
const pokemonName = document.getElementById('pokemonName');
const pokemonType = document.getElementById('pokemonType')

const fetchApi = async (cardName) => {
    const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${cardName}`);
    const data = await response.json();

    container.innerHTML = '';
    
    container.innerHTML = data.data.map(pokemon => {
 
        return `<div class="card">
                <img class="pokemonImage" src="${pokemon.images.large}" />
                <h1 class="pokemonName">Nome: ${pokemon.name}</h1>
                <h2 class="pokemonType">Tipo: ${pokemon.types}</h2>
            </div>`;
    }).join('');
};

btnGo.addEventListener('click', (event) => {
    event.preventDefault();
    const cardName = card.value.trim();
    fetchApi(cardName);
});
