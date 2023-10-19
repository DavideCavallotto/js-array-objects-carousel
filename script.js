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

    console.log(imgGame)

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

const carouselCardDOMElements = document.querySelector('.carousel-card')
carouselCardDOMElements.classList.add('active')
console.log(carouselCardDOMElements)



// - recupero il bottone dal DOM
const downButtonDOMElement = document.getElementById('down-button');


downButtonDOMElement.addEventListener ('click',function () {  
    carouselCardDOMElements.classList.remove('active');         
        
})

