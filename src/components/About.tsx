import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';

const About = () => {
    return (
        <List>
            <h4>Version 2.0.0</h4>
            <Link to='/'>Go Back</Link>
        </List>
    )
}

export default About
