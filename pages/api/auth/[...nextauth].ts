import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { XataAdapter } from '@next-auth/xata-adapter'
import { XataClient } from '~/lib/xata.codegen.server'

const client = new XataClient()

export const authConfig = {
  adapter: XataAdapter(client),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
}

export default NextAuth(authConfig)
