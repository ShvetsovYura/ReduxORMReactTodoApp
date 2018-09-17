import React, { Component } from 'react';
import TodoList from './Components/TodoList';
import {Container, Header} from 'semantic-ui-react';


class App extends Component {
  render() {
    return (
      <Container>

        <Header size="medium">Список дел:</Header>
        <TodoList></TodoList>
      </Container>
        
    );
  }
}

export default App;
