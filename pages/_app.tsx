import Head from "next/head";
import type { AppProps } from "next/app";

import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Next.js Template</title>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            </Head>

            <Component {...pageProps} />
        </>
    );
}
