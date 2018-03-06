/*global describe */
/*global it */
/*eslint no-console: ["error", { allow: ["log"] }] */

import assert from 'assert'
import { isValidSquare, isValidPieceCode  } from '../../src/validators/board'

describe('validators/board', function () {
  describe('#isValideSquare()', function () {
    it('validates squares', function () {
      assert(isValidSquare('a1'))
      assert(isValidSquare('e2'))
      assert(!isValidSquare('D2'))
      assert(!isValidSquare('g9'))
      assert(!isValidSquare('a'))
      assert(!isValidSquare(true))
      assert(!isValidSquare(null))
      assert(!isValidSquare({}))
    })
  })

  describe('#isValidPieceCode()', function () {
    it('validates pieces', function () {
      assert(isValidPieceCode('bP'))
      assert(isValidPieceCode('bK'))
      assert(isValidPieceCode('wK'))
      assert(isValidPieceCode('wR'))
      assert(!isValidPieceCode('WR'))
      assert(!isValidPieceCode('Wr'))
      assert(!isValidPieceCode('a'))
      assert(!isValidPieceCode(true))
      assert(!isValidPieceCode(null))
      assert(!isValidPieceCode({}))
    })
  })
})
