import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"

let LeftDiv = styled.div.attrs({
  className: 'col-3 left-panel'
})`
  background-color: #7b8c7c;
  min-height: 100vh;
  padding: 0 10px;
`
let RightDiv = styled.div.attrs({
  className: 'col-9 left-panel'

})`
  background-color: #c9d87c;
  min-height: 90vh;
  padding: 0 10px;
`


function App() {
  return (
    <div className="App container-fluid">
      <div className='row'>
        <LeftDiv> 左侧
        </LeftDiv>
        <RightDiv>
          <div
            className='videocontainer-st'
            >
            <video
              id="videoContainer"
              controls
              controlslist="nodownload"
              src=""
              width={'100%'}
              height={'100%'}
              >
            </video>
          </div>
          <div
            className='videoInfo-st'
          >
            videoInfo
          </div>

        </RightDiv>
      </div>
    </div>
  );
}

export default App;
