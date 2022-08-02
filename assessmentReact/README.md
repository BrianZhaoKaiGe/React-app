# 初级前端考核项目-高通量用户端

 使用 React + Umijs + Ant Design of React 构建项目

## 1. 使用

推荐使用 [yarn](https://yarn.bootcss.com/) 管理项目依赖。


```bash
# 使用 yarn 安装依赖
yarn install

# 开发
yarn start

# 生产
yarn run build
```

## 2. 技术栈

[React](https://zh-hans.reactjs.org/) + [UmiJS](https://umijs.org/zh/) + [DvaJS](https://dvajs.com/) + [Antd](https://ant.design/docs/react/introduce-cn) + [ts](https://typescript.bootcss.com/)


## 3. 项目结构

<details>
<summary>展开查看</summary>
<pre>
<code>
|—— config/ 项目配置文件
|   |—— router/ 路由文件夹
|   |   |—— **.ts 模块路由
|
|—— public/ 静态资源文件
|
|—— src/ 源码
|   |—— assets/ 资源文件（会被webpack打包）
|   |
|   |—— components/ 全局组件 
|   |
|   |—— layouts/ 布局
|   |
|   |—— models/ 全局数据
|   |
|   |—— pages/ 入口是`index.tsx`，页面内的局部组件都放到页面文件夹的components目录下 （业务代码编写目录）
|   |   |—— .umi/ 此目录自动生成，不要修改/删除
|   |   |—— index.tsx/ 主页
|   |   |—— list.tsx/ 列表页
|   |
|   |—— utils/ 工具函数
|   |
|   |—— app.ts 运行时配置文件
|
|—— .gitignore
|
|—— tsconfig.json ts配置文件
|
|—— package.json npm包文件
|
|—— README.md 项目说明
</code>
</pre>
</details>

## 4. 要求
- 根据UI编写页面，参考原型图  --- \\192.168.20.18\DocServer2\信息部\前端组资料\前端初级考核项目\项目管理（用户界面）\标注
- 需要根据原型完成交互，参考原型图  --- \\192.168.20.18\DocServer2\信息部\前端组资料\前端初级考核项目\项目管理（用户界面）\PRD\项目管理模块PRDv1.4
- 数据自定义，可以用model、context、或者localStorage等方式实现
