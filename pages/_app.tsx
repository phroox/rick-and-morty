import '../styles/globals.css';
import { useState } from 'react';
import type { AppProps } from 'next/app';

import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css';

import Layout from '../components/layout';
import { ThemeContext } from '../contexts/contexts';

export default function App({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState('dark');
    return (
        <ThemeContext.Provider value={theme}>
            <Layout setTheme={setTheme}>
                <Component {...pageProps} />
            </Layout>
        </ThemeContext.Provider>
    );
}
