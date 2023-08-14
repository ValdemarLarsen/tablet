import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => (
    <div className="hidden">
        <ThemeProvider attribute="class" enableColorScheme={false}>
            <Component {...pageProps} />
        </ThemeProvider>
    </div>
)

export default MyApp
