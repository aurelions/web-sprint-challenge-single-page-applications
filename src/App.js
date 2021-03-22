import React, { useState } from "react";
import {Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import Home from "./Components/home"
import Shop from "./Components/Forms/Shop"


// Set initial form values here

// const [form, setForm] = useState({
//   name: '',
//   email: '',
//   size: '',
//   pepperoni: '',
//   olive: '',
//   greenpepper: '',
//   sausage: '',
//   spec: '',
// })


const App = () => {
  return (
    <>
    <Router>
      <div className="App">

        {/* <Shop /> */}

         <Switch>

          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />

        </Switch> 
      </div>
      </Router>
    </>
  );
};

export default App
