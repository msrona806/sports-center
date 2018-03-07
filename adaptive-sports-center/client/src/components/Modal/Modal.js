import React from 'react'
import { Button, Modal, Header } from 'semantic-ui-react'

const AgreeModal = () => (
  <Modal trigger={<Button>Terms of Agreement</Button>}>
    <Modal.Header>Terms of Agreement</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
        <Header>Terms and Conditions ("Terms")</Header>
        <h4> Last updated: March 07, 2018 </h4>
        <a href="https://termsfeed.com/terms-conditions/312a699f9cb4c4dcdbef2bd7e24622f7">Read Terms and Conditions </a>
        {/* <p className="terms">Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the https://github.com/msrona806/sports-center website (the "Service") operated by Adaptive Sports Center ("us", "we", or "our").</p> */}
        
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default AgreeModal

