import { diary } from 'diary'
import { Signal } from 'signal-polyfill'
import { config, type Config } from './config'

const log = diary('context')

const context = new Signal.State({})

function updateContext(c: Config) {
  try {
    config.parse(c)
  } catch (e) {
    log.error(e)
  }
}

export { context, updateContext }
