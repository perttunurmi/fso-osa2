const Header = ({ name }) => {
  return (<h2>{name}</h2>)
}

const Part = ({ osa }) => {
  return (
    <p>
      {osa.name} {osa.exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((osa) => {
        return (
          <Part key={osa.id} osa={osa} />
        )
      })}
    </div>
  )
}

const Total = ({ parts }) => {
  const summa = parts.reduce((summa, osa) => osa.exercises + summa, 0)
  return (
    <strong>
      total of {summa} exercises
    </strong>
  )
}

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default Course
