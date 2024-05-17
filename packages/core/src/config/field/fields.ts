import z from 'zod'
import { booleanField } from './boolean'
import { dateField } from './date'
import { jsonField } from './json'
import { numberField } from './number'
import { setField } from './set'
import { stringField } from './string'

const fields = z.union([stringField, numberField, booleanField, setField, dateField, jsonField]).array()

type Fields = z.infer<typeof fields>

export { fields, type Fields }
