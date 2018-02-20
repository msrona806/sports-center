import React from 'react'
import { Table, Grid } from 'semantic-ui-react'
import Title from '../../components/Title';
import Footer from '../../components/Footer';

const MyEvents = () => (
  <div>
    <Title />
    <Grid>
    <Grid.Row>
    <Grid.Column width={8}>
      <Table color='teal'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Event</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Event 1</Table.Cell>
            <Table.Cell>4/15/2018</Table.Cell>
        
          </Table.Row>
          <Table.Row>
            <Table.Cell>Event 2</Table.Cell>
            <Table.Cell>3/30/2018</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      </Grid.Column>
      </Grid.Row>
      </Grid>
    <Footer />
  </div>
)

export default MyEvents