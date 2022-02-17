import LinkedIn from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material';
import GitHub from '@mui/icons-material/GitHub'

export default function Footer() {
    return  (
        <footer className="footer-div">
        <div className="footer-div">
            <div>Stephen Harrity</div>
            <a href="https://github.com/sjh401" target="_blank" rel="noreferrer"><GitHub className="icons"></GitHub></a>
            <a href="https://linkedin.com/in/harritystephen" target="_blank" rel="noreferrer"><LinkedIn className="icons"></LinkedIn></a>
        </div>
        </footer>
    )       
}
