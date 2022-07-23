import { NextPage } from 'next'
import { signIn, useSession } from 'next-auth/react'
import Head from 'next/head'
import Link from 'next/link'
import 'twin.macro'
import Header from '../components/Header'

type SettingsPageProps = {}

const SettingsPage: NextPage<SettingsPageProps> = ({}) => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn('github')
    },
  })

  if (status === 'loading') {
    return null
  }

  return (
    <>
      <Head>
        <title>Settings Page</title>
      </Head>
      <div tw="bg-ocean min-h-full ">
        <Header />
        <div tw="flex flex-col items-center">
          <h1 tw="text-white text-9xl text-center">Settings Page</h1>
          <Link href={'/'}>
            <a tw="text-white cursor-pointer mt-4 text-center hover:underline">Back to home</a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default SettingsPage
