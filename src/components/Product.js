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

    // const listItems = this.props.items.map((item, index) =>
    //   <li key={index}>{item}</li>
    // );

    let className = 'product';
    if (this.props.visible) {
      className += ' visible';
    }

    // console.log(`--- category ${this.props.index}: ${this.props.selected} ---`)

    return (
      <li className={className}
        data-category-index={this.props.categoryIndex}
        data-item-index={this.props.itemIndex}
        key={this.props.itemIndex}
        onClick={() => clickHandler(this.props.name)}>
        {this.props.name}
      </li>
    );
  }
}
