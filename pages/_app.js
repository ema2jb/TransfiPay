import '../styles/globals.css'
import '../styles/website.scss'
import '../styles/dashboard-auth.scss'
import '../styles/dashboard-layout.scss'

function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
  </>
}

export default MyApp
