import React from 'react';
import CanvasComponent from './CanvasComponent'
import BigTurntable from './BigTurntable'
import TemplateReact from './TemplateReact';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <CanvasComponent></CanvasComponent> */}
      {/* Big turntable */}
      {/* <BigTurntable></BigTurntable> */}
      <TemplateReact uids={[124,132,139]}></TemplateReact>
      
    </div>
  );
}

export default App;
