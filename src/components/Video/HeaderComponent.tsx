
import { useState } from 'react';
import { Button } from '../Button'
import React from 'react'
import { predealVideoName } from '../../utils';
import { IPCInfo } from '../../utils';


export class HeaderComponent extends React.Component {
  state = {
    style: {
      width: '250px',
      height: '200px',
      padding: '5px',
      overflow: 'scroll'
    }
  }
  handleClickCate = (e, data) => {
    this.props.handleClickCateItem(data)
  }

  componentDidMount(): void {
  }

  render(): React.ReactNode {
    return  (
      <div style={this.state.style}>
          { this.props.categoriesList.map((cate, index) => {
              return (
                  <Button key={ index } onClick={ (e) => this.handleClickCate(e, cate) }>{ cate.name}</Button>
              )
          })}
      </div>
    )
  }
}
 
