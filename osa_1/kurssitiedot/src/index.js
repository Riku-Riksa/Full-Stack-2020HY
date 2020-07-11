import React from 'react'
import ReactDOM from 'react-dom'



const App = () => {
  const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map(items => (
        <p>{items.name} {items.exercises}</p>
      ))}
      <div>
      Total number of excercises: {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}
      </div>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))

//Kokeile forEeach looppia excersises totalille