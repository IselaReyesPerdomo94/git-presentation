import React from 'react';

function Terminal({text, color}){
  return(
  <p style={{
    backgroundColor: 'black',
    color: color,
    width: '900px',
    fontSize: '1.5rem',
    padding: '0.5rem',
    border: '1px solid white',
    margin: 0,
  }}>{text}</p>)
};

export default Terminal;