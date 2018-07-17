import moo from 'moo';
import { tokenDefinitions } from './tokenDefs';

const lexer = moo.compile(tokenDefinitions)

lexer.createTokens = function() {
  const tokens = []
  for(const token of this) {
    if(token.type === 'whitespace'){
      continue
    }
    token.toString = function() {
      return `<type:${this.type}|value:${this.value}|line:${this.line}|col:${this.col}>`
    }
    tokens.push(token)
  }
  return tokens
}

export default lexer