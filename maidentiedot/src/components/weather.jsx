const Weather = ({ weather, changeWeather, country }) => {
  if (weather === null) {
    changeWeather()
  }

  if (weather !== null) {
    return (
      <>
        <h2>Weather in {weather.name}</h2>
        <div>temperature {(weather.main.temp - 273.15).toFixed(2)} Celcius </div>
        <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather icon" width={"100px"} />
        <div>wind {weather.wind.speed} m/s</div>
      </>
    )
  }
}

export default Weather
