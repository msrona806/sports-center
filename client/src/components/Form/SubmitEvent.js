import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Select, TextArea } from 'semantic-ui-react'

const options = [
  { key: 'AL', text: 'Alabama', value: 'Alabama' },
  { key: 'AK', text: 'Alaska', value: 'Alaska' },
  { key: 'AZ', text: 'Arizona', value: 'Arizona' },
  { key: 'AR', text: 'Arkansas', value: 'Arkansas' },
  { key: 'CA', text: 'California', value: 'California' },
  { key: 'CO', text: 'Colorado', value: 'Colorado' },
  { key: 'CT', text: 'Connecticut', value: 'Connecticut' },
  { key: 'DE', text: 'Delaware', value: 'Delaware' },
  { key: 'DC', text: 'District Of Columbia', value: 'District of Columbia' },
  { key: 'FL', text: 'Florida', value: 'Florida' },
  { key: 'GA', text: 'Georgia', value: 'Georgia'},
  { key: 'HI', text: 'Hawaii', value: 'Hawaii' },
  { key: 'ID', text: 'Idaho', value: 'Idaho'},
  { key: 'IL', text: 'Illinois', value: 'Illinois' },
  { key: 'IN', text: 'Indiana', value: 'Indiana' },
  { key: 'IA', text: 'Iowa', value: 'Iowa' }, 
  { key: 'KS', text: 'Kansas', value: 'Kansas' },
  { key: 'KY', text: 'Kentucky', value: 'Kentucky' },
  { key: 'LA', text: 'Louisiana', value: 'Louisiana' },
  { key: 'ME', text: 'Maine', value: 'Maine'},
  { key: 'MD', text: 'Maryland', value: 'Maryland' },
  { key: 'MA', text: 'Massachusetts', value: 'Massachusetts'},
  { key: 'MI', text: 'Michigan', value: 'Michigan' },
  { key: 'MN', text: 'Minnesota', value: 'Minnesota' },
  { key: 'MS', text: 'Mississippi', value: 'Mississippi' },
  { key: 'MO', text: 'Missouri', value: 'Missouri'},
  { key: 'MT', text: 'Montana', value: 'Montana'},
  { key: 'NE', text: 'Nebraska', value: 'Nebraska' },
  { key: 'NV', text: 'Nevada', value: 'Nevada' },
  { key: 'NH', text: 'New Hampshire', value: 'New Hampshire'},
  { key: 'NJ', text: 'New Jersey', value: 'New Jersey' },
  { key: 'NM', text: 'New Mexico', value: 'New Mexico' },
  { key: 'NY', text: 'New York', value: 'New York' },
  { key: 'NC', text: 'North Carolina', value: 'North Carolina' },
  { key: 'ND', text: 'North Dakota', value: 'North Dakota'},
  { key: 'OH', text: 'Ohio', value: 'Ohio'},
  { key: 'OK', text: 'Oklahoma', value: 'Oklahoma' },
  { key: 'OR', text: 'Oregon', value: 'Oregon' },
  { key: 'PA', text: 'Pennsylvania', value: 'Pennsylvania'},
  { key: 'RI', text: 'Rhode Island', value: 'Rhode Island'},
  { key: 'SC', text: 'South Carolina', value: 'South Carolina' },
  { key: 'SD', text: 'South Dakota', value: 'South Dakota' },
  { key: 'TN', text: 'Tennessee', value: 'Tennessee' },
  { key: 'TX', text: 'Texas', value: 'Texas' },
  { key: 'UT', text: 'Utah', value: 'Utah'},
  { key: 'VT', text: 'Vermont', value: 'Vermont'},
  { key: 'VA', text: 'Virginia', value: 'Virginia' },
  { key: 'WA', text: 'Washington', value: 'Washington' },
  { key: 'WV', text: 'West Virginia', value: 'West Virginia'},
  { key: 'WI', text: 'Wisconsin', value: 'Wisconsin' },
  { key: 'WY', text: 'Wyoming', value: 'Wyoming' },
  { key: 'In', text: 'International', value: 'International' }
]

class SubmitEvent extends Component {
  
  state = {}

handleChange = (e) =>{
  const { name, value } = e.target;
  this.setState({
    [name]: value
  });
}
  _handleFormSubmit = (event)=>{
    event.preventDefault();
    console.log("State at handle form submit: ",this.state)
  };

  render() {
    
    console.log(this.state)
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Field control={Input} name="title" label='Event Title' placeholder='title' onChange={this.handleChange} />
          
          <Form.Field control={Select} name="Location" label='Location' options={options} placeholder='location' onChange={this.handleChange} />
          <Form.Field control={Input} name="Link"  label='Event Link' placeholder='link' onChange={this.handleChange} />
        </Form.Group>
        
        <Form.Field control={TextArea} name="Description" label='Event Description' placeholder='Tell us more about your event' onChange={this.handleChange}/>
        <Form.Field control={Checkbox} name="Agreement" label='I agree to the Terms and Conditions' />
        <Form.Field control={Button}  onClick={this._handleFormSubmit}>Submit</Form.Field>
      </Form>
    )
  }
}

export default SubmitEvent;