import BlankLayout from '@/components/Layouts/BlankLayout'
import '@/styles/globals.css'
import { GoogleFonts } from 'next-google-fonts'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  return <>
    <BlankLayout>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Changa+One&family=Jost&family=Poppins:wght@400;600;700&family=Roboto+Mono&display=swap" />
      <Component {...pageProps} />
    </BlankLayout>
  </>
}
