import {React, PropTypes, UI, Link, SVG} from "../dependencies"
import {LessonsTypes} from "./index"

const Lessons = ({lessons, styles}) => {
    return (
        <div className={styles.lessons}>
            <UI.Title as={UI.TitleTypes.H2}>
                Trending lessons
            </UI.Title>
            <div className={styles.list}>
                {lessons.length ? (
                    lessons.map(item => (
                        <Link to="/" className={styles.item} key={item.node.id}>
                            <div className={styles.itemImage}>
                                <img src={`https://source.unsplash.com/random/720x444?v=${item.node.id}`} alt="@TODO" />
                            </div>
                            <div className={styles.itemInfo}>
                                <div className={styles.properties}>
                                    <div className={styles.property}>
                                        <SVG src="@TODO" />
                                        <span>4.8</span>
                                    </div>
                                    <div className={styles.property}>
                                        <span>90 min</span>
                                    </div>
                                </div>
                                <UI.Title as={UI.TitleTypes.H3}>{item.node.title}</UI.Title>
                            </div>
                        </Link>
                    ))
                ) : (
                        <div className={styles.empty}>
                            <UI.Title as={UI.TitleTypes.H4}>There are currently no trending lessons</UI.Title>
                        </div>
                    )}
            </div>
        </div>
    )
}

Lessons.propTypes = {
    styles: PropTypes.shape({
        lessons: PropTypes.string.isRequired,
        list: PropTypes.string.isRequired,
        item: PropTypes.string.isRequired,
        itemImage: PropTypes.string.isRequired,
        itemInfo: PropTypes.string.isRequired,
        properties: PropTypes.string.isRequired,
        property: PropTypes.string.isRequired,
        empty: PropTypes.string.isRequired,
    }),
    ...LessonsTypes
}

export default Lessons
