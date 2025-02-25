import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import SearchBar from './components/SearchBar';
import SharedCases from './components/SharedCases';

const App = () => {
  return (
    <div className="background">
      <Navbar />

      <div className="app">
        <main className="main-content">
          <SharedCases />
          <SearchBar />
        </main>
      </div>
    </div>
  );
};

export default App;
