// 引入的是一个工厂函数（不用new直接调用）
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象-app（比vue2中的vm更“轻”）
createApp(App).mount('#app')
