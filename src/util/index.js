export const isNullOrUndefined = value => {
  return value === null || value === undefined || value === ''
}

export const isString = value => typeof value === 'string'

export const isObject = value =>
  Object.prototype.toString.call(value) === '[object Object]'
