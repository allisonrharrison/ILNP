import React from 'react';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
