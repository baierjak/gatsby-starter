import {React, PropTypes, UI, Header, SVG, DownLightIcon} from "../dependencies"

const Hero = ({styles}) => {
    return (
        <div className={styles.hero}>
            <Header className={styles.header} />
            <div className={styles.title}>
                <UI.Title as={UI.TitleTypes.H1}>
                    Hiqh quality <span className={styles.titleHighlighted}>1 on 1 online lectures</span> for anyone eager to learn, get better or push harder.
                </UI.Title>
            </div>
            <div className={styles.image} />
            <div className={styles.actions}>
                <div className={styles.button}>
                    <SVG src={DownLightIcon} />
                    <span>Explore lessons</span>
                </div>
            </div>
        </div>
    )
}

Hero.propTypes = {
    styles: PropTypes.shape({
        hero: PropTypes.string.isRequired,
        header: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        titleHighlighted: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        actions: PropTypes.string.isRequired,
        button: PropTypes.string.isRequired,
    })
}

export default Hero
