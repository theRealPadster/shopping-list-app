import React from 'react';
import Product from './Product';
import ShoppingList from './ShoppingList';
import ShoppingListItem from '../classes/ShoppingListItem';
// import ReactDOM from 'react-dom';

export default class CategoryList extends React.Component {

  productClickHandler = (product) => {
    let existingItem = this.state.shoppingList.get(product.props.name);
    if (existingItem) {
      existingItem.quantity++;
      this.state.shoppingList.set(product.props.name, existingItem);
    } else {
      this.state.shoppingList.set(product.props.name,
        new ShoppingListItem(
          product.props.name, 1
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

  shoppingListNoteClickHandler = (name, note) => {
    console.log(name, note);
    let existingItem = this.state.shoppingList.get(name);
    if (existingItem) {
      existingItem.note = note;
      this.state.shoppingList.set(name, existingItem);
    } else {
      this.state.shoppingList.set(name,
        new ShoppingListItem(
          name, 1, note,
        ));
    }
    // Update the state of the shopping list (parent)
    this.setState({
      ...this.state,
    }, () => {
      console.log(this.state.shoppingList);
    });
  }

  shoppingListRemoveClickHandler = (name) => {
    console.log(`deleting: ${name}`);
    this.state.shoppingList.delete(name);
    // Update the state of the shopping list (parent)
    this.setState({
      ...this.state,
    }, () => {
      console.log(this.state.shoppingList);
    });
  }

  categoryClickHandler = (categoryIndex) => {
    // Update the state of the category list (parent)
    this.setState({
      ...this.state,
      value: categoryIndex,
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
        <ShoppingList noteClickHandler={this.shoppingListNoteClickHandler}
          removeClickHandler={this.shoppingListRemoveClickHandler}>
          {Array.from(this.state.shoppingList.values())}
        </ShoppingList>
      </div>
    );
  }
}

