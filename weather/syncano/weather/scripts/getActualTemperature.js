import axios from 'axios';

axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ARGS.city}&appid=${CONFIG.openweathermapAppID}`)
  .then((response) => response.data)
  .then((weather) => {
    const city = weather.name;
    const temperatureKelvin = weather.main.temp;
    const temperatureCelsius =  temperatureKelvin - 273.15;

    setResponse(new HttpResponse(200, `In ${city} we have ${temperatureCelsius.toFixed(1)}℃`, 'text/plain'));
  })
  .catch((error) => {
    setResponse(new HttpResponse(400, error.response.data.message, 'text/plain'));
  });
