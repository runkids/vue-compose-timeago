import {
  ref,
  reactive,
  toRefs,
  onMounted,
  onUnmounted,
} from '@vue/composition-api'
import format from './lib/index'

export default function useTimego(options) {
  if (Object.prototype.toString.call(options) !== '[object Object]') {
    throw new Error(`[useTimego]: options should to be an object`)
  }
  const { locale = 'en', long = false, refresh = true } = options

  function reloadTime(datetime, data) {
    let { timeago, nowString } = format(
      datetime,
      locale,
      long ? 'long' : 'short'
    )
    data.timeago = timeago
    data.time = nowString
  }

  function timer(datetime) {
    const intervalId = ref(null)
    const data = reactive({ timeago: '', time: '' })

    onMounted(() => {
      if (refresh) {
        intervalId.value = setInterval(
          () => reloadTime(datetime, data),
          refresh === true ? 60 : refresh * 1000
        )
      }
    })

    onUnmounted(() => {
      if (intervalId.value) clearInterval(intervalId.value)
    })

    return {
      ...toRefs(data),
    }
  }

  return {
    timer,
  }
}
