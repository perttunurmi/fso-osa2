const Numbers = ({ persons }) => {
  return (
    persons.map((person) => {
      return <li key={person.name}> {person.name} {person.number} </li>
    })
  )
}

export default Numbers
