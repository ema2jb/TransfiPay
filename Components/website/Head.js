import Head from "next/head"

const Header = ()=>{
    return<>
    <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TransFi-Home</title>
        <meta name="description" content="Transfi pay app" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/css/bootstrap-grid.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600;700&display=swap" rel="stylesheet"></link>
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
            crossOrigin="anonymous"
            referrerpolicy="no-referrer"
        />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    </Head> 
    </>
}

export default Header