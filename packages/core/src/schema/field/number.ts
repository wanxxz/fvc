import z from 'zod'
import { field } from './field'

const numberField = field.extend({
  type: z.literal('number'),
  defaultValue: z.number().optional()
})

type NumberField = z.infer<typeof numberField>

export { numberField, type NumberField }
