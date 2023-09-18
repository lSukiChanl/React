import { useState, useEffect } from "react";

function App() {

  const [Enabled, setEnabled] = useState(false);
  const [Position, setPosition] = useState({ x: -20, y: -20 });

  useEffect(() => {
    console.log('Efecto', { Enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (Enabled) window.addEventListener('pointermove', handleMove)

    return () => {
      window.removeEventListener('pointermove', handleMove)
      setPosition({ x: -20, y: -20 });
    }

  }, [Enabled]);

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '2px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${Position.x}px, ${Position.y}px)`
      }} />
      <button onClick={() => { setEnabled(!Enabled); }}>  {Enabled ? 'Desactivar' : 'Activar'} </button>
    </main>
  );
}

export default App;