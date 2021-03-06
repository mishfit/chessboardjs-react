import { isString, } from './system'
import { expandFenEmptySquares } from '../utils/transforms'
import { log } from '../utils/system'

export function isValidMove (move) {
  // move should be a string
  if (!isString(move)) return false

  // move should be in the form of "e2-e4", "f6-d5"
  return move.split('-').every((square, i, all) => isValidSquare(square) && all.length == 2)
}

export function isValidSquare (square) {
  return isString(square) && square.search(/^[a-h][1-8]$/) !== -1
}

export function isValidPieceCode (code) {
  return isString(code) && code.search(/^[bw][KQRNBP]$/) !== -1
}

export function isValidFen (fen) {
  if (!isString(fen)) return false

  // cut off any move, castling, etc info from the end
  // only interested in position information

  log(fen)
  fen = fen.replace(/ .+$/, '')
  log(fen)

  // expand the empty square numbers to just 1s
  fen = expandFenEmptySquares(fen)
  log(fen)

  const chunks = fen.split('/')
  log(chunks)

  chunks.forEach(chunk => log(chunk.search(/[^kqrnbpKQRNBP1]/)))
  // FEN should be 8 sections separated by slashes
  return chunks.length === 8 &&
    chunks.every(chunk => chunk.search(/[^kqrnbpKQRNBP1]/) === -1 && chunk.length === 8)
}

export function isValidPositionObject (pos) {
  return Object.prototype.toString.apply(pos) === '[object Object]' &&
    Object.keys(pos)
      .every(key => isValidSquare(key) && isValidPieceCode(pos[key]))
}

