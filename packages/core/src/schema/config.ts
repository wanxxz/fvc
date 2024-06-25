import { diary } from 'diary'
import z from 'zod'
import { fieldsets } from './fieldsets'

const log = diary('config:config')

const config = z.object({
  fieldsets
})

type Config = z.infer<typeof config>

export { config, type Config }
