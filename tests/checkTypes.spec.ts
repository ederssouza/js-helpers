/* eslint-disable no-undef */
import { expect } from 'chai'
import {
  is,
  isArray,
  isObject,
  isBoolean,
  isNumber,
  isString,
  isFunction,
  isNull,
  isValidArray,
  isValidObject
} from '../src/checkTypes'

describe('function is () {}', () => {
  it('should return [object Array] when receive [] argument', () => {
    expect(is([])).is.equal('[object Array]')
  })

  it('should return [object Object] when receive {} argument', () => {
    expect(is({})).is.equal('[object Object]')
  })
})

describe('function isArray () {}', () => {
  it('should return true when receive [] argument', () => {
    expect(isArray([])).is.equal(true)
  })

  it('should return true when receive [1, 2, 3] argument', () => {
    expect(isArray([1, 2, 3])).is.equal(true)
  })

  it('should return false when receive {} argument', () => {
    expect(isArray({})).is.equal(false)
  })
})

describe('function isObject () {}', () => {
  it('should return true when receive {} argument', () => {
    expect(isObject({})).is.equal(true)
  })

  it('should return true when receive { a: 1, b: 2 } argument', () => {
    expect(isObject({ a: 1, b: 2 })).is.equal(true)
  })

  it('should return false when receive [] argument', () => {
    expect(isObject([])).is.equal(false)
  })
})

describe('function isBoolean () {}', () => {
  it('should return true when receive true argument', () => {
    expect(isBoolean(true)).is.equal(true)
  })

  it('should return true when receive false argument', () => {
    expect(isBoolean(false)).is.equal(true)
  })

  it('should return false when receive { a: 1, b: 2 } argument', () => {
    expect(isBoolean({ a: 1, b: 2 })).is.equal(false)
  })
})

describe('function isNumber () {}', () => {
  it('should return true when receive 1 argument', () => {
    expect(isNumber(1)).is.equal(true)
  })

  it('should return true when receive 0 argument', () => {
    expect(isNumber(0)).is.equal(true)
  })

  it('should return true when receive -1 argument', () => {
    expect(isNumber(-1)).is.equal(true)
  })

  it('should return false when receive "1" argument', () => {
    expect(isNumber('1')).is.equal(false)
  })

  it('should return false when receive NaN argument', () => {
    expect(isNumber(NaN)).is.equal(false)
  })

  it('should return false when receive Infinity argument', () => {
    expect(isNumber(Infinity)).is.equal(false)
  })
})

describe('function isString () {}', () => {
  it('should return true when receive "text" argument', () => {
    expect(isString('text')).is.equal(true)
  })

  it('should return true when receive "" argument', () => {
    expect(isString('')).is.equal(true)
  })

  it('should return false when receive { a: 1, b: 2 } argument', () => {
    expect(isString({ a: 1, b: 2 })).is.equal(false)
  })
})

describe('function isFunction () {}', () => {
  it('should return true when receive function () {} argument', () => {
    expect(isFunction(function () {})).is.equal(true)
  })

  it('should return false when receive { a: 1, b: 2 } argument', () => {
    expect(isFunction({ a: 1, b: 2 })).is.equal(false)
  })
})

describe('function isNull () {}', () => {
  it('should return true when receive null argument', () => {
    expect(isNull(null)).is.equal(true)
  })

  it('should return true when receive undefined argument', () => {
    expect(isNull(undefined)).is.equal(true)
  })

  it('should return true when receive "" argument', () => {
    expect(isNull('')).is.equal(true)
  })
})

describe('function isValidArray () {}', () => {
  it('should return false when receive [] argument', () => {
    expect(isValidArray([])).is.equal(false)
  })

  it('should return true when receive [1, 2, 3] argument', () => {
    expect(isValidArray([1, 2, 3])).is.equal(true)
  })

  it('should return false when receive {} argument', () => {
    expect(isValidArray({})).is.equal(false)
  })
})

describe('function isValidObject () {}', () => {
  it('should return false when receive {} argument', () => {
    expect(isValidObject({})).is.equal(false)
  })

  it('should return true when receive { a: 1, b: 2 } argument', () => {
    expect(isValidObject({ a: 1, b: 2 })).is.equal(true)
  })

  it('should return false when receive [] argument', () => {
    expect(isValidObject([])).is.equal(false)
  })
})
