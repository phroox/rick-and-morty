import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
// import "primereact/resources/themes/lara-dark-teal/theme.css";     //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons


function App({ Component, pageProps: { session, ...pageProps} }: AppProps) {
  
  return (
    <SessionProvider session={session}>
        <Component {...pageProps} />
    </SessionProvider>
  ) 

}

export default App; 