import React, { useState, useEffect } from "react";
import Search from "./Search";
import PerfumeCard from "./PerfumeCard";
import axios from "axios";

const PerfumeList = () => {
  const [perfumes, setPerfumes] = useState([]);

  //  obtenengo perfumes desde el back

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
      <Search onSearch={fetchPerfumes} />

      <div>
        {perfumes.length > 0 ? (
          perfumes.map((p) => <PerfumeCard key={p.id} perfume={p} />)
        ) : (
          <p>No se encontraron perfumes</p>
        )}
      </div>
    </div>
  );
};

export default PerfumeList;
