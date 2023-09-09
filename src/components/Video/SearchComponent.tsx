
import { Component  } from 'react';

import { InputComponent } from '../InputComponent'
import { ItemComponent } from '../ItemComponent'
import React from 'react'
import { VideoItem, IPCInfo, CateItem } from '../../utils';
import  { predealVideoName }  from '../../utils/weapons'
import PropTypes from 'prop-types'

interface SearchComponentProps {
  handleClickCateItem: any,
  categoriesList: Array<CateItem>,
  videoList: Array<VideoItem>,
  currentCateInfo: CateItem
}
interface SearchComponentState {
  hightlightStyle: object,
  style: object
}
export class SearchComponent extends Component<SearchComponentProps, SearchComponentState> {
  constructor(props: any) {
    super(props);
    this.state = {
      hightlightStyle: {
        backgroundColor: 'red'
      },
      style: {
        width: '400px',
        height: '100px',
        padding: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
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
        <div style={{ width: '100px' }}>
          <ItemComponent
            >搜索
          </ItemComponent>
        </div>
        <div style={{ width: '70%' }}>
          {/* <InputComponent
            >内容
          </InputComponent> */}
        </div>
      </div>
    )
  }
}

 
