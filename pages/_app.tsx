import { ThemeProvider } from "./themeprovider";
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => (
    <html lang="en">
        <body
            className={`${inter.className} bg-slate-50 dark:bg-[#0d1117] ${switchThemeDuration}`}
        >
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <ThemeSwitcher />
                <Component {...pageProps} />
            </ThemeProvider>
        </body>
    </html>

)

export default MyApp
