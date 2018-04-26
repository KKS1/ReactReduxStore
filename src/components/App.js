import React from 'react';
import Counter from '../containers/Counter';
import AddCounter from '../containers/AddCounter';
import RemoveCounter from '../containers/RemoveCounter';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CounterActions from '../actions';

const App = (props) => {
  return (
    <div className="container">
      <Counter count={props.count}></Counter><br />
      <div className="columns">
        <div className="column is-11">
          <AddCounter add={props.actions.addCounter}></AddCounter>
        </div>
        <div className="column auto">
          <RemoveCounter remove={props.actions.removeCounter}></RemoveCounter>
        </div>
      </div>
      </div>
  )
}

function mapStateToProps(state, ownProps){
  return {
    count: state.counterReducer
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(CounterActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
