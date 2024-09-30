
function randomAlbum() {
    const cle = Array.from(albums.keys());
    const cleRandom = keys[Math.floor(Math.random() * cle.length)];
    return albums.get(cleRandom);
}

function albumCarte() {
    const album = randomAlbum();

    const card = document.querySelector("#album-cards-container .card");

    if (card && album) {
        card.querySelector('.card-title').textContent = album.titre;

        const cardTexts = card.querySelectorAll('.card-text');
        cardTexts[0].textContent = `Numéro: ${album.numero}`;
        cardTexts[1].textContent = `Prix: ${album.prix} €`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    albumCarte();
});