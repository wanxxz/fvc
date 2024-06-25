import z from 'zod'
import { fields } from './fields'

const fieldset = z.object({
  id: z.string().ulid(),
  name: z.string(),
  fields
})

type Fieldset = z.infer<typeof fieldset>

export { fieldset, type Fieldset }
