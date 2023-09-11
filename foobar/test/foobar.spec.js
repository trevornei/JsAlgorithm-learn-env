var should = require('chai').should()

const myModule = require('../test/foobar')
console.log(myModule.int)
console.log(myModule.fooOrBar(9))