import Footer from './Footer'
import Header from './Header'
// import './Layout.css'

export default function Layout(props) {
    return (
        <>
            <Header/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </>
    )
}
