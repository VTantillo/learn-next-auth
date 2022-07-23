import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import 'twin.macro'

const Header = () => {
  const { data: session } = useSession()

  return (
    <div tw="text-white flex justify-end gap-4 items-center p-6">
      {session ? (
        <>
          <p>Signed in as {session.user?.email}</p>
          <Link href={'/admin'}>
            <a tw="cursor-pointer hover:underline">Settings</a>
          </Link>
          <button
            tw="bg-blue-600 py-2 px-4 rounded"
            onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })}
          >
            Sign out
          </button>
        </>
      ) : (
        <>
          <p>Not signed in</p>
          <button tw="bg-blue-600 py-2 px-4 rounded" onClick={() => signIn('github')}>
            Sign In
          </button>
        </>
      )}
    </div>
  )
}

export default Header
