import React from "react";

const PerfumeCard = ({ perfume }) => {
  return (
    <article className="card-style"
    >
      <img
        src={perfume.foto}
        alt={perfume.nombre}
       />
      <div>
        <h3>{perfume.nombre}</h3>
        <p>Marca: {perfume.marca}</p>
        <p>Puntuación: {perfume.puntuacion}</p>
        <p>Etiqueta: {perfume.etiqueta}</p>
      </div>
    </article>
  );
};

export default PerfumeCard;
