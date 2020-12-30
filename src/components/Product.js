import React from 'react';
// import ReactDOM from 'react-dom';

export default class Product extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // checked: false,
  //   };
  // }

  render() {

    let clickHandler = this.props.clickHandler;


    const listItems = this.props.items.map((item, index) =>
      <li key={index}>{item}</li>
    );

    let className = 'category';
    if (this.props.selected) {
      className += ' checked';
    }

    // console.log(`--- category ${this.props.index}: ${this.props.selected} ---`)

    return (
      <li className={className} key={this.props.name} onClick={() => clickHandler(this.props.index)}>
        {this.props.name}
        <ul>
          {listItems}
        </ul>
      </li>
    );
  }
}
