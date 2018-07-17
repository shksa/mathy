import lexer from "../src/lexer"
import {assert} from 'chai'
import fs from 'fs';
import path from 'path';

describe('sampleMathyCode.mty', () => {
  it('should be read as a string', () => {
    const filePath = path.resolve(__dirname, './sampleMathyCode.mty')
    const mathyCode = fs.readFileSync(filePath, 'utf8')
    assert.typeOf(mathyCode, 'string')
  })
})

describe('lexer.createTokens', () => {
  it('is a function', () => {
    assert.typeOf(lexer.createTokens, 'function')
  })
  it('generates correct tokens from code string', () => {
    const mathyCodeString = 
    `foo = 12 * 2
    bar = (foo + 18) * 911
    3 < 5
    4 <= 6
    6 > 8
    9 >= 0
    9 == 9`

    const tokensExpected = [
      'foo', '=', '12', '*', '2', '\n', 'bar', '=', '(', 'foo', '+', '18', ')', '*', '911', '\n',
      '3', '<', '5', '\n', '4', '<=', '6', '\n', '6', '>', '8', '\n', '9', '>=', '0', '\n', '9', 
      '==', '9'  
    ]
    lexer.reset(mathyCodeString)
    const tokensFromLexer = lexer.createTokens()
    assert.equal(tokensFromLexer.length, tokensExpected.length)
    tokensFromLexer.forEach((token, idx) => {
      assert.equal(token.value, tokensExpected[idx])
    });
  })
})