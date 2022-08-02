
import axios from 'axios'


export default {
  namespace: 'IndexPage', // 这个 model 的名字，必须全局唯一
  state: {
    list: [],    //列表数据
  }, // 初始数据
  reducers: {
    //获取数据
    list(state, action) {
      return {
        ...state,
        list: action.payload.list
      }

    },
    //删除某条数据
    delete(state, { payload: id }) {
      return {
        ...state,
        list: state.list.filter(item => item.id !== id)
      }
    },
    //新增
    // addproject(state, { payload }) {
    //   return {
    //     ...state,
    //     list: payload.list
    //   }
    // },
    //修改
    editDucer(state, { payload }) {
      // console.log('aaa', payload);
      return {
        ...state,
        list: payload.list
      }
    },
    detailData(state, { payload }) {
      return {
        ...state,
        list: payload.list
      }
    }
  }, // 用于修改数据
  effects: {
    //请求获取列表数据
    * getdata({ type, payload }, { put, call, select }) {
      const result = yield axios.get('/list')
      if (result.data.code === 200) {
        yield put({
          type: 'list',
          payload: {
            list: result.data.data
          }
        })
      }
    },
    //请求新增数据
    * addData({ type, payload, callback }, { put, call, select }) {
      const result = yield axios.post('/addList', {
        data: payload
      })
      // console.log('#####', result);
      if (result.data.code === 200) {
        //添加成功重新获取数据
        yield put({
          type: 'list',
          payload: {
            list: result.data.data
          }
        })

        if (callback && typeof callback === 'function') {
          callback(result); // 返回结果
        }
      }
    },
    //修改
    * editData({ type, payload, callback }, { put, call, select }) {
      // console.log('发请求', payload);
      const result = yield axios.get('/edit', {
        data: payload
      })
      if (result.data.code === 200) {
        yield put({
          type: 'editDucer',
          payload: {
            list: result.data.data
          }
        })

        if (callback && typeof callback === 'function') {
          callback(result); // 返回结果
        }

      }

    },
    //获取详情数据
    * detail({ type, payload, callback }, { put, call, select }) {
      const result = yield axios.get('/detail', {
        data: payload
      })
      // console.log('111');
      if (result.data.code === 200) {
        yield put({
          type: 'detailData',
          payload: {
            list: result.data.data
          }
        })

      }

    },
    * addModeal({ type, payload, callback }, { put, call, select }) {
      const result = yield axios.post('/addmodeal', {
        data: payload.data,
        id: payload.id
      })
      // console.log('返回结果', result);
      if (result.data.code === 200) {
        yield put({
          type: 'detailData',
          payload: {
            list: result.data.data
          }
        })

      }

    },

  }, // 用于获取数据
  subscriptions: {

  }, // 用于订阅数据
}

