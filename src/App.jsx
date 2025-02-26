import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import SearchBar from './components/SearchBar';
import SharedCases from './components/SharedCases';
import Chat from "./components/Chat";
const App = () => {
  return (
    <div className="background">
      <Navbar />

      <div className="app">
        <main className="main-content">
          <SharedCases />
          <Chat />
          <SearchBar />
        </main>
      </div>
    </div>
  );
};

export default App;
