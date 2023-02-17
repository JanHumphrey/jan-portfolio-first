import BlankLayout from '@/components/Layouts/BlankLayout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <BlankLayout>
    <Component {...pageProps} />
    </BlankLayout>
  </>
}
