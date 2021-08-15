// api key f859b5fb24cd005f0c22d5093f36217d
// api - api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// http://openweathermap.org/img/wn/${iconValue}@2x.png
let input = document.querySelector('#inputValue');
let submit = document.querySelector('#submit');
let cityName = document.querySelector('.name');
let temp = document.querySelector('.temp');
let humidity = document.querySelector('.humidity');
let wind = document.querySelector('.wind');
let desc = document.querySelector('.desc');
let icon = document.querySelector('.icon');
let loader = document.querySelector('.loader')
let nameValue;
let tempValue;
let humidityValue;
let windValue;
let descValue;
let iconValue;

window.addEventListener('load', vanish);

function vanish(){
    loader.classList.add('vanish')
}
function getValues(){

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=f859b5fb24cd005f0c22d5093f36217d')
    .then(response => response.json())
    .then(data => {
        nameValue = data['name'];
        tempValue = data['main']['temp']
        humidityValue = data['main']['humidity']
        windValue = data['wind']['speed']
        descValue = data['weather'][0]['description']
        iconValue = data['weather'][0]['icon']

        cityName.innerHTML = 'Weather in '+ nameValue;
        temp.innerHTML = tempValue+ "°C";
        humidity.innerHTML = "Humidity: "+humidityValue;
        desc.innerHTML = descValue;
        wind.innerHTML = "Wind Speed: " + windValue + "km/hr";
        icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconValue}@2x.png"></img>`;
    })
    .catch(err => alert('Wrong City Name!'))
}

submit.addEventListener('click', ()=>{
    getValues();
})

input.addEventListener('keypress', (e) =>{
    if(e.code === 'Enter'){
        getValues();
    }
})