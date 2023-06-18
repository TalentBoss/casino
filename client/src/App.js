import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Characters from "./components/Characters";
import {Provider} from "react-redux";
import store from "./store";
import Landing from "./components/Landing";
import Planets from "./components/Planets";
import Spaceships from "./components/Spaceships";

const App = () => {
  useEffect(() => {

  }, []);

  return (
    <Provider store={ store } >
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/characters" element={<Characters />}></Route>
          <Route path="/planets" element={<Planets />}></Route>
          <Route path="/spaceships" element={<Spaceships />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
