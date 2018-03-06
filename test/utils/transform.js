/*global describe */
/*global it */
/*global assert */

import assert from 'assert'
import { fenToObj } from '../../src/utils/transforms'
const obj = require('../data/fenToObj.json')

describe('utils/transform', function() {
  describe('#fenToObj()', function() {
    it('can create an object', function() {
      const fen = 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R'
      assert(JSON.stringify(obj), JSON.stringify(fenToObj(fen)))
    })
  })
})
