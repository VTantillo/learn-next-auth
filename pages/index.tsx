import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import tw from 'twin.macro'
import Header from '../components/Header'
import { COLORS } from '../lib/design-tokens'
import HomeBanner from '../sections/home/HomeBanner'
import {
  HomeBannerContent,
  HOME_BANNER_CONTENT,
} from '../sections/home/HomeBanner/home-banner.content'

const MainWrapper = tw.div`grid place-content-center mt-8`

type HomePageProps = {
  bannerContent: HomeBannerContent
}
const HomePage: NextPage<HomePageProps> = ({ bannerContent }) => {
  return (
    <>
      <Head>
        <title>Template Next App - Home Page</title>
        <meta name="description" content="Template" />
      </Head>

      <div tw="bg-ocean min-h-full">
        <Header />
        <MainWrapper>
          <HomeBanner content={bannerContent} />
        </MainWrapper>
      </div>
    </>
  )
}

export default HomePage

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  return {
    props: {
      bannerContent: HOME_BANNER_CONTENT,
    },
  }
}
