/* eslint-disable class-methods-use-this */

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* <link
                        rel="preload"
                        href="/fonts/some-font/some-font-regular-400.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin="anonymous"
                    /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
