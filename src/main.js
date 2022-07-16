import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// 라우팅 js 파일 임포트
import route from './router.js'

//.use(route) 부분 추가해줘야됨
createApp(App).use(route).mount('#app')
