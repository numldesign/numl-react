import React from 'react';
import './App.css';
import { NumlProvider, El } from "@numl-react/core"

function App() {
  return (
    <div>
      <NumlProvider>
        <El.H1>Helllo This is heading</El.H1>
      </NumlProvider>
    </div>
  );
}

export default App;