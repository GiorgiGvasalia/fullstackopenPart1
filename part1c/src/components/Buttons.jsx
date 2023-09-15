import React from 'react'

const Buttons = ({onGoodReview, onNeutralReview, onBadReview}) => {

 


  return (
    <div>
        <button onClick={onGoodReview}>good</button>
        <button onClick={onNeutralReview}>neutral</button>
        <button onClick={onBadReview}>bad</button>
    </div>
  )
}

export default Buttons