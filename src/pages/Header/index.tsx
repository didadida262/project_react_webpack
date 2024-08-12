/*
 * @Description:
 * @Author: didadida262
 * @Date: 2024-04-23 11:12:49
 * @LastEditors: didadida262
 * @LastEditTime: 2024-05-27 11:19:32
 */

import React from 'react';
import './index.scss';
import TypeWriter from '../../components/ui/TypeWriter';

import pattern from '../../styles/pattern';

const HeaderComponent = () => {
  return (
    <div className={`HeaderComponent bg-[--bg-color] ${pattern.flexCenter}`}>
      {/* <TypeWriter text='犹豫，就会败北... --苇名一心' className={""}  /> */}
      <h1>犹豫，就会败北... --苇名一心</h1>
    </div>
  );
};

export default HeaderComponent;
