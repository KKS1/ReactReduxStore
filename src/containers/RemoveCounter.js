import React, { Component } from 'react';

class RemoveCounter extends Component {
  constructor(props) {
    super(props);
  }
   render() {
     return (
           <div className="container">
            <form>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-primary" onClick={(e) => {e.preventDefault();this.props.remove()}}>Remove</button>
                </div>
              </div>
            </form>
            </div>
     )
   }
}

export default RemoveCounter;
