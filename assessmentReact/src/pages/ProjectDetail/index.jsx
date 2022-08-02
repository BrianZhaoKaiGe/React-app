import React, { useEffect, useState, useRef, } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { connect } from 'dva'
import { nanoid } from 'nanoid';
import { Card, Tag, Tabs, Button, Space, Progress, Form, Input, Modal, message, Select } from 'antd'
import {
  SettingOutlined,
  EditOutlined,
  VerticalAlignBottomOutlined,
  SwapOutlined,
  SearchOutlined,
} from '@ant-design/icons';

import Title from '../Title'
//流程表格组件
import FlowPath from './Tables/FlowPath';
//文件表格
import FileTable from './Tables/File';
//成员表格
import MemberTable from './Tables/Member';
import './index.less';
import axios from 'axios';

const { TabPane } = Tabs;
const { Option } = Select;
function ProjectDetail(props) {
  const { dispatch, IndexPage: { list } } = props
  //流程数据
  const detailData = { ...list[0] }
// console.log('11122');
  //详情ID
  const { id } = useParams()
  //选项卡状态
  const [flag, setFlag] = useState('1')
  //邀请成员弹框选项卡状态
  const [modalFlag, setmodalFlag] = useState('1')
  //邀请成员弹框状态
  const [visible, setVisible] = useState(false)
  //获取表单数据的实例
  const [form] = Form.useForm();

  //文件排序值
  const [sortFile, setsortFile] = useState('1')
  //文件搜索值
  const [fileSearch, setFileSearch] = useState('')
  //获取详情数据
  useEffect(() => {
    if (id !== '') {
      dispatch({
        type: 'IndexPage/detail',
        payload: {
          id
        }
      })
    }
  }, [])
  //下载的文件
  const age = require('@/images/user4.jpg')

  //table切换
  function changeTable(key) {
    setFlag(key)

  }
  //邀请成员弹框选项onchanges事件 
  function modalTabs(key) {
    setmodalFlag(key)
  }
  //邀请成员
  function inviteMember() {
    setVisible(true)
  }
  //验证手机号
  function validatorPhone(_, value) {
    const reg = /^1\d{10}$/;
    return !value || reg.test(value) ? Promise.resolve() : Promise.reject('手机号码格式不正确');
  }
  //弹出框
  function hideModal(type) {
    console.log(type);
    console.log(modalFlag);
    if (type === 'ok') {
      if (modalFlag === '1') {
        form.validateFields(['email'])
          .then((res) => {
            const data = form.getFieldsValue()
            message.success(`邀请已经发送到${data.email}`)
            //邀请完清空输入框值
            setVisible(false)
            form.setFieldsValue({
              email: '',
            })
          })
          .catch((err) => {
            message.error('填写错误，请检查后重试')
          })
      } else {
        form.validateFields(['phone'])
          .then((res) => {
            const data = form.getFieldsValue()
            message.success(`邀请已经发送到${data.phone}`)
            setVisible(false)
            //邀请完清空输入框值
            form.setFieldsValue({
              phone: '',
            })
          })
          .catch((err) => {
            message.error('填写错误，请检查后重试')
          })
      }
    } else {
      setVisible(false)
    }



  }
  //文件排序选择
  function selectChange(select) {
    setsortFile(select)
  }
  //搜索文件
  function searchFile(e) {
    if (e.keyCode == 13) {
      // console.log(e.target.value);
      setFileSearch(e.target.value)
    }

  }
  return (
    <>
      <Title title={detailData.name}></Title>
      <Card className='cardTextBox'>
        <div>{detailData.name}---{detailData.addTime && detailData.addTime[0]}由blue-6创建</div>
        <div>
          {
            detailData.tags && detailData.tags.map((item) => {
              return (
                <Tag key={nanoid()} color="magenta">{item.tagMark}</Tag>
              )
            })
          }
        </div>

        <div>{detailData.desc}</div>
      </Card>
      {/* 选项卡 */}
      <Card>
        <Tabs defaultActiveKey="1" onChange={changeTable} >
          <TabPane tab="流程" key="1">
            <Button type='primary' href={`/addflowpath/${id}`} >添加流程</Button>
          </TabPane>
          <TabPane tab="文件" key="2">
            <a href={age} download className='downloadBtn' >
              <Button icon={<VerticalAlignBottomOutlined />}>
                下载
              </Button>
            </a>
            <div className='inputBox'>
              <Input placeholder="搜索文件名称" onKeyUp={(e) => { searchFile(e) }} prefix={<SearchOutlined />} />
              <SwapOutlined />
              <Select bordered={false} showArrow={false} defaultValue="文件名" style={{ width: 120 }} onChange={selectChange}>
                <Option value="1">文件名</Option>
                <Option value="2">修改时间</Option>
                <Option value="3">大小</Option>
              </Select>
            </div>
            <div className='textTip'>
              全部文件 - xxxxx文件
            </div>
          </TabPane>
          <TabPane tab="成员" key="3">
            <Button type='primary' onClick={inviteMember} >邀请成员</Button>
            <Modal
              className='memberModal'
              visible={visible}
              onOk={() => hideModal('ok')}
              onCancel={() => hideModal('cancel')}
              okText="确认"
              cancelText="取消"
            >
              <Tabs defaultActiveKey="1" onChange={modalTabs} >
                <TabPane tab="邮件邀请" key="1" className='FormDiv'>
                  <Form form={form} >
                    <Form.Item
                      name="email"
                      className='FormItem'
                      rules={[
                        { required: true, message: '邮箱不能为空' },
                        {
                          type: 'email',
                          message: '这不是一个有效的邮箱',
                        }
                      ]}
                    >
                      <Input placeholder='邮箱' className='emailInput' />
                    </Form.Item>
                  </Form>
                </TabPane>
                <TabPane tab="短信邀请" key="2" className='FormDiv' >
                  <Form form={form} >
                    <Form.Item
                      name="phone"
                      className='FormItem'

                      rules={[{ required: true, message: 'Please input your username!' }, { validator: validatorPhone }]}
                    >
                      <Input placeholder='手机号' className='emailInput' />
                    </Form.Item>
                  </Form>
                </TabPane>

              </Tabs>
            </Modal>
          </TabPane>
        </Tabs>
      </Card>
      {
        flag === "1" ? <FlowPath state={{ detailData }} /> :
          flag === '2' ? <FileTable state={{ sortFile, fileSearch }} /> :
            <MemberTable />
      }

      <div className='detailFooterBox'>
        <Button href='/'>返回</Button>
      </div>
    </>
  )
}
export default connect(
  state => state
)(ProjectDetail)