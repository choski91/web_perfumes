import React, { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => console.log("Respuesta del backend:", data))
      .catch((err) => console.error("Error de conexión:", err));
  }, []);

  return <div>Main</div>;
};

export default Main;
