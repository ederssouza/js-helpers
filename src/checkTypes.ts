export function is (value: any) {
  return Object.prototype.toString.call(value)
}

export function isArray (value: any) {
  return is(value) === '[object Array]'
}

export function isObject (value: any) {
  return is(value) === '[object Object]'
}

export function isBoolean (value: any) {
  return is(value) === '[object Boolean]'
}

export function isNumber (value: any) {
  return is(value) === '[object Number]' && !isNaN(value) && value !== Infinity
}

export function isString (value: any) {
  return is(value) === '[object String]'
}

export function isFunction (value: any) {
  return is(value) === '[object Function]'
}

export function isNull (value: any) {
  return is(value) === '[object Null]' || is(value) === '[object Undefined]' || !value.trim().length
}

export function isValidArray (value: any) {
  return Boolean(isArray(value) && value.length)
}

export function isValidObject (value: any) {
  return Boolean(isObject(value) && Object.keys(value).length)
}
