import React from 'react';

import git from '../assets/git.png';

function ControlVersion() {
  return(
  <section style={{
    padding: '2rem',
  }}>
    <header style={{
      marginRight: '1rem',
    }}>
      <h2 style={{
      fontSize: '4rem',
      color: '#FF729F',
      textAlign: 'center',
    }}>¿Qué es un control de versiones?</h2>
    </header>
    <article style={{
      display: 'flex',
    }}>
    <ul style={{
      padding: '0 5rem',
    }}>
      <li>Software que administra proyectos.</li>
      <li>Guarda y maneja todos los <strong>cambios realizados</strong> por los colaboradores del proyecto.</li>
    </ul>
    <figure style={{
      width: '40%',
      backgroundColor: 'white',
      padding: '1rem',
    }}>
    <img src={git} style={{
        width: '100%',
      }} alt='gif'/>
    </figure>
    </article>
    </section>
  )
};

export default ControlVersion;