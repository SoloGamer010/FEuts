import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
// import Main from './components/Main';
import ReservationManager from './components/ReservationManager';
import './App.css';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        <Header />
        {/* <Main /> */}
        <ReservationManager />
      </div>
    </div>
  );
}

export default App;