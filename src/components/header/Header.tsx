import Search from '../Search'

export const Header = (props) => {
    return (
        <header className="grid-container">
            <nav className="top-nav">
                <div className="top-nav__logo">
                    <a href="/">Icon</a>
                </div>

                <Search className="top-nav__search" />
            </nav>

            <div className="border mt-medium"></div>
        </header>
    )
}

export default Header