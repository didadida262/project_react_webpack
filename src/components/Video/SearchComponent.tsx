
import { Component  } from 'react';

import { InputComponent } from '../InputComponent'
import { ItemComponent } from '../ItemComponent'
import React from 'react'
import { VideoItem, IPCInfo, CateItem } from '../../utils';
import  { predealVideoName }  from '../../utils/weapons'
import PropTypes from 'prop-types'
// import  { Input } from 'element-react'
import {Button, Input, Divider, Breadcrumb  } from 'antd' //引入按钮组件
import { ZoomInOutlined } from '@ant-design/icons';
interface SearchComponentProps {
  handleClickCateItem: any,
  categoriesList: Array<CateItem>,
  videoList: Array<VideoItem>,
  currentCateInfo: CateItem,
  filterVideoList: any
}
interface SearchComponentState {
  hightlightStyle: object,
  style: object,
  searchItem: string
}
export class SearchComponent extends Component<SearchComponentProps, SearchComponentState> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchItem: 'asdasd',
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
  handleSearch = (event: any) => {
    const target = event.target.value
    console.log('target>>>', target)
    this.props.filterVideoList(target)
    // 将事件传出去
    
  }

  componentDidMount(): void {
  }

  render(): React.ReactNode {
    return  (
      <div style={this.state.style}>
        <div style={{ width: '100px' }}>
          <Button
            onClick={() => this.search}
            >搜索
          </Button>
        </div>
        <div style={{ width: '70%' }}>
        <Input onChange={ this.handleSearch } prefix={<ZoomInOutlined />}/>
        </div>
      </div>
    )
  }
}

 
