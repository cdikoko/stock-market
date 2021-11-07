import React, {useContext, useEffect, useState} from "react";
import './App.css';
import RouterComponent from "./routing/RouterComponent";
import {RegistrationComponent} from "./forms/RegistrationComponent"
import NavbarComponent from "./nav/NavbarComponent";
import {Data} from './data/data'
function App() {
    const initial_data = Data

    window.localStorage.setItem("data",JSON.stringify(initial_data))



    return  <RouterComponent/>

}

export default App;
