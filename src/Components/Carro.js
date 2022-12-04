import styles from "./Carro.module.css"

const Carros = ({ carro }) => {
    return (
      <div className={styles.card}>
        <h1>{carro.nome}</h1>
        <p> KM: {carro.id}</p>
        <p>Marca: {carro.marca}</p>
      </div>
    );
};

export default Carros