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
        <span className='shopping-list__title'>{item.name} - {item.quantity}</span>
        {item.note ? <span className='shopping-list__note'>{item.note}</span> : ''}
        <button onClick={() => clickHandler(item.name, 'some note')}>Add note</button>
      </li>
    ));

    return (
      <ul className='shopping-list'>
        {items}
      </ul>
    );
  }
}
