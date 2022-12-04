import "./Carros.css"

const Carros = ({ id, carro, marca }) => {
    return (
      <div>
            <h3>Carro {id}</h3>
        <ul>
          <li> Nome do carro: {carro}</li>
          <li>Marca do carro: {marca}</li>
        </ul>
      </div>
    );
};

export default Carros