import Citacao from "./components/Citacao";
import citacoes from "./data";

import {useState} from 'react';

function App() {
  const [indice, setIndice] = useState(0);

  const proximaCitacao = () => {
    setIndice((indiceAtual) => (indiceAtual + 1) % citacoes.length); // (indiceAtual + 1) adiciona +1 ao indice atual  - % citacoes.length conta o numero de indices e não deixa bugar no ultimo numero
  };

  return (
    <div className="container mt-5">
      <p>{citacoes[indice].texto}</p>
     <button className="btn btn-sucess mt-2" onClick={proximaCitacao}>Proxima citação</button>
    </div>
  )
}

export default App
