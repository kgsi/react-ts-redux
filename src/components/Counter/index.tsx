import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { add, decrement, increment } from "../../actions/counter";
import { CounterState } from "../../reducer";

import { Button } from "semantic-ui-react";

interface StateProps {
  count: number;
}

interface DispatchProps {
  add: (amount: number) => void;
  decrement: () => void;
  increment: () => void;
}

const mapStateToProps = (state: CounterState): StateProps => ({
  count: state.count
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  add: amount => dispatch(add(amount)),
  decrement: () => dispatch(decrement()),
  increment: () => dispatch(increment())
});

export interface CounterProps {
  add?: (amount: number) => void;
  decrement?: () => void;
  increment?: () => void;
  className?: string;
}

const Counter: React.FC<CounterProps> = ({
  add = () => undefined,
  decrement = () => undefined,
  increment = () => undefined,
  className = undefined
}) => {
  return (
    <div className={className}>
      <Button color="green" onClick={increment}>
        加算（+）
      </Button>
      <Button color="red" onClick={decrement}>
        減算（-）
      </Button>
      <Button color="blue" onClick={() => add(10)}>
        追加（+10）
      </Button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
