import z from 'zod'
import { field } from './field'

const setField = field
  .extend({
    type: z.literal('set'),
    values: z.string().array(),
    defaultValue: z.string().array().optional()
  })
  .refine(
    val => _.isEmpty(val.defaultValue) || _.chain(val?.defaultValue).intersection(val.values).isEmpty().value(),
    () => ({ code: z.ZodIssueCode.custom, path: ['default'], message: 'value incompatible' })
  )

type SetField = z.infer<typeof setField>

export { setField, type SetField }
