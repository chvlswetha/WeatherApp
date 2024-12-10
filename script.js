function getWeather() {
    const apiKey = 'Your-API-Key';
    const city = document.getElementById('city').value;

    console.log("City",city);

    if (!city) {
        alert('Please enter a city');
        return;
    }
     const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching current weather data:', error);
            alert('Error fetching current weather data. Please try again.');
        });

       const histcontainer =  document.getElementById('history-container');
       histcontainer.style.display  ='block';



    fetch(forecastUrl)
        .then(response => response.json())
        .then(data => {
            displayHourlyForecast(data.list);
        })
        .catch(error => {
            console.error('Error fetching hourly forecast data:', error);
            alert('Error fetching hourly forecast data. Please try again.');
        });
}

function displayWeather(data) {
    const currweather = document.getElementById('curr-weather');
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    currweather.innerHTML = `<h3> Today's Weather </h3>`;

 

    // Clear previous content
    weatherInfoDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';
    if (data.cod === '404') {
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
    } else {
        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const windspeed = data.wind.speed;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

        const temperatureHTML = `
            <p>Temperature: ${temperature}${String.fromCharCode(176)}C</p>
        `;

        const weatherHtml = `
            <p>${description}</p>
            <p>Humidity: ${humidity} %</p>
            <p>Wind Speed: ${windspeed} km/hr</p>          
        `;

        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML = weatherHtml;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;

        showImage();
    }
}

function displayHourlyForecast(hourlyData) {
    const hourlyForecastDiv = document.getElementById('hourly-forecast');
    const hourlyheadingdiv = document.getElementById('hourly-heading');
    hourlyheadingdiv.innerHTML = `<h3> Today's Hourly Forecast </h3>`;

    const next24Hours = hourlyData.slice(0,8); 

    next24Hours.forEach(item => {
        const dateTime = new Date(item.dt * 1000); 
        const hour = dateTime.getHours();
        const temperature = Math.round(item.main.temp - 273.15);
        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

        const hourlyItemHtml = `
            <div class="hourly-item">
                <span>${hour}:00</span>
                <img src="${iconUrl}" alt="Hourly Weather Icon">
                <span>${temperature}${String.fromCharCode(176)}C</span>
            </div>
        `;

        hourlyForecastDiv.innerHTML += hourlyItemHtml;
    });
}

function showImage() {
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.style.display = 'block'; 
}

function getHistory() {

    
    const fromEl = document.getElementById('fromdt').value;
    const toEl =  document.getElementById('todt').value;
    const today = new Date();
    console.log("fromEl:",fromEl);
     console.log("toEl:",toEl);
    const city = document.getElementById('city').value;

    if(!fromEl || !toEl)
    {
        alert("Provide Date Range");
        return;
    }
    const from = new Date(fromEl);
    const to = new Date(toEl);
   /* console.log("from dt", from);
    var fromISO = from.toISOString().slice(0, 10);
    console.log("ISO FROM", fromISO);
    console.log("to dt",to);
    var toISO = to.toISOString().slice(0, 10);
    console.log("ISO to", toISO);
    console.log("today",today);
    console.log("city", city) */

  
   if(from > to)
    {
         alert("From date should be earlier");
         return;
    }
    else if(from > today || to > today)
    {
         alert("Provide date less than or equal to current date");
         return;
    }
    else if((to.getDate() - from.getDate()) >= 7)
    {
        alert("Provide date diff less than 7 days");
        return;
    }

    const hiskey = 'Your-API-Key';
    const historyUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${fromEl}/${toEl}/?key=${hiskey}`;

    const historyheader = document.getElementById('history-heading');
    historyheader.innerHTML = `<p> History Weather for : ${city} between ${fromEl} and ${toEl}</p>`;
    historyheader.innerHTML += `<p>Displaying Temperature, Humidity and WindSpeed</p>`;
   
        fetch(historyUrl)
        .then(response => response.json())
        .then(data => {
            displayHistory(data.days);
        })
        .catch(error => {
            console.error('Error fetching History weather data:', error);
            alert('Error fetching History weather data. Please try again.');
        });
}
function displayHistory(historyData) {
    alert("API success");
    const historyDiv = document.getElementById('history-div');
    historyDiv.innerHTML = '';

    historyData.forEach(item => {
        const dateTime = item.datetime; 
       /* const year = dateTime.getFullYear();
        const mon = dateTime.getMonth() + 1;
        console.log("histort=y date",dateTime);
        const dt = dateTime.getDate();
          console.log("history date3",dt);*/
        const temperature = Math.round((item.temp-32)*5/9); // Convert to Celsius
        const humidity = item.humidity;
        const windspeed = item.windspeed;

        const splitdate = dateTime.split("-");

        const historyItemHtml = `
                <div class="history-item">
                <span><b>${splitdate[1]}/${splitdate[2]}</b></span>
                <span>${temperature}${String.fromCharCode(176)}C</span>
                <span>${humidity}%</span>
                <span>${windspeed}kph</span>
            </div>
        `;
            
        historyDiv.innerHTML += historyItemHtml;
    });
}




















