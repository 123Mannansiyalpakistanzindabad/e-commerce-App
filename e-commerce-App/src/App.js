import './App.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Header from './containers/header';
import ProductDetail  from './containers/productDetail'
import ProductListing  from './containers/productListing'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import SignUp from './containers/signUp';
import SignIn from './containers/signIn';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' exact Component={Header} />

        <Route path='/signUP' exact Component={SignUp} />
        <Route path='/signIn' exact Component={SignIn} />

        <Route path='/productList' exact Component={ProductListing} />
        <Route path='/product/:productId' exact Component={ProductDetail} />
        <Route>404 NOT FOUND</Route>

        </Routes>
      </Router>
    

    </div>
  );
}

export default App;
 