import React from "react";
import { Card, Header } from "semantic-ui-react";
import "./App.css";

import Counter from "./components/Counter";
import Display from "./components/Display";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="ui center one column grid">
        <div className="column">
          <Header as="h1">React / TypeScript / Redux</Header>
        </div>
      </div>
      <div className="ui centered two column grid">
        <Card className="column">
          <Card.Content>
            <Display />
          </Card.Content>
          <Card.Content extra>
            <Counter className="ui three buttons" />
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default App;
