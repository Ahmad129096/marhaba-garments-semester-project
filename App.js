import React,{useEffect} from 'react';


import Webserviceone from './Component/Home/Webserviceone';
import Structure from './Component/Home/Structure'
 import Pagefooter from './Component/Home/Pagefooter'
 import TrackSuits from './Component/Men/TrackSuits'
 import Trousers from './Component/Men/Trousers'
 import Hoods from './Component/Men/Hoods'
 import Sweats from './Component/Men/Sweats'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import Login from './Login'
import Checkout from './Checkout'
import {auth} from './Firebase'
import {useStateValue} from './StateProvider'

// import Hoods from './Component/Men/Hoods'
function App() {
  
    const [{loggedinuser}, dispatch] = useStateValue();

    useEffect(() =>{
     const unsubcribe = auth.onAuthStateChanged((userauth) => {
        if(userauth){
          dispatch({
            type: 'SET_LOGIN',
            user: userauth
          })
        }
        else{
          dispatch({
            type: 'SET_LOGIN',
            user: null
          })
        }
      })
      return () =>{
        unsubcribe();
      }
    },[])

  return(

   <Router>
   
         <Switch>
           <Route path = "/checkout">
           <Webserviceone />
           <Checkout />
           <Pagefooter />
           </Route>
           <Route path ="/login" >
             <Login />
           </Route>
           <Route exact path ="/" component ={Structure}>
             <Webserviceone />
             <Structure />
             <Pagefooter />
           </Route>
           
           <Route exact path ="/Men/Hoods" component ={Hoods}>
           <Webserviceone />
           <Hoods />
           <Pagefooter />
           </Route>

           <Route exact path ="/Men/Trousers" component ={Trousers}>
           <Webserviceone />
           <Trousers />
           <Pagefooter />
           </Route>

           <Route exact path ="/Men/Sweats" component ={Sweats}>
           <Webserviceone />
           <Sweats />
           <Pagefooter />
           </Route>

           <Route exact path ="/Men/Track-Suits" component ={TrackSuits}>
           <Webserviceone />
           <TrackSuits />
           <Pagefooter />
           </Route>
  
          </Switch>
   </Router>
     
  
   
    );
  }


export default App;