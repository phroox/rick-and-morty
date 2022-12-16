import '../styles/globals.css';
import type { AppProps } from 'next/app';

import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css';

import Layout from '../components/layout';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
