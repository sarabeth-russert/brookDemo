import React from 'react'
import Header from './components/Header';
import RoomScreen from './screens/RoomScreen';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <>
      <Header/>
      <RoomScreen/>
      <Footer/>
    </>
  );
}

export default App;
