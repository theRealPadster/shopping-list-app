import React from 'react';
// import ReactDOM from 'react-dom';

export default class Category extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // checked: false,
  //   };
  // }

  render() {

    let clickHandler = this.props.clickHandler;

    let className = 'category';
    if (this.props.selected) {
      className += ' checked';
    }

    // console.log(`--- category ${this.props.index}: ${this.props.selected} ---`)

    return (
      <li className={className}
        key={this.props.name}
        onClick={() => clickHandler(this.props.index)}>
        {this.props.name}
      </li>
    );
  }
}
