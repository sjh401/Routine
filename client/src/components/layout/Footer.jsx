import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';

export default function Footer() {
    return  (
        <footer className="flex-row-evenly-center">
            <div>
                Stephen Harrity
            </div>
            <div className="icon-div flex-row-evenly-center">
                <a href="https://github.com/sjh401" target="_blank" rel="noreferrer"><GitHub className="icons"></GitHub></a>
                <a href="https://linkedin.com/in/harritystephen" target="_blank" rel="noreferrer"><LinkedIn className="icons"></LinkedIn></a>
            </div>
        </footer>
    )       
}
