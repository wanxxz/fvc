import { diary } from 'diary'
import _ from 'lodash'
import z from 'zod'
import { fieldsets } from './fieldset/fieldsets'

const log = diary('config:config')

const config = z.object({
  fieldsets
})

type Config = z.infer<typeof config>

export { config, type Config }
