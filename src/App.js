import React from "react";
import './App.css';
import RouterComponent from "./routing/RouterComponent";
import {Data} from './data/data'
import { writeToCache } from "./common/cache";

function App() {
    const initial_data = Data

    writeToCache('data', initial_data)

    return  <RouterComponent/>

}

export default App;
