/* eslint-disable no-undef */
import { sum } from '../src/lib'
import { expect } from 'chai'

describe('add-demo-npm unit tests', (): void => {
  it('adding two positive numbers', (): void => {
    const actual: number = sum(1, 2)
    expect(actual).is.equal(3)
  })

  it('adding two negative numbers', (): void => {
    const actual: number = sum(-5, -2)
    expect(actual).is.equal(-7)
  })

  it('adding one positive and one negative number', (): void => {
    const actual: number = sum(7, -2)
    expect(actual).is.equal(5)
  })
})
