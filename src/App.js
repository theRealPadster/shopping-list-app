import logo from './logo.svg';
import Category from './components/Category';
import CategoryList from './components/CategoryList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='App-name'>Shopping List App</h1>
      </header>

      <CategoryList>
        <Category name="Produce" items={["Apples","Carrots","Pears"]}></Category>
        <Category name="Desserts" items={["Ice cream","Pie","Custard"]}></Category>
      </CategoryList>

    </div>
  );
}

export default App;
