import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const [ievade, setIevade] = useState('');
  const [uzdevumi, setUzdevumi] = useState([]);

  function pievienotUzdevumu() {
    if (ievade.trim() !== '') {
      setUzdevumi([...uzdevumi, ievade]);
      setIevade('');
    }
  }

  function augstak(idx) {
    if (idx === 0) return;
    const jaunsUzdevums = [...uzdevumi];
    [jaunsUzdevums[idx - 1], jaunsUzdevums[idx]] = [jaunsUzdevums[idx], jaunsUzdevums[idx - 1]];
    setUzdevumi(jaunsUzdevums);
  }

  function zemak(idx) {
    if (idx === uzdevumi.length - 1) return;
    const jaunsUzdevums = [...uzdevumi];
    [jaunsUzdevums[idx], jaunsUzdevums[idx + 1]] = [jaunsUzdevums[idx + 1], jaunsUzdevums[idx]];
    setUzdevumi(jaunsUzdevums);
  }
  

  return (
    <>
    <h1>Plānotājs izmantojot React.jsx</h1>
    <div>
      <input
       type="text" 
       required placeholder='Ieavadi uzdevumu...' 
       value={ievade} 
       onChange={e => setIevade(e.target.value)}></input>
      <button className='pievienot-btn' onClick={pievienotUzdevumu}>Pievienot</button>
    </div>
    <div>
      <ul>
        {uzdevumi.map((uzd, idx) => (
          <li key={idx}>
            <span>{uzd}</span>
          <span className='button-group'>
            <button className='move-btn'
            onClick={() => augstak(idx)}
            disabled={idx === 0}
            style={{ marginLeft: '5px' }}
            >
              👆
            </button>
            <button
            className='move-btn'
            onClick={() => zemak(idx)}
            disabled={idx === uzdevumi.lenght - 1}
            style={{ marginLeft: '5px' }}
            >
              👇
            </button>
          </span>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
