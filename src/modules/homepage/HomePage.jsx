import {React, PropTypes} from "./dependencies"
import Container from "./Container"
import Hero from "./Hero"
import Lessons from "./Lessons"

const HomePage = ({lessons}) => {
    return (
        <Container>
            <Hero />
            <Lessons lessons={lessons} />
        </Container>
    )
}

// HomePage.propTypes = {
// @TODO: import shape from Lessons
// }

export default HomePage
