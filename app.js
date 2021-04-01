const inputValue = document.querySelector('.inputValue');
const submitBtn = document.querySelector('.submitBtn');
const city = document.querySelector('.cityName');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');

submitBtn.addEventListener('click', () => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+
    '&appid=89bd08a2eb5a5864a0f58ba7c4ad400b')
    .then(response => response.json())
    .then(data => {
        let cityName = data['name'];
        let tempValue = data['main']['temp'];
        let descValue = data['weather'][0]['description'];

        city.innerHTML = cityName;
        temperature.innerHTML = tempValue;
        description.innerHTML = descValue;
    })

    .catch(error => console.log(error))
})