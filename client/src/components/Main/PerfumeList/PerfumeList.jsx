import React, { useState, useEffect } from "react";
import Search from "./Search";
import PerfumeCard from "./PerfumeCard";
import axios from "axios"; //para hacer peticiones http

const PerfumeList = () => {
  const [perfumes, setPerfumes] = useState([]);
  //perfumes guarda la lista de perfumes que se obtiene del back
  //set actualiza la lista

  //mi función p/obtener perfumes
const fetchPerfumes = async (searchTerm = "") => {
  try {
    const res = await axios.get("http://localhost:3000/api/perfumes", {
      //  axios hace la query string auto
      params: searchTerm ? { search: searchTerm } : { search:""}
    });

    // en axios la respuesta ya la tengo en JSON en res.data
    setPerfumes(res.data);
  } catch (err) {
    console.error("Error fetching perfumes:", err);
    setPerfumes([]); // vacía la lista si falla
  }
};

  useEffect(() => {
    fetchPerfumes(); // carga inicial
  }, []);

  return (
    <div>
      {/* le paso a search onSearch por props */}
      {/* se renderiza Search y se le pasa fetchPerfumes como onSearch. 
      permite q haga filtrados y actualice la lista de perfumes
      Se recorre la lista perfumes para mostrar un PerfumeCard por cada perfume. */}

      <Search onSearch={fetchPerfumes} /> 
      <section className="cards-container">
        {perfumes.length > 0 ? (
          perfumes.map((p) => <PerfumeCard key={p.id} perfume={p} />)
        ) : (
          <p>No se encontraron perfumes</p>
        )}
      </section>
    </div>
  );
};

export default PerfumeList;
