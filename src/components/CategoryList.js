import React from 'react';
import Product from './Product';
import ShoppingList from './ShoppingList';
// import ReactDOM from 'react-dom';

export default class CategoryList extends React.Component {

  productClickHandler = (someArg) => {
    // Update the state of the shopping list (parent)
    this.state.shoppingList.push(someArg);
    // this.setState({
    //   ...this.state,
    //   shoppingList
    // }, () => {
    //   console.log(this.state.value);
    // });
    console.log(this.state.shoppingList);
  }

  categoryClickHandler = (someArg) => {
    // Update the state of the category list (parent)
    this.setState({
      ...this.state,
      value: someArg,
    }, () => {
      console.log(this.state.value);
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      value: null,
      shoppingList: [],
    };
  }

  render() {

    // on render, update the child props to include if they are selected or not
    // https://reactgo.com/react-pass-props-children/
    const updateChildrenWithProps = React.Children.map(
      this.props.children,
      (child, i) => {
        return React.cloneElement(child, {
          // these properties are available as a props in child components
          clickHandler: this.categoryClickHandler,
          index: i,
          selected: i === this.state.value,
        });
      }
    );

    // All of the items of the children, so it can draw them in another list
    const allChildItems = updateChildrenWithProps.map((category, index) =>
      category.props.items.map((item, itemIndex) => (
        <Product name={item}
          categoryIndex={index}
          itemIndex={itemIndex}
          key={`${index}-${itemIndex}`}
          clickHandler={this.productClickHandler}
          visible={index === this.state.value}></Product>
      ))
    );

    return (
      <div className='wrapper'>
        <ul className='category-list'>
          {updateChildrenWithProps}
        </ul>
        <ul className='product-list'>
          {allChildItems}
        </ul>
        <ShoppingList></ShoppingList>
      </div>
    );
  }
}

