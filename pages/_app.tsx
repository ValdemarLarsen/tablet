import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'




const MyApp = ({ Component, pageProps }) => (

    <body>

        <ThemeProvider attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
    </body>

)

export default MyApp