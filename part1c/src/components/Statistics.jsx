import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad,  total, average, positivePercentage}) => {




  return (
    <div>
      <h1>Statistics</h1>
      { total === 0 ? (
        <p>No feedbacks given</p>
      ) : 
      (
          <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="total" value={total} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={`${positivePercentage}%`} />
          </tbody>
        </table>
            )}
        </div>
  );
};

export default Statistics;
