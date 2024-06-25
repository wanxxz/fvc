import z from 'zod'
import { booleanField, dateField, jsonField, numberField, setField, stringField } from '../field'
import { fieldset } from '../fieldset'

const single = z.union([
  stringField.shape.defaultValue,
  booleanField.shape.defaultValue,
  numberField.shape.defaultValue,
  dateField.shape.defaultValue,
  jsonField.shape.defaultValue,
  setField._def.schema.shape.defaultValue
])

const multi = single.array()

const value = single.or(multi)
const values = value.array()

const valueset = z.object({
  id: z.string().ulid(),
  fieldsetId: fieldset.shape.id,
  values
})

type Valueset = z.infer<typeof valueset>

export { valueset, type Valueset }
