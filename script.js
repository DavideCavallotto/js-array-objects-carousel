// - creo un Array di oggetti contenente immagini, titolo e testo

const images = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: 'img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: 'img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: 'img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
]


const carouselDOMElement = document.querySelector('.container-carousel')

images.forEach((img, index, array) => {
    const imgGame = img.image
    const imgTitle = img.title
    const imgText = img.text
   

    const html = `  
    <div class="carousel-card">   
        <img src="${imgGame}">    
        <div class="description">
            <h1>
              ${imgTitle}
            </h1>
            <p>
                ${imgText}
            </p>
        </div>
    </div>
    
    `    
    carouselDOMElement.innerHTML += html    
})

let indexCarouselCard = 0;

const carouselCardDOMElements = document.querySelectorAll('.carousel-card')
carouselCardDOMElements[indexCarouselCard].classList.add('active')


// - recupero il bottone dal DOM
const downButtonDOMElement = document.getElementById('down-button');


downButtonDOMElement.addEventListener ('click',function () {  

    indexCarouselCard = showNextCarouselCard(carouselCardDOMElements, indexCarouselCard)
    console.log()
})

const upButtonDOMElement = document.getElementById('up-button');

upButtonDOMElement.addEventListener ('click',function () {  
    
    indexCarouselCard = showPreviousCarouselCard(carouselCardDOMElements, indexCarouselCard)
    

})


function showNextCarouselCard(carouselCardDOMElements, indexCarouselCard) {
    // Rimuove la classe 'active' dal carousel card corrente
    carouselCardDOMElements[indexCarouselCard].classList.remove('active');

    // Incrementa l'indice del carousel card
    indexCarouselCard++;

    // Verifica se l'indice supera la lunghezza del carouselCardDOMElements
    if (indexCarouselCard >= carouselCardDOMElements.length) {
        // Se sì, resetta l'indice a 0
        indexCarouselCard = 0;
    }

    // Aggiunge la classe 'active' al prossimo carousel card
    carouselCardDOMElements[indexCarouselCard].classList.add('active');

    // Restituisce il nuovo indice per l'uso successivo, se necessario
    return indexCarouselCard;
}

function showPreviousCarouselCard(carouselCardDOMElements, indexCarouselCard) {
    // Rimuove la classe 'active' dal carousel card corrente
    carouselCardDOMElements[indexCarouselCard].classList.remove('active');

    // Decrementa l'indice del carousel card
    indexCarouselCard--;

    // Verifica se l'indice è inferiore a 0
    if (indexCarouselCard < 0) {
        // Se sì, resetta l'indice al numero massimo di carousel cards
        indexCarouselCard = carouselCardDOMElements.length - 1;
    }

    // Aggiunge la classe 'active' al carousel card precedente
    carouselCardDOMElements[indexCarouselCard].classList.add('active');

    // Restituisce il nuovo indice per l'uso successivo, se necessario
    return indexCarouselCard;
}

const autoPlayDOMElement = document.getElementById('auto-play');
let interval3S;
autoPlayDOMElement.addEventListener('click', function (){   
     interval3S = setInterval(() => {
        console.log(indexCarouselCard);
        indexCarouselCard = showNextCarouselCard(carouselCardDOMElements, indexCarouselCard);
    }, 3000);
    
})

const stopDOMElement = document.getElementById('stop-btn')

stopDOMElement.addEventListener('click', function () {    
    clearInterval(interval3S)
})