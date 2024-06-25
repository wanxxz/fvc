import { Schema, type CollectionDefinition } from '@triplit/db'

const fieldset = {
  schema: Schema.Schema({
    id: Schema.Id(),
    name: Schema.String()
  }),
  rules: {}
} as CollectionDefinition

export { fieldset }
