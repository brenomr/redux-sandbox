import { useState } from "react";

export function Button() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Você {contador === 0 ? 'não clicou ainda' : clicouFunction()}.</p>
      <button onClick={(e) => setContador(contador + 1)}> Clica aí! </button>
    </div>
  );

  function clicouFunction() {
    return `clicou ${contador} vez${contador > 1 ? 'es' : ''}`;
  }
}
