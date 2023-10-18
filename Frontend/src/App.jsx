import React from "react";
import { Routes, Route } from "react-router-dom";
import Createbook from "./pages/Createbook";
import Ediotbook from "./pages/Ediotbook";
import Home from "./pages/Home";
import Showboook from "./pages/Showboook";
import Remove from "./pages/Remove";
import Notfound from "./pages/Notfound";
const App = () => {
  return (
    
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<Createbook />} />
        <Route path="/books/details/:id" element={<Showboook />} />
        <Route path="/books/ediot/:id" element={<Ediotbook />} />
        <Route path="/books/delete/:id" element={<Remove />} />
      </Routes>
    
  );
};

export default App;