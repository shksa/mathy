import { tokenDefinitions } from "../src/tokenDefs";
import {assert} from 'chai';

describe('tokenDefinitions', () => {
  describe('.identifier', () => {
    const identifierRegEx = tokenDefinitions.identifier
    it('is a regular expression object', () => {
      assert.instanceOf(identifierRegEx, RegExp)
    })
    it('matches strings that contain single letter', () => {
      assert.equal(identifierRegEx.exec('f = 1')[0], 'f')
    })
    it('matches string that contains multiple letters', () => {
      assert.equal(identifierRegEx.exec('foo = 1')[0], 'foo')
    })
    it('matches with strings that contain both letters and digits', () => {
      assert.equal(identifierRegEx.exec('foo123 = 1')[0], 'foo123')
    })
  })
  describe('.number', () => {
    const numberRegEx = tokenDefinitions.number
    it('is a regular expression object', () => {
      assert.instanceOf( numberRegEx, RegExp)
    })
    it('matches single digit', () => {
      assert.equal(numberRegEx.exec('f = 1')[0], '1')
    })
    it('matces multiple digits', () => {
      assert.equal(numberRegEx.exec('foo = 12')[0], '12')
    })
  })
  describe('arithmetic operator', () => {
    const plusRegEx = tokenDefinitions.plus
    it('.plus matches + symbol', () => {
      assert.equal(plusRegEx.exec('f = 1 + 2')[0], '+')
    })
    const minusRegEx = tokenDefinitions.minus
    it('.minus matches - symbol', () => {
      assert.equal(minusRegEx.exec('f = 1 - 2')[0], '-')
    })
    const divRegEx = tokenDefinitions.div
    it('.div matches / symbol', () => {
      assert.equal(divRegEx.exec('f = 1 / 2')[0], '/')
    })
    const timesRegEx = tokenDefinitions.times
    it('.times matches * symbol', () => {
      assert.equal(timesRegEx.exec('f = 1 * 2')[0], '*')
    })
  })
  describe('comparision operators', () => {
    const greaterThanRegEx = tokenDefinitions.greaterThan
    it('.greaterThan matches > symbol', () => {
      assert.equal(greaterThanRegEx.exec('f = 1 > 2')[0], '>')
    })
    const lesserThanRegEx = tokenDefinitions.lesserThan
    it('.lesserThan matches < symbol', () => {
      assert.equal(lesserThanRegEx.exec('f = 1 < 2')[0], '<')
    })
    const greaterThanEqualToRegEx = tokenDefinitions.greaterThanOrEqualTo
    it('.greaterThanOrEqualTo matches >= symbol', () => {
      assert.equal(greaterThanEqualToRegEx.exec('f = 1 >= 2')[0], '>=')
    })
    const lesserThanOrEqualToRegEx = tokenDefinitions.lesserThanOrEqualTo
    it('.lesserThanOrEqualTo matches <= symbol', () => {
      assert.equal(lesserThanOrEqualToRegEx.exec('f = 1 <= 2')[0], '<=')
    })
    const equalRegEx = tokenDefinitions.equal
    it('.equal matches == symbol', () => {
      assert.equal(equalRegEx.exec('f = 1 == 2')[0], '==')
    })
  })
  describe('assignment operator', () => {
    const assignmentRegEx = tokenDefinitions.assign
    it('.assign matches = symbol', () => {
      assert.equal(assignmentRegEx.exec('f = 1 * 3')[0], '=')
    })
  })
})