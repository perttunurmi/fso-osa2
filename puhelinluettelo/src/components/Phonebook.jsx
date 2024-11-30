import Numbers from './Number'
import Filter from './Filter'
import Add from './Add'

const Phonebook = ({ filteredPersons, handleFilter, handleNewName, handleNewNumber, handleSubmit }) => {
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />
      <h2>add a new</h2>
      <form>
        <Add handleNewName={handleNewName} handleNewNumber={handleNewNumber} handleSubmit={handleSubmit} />
      </form>
      <h2>Numbers</h2>
      <Numbers persons={filteredPersons} />
    </div>
  )
}

export default Phonebook
