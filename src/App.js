import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter} from 'react-router-dom';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import Routing from './Routing';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
      <Provider store={store}>
      <Navbar/>
      <Routing/>
     
      </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
