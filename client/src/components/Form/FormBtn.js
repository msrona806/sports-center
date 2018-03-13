import React from "react";
import { Button } from 'semantic-ui-react'


export const FormBtn = props =>

<Button {...props} >
<a className="ui teal button" >
{props.children}
Teal Button</a>
</Button>



// export default SubButton;

//   <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
//     {props.children}
//   </button>;
