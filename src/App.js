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
const cates = [
  {
    id: 1,
    path: 'cate1'
  },
  {
    id: 2,
    path: 'cate2'
  },
  {
    id: 3,
    path: 'cate3'
  },
]
const handleClickBtn = (e) => {
  console.log('e>>', e)
}

class BtnComponent extends React.Component {
  handleClickCurrentCate = () => {
    console.log(this.props.data)
  }
  render() {
    return (
      <button
        className='style2' 
        onClick={ this.handleClickCurrentCate }
        >{ this.props.data.path }</button>
    )
  }
}

function App() {
  return (
    <div className="App container-fluid">
      <div className='row'>
        <LeftDiv>
            { cates.map((cate, index) => 
            <BtnComponent data={ cate }/>
            )}
        </LeftDiv>
        <RightDiv>
          <div
            className='videocontainer-st'
            >
            <video
              id="videoContainer"
              controls
              src=""
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
