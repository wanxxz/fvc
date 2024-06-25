import z from 'zod'
import { field } from './field'

const booleanField = field.extend({
  type: z.literal('boolean'),
  defaultValue: z.boolean().optional()
})

type BooleanField = z.infer<typeof booleanField>

export { booleanField, BooleanField }
