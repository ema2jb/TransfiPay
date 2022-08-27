import '../styles/globals.css'
import '../styles/website.scss'
import '../styles/dashboard-auth.scss'
import '../styles/dashboard-layout.scss'
import '../styles/dashboard-body.scss'

import {Provider} from 'react-redux'
import store from '../Store/'

function MyApp({ Component, pageProps }) {
  return <>
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
  </>
}

export default MyApp
