import Note from './components/Note'

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => // map === kuvaus
          <Note key={note.id}>
            {note}
          </Note>)}
      </ul>
    </div>
  )
}


export default App
