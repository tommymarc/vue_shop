import Vue from 'vue'
import { Form , FormItem,Input ,Button  ,Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
//message挂载在Vue原型
Vue.prototype.$message = Message