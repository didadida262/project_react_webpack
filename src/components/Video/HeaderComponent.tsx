
import { Component  } from 'react';

import { ItemComponent } from '../ItemComponent'
import React from 'react'
import { VideoItem, predealVideoName, IPCInfo, CateItem } from '../../utils';
import PropTypes from 'prop-types'

interface HeaderComponentProps {
  handleClickCateItem: any,
  categoriesList: Array<CateItem>,
  videoList: Array<VideoItem>
}
interface HeaderComponentState {
  style: object
}
export class HeaderComponent extends Component<HeaderComponentProps, HeaderComponentState> {
  constructor(props: any) {
    super(props);
    this.state = {
      style: {
        width: '400px',
        height: '200px',
        padding: '5px',
        overflow: 'scroll'
      }
    }
  }


  handleClickCate = (e: any, data: CateItem) => {
    this.props.handleClickCateItem(data)
  }

  componentDidMount(): void {
  }

  render(): React.ReactNode {
    return  (
      <div style={this.state.style}>
          { this.props.categoriesList.map((cate: CateItem, index: number) => {
              return (
                  <ItemComponent key={ index } onClick={ (e) => this.handleClickCate(e, cate) }>{ cate.name}</ItemComponent>
              )
          })}
      </div>
    )
  }
}

 
