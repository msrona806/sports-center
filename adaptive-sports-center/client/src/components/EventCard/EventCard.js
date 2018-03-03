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

const EventCard = ({ id, location, event, details, date }) => (
<Card>
  <div className="ui cards">
    <div className="teal card">
      <div className="content">
        <div className="header">{event}</div>
        <div className="date">{date}</div>
        <div className="meta">{details}</div>
        <div className="description">
          {location}
        </div>
        <span className="right floated star">
          <i className="star icon"></i>
          Favorite
    </span>
      </div>
    </div>
  </div>
</Card>

)

export default EventCard

