import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document<{ styleTags: any }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    const sheet = new ServerStyleSheet()

    // Step 2: Retrieve styles from components in the page
    const page = ctx.renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    )

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement()

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags }
  }
  render() {
    return (
      <Html>
        <Head>{this.props.styleTags}</Head>
        <body className="bodyClass">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
