
import { createApp } from 'vue'

/**
 *
 * @param {ReturnType<typeof createApp>} app 应用实例
 * @des 全局加载所有的插件
 */
function loadPlugins (app: ReturnType<typeof createApp>) {
  // files 返回一个函数
  const files = require.context('.', true, /\.ts$/)
  // 获取当前上下文所有文件的名字集合
  files.keys().forEach(key => {
    if (typeof files(key).default === 'function') {
      if (key !== './index.ts') {
        files(key).default(app)
      }
    }
  })
}
export default loadPlugins
