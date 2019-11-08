// Thanks realmyst for pluralizing snippet below (original: https://gist.github.com/realmyst/1262561)
function declOfNum(number, titles) {
  cases = [2, 0, 1, 1, 1, 2]
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ]
}

function formatToLongString(time, type) {
  return ` ${time} ${declOfNum(time, type)} назад`
}

export default {
  short: {
    now: 'сейчас',
    sec: 'с',
    min: 'м',
    hour: 'ч',
    day: 'д',
  },
  long: {
    now: 'только что',
    sec: time => formatToLongString(time, ['секунда', 'секунды', 'секунд']),
    min: time => formatToLongString(time, ['минута', 'минуты', 'минут']),
    hour: time => formatToLongString(time, ['час', 'часа', 'часов']),
    day: time => formatToLongString(time, ['день', 'дня', 'дней']),
  },
}
