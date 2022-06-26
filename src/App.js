import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Api from "./Components/Api";
import Home from "./Components/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Api" element={<Api />}></Route>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}