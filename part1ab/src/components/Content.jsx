import React from 'react';
import Part from './Part';

export default function Content(props) {
  const { parts } = props;

  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} name={part.name} exercise={part.exercises} /> // Corrected "exercise" property name
      ))}
    </div>
  );
}

