import React from "react";
import { Route, Routes } from "react-router";
import "./App.scss";
import Header from "./components/Header";
import Home from "./screens/Home";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
