import React from 'react';
import Product from './Product';
import ShoppingList from './ShoppingList';
import ShoppingListItem from '../classes/ShoppingListItem';
// import ReactDOM from 'react-dom';

export default class CategoryList extends React.Component {

  productClickHandler = (someArg) => {
    let existingItem = this.state.shoppingList.get(someArg.props.name);
    if (existingItem) {
      existingItem.quantity++;
      this.state.shoppingList.set(someArg.props.name, existingItem);
    } else {
      this.state.shoppingList.set(someArg.props.name,
        new ShoppingListItem(
          someArg.props.name, 1
        ));
    }
    // Update the state of the shopping list (parent)
    this.setState({
      ...this.state,
      // shoppingList: updatedList,
    }, () => {
      console.log(this.state.shoppingList);
    });
  }

  shoppingListClickHandler = (someArg) => {
    console.log(someArg);
    // let existingItem = this.state.shoppingList.get(someArg.props.name);
    // if (existingItem) {
    //   existingItem.quantity++;
    //   this.state.shoppingList.set(someArg.props.name, existingItem);
    // } else {
    //   this.state.shoppingList.set(someArg.props.name,
    //     new ShoppingListItem(
    //       someArg.props.name, 1
    //     ));
    // }
    // // Update the state of the shopping list (parent)
    // this.setState({
    //   ...this.state,
    //   // shoppingList: updatedList,
    // }, () => {
    //   console.log(this.state.shoppingList);
    // });
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
      shoppingList: new Map(),
    };
  }

  render() {

    // on render, update the child props to include if they are selected or not
    // https://reactgo.com/react-pass-props-children/
    const updatedCategories = React.Children.map(
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
    const allProducts = updatedCategories.map((category, index) =>
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
          {updatedCategories}
        </ul>
        <ul className='product-list'>
          {allProducts}
        </ul>
        <ShoppingList clickHandler={this.shoppingListClickHandler}>
          {Array.from(this.state.shoppingList.values())}
        </ShoppingList>
      </div>
    );
  }
}

