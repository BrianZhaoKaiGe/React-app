import { history } from 'umi';
import React, { useEffect, useState } from 'react';
import { connect } from 'dva'
import { nanoid } from 'nanoid'
import {
  Card,
  Button,
  DatePicker,
  Space,
  Input,
  Table,
  Tag,
  Badge,
  Modal
} from 'antd';

import {
  PlusOutlined,
  SearchOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';


import '../../../mock/index.js'
import './index.less';


const { RangePicker } = DatePicker;


function IndexPage(props) {
  const { dispatch } = props

  //初始值
  const [data, setData] = useState([])
  const [searchValue, setSearchValue] = useState('')

  //监听数据props.IndexPage.list，数据回来赋值
  useEffect(() => {
    if (props.IndexPage.list.length) setData(props.IndexPage.list)
  }, [props.IndexPage.list])

  //派发请求数据的action
  useEffect(() => {
    dispatch({
      type: 'IndexPage/getdata'
    })
  }, [])
  const columns = [
    {
      title: '项目',
      dataIndex: 'name',
      render: (text, record) => {
        return (
          <Space direction='vertical' onClick={() => { history.push(`/projectdetail/${record.id}`) }}  >
            <a className='alinkStyle'> {record.name}</a>
            <a className='vice-alinkStyle' > {record.assistant}</a>
          </Space>
        )
      }
    },
    {
      title: '描述',
      dataIndex: 'desc',
      key: 'id',
    },
    {
      title: '状态',
      dataIndex: 'flag',
      key: 'id',
      render: (flag) => (
        <>
          {
            flag ?
              <div><Badge status="success" /><span>已完成</span> </div> :
              <div><Badge status="default" /><span>未完成</span> </div>
          }
        </>
      ),
    },
    {
      title: '标签',
      key: 'id',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map((tag) => {
            let tagColor = tag.tagMark.length > 25 ? 'oneColor' : 'twoColor';
            if (tag.sign) {
              return (
                <div key={nanoid()}>
                  <Tag className={tagColor} >
                    {tag.tagMark}
                  </Tag>
                </div>
              );
            }

          })}
        </>
      ),
    },
    {
      title: '操作',
      key: 'id',
      dataIndex: 'delete',
      render: (text, record) => (
        <>
          <Button type="link" className='actionStyle' onClick={() => deleteRow(record.id)} >删除</Button>
          <Button type="link" className='actionStyle' href={`/addeditproject/${record.id}`}>修改</Button>
        </>
      ),
    },
  ]

  //获取输入框的值
  function onchangeSearch(Value) {
    setSearchValue(Value)
  }
  //搜索方法
  function searchBtn() {
    const newData = data.filter(item => item.name === searchValue)
    setData(newData)

  }
  //删除方法
  function deleteRow(id) {
    Modal.confirm({
      icon: <ExclamationCircleOutlined />,
      content: '删除后将不可恢复，确定删除当前项目吗？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        dispatch({
          type: 'IndexPage/delete',
          payload: id
        });
      }
    });

  }

  return (
    <div>
      {/* 新建，搜索 */}
      <Card >
        <Button type="primary" href={`/addeditproject`} icon={<PlusOutlined />} >新建</Button>
        <div className='inputRight'>
          <Input placeholder="项目名称" onChange={(e) => onchangeSearch(e.target.value)} />
          <Space direction="vertical" size={12}>
            <RangePicker />
          </Space>
          <Button type="primary" onClick={searchBtn} className='searchBtn' icon={<SearchOutlined />} ></Button>
        </div>
      </Card>
      {/* 表格 */}
      <Table rowKey="id" columns={columns}
        pagination={
          {
            total: data.length,
            size: "small",
            showTotal: (total, range) => `第${range[0]}-${range[1]} 条/总共 ${total} 条`,
            defaultPageSize: 10,
            defaultCurrent: 1,
            showSizeChanger: true
          }
        }
        dataSource={data} />
    </div>
  );
}


export default connect(
  state => state
)(IndexPage)