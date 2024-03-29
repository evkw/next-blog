import Search from '@components/Search'

export const Header = (props) => {
    return (
        <header className="grid-container">
            <nav className="top-nav">
                <div className="top-nav__logo">
                &#123; Ev's_Dev &#125;
                </div>

                <Search className="top-nav__search" />
            </nav>

            <div className="border mt-medium"></div>
        </header>
    )
}

export default Header