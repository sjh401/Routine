import Footer from './Footer'
import Header from './Header'
// import './Layout.css'

export default function Layout(props) {
    const {handleLogout} = props;
    return (
        <>
            <Header
                handleLogout={handleLogout}
            />
            <main>
                {props.children}
            </main>
            <Footer/>
        </>
    )
}
