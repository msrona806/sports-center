import React from 'react'
import { Button } from 'semantic-ui-react'



const SubButton = props => (
 

<Button {...props} >
<a className="ui teal button" >
{props.children}
Teal Button</a>
</Button>
)
export default SubButton;

