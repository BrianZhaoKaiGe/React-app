import React, { useEffect, useState, useRef } from 'react'
import { useHistory, useParams } from "react-router-dom";
import { Card, Tag, Button, Table, Space, Progress, Modal, Form, Input, message, Popover } from 'antd'
import {
  SettingOutlined,
  SearchOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';
import { nanoid } from 'nanoid';
import { connect } from 'dva'
import Title from '../Title'
import './index.less';

import icon from '@/images/avatar.jpeg';
import xuanzhong from '@/images/xuanzhong.png';
import modelImgUrl1 from '@/images/user1.jpg';
import modelImgUrl2 from '@/images/user2.jpg';
import modelImgUrl3 from '@/images/user3.jpg';
import modelImgUrl4 from '@/images/user4.jpg';
import modelImgUrl5 from '@/images/user5.jpg';
import modelImgUrl6 from '@/images/user6.jpg';

//收集的模型数据
let newModealData = []
let checkModealData = []
function AddFlowPath(props) {
  const history = useHistory()
  const { dispatch, IndexPage: { list } } = props
  //流程数据
  const [data, setData] = useState([])
  //搜索
  const [searchValue, setsearchValue] = useState('')
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
  //模型数据
  const modeldata = [
    {
      id: nanoid(),
      flowName: '流程A',
      desc: '当我行走于天地间，骄阳烈日，明月当空，得问我一句，天地之间足够亮堂否？不太够？当我行走于江湖上，大江滔滔，河水滚滚，得问我一句，江河之水足够解渴否不够当我行走于群山巅琼楼玉宇云海仙人得问我一句山顶罡风足够凉快否不够不够远远不够酒不够江水山风不够都不够',
      progress: 40,
      flowMedal: [
        {
          check: false,
          imgUrl: modelImgUrl6,
          medelName: '微生物多想1233334',
          medalDesc: '当我行走于天地间，骄阳烈日，明月当空，得问我一句，天地之间足够亮堂否？不太够？当我行走于江湖上，大江滔滔，河水滚滚，得问我一句，江河之水足够解渴否不够当我行走于群山巅琼楼玉宇云海仙人得问我一句山顶罡风足够凉快否不够不够远远不够酒不够江水山风不够都不够',
          tag: '1.3'
        }
      ]
    },
    {
      id: nanoid(),
      flowName: '流程B',
      desc: '当我行走于天地间，骄阳烈日，明月当空，得问我一句，天地之间足够亮堂否？不太够？当我行走于江湖上，大江滔滔，河水滚滚，得问我一句，江河之水足够解渴否不够当我行走于群山巅琼楼玉宇云海仙人得问我一句山顶罡风足够凉快否不够不够远远不够酒不够江水山风不够都不够',
      progress: 40,
      flowMedal: [
        {
          check: false,
          imgUrl: modelImgUrl1,
          medelName: '微生物多想1233334',
          medalDesc: '当我行走于天地间，骄阳烈日，明月当空，得问我一句，天地之间足够亮堂否？不太够？当我行走于江湖上，大江滔滔，河水滚滚，得问我一句，江河之水足够解渴否不够当我行走于群山巅琼楼玉宇云海仙人得问我一句山顶罡风足够凉快否不够不够远远不够酒不够江水山风不够都不够',
          tag: '1.3'
        }
      ]
    },
    {
      id: nanoid(),
      flowName: '流程C',
      desc: '当我行走于天地间，骄阳烈日，明月当空，得问我一句，天地之间足够亮堂否？不太够？当我行走于江湖上，大江滔滔，河水滚滚，得问我一句，江河之水足够解渴否不够当我行走于群山巅琼楼玉宇云海仙人得问我一句山顶罡风足够凉快否不够不够远远不够酒不够江水山风不够都不够',
      progress: 40,
      flowMedal: [
        {
          check: false,
          imgUrl: modelImgUrl2,
          medelName: '微生物多想1233334',
          medalDesc: '当我行走于天地间，骄阳烈日，明月当空，得问我一句，天地之间足够亮堂否？不太够？当我行走于江湖上，大江滔滔，河水滚滚，得问我一句，江河之水足够解渴否不够当我行走于群山巅琼楼玉宇云海仙人得问我一句山顶罡风足够凉快否不够不够远远不够酒不够江水山风不够都不够',
          tag: '1.3'
        }
      ]
    },
    {
      id: nanoid(),
      flowName: '流程D',
      desc: '当我行走于天地间，骄阳烈日，明月当空，得问我一句，天地之间足够亮堂否？不太够？当我行走于江湖上，大江滔滔，河水滚滚，得问我一句，江河之水足够解渴否不够当我行走于群山巅琼楼玉宇云海仙人得问我一句山顶罡风足够凉快否不够不够远远不够酒不够江水山风不够都不够',
      progress: 40,
      flowMedal: [
        {
          check: false,
          imgUrl: modelImgUrl3,
          medelName: '微生物多想1233334',
          medalDesc: '当我行走于天地间，骄阳烈日，明月当空，得问我一句，天地之间足够亮堂否？不太够？当我行走于江湖上，大江滔滔，河水滚滚，得问我一句，江河之水足够解渴否不够当我行走于群山巅琼楼玉宇云海仙人得问我一句山顶罡风足够凉快否不够不够远远不够酒不够江水山风不够都不够',
          tag: '1.3'
        }
      ]
    },
    {
      id: nanoid(),
      flowName: '流程E',
      desc: '当我行走于天地间，骄阳烈日，明月当空，得问我一句，天地之间足够亮堂否？不太够？当我行走于江湖上，大江滔滔，河水滚滚，得问我一句，江河之水足够解渴否不够当我行走于群山巅琼楼玉宇云海仙人得问我一句山顶罡风足够凉快否不够不够远远不够酒不够江水山风不够都不够',
      progress: 40,
      flowMedal: [
        {
          check: false,
          imgUrl: modelImgUrl4,
          medelName: '微生物多想1233334',
          medalDesc: '当我行走于天地间，骄阳烈日，明月当空，得问我一句，天地之间足够亮堂否？不太够？当我行走于江湖上，大江滔滔，河水滚滚，得问我一句，江河之水足够解渴否不够当我行走于群山巅琼楼玉宇云海仙人得问我一句山顶罡风足够凉快否不够不够远远不够酒不够江水山风不够都不够',
          tag: '1.3'
        }
      ]
    },
    {
      id: nanoid(),
      flowName: '流程F',
      desc: '当我行走于天地间，骄阳烈日，明月当空，得问我一句，天地之间足够亮堂否？不太够？当我行走于江湖上，大江滔滔，河水滚滚，得问我一句，江河之水足够解渴否不够当我行走于群山巅琼楼玉宇云海仙人得问我一句山顶罡风足够凉快否不够不够远远不够酒不够江水山风不够都不够',
      progress: 40,
      flowMedal: [
        {
          check: false,
          imgUrl: modelImgUrl5,
          medelName: '微生物多想1233334',
          medalDesc: '当我行走于天地间，骄阳烈日，明月当空，得问我一句，天地之间足够亮堂否？不太够？当我行走于江湖上，大江滔滔，河水滚滚，得问我一句，江河之水足够解渴否不够当我行走于群山巅琼楼玉宇云海仙人得问我一句山顶罡风足够凉快否不够不够远远不够酒不够江水山风不够都不够',
          tag: '1.3'
        }
      ]
    },
    {
      id: nanoid(),
      flowName: '流程G',
      desc: '当我行走于天地间，骄阳烈日，明月当空，得问我一句，天地之间足够亮堂否？不太够？当我行走于江湖上，大江滔滔，河水滚滚，得问我一句，江河之水足够解渴否不够当我行走于群山巅琼楼玉宇云海仙人得问我一句山顶罡风足够凉快否不够不够远远不够酒不够江水山风不够都不够',
      progress: 40,
      flowMedal: [
        {
          check: false,
          imgUrl: modelImgUrl6,
          medelName: '微生物多想1233334',
          medalDesc: '当我行走于天地间，骄阳烈日，明月当空，得问我一句，天地之间足够亮堂否？不太够？当我行走于江湖上，大江滔滔，河水滚滚，得问我一句，江河之水足够解渴否不够当我行走于群山巅琼楼玉宇云海仙人得问我一句山顶罡风足够凉快否不够不够远远不够酒不够江水山风不够都不够',
          tag: '1.3'
        }
      ]
    },
  ]
  const [modelData, setModelData] = useState(modeldata)
  useEffect(() => {
    if (list !== [] && list[0] !== undefined) {
      // console.log('1231', list[0].flowpath );
      const flowdata = list[0].flowpath
      // console.log('1231231', flowdata);
      setData(flowdata)
    } else {
      setData(defaultData)
    }
  }, [list])
  //详情ID
  const { id } = useParams()
  //选择流程弹框状态
  const [visible, setVisible] = useState(false)

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
  const columns = [
    {
      title: '流程',
      dataIndex: 'flowName',
      key: '4',
      render: (text, record) => (
        <>
          <div>
            <div>{record.flowName}</div>
            <div className='flowDescText'>{record.desc}</div>
          </div>
        </>

      ),
    },
    {
      title: '流程模型',
      dataIndex: 'flowMedal',
      key: '3',
      render: (flowpath, record) => (
        <>
          {
            record.flowMedal && record.flowMedal.map((item) => {
              return (
                <div key={nanoid()} >
                  <div className='flowModelImgBox'><img className='flowModelImg' src={item.imgUrl} alt="" /></div>
                  <div className='modelTextBox'>{item.medelName}</div>
                  <div className='flowMedalDescText' >{item.medalDesc}</div>
                  <span className='modelTag'><Tag color="green">v{item.tag}</Tag></span>
                </div>
              )
            })
          }
        </>
      ),
    },
    {
      title: '参数',
      width: '200px',
      key: '2',
      dataIndex: 'flowMedal',
      render: (tags, record,) => (
        <>
          <Popover placement="top" title='参数' content={() =>
            <div key={nanoid()}>
              <p>流程：{record.flowName && record.flowName}</p>
              <p>描述：{record.desc && record.desc}</p>
              <p>模型: &nbsp;&nbsp;{record.flowMedal && record.flowMedal[0].medelName}</p>
            </div>

          } trigger="click">
            <Button type="link" shape="circle" icon={<SettingOutlined />} />
          </Popover>
        </>
      ),
    },
    {
      title: '操作',
      width: '200px',
      key: '1',
      dataIndex: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => { flowDelete(record) }} shape="circle" >删除</Button>
        </Space>
      ),
    },
  ];
  //删除
  function flowDelete(record) {
    Modal.confirm({
      title: '删除后不可恢复，确定删除当前流程吗？',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        const newData = data.filter(item => item.id !== record.id)
        setData(newData)

      },
    });
  }

  //弹框状态
  function hideModalFlowPath(type) {
    if (type === 'ok') {
      //收集选中的模型数据
      modelData.forEach((item) => {
        if (item.flowMedal[0].check) {
          checkModealData = [...checkModealData, item]
          // newModealData = item
        }
      })
      const newData = [...data||[], ...checkModealData]
      // console.log('213', newData);
      setData(newData)

      modelData.forEach((item) => {
        item.flowMedal.map((item2) => {
          item2.check = false
          return item
        })
      })
      checkModealData = []
      setVisible(false)

    } else {
      modelData.forEach((item) => {
        item.flowMedal.map((item2) => {
          item2.check = false
          return item
        })
      })
      setsearchValue('')
      setVisible(false)
    }

  }

  //选择流程模型
  function cardMedalClick(card) {
    const newModeal = modelData.map((item) => {
      if (card.id === item.id) {
        item.flowMedal[0].check = !item.flowMedal[0].check
      }
      return item
    })
    setModelData(newModeal)
  }
  //搜索
  function searchBtn() {
    let newData = [];
    modelData.forEach((item) => {
      // console.log('@222@', item);
      if (item.flowMedal[0].medelName === searchValue) {
        newData = [item]
      }
    })
    if (newData.length) {
      setModelData(newData)
    } else {
      Modal.confirm({
        title: '无搜索数据',
        icon: <ExclamationCircleOutlined />,
        onOk() {
          setModelData(modelData)
        },
      });
    }
  }
  //输入框值变化
  function inputValueChange(e) {
    if (e.target.value === '') {
      setModelData(modeldata)
    } else {
      setsearchValue(e.target.value)
    }
  }
  //重置
  function reset() {
    setsearchValue('')
  }
  //保存
  function save(params) {

    dispatch({
      type: 'IndexPage/addModeal',
      payload: {
        data,
        id,
      }
    })
    history.push(`/projectdetail/${id}`)

  }
  return (
    <>
      <Title title='添加流程'></Title>
      <Card className='cardFlowBox'>
        {
          <Table className='flowTable' rowKey="id" columns={columns} pagination={false} dataSource={data} />
        }

      </Card>
      <div className='addBtnBox'><Button type="dashed" onClick={() => setVisible(true)}>+ 选择流程模型</Button></div>
      <Modal
        title="选择流程模型"
        visible={visible}
        onOk={() => { hideModalFlowPath('ok') }}
        onCancel={hideModalFlowPath}
        okText="确认"
        cancelText="取消"
        className='modalBox'
      >
        <div>
          流程模型：<Input className='modalInput' value={searchValue} onChange={(e) => inputValueChange(e)} placeholder="输入名称搜索" />
          <span className='searchBtn'> <Button type="primary" onClick={searchBtn} icon={<SearchOutlined />} ></Button></span>
          <span className='searchBtn' onClick={reset} ><Button>重置</Button></span>
        </div>
        <div className='medalWarp'>
          {
            modelData.map((item) => {
              return item.flowMedal.map((item2) => {
                return (
                  <Card key={nanoid()} className='medalCardStyle' onClick={() => { cardMedalClick(item) }} >
                    <div className='everyCardBox'>
                      <img className='flowModelImg medalCardImgStyle' src={item2.imgUrl} alt="" />
                      <div>
                        <div className='flowModelText'>{item2.medelName}</div>
                        <div><Tag className='CradinTag' color="green">v{item2.tag}</Tag></div>
                      </div>
                    </div>
                    <div className='flowModelText descTetx'>
                      {item2.medalDesc}
                    </div>
                    {
                      item2.check ? <img className='xuanzhong' src={xuanzhong} alt="" /> : ''
                    }

                    <Button className='lookBtn' type="link">查看</Button>
                  </Card>
                )
              })
            })
          }
        </div>
      </Modal>
      <div className='detailFooterBox'>
        <Button href={`/projectdetail/${id}`}>返回</Button>
        <Button type='primary' onClick={save}>保存</Button>
      </div>
    </>
  )
}
export default connect(
  state => state
)(AddFlowPath)