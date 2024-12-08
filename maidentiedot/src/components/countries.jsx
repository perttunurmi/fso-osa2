import Kielet from './kielet'
import Weather from './weather'

const Countries = ({ countries, onChange, weather, changeWeather }) => {
  if (countries.length > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  }

  if (countries.length > 1) {
    return (
      countries.map(country =>
        <div key={country.name.common} onClick={onChange}>
          {country.name.common} <button>show</button >
        </div>
      )
    )
  }

  return (
    countries.map(country =>
      <div key={country.name.common}>
        <h2>{country.name.common}</h2>
        <div>capital {country.capital}</div>
        <div>area {country.area}</div>
        <h3>languages:</h3>
        <Kielet kielet={country.languages} />
        <img src={country.flags.svg} alt={`${country.name.common} lippu`} width={"150px"} />
        <Weather weather={weather} changeWeather={changeWeather} country={country} />
      </div>
    )
  )

}

export default Countries
