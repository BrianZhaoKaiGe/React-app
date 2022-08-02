import React from 'react'
import { Card } from 'antd';
import { Button } from 'antd';
import './index.less';
export default function Exit() {
  return (
    <>
      <Card className='exitCard'>
        <h1>
          已退出！感谢您的使用，期待下次相遇。
        </h1>
        <div>
          <Button href='/' className='goIndexBtn' type="link">去首页</Button>
        </div>
      </Card>
    </>
  )
}
