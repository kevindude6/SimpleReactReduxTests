import logo from './logo.svg';
import {useSelector, useDispatch} from 'react-redux';
import {increment,decrement,login} from './actions';
import './App.css';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement(2))}>-</button>
      <button onClick={() => dispatch(login())}>Sign in</button>
      {isLogged ? <h3>Sensitive info</h3> : ''}
    </div>
  );
}

export default App;
