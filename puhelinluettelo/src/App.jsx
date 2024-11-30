import { useState } from 'react'
import Phonebook from './components/Phonebook'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNewName = (event) => {
    console.log("onChange:", event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    console.log("onChange: ", event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Handle submit: ", event.target.value)

    const personObject = {
      name: newName,
      number: newNumber
    }

    persons.map((person) => person.name).includes(newName)
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(personObject))

    console.log("Lisättävä henkilö:", personObject)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const filteredPersons = persons.filter((p) => p.name
    .toLowerCase().includes(filter.toLowerCase()))

  return (
    <Phonebook filteredPersons={filteredPersons} handleFilter={handleFilter} handleNewName={handleNewName} handleNewNumber={handleNewNumber} handleSubmit={handleSubmit} />
  )
}

export default App
