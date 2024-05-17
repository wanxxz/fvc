import z from 'zod'

const field = z.object({
  id: z.string().ulid(),
  name: z.string().min(1),
  label: z.string().min(1)
})

export { field }
