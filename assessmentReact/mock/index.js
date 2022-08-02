
const Mock = require('mockjs')

const Random = Mock.Random

const downloadFile = Random.image()

const user1 = Random.image()
const user2 = Random.image()
const user3 = Random.image()
const user4 = Random.image()
const user5 = Random.image()
const user6 = Random.image()
//原始数据
let data = [
  {
    id: 1, name: "微生物多样性分析", assistant: '123456', time: 154256541255, desc: '分析微生物分子结构原子合成型保护', addTime: ['2022-03-07', '2022-04-03'], flag: false, tags: [{ sign: true, tagMark: '真核转录组 Eukaryotic transcriptome' },
    { sign: false, tagMark: '宏转录组 Metatranscriptome' },],
    flowpath: [
      {
        id: 1,
        flowName: '生1231物独享性流程模型分析',
        desc: '疫情防控，人人有责',
        progress: 40, progressflag: false,
        flowMedal: [
          {
            imgUrl: downloadFile,
            medelName: '微生物多想',

            medalDesc: '123456789',
            tag: '1.1'
          }
        ]
      }
    ]
  },
  {
    id: 2, name: "DNA分子合成", assistant: '777777', desc: '分析DNA分子合成分子结构原子合成型保护', addTime: ['2022-03-07', '2022-04-03'], flag: true, tags: [{ sign: true, tagMark: '真核转录组 Eukaryotic transcriptome' },
    { sign: true, tagMark: '宏转录组 Metatranscriptome' },],
    flowpath: [
      {
        id: 2,
        flowName: '生物14667独享性流程模型分析',
        desc: '疫情防控，人人有责',
        progress: 40, progressflag: false,
        flowMedal: [
          {
            imgUrl: user5,
            medelName: '微生物多想',
            medalDesc: '123456789',
            tag: '1.1'
          }
        ]
      }
    ]
  },
  {
    id: 3, name: "多肽安分合成", assistant: '8888888', desc: '分析多肽安分合成合成分子结构原子合成型保护', addTime: ['2022-03-07', '2022-04-03'], flag: true, tags: [{ sign: true, tagMark: '真核转录组 Eukaryotic transcriptome' },
    { sign: false, tagMark: '宏转录组 Metatranscriptome' },],
    flowpath: [
      {
        id: 3,
        flowName: '生物独享性流程模型分析123',
        desc: '疫情防控，人人有责',

        progress: 40, progressflag: false,
        flowMedal: [
          {
            imgUrl: user4,
            medelName: '微生物多512想',
            medalDesc: '123456789',
            tag: '1.1'
          }
        ]
      }
    ]
  },
  {
    id: 4, name: "头孢颗粒原子性分析1", assistant: '999999', desc: '分析多肽安分合成分子结构原子合成型保护', addTime: ['2022-03-07', '2022-04-03'], flag: true, tags: [{ sign: true, tagMark: '真核转录组 Eukaryotic transcriptome' },
    { sign: true, tagMark: '宏转录组 Metatranscriptome' },],
    flowpath: [
      {
        id: 4,
        flowName: '123生物独享性流程模型分析13',
        desc: '疫情防控，人人有责',
        progress: 40, progressflag: false,
        flowMedal: [
          {
            imgUrl: user4,
            medelName: '微生物123多想',
            medalDesc: '123456789',
            tag: '1.1'
          }
        ]
      }
    ]
  },
  {
    id: 5, name: "头孢颗粒原子性分析2", assistant: '113456', desc: '分析多肽安分合成分子结构原子合成型保护', addTime: ['2022-03-07', '2022-04-03'], flag: false, tags: [{ sign: true, tagMark: '真核转录组 Eukaryotic transcriptome' },
    { sign: true, tagMark: '宏转录组 Metatranscriptome' },],
    flowpath: [
      {
        id: 5,
        flowName: '生物独123享性流程模型分析',
        desc: '疫情15防控，人人有责',
        progress: 40, progressflag: false,
        flowMedal: [
          {
            imgUrl: downloadFile,
            medelName: '微生物多想',
            medalDesc: '123456789',
            tag: '1.1'
          }
        ]
      }
    ]
  },
  {
    id: 6, name: "头孢颗粒原子性分析3", assistant: '789999', desc: '分析多肽安分合成分子结构原子合成型保护', addTime: ['2022-03-07', '2022-04-03'], flag: true, tags: [{ sign: true, tagMark: '真核转录组 Eukaryotic transcriptome' },
    { sign: true, tagMark: '宏转录组 Metatranscriptome' },],
    flowpath: [
      {
        id: 6,
        flowName: '生物独123享性流程模型分析',
        desc: '疫情防4控，人人有责',
        progress: 40, progressflag: false,
        flowMedal: [
          {
            imgUrl: user1,
            medelName: '微123生物多想',
            medalDesc: '123456789',
            tag: '1.1'
          }
        ]
      }
    ]
  },
  {
    id: 7, name: "头孢颗粒原子性分析4", assistant: '584566', desc: '分析多肽安分合成分子结构原子合成型保护', addTime: ['2022-03-07', '2022-04-03'], flag: false, tags: [{ sign: true, tagMark: '真核转录组 Eukaryotic transcriptome' },
    { sign: true, tagMark: '宏转录组 Metatranscriptome' },],
    flowpath: [
      {
        id: 7,
        flowName: '生物独123享性流程模型分析',
        desc: '疫情防123控，人人有责',
        progress: 40, progressflag: false,
        flowMedal: [
          {
            imgUrl: user6,
            medelName: '微生1235物多想',
            medalDesc: '123456789',
            tag: '1.1'
          }
        ]
      }
    ]
  },
  {
    id: 8, name: "头孢颗粒原子性分析5", assistant: '344567', desc: '分析多肽安分合成分子结构原子合成型保护', addTime: ['2022-03-07', '2022-04-03'], flag: true, tags: [{ sign: true, tagMark: '真核转录组 Eukaryotic transcriptome' },
    { sign: true, tagMark: '宏转录组 Metatranscriptome' },],
    flowpath: [
      {
        id: 8,
        flowName: '生物独享67性流程模型分析',
        desc: '疫情防控，人人有责',
        progress: 40, progressflag: false,
        flowMedal: [
          {
            imgUrl: user1,
            medelName: '微生物多想',
            medalDesc: '123456789',
            tag: '1.1'
          }
        ]
      }
    ]
  },
  {
    id: 9, name: "头孢颗粒原子性分析6", assistant: '7842456', desc: '分析多肽安分合成分子结构原子合成型保护', addTime: ['2022-03-07', '2022-04-03'], flag: true, tags: [{ sign: true, tagMark: '宏基因组 Metagenome' },
    { sign: true, tagMark: '微生物基因组 Microbial genome' },],
    flowpath: [
      {
        id: 9,
        flowName: '生物123独享性流程模型分析',
        desc: '疫67情防控，人人有责',
        progress: 40, progressflag: false,
        flowMedal: [
          {
            imgUrl: user2,
            medelName: '微1生物多想',
            medalDesc: '123456789',
            tag: '1.1'
          }
        ]
      }
    ]
  },
  {
    id: 10, name: "头孢颗粒原子性分析7", assistant: '42787974', desc: '分析多肽安分合成分子结构原子合成型保护', addTime: ['2022-03-07', '2022-04-03'], flag: false, tags: [{ sign: true, tagMark: '宏基因组 Metagenome' },
    { sign: true, tagMark: '微生物基因组 Microbial genome' },],
    flowpath: [
      {
        id: 10,
        flowName: '生物独享性771流程模型分析',
        desc: '疫情防51控，人人有责',
        progress: 40, progressflag: false,
        flowMedal: [
          {
            imgUrl: user6,
            medelName: '微123生物多想',
            medalDesc: '123456789',
            tag: '1.11'
          }
        ]
      }
    ]
  },
  {
    id: 11, name: "头孢颗粒原子性分析8", assistant: '718293', desc: '分析多肽安分合成分子结构原子合成型保护', addTime: ['2022-03-07', '2022-04-03'], flag: false, tags: [{ sign: true, tagMark: '宏基因组 Metagenome' },
    { sign: true, tagMark: '微生物基因组 Microbial genome' },],
    flowpath: [
      {
        id: 11,
        flowName: '生2222物独享性流程模型分析',
        desc: '疫情防控，人人3有责',
        progress: 40, progressflag: false,
        flowMedal: [
          {
            imgUrl: user1,
            medelName: '微生物多1123想',
            medalDesc: '123456789',
            tag: '1.1'
          }
        ]
      }
    ]
  },
  {
    id: 12, name: "头孢颗粒原子性分析9", assistant: '825896', desc: '分析多肽安分合成分子结构原子合成型保护', addTime: ['2022-03-07', '2022-04-03'], flag: true, tags: [{ sign: true, tagMark: '重测序 Resequencing' },
    { sign: true, tagMark: '原核转录组 Prokaryotic transcriptome' },
    { sign: true, tagMark: '小RNA MicroRNA' },],
    flowpath: [
      {
        id: 12,
        flowName: '生物12313独享性流程模型分析',
        desc: '疫情防控，人人有22责',
        progress: 40, progressflag: false,
        flowMedal: [
          {
            imgUrl: user6,
            medelName: '5566微生物多想',
            medalDesc: '123456789',
            tag: '1.1'
          }
        ]
      }
    ]
  },
  {
    id: 13, name: "头孢颗粒原子性分析10", assistant: '748596', desc: '分析多肽安分合成分子结构原子合成型保护', addTime: ['2022-03-07', '2022-04-03'], flag: false, tags: [{ sign: true, tagMark: '重测序 Resequencing' },
    { sign: true, tagMark: '原核转录组 Prokaryotic transcriptome' },
    { sign: true, tagMark: '小RNA MicroRNA' },],
    flowpath: [
      {
        id: 13,
        flowName: 'rtw生物独享性流程模型分析',
        desc: '疫情防控，人人有责',
        progress: 40, progressflag: false,
        flowMedal: [
          {
            imgUrl: user2,
            medelName: '微生物多555想',
            medalDesc: '123456789',
            tag: '1.14'
          }
        ]
      }
    ]
  },
  {
    id: 14, name: "头孢颗粒原子性分析11", assistant: '526932', desc: '分析多肽安分合成分子结构原子合成型保护', addTime: ['2022-03-07', '2022-04-03'], flag: true, tags: [{ sign: true, tagMark: '重测序 Resequencing' },
    { sign: true, tagMark: '原核转录组 Prokaryotic transcriptome' },
    { sign: true, tagMark: '小RNA MicroRNA' },],
    flowpath: [
      {
        id: 14,
        flowName: '556生物独享性流程模型分析',
        desc: '疫情防控，人人有责',
        progress: 40, progressflag: false,
        flowMedal: [
          {
            imgUrl: user1,
            medelName: '微生物qwe123多想',
            medalDesc: '123456789',
            tag: '1.1'
          }
        ]
      }
    ]
  },
  {
    id: 15, name: "头孢颗粒原子性分析12", assistant: '456314', desc: '分析多肽安分合成分子结构原子合成型保护', addTime: ['2022-03-07', '2022-04-03'], flag: false, tags: [{ sign: true, tagMark: '重测序 Resequencing' },
    { sign: true, tagMark: '原核转录组 Prokaryotic transcriptome' },
    { sign: true, tagMark: '小RNA MicroRNA' },],
    flowpath: [
      {
        id: 15,
        flowName: '123生物独享性流程模型分析',
        desc: '疫情防控，人人有责8888',
        progress: 40, progressflag: false,
        flowMedal: [
          {
            imgUrl: user2,
            medelName: '微生物123wqewqe',
            medalDesc: '123456789',
            tag: '1.14'
          }
        ]
      }
    ]
  },
  {
    id: 16, name: "头孢颗粒原子性分析13", assistant: '784512', desc: '分析多肽安分合成分子结构原子合成型保护', addTime: ['2022-03-07', '2022-04-03'], flag: true, tags: [{ sign: true, tagMark: '动植物基因组 Eukaryotic genome' },
    { sign: true, tagMark: '微生物多样性 Microbial diversity' }],
    flowpath: [
      {
        id: 16,
        flowName: '生物独享流程模型分析123',
        desc: '疫情防控，人人有责',
        progress: 40, progressflag: false,
        flowMedal: [
          {
            imgUrl: user3,
            medelName: '微生物多想34444',
            medalDesc: '123451116789',
            tag: '1.31'
          }
        ]
      }
    ]
  },
  {
    id: 17, name: "头孢颗粒原子性分析14", assistant: '985247', desc: '分析多肽安分合成分子结构原子合成型保护', addTime: ['2022-03-07', '2022-04-03'], flag: true, tags: [{ sign: true, tagMark: '动植物基因组 Eukaryotic genome' },
    { sign: true, tagMark: '微生物多样性 Microbial diversity' }],
    flowpath: [
      {
        id: 17,
        flowName: '生物性流程模型分析',
        desc: '疫情防控，人人有责',
        progress: 40, progressflag: false,
        flowMedal: [
          {
            imgUrl: user4,
            medelName: '微生物多想1233334',
            medalDesc: '12322456789',
            tag: '1.3'
          }
        ]
      }
    ]
  },
]
// const defultData = window.localStorage.getItem('projectData', JSON.stringify(data)) || ''
// if (!defultData.length) {
// window.localStorage.getItem('projectData', JSON.stringify(data))
// }
//添加
const listAdd = function (options) {
  const obj = JSON.parse(options.body)
  const data = JSON.parse(window.localStorage.getItem('projectData')) || data;
  const arr = [obj.data, ...data]
  const arrStr = JSON.stringify(arr)
  window.localStorage.setItem('projectData', arrStr);

  // console.log("传过来的数据", data);
  return {
    code: 200,
    message: '成功',
    data: arr
  }
}

