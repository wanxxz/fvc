import { diary, enable } from 'diary'
import { vars } from './vars'

enable(vars.DEBUG)

const log = diary('index')

function main() {}

export default main
export { main }
