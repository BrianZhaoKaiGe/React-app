import React, { useEffect, useState } from 'react';
import { Tag, Button, Table, Space, Select, Modal } from 'antd'
import {
  ExclamationCircleOutlined
} from '@ant-design/icons';

import './index.less';
import icon from '@/images/avatar.jpeg';
var dayjs = require('dayjs')

const { Option } = Select;
const { confirm } = Modal;
export default function FlowPath(props) {

  //  表格数据
  const [data, setData] = useState([
    {
      key: '1',
      name: '用户1',
      age: 32,
      blo: '1',
      time: 1642709216546
    },
    {
      key: '2',
      name: '用户2',
      age: 42,
      blo: '3',
      time: 1642707816546
    },
    {
      key: '3',
      name: '用户3',
      age: 32,
      blo: '2',
      time: 1645707216546
    },
    {
      key: '4',
      name: '用户4',
      age: 32,
      blo: '1',
      time: 1642717416549
    },
  ])
  //下拉框状态
  const [selectState, setSelectState] = useState('')
  const columns = [
    {
      title: '成员',
      dataIndex: 'name',
      key: 'name',
      render: (text) => (
        <>
          {
            <div className='userBox'>
              <div className='flowModelImgBox'><img className='flowModelImg' src={icon} alt="" /></div>
              <span className='modelTextBox'>{text}</span>
            </div>
          }
        </>
      ),
    },
    {
      title: '加入时间',
      dataIndex: 'time',
      key: 'key',
      render: (text) => (
        <>
          {dayjs(text).format('YYYY-MM-DD HH:mm:ss')}

        </>
      ),

    },
    {
      title: '权限',
      dataIndex: 'blo',
      key: 'key',
      render: (tag, record, index) => (
        <>
          <Select value={record.blo} style={{ width: 120 }} onChange={(value) => { handleChange(value, record, index) }}>
            <Option value="1">参与者</Option>
            <Option value="2">管理者</Option>
            <Option value="3">所有者</Option>
          </Select>
        </>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          {
            record.blo === '1' ? <Button type="link" onClick={() => { exitBtn(record) }} shape="circle" >退出</Button> : ''
          }
        </Space>
      ),
    },
  ];


  //下拉框选择
  function handleChange(value, record, index) {
    console.log('@@@@', index);
    if (value === '3') {
      confirm({
        icon: <ExclamationCircleOutlined />,
        content: `是否将当前项目移交给${record.name}？`,
        onOk: () => {
          const newData = data.map((item) => {
            if (item.blo === '3') item.blo = '2'
            return item
          })
          data[index].blo = '3'
          setData(newData)
        }
      });
    } else {
      if (data[index].blo === '3') {
        confirm({
          icon: <ExclamationCircleOutlined />,
          content: '项目必须有一个所有者,请指定后重试',
        })
      } else {
        data[index].blo = value
        setData(data)
      }
    }

    // console.log(record);
    // if (record.blo === '3') {
    //   confirm({
    //     icon: <ExclamationCircleOutlined />,
    //     content: '请指定一个所有者',
    //   });
    // }
    //判断所有者进行改变时





  }

  //退出
  function exitBtn(record) {
    console.log(record);
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: '退出后不可恢复，确定退出当前成员吗？',
      onOk() {
        const newData = data.filter(item => item.key !== record.key)
        setData(newData)
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  return (
    <>
      {
        <Table  columns={columns} pagination={false} dataSource={data} />
      }
    </>
  )
}
