import NextAuth from 'next-auth/next'
import GithubProvider from 'next-auth/providers/github'

export default NextAuth({
  secret: process.env.secret!,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
})
