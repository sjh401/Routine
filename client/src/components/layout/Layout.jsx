import Footer from './Footer'
import Header from './Header'
import './Layout.css'

export default function Layout(props) {
    const { handleLogout, currentUser } = props;
    return (
        <>
            <Header
                handleLogout={handleLogout}
                currentUser={currentUser}
            />
            <main>
                {props.children}
            </main>
            <Footer/>
        </>
    )
}
