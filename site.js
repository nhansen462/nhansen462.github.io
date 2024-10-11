// Welcome Message Assignment
const hours = new Date().getHours();

const isMorning = hours >= 4 && hours < 12; //morning check
const isAfternoon = hours >= 12 && hours < 17; //afternoon check
const isEvening = hours >= 17 || hours < 4;

const welcomeMessage = document.querySelector('#welcome h3');

if(isMorning){
    welcomeMessage.textContent = 'Good Morning!';
}else if(isAfternoon){
    welcomeMessage.textContent = 'Good Afternoon!';
}else if(isEvening){
    welcomeMessage.textContent = 'Good Evening!';
}else{
    welcomeMessage.textContent = 'Good Day!';
}

// Secret Message Assignment
localStorage.setItem('It\'s a secret to everybody.', 'There are as many truths to the world as there are people to tell them. Find the truth that speaks to you.');


// Carousel Assignment
const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')


let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

function advanceImages(){
    showImages()
    currentImage++;
    if(currentImage === 5){currentImage = 0}
}

function reverseImages(){
    showImages()
    currentImage--;
    if(currentImage === 0){currentImage = 4}
}

showImages()
setInterval(() => advanceImages(), 5000)

next.addEventListener('click', () => advanceImages())
prev.addEventListener('click', () => reverseImages())