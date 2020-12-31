import React from 'react';

// import ReactDOM from 'react-dom';

export default class ShoppingList extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items: [],
  //   };
  // }

  render() {

    let clickHandler = this.props.clickHandler;

    // let className = 'category';
    // if (this.props.selected) {
    //   className += ' checked';
    // }

    let items = this.props.children.map((item, itemIndex) => (
      <li key={itemIndex}>
        <span>{item.name} - {item.quantity}</span>
        <button onClick={() => clickHandler(item)}>Add note</button>
      </li>
    ));

    return (
      <ul className='shopping-list'>
        {items}
      </ul>
    );
  }
}
