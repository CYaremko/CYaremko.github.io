import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const initialO = calculateO(); // Calculate initial value of o

  const [o, setO] = useState(initialO);

  return (
    <div className="App">
      <header className="App-header">
        <ShoppingList />
        <MakeO setO={setO} />
        <MyButton o={o} />
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
    </div>
  );
}

function calculateO() {
  let o = 0;

  for (let i = 0; i < 5; i++) {
    o++;
  }

  return o;
}

function MyButton({ o }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    let updates = 0;

    for (let i = 0; i < 5; i++) {
      updates += o;
    }

    setCount((prevCount) => prevCount + updates);
  }

  return <button onClick={handleClick}>I'm a button {count}</button>;
}

function MakeO({ setO }) {
  let o = 0;

  for (let i = 0; i < 5; i++) {
    o++;
  }

  // Call the setO function to update the state in the parent component (App)
  setO(o);

  return <p>{o}</p>;
}

  function ShoppingList() {
    const products = [
      { title: 'Cabbage', isFruit: false, id: 1 },
      { title: 'Garlic', isFruit: false, id: 2 },
      { title: 'Apple', isFruit: true, id: 3 },
    ];

  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

export default App;