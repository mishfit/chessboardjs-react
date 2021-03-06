import repl from 'repl'
import vm from 'vm'
import { ChessBoard } from './src/index'

const sandbox = {
  msg: 'I pity the fool',
  ChessBoard
}

repl.start({ prompt: '> ', eval: evaluate })

function evaluate (cmd, context, filename, callback) {
  const script = new vm.Script(`(async function() { return ${cmd}})()`),
        sandBoxContext = vm.createContext(sandbox)
  
  try {
    const result = script.runInContext(sandBoxContext)
    callback(null, result)
  } catch (e) {
    if (isRecoverableError(e)) {
      return callback(new repl.Recoverable(e))
    } else {
      callback(null, undefined)
    }
  }
}

function isRecoverableError(error) {
  if (error.name === 'SyntaxError') {
    return /^(Unexpected end of input|Unexpected token)/.test(error.message)
  }
  return false
}

