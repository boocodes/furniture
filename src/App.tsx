import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {PolicyPage,
        WelcomePage
} from "./";


function App() {
  return (
      <>
          <Routes>
            <Route path={"/"} element={<WelcomePage/>}/>
            <Route path="*" element={<WelcomePage/>}/>
            <Route path={"/policy"} element={<PolicyPage/>}/>
          </Routes>
      </>
  );
}

export default App;
