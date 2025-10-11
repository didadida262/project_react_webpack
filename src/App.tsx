import React from 'react';
import CanvasComponent from './CanvasComponent'
import BigTurntable from './BigTurntable'
import ComputerComponent from './ComputerComponent';
import './App.css';
import {ErrorBoundary} from '@/pages/ErrorBoundary'
// import './mock/mock'

function App() {
  return (
    <div className="App">
      {/* <CanvasComponent></CanvasComponent> */}
      {/* Big turntable */}
      {/* <BigTurntable></BigTurntable> */}
      <ErrorBoundary>
      <ComputerComponent uids={[124,132,139]}></ComputerComponent>

      </ErrorBoundary>
    </div>
  );
}

export default App;
