import React, { useEffect, useState } from 'react'
import { Table, Radio, Divider } from 'antd';

import {

  VerticalAlignBottomOutlined,

} from '@ant-design/icons';
var dayjs = require('dayjs')
//文件图片
import word from '@/images/word.png'
import txt from '@/images/txt.png'
import PDF from '@/images/PDF.png'
import ppt from '@/images/ppt.png'
import avi from '@/images/avi.png'
import excel from '@/images/excel@1x.png'

import './index.less';

export default function FileTable(props) {
  const { state: { sortFile: sortid, fileSearch, downloadUrl } } = props
  const [selectionType, setSelectionType] = useState('checkbox');

  const [data, setData] = useState([
    {
      key: '1',
      name: 'word文件',
      imgMark: word,
      assgin: '小时候总觉得 只有轰轰烈烈奋不顾身才叫精彩 长大了才明白 温柔的人和一切事物才有踏踏实实的安全感',
      source: 'xxxxxxx的流程模型xxxxxxx的流程模型',
      time: 1642707216546,
      size: '10'
    },
    {
      key: '2',
      name: 'txt文件',
      imgMark: txt,
      assgin: '你知道 有的鸟儿注定不会被关在牢笼里的 它们的每一片羽毛都闪耀着自由的光辉',
      source: 'xxxxxxx的流程模型xxxxxxx的流程模型',
      time: 1648787216546,
      size: '20'
    },
    {
      key: '3',
      name: 'PDF文件',
      imgMark: PDF,
      assgin: '红炉、点血,远赴倒悬山',
      source: 'xxxxxxx的流程模型xxxxxxx的流程模型',
      time: 1648707916546,
      size: '50'
    },
    {
      key: '4',
      name: 'ppt文件',
      imgMark: ppt,
      assgin: '最需要的东西，即使是沙粒，也会如同黄金。',
      source: 'xxxxxxx的流程模型xxxxxxx的流程模型',
      time: 1648707218546,
      size: '70'
    },
    {
      key: '5',
      name: 'avi文件',
      imgMark: avi,
      assgin: '民为衣食父母，官是人民公仆',
      source: 'xxxxxxx的流程模型xxxxxxx的流程模型',
      time: 1678707218546,
      size: '11'
    },
    {
      key: '6',
      name: 'excel文件',
      imgMark: excel,
      assgin: '小心阶级敌人的骗术，任何对无产阶级抱有敌意的人，都是我们的敌人',
      source: 'xxxxxxx的流程模型xxxxxxx的流程模型',
      time: 1638707218546,
      size: '90'
    },

  ])
  const columns = [
    {
      title: '文件名称',
      dataIndex: 'name',
      className: 'fileNameStyle',
      render: (text, record) => (
        <>
          <span>
            <img src={record.imgMark} alt="" />
          </span>
          <span className='fileTypeStyle'>{text}</span>
          <a className='fileDownloadIcon' href={downloadUrl} download ><VerticalAlignBottomOutlined /></a>
        </>
      )

    },
    {
      title: '描述',
      dataIndex: 'assgin',
    },
    {
      title: '来源',
      dataIndex: 'source',
    },
    {
      title: '修改时间',
      dataIndex: 'time',
      render: (text, record) => (
        <>
          {dayjs(text).format('YYYY-MM-DD HH:mm:ss')}

          {/* {text} */}
        </>
      )
    },
    {
      title: '大小',
      dataIndex: 'size',
      render: (text, record) => (
        <>
          {text + 'KB'}
        </>
      )
    },
  ];
  //排序
  useEffect(() => {
    if (sortid === '1') {
      const newdata = JSON.parse(JSON.stringify(data.sort((a, b) => { return a.key - b.key })))
      setData(newdata)
    }
    if (sortid === '2') {
      const newdata = JSON.parse(JSON.stringify(data.sort((a, b) => { return a.time - b.time })))
      setData(newdata)
    }
    if (sortid === '3') {
      const newdata = JSON.parse(JSON.stringify(data.sort((a, b) => { return a.size - b.size })))
      setData(newdata)
    }
  }, [sortid])
  //搜索
  useEffect(() => {
    if (fileSearch !== '') {
      const newdata = JSON.parse(JSON.stringify(data.filter(item => item.name === fileSearch)))
      setData(newdata)
    }
  }, [fileSearch])
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (
    <>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        pagination={false}
        columns={columns}
        dataSource={data}
      />

    </>
  )
}
