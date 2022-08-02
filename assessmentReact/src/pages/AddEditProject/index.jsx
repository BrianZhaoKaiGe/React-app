import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { connect } from 'dva'
import axios from 'axios';
import {
  Card,
  Form,
  Input,
  Select,
  DatePicker,
  Tag,
  Modal,
  Button,
  message
} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { nanoid } from 'nanoid';
var dayjs = require('dayjs')
const { RangePicker } = DatePicker;
import Title from '../Title'
import './index.less';
import AddFlowPath from '../AddFlowPath';
import moment from 'moment';

function AddProject(props) {
  let { id } = useParams()
  const { dispatch } = props
  let history = useHistory();
  //获取表单数据的实例
  const [form] = Form.useForm();
  const [tagData, setData] = useState([
    { sign: false, tagMark: '真核转录组 Eukaryotic transcriptome' },
    { sign: false, tagMark: '宏转录组 Metatranscriptome' },
    { sign: false, tagMark: '真菌基因组 Fugus genome' },
    { sign: false, tagMark: '外显子 Exome' },
    { sign: false, tagMark: '简化基因组 RAD' },
    { sign: false, tagMark: '宏基因组 Metagenome' },
    { sign: false, tagMark: '微生物基因组 Microbial genome' },
    { sign: false, tagMark: '重测序 Resequencing' },
    { sign: false, tagMark: '原核转录组 Prokaryotic transcriptome' },
    { sign: false, tagMark: '小RNA MicroRNA' },
    { sign: false, tagMark: '动植物基因组 Eukaryotic genome' },
    { sign: false, tagMark: '微生物多样性 Microbial diversity' },
    { sign: false, tagMark: '表现遗传学 Epigenetics' },
  ])
  useEffect(() => {
    //获取点击修改的数据
    if (id) {

      axios.get('/editdata', {
        data: {
          id
        }
      })
        .then((res) => {
          const result = res.data.data[0]
          form.setFieldsValue({
            name: result.name,
            assistant: result.assistant,
            desc: result.desc,
            time: [
              moment(result.addTime[0], 'YYYY-MM-DD'),
              moment(result.addTime[1], 'YYYY-MM-DD'),
            ]
            // time: result.time
          })
          setData(result.tags.length ? result.tags : tagData)
        })
        .catch((err) => {
          console.log(err);
        })
      // dispatch({
      //   type: 'IndexPage/editData',
      //   payload: id
      // })
    }
  }, [id])

  useEffect(() => {
    return () => {
      id = ''
    }
  }
  )
  //返回
  function backBtn() {
    Modal.confirm({
      icon: <ExclamationCircleOutlined />,
      content: '未保存的数据将丢失，是否返回？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        history.push('/')
      }
    });
  }
  //保存
  function save(type) {
    //触发验证
    form.validateFields()
      .then((res) => {
        //整理标签数据
        const newTags = tagData.filter(item => item.sign)
        //获取表单数据
        const FromData = form.getFieldsValue()
        // const timer = dayjs(FromData.time[0]).format('YYYY-MM-DD')
        // const timers = dayjs('2019-01-25').toDate()
        const startTime = dayjs(FromData.time[0]).format('YYYY-MM-DD')
        const endTime = dayjs(FromData.time[1]).format('YYYY-MM-DD')
        console.log(startTime, endTime);
        //通知框状态
        let blo = false
        // console.log('FromData', FromData);
        const dispatchData = {
          id: id || nanoid(),
          flag: true,
          tags: [...newTags],
          flowpath: [],
          addTime: [startTime, endTime],
          ...FromData
        }
        if (type === 'add') {
          //新建
          dispatch({
            type: 'IndexPage/addData',
            payload: dispatchData,
            callback: (res) => {
              // console.log(res);
              if (res.data.code === 200) {
                message.success('项目添加完成')
              } else {
                message.error('项目添加失败,，请稍后重试')
              }
            }
          })
        } else if (type === 'edit') {
          //修改
          dispatch({
            type: 'IndexPage/editData',
            payload: dispatchData,
            callback: (res) => {
              // console.log(res);
              if (res.data.code === 200) {
                message.success('项目修改完成')
              } else {
                message.error('项目修改失败,，请稍后重试')
              }
            }
          })
        } else {
          dispatch({
            type: 'IndexPage/addData',
            payload: dispatchData,
            callback: (res) => {
              // console.log(res);
              if (res.data.code === 200) {
                message.success('项目添加完成')
                history.push(`/addflowpath/${dispatchData.id}`)
              } else {
                message.error('项目添加失败,，请稍后重试')
              }
            }
          })
          console.log('flow');
          return
        }
        history.push('/')
      })
      .catch((err) => {
        message.error('填写错误，请检查后重试')
      })


  }

  //标签数据搜集
  function poaintr(tagItem) {
    tagData.map(items => { if (items.tagMark === tagItem.tagMark) items.sign = !items.sign })
    setData([...tagData])
  }

  return (
    <>
      <Title title='新建项目'></Title>
      <Card >
        <Form form={form}>
          <Form.Item
            labelAlign='right'
            name="name"
            label="名称"
            rules={[{ required: true, message: '项目名称不能为空!' }]}>
            <Input className='addInputWidth' placeholder='请输入项目名称' />
          </Form.Item>
          <Form.Item
            labelAlign='right'
            name="assistant"
            label="编号"
            rules={[
              { required: true, message: '编号不能为空!' },
              { min: 6, message: '密码不能少于6个字符', },
              { max: 6, message: '密码不能大于6个字符', }
            ]}>
            <Input className='addInputWidth' placeholder='请输入项目名称' />
          </Form.Item>
          <Form.Item
            name='desc'
            rules={[{ required: true, message: '项目描述不能为空!' }]}
            label="描述">
            <Input.TextArea className='addInputWidth' placeholder='请输入项目描述' />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: '请选择时间!' },]}
            name="time"
            label="时间" >
            {/* <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
             */}
            <RangePicker />
          </Form.Item>

          <Form.Item
            rules={[{ required: true, }]}
            label="标签" >
            <div className='tagBox'>
              {
                tagData.map((item) => {
                  return (
                    <Tag onClick={() => poaintr(item)} className={item.sign ? 'tagElectStyle tagOpacity' : 'tagElectStyle'} key={nanoid()} color=
                      {
                        item.tagMark.length > 25 ? 'magenta' :
                          item.tagMark.length > 15 ? 'volcano' :
                            item.tagMark.length > 10 ? 'gold' :
                              item.tagMark.length > 8 ? 'cyan' : item.tagMark.length > 6 ? 'geekblue' : 'purple'
                      }
                    >{item.tagMark}</Tag>
                  )
                })
              }

            </div>
          </Form.Item>
        </Form>
      </Card>

      <div className='footerBtnBox'>
        <div>
          <Button onClick={backBtn}>返回</Button>
          <Button onClick={() => save(id ? 'edit' : 'add')} htmlType="submit"  >保存</Button>
          {
            id === undefined ? <Button type="primary" onClick={() => save('flow')} >添加流程</Button> : ''
          }
        </div>
      </div>

    </>
  )
}
export default connect(
  state => state
)(AddProject)