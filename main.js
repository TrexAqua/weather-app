const cityInput = document.getElementById('search_weather_input')
const searchButton = document.getElementById('search_weather_button')
const weatherImage = document.getElementsByClassName('weather_indicator')
const weatherTemp = document.getElementById('weather_info_temp')
const weatherCity = document.getElementById('weather_info_city')
const humidity = document.getElementById('weather_humid_info_humidity')
const windSpeed = document.getElementById('weather_humid_info_wind')

var weather;

const getData = async (city) => {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96cbdd6967a056ecd52d0dbefad2bf26&units=metric`).then((response) => response.json())
    weatherData = {
        temp: data.main.temp,
        city: city,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        state: data.weather[0].main
    }
    weather = weatherData
}

const data = searchButton.addEventListener('click', async(e)=>{
    e.preventDefault()
    cityName = cityInput.value
    await getData(cityName)
    console.log(weather)
    weatherCity.textContent = weather.city
    weatherTemp.textContent = `${Math.round(weather.temp)}℃`
    humidity.textContent = `${Math.round(weather.humidity)}%`
    windSpeed.textContent = `${weather.windSpeed} Km/h`
    if(weather.state === 'Clouds'){
        weatherImage[0].src = 'images/clouds.png'
    } else if(weather.state === 'Mist'){
        weatherImage[0].src = 'images/mist.png'
    } else if(weather.state === 'Clear'){
        weatherImage[0].src = 'images/clear.png'
    }else if(weather.state === 'Drizzle'){
        weatherImage[0].src = 'images/drizzle.png'
    }else if(weather.state === 'Rain'){
        weatherImage[0].src = 'images/rain.png'
    }
})



