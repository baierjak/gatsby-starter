import {PropTypes} from "../dependencies"

const LessonsTypes = {
    lessons: PropTypes.arrayOf(
        PropTypes.shape({
            node: PropTypes.shape({
                id: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired
            })
        })
    )
}

export default LessonsTypes
