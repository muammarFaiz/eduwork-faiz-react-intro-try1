import React from 'react';
import PropTypes from 'prop-types';


export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {condition: 0};
    this.add = this.add.bind(this);
    this.minus = this.minus.bind(this);
  }
  add() {
    this.setState({condition: this.state.condition + 1});
  }
  minus() {
    if(this.state.condition > 0) {
      this.setState({condition: this.state.condition - 1});
    }
  }
  render() {
    return (
      <div>
        <h1>Hello {this.props.nama}</h1>
        <button onClick={this.minus}>-</button>
        <span> {this.state.condition} </span>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
}
ClassComponent.defaultProps = {
  nama: 'user'
}
ClassComponent.propTypes = {
  nama: PropTypes.string.isRequired
}
