import { ReactComponent as GithubIcon } from '../../assets/img/github.svg';

function Navbar() {
    return (
        <header>
    <nav className="container">
        <div className="dsmovie-nav-content">
            <h1>JDMovie</h1>
            <a href="https://github.com/jdbarros" target="_blank" rel="noreferrer">
                <div className="dsmovie-contact-container">
                    <GithubIcon />
                    <p className="dsmovie-contact-link"></p>
                </div>
            </a>
        </div>
    </nav>
</header>
    )
}

export default Navbar;