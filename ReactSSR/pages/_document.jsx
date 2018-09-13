import Document, { Head, Main, NextScript } from 'next/document'
import CustomFooter from '../components/CustomFooter'
export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html>
            <Head>
                <link rel="stylesheet" href="/_next/static/style.css" />
            </Head>
            <body className="custom_class wrapper">
            <Main />
            <CustomFooter/>
            </body>
            <NextScript />
            <div style={{display: 'none'}}>
                <script async="async" dangerouslySetInnerHTML={{ __html: `
                var _hmt = _hmt || [];
                                (function() {
                                var hm = document.createElement("script");
                                hm.src = "https://hm.baidu.com/hm.js?1777f0fe0a70e49ecffcc2f72658af37";
                                var s = document.getElementsByTagName("script")[0];
                                s.async = true;
                                s.parentNode.insertBefore(hm, s);
                            })();`}} />
            </div>
            </html>
        )
    }
}