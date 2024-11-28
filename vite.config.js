import { defineConfig } from 'vite';
import vue2 from '@vitejs/plugin-vue2';
import path from 'path'; // 导入 path 模块
import { SkeletonPlaceholderPlugin, SkeletonApiPlugin } from 'vite-plugin-auto-skeleton/vite';


export default defineConfig({
  base: './', // 打包的静态资源引用路径
  plugins: [
    SkeletonPlaceholderPlugin(),
    vue2(),
    SkeletonApiPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    // 构建配置
    minify: 'terser', // 使用terser压缩代码
    terserOptions: {
      compress: {
        drop_console: true, // 生产环境去除console
        drop_debugger: true, // 生产环境去除debugger
      },
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://10.60.81.45:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
});