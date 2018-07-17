# <b>Mathy</b> - a simple language to do math operations.
This project is a compiler for the <b>Mathy</b> language which can perform arithmetic and comparision operations.
## Enumeration of <b>lexemes</b> in <b>Mathy</b>
* Identifiers
* Numbers
* Paranthesis
* Operators
## Enumeration of <b>token types</b>
As there are only a few kinds of operators and parenthesis used in this language, each operator and parenthesis is given a seperate token type. This helps in implementing the compiler with a better clarity.
* ### Identifiers and literals
  * 'identifier'
  * 'number'
* ### Arithmetic operators
  * 'plus'
  * 'minus'
  * 'times'
  * 'div'
* ### Comparision operators
  * 'greater than'
  * 'lesser than'
  * 'greater than or equal to'
  * 'less than or equal to'
  * 'equal'
* ### Assignment operator
  * 'assign'
* ### Parenthesis
  * 'left parenthesis'
  * 'right parenthesis'
* ### Special tokens
  * 'end of input'
## Lexical grammar of <b>mathy</b>
Lexical grammar of a formal language is a set of rules
which specify all the valid lexemes that can appear in that language.<br>
So a lexeme in a language is described by <b>production rule</b> which is just a regular expression, using that regular expression or the production rule you can determine all the possible values that the lexeme can have in that language.<br>
For example, an <b>identifier</b> is a lexeme in every language and it's production rule is the regular expression <code>letter | (letter | digit | _)*</code>, which tells you how an identifier will look like, you can use this regular expression to match for strings in a source to recognize all the identifiers in that source.<br>
Therefore using regular expressions for each of the lexemes described by a language you can <b>recognize</b> all the lexemes that appear in any source code of that language.

* letter  = [a-zA-Z]
* digit   = [0-9]
* digits  = digit digit*
* identifier = letter | (letter | digit | _)*
* fraction = . digits | epsilon
* exponent = ((E | e) (+ | - | epsilon) digits) | epsilon
* number = digits fraction exponent
* operator = + | - | * | / | > | >= | < | <= | = | ==
* parenthesis = ( | )

