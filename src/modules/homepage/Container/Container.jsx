import {React, PropTypes} from "../dependencies"

const Container = ({styles, children}) => {
    return (
        <div className={styles.main}>
            {children}
        </div>
    )
}

Container.propTypes = {
    styles: PropTypes.shape({
        main: PropTypes.string.isRequired,
    }).isRequired,
    children: PropTypes.node.isRequired
}

export default Container
