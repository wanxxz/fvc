import z from 'zod'
import { field } from './field'

const stringField = field.extend({
  type: z.literal('string'),
  defaultValue: z.string().optional()
})

type StringField = z.infer<typeof stringField>

export { stringField, type StringField }
