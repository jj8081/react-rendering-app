import React from 'react';
import './App.css';
import {Root} from "./json_to_ts_interfaces"
import FetchDataDisplay from "./FetchData";


function App() { 
  //  fetchData();
  return (    
    <div className="App">
            <h1>Table</h1>
            <FetchDataDisplay />
        </div>
  );
}

export default App;
