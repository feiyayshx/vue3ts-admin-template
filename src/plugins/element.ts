import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

const useComponent = (app:any) => {
  app.use(ElementPlus, { size: 'small' })
}

export default useComponent
