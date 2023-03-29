import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authConfig } from '~/pages/api/auth/[...nextauth]'
import { Logout } from '../logout'
import { fetchTodos } from '~/lib/db.server'
import { Suspense } from 'react'

export default async function In() {
  const session = await getServerSession(authConfig)

  if (!session || !session.user || !session.user.email) {
    redirect('/')
  }

  const todos = fetchTodos(session.user.email)

  return (
    <article>
      <h1>Hi, {session.user?.name}</h1>
      <Suspense fallback={'loading...'}>
        <ul>
          {(await todos).map((todo) => (
            <li key={todo.id}>{todo.message}</li>
          ))}
        </ul>
      </Suspense>
      <Logout />
    </article>
  )
}
