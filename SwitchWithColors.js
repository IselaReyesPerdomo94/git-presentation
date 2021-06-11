import React, {useState} from 'react';

function SwitchWithColors() {
  const [isOn, setIsOn] = useState(false);
  const handleOnClick = () => setIsOn(!isOn);
  const ballColor = isOn ? '#FFFFE8' : '#141515';
  const boxShadow = isOn ? '0px 0px 15px 12px rgba(255,252,204,0.6)' : '';
  return(
  <section style={{
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#27292A',
    justifyContent: 'space-around',
    height: '50vh',
    width: '100%',
    padding: '2rem',
  }}>
    <label style={{
      position: 'relative',
      display: 'inline-block',
      width: '60px',
      height: '34px',
    }}>
      <input type='checkbox' onChange={handleOnClick} style={{
        opacity: 0,
        width: 0,
        height: 0,
      }}/>
      <span style={{
        position: 'absolute',
        cursor: 'pointer',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: isOn ? '#FF0A58': '#FFC2D5',
        borderRadius: '1rem',
        padding: '0.35rem',
      }}>
        <span style={{
          backgroundColor: 'white',
          height: '1.5rem',
          width: '1.5rem',
          borderRadius: '100%',
          display: 'block',
          marginBottom: '2px',
          transition: 'transform 0.4s',
          transform: isOn ? 'translateX(26px)': 'translateX(0px)',
        }}></span>
      </span>
    </label>
    <div style={{
      width: '250px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <span style={{
        height: '10rem',
        width: '10rem',
        borderRadius: '100%',
        display: 'block',
        backgroundColor: ballColor,
        boxShadow,
      }}></span>
      <p>{isOn ? 'Esta encendido' : 'Esta apagado'}</p>
    </div>
    </section>
  );
}

export default SwitchWithColors;