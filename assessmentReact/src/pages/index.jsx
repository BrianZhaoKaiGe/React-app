import React, { useEffect, useState } from 'react';
import { history } from 'umi';
import Title from './Title';
import List from './List';
import './index.less';

export default function IndexPage() {
  // const title = useState('项目列表')
  return (
    <div className='IndexPageColor'>
      <Title  title='项目列表'></Title>
      <List></List>
      {/* <a
        onClick={() => {
          history.push('/list');
        }}
      >
        我是主页
      </a> */}
    </div >
  );
}
