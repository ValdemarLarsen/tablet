import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import Layout from './layout';


const MyApp = ({ Component, pageProps }) => (
    <Layout>
        <ThemeProvider attribute="class" enableColorScheme={false}>
            <Component {...pageProps} />
        </ThemeProvider>
    </Layout>
)

export default MyApp
