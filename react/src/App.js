import React from 'react';
import { connect } from 'react-redux';
import { Container, Segment, Header, List } from 'semantic-ui-react';

const App = ({ config }) => {
  console.log(config, Object.keys(config));
  return (
    <Container>
      <Header as="h1">Refresh config</Header>
      <p>This configuration is received via WebSocket from a JSON config file</p>
      <Segment>
        <List>
          {Object.keys(config).map(key => (
            <List.Item key={key}>{`${key}: ${config[key]}`}</List.Item>
          ))}
        </List>
      </Segment>
    </Container>
  );
};

export default connect(state => ({ config: state }))(App);
