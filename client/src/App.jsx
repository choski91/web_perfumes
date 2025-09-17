import React from "react";
import PerfumeList from "./components/main/PerfumeList"; 

// import Header from './components/Header/Header'
// import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <h1>Jazmín App</h1>
      <h2>Buscador de Perfumes</h2>
      {/* <Main /> */}
      <PerfumeList />
      <Footer />
    </div>
  );
}

export default App;
