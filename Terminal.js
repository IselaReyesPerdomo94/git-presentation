import React from 'react';

function Terminal({text, height, color}){
  return(
  <textarea style={{
    backgroundColor: 'black',
    color: color,
    width: '900px',
    height: height,
    fontSize: '1.5rem',
  }} value={text} />)
};

export default Terminal;