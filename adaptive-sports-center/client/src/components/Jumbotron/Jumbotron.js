import React from 'react'
import { Button } from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react'

const Jumbotron = () => (
  <Segment stacked>
    Pellentesque habitant morbi tristique senectus.
      <Button.Group>
      <Button>Cancel</Button>
      <Button.Or />
      <Button positive>Save</Button>
    </Button.Group>
  </Segment>
)

export default Jumbotron;
