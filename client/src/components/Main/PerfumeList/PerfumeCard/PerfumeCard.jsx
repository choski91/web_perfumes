import React from "react";

const PerfumeCard = ({ perfume }) => {
  return (
    <div
      style={{
        borderRadius: "8px",
        padding: "10px",
        marginBottom: "10px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
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
    </div>
  );
};

export default PerfumeCard;
