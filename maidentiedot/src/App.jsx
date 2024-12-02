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

const Countries = ({ countries }) => {
  if (countries.length > 0) {
    return <div> Too many matches, specify another filter </div>
  }
  return (
    countries.map(() => {
      <div> {countries[0].name.common} </div>
    }
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


  console.log(countries.filter(country => country.name.common.includes(filter)))

  const handleFilter = (event) => {
    const newFilter = event.target.value
    setFilter(newFilter)
  }

  const FilteredCountries = countries.filter(country => country.name.common.includes(filter))

  return (
    <>
      <Find value={filter} handleChange={handleFilter} text="find countries" />
      <Countries countries={FilteredCountries} />
    </>
  )
}

export default App
