// src/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateForm from "./pages/CreateForm";
import ViewForm from "./pages/ViewForm";

const App = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form/create" element={<CreateForm />} />
        <Route path="/form/:id/edit" element={<CreateForm />} />
        <Route path="/form/:id" element={<ViewForm />} />
      </Routes>
    
  );
};

export default App;