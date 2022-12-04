import './App.css';
import Carro from './Components/Carro';

function App() {
  const carros = [
    { id: 1, nome: "Uno", marca: "Fiat" },
    { id: 2, nome: "Audi", marca: "Wolks" },
    { id: 3, nome: "Gol", marca: "Wolks" },
    { id: 4, nome: "Renegade", marca: "Jeep" },
  ];
  return (
    <div className="App">
      <h1>Showroom de carros</h1>
      <div className="car-container">
        {carros.map((carro) => (
          <Carro carro={carro}  />
        ))}
      </div>
    </div>
  );
}

export default App;
