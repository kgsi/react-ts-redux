import React from "react";
import { Header } from "semantic-ui-react";

import { connect } from "react-redux";
import { CounterState } from "../../reducer";

interface StateProps {
  count: number;
}
const mapStateToProps = (state: CounterState): StateProps => ({
  count: state.count
});

const Display: React.FC<StateProps> = ({ count }) => {
  return (
    <>
      <Header as="h1">{count}</Header>
    </>
  );
};

export default connect(mapStateToProps)(Display);
