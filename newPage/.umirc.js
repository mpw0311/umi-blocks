import { resolve } from "path";
export default {
  plugins: [
    ['umi-plugin-block-dev', {
      'layout': 'ant-design-pro',
    }],
    ['umi-plugin-react', {
      'antd': true,
      'dva': true
    }]
  ],
}
