/*global describe */
/*global it */
/*eslint no-console: ["error", { allow: ["log"] }] */

import assert from 'assert'
import {
  isValidSquare,
  isValidPieceCode,
  isValidFen,
  isValidPositionObject
} from '../../src/validators/board'
import { startingFEN, startingPosition } from '../../src/constants'

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

  describe('#isValidFen()', function () {
    it('validates fen', function () {
      assert(isValidFen(startingFEN))
      assert(isValidFen('8/8/8/8/8/8/8/8'))
      assert(isValidFen('r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R'))
      assert(isValidFen('3r3r/1p4pp/2nb1k2/pP3p2/8/PB2PN2/p4PPP/R4RK1 b - - 0 1'))
      assert(!isValidFen('3r3z/1p4pp/2nb1k2/pP3p2/8/PB2PN2/p4PPP/R4RK1 b - - 0 1'))
      assert(!isValidFen('anbqkbnr/8/8/8/8/8/PPPPPPPP/8'))
      assert(!isValidFen('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/'))
      assert(!isValidFen('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBN'))
      assert(!isValidFen('888888/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'))
      assert(!isValidFen('888888/pppppppp/74/8/8/8/PPPPPPPP/RNBQKBNR'))
      assert(!isValidFen({}))
    })
  })

  describe('#isValidPositionObject()', function () {
    it('validates position objects', function () {
      assert(isValidPositionObject(startingPosition))
      assert(isValidPositionObject({}))
      assert(isValidPositionObject({e2: 'wP'}))
      assert(isValidPositionObject({e2: 'wP', d2: 'wP'}))
      assert(!isValidPositionObject({e2: 'BP'}))
      assert(!isValidPositionObject({y2: 'wP'}))
      assert(!isValidPositionObject(null))
      assert(!isValidPositionObject('start'))
      assert(!isValidPositionObject(startingFEN))
    })
  })
})
