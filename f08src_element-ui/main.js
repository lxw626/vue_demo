/*
入口JS
 */
import Vue from 'vue'
import {
  Button, Select, Form, FormItem, Input, TimeSelect, TimePicker,
  Option, Col, DatePicker, Radio, RadioGroup, Checkbox, CheckboxGroup, Switch
} from 'element-ui';
/*import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';*/
import App from './App.vue'

Vue.use(Button)
Vue.use(Select)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(TimeSelect)
Vue.use(TimePicker);
Vue.use(Option)
Vue.use(Col)
Vue.use(DatePicker)
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Switch);
// Vue.use(ElementUI);

// 创建vm
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App}, // 映射组件标签
  template: '<App/>' // 指定需要渲染到页面的模板
})
