import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { authConfig } from '~/pages/api/auth/[...nextauth]'
import { Login } from './login'

export default async function Home() {
  const session = await getServerSession(authConfig)

  return (
    <main className="grid gap-y-16">
      <header className="  relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-amber-200 after:via-red-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-amber-700 before:dark:opacity-10 after:dark:from-orange-900 after:dark:via-orange-400 after:dark:opacity-40 before:lg:h-[360px]">
        <strong className="text-8xl">
          Get in
          <small className="text-lg inline-block pl-2 text-gray-400">
            ...if you can
          </small>
        </strong>
      </header>

      <article className="grid place-items-center">
        {Boolean(session) ? (
          <Link
            href="/in"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl`}>Hi friend! 🌊</h2>
            <p className="text-sm text-gray-400">
              If you’re a friend, speak the word and enter.
            </p>
          </Link>
        ) : (
          <Login />
        )}
      </article>
    </main>
  )
}
