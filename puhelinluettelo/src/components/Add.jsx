const Add = ({ handleNewName, handleNewNumber, handleSubmit }) => {
  return (
    <>
      <div>
        name: <input onChange={handleNewName} />
      </div>
      <div>
        number: <input onChange={handleNewNumber} />
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>add</button>
      </div>
    </>
  )
}

export default Add
