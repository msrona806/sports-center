import React from 'react'
import { Card } from 'semantic-ui-react'

// const items = [
//   {
//     header: 'Event',
//     description: 'Event 1 in the mountains riding cool bikes.',
//     meta: '4/15/2018',
//   },
//   {
//     header: 'Event',
//     description: 'Event 2 at the big gym doing stuff.',
//     meta: '3/30/2018',
//   },
//   {
//     header: 'Event',
//     description: 'Competition to see who can do stuff better than other people.',
//     meta: '3/30/2018',
//   }
// ]

// const EventCard = () => (
//   <Card.Group centered items={items} />
// )

const EventCard = ({ location, event, details, date }) => (
<Card>
  <div class="ui cards">
    <div class="teal card">
      <div class="content">
        <div class="header">{event}</div>
        <div class="date">{date}</div>
        <div class="meta">{details}</div>
        <div class="description">
          {location}
        </div>
        <span class="right floated star">
          <i class="star icon"></i>
          Favorite
    </span>
      </div>
    </div>
  </div>
</Card>


)

export default EventCard

