import './App.css';
import Carros from './Components/Carros';

function App() {
  const carros = [
    { id: 1, nome: "Uno", marca: "Fiat" },
    { id: 2, nome: "Audi", marca: "Wolks" },
    { id: 3, nome: "Gol", marca: "Wolks" },
    { id: 4, nome: "Renegade", marca: "Jeep" },
  ];
  return (<div>
    <h1>Challenge css</h1>
    <h2>carros</h2>
      {carros.map((carro) => (
        <Carros id={carro.id} carro={carro.nome} marca={carro.marca} />
      ))}
    </div>
  );
}

export default App;
