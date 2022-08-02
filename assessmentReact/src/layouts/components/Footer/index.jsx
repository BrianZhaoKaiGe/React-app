import React from 'react';
import style from './index.less'
import {
  CopyrightOutlined
} from '@ant-design/icons';

import footer from '../../../images/footer.png'
import './index.less'

export default () => {
  return (
    <div className='footerText'>
      Copyright
      <span className={style.footerIcon}><CopyrightOutlined /></span>
      2017-2020,I-Sanger Inc. All Rights Reserved . 沪ICP备14033599号-1 生工云计算
    </div>
  );
};
