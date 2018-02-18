import React, { Component } from "react";
import EventCard from "../../components/EventCard";
import {Layout} from "antd";
const { Header, Footer, Sider, Content } = Layout;

// import { DatePicker } from 'antd';

class Events extends Component {
  render() {
    return (
      <div>
        <h1>Upcoming Events</h1>

        <EventCard />
         <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
    
  </div>
    )
  }
}

export default Events;