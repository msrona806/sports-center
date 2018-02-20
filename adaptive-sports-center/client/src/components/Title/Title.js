import React from 'react'
import { Grid, Message, Header, Image } from 'semantic-ui-react'
import './Title.css'

const Title = () => (
  <Grid.Row>
    <Grid.Column>
      <Message>
        <Header as='h1'>Adaptive Sports Center</Header>
        <Image.Group size='medium'>
          <Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAKxlKq81QixdnlsY3aDjea24aL_NjDiX9-y0BL7w3vmRellEW'} />
          <Image src={'https://i0.wp.com/www.nonahoodnews.com/wp-content/uploads/2017/11/FB_IMG_1508215210047.jpg?resize=960%2C720'} />
          <Image src={'https://upload.wikimedia.org/wikipedia/commons/f/f1/251000_-_Wheelchair_basketball_Sandy_Blythe_shoots_-_3b_-_2000_Sydney_match_photo.jpg'} />
        </Image.Group>
      </Message>
    </Grid.Column>
  </Grid.Row>
)

export default Title;
