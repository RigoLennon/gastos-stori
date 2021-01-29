import React, {useState} from 'react'
import Header from '../components/comunes/Header';
import NavBar from '../components/comunes/Navbar';
import GastosFijos from '../components/GastosFijos';
import Cards from '../components/comunes/Cards';


function index(){

  return(
    <div>
      <Header />
      <NavBar />
      <Cards />
    </div>
  );
}

export default index