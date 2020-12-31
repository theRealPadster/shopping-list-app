import logo from './logo.svg';
import Category from './components/Category';
import CategoryList from './components/CategoryList';
import './App.css';
import categories from './assets/products.json';
// const csv = require('csvtojson');
// import csv from 'csvtojson';

function App() {

  // TODO: figure out how to get csv loading working in browser
  // (using JSON file currently, but that's not as easy to edit)
  // csv().fromFile('./assets/products.csv')
  // .then(data => {

  // });

  let Categories = categories.map((category, index) => (
    <Category name={category.name} items={category.items} key={index}></Category>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='App-name'>Shopping List App</h1>
      </header>

      <CategoryList>
        {Categories}
      </CategoryList>

    </div>
  );
}

export default App;
