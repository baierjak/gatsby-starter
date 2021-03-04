import {connect as connectFela} from "react-fela"
import Lessons from "./Lessons"
import * as styles from "./Lessons.styles"


export {default as LessonsTypes} from "./Lessons.types"
export default connectFela(styles)(Lessons)
