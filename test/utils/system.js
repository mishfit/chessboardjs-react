/*global describe */
/*global it */
/*eslint no-console: ["error", { allow: ["log"] }] */

import assert from 'assert'
import { interpolateTemplate } from '../../src/utils/system'

describe('utils/system', function () {
  describe('#interpolateTemplate()', function () {
    it('ignores un-tokenized templates', function () {
      assert(interpolateTemplate('abc', { a: 'x' }), 'abc')
    })

    it('ignores tokens with missing data', function () {
      assert(interpolateTemplate('{a}bc', {}), '{a}bc')
    })

    it('ignores unmatched token/data', function () {
      assert(interpolateTemplate('{a}bc', { p: 'q' }), '{a}bc')
    })

    it('formats tokens with matched data', function () {
      assert(interpolateTemplate('{a}bc', { a: 'x' }), 'xbc')
    })

    it('formats multiple occurrences of a token', function () {
      assert(interpolateTemplate('{a}bc{a}bc', { a: 'x' }), 'xbcxbc')
    })

    it('formats multiple tokens', function () {
      assert(interpolateTemplate('{a}{a}{b}', { a: 'x', b: 'y' }), 'xxy')
    })

  })
})
