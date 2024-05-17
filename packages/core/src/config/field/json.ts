import z from 'zod'
import { field } from './field'

const literal = z.union([z.string(), z.number(), z.boolean(), z.null()])
type Literal = z.infer<typeof literal>
type Json = Literal | { [key: string]: Json } | Json[]
const json: z.ZodType<Json> = z.lazy(() => z.union([literal, z.array(json), z.record(json)]))

const jsonField = field.extend({
  type: z.literal('json'),
  defaultValue: json.optional()
})

type JsonField = z.infer<typeof jsonField>

export { json, jsonField, type JsonField }
