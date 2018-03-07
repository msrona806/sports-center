import React from 'react'
import { Button, Modal, Image, Header } from 'semantic-ui-react'

const AgreeModal = () => (
  <Modal trigger={<Button>Terms of Agreement</Button>}>
    <Modal.Header>Terms of Agreement</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>We've found the following gravatar image associated with your e-mail address.</p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default AgreeModal