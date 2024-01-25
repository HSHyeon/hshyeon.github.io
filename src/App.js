import './App.css';
import {  Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import React from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path='/' element={<MainPage/>}/>
      </Routes>
      </header>
    </div>
  );
}

export default App;
