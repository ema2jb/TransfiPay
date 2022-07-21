import classes from './Settings.module.scss'


const Header = ({activeHeader, activeHeaderHandler}) =>{

    return <>
        <div className={classes['settings-header']}>
            <div onClick={()=>activeHeaderHandler('PI')} className={ `${classes['header-item']}  ${activeHeader==='PI' && `${classes.active}`}` }>
                <h1>Personal Information</h1>
            </div>
            <div onClick={()=>activeHeaderHandler('KV')} className={ `${classes['header-item']}  ${activeHeader==='KV' && `${classes.active}`}` }>
                <h1>KYC Verification</h1>
            </div>
            <div onClick={()=>activeHeaderHandler('AK')} className={ `${classes['header-item']}  ${activeHeader==='AK' && `${classes.active}`}` }>
                <h1>API Key</h1>
            </div>
            <div onClick={()=>activeHeaderHandler('SE')} className={ `${classes['header-item']}  ${activeHeader==='SE' && `${classes.active}`}` }>
                <h1>Security</h1>
            </div>
        </div>
    </>
}

export default Header