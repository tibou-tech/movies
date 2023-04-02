import type { App } from 'vue'

import BaseEmptyData from '@/shared/BaseEmptyData.vue'
import Button from '@/shared/Button.vue'
import Layout from '@/shared/Layout.vue'
import LoadingPage from '@/shared/LoadingPage.vue'

export default {
  install: (app: App): void => {
    app.component('VBaseEmptyData', BaseEmptyData)
    app.component('VButton', Button)
    app.component('VLayout', Layout)
    app.component('VLoadingPage', LoadingPage)
  }
}
