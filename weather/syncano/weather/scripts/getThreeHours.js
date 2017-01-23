import axios from 'axios';

axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${ARGS.city}&appid=${CONFIG.openweathermapAppID}`)
  .then((response) => response.data)
  .then((weather) => {
    const threeHoursWeather = weather.list.slice(0, 3); // A three-hour period
    const weathers = threeHoursWeather.map((status) => {
      const date = new Date(status.dt * 1000);
      const dateHour = date.toLocaleString('en-US', { hour: "numeric" });
      
      return { weather: status.weather[0].description, hour: dateHour };
   });

    setResponse(new HttpResponse(200, JSON.stringify(weathers)));
  })
  .catch((error) => {
    setResponse(new HttpResponse(400, `Error: ${error.response.data.message}`, 'text/plain'));
  });
