import { charUtils } from "../src/utils";
import { assert } from 'chai';

describe('charUtils', () => {
  describe('.isLetter()', () => {
    it('should only match with the upper and lower case alphabets', () => {
      assert.equal(charUtils.isLetter('a'), true)
      assert.equal(charUtils.isLetter('A'), true)
      assert.equal(charUtils.isLetter('0'), false)
      assert.equal(charUtils.isLetter('['), false)
    })
  })
  describe('.isDigit()', () => {
    it('should match with only the numeric characters', () => {
      assert.equal(charUtils.isDigit('9'), true)
      assert.equal(charUtils.isDigit('12'), true)
      assert.equal(charUtils.isDigit('a'), false)
      assert.equal(charUtils.isDigit(','), false)
    })
  })
  describe('.isOperator()', () => {
    it('should match with only the arithmetic and comparision operator', () => {
      assert.equal(charUtils.isOperator('+'), true)
      assert.equal(charUtils.isOperator('-'), true)
      assert.equal(charUtils.isOperator('*'), true)
      assert.equal(charUtils.isOperator('/'), true)
      assert.equal(charUtils.isOperator('>'), true)
      assert.equal(charUtils.isOperator('<'), true)
      assert.equal(charUtils.isOperator('='), true)
      assert.equal(charUtils.isOperator('1'), false)
      assert.equal(charUtils.isOperator('a'), false)
      assert.equal(charUtils.isOperator('['), false)
      assert.equal(charUtils.isOperator(','), false)
    })
  })
  describe('.isParenthesis()', () => {
    it('should match only with the left and right parenthesis', () => {
      assert.equal(charUtils.isParenthesis('('), true)      
      assert.equal(charUtils.isParenthesis(')'), true)
      assert.equal(charUtils.isParenthesis('1'), false)
      assert.equal(charUtils.isParenthesis('a'), false)
      assert.equal(charUtils.isParenthesis(']'), false)
    })
  })
  describe('.determineCharType()', () => {
    it('should correctly determine the type among `letter, digit, operator, parenthesis`', () => {
      assert.equal(charUtils.determineCharType('1'), 'digit')
      assert.equal(charUtils.determineCharType('a'), 'letter')
      assert.equal(charUtils.determineCharType('+'), 'operator')
      assert.equal(charUtils.determineCharType('('), 'parenthesis')
      assert.equal(charUtils.determineCharType(')'), 'parenthesis')
    })
  })
  describe('.isArithmeticOperator()', () => {
    it('should match only with +,-,*,/', () => {
      assert.equal(charUtils.isArithmeticOperator('+'), true)
      assert.equal(charUtils.isArithmeticOperator('-'), true)
      assert.equal(charUtils.isArithmeticOperator('*'), true)
      assert.equal(charUtils.isArithmeticOperator('/'), true)
      assert.equal(charUtils.isArithmeticOperator('('), false)
      assert.equal(charUtils.isArithmeticOperator(','), false)
      assert.equal(charUtils.isArithmeticOperator('j'), false)
      assert.equal(charUtils.isArithmeticOperator('6'), false)
    })
  })
  describe('.isComparisonOperator()', () => {
    it('should match only with <, >', () => {
      assert.equal(charUtils.isComparisonOperator('>'), true)
      assert.equal(charUtils.isComparisonOperator('<'), true)
      assert.equal(charUtils.isComparisonOperator('='), true)
      assert.equal(charUtils.isComparisonOperator('-'), false)
      assert.equal(charUtils.isComparisonOperator('k'), false)
    })
  })
  describe('.determineOperatorType()', () => {
    it('should correctly determine the type of operator among `arithmetic, comparison, assignment`', () => {
      assert.equal(charUtils.determineOperatorType('+'), 'arithmetic')
      assert.equal(charUtils.determineOperatorType('/'), 'arithmetic')
      assert.equal(charUtils.determineOperatorType('>'), 'comparison')
      assert.equal(charUtils.determineOperatorType('<'), 'comparison')
      assert.equal(charUtils.determineOperatorType('='), 'comparison')
    })
  })
})

