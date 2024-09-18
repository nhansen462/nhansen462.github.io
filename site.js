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