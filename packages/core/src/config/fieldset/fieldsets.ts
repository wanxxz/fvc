import z from 'zod'
import { fieldset } from './fieldset'

const fieldsets = fieldset.array()

type Fieldsets = z.infer<typeof fieldsets>

export { fieldsets, type Fieldsets }
