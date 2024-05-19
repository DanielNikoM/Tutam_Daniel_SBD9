import { Outlet, ScrollRestoration } from "react-router-dom"
import React, {useEffect, useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
