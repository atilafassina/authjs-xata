import 'server-only'
import { getXataClient } from './xata.codegen.server'

const xata = getXataClient()

export const fetchTodos = async (email: string) => {
  const { records } = await xata.db.todos
    .filter({
      author: {
        email,
      },
    })
    .sort('createdAt', 'desc')
    .getPaginated({
      pagination: {
        size: 50,
      },
    })

  return records
}
