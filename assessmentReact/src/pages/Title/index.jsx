import React from 'react'
import { Card } from 'antd';
import './index.less';

export default function Title(props) {
  // console.log(props);

  return (
    <div>
      <Card ><b>{props.title}</b></Card>
    </div>
  )
}
