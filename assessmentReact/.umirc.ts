import { defineConfig } from 'umi';
import router from './config/router';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  locale: {
    // 解决 antd 组件默认为英文内容的问题
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  routes: router,
  fastRefresh: {},
});
