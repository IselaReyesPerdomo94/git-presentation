import React, {useState} from 'react';

function Switch() {
  const [isOn, setIsOn] = useState(false);
  const handleOnClick = () => setIsOn(!isOn);
  const ballColor = isOn ? 'white' : 'black';

  return(
  <section style={{
    display: 'flex',
    backgroundColor: '#27292A',
    justifyContent: 'space-around',
    height: '50vh',
    width: '100%',
    padding: '2rem',
  }}>
    <label>
      <input type='checkbox' onChange={handleOnClick} />
      Encender
    </label>
    <div>
      <span style={{
        height: '10rem',
        width: '10rem',
        borderRadius: '100%',
        display: 'block',
        border: '1px solid black',
        backgroundColor: ballColor,
      }}></span>
      <p>{isOn ? 'Esta encendido' : 'Esta apagado'}</p>
    </div>
    </section>
  );
}

export default Switch;
