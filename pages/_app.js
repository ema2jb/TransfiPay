import '../styles/globals.css'
import '../styles/website.scss'
import '../styles/dashboard.scss'

function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
  </>
}

export default MyApp
