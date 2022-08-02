import React, { useEffect, useState } from 'react';
import { Tag, Button, Table, Space, Progress, Modal, Form, Input, message, Popover } from 'antd'
import {
  SettingOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  PlayCircleOutlined,
  PauseCircleOutlined
} from '@ant-design/icons';
import { nanoid } from 'nanoid';

import axios from 'axios'
import './index.less';
import icon from '@/images/avatar.jpeg';

const { TextArea } = Input;
//定时器
let times = '';
//修改流程名称的Id
let flowNameId = ''
export default function FlowPath(props) {
  const { dispatch, state: { detailData: { flowpath } } } = props
  // console.log('333333', props.state.detailData.id);
  //表格数据
  const [data, setData] = useState([])
  //进度条开关
  const [paly, setpaly] = useState(true)
  //流程修改弹框状态
  const [visible, setVisible] = useState(false)
  //获取表单数据的实例
  const [form] = Form.useForm();
  //接收父组件传递的值，如果没有使用默认数据
  useEffect(() => {
    if (flowpath !== '') {
      setData(flowpath)
    } else {
      setData(defaultData)
    }
  }, [flowpath])

  const defaultData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ]
  const columns = [
    {
      title: '流程',
      dataIndex: 'flowName' || 'name',
      key: 'flowName' || 'name',
      width: '600px',
      render: (text, record) => (
        <>

          <div>{record.flowName}<EditOutlined onClick={() => { editFlow(record) }} /></div>
          <div className='flowDescBox'>{record.desc}</div>

          <Modal
            title="修改流程"
            visible={visible}
            onOk={() => { editFlowName('ok', record) }}
            onCancel={() => { editFlowName('canle') }}
            okText="确认"
            cancelText="取消"
            className='flowBox'
          >
            <Form form={form} >
              <Form.Item
                name="name"
                className='FormItem'
                rules={[
                  { required: true, message: '项目名称不能为空' },

                ]}
              >
                <Input placeholder='项目名称' allowClear className='nameInput' />
              </Form.Item>
              <Form.Item
                name="nameDesc"
                className='FormItem'
                rules={[
                  { required: true, message: '项目描述不能为空' },
                ]}
              >
                {/* <Input placeholder='项目描述' allowClear className='nameDescInput' /> */}
                <TextArea placeholder="项目描述" allowClear className='nameDescInput' />

              </Form.Item>
            </Form>
          </Modal>
        </>

      ),
    },
    {
      title: '进度',
      dataIndex: 'progress' || 'age',
      key: 'progress' || 'age',
      width: '260px',
      render: (tag, record, index) => (
        <>
          <div>
            <span> <Progress percent={tag} size="small" status={record.progress === 100 ? '' : 'active'} /></span>
            <span className='palyBtn'>
              {
                data[index].progressflag ? <Button onClick={() => progressBtn(record, index, 'stop')} type="primary" icon={<PauseCircleOutlined />} shape="circle"></Button> :
                  data[index].progressflag === '' ? '' : <Button onClick={() => progressBtn(record, index, 'paly')} type="primary" icon={<PlayCircleOutlined />} shape="circle"></Button>
              }
            </span>
          </div>
        </>
      ),
    },
    {
      title: '流程模型',
      dataIndex: 'flowMedal' || 'address',
      key: 'flowMedal' || 'address',
      render: (flowMedal) => (
        <>
          {
            flowMedal && flowMedal.map((item) => {
              return (
                <div key={nanoid()}>
                  <div className='flowModelImgBox'><img className='flowModelImg' src={item.imgUrl} alt="" /></div>
                  <div className='modelTextBox'>{item.medelName}</div>
                  <div> <span className='modelTag'><Tag color="green">v{item.tag}</Tag></span></div>
                </div>
              )
            })
          }
        </>
      ),
    },
    {
      title: '参数',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags, record) => (
        <>
          {
            <Popover placement="top" title='参数' content={() =>
              <div>
                <p>流程：{record.flowName}</p>
                <p className='flowDesc'>描述：{record.desc}</p>
                <p>模型: &nbsp;&nbsp;{record.flowMedal && record.flowMedal[0].medelName}</p>
              </div>
            } trigger="click">
              <Button type="link" shape="circle" icon={<SettingOutlined />} />
            </Popover>

          }
        </>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="link" shape="circle" onClick={() => { deleteFlow(record) }} >删除</Button>
          <Button type="link" shape="circle" onClick={interaction} >交互分析</Button>
        </Space>
      ),
    },
  ];
  //点击修改
  function editFlow(record) {
    form.setFieldsValue({
      name: record.flowName,
      nameDesc: record.desc,
    })
    flowNameId = record.id
    setVisible(true)
  }
  //修改流程名称
  function editFlowName(type, record) {

    form.validateFields()
      //验证通过
      .then((res) => {
        if (type === 'ok') {
          const { name, nameDesc } = form.getFieldsValue()
          axios.get('/flowname', {
            data: {
              name,
              nameDesc,
              id: flowNameId,
              projectId: props.state.detailData.id
            }
          })
            //   //请求结果
            .then((result) => {
              // console.log('awqeq', result);
              setData(result.data.data)
              message.success('修改成功')
            }).catch((err) => {

            });
          setVisible(false)
        } else {
          setVisible(false)
        }
      }).catch((err) => {
        message.error('填写错误，请检查后重试')
      });

  }
  //删除流程
  function deleteFlow(record) {
    Modal.confirm({
      title: '删除后不可恢复，确定删除当前流程吗？',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        const delData = data.filter((item) => item.id !== record.id)
        setData(delData)
      },
      onCancel() {
      },
    });

  }
  //交互分析
  function interaction() {
    message.warning('功能尚未开通，请关注后续版本')
  }
  //进度条
  function progressBtn(record, index, type) {
    let newflowData = [...data]
    newflowData[index].progressflag = true
    // console.log(newflowData[index].progressflag);
    if (type === 'paly') {
      newflowData.progressflag = true
      times = setInterval(() => {
        if (data[index].progress === 100) {
          newflowData[index].progressflag = ''
          const finallyData = JSON.parse(JSON.stringify(newflowData))
          setData(finallyData)
          clearInterval(times)
          return
        }
        newflowData = [...data]
        newflowData.progress = true
        newflowData[index].progress += 10
        setData(newflowData)
      }, 200);
    } else {
      clearInterval(times)
      newflowData[index].progressflag = false
      setData(newflowData)
    }




  }
  return (
    <>
      {
        <Table rowKey="id" columns={columns} pagination={false} dataSource={data} />
      }
    </>
  )
}
