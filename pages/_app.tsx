import '@fontsource/archivo'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import GlobalStyles from '../components/GlobalStyles'
import { SessionProvider } from 'next-auth/react'

function TemplateApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <RecoilRoot>
      <SessionProvider session={session}>
        <Component {...pageProps} />
        <GlobalStyles />
      </SessionProvider>
    </RecoilRoot>
  )
}

export default TemplateApp
