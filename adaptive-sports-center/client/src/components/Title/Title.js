import React from 'react'
import { Grid, Message, Header, Image } from 'semantic-ui-react'
import './Title.css'

const Title = () => (
  <Grid.Row>
    <Grid.Column>
      <Message>
        <Header as='h1'>Adaptive Sports Center</Header>
        <Image.Group size='medium'>
          <Image src={'https://media.defense.gov/2014/Oct/01/2001132689/655/438/0/651325-W-RXB58-189.jpg'} />
          <Image src={'https://i0.wp.com/www.nonahoodnews.com/wp-content/uploads/2017/11/FB_IMG_1508215210047.jpg?resize=960%2C720'} />
          <Image src={'https://pbs.twimg.com/media/CsPo2UOUAAA0MoZ.jpg'} />
          {/* <Image src={'https://upload.wikimedia.org/wikipedia/commons/f/f1/251000_-_Wheelchair_basketball_Sandy_Blythe_shoots_-_3b_-_2000_Sydney_match_photo.jpg'} /> */}
        </Image.Group>
      </Message>
    </Grid.Column>
  </Grid.Row>
)

export default Title;
