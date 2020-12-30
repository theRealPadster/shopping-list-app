import React from 'react';
import Product from './components/Product';
// import ReactDOM from 'react-dom';

export default class CategoryList extends React.Component {

  clickHandler = (someArg) => {
    // Update the state of the category list (parent)
    this.setState({
      value: someArg,
    }, () => {
      console.log(this.state.value);
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      value: null,
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
          clickHandler: this.clickHandler,
          index: i,
          selected: i === this.state.value,
        });
      }
    );

    // All of the items of the children, so it can draw them in another list
    const allChildItems = updateChildrenWithProps.map((category, index) =>
      category.props.items.map((item, itemIndex) => (
        <li data-category-index={index} key={`${index}-${itemIndex}`}>{item}</li>
      ))
    );

    return (
      <div className='wrapper'>
        <ul className='category-list'>
          {updateChildrenWithProps}
        </ul>
        <ul>
          {allChildItems}
        </ul>
      </div>
    );
  }
}

