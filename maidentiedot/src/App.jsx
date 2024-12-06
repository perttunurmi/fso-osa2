import { useEffect, useState } from 'react'
import axios from 'axios'

const Find = ({ value, handleChange, text }) => {
  return (
    <>
      <label>{text} </label>
      <input type="text" value={value} onChange={handleChange} />
    </>
  )
}

const Kielet = ({ kielet }) => {
  const lista = Object.keys(kielet).map(kieli =>
    <li key={kieli}>{kielet[kieli]}</li>
  )

  return (
    <ul>
      {lista}
    </ul>
  )
}

const Countries = ({ countries, onChange }) => {
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
      </div>
    )
  )
}

function App() {
  const [countries, setCountries] = useState(null)
  const [filter, setFilter] = useState("")

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then(response => {
        setCountries(response.data)
        console.log(response.data)
      })
  }, [])

  if (!countries) { return null; }

  const handleFilter = (event) => {
    const newFilter = event.target.value
    setFilter(newFilter)
  }

  const showNew = (e) => {
    console.log(e)
  }

  const FilteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))

  return (
    <>
      <Find value={filter} handleChange={handleFilter} text="find countries" />
      <Countries countries={FilteredCountries} onChange={showNew} />
    </>
  )
}

export default App
