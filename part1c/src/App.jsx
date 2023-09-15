import { useEffect, useState } from "react";
import Statistics from "./components/Statistics";
import Buttons from "./components/Buttons";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  useEffect(() => {

    const total = good + neutral + bad
    const average = (good - bad) / 2 || 0
    const positivePercentage = (good / total) * 100 || 0

    setTotal(total)
    setAverage(average)
    setPositivePercentage(positivePercentage)
  }, [ good, neutral, bad])

  const onGoodReview = () => {
    setGood(good + 1);
  };

  const onNeutralReview = () => {
    setNeutral(neutral + 1);
  };

  const onBadReview = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Buttons
        onGoodReview={onGoodReview}
        onNeutralReview={onNeutralReview}
        onBadReview={onBadReview}
      />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positivePercentage={positivePercentage}/>
    </div>
  );
};

export default App;
