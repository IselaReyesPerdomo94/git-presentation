import React from 'react';

import iselasPicture from '../assets/image.jpg';

function Greeting() {
  return(
  <section style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <header style={{
      marginRight: '1rem',
    }}>
      <h1 style={{
      fontSize: '4rem',
      color: '#FF729F',
    }}>¿Git qué? Lo básico.</h1>
      <h3>Por Isela Reyes Perdomo</h3>
      <p>Linkedin: /iselareyesperdomo/</p>
    </header>
    <figure style={{
        width: '30%',
        margin: 0,
      }}>
      <img src={iselasPicture} alt='Isela-Reyes' style={{
        width: '100%',
      }}/>
    </figure>
    </section>
  )
};

export default Greeting;