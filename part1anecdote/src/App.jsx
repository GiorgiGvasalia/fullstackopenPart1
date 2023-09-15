import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
  const [mostVotedAnecdoteIndex, setMostVotedAnecdoteIndex] = useState(null);

  const handleRandomAnecdote = () => {
    const newIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(newIndex);
  };

  // handle vote and get most voted anecdote

  const handleVote = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
    updateMostVotedAnecdote(newPoints);
  };

  // update most voted anecdote

  const updateMostVotedAnecdote = (voteCounts) => {
    const maxVotes = Math.max(...voteCounts);
    const maxVotesIndex = voteCounts.indexOf(maxVotes);
    setMostVotedAnecdoteIndex(maxVotesIndex);
  };

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      {anecdotes[selected]} has {points[selected]} points
      <div>
        <button onClick={handleVote}>Vote</button>
        <button onClick={handleRandomAnecdote}>Next Anecdote</button>
      </div>
      <h1>Anecdote with Most Votes</h1>
      {mostVotedAnecdoteIndex !== null ? (
        <div>
          {anecdotes[mostVotedAnecdoteIndex]} has{" "}
          {points[mostVotedAnecdoteIndex]} points
        </div>
      ) : (
        <p>No votes yet</p>
      )}
    </div>
  );
};

export default App;
