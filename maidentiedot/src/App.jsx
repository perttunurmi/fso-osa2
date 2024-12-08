import { useEffect, useState } from 'react'
import axios from 'axios'
import Countries from './components/countries'
import Find from './components/find'
const api_key = import.meta.env.VITE_SOME_KEY


function App() {
  const [countries, setCountries] = useState(null)
  const [filter, setFilter] = useState("")
  const [weather, setWeather] = useState(null)
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then(response => {
        setCountries(response.data)
        console.log(response.data)
      })
  }, [])

  useEffect(() => {
    if (countries != null) {
      setFilteredCountries(countries.filter(country =>
        country.name.common.toLowerCase()
          .includes(filter.toLowerCase())))
    }
  }, [filter], [countries])

  useEffect(() => {
    if (countries != null) {
      console.log(filteredCountries)
      if (filteredCountries.length === 1 && filteredCountries[0].capital[0] !== weather.name || weather == null) {
        changeWeather()
      }
    }
  }, [filteredCountries])

  if (!countries) { return null; }

  const handleFilter = (event) => {
    const newFilter = event.target.value
    setFilter(newFilter)
  }

  const showNew = (e) => {
    setFilter(e.target.parentNode.firstChild.data)
  }

  const changeWeather = () => {
    const capital = filteredCountries[0].capital
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}`)
      .then(response => {
        setWeather(response.data)
        console.log(response.data)
      })
  }

  return (
    <>
      <Find value={filter} handleChange={handleFilter} text="find countries" />
      <Countries countries={filteredCountries} onChange={showNew} weather={weather} changeWeather={changeWeather} />
    </>
  )
}

export default App
