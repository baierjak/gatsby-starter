import {React, PropTypes, Link, FormattedMessage, SVG, BurgerOpenIcon} from "../dependencies"

const Header = ({className, styles}) => {
    return (
        <header className={`${styles.header} ${className || ""}`}>
            <Link to="/" className={styles.logo}>
                <span>Tutify</span>
            </Link>
            <nav className={styles.navigation}>
                <div className={styles.hamburger}>
                    <SVG src={BurgerOpenIcon} />
                    {/* @DEBUG */}
                    <span>X</span>
                </div>
                <ul className={styles.menu}>
                    <li>
                        <Link to="/">
                            <FormattedMessage id="pages.home" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/browse">
                            <FormattedMessage id="pages.browse" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

Header.propTypes = {
    styles: PropTypes.shape({
        header: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
        navigation: PropTypes.string.isRequired,
        hamburger: PropTypes.string.isRequired,
        menu: PropTypes.string.isRequired,
    }),
    className: PropTypes.string
}

export default Header
