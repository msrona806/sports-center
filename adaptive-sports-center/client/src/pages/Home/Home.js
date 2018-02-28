import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import './Home.css';



const Home = () => (
  <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}

    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >

    <Grid.Column width={4}>
    <Image src={'https://bloximages.chicago2.vip.townnews.com/columbustelegram.com/content/tncms/assets/v3/editorial/f/ee/feedc80e-d6f7-5ee5-b800-5dbeab4dba04/5a42f547a8f8c.image.jpg?resize=1200%2C1127'} />
    <Image src={'http://gametimeforlife.com/wp-content/uploads/2016/01/AngelCityGamesToddlerSprintParticipants-1024x771.jpg'} />
    <Image src={'http://www4.pictures.zimbio.com/gi/Invictus+Games+Day+Four+Sitting+Volleyball+lsk1QhbAdHex.jpg'} />
    <Image src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRXc3qoa0wu5mgnYcnjl0hJlU4Xi6_JltNTFgTzS-KTs92drc4_A'} />
    </Grid.Column>

      <Grid.Column width={8}>

      <div className = "pageTitle">
      <h1><u>Adaptive Sports Center</u></h1>
      </div>
      
      <Message>
        <h4>Adaptive Sports Center is a place to keep track of upcoming adaptive sports events. Login to view current events and save events you may be interested in. </h4>
      </Message>
        <Header as='h2' color='teal' textAlign='center'>
          
          {' '}Log-in to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Button color='teal' fluid size='large'>Login</Button>
          </Segment>
        </Form>
        <form action="/signup">
        <input type="submit" value="New to us?" />
        </form>
      </Grid.Column>

      <Grid.Column width={4}>
   
    <Image src={'https://www.metroparkstacoma.org/files/library/blunk-wheelchair-basketball-8-2016-b_l.jpg'} />
    <Image src={'https://www.passionatepeople.invacare.eu.com/wp-content/uploads/2017/04/Adaptive-Skiing-850x541.jpg'} />
    <Image src={'https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/13620056_966965460067959_8610421579503093264_n.jpg?oh=131747cbed0888e832903ce34dbfe2e1&oe=5B219AD2'} />
    <Image src={'http://www.sellbyownerlistings.com/wp-content/uploads/dazzling-torch-passes-to-37th-national-veterans-wheelchair-games-in-cincinnati-dimensions-of-convertable-wheel-chair-flag-portraits-640x498.jpg'} />
    
    </Grid.Column>
    </Grid>
  </div>
)

export default Home;