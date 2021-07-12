import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import Component1 from './components/Component1';
import user from './reducers/user';
import bankAccount from './reducers/bankAccount';
import './App.css';

const reducers = combineReducers({
  user,
  bankAccount,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>What is Redux</h1>
        <Component1 />
      </div>
    </Provider>
  );
}

export default App;
