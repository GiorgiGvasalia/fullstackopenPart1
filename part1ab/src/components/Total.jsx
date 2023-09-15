import React from 'react'

export default function Total(props) {

  const { parts } = props

  const allExercises = parts.reduce(( total, part) => total + part.exercises, 0)

  return (
    <div>
        <h3>Total Exercises : {allExercises}</h3>
    </div>
  )
}
