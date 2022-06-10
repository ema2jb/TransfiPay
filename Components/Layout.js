import Navigation from './Navigation'
import classes from './Layout.module.css'
import Footer from './Footer'

const Layout = ({children}) =>{
    return <>
        <Navigation />
            <main className={classes.main}>{children}</main>
        <Footer />
    </>
}

export default Layout