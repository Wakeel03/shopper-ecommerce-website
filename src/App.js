import './App.css';
import Header from './components/Header/Header.jsx'
import Carousel from './components/Carousel/Carousel.jsx'
import ProductSection from './components/ProductSection/ProductSection.jsx'
import Paypal from './components/PayPal/Paypal'
import Cart from './components/Cart/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { login , logout, selectUser } from './redux/userSlice'

import { auth } from './firebase'
import UserAuth from './components/UserAuth/UserAuth';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }else{
        dispatch(logout())
      }
    })
    return unsubscribe
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <UserAuth />
        </Route>
        <Route exact path="/home">
          {user ?
            <div className="app">
              <Header />
              <Carousel />
              <ProductSection />
            </div>
            :
            <Redirect to="/"/>
          }
        </Route>
        <Route exact path="/cart">
          {user ?  
            <div className="app">
              <Header />
              <Cart />
            </div>
            :
            <Redirect to="/" />
          }
        </Route>
        <Route exact path="/checkout">
          {user ?  
            <div className="app">
              <Paypal />
            </div>
            :
            <Redirect to="/" />
          }
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
