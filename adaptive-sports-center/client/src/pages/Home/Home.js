import React from 'react'
import { Button, Card, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import './Home.css';



// _handleFormSubmit = event => {
//   event.preventDefault();
//   console.log("signin clicked");
// }

const Home = () => (




  <div className='login-form'>
    {/*
Heads up! The styles below are necessary for the correct render of this example.
You can do same with CSS, the main idea is that all the elements up to the `Grid`
below must have a height of 100%.
*/}

    <Grid columns={3} centered>

      <Grid.Column>
        <Image className="homeImages" src={'assets/images/track2.jpg'} />
        <Image className="homeImages" src={'assets/images/swimming.jpg'} />
        <Image className="homeImages" src={'assets/images/ski.jpg'} />
        <Image className="homeImages" src={'assets/images/golf.jpg'} />
      </Grid.Column>

      <Grid.Column>
        <Segment>
          <div className="pageTitle">
            <h1><u>Adaptive Sports Center</u></h1>
          </div>

          <Message>
            <h4>Adaptive Sports Center is a place to keep track of upcoming adaptive sports events in one convenient location. </h4>
          </Message>
          <Header as='h2' color='teal' textAlign='center'>

          </Header>
        </Segment>
        <Segment>
          <div className="featured"><h2>Featured Events</h2></div>
        </Segment>
        <Segment>



          <Card fluid>
            <Card.Content>
              <Image floated='left' size='small' src="http://www.usopen.org/images/pics/large/b_20170906_Mathewson.jpg" />
              <Card.Header>
                USTA National Rollers
</Card.Header>
              <Card.Meta>
                Weekly, Wednesdays 6pm - 7:30pm
</Card.Meta>
              The National Rollers is a wheelchair tennis program is hosted at the USTA National Campus in Orlando, Florida. There are no limits to the program. All players of varying levels, disabilities, and experience are welcome. Tennis wheelchairs and racquets will be provided.
</Card.Content>
            <Card.Content href="www.ustanationalcampus.com/nationalrollers">USTA National Rollers Website
</Card.Content>
          </Card>

          <Card fluid>
            <Card.Content>
              <Image floated='left' size='small' src="http://www.oregonpva.org/uploads/5/3/7/6/53764083/38th-games-registration-information-1_orig.jpg" />
              <Card.Header>
                38th National Veterans Wheelchair Games
</Card.Header>
              <Card.Meta>
                July 30 - Aug 5
</Card.Meta>
              The 38th annual National Disabled Veterans Wheelchair Games, taking place in Orlando, FL, serves Veterans with Spinal Cord Injury, Multiple Sclerosis, Amputations and other central neurological impairments with the goal to increase their independence, healthy activity and quality of life through wheelchair sports and recreation.
</Card.Content>
            <Card.Content href="http://wheelchairgames.org/">NVWG Website
</Card.Content>
          </Card>

        </Segment>


        <a href="http://localhost:8080/scrape"> <Button color="teal" > View All Events</Button></a>
        <a href="/inputevent"><Button color="teal" >Submit An Event</Button></a>
      </Grid.Column>

      <Grid.Column>

        <Image className="homeImages" src={'assets/images/rugby.jpg'} />
        <Image className="homeImages" src={'assets/images/archery.jpg'} />
        <Image className="homeImages" src={'assets/images/cycling.jpg'} />
        <Image className="homeImages" src={'assets/images/track.jpg'} />

      </Grid.Column>
    </Grid>
  </div>
)

export default Home;

//For signin, how will I track if a user is logged in?