/*global describe */
/*global it */
/*eslint no-console: ["error", { allow: ["log"] }] */

//import assert from 'assert'
import { fenToObj } from '../../src/utils/transforms'

describe('util/transform', function() {
  describe('#fenToObj()', function() {
    it('can create an object', function() {
      const fen = 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R'
      console.log(fen)
      console.log(fenToObj(fen))
    })
  })
})
