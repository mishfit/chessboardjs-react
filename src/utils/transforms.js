import { isValidFen, isValidPositionObject } from '../validators/board'

export const columns = 'abcdefgh'.split('')

export function squeezeFenEmptySquares (fen) {
  return fen.replace(/11111111/g, '8')
            .replace(/1111111/g, '7')
            .replace(/111111/g, '6')
            .replace(/11111/g, '5')
            .replace(/1111/g, '4')
            .replace(/111/g, '3')
            .replace(/11/g, '2')
}

export function expandFenEmptySquares (fen) {
  return fen.replace(/8/g, '11111111')
            .replace(/7/g, '1111111')
            .replace(/6/g, '111111')
            .replace(/5/g, '11111')
            .replace(/4/g, '1111')
            .replace(/3/g, '111')
            .replace(/2/g, '11')
}

export function fenToPieceCode (piece) {
  const playerPrefix = piece.toLowerCase() === piece ? 'b' : 'w'
  return `${playerPrefix}${piece.toUpperCase()}`
}

export function pieceCodeToFen (piece) {
  if (piece.charAt(0) === 'w') return piece.charAt(1).toUpperCase()
  return piece.charAt(1).toLowerCase()
}

export function fenToObj (fen) {
  if (!isValidFen(fen)) return false

  // cut off any move, castling, info from the end
  // keep only position info
  return fen.replace(/ .+$/, '')
  .split('/')
  .map((rank, index) => {
    return rank.split('')
    .map(significantFile => {
      if (significantFile.search(/[1-8]/) !== -1) {
        return Array.apply(null, { length: significantFile })
      } else {
        return [ significantFile ]
      }
    })
    .reduce((a,b) => { return a.concat(b) })
    .map((pieceCandidate, pieceCandidateIndex) => {
      if (pieceCandidate) {
        const square = `${columns[pieceCandidateIndex]}${8 - index}`,
        code = fenToPieceCode(pieceCandidate)
        return { square, code }
      } else return pieceCandidate
    })
    .filter(pieceCandidate => pieceCandidate !== undefined)
  })
  .reduce((a,b) => { return a.concat(b) })
  .reduce((accumulator, piece) => {
    accumulator[piece.square] = piece.code
    return accumulator
  }, {})
}

export function objToFen(obj) {
  if (!isValidPositionObject(obj)) return false
}

