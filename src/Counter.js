import React from 'react';
import {connect} from 'react-redux';
import {increment} from './actions/counterAction';
import {decrement} from './actions/counterAction';

class Counter extends React.Component {

  handleAdd = () => {
    this.props.dispatch(increment())
  }

  handleSubtract = () => {
    this.props.dispatch(decrement())
  }

  render(){
    return(
      <div>
        <span>count is : {this.props.count}</span>
        <button onClick={this.handleSubtract}>-</button>
        <button onClick={this.handleAdd}>+</button>
      </div>
    );
  }
}   
//export default Counter;
const mapStateToProps = (state) => {
  return {
    count: state.mycounter.count,
  }
}

export default connect(mapStateToProps)(Counter);

