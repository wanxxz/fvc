import { Fields } from './fields'

const fields: Fields = [
  {
    id: '...',
    name: 'name',
    label: 'Name',
    type: 'string',
    defaultValue: ''
  },
  {
    id: '...',
    name: 'age',
    label: 'Age',
    type: 'number',
    defaultValue: 0
  },
  {
    id: '...',
    name: 'member',
    label: 'Member',
    type: 'boolean',
    defaultValue: false
  },
  {
    id: '...',
    name: 'gender',
    label: 'Gender',
    type: 'set',
    values: ['male', 'female'],
    defaultValue: ['male']
  },
  {
    id: '...',
    name: 'birthday',
    label: 'Birthday',
    type: 'date',
    defaultValue: new Date()
  },
  {
    id: '...',
    name: 'profile',
    label: 'Profile',
    type: 'json',
    defaultValue: ''
  }
]

export { fields }
