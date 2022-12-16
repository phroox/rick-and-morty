import '../styles/globals.css'
import type { AppProps } from 'next/app'

import "primereact/resources/themes/lara-dark-teal/theme.css";     //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
