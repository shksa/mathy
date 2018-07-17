export const tokenDefinitions = {
  // Identifier
  identifier: /[a-zA-Z][a-zA-Z0-9_]*/,
  
  // Number
  number: /[0-9]+/,
  
  // Arithmetic operators
  plus: /\+/,
  minus: /-/,
  times: /\*/,
  div: /\//,
  
  // Comparision operators
  greaterThanOrEqualTo: />=/, // regex />=/ has to be before />/ for />=/ to be matched in text. 
  lesserThanOrEqualTo: /<=/,
  greaterThan: />/,
  lesserThan: /</,
  equal: /==/, // /==/ has to be before /=/ for /==/ to be matched in text
  
  // Assignment operator
  assign: /=/,
  
  // Parenthesis
  leftParen: /\(/,
  rightParen: /\)/,
  
  // Whitespace
  whitespace: /[ \t]+/,
  
  // Newline
  newline: {
    match: /\n/,
    lineBreaks: true
  }
}
