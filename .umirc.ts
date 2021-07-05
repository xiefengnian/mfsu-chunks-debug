import { defineConfig } from 'umi';
import path from 'path';

export default defineConfig({
  webpack5: {},
  mfsu: {},
  base: '/',
  publicPath: '/eccp/',
  proxy: {
    '/order/api': {
      changeOrigin: true,
      target: 'http://eccp.test.xforceplus.com',
      secure: false,
    },
    '/api/eccp': {
      changeOrigin: true,
      target: 'http://goods-service-fat.phoenix-t.xforceplus.com',
      secure: false,
      pathRewrite: { '^/api/eccp': '' },
    },
    '/eccp-activity': {
      changeOrigin: true,
      // target: 'http://172.25.11.50:8080',
      target: 'http://eccp.test.xforceplus.com',
      secure: false,
      // pathRewrite: { '^/eccp-activity': '' },
    },
  },
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,
  history: {
    type: 'hash',
  },
  polyfill: false,
  locales: false,
  request: false,
  ignoreMomentLocale: true,
  dynamicImport: {},
  antd: false,
  dva: false,
  extraBabelPlugins: ['babel-plugin-styled-components'],
  plugins: [path.join(__dirname, './rename')],
  chainWebpack(chain) {
    chain.merge({
      optimization: {
        runtimeChunk: {
          name: 'runtimeChunk',
        },
      },
    });
    return chain;
  },
  chunks: ['runtimeChunk', 'app'],
  scripts: ['//polyfill.alicdn.com/v3/polyfill.min.js'],
  favicon:
    'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/zh/images/favicon.png?_v_=20200710_1',
});
