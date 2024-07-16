import Citacao from "./components/Citacao.jsx";
import citacoes from "./data";

import {useState} from 'react';

function App() {
  const [indice, setIndice] = useState(0);

  const proximaCitacao = () => {
    setIndice((indiceAtual) => (indiceAtual + 1) % citacoes.length); // (indiceAtual + 1) adiciona +1 ao indice atual  - % citacoes.length conta o numero de indices e não deixa bugar no ultimo numero
  };

  return (
    <div className="container mt-5">
      <Citacao texto={citacoes[indice].texto} autor={citacoes[indice].autor}/>

     <button className="btn btn-primary mr-1" onClick={proximaCitacao}>Proxima citação</button>
    </div>
  )
}

export default App
