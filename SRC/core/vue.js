import {createAPP} from 'vue'
import {createPinia} from 'pinia'

export default () => {
    const vue = createAPP({})
    const pinia = createPinia()

    vue.use(pinia)
}