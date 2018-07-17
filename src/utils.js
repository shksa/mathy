export const charUtils = {
  letterRegExp: /[a-zA-Z]/,
  digitRegExp: /[0-9]/,
  operatorRegExp: /\+|-|\*|\/|<|>|=/,
  parenthesisRegExp: /\(|\)/,
  arithmeticOperatorRegExp: /\+|-|\*|\//,
  comparisonOperatorRegExp: /<|>|=/,
  
  isLetter(character) {
    return this.letterRegExp.test(character)
  },

  isDigit(character) {
    return this.digitRegExp.test(character)
  },

  isOperator(character) {
    return this.operatorRegExp.test(character)
  },

  isParenthesis(character) {
    return this.parenthesisRegExp.test(character)
  },

  isArithmeticOperator(character) {
    return this.arithmeticOperatorRegExp.test(character) 
  },

  isComparisonOperator(character) {
    return this.comparisonOperatorRegExp.test(character)
  },

  determineCharType(character) {
    if(this.isLetter(character)) {
      return 'letter'
    }
    else if(this.isDigit(character)) {
      return 'digit'
    }
    else if(this.isOperator(character)) {
      return 'operator'
    }
    else if(this.isParenthesis(character)) {
      return 'parenthesis'
    }
  },

  determineOperatorType(operator) {
    if(this.isArithmeticOperator(operator)) {
      return 'arithmetic'
    } else if(this.isComparisonOperator(operator)) {
      return 'comparison'
    }
  }
}