import z from 'zod'
import { booleanField, dateField, jsonField, numberField, setField, stringField } from './field'

const fields = z.union([stringField, numberField, booleanField, setField, dateField, jsonField]).array()

type Fields = z.infer<typeof fields>

export { fields, type Fields }
