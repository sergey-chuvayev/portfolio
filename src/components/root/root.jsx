// @flow
import React from 'react';

interface IState {
  num: number;
}
interface IProps {}

class Root extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = { num: 5 }
  }
  render() {
    return(
      <div>
        {this.state.num + 5}
      </div>
    )
  }
};

export default Root;
