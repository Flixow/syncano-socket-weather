# Weather Syncano Socket

This Socket allows you to get current remperature and weather status for 3 hours in a three-hour period for specific city.

## Config
Go to `syncano/weather/socket.yml` in socket directory and set `openweathermapAppID` to your config. Visit [http://openweathermap.org/appid](http://openweathermap.org/appid) to find out how to get them.

## Endpoints
    get_actual_temperature
    
    parameters:
      city: "Oslo"
      
    response: 
        In Oslo we have -2.3℃
&nbsp;


    get_three_hours

    parameters:
        city: "Oslo"
    response:
        [
            {
                weather: 'rain',
                hour: '3pm'
            },
            {
                weather: 'clear sky',
                hour: '6pm'
            },
            {
                weather: 'clear sky',
                hour: '9pm'
            }
        ]
