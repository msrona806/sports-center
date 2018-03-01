import React from 'react'
// import ReactDOM from 'react'
import Iframe from 'react-iframe'

// import { Grid } from 'semantic-ui-react'

// import createReactClass from 'create-react-class';

const UsaEvents = () => (

<Iframe url="http://www.disabledsportsusa.org/events/"
        width="400px"
        height="250px"
        id="usa"
        className="dsusa"
        display="initial"
        position="relative"
        allowFullScreen/>
)
export default UsaEvents;
