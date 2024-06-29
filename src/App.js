import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { SideContainer } from './componets/left-side-container'; 
import { MainContainer } from './componets/main-container'
import { NavBar } from './componets/header';
import { Button } from './componets/button';

function App() {
  
  
//componets



 





  return (
    <div className="App">
      <NavBar/>
      <SideContainer  />
      
        <MainContainer/>
        
      
    </div>
  );
}

export default App;
