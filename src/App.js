import logo from './logo.svg';
import {useSelector, useDispatch} from 'react-redux';
import {increment,decrement,login, addToDataList} from './actions';
import DataForm from './components/dataform'
import './App.css';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const list = useSelector(state => state.dataList);
  const listItems = list.map((listitem, idx) => {
    return <li key={idx}>{listitem}</li>;
  });
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement(2))}>-</button>
      <button onClick={() => dispatch(login())}>Sign in</button>
      {isLogged ? <h3>Sensitive info</h3> : ''}
      <br/>
      <DataForm/>
      <ul>{listItems}</ul>
    </div>
  );
}

export default App;
