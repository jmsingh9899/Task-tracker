import  React from 'react';
import { Header } from 'semantic-ui-react';




 const taskHeader: React.FC<{}> = () => {
    return (
        <div>
            <Header as='h1'>Task Tracker</Header>
        </div>
    )
}

export default taskHeader

