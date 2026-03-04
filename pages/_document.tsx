import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    const lang = this.props.__NEXT_DATA__?.props?.pageProps?.lang || 'cs'
    return (
      <Html lang={lang}>
        <Head>
          <link
            rel="preload"
            href="/fonts/xiberon.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
