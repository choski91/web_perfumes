import React, { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    // Datos de ejemplo para registrar un usuario
    const newUser = {
      username: "ejemplo",
      password: "123456",
      email: "ejemplo@mail.com"
    };

    fetch("http://localhost:3000/api/users/register", {
      method: "POST", // Cambiar a POST
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser) // Enviar datos en formato JSON
    })
      .then((res) => res.json())
      .then((data) => console.log("Respuesta del backend:", data))
      .catch((err) => console.error("Error de conexión:", err));
  }, []);

  return <div>Main</div>;
};

export default Main;