//获取点击修改的数据
const editData = function (options) {
  const obj = JSON.parse(options.body)
  const datas = JSON.parse(window.localStorage.getItem('projectData')) || data;
  const editData = datas.filter(item => item.id == obj.id)
  // console.log('###', editData);
  return {
    code: 200,
    message: '成功',
    data: editData
  }

}

//修改
const edit = function (options) {
  const rep = JSON.parse(options.body)
  // console.log('newdata', rep);
  let flowpath;
  const datas = JSON.parse(window.localStorage.getItem('projectData')) || data;
  const newdata = datas.map((item) => {
    if (item.id == rep.id) {
      item.assistant = rep.assistant
      item.desc = rep.desc
      item.name = rep.name
      item.tags = rep.tags
      item.addTime = rep.addTime
      return item
    }
    return item
  })
  // console.log('@@@', newdata);
  const arrStr = JSON.stringify(newdata)
  window.localStorage.setItem('projectData', arrStr);
  return {
    code: 200,
    message: '成功',
    data: newdata
  }
}
//详情数据
const detail = function (options) {
  const rep = JSON.parse(options.body)
  const datas = JSON.parse(window.localStorage.getItem('projectData')) || data;
  const newdata = datas.filter((item) => item.id == rep.id)
  return {
    code: 200,
    message: '成功',
    data: newdata
  }
}

