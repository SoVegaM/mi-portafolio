import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div className="container mt-5 text-center">
      <h1 className="text-primary">Mi Portafolio en React</h1>
      <p className="lead">¡Hola! Este proyecto está hecho con React + Bootstrap.</p>
      
      <button 
        className="btn btn-success me-2" 
        onClick={() => setContador(contador + 1)}
      >
        Clicks: {contador}
      </button>
    </div>
  );
}

export default App;