import React from 'react'
// import { Grid, Message, Header, Image } from 'semantic-ui-react'
import './SignUp.css'
import { FormBtn } from '../../components/Form'

const SignUp = () => (
  <div>
   
     
<div className="user">
<label> Username:</label>
<input name="username" type="text" placeholder="Create username"
  onChange={this.handleChange} />
</div>


<div className="password">
<label> Password:</label>
<input name="password" type="password" placeholder="Create password"
  onChange={this.handleChange} />
</div>

<div className="email">
<label> Email:</label>
<input name="email" type="email" placeholder="Enter email address"
  onChange={this.handleChange} />
</div>




        <FormBtn/>
  </div>

  
)

export default SignUp;
