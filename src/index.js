import * as system from './utils/system'
import * as transforms from './utils/transforms'
import * as app from './validators/app'
import * as board from './validators/board'
import * as sys from './validators/system'
import * as constants from './constants'

export const ChessBoard = {
  utils: {
    system,
    transforms
  },
  validators: {
    app,
    board,
    system: sys
  },
  constants
}