//修改流程名称
const editFlowName = function (options) {
  const rep = JSON.parse(options.body) || {}
  const datas = JSON.parse(window.localStorage.getItem('projectData')) || data;
  let newsData;
  const newDatas = datas.map((item, index) => {
    if (item.id === rep.projectId) {
      newsData = item.flowpath.filter((item2) => {
        if (item2.id === rep.id) {
          item2.flowName = rep.name
          item2.desc = rep.nameDesc
          // console.log('111', item2);
          return item2
        } else {
          return item2
        }
      })

    }

    return item

  });
  console.log('%%%', newDatas);
  // const str = JSON.parse(JSON.stringify(datas))
  const arrStr = JSON.stringify(newDatas)
  window.localStorage.setItem('projectData', arrStr);
  // console.log(flowNameData);
  return {
    code: 200,
    message: '成功',
    data: newsData
  }
}
//添加流程模型
const addModel = function (options) {
  const rep = JSON.parse(options.body) || {}
  const datas = JSON.parse(window.localStorage.getItem('projectData')) || data;
  datas.forEach((item) => {
    if (item.id == rep.id) {
      item.flowpath = rep.data
    }
  })
  const str = JSON.parse(JSON.stringify(datas))
  const arrStr = JSON.stringify(str)
  window.localStorage.setItem('projectData', arrStr);
  // console.log('合并', window.localStorage.getItem('projectData', arrStr));
  return {
    code: 200,
    message: '成功',
    data
  }
}


//获取数据
export const getdata = Mock.mock("/list", 'get', () => {
  const defultData = JSON.parse(window.localStorage.getItem('projectData'))
  console.log('4444', defultData);

  if (defultData === null) {
    window.localStorage.setItem('projectData', JSON.stringify(data))
  }
  return {
    code: 200,
    message: '成功',
    data: JSON.parse(window.localStorage.getItem('projectData')) || data

  }
})
//新增数据
export const add = Mock.mock(RegExp("/addList.*"), 'post', listAdd)

//获取修改数据
export const editdata = Mock.mock(RegExp("/editdata.*"), 'get', editData)
//修改
export const edits = Mock.mock(RegExp("/edit.*"), 'get', edit)

//详情
export const details = Mock.mock(RegExp("/detail.*"), 'get', detail)
//修改流程名称
export const flow = Mock.mock(RegExp("/flowname.*"), 'get', editFlowName)
//修改流程名称
export const increaseModel = Mock.mock(RegExp("/addmodeal.*"), 'post', addModel)



