import z from 'zod'
import { field } from './field'

const dateField = field.extend({
  type: z.literal('date'),
  defaultValue: z.date().optional()
})

type DateField = z.infer<typeof dateField>

export { dateField, type DateField }
