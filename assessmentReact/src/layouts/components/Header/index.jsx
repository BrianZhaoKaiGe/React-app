import React from 'react';
import style from './index.less';


import { Menu, Dropdown, Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons'
import logo from '../../../images/logo.png';
import avatar from '../../../images/avatar.jpeg';


const menu = (
  <Menu className={style.menuExit} >
    <Menu.Item  key={1}>
      <div>
        <Button className={style.exitBtn} href='/exit' icon={<PoweroffOutlined />}>退出</Button>
      </div>
    </Menu.Item>
  </Menu>
);

export default () => {
  return (
    <div className={style.headerBgd}>
      <div className={style.headerLeft}>
        <span><img className={style.img} src={logo} alt="" /></span>
      </div>
      <Dropdown overlayClassName='menuExit' overlay={menu} placement="bottomLeft" arrow>
        <div className={style.headerRight} >
          <span ><img src={avatar} className={style.imgSize} alt="" /></span>
          <span className={style.headerRightText} >blue-6</span>
        </div>
      </Dropdown>

    </div>
  )
};
