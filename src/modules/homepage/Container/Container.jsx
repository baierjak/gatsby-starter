import { React, PropTypes, FormattedMessage } from "../dependencies"

const Container = ({ styles }) => {
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>
                <FormattedMessage id="homepage.title" />
            </h1>
        </div>
    )
}

Container.propTypes = {
    styles: PropTypes.shape({
        main: PropTypes.string.isRequired,
    }).isRequired,
}

export default Container
