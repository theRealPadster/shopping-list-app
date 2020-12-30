import logo from './logo.svg';
import Category from './components/Category';
import CategoryList from './components/CategoryList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="shoppinglist-wrapper">
        <div className="column">
          <CategoryList>
            <Category name="Produce" items={["Apples","Carrots","Pears"]}></Category>
            <Category name="Desserts" items={["Ice cream","Pie","Custard"]}></Category>
          </CategoryList>
        </div>
        <div className="column">

        </div>
        <div className="column">

        </div>
      </div>
    </div>
  );
}

export default App;
